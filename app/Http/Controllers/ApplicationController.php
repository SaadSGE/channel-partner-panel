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

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchQuery = strtoupper(strtolower(trim($request->query('searchQuery'))));
        $perPage = (int) $request->query('perPage') ?: 10;
        $id = (int) $request->query('id') ?: null;
        $sortBy = (string) $request->query('sortBy');
        $orderBy = (string) $request->query('orderBy');
        $status = $request->query('status');
        $university = $request->query('university');
        $channelPartner = $request->query('channelPartner');
        $applicationOfficer = $request->query('applicationOfficer');
        $studentEmail = $request->query('studentEmail');
        $dateFrom = $request->query('dateFrom');
        $dateTo = $request->query('dateTo');

        $user = auth('api')->user();
        $userId = $user->id;
        $userRole = $user->role;

        // Base query
        $query = ApplicationList::with(['course', 'country', 'intake', 'university', 'courseDetails', 'student', 'user.parent:id,first_name,last_name,email']);

        // Role-based filtering
        $query->when($userRole === 'channel partner', function ($q) use ($userId) {
            return $q->where('created_by', $userId);
        })->when($userRole !== 'admin' && $userRole !== 'channel partner', function ($q) use ($userId) {
            return $q->whereHas('user', function ($q) use ($userId) {
                $q->where('parent_id', $userId);
            });
        });

        // Additional filters
        $query->when($id, function ($q) use ($id) {
            return $q->where('created_by', $id);
        })->when($searchQuery, function ($q) use ($searchQuery) {
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
        });

        // Apply other filters
        $query->when($status !== null, function ($q) use ($status) {
            return $q->where('status', $status);
        })->when($university, function ($q) use ($university) {
            return $q->where('university_id', $university);
        })->when($channelPartner, function ($q) use ($channelPartner) {
            return $q->where('created_by', $channelPartner);
        })->when($applicationOfficer, function ($q) use ($applicationOfficer) {
            return $q->whereHas('user', function ($q) use ($applicationOfficer) {
                $q->where('parent_id', $applicationOfficer);
            });
        })->when($studentEmail, function ($q) use ($studentEmail) {
            return $q->whereHas('student', function ($q) use ($studentEmail) {
                $q->where('email', 'LIKE', "%$studentEmail%");
            });
        })->when($dateFrom, function ($q) use ($dateFrom) {
            return $q->whereDate('created_at', '>=', $dateFrom);
        })->when($dateTo, function ($q) use ($dateTo) {
            return $q->whereDate('created_at', '<=', $dateTo);
        });

        // Sorting
        $query->when($sortBy, function ($q) use ($sortBy, $orderBy) {
            return $q->orderBy($sortBy, $orderBy ?: 'asc');
        }, function ($q) {
            return $q->latest('created_at');
        });

        // Pagination
        $applications = $query->paginate($perPage);

        // Log the activity
        $this->logIndexActivity($request, $applications->total());

        return $this->successJsonResponse("Application Information found!", $applications->items(), $applications->total());
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

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // Use $request->validate() for automatic validation handling
            $validatedData = $request->validate([

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

            DB::beginTransaction();

            $userId = auth('api')->user()->id;
            $student = Student::create([
                'student_id' => Str::random(10),
                'first_name' => $validatedData['student_first_name'],
                'last_name' => $validatedData['student_last_name'],
                'passport_no' => $validatedData['student_passport_no'],
                'date_of_birth' => $validatedData['date_of_birth'],
                'whatsapp_number' => $validatedData['student_whatsapp_number'],
                'email' => $validatedData['student_email'],
                'address' => $validatedData['student_address'],
                'city' => $validatedData['student_city'],
                'country' => $validatedData['student_country'],
                'region' => $validatedData['student_region_state'],
                'state' => $validatedData['student_region_state'],
                'gender' => $validatedData['gender'],
                'visa_refusal' => $validatedData['visa_refusal'],
            ]);

            $randomNumber = str_pad(rand(0, 99999), 5, '0', STR_PAD_LEFT);
            $paddedStudentId = str_pad($student->id, 5, '0', STR_PAD_LEFT);
            $applicationId = $randomNumber . $paddedStudentId;
            // Find the course_id from course_details_id
            $courseDetails = CourseDetails::findOrFail($validatedData['course_details_id']);
            $courseId = $courseDetails->course_id;
            \DB::connection('mysql')->statement('SET FOREIGN_KEY_CHECKS=0;');
            $application = ApplicationList::create([
                'application_id' => $applicationId,
                'course_id' => $courseId,
                'country_id' => $validatedData['country_id'],
                'intake_id' => $validatedData['intake_id'],
                'university_id' => $validatedData['university_id'],
                'course_details_id' => $validatedData['course_details_id'],
                'user_id' => $userId,
                'student_id' => $student->id,
                'counsellor_number' => $validatedData['counsellor_number'],
                'counsellor_email' => $validatedData['counsellor_email'],
                'status' => 0,
            ]);

            if (!empty($validatedData['document_paths'])) {
                foreach ($validatedData['document_paths'] as $path) {
                    $filename = basename($path['path']);
                    $newPath = 'channelPartnerPanel/studentDocument/' . $student->email. '/' . $student->email . '_' . $filename;
                    Storage::disk('do_spaces')->move($path['path'], $newPath);
                    StudentDocument::create([
                        'student_id' => $student->id,
                        'application_id' => $application->id,
                        'path' => $newPath,
                    ]);
                }
            }
            GenerateStudentDocumentsZip::dispatch($student);
            $usersToNotify = User::where('role', 'admin')
                ->orWhere('id', auth('api')->user()->parent_id)
                ->get();

            Notification::send($usersToNotify, new NewApplicationNotification($application));

            DB::commit();

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

    public function updateStatus(Request $request, $id)
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
                    'university_name' => 'University of Hertfordshire',
                    'intake_name' => 'January 2025',
                    'old_status' => $oldStatus,
                    'new_status' => $application->status_text, // Using the accessor for new status text
                    'comment' => $validatedData['comment'],
                    'document_uploaded' => $path ? true : false,
                    'status_history_id' => $statusHistory->id,
                ])
                ->log('application_status_update');

            DB::commit();

            $userToNotify = $application->user;
            $adminUsers = User::where('role', 'admin')->get();

            Notification::send($adminUsers->push($userToNotify), new StatusChangedNotification($application));

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

    public function addComment(Request $request, $id)
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

        return response()->json(['message' => 'Comment added successfully', 'comment' => $comment], 201);
    }

    public function getUniversityCommunications($id)
    {
        $communications = UniversityCommunication::where('application_id', $id)->with('user')->get();
        return response()->json($communications);
    }

    public function addUniversityCommunication(Request $request, $id)
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




}
