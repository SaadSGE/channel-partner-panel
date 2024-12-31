<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\lead as Lead;
use App\Models\User;
use Carbon\Carbon;

class LeadNote extends Model
{
    //
    protected $guarded = [];



    public function lead()
    {
        return $this->belongsTo(Lead::class);
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y h:i A');
    }



    //write a mutator for following format: (created_by.name) on 2024-11-12 10:10:10


    public function toArray()
    {
        return [
            'id' => $this->id,
            'lead_id' => $this->lead_id,
            'note' => $this->note,
            'created_by' => $this->creator->full_name,
            'created_at' => $this->created_at,
        ];
    }
}
