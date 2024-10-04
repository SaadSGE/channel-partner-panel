<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicationOfficerAssignment extends Model
{
    use HasFactory;

    protected $fillable = [
        'application_id',
        'user_id',
        'status',
        'created_by',
    ];

    protected $casts = [
        'application_id' => 'integer',
        'user_id' => 'integer',
        'created_by' => 'integer',
    ];

    public function application()
    {
        return $this->belongsTo(ApplicationList::class, 'application_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
