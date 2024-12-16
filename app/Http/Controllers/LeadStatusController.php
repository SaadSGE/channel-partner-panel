<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LeadStatus;

class LeadStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $leadStatuses = LeadStatus::all();
        return $this->successJsonResponse('Lead statuses fetched successfully', $leadStatuses);
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
}
