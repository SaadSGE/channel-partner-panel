<?php

namespace App\Http\Controllers;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

use Illuminate\Http\Request;

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
                ];
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
            ];
        }

        if ($action == 'read') {
            $permissionsMap[$base]['read'] = true;
        } elseif ($action == 'edit') {
            $permissionsMap[$base]['edit'] = true;
        } elseif ($action == 'create') {
            $permissionsMap[$base]['create'] = true;
        } elseif ($action == 'delete') {
            $permissionsMap[$base]['delete'] = true;
        }

        return $permissionsMap;
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
