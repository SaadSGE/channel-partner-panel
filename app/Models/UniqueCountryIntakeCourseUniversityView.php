<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UniqueCountryIntakeCourseUniversityView extends Model
{
    use HasFactory;
    protected $table = "unique_country_intake_course_university_view";
    protected $connection;
    protected $guarded = [];
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        // Use 'mysql_africa' connection in non-testing environments, otherwise, use the default connection
        $this->connection = app()->environment('testing') ? null : 'mysql_africa';
    }

    public function getUniversityLogoAttribute($value)
    {
        if (!$value) {
            return null;
        }

        $doUrl = getImageUrl();
        return $doUrl . $value;
    }
}
