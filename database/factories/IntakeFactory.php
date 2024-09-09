<?php

namespace Database\Factories;

use App\Models\Intake;
use Illuminate\Database\Eloquent\Factories\Factory;

class IntakeFactory extends Factory
{
    protected $model = Intake::class;

    public function definition()
    {
        return [
            'name' => $this->faker->monthName . ' ' . $this->faker->year,
        ];
    }
}
