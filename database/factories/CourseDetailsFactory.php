<?php

namespace Database\Factories;

use App\Models\CourseDetails;
use App\Models\Course;
use App\Models\ApplicationCountry;
use App\Models\Intake;
use App\Models\University;
use Illuminate\Database\Eloquent\Factories\Factory;

class CourseDetailsFactory extends Factory
{
    protected $model = CourseDetails::class;

    public function definition()
    {
        return [
            'course_id' => Course::factory(),
            'country_id' => ApplicationCountry::factory(),
            'intake_id' => Intake::factory(),
            'university_id' => University::factory(),
            'tuition_fee' => $this->faker->numberBetween(10000, 50000) . ' USD',
            'course_duration' => $this->faker->numberBetween(1, 4) . ' years',
            'academic_requirement' => $this->faker->paragraph,
            'english_requirement' => $this->faker->paragraph,
        ];
    }
}
