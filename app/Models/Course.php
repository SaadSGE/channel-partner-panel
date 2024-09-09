<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $connection;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        // Use 'mysql_africa' connection in non-testing environments, otherwise, use the default connection
        $this->connection = app()->environment('testing') ? null : 'mysql_africa';
    }

}
