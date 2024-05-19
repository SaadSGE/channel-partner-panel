<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class CoursesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('courses')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $courses = [
            ['type' => 'Undergraduate', 'name' => 'BSC (HONS) Sport Coaching and Physical Education'],
            ['type' => 'Undergraduate', 'name' => 'Physical Education, Coaching and Sport Development BSc'],
            ['type' => 'Undergraduate', 'name' => 'Marketing BA (Hons) - Sandwich'],
            ['type' => 'Postgraduate', 'name' => 'Music MA'],
            ['type' => 'Undergraduate', 'name' => 'BSC (HONS) Business with Economics [with Placement year]'],
            // Add more courses here if any
        ];

        DB::table('courses')->insert($courses);
    }
}
