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
        DB::statement('DROP VIEW IF EXISTS lead_count_all;');
        DB::statement("
            CREATE VIEW lead_count_all AS
            SELECT
                user_id,
                SUM(lead_count) AS total_lead_count
            FROM
                lead_count_by_country
            GROUP BY
                user_id;
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('DROP VIEW IF EXISTS lead_count_all;');
    }
};
