<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\lead as Lead;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\LeadsImport;
use Illuminate\Validation\ValidationException;
use App\Models\LeadStatusTrack;
use App\Models\Student;
use App\Services\StudentService;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $user = auth('api')->user();
            $perPage = (int) $request->query('perPage', 10);
            $searchQuery = strtoupper(trim($request->query('searchQuery', '')));
            $sortBy = $request->query('sortBy', 'created_at');
            $orderBy = $request->query('orderBy', 'desc');
            $assignedUser = $request->query('assigned_status', null);
            $leadType = $request->query('lead_type', null);
            $event = $request->query('event', null);
            $branch = $request->query('branch', null);
            $country = $request->query('lead_country', null);
            $id = $request->query('id', null);
            $user = auth('api')->user();
            \Log::info('User ID:', ['id' => $user->id]);
            $query = Lead::query()->visibleToUser($user, $id);

            $query->with(['notes', 'branch', 'assignedUser', 'status:id,name,color_code', 'statusHistory', 'leadCountry:id,name', 'leadEvent:id,name']);

            $query->whereHas('status', function ($q) {
                $q->where('convert_to_student', 0)
                    ->where('dead_lead', 0);
            });

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
                return $q->where('assigned_branch', $request->query('branch'));
            })->when($request->filled('source'), function ($q) use ($request) {
                return $q->where('source', $request->query('source'));
            })->when($assignedUser !== null, function ($q) use ($assignedUser) {
                if ($assignedUser == 1) {
                    return $q->whereNotNull('assigned_user');
                } elseif ($assignedUser == 0) {
                    return $q->whereNull('assigned_user');
                }
            })->when($request->filled('dateFrom'), function ($q) use ($request) {
                return $q->whereDate('lead_date', '>=', $request->query('dateFrom'));
            })->when($request->filled('dateTo'), function ($q) use ($request) {
                return $q->whereDate('lead_date', '<=', $request->query('dateTo'));
            })->when($country, function ($q) use ($country) {
                return $q->where('lead_country_id', $country);
            })
            ->when($leadType, function ($q) use ($leadType) {
                return $q->where('lead_type', $leadType);
            })->when($event, function ($q) use ($event) {
                return $q->where('lead_event_id', $event);
            })->when($branch, function ($q) use ($branch) {
                return $q->where('assigned_branch', $branch);
            });

            // Sorting
            $query->orderBy($sortBy, $orderBy);


            // Pagination
            $leads = $query->paginate($perPage);

            // Log the activity
            //$this->logIndexActivity($request, $leads->total());

            return $this->successJsonResponse("Leads found successfully!", $leads->items(), $leads->total());
        } catch (\Exception $e) {
            return $this->errorJsonResponse(
                'Failed to retrieve leads.',
                [
                    'message' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ],
            );
        }
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
        $lead = Lead::with('statusDetails:id,convert_to_student')->find($id);
        $lead->status = $request->status;
        $lead->save();
        $leadStatusTrack = new LeadStatusTrack();
        $leadStatusTrack->lead_id = $lead->id;
        $leadStatusTrack->status_id = $request->status;
        $leadStatusTrack->user_id = auth('api')->user()->id;
        $leadStatusTrack->status_note = $request->status_note;
        $leadStatusTrack->save();
        $lead->refresh();

        if ($lead->statusDetails->convert_to_student == 1) {

            $studentService = new StudentService();

            $studentData = [
                'lead_id' => (int)$id,
                'student_first_name' => $lead->name,
                'student_email' => $lead->email,
                'student_whatsapp_number' => $lead->phone,
                'visa_refusal' => 'No'
            ];


            $studentService->storeGeneralInfo($studentData);
        }
        return $this->successJsonResponse("Lead status updated successfully!", $lead);
    }

    /**
     * Remove the specified resource froms storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function uploadLeads(Request $request)
    {
        try {
            $request->validate([
                'file' => 'required|mimes:xlsx,csv',
                'assigned_branch' => 'required|exists:branches,id',
                'lead_country_id' => 'nullable|exists:countries,id',
                'lead_type' => 'required|string',
                'lead_event_id' => 'nullable|exists:events,id',
            ], [
                'file.required' => 'Please select a file to upload.',
                'file.mimes' => 'Please upload only Excel or CSV files.',
                'assigned_branch.required' => 'Please select a branch.',
                'assigned_branch.exists' => 'Selected branch is invalid.',
                'lead_country_id.required' => 'Please select a country.',
                'lead_country_id.exists' => 'Selected country is invalid.',

            ]);

            // Check if file is empty
            if ($request->file('file')->getSize() === 0) {
                return $this->errorJsonResponse(
                    'The uploaded file is empty.',
                    ['message' => 'empty_records'],
                    422
                );
            }

            // Import the leads
            $import = new LeadsImport($request->assigned_branch, $request->lead_country_id, $request->lead_type, $request->lead_event_id);
            Excel::import($import, $request->file('file'));

            // Check if any records were imported
            if ($import->getRowCount() === 0) {
                return $this->errorJsonResponse(
                    'The uploaded file contains no valid records.',
                    ['message' => 'empty_records'],
                    422
                );
            }

            return $this->successJsonResponse(
                'Leads uploaded successfully!',
                ['count' => $import->getRowCount()]
            );
        } catch (ValidationException $e) {
            return $this->handleValidationErrors($e);
        } catch (\Exception $e) {
            // Check if the error is from our empty column validation
            $errors = json_decode($e->getMessage(), true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($errors)) {
                return $this->errorJsonResponse(
                    'Some records contain empty values.',
                    [
                        'message' => 'validation_error',
                        'errors' => $errors
                    ],
                    422
                );
            }

            return $this->exceptionJsonResponse(
                $e,
                'Error uploading leads.',
                'leads',
                500
            );
        }
    }

    public function getLeadCount(Request $request)
    {
        $branchId = $request->query('branch_id', null);


        $count = Lead::where('lead_country_id', $request->country)
            ->when($branchId, function ($query, $branchId) {
                return $query->where('assigned_branch', $branchId);
            })
            ->whereNull('assigned_user')
            ->count();
        $data = [
            'total' => $count
        ];

        return $this->successJsonResponse("Leads found successfully!", $data);
    }

    public function assignLeads(Request $request)
    {
        try {


            return \DB::transaction(function () use ($request) {
                // 1. Build the base query for unassigned leads
                $query = Lead::query()
                    ->where('lead_country_id', $request->lead_country)
                    ->whereNull('assigned_user');

                $initialCount = $query->count();


                if ($initialCount === 0) {
                    return $this->errorJsonResponse(
                        'No unassigned leads found for the selected country.',
                        ['message' => 'no_leads_found'],
                        404
                    );
                }

                // 2. Add branch filter if provided
                if ($request->branch_id) {
                    $query->where('assigned_branch', $request->branch_id);
                    $branchCount = $query->count();


                    if ($branchCount === 0) {
                        return $this->errorJsonResponse(
                            'No unassigned leads found for the selected branch.',
                            [
                                'message' => 'no_leads_found_in_branch',
                                'total_leads' => $initialCount
                            ],
                            404
                        );
                    }
                }

                $assignmentResults = [];

                // 3. Process each user's assignment
                foreach ($request->assigned_data as $assignment) {
                    $userId = $assignment['user_id'];
                    $count = $assignment['assigned_leads'];

                    if ($count > 0) {
                        // Get random leads for this user
                        $leadsToAssign = $query->clone()
                            ->inRandomOrder()
                            ->limit($count)
                            ->get();



                        if ($leadsToAssign->count() > 0) {
                            // Update the assigned leads
                            foreach ($leadsToAssign as $lead) {
                                $beforeUpdate = $lead->toArray();

                                $lead->assigned_user = $userId;
                                $lead->assigned_user_date = now();
                                $lead->save();

                                $afterUpdate = $lead->fresh()->toArray();

                                \Log::info('Lead update details:', [
                                    'lead_id' => $lead->id,
                                    'before' => $beforeUpdate,
                                    'after' => $afterUpdate
                                ]);
                            }

                            $assignmentResults[] = [
                                'user_id' => $userId,
                                'assigned_count' => $leadsToAssign->count(),
                                'lead_ids' => $leadsToAssign->pluck('id')->toArray()
                            ];
                        }
                    }
                }

                if (empty($assignmentResults)) {
                    return $this->errorJsonResponse(
                        'No leads were assigned. Please check the available leads and try again.',
                        ['message' => 'no_assignments_made'],
                        400
                    );
                }



                return $this->successJsonResponse('Leads assigned successfully!', [
                    'assignments' => $assignmentResults,
                    'total_assigned' => collect($assignmentResults)->sum('assigned_count')
                ]);
            });
        } catch (\Exception $e) {

            return $this->errorJsonResponse(
                'Failed to assign leads.',
                [
                    'message' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ],
                500
            );
        }
    }

    public function addNoteToLead(Request $request, $leadId)
    {
        $request->validate([
            'note' => 'required|string|max:1000',
        ]);

        $lead = Lead::findOrFail($leadId);

        $leadNote = $lead->notes()->create([
            'note' => $request->note,
            'created_by' => auth('api')->id(),
        ]);

        return response()->json([
            'message' => 'Note added successfully!',
            'note' => $leadNote,
        ], 201);
    }
}
