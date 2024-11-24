<?php

namespace App\Services;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use App\Notifications\StatusUpdateNotification;
use App\Notifications\CommentAddedNotification;
use App\Notifications\UniversityCommunicationAddedNotification;
use App\Notifications\NewApplicationNotification;
use App\Notifications\ApplicationOfficerAssignedNotification;
use App\Notifications\ApplicationRequestAcceptedNotification;
use App\Notifications\ApplicationRequestRejectedNotification;
use App\Notifications\AcoAoCommunicationAddedNotification;
use App\Notifications\ComplianceOfficerAssignedNotification;
use App\Notifications\AcoCoCommunicationAddedNotification;
use App\Notifications\ComplianceRequestAcceptedNotification;
use App\Notifications\ComplianceRequestRejectedNotification;
use App\Events\ApplicationEvent;
use App\Events\UniversityCommunicationEvent;
use App\Events\NewApplicationEvent;
use App\Events\ApplicationOfficerAssignedEvent;
use App\Events\ApplicationRequestAcceptedEvent;
use App\Events\ApplicationRequestRejectedEvent;
use App\Events\AcoAoCommunicationAddedEvent;
use App\Events\ComplianceOfficerAssignedEvent;
use App\Events\AcoCoCommunicationAddedEvent;
use App\Events\ComplianceRequestAcceptedEvent;
use App\Events\ComplianceRequestRejectedEvent;

