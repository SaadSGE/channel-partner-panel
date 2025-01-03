<?php

namespace App\Http\Controllers;

use App\Models\ApplicationList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ApplicationDocument;
use App\Models\ApplicationStatusHistory;
use Illuminate\Support\Str;
use App\Models\Student;
use App\Models\StudentDocument;
use Illuminate\Support\Facades\Storage;
use Log;
use App\Models\User;
use App\Services\FileUploadService;
use App\Models\ApplicationCommentHistory;
use App\Models\UniversityCommunication;
use Illuminate\Support\Facades\Notification;
use App\Notifications\NewApplicationNotification;
use App\Notifications\StatusChangedNotification;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use App\Jobs\GenerateStudentDocumentsZip;
use App\Models\CourseDetails;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;
use App\Models\University;
use App\Models\Intake;
use App\Notifications\EmailNotification;
use App\Services\EmailService;
use App\Models\ApplicationOfficerAssignment;
use App\Models\AcoAoCommunication;
use App\Models\ComplianceOfficerAssignment;
use App\Models\AcoCoCommunication;
use App\Services\StudentService;
use App\Notifications\StatusUpdateNotification;
use App\Notifications\CommentAddedNotification;
use App\Notifications\UniversityCommunicationAddedNotification;
use App\Notifications\ApplicationOfficerAssignedNotification;
use App\Notifications\ApplicationRequestAcceptedNotification;
use App\Notifications\ApplicationRequestRejectedNotification;
use App\Notifications\AcoAoCommunicationAddedNotification;
use App\Notifications\ComplianceOfficerAssignedNotification;
use App\Notifications\AcoCoCommunicationAddedNotification;
use App\Notifications\ComplianceRequestAcceptedNotification;
use App\Notifications\ComplianceRequestRejectedNotification;
use App\Events\ApplicationEvent;
use App\Events\UniversityCommunicationEvent;
use App\Events\NewApplicationEvent;
use App\Events\ApplicationOfficerAssignedEvent;
use App\Events\ApplicationRequestAcceptedEvent;
use App\Events\ApplicationRequestRejectedEvent;
use App\Events\AcoAoCommunicationAddedEvent;
use App\Events\ComplianceOfficerAssignedEvent;
use App\Events\AcoCoCommunicationAddedEvent;
use App\Events\ComplianceRequestAcceptedEvent;
use App\Events\ComplianceRequestRejectedEvent;
use App\Services\NotificationService;

class ApplicationController extends Controller
{
    protected $notificationService;

    public function __construct(NotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = auth('api')->user();
        $perPage = (int) $request->query('perPage', 10);
        $searchQuery = strtoupper(trim($request->query('searchQuery', '')));
        $sortBy = $request->query('sortBy', 'created_at');
        $orderBy = $request->query('orderBy', 'desc');

        $id = $request->query('id');
        $query = ApplicationList::with(['course', 'country', 'intake', 'university', 'courseDetails', 'student', 'user.parent:id,first_name,last_name,email'])
            ->visibleToUser($user, $id);

        // Add this line to exclude soft-deleted applications
        if (!$request->query('withTrashed', false)) {
            $query->whereNull('deleted_at');
        }

        $query->when($searchQuery, function ($q) use ($searchQuery) {
            return $q->where(function ($q) use ($searchQuery) {
                $q->where('application_lists.application_id', 'LIKE', "%$searchQuery%")
                    ->orWhereHas('student', function ($q) use ($searchQuery) {
                        $q->where('first_name', 'LIKE', "%$searchQuery%")
                            ->orWhere('last_name', 'LIKE', "%$searchQuery%")
                            ->orWhere('email', 'LIKE', "%$searchQuery%");
                    })
                    ->orWhereHas('user', function ($q) use ($searchQuery) {
                        $q->where('first_name', 'LIKE', "%$searchQuery%")
                            ->orWhere('last_name', 'LIKE', "%$searchQuery%")
                            ->orWhere('email', 'LIKE', "%$searchQuery%");
                    })
                    ->orWhereHas('university', function ($q) use ($searchQuery) {
                        $q->where('name', 'LIKE', "%$searchQuery%");
                    });
            });
        })->when($request->filled('status'), function ($q) use ($request) {
            return $q->where('status', $request->query('status'));
        })->when($request->filled('university'), function ($q) use ($request) {
            return $q->where('university_id', $request->query('university'));
        })->when($request->filled('channelPartner'), function ($q) use ($request) {
            return $q->where('created_by', $request->query('channelPartner'));
        })->when($request->filled('applicationOfficer'), function ($q) use ($request) {
            return $q->whereHas('user', function ($q) use ($request) {
                $q->where('parent_id', $request->query('applicationOfficer'));
            });
        })->when($request->filled('studentEmail'), function ($q) use ($request) {
            return $q->whereHas('student', function ($q) use ($request) {
                $q->where('email', 'LIKE', "%{$request->query('studentEmail')}%");
            });
        })->when($request->filled('dateFrom'), function ($q) use ($request) {
            return $q->whereDate('created_at', '>=', $request->query('dateFrom'));
        })->when($request->filled('dateTo'), function ($q) use ($request) {
            return $q->whereDate('created_at', '<=', $request->query('dateTo'));
        });

        // First order by unread notifications, then by user-specified sort
        $query->orderByUnreadNotifications();

        // Only apply additional sorting if it's not already sorted by notifications
        if ($sortBy !== 'unread_notifications_count') {
            $query->orderBy($sortBy, $orderBy);
        }

        // Pagination
        $applications = $query->paginate($perPage);

        // Transform the response to include unread notification count
        $applications->through(function ($application) {
            $application->unread_notifications_count = $application->unread_notifications_count ?? 0;
            return $application;
        });

        // Log the activity
        $this->logIndexActivity($request, $applications->total());

        return $this->successJsonResponse("Application Information found!", $applications->items(), $applications->total());
    }


