<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lead;

class LeadController extends Controller
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

        $query = Lead::query();




        $query->when($searchQuery, function ($q) use ($searchQuery) {
            return $q->where(function ($q) use ($searchQuery) {
                $q->where('name', 'LIKE', "%$searchQuery%")
                    ->orWhere('email', 'LIKE', "%$searchQuery%")
                    ->orWhere('phone', 'LIKE', "%$searchQuery%")
                    ->orWhere('branch', 'LIKE', "%$searchQuery%")
                    ->orWhere('interested_course', 'LIKE', "%$searchQuery%")
                    ->orWhere('interested_country', 'LIKE', "%$searchQuery%");
            });
        })->when($request->filled('status'), function ($q) use ($request) {
            return $q->where('status', $request->query('status'));
        })->when($request->filled('branch'), function ($q) use ($request) {
            return $q->where('branch', $request->query('branch'));
        })->when($request->filled('source'), function ($q) use ($request) {
            return $q->where('source', $request->query('source'));
        })->when($request->filled('assignedUser'), function ($q) use ($request) {
            return $q->where('assigned_user', $request->query('assignedUser'));
        })->when($request->filled('dateFrom'), function ($q) use ($request) {
            return $q->whereDate('lead_date', '>=', $request->query('dateFrom'));
        })->when($request->filled('dateTo'), function ($q) use ($request) {
            return $q->whereDate('lead_date', '<=', $request->query('dateTo'));
        })->when($request->filled('country'), function ($q) use ($request) {
            return $q->where('interested_country', $request->query('country'));
        });

        // Sorting
        $query->orderBy($sortBy, $orderBy);

        // Pagination
        $leads = $query->paginate($perPage);

        // Log the activity
        //$this->logIndexActivity($request, $leads->total());

        return $this->successJsonResponse("Leads found successfully!", $leads->items(), $leads->total());
    }

    /**
     * Log the index activity
     */
    private function logIndexActivity(Request $request, int $totalResults)
    {
        $activityType = 'lead_index_view';
        $properties = [
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'total_results' => $totalResults,
        ];

        // Check if any filter or search is applied
        $filterParams = ['status', 'branch', 'source', 'assignedUser', 'dateFrom', 'dateTo', 'country'];
        $appliedFilters = array_filter($request->only($filterParams));

        if (!empty($appliedFilters)) {
            $activityType = 'lead_filter';
            $properties['filters'] = $appliedFilters;
        }

        if ($request->filled('searchQuery')) {
            $activityType = 'lead_search';
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
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