class NotificationService
{
    public function notifyRelevantUsers($application, array $additionalDetails, $recipients, int $senderId, string $senderName, string $senderEmail, string $eventType)
    {
        try {
            // Filter out any null emails and duplicates
            $filteredRecipients = $recipients->filter(function ($recipient) {
                return !is_null($recipient->email) && trim($recipient->email) !== '';
            })->unique('email');

            // Get the authenticated user
            $authUser = auth('api')->user();

            // Filter out the authenticated user from recipients
            if ($authUser) {
                $filteredRecipients = $filteredRecipients->filter(function ($recipient) use ($authUser) {
                    return $recipient->id !== $authUser->id;
                });
            }

            $details = [
                'subject' => '',
                'body' => '',
                'recipients' => $filteredRecipients->pluck('email')->toArray(),
                'sender_id' => $senderId,
                'sender_name' => $senderName,
                'sender_email' => $senderEmail,
                'notification_type' => 'email',
                'notification_text' => '',
                'notification_route' => '',
                'notification_hash' => '',
                'application_id' => $application->application_id,
            ];

            switch ($eventType) {
                case 'status_update':
                    $details['subject'] = 'Application Status Changed';
                    $details['body'] = "Hello,<br><br>"
                        . "Status update for the following application:<br><br>"
                        . "<strong>Application Id:</strong> {$application->application_id}<br>"
                        . "<strong>Current Status:</strong> {$application->status_text}<br>"
                        . "<strong>Student Name:</strong> {$application->student->full_name}<br>"
                        . "<strong>Student Email:</strong> {$application->student->email}<br>"
                        . "<strong>University Name:</strong> {$application->university->name}<br>"
                        . "<strong>Intake:</strong> {$application->intake->name}<br>"
                        . "<strong>Course:</strong> {$application->courseDetails->course->name}<br><br>"
                        . "<strong>Old Status:</strong> {$additionalDetails['old_status']}<br>"
                        . "<strong>New Status:</strong> {$application->status_text}<br>"
                        . "<strong>Comment:</strong> " . nl2br(e($additionalDetails['comment'])) . "<br>";
                    $details['notification_text'] = "Status update for application {$application->application_id}";
                    $details['notification_route'] = 'application-details';
                    $details['notification_hash'] = 'status';
                    $details['application_id'] = $application->application_id;
                    Notification::send($filteredRecipients, new StatusUpdateNotification($details));
                    foreach ($filteredRecipients as $recipient) {
                        $details['recipient_id'] = $recipient->id;
                        event(new ApplicationEvent($application, $details));
                    }
                    break;

                case 'comment_added':
                    $details['subject'] = 'New Comment Added';
                    $details['body'] = "A new comment has been added to the application.<br><br>"
                        . "<strong>Comment:</strong> " . $additionalDetails['comment'] . "<br>"
                        . "<strong>Application ID:</strong> {$application->application_id}<br>"
                        . "<strong>Student Email:</strong> {$application->student->email}<br>"
                        . "<strong>University Name:</strong> {$application->university->name}<br>"
                        . "<strong>Intake Name:</strong> {$application->intake->name}<br>";
                    $details['notification_text'] = "New comment added to application {$application->application_id}";
                    $details['notification_route'] = 'application-details';
                    $details['notification_hash'] = 'comments';
                    $details['application_id'] = $application->application_id;
                    Notification::send($filteredRecipients, new CommentAddedNotification($details));
                    foreach ($filteredRecipients as $recipient) {
                        $details['recipient_id'] = $recipient->id;
                        event(new ApplicationEvent($application, $details));
                    }
                    break;

                case 'university_communication_added':
                    $details['subject'] = 'New University Communication Added';
                    $details['body'] = "A new university communication has been added.<br><br>"
                        . "<strong>Subject:</strong> {$additionalDetails['subject']}<br>"
                        . "<strong>Message:</strong> " . $additionalDetails['message'] . "<br>"
                        . "<strong>Application ID:</strong> {$application->application_id}<br>"
                        . "<strong>Student Email:</strong> {$application->student->email}<br>"
                        . "<strong>University Name:</strong> {$application->university->name}<br>"
                        . "<strong>Intake Name:</strong> {$application->intake->name}<br>";
                    $details['notification_text'] = "New university communication for application {$application->application_id}";
                    $details['notification_route'] = 'application-details';
                    $details['notification_hash'] = 'university-communication';
                    $details['application_id'] = $application->application_id;
                    Notification::send($filteredRecipients, new UniversityCommunicationAddedNotification($details));
                    foreach ($filteredRecipients as $recipient) {
                        $details['recipient_id'] = $recipient->id;
                        event(new UniversityCommunicationEvent($application, $details));
                    }
                    break;

                case 'new_application':
                    $details['subject'] = 'New Application Submitted';
                    $details['body'] = "A new application has been submitted.<br><br>"
                        . "<strong>Application ID:</strong> {$application->application_id}<br>"
                        . "<strong>Student Name:</strong> {$application->student->full_name}<br>"
                        . "<strong>Student Email:</strong> {$application->student->email}<br>"
                        . "<strong>University Name:</strong> {$application->university->name}<br>"
                        . "<strong>Intake Name:</strong> {$application->intake->name}<br>"
                        . "<strong>Course Name:</strong> {$application->courseDetails->course->name}<br>"
                        . "<strong>Channel Partner Name:</strong> {$additionalDetails['channel_partner_name']}<br>"
                        . "<strong>Channel Partner Email:</strong> {$additionalDetails['channel_partner_email']}<br>";
                    $details['notification_text'] = "New application submitted: {$application->application_id}";
                    $details['notification_route'] = 'application-details';
                    $details['notification_hash'] = '';
                    $details['application_id'] = $application->application_id;
                    Notification::send($filteredRecipients, new NewApplicationNotification($details));
                    foreach ($filteredRecipients as $recipient) {
                        $details['recipient_id'] = $recipient->id;
                        event(new NewApplicationEvent($application, $details));
                    }
                    break;

                case 'application_officer_assigned':
                    $details['subject'] = 'Application Officer Assigned';
                    $details['body'] = "An Application Officer has been assigned to an application.<br><br>"
                        . "<strong>Application ID:</strong> {$application->application_id}<br>"
                        . "<strong>Student Name:</strong> {$application->student->full_name}<br>"
                        . "<strong>Student Email:</strong> {$application->student->email}<br>"
                        . "<strong>University Name:</strong> {$application->university->name}<br>"
                        . "<strong>Intake Name:</strong> {$application->intake->name}<br>"
                        . "<strong>Assigned Officer:</strong> {$additionalDetails['assigned_officer_name']}<br>"
                        . "<strong>Assigned Officer Email:</strong> {$additionalDetails['assigned_officer_email']}<br>"
                        . "<strong>Assigned By:</strong> {$additionalDetails['assigner_name']}<br>";
                    $details['notification_text'] = "You have been assigned to application {$application->application_id}";
                    $details['notification_route'] = 'application-request';
                    $details['notification_hash'] = '';
                    $details['application_id'] = $application->application_id;
                    Notification::send($filteredRecipients, new ApplicationOfficerAssignedNotification($details));
                    foreach ($filteredRecipients as $recipient) {
                        $details['recipient_id'] = $recipient->id;
                        event(new ApplicationOfficerAssignedEvent($application, $details));
                    }
                    break;

                case 'application_request_accepted':
                    $details['subject'] = 'Application Request Accepted';
                    $details['body'] = "An Application Officer has accepted an application request.<br><br>"
                        . "<strong>Application ID:</strong> {$application->application_id}<br>"
                        . "<strong>Student Name:</strong> {$application->student->full_name}<br>"
                        . "<strong>Student Email:</strong> {$application->student->email}<br>"
                        . "<strong>University Name:</strong> {$application->university->name}<br>"
                        . "<strong>Intake Name:</strong> {$application->intake->name}<br>"
                        . "<strong>Accepting Officer:</strong> {$additionalDetails['officer_name']}<br>"
                        . "<strong>Officer Email:</strong> {$additionalDetails['officer_email']}<br>";
                    $details['notification_text'] = "Application request accepted by application officer for application {$application->application_id}";
                    $details['notification_route'] = 'application-details';
                    $details['notification_hash'] = 'assign-officer';
                    $details['application_id'] = $application->application_id;
                    Notification::send($filteredRecipients, new ApplicationRequestAcceptedNotification($details));
                    foreach ($filteredRecipients as $recipient) {
                        $details['recipient_id'] = $recipient->id;
                        event(new ApplicationRequestAcceptedEvent($application, $details));
                    }
                    break;

                case 'application_request_rejected':
                    $details['subject'] = 'Application Request Rejected';
                    $details['body'] = "An Application Officer has rejected an application request.<br><br>"
                        . "<strong>Application ID:</strong> {$application->application_id}<br>"
                        . "<strong>Student Name:</strong> {$application->student->full_name}<br>"
                        . "<strong>Student Email:</strong> {$application->student->email}<br>"
                        . "<strong>University Name:</strong> {$application->university->name}<br>"
                        . "<strong>Intake Name:</strong> {$application->intake->name}<br>"
                        . "<strong>Rejecting Officer:</strong> {$additionalDetails['officer_name']}<br>"
                        . "<strong>Officer Email:</strong> {$additionalDetails['officer_email']}<br>";
                    $details['notification_text'] = "Application request rejected by application officer for application {$application->application_id}";
                    $details['notification_route'] = 'application-details';
                    $details['notification_hash'] = 'assign-officer';
                    $details['application_id'] = $application->application_id;
                    Notification::send($filteredRecipients, new ApplicationRequestRejectedNotification($details));
                    foreach ($filteredRecipients as $recipient) {
                        $details['recipient_id'] = $recipient->id;
                        event(new ApplicationRequestRejectedEvent($application, $details));
                    }
                    break;

                case 'aco_ao_communication_added':
                    $details['subject'] = 'New ACO & AO Communication Added';
                    $details['body'] = "A new communication has been added between ACO and AO for an application.<br><br>"
                        . "<strong>Application ID:</strong> {$application->application_id}<br>"
                        . "<strong>Student Name:</strong> {$application->student->full_name}<br>"
                        . "<strong>Student Email:</strong> {$application->student->email}<br>"
                        . "<strong>University Name:</strong> {$application->university->name}<br>"
                        . "<strong>Intake Name:</strong> {$application->intake->name}<br>"
                        . "<strong>Added By:</strong> {$senderName}<br>"
                        . "<strong>Added By Email:</strong> {$senderEmail}<br>"
                        . "<strong>Message:</strong> " . nl2br(e($additionalDetails['message'])) . "<br>";
                    $details['notification_text'] = "New ACO & AO communication added for application {$application->application_id}";
                    $details['notification_route'] = 'application-details';
                    $details['notification_hash'] = 'aco-ao-communication';
                    $details['application_id'] = $application->application_id;
                    Notification::send($filteredRecipients, new AcoAoCommunicationAddedNotification($details));
                    foreach ($filteredRecipients as $recipient) {
                        $details['recipient_id'] = $recipient->id;
                        event(new AcoAoCommunicationAddedEvent($application, $details));
                    }
                    break;

                case 'compliance_officer_assigned':
                    $details['subject'] = 'Compliance Officer Assigned';
                    $details['body'] = "A Compliance Officer has been assigned to an application.<br><br>"
                        . "<strong>Application ID:</strong> {$application->application_id}<br>"
                        . "<strong>Student Name:</strong> {$application->student->full_name}<br>"
                        . "<strong>Student Email:</strong> {$application->student->email}<br>"
                        . "<strong>University Name:</strong> {$application->university->name}<br>"
                        . "<strong>Intake Name:</strong> {$application->intake->name}<br>"
                        . "<strong>Assigned Compliance Officer:</strong> {$additionalDetails['assigned_officer_name']}<br>"
                        . "<strong>Assigned Officer Email:</strong> {$additionalDetails['assigned_officer_email']}<br>"
                        . "<strong>Assigned By:</strong> {$additionalDetails['assigner_name']}<br>";
                    $details['notification_text'] = "You have a new compliance request for application {$application->application_id}";
                    $details['notification_route'] = 'compliance-request';
                    $details['notification_hash'] = '';
                    $details['application_id'] = $application->application_id;
                    Notification::send($filteredRecipients, new ComplianceOfficerAssignedNotification($details));
                    foreach ($filteredRecipients as $recipient) {
                        $details['recipient_id'] = $recipient->id;
                        event(new ComplianceOfficerAssignedEvent($application, $details));
                    }
                    break;

                case 'aco_co_communication_added':
                    $details['subject'] = 'New ACO & CO Communication Added';
                    $details['body'] = "A new communication has been added between ACO and CO for an application.<br><br>"
                        . "<strong>Application ID:</strong> {$application->application_id}<br>"
                        . "<strong>Student Name:</strong> {$application->student->full_name}<br>"
                        . "<strong>Student Email:</strong> {$application->student->email}<br>"
                        . "<strong>University Name:</strong> {$application->university->name}<br>"
                        . "<strong>Intake Name:</strong> {$application->intake->name}<br>"
                        . "<strong>Added By:</strong> {$senderName}<br>"
                        . "<strong>Added By Email:</strong> {$senderEmail}<br>"
                        . "<strong>Message:</strong> " . nl2br(e($additionalDetails['message'])) . "<br>";
                    $details['notification_text'] = "New ACO & CO communication added for application {$application->application_id}";
                    $details['notification_route'] = 'application-details';
                    $details['notification_hash'] = 'aco-co-communication';
                    $details['application_id'] = $application->application_id;
                    Notification::send($filteredRecipients, new AcoCoCommunicationAddedNotification($details));
                    foreach ($filteredRecipients as $recipient) {
                        $details['recipient_id'] = $recipient->id;
                        event(new AcoCoCommunicationAddedEvent($application, $details));
                    }
                    break;

                case 'compliance_request_accepted':
                    $details['subject'] = 'Compliance Request Accepted';
                    $details['body'] = "A Compliance Officer has accepted a compliance request.<br><br>"
                        . "<strong>Application ID:</strong> {$application->application_id}<br>"
                        . "<strong>Student Name:</strong> {$application->student->full_name}<br>"
                        . "<strong>Student Email:</strong> {$application->student->email}<br>"
                        . "<strong>University Name:</strong> {$application->university->name}<br>"
                        . "<strong>Intake Name:</strong> {$application->intake->name}<br>"
                        . "<strong>Accepting Officer:</strong> {$additionalDetails['officer_name']}<br>"
                        . "<strong>Officer Email:</strong> {$additionalDetails['officer_email']}<br>";
                    $details['notification_text'] = "Compliance request accepted for application {$application->application_id}";
                    $details['notification_route'] = 'application-details';
                    $details['notification_hash'] = 'assign-compliance-officer';
                    $details['application_id'] = $application->application_id;
                    Notification::send($filteredRecipients, new ComplianceRequestAcceptedNotification($details));
                    foreach ($filteredRecipients as $recipient) {
                        $details['recipient_id'] = $recipient->id;
                        event(new ComplianceRequestAcceptedEvent($application, $details));
                    }
                    break;

                case 'compliance_request_rejected':
                    $details['subject'] = 'Compliance Request Rejected';
                    $details['body'] = "A Compliance Officer has rejected a compliance request.<br><br>"
                        . "<strong>Application ID:</strong> {$application->application_id}<br>"
                        . "<strong>Student Name:</strong> {$application->student->full_name}<br>"
                        . "<strong>Student Email:</strong> {$application->student->email}<br>"
                        . "<strong>University Name:</strong> {$application->university->name}<br>"
                        . "<strong>Intake Name:</strong> {$application->intake->name}<br>"
                        . "<strong>Rejecting Officer:</strong> {$additionalDetails['officer_name']}<br>"
                        . "<strong>Officer Email:</strong> {$additionalDetails['officer_email']}<br>";
                    $details['notification_text'] = "Compliance request rejected for application {$application->application_id}";
                    $details['notification_route'] = 'application-details';
                    $details['notification_hash'] = 'assign-compliance-officer';
                    $details['application_id'] = $application->application_id;
                    Notification::send($filteredRecipients, new ComplianceRequestRejectedNotification($details));
                    foreach ($filteredRecipients as $recipient) {
                        $details['recipient_id'] = $recipient->id;
                        event(new ComplianceRequestRejectedEvent($application, $details));
                    }
                    break;
            }

            Log::info('Notification sent successfully', [
                'event_type' => $eventType,
                'application_id' => $application->application_id,
                'recipient_count' => count($filteredRecipients)
            ]);

        } catch (\Exception $e) {
            Log::error('Failed to send notification', [
                'event_type' => $eventType,
                'application_id' => $application->application_id,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            throw $e;
        }
    }
}