    public function store(Request $request, StudentService $studentService)
    {
        try {
            DB::beginTransaction();

            if ($request->filled('student_id')) {
                $student = Student::findOrFail($request->student_id);
                $application = $this->createApplicationForExistingStudent($student, $request);
            } else {
                $validatedData = $this->validateApplicationData($request);
                $student = $studentService->storeGeneralInfo($validatedData);
                $application = $this->createApplication($student, $validatedData);
                $this->handleDocumentUploads($validatedData, $student, $application);
            }

            // Get admin users
            $adminUsers = User::where('role', 'admin')->get();

            // Prepare notification details
            $additionalDetails = [
                'channel_partner_name' => auth('api')->user()->full_name,
                'channel_partner_email' => auth('api')->user()->email,
            ];

            $this->notificationService->notifyRelevantUsers(
                $application,
                $additionalDetails,
                $adminUsers,
                auth('api')->id(),
                auth('api')->user()->full_name,
                auth('api')->user()->email,
                'new_application'
            );

            $this->logApplicationActivity($request, $application, $student);

            DB::commit();
            return $this->successJsonResponse('Application created successfully', $application, '', 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->exceptionJsonResponse('Failed to create application', $e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $applicationDetails = ApplicationList::with(['course','country','intake','university','courseDetails','student.document','comments.user','universityCommunications.user'])->where('application_id', $id)->first();
        if ($applicationDetails) {
            return $this->successJsonResponse("Application Information found!", $applicationDetails);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */

    public function destroy(string $id)
    {
        try {
            DB::beginTransaction();
            //findorfail by application id
            $application = ApplicationList::where('id', $id)->first();
            if (!$application) {
                return $this->exceptionJsonResponse('Application not found', null, 404);
            }

            // Log the application deletion activity before soft deleting it
            activity()
                ->performedOn($application)
                ->causedBy(Auth::user())
                ->withProperties([
                    'ip' => request()->ip(),
                    'user_agent' => request()->userAgent(),
                    'application_id' => $application->application_id,
                    'student_email' => $application->student->email,
                    'university_name' => $application->university->name,
                    'intake_name' => $application->intake->name,
                ])
                ->log('application_soft_deleted');

            $application->delete(); // This now performs a soft delete

            DB::commit();

            return $this->successJsonResponse('Application soft deleted successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Failed to soft delete application', ['error' => $e->getMessage(), 'id' => $id]);

            // Log the failed deletion attempt
            activity()
                ->causedBy(Auth::user())
                ->withProperties([
                    'ip' => request()->ip(),
                    'user_agent' => request()->userAgent(),
                    'attempted_application_id' => $id,
                    'error_message' => $e->getMessage(),
                ])
                ->log('application_soft_deletion_failed');

            return $this->exceptionJsonResponse('Failed to soft delete application', $e);
        }
    }

    public function updateApplicationFile(Request $request)
    {
        $applicationId = (int)$request->application_id;
        $application = ApplicationList::where('application_id', $applicationId)->first();
        if (!$application) {
            return $this->exceptionJsonResponse('Application not found', null, 404);
        }
        $student = $application->student;
        $uploadedDocuments = [];

        if (!empty($request->document_paths)) {
            foreach ($request->document_paths as $path) {
                $filename = basename($path['path']);
                $newPath = 'channelPartnerPanel/studentDocument/' . $student->email . '/' . $student->email . '_' . $filename;
                Storage::disk('do_spaces')->move($path['path'], $newPath);
                $document = StudentDocument::create([
                    'student_id' => $student->id,
                    'application_id' => $application->id,
                    'path' => $newPath
                ]);
                $uploadedDocuments[] = $filename;

                // Log activity for each uploaded document
                activity()
                    ->performedOn($application)
                    ->causedBy(Auth::user())
                    ->withProperties([
                        'ip' => $request->ip(),
                        'user_agent' => $request->userAgent(),
                        'application_id' => $application->application_id,
                        'student_email' => $student->email,
                        'university_name' => $application->university->name,
                        'intake_name' => $application->intake->name,
                        'document_name' => $filename,
                        'document_id' => $document->id,
                    ])
                    ->log('document_upload');
            }
        }

        GenerateStudentDocumentsZip::dispatch($student);

        // Log activity for the overall file update process
        activity()
            ->performedOn($application)
            ->causedBy(Auth::user())
            ->withProperties([
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'application_id' => $application->application_id,
                'student_email' => $student->email,
                'university_name' => $application->university->name,
                'intake_name' => $application->intake->name,
                'uploaded_documents' => $uploadedDocuments,
            ])
            ->log('application_file_update');

        return $this->successJsonResponse('Student File Upload Successfully', $student);
    }

    public function applicationStatuses(Request $request)
    {
        $applicationId = $request->id;
        $application = ApplicationList::where('application_id', $applicationId)->first();
        if (!$application) {
            return $this->exceptionJsonResponse('Application not found', null, 404);
        }
        $applicationStatuses = ApplicationStatusHistory::where('application_id', $application->id)->latest()->get();

        return $this->successJsonResponse('Status found successfully', $applicationStatuses);

    }

    public function getAllApplicationStatuses()
    {


        $statuses = ApplicationStatusHistory::all();
        return $this->successJsonResponse('Status foound', $statuses);
    }

    public function updateStatus(Request $request, $id, EmailService $emailService)
    {
        $validatedData = $request->validate([
            'status' => 'required',
            'comment' => 'nullable',
            'file' => 'nullable|file',
        ]);

        DB::beginTransaction();

        try {
            //findorfail by application id
            $application = ApplicationList::where('application_id', $id)->first();
            if (!$application) {
                return $this->exceptionJsonResponse('Application not found', null, 404);
            }
            $oldStatus = $application->status_text; // Using the accessor for status text
            $application->status = $validatedData['status'];
            $application->save();

            $path = null;
            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $filePath = 'channelPartnerPanel/studentStatusDocument/' . $application->student_id;
                $fileUploadService = new FileUploadService();
                $path = $fileUploadService->upload($filePath, $file);
            }

            $statusHistory = ApplicationStatusHistory::create([
                'application_id' => $application->id,
                'status' => $validatedData['status'],
                'comment' => $validatedData['comment'],
                'document' => $path,
            ]);

            activity()
                ->performedOn($application)
                ->causedBy(Auth::user())
                ->withProperties([
                    'ip' => $request->ip(),
                    'user_agent' => $request->userAgent(),
                    'application_id' => $application->application_id,
                    'student_email' => $application->student->email,
                    'university_name' => $application->university->name,
                    'intake_name' => $application->intake->name,
                    'old_status' => $oldStatus,
                    'new_status' => $application->status_text, // Using the accessor for new status text
                    'comment' => $validatedData['comment'],
                    'document_uploaded' => $path ? true : false,
                    'status_history_id' => $statusHistory->id,
                ])
                ->log('application_status_update');

            DB::commit();

            // Fetch the application creator and admin users
            $userToNotify = $application->user;
            $adminUsers = User::where('role', 'admin')->get();

            // Prepare the notification details
            $additionalDetails = [
                'old_status' => $oldStatus,
                'comment' => $validatedData['comment'],
                'document_uploaded' => $path ? true : false,
                'status_history_id' => $statusHistory->id,
            ];

            $recipients = $adminUsers->push($userToNotify);
            $senderId = auth('api')->user()->id;
            $senderName = auth('api')->user()->full_name;
            $senderEmail = auth('api')->user()->email;

            $this->notificationService->notifyRelevantUsers($application, $additionalDetails, $recipients, $senderId, $senderName, $senderEmail, 'status_update');


            return $this->successJsonResponse('Status updated successfully', $application, '', 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error('Failed to update status', ['error' => $th->getMessage()]);

            // Log the failed status update attempt
            activity()
                ->performedOn($application)
                ->causedBy(Auth::user())
                ->withProperties([
                    'ip' => $request->ip(),
                    'user_agent' => $request->userAgent(),
                    'application_id' => $application->application_id,
                    'student_email' => $application->student->email,
                    'university_name' => $application->university->name,
                    'intake_name' => $application->intake->name,
                    'attempted_status' => ApplicationList::$statusTexts[$validatedData['status']] ?? 'Unknown Status',
                    'error_message' => $th->getMessage(),
                ])
                ->log('application_status_update_failed');

            return $this->exceptionJsonResponse('Failed to update status', $th);
        }
    }

    public function addComment(Request $request, $id)
    {
        try {
            $user = auth('api')->user();
            $request->validate(['comment' => 'required|string']);

            $application = ApplicationList::where('application_id', $id)->firstOrFail();

            $comment = ApplicationCommentHistory::create([
                'application_id' => $application->id,
                'comment' => $request->comment,
                'status' => 0
            ]);

            // Get recipients
            $recipients = collect();
            $adminUsers = User::where('role', 'admin')->get();
            $recipients = $recipients->concat($adminUsers);

            if ($user->role === 'channel partner') {
                $parentIds = $user->fetchParent();
                $parentUsers = User::whereIn('id', $parentIds)->get();
                $recipients = $recipients->concat($parentUsers);
            } else {
                $creator = $application->user;
                $parentIds = $creator->fetchParent();
                $parentUsers = User::whereIn('id', $parentIds)->get();
                $recipients = $recipients->concat($parentUsers)->push($creator);
            }

            $this->notificationService->notifyRelevantUsers(
                $application,
                ['comment' => $comment->comment],
                $recipients,
                $user->id,
                $user->full_name,
                $user->email,
                'comment_added'
            );

            return $this->successJsonResponse('Comment added successfully', $comment);
        } catch (\Exception $e) {
            Log::error('Failed to add comment', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'user_id' => $user->id ?? null,
                'application_id' => $id
            ]);
            return $this->exceptionJsonResponse('Failed to add comment', $e);
        }
    }

    public function getUniversityCommunications($id)
    {
        $application = ApplicationList::where('application_id', $id)->first();
        if (!$application) {
            return $this->exceptionJsonResponse('Application not found', null, 404);
        }
        $communications = UniversityCommunication::where('application_id', $application->id)->with('user')->get();
        return response()->json($communications);
    }

    public function addUniversityCommunication(Request $request, $id)
    {
        try {
            $request->validate([
                'subject' => 'required|string',
                'message' => 'required|string',
            ]);

            $application = ApplicationList::where('application_id', $id)->firstOrFail();

            $communication = UniversityCommunication::create([
                'application_id' => $application->id,
                'subject' => $request->subject,
                'message' => $request->message,
                'created_by' => auth('api')->id()
            ]);

            // Get recipients
            $creator = $application->user;
            $adminUsers = User::where('role', 'admin')->get();
            $recipients = $adminUsers->push($creator);

            $this->notificationService->notifyRelevantUsers(
                $application,
                [
                    'subject' => $request->subject,
                    'message' => $request->message
                ],
                $recipients,
                auth('api')->id(),
                auth('api')->user()->full_name,
                auth('api')->user()->email,
                'university_communication_added'
            );

            return $this->successJsonResponse('Communication added successfully', $communication);
        } catch (\Exception $e) {
            return $this->exceptionJsonResponse('Failed to add communication', $e);
        }
    }

    public function getActivityLogs(Request $request, $id)
    {
        $perPage = $request->input('per_page', 10);
        $sortBy = $request->input('sort_by', 'created_at');
        $sortOrder = $request->input('sort_order', 'desc');
        $activityType = $request->input('activity_type');
        $searchQuery = $request->input('search');

        $application = ApplicationList::where('application_id', $id)->first();
        if (!$application) {
            return $this->exceptionJsonResponse('Application not found', null, 404);
        }

        $activityLogs = Activity::where(function ($query) use ($application) {
            $query->where('subject_type', ApplicationList::class)
                  ->where('subject_id', $application->id)

                  ->orWhere(function ($q) use ($application) {
                      $q->where('subject_type', UniversityCommunication::class)
                        ->where('properties->application_id', $application->application_id);
                  });
        })
        ->with('causer:id,first_name,last_name,email')
        ->when($activityType, function ($query, $activityType) {
            return $query->where('description', $activityType);
        })
        ->when($searchQuery, function ($query, $searchQuery) {
            return $query->where(function ($query) use ($searchQuery) {
                $query->where('description', 'LIKE', "%{$searchQuery}%")
                      ->orWhere('properties', 'LIKE', "%{$searchQuery}%");
            });
        })
        ->orderBy($sortBy, $sortOrder)
        ->paginate($perPage);

        // Transform the activity logs to include user information
        $activityLogs->getCollection()->transform(function ($log) {
            $log->user = $log->causer ? [
                'id' => $log->causer->id,
                'name' => $log->causer->first_name . ' ' . $log->causer->last_name,
                'email' => $log->causer->email,
            ] : null;
            unset($log->causer);
            return $log;
        });

        return $this->successJsonResponse('Activity logs retrieved successfully', $activityLogs);
    }


    private function validateApplicationData(Request $request)
    {
        return $request->validate([
            'country_id' => 'required',
            'intake_id' => 'required',
            'university_id' => 'required',
            'course_details_id' => 'required',
            'student_passport_no' => 'required|string',
            'date_of_birth' => 'required|date',
            'student_first_name' => 'required|string',
            'student_last_name' => 'required|string',
            'student_whatsapp_number' => 'nullable|string',
            'counsellor_number' => 'nullable|string',
            'student_email' => 'nullable|string',
            'counsellor_email' => 'nullable|string|email',
            'student_address' => 'nullable|string',
            'student_city' => 'nullable|string',
            'student_country' => 'nullable|string',
            'student_region_state' => 'nullable|string',
            'gender' => 'required|in:male,female',
            'visa_refusal' => 'required|in:yes,no',
            'document_paths' => 'nullable|array',
            'channel_partner_email' => 'nullable',
        ]);
    }

    private function createStudent(array $data)
    {
        // Check if the student already exists by email or passport number
        $existingStudent = Student::where('passport_no', $data['student_passport_no'])
            ->orWhere('email', $data['student_email'])
            ->first();

        // If the student exists, return the existing student
        if ($existingStudent) {
            return $existingStudent;
        }

        // If the student does not exist, create a new one
        return Student::create([
            'student_id' => Str::random(10),
            'first_name' => $data['student_first_name'],
            'last_name' => $data['student_last_name'],
            'passport_no' => $data['student_passport_no'],
            'date_of_birth' => $data['date_of_birth'],
            'whatsapp_number' => $data['student_whatsapp_number'],
            'email' => $data['student_email'],
            'address' => $data['student_address'],
            'city' => $data['student_city'],
            'country' => $data['student_country'],
            'region' => $data['student_region_state'],
            'state' => $data['student_region_state'],
            'gender' => $data['gender'],
            'visa_refusal' => $data['visa_refusal'],
        ]);
    }

    private function createApplication(Student $student, array $data)
    {
        $applicationId = $this->generateApplicationId($student);
        $courseDetails = CourseDetails::findOrFail($data['course_details_id']);

        \DB::connection('mysql')->statement('SET FOREIGN_KEY_CHECKS=0;');
        $channelPartner = null;
        if ($data['channel_partner_email']) {
            $channelPartner = User::where('email', $data['channel_partner_email'])->first();
            if (!$channelPartner) {
                $channelPartner = User::create([
                    'email' => $data['channel_partner_email'],
                    'password' => bcrypt('password'),
                    'role' => 'channel partner',
                    'first_name' => $data['channel_partner_email'],
                    'last_name' => $data['channel_partner_email'],
                    'status' => 1,
                    'company_name' => $data['channel_partner_email'],
                    'whatsapp_number' => $data['channel_partner_email'],
                    'mobile_number' => $data['channel_partner_email'],
                    'address' => $data['channel_partner_email'],
                    'city' => $data['channel_partner_email'],
                    'post_code' => $data['channel_partner_email'],
                    'country' => 'India',
                    'recruit_countries' => json_encode(['India']),


                ]);
            }
        }
        $user_id = auth('api')->id();
        if ($channelPartner) {
            $user_id = $channelPartner->id;
        }
        return ApplicationList::create([
            'application_id' => $applicationId,
            'course_id' => $courseDetails->course_id,
            'country_id' => $data['country_id'],
            'intake_id' => $data['intake_id'],
            'university_id' => $data['university_id'],
            'course_details_id' => $data['course_details_id'],
            'user_id' => $user_id,
            'student_id' => $student->id,
            'counsellor_number' => $data['counsellor_number'],
            'counsellor_email' => $data['counsellor_email'],
            'temp_channel_partner_email' => $data['channel_partner_email'],
            'status' => 1,
        ]);
    }
    private function createApplicationForExistingStudent(Student $student, Request $request)
    {
        $applicationId = $this->generateApplicationId($student);
        if ($request->course_details_id) {
            $courseDetails = CourseDetails::findOrFail($request->course_details_id);
        } else {
            $courseDetails = CourseDetails::where('course_id', $request->course_id)->where('intake_id', $request->intake_id)->where('university_id', $request->university_id)->first();
        }
        \DB::connection('mysql')->statement('SET FOREIGN_KEY_CHECKS=0;');
        return ApplicationList::create([
            'application_id' => $applicationId,
            'course_id' => $courseDetails->course_id,
            'country_id' => $request->country_id,
            'intake_id' => $request->intake_id,
            'university_id' => $request->university_id,
            'course_details_id' => $courseDetails->id,
            'user_id' => auth('api')->id(),
            'student_id' => $student->id,
            'counsellor_number' => $request->counsellor_number,
            'counsellor_email' => $request->counsellor_email,
            'status' => 1,
        ]);
    }

    private function generateApplicationId(Student $student)
    {
        $randomNumber = str_pad(rand(0, 99999), 5, '0', STR_PAD_LEFT);
        $paddedStudentId = str_pad($student->id, 5, '0', STR_PAD_LEFT);
        return $randomNumber . $paddedStudentId;
    }

    private function handleDocumentUploads(array $data, Student $student, ApplicationList $application)
    {
        if (!empty($data['document_paths'])) {
            foreach ($data['document_paths'] as $pathData) {
                // Extract the path from the array item
                $path = is_array($pathData) ? $pathData['path'] : $pathData;

                $filename = basename($path);
                $newPath = "channelPartnerPanel/studentDocument/{$student->email}/{$student->email}_{$filename}";

                Storage::disk('do_spaces')->move($path, $newPath);

                StudentDocument::create([
                    'student_id' => $student->id,
                    'application_id' => $application->id,
                    'path' => $newPath,
                ]);
            }
        }
        GenerateStudentDocumentsZip::dispatch($student);
    }




    private function logApplicationActivity(Request $request, ApplicationList $application, Student $student)
    {
        $university = University::findOrFail($application->university_id);
        $intake = Intake::findOrFail($application->intake_id);

        activity()
            ->performedOn($application)
            ->causedBy(auth()->user())
            ->withProperties([
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'application_id' => $application->application_id,
                'student_email' => $student->email,
                'university_name' => $university->name,
                'intake_name' => $intake->name,
            ])
            ->log('application_submit');
    }

    private function logIndexActivity(Request $request, int $totalResults)
    {
        $activityType = 'application_index_view';
        $properties = [
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'total_results' => $totalResults,
        ];

        // Check if any filter or search is applied
        $filterParams = ['status', 'university', 'channelPartner', 'applicationOfficer', 'studentEmail', 'dateFrom', 'dateTo'];
        $appliedFilters = array_filter($request->only($filterParams));

        if (!empty($appliedFilters)) {
            $activityType = 'application_filter';
            $properties['filters'] = $appliedFilters;
        }

        if ($request->filled('searchQuery')) {
            $activityType = 'application_search';
            $properties['search_query'] = $request->query('searchQuery');
        }

        activity()
            ->causedBy(Auth::user())
            ->withProperties($properties)
            ->log($activityType);
    }

    public function restore(string $id)
    {
        try {
            $application = ApplicationList::withTrashed()->findOrFail($id);
            $application->restore();

            activity()
                ->performedOn($application)
                ->causedBy(Auth::user())
                ->withProperties([
                    'ip' => request()->ip(),
                    'user_agent' => request()->userAgent(),
                    'application_id' => $application->application_id,
                ])
                ->log('application_restored');

            return $this->successJsonResponse('Application restored successfully');
        } catch (\Exception $e) {
            Log::error('Failed to restore application', ['error' => $e->getMessage(), 'id' => $id]);
            return $this->exceptionJsonResponse('Failed to restore application', $e);
        }
    }

    public function assignApplicationOfficer(Request $request, $id)
    {
        try {
            $application = ApplicationList::where('application_id', $id)->firstOrFail();
            $user = User::findOrFail($request->user_id);

            if ($user->role !== 'Application Officer') {
                return $this->errorJsonResponse('Selected user is not an application officer', [], 409);
            }

            $assignment = ApplicationOfficerAssignment::create([
                'application_id' => $application->id,
                'user_id' => $user->id,
                'status' => 'pending',
                'created_by' => auth('api')->id(),
            ]);

            // Get admin users and assigned user
            $adminUsers = User::where('role', 'admin')->get();
            $recipients = $adminUsers->push($user);

            $this->notificationService->notifyRelevantUsers(
                $application,
                [
                    'assigned_officer_name' => $user->full_name,
                    'assigned_officer_email' => $user->email,
                    'assigner_name' => auth('api')->user()->full_name
                ],
                $recipients,
                auth('api')->id(),
                auth('api')->user()->full_name,
                auth('api')->user()->email,
                'application_officer_assigned'
            );

            return $this->successJsonResponse('Application officer assigned successfully', $assignment->load('user'));
        } catch (\Exception $e) {
            return $this->exceptionJsonResponse('Failed to assign application officer', $e);
        }
    }

    public function getApplicationOfficers($id)
    {
        $application = ApplicationList::where('application_id', $id)->firstOrFail();
        $assignments = $application->applicationOfficerAssignments()->with('user')->get();
        return $this->successJsonResponse('Application officers retrieved successfully', $assignments);
    }

    public function getApplicationRequests(Request $request)
    {
        $user = auth('api')->user();
        $perPage = (int) $request->query('perPage', 10);
        $searchQuery = strtoupper(trim($request->query('searchQuery', '')));
        $sortBy = $request->query('sortBy', 'created_at');
        $orderBy = $request->query('orderBy', 'desc');

        $query = ApplicationList::with(['student', 'intake', 'university', 'course', 'applicationOfficerAssignments','user.parent'])
            ->whereHas('applicationOfficerAssignments', function ($query) use ($user) {
                $query->where('user_id', $user->id)->where('status', 'pending');
            });

        $query->when($searchQuery, function ($q) use ($searchQuery) {
            return $q->where(function ($q) use ($searchQuery) {
                $q->where('application_lists.application_id', 'LIKE', "%$searchQuery%")
                    ->orWhereHas('student', function ($q) use ($searchQuery) {
                        $q->where('first_name', 'LIKE', "%$searchQuery%")
                            ->orWhere('last_name', 'LIKE', "%$searchQuery%")
                            ->orWhere('email', 'LIKE', "%$searchQuery%");
                    })
                    ->orWhereHas('university', function ($q) use ($searchQuery) {
                        $q->where('name', 'LIKE', "%$searchQuery%");
                    })
                    ->orWhereHas('course', function ($q) use ($searchQuery) {
                        $q->where('name', 'LIKE', "%$searchQuery%");
                    });
            });
        })->when($request->filled('status'), function ($q) use ($request) {
            return $q->where('status', $request->query('status'));
        })->when($request->filled('university'), function ($q) use ($request) {
            return $q->where('university_id', $request->query('university'));
        })->when($request->filled('dateFrom'), function ($q) use ($request) {
            return $q->whereDate('created_at', '>=', $request->query('dateFrom'));
        })->when($request->filled('dateTo'), function ($q) use ($request) {
            return $q->whereDate('created_at', '<=', $request->query('dateTo'));
        });

        // Sorting
        $query->orderBy($sortBy, $orderBy);

        // Pagination
        $applicationRequests = $query->paginate($perPage);

        // Log the activity
        $this->logApplicationRequestsActivity($request, $applicationRequests->total());

        return $this->successJsonResponse("Application requests found!", $applicationRequests->items(), $applicationRequests->total());
    }

    private function logApplicationRequestsActivity(Request $request, int $totalResults)
    {
        $activityType = 'application_requests_view';
        $properties = [
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'total_results' => $totalResults,
        ];

        // Check if any filter or search is applied
        $filterParams = ['status', 'university', 'dateFrom', 'dateTo'];
        $appliedFilters = array_filter($request->only($filterParams));

        if (!empty($appliedFilters)) {
            $activityType = 'application_requests_filter';
            $properties['filters'] = $appliedFilters;
        }

        if ($request->filled('searchQuery')) {
            $activityType = 'application_requests_search';
            $properties['search_query'] = $request->query('searchQuery');
        }

        activity()
            ->causedBy(Auth::user())
            ->withProperties($properties)
            ->log($activityType);
    }

    public function acceptApplicationRequest($id)
    {
        try {
            $user = auth('api')->user();
            $assignment = ApplicationOfficerAssignment::where('application_id', $id)
                ->where('user_id', $user->id)
                ->where('status', 'pending')
                ->firstOrFail();

            $application = ApplicationList::findOrFail($assignment->application_id);
            $application->application_officer = $user->id;
            $application->save();

            DB::beginTransaction();

            try {
                $assignment->update(['status' => 'accepted']);

                // Log the activity
                activity()
                    ->performedOn($application)
                    ->causedBy($user)
                    ->withProperties([
                        'ip' => request()->ip(),
                        'user_agent' => request()->userAgent(),
                        'application_id' => $application->application_id,
                        'officer_id' => $user->id,
                        'officer_name' => $user->full_name,
                        'assignment_id' => $assignment->id,
                    ])
                    ->log('application_request_accepted');

                // Prepare notification details
                $additionalDetails = [
                    'officer_name' => $user->full_name,
                    'officer_email' => $user->email,
                ];

                // Get admin users and the user who assigned the application
                $adminUsers = User::where('role', 'admin')->get();
                $assigner = User::findOrFail($assignment->created_by);

                // Prepare recipients (admin users and the assigner)
                $recipients = $adminUsers->push($assigner);

                // Send notification using NotificationService
                $this->notificationService->notifyRelevantUsers(
                    $application,
                    $additionalDetails,
                    $recipients,
                    $user->id,
                    $user->full_name,
                    $user->email,
                    'application_request_accepted'
                );

                DB::commit();

                return $this->successJsonResponse('Application request accepted successfully');
            } catch (\Exception $e) {
                DB::rollBack();
                Log::error('Failed to accept application request', [
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString(),
                    'user_id' => $user->id,
                    'application_id' => $id
                ]);
                return $this->errorJsonResponse('Failed to accept application request', ['error' => $e->getMessage()], 500);
            }
        } catch (\Exception $e) {
            Log::error('Failed to find application request', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'user_id' => auth('api')->user()->id ?? 'N/A',
                'application_id' => $id
            ]);
            return $this->exceptionJsonResponse('Failed to find application request', $e);
        }
    }

    public function rejectApplicationRequest($id)
    {
        try {
            $user = auth('api')->user();
            $assignment = ApplicationOfficerAssignment::where('application_id', $id)
                ->where('user_id', $user->id)
                ->where('status', 'pending')
                ->firstOrFail();

            $application = ApplicationList::findOrFail($assignment->application_id);

            DB::beginTransaction();

            try {
                $assignment->update(['status' => 'rejected']);

                // Log the activity
                activity()
                    ->performedOn($application)
                    ->causedBy($user)
                    ->withProperties([
                        'ip' => request()->ip(),
                        'user_agent' => request()->userAgent(),
                        'application_id' => $application->application_id,
                        'officer_id' => $user->id,
                        'officer_name' => $user->full_name,
                        'assignment_id' => $assignment->id,
                    ])
                    ->log('application_request_rejected');

                // Prepare notification details
                $additionalDetails = [
                    'officer_name' => $user->full_name,
                    'officer_email' => $user->email,
                ];

                // Get admin users and the user who assigned the application
                $adminUsers = User::where('role', 'admin')->get();
                $assigner = User::findOrFail($assignment->created_by);

                // Prepare recipients (admin users and the assigner)
                $recipients = $adminUsers->push($assigner);

                // Send notification using NotificationService
                $this->notificationService->notifyRelevantUsers(
                    $application,
                    $additionalDetails,
                    $recipients,
                    $user->id,
                    $user->full_name,
                    $user->email,
                    'application_request_rejected'
                );

                DB::commit();

                return $this->successJsonResponse('Application request rejected successfully');
            } catch (\Exception $e) {
                DB::rollBack();
                Log::error('Failed to reject application request', [
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString(),
                    'user_id' => $user->id,
                    'application_id' => $id
                ]);
                return $this->errorJsonResponse('Failed to reject application request', ['error' => $e->getMessage()], 500);
            }
        } catch (\Exception $e) {
            Log::error('Failed to find application request', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'user_id' => auth('api')->user()->id ?? 'N/A',
                'application_id' => $id
            ]);
            return $this->exceptionJsonResponse('Failed to find application request', $e);
        }
    }

    public function getAcoAoCommunications($id)
    {
        $application = ApplicationList::where('application_id', $id)->first();
        if (!$application) {
            return $this->exceptionJsonResponse('Application not found', null, 404);
        }

        $communications = AcoAoCommunication::where('application_id', $application->id)->with('user')->get();

        // Log the activity
        activity()
            ->performedOn($application)
            ->causedBy(auth('api')->user())
            ->withProperties([
                'ip' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'application_id' => $application->application_id,
                'communications_count' => $communications->count(),
            ])
            ->log('aco_ao_communications_viewed');

        return $this->successJsonResponse('ACO & AO communications retrieved successfully', $communications);
    }

    public function addAcoAoCommunication(Request $request, $id)
    {
        try {
            $request->validate([
                'message' => 'required|string',
            ]);

            $application = ApplicationList::where('application_id', $id)->firstOrFail();

            $communication = AcoAoCommunication::create([
                'application_id' => $application->id,
                'message' => $request->message,
                'created_by' => auth('api')->user()->id
            ]);

            // Notify relevant users (you may need to adjust this based on your requirements)
            $adminUsers = User::where('role', 'admin')->get();
            $officerId = auth('api')->user()->id == $application->application_control_officer
                ? $application->application_officer
                : $application->application_control_officer;

            $user = User::findOrFail($officerId);
            $recipients = $adminUsers->push($user);

            $this->notificationService->notifyRelevantUsers(
                $application,
                ['message' => $communication->message],
                $recipients,
                auth('api')->user()->id,
                auth('api')->user()->full_name,
                auth('api')->user()->email,
                'aco_ao_communication_added'
            );

            activity()
                ->performedOn($application)
                ->causedBy(auth('api')->user())
                ->withProperties([
                    'ip' => $request->ip(),
                    'user_agent' => $request->userAgent(),
                    'application_id' => $application->application_id,
                    'student_email' => $application->student->email,
                    'university_name' => $application->university->name,
                    'intake_name' => $application->intake->name,
                    'message' => $communication->message,
                    'communication_id' => $communication->id,
                ])
                ->log('aco_ao_communication_added');

            return $this->successJsonResponse('ACO & AO Communication added successfully', $communication);
        } catch (\Exception $e) {
            Log::error('Failed to add ACO & AO Communication', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'user_id' => auth('api')->user()->id ?? 'N/A',
                'application_id' => $id,
                'request_data' => $request->all(),
            ]);
            return $this->exceptionJsonResponse('Failed to add ACO & AO Communication', $e);
        }
    }


    public function assignComplianceOfficer(Request $request, $id)
    {
        try {
            $application = ApplicationList::where('application_id', $id)->firstOrFail();
            $user = User::findOrFail($request->user_id);

            if ($user->role !== 'Compliance Officer') {
                return $this->errorJsonResponse('Selected user is not a compliance officer', [], 409);
            }

            // Check if there's a pending or accepted assignment
            $pendingAssignment = $application->complianceOfficerAssignments()->where('status', 'pending')->first();
            $acceptedAssignment = $application->complianceOfficerAssignments()->where('status', 'accepted')->first();

            if ($pendingAssignment) {
                return $this->errorJsonResponse('There is already a pending compliance officer assignment for this application', [], 409);
            }

            if ($acceptedAssignment) {
                return $this->errorJsonResponse('This application has already been accepted by a compliance officer', [], 409);
            }

            $assignment = ComplianceOfficerAssignment::create([
                'application_id' => $application->id,
                'user_id' => $user->id,
                'status' => 'pending',
                'created_by' => auth('api')->id(),
            ]);

            // Add activity log
            activity()
                ->performedOn($application)
                ->causedBy(auth()->user())
                ->withProperties([
                    'ip' => request()->ip(),
                    'user_agent' => request()->userAgent(),
                    'application_id' => $application->application_id,
                    'compliance_officer_id' => $user->id,
                    'compliance_officer_name' => $user->full_name,
                ])
                ->log('compliance_officer_assigned');

            // Prepare notification details
            $additionalDetails = [
                'assigned_officer_name' => $user->full_name,
                'assigned_officer_email' => $user->email,
                'assigner_name' => auth('api')->user()->full_name,
            ];

            // Get admin users
            $adminUsers = User::where('role', 'admin')->get();

            // Prepare recipients (assigned user, admin users, and application owner)
            $recipients = $adminUsers->push($user)->push($application->user);

            // Send notification using NotificationService
            $this->notificationService->notifyRelevantUsers(
                $application,
                $additionalDetails,
                $recipients,
                auth('api')->id(),
                auth('api')->user()->full_name,
                auth('api')->user()->email,
                'compliance_officer_assigned'
            );

            return $this->successJsonResponse('Compliance officer assigned successfully', $assignment->load('user'));
        } catch (\Exception $e) {
            Log::error('Failed to assign compliance officer', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'user_id' => auth('api')->user()->id ?? 'N/A',
                'application_id' => $id,
                'request_data' => $request->all(),
            ]);
            return $this->exceptionJsonResponse('Failed to assign compliance officer', $e);
        }
    }

