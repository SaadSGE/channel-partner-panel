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
            $table->date('lead_incoming_date')->after('id')->nullable();
            $table->date('assigned_user_date')->after('assigned_user')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('leads', function (Blueprint $table) {
            //
            $table->dropColumn('lead_incoming_date');
            $table->dropColumn('assigned_user_date');
        });
    }
};
