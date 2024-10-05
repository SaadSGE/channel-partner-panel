<?php

namespace App\Services;

use App\Notifications\EmailNotification;
use Illuminate\Support\Facades\Notification;

class EmailService
{
    /**
     * Send an email and database notification.
     *
     * @param array $details
     * @param \Illuminate\Support\Collection $recipients
     * @param string $subject
     * @param string $body
     * @param int $senderId
     * @param string $senderName
     * @param string $senderEmail
     * @param string $notification_text
     * @param string $notification_route
     */
    public function sendNotification(array $details, $recipients, string $subject, string $body, int $senderId, string $senderName, string $senderEmail, string $notification_text, string $notification_route)
    {
        $details = array_merge($details, [
            'subject' => $subject,
            'body' => $body,
            'recipients' => $recipients->pluck('email')->toArray(),
            'sender_id' => $senderId,
            'sender_name' => $senderName,
            'sender_email' => $senderEmail,
            'notification_type' => 'email',
            'notification_text' => $notification_text,
            'notification_route' => $notification_route,
        ]);

        // Send email notification
        Notification::route('mail', 'no-reply@shabujglobal.africa')
            ->notify(new EmailNotification($details));

        // Send database notification
        $details['send_via'] = 'database';
        Notification::send($recipients, new EmailNotification($details));
    }

    /**
     * Prepare and send email notification for application events.
     *
     * @param string $eventType
     * @param object $application
     * @param array $additionalDetails
     * @param \Illuminate\Support\Collection $recipients
     * @param int $senderId
     * @param string $senderName
     * @param string $senderEmail
     */
    public function sendApplicationNotification(string $eventType, $application, array $additionalDetails, $recipients, int $senderId, string $senderName, string $senderEmail)
    {
        $subject = '';
        $body = '';
        $notification_text = '';
        $notification_route = '';
        switch ($eventType) {
            case 'status_update':
                $subject = 'Application Status Changed';
                $body = "Hello,<br><br>"
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
                $notification_text = "Status update for application {$application->application_id}";
                $notification_route = 'application-details';
                break;

            case 'comment_added':
                $subject = 'New Comment Added';
                $body = "A new comment has been added to the application.<br><br>"
                    . "<strong>Comment:</strong> " . nl2br(e($additionalDetails['comment'])) . "<br>"
                    . "<strong>Application ID:</strong> {$application->application_id}<br>"
                    . "<strong>Student Email:</strong> {$application->student->email}<br>"
                    . "<strong>University Name:</strong> {$application->university->name}<br>"
                    . "<strong>Intake Name:</strong> {$application->intake->name}<br>";
                $notification_text = "New comment added to application {$application->application_id}";
                $notification_route = 'application-details';
                break;

            case 'university_communication_added':
                $subject = 'New University Communication Added';
                $body = "A new university communication has been added.<br><br>"
                    . "<strong>Subject:</strong> {$additionalDetails['subject']}<br>"
                    . "<strong>Message:</strong> " . $additionalDetails['message'] . "<br>"
                    . "<strong>Application ID:</strong> {$application->application_id}<br>"
                    . "<strong>Student Email:</strong> {$application->student->email}<br>"
                    . "<strong>University Name:</strong> {$application->university->name}<br>"
                    . "<strong>Intake Name:</strong> {$application->intake->name}<br>";
                $notification_text = "New university communication for application {$application->application_id}";
                $notification_route = 'application-details';
                break;

            case 'new_application':
                $subject = 'New Application Submitted';
                $body = "A new application has been submitted.<br><br>"
                    . "<strong>Application ID:</strong> {$application->application_id}<br>"
                    . "<strong>Student Email:</strong> {$application->student->email}<br>"
                    . "<strong>University Name:</strong> {$application->university->name}<br>"
                    . "<strong>Intake Name:</strong> {$application->intake->name}<br>";
                $notification_text = "New application submitted: {$application->application_id}";
                $notification_route = 'application-details';
                break;

            case 'aco_ao_communication_added':
                $subject = 'New ACO & AO Communication Added';
                $body = "A new ACO & AO communication has been added.<br><br>"
                    . "<strong>Message:</strong> " . nl2br(e($additionalDetails['message'])) . "<br>"
                    . "<strong>Application ID:</strong> {$application->application_id}<br>"
                    . "<strong>Student Email:</strong> {$application->student->email}<br>"
                    . "<strong>University Name:</strong> {$application->university->name}<br>"
                    . "<strong>Intake Name:</strong> {$application->intake->name}<br>";
                $notification_text = "New ACO & AO communication for application {$application->application_id}";
                $notification_route = 'application-details';
                break;

            case 'aco_co_communication_added':
                $subject = 'New ACO & CO Communication Added';
                $body = "A new ACO & CO communication has been added.<br><br>"
                    . "<strong>Message:</strong> " . nl2br(e($additionalDetails['message'])) . "<br>"
                    . "<strong>Application ID:</strong> {$application->application_id}<br>"
                    . "<strong>Student Email:</strong> {$application->student->email}<br>"
                    . "<strong>University Name:</strong> {$application->university->name}<br>"
                    . "<strong>Intake Name:</strong> {$application->intake->name}<br>";
                $notification_text = "New ACO & CO communication for application {$application->application_id}";
                $notification_route = 'application-details';
                break;
        }

        $this->sendNotification($additionalDetails, $recipients, $subject, $body, $senderId, $senderName, $senderEmail, $notification_text, $notification_route);
    }
}
