<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Models\User;

class CreatePermissionSeeder extends Seeder
{
    public function run(): void
    {
        //
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        Permission::truncate();


        DB::statement('SET FOREIGN_KEY_CHECKS=1');
        // Define permissions
        $permissions = [
            'application.create', 'application.edit', 'application.read', 'application.delete',
            'record.create', 'record.edit', 'record.read', 'record.delete',
            'dashboard.read','dashboard.create', 'dashboard.filter',
            'application.status','application.comment','application.university_communication',
            'user.create', 'user.edit', 'user.read', 'user.delete',
            'email.create', 'email.edit', 'email.read', 'email.delete',
            'user.filter'


        ];

        // Create permissions
        foreach ($permissions as $permissionName) {
            Permission::create(['name' => $permissionName,'guard_name' => 'api']);
        }



    }
}
