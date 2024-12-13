<?php

namespace App\Http\Controllers;

use App\Models\DailyTask;
use Illuminate\Http\Request;

class DailyTaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = DailyTask::query();

        // Search by user_id if provided
        $query->when($request->user_id, function ($q) use ($request) {
            return $q->where('user_id', $request->user_id);
        });

        // Search by date range if provided
        $query->when($request->dateFrom, function ($q) use ($request) {
            return $q->whereDate('created_at', '>=', $request->dateFrom);
        });

        $query->when($request->dateTo, function ($q) use ($request) {
            return $q->whereDate('created_at', '<=', $request->dateTo);
        });

        // Order by latest first
        $query->latest();

        // Paginate results (15 items per page by default)
        $dailyTasks = $query->paginate($request->per_page ?? 15);

        return $this->successJsonResponse('Daily tasks fetched successfully', $dailyTasks);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'yesterday_tasks' => 'required|string',
            'today_plans' => 'required|string',
            'blockers' => 'nullable|string',
        ]);
        $request->merge(['user_id' => auth('api')->user()->id]);

        $dailyTask = DailyTask::create($request->all());

        return $this->successJsonResponse('Daily task created successfully', $dailyTask);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $dailyTask = DailyTask::find($id);
        return $this->successJsonResponse('Daily task fetched successfully', $dailyTask);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $request->validate([
            'yesterday_tasks' => 'required|string',
            'today_plans' => 'required|string',
            'blockers' => 'nullable|string',
        ]);

        $dailyTask = DailyTask::find($id);
        $dailyTask->update($request->all());
        return $this->successJsonResponse('Daily task updated successfully', $dailyTask);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $dailyTask = DailyTask::find($id);
        $dailyTask->delete();
        return $this->successJsonResponse('Daily task deleted successfully');
    }
}
