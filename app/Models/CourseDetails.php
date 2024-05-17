<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseDetails extends Model
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
}
