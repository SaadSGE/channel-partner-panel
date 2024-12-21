<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $appends = ['full_name', 'student_name_with_email', 'university_intake_course_country'];

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function document()
    {
        return $this->hasMany(StudentDocument::class, 'student_id');
    }

    public function educationalHistories()
    {
        return $this->hasMany(StudentEducationalHistory::class, 'student_id');
    }

    public function employmentHistories()
    {
        return $this->hasMany(StudentEmploymentHistory::class, 'student_id');
    }

    public function englishProficiency()
    {
        return $this->hasOne(StudentEnglishProficiency::class, 'student_id');
    }

    public function interestedUniversities()
    {
        return $this->hasMany(StudentInterestedUniversity::class, 'student_id');
    }

    public function getFullNameAttribute(): string
    {
        return trim("{$this->first_name} {$this->last_name}");
    }

    public function getUniversityIntakeCourseCountryAttribute(): array
    {
        return $this->interestedUniversities->map(function ($choice) {
            return $choice->course->name . ' | ' .
                $choice->intake->name . ' | ' .
                $choice->university->name . ' | ' .
                $choice->country->name;
        })->toArray();
    }

    public function getDocumentZipLinkAttribute($value)
    {
        return "https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/" . $value;
    }

    public function getStudentNameWithEmailAttribute(): string
    {
        return "{$this->first_name} {$this->last_name} <{$this->email}>";
    }

    public function counsellor()
    {
        return $this->belongsTo(User::class, 'counsellor_id');
    }

    public function profileStatus()
    {
        return $this->hasOne(StudentProfileStatus::class, 'student_id');
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (auth('api')->check()) {
                $model->created_by = auth('api')->id();
            } else {
                $model->created_by = 2;
            }
        });
    }

    public function lead()
    {
        return $this->belongsTo(Lead::class, 'lead_id');
    }
}
