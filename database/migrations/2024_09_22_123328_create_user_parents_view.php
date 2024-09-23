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
        DB::statement("
        CREATE OR REPLACE VIEW user_parents AS
        WITH RECURSIVE parent_tree AS (
            -- Base case: each user with their parent
            SELECT id AS user_id, parent_id
            FROM users
            WHERE parent_id IS NOT NULL

            UNION ALL

            -- Recursive case: find parents of parents
            SELECT pt.user_id, u.parent_id
            FROM users u
            JOIN parent_tree pt ON u.id = pt.parent_id
            WHERE u.parent_id IS NOT NULL
        )
        SELECT
            u.id AS user_id,
            CASE
                WHEN COUNT(DISTINCT pt.parent_id) > 0 THEN
                    GROUP_CONCAT(DISTINCT pt.parent_id ORDER BY pt.parent_id)
                ELSE NULL
            END AS parent_ids
        FROM users u
        LEFT JOIN parent_tree pt ON u.id = pt.user_id
        GROUP BY u.id
    ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement("DROP VIEW IF EXISTS user_parents");
    }
};
