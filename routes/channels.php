<?php

use Illuminate\Support\Facades\Broadcast;
use App\Models\User;

// Authentication for private user channels
Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    \Log::info('Authenticating user for channel', ['user' => $user, 'id' => $id]);
    // Allow users to listen to their own channel
    if ((int) $user->id === (int) $id) {
        return true;
    }

    // Allow admin users to listen to all channels
    if ($user->role === 'admin') {
        return true;
    }

    // Allow parent users to listen to their children's channels
    $childIds = $user->fetch_children;
    if (in_array($id, $childIds)) {
        return true;
    }

    // Allow application officers to listen to their assigned applications' channels
    if ($user->role === 'Application Officer') {
        $assignedApplications = $user->applicationOfficerAssignments()
            ->where('status', 'accepted')
            ->pluck('application_id');

        $assignedUserIds = User::whereHas('applications', function ($query) use ($assignedApplications) {
            $query->whereIn('id', $assignedApplications);
        })->pluck('id');

        if (in_array($id, $assignedUserIds->toArray())) {
            return true;
        }
    }

    // Allow compliance officers to listen to their assigned applications' channels
    if ($user->role === 'Compliance Officer') {
        $assignedApplications = $user->complianceOfficerAssignments()
            ->where('status', 'accepted')
            ->pluck('application_id');

        $assignedUserIds = User::whereHas('applications', function ($query) use ($assignedApplications) {
            $query->whereIn('id', $assignedApplications);
        })->pluck('id');

        if (in_array($id, $assignedUserIds->toArray())) {
            return true;
        }
    }

    return false;
});