    public function getComplianceOfficerAssignments($id)
    {
        $application = ApplicationList::where('application_id', $id)->first();

        if (!$application) {
            return $this->errorJsonResponse('Application not found', [], 404);
        }

        $assignments = $application->complianceOfficerAssignments()->with('user')->get();

        // Log the activity
        activity()
            ->performedOn($application)
            ->causedBy(auth()->user())
            ->withProperties([
                'ip' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'application_id' => $application->application_id,
                'assignments_count' => $assignments->count(),
            ])
            ->log('compliance_officer_assignments_viewed');

        return $this->successJsonResponse('Compliance officer assignments retrieved successfully', $assignments);
    }

    public function getAcoCoCommunications($id)
    {
        $application = ApplicationList::where('application_id', $id)->first();
        if (!$application) {
            return $this->exceptionJsonResponse('Application not found', null, 404);
        }

        $communications = AcoCoCommunication::where('application_id', $application->id)->with('user')->get();

        // Log the activity
        activity()
            ->performedOn($application)
            ->causedBy(auth()->user())
            ->withProperties([
                'ip' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'application_id' => $application->application_id,
                'communications_count' => $communications->count(),
            ])
            ->log('aco_co_communications_viewed');

        return $this->successJsonResponse('ACO & CO communications retrieved successfully', $communications);
    }

