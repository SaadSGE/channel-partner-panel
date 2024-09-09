<?php

namespace Database\Factories;

use App\Models\University;
use App\Models\ApplicationCountry; // Import the related model
use Illuminate\Database\Eloquent\Factories\Factory;

class UniversityFactory extends Factory
{
    protected $model = University::class;

    public function definition()
    {
        return [
            'name' => $this->faker->company,
            'logo' => $this->faker->imageUrl(100, 100, 'education'),
            'address' => $this->faker->address,
            'country_id' => ApplicationCountry::factory(), // Create a related country and use its id
        ];
    }
}
