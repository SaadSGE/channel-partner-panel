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
            CREATE VIEW country_intake_course_university_map_view AS
            SELECT DISTINCT
                ac.id AS country_id,
                ac.name AS country_name,
                i.id AS intake_id,
                i.name AS intake_name,
                c.id AS course_id,
                c.name AS course_name,
                c.type AS course_type,
                u.id AS university_id,
                u.name AS university_name,
                u.logo AS university_logo,
                u.address AS university_address
            FROM
                course_details cd
            JOIN
                application_countries ac ON cd.country_id = ac.id
            JOIN
                intakes i ON cd.intake_id = i.id
            JOIN
                courses c ON cd.course_id = c.id
            JOIN
                universities u ON cd.university_id = u.id;
        ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('country_intake_course_university_view');
    }
};
