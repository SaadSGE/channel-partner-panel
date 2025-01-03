<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
class ApplicationStatusHistory extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $appends = ['status_text'];



    public function applicationStatus()
    {
        return $this->belongsTo(ApplicationStatusList::class, 'status', 'id');
    }

    // Accessor for status text
    public function getStatusTextAttribute()
    {
        if($this->applicationStatus){
            return $this->applicationStatus->name;
        }
        return 'N/A';
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y H:i');
    }

    public function getDocumentAttribute($value)
    {
        if ($value) {
            return "https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/" . $value;
        }
        return null;
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            // Ensure the user is authenticated
            if (auth('api')->check()) {
                $model->created_by = auth('api')->user()->id;
            }
        });
    }

    public function getCreatedByAttribute($value)
    {
        return $value;
    }
}
