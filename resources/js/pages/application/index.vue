<script setup>
definePage({
  meta: {
    action: 'read',
    subject: 'application',
  },
});

import { useApplicationListStore } from '@/@core/stores/applicationList';
import { getUserRole } from '@/@core/utils/helpers';
import Swal from 'sweetalert2';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

// Store and Router
const store = useApplicationListStore();
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
const selectedStatus = ref();
const selectedUniversity = ref(null);
const selectedChannelPartner = ref(null);
const isLoading = ref(false);
const universities = ref([]);  // Fetch this list from API or store if needed
const channelPartners = ref([]);  // Fetch this list from API or store if needed
const statuses = ref([
  { value: 0, name: 'Application Processing' },
  { value: 1, name: 'Application Submitted' },
  { value: 2, name: 'Pending Docs' },
  { value: 3, name: 'Offer Issue Conditional' },
  { value: 4, name: 'Offer Issue Unconditional' },
  { value: 5, name: 'Need Payment' },
  { value: 6, name: 'CAS Issued' },
  { value: 7, name: 'Additional Doc Needed' },
  { value: 8, name: 'Refund Required' },
  { value: 9, name: 'Application Rejected' },
  { value: 10, name: 'Session Expired' },
  { value: 11, name: 'Doc Received' },
  { value: 12, name: 'Partial Payment' },
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

// Watchers
watch([search, selectedStatus, selectedUniversity, selectedChannelPartner], () => {
  fetchApplications();
});

// Mounted Hook
onMounted(() => {
  fetchApplications();
  // You can also load the filter options here (like universities and channel partners)
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
const triggerCollapse = () => {
  isContentCollapsed.value = !isContentCollapsed.value;
};
const isContentCollapsed = ref(true);
</script>

<template>
  <div>
    <!-- <VCard class="mb-4" title="Filter">



  <VCardText >

    <VRow >

      <VCol cols="12" sm="4">
        <AppSelect
          v-model="selectedStatus"
          placeholder="Select Status"
          :items="statuses"
          clearable
          clear-icon="tabler-x"
          :item-title="(item) => item.name"
          :item-value="(item) => item.value"
        />
      </VCol>


      <VCol cols="12" sm="4">
        <AppSelect
          v-model="selectedUniversity"
          placeholder="Select University"
          :items="universities"
          clearable
          clear-icon="tabler-x"
          :item-title="(item) => item.name"
          :item-value="(item) => item.id"
        />
      </VCol>


      <VCol cols="12" sm="4">
        <AppSelect
          v-model="selectedChannelPartner"
          placeholder="Select Channel Partner"
          :items="channelPartners"
          clearable
          clear-icon="tabler-x"
          :item-title="(item) => item.email"
          :item-value="(item) => item.id"
        />
      </VCol>
    </VRow>
  </VCardText>
</VCard> -->
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
            style="inline-size: 6.25rem"
            @update:model-value="itemsPerPage = parseInt($event, 10)"
          />
        </div>
        <VSpacer />

        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search  -->
          <div style="inline-size: 15.625rem">
            <AppTextField v-model="search" placeholder="Search Application" />
          </div>
        </div>
      </VCardText>

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
/* Table Container */
.v-table {
  overflow-x: auto; /* Enable horizontal scrolling */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  white-space: nowrap; /* Prevent text from wrapping */
  scroll-behavior: smooth; /* Smooth scrolling effect */
  max-height: 33rem /* Adjust to match window height, minus any desired offset */
}

/* Table Header and Cells */
.v-data-table__thead th,
.v-data-table__tbody td {
  max-width: 30rem; /* Control maximum width */
  padding: 0.75rem 1rem; /* Add padding for better spacing */
  text-align: left; /* Ensure left alignment for readability */
  vertical-align: middle; /* Align content vertically in the middle */
  overflow: hidden; /* Hide overflow to maintain layout */
  white-space: nowrap; /* Prevent text from wrapping */
  text-overflow: ellipsis; /* Add ellipsis for overflowed text */
}

/* Chip Styling for Status Column */
.v-chip {
  padding: 0.25rem 0.5rem; /* Adjust padding for better spacing */
  border-radius: 12px; /* Rounded corners for a modern look */
  font-weight: 500; /* Bold font for better readability */
  display: inline-flex; /* Ensure proper alignment */
  align-items: center; /* Center-align items within the chip */
}

/* Action Buttons */
.v-btn {
  padding: 0.5rem; /* Adjust padding for smaller buttons */
  margin: 0.25rem 0; /* Add margin for spacing between buttons */
  border-radius: 50%; /* Round buttons for a clean look */
  display: inline-flex; /* Inline-flex for consistent button sizing */
  justify-content: center; /* Center content within the button */
  align-items: center; /* Align items to the center */
}

.v-btn--icon {
  width: 2rem; /* Set a fixed width */
  height: 2rem; /* Set a fixed height */
}

/* Pagination Styling */
.v-pagination__list {
  display: flex; /* Display pagination items in a row */
  justify-content: center; /* Center pagination controls */
  gap: 0.5rem; /* Add space between pagination buttons */
}

.v-pagination__item {
  padding: 0.5rem; /* Adjust padding for a better click area */
  border-radius: 8px; /* Rounded corners for a cohesive design */
  background-color: #f0f0f0; /* Light background for non-active items */
}

.v-pagination__item--is-active {
  background-color: #0055a5; /* Highlight active page */
  color: #fff; /* White text for contrast */
}

/* Miscellaneous */
.v-divider {
  margin: 1rem 0; /* Add margin to separate content */
  border-top: 1px solid #ddd; /* Light border color */
}

.text-disabled {
  color: #888; /* Grey color for disabled text */
}

.d-flex {
  display: flex; /* Flexbox for layouts */
}

.flex-column {
  flex-direction: column; /* Column layout */
}

.align-center {
  align-items: center; /* Center align items */
}

.justify-center {
  justify-content: center; /* Center align content horizontally */
}

.ms-3 {
  margin-left: 1rem; /* Add margin for spacing */
}

.gap-3 {
  gap: 1rem; /* Uniform gap between items */
}

.text-no-wrap {
  white-space: nowrap; /* Prevent text wrapping */
}



.font-weight-medium {
  font-weight: 500; /* Medium font weight */
}

</style>

