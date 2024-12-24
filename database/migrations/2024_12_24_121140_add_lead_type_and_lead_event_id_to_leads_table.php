<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('leads', function (Blueprint $table) {
            //
            $table->string('lead_type')->default('social')->after('assigned_branch');
            $table->unsignedBigInteger('lead_event_id')->nullable()->after('lead_type');
            $table->foreign('lead_event_id')->references('id')->on('events')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('leads', function (Blueprint $table) {
            //
            $table->dropForeign(['lead_event_id']);
            $table->dropColumn('lead_event_id');
            $table->dropColumn('lead_type');
        });
    }
};
