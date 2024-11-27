<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

use function Symfony\Component\String\b;

class User extends Authenticatable
{
    use HasFactory;
    use Notifiable;
    use HasApiTokens;
    use HasRoles;

    protected $guarded = [];

    protected $appends = ['full_name', 'record_count','name_with_email','company_name_with_email'];

    protected $hidden = [
        'password',
        'remember_token',
    ];

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

    public function getNameWithEmailAttribute(): string
    {
        return trim("{$this->first_name} {$this->last_name} ({$this->email})");
    }

    public function getCompanyNameWithEmailAttribute(): string
    {
        return trim("{$this->company_name} ({$this->email})");
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
            case 'editor':
                return $this->courses()->count();
            default:
                return $this->getChildrenApplicationsCount();
        }
    }
    //test comment

    private function getChildrenApplicationsCount(): int
    {
        $childIds = $this->fetch_children;
        return ApplicationList::whereIn('created_by', $childIds)->count();
    }

    private function getChildrenCoursesCount(): int
    {
        $childIds = $this->fetch_children;
        return CourseDetails::whereIn('created_by', $childIds)->count();
    }

    protected function getChannelPartnerDashboard(): array
    {
        $dashboard = [
            'application_processing' => $this->applications()
                ->where('status', ApplicationList::STATUS_APPLICATION_PROCESSING)
                ->count(),
            'application_submitted' => $this->applications()
                ->where('status', ApplicationList::STATUS_APPLICATION_SUBMITTED)
                ->count(),
            'pending_docs' => $this->applications()
                ->where('status', ApplicationList::STATUS_PENDING_DOCS)
                ->count(),
            'offer_issue_conditional' => $this->applications()
                ->where('status', ApplicationList::STATUS_OFFER_ISSUE_CONDITIONAL)
                ->count(),
            'offer_issue_unconditional' => $this->applications()
                ->where('status', ApplicationList::STATUS_OFFER_ISSUE_UNCONDITIONAL)
                ->count(),
            'need_payment' => $this->applications()
                ->where('status', ApplicationList::STATUS_NEED_PAYMENT)
                ->count(),
            'cas_issued' => $this->applications()
                ->where('status', ApplicationList::STATUS_CAS_ISSUED)
                ->count(),
            'additional_doc_needed' => $this->applications()
                ->where('status', ApplicationList::STATUS_ADDITIONAL_DOC_NEEDED)
                ->count(),
            'refund_required' => $this->applications()
                ->where('status', ApplicationList::STATUS_REFUND_REQUIRED)
                ->count(),
            'application_rejected' => $this->applications()
                ->where('status', ApplicationList::STATUS_APPLICATION_REJECTED)
                ->count(),
            'session_expired' => $this->applications()
                ->where('status', ApplicationList::STATUS_SESSION_EXPIRED)
                ->count(),
            'doc_received' => $this->applications()
                ->where('status', ApplicationList::STATUS_DOC_RECEIVED)
                ->count(),
            'partial_payment' => $this->applications()
                ->where('status', ApplicationList::STATUS_PARTIAL_PAYMENT)
                ->count(),
        ];

        // Calculate the total and prepend it to the dashboard array
        $dashboardWithTotalFirst = array_merge(['total' => array_sum($dashboard)], $dashboard);

        return $dashboardWithTotalFirst;
    }
    public function getBranchNameAttribute(): string
    {
        return $this->branch->name ?? 'No Branch';
    }

    protected function getEditorDashboard(): array
    {
        // Count total courses for the editor
        $totalCourses = $this->courses()->count();

        return [
            'total_data_entry' => $totalCourses,

        ];
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class)->withDefault('No Branch');
    }

    public function parent()
    {
        return $this->belongsTo(User::class);
    }
    public function documents(): HasMany
    {
        return $this->hasMany(ChannelPartnerDocument::class);
    }

    public function scopeFilterByRole($query)
    {
        if (auth('api')->check()) {
            $user = auth('api')->user();
            if ($user->hasRole('admin')) {
                return $query;
            } else {
                return $query->where('parent_id', $user->id); // Return child users for other roles
            }
        }

        return $query; // Default to returning all users if no authenticated user (optional, depending on your use case)
    }

    public function getFetchChildrenAttribute(): array
    {
        $childIds = DB::table('user_children')
            ->where('user_id', $this->id)
            ->value('child_ids');

        if (!$childIds) {
            return [];
        }

        $childIdArray = explode(',', $childIds);
        return $childIdArray;

    }

    public function fetchParent()
    {
        $parentIds = DB::table('user_parents')
            ->where('user_id', $this->id)
            ->value('parent_ids');

        return $parentIds ? explode(',', $parentIds) : [];
    }

    public function applicationOfficerAssignments()
    {
        return $this->hasMany(ApplicationOfficerAssignment::class, 'user_id');
    }
}
