<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notification;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $user = auth('api')->user();

        $notifications = $user->notifications()
            ->latest()
            ->limit(10)
            ->get()
            ->map(function ($notification) {
                return [
                    'id' => $notification->id,
                    'title' => $notification->data['subject'] ?? '',
                    'message' => $notification->data['notification_text'] ?? '',
                    'time' => $notification->created_at->diffForHumans(),
                    'read' => !is_null($notification->read_at),
                    'color' => 'primary', // You may want to add this to your notification data if needed
                    'icon' => 'tabler-bell', // You may want to add this to your notification data if needed
                    'notification_type' => $notification->data['notification_type'] ?? '',
                    'sender_name' => $notification->data['sender_name'] ?? '',
                    'sender_email' => $notification->data['sender_email'] ?? '',

                    'notification_route' => $notification->data['notification_route'] ?? '',
                    'application_id' => $notification->data['application_id'] ?? '',
                ];
            });

        return $this->successJsonResponse('Notifications retrieved successfully', $notifications);
    }

    public function markAsRead(Request $request, $id)
    {
        $notification = auth('api')->user()->notifications()->findOrFail($id);
        $notification->markAsRead();

        return response()->json(['success' => true]);
    }

    public function markAllAsRead(Request $request)
    {
        auth('api')->user()->unreadNotifications->markAsRead();

        return response()->json(['success' => true]);
    }

    public function destroy(Request $request, $id)
    {
        $notification =  auth('api')->user()->notifications()->findOrFail($id);
        $notification->delete();

        return response()->json(['success' => true]);
    }

    public function getAllNotifications(Request $request)
    {
        $user = auth('api')->user();
        $perPage = $request->query('perPage', 10);
        $page = $request->query('page', 1);

        $notifications = $user->notifications()
            ->whereRaw("JSON_EXTRACT(data, '$.notification_text') IS NOT NULL")
            ->whereRaw("JSON_EXTRACT(data, '$.notification_text') != ''")
            ->latest()
            ->paginate($perPage, ['*'], 'page', $page);

        $formattedNotifications = $notifications->map(function ($notification) {
            return [
                'id' => $notification->id,
                'title' => $notification->data['subject'] ?? '',
                'message' => $notification->data['notification_text'] ?? '',
                'time' => $notification->created_at->diffForHumans(),
                'read' => !is_null($notification->read_at),
                'color' => 'primary',
                'icon' => 'tabler-bell',
                'notification_type' => $notification->data['notification_type'] ?? '',
                'sender_name' => $notification->data['sender_name'] ?? '',
                'sender_email' => $notification->data['sender_email'] ?? '',
                'notification_route' => $notification->data['notification_route'] ?? '',
                'application_id' => $notification->data['application_id'] ?? '',
            ];
        });

        return response()->json([
            'notifications' => $formattedNotifications,
            'total' => $notifications->total(),
            'per_page' => $notifications->perPage(),
            'current_page' => $notifications->currentPage(),
            'last_page' => $notifications->lastPage(),
        ]);

    }
}
