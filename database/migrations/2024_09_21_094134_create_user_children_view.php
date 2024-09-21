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
        CREATE OR REPLACE VIEW user_children AS
        WITH RECURSIVE child_tree AS (
            -- Base case: each user is their own child
            SELECT id AS user_id, id AS child_id
            FROM users

            UNION ALL

            -- Recursive case: find children
            SELECT ct.user_id, u.id AS child_id
            FROM users u
            JOIN child_tree ct ON u.parent_id = ct.child_id
        )
        SELECT
            user_id,
            GROUP_CONCAT(DISTINCT child_id ORDER BY child_id) AS child_ids
        FROM child_tree
        GROUP BY user_id
    ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('DROP VIEW IF EXISTS user_children');
    }
};
