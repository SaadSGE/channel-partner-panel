<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class CountryIntakeUniversityCourse extends Model
{
    //use HasFactory;
    protected $connection;
    protected $table = 'country_intake_course_university_map_view';

    public function getUniversityLogoAttribute($value)
    {
        return "https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/".$value;

    }
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        // Use 'mysql_africa' connection in non-testing environments, otherwise, use the default connection
        $this->connection = app()->environment('testing') ? null : 'mysql_africa';
    }
}
