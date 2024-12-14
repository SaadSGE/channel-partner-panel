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
        //
        DB::statement("
            UPDATE users
            SET branch_id = (
                SELECT id
                FROM branches
                ORDER BY RAND()
                LIMIT 1
            )
            WHERE branch_id IS NULL;
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        DB::statement("
            UPDATE users
            SET branch_id = NULL
            WHERE branch_id IS NOT NULL;
        ");
    }
};
