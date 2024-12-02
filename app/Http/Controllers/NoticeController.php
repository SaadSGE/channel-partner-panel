<?php

namespace App\Http\Controllers;

use App\Models\Notice;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    /**
     * Display a listing of active notices.
     */
    public function index()
    {
        $notices = Notice::where('status', true)->get();
        return $this->successJsonResponse('Notices retrieved successfully', $notices);
    }

    /**
     * Store a newly created notice.
     */
    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required|string'
        ]);

        $notice = Notice::create([
            'content' => $request->content,
            'status' => true
        ]);

        return $this->successJsonResponse('Notice created successfully', $notice, null, 201);
    }

    /**
     * Update the notice status.
     */
    public function update(Request $request, string $id)
    {
        $notice = Notice::findOrFail($id);

        $request->validate([
            'status' => 'required|boolean'
        ]);

        $notice->update([
            'status' => $request->status
        ]);

        return $this->successJsonResponse('Notice status updated successfully', $notice);
    }

    /**
     * Remove the specified notice.
     */
    public function destroy(string $id)
    {
        $notice = Notice::findOrFail($id);
        $notice->delete();

        return $this->successJsonResponse('Notice deleted successfully');
    }
}
