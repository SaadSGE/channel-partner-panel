<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('application_lists', function (Blueprint $table) {
            // Add columns after the 'created_by' column
            $table->foreignId('channel_partner')->nullable()->after('created_by')->constrained('users')->nullOnDelete();
            $table->foreignId('application_control_officer')->nullable()->after('channel_partner')->constrained('users')->nullOnDelete();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('application_lists', function (Blueprint $table) {
            // Drop the foreign key constraints and the columns
            $table->dropForeign(['channel_partner']);
            $table->dropColumn('channel_partner');

            $table->dropForeign(['applicatoin_control_officer']);
            $table->dropColumn('applicatoin_control_officer');

            $table->dropForeign(['application_officer']);
            $table->dropColumn('application_officer');

            $table->dropForeign(['compliance_officer']);
            $table->dropColumn('compliance_officer');
        });
    }
};
