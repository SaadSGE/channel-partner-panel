<script setup>
import { useApplicationListStore } from '@/@core/stores/applicationList';
import { commonFunction } from '@/@core/stores/commonFunction';

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

// Stores
const commonFunctionStore = commonFunction();
const store = useApplicationListStore();

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
    const response = await store.getStudentList(
      props.userId,
      page.value,
      itemsPerPage.value,
      search.value,
      sortBy.value,
      orderBy.value,
      selectedStatus.value,
      selectedDateFrom.value,
      selectedDateTo.value,
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
watch([search, selectedStatus, selectedDateFrom, selectedDateTo], () => {
  fetchStudents();
});

// Lifecycle hooks


// Table headers
const headers = ref([
  { title: 'Student ID', key: 'student_id' },
  { title: 'Name', key: 'full_name' },
  { title: 'Email', key: 'email' },
  { title: 'Phone', key: 'whatsapp_number' },
  { title: 'University', key: 'university_intake_course_country' },
  { title: 'Counsellor', key: 'counsellor.full_name' },
  { title: 'Branch', key: 'counsellor.branch.branch_name_with_country' },
  { title: 'Status', key: 'status' },
  { title: 'Action', key: 'action', sortable: false },
]);
</script>
<template>
  <div class="student-list-container">
    <AppCardActions title="Student List" :loading="isLoading" no-actions>

      <VCardText>
        <VRow>
          <Filters :selected-status="selectedStatus" @update-status="selectedStatus = $event"
            :selected-dateFrom="selectedDateFrom" :selected-dateTo="selectedDateTo"
            @update-dateFrom="selectedDateFrom = $event" @update-dateTo="selectedDateTo = $event"></Filters>
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
        </div>
      </VCardText>

      <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :items="studentLists"
        :items-length="totalStudents" :headers="headers" class="text-no-wrap color-black student-table"
        :height="tableHeight" @update:options="updateOptions">
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
        <template #item.status="{ item }">
          <VChip :color="resolveStatusColor(item.status)" :class="`text-${resolveStatusColor(item.status)}`"
            size="small" class="font-weight-medium">
            {{ resolveStatusName(item.status) }}
          </VChip>
        </template>
        <template #item.action="{ item }">
          <div class="d-flex flex-column ms-3">
            <IconBtn @click="viewStudentDetail(item.id)">
              <VIcon icon="tabler-eye" />
            </IconBtn>
            <IconBtn @click="deleteItem(item.id)">
              <VIcon icon="tabler-trash" />
            </IconBtn>
          </div>
        </template>

        <template #bottom>
          <TablePagination v-model:page="page" :items-per-page="itemsPerPage" :total-items="totalStudents" />
        </template>
      </VDataTableServer>

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
</style>
