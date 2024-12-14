<script setup>
import Filters from "@/@core/components/Filters.vue";
import { commonFunction } from "@/@core/stores/commonFunction";
import { useLeadStore } from "@/@core/stores/leadStore";
import { useRolePermissionStore } from "@/@core/stores/rolePermission";
import { useUserStore } from "@/@core/stores/user.js";
import EditNewUserDrawer from "@/pages/user/add/EditNewUserDrawer.vue";
import Swal from "sweetalert2";
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Define page meta
definePage({
  meta: {
    action: "read",
    subject: "dashboard",
  },
});

// Store and Reactive State
const tableHeight = computed(() => {
  return `calc(100vh - 200px)`; // Adjust this value as needed
});
const userStore = useUserStore();
const roleStore = useRolePermissionStore();
const commonFunctionStore = commonFunction();
const isAddNewUserDrawerVisible = ref(false);
const users = ref([]);
const totalUsers = ref(0);
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const searchQuery = ref("");
const selectedRole = ref(null);
const selectedParent = ref(null);
const selectedCountry = ref(null);
const selectedMou = ref(null) // State for the selected parent
const selectedPlan = ref();
const selectedStatus = ref();
const selectedUserStatus = ref(null);
const isLoading = ref(false);
const roles = ref([]);
const isEditUserDrawerVisible = ref(false);
const selectedUser = ref(null);
const isParentDialogVisible = ref(false);
const parentId = ref(null);
const userToSetParent = ref(null);
const isAdmin = ref(getUserRole() === 'admin');
const branches = ref([]);
const selectedBranch = ref(null);
const selectedAssignedBranch = ref(null);
const currentStep = ref(1);
const leads = ref([]);
const leadStore = useLeadStore();
const totalLeadCount = ref(0);

// Add computed property for total assigned leads
const totalAssignedLeads = computed(() => {
  return users.value.reduce((sum, user) => {
    return sum + (parseInt(user.assigned_number_of_leads) || 0);
  }, 0);
});

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
      'Counselllor',
      null,
      null,
      null,
      null,
      null,
      selectedAssignedBranch.value,
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
  { title: "Branch", key: "branch.name" },
  { title: "Name", key: "full_name" },
  { title: "Email", key: "email" },
  { title: "Current Lead", key: "current_lead" },
  { title: "Role", key: "role" },
  {
    title: "Assigned Number of Leads",
    key: "assigned_number_of_leads",
    align: 'center',
  },
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

