<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory;
    use Notifiable;
    use HasApiTokens;
    use HasRoles;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    // protected $fillable = [
    //     'name',
    //     'email',
    //     'password',
    // ];
    protected $guarded = [];
    protected $appends = ['full_name', 'record_count'];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function getUserAbilitiesAttribute()
    {
        return $this->roles()->with('permissions')
            ->get()
            ->pluck('permissions')
            ->flatten()
            ->pluck('name')
            ->unique()
            ->values()
            ->toArray();
    }
    public function getFullNameAttribute(): string
    {
        return trim("{$this->first_name} {$this->last_name}");
    }
    public function applications()
    {
        return $this->hasMany(ApplicationList::class, 'created_by');
    }

    public function courses()
    {
        return $this->hasMany(CourseDetails::class, 'created_by');
    }
    public function getRecordCountAttribute(): int
    {
        switch ($this->role) {
            case 'channel partner':
                return $this->applications()->count();
            case 'editor':
                return $this->courses()->count();
            default:
                return 0;
        }
    }
}
