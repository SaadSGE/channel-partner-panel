<script setup>
import Filters from "@/@core/components/Filters.vue";
import { useRolePermissionStore } from "@/@core/stores/rolePermission";
import { useUserStore } from "@/@core/stores/user.js";
import AddNewUserDrawer from "@/pages/user/add/AddNewUserDrawer.vue";
import EditNewUserDrawer from "@/pages/user/add/EditNewUserDrawer.vue";
import Swal from "sweetalert2";
import { onMounted, ref, watch } from "vue";

// Define page meta
definePage({
  meta: {
    action: "read",
    subject: "user",
  },
});

// Store and Reactive State
const tableHeight = computed(() => {
  return `calc(100vh - 200px)`; // Adjust this value as needed
});
const userStore = useUserStore();
const roleStore = useRolePermissionStore();
const isAddNewUserDrawerVisible = ref(false);
const users = ref([]);
const totalUsers = ref(0);
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const searchQuery = ref("");
const selectedRole = ref(null);
const selectedParent = ref(null); // State for the selected parent
const selectedPlan = ref();
const selectedStatus = ref();
const isLoading = ref(false);
const roles = ref([]);
const isEditUserDrawerVisible = ref(false);
const selectedUser = ref(null);
const isParentDialogVisible = ref(false);
const parentId = ref(null);
const userToSetParent = ref(null);
const isAdmin = ref(getUserRole() === 'admin');
// Methods
const setParent = (user) => {
  userToSetParent.value = user;
  parentId.value = user.parent_id || "";
  isParentDialogVisible.value = true;
};

const handleParentSet = async () => {
  if (!parentId.value) {
    // Handle validation if needed
    return;
  }

  const result = await userStore.setParent(
    userToSetParent.value.id,
    parentId.value
  );

  if (result.success) {
    fetchUsers();
    Swal.fire("Success!", result.message, "success");
    isParentDialogVisible.value = false;
  } else {
    Swal.fire("Error!", result.message, "error");
  }
};

const handleUserUpdate = (updatedUser) => {
  console.log(updatedUser)
  const index = users.value.findIndex((user) => user.id === updatedUser.id);
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
    const response = await userStore.fetchUsers(
      page.value,
      searchQuery.value,
      selectedRole.value,
      selectedParent.value
    );
    users.value = response.data;
    totalUsers.value = response.total;
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    isLoading.value = false;
  }
};

const addUser = async (userData) => {
  try {
    await fetchUsers();
    Swal.fire("Success!", "User added successfully!", "success");
  } catch (error) {
    console.error("Error adding user:", error);
    Swal.fire("Error!", "Failed to add user.", "error");
  }
};

const deleteUser = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "Do you want to delete this user?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    const response = await userStore.deleteUser(id);

    if (response.success) {
      Swal.fire("Deleted!", response.message, "success");
    } else {
      Swal.fire("Error!", response.message, "error");
    }
  }
};

const updateOptions = (options) => {
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
  fetchUsers();
};

const headers = [
  { title: "Name", key: "full_name" },
  { title: "Company", key: "company_name_with_email" },
  { title: "Role", key: "role" },
  ...(isAdmin.value
    ? [{ title: "Parent", key: "parent.full_name" }]
    : []),

  { title: "Record Count", key: "record_count" },

  ...(isAdmin.value
    ? [{ title: "Status", key: "status", sortable: false }]
    : []),
  { title: "Actions", key: "actions", sortable: false },
];

const updateUserStatus = async (user) => {
  user.statusLoading = true;
  try {
    const response = await userStore.updateUserStatus(user.id, user.status);
    if (response.status) {
      Swal.fire("Success!", "User status updated successfully!", "success");
    } else {
      Swal.fire("Error!", "Failed to update user status.", "error");
      user.status = user.status === 1 ? 0 : 1; // Revert the switch if the update failed
    }
  } catch (error) {
    console.error("Error updating user status:", error);
    Swal.fire("Error!", "Failed to update user status.", "error");
    user.status = user.status === 1 ? 0 : 1; // Revert the switch if the update failed
  } finally {
    user.statusLoading = false;
  }
};

