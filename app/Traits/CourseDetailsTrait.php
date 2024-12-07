<?php

namespace App\Traits;

use App\Models\UniqueCountryIntakeView;
use App\Models\UniqueCountryIntakeCourseTypeView;
use App\Models\UniqueCountryIntakeCourseUniversityView;
use App\Models\CountryIntakeUniversityCourse;
use Exception;

trait CourseDetailsTrait
{
    public function fetchUniqueCountries()
    {
        return UniqueCountryIntakeView::distinct()->select('country_id as id', 'country_name as name')->get();
    }

    public function fetchIntakesByCountry($id)
    {
        return UniqueCountryIntakeView::where('country_id', $id)->get(['intake_id', 'intake_name']);
    }

    public function fetchCourseTypesByCountryIntake($countryId, $intakeId)
    {
        $courseType =  UniqueCountryIntakeCourseTypeView::where('country_id', $countryId)
            ->where('intake_id', $intakeId)
            ->get(['course_type']);
        //map course_type to name
        return $courseType->map(function ($item) {
            $item->name = $item->course_type;
            $item->id = $item->course_type;
            return $item;
        });
    }

    public function fetchUniversitiesByCountryIntakeCourseType($countryId, $intakeId, $courseType)
    {
        return UniqueCountryIntakeCourseUniversityView::where('country_id', $countryId)
            ->where('intake_id', $intakeId)
            ->where('course_type', $courseType)
            ->get(['university_id', 'university_name', 'university_logo', 'university_address']);
    }

    public function fetchCourseDetails($intakeId, $universityId, $courseType)
    {
        return CountryIntakeUniversityCourse::where('intake_id', $intakeId)
            ->where('university_id', $universityId)
            ->where('course_type', $courseType)
            ->get([
                'id',
                'course_id',
                'course_name',
                'tution_fee',
                'course_duration',
                'academic_requirement',
                'english_requirement'
            ]);
    }
}
