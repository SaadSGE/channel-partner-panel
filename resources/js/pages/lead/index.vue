<script lang="js" setup>
const props = defineProps({
    userId: {
        type: String,
        default: null,
    },
})
definePage({
    meta: {
        action: 'read',
        subject: 'dashboard',
    },
})

import Filters from "@/@core/components/Filters.vue";
import { useLeadStore } from "@/@core/stores/leadStore";
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { ref } from "vue";

const leadStore = useLeadStore();
// Reactive state
const leads = ref([]);
const total = ref();
const isLoading = ref();
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const search = ref('')
const selectedStatus = ref(null)
const selectedDateFrom = ref(null)
const selectedDateTo = ref(null)
const showDialog = ref(false);
const selectedLeadId = ref(null);
// Upload Component Visibility
const showUploadCard = ref(false);

const headers = [
    { title: 'Name', key: 'name' },
    { title: 'Phone', key: 'phone' },
    { title: 'Email', key: 'email' },
    { title: 'Note', key: 'notes' },
    { title: 'Lead Date', key: 'lead_date' },
    { title: 'Branch Name', key: 'branch' },
    { title: 'Interested Course & Country', key: 'course_country' },
    { title: 'Status', key: 'status' },
    { title: 'Assigned Branch', key: 'assigned_branch' },
    { title: 'Assigned User', key: 'assigned_user' },
    { title: 'Actions', key: 'actions', sortable: false },
];

// Watchers
watch([
    search,
    selectedStatus,
    selectedDateFrom,
    selectedDateTo,
], () => {
    fetchLeads()
})

onMounted(async () => {
    await fetchLeads();
    console.log(leads);
});


const toggleUploadCard = () => {
    showUploadCard.value = !showUploadCard.value;
};

// Sample File Download Function
const downloadSampleFile = () => {
    // Logic to download sample file
};

// File Upload Logic
const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
};

const uploadFile = () => {
    // Logic to handle file upload
};

// Methods
const fetchLeads = async () => {
    isLoading.value = true
    try {
        const response = await leadStore.getLeads(
            props.userId,
            page.value,
            itemsPerPage.value,
            search.value,
            sortBy.value,
            orderBy.value,
            selectedStatus.value,
            selectedDateFrom.value,
            selectedDateTo.value,
        )
        leads.value = response.data;
        total.value = response.total;
    } catch (error) {
        console.error('Error fetching leads:', error)
    } finally {
        isLoading.value = false
    }
}
const updateOptions = options => {
    sortBy.value = options.sortBy[0]?.key
    orderBy.value = options.sortBy[0]?.order
}

// Open dialog and set selected lead ID
const openChangeStatusDialog = (leadId) => {
    selectedLeadId.value = leadId;
    showDialog.value = true;
};

// Handle status update from dialog
const handleStatusUpdate = async ({ leadId, status }) => {
    await leadStore.updateLeadStatus(leadId, status);
    fetchLead(); // Refresh leads after updating status
    showDialog.value = false;  // Close the dialog
};
</script>

