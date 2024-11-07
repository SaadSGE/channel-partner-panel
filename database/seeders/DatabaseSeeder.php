<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call([
<<<<<<< HEAD

            //CountrySeeder::class,
            //BranchSeeder::class,
            StudentCompleteSeeder::class,
=======
            //UserSeeder::class,
            LeadSeeder::class,
>>>>>>> e7c36e1e37aedf22e91e68ed030a10e4600703ed
        ]);


    }
}
