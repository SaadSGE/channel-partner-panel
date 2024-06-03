<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $roles = [
            'Admin',
            'Channel Partner',
            'Data Entry Operator',
        ];

        // Create roles
        foreach ($roles as $roleName) {
            Role::create(['name' => $roleName]);
        }
    }
}
