<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DemoDashboardController extends Controller
{
    //
    public function getDemoStats(): array
    {
        // Demo data for top universities
        $topUniversities = [
            ['name' => 'University of Oxford', 'country' => 'UK', 'applications' => 450],
            ['name' => 'University of Cambridge', 'country' => 'UK', 'applications' => 425],
            ['name' => 'Harvard University', 'country' => 'USA', 'applications' => 400],
            ['name' => 'MIT', 'country' => 'USA', 'applications' => 380],
            ['name' => 'Stanford University', 'country' => 'USA', 'applications' => 350],
            ['name' => 'Imperial College London', 'country' => 'UK', 'applications' => 320],
            ['name' => 'ETH Zurich', 'country' => 'Switzerland', 'applications' => 300],
            ['name' => 'National University of Singapore', 'country' => 'Singapore', 'applications' => 280],
            ['name' => 'University of Toronto', 'country' => 'Canada', 'applications' => 260],
        ];

        // Demo data for top channel partners
        $topChannelPartners = [
            ['name' => 'Global Education Connect', 'applications' => 150, 'success_rate' => '92%', 'progressColor' => 'primary'],
            ['name' => 'Study Abroad Experts', 'applications' => 140, 'success_rate' => '89%', 'progressColor' => 'success'],
            ['name' => 'Future Connect', 'applications' => 130, 'success_rate' => '88%', 'progressColor' => 'info'],
            ['name' => 'Education Bridge', 'applications' => 120, 'success_rate' => '87%', 'progressColor' => 'warning'],
            ['name' => 'Overseas Education', 'applications' => 110, 'success_rate' => '86%', 'progressColor' => 'primary'],
            ['name' => 'Study Link', 'applications' => 100, 'success_rate' => '85%', 'progressColor' => 'success'],
            ['name' => 'Global Reach', 'applications' => 95, 'success_rate' => '84%', 'progressColor' => 'info'],
            ['name' => 'Education Hub', 'applications' => 90, 'success_rate' => '83%', 'progressColor' => 'warning'],
            ['name' => 'Study World', 'applications' => 85, 'success_rate' => '82%', 'progressColor' => 'primary'],
            ['name' => 'Career Connect', 'applications' => 80, 'success_rate' => '81%', 'progressColor' => 'success']
        ];

        // Demo data for top Application Control Officers
        $topACOs = [
            ['name' => 'Sarah Davis', 'processed_applications' => '170', 'efficiency_rate' => '92%', 'efficiency_rate_color' => 'primary', 'country' => 'Australia'],
            ['name' => 'Emma Wilson', 'processed_applications' => '190', 'efficiency_rate' => '94%', 'efficiency_rate_color' => 'error', 'country' => 'USA'],
            ['name' => 'Michael Brown', 'processed_applications' => '180', 'efficiency_rate' => '93%', 'efficiency_rate_color' => 'info', 'country' => 'Canada'],
            ['name' => 'John Smith', 'processed_applications' => '200', 'efficiency_rate' => '95%', 'efficiency_rate_color' => 'success', 'country' => 'UK'],
            ['name' => 'James Johnson', 'processed_applications' => '160', 'efficiency_rate' => '91%', 'efficiency_rate_color' => 'success', 'country' => 'UK'],
            ['name' => 'Lisa Anderson', 'processed_applications' => '150', 'efficiency_rate' => '90%', 'efficiency_rate_color' => 'warning', 'country' => 'USA'],
            ['name' => 'Robert Taylor', 'processed_applications' => '140', 'efficiency_rate' => '89%', 'efficiency_rate_color' => 'info', 'country' => 'Canada'],
            ['name' => 'Emily Thomas', 'processed_applications' => '130', 'efficiency_rate' => '88%', 'efficiency_rate_color' => 'success', 'country' => 'Australia'],
            ['name' => 'David Wilson', 'processed_applications' => '120', 'efficiency_rate' => '87%', 'efficiency_rate_color' => 'warning', 'country' => 'UK'],
            ['name' => 'Jessica Brown', 'processed_applications' => '110', 'efficiency_rate' => '86%', 'efficiency_rate_color' => 'info', 'country' => 'USA']
        ];

        // Demo data for recent applications
        $recentApplications = [
            [
                'date' => '2024-01-20',
                'applicant_name' => 'Alex Johnson',
                'email' => 'alex.j@email.com',
                'status' => 'Application Processing',
                'channel_partner' => 'Global Education Connect'
            ],
            [
                'date' => '2024-01-19',
                'applicant_name' => 'Maria Garcia',
                'email' => 'maria.g@email.com',
                'status' => 'Offer Issue Conditional',
                'channel_partner' => 'Study Abroad Experts'
            ],
            [
                'date' => '2024-01-18',
                'applicant_name' => 'Tom Wilson',
                'email' => 'tom.w@email.com',
                'status' => 'Pending Docs',
                'channel_partner' => 'Future Connect'
            ],
            [
                'date' => '2024-01-17',
                'applicant_name' => 'Sarah Chen',
                'email' => 'sarah.c@email.com',
                'status' => 'Application Submitted',
                'channel_partner' => 'Education Bridge'
            ],
            [
                'date' => '2024-01-16',
                'applicant_name' => 'James Brown',
                'email' => 'james.b@email.com',
                'status' => 'Offer Issue Unconditional',
                'channel_partner' => 'Overseas Education'
            ],
            [
                'date' => '2024-01-15',
                'applicant_name' => 'Emma Davis',
                'email' => 'emma.d@email.com',
                'status' => 'Application Processing',
                'channel_partner' => 'Study Link'
            ],
            [
                'date' => '2024-01-14',
                'applicant_name' => 'Lucas Martinez',
                'email' => 'lucas.m@email.com',
                'status' => 'Pending Docs',
                'channel_partner' => 'Global Reach'
            ],
            [
                'date' => '2024-01-13',
                'applicant_name' => 'Sophie Taylor',
                'email' => 'sophie.t@email.com',
                'status' => 'Application Submitted',
                'channel_partner' => 'Education Hub'
            ],
            [
                'date' => '2024-01-12',
                'applicant_name' => 'Ryan Cooper',
                'email' => 'ryan.c@email.com',
                'status' => 'Offer Issue Conditional',
                'channel_partner' => 'Study World'
            ],
            [
                'date' => '2024-01-11',
                'applicant_name' => 'Isabella Kim',
                'email' => 'isabella.k@email.com',
                'status' => 'Application Processing',
                'channel_partner' => 'Career Connect'
            ]
        ];

        return [
            'top_universities' => $topUniversities,
            'top_channel_partners' => $topChannelPartners,
            'top_application_officers' => $topACOs,
            'recent_applications' => $recentApplications
        ];
    }

    public function getApplicationStatuses($application_status_id): array
    {
        $applicationStatuses = [
            [
                'application_status_id' => 1,
                'application_status_name' => 'Application Processing',
                'monthly_counts' => [28, 100, 45, 38, 15, 30, 35, 32, 8, 10, 15, 4]
            ],
            [
                'application_status_id' => 2,
                'application_status_name' => 'Pending Documents',
                'monthly_counts' => [35, 25, 15, 40, 42, 25, 48, 8, 30, 10, 15, 20]
            ],
            [
                'application_status_id' => 3,
                'application_status_name' => 'Offer Issued',
                'monthly_counts' => [10, 22, 27, 33, 42, 32, 27, 22, 8, 10, 15, 20]
            ],
            [
                'application_status_id' => 4,
                'application_status_name' => 'Visa Applied',
                'monthly_counts' => [5, 9, 12, 18, 20, 25, 30, 36, 48, 10, 15, 20]
            ]
        ];

        return array_filter($applicationStatuses, function ($status) use ($application_status_id) {
            return $status['application_status_id'] == $application_status_id;
        });
    }


    public function getLeadStatuses($lead_status_id): array
    {

        $leadStatuses = [
            [
                'lead_status_id' => 1,
                'lead_status_name' => 'Hot Leads',
                'monthly_counts' => [28, 100, 45, 38, 15, 30, 35, 32, 8, 10, 15, 4]
            ],
            [
                'lead_status_id' => 2,
                'lead_status_name' => 'Cold Leads',
                'monthly_counts' => [35, 25, 15, 40, 42, 25, 48, 8, 30, 10, 15, 20]
            ],
            [
                'lead_status_id' => 3,
                'lead_status_name' => 'Warm Leads',
                'monthly_counts' => [10, 22, 27, 33, 42, 32, 27, 22, 8, 10, 15, 20]
            ]
        ];

        return array_filter($leadStatuses, function ($status) use ($lead_status_id) {
            return $status['lead_status_id'] == $lead_status_id;
        });
    }
}
