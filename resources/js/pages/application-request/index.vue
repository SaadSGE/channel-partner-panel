<template>
  <div class="application-request-list-container">
    <AppCardActions title="Application Requests" :loading="isLoading" no-actions>
      <!-- Search and Pagination -->
      <VCardText class="d-flex flex-wrap gap-4">
        <div class="me-3 d-flex gap-3">
          <AppSelect v-model="itemsPerPage"
            :items="[{ value: 10, title: '10' }, { value: 25, title: '25' }, { value: 50, title: '50' }, { value: 100, title: 100 }, { value: -1, title: 'All' }]"
            style="inline-size: 6.25rem;" @update:model-value="itemsPerPage = parseInt($event, 10)" />
        </div>
        <VSpacer />
        <AppTextField v-model="searchQuery" placeholder="Search" density="compact" style="inline-size: 15.625rem;" />
      </VCardText>

      <VDivider />

      <!-- Application Requests Table -->
      <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="currentPage" :items="applicationRequests"
        :items-length="totalApplicationRequests" :headers="headers" class="text-no-wrap application-table"
        :loading="isLoading" @update:options="updateOptions">
        <template #item.student.name="{ item }">
          {{ item.student.first_name }} {{ item.student.last_name }}
        </template>
        <template #item.actions="{ item }">
          <div class="d-flex gap-2">

            <VBtn icon color="success" size="small" @click="handleAccept(item)">
              <VIcon icon="tabler-check" />
            </VBtn>
            <VBtn icon color="error" size="small" @click="handleReject(item)">
              <VIcon icon="tabler-x" />
            </VBtn>
          </div>
        </template>
        <template #item.status="{ item }">
          <VChip :color="resolveStatusColor(item.status)" :class="`text-${resolveStatusColor(item.status)}`"
            size="small" class="font-weight-medium">
            {{ resolveStatusName(item.status) }}
          </VChip>
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

        <!-- pagination -->
        <template #bottom>
          <TablePagination v-model:page="currentPage" :items-per-page="itemsPerPage"
            :total-items="totalApplicationRequests" />
        </template>
      </VDataTableServer>

      <!-- Pagination -->


    </AppCardActions>
  </div>
</template>

<script setup>
definePage({
  meta: {
    action: 'read',
    subject: 'application',
  },
})
import TablePagination from '@/@core/components/TablePagination.vue';
import { useApplicationListStore } from '@/@core/stores/applicationList';
import { resolveStatusColor, resolveStatusName } from '@/@core/utils/helpers';
import Swal from 'sweetalert2';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const applicationListStore = useApplicationListStore()

const isLoading = ref(false)
const itemsPerPage = ref(10)
const currentPage = ref(1)
const searchQuery = ref('')
const totalApplicationRequests = ref(0)
const sortBy = ref('created_at')
const orderBy = ref('desc')

const headers = [
  { title: 'APPLICATION ID', key: 'application_id' },
  { title: 'Student Name', key: 'student.name' },
  { title: 'Student Email', key: 'student.email' },
  { title: 'Application Control Officer', key: 'user.parent.email' },
  { title: 'University/Course Details', key: 'university.name' },
  { title: 'Status', key: 'status' },
  { title: 'Date Added', key: 'created_at' },
  { title: 'Actions', key: 'actions', sortable: false, align: 'center' },
]

const applicationRequests = ref([])

const fetchApplicationRequests = async () => {
  isLoading.value = true
  try {
    const response = await applicationListStore.getApplicationRequests(
      currentPage.value,
      itemsPerPage.value,
      searchQuery.value,
      sortBy.value,
      orderBy.value,
    )

    console.log(response)

    applicationRequests.value = response.data
    totalApplicationRequests.value = response.total
  } catch (error) {
    console.error('Error fetching application requests:', error)
  } finally {
    isLoading.value = false
  }
}

const updateOptions = options => {
  currentPage.value = options.page
  itemsPerPage.value = options.itemsPerPage
  sortBy.value = options.sortBy[0]?.key || ''
  orderBy.value = options.sortBy[0]?.order || ''
  fetchApplicationRequests()
}

const handleAccept = async item => {
  try {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You're about to accept this application request.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, accept it!'
    })

    if (result.isConfirmed) {
      await applicationListStore.acceptApplicationRequest(item.id)
      await fetchApplicationRequests()
      Swal.fire(
        'Accepted!',
        'The application request has been accepted.',
        'success'
      )
    }
  } catch (error) {
    console.error('Error accepting application request:', error)
    Swal.fire(
      'Error!',
      'There was an error accepting the application request.',
      'error'
    )
  }
}

const handleReject = async item => {
  try {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You're about to reject this application request.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reject it!'
    })

    if (result.isConfirmed) {
      await applicationListStore.rejectApplicationRequest(item.id)
      await fetchApplicationRequests()
      Swal.fire(
        'Rejected!',
        'The application request has been rejected.',
        'success'
      )
    }
  } catch (error) {
    console.error('Error rejecting application request:', error)
    Swal.fire(
      'Error!',
      'There was an error rejecting the application request.',
      'error'
    )
  }
}



watch([currentPage, itemsPerPage, searchQuery], () => {
  fetchApplicationRequests()
})
</script>

<style lang="scss">
.application-request-list-container {
  .application-table {
    .v-data-table__thead {
      th {
        white-space: nowrap;
      }
    }
  }
}
</style>
