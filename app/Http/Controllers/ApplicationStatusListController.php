<?php

namespace App\Http\Controllers;

use App\Models\ApplicationStatusList;
use Illuminate\Http\Request;

class ApplicationStatusListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $statuses = ApplicationStatusList::all();

        return $this->successJsonResponse('Statuses fetched successfully', $statuses);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'color' => 'nullable|string|max:255',
        ]);

        $status = ApplicationStatusList::create($request->all());

        return $this->successJsonResponse('Status created successfully', $status);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $status = ApplicationStatusList::find($id);

        return $this->successJsonResponse('Status fetched successfully', $status);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'color' => 'nullable|string|max:255',
        ]);

        $status = ApplicationStatusList::find($id);
        $status->update($request->all());

        return $this->successJsonResponse('Status updated successfully', $status);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $status = ApplicationStatusList::find($id);
        $status->delete();

        return $this->successJsonResponse('Status deleted successfully');
    }
}
