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
        DROP VIEW IF EXISTS unique_country_intake_course_university_view;
    ');
        DB::statement("
        CREATE VIEW unique_country_intake_course_university_view AS
        SELECT DISTINCT
            country_id,
            country_name,
            intake_id,
            intake_name,
            course_type,
            university_id,
            university_name,
            university_logo,
            university_address
        FROM
            country_intake_course_university_map_view;
    ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('DROP VIEW IF EXISTS unique_country_intake_course_university_view');
    }
};
