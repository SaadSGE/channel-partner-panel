<script setup>
const searchQuery = ref('')
const selectedStatus = ref(null)
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(6)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
    // page.value = options.page
    // sortBy.value = options.sortBy[0]?.key
    // orderBy.value = options.sortBy[0]?.order
}

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
    }

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
        <VCardText>
            <div class="d-flex justify-space-between flex-wrap gap-4">
                <div class="d-flex gap-4 align-center">
                    <div class="d-flex align-center gap-x-2">
                        <div>
                            Show
                        </div>
                        <AppSelect :model-value="itemsPerPage" :items="[
                            { value: 6, title: '6' },
                            { value: 10, title: '10' },
                            { value: 25, title: '25' },
                            { value: 50, title: '50' },
                            { value: 100, title: '100' },
                            { value: -1, title: 'All' },
                        ]" @update:model-value="itemsPerPage = parseInt($event, 10)" />
                    </div>
                    <!-- 👉 Create application -->

                </div>
                <div class="d-flex align-center flex-wrap gap-4">
                    <!-- 👉 Search  -->
                    <div class="application-list-filter">
                        <AppTextField v-model="searchQuery" placeholder="Search Application" />
                    </div>
                    <!-- 👉 Select status -->
                    <div class="application-list-filter">
                        <AppSelect v-model="selectedStatus" placeholder="Select Status" clearable clear-icon="tabler-x"
                            single-line
                            :items="['Downloaded', 'Draft', 'Sent', 'Paid', 'Partial Payment', 'Past Due']" />
                    </div>
                </div>
            </div>
        </VCardText>

        <VDivider />

        <!-- SECTION Datatable -->
        <VDataTableServer v-model="selectedRows" v-model:items-per-page="itemsPerPage" v-model:page="page"
            :items-length="applications.length" :headers="headers" :items="applications" item-value="id"
            class="text-no-wrap" @update:options="updateOptions">
            <!-- pagination -->
            <template #bottom>
                <TablePagination v-model:page="page" :items-per-page="itemsPerPage"
                    :total-items="applications.length" />
            </template>
        </VDataTableServer>
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
