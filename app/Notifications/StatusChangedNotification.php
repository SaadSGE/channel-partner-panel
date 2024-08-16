<?php

// app/Notifications/StatusChangedNotification.php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class StatusChangedNotification extends Notification implements ShouldQueue
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
                    ->subject('Application Status Changed')
                    ->view('emails.status_change', ['application' => $this->application]);
    }

    public function toArray($notifiable)
    {
        return [
            'id' => $this->application->id,
            'application_id' => $this->application->application_id,
            'status' => $this->application->status,
            'student_name' => $this->application->student->first_name . ' ' . $this->application->student->last_name,
            'comment' => $this->application->comment,
        ];
    }
}
