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
                    ->view('emails.status_changed', ['application' => $this->application]);
    }

    public function toArray($notifiable)
    {
        return [
            'application_id' => $this->application->id,
            'new_status' => $this->application->status,
            'message' => 'The status of an application has changed.',
        ];
    }
}
