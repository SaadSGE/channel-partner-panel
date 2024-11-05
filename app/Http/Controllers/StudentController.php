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
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class StudentController extends Controller
{


    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            // Create student
            $student = $this->createStudent($request->general_info);

            // Handle optional data
            $this->handleInterestedUniversities($student, $request->interested_university);
            $this->handleEducationalHistory($student, $request->education_history);
            $this->handleEnglishProficiency($student, $request->english_proficiency);
            $this->handleEmploymentHistory($student, $request->employment_history);

            // Log activity
            $this->logStudentActivity($request, $student);

            DB::commit();

            return $this->successJsonResponse('Student created successfully', $student, '', 201);

        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error('Failed to create student', ['error' => $th->getMessage()]);
            return $this->exceptionJsonResponse('Failed to create student', $th);
        }
    }

    private function createStudent(array $data)
    {
        $request = new StudentGeneralInfoRequest();
        $request->merge($data);
        $validated = $request->validate($request->rules());

        return Student::create([
            'student_id' => Str::random(10),
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'passport_no' => $validated['passport_no'],
            'date_of_birth' => $validated['date_of_birth'],
            'whatsapp_number' => $validated['whatsapp_number'] ?? null,
            'email' => $validated['email'],
            'address' => $validated['address'] ?? null,
            'city' => $validated['city'] ?? null,
            'country' => $validated['country'] ?? null,
            'region' => $validated['region'] ?? null,
            'state' => $validated['state'] ?? null,
            'gender' => $validated['gender'],
            'visa_refusal' => $validated['visa_refusal'],
        ]);
    }

    private function handleInterestedUniversities(Student $student, ?array $data)
    {
        if (empty($data)) {
            return;
        }

        $request = new StudentInterestedUniversityRequest();
        $request->merge($data);
        $validated = $request->validate($request->rules());

        StudentInterestedUniversity::create([
            'student_id' => $student->id,
            'country_id' => $validated['country_id'],
            'intake_id' => $validated['intake_id'],
            'university_id' => $validated['university_id'],
            'course_id' => $validated['course_id'],
        ]);
    }

    private function handleEducationalHistory(Student $student, ?array $data)
    {
        if (empty($data)) {
            return;
        }

        $request = new StudentEducationalHistoryRequest();
        $request->merge($data);
        $validated = $request->validate($request->rules());

        StudentEducationalHistory::create([
            'student_id' => $student->id,
            'degree_name' => $validated['degree_name'],
            'institution_name' => $validated['institution_name'],
            'passing_year' => $validated['passing_year'],
            'result' => $validated['result'],
        ]);
    }

    private function handleEnglishProficiency(Student $student, ?array $data)
    {
        if (empty($data)) {
            return;
        }

        $request = new StudentEnglishProficiencyRequest();
        $request->merge($data);
        $validated = $request->validate($request->rules());

        StudentEnglishProficiency::create([
            'student_id' => $student->id,
            'proficiency_title' => $validated['proficiency_title'],
            'overall_score' => $validated['overall_score'],
            'listening' => $validated['listening'] ?? null,
            'speaking' => $validated['speaking'] ?? null,
            'writing' => $validated['writing'] ?? null,
            'reading' => $validated['reading'] ?? null,
        ]);
    }

    private function handleEmploymentHistory(Student $student, ?array $data)
    {
        if (empty($data)) {
            return;
        }

        $request = new StudentEmploymentHistoryRequest();
        $request->merge($data);
        $validated = $request->validate($request->rules());

        StudentEmploymentHistory::create([
            'student_id' => $student->id,
            'company_name' => $validated['company_name'],
            'designation' => $validated['designation'],
        ]);
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

    public function show($id)
    {
        try {
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
            ])->findOrFail($id);

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

    public function update(Request $request, $id)
    {
        try {
            // Validate the request
            $validated = $request->validate([
                'first_name' => 'sometimes|required|string|max:255',
                'last_name' => 'sometimes|required|string|max:255',
                'email' => 'sometimes|required|email|unique:students,email,' . $id,
                'passport_no' => 'sometimes|required|string|max:50|unique:students,passport_no,' . $id,
                'date_of_birth' => 'sometimes|required|date',
            ]);

            $student = Student::findOrFail($id);

            // Update only the allowed fields
            $student->update($validated);

            // Log the activity
            activity()
                ->causedBy(Auth::user())
                ->performedOn($student)
                ->withProperties([
                    'ip' => $request->ip(),
                    'user_agent' => $request->userAgent(),
                    'updated_fields' => array_keys($validated),
                ])
                ->log('student_update');

            return $this->successJsonResponse('Student updated successfully', $student);
        } catch (\Exception $e) {
            Log::error('Failed to update student', ['error' => $e->getMessage(), 'id' => $id]);
            return $this->exceptionJsonResponse('Failed to update student', $e);
        }
    }
}
