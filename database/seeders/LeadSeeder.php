<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class LeadSeeder extends Seeder
{
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('leads')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $leads = [
            [
                'lead_date' => Carbon::now()->subDays(5),
                'branch' => 'London Branch',
                'email' => 'john.doe@example.com',
                'name' => 'John Doe',
                'phone' => '+44 20 1234 5678',
                'interested_course' => 'BSc Computer Science',
                'interested_country' => 'United Kingdom',
                'ielts_or_english_test' => 'IELTS 7.0',
                'source' => 'Website',
                'status' => 1, // New Lead
                'notes' => 'Interested in September intake',

                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'created_by' => 2,
            ],
            [
                'lead_date' => Carbon::now()->subDays(3),
                'branch' => 'New York Branch',
                'email' => 'sarah.smith@example.com',
                'name' => 'Sarah Smith',
                'phone' => '+1 212 555 0123',
                'interested_course' => 'MSc Business Analytics',
                'interested_country' => 'United States',
                'ielts_or_english_test' => 'TOEFL 95',
                'source' => 'Agent Referral',
                'status' => 2, // In Progress
                'notes' => 'Following up on documentation requirements',

                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'created_by' => 2,
            ],
            [
                'lead_date' => Carbon::now()->subDays(1),
                'branch' => 'Sydney Branch',
                'email' => 'michael.wong@example.com',
                'name' => 'Michael Wong',
                'phone' => '+61 2 9876 5432',
                'interested_course' => 'Bachelor of Engineering',
                'interested_country' => 'Australia',
                'ielts_or_english_test' => 'PTE 65',
                'source' => 'Education Fair',
                'status' => 3, // Converted
                'notes' => 'Application submitted to university',

                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'created_by' => 2,
            ],
            [
                'lead_date' => Carbon::now(),
                'branch' => 'Tokyo Branch',
                'email' => 'yuki.tanaka@example.com',
                'name' => 'Yuki Tanaka',
                'phone' => '+81 3 1234 5678',
                'interested_course' => 'MA Digital Arts',
                'interested_country' => 'Japan',
                'ielts_or_english_test' => 'IELTS 6.5',
                'source' => 'Social Media',
                'status' => 1, // New Lead
                'notes' => 'Requesting more information about accommodation',

                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'created_by' => 2,
            ],
            [ // Missing comma was here in your code
                'lead_date' => Carbon::now(),
                'branch' => 'Los Angeles Branch',
                'email' => 'john.doe@example.com',
                'name' => 'John Doe',
                'phone' => '+1 213 456 7890',
                'interested_course' => 'Bachelor of Business Administration',
                'interested_country' => 'United States',
                'ielts_or_english_test' => 'TOEFL 100',
                'source' => 'Online Application',
                'status' => 1, // New Lead
                'notes' => 'Initial inquiry about admission process',

                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'created_by' => 2,
            ],
            [
                'lead_date' => Carbon::now(),
                'branch' => 'London Branch',
                'email' => 'emily.chen@example.com',
                'name' => 'Emily Chen',
                'phone' => '+44 20 1234 5678',
                'interested_course' => 'Master of Science in Computer Science',
                'interested_country' => 'United Kingdom',
                'ielts_or_english_test' => 'IELTS 7.0',
                'source' => 'Education Agent',
                'status' => 2, // In Progress
                'notes' => 'Following up on visa application',

                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'created_by' => 2,
            ],
        [
            'lead_date' => Carbon::now(),
            'branch' => 'New York Branch',
            'email' => 'sarah.jones@example.com',
            'name' => 'Sarah Jones',
            'phone' => '+1 212 345 6789',
            'interested_course' => 'Master of Business Administration',
            'interested_country' => 'United States',
            'ielts_or_english_test' => 'TOEFL 105',
            'source' => 'Referral',
            'status' => 1, // New Lead
            'notes' => 'Inquiring about scholarship opportunities',

                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'created_by' => 2,
            ],
        [
            'lead_date' => Carbon::now(),
            'branch' => 'Paris Branch',
            'email' => 'pierre.dupont@example.com',
            'name' => 'Pierre Dupont',
            'phone' => '+33 1 23 45 67 89',
            'interested_course' => 'Bachelor of Fine Arts',
            'interested_country' => 'France',
            'ielts_or_english_test' => 'DELF B2',
            'source' => 'Education Fair',
            'status' => 2, // In Progress
            'notes' => 'Following up on application status',

                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'created_by' => 2,
            ],
            [
            'lead_date' => Carbon::now(),
            'branch' => 'Sydney Branch',
            'email' => 'olivia.watson@example.com',
            'name' => 'Olivia Watson',
            'phone' => '+61 2 1234 5678',
            'interested_course' => 'Master of Engineering',
            'interested_country' => 'Australia',
            'ielts_or_english_test' => 'IELTS 7.5',
            'source' => 'Online Inquiry',
            'status' => 1, // New Lead
            'notes' => 'Requesting information about course structure',

                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'created_by' => 2,
            ],

        ];


        DB::table('leads')->insert($leads);
    }
}
