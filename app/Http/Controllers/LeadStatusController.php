<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LeadStatus;

class LeadStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = (int) $request->query('perPage', 10);
        $searchQuery = strtoupper(trim($request->query('searchQuery', '')));
        $sortBy = $request->query('sortBy', 'created_at');
        $orderBy = $request->query('orderBy', 'desc');
        $healthType = $request->query('health_type', null);
        $fetchAll = filter_var($request->query('fetchAll', false), FILTER_VALIDATE_BOOLEAN);
        $query = LeadStatus::query();

        if ($fetchAll) {
            $query->where('is_active', 1);
            return $this->successJsonResponse('Lead statuses fetched successfully', $query->get());
        }

        // Search functionality
        $query->when($searchQuery, function ($q) use ($searchQuery) {
            return $q->where(function ($q) use ($searchQuery) {
                $q->where('name', 'LIKE', "%$searchQuery%")
                  ->orWhere('health_type', 'LIKE', "%$searchQuery%")
                  ->orWhere('description', 'LIKE', "%$searchQuery%");
            });
        });

        // Filter by health type
        $query->when($healthType, function ($q) use ($healthType) {
            return $q->where('health_type', $healthType);
        });

        // Date range filters
        $query->when($request->filled('dateFrom'), function ($q) use ($request) {
            return $q->whereDate('created_at', '>=', $request->query('dateFrom'));
        })->when($request->filled('dateTo'), function ($q) use ($request) {
            return $q->whereDate('created_at', '<=', $request->query('dateTo'));
        });

        // Apply sorting
        $query->orderBy($sortBy, $orderBy);

        // Get paginated results
        $leadStatuses = $query->paginate($perPage);

        // Log the activity (optional, if you want to track like ApplicationController)
        //$this->logIndexActivity($request, $leadStatuses->total());

        return $this->successJsonResponse("Lead statuses fetched successfully", $leadStatuses->items(), $leadStatuses->total());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'color_code' => 'nullable|string',
            'health_rating' => 'nullable|integer',
            'health_type' => 'required|string|in:hot,warm,cold',
            'convert_to_student' => 'boolean',
            'dead_lead' => 'boolean',
        ]);
        $leadStatus = LeadStatus::create($request->all());
        return $this->successJsonResponse('Lead status created successfully', $leadStatus);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $leadStatus = LeadStatus::find($id);
        if (!$leadStatus) {
            return $this->errorJsonResponse('Lead status not found', 404);
        }
        return $this->successJsonResponse('Lead status fetched successfully', $leadStatus);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'color_code' => 'nullable|string',
            'health_rating' => 'nullable|integer',
            'health_type' => 'required|string|in:hot,warm,cold',
            'convert_to_student' => 'boolean',
            'dead_lead' => 'boolean',
        ]);
        $leadStatus = LeadStatus::find($id);
        if (!$leadStatus) {
            return $this->errorJsonResponse('Lead status not found', 404);
        }
        $leadStatus->update($request->all());
        return $this->successJsonResponse('Lead status updated successfully', $leadStatus);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $leadStatus = LeadStatus::find($id);
        if (!$leadStatus) {
            return $this->errorJsonResponse('Lead status not found', 404);
        }
        $leadStatus->delete();
        return $this->successJsonResponse('Lead status deleted successfully');
    }

    // Add this method if you want to log activities like ApplicationController
    private function logIndexActivity(Request $request, int $totalResults)
    {
        $activityType = 'lead_status_index_view';
        $properties = [
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'total_results' => $totalResults,
        ];

        // Check if any filter or search is applied
        $filterParams = ['health_type', 'dateFrom', 'dateTo'];
        $appliedFilters = array_filter($request->only($filterParams));

        if (!empty($appliedFilters)) {
            $activityType = 'lead_status_filter';
            $properties['filters'] = $appliedFilters;
        }

        if ($request->filled('searchQuery')) {
            $activityType = 'lead_status_search';
            $properties['search_query'] = $request->query('searchQuery');
        }

        activity()
            ->causedBy(auth()->user())
            ->withProperties($properties)
            ->log($activityType);
    }
}
