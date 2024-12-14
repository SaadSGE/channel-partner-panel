<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LeadStatus extends Model
{
    //
    protected $guarded = [];
    public function leads()
    {
        return $this->hasMany(Lead::class);
    }
}
