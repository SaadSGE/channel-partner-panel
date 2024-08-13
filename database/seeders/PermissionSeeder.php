<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Models\User;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // Truncate the tables
        Permission::truncate();
        Role::truncate();


        // Enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
        // Define permissions
        $permissions = [
            'application.create', 'application.edit', 'application.read', 'application.delete',
            'record.create', 'record.edit', 'record.read', 'record.delete',
            'dashboard.read','dashboard.create',
            'application.status','application.comment','application.university_communication'

        ];

        // Create permissions
        foreach ($permissions as $permissionName) {
            Permission::create(['name' => $permissionName]);
        }

        $adminRole = Role::create(['name' => 'admin']);
        $adminRole->givePermissionTo(['application.create', 'application.edit', 'application.read', 'application.delete','record.create', 'record.edit', 'record.read', 'record.delete',
        'dashboard.read','dashboard.create','application.status','application.comment','application.university_communication']);

        $channelPartnerRole = Role::create(['name' => 'channel partner']);
        $channelPartnerRole->givePermissionTo(['application.create', 'application.edit', 'application.read', 'application.delete','dashboard.read','application.status','application.comment','application.university_communication']);

        $dataEntryOperatorRole = Role::create(['name' => 'editor']);
        $dataEntryOperatorRole->givePermissionTo(['record.create', 'record.edit', 'record.read', 'record.delete','dashboard.read']);

        $users = User::all();
        foreach($users as $user) {
            if($user->role == 'admin') {
                $user->assignRole($adminRole);
            }
            if($user->role == 'channel partner') {
                $user->assignRole($channelPartnerRole);
            }
            if($user->role == 'editor') {
                $user->assignRole($dataEntryOperatorRole);
            }
        }

    }
}
