<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NewApplicationNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $application;

    public function __construct($application)
    {
        $this->application = $application;
    }

    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage())
                    ->subject('New Application Created')
                    ->view('emails.new_application', ['application' => $this->application]);
    }

    public function toArray($notifiable)
    {
        return [
            'application_id' => $this->application->application_id,
            'student_name' => $this->application->student->first_name . ' ' . $this->application->student->last_name,
            'student_email' => $this->application->student->email,
            'counsellor_name' => $this->application->user->name,
            'counsellor_email' => $this->application->user->email,
            'university_name' => $this->application->university->name,
            'intake_name' => $this->application->intake->name,
            'course_name' => $this->application->courseDetails->course->name,
        ];
    }
}
