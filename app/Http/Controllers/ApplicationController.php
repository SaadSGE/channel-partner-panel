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

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $searchQuery = strtoupper(strtolower(trim(request()->query('q'))));
        $perPage = (int)request()->query('perPage') ?: 10;
        $id = (int) request()->query('id') ?: null;
        $sortBy = (string)request()->query('sortBy');
        $sortDesc = filter_var(request()->query('sortDesc'), FILTER_VALIDATE_BOOLEAN);
        $userId = auth('api')->user()->id;
        $userRole = auth('api')->user()->role;
        if($id == null) {
            if($userRole == 'channel partner') {
                $id = $userId;
            }
        }

        $queryResult = ApplicationList::with(['course', 'country', 'intake', 'university', 'courseDetails', 'student'])
            ->when($id, function ($query, $id) {
                return $query->where('created_by', $id);
            })
            ->when($searchQuery, function ($query, $searchQuery) {
                return $query->where(function ($query) use ($searchQuery) {
                    $query->where('application_id', 'LIKE', "%$searchQuery%");
                });
            })
            ->when($sortBy, function ($query) use ($sortBy, $sortDesc) {
                return $query->when($sortBy === 'id', function ($sq) use ($sortDesc) {
                    return $sq->when($sortDesc, function ($ssq) {
                        return $ssq->orderBy('id', 'DESC');
                    }, function ($ssq) {
                        return $ssq->orderBy('id');
                    });
                });
            }, function ($query) {
                return $query->latest('created_at');
            })
            ->when($perPage, function ($query, $perPage) {
                return $query->paginate($perPage);
            }, function ($query) {
                return $query->get();
            })
            ->toArray();

        $products = $perPage ? $queryResult['data'] : $queryResult;
        $totalRows = $perPage ? $queryResult['total'] : count($queryResult);

        return $this->successJsonResponse("Product Information found!", $products, $totalRows);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'country_id' => 'required|exists:application_countries,id',
            'intake_id' => 'required|exists:intakes,id',
            'university_id' => 'required|exists:universities,id',
            'course_details_id' => 'required|exists:course_details,id',
            'student_passport_no' => 'required|string|max:255|unique:students,passport_no',
            'date_of_birth' => 'required|date',
            'student_first_name' => 'required|string|max:255',
            'student_last_name' => 'required|string|max:255',
            'student_whatsapp_number' => 'nullable|string|max:255',
            'counsellor_number' => 'nullable|string|max:255',
            'student_email' => 'nullable|string',
            'counsellor_email' => 'nullable|string',
            'student_address' => 'nullable|string',
            'student_city' => 'nullable|string|max:255',
            'student_country' => 'nullable|string|max:255',
            'student_region_state' => 'nullable|string|max:255',
            'gender' => 'required|in:male,female',
            'visa_refusal' => 'required|in:yes,no',
            'document_paths' => 'nullable|array',
        ]);

        DB::beginTransaction();

        try {
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

            $application = ApplicationList::create([
                'application_id' => $applicationId,
                'course_id' => $validatedData['course_id'],
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
                    $newPath = 'channelPartnerPanel/studentDocument/' . $student->id . '/' . $student->email . '_' . $filename;
                    Storage::disk('do_spaces')->move($path['path'], $newPath);
                    StudentDocument::create([
                        'student_id' => $student->id,
                        'application_id' => $application->id,
                        'path' => $newPath
                    ]);
                }
            }


            DB::commit();
            return $this->successJsonResponse('Application created successfully', $application, '', 201);
        } catch (\Throwable $th) {
            DB::rollBack();
            \Log::error($th);
            return $this->exceptionJsonResponse('Failed to create applcation', $th);

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
            $application->delete();


            DB::commit();

            return $this->successJsonResponse('Application deleted successfully');
        } catch (\Exception $e) {
            // Rollback the transaction if any error occurs
            DB::rollBack();
            Log::error('Failed to delete application', ['error' => $e->getMessage()]);

            return $this->exceptionJsonResponse('Failed to delete application', $e);
        }
    }

    public function updateApplicationFile(Request $request)
    {

        $applicationId = (int)$request->application_id;
        $applicationDocument = StudentDocument::where('application_id', $applicationId)->first();
        $studentId = $applicationDocument->student_id;
        $student = Student::where('id', $studentId)->first();
        if (!empty($request->document_paths)) {
            foreach ($request->document_paths as $path) {
                $filename = basename($path['path']);
                $newPath = 'channelPartnerPanel/studentDocument/' . $studentId . '/' . $student->email . '_' . $filename;
                Storage::disk('do_spaces')->move($path['path'], $newPath);
                StudentDocument::create([
                    'student_id' => $student->id,
                    'application_id' => $applicationId,
                    'path' => $newPath
                ]);
            }
        }

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
            'file' => 'nullable|file', // Ensure this validation is correct for your case
        ]);

        DB::beginTransaction();

        try {
            // Find the application
            $application = ApplicationList::findOrFail($id);

            // Update the application's status
            $application->status = $validatedData['status'];
            $application->save();

            $path = null;
            // Handle file upload with FileUploadService
            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $filePath = 'channelPartnerPanel/studentDocument/' . $application->student_id;
                $fileUploadService = new FileUploadService();
                $path = $fileUploadService->upload($filePath, $file);

            }

            // Add status history
            ApplicationStatusHistory::create([
                'application_id' => $application->id,
                'status' => $validatedData['status'],
                'comment' => $validatedData['comment'],
                'document' => $path,
            ]);

            DB::commit();
            return $this->successJsonResponse('Status updated successfully', $application, '', 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error('Failed to update status', ['error' => $th->getMessage()]);
            return $this->exceptionJsonResponse('Failed to update status', $th);
        }
    }


    public function addComment(Request $request, $id)
    {
        $request->validate([
            'comment' => 'required|string',
        ]);

        $comment = new ApplicationCommentHistory();
        $comment->application_id = $id;
        $comment->comment = $request->comment;
        $comment->status = 0;
        $comment->save();

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

        $communication = new UniversityCommunication();
        $communication->application_id = $id;
        $communication->subject = $request->subject;
        $communication->message = $request->message;
        $communication->created_by = auth('api')->user()->id; // Set the user who made the communication
        $communication->save();

        return response()->json(['message' => 'Communication added successfully', 'communication' => $communication], 201);
    }




}
