<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    protected $fillable = ['content', 'status'];

    protected $casts = [
        'status' => 'boolean'
    ];
}
