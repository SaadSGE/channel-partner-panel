<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentInterestedUniversity extends Model
{
    //
    protected $guarded = [];

    public function university()
    {
        return $this->belongsTo(University::class, 'university_id');
    }

    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }

    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    public function intake()
    {
        return $this->belongsTo(Intake::class, 'intake_id');
    }
}
