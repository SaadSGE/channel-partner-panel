<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Branch;
use App\Models\Country;

class BranchSeeder extends Seeder
{
    public function run()
    {
        $branches = [
            ['name' => 'New York Branch', 'country_id' => 1],
            ['name' => 'Los Angeles Branch', 'country_id' => 1],
            ['name' => 'London Branch', 'country_id' => 2],
            ['name' => 'Tokyo Branch', 'country_id' => 3],
            ['name' => 'Sydney Branch', 'country_id' => 4],
            ['name' => 'Berlin Branch', 'country_id' => 5],
        ];

        foreach ($branches as $branch) {
            Branch::create($branch);
        }
    }
}
