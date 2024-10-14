<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CourseRequestCompleted extends Notification
{
    use Queueable;

    protected $requestRecord;

    public function __construct($requestRecord)
    {
        $this->requestRecord = $requestRecord;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage())
            ->subject('Course Request Completed')
            ->line('Your course request has been completed.')
            ->line('University: ' . $this->requestRecord->university_name)
            ->line('Course: ' . $this->requestRecord->course_name)
            ->line('Intake: ' . $this->requestRecord->intake)
            ->line('Thank you for using our application!');
    }
}
