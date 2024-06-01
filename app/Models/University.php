<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function country()
    {
        return $this->belongsTo(ApplicationCountry::class);
    }

    public function getLogoAttribute($value)
    {
        return env('DO_URL').$value;
    }

}
