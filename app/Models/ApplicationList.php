<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ApplicationList extends Model
{
    protected $guarded = [];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
    public function country()
    {
        return $this->belongsTo(ApplicationCountry::class);
    }
    public function intake()
    {
        return $this->belongsTo(Intake::class);
    }

    public function university()
    {
        return $this->belongsTo(University::class);
    }

    public function courseDetails()
    {
        return $this->belongsTo(CourseDetails::class);
    }
    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y H:i');
    }

    public function applicationDocument()
    {
        return $this->hasMany(ApplicationDocument::class, 'application_id');
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }


}
