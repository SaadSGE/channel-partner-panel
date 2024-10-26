<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $branches = Branch::with('country')->latest()->get();
        return $this->successJsonResponse('Branches retrieved successfully', $branches);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'country_id' => 'required|exists:countries,id',
            ]);

            $branch = Branch::create($validatedData);
            return $this->successJsonResponse('Branch created successfully', $branch->load('country'), null, 201);
        } catch (ValidationException $e) {
            return $this->handleValidationErrors($e);
        } catch (\Exception $e) {
            return $this->exceptionJsonResponse($e, 'Failed to create branch');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        try {
            $branch = Branch::with('country')->findOrFail($id);
            return $this->successJsonResponse('Branch retrieved successfully', $branch);
        } catch (\Exception $e) {
            return $this->exceptionJsonResponse($e, 'Branch not found', 'default', 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        try {
            $branch = Branch::findOrFail($id);

            $validatedData = $request->validate([
                'name' => 'sometimes|required|string|max:255',
                'country_id' => 'sometimes|required|exists:countries,id',
            ]);

            $branch->update($validatedData);
            return $this->successJsonResponse('Branch updated successfully', $branch->load('country'));
        } catch (ValidationException $e) {
            return $this->handleValidationErrors($e);
        } catch (\Exception $e) {
            return $this->exceptionJsonResponse($e, 'Failed to update branch');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        try {
            $branch = Branch::findOrFail($id);
            $branch->delete();
            return $this->successJsonResponse('Branch deleted successfully', null, null, 204);
        } catch (\Exception $e) {
            return $this->exceptionJsonResponse($e, 'Failed to delete branch');
        }
    }
}
