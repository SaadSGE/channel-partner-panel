<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Student;
use App\Models\StudentEducationalHistory;
use App\Models\StudentEmploymentHistory;
use App\Models\StudentEnglishProficiency;
use App\Models\StudentInterestedUniversity;
use App\Models\StudentDocument;
use App\Models\User;
use App\Models\CourseDetail;
use App\Models\CourseDetails;

class StudentCompleteSeeder extends Seeder
{
    public function run(): void
    {
        // Create 50 students with all related data
        Student::factory()
            ->count(50)
            ->create()
            ->each(function ($student) {
                // Create 1-3 educational histories for each student
                $educationCount = rand(1, 3);
                for ($i = 0; $i < $educationCount; $i++) {
                    StudentEducationalHistory::create([
                        'student_id' => $student->id,
                        'degree_name' => ['Bachelor of Science', 'Master of Arts', 'High School Diploma'][rand(0, 2)],
                        'institution_name' => ['University of Delhi', 'Mumbai University', 'Bangalore Institute'][rand(0, 2)],
                        'passing_year' => rand(2015, 2023),
                        'result' => rand(60, 95) . '%'
                    ]);
                }

                // Create 0-2 employment histories
                $employmentCount = rand(0, 2);
                for ($i = 0; $i < $employmentCount; $i++) {
                    StudentEmploymentHistory::create([
                        'student_id' => $student->id,
                        'company_name' => ['TCS', 'Infosys', 'Wipro', 'Tech Mahindra'][rand(0, 3)],
                        'designation' => ['Software Engineer', 'Business Analyst', 'Project Manager'][rand(0, 2)]
                    ]);
                }

                // Create English proficiency record
                StudentEnglishProficiency::create([
                    'student_id' => $student->id,
                    'proficiency_title' => ['IELTS', 'TOEFL', 'PTE'][rand(0, 2)],
                    'overall_score' => rand(60, 90) / 10,
                    'listening' => rand(60, 90) / 10,
                    'speaking' => rand(60, 90) / 10,
                    'writing' => rand(60, 90) / 10,
                    'reading' => rand(60, 90) / 10
                ]);

                // Create 1-3 interested universities

                $universityCount = rand(1, 3);
                for ($i = 0; $i < $universityCount; $i++) {
                    $courseDetail = CourseDetails::inRandomOrder()->first();
                    StudentInterestedUniversity::create([
                        'student_id' => $student->id,
                        'country_id' => $courseDetail->country_id,
                        'intake_id' => $courseDetail->intake_id,
                        'university_id' => $courseDetail->university_id,
                        'course_id' => $courseDetail->course_id
                    ]);
                }

                // Create 2-5 documents
                $documentCount = rand(2, 5);
                $documentTypes = ['passport', 'transcript', 'cv', 'recommendation_letter', 'statement_of_purpose'];
                for ($i = 0; $i < $documentCount; $i++) {
                    $existingDocument = \DB::table('student_documents')->inRandomOrder()->first();



                    if ($existingDocument) {
                        StudentDocument::create([
                            'student_id' => $student->id,
                            'document_name' => $documentTypes[array_rand($documentTypes)],
                            'path' => $existingDocument->path
                        ]);
                    }
                }
            });
    }
}
