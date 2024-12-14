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
        DB::statement('DROP VIEW IF EXISTS lead_count_by_country;');
        DB::statement("
            CREATE VIEW lead_count_by_country AS
            SELECT
                u.id AS user_id,
                COUNT(CASE
                    WHEN l.status NOT IN (20, 21, 22) THEN l.id
                    ELSE NULL
                END) AS lead_count,
                l.lead_country_id
            FROM
                users u
            LEFT JOIN
                leads l
            ON
                u.id = l.assigned_user
            WHERE
                u.role = 'Counsellor'
            GROUP BY
                u.id, l.lead_country_id;
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('DROP VIEW IF EXISTS lead_count_by_country;');
    }
};
