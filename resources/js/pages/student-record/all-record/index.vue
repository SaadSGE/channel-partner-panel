<script setup>
import { useApplicationListStore } from '@/@core/stores/applicationList';
import { commonFunction } from '@/@core/stores/commonFunction';
import { useStudentStore } from '@/@core/stores/studentStore';
import { useApplicationStore } from '@/@core/stores/submitApplication';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

// Page definition
definePage({
  meta: {
    action: 'read',
    subject: 'dashboard',
  },
});

// Props
const props = defineProps({
  userId: {
    type: String,
    default: null,
  },
});

// Reactive references
const tableHeight = computed(() => `calc(100vh - 200px)`);
const totalStudents = ref(0);
const page = ref(1);
const search = ref('');
const itemsPerPage = ref(10);
const sortBy = ref();
const orderBy = ref();
const isLoading = ref(false);
const selectedDateFrom = ref(null);
const selectedDateTo = ref(null);
const studentLists = ref([]);
const selectedStatus = ref(null);
const showDocumentDialog = ref(false);
const selectedStudentDocs = ref(null);
const selectedStudentSource = ref(null);
const showApplicationDialog = ref(false);
const selectedStudentUniversities = ref([]);

// Stores
const commonFunctionStore = commonFunction();
const store = useApplicationListStore();
const studentStore = useStudentStore();
const applicationStore = useApplicationStore();

const router = useRouter();
// Methods
const viewStudentDetail = studentId => {
  router.push({ name: 'student-record-details-id', params: { id: studentId } });
};

const deleteItem = async (item) => {
  const data = { ...item };
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to delete this item?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  });

  if (result.isConfirmed) {
    try {
      await commonFunctionStore.deleteAllStudent(data.id);
      students.value = commonFunctionStore.students;
      Swal.fire('Deleted!', 'The item has been deleted.', 'success');
    } catch (error) {
      Swal.fire('Error!', 'There was an error deleting the item.', 'error');
    }
  }
};

const updateOptions = options => {
  page.value = options.page
  itemsPerPage.value = options.itemsPerPage
  sortBy.value = options.sortBy[0]?.key || ''
  orderBy.value = options.sortBy[0]?.order || ''
  fetchStudents();
};

const fetchStudents = async () => {
  isLoading.value = true;
  try {
    const response = await studentStore.getStudentList(
      page.value,
      itemsPerPage.value,
      search.value,
      sortBy.value,
      orderBy.value,
      selectedStatus.value,
      selectedDateFrom.value,
      selectedDateTo.value,
      selectedStudentSource.value,
    );
    studentLists.value = response.data;
    totalStudents.value = response.total;
  } catch (error) {
    console.error('Error fetching applications:', error);
  } finally {
    isLoading.value = false;
  }
};

// Watchers
watch([search, selectedStatus, selectedDateFrom, selectedDateTo, selectedStudentSource], () => {
  fetchStudents();
});

// Lifecycle hooks


// Table headers
const headers = ref([
  { title: 'Action', key: 'action', sortable: false },
  { title: 'Student Source', key: 'lead_id' },
  { title: 'Document Complete?', key: 'profile_status.document_status' },
  { title: 'Profile Complete?', key: 'profile_status.interested_university_status' },
  { title: 'Student ID', key: 'student_id' },
  { title: 'Name', key: 'full_name' },
  { title: 'Email', key: 'email' },
  { title: 'Phone', key: 'whatsapp_number' },
  { title: 'Counsellor', key: 'counsellor.full_name' },
  { title: 'University', key: 'university_intake_course_country' },


]);

const documentTypes = [
  { name: 'passport', label: 'Passport', required: true },
  { name: 'academic_letter', label: 'Academic Reference Letter', required: true },
  { name: 'professional_letter', label: 'Professional Reference Letter', required: true },
  { name: 'cv-resume', label: 'CV/Resume', required: true },
  { name: 'sop', label: 'SOP', required: true },
  { name: 'supporting_document', label: 'Supporting Document', required: false }
];

const showDocumentStatus = (item) => {

  selectedStudentDocs.value = item.document;


  showDocumentDialog.value = true;
};

const addStudent = () => {
  // Logic to add a student, e.g., navigate to a new student form page
  router.push({ name: 'student-record' });
};

const makeApplication = async (studentId) => {
  // Fetch university data for the student
  const response = await studentStore.getUniversitiesForStudent(studentId);
  selectedStudentUniversities.value = response.applied_university;
  console.log(selectedStudentUniversities.value);
  showApplicationDialog.value = true;
};

