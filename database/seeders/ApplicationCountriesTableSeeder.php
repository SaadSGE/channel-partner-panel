<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class ApplicationCountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('application_countries')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $countries = [
            ['name' => 'UK'],
            // Add more unique countries here if any
        ];

        DB::table('application_countries')->insert($countries);
    }
}
