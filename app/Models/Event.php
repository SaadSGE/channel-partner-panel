<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    //
    protected $guarded = [];

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (auth('api')->check()) {
                $user = auth('api')->user();
                $model->created_by = $user->id;
            } else {
                // Log or handle the case where the user is not authenticated
                \Log::warning('User not authenticated when creating an Event.');
            }
        });
    }
}
