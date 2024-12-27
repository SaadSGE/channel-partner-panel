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
        //
        Schema::table('lead_statuses', function (Blueprint $table) {
            $table->string('health_type')->nullable()->after('is_active'); // Add new column
            $table->dropColumn('health_rating');       // Remove existing column
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('lead_statuses', function (Blueprint $table) {
            $table->dropColumn('health_type');         // Remove the new column
            $table->string('health_rating');          // Re-add the dropped column
        });
    }
};
