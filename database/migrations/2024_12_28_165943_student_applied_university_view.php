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
        DB::statement("DROP VIEW IF EXISTS student_applied_university");
        DB::statement("
            CREATE VIEW student_applied_university AS
           SELECT
    s.id,
    s.student_id,
    siu.university_id,
    u.name AS university_name,
    siu.course_id,
    c.name AS course_name,
    c.type AS course_type,
    siu.country_id,
    ac.name AS country_name,
    siu.intake_id,
    i.name AS intake_name,
    cd.id AS course_details_id,
    CASE
        WHEN al.student_id IS NOT NULL AND
             al.university_id = siu.university_id AND
             al.course_id = siu.course_id AND
             al.intake_id = siu.intake_id THEN 'true'
        ELSE 'false'
    END AS application_done,
    CASE
        WHEN ssv.document_status = 0 THEN 'false'
        ELSE 'true'
    END AS document_status,  -- Added document_status
    al.id AS application_list_id  -- Added application_list_id
FROM
    students s
LEFT JOIN
    student_interested_universities siu ON s.id = siu.student_id
LEFT JOIN
    application_lists al ON s.id = al.student_id
    AND al.university_id = siu.university_id
    AND al.course_id = siu.course_id
    AND al.intake_id = siu.intake_id
LEFT JOIN
    universities u ON siu.university_id = u.id
LEFT JOIN
    courses c ON siu.course_id = c.id
LEFT JOIN
    application_countries ac ON siu.country_id = ac.id
LEFT JOIN
    intakes i ON siu.intake_id = i.id
LEFT JOIN
    course_details cd ON siu.course_id = cd.course_id
                      AND siu.intake_id = cd.intake_id
                      AND siu.university_id = cd.university_id
LEFT JOIN
    student_status_view ssv ON s.id = ssv.student_id;
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        DB::statement("DROP VIEW IF EXISTS student_applied_university");
    }
};
