<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApplicationStatusList extends Model
{
    //
    protected $guarded = [];

    public function application()
    {
        return $this->belongsTo(ApplicationList::class);
    }
}
