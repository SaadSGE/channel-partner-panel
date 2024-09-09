<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use App\Models\ApplicationList;

class ApplicationControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_can_view_all_applications()
    {
        // Create a user with 'admin' role
        $adminUser = User::factory()->create(['role' => 'admin']);

        // Create some application records
        ApplicationList::factory()->count(5)->create();

        // Act as the admin user
        $this->actingAs($adminUser, 'api');

        // Send a GET request to the index endpoint
        $response = $this->getJson('/api/applications');

        // Dump the response content
        dump($response->content());

        // Assert that the response status is 200
        $response->assertStatus(200);

        // Assert that the response contains application data
        $response->assertJsonStructure([
            'status',
            'message',
            'data' => [
                '*' => [
                    'id',
                    'application_id',
                    'course_id',
                    'country_id',
                    'intake_id',
                    'university_id',
                    'course_details_id',
                    'user_id',
                    'student_id',
                    'counsellor_number',
                    'counsellor_email',
                    'status',
                    'created_by',
                    'created_at',
                    'updated_at',
                    'course' => ['id', 'type', 'name', 'created_at', 'updated_at'],
                    'country' => ['id', 'name', 'created_at', 'updated_at'],
                    'intake' => ['id', 'name', 'created_at', 'updated_at'],
                    'university' => ['id', 'country_id', 'name', 'logo', 'address', 'created_at', 'updated_at'],
                    'course_details' => [
                        'id', 'course_id', 'country_id', 'intake_id', 'university_id',
                        'tuition_fee', 'course_duration', 'academic_requirement', 'english_requirement',
                        'created_by', 'created_at', 'updated_at'
                    ],
                    'student' => [
                        'id', 'student_id', 'first_name', 'last_name', 'passport_no', 'date_of_birth',
                        'whatsapp_number', 'email', 'address', 'city', 'country', 'region', 'state',
                        'gender', 'visa_refusal', 'document_zip_link', 'created_at', 'updated_at', 'full_name'
                    ],
                    'user' => [
                        'id', 'parent_id', 'first_name', 'last_name', 'email', 'role',
                        'email_verified_at', 'mobile_number', 'whatsapp_number', 'company_name',
                        'website', 'address', 'city', 'post_code', 'country', 'recruit_countries',
                        'status', 'created_at', 'updated_at', 'full_name', 'record_count',
                        'dashboard' => [
                            'total', 'application_processing', 'application_submitted', 'pending_docs',
                            'offer_issue_conditional', 'offer_issue_unconditional', 'need_payment',
                            'cas_issued', 'additional_doc_needed', 'refund_required', 'application_rejected',
                            'session_expired', 'doc_received', 'partial_payment'
                        ],
                        'name_with_email', 'parent'
                    ]
                ]

        ],
        'total'
    ]);
    }

    public function test_channel_partner_can_view_own_applications()
    {
        // Create a channel partner user
        $channelPartnerUser = User::factory()->create(['role' => 'channel partner']);

        // Create applications for this user
        ApplicationList::factory()->count(3)->create([
            'created_by' => $channelPartnerUser->id,
        ]);

        // Create other applications for different users
        ApplicationList::factory()->count(2)->create();

        // Act as the channel partner
        $this->actingAs($channelPartnerUser, 'api');

        // Send a GET request to the index endpoint
        $response = $this->getJson('/api/applications');

        // Assert that the response status is 200
        $response->assertStatus(200);

        // Assert that only the applications created by this channel partner are returned
        $this->assertCount(3, $response->json('data'));
    }

    public function test_can_create_new_application()
    {
        // Create a user to act as the authenticated user
        $user = User::factory()->create();

        // Prepare application data
        $applicationData = [
            'course_id' => 1,
            'country_id' => 1,
            'intake_id' => 1,
            'university_id' => 1,
            'course_details_id' => 1,
            'student_passport_no' => 'A12345678',
            'date_of_birth' => '1990-01-01',
            'student_first_name' => 'John',
            'student_last_name' => 'Doe',
            'student_whatsapp_number' => '123456789',
            'student_email' => 'johndoe@example.com',
            'gender' => 'male',
            'visa_refusal' => 'no',
        ];

        // Act as the authenticated user
        $this->actingAs($user, 'api');

        // Send a POST request to create a new application
        $response = $this->postJson('/api/applications', $applicationData);

        // Assert that the response status is 201 (created)
        $response->assertStatus(201);

        // Assert that the application and student were created in the database
        $this->assertDatabaseHas('application_lists', [
            'student_id' => 1,
            'course_id' => 1,
        ]);

        $this->assertDatabaseHas('students', [
            'passport_no' => 'A12345678',
            'first_name' => 'John',
            'last_name' => 'Doe',
        ]);
    }

    public function test_store_application_validation_errors()
    {
        // Create a user to act as the authenticated user
        $user = User::factory()->create();

        // Prepare invalid application data (missing required fields)
        $invalidData = [
            'course_id' => null,
            'country_id' => null,
            'intake_id' => null,
        ];

        // Act as the authenticated user
        $this->actingAs($user, 'api');

        // Send a POST request with invalid data
        $response = $this->postJson('/api/applications', $invalidData);

        // Assert that the response status is 422 (validation error)
        $response->assertStatus(422);

        // Assert that the response contains validation errors
        $response->assertJsonValidationErrors(['course_id', 'country_id', 'intake_id']);
    }

    public function test_non_admin_cannot_view_all_applications()
    {
        // Create a user with 'user' role
        $regularUser = User::factory()->create(['role' => 'user']);

        // Create some application records
        ApplicationList::factory()->count(5)->create();

        // Act as the regular user
        $this->actingAs($regularUser, 'api');

        // Send a GET request to the index endpoint
        $response = $this->getJson('/api/applications');

        // Assert that the response status is 403 (forbidden)
        $response->assertStatus(403);
    }

    public function test_can_update_application_status()
    {
        $admin = User::factory()->create(['role' => 'admin']);
        $application = ApplicationList::factory()->create();

        // Act as the admin user
        $this->actingAs($admin, 'api');

        // Send a PUT request to update the status
        $response = $this->putJson("/api/applications/{$application->id}/status", [
            'status' => 1,
            'comment' => 'Status updated',
        ]);

        // Assert that the response status is 200
        $response->assertStatus(200);

        // Assert that the status was updated in the database
        $this->assertDatabaseHas('application_lists', [
            'id' => $application->id,
            'status' => 1,
        ]);

        // Assert that the status history was updated in the database
        $this->assertDatabaseHas('application_status_histories', [
            'application_id' => $application->id,
            'status' => 1,
            'comment' => 'Status updated',
        ]);
    }

    public function test_can_add_comment_to_application()
    {
        $user = User::factory()->create();
        $application = ApplicationList::factory()->create();

        // Act as the user
        $this->actingAs($user, 'api');

        // Send a POST request to add a comment
        $response = $this->postJson("/api/applications/{$application->id}/comments", [
            'comment' => 'Test comment',
        ]);

        // Assert that the response status is 201 (created)
        $response->assertStatus(201);

        // Assert that the comment was created in the database
        $this->assertDatabaseHas('application_comment_histories', [
            'application_id' => $application->id,
            'comment' => 'Test comment',
        ]);
    }

    public function test_can_add_university_communication()
    {
        $user = User::factory()->create();
        $application = ApplicationList::factory()->create();

        // Act as the user
        $this->actingAs($user, 'api');

        // Send a POST request to add university communication
        $response = $this->postJson("/api/applications/{$application->id}/university-communications", [
            'subject' => 'Test subject',
            'message' => 'Test message',
        ]);

        // Assert that the response status is 201 (created)
        $response->assertStatus(201);

        // Assert that the university communication was created in the database
        $this->assertDatabaseHas('university_communications', [
            'application_id' => $application->id,
            'subject' => 'Test subject',
            'message' => 'Test message',
        ]);
    }
}
