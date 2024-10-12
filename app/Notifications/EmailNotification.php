<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Log;

class EmailNotification extends Notification implements ShouldQueue
{
    use Queueable;
    private $details;

    /**
     * Create a new notification instance.
     */
    public function __construct(array $details)
    {
        // Log the details recipients
        Log::info($details['recipients']);
        // Filter out null or empty email addresses
        if (isset($details['recipients']) && is_array($details['recipients'])) {
            $details['recipients'] = array_filter($details['recipients'], function ($email) {
                return !is_null($email) && trim($email) !== '';
            });
        }
        // Log the details recipients
        Log::info($details['recipients']);
        $this->details = $details;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via($notifiable)
    {
        // Determine the channels based on whether it's a database notification or mail
        if ($this->details['send_via'] ?? null === 'database') {
            return ['database'];
        }

        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable)
    {
        return (new MailMessage())
            ->bcc($this->details['recipients'])
            ->subject($this->details['subject'])
            ->view('emails.general', ['body' => $this->details['body'],'subject' => $this->details['subject']]);
    }
    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'subject' => $this->details['subject'],
            'body' => $this->details['body'],
            'recipients' => $this->details['recipients'],
            'sender_id' => $this->details['sender_id'],  // Include sender_id
            'sender_name' => $this->details['sender_name'],  // Include sender_name
            'sender_email' => $this->details['sender_email'],  // Include sender_email
            'notification_type' => $this->details['notification_type'],
            'notification_text' => $this->details['notification_text'] ?? 'A new course/university/intake request has been submitted',
            'notification_route' => $this->details['notification_route'] ?? '',

        ];
    }
}
