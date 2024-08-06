<script setup>
import { useRolePermissionStore } from "@/@core/stores/rolePermission";
import { useUserStore } from "@/@core/stores/user.js";
import AddNewUserDrawer from '@/pages/user/add/AddNewUserDrawer.vue';
import EditNewUserDrawer from '@/pages/user/add/EditNewUserDrawer.vue';
import Swal from 'sweetalert2';
import { onMounted, ref, watch } from 'vue';

// Define page meta
definePage({
  meta: {
    action: 'read',
    subject: 'dashboard',
  },
});

// Store and Reactive State
const userStore = useUserStore();
const roleStore = useRolePermissionStore();
const isAddNewUserDrawerVisible = ref(false);
const users = ref([]);
const totalUsers = ref(0);
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const searchQuery = ref('');
const selectedRole = ref();
const selectedPlan = ref();
const selectedStatus = ref();
const isLoading = ref(false);
const roles = ref([]);
const isEditUserDrawerVisible = ref(false);
const selectedUser = ref(null);
// Methods

const handleUserUpdate = (updatedUser) => {
  // Logic to update the user in your user list
  const index = users.value.findIndex(user => user.id === updatedUser.id);
  if (index !== -1) {
    users.value.splice(index, 1, updatedUser);
  }
};
const editUser = (user) => {
  openEditDrawer(user);
};
const openEditDrawer = (user) => {
  selectedUser.value = user;
  isEditUserDrawerVisible.value = true;
};


const fetchUsers = async () => {
  isLoading.value = true;
  try {
    const response = await userStore.fetchUsers(page.value, searchQuery.value, selectedRole.value);
    users.value = response.data;
    totalUsers.value = response.total;
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    isLoading.value = false;
  }
};

const addUser = async userData => {
  try {
    await $api('/apps/users', {
      method: 'POST',
      body: userData,
    });
    await fetchUsers();
    Swal.fire('Success!', 'User added successfully!', 'success');
  } catch (error) {
    console.error('Error adding user:', error);
    Swal.fire('Error!', 'Failed to add user.', 'error');
  }
};

const deleteUser = async id => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to delete this user?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  });

  if (result.isConfirmed) {
    try {
      await $api(`/apps/users/${id}`, { method: 'DELETE' });
      await fetchUsers();
      Swal.fire('Deleted!', 'The user has been deleted.', 'success');
    } catch (error) {
      console.error('Error deleting user:', error);
      Swal.fire('Error!', 'There was an error deleting the user.', 'error');
    }
  }
};

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
  fetchUsers();
};

const headers = [
  { title: 'Name', key: 'full_name' },
  { title: 'Email', key: 'email' },
  { title: 'Mobile Number', key: 'mobile_number' },
  { title: 'Whatsapp Number', key: 'whatsapp_number' },
  { title: 'Role', key: 'role' },
  { title: 'Record Count', key: 'record_count' },
  { title: 'Actions', key: 'actions', sortable: false },
];

onMounted(async () => {
  await roleStore.getAllRoles();
  roles.value = roleStore.roles;
  fetchUsers();
});

watch([searchQuery, selectedRole], () => {
  fetchUsers();
});
</script>
<template>
   <EditNewUserDrawer
    :isDrawerOpen="isEditUserDrawerVisible"
    :editedUser="selectedUser"
    @update:isDrawerOpen="isEditUserDrawerVisible = $event"
    @userUpdated="handleUserUpdate"
  />
  <section>
    <!-- 👉 Widgets -->
    <div class="d-flex mb-6">
      <VRow>
        <template
          v-for="(data, id) in widgetData"
          :key="id"
        >
          <VCol
            cols="12"
            md="3"
            sm="6"
          >
            <VCard>
              <VCardText>
                <div class="d-flex justify-space-between">
                  <div class="d-flex flex-column gap-y-1">
                    <div class="text-body-1 text-high-emphasis">
                      {{ data.title }}
                    </div>
                    <div class="d-flex gap-x-2 align-center">
                      <h4 class="text-h4">
                        {{ data.value }}
                      </h4>
                      <div
                        class="text-base"
                        :class="data.change > 0 ? 'text-success' : 'text-error'"
                      >
                        ({{ prefixWithPlus(data.change) }}%)
                      </div>
                    </div>
                    <div class="text-sm">
                      {{ data.desc }}
                    </div>
                  </div>
                  <VAvatar
                    :color="data.iconColor"
                    variant="tonal"
                    rounded
                    size="42"
                  >
                    <VIcon
                      :icon="data.icon"
                      size="26"
                    />
                  </VAvatar>
                </div>
              </VCardText>
            </VCard>
          </VCol>
        </template>
      </VRow>
    </div>

    <VCard class="mb-6">
      <VCardItem class="pb-4">
        <VCardTitle>Filters</VCardTitle>
      </VCardItem>

      <VCardText>
        <VRow>
          <!-- 👉 Select Role -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppSelect
              v-model="selectedRole"
              placeholder="Select Role"
              :items="roles"
              clearable
              clear-icon="tabler-x"
              :item-title="(item) => item.role"
              :item-value="(item) => item.role"
            />
          </VCol>
          <!-- 👉 Select Plan -->

          <!-- 👉 Select Status -->
          <!-- <VCol
            cols="12"
            sm="4"
          >
            <AppSelect
              v-model="selectedStatus"
              placeholder="Select Status"
              :items="status"
              clearable
              clear-icon="tabler-x"
            />
          </VCol> -->
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex flex-wrap gap-4">
        <div class="me-3 d-flex gap-3">
          <AppSelect
            :model-value="itemsPerPage"
            :items="[
              { value: 10, title: '10' },
              { value: 25, title: '25' },
              { value: 50, title: '50' },
              { value: 100, title: '100' },
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
            <AppTextField
              v-model="searchQuery"
              placeholder="Search User"
            />
          </div>

          <!-- 👉 Export button -->


          <!-- 👉 Add user button -->
          <VBtn
            prepend-icon="tabler-plus"
            @click="isAddNewUserDrawerVisible = true"
          >
            Add New User
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION datatable -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items="users"
        :items-length="totalUsers"
        :headers="headers"
        class="text-no-wrap"
        show-select
        @update:options="updateOptions"
      >


        <template #item.actions="{ item }">

          <VBtn
            icon
            variant="text"
            color="medium-emphasis"
          >
            <VIcon icon="tabler-dots-vertical" />
            <VMenu activator="parent">
              <VList>
                <VListItem :to="{ name: 'apps-user-view-id', params: { id: item.id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>

                  <VListItemTitle>View</VListItemTitle>
                </VListItem>

                <VListItem @click="editUser(item)">
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem @click="deleteUser(item.id)">
                  <template #prepend>
                    <VIcon icon="tabler-trash" />
                  </template>
                  <VListItemTitle>Delete</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </VBtn>
        </template>

        <!-- pagination -->
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalUsers"
          />
        </template>
      </VDataTableServer>
      <!-- SECTION -->
    </VCard>
    <!-- 👉 Add New User -->
    <AddNewUserDrawer
      v-model:isDrawerOpen="isAddNewUserDrawerVisible"
      @user-data="addUser"
    />
  </section>
</template>
