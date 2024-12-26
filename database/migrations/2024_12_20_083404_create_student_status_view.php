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
            DROP VIEW IF EXISTS student_status_view;
        ');
        DB::statement("

            CREATE VIEW student_status_view AS
            SELECT
                s.id as student_id,
                CASE
                    WHEN COUNT(DISTINCT
                        CASE
                            WHEN sd.document_name = 'passport' THEN 'passport'
                            WHEN sd.document_name = 'academic_letter' THEN 'academic_letter'
                            WHEN sd.document_name = 'cv-resume' THEN 'cv-resume'
                            WHEN sd.document_name = 'sop' THEN 'sop'
                            WHEN sd.document_name = 'supporting_document' THEN 'supporting_document'
                            WHEN sd.document_name = 'professional_letter' THEN 'professional_letter'
                        END
                    ) >= 6 THEN true
                    ELSE false
                END as document_status,
                CASE
                    WHEN COUNT(siu.id) > 0 THEN true
                    ELSE false
                END as interested_university_status
            FROM
                students s
            LEFT JOIN
                student_documents sd ON s.id = sd.student_id
            LEFT JOIN
                student_interested_universities siu ON s.id = siu.student_id
            GROUP BY
                s.id
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('DROP VIEW IF EXISTS student_status_view');
    }
};
