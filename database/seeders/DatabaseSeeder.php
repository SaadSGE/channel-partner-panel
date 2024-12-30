<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\NewPermissionSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call([
            //UserSeeder::class,
           // LeadSeeder::class,
            //LeadNotesTableSeeder::class,
           // LeadStatusSeeder::class,
           NewPermissionSeeder::class,
        ]);


    }
}
