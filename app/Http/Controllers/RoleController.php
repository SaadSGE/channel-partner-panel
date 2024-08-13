<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use DB;

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
                    ];
                }

                if (in_array($action, ['read', 'edit', 'create', 'delete'])) {
                    $permissionsMap[$base][$action] = true;
                } else {
                    $permissionsMap[$base]['custom_permissions'][$action] = true;
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
            if ($request->id) {
                // Find the role by ID
                $role = Role::find($request->id);

                if (!$role) {
                    return response()->json(['errors' => ['Role not found']], 404);
                }

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

            // Logout all users associated with this role
            $users = $role->users;
            foreach ($users as $user) {
                $user->tokens()->delete(); // Revoke all tokens for this user
            }

            // Commit the transaction
            DB::commit();

            return response()->json(['message' => 'Role saved and permissions assigned successfully, users logged out', 'role' => $role], 201);
        } catch (\Exception $e) {
            // Rollback the transaction on error
            DB::rollback();

            return response()->json(['errors' => ['An unexpected error occurred']], 500);
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