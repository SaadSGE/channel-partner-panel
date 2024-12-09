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
use Illuminate\Support\Facades\Storage;
use App\Models\StudentDocument;
use App\Jobs\GenerateStudentDocumentsZip;

class StudentService
{
    public function storeGeneralInfo(array $data): Student
    {
        Log::info(json_encode($data));
        return Student::updateOrCreate(
            ['id' => $data['id'] ?? null],
            [
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
            ]
        );
    }

    public function storeInterestedUniversities(Student $student, array $universitiesData): void
    {
        if (empty($universitiesData)) {
            return;
        }
        foreach ($universitiesData as &$data) {
            $data['student_id'] = $student->id;
        }
        StudentInterestedUniversity::upsert(
            $universitiesData,
            ['id'],
            ['student_id', 'country_id', 'intake_id', 'university_id', 'course_id', 'updated_at']
        );
    }

    public function storeEducationalHistories(Student $student, array $historiesData): void
    {
        foreach ($historiesData as &$data) {
            $data['student_id'] = $student->id;
        }
        StudentEducationalHistory::upsert(
            $historiesData,
            ['id'],
            ['student_id', 'degree_name', 'institution_name', 'passing_year', 'result', 'updated_at']
        );
    }

    public function storeEnglishProficiencies(Student $student, array $proficienciesData): void
    {
        foreach ($proficienciesData as &$data) {
            $data['student_id'] = $student->id;
        }
        StudentEnglishProficiency::upsert(
            $proficienciesData,
            ['id'],
            ['student_id', 'proficiency_title', 'overall_score', 'listening', 'speaking', 'writing', 'reading', 'updated_at']
        );
    }

    public function storeEmploymentHistories(Student $student, array $employmentData): void
    {
        foreach ($employmentData as &$data) {
            $data['student_id'] = $student->id;
        }
        StudentEmploymentHistory::upsert(
            $employmentData,
            ['id'],
            ['student_id', 'company_name', 'designation', 'updated_at']
        );
    }

    public function handleDocumentUploads(Student $student, array $documentPaths, ?int $applicationId = null): void
    {
        foreach ($documentPaths as $path) {
            $filename = basename($path['path']);
            $newPath = "channelPartnerPanel/studentDocument/{$student->email}/{$student->email}_{$filename}";

            Storage::disk('do_spaces')->move($path['path'], $newPath);
            Log::info($path);
            StudentDocument::updateOrCreate(
                ['id' => $path['id'] ?? null],
                [
                    'student_id' => $student->id,
                    'application_id' => $applicationId,
                    'path' => $newPath,
                    'document_name' => $path['document_name'],
                    'updated_at' => now(),
                ]
            );
        }

        GenerateStudentDocumentsZip::dispatch($student);
    }
}
