<?php

namespace App\Http\Controllers;

use App\Notifications\EmailNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use APP\Models\User;

class EmailController extends Controller
{
    /**
     * Send an email to multiple recipients and store the notification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendEmail(Request $request)
    {
        try {

            $request->validate([
                'subject' => 'required|string',
                'body' => 'required|string',
                'recipients' => 'required|array',
            ]);


            $users = User::whereIn('id', $request->recipients)->get();


            $emails = $users->pluck('email')->toArray();

            $details = [
                'subject' => $request->subject,
                'body' => $request->body,
                'url' => url('/emails'),
                'recipients' => $emails,
                'sender_id' => $request->user()->id,
                'sender_name' => $request->user()->full_name,
                 'sender_email' => $request->user()->email,
                'notification_type' => 'email',
            ];


            Notification::route('mail', 'no-reply@shabujglobal.africa')
                ->notify(new EmailNotification($details));

            $details['send_via'] = 'database';
            Notification::send($users, new EmailNotification($details));


            $request->user()->notify(new EmailNotification(array_merge($details, [
                'send_via' => 'database',
                'sender_id' => $request->user()->id,
            ])));

            return $this->successJsonResponse('Email Sent Successfully');

        } catch (\Illuminate\Validation\ValidationException $e) {
            return $this->handleValidationErrors($e);
        } catch (\Throwable $th) {

            \Log::error('Error sending emails: ' . $th);

            return $this->exceptionJsonResponse('Failed to sent email', $th);
        }
    }


    public function receivedEmails(Request $request)
    {

        $user = $request->user();

        $receivedEmails = $user->notifications()
            ->where('data->notification_type', 'email')
            ->where('data->sender_id', '!=', $user->id)
            ->get();
        return $this->successJsonResponse("Email find", $receivedEmails);

    }

    public function sentEmails(Request $request)
    {

        $user = $request->user();

        $sentEmails = $user->notifications()
            ->where('data->notification_type', 'email')
            ->where('data->sender_id', $user->id)
            ->get();
        return $this->successJsonResponse("Email find", $sentEmails);

    }




}
