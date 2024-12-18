<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\StudentInterestedUniversity;
use App\Models\StudentEducationalHistory;
use App\Models\StudentEnglishProficiency;
use App\Models\StudentEmploymentHistory;
use App\Http\Requests\StudentGeneralInfoRequest;
use App\Http\Requests\StudentInterestedUniversityRequest;
use App\Http\Requests\StudentEducationalHistoryRequest;
use App\Http\Requests\StudentEnglishProficiencyRequest;
use App\Http\Requests\StudentEmploymentHistoryRequest;
use App\Http\Requests\StudentDocumentRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use App\Services\StudentService;

class StudentController extends Controller
{
    private $studentService;


    public function index(Request $request)
    {
        $user = auth('api')->user();
        $perPage = (int) $request->query('perPage', 10);
        $searchQuery = strtoupper(trim($request->query('searchQuery', '')));
        $sortBy = $request->query('sortBy', 'created_at');
        $orderBy = $request->query('orderBy', 'desc');

        $query = Student::with([
            'interestedUniversities.university',
            'interestedUniversities.course',
            'interestedUniversities.country',
            'interestedUniversities.intake',

        ]);

        if ($searchQuery) {
            $query->where(function ($q) use ($searchQuery) {
                $q->where('first_name', 'LIKE', "%$searchQuery%")
                    ->orWhere('last_name', 'LIKE', "%$searchQuery%")
                    ->orWhere('email', 'LIKE', "%$searchQuery%")
                    ->orWhere('passport_no', 'LIKE', "%$searchQuery%")
                    ->orWhere('student_id', 'LIKE', "%$searchQuery%")
                    ->orWhereHas('educationalHistories', function ($q) use ($searchQuery) {
                        $q->where('institution_name', 'LIKE', "%$searchQuery%")
                            ->orWhere('degree_name', 'LIKE', "%$searchQuery%");
                    })
                    ->orWhereHas('employmentHistories', function ($q) use ($searchQuery) {
                        $q->where('company_name', 'LIKE', "%$searchQuery%")
                            ->orWhere('designation', 'LIKE', "%$searchQuery%");
                    });
            });
        }

        // Add filters
        if ($request->filled('gender')) {
            $query->where('gender', $request->query('gender'));
        }

        if ($request->filled('visa_refusal')) {
            $query->where('visa_refusal', $request->query('visa_refusal'));
        }

        if ($request->filled('country')) {
            $query->where('country', $request->query('country'));
        }

        // Filter by university
        if ($request->filled('university_id')) {
            $query->whereHas('interestedUniversities', function ($q) use ($request) {
                $q->where('university_id', $request->query('university_id'));
            });
        }

        // Filter by course
        if ($request->filled('course_id')) {
            $query->whereHas('interestedUniversities', function ($q) use ($request) {
                $q->where('course_id', $request->query('course_id'));
            });
        }

        // Filter by English proficiency type
        if ($request->filled('proficiency_title')) {
            $query->whereHas('englishProficiency', function ($q) use ($request) {
                $q->where('proficiency_title', $request->query('proficiency_title'));
            });
        }

        // Filter by overall score range
        if ($request->filled('min_score') && $request->filled('max_score')) {
            $query->whereHas('englishProficiency', function ($q) use ($request) {
                $q->whereBetween('overall_score', [
                    $request->query('min_score'),
                    $request->query('max_score')
                ]);
            });
        }

        // Add date range filter
        if ($request->filled('dateFrom')) {
            $query->whereDate('created_at', '>=', $request->query('dateFrom'));
        }

        if ($request->filled('dateTo')) {
            $query->whereDate('created_at', '<=', $request->query('dateTo'));
        }

        // Sorting
        if ($sortBy === 'university') {
            $query->orderBy(function ($query) {
                $query->select('name')
                    ->from('universities')
                    ->whereColumn('universities.id', 'student_interested_universities.university_id')
                    ->limit(1);
            }, $orderBy);
        } else {
            $query->orderBy($sortBy, $orderBy);
        }

        // Pagination
        $students = $query->paginate($perPage);

        // Log the activity


        return $this->successJsonResponse("Students found successfully", $students->items(), $students->total());
    }


    public function store(
        StudentGeneralInfoRequest $generalInfoRequest,
        StudentInterestedUniversityRequest $interestedUniversityRequest,
        StudentEducationalHistoryRequest $educationalHistoryRequest,
        StudentEnglishProficiencyRequest $englishProficiencyRequest,
        StudentEmploymentHistoryRequest $employmentHistoryRequest,
        StudentDocumentRequest $documentRequest,
        StudentService $studentService
    ) {
        try {
            DB::beginTransaction();

            // Create or update student with general info
            $student = $studentService->storeGeneralInfo($generalInfoRequest->validated()['general_info']);

            // Store interested universities with dependency injection of student
            $interestedUniversities = $interestedUniversityRequest->validated()['interested_university'] ?? [];
            $studentService->storeInterestedUniversities($student, $interestedUniversities);

            // Store educational histories with dependency injection of student
            $educationalHistories = $educationalHistoryRequest->validated()['educational_history'] ?? [];
            $studentService->storeEducationalHistories($student, $educationalHistories);

            // Store English proficiencies with dependency injection of student
            $englishProficiencies = $englishProficiencyRequest->validated()['english_proficiency'] ?? [];
            $studentService->storeEnglishProficiencies($student, $englishProficiencies);

            // Store employment histories with dependency injection of student
            $employmentHistories = $employmentHistoryRequest->validated()['employment_history'] ?? [];
            $studentService->storeEmploymentHistories($student, $employmentHistories);

            // Handle document uploads if any, passing the student object directly
            $documentPaths = $documentRequest->validated()['document_paths'] ?? [];
            if (!empty($documentPaths)) {
                $studentService->handleDocumentUploads($student, $documentPaths);
            }

            DB::commit();

            return $this->successJsonResponse('Student created successfully', $student, '', 201);

        } catch (\Illuminate\Validation\ValidationException $e) {
            DB::rollBack();
            return $this->handleValidationErrors($e);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error('Failed to create student', ['error' => $th->getMessage()]);
            return $this->exceptionJsonResponse('Failed to create student', $th);
        }
    }



