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
        $user = auth('api')->user();
        $perPage = (int) $request->query('perPage', 10);
        $searchQuery = strtoupper(trim($request->query('searchQuery', '')));
        $sortBy = $request->query('sortBy', 'created_at');
        $orderBy = $request->query('orderBy', 'desc');

        $query = DailyTask::with(['user:id,first_name,last_name,email']);

        // Search functionality
        $query->when($searchQuery, function ($q) use ($searchQuery) {
            return $q->where(function ($q) use ($searchQuery) {
                $q->where('yesterday_tasks', 'LIKE', "%$searchQuery%")
                    ->orWhere('today_plans', 'LIKE', "%$searchQuery%")
                    ->orWhere('blockers', 'LIKE', "%$searchQuery%")
                    ->orWhereHas('user', function ($q) use ($searchQuery) {
                        $q->where('first_name', 'LIKE', "%$searchQuery%")
                            ->orWhere('last_name', 'LIKE', "%$searchQuery%")
                            ->orWhere('email', 'LIKE', "%$searchQuery%");
                    });
            });
        });

        // Filters
        $query->when($request->filled('user_id'), function ($q) use ($request) {
            return $q->where('user_id', $request->query('user_id'));
        });

        $query->when($request->filled('dateFrom'), function ($q) use ($request) {
            return $q->whereDate('created_at', '>=', $request->query('dateFrom'));
        });

        $query->when($request->filled('dateTo'), function ($q) use ($request) {
            return $q->whereDate('created_at', '<=', $request->query('dateTo'));
        });

        // Sorting
        $query->orderBy($sortBy, $orderBy);

        // Pagination
        $dailyTasks = $query->paginate($perPage);

        // Log the activity
        //$this->logIndexActivity($request, $dailyTasks->total());

        return $this->successJsonResponse(
            'Daily tasks fetched successfully',
            $dailyTasks->items(),
            $dailyTasks->total()
        );
    }

    private function logIndexActivity(Request $request, int $totalResults)
    {
        $activityType = 'daily_task_index_view';
        $properties = [
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'total_results' => $totalResults,
        ];

        // Check if any filter or search is applied
        $filterParams = ['user_id', 'dateFrom', 'dateTo'];
        $appliedFilters = array_filter($request->only($filterParams));

        if (!empty($appliedFilters)) {
            $activityType = 'daily_task_filter';
            $properties['filters'] = $appliedFilters;
        }

        if ($request->filled('searchQuery')) {
            $activityType = 'daily_task_search';
            $properties['search_query'] = $request->query('searchQuery');
        }

        activity()
            ->causedBy(auth('api')->user())
            ->withProperties($properties)
                ->log($activityType);
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
