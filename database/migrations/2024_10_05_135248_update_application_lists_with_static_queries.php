<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement('UPDATE application_lists SET channel_partner = created_by');

        // Fill 'application_control_officer' with 'channel_partner.parent_id'
        DB::statement('
            UPDATE application_lists
            INNER JOIN users  ON application_lists.channel_partner = users.id
            SET application_lists.application_control_officer = users.parent_id
        ');
        //
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        DB::statement('UPDATE application_lists SET channel_partner = NULL');
        DB::statement('UPDATE application_lists SET application_control_officer = NULL');
    }
};
