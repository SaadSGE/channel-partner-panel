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
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->date('lead_date');
            $table->string('branch');
            $table->string('email');
            $table->string('name');
            $table->string('phone');
            $table->string('interested_course');
            $table->string('interested_country');
            $table->string('ielts_or_english_test')->nullable();
            $table->string('source')->nullable();
            $table->integer('status')->default(0); // Changed to integer for flexible status codes
            $table->text('notes')->nullable();
            $table->foreignId('assigned_branch')->nullable()->constrained('branches')->onDelete('set null');
            $table->foreignId('assigned_user')->nullable()->constrained('users')->onDelete('set null');
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade'); // New created_by column
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leads');
    }
};
