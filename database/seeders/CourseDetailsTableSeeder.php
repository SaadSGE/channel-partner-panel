<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class CourseDetailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('course_details')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $courseDetails = [
            [
                'course_id' => 1,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 1,
                'tuition_fee' => 2172.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence program are expected to hold a first or upper-second class bachelor\'s degree in Computer Science, Mathematics, Statistics, or a closely related field. Relevant professional experience in data analysis, machine learning, or software development can compensate for degree subjects that are less directly related. Candidates with a background in physics or engineering, who demonstrate substantial quantitative skills, may also be considered.',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency through one of the following qualifications: IELTS with an overall band score of at least 6.5, with no component less than 6.0; TOEFL iBT with a minimum total score of 90, with at least 20 in reading, listening, and writing; or equivalent scores in other recognized tests like PTE Academic or CAE.'
            ],
            [
                'course_id' => 2,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 2,
                'tuition_fee' => 3233.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence must...',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency...'
            ],
            [
                'course_id' => 3,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 3,
                'tuition_fee' => 3807.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence must...',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency...'
            ],
            [
                'course_id' => 4,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 4,
                'tuition_fee' => 2685.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence must...',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency...'
            ],
            [
                'course_id' => 5,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 5,
                'tuition_fee' => 2086.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence must...',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency...'
            ],
            // Add 15 more records with different combinations
            [
                'course_id' => 1,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 1,
                'tuition_fee' => 2172.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence program are expected to hold a first or upper-second class bachelor\'s degree in Computer Science, Mathematics, Statistics, or a closely related field. Relevant professional experience in data analysis, machine learning, or software development can compensate for degree subjects that are less directly related. Candidates with a background in physics or engineering, who demonstrate substantial quantitative skills, may also be considered.',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency through one of the following qualifications: IELTS with an overall band score of at least 6.5, with no component less than 6.0; TOEFL iBT with a minimum total score of 90, with at least 20 in reading, listening, and writing; or equivalent scores in other recognized tests like PTE Academic or CAE.'
            ],
            [
                'course_id' => 2,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 2,
                'tuition_fee' => 3233.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence must...',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency...'
            ],
            [
                'course_id' => 3,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 3,
                'tuition_fee' => 3807.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence must...',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency...'
            ],
            [
                'course_id' => 4,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 4,
                'tuition_fee' => 2685.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence must...',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency...'
            ],
            [
                'course_id' => 5,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 5,
                'tuition_fee' => 2086.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence must...',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency...'
            ],
            [
                'course_id' => 1,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 1,
                'tuition_fee' => 2172.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence program are expected to hold a first or upper-second class bachelor\'s degree in Computer Science, Mathematics, Statistics, or a closely related field. Relevant professional experience in data analysis, machine learning, or software development can compensate for degree subjects that are less directly related. Candidates with a background in physics or engineering, who demonstrate substantial quantitative skills, may also be considered.',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency through one of the following qualifications: IELTS with an overall band score of at least 6.5, with no component less than 6.0; TOEFL iBT with a minimum total score of 90, with at least 20 in reading, listening, and writing; or equivalent scores in other recognized tests like PTE Academic or CAE.'
            ],
            [
                'course_id' => 2,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 2,
                'tuition_fee' => 3233.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence must...',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency...'
            ],
            [
                'course_id' => 3,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 3,
                'tuition_fee' => 3807.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence must...',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency...'
            ],
            [
                'course_id' => 4,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 4,
                'tuition_fee' => 2685.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence must...',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency...'
            ],
            [
                'course_id' => 5,
                'country_id' => 1,
                'intake_id' => 1,
                'university_id' => 5,
                'tuition_fee' => 2086.00,
                'course_duration' => '2 years',
                'academic_requirement' => 'Applicants to the MSc in Artificial Intelligence must...',
                'english_requirement' => 'Non-native English speakers must demonstrate English proficiency...'
            ],
        ];

        DB::table('course_details')->insert($courseDetails);
    }
}
