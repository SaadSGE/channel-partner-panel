<?php

// app/Notifications/WelcomeNotification.php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class WelcomeNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage())
                    ->subject('Welcome to Our Platform')
                    ->view('emails.welcome', ['notifiable' => $this->user]);
    }

    public function toArray($notifiable)
    {
        return [
            'message' => 'Welcome ' . $this->user->name . ' to the platform!',
        ];
    }
}
