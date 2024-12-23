<script lang="js" setup>
definePage({
  meta: {
    action: 'read',
    subject: 'dashboard',
  },
})
import { commonFunction } from "@/@core/stores/commonFunction";
import Swal from 'sweetalert2';
import { ref, watch } from "vue";
import StatusAdd from "./add.vue";
import StatusEdit from "./edit.vue";
const commonFunctionStore = commonFunction();
const leadStatuses = ref([]);
const isNavDrawerOpen = ref(false)
const isNavDrawerOpenEdit = ref(false)



const headers = [
  { title: 'Status Name', key: 'name' },
  { title: 'Description', key: 'description' },
  { title: 'Color Code', key: 'color_code' },
  { title: 'Health Type', key: 'health_type' },
  { title: 'Actions', key: 'actions', sortable: false },
];

const defaultItem = ref({
  id: '',
  name: '',
  description: '',
  color_code: '',
  health_type: '',
})
const isLoading = ref(false)
const editedItem = ref(defaultItem.value)
const editItem = item => {
  editedItem.value = item
  isNavDrawerOpenEdit.value = true
}
const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
  fetchLeadStatuses()
}
const fetchLeadStatuses = async () => {
  isLoading.value = true
  const response = await commonFunctionStore.getLeadStatus(
    search.value,
    page.value,
    itemsPerPage.value,
    sortBy.value,
    orderBy.value,
    selectedLeadHealthType.value
  );
  console.log(response)
  leadStatuses.value = response.data;
  isLoading.value = false
  totalLeadStatuses.value = response.total
}

const selectedLeadHealthType = ref(null);
const totalLeadStatuses = ref(0)
const page = ref(1)
const itemsPerPage = ref(10)
const search = ref('')
const sortBy = ref(null)
const orderBy = ref(null)
const deleteItem = async (item) => {
  const data = { ...item };
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to delete this status?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  });

  if (result.isConfirmed) {
    try {
      await commonFunctionStore.deleteLeadStatus(data.id);
      leadStatuses.value = commonFunctionStore.leadStatuses;
      Swal.fire(
        'Deleted!',
        'The status has been deleted.',
        'success'
      );
    } catch (error) {
      Swal.fire(
        'Error!',
        'There was an error deleting the status.',
        'error'
      );
    }
  }
};

watch(selectedLeadHealthType, () => {
  fetchLeadStatuses();
});
</script>

<template>

  <StatusAdd :isNavDrawerOpen="isNavDrawerOpen" @update:isNavDrawerOpen="isNavDrawerOpen = $event"
    @updateLeadStatuses="getAllLeadStatuses" />
  <StatusEdit :isNavDrawerOpen="isNavDrawerOpenEdit" @update:isNavDrawerOpen="isNavDrawerOpenEdit = $event"
    :editedItem="editedItem" />
  <VCard class="mb-4">
    <VCardText>
      <VRow>
        <Filters :lead-health-type="selectedLeadHealthType"
          @update-lead-health-type="selectedLeadHealthType = $event" />
      </VRow>
    </VCardText>
  </VCard>
  <VCard :loading="isLoading">


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
          <AppTextField v-model="search" placeholder="Search ..." append-inner-icon="tabler-search" single-line
            hide-details dense outlined />
        </div>
      </div>
    </VCardText>


    <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :items="leadStatuses" :headers="headers"
      class="text-no-wrap color-black table-padding" @update:options="updateOptions">
      <template #item.color_code="{ item }">
        <div class="d-flex align-center gap-2">
          <div :style="{
            backgroundColor: item.color_code,
            width: '24px',
            height: '24px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }"></div>
          {{ item.color_code }}
        </div>
      </template>
      <template #item.health_type="{ item }">
        <VChip :color="item.health_type === 'hot' ? 'error' : item.health_type === 'warm' ? 'warning' : 'info'"
          size="small">
          {{ item.health_type ? (item.health_type.charAt(0).toUpperCase() + item.health_type.slice(1)) : 'N/A' }}
        </VChip>
      </template>
      <template #item.actions="{ item }">
        <div class="d-flex gap-1">
          <IconBtn @click="editItem(item)">
            <VIcon icon="tabler-edit" />
          </IconBtn>
          <IconBtn @click="deleteItem(item)">
            <VIcon icon="tabler-trash" />
          </IconBtn>
        </div>
      </template>
      <!-- pagination -->
      <template #bottom>
        <TablePagination v-model:page="page" :items-per-page="itemsPerPage" :total-items="totalLeadStatuses" />
      </template>
    </VDataTableServer>
  </VCard>
</template>

<style scoped>
.form-padding {
  padding-block: 0 2rem;
  padding-inline: 2rem;
}

.v-data-table>.v-data-table__wrapper>table>thead>tr>th,
td {
  overflow: auto;
  max-inline-size: 30rem;
  white-space: nowrap;
  word-wrap: break-word;
}

.table-padding {
  padding-block: 0 2rem;
  padding-inline: 2rem;
}
</style>
