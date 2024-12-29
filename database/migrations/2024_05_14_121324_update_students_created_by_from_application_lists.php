<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class () extends Migration {
    public function up(): void
    {
        DB::statement("
            UPDATE students s
            SET s.created_by = (
                SELECT al.user_id
                FROM application_lists al
                WHERE al.student_id = s.id
                LIMIT 1
            )
            WHERE s.created_by IS NULL;
        ");
    }

    public function down(): void
    {
        // This migration cannot be reversed as it updates existing data
        // If needed, you could set all created_by fields back to NULL, but that might not be desirable
        // DB::statement("UPDATE students SET created_by = NULL WHERE created_by IS NOT NULL;");
    }
};
