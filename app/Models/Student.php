<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $appends = ['full_name', 'student_name_with_email'];

    // Add this relationship
    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function document()
    {
        return $this->hasMany(StudentDocument::class, 'student_id');
    }

    public function getFullNameAttribute(): string
    {
        return trim("{$this->first_name} {$this->last_name}");
    }
    public function getDocumentZipLinkAttribute($value)
    {
        return "https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/".$value;

    }

    public function getStudentNameWithEmailAttribute(): string
    {
        return "{$this->first_name} {$this->last_name} <{$this->email}>";
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (auth('api')->check()) {
                $model->created_by = auth('api')->id();
            }
        });
    }
}
