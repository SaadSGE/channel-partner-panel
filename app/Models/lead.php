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
        return $this->hasMany(LeadStatusTrack::class, 'lead_id')->orderBy('created_at', 'desc');
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
    public function scopeVisibleToUser($query, User $user, $id = null)
    {
        // If user has both read and all permissions, don't restrict the query
        if ($user->hasPermissionTo('lead.read', 'api') && $user->hasPermissionTo('lead.create', 'api')) {
            return;
        }
        //TO DO: check if user has permission to manager note
        if ($user->hasPermissionTo('lead.edit', 'api')) {
            $chilId = $user->fetchChildren;
            $query->whereIn('assigned_user', $chilId);
            return;
        }
        if ($user->hasPermissionTo('lead.read', 'api')) {
            $query->where('assigned_user', $user->id);
        }
    }
}
