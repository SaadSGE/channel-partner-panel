<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class ApplicationCommentHistory extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $appends = ['comment_with_user'];
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {

            if (auth('api')->check()) {
                $model->comment_by = auth('api')->user()->id;
            }
        });
    }

    public function getCommentByAttribute($value)
    {
        return $value;
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'comment_by');
    }

    // Accessor for the full name
    public function getUserNameAttribute()
    {
        return $this->user ? $this->user->first_name . ' ' . $this->user->last_name : 'Unknown User';
    }
    public function getCommentWithUserAttribute()
    {
        return $this->comment . ' <br> By ' . ($this->user ? $this->user->first_name . ' ' . $this->user->last_name : 'Unknown User');
    }
    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y H:i');
    }
}
