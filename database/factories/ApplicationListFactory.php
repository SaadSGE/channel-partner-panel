<?php

namespace Database\Factories;

use App\Models\ApplicationList;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ApplicationListFactory extends Factory
{
    protected $model = ApplicationList::class;

    public function definition()
    {
        return [
            'application_id' => Str::random(10), // Generate a random application ID
            'course_id' => \App\Models\Course::factory(),
            'country_id' => \App\Models\ApplicationCountry::factory(),
            'intake_id' => \App\Models\Intake::factory(),
            'university_id' => \App\Models\University::factory(),
            'course_details_id' => \App\Models\CourseDetails::factory(),
            'user_id' => \App\Models\User::factory(),
            'student_id' => \App\Models\Student::factory(),
            'counsellor_number' => $this->faker->phoneNumber,
            'counsellor_email' => $this->faker->safeEmail,
            'status' => 1,
        ];
    }
}
