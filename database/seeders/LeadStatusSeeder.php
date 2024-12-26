<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class LeadStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = [
            [
                'id' => 1,
                'name' => 'Initial',
                'description' => 'Initial contact with the user.',
                'color_code' => '#D3D3D3',
                'health_rating' => 1,
            ],
            [
                'id' => 2,
                'name' => 'No response',
                'description' => 'User did not respond to contact.',
                'color_code' => '#FF0000',
                'health_rating' => 1,
            ],
            [
                'id' => 3,
                'name' => 'User is in crowded place & couldn\'t understand speaking',
                'description' => 'User is unable to communicate due to noise.',
                'color_code' => '#FFA500',
                'health_rating' => 2,
            ],
            [
                'id' => 4,
                'name' => 'User isn\'t interested at this moment',
                'description' => 'User expressed no interest at the current time.',
                'color_code' => '#808080',
                'health_rating' => 1,
            ],
            [
                'id' => 5,
                'name' => 'Number off',
                'description' => 'User\'s contact number is switched off.',
                'color_code' => '#FF4500',
                'health_rating' => 1,
            ],
            [
                'id' => 6,
                'name' => 'Not interested',
                'description' => 'User is not interested.',
                'color_code' => '#B22222',
                'health_rating' => 1,
            ],
            [
                'id' => 7,
                'name' => 'Hons running, user is not interested for current intake',
                'description' => 'User is currently pursuing studies and is unavailable.',
                'color_code' => '#FFA07A',
                'health_rating' => 2,
            ],
            [
                'id' => 8,
                'name' => 'User is not interested for given country',
                'description' => 'User prefers a different country.',
                'color_code' => '#6A5ACD',
                'health_rating' => 2,
            ],
            [
                'id' => 9,
                'name' => 'Unreached Number',
                'description' => 'Could not reach the user via contact number.',
                'color_code' => '#708090',
                'health_rating' => 1,
            ],
            [
                'id' => 10,
                'name' => 'User registered for knowing details but user isn\'t ready',
                'description' => 'User showed initial interest but is not prepared.',
                'color_code' => '#4682B4',
                'health_rating' => 3,
            ],
            // Add more statuses as needed, following the same structure
        ];

        foreach ($statuses as $status) {
            DB::table('lead_statuses')->insert([
                'id' => $status['id'],
                'name' => $status['name'],
                'description' => $status['description'],
                'color_code' => $status['color_code'],
                'is_active' => true,
                'health_rating' => $status['health_rating'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
