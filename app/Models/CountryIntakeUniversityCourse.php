<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class CountryIntakeUniversityCourse extends Model
{
    //use HasFactory;
    protected $connection = 'mysql_africa';
    protected $table = 'country_intake_course_university_map_view';

    public function getUniversityLogoAttribute($value)
    {
        return "https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/".$value;

    }
}