const updateAssignedLeads = async (user, value) => {
  try {
    const numValue = parseInt(value);

    // If value is 0, just update without showing alert
    if (numValue === 0) {
      user.assigned_number_of_leads = 0;
      return;
    }

    // Validate if it's a valid number


    // Calculate total excluding current user's previous value
    const otherUsersTotal = users.value.reduce((sum, u) => {
      if (u.id !== user.id) {
        return sum + (parseInt(u.assigned_number_of_leads) || 0);
      }
      return sum;
    }, 0);

    // Check if new total would exceed available leads
    if (otherUsersTotal + numValue > totalLeadCount.value) {
      Swal.fire({
        title: 'Warning!',
        text: `Total assigned leads cannot exceed ${totalLeadCount.value}`,
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      user.assigned_number_of_leads = 0;
      return;
    }

    // Update the value if validation passes
    user.assigned_number_of_leads = numValue;
  } catch (error) {
    console.error('Error updating assigned leads:', error);
    Swal.fire('Error!', 'Failed to update assigned leads', 'error');
  }
};

const fetchLeads = async () => {
  isLoading.value = true;
  try {
    // First fetch the lead count
    const countResponse = await leadStore.fetchLeadCount(
      selectedCountry.value,
      selectedBranch.value
    );
    totalLeadCount.value = countResponse.total || 0;

    // Check if lead count is 0
    if (totalLeadCount.value === 0) {
      Swal.fire('Warning!', 'No unassigned leads found for the selected country', 'warning');
      return; // Don't proceed to step 2
    }

    // Then move to next step
    currentStep.value = 2;
  } catch (error) {
    console.error('Error fetching leads:', error);
    Swal.fire('Error!', 'Failed to fetch leads', 'error');
  } finally {
    isLoading.value = false;
  }
};

const resetForm = () => {
  // Temporarily remove the watch effect by setting step to 0
  currentStep.value = 0;

  // Reset all form fields with explicit null assignments
  selectedAssignedBranch.value = null;
  selectedBranch.value = null;
  selectedCountry.value = null;
  totalLeadCount.value = 0;
  users.value = users.value.map(user => ({
    ...user,
    assigned_number_of_leads: 0
  }));

  // Reset the data table
  page.value = 1;
  itemsPerPage.value = 10;

  // Force a re-render by using nextTick
  nextTick(() => {
    // Double-check that values are actually reset
    console.log('After reset - Country:', selectedCountry.value);
    console.log('After reset - Branch:', selectedBranch.value);
    console.log('After reset - Assigned Branch:', selectedAssignedBranch.value);

    // Set the step back to 1
    currentStep.value = 1;

    // Force a re-fetch of the data
    fetchUsers();
  });
};

const saveAssignedLeads = async () => {
  isLoading.value = true;
  try {
    const assignedData = users.value.map(user => ({
      user_id: user.id,
      assigned_leads: user.assigned_number_of_leads || 0
    })).filter(data => data.assigned_leads > 0);

    const response = await leadStore.saveAssignedLeads(assignedData, selectedCountry.value, selectedBranch.value);

    if (response.status) {
      toast("Leads assigned successfully", {
        type: "success",
        position: "top-right",
        theme: "colored",
      });

      // Call resetForm and verify values immediately after
      await resetForm();

      // Verify values after reset
      console.log('After save - Country:', selectedCountry.value);
      console.log('After save - Branch:', selectedBranch.value);
      console.log('After save - Assigned Branch:', selectedAssignedBranch.value);

    } else {
      toast("Failed to save assigned leads", {
        type: "error",
        position: "top-right",
        theme: "colored",
      });
    }
  } catch (error) {
    console.error('Error saving assigned leads:', error);
    toast("Failed to save assigned leads", {
      type: "error",
      position: "top-right",
      theme: "colored",
    });
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await roleStore.getAllRoles();
  roles.value = roleStore.roles;
  await userStore.fetchParentUsers(); // Fetch parent users on mount from the Pinia store
  fetchUsers(); // Fetch the main user list
  getAllBranches();
});

watch([searchQuery, selectedAssignedBranch], () => {
  fetchUsers();
});

// Separate watches for country and branch to avoid unnecessary fetches during reset
watch([selectedCountry, selectedBranch], () => {
  if (currentStep.value === 1) {
    // Only fetch if we're on step 1 and values are not being reset
    fetchUsers();
  }
}, { deep: true });

// Fetch branches from API
const getAllBranches = async () => {
  isLoading.value = true
  try {
    await commonFunctionStore.getBranches();
    branches.value = commonFunctionStore.branches;
  } catch (error) {
    console.error("Error fetching branches:", error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <EditNewUserDrawer :isDrawerOpen="isEditUserDrawerVisible" :editedUser="selectedUser" :branches="branches"
    @update:isDrawerOpen="isEditUserDrawerVisible = $event" @userUpdated="handleUserUpdate" />
  <section>
    <VCard class="mb-6">
      <!-- Step 1: Select Country and Branch (Always visible) -->
      <div :key="`form-${currentStep}`">
        <VCardItem>
          <VCardTitle>Select Lead Location</VCardTitle>
        </VCardItem>

        <VCardText>
          <VRow>
            <Filters :key="`filters-${Date.now()}`" :selected-country="selectedCountry"
              @update-country="selectedCountry = $event" :selected-branch="selectedBranch"
              @update-branch="selectedBranch = $event" country-label="Lead Country"
              branch-label="Lead Branch (Optional)" />
          </VRow>

          <VRow class="mt-4">
            <VCol cols="12" class="text-center">
              <VBtn color="primary" :disabled="!selectedCountry" :loading="isLoading" @click="fetchLeads">
                Continue
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </div>

      <!-- Step 2: Only show if there are leads to assign -->
      <div v-if="currentStep === 2 && totalLeadCount > 0">
        <VDivider class="my-4" />

        <VCardItem>
          <VCardTitle>Assign Leads to Counsellors(To complete this step, select a branch)</VCardTitle>
        </VCardItem>

        <VCardText>
          <VRow>
            <VCol cols="12" md="4">
              <VSelect v-model="selectedAssignedBranch" :items="branches" item-title="name" item-value="id"
                label="Select Branch" />
            </VCol>
          </VRow>
        </VCardText>

        <!-- Only show DataTable and Save button when branch is selected -->
        <template v-if="selectedAssignedBranch">
          <VCardText class="text-end mb-4">
            <VBtn color="primary" :loading="isLoading" @click="saveAssignedLeads">
              Save Assigned Leads
            </VBtn>
          </VCardText>

          <VCardText v-if="selectedAssignedBranch">
            <VRow>
              <VCol cols="12" md="4">
                <VCard class="bg-primary">
                  <VCardText class="text-center">
                    <div class="text-h6 text-white mb-1">Total Leads Available</div>
                    <div class="text-h4 text-white">{{ totalLeadCount }}</div>
                  </VCardText>
                </VCard>
              </VCol>

              <VCol cols="12" md="4">
                <VCard class="bg-success">
                  <VCardText class="text-center">
                    <div class="text-h6 text-white mb-1">Total Leads Assigned</div>
                    <div class="text-h4 text-white">{{ totalAssignedLeads }}</div>
                  </VCardText>
                </VCard>
              </VCol>

              <VCol cols="12" md="4">
                <VCard class="bg-info">
                  <VCardText class="text-center">
                    <div class="text-h6 text-white mb-1">Remaining Leads</div>
                    <div class="text-h4 text-white">{{ totalLeadCount - totalAssignedLeads }}</div>
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
          </VCardText>

          <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :items="users"
            :items-length="totalUsers" :headers="headers" class="text-no-wrap" :height="tableHeight">
            <template #item.branch.name="{ item }">
              {{ item.branch?.name || 'N/A' }}
            </template>

            <template #item.full_name="{ item }">
              {{ item.full_name }}
            </template>

            <template #item.email="{ item }">
              {{ item.email }}
            </template>

            <template #item.current_lead="{ item }">
              {{ item.current_lead || 0 }}
            </template>

            <template #item.role="{ item }">
              {{ item.role }}
            </template>

            <template #item.assigned_number_of_leads="{ item }">
              <VTextField v-model="item.assigned_number_of_leads" type="number" min="0" density="compact"
                variant="outlined" hide-details class="w-20"
                @update:model-value="value => updateAssignedLeads(item, value)" />
            </template>
          </VDataTableServer>
        </template>
      </div>
    </VCard>

  </section>
</template>

<style scoped>
.v-card {
  border-radius: 8px;
  transition: transform 0.2s;
}

.v-card:hover {
  transform: translateY(-2px);
}
</style>
