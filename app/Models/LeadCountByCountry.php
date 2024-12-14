<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LeadCountByCountry extends Model
{
    protected $table = 'lead_count_by_country';

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
