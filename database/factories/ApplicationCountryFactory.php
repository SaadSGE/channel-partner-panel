<?php

namespace Database\Factories;

use App\Models\ApplicationCountry;
use Illuminate\Database\Eloquent\Factories\Factory;

class ApplicationCountryFactory extends Factory
{
    protected $model = ApplicationCountry::class;

    public function definition()
    {
        return [
            'name' => $this->faker->country,
        ];
    }
}
