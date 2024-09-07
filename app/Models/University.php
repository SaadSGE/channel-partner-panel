<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    use HasFactory;
    protected $connection = 'mysql_africa';
    protected $guarded = [];
    public function country()
    {
        return $this->belongsTo(ApplicationCountry::class);
    }

    public function getLogoAttribute($value)
    {
        return "https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/".$value;
    }

}
