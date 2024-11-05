<?php

namespace App\Services;

use App\Models\Student;
use App\Models\StudentInterestedUniversity;
use App\Models\StudentEducationalHistory;
use App\Models\StudentEnglishProficiency;
use App\Models\StudentEmploymentHistory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class StudentService
{
    public function createStudent(array $data)
    {
        try {
            DB::beginTransaction();

            $student = $this->storeGeneralInfo($data['general_info']);

            if (!empty($data['interested_university'])) {
                $this->storeInterestedUniversity($student, $data['interested_university']);
            }

            if (!empty($data['education_history'])) {
                $this->storeEducationalHistory($student, $data['education_history']);
            }

            if (!empty($data['english_proficiency'])) {
                $this->storeEnglishProficiency($student, $data['english_proficiency']);
            }

            if (!empty($data['employment_history'])) {
                $this->storeEmploymentHistory($student, $data['employment_history']);
            }

            DB::commit();
            return $student;

        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error('Student creation failed', [
                'error' => $th->getMessage(),
                'trace' => $th->getTraceAsString()
            ]);
            throw $th;
        }
    }

    private function storeGeneralInfo(array $data): Student
    {
        return Student::create([
            'student_id' => Str::random(10),
            'first_name' => $data['student_first_name'],
            'last_name' => $data['student_last_name'],
            'passport_no' => $data['student_passport_no'],
            'whatsapp_number' => $data['student_whatsapp_number'] ?? null,
            'email' => $data['student_email'],
            'address' => $data['student_address'] ?? null,
            'city' => $data['student_city'] ?? null,
            'country' => $data['student_country'] ?? null,
            'region' => null,
            'state' => $data['student_region_state'] ?? null,
            'date_of_birth' => $data['date_of_birth'],
            'gender' => $data['gender'],
            'visa_refusal' => $data['visa_refusal'],
        ]);
    }

    private function storeInterestedUniversity(Student $student, array $data): void
    {
        StudentInterestedUniversity::create([
            'student_id' => $student->id,
            'country_id' => $data['country_id'] ?? null,
            'intake_id' => $data['intake_id'] ?? null,
            'university_id' => $data['university_id'] ?? null,
            'course_id' => $data['course_id'] ?? null,
        ]);
    }

    private function storeEducationalHistory(Student $student, array $data): void
    {
        StudentEducationalHistory::create([
            'student_id' => $student->id,
            'degree_name' => $data['degree_name'] ?? null,
            'institution_name' => $data['institution_name'] ?? null,
            'passing_year' => $data['passing_year'] ?? null,
            'result' => $data['result'] ?? null,
        ]);
    }

    private function storeEnglishProficiency(Student $student, array $data): void
    {
        StudentEnglishProficiency::create([
            'student_id' => $student->id,
            'proficiency_title' => $data['proficiency_title'] ?? null,
            'overall_score' => $data['overall_score'] ?? null,
            'listening' => $data['listening'] ?? null,
            'speaking' => $data['speaking'] ?? null,
            'writing' => $data['writing'] ?? null,
            'reading' => $data['reading'] ?? null,
        ]);
    }

    private function storeEmploymentHistory(Student $student, array $data): void
    {
        StudentEmploymentHistory::create([
            'student_id' => $student->id,
            'company_name' => $data['company_name'] ?? null,
            'designation' => $data['designation'] ?? null,
        ]);
    }
}
