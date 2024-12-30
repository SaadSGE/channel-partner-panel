<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class NewPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'application.create',
            'application.edit',
            'application.read',
            'application.delete',
            'record.create',
            'record.edit',
            'record.read',
            'record.delete',
            'dashboard.read',
            'dashboard.create',
            'dashboard.filter',
            'application.status',
            'application.comment',
            'application.university_communication',
            'user.create',
            'user.edit',
            'user.read',
            'user.delete',
            'email.create',
            'email.edit',
            'email.read',
            'email.delete',
            'user.filter',
            'course-request.read',
            'course-request.create',
            'course-request.edit',
            'course-request.delete',
            'application-request.read',
            'application-request.create',
            'application-request.edit',
            'application-request.delete',
            'application-officer.assign',
            'aco-ao-communication.enable',
            'compliance-request.read',
            'compliance-request.create',
            'compliance-request.edit',
            'compliance-request.delete',
            'aco-co-communication.enable',
            'application.application-control-officer-view',
            'compliance-officer.assign',
            'course-request-list.enable',
            'lead.create',
            'lead.read',
            'lead.edit',
            'lead.delete',
            'notice.create',
            'notice.read',
            'notice.edit',
            'notice.delete',
            'student.create',
            'student.read',
            'student.edit',
            'student.delete',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'api']);
        }
    }
}
