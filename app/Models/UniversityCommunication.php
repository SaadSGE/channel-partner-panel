<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class UniversityCommunication extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function getUserNameAttribute()
    {
        return $this->user ? $this->user->first_name . ' ' . $this->user->last_name : 'Unknown User';
    }
    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y H:i');
    }
}