    public function addAcoCoCommunication(Request $request, $id)
    {
        try {
            $request->validate([
                'message' => 'required|string',
            ]);

            $application = ApplicationList::where('application_id', $id)->firstOrFail();

            $communication = AcoCoCommunication::create([
                'application_id' => $application->id,
                'message' => $request->message,
                'created_by' => auth('api')->user()->id
            ]);

            // Get admin users
            $adminUsers = User::where('role', 'admin')->get();

            // Get the appropriate officer
            $officerId = auth('api')->user()->id == $application->application_control_officer
                ? $application->compliance_officer
                : $application->application_control_officer;

            $user = User::findOrFail($officerId);
            $recipients = $adminUsers->push($user);

            $this->notificationService->notifyRelevantUsers(
                $application,
                ['message' => $communication->message],
                $recipients,
                auth('api')->user()->id,
                auth('api')->user()->full_name,
                auth('api')->user()->email,
                'aco_co_communication_added'
            );

            activity()
                ->performedOn($application)
                ->causedBy(auth('api')->user())
                ->withProperties([
                    'ip' => $request->ip(),
                    'user_agent' => $request->userAgent(),
                    'application_id' => $application->application_id,
                    'student_email' => $application->student->email,
                    'university_name' => $application->university->name,
                    'intake_name' => $application->intake->name,
                    'message' => $communication->message,
                    'communication_id' => $communication->id,
                ])
                ->log('aco_co_communication_added');

            return $this->successJsonResponse('ACO & CO Communication added successfully', $communication);
        } catch (\Exception $e) {
            Log::error('Failed to add ACO & CO Communication', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'user_id' => auth('api')->user()->id ?? 'N/A',
                'application_id' => $id,
                'request_data' => $request->all(),
            ]);
            return $this->exceptionJsonResponse('Failed to add ACO & CO Communication', $e);
        }
    }

    public function getComplianceRequests(Request $request)
    {
        $user = auth('api')->user();
        $perPage = (int) $request->query('perPage', 10);
        $searchQuery = strtoupper(trim($request->query('searchQuery', '')));
        $sortBy = $request->query('sortBy', 'created_at');
        $orderBy = $request->query('orderBy', 'desc');

        $query = ApplicationList::with(['student', 'intake', 'university', 'course', 'complianceOfficerAssignments','user.parent'])
            ->whereHas('complianceOfficerAssignments', function ($query) use ($user) {
                $query->where('user_id', $user->id)->where('status', 'pending');
            });

        $query->when($searchQuery, function ($q) use ($searchQuery) {
            return $q->where(function ($q) use ($searchQuery) {
                $q->where('application_lists.application_id', 'LIKE', "%$searchQuery%")
                    ->orWhereHas('student', function ($q) use ($searchQuery) {
                        $q->where('first_name', 'LIKE', "%$searchQuery%")
                            ->orWhere('last_name', 'LIKE', "%$searchQuery%")
                            ->orWhere('email', 'LIKE', "%$searchQuery%");
                    })
                    ->orWhereHas('university', function ($q) use ($searchQuery) {
                        $q->where('name', 'LIKE', "%$searchQuery%");
                    })
                    ->orWhereHas('course', function ($q) use ($searchQuery) {
                        $q->where('name', 'LIKE', "%$searchQuery%");
                    });
            });
        })->when($request->filled('status'), function ($q) use ($request) {
            return $q->where('status', $request->query('status'));
        })->when($request->filled('university'), function ($q) use ($request) {
            return $q->where('university_id', $request->query('university'));
        })->when($request->filled('dateFrom'), function ($q) use ($request) {
            return $q->whereDate('created_at', '>=', $request->query('dateFrom'));
        })->when($request->filled('dateTo'), function ($q) use ($request) {
            return $q->whereDate('created_at', '<=', $request->query('dateTo'));
        });

        // Sorting
        $query->orderBy($sortBy, $orderBy);

        // Pagination
        $complianceRequests = $query->paginate($perPage);

        // Log the activity
        $this->logComplianceRequestsActivity($request, $complianceRequests->total());

        return $this->successJsonResponse("Compliance requests found!", $complianceRequests->items(), $complianceRequests->total());
    }

    public function acceptComplianceRequest($id)
    {
        try {
            $user = auth('api')->user();
            $assignment = ComplianceOfficerAssignment::where('application_id', $id)
                ->where('user_id', $user->id)
                ->where('status', 'pending')
                ->firstOrFail();

            $application = ApplicationList::findOrFail($assignment->application_id);
            $application->compliance_officer = $user->id;
            $application->save();

            DB::beginTransaction();

            try {
                $assignment->update(['status' => 'accepted']);

                // Log the activity
                activity()
                    ->performedOn($application)
                    ->causedBy($user)
                    ->withProperties([
                        'ip' => request()->ip(),
                        'user_agent' => request()->userAgent(),
                        'application_id' => $application->application_id,
                        'officer_id' => $user->id,
                        'officer_name' => $user->full_name,
                        'assignment_id' => $assignment->id,
                    ])
                    ->log('compliance_request_accepted');

                // Prepare notification details
                $additionalDetails = [
                    'officer_name' => $user->full_name,
                    'officer_email' => $user->email,
                ];

                // Get admin users and the user who assigned the application
                $adminUsers = User::where('role', 'admin')->get();
                $assigner = User::findOrFail($assignment->created_by);

                // Prepare recipients (admin users and the assigner)
                $recipients = $adminUsers->push($assigner);

                // Send notification using NotificationService
                $this->notificationService->notifyRelevantUsers(
                    $application,
                    $additionalDetails,
                    $recipients,
                    $user->id,
                    $user->full_name,
                    $user->email,
                    'compliance_request_accepted'
                );

                DB::commit();

                return $this->successJsonResponse('Compliance request accepted successfully');
            } catch (\Exception $e) {
                DB::rollBack();
                Log::error('Failed to accept compliance request', [
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString(),
                    'user_id' => $user->id,
                    'application_id' => $id
                ]);
                return $this->errorJsonResponse('Failed to accept compliance request', ['error' => $e->getMessage()], 500);
            }
        } catch (\Exception $e) {
            Log::error('Failed to find compliance request', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'user_id' => auth('api')->user()->id ?? 'N/A',
                'application_id' => $id
            ]);
            return $this->exceptionJsonResponse('Failed to find compliance request', $e);
        }
    }

    public function rejectComplianceRequest($id)
    {
        try {
            $user = auth('api')->user();
            $assignment = ComplianceOfficerAssignment::where('application_id', $id)
                ->where('user_id', $user->id)
                ->where('status', 'pending')
                ->firstOrFail();

            $application = ApplicationList::findOrFail($assignment->application_id);

            DB::beginTransaction();

            try {
                $assignment->update(['status' => 'rejected']);

                // Log the activity
                activity()
                    ->performedOn($application)
                    ->causedBy($user)
                    ->withProperties([
                        'ip' => request()->ip(),
                        'user_agent' => request()->userAgent(),
                        'application_id' => $application->application_id,
                        'officer_id' => $user->id,
                        'officer_name' => $user->full_name,
                        'assignment_id' => $assignment->id,
                    ])
                    ->log('compliance_request_rejected');

                // Prepare notification details
                $additionalDetails = [
                    'officer_name' => $user->full_name,
                    'officer_email' => $user->email,
                ];

                // Get admin users and the user who assigned the application
                $adminUsers = User::where('role', 'admin')->get();
                $assigner = User::findOrFail($assignment->created_by);

                // Prepare recipients (admin users and the assigner)
                $recipients = $adminUsers->push($assigner);

                // Send notification using NotificationService
                $this->notificationService->notifyRelevantUsers(
                    $application,
                    $additionalDetails,
                    $recipients,
                    $user->id,
                    $user->full_name,
                    $user->email,
                    'compliance_request_rejected'
                );

                DB::commit();

                return $this->successJsonResponse('Compliance request rejected successfully');
            } catch (\Exception $e) {
                DB::rollBack();
                Log::error('Failed to reject compliance request', [
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString(),
                    'user_id' => $user->id,
                    'application_id' => $id
                ]);
                return $this->errorJsonResponse('Failed to reject compliance request', ['error' => $e->getMessage()], 500);
            }
        } catch (\Exception $e) {
            Log::error('Failed to find compliance request', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'user_id' => auth('api')->user()->id ?? 'N/A',
                'application_id' => $id
            ]);
            return $this->exceptionJsonResponse('Failed to find compliance request', $e);
        }
    }

    private function logComplianceRequestsActivity(Request $request, int $totalResults)
    {
        $activityType = 'compliance_requests_view';
        $properties = [
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'total_results' => $totalResults,
        ];

        // Check if any filter or search is applied
        $filterParams = ['status', 'university', 'dateFrom', 'dateTo'];
        $appliedFilters = array_filter($request->only($filterParams));

        if (!empty($appliedFilters)) {
            $activityType = 'compliance_requests_filter';
            $properties['filters'] = $appliedFilters;
        }

        if ($request->filled('searchQuery')) {
            $activityType = 'compliance_requests_search';
            $properties['search_query'] = $request->query('searchQuery');
        }

        activity()
            ->causedBy(Auth::user())
            ->withProperties($properties)
            ->log($activityType);
    }

}
