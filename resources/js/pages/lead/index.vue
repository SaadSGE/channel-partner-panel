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

import { useLeadStore } from "@/@core/stores/leadStore";
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { reactive, ref } from "vue";
// Add these imports at the top
import { commonFunction } from "@/@core/stores/commonFunction";
import { onMounted } from "vue";
import 'vue3-toastify/dist/index.css';
import UploadLead from './upload-lead.vue';

// Add these refs
const commonFunctionStore = commonFunction();
const leadStatuses = ref([]);
// Add this to your onMounted hook
onMounted(async () => {
  fetchLeadStatuses()

});

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
const selectedLeadStatus = ref(null)
const selectedStatusId = ref(null)
const selectedDateFrom = ref(null)
const selectedDateTo = ref(null)
const showDialog = ref(false);
const selectedLeadId = ref(null);
const showUploadCard = ref(false);
const showAddNoteModal = ref(false) // Modal visibility state for comments
const newNote = ref("") // New comment
const isNoteLoading = ref(false)
const showAllNotes = reactive({});
const convertToStudent = ref(false);
// Add new ref for assigned status
const selectedAssignedStatus = ref(null)

// Define reactive states for the filters
const selectedLeadType = ref(null);
const selectedEvent = ref(null);
const selectedBranch = ref(null);


// Function to toggle between showing all notes and only the first two for each lead
const toggleShowNotes = (leadId) => {
  showAllNotes[leadId] = !showAllNotes[leadId];
}
const selectedLeadCountry = ref(null);
const headers = [
  { title: 'Actions', key: 'actions', sortable: false },
  { title: 'Lead Country', key: 'lead_type' },
  { title: 'Name', key: 'name' },
  { title: 'Phone', key: 'phone' },
  { title: 'Email', key: 'email' },
  { title: 'Interested Course & Country', key: 'course_country' },
  { title: 'Current Status', key: 'status' },
  { title: 'Status History', key: 'statusHistory' },
  { title: 'Assigned Status', key: 'assigned_user' },
  { title: 'Assigned User', key: 'assigned_user.name_with_email' },
  { title: 'Manager\'s Note', key: 'notes' },
  { title: 'Assigned Branch', key: 'branch.branch_name_with_country' },




];

// Watchers
watch([
  search,
  selectedLeadStatus,
  selectedDateFrom,
  selectedDateTo,
  selectedAssignedStatus,
  selectedLeadType,
  selectedEvent,
  selectedBranch,
  selectedLeadCountry

], () => {
  fetchLeads()
})



const fetchLeadStatuses = async () => {
  await commonFunctionStore.getLeadStatus();
  leadStatuses.value = commonFunctionStore.leadStatus;
}

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
      selectedLeadStatus.value,
      selectedDateFrom.value,
      selectedDateTo.value,
      selectedAssignedStatus.value,
      selectedLeadType.value,
      selectedEvent.value,
      selectedBranch.value,
      selectedLeadCountry.value
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
  fetchLeads();
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// Open dialog and set selected lead ID
const openChangeStatusDialog = (leadId, statusId, converStatus) => {

  selectedLeadId.value = leadId;
  selectedStatusId.value = statusId;
  showDialog.value = true;
  convertToStudent.value = converStatus;
};

// Handle status update from dialog
const handleLeadStatusUpdate = async ({ leadId, statusId, statusNote }) => {
  console.log('convertToStudent', convertToStudent.value);
  const updateStatus = {
    status: statusId,
    status_note: statusNote
  }
  await leadStore.updateLeadStatus(leadId, updateStatus);

  await fetchLeads(); // Refresh leads after updating status
  showDialog.value = false;  // Close the dialog
};

// Get status name by status ID
const resolveLeadStatusName = (statusId) => {
  const status = leadStatuses.value.find((status) => status.id === statusId);
  return status ? status.name : "Unknown Status";
};
const resolveLeadStatusColor = (statusId) => {
  const status = leadStatuses.value.find((status) => status.id === statusId);
  return status ? status.color_code : "#000";
};

const handleAddNote = async (leadId) => {
  if (!leadId) {
    console.error("Lead ID is required to add a note.");
    return;
  }

  try {
    isNoteLoading.value = true;
    const noteData = {
      note: newNote.value,
    };
    await leadStore.addNoteToLead(leadId, noteData.note);

    // Clear the note input and close the modal
    newNote.value = ""; // Clear the note input
    showAddNoteModal.value = false; // Close the modal

    // Refresh the leads data
    await fetchLeads();
  } catch (error) {
    console.error("Error adding note:", error);
  } finally {
    isNoteLoading.value = false;
  }
};

const showAllStatusHistory = reactive({});

const toggleShowStatusHistory = (leadId) => {
  showAllStatusHistory[leadId] = !showAllStatusHistory[leadId];
};

