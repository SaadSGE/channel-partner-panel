<script setup>
definePage({
  meta: {
    action: 'read',
    subject: 'application',
  },
});

import { useApplicationListStore } from '@/@core/stores/applicationList';
import { commonFunction } from '@/@core/stores/commonFunction';
import { useUserStore } from '@/@core/stores/user';


import Swal from 'sweetalert2';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

// Store and Router
const store = useApplicationListStore();
const userStore = useUserStore();
const router = useRouter();
const isAdmin = ref(getUserRole() === 'admin');

// Reactive State
const applicationLists = ref([]);
const totalApplications = ref(0);
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const search = ref('');
const selectedStatus = ref(null);
const selectedUniversity = ref(null);
const selectedChannelPartner = ref(null);
const selectedApplicationOfficer = ref(null);
const selectedStudentEmail = ref('');
const dateFrom = ref(null);
const dateTo = ref(null);
const isLoading = ref(false);
const universities = ref([]);
const channelPartners = ref([]);
const applicationOfficers = ref([]);
const applicationStore = useApplicationListStore();
const commonsFunctionStore = commonFunction();
const statuses = ref([
  { id: 0, name: 'Application Processing' },
  { id: 1, name: 'Application Submitted' },
  { id: 2, name: 'Pending Docs' },
  { id: 3, name: 'Offer Issue Conditional' },
  { id: 4, name: 'Offer Issue Unconditional' },
  { id: 5, name: 'Need Payment' },
  { id: 6, name: 'CAS Issued' },
  { id: 7, name: 'Additional Doc Needed' },
  { id: 8, name: 'Refund Required' },
  { id: 9, name: 'Application Rejected' },
  { id: 10, name: 'Session Expired' },
  { id: 11, name: 'Doc Received' },
  { id: 12, name: 'Partial Payment' },
]);

const props = defineProps({
  userId: {
    type: String,
    default: null,
  }
});

// Methods
const fetchApplications = async () => {
  isLoading.value = true;
  try {
    const response = await store.getApplicationList(
      props.userId,
      page.value,
      itemsPerPage.value,
      search.value,
      sortBy.value,
      orderBy.value,
      selectedStatus.value,
      selectedUniversity.value,
      selectedChannelPartner.value,
      selectedApplicationOfficer.value,
      selectedStudentEmail.value,
      dateFrom.value,
      dateTo.value
    );
    applicationLists.value = response.data;
    totalApplications.value = response.total;
  } catch (error) {
    console.error('Error fetching applications:', error);
  } finally {
    isLoading.value = false;
  }
};

const updateOptions = (options) => {
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
  fetchApplications();
};

const viewApplicationDetail = (applicationId) => {
  router.push({ name: 'application-details', params: { id: applicationId } });
};

const deleteItem = async (itemId) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to delete this item?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  });

  if (result.isConfirmed) {
    try {
      await store.deleteItem(itemId);
      fetchApplications();
      Swal.fire('Deleted!', 'The item has been deleted.', 'success');
    } catch (error) {
      Swal.fire('Error!', 'There was an error deleting the item.', 'error');
    }
  }
};

// Fetch filter options
const fetchFilterOptions = async () => {
  try {

    const universityList = await commonsFunctionStore.getUniversities();

    universities.value = universityList.data.map(university => ({
      id: university.id,
      name: university.name
    }));

    const channelPartnersResponse = await userStore.fetchUsers(1, '', 'channel partner', '', true);
    channelPartners.value = channelPartnersResponse.data.map(user => ({
      id: user.id,
      name: user.company_name_with_email
    }));

    const applicationOfficersResponse = await userStore.fetchUsers(1, '', 'application control officer', '', true);
    applicationOfficers.value = applicationOfficersResponse.data.map(user => ({
      id: user.id,
      name: user.name_with_email
    }));

  } catch (error) {
    console.error('Error fetching filter options:', error);
  }
};

// Watchers
watch([
  search,
  selectedStatus,
  selectedUniversity,
  selectedChannelPartner,
  selectedApplicationOfficer,
  selectedStudentEmail,
  dateFrom,
  dateTo
], () => {
  fetchApplications();
});

// Mounted Hook
onMounted(() => {
  fetchFilterOptions();
  fetchApplications();
});

// Header Definitions
const headers = ref([
  { title: 'APPLICATION ID', key: 'application_id' },
  { title: 'Student Name', key: 'student.name' },
  { title: 'Student Email', key: 'student.email' },
  ...(isAdmin.value
    ? [{ title: 'Application Officer', key: 'user.parent.email' }]
    : []),
  { title: 'Channel Partner', key: 'user.email' },
  { title: 'University/Course Details', key: 'university.name' },
  { title: 'Status', key: 'status' },
  { title: 'Date Added', key: 'created_at' },
  { title: 'Action', key: 'action', sortable: false },
]);

