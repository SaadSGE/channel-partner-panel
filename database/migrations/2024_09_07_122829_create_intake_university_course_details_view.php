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
        DB::statement('
        DROP VIEW IF EXISTS intake_university_course_details_view;
    ');
        DB::statement("
        CREATE VIEW intake_university_course_details_view AS
        SELECT DISTINCT
            intake_id,
            university_id,
            course_id,
            course_name,
            tution_fee,
            course_duration,
            academic_requirement,
            english_requirement,
            course_type
        FROM
            country_intake_course_university_map_view;
    ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('DROP VIEW IF EXISTS intake_university_course_details_view');
    }
};
