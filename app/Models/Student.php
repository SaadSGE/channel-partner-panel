<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $appends = ['full_name'];
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
        return getImageUrl().$value;

    }

}