const openAddNoteDialog = (leadId) => {
  selectedLeadId.value = leadId;
  showAddNoteModal.value = true;
};

const toggleUploadCard = () => {
  showUploadCard.value = !showUploadCard.value
}
</script>

<template>
  <section>
    <VCard class="mb-6">
      <VCardItem class="pb-4" v-if="$can('create', 'lead')">
        <VCardTitle>Filter</VCardTitle>
      </VCardItem>

      <VCardText v-if="$can('create', 'lead')">
        <VRow>
          <Filters :selected-assigned-status="selectedAssignedStatus" :selected-lead-status="selectedLeadStatus"
            :selected-dateFrom="selectedDateFrom" :selected-dateTo="selectedDateTo"
            :selected-lead-type="selectedLeadType" :selected-event="selectedEvent"
            :selected-country="selectedLeadCountry" :selected-branch="selectedBranch"
            @update-assignedStatus="selectedAssignedStatus = $event" @update-lead-status="selectedLeadStatus = $event"
            @update-dateFrom="selectedDateFrom = $event" @update-dateTo="selectedDateTo = $event"
            @update-lead-type="selectedLeadType = $event" @update-event="selectedEvent = $event"
            @update-country="selectedLeadCountry = $event" @update-branch="selectedBranch = $event"
            country-label="Lead Country">
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
                @click="() => handleAddNote(selectedLeadId)">
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


          <!-- 👉 Upload lead button-->
          <VBtn prepend-icon="tabler-plus" @click="toggleUploadCard" v-if="$can('create', 'lead')">
            Upload Lead
          </VBtn>

        </div>
        <!-- Upload Lead VCard (Initially Hidden) -->
        <UploadLead v-model:showUploadCard="showUploadCard" @leadsUploaded="fetchLeads" />



      </VCardText>
      <VDivider />

      <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :loading="isLoading"
        @update:options="updateOptions" :items-length="total" :headers="headers" :items="leads" item-value="total"
        class="text-no-wrap text-sm rounded-0">
        <template #item.lead_type="{ item }">

          <span>{{ item.lead_type === 'social' ? item.lead_country?.name : item.lead_event?.name }}</span>
        </template>
        <template #item.assigned_user="{ item }">
          <VChip :color="item.assigned_user ? 'success' : 'error'" size="small" class="font-weight-medium"
            style="color: #000; cursor: pointer;">
            {{ item.assigned_user ? 'Assigned' : 'Unassigned' }}
          </VChip>
        </template>
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
          <ul style="list-style-type: disc; padding-inline-start: 20px;">
            <!-- Display first two notes or all notes based on showAllNotes toggle -->
            <template v-for="(note, index) in (showAllNotes[item.id] ? item.notes : item.notes.slice(0, 2))"
              :key="note.id">
              <li class="note" style="font-size: 1.1em; margin-block-end: 8px;">
                {{ note.note }}
                ( <small style="color: #757575;">
                  <span style="color: #007acc;">{{ note.created_by }}</span>,
                  <span style="color: orange;">{{ note.created_at ? new
                    Date(note.created_at).toLocaleDateString() : 'N/A' }}</span>
                </small> )
              </li>
            </template>
          </ul>
          <!-- Show More / Show Less link with custom style -->
          <p v-if="item.notes.length > 2" @click="toggleShowNotes(item.id)"
            style="color: blue; cursor: pointer; font-weight: bold; padding-inline-start: 10px; text-decoration: underline;">
            {{ showAllNotes[item.id] ? 'Show Less' : 'Show More' }}
          </p>
        </template>
        <template #item.status="{ item }">
          <VChip :color="item.status?.color_code || '#D3D3D3'" size="small" class="font-weight-medium"
            style="cursor: pointer;"
            @click="openChangeStatusDialog(item.id, item.status?.id, item.status?.convert_to_student)">
            {{ item.status?.name || 'Unknown Status' }}
          </VChip>
        </template>
        <template #item.assigned_branch="{ item }">
          <span v-if="item.assigned_branch">{{ item.assigned_branch }}</span>
          <VChip v-else color="error" size="small" variant="flat">Not Assigned</VChip>
        </template>

        <template #item.actions="{ item }">
          <VBtn icon variant="text" color="medium-emphasis" class="action-button">
            <VIcon icon="tabler-dots-vertical" />
            <VMenu activator="parent" open-on-hover>
              <VList>
                <!-- Change Status option with specific color -->
                <VListItem @click="openChangeStatusDialog(item.id, item.status)" class="change-status-option">
                  <template #prepend>
                    <VIcon icon="tabler-analyze" />
                  </template>
                  <VListItemTitle>Change Status</VListItemTitle>
                </VListItem>
                <!-- Add Note option with specific color -->
                <VListItem @click="openAddNoteDialog(item.id)" class="add-note-option">
                  <template #prepend>
                    <VIcon icon="tabler-clipboard-text" />
                  </template>
                  <VListItemTitle>Add Note</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </VBtn>
        </template>
        <template #item.statusHistory="{ item }">
          <ul style="list-style-type: disc; padding-inline-start: 20px;">
            <!-- Display first two status history entries or all based on showAllStatusHistory toggle -->
            <template
              v-for="(history, index) in (showAllStatusHistory[item.id] ? item.status_history : item.status_history.slice(0, 2))"
              :key="history.id">
              <li class="status-history" style="font-size: 1.1em; margin-block-end: 8px;">
                <span :style="{ color: resolveLeadStatusColor(history.status_id) }">
                  {{ history.status_name }}
                </span> -
                <span style="color: #757575;">
                  {{ history.status_note }}
                </span>
                ( <small style="color: #757575;">
                  <span style="color: #007acc;">{{ history.user_name }}</span>,
                  <span style="color: orange;">{{ history.created_at }}</span>
                </small> )
              </li>
            </template>
          </ul>
          <!-- Show More / Show Less link with custom style -->
          <p v-if="item.status_history.length > 2" @click="toggleShowStatusHistory(item.id)"
            style="color: blue; cursor: pointer; font-weight: bold; padding-inline-start: 10px; text-decoration: underline;">
            {{ showAllStatusHistory[item.id] ? 'Show Less' : 'Show More' }}
          </p>
        </template>
        <template #bottom>
          <TablePagination v-model:page="page" :items-per-page="itemsPerPage" :total-items="total" />
        </template>

      </VDataTableServer>
    </VCard>
    <!-- Change Status Dialog Component -->
    <ChangeStatusDialog :showDialog="showDialog" :leadId="selectedLeadId" :statusId='selectedStatusId'
      :leadStatuses="leadStatuses" :resolveLeadStatusName="resolveLeadStatusName" @updateStatus="handleLeadStatusUpdate"
      @closeDialog="showDialog = false" />
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

