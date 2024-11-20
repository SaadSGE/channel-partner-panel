<?php

namespace App\Services;

use App\Notifications\EmailNotification;
use Illuminate\Support\Facades\Notification;
use App\Notifications\StatusUpdateNotification;
use App\Notifications\CommentAddedNotification;

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
    public function sendNotification(array $details, $recipients, string $subject, string $body, int $senderId, string $senderName, string $senderEmail, string $notification_text, string $notification_route, string $notification_hash)
    {
        // Get the authenticated user
        $authUser = auth('api')->user();

        // Filter out the authenticated user from recipients
        $filteredRecipients = $recipients->filter(function ($recipient) use ($authUser) {
            return $recipient->id !== $authUser->id;
        });

        $details = array_merge($details, [
            'subject' => $subject,
            'body' => $body,
            'recipients' => $filteredRecipients->pluck('email')->toArray(),
            'sender_id' => $senderId,
            'sender_name' => $senderName,
            'sender_email' => $senderEmail,
            'notification_type' => 'email',
            'notification_text' => $notification_text,
            'notification_route' => $notification_route,
            'notification_hash' => $notification_hash,
        ]);

        // Send email notification
        // Notification::route('mail', 'no-reply@shabujglobal.africa')
        //     ->notify(new EmailNotification($details));

        // Send database notification
        $details['send_via'] = 'database';
        Notification::send($filteredRecipients, new EmailNotification($details));
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
        $details = [
            'subject' => '',
            'body' => '',
            'recipients' => $recipients->pluck('email')->toArray(),
            'sender_id' => $senderId,
            'sender_name' => $senderName,
            'sender_email' => $senderEmail,
            'notification_type' => 'email',
            'notification_text' => '',
            'notification_route' => '',
            'notification_hash' => '',
        ];

        switch ($eventType) {
            case 'status_update':
                $details['subject'] = 'Application Status Changed';
                $details['body'] = "Hello,<br><br>Status update for the following application:<br><br>...";
                $details['notification_text'] = "Status update for application {$application->application_id}";
                $details['notification_route'] = 'application-details';
                $details['notification_hash'] = 'status';
                Notification::send($recipients, new StatusUpdateNotification($details));
                break;

            case 'comment_added':
                $details['subject'] = 'New Comment Added';
                $details['body'] = "A new comment has been added to the application.<br><br>...";
                $details['notification_text'] = "New comment added to application {$application->application_id}";
                $details['notification_route'] = 'application-details';
                $details['notification_hash'] = 'comments';
                Notification::send($recipients, new CommentAddedNotification($details));
                break;

                // Add other cases for different event types
        }
    }
}
