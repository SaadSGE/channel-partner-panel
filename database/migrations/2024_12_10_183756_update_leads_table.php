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
        Schema::table('leads', function (Blueprint $table) {
            // Drop the lead_date column
            $table->dropColumn('lead_date');
            $table->dropColumn('branch');

            // Add a comment to the existing status column
            $table->unsignedTinyInteger('status')
                ->comment('Status values are defined in App\Enums\LeadStatus')
                ->change();

            // Add new nullable columns
            $table->string('current_educational_qualifications')->nullable();
            $table->string('health')->nullable();

            // Add the lead_country_id column with a foreign key constraint
            $table->unsignedBigInteger('lead_country_id')->nullable();
            $table->foreign('lead_country_id')->references('id')->on('countries');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('leads', function (Blueprint $table) {
            // Add back the lead_date column
            $table->date('lead_date')->nullable();

            // Remove the comment from the status column (optional as rollback doesn't remove comments)
            $table->unsignedTinyInteger('status')->change();

            // Drop the newly added columns
            $table->dropColumn(['current_educational_qualifications', 'health']);
            $table->dropForeign(['lead_country_id']);
            $table->dropColumn('lead_country_id');
        });
    }
};
