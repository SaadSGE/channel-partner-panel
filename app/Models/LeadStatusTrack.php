<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class LeadStatusTrack extends Model
{
    //
    protected $guarded = [];
    protected $appends = ['status_name', 'user_name'];

    public function lead()
    {
        return $this->belongsTo(Lead::class);
    }

    public function status()
    {
        return $this->belongsTo(LeadStatus::class, 'status_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function getStatusNameAttribute()
    {
        return $this->status->name;
    }
    public function getUserNameAttribute()
    {
        return $this->user->full_name;
    }
    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y h:i A');
    }

    public function toArray()
    {
        $array = parent::toArray();

        // Return only the necessary columns
        return [
            'id' => $array['id'],
            'status_id' => $array['status_id'],
            'user_id' => $array['user_id'],
            'status_note' => $array['status_note'],
            'lead_id' => $array['lead_id'],
            'created_at' => $array['created_at'],
            'status_name' => $array['status_name'],
            'user_name' => $array['user_name'],
            'status' => [
                'id' => $this->status->id,
                'name' => $this->status->name,
                'color_code' => $this->status->color_code,
            ],
            'user' => [
                'id' => $this->user->id,
                'full_name' => $this->user->full_name,
            ],
        ];
    }
}
