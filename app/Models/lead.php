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


}
