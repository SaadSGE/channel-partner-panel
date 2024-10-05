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
            //
            $table->foreignId('application_officer')->nullable()->after('application_control_officer')->constrained('users')->nullOnDelete();
            $table->foreignId('compliance_officer')->nullable()->after('application_officer')->constrained('users')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('application_lists', function (Blueprint $table) {
            //
        });
    }
};
