<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Intake;

class IntakeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        $intakes = Intake::get();
        return $this->successJsonResponse('Course data found', $intakes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        try {
            $intakes = Intake::create([
                'name' => $request->name
            ]);
            return $this->successJsonResponse('Intake created successfully', $intakes);
        } catch(\Throwable $th) {
            return $this->exceptionJsonResponse('Intake creation failed', $th);
        }
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
        try {
            $intake = Intake::findOrFail($id);
            $intake->name = $request->name;
            $intake->save();
            return $this->successJsonResponse('Intake updated successfully', $intake);
        } catch(\Throwable $th) {
            Log::error($th);
            return $this->exceptionJsonResponse('An unexpected error occurred', $th);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $intake = Intake::findOrFail($id);

            $intake->delete();
            return $this->successJsonResponse('Intake deleted successfully');
        } catch(\Throwable $th) {
            \Log::error('Intake delete error: ' . $th);
            return $this->exceptionJsonResponse('An unexpected error occurred', $th);
        }
    }
}
