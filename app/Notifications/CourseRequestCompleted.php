<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CourseRequestCompleted extends Notification implements ShouldQueue
{
    use Queueable;

    protected $requestRecord;

    public function __construct($requestRecord)
    {
        $this->requestRecord = $requestRecord;
    }

    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage())
            ->subject('Course Request Completed')
            ->view('emails.general', [
                'subject' => 'Course Request Completed',
                'body' => 'Your course request has been completed.<br>' .
                          'University: ' . $this->requestRecord->university_name . '<br>' .
                          'Course: ' . $this->requestRecord->course_name . '<br>' .
                          'Intake: ' . $this->requestRecord->intake . '<br>' .
                          'Thank you for using our application!'
            ]);
    }

    public function toArray($notifiable)
    {
        return [
            'subject' => 'Requested Course Added',
            'body' => 'Your requested course has been added.',
            'university_name' => $this->requestRecord->university_name,
            'course_name' => $this->requestRecord->course_name,
            'intake' => $this->requestRecord->intake,
            'notification_type' => 'email',
            'notification_text' => 'Your course request has been completed',
            'notification_route' => '/course-request', // Adjust this route as needed
        ];
    }


}
