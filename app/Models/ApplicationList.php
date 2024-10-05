<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;

class ApplicationList extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];

    protected $casts = [
        'course_id' => 'integer',
        'country_id' => 'integer',
        'intake_id' => 'integer',
        'university_id' => 'integer',
        'course_details_id' => 'integer',
        'user_id' => 'integer',
        'student_id' => 'integer',
        'status' => 'integer',
    ];

    // Define status constants
    public const STATUS_APPLICATION_PROCESSING = 0;
    public const STATUS_APPLICATION_SUBMITTED = 1;
    public const STATUS_PENDING_DOCS = 2;
    public const STATUS_OFFER_ISSUE_CONDITIONAL = 3;
    public const STATUS_OFFER_ISSUE_UNCONDITIONAL = 4;
    public const STATUS_NEED_PAYMENT = 5;
    public const STATUS_CAS_ISSUED = 6;
    public const STATUS_ADDITIONAL_DOC_NEEDED = 7;
    public const STATUS_REFUND_REQUIRED = 8;
    public const STATUS_APPLICATION_REJECTED = 9;
    public const STATUS_SESSION_EXPIRED = 10;
    public const STATUS_DOC_RECEIVED = 11;
    public const STATUS_PARTIAL_PAYMENT = 12;

    // Status mappings
    public static $statusTexts = [
        self::STATUS_APPLICATION_PROCESSING => 'Application Processing',
        self::STATUS_APPLICATION_SUBMITTED => 'Application Submitted',
        self::STATUS_PENDING_DOCS => 'Pending Docs',
        self::STATUS_OFFER_ISSUE_CONDITIONAL => 'Offer Issue Conditional',
        self::STATUS_OFFER_ISSUE_UNCONDITIONAL => 'Offer Issue Unconditional',
        self::STATUS_NEED_PAYMENT => 'Need Payment',
        self::STATUS_CAS_ISSUED => 'CAS Issued',
        self::STATUS_ADDITIONAL_DOC_NEEDED => 'Additional Doc Needed',
        self::STATUS_REFUND_REQUIRED => 'Refund Required',
        self::STATUS_APPLICATION_REJECTED => 'Application Rejected',
        self::STATUS_SESSION_EXPIRED => 'Session Expired',
        self::STATUS_DOC_RECEIVED => 'Doc Received',
        self::STATUS_PARTIAL_PAYMENT => 'Partial Payment (number input)',
    ];

    // Accessor for status text
    public function getStatusTextAttribute()
    {
        return self::$statusTexts[$this->status] ?? 'Unknown Status';
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function country()
    {
        return $this->belongsTo(ApplicationCountry::class);
    }

    public function intake()
    {
        return $this->belongsTo(Intake::class);
    }

    public function university()
    {
        return $this->belongsTo(University::class);
    }

    public function courseDetails()
    {
        return $this->belongsTo(CourseDetails::class);
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y H:i');
    }

    public function applicationDocument()
    {
        return $this->hasMany(ApplicationDocument::class, 'application_id');
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {

            if (auth('api')->check()) {
                $model->created_by = auth('api')->user()->id;
                $model->channel_partner = auth('api')->user()->id;
                $model->application_control_officer = auth('api')->user()->parent->id;
            }
        });
    }

    public function getCreatedByAttribute($value)
    {
        return $value;
    }
    public function comments()
    {
        return $this->hasMany(ApplicationCommentHistory::class, 'application_id');
    }
    public function universityCommunications()
    {
        return $this->hasMany(UniversityCommunication::class, 'application_id');
    }

    public function scopeVisibleToUser($query, User $user, $id = null): void
    {
        if ($user->hasRole('admin')) {
            if ($id) {
                $selectedUser = User::find($id);
                $childIds = $selectedUser ? $selectedUser->fetch_children : [];
                $userIds = array_merge([$id], $childIds);
                $query->whereIn('created_by', $userIds);
            }
            // For admins, don't add any further restrictions if no $id is provided
        } else {
            if ($id) {
                $selectedUser = User::find($id);
            } else {
                $selectedUser = $user;
            }

            $childIds = $selectedUser ? $selectedUser->fetch_children : [];
            $userIds = array_merge([$selectedUser->id], $childIds);

            $query->where(function ($q) use ($userIds, $user) {
                if (!empty($userIds)) {
                    $q->whereIn('created_by', $userIds);
                }
                $q->orWhereHas('applicationOfficerAssignments', function ($subQ) use ($user) {
                    $subQ->where('user_id', $user->id)->where('status', 'accepted');
                });
                $q->orWhereHas('complianceOfficerAssignments', function ($subQ) use ($user) {
                    $subQ->where('user_id', $user->id)->where('status', 'accepted');
                });
            });
        }
    }

    // Add this relationship
    public function applicationOfficerAssignments()
    {
        return $this->hasMany(ApplicationOfficerAssignment::class, 'application_id');
    }

    public function applicationOfficers()
    {
        return $this->belongsToMany(User::class, 'application_officer_assignments', 'application_id', 'user_id')
                    ->withPivot('status')
                    ->withTimestamps();
    }

    // Add these relationships
    public function complianceOfficerAssignments()
    {
        return $this->hasMany(ComplianceOfficerAssignment::class, 'application_id');
    }

    public function complianceOfficers()
    {
        return $this->belongsToMany(User::class, 'compliance_officer_assignments', 'application_id', 'user_id')
                    ->withPivot('status')
                    ->withTimestamps();
    }
}
