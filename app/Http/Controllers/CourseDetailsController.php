<?php

namespace App\Http\Controllers;

use App\Models\CourseDetails;
use Illuminate\Http\Request;

class CourseDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $courseDetails = CourseDetails::with(['course', 'country', 'intake', 'university'])->get();
        return $this->successJsonResponse('Course details found', $courseDetails);
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
