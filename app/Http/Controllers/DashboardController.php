<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ApplicationList;
use App\Models\CourseDetails;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        // Get the authenticated user
        $user = auth('api')->user();

        // Determine the dashboard data based on the user's role
        switch ($user->role) {
            case 'admin':
                $dashboard = $this->getAdminDashboard();
                break;

            case 'channel partner':
                $dashboard = $this->getChannelPartnerDashboard($user);
                break;

            case 'editor':
                $dashboard = $this->getEditorDashboard($user);
                break;

            default:
                $dashboard = [];
        }
        return $this->successJsonResponse('Dashboard data retrieved successfully', $dashboard);


    }

    protected function getAdminDashboard(): array
    {

        $totalChannelPartners = User::where('role', 'channel partner')->count();
        $totalEditors = User::where('role', 'editor')->count();


        $totalCourses = CourseDetails::count();


        $applicationsByStatus = ApplicationList::select('status', \DB::raw('count(*) as count'))
            ->groupBy('status')
            ->pluck('count', 'status');

        return [
            'total_channel_partners' => $totalChannelPartners,
            'total_editors' => $totalEditors,
            'total_courses' => $totalCourses,
            'applications_by_status' => [
                'application_processing' => $applicationsByStatus[ApplicationList::STATUS_APPLICATION_PROCESSING] ?? 0,
                'application_submitted' => $applicationsByStatus[ApplicationList::STATUS_APPLICATION_SUBMITTED] ?? 0,
                'pending_docs' => $applicationsByStatus[ApplicationList::STATUS_PENDING_DOCS] ?? 0,
                'offer_issue_conditional' => $applicationsByStatus[ApplicationList::STATUS_OFFER_ISSUE_CONDITIONAL] ?? 0,
                'offer_issue_unconditional' => $applicationsByStatus[ApplicationList::STATUS_OFFER_ISSUE_UNCONDITIONAL] ?? 0,
                'need_payment' => $applicationsByStatus[ApplicationList::STATUS_NEED_PAYMENT] ?? 0,
                'cas_issued' => $applicationsByStatus[ApplicationList::STATUS_CAS_ISSUED] ?? 0,
                'additional_doc_needed' => $applicationsByStatus[ApplicationList::STATUS_ADDITIONAL_DOC_NEEDED] ?? 0,
                'refund_required' => $applicationsByStatus[ApplicationList::STATUS_REFUND_REQUIRED] ?? 0,
                'application_rejected' => $applicationsByStatus[ApplicationList::STATUS_APPLICATION_REJECTED] ?? 0,
                'session_expired' => $applicationsByStatus[ApplicationList::STATUS_SESSION_EXPIRED] ?? 0,
                'doc_received' => $applicationsByStatus[ApplicationList::STATUS_DOC_RECEIVED] ?? 0,
                'partial_payment' => $applicationsByStatus[ApplicationList::STATUS_PARTIAL_PAYMENT] ?? 0,
            ],
        ];
    }


    protected function getChannelPartnerDashboard(User $user): array
    {
        $dashboard = [
            'application_processing' => $user->applications()
                ->where('status', ApplicationList::STATUS_APPLICATION_PROCESSING)
                ->count(),
            'application_submitted' => $user->applications()
                ->where('status', ApplicationList::STATUS_APPLICATION_SUBMITTED)
                ->count(),
            'pending_docs' => $user->applications()
                ->where('status', ApplicationList::STATUS_PENDING_DOCS)
                ->count(),
            'offer_issue_conditional' => $user->applications()
                ->where('status', ApplicationList::STATUS_OFFER_ISSUE_CONDITIONAL)
                ->count(),
            'offer_issue_unconditional' => $user->applications()
                ->where('status', ApplicationList::STATUS_OFFER_ISSUE_UNCONDITIONAL)
                ->count(),
            'need_payment' => $user->applications()
                ->where('status', ApplicationList::STATUS_NEED_PAYMENT)
                ->count(),
            'cas_issued' => $user->applications()
                ->where('status', ApplicationList::STATUS_CAS_ISSUED)
                ->count(),
            'additional_doc_needed' => $user->applications()
                ->where('status', ApplicationList::STATUS_ADDITIONAL_DOC_NEEDED)
                ->count(),
            'refund_required' => $user->applications()
                ->where('status', ApplicationList::STATUS_REFUND_REQUIRED)
                ->count(),
            'application_rejected' => $user->applications()
                ->where('status', ApplicationList::STATUS_APPLICATION_REJECTED)
                ->count(),
            'session_expired' => $user->applications()
                ->where('status', ApplicationList::STATUS_SESSION_EXPIRED)
                ->count(),
            'doc_received' => $user->applications()
                ->where('status', ApplicationList::STATUS_DOC_RECEIVED)
                ->count(),
            'partial_payment' => $user->applications()
                ->where('status', ApplicationList::STATUS_PARTIAL_PAYMENT)
                ->count(),
        ];


        $dashboard['total'] = array_sum($dashboard);

        return [
            'applications_by_status' => $dashboard
        ];
    }

    protected function getEditorDashboard(User $user): array
    {
        // Count total courses for the editor
        $totalCourses = $user->courses()->count();

        return [
            'applications_by_status' => [
                'total_data_entry' => $totalCourses,
            ]

        ];
    }
}