.upload-card {
  border: 1px solid rgba(99, 102, 241, 10%);
  border-radius: 12px;
  animation: slideDown 0.3s ease-out;
  background: linear-gradient(145deg, #fff, #f8f7ff);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 8%);
}

.upload-title {
  background: linear-gradient(45deg, #818cf8, #a78bfa);
  background-clip: text;
  color: transparent;
  font-weight: 600;
}

.close-btn {
  color: #999;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #333;
}

.upload-form {
  border: 1px solid rgba(99, 102, 241, 10%);
  background-color: rgba(255, 255, 255, 70%);

  .v-label {
    color: #6366f1;
  }
}

.slide-in {
  animation: slide-in 0.5s ease forwards;
  opacity: 0;
  transform: translateX(20px);
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.file-input-animate {
  &:hover {
    background-color: rgba(99, 102, 241, 3%);
  }

  &.has-file {
    border-color: #818cf8;
    background-color: rgba(99, 102, 241, 5%);
  }
}

.upload-btn {
  background-color: #818cf8 !important;
  color: white !important;

  &:hover {
    background-color: #6366f1 !important;
  }
}

.download-btn {
  border: 1px solid #818cf8 !important;
  background-color: #e0e7ff !important;
  color: #4f46e5 !important;

  &:hover {
    background-color: #c7d2fe !important;
  }
}

.sample-section {
  padding: 1.5rem;
  border-radius: 8px;
  background-color: rgba(99, 102, 241, 3%);
  border-block-start: 1px dashed #c7d2fe;

  .text-lg {
    color: #6366f1;
  }
}

.v-file-input {
  .v-field {
    background-color: rgba(255, 255, 255, 90%) !important;

    &:hover {
      background-color: rgba(99, 102, 241, 3%) !important;
    }
  }
}

.v-autocomplete {
  .v-field {
    background-color: rgba(255, 255, 255, 90%) !important;

    &:hover {
      background-color: rgba(99, 102, 241, 3%) !important;
    }
  }
}

.text-caption.text-primary {
  color: #6366f1 !important;
  font-weight: 500;
}

.text-red {
  color: rgb(237, 46, 46);
}

.action-button {
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #6366f1 !important; // Change to desired hover color
    transform: scale(1.1);
  }
}

.change-status-option {
  background-color: #e0f7fa; // Light cyan background
  color: #00796b; // Teal text color

  &:hover {
    background-color: #b2ebf2; // Darker cyan on hover
  }
}

.add-note-option {
  background-color: #fff3e0; // Light orange background
  color: #e65100; // Orange text color

  &:hover {
    background-color: #ffe0b2; // Darker orange on hover
  }
}
</style>
