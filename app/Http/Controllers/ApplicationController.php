<?php

namespace App\Http\Controllers;

use App\Models\ApplicationList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ApplicationDocument;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

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
            'student_passport_no' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'student_first_name' => 'required|string|max:255',
            'student_last_name' => 'required|string|max:255',
            'student_whatsapp_number' => 'nullable|string|max:255',
            'counsellor_number' => 'nullable|string|max:255',
            'student_email' => 'nullable|string|email|max:255',
            'counsellor_email' => 'nullable|string|email|max:255',
            'student_address' => 'required|string',
            'student_city' => 'required|string|max:255',
            'student_country' => 'required|string|max:255',
            'student_region_state' => 'nullable|string|max:255',
            'gender' => 'required|in:male,female',
            'visa_refusal' => 'required|in:yes,no',
            'document_paths' => 'nullable|array',
            'document_paths.*' => 'string'
        ]);

        DB::beginTransaction();

        try {
            $applicationData = $request->except('document_paths');
            $application = ApplicationList::create($applicationData);
            if (!empty($validatedData['document_paths'])) {
                foreach ($validatedData['document_paths'] as $path) {
                    ApplicationDocument::create([
                        'application_id' => $application->id,
                        'path' => $path
                    ]);
                }
            }

            DB::commit();
            return response()->json(['message' => 'Application created successfully'], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to create application', 'details' => $e->getMessage()], 500);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
