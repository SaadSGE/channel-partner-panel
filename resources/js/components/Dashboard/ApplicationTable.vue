<script setup>


const applications = ref([

    {
        date: '2024-01-21',
        applicant_name: 'John Smith',
        email: 'john.smith@email.com',
        status: 'Application Processing',
        channel_partner: 'Global Education Connect'
    },
    {
        date: '2024-01-20',
        applicant_name: 'Sarah Wilson',
        email: 'sarah.w@email.com',
        status: 'Offer Issue Conditional',
        channel_partner: 'Study Abroad Experts'
    },
    {
        date: '2024-01-19',
        applicant_name: 'Michael Chang',
        email: 'michael.c@email.com',
        status: 'Pending Docs',
        channel_partner: 'Future Connect'
    },
    {
        date: '2024-01-18',
        applicant_name: 'Emma Davis',
        email: 'emma.d@email.com',
        status: 'Application Submitted',
        channel_partner: 'Education Bridge'
    },
    {
        date: '2024-01-17',
        applicant_name: 'James Anderson',
        email: 'james.a@email.com',
        status: 'Offer Issue Unconditional',
        channel_partner: 'Overseas Education'
    },
    {
        date: '2024-01-16',
        applicant_name: 'Olivia Martinez',
        email: 'olivia.m@email.com',
        status: 'Application Submitted',
        channel_partner: 'Education Bridge'
    },


]);

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

<style lang="scss">
#application-list {
    .application-list-actions {
        inline-size: 8rem;
    }

    .application-list-filter {
        inline-size: 12rem;
    }
}
</style>
