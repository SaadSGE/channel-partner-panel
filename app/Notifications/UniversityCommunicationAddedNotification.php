<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UniversityCommunicationAddedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    private $details;

    public function __construct(array $details)
    {
        $this->details = $details;
    }

    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage())
            ->subject($this->details['subject'])
            ->view('emails.general', ['body' => $this->details['body']]);
    }

    public function toArray($notifiable)
    {
        return $this->details;
    }
}
