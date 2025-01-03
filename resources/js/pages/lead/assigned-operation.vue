<script setup>
import Filters from "@/@core/components/Filters.vue";
import { commonFunction } from "@/@core/stores/commonFunction";
import { useLeadStore } from "@/@core/stores/leadStore";
import { useRolePermissionStore } from "@/@core/stores/rolePermission";
import { useUserStore } from "@/@core/stores/user.js";
import EditNewUserDrawer from "@/pages/user/add/EditNewUserDrawer.vue";
import Swal from "sweetalert2";
import { computed, onMounted, ref, watch } from "vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Define page meta
definePage({
  meta: {
    action: "create",
    subject: "lead",
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
const selectedLeadType = ref(null);
const selectedEvent = ref(null);

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
      null,
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





const updateOptions = (options) => {
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
  fetchUsers();
};

const headers = [
  { title: "Branch", key: "branch.name" },
  { title: "Name", key: "full_name" },
  { title: "Email", key: "email" },
  {
    title: "Current Lead",
    key: "current_lead",
    width: '200px'
  },

  {
    title: "Assigned Number of Leads",
    key: "assigned_number_of_leads",
    align: 'center',
  },
];



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
  //reload after 3 seconds
  setTimeout(() => {
    location.reload();
  }, 3000);
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

      // Call the reset function
      resetForm();
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
  // Fetch parent users on mount from the Pinia store
  await commonFunctionStore.getAllCountries();
  await getAllBranches();
});

watch([searchQuery, selectedAssignedBranch], () => {
  fetchUsers();
});

// Separate watches for country and branch to avoid unnecessary fetches during reset

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

// Watch for changes in the new filters
watch([selectedLeadType, selectedEvent, selectedCountry, selectedBranch], () => {
  // Reset the relevant state variables
  selectedAssignedBranch.value = null;
  users.value.forEach(user => {
    user.assigned_number_of_leads = 0;
  });
  currentStep.value = 1; // Reset the step to hide the section

});
</script>

<template>
  <EditNewUserDrawer :isDrawerOpen="isEditUserDrawerVisible" :editedUser="selectedUser" :branches="branches"
    @update:isDrawerOpen="isEditUserDrawerVisible = $event" @userUpdated="handleUserUpdate" />
  <section>
    <VCard class="mb-6">
      <!-- Step 1: Select Country and Branch (Always visible) -->
      <div>
        <VCardItem>
          <VCardTitle>Select Lead Location</VCardTitle>
        </VCardItem>

        <VCardText>
          <VRow>
            <Filters :selected-lead-type="selectedLeadType" @update-lead-type="selectedLeadType = $event"
              country-label="Lead Country" branch-label="Lead Branch (Optional)" />
          </VRow>

          <template v-if="selectedLeadType === 'social'">
            <VRow>
              <VCol cols="12" md="4">
                <AppAutocomplete v-model="selectedCountry" :items="commonFunctionStore.allCountries"
                  :item-title="(item) => item.name" :item-value="(item) => item.id" label="Select Country"
                  placeholder="Select Country" clearable class="slide-in" />
              </VCol>
              <VCol cols="12" md="4">
                <AppAutocomplete v-model="selectedBranch" :items="commonFunctionStore.branches"
                  :item-title="(item) => item.name" :item-value="(item) => item.id" label="Select Branch"
                  placeholder="Select Branch" clearable class="slide-in" />
              </VCol>
            </VRow>
          </template>

          <template v-if="selectedLeadType === 'event'">
            <VRow>
              <Filters :selected-event="selectedEvent" :selected-branch="selectedBranch"
                @update-event="selectedEvent = $event" @update-branch="selectedBranch = $event"
                branch-label="Lead Branch" />
            </VRow>
          </template>

          <VRow class="mt-4">
            <VCol cols="12" class="text-center">
              <VBtn color="primary" :disabled="!selectedEvent" :loading="isLoading" @click="fetchLeads"
                v-if="selectedLeadType === 'event'">
                Continue
              </VBtn>
              <VBtn color="primary" :disabled="!selectedCountry" :loading="isLoading" @click="fetchLeads"
                v-if="selectedLeadType === 'social'">
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
              {{ item.branch?.branch_name_with_country || 'N/A' }}
            </template>

            <template #item.full_name="{ item }">
              {{ item.full_name }}
            </template>

            <template #item.email="{ item }">
              {{ item.email }}
            </template>

            <template #item.current_lead="{ item }">
              <div v-if="item.lead_counts">
                <div class="d-flex align-center justify-space-between my-1 country-lead-item pa-2">
                  <VChip size="small" color="error" variant="elevated" class="mr-2">
                    Total: {{ item.lead_counts.lead_count_all }}
                  </VChip>
                </div>
                <VDivider class="my-1" />
                <div v-for="countryLead in item.lead_counts.lead_by_country" :key="countryLead.country_id"
                  class="d-flex align-center justify-space-between my-1 country-lead-item pa-2">
                  <VChip size="small" color="primary" variant="elevated" class="mr-2">
                    {{ countryLead.country_name }}
                  </VChip>
                  <VBadge :content="countryLead.count" color="success" class="count-badge" />
                </div>
              </div>
              <span v-else class="text-grey">0</span>
            </template>

            <template #item.role="{ item }">
              {{ item.role }}
            </template>

            <template #item.assigned_number_of_leads="{ item }">
              <VTextField v-model="item.assigned_number_of_leads" type="number" min="0" density="compact"
                variant="outlined" hide-details class="w-20" placeholder="Enter number"
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

.country-lead-item {
  border-radius: 6px;
  background-color: rgb(var(--v-theme-primary), 0.1);
  transition: all 0.2s ease;
}

.country-lead-item:hover {
  background-color: rgb(var(--v-theme-primary), 0.15);
  transform: translateX(2px);
}

.count-badge {
  border-radius: 4px;
  background-color: rgb(var(--v-theme-success), 0.1);
  color: rgb(var(--v-theme-success));
  font-weight: bold;
  padding-block: 4px;
  padding-inline: 8px;
}
</style>
