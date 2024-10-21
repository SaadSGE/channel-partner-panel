<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use DB;
use Log;
use App\Models\User;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::with(['permissions', 'users'])->get();

        $transformedRoles = $roles->map(function ($role) {
            $permissionsMap = [];

            foreach ($role->permissions as $permission) {
                list($base, $action) = explode('.', $permission->name);

                if (!isset($permissionsMap[$base])) {
                    $permissionsMap[$base] = [
                        'name' => $base,
                        'read' => false,
                        'edit' => false,
                        'create' => false,
                        'delete' => false,
                        'custom_permissions' => [],
                        'custom' => false,
                    ];
                }

                if (in_array($action, ['read', 'edit', 'create', 'delete'])) {
                    $permissionsMap[$base][$action] = true;
                } else {
                    $permissionsMap[$base]['custom_permissions'][$action] = true;
                    $permissionsMap[$base]['custom'] = true;
                }
            }

            // Set 'custom' to false if there are no custom permissions
            foreach ($permissionsMap as &$permission) {
                if (empty($permission['custom_permissions'])) {
                    $permission['custom'] = false;
                }
            }

            return [
                'id' => $role->id,
                'role' => $role->name,
                'details' => [
                    'name' => $role->name,
                    'permissions' => array_values($permissionsMap),
                    'user_count' => $role->users->count(),
                ]
            ];
        });

        return $this->successJsonResponse('Roles found', $transformedRoles);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $validated = $request->validate([
            'id' => 'nullable|integer|exists:roles,id',
            'name' => 'required|string|unique:roles,name,' . $request->id,
            'permissions' => 'required|array',
        ]);

        // Start a transaction
        DB::beginTransaction();

        try {
            $role = null;
            $oldRoleName = null;

            if ($request->id) {
                // Find the role by ID
                $role = Role::find($request->id);

                if (!$role) {
                    return $this->errorJsonResponse('Role not found', [], 404);
                }

                // Store the old role name for updating users later
                $oldRoleName = $role->name;

                // Update the role name if changed
                $role->name = $validated['name'];
                $role->save();

                // Detach all current permissions
                $role->syncPermissions([]);
            } else {
                // Create the new role
                $role = Role::create(['name' => $validated['name']]);
            }

            // Attach permissions to the role
            foreach ($validated['permissions'] as $permission) {
                foreach (['read', 'create', 'edit', 'delete'] as $action) {
                    if ($permission[$action]) {
                        $role->givePermissionTo("{$permission['name']}.{$action}");
                    }
                }

                // Handle custom permissions
                if (isset($permission['custom_permissions'])) {
                    foreach ($permission['custom_permissions'] as $customPermission => $enabled) {
                        if ($enabled) {
                            $role->givePermissionTo("{$permission['name']}.{$customPermission}");
                        }
                    }
                }
            }

            // Update the role name in users table if the role name was changed
            if ($oldRoleName && $oldRoleName !== $validated['name']) {
                User::where('role', $oldRoleName)
                    ->update(['role' => $validated['name']]);
            }

            // Logout all users associated with this role
            $users = $role->users;
            foreach ($users as $user) {
                $user->tokens()->delete(); // Revoke all tokens for this user
            }

            // Commit the transaction
            DB::commit();

            return $this->successJsonResponse('Role saved and permissions assigned successfully, users logged out', $role, '', 201);
        } catch (\Exception $e) {
            // Rollback the transaction on error
            DB::rollback();

            // Log the error
            \Log::error('Error saving role and assigning permissions:', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return $this->exceptionJsonResponse($e);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
