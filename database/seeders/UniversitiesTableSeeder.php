<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class UniversitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('universities')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $universities = [
            ['country_id' => 1, 'name' => 'Anglia Ruskin University', 'logo' => 'logo_url', 'address' => 'Texas'],
            ['country_id' => 1, 'name' => 'University of Cambridge', 'logo' => 'logo_url', 'address' => 'Cambridge, UK'],
            ['country_id' => 1, 'name' => 'University of Oxford', 'logo' => 'logo_url', 'address' => 'Oxford, UK'],
            ['country_id' => 1, 'name' => 'Imperial College London', 'logo' => 'logo_url', 'address' => 'London, UK'],
            ['country_id' => 1, 'name' => 'London School of Economics', 'logo' => 'logo_url', 'address' => 'London, UK'],
            // Add more universities here from the sampled data
        ];

        DB::table('universities')->insert($universities);
    }
}
