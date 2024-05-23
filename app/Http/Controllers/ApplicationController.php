<?php

namespace App\Http\Controllers;

use App\Models\ApplicationList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ApplicationDocument;
use Illuminate\Support\Str;
use App\Models\Student;
use App\Models\StudentDocument;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $searchQuery = strtoupper(strtolower(trim(request()->query('q'))));
        $perPage = (int)request()->query('perPage') ?: 10;
        $sortBy = (string)request()->query('sortBy');
        $sortDesc = filter_var(request()->query('sortDesc'), FILTER_VALIDATE_BOOLEAN);
        $queryResult = ApplicationList::with(['course','country','intake','university','courseDetails','student'])->when($searchQuery, function ($query, $searchQuery) {
            return $query->where(function ($query) use ($searchQuery) {
                $query->where('application_id', 'LIKE', "%$searchQuery%");

            });
        })
        ->when($sortBy, function ($query) use ($sortBy, $sortDesc) {
            return
                $query->when($sortBy === 'id', function ($sq) use ($sortDesc) {
                    return $sq->when($sortDesc, function ($ssq) {
                        return $ssq->orderBy('P.id', 'DESC');
                    }, function ($ssq) {
                        return $ssq->orderBy('P.id');
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
            'student_email' => 'nullable|string|email|max:255|unique:students,email',
            'counsellor_email' => 'nullable|string|email|max:255',
            'student_address' => 'nullable|string',
            'student_city' => 'nullable|string|max:255',
            'student_country' => 'nullable|string|max:255',
            'student_region_state' => 'nullable|string|max:255',
            'gender' => 'required|in:male,female',
            'visa_refusal' => 'required|in:yes,no',
            'document_paths' => 'nullable|array',
            'document_paths.*' => 'string'
        ]);

        DB::beginTransaction();

        try {

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


            if (!empty($validatedData['document_paths'])) {
                foreach ($validatedData['document_paths'] as $path) {
                    StudentDocument::create([
                        'student_id' => $student->id,
                        'path' => $path
                    ]);
                }
            }
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
                'user_id' => 1,
                'student_id' => $student->id,
                'counsellor_number' => $validatedData['counsellor_number'],
                'counsellor_email' => $validatedData['counsellor_email'],
                'status' => 0,
            ]);

            DB::commit();
            return $this->successJsonResponse('Application created successfully', $application, '', 201);
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->errorJsonResponse('Failed to create applcation', $th);

        }
    }



    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $applicationDetails = ApplicationList::with(['course','country','intake','university','courseDetails','student.document'])->where('id', $id)->first();
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
        //
    }
}