// Status Color Resolvers
const resolveStatusColor = (status) => {
  const statusColors = {
    0: 'primary', 1: 'success', 2: 'warning', 3: 'info',
    4: 'info', 5: 'warning', 6: 'success', 7: 'warning',
    8: 'danger', 9: 'danger', 10: 'secondary', 11: 'success',
    12: 'warning'
  };
  return statusColors[status] || 'secondary';
};

const resolveStatusName = (status) => {
  const statusNames = {
    0: 'Application Processing', 1: 'Application Submitted',
    2: 'Pending Docs', 3: 'Offer Issue Conditional',
    4: 'Offer Issue Unconditional', 5: 'Need Payment',
    6: 'CAS Issued', 7: 'Additional Doc Needed',
    8: 'Refund Required', 9: 'Application Rejected',
    10: 'Session Expired', 11: 'Doc Received', 12: 'Partial Payment',
  };
  return statusNames[status] || 'Unknown Status';
};
</script>

<template>
  <div>
    <AppCardActions title="New Application" :loading="isLoading" no-actions>
      <!-- Search and Pagination -->
      <VCardText class="d-flex flex-wrap gap-4">
        <div class="me-3 d-flex gap-3">
          <AppSelect
            :model-value="itemsPerPage"
            :items="[
              { value: 10, title: '10' },
              { value: 25, title: '25' },
              { value: 50, title: '50' },
              { value: 100, title: 100 },
              { value: -1, title: 'All' },
            ]"
            style="inline-size: 6.25rem;"
            @update:model-value="itemsPerPage = parseInt($event, 10)"
          />
        </div>
        <VSpacer />

        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search  -->
          <div style="inline-size: 15.625rem;">
            <AppTextField v-model="search" placeholder="Search Application" />
          </div>
        </div>
      </VCardText>

      <!-- New Filters Section -->
      <!-- <VCardText>
        <VRow>
          <VCol cols="12" md="3">
            <AppAutocomplete
              v-model="selectedStatus"
              :items="statuses"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Status"
              placeholder="Select Status"
              clearable
            />
          </VCol>
          <VCol cols="12" md="3">
            <AppAutocomplete
              v-model="selectedChannelPartner"
              :items="channelPartners"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Channel Partner"
              placeholder="Select Channel Partner"
              clearable
            />
          </VCol>
          <VCol cols="12" md="3">
            <AppAutocomplete
              v-model="selectedUniversity"
              :items="universities"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="University"
              placeholder="Select University"
              clearable
            />
          </VCol>
          <VCol cols="12" md="3">
            <AppAutocomplete
              v-model="selectedApplicationOfficer"
              :items="applicationOfficers"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Application Officer"
              placeholder="Select Application Officer"
              clearable
            />
          </VCol>

          <VCol cols="12" md="3">
            <AppDateTimePicker
              v-model="dateFrom"
              label="From Date"
              placeholder="Select From Date"
            />
          </VCol>
          <VCol cols="12" md="3">
            <AppDateTimePicker
              v-model="dateTo"
              label="To Date"
              placeholder="Select To Date"
            />
          </VCol>
        </VRow>
      </VCardText> -->

      <!-- Data Table -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items="applicationLists"
        :items-length="totalApplications"
        :headers="headers"
        class="text-no-wrap color-black"
        @update:options="updateOptions"
      >
        <template #item.student.name="{ item }">
          <p>{{ item.student.first_name }} {{ item.student.last_name }}</p>
        </template>
        <template #item.user.email="{ item }">
          <div class="d-flex flex-column">
            <span class="d-block font-weight-medium text-truncate text-high-emphasis">
              {{ item.user.company_name }}
            </span>
            <span class="text-md">{{ item.user.email }}</span>
          </div>
        </template>
        <template #item.university.name="{ item }">
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-truncate text-high-emphasis">
              {{ item.university.name }}
            </span>
            <span class="text-md">{{ item.course.name }}</span>
            <span class="text-md">{{ item.intake.name }}</span>
          </div>
        </template>
        <template #item.status="{ item }">
          <VChip
            :color="resolveStatusColor(item.status)"
            :class="`text-${resolveStatusColor(item.status)}`"
            size="small"
            class="font-weight-medium"
          >
            {{ resolveStatusName(item.status) }}
          </VChip>
        </template>
        <template #item.action="{ item }">
          <div class="d-flex flex-column ms-3">
            <IconBtn @click="viewApplicationDetail(item.id)">
              <VIcon icon="tabler-eye" />
            </IconBtn>
            <IconBtn @click="deleteItem(item.id)" v-if="$can('delete','application')">
              <VIcon icon="tabler-trash" />
            </IconBtn>
          </div>
        </template>

        <!-- pagination -->
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalApplications"
          />
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

.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
td {
  overflow: auto;
  max-inline-size: 30rem; /* Adjust the max-width as needed */
  white-space: nowrap;
  word-wrap: break-word;
}

.v-table__wrapper {
  max-block-size: 35rem !important;
}
</style>

