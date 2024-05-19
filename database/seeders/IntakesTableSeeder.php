<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class IntakesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('intakes')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $intakes = [
            ['name' => 'September/October 2024'],
            // Add more unique intakes here if any
        ];

        DB::table('intakes')->insert($intakes);
    }
}
