<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class lead extends Model
{
    //
    protected $guarded = [];
    public function branch()
    {
        return $this->belongsTo(Branch::class, 'assigned_branch');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'assigned_user');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function notes()
    {
        return $this->hasMany(LeadNote::class);
    }
    public function assignedUser()
    {
        return $this->belongsTo(User::class, 'assigned_user');
    }
    public function status()
    {
        return $this->belongsTo(LeadStatus::class, 'status');
    }

    public function statusDetails()
    {
        return $this->belongsTo(LeadStatus::class, 'status');
    }

    public function statusHistory()
    {
        return $this->hasMany(LeadStatusTrack::class, 'lead_id');
    }

    public function student()
    {
        return $this->hasOne(Student::class, 'lead_id');
    }
    public function leadCountry()
    {
        return $this->belongsTo(Country::class, 'lead_country_id');
    }
    public function leadEvent()
    {
        return $this->belongsTo(Event::class, 'lead_event_id');
    }
    public function scopeVisibleToUser($query, User $user, $id = null): void
    {
        if ($user->hasRole('Counsellor')) {
            $query->where('assigned_user', $user->id);
        }

    }
}
