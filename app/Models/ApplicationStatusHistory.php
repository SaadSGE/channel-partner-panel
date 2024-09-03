<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class ApplicationStatusHistory extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $appends = ['status_text'];

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
        self::STATUS_PARTIAL_PAYMENT => 'Partial Payment',
    ];

    // Accessor for status text
    public function getStatusTextAttribute()
    {
        return self::$statusTexts[$this->status];
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
