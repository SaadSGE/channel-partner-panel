<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $events = Event::all();
        return $this->successJsonResponse('Events fetched successfully', $events);
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
        ]);
        $event = Event::create($request->all());
        return $this->successJsonResponse('Event created successfully', $event);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $event = Event::find($id);
        return $this->successJsonResponse('Event fetched successfully', $event);
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
        ]);
        $event = Event::find($id);
        $event->update($request->all());
        return $this->successJsonResponse('Event updated successfully', $event);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $event = Event::find($id);
        $event->delete();
        return $this->successJsonResponse('Event deleted successfully');
    }
}