<template>
    <section>
        <VCard class="mb-6">
            <VCardItem class="pb-4" v-if="$can('filter', 'user')">
                <VCardTitle>Filter</VCardTitle>
            </VCardItem>

            <VCardText v-if="$can('filter', 'user')">
                <VRow>
                    <!-- 👉 Select status -->
                    <Filters :selected-status="selectedStatus" @update-status="selectedStatus = $event"
                        :selected-dateFrom="selectedDateFrom" :selected-dateTo="selectedDateTo"
                        @update-dateFrom="selectedDateFrom = $event" @update-dateTo="selectedDateTo = $event">
                    </Filters>
                </VRow>
            </VCardText>

            <VDivider />

            <VCardText class="d-flex flex-wrap gap-4">
                <div class="me-3 d-flex gap-3">
                    <AppSelect :model-value="itemsPerPage" :items="[
                        { value: 10, title: '10' },
                        { value: 25, title: '25' },
                        { value: 50, title: '50' },
                        { value: 100, title: 100 },
                        { value: -1, title: 'All' },
                    ]" style="inline-size: 6.25rem;" @update:model-value="itemsPerPage = parseInt($event, 10)" />
                </div>
                <VSpacer />
                <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
                    <!-- 👉 Search  -->
                    <div style="inline-size: 15.625rem;">
                        <AppTextField v-model="search" placeholder="Search Lead" />
                    </div>

                    <!-- 👉 Export button -->

                    <!-- 👉 Add user button -->
                    <VBtn prepend-icon="tabler-plus" @click="toggleUploadCard" v-if="$can('create', 'user')">
                        Upload Lead
                    </VBtn>

                </div>
                <!-- Upload Lead VCard (Initially Hidden) -->
                <VCard v-if="showUploadCard" class="mt-4 upload-card full-width">
                    <VRow justify="space-between" align="center" class="mb-2">
                        <span class="font-weight-bold">Upload Lead Excel File</span>
                        <VBtn icon @click="toggleUploadCard" class="close-btn">
                            <VIcon icon="tabler-x" />
                        </VBtn>
                    </VRow>
                    <VCardText class="d-flex flex-column align-center justify-center">
                        <div class="form-padding text-center">
                            <div class="d-flex flex-column align-center justify-center gap-2 mt-4">
                                <!-- File Upload Input -->
                                <input type="file" accept=".xlsx, .csv" @change="handleFileUpload" class="file-input" />
                                <VBtn @click="uploadFile" color="primary" class="upload-btn">Upload</VBtn>
                            </div>
                            <p class="text-muted mt-2 text-center">Only excel/csv file support</p>
                            <div class="d-flex justify-center mt-4 gap-4">
                                <span class="sample-file-text">Download Sample Excel File</span>
                                <VBtn @click="downloadSampleFile" variant="outlined" class="download-btn">Download
                                </VBtn>
                            </div>
                        </div>
                    </VCardText>
                </VCard>
            </VCardText>
            <VDivider />
            <!-- SECTION datatable -->
            <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :loading="isLoading"
                @update:options="updateOptions" :items-length="total" :headers="headers" :items="leads"
                item-value="total" class="text-no-wrap text-sm rounded-0">

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
                    <span :class="getLeadStatusColor(item.status)">{{ getLeadStatus(item.status) }}</span>
                </template>

                <template #item.assigned_branch="{ item }">
                    <span>{{ item.assigned_branch || 'Not Assigned' }}</span>
                </template>

                <template #item.assigned_user="{ item }">
                    <span>{{ item.assigned_user || 'Not Assigned' }}</span>
                </template>
                <template #item.actions="{ item }">
                    <VBtn icon variant="text" color="medium-emphasis">
                        <VIcon icon="tabler-dots-vertical" />
                        <VMenu activator="parent">
                            <VList>
                                <!-- Change Status option opens the dialog -->
                                <VListItem @click="openChangeStatusDialog(item.status)" v-if="$can('edit', 'user')">
                                    <template #prepend>
                                        <VIcon icon="tabler-analyze" />
                                    </template>
                                    <VListItemTitle>Change Status</VListItemTitle>
                                </VListItem>
                                <VListItem @click="setParent(item)" v-if="$can('edit', 'user')">
                                    <template #prepend>
                                        <VIcon icon="tabler-clipboard-text" />
                                    </template>
                                    <VListItemTitle>Add Note</VListItemTitle>
                                </VListItem>
                            </VList>
                        </VMenu>
                    </VBtn>
                </template>
                <template #bottom>
                    <TablePagination v-model:page="page" :items-per-page="itemsPerPage" :total-items="total" />
                </template>

            </VDataTableServer>
            <!-- SECTION -->
        </VCard>
        <!-- 👉 Add New User -->
        <!-- Change Status Dialog Component -->
        <ChangeStatusDialog :showDialog="showDialog" :leadId="selectedLeadId" @updateStatus="handleStatusUpdate"
            @closeDialog="showDialog = false" />
    </section>
</template>

<style lang="scss">
/* Upload Card Styles */
.upload-card {
    position: relative;
    padding: 20px;
    border-radius: 8px;
    background-color: #f2e6ff;
}

.close-btn {
    position: absolute;
    inset-block-start: 8px;
    inset-inline-end: 8px;
}

.form-padding {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.file-input {
    padding: 12px;
    border: none;
    border-radius: 4px;
    background-color: #d3d2d5;
    inline-size: 300px;
}

.upload-btn {
    background-color: #d1b3ff;
    color: #000;
}

.download-btn {
    background-color: #d1b3ff;
    color: #000;
}

.text-muted {
    color: #666;
    font-size: 0.9em;
    text-align: center;
}

.sample-file-text {
    font-size: 1.2em;
    font-weight: bold;
}

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
