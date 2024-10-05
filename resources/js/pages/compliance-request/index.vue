<template>
  <VCard>
    <VCardTitle>Compliance Requests</VCardTitle>
    <VCardText>
      <VRow>
        <VCol cols="12" sm="6" md="4">
          <VTextField v-model="searchQuery" label="Search" append-inner-icon="mdi-magnify" single-line hide-details
            @click:append-inner="fetchComplianceRequests" />
        </VCol>
      </VRow>

      <VDataTable :headers="headers" :items="complianceRequests" :loading="loading" :items-per-page="itemsPerPage"
        :page="currentPage" :server-items-length="totalItems" @update:options="handleTableUpdate">
        <template v-slot:item.status="{ item }">
          <VChip :color="resolveStatusColor(item.status)" :text-color="resolveStatusColor(item.status)" small>
            {{ resolveStatusName(item.status) }}
          </VChip>
        </template>
        <template v-slot:item.actions="{ item }">
          <VBtn icon small color="success" class="mr-2" @click="acceptRequest(item.id)">
            <VIcon>tabler-check</VIcon>
          </VBtn>
          <VBtn icon small color="error" @click="rejectRequest(item.id)">
            <VIcon>tabler-x</VIcon>
          </VBtn>
        </template>
        <template #bottom>
          <TablePagination v-model:page="currentPage" :items-per-page="itemsPerPage"
            :total-items="totalComplianceRequests" />
        </template>
      </VDataTable>
    </VCardText>
  </VCard>
</template>

<script setup>
import TablePagination from '@/@core/components/TablePagination.vue';
import { useApplicationListStore } from "@/@core/stores/applicationList";
import { resolveStatusColor, resolveStatusName } from '@/@core/utils/helpers';
import Swal from 'sweetalert2';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

definePage({
  meta: {
    action: 'read',
    subject: 'application',
  },
})

const store = useApplicationListStore();
const router = useRouter();

const complianceRequests = ref([]);
const loading = ref(false);
const tablePagination = ref({
  totalItems: 0,
  currentPage: 1,
  itemsPerPage: 10,
  sortBy: 'created_at',
  sortDesc: true,
});
const totalComplianceRequests = ref(0);
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(10);

const headers = [
  { title: 'Application ID', key: 'application_id', sortable: true },
  { title: 'Student Name', key: 'student.full_name', sortable: true },
  { title: 'University', key: 'university.name', sortable: true },
  { title: 'Course', key: 'course.name', sortable: true },
  { title: 'Status', key: 'status', sortable: true },
  { title: 'Actions', key: 'actions', sortable: false, align: 'center' },
];

const fetchComplianceRequests = async () => {
  loading.value = true;
  try {
    const { data, total } = await store.getComplianceRequests({
      page: currentPage.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: tablePagination.value.sortBy,
      sortDesc: tablePagination.value.sortDesc,
      search: searchQuery.value,
    });
    complianceRequests.value = data;
    totalComplianceRequests.value = total;

  } catch (error) {
    console.error('Error fetching compliance requests:', error);
  } finally {
    loading.value = false;
  }
};

const acceptRequest = async (id) => {
  try {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You are about to accept this compliance request.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, accept it!'
    });

    if (result.isConfirmed) {
      await store.acceptComplianceRequest(id);
      await fetchComplianceRequests();
      Swal.fire(
        'Accepted!',
        'The compliance request has been accepted.',
        'success'
      );
    }
  } catch (error) {
    console.error('Error accepting compliance request:', error);
    Swal.fire(
      'Error',
      'There was an error accepting the compliance request.',
      'error'
    );
  }
};

const rejectRequest = async (id) => {
  try {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You are about to reject this compliance request.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reject it!'
    });

    if (result.isConfirmed) {
      await store.rejectComplianceRequest(id);
      await fetchComplianceRequests();
      Swal.fire(
        'Rejected!',
        'The compliance request has been rejected.',
        'success'
      );
    }
  } catch (error) {
    console.error('Error rejecting compliance request:', error);
    Swal.fire(
      'Error',
      'There was an error rejecting the compliance request.',
      'error'
    );
  }
};

const handleTableUpdate = (updatedPagination) => {
  tablePagination.value = { ...tablePagination.value, ...updatedPagination };
  fetchComplianceRequests();
};

watch(searchQuery, () => {
  tablePagination.value.currentPage = 1;
  fetchComplianceRequests();
});

onMounted(fetchComplianceRequests);
</script>
