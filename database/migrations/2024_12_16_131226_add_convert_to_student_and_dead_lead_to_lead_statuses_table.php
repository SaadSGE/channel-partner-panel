<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('lead_statuses', function (Blueprint $table) {
            $table->boolean('convert_to_student')->default(false)->after('health_rating');
            $table->boolean('dead_lead')->default(false)->after('convert_to_student');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('lead_statuses', function (Blueprint $table) {
            $table->dropColumn(['convert_to_student', 'dead_lead']);
        });
    }
};