const applyToUniversity = async (university) => {
  // Hide the university information modal
  showApplicationDialog.value = false;

  try {
    const result = await Swal.fire({
      title: 'Confirm Application',
      text: `Are you sure you want to apply to ${university.university_name} for ${university.course_name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Apply',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      allowOutsideClick: false,
      backdrop: true,
      position: 'center',
      customClass: {
        container: 'swal-over-modal',
        popup: 'swal-popup-over-modal',
        backdrop: 'swal-backdrop-over-modal'
      }
    });

    if (result.isConfirmed) {
      // Proceed with the application
      await applicationStore.submitApplication(
        {},
        university.course_id,
        university.intake_id,
        university.university_id,
        university.country_id,
        university.course_details_id || null,
        [],
        university.id,
        null
      );

      Swal.fire({
        title: 'Success!',
        text: 'Application created successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      // If the user cancels, show the university information modal again
      showApplicationDialog.value = true;
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Application Failed',
      text: error,
      confirmButtonText: 'OK',
    });

    // Show the university information modal again in case of an error
    showApplicationDialog.value = true;
  }
};
</script>
<template>
  <div class="student-list-container">
    <AppCardActions title="Student List" :loading="isLoading" no-actions>

      <VCardText>
        <VRow>
          <Filters :selected-status="selectedStatus" :selected-dateFrom="selectedDateFrom"
            :selected-dateTo="selectedDateTo" :selected-student-source="selectedStudentSource"
            @update-status="selectedStatus = $event" @update-dateFrom="selectedDateFrom = $event"
            @update-dateTo="selectedDateTo = $event" @update-student-source="selectedStudentSource = $event"></Filters>
        </VRow>
      </VCardText>

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

          <div style="inline-size: 15.625rem;">
            <AppTextField v-model="search" placeholder="Search Student" />
          </div>
          <VBtn @click="addStudent" v-if="$can('create', 'student')">
            <VIcon icon="tabler-plus" />
            Add Student
          </VBtn>
        </div>

      </VCardText>

      <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :items="studentLists"
        :items-length="totalStudents" :headers="headers" class="text-no-wrap color-black student-table"
        :height="tableHeight" @update:options="updateOptions">
        <template #item.lead_id="{ item }">
          <VChip :color="item.lead_id ? 'primary' : 'warning'" size="small" class="font-weight-medium">
            {{ item.lead_id ? 'Lead' : 'Regular' }}
          </VChip>
        </template>
        <template #item.profile_status.document_status="{ item }">
          <VChip :color="item.profile_status.document_status ? 'success' : 'error'" size="small"
            class="font-weight-medium" style="cursor: pointer;" @click="showDocumentStatus(item)">
            {{ item.profile_status.document_status ? 'Yes' : 'No' }}
          </VChip>
        </template>
        <template #item.profile_status.interested_university_status="{ item }">
          <VChip :color="item.profile_status.interested_university_status ? 'success' : 'error'" size="small"
            class="font-weight-medium">
            {{ item.profile_status.interested_university_status ? 'Yes' : 'No' }}
          </VChip>
        </template>
        <template #item.full_name="{ item }">
          <p>{{ item.full_name }}</p>
        </template>
        <template #item.email="{ item }">
          <p>{{ item.email }}</p>
        </template>
        <template #item.passport_no="{ item }">
          <p>{{ item.passport_no }}</p>
        </template>
        <template #item.university_intake_course_country="{ item }">
          <ul class="university-list ms-3">
            <template v-for="(choice, index) in item.university_intake_course_country" :key="index">
              <li class="text-truncate text-high-emphasis">
                {{ choice }}
              </li>
              <VDivider v-if="index < item.university_intake_course_country.length - 1" class="my-1" />
            </template>
          </ul>
        </template>
        <template #item.counsellor.full_name="{ item }">
          <p>
            <span style="color: #696cff;">{{ item.counsellor.full_name }}</span>
            <span style="color: #8a8d93;"> - </span>
            <span style="color: #28c76f;">{{ item.counsellor.branch.branch_name_with_country }}</span>
          </p>
        </template>



        <template #item.action="{ item }">
          <div class="d-flex flex-column ms-3">
            <IconBtn @click="viewStudentDetail(item.id)">
              <VIcon color="primary" icon="tabler-eye" />
            </IconBtn>
            <IconBtn @click="makeApplication(item.id)" v-if="$can('create', 'application')">
              <VIcon color="success" icon="tabler-file-plus" />
            </IconBtn>
            <IconBtn @click="deleteItem(item.id)" v-if="$can('delete', 'student')">
              <VIcon color="error" icon="tabler-trash" />
            </IconBtn>

          </div>
        </template>

        <template #bottom>
          <TablePagination v-model:page="page" :items-per-page="itemsPerPage" :total-items="totalStudents" />
        </template>
      </VDataTableServer>

      <VDialog v-model="showDocumentDialog" max-width="800" class="centered-dialog" transition="dialog-transition">
        <VCard>
          <VCardTitle class="d-flex justify-space-between align-center pa-4">
            Document Status
            <VBtn icon variant="text" @click="showDocumentDialog = false">
              <VIcon icon="tabler-x" />
            </VBtn>
          </VCardTitle>
          <VDivider />

          <VCardText class="pa-4">
            <VList>
              <VListItem v-for="doc in documentTypes" :key="doc.name">
                <template #prepend>
                  <VIcon
                    :color="selectedStudentDocs?.find(d => d.document_name.toLowerCase() === doc.name.toLowerCase()) ? 'success' : 'error'"
                    :icon="selectedStudentDocs?.find(d => d.document_name.toLowerCase() === doc.name.toLowerCase()) ? 'tabler-check' : 'tabler-x'"
                    class="me-2" />
                </template>

                <VListItemTitle>
                  {{ doc.label }}
                  <VChip v-if="doc.required" color="warning" size="x-small" class="ms-2">
                    Required
                  </VChip>
                </VListItemTitle>

                <template #append>
                  <VChip
                    :color="selectedStudentDocs?.find(d => d.document_name.toLowerCase() === doc.name.toLowerCase()) ? 'success' : 'error'"
                    size="small">
                    {{ selectedStudentDocs?.find(d => d.document_name.toLowerCase() === doc.name.toLowerCase()) ?
                      'Uploaded' : 'Missing' }}
                  </VChip>
                </template>
              </VListItem>
            </VList>
          </VCardText>
        </VCard>
      </VDialog>

      <VDialog v-model="showApplicationDialog" max-width="80%" class="centered-dialog" transition="dialog-transition">
        <VCard>
          <VCardTitle class="d-flex justify-space-between align-center pa-4">
            University Information
            <VBtn icon variant="text" @click="showApplicationDialog = false">
              <VIcon icon="tabler-x" />
            </VBtn>
          </VCardTitle>
          <VDivider />

          <VCardText class="pa-4">
            <VTable class="university-info-table">
              <thead>
                <tr>
                  <th class="text-primary">Intake Name</th>
                  <th class="text-primary">University Name</th>
                  <th class="text-primary">Course Name</th>
                  <th class="text-primary">Course Type</th>
                  <th class="text-primary">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="university in selectedStudentUniversities" :key="university?.id">
                  <td>{{ university?.intake_name || 'N/A' }}</td>
                  <td>{{ university?.university_name || 'N/A' }}</td>
                  <td>{{ university?.course_name || 'N/A' }}</td>
                  <td>{{ university?.course_type || 'N/A' }}</td>
                  <td>

                    <template>
                      <VBtn @click="applyToUniversity(university)" v-if="university?.application_done === 'false'"
                        color="primary" size="small" class="px-4">
                        Apply
                      </VBtn>
                      <VChip v-else color="success" size="small">Already Applied</VChip>
                    </template>
                  </td>
                </tr>
              </tbody>
            </VTable>
          </VCardText>
        </VCard>
      </VDialog>

    </AppCardActions>
  </div>
</template>


<style scoped>
.form-padding {
  padding-block: 0 2rem;
  padding-inline: 2rem;
}

.label {
  color: black;
}

.v-data-table>.v-data-table__wrapper>table>thead>tr>th,
td {
  overflow: auto;
  max-inline-size: 30rem;

  /* Adjust the max-width as needed */
  white-space: nowrap;
  word-wrap: break-word;
}

.student-list-container {
  display: flex;
  flex-direction: column;
  block-size: 100%;
}

.student-table {
  overflow: auto;
  flex: 1;
}

.university-list {
  margin: 0;
  list-style-type: disc;
  padding-inline-start: 1rem;
}

.university-list li {
  color: black;
  font-size: 0.85rem;
}

.centered-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.v-overlay__content) {
  display: flex;
  justify-content: center;
  margin: auto;
  animation: slideIn 0.3s ease-out;
  margin-inline-start: 150px;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Dialog Animation */
.dialog-transition-enter-active,
.dialog-transition-leave-active {
  transition: all 0.3s ease-out;
}

.dialog-transition-enter-from,
.dialog-transition-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* University Information Table Styling */
.university-info-table {
  border-radius: 8px;
  border-collapse: collapse;
  inline-size: 100%;
}

.university-info-table th {
  background-color: #f8f8f8;
  font-weight: 600;
  padding-block: 12px;
  padding-inline: 16px;
  text-align: start;
}

.university-info-table td {
  border-block-end: 1px solid #eee;
  padding-block: 12px;
  padding-inline: 16px;
}

.university-info-table tbody tr:hover {
  background-color: #f5f5f5;
  transition: background-color 0.2s ease;
}

.university-info-table tbody tr td {
  vertical-align: middle;
}

.text-error {
  color: #ea5455 !important;
  font-size: 0.875rem;
}

:deep(.swal-over-modal) {
  position: relative;
  z-index: 10000 !important;
}

:deep(.swal-popup-over-modal) {
  position: relative;
  z-index: 10001 !important;
}

:deep(.swal-backdrop-over-modal) {
  position: fixed;
  z-index: 9999 !important;
}

:deep(.v-dialog) {
  z-index: 9000;
}
</style>
