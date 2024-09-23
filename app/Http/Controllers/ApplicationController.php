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

class ApplicationController extends Controller
{
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



        $query->when($searchQuery, function ($q) use ($searchQuery) {
            return $q->where(function ($q) use ($searchQuery) {
                $q->where('application_id', 'LIKE', "%$searchQuery%")
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

        // Sorting
        $query->orderBy($sortBy, $orderBy);

        // Pagination
        $applications = $query->paginate($perPage);

        // Log the activity
        $this->logIndexActivity($request, $applications->total());

        return $this->successJsonResponse("Application Information found!", $applications->items(), $applications->total());
    }


    public function store(Request $request, EmailService $emailService)
    {
        try {
            $validatedData = $this->validateApplicationData($request);

            DB::beginTransaction();

            $student = $this->createStudent($validatedData);
            $application = $this->createApplication($student, $validatedData);

            $this->handleDocumentUploads($validatedData, $student, $application);

            $this->notifyRelevantUsers($application, $emailService);

            $this->logApplicationActivity($request, $application, $student);

            DB::commit();

            return $this->successJsonResponse('Application created successfully', $application, '', 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return $this->handleValidationErrors($e);
        } catch (\Throwable $th) {
            DB::rollBack();
            \Log::error($th);
            return $this->exceptionJsonResponse('Failed to create application', $th);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $applicationDetails = ApplicationList::with(['course','country','intake','university','courseDetails','student.document','comments.user','universityCommunications.user'])->where('id', $id)->first();
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

            $application = ApplicationList::findOrFail($id);

            // Log the application deletion activity before actually deleting it
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
                ->log('application_deleted');

            $application->delete();

            DB::commit();

            return $this->successJsonResponse('Application deleted successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Failed to delete application', ['error' => $e->getMessage(), 'id' => $id]);

            // Log the failed deletion attempt
            activity()
                ->causedBy(Auth::user())
                ->withProperties([
                    'ip' => request()->ip(),
                    'user_agent' => request()->userAgent(),
                    'attempted_application_id' => $id,
                    'error_message' => $e->getMessage(),
                ])
                ->log('application_deletion_failed');

            return $this->exceptionJsonResponse('Failed to delete application', $e);
        }
    }

    public function updateApplicationFile(Request $request)
    {
        $applicationId = (int)$request->application_id;
        $application = ApplicationList::findOrFail($applicationId);
        $student = $application->student;
        $uploadedDocuments = [];

        if (!empty($request->document_paths)) {
            foreach ($request->document_paths as $path) {
                $filename = basename($path['path']);
                $newPath = 'channelPartnerPanel/studentDocument/' . $student->email . '/' . $student->email . '_' . $filename;
                Storage::disk('do_spaces')->move($path['path'], $newPath);
                $document = StudentDocument::create([
                    'student_id' => $student->id,
                    'application_id' => $applicationId,
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
                        'application_id' => $applicationId,
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
                'application_id' => $applicationId,
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
        $applicationStatuses = ApplicationStatusHistory::where('application_id', $applicationId)->latest()->get();

        return $this->successJsonResponse('Status found successfully', $applicationStatuses);

    }

    public function getAllApplicationStatuses()
    {
        $statuses = collect(ApplicationStatusHistory::$statusTexts)->map(function ($name, $id) {
            return [
                'id' => $id,
                'name' => $name,
            ];
        })->values();
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
            $application = ApplicationList::findOrFail($id);
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

            $emailService->sendApplicationNotification('status_update', $application, $additionalDetails, $recipients, $senderId, $senderName, $senderEmail);

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
                    'university_name' => 'University of Hertfordshire',
                    'intake_name' => 'January 2025',
                    'attempted_status' => ApplicationList::$statusTexts[$validatedData['status']] ?? 'Unknown Status',
                    'error_message' => $th->getMessage(),
                ])
                ->log('application_status_update_failed');

            return $this->exceptionJsonResponse('Failed to update status', $th);
        }
    }

    public function addComment(Request $request, $id, EmailService $emailService)
    {
        $request->validate([
            'comment' => 'required|string',
        ]);

        $application = ApplicationList::findOrFail($id);

        $comment = new ApplicationCommentHistory();
        $comment->application_id = $id;
        $comment->comment = $request->comment;
        $comment->status = 0;
        $comment->save();

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
                'comment' => $comment->comment,
                'comment_id' => $comment->id,
            ])
            ->log('comment_added');

        // Fetch the application creator and admin users
        $creator = $application->user;
        $adminUsers = User::where('role', 'admin')->get();

        // Prepare the notification details
        $additionalDetails = [
            'comment' => $comment->comment,
        ];

        $recipients = $adminUsers->push($creator);
        $senderId = auth('api')->user()->id;
        $senderName = auth('api')->user()->full_name;
        $senderEmail = auth('api')->user()->email;

        $emailService->sendApplicationNotification('comment_added', $application, $additionalDetails, $recipients, $senderId, $senderName, $senderEmail);

        return response()->json(['message' => 'Comment added successfully', 'comment' => $comment], 201);
    }

    public function getUniversityCommunications($id)
    {
        $communications = UniversityCommunication::where('application_id', $id)->with('user')->get();
        return response()->json($communications);
    }

    public function addUniversityCommunication(Request $request, $id, EmailService $emailService)
    {
        $request->validate([
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        $application = ApplicationList::findOrFail($id);

        $communication = new UniversityCommunication();
        $communication->application_id = $id;
        $communication->subject = $request->subject;
        $communication->message = $request->message;
        $communication->created_by = auth('api')->user()->id;
        $communication->save();

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
                'subject' => $communication->subject,
                'communication_id' => $communication->id,
            ])
            ->log('university_communication_added');

        // Fetch the application creator and admin users
        $creator = $application->user;
        $adminUsers = User::where('role', 'admin')->get();

        // Prepare the notification details
        $additionalDetails = [
            'subject' => $communication->subject,
            'message' => $communication->message,
        ];

        $recipients = $adminUsers->push($creator);
        $senderId = auth('api')->user()->id;
        $senderName = auth('api')->user()->full_name;
        $senderEmail = auth('api')->user()->email;

        $emailService->sendApplicationNotification('university_communication_added', $application, $additionalDetails, $recipients, $senderId, $senderName, $senderEmail);

        return response()->json(['message' => 'Communication added successfully', 'communication' => $communication], 201);
    }

    public function getActivityLogs(Request $request, $id)
    {
        $perPage = $request->input('per_page', 10);
        $sortBy = $request->input('sort_by', 'created_at');
        $sortOrder = $request->input('sort_order', 'desc');
        $activityType = $request->input('activity_type');
        $searchQuery = $request->input('search');

        $application = ApplicationList::findOrFail($id);

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
            'student_passport_no' => 'required|string|unique:students,passport_no',
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
        ]);
    }

    private function createStudent(array $data)
    {
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

        return ApplicationList::create([
            'application_id' => $applicationId,
            'course_id' => $courseDetails->course_id,
            'country_id' => $data['country_id'],
            'intake_id' => $data['intake_id'],
            'university_id' => $data['university_id'],
            'course_details_id' => $data['course_details_id'],
            'user_id' => auth('api')->id(),
            'student_id' => $student->id,
            'counsellor_number' => $data['counsellor_number'],
            'counsellor_email' => $data['counsellor_email'],
            'status' => 0,
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
            foreach ($data['document_paths'] as $path) {
                $filename = basename($path['path']);
                $newPath = "channelPartnerPanel/studentDocument/{$student->email}/{$student->email}_{$filename}";
                Storage::disk('do_spaces')->move($path['path'], $newPath);
                StudentDocument::create([
                    'student_id' => $student->id,
                    'application_id' => $application->id,
                    'path' => $newPath,
                ]);
            }
        }
        GenerateStudentDocumentsZip::dispatch($student);
    }



    private function notifyRelevantUsers(ApplicationList $application, EmailService $emailService)
    {
        $currentUser = auth('api')->user();
        $parentIds = $currentUser->fetchParent();

        $usersToNotify = User::where('role', 'admin')
            ->orWhereIn('id', $parentIds)
            ->get();

        // Prepare the notification details
        $additionalDetails = [
            'application_id' => $application->application_id,
            'student_name' => $application->student->full_name,
            'student_email' => $application->student->email,
            'university_name' => $application->university->name,
            'intake_name' => $application->intake->name,
            'course_name' => $application->courseDetails->course->name,
            'channel_partner_name' => $currentUser->full_name,
            'channel_partner_email' => $currentUser->email,
        ];

        $recipients = $usersToNotify;
        $senderId = $currentUser->id;
        $senderName = $currentUser->full_name;
        $senderEmail = $currentUser->email;

        $emailService->sendApplicationNotification('new_application', $application, $additionalDetails, $recipients, $senderId, $senderName, $senderEmail);
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





}
