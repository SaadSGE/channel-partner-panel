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
            DROP VIEW IF EXISTS country_intake_course_university_map_view;
        ');
        DB::statement('
            CREATE VIEW country_intake_course_university_map_view AS
            SELECT DISTINCT
				cd.id AS id,
                ac.id AS country_id,
                ac.name AS country_name,
                i.id AS intake_id,
                i.name AS intake_name,
                c.id AS course_id,
                c.name AS course_name,
                cd.tuition_fee as tution_fee,
                cd.course_duration as course_duration,
				cd.academic_requirement as academic_requirement,
                cd.english_requirement as english_requirement,
                c.type AS course_type,
                u.id AS university_id,
                u.name AS university_name,
                u.logo AS university_logo,
                u.address AS university_address,
                cd.created_by as created_by
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
