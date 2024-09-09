<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class University extends Model
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
    public function country()
    {
        return $this->belongsTo(ApplicationCountry::class);
    }

    public function getLogoAttribute($value)
    {
        return "https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/".$value;
    }

}