    public function show($id)
    {
        try {
            //check if student exists or not
            $studentExists = Student::where('id', $id)->exists();
            if (!$studentExists) {
                return $this->errorJsonResponse('Student not found', [], 404);
            }
            $student = Student::with([
                'educationalHistories',
                'employmentHistories',
                'englishProficiency',
                'document',
                'interestedUniversities.university',
                'interestedUniversities.course',
                'interestedUniversities.country',
                'interestedUniversities.intake',
                'creator'
            ])->find($id);

            // Log the activity
            activity()
                ->performedOn($student)
                ->causedBy(auth('api')->user())
                ->withProperties([
                    'ip' => request()->ip(),
                    'user_agent' => request()->userAgent(),
                    'student_id' => $student->student_id,
                    'student_email' => $student->email
                ])
                ->log('student_view');

            return $this->successJsonResponse('Student details retrieved successfully', $student);
        } catch (\Exception $e) {
            Log::error('Failed to retrieve student details', [
                'error' => $e->getMessage(),
                'id' => $id
            ]);
            return $this->exceptionJsonResponse('Failed to retrieve student details', $e);
        }
    }

    public function update(
        int $studentId,
        StudentGeneralInfoRequest $generalInfoRequest,
        StudentInterestedUniversityRequest $interestedUniversityRequest,
        StudentEducationalHistoryRequest $educationalHistoryRequest,
        StudentEnglishProficiencyRequest $englishProficiencyRequest,
        StudentEmploymentHistoryRequest $employmentHistoryRequest,
        StudentDocumentRequest $documentRequest,
        StudentService $studentService
    ) {
        try {
            DB::beginTransaction();

            // Find the existing student record
            $student = Student::findOrFail($studentId);

            // Update general info of the student
            $student = $studentService->storeGeneralInfo(array_merge(
                ['id' => $student->id],
                $generalInfoRequest->validated()['general_info']
            ));

            // Update interested universities
            $interestedUniversities = $interestedUniversityRequest->validated()['interested_university'] ?? [];
            $studentService->storeInterestedUniversities($student, $interestedUniversities);

            // Update educational histories
            $educationalHistories = $educationalHistoryRequest->validated()['educational_history'] ?? [];
            $studentService->storeEducationalHistories($student, $educationalHistories);

            // Update English proficiencies
            $englishProficiencies = $englishProficiencyRequest->validated()['english_proficiency'] ?? [];
            $studentService->storeEnglishProficiencies($student, $englishProficiencies);

            // Update employment histories
            $employmentHistories = $employmentHistoryRequest->validated()['employment_history'] ?? [];
            $studentService->storeEmploymentHistories($student, $employmentHistories);

            // Handle document uploads if any
            $documentPaths = $documentRequest->validated()['document_paths'] ?? [];
            if (!empty($documentPaths)) {
                $studentService->handleDocumentUploads($student, $documentPaths);
            }

            DB::commit();

            return $this->successJsonResponse('Student updated successfully', $student);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error('Failed to update student', ['error' => $th->getMessage()]);
            return $this->exceptionJsonResponse('Failed to update student', $th);
        }
    }

    public function destroy($id)
    {
        $student = Student::findOrFail($id);
        $student->interestedUniversities()->delete();
        $student->educationalHistories()->delete();
        $student->englishProficiency()->delete();
        $student->employmentHistories()->delete();
        $student->document()->delete();
        $student->delete();
        return $this->successJsonResponse('Student deleted successfully', null);
    }

    private function logStudentActivity(Request $request, Student $student)
    {
        activity()
            ->performedOn($student)
            ->causedBy(auth()->user())
            ->withProperties([
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'student_id' => $student->student_id,
                'student_email' => $student->email,
            ])
            ->log('student_created');
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        $students = Student::where('created_by', auth('api')->id())
            ->when($query, function ($q) use ($query) {
                return $q->where(function ($subQ) use ($query) {
                    $subQ->where('first_name', 'like', "%{$query}%")
                        ->orWhere('last_name', 'like', "%{$query}%")
                        ->orWhere('email', 'like', "%{$query}%")
                        ->orWhere('passport_no', 'like', "%{$query}%");
                });
            })
            ->get(['id', 'first_name', 'last_name', 'email', 'passport_no', 'date_of_birth']);

        return $this->successJsonResponse('Students fetched successfully', $students);
    }

}
