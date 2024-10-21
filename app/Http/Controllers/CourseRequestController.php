<?php

namespace App\Http\Controllers;

use App\Models\RequestRecord;
use App\Models\User;
use Illuminate\Http\Request;
use App\Notifications\CourseRequestCompleted;

class CourseRequestController extends Controller
{
    public function index()
    {
        $requests = RequestRecord::with('user')
            ->where('status', 0)
            ->get();

        return $this->successJsonResponse('Course requests retrieved successfully', $requests);
    }

    public function complete(Request $request, $id)
    {
        $requestRecord = RequestRecord::findOrFail($id);
        $requestRecord->status = 1;
        $requestRecord->save();

        // Send notification to the user
        $user = User::find($requestRecord->user_id);
        $user->notify(new CourseRequestCompleted($requestRecord));

        return $this->successJsonResponse('Course request completed successfully');
    }
}
