<script setup>
const props = defineProps({
  userId: {
    type: String,
    default: null,
  },
})

definePage({
  meta: {
    action: 'read',
    subject: 'application',
  },
})

import Filters from '@/@core/components/Filters.vue';
import { useApplicationListStore } from '@/@core/stores/applicationList';
import { getUserRole, resolveStatusColor, resolveStatusName } from '@/@core/utils/helpers';
import Swal from 'sweetalert2';
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const { can } = useAbility();
// Store and Router
const store = useApplicationListStore()

const router = useRouter()
const isAdmin = ref(getUserRole() === 'admin')

// Reactive State
const applicationLists = ref([])
const totalApplications = ref(0)
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const search = ref('')
const selectedStatus = ref(null)
const selectedUniversity = ref(null)
const selectedChannelPartner = ref(null)
const selectedApplicationOfficer = ref(null)
const selectedStudentEmail = ref('')
const selectedDateFrom = ref(null)
const selectedDateTo = ref(null)
const isLoading = ref(false)

const applicationStore = useApplicationListStore()



// Methods
const fetchApplications = async () => {
  isLoading.value = true
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
      selectedDateFrom.value,
      selectedDateTo.value,
    )

    applicationLists.value = response.data
    totalApplications.value = response.total
  } catch (error) {
    console.error('Error fetching applications:', error)
  } finally {
    isLoading.value = false
  }
}

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
  fetchApplications()
}

const viewApplicationDetail = applicationId => {
  router.push({ name: 'application-details', params: { id: applicationId } })
}

const deleteItem = async itemId => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to delete this item?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  })

  if (result.isConfirmed) {
    try {
      await store.deleteItem(itemId)
      fetchApplications()
      Swal.fire('Deleted!', 'The item has been deleted.', 'success')
    } catch (error) {
      Swal.fire('Error!', 'There was an error deleting the item.', 'error')
    }
  }
}

// Fetch filter options


// Watchers
watch([
  search,
  selectedStatus,
  selectedUniversity,
  selectedChannelPartner,
  selectedApplicationOfficer,
  selectedStudentEmail,
  selectedDateFrom,
  selectedDateTo,
], () => {
  fetchApplications()
})

// Mounted Hook
onMounted(() => {

  fetchApplications()
})

// Header Definitions
const headers = ref([
  { title: 'APPLICATION ID', key: 'application_id' },
  { title: 'Student Name', key: 'student.name' },
  { title: 'Student Email', key: 'student.email' },
  ...((can('application-control-officer-view', 'application'))
    ? [{ title: 'Application Control Officer', key: 'user.parent.email' }]
    : []),
  { title: 'Channel Partner', key: 'user.email' },
  { title: 'University/Course Details', key: 'university.name' },
  { title: 'Status', key: 'status' },
  { title: 'Date Added', key: 'created_at' },
  { title: 'Action', key: 'action', sortable: false },
])

// Add this computed property
const tableHeight = computed(() => {
  return `calc(100vh - 200px)` // Adjust this value as needed
})
</script>

<template>
  <div class="application-list-container">
    <AppCardActions title="Application List" :loading="isLoading" no-actions>
      <!-- New Filters Section -->
      <VCardText>
        <VRow>
          <Filters :selected-status="selectedStatus" :selected-channel-partner="selectedChannelPartner"
            :selected-university="selectedUniversity" :selected-application-officer="selectedApplicationOfficer"
            :selected-dateFrom="selectedDateFrom" :selected-dateTo="selectedDateTo"
            @update-status="selectedStatus = $event" @update-channel-partner="selectedChannelPartner = $event"
            @update-university="selectedUniversity = $event"
            @update-application-officer="selectedApplicationOfficer = $event"
            @update-dateFrom="selectedDateFrom = $event" @update-dateTo="selectedDateTo = $event">
            :isAdmin = "isAdmin"
          </Filters>
        </VRow>
      </VCardText>
      <!-- Search and Pagination -->
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
            <AppTextField v-model="search" placeholder="Search Application" />
          </div>
        </div>
      </VCardText>



      <!-- Data Table -->
      <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :items="applicationLists"
        :items-length="totalApplications" :headers="headers" class="text-no-wrap color-black application-table"
        :height="tableHeight" @update:options="updateOptions">
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
          <VChip :color="resolveStatusColor(item.status)" :class="`text-${resolveStatusColor(item.status)}`"
            size="small" class="font-weight-medium">
            {{ resolveStatusName(item.status) }}
          </VChip>
        </template>
        <template #item.action="{ item }">
          <div class="d-flex flex-column ms-3">
            <IconBtn @click="viewApplicationDetail(item.application_id)">
              <VIcon icon="tabler-eye" />
            </IconBtn>
            <IconBtn v-if="$can('delete', 'application')" @click="deleteItem(item.id)">
              <VIcon icon="tabler-trash" />
            </IconBtn>
          </div>
        </template>

        <!-- pagination -->
        <template #bottom>
          <TablePagination v-model:page="page" :items-per-page="itemsPerPage" :total-items="totalApplications" />
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

.application-list-container {
  display: flex;
  flex-direction: column;
  block-size: 100%;
}

.application-table {
  overflow: auto;
  flex: 1;
}
</style>
