<script setup>
import { useRolePermissionStore } from "@/@core/stores/rolePermission";
import AddEditPermissionDialog from '@/components/dialogs/AddEditPermissionDialog.vue';
import Swal from 'sweetalert2';
import { onMounted, ref, watch } from 'vue';

const store = useRolePermissionStore();

definePage({
  meta: {
    action: 'read',
    subject: 'record',
  },
})

const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const permissions = ref([]);
const totalPermissions = ref(0);
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref('name');
const orderBy = ref('asc');
const search = ref('');
const isLoading = ref(false);
const isPermissionDialogVisible = ref(false);
const editedPermission = ref(null);

const fetchPermissions = async () => {
  isLoading.value = true;
  try {
    const response = await store.getAllPermissionForTable({
      page: page.value,
      perPage: itemsPerPage.value,
      sortBy: sortBy.value,
      orderBy: orderBy.value,
      searchQuery: search.value,
    });
    permissions.value = response.data;
    totalPermissions.value = response.total;
  } catch (error) {
    console.error('Error fetching permissions:', error);
  } finally {
    isLoading.value = false;
  }
};

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key || 'name';
  orderBy.value = options.sortBy[0]?.order || 'asc';
  fetchPermissions();
};

const editPermission = (permission) => {
  editedPermission.value = { ...permission };
  isPermissionDialogVisible.value = true;
};

const deletePermission = async (id) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to delete this permission?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  });

  if (result.isConfirmed) {
    try {
      await store.deletePermission(id);
      fetchPermissions();
      Swal.fire('Deleted!', 'The permission has been deleted.', 'success');
    } catch (error) {
      Swal.fire('Error!', 'There was an error deleting the permission.', 'error');
    }
  }
};

const onPermissionSaved = async () => {
  fetchPermissions();
  isPermissionDialogVisible.value = false;
  editedPermission.value = null;
};

watch([search], () => {
  fetchPermissions();
});

onMounted(() => {
  fetchPermissions();
});
</script>

<template>
  <div class="permission-list-container">
    <AppCardActions title="Permission List" :loading="isLoading" no-actions>
      <VCardText class="d-flex flex-wrap gap-4">
        <div class="me-3 d-flex gap-3">
          <AppSelect :model-value="itemsPerPage" :items="[
            { value: 10, title: '10' },
            { value: 25, title: '25' },
            { value: 50, title: '50' },
            { value: 100, title: '100' },
            { value: -1, title: 'All' },
          ]" style="inline-size: 6.25rem;" @update:model-value="itemsPerPage = parseInt($event, 10)" />
        </div>
        <VSpacer />

        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <div style="inline-size: 15.625rem;">
            <AppTextField v-model="search" placeholder="Search Permission" />
          </div>
          <VBtn density="default" prepend-icon="tabler-plus" @click="isPermissionDialogVisible = true">
            Add Permission
          </VBtn>
        </div>
      </VCardText>

      <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :items="permissions"
        :items-length="totalPermissions" :headers="headers" class="text-no-wrap color-black permission-table"
        @update:options="updateOptions">
        <template #item.name="{ item }">
          <div class="text-high-emphasis text-body-1">
            {{ item.name }}
          </div>
        </template>

        <template #item.actions="{ item }">
          <div class="d-flex flex-column ms-3">
            <IconBtn @click="editPermission(item)">
              <VIcon icon="tabler-edit" />
            </IconBtn>
            <IconBtn @click="deletePermission(item.id)">
              <VIcon icon="tabler-trash" />
            </IconBtn>
          </div>
        </template>

        <template #bottom>
          <TablePagination v-model:page="page" :items-per-page="itemsPerPage" :total-items="totalPermissions" />
        </template>
      </VDataTableServer>
    </AppCardActions>

    <AddEditPermissionDialog v-model:isDialogVisible="isPermissionDialogVisible" :permission="editedPermission"
      @saved="onPermissionSaved" />
  </div>
</template>

<style scoped>
.permission-list-container {
  display: flex;
  flex-direction: column;
  block-size: 100%;
}

.permission-table {
  overflow: auto;
  flex: 1;
}
</style>
