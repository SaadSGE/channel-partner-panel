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
const isLoading = ref(false)
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const search = ref('')
const selectedStatus = ref(null)
const selectedStatusId = ref(null)
const selectedDateFrom = ref(null)
const selectedDateTo = ref(null)
const showDialog = ref(false);
const selectedLeadId = ref(null);
const showUploadCard = ref(false);
const showAddNoteModal = ref(false) // Modal visibility state for comments
const newNote = ref("") // New comment
const isNoteLoading = ref(false)
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
const openChangeStatusDialog = (leadId, statusId) => {
    selectedLeadId.value = leadId;
    selectedStatusId.value = statusId;
    showDialog.value = true;
};

// Handle status update from dialog
const handleLeadStatusUpdate = async ({ leadId, statusId }) => {
    console.log(leadId, statusId);
    const updateStatus = {
        status: statusId,
    }
    await leadStore.updateLeadStatus(leadId, updateStatus);
    console.log('Updated status');
    await fetchLeads(); // Refresh leads after updating status
    showDialog.value = false;  // Close the dialog
};


const handleAddNote = async (leadId) => {
    try {
        showAddNoteModal.value = true;
        isNoteLoading.value = true
        console.log(newNote.value);
        const noteData = {
            notes: newNote.value
        }
        await leadStore.addNote(leadId, noteData)
        newNote.value = "" // Clear the note input
        showAddNoteModal.value = false // Close the note modal
    } catch (error) {
        console.error("Error adding note:", error)
    } finally {
        isNoteLoading.value = false
        fetchLeads();
    }
}
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


                <!-- Modal for adding a comment -->
                <VDialog v-model="showAddNoteModal" max-width="500px">
                    <VCard>
                        <VCardTitle>Add a New Note</VCardTitle>
                        <VCardText>
                            <VForm @submit.prevent="handleAddNote">
                                <VLabel class="mt-2">
                                    New Note
                                </VLabel>
                                <AppTextarea v-model="newNote" placeholder="Add a new note" class="mt-2" />
                            </VForm>
                        </VCardText>
                        <VCardActions>
                            <VSpacer />
                            <VBtn color="primary" :loading="isNoteLoading" :disabled="isNoteLoading"
                                @click="handleAddNote">
                                Submit Note
                            </VBtn>
                            <VBtn :disabled="isNoteLoading" @click="showAddNoteModal = false">
                                Cancel
                            </VBtn>
                        </VCardActions>
                    </VCard>
                </VDialog>
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

                    <!-- 👉 Upload lead button-->
                    <VBtn prepend-icon="tabler-plus" @click="toggleUploadCard">
                        Upload Lead
                    </VBtn>

                </div>
                <!-- Upload Lead VCard (Initially Hidden) -->
                <VCard v-if="showUploadCard" class="mt-4 w-100 full-width-card">
                    <VCardText>
                        <!-- Card Header with Title and Close Button -->
                        <VRow justify="space-between" class="align-center">
                            <span>Upload Lead Excel/csv File</span>
                            <VBtn icon @click="toggleUploadCard">
                                <VIcon icon="tabler-x" />
                            </VBtn>
                        </VRow>

                        <!-- Main Form Area -->
                        <div class="form-padding mt-6">
                            <VRow justify="center" align="center" class="gap-4">
                                <!-- File Upload Input with Half Width -->
                                <VCol cols="12" md="6">
                                    <VFileInput accept=".xlsx, .csv" label="Upload Excel/CSV file"
                                        @change="handleFileUpload" variant="outlined" color="purple-lighten-4" />
                                </VCol>

                                <!-- Upload Button -->
                                <VBtn prepend-icon="tabler-cloud-upload" @click="uploadFile" color="purple-lighten-4">
                                    Upload
                                </VBtn>
                            </VRow>

                            <!-- File Format Notice with Margin Top -->
                            <VRow justify="center" class="mt-2">
                                <p class="text-muted">Only Excel/CSV file support</p>
                            </VRow>

                            <!-- Download Sample Section with Bold Text Button -->
                            <VRow justify="center" align="center" class="mt-6 gap-2">
                                <span class="text-lg font-bold">Download Sample Excel/CSV File</span>
                                <VBtn prepend-icon="tabler-cloud-download" @click="downloadSampleFile"
                                    class="ml-4 font-bold">
                                    Download
                                </VBtn>
                            </VRow>
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
                    <VChip :color="resolveLeadStatusColor(item.status)"
                        :class="`text-${resolveStatusColor(item.status)}`" size="small" class="font-weight-medium">
                        {{ resolveLeadStatusName(item.status) }}
                    </VChip>
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
                                <VListItem @click="openChangeStatusDialog(item.id, item.status)">
                                    <template #prepend>
                                        <VIcon icon="tabler-analyze" />
                                    </template>
                                    <VListItemTitle>Change Status</VListItemTitle>
                                </VListItem>
                                <VListItem @click="showAddNoteModal = true">
                                    <template #prepend>
                                        <VIcon icon=" tabler-clipboard-text" />
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
        </VCard>
        <!-- Change Status Dialog Component -->
        <ChangeStatusDialog :showDialog="showDialog" :leadId="selectedLeadId" :statusId='selectedStatus'
            @updateStatus="handleLeadStatusUpdate" @closeDialog="showDialog = false" />
    </section>
</template>

<style lang="scss">
.full-width-card {
    padding: 10px;
    border-radius: 8px;
    margin: 0;
    background-color: #f6f6fa;
    inline-size: 100%;
    max-inline-size: 100%;
}

.font-bold {
    font-weight: bold;
}

.text-muted {
    color: #04c434;
}

.text-lg {
    font-size: 1.25rem;
}

.font-medium {
    font-weight: 500;
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
