<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $fillable = ['name', 'country_id'];
    protected $appends = ['branch_name_with_country'];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function getBranchNameWithCountryAttribute()
    {
        return $this->name . ' ( ' . $this->country->name . ' )';
    }
}
