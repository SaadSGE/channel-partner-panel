<?php

namespace App\Imports;

use App\Models\Lead;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Carbon\Carbon;

class LeadsImport implements ToCollection, WithHeadingRow
{
    private $rowCount = 0;
    private $assignedBranch;
    private $leadCountryId;
    private $leadType;
    private $leadEventId;
    private $errors = [];
    private $requiredColumns = [
        'name' => 'Name',
        'email' => 'Email',
        'phone' => 'Phone',
        'course_interested_for' => 'Course Interested For',
        'date' => 'Date'
    ];

    public function __construct($assignedBranch, $leadCountryId, $leadType, $leadEventId)
    {
        $this->assignedBranch = $assignedBranch;
        $this->leadCountryId = $leadCountryId;
        $this->leadType = $leadType;
        $this->leadEventId = $leadEventId;
    }

    public function collection(Collection $rows)
    {
        // Debug: Let's check what columns we actually have
        if (!empty($rows)) {
            $firstRow = $rows->first();
            \Log::info('Available columns:', array_keys($firstRow->toArray()));
        }

        // First, validate that all required columns exist
        if (!empty($rows)) {
            $firstRow = $rows->first();
            $missingColumns = [];
            foreach ($this->requiredColumns as $column => $displayName) {
                if (!isset($firstRow[$column])) {
                    $missingColumns[] = $displayName;
                }
            }

            if (!empty($missingColumns)) {
                throw new \Exception(json_encode([
                    "Missing required columns: " . implode(", ", $missingColumns)
                ]));
            }
        }

        foreach ($rows as $rowIndex => $row) {
            // Skip row if all columns are empty
            if ($this->isEmptyRow($row)) {
                continue;
            }

            $rowNumber = $rowIndex + 2; // Adding 2 because: 1 for header row, 1 for human-readable row number

            // Check for empty required columns
            foreach ($this->requiredColumns as $column => $displayName) {
                if (empty($row[$column])) {
                    $this->errors[] = "Row {$rowNumber}: {$displayName} is empty";
                    continue 2; // Skip this row and continue with next row
                }
            }

            try {
                // Debug the incoming date value
                \Log::info('Incoming date value:', ['date' => $row['date']]);
                // If all validations pass, create the lead
                Lead::create([
                    'name' => $row['name'],
                    'email' => $row['email'],
                    'phone' => $row['phone'],
                    'interested_course' => $row['course_interested_for'],
                    'assigned_branch' => $this->assignedBranch,
                    'interested_country' => $row['country_interested_for'] ?? null,
                    'current_educational_qualifications' => $row['current_educational_qualifications'] ?? null,
                    'ielts_or_english_test' => $row['ieltsenglish_test'] ?? null,
                    'source' => $row['source'] ?? null,
                    'lead_incoming_date' => Carbon::parse($row['date'])->format('Y-m-d'),
                    'status' => 1,
                    'lead_type' => $this->leadType,
                    'lead_event_id' => $this->leadEventId,
                    'created_by' => auth('api')->user()->id
                ]);

                $this->rowCount++;
            } catch (\Exception $e) {
                $this->errors[] = "Row " . ($rowIndex + 2) . ": Date parsing error - " . $e->getMessage();
                \Log::error('Date parsing error:', [
                    'row' => $rowIndex + 2,
                    'date_value' => $row['date'],
                    'error' => $e->getMessage()
                ]);
                continue;
            }
        }

        // If there are any errors, throw an exception
        if (!empty($this->errors)) {
            throw new \Exception(json_encode($this->errors));
        }
    }

    /**
     * Check if all columns in a row are empty
     *
     * @param array|Collection $row
     * @return bool
     */
    private function isEmptyRow($row): bool
    {
        foreach ($this->requiredColumns as $column => $displayName) {
            if (isset($row[$column]) && !empty($row[$column])) {
                return false;
            }
        }
        return true;
    }

    /**
     * Get the number of rows imported
     *
     * @return int
     */
    public function getRowCount(): int
    {
        return $this->rowCount;
    }

    /**
     * Get validation errors
     *
     * @return array
     */
    public function getErrors(): array
    {
        return $this->errors;
    }
}
