<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class CourseDetails extends Model
{
    use HasFactory;
    protected $connection;
    protected $guarded = [];
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        // Use 'mysql_africa' connection in non-testing environments, otherwise, use the default connection
        $this->connection = app()->environment('testing') ? null : 'mysql_africa';
    }
    protected static function booted()
    {
        static::created(function () {
            Cache::forget('course_details_all2');
        });

        static::updated(function () {
            Cache::forget('course_details_all2');
        });

        static::deleted(function () {
            Cache::forget('course_details_all2');
        });
    }

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
