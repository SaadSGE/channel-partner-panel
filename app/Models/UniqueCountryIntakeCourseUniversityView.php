<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UniqueCountryIntakeCourseUniversityView extends Model
{
    use HasFactory;
    protected $table = "unique_country_intake_course_university_view";


    public function getUniversityLogoAttribute($value)
    {
        if (!$value) {
            return null;
        }

        $doUrl = config('filesystems.disks.do.url', env('DO_URL'));
        return $doUrl . $value;
    }
}
