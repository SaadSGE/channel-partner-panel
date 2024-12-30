<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'first_name' => 'Forhadul Alam',
                'email' => 'om.bd@shabujglobal.com',
                'mobile' => '01711245409',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'MD Rafiqul Islam Liton',
                'email' => 'liton@shabujglobal.in',
                'mobile' => '01321182526',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Rajen Kumar Deb',
                'email' => 'raen@shabujglobal.org',
                'mobile' => '01321182527',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Touhidur Rahman',
                'email' => 'applications.bd@shabujglobal.com',
                'mobile' => '01321182535',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Abu Sayef Khan',
                'email' => 'applyhudds@shabujglobal.com',
                'mobile' => '01321182521',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Jalish Mahmud',
                'email' => 'Internationaladvice@shabujglobal.com',
                'mobile' => '01321182539',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Amina Sultana Akhy',
                'email' => 'amina@shabujglobal.org',
                'mobile' => '01324430313',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Kmrun Nahar Ananna',
                'email' => 'ananna@shabujglobal.org',
                'mobile' => '01321182525',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Afsari Rayhan Asmeta',
                'email' => 'asmeta@shabujglobal.org',
                'mobile' => '01311707241',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Sumaiya Azad Sadiya',
                'email' => 'sumaiya@shabujglobal.org',
                'mobile' => '01711947096',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Merajul Hasan',
                'email' => 'Merazul@shabujglobal.org',
                'mobile' => '01321182531',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Mansibul Alam Sahil',
                'email' => 'sahil@shabujglobal.org',
                'mobile' => '01321182538',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Minhaz',
                'email' => 'shakhawat@shabujglobal.org',
                'mobile' => '01321182536',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Shakil Ahmed',
                'email' => 'shakil@shabujglobal.org',
                'mobile' => '01321182543',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Debora Setu',
                'email' => 'debora.setu@shabujglobal.org',
                'mobile' => '01321182522',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Jannatul Ferdose Zim',
                'email' => 'zim@shabujglobal.org',
                'mobile' => '01881693506',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Abrarur aakter shuvon',
                'email' => 'moumita@shabujglobal.org',
                'mobile' => '01321182537',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Al-Amin',
                'email' => 'absar@shabujglobal.org',
                'mobile' => '01321182528',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Sheikh Sajeeb',
                'email' => 'sajeed@shabujglobal.org',
                'mobile' => '01321182523',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Md.Mosaddek Hossain Ahasan',
                'email' => 'unidirect@shabujglobal.com',
                'mobile' => '01321182524',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Bedaura Hassan Bidisha',
                'email' => 'admissions.bd@shabujglobal.com',
                'mobile' => '01324430312',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'AKM Ahmed',
                'email' => 'sgesylhet004@gmail.com',
                'mobile' => '01324430310',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Oditi Roy Bormon',
                'email' => 'teamsylhet21@shabujglobal.com',
                'mobile' => '01321371730',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Liakot Ali',
                'email' => 'sgesylhet007@gmail.com',
                'mobile' => '01321182533',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'AFM Amzad',
                'email' => 'rahimahmed5340@gmail.com',
                'mobile' => '01962634237',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Mahadi Hasan',
                'email' => 'sgesylhet005@gmail.com',
                'mobile' => '01321182530',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Rahim Ahmed',
                'email' => 'sgesylhet003@gmail.com',
                'mobile' => '01321182544',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Dibarnita Paul Arpi',
                'email' => 'ali@shabujglobal.org',
                'mobile' => '01318937046',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Majed Ahmed',
                'email' => 'applications.ctg@shabujglobal.com',
                'mobile' => '01321182540',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Ahmad Ali Shohag',
                'email' => 'sgectg008@gmail.com',
                'mobile' => '01321182542',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'M hammed Raihan',
                'email' => 'apply@shabujglobal.com',
                'mobile' => '01324430314',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Farhad Hossain',
                'email' => 'sgectg10@gmail.com',
                'mobile' => '01749693249',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Mir Rizwan Ahmed',
                'email' => 'hasnat@shabujglobal.org',
                'mobile' => '01835230776',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Hiropa Yesmin Moni',
                'email' => 'Turjobarua0@gmail.com',
                'mobile' => '01321182520',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Hasnat Siddiqi',
                'email' => 'tasin@shabujglobal.org',
                'mobile' => '01321182529',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Md Rubel',
                'email' => 'awal.khan@shabujglobal.org',
                'mobile' => '01324430307',
                'password' => Hash::make('password'),
            ],
            [
                'first_name' => 'Turjo Barua',
                'email' => 'ashraful@shabujglobal.org',
                'mobile' => '01321182529',
                'password' => Hash::make('password'),
            ],
        ];

        foreach ($users as $user) {
            User::firstOrCreate(
                ['email' => $user['email']],
                $user
            );
        }
    }
}
