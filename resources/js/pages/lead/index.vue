<script lang="js" setup>
definePage({
    meta: {
        action: 'read',
        subject: 'dashboard',
    },
})

import ShowMore from "@/@core/components/ShowMore.vue";
import { useLeadStore } from "@/@core/stores/leadStore";
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { ref } from "vue";

const leadStore = useLeadStore();
// Reactive state
const leads = ref([]);
const total = ref();
const isLoading = ref();
const itemsPerPage = ref(10);
const page = ref(1);

const headers = [
    { title: 'Lead Date', key: 'lead_date' },
    { title: 'Branch Name', key: 'branch' },
    { title: 'Email', key: 'email' },
    { title: 'Name', key: 'name' },
    { title: 'Phone', key: 'phone' },
    { title: 'Interested Course & Country', key: 'course_country' },
    { title: 'Status', key: 'status' },
    { title: 'Assigned Branch', key: 'assigned_branch' },
    { title: 'Assigned User', key: 'assigned_user' },
    { title: 'Note', key: 'notes' },
    { title: 'Actions', key: 'actions', sortable: false },
];
onMounted(async () => {
    isLoading.value = true;
    await fetchLead();
    isLoading.value = false;
    console.log(leads);
});

// Methods
const fetchLead = async () => {
    isLoading.value = true;
    const fetchLeads = await leadStore.getLeads();
    leads.value = fetchLeads.data;
    total.value = fetchLeads.total;
    isLoading.value = false;
};

// Get color based on status code
const getStatusColor = (status) => {
    const statusColors = {
        1: 'status-color-1',
        2: 'status-color-2',
        3: 'status-color-3',
        4: 'status-color-4',
        5: 'status-color-5',
        6: 'status-color-6',
        7: 'status-color-7',
        8: 'status-color-8',
        9: 'status-color-9',
        10: 'status-color-10',
        11: 'status-color-11',
        12: 'status-color-12',
        13: 'status-color-13',
        14: 'status-color-14',
        15: 'status-color-15',
    };
    return statusColors[status] || 'default-status-color';
};

</script>

<template>
    <div>
        <AppCardActions title="Total Leads" class="mt-2" :loading="isLoading" no-actions>
            <VCardText>
                <VRow>

                    <!-- <Filters :selected-country="selectedCountry" @update-country="selectedCountry = $event"
                        :selected-intake="selectedIntake" @update-intake="selectedIntake = $event"
                        :selected-university2="selectedUniversity" @update-university2="selectedUniversity = $event"
                        :selected-courseName="selectedCourseName" @update-courseName="selectedCourseName = $event"
                        :selected-dateFrom="selectedDateFrom" @update-dateFrom="selectedDateFrom = $event"
                        :selected-dateTo="selectedDateTo" @update-dateTo="selectedDateTo = $event"
                        :selected-editor="selectedEditor" @update-editor="selectedEditor = $event">
                    </Filters> -->


                </VRow>
                <div class="d-flex justify-space-between flex-wrap gap-6 mt-5">
                    <div>
                        <AppTextField v-model="searchQuery" style="max-inline-size: 200px; min-inline-size: 200px;"
                            placeholder="Search Leads" />
                    </div>
                    <div class="d-flex flex-row gap-4 align-center flex-wrap">
                        <AppSelect v-model="itemsPerPage" :items="[10, 25, 50, 100]" style="inline-size: 6.25rem;" />
                    </div>
                </div>
            </VCardText>
            <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :loading="isLoading"
                :items-length="total" :headers="headers" :items="leads" item-value="total"
                class="text-no-wrap text-sm rounded-0">

                <!-- Slot for 'course_country' column with combined Interested Course and Country -->
                <template #item.course_country="{ item }">
                    <div class="d-flex flex-column ms-3">
                        <span class="d-block font-weight-medium text-truncate text-high-emphasis">
                            {{ item.interested_course }}
                        </span>
                        <span class="text-md">{{ item.interested_country }}</span>
                    </div>
                </template>

                <!-- Other slots and configurations remain the same -->
                <template #item.notes="{ item }">
                    <ShowMore :text="item.notes" :lines="3" />
                </template>

                <template #item.status="{ item }">
                    <span :class="getStatusColor(item.status)">{{ item.status }}</span>
                </template>

                <template #item.assigned_branch="{ item }">
                    <span>{{ item.assigned_branch || 'Not Assigned' }}</span>
                </template>

                <template #item.assigned_user="{ item }">
                    <span>{{ item.assigned_user || 'Not Assigned' }}</span>
                </template>

                <template #item.actions="{ item }">
                    <div class="d-flex gap-1">
                        <IconBtn @click="editItem(item)">
                            <VIcon icon="tabler-analyze" />
                        </IconBtn>
                        <IconBtn @click="deleteItem(item)">
                            <VIcon icon="tabler-clipboard-text" />
                        </IconBtn>
                    </div>
                </template>

                <template #bottom>
                    <TablePagination v-model:page="page" :items-per-page="itemsPerPage" :total-items="total" />
                </template>
            </VDataTableServer>
        </AppCardActions>
    </div>
</template>
<style lang="scss">
.form-padding {
    padding-block: 0 2rem;
    padding-inline: 2rem;
}

.label {
    color: black;
}

.ql-editor {
    overflow: auto;
    block-size: 250px;
    max-block-size: 250px;
}

.v-data-table>.v-data-table__wrapper>table>thead>tr>th,
td {
    overflow: auto;
    max-inline-size: 30rem;

    /* Adjust the max-width as needed */
    white-space: nowrap;
    word-wrap: break-word;
}

.v-table__wrapper {
    max-block-size: 35rem !important;
}

/* Status color classes */
.status-color-1 {
    color: rgb(237, 46, 46);
}

.status-color-2 {
    color: #04c434;
}

.status-color-3 {
    color: #ffa500;
}

.status-color-4 {
    color: #ff0;
}

.status-color-5 {
    color: #9acd32;
}

.status-color-6 {
    color: #008000;
}

.status-color-7 {
    color: #20b2aa;
}

.status-color-8 {
    color: #00ced1;
}

.status-color-9 {
    color: #1e90ff;
}

.status-color-10 {
    color: #4169e1;
}

.status-color-11 {
    color: #6a5acd;
}

.status-color-12 {
    color: #8a2be2;
}

.status-color-13 {
    color: #9400d3;
}

.status-color-14 {
    color: #ff1493;
}

.status-color-15 {
    color: #ff69b4;
}

.default-status-color {
    color: #000;
}
</style>