onMounted(async () => {
  await roleStore.getAllRoles();
  roles.value = roleStore.roles;
  await userStore.fetchParentUsers(); // Fetch parent users on mount from the Pinia store
  fetchUsers(); // Fetch the main user list
});

watch([searchQuery, selectedRole, selectedParent], () => {
  fetchUsers();
});
</script>

<template>
  <EditNewUserDrawer :isDrawerOpen="isEditUserDrawerVisible" :editedUser="selectedUser"
    @update:isDrawerOpen="isEditUserDrawerVisible = $event" @userUpdated="handleUserUpdate" />
  <section>

    <VDialog v-model="isParentDialogVisible" max-width="500px">
      <VCard>
        <VCardTitle>Set Parent</VCardTitle>
        <VCardText>
          <VForm @submit.prevent="handleParentSet">
            <AppAutocomplete v-model="parentId" :items="userStore.parentUsers"
              :item-title="(item) => item.name_with_email" :item-value="(item) => item.id" label="Parent"
              placeholder="Select Parent" :rules="[requiredValidator]" />
          </VForm>
        </VCardText>
        <VCardActions>
          <VSpacer></VSpacer>
          <VBtn color="primary" @click="handleParentSet">Submit</VBtn>
          <VBtn @click="isParentDialogVisible = false">Cancel</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <VCard class="mb-6">
      <VCardItem class="pb-4" v-if="$can('filter', 'user')">
        <VCardTitle>Filter</VCardTitle>
      </VCardItem>

      <VCardText v-if="$can('filter', 'user')">
        <VRow>
          <!-- 👉 Select Role -->
          <Filters :selected-role="selectedRole" @update-role="selectedRole = $event" :selected-parent="selectedParent"
            @update-parent="selectedParent = $event"></Filters>


        </VRow>
      </VCardText>

      <VDivider />

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
            <AppTextField v-model="searchQuery" placeholder="Search User" />
          </div>

          <!-- 👉 Export button -->

          <!-- 👉 Add user button -->
          <VBtn prepend-icon="tabler-plus" @click="isAddNewUserDrawerVisible = true" v-if="$can('create', 'user')">
            Add New User
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION datatable -->
      <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :items="users"
        :items-length="totalUsers" :headers="headers" class="text-no-wrap" show-select :height="tableHeight"
        @update:options="updateOptions">
        <template #item.actions="{ item }">
          <VBtn icon variant="text" color="medium-emphasis">
            <VIcon icon="tabler-dots-vertical" />
            <VMenu activator="parent">
              <VList>
                <VListItem :to="{ name: 'user-view-id', params: { id: item.id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>

                  <VListItemTitle>View</VListItemTitle>
                </VListItem>

                <VListItem @click="editUser(item)" v-if="$can('edit', 'user')">
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem @click="setParent(item)" v-if="$can('edit', 'user')">
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Set Parent</VListItemTitle>
                </VListItem>

                <VListItem @click="deleteUser(item.id)" v-if="$can('delete', 'user')">
                  <template #prepend>
                    <VIcon icon="tabler-trash" />
                  </template>
                  <VListItemTitle>Delete</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </VBtn>
        </template>
        <template #item.status="{ item }">
          <VSwitch v-model="item.status" :true-value="1" :false-value="0" @change="updateUserStatus(item)"
            :loading="item.statusLoading" />
        </template>

        <!-- pagination -->
        <template #bottom>
          <TablePagination v-model:page="page" :items-per-page="itemsPerPage" :total-items="totalUsers" />
        </template>
      </VDataTableServer>
      <!-- SECTION -->
    </VCard>
    <!-- 👉 Add New User -->
    <AddNewUserDrawer v-model:isDrawerOpen="isAddNewUserDrawerVisible" @user-data="addUser" />
  </section>
</template>
