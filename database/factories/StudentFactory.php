<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class StudentFactory extends Factory
{
    protected $model = Student::class;

    public function definition()
    {
        return [
            'student_id' => $this->faker->unique()->regexify('[A-Z]{2}[0-9]{8}'),
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'passport_no' => $this->faker->unique()->regexify('[A-Z]{2}[0-9]{7}'),
            'date_of_birth' => $this->faker->date,
            'whatsapp_number' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
            'address' => $this->faker->address,
            'city' => $this->faker->city,
            'country' => $this->faker->country,
            'region' => $this->faker->state,
            'state' => $this->faker->state,
            'gender' => $this->faker->randomElement(['male', 'female']),
            'visa_refusal' => $this->faker->randomElement(['yes', 'no']),
        ];
    }
}
