<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseDetails extends Model
{
    use HasFactory;

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

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            // Ensure the user is authenticated
            if (auth('api')->check()) {
                $model->created_by = auth('api')->user()->id;
            }
        });
    }

    public function getCreatedByAttribute($value)
    {
        return $value;
    }
}
