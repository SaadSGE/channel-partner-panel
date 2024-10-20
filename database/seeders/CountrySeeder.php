<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;

class CountrySeeder extends Seeder
{
    public function run()
    {
        $countries = [
            ['name' => 'United States', 'timezone' => 'America/New_York'],
            ['name' => 'United Kingdom', 'timezone' => 'Europe/London'],
            ['name' => 'Japan', 'timezone' => 'Asia/Tokyo'],
            ['name' => 'Australia', 'timezone' => 'Australia/Sydney'],
            ['name' => 'Germany', 'timezone' => 'Europe/Berlin'],
        ];

        foreach ($countries as $country) {
            Country::create($country);
        }
    }
}
