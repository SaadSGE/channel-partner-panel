<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Lead;
use App\Models\User;
use Carbon\Carbon;

class LeadNote extends Model
{
    //
    protected $guarded = [];
    protected $appends = ['formatted_created_by'];


    public function lead()
    {
        return $this->belongsTo(Lead::class);
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }



    //write a mutator for following format: (created_by.name) on 2024-11-12 10:10:10
    public function getFormattedCreatedByAttribute()
    {
        return $this->creator->first_name . ' ' . $this->creator->last_name . ' on ' . Carbon::parse($this->created_at)->format('Y-m-d H:i:s');
    }

}
