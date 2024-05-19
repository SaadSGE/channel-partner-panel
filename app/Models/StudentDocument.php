<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class StudentDocument extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function getPathAttribute($value)
    {
        if (!$value) {
            return null;
        }
        return Storage::disk('public')->url($value);
    }
}
