<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\LeadNote;
use App\Models\lead as Lead;
use App\Models\User;

class LeadNotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $leads = Lead::all();
        $users = User::all();

        // Check if leads and users exist before creating notes
        if ($leads->count() > 0 && $users->count() > 0) {
            foreach ($leads as $lead) {
                LeadNote::create([
                    'lead_id' => $lead->id,
                    'note' => 'This is a sample note for lead ' . $lead->id,
                    'created_by' => $users->random()->id,
                ]);
            }
        }

    }
}
