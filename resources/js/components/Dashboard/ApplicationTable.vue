<script lang="js" setup>
import { useDemoDashboardStore } from '@/@core/stores/demodashboard';

const demoDashboardStore = useDemoDashboardStore();

const applications = ref([]);

const fetchApplications = async () => {
    await demoDashboardStore.fetchDashboardData();
    applications.value = demoDashboardStore.dashboardData.recent_applications;
}

onMounted(async () => {
    await fetchApplications();
});


// 👉 headers
const headers = [

    {
        title: 'Date',
        key: 'date',
    },
    {
        title: 'Applicant Name',
        key: 'applicant_name',
    },
    {
        title: 'Email',
        key: 'email',
    },
    {
        title: 'Status',
        key: 'status',
    },
    {
        title: 'Channel Partner',
        key: 'channel_partner',
    },
]


</script>

<template>
    <VCard v-if="applications" id="application-list">

        <VCardItem title="Application List" subtitle="62 Applications in progress" class="pb-4">

        </VCardItem>

        <VDivider />

        <!-- SECTION Datatable -->
        <VTable>
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header.key">
                        {{ header.title }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="application in applications" :key="application.email">
                    <td>{{ application.date }}</td>
                    <td>{{ application.applicant_name }}</td>
                    <td>{{ application.email }}</td>
                    <td>{{ application.status }}</td>
                    <td>{{ application.channel_partner }}</td>
                </tr>
            </tbody>
        </VTable>
        <!-- !SECTION -->
    </VCard>
</template>
