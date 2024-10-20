<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $countries = Country::all();
        return $this->successJsonResponse('Countries retrieved successfully', $countries);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255|unique:countries',
                'timezone' => 'required|string|max:255',
            ]);

            $country = Country::create($validatedData);
            return $this->successJsonResponse('Country created successfully', $country, null, 201);
        } catch (ValidationException $e) {
            return $this->handleValidationErrors($e);
        } catch (\Exception $e) {
            return $this->exceptionJsonResponse($e, 'Failed to create country');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        try {
            $country = Country::findOrFail($id);
            return $this->successJsonResponse('Country retrieved successfully', $country);
        } catch (\Exception $e) {
            return $this->exceptionJsonResponse($e, 'Country not found', 'default', 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        try {
            $country = Country::findOrFail($id);

            $validatedData = $request->validate([
                'name' => 'sometimes|required|string|max:255|unique:countries,name,' . $id,
                'timezone' => 'sometimes|required|string|max:255',
            ]);

            $country->update($validatedData);
            return $this->successJsonResponse('Country updated successfully', $country);
        } catch (ValidationException $e) {
            return $this->handleValidationErrors($e);
        } catch (\Exception $e) {
            return $this->exceptionJsonResponse($e, 'Failed to update country');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        try {
            $country = Country::findOrFail($id);
            $country->delete();
            return $this->successJsonResponse('Country deleted successfully', null, null, 204);
        } catch (\Exception $e) {
            return $this->exceptionJsonResponse($e, 'Failed to delete country');
        }
    }
}
