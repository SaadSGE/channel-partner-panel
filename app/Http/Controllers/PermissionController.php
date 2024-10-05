<?php

namespace App\Http\Controllers;

use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Spatie\Permission\Models\Role;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    public function index()
    {
        $roleId = request()->query('role_id');

        $permissionsMap = $this->initializePermissionsMap();

        if ($roleId) {
            $role = Role::with('permissions')->find($roleId);
            if (!$role) {
                return $this->errorJsonResponse('Role not found', []);
            }

            foreach ($role->permissions as $permission) {
                $permissionsMap = $this->processPermission($permissionsMap, $permission);
            }
        }

        $permissionsList = array_values($permissionsMap);
        return $this->successJsonResponse('Permissions found', $permissionsList);
    }


    private function initializePermissionsMap()
    {
        $allPermissions = Permission::all();
        $permissionsMap = [];

        foreach ($allPermissions as $permission) {
            list($base, $action) = explode('.', $permission->name);
            if (!isset($permissionsMap[$base])) {
                $permissionsMap[$base] = [
                    'name' => $base,
                    'read' => false,
                    'edit' => false,
                    'create' => false,
                    'delete' => false,
                    'custom_permissions' => []
                ];
            }

            // For custom permissions not part of read/edit/create/delete
            if (!in_array($action, ['read', 'edit', 'create', 'delete'])) {
                $permissionsMap[$base]['custom_permissions'][$action] = false;
            }
        }

        return $permissionsMap;
    }

    private function processPermission($permissionsMap, $permission)
    {
        list($base, $action) = explode('.', $permission->name);

        if (!isset($permissionsMap[$base])) {
            $permissionsMap[$base] = [
                'name' => $base,
                'read' => false,
                'edit' => false,
                'create' => false,
                'delete' => false,
                'custom_permissions' => []
            ];
        }

        if (in_array($action, ['read', 'edit', 'create', 'delete'])) {
            $permissionsMap[$base][$action] = true;
        } else {
            $permissionsMap[$base]['custom_permissions'][$action] = true;
        }

        return $permissionsMap;
    }
    public function indexForPermissionTable(Request $request)
    {

        $perPage = (int) $request->query('perPage', 10);
        $searchQuery = strtoupper(trim($request->query('searchQuery', '')));
        $sortBy = $request->query('sortBy', 'name');
        $orderBy = $request->query('orderBy', 'asc');

        $query = Permission::query();

        $query->when($searchQuery, function ($q) use ($searchQuery) {
            return $q->where(function ($q) use ($searchQuery) {
                $q->where('name', 'LIKE', "%$searchQuery%");
            });
        });

        // Sorting
        $query->orderBy($sortBy, $orderBy);

        // Pagination
        $permissions = $query->paginate($perPage);

        // Log the activity
        $this->logIndexActivity($request, $permissions->total());

        return $this->successJsonResponse("Permissions found", $permissions->items(), $permissions->total());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            $validatedData = $this->validatePermissionData($request);
            $permission = Permission::create([
                'name' => $validatedData['name'],
                'guard_name' => 'api',
            ]);

            $this->logPermissionActivity($request, $permission, 'created');

            DB::commit();

            return $this->successJsonResponse('Permission created successfully', $permission, '', 201);
        } catch (ValidationException $e) {
            DB::rollBack();
            return $this->handleValidationErrors($e);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error($th);
            return $this->exceptionJsonResponse('Failed to create permission', $th);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $permission = Permission::findOrFail($id);
        return $this->successJsonResponse('Permission found', $permission);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();

            $permission = Permission::findOrFail($id);
            $validatedData = $this->validatePermissionData($request, $id);

            $permission->update([
                'name' => $validatedData['name'],
            ]);

            $this->logPermissionActivity($request, $permission, 'updated');

            DB::commit();

            return $this->successJsonResponse('Permission updated successfully', $permission);
        } catch (ValidationException $e) {
            DB::rollBack();
            return $this->handleValidationErrors($e);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error($th);
            return $this->exceptionJsonResponse('Failed to update permission', $th);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            DB::beginTransaction();

            $permission = Permission::findOrFail($id);
            $permission->delete();

            $this->logPermissionActivity($request, $permission, 'deleted');

            DB::commit();

            return $this->successJsonResponse('Permission deleted successfully');
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error($th);
            return $this->exceptionJsonResponse('Failed to delete permission', $th);
        }
    }

    public function allPermission()
    {
        $permissions = Permission::get();
        return $this->successJsonResponse('Permission data found', $permissions);
    }

    private function validatePermissionData(Request $request, $id = null)
    {
        $rules = [
            'name' => 'required|string|max:255|unique:permissions,name' . ($id ? ",$id" : ''),
        ];

        return $request->validate($rules);
    }

    private function logIndexActivity(Request $request, int $totalResults)
    {
        $activityType = 'permission_index_view';
        $properties = [
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'total_results' => $totalResults,
        ];

        if ($request->filled('searchQuery')) {
            $activityType = 'permission_search';
            $properties['search_query'] = $request->query('searchQuery');
        }

        activity()
            ->causedBy(Auth::user())
            ->withProperties($properties)
            ->log($activityType);
    }

    private function logPermissionActivity(Request $request, Permission $permission, string $action)
    {
        activity()
            ->performedOn($permission)
            ->causedBy(Auth::user())
            ->withProperties([
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'permission_name' => $permission->name,
            ])
            ->log("permission_{$action}");
    }
}
