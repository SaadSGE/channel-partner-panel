<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChannelPartnerDocument extends Model
{
    protected $guarded = [];
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {

            if (auth('api')->check()) {
                $model->created_by = auth('api')->user()->id;
            }
        });
    }

    public function getCreatedByAttribute($value)
    {
        return $value;
    }

    public function getDocumentPathAttribute($value)
    {
        return "https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/".$value;
    }
}
