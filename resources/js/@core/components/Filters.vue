<script setup>
import { defineEmits, onMounted, ref } from 'vue';
import { commonFunction } from '../stores/commonFunction';

import { leadStatuses } from '@/@core/utils/helpers';
import { editor } from '../stores/editor';
import { useRolePermissionStore } from '../stores/rolePermission';
import { useUserStore } from '../stores/user';
const statuses = ref([
  { id: 0, name: 'Application Processing' },
  { id: 1, name: 'Application Submitted' },
  { id: 2, name: 'Pending Docs' },
  { id: 3, name: 'Offer Issue Conditional' },
  { id: 4, name: 'Offer Issue Unconditional' },
  { id: 5, name: 'Need Payment' },
  { id: 6, name: 'CAS Issued' },
  { id: 7, name: 'Additional Doc Needed' },
  { id: 8, name: 'Refund Required' },
  { id: 9, name: 'Application Rejected' },
  { id: 10, name: 'Session Expired' },
  { id: 11, name: 'Doc Received' },
  { id: 12, name: 'Partial Payment' },
]);
const courseType = ref([
  { id: 0, name: 'Graduate' },
  { id: 1, name: 'Post graduate' }
])

const countries = ref([]);
const intakes = ref([]);
const roles = ref([]);

const universities = ref([]);
const channelPartners = ref([]);
const applicationOfficers = ref([]);
const editors = ref()

const isLoading = ref(false);
const selectedRole = ref();
const selectedParent = ref(null);
const selectedUserStatus = ref(null);
const selectedLeadStatus = ref(null);
const users = ref([]);
const totalUsers = ref(0);
const roleStore = useRolePermissionStore();

const userStore = useUserStore();
const commonFunctionStore = commonFunction();
const editorStore = editor();


const isAdmin = ref(getUserRole() === 'admin');

const props = defineProps({
  isAdmin: {
    type: Boolean,
    default: false,
  },
  selectedStatus: {
    type: Number,
    Required: false,
  },
  selectedLeadStatus: {
    type: Number,
    Required: false,
  },
  selectedChannelPartner: {
    type: Number,
    Required: false,
  },
  selectedUniversity: {
    type: Number,
    Required: false,
  },
  selectedApplicationOfficer: {
    type: Number,
    Required: false,
  },
  selectedDateFrom: {
    type: Number,
    Required: false,
  },
  selectedDateTo: {
    type: Number,
    Required: false,
  },

  selectedCountry: {
    type: Number,
    Required: false,
  },
  selectedIntake: {
    type: Number,
    Required: false,
  },
  selectedUniversity2: {
    type: Number,
    Required: false,
  },
  selectedCourseName: {
    type: Number,
    Required: false,
  },
  selectedRole: {
    type: Number,
    Required: false,
  },
  selectedParent: {
    type: Number,
    Required: false,
  },
  selectedEditor: {
    type: Number,
    Required: false,
  },
  selectedCourseType: {
    type: Number,
    Required: false,
  },
  selectedUserStatus: {
    type: Object,
    Required: false,
  },
  selectedMou: {
    type: Object,
    Required: false,
  },
  selectedAssignedStatus: {
    type: Number,
    Required: false,
  },
});


const emit = defineEmits(['update-status', 'update-channel-partner', 'update-university', 'update-application-officer', 'update-dateFrom', 'update-dateTo', 'update-country', 'update-intake', 'update-university2', 'update-courseName', 'update-role', 'update-parent', 'update-editor', 'update-userStatus', 'update-courseType', 'update-mou', 'update-assignedStatus']);

const localSelectedStatus = ref(props.selectedStatus);
const localSelectedLeadStatus = ref(props.selectedLeadStatus);
const localSelectedChannelPartner = ref(props.selectedChannelPartner);
const localSelectedUniversity = ref(props.selectedUniversity);
const localSelectedApplicationOfficer = ref(props.selectedApplicationOfficer);
const localSelectedDateFrom = ref(props.selectedDateFrom);
const localSelectedDateTo = ref(props.selectedDateTo);

const localSelectedCountry = ref(props.selectedCountry);
const localSelectedIntake = ref(props.selectedIntake);
const localSelectedUniversity2 = ref(props.selectedUniversity2);
const localSelectedCourseName = ref(props.selectedCourseName);
const localSelectedRole = ref(props.selectedRole);
const localSelectedParent = ref(props.selectedParent);
const localSelectedEditor = ref(props.selectedEditor);
const localSelectedUserStatus = ref(props.selectedUserStatus);
const localSelectedCourseType = ref(props.selectedCourseType);
const localSelectedMou = ref(props.selectedMou);
const localSelectedAssignedStatus = ref(props.selectedAssignedStatus);

watch(localSelectedStatus, (newValue) => {
  emit('update-status', newValue);
});
watch(localSelectedLeadStatus, (newValue) => {
  emit('update-lead-status', newValue);
});

watch(localSelectedChannelPartner, (newValue) => {
  emit('update-channel-partner', newValue);
});
watch(localSelectedUniversity, (newValue) => {
  emit('update-university', newValue);
});
watch(localSelectedApplicationOfficer, (newValue) => {
  emit('update-application-officer', newValue);
});
watch(localSelectedDateFrom, (newValue) => {
  emit('update-dateFrom', newValue);
});
watch(localSelectedDateTo, (newValue) => {
  emit('update-dateTo', newValue);
});

watch(localSelectedCountry, (newValue) => {
  emit('update-country', newValue);
});
watch(localSelectedIntake, (newValue) => {
  emit('update-intake', newValue);
});
watch(localSelectedUniversity2, (newValue) => {
  emit('update-university2', newValue);
});
watch(localSelectedCourseName, (newValue) => {
  emit('update-courseName', newValue);
});
watch(localSelectedRole, (newValue) => {
  emit('update-role', newValue);
});
watch(localSelectedParent, (newValue) => {
  emit('update-parent', newValue);
});
watch(localSelectedEditor, (newValue) => {
  emit('update-editor', newValue);
});
watch(localSelectedUserStatus, (newValue) => {
  emit('update-userStatus', newValue);
});
watch(localSelectedCourseType, (newValue) => {
  emit('update-courseType', newValue);
});
watch(localSelectedMou, (newValue) => {
  emit('update-mou', newValue);
});
watch(localSelectedAssignedStatus, (newValue) => {
  emit('update-assignedStatus', newValue);
});

const fetchFilterOptions = async () => {
  try {
    // Conditionally fetch universities if selectedUniversity or selectedUniversity2 is provided
    if (props.selectedUniversity !== undefined || props.selectedUniversity2 !== undefined) {
      const universityList = await commonFunctionStore.getUniversities();
      universities.value = universityList.data.map(university => ({
        id: university.id,
        name: university.name
      }));
    }

    // Conditionally fetch channel partners if selectedChannelPartner is provided
    if (props.selectedChannelPartner !== undefined) {
      const channelPartnersResponse = await userStore.fetchUsers(1, '', 'channel partner', '', true);
      channelPartners.value = channelPartnersResponse.data.map(user => ({
        id: user.id,
        name: user.company_name_with_email
      }));
    }

    // Conditionally fetch application officers if selectedApplicationOfficer is provided
    if (props.selectedApplicationOfficer !== undefined) {
      const applicationOfficersResponse = await userStore.fetchUsers(1, '', 'application control officer', '', true);
      applicationOfficers.value = applicationOfficersResponse.data.map(user => ({
        id: user.id,
        name: user.name_with_email
      }));
    }

  } catch (error) {
    console.error('Error fetching filter options:', error);
  }
};

onMounted(async () => {
  if (props.selectedChannelPartner !== undefined || props.selectedApplicationOfficer !== undefined) {
    await fetchFilterOptions();
  }

});

onMounted(async () => {

  if (
    props.selectedCountry !== undefined ||
    props.selectedIntake !== undefined ||
    props.selectedUniversity !== undefined ||
    props.selectedUniversity2 !== undefined
  ) {
    await loadFilterOptions();
  }
  if (props.selectedEditor !== undefined) {
    await editorStore.getEditors();
  }
});

const loadFilterOptions = async () => {
  try {
    // Conditionally load countries if selectedCountry is provided
    if (props.selectedCountry !== undefined && commonFunctionStore.countries.length === 0) {
      await commonFunctionStore.getCountries();
      countries.value = commonFunctionStore.countries;
    }

    // Conditionally load intakes if selectedIntake is provided
    if (props.selectedIntake !== undefined && commonFunctionStore.intakes.length === 0) {
      await commonFunctionStore.getIntakes();
      intakes.value = commonFunctionStore.intakes;
    }

    // Conditionally load universities if selectedUniversity or selectedUniversity2 is provided
    if ((props.selectedUniversity !== undefined || props.selectedUniversity2 !== undefined) && commonFunctionStore.universities.length === 0) {
      await commonFunctionStore.getUniversities();
      universities.value = commonFunctionStore.universities;
    }
  } catch (error) {
    console.error("Error loading filter options:", error);
  }
};


const fetchUsers = async () => {
  if (selectedRole.value || selectedParent.value || selectedCountry.value || selectedMou.value) { // Ensure at least one prop is selected
    isLoading.value = true;
    try {
      const response = await userStore.fetchUsers(
        selectedRole.value,
        selectedParent.value,
        selectedCountry.value,
        selectedMou.value
      );
      users.value = response.data;
      totalUsers.value = response.total;
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      isLoading.value = false;
    }
  }
};

// Watch for changes to specific props and fetch users conditionally
watch([selectedRole, selectedParent], () => {
  if (selectedRole.value || selectedParent.value) {
    fetchUsers();
  }
});

onMounted(async () => {
  if (props.selectedRole !== undefined) {
    await roleStore.getAllRoles();
    roles.value = roleStore.roles;
  }
  if (props.selectedParent !== undefined) {
    await userStore.fetchParentUsers();
  }
});
onMounted(async () => {
  await loadEditors();
  console.log(selectedLeadStatus, localSelectedLeadStatus);
});

const loadEditors = async () => {
  try {
    // Conditionally load editors if selectedEditor is provided and editors have not been loaded
    if (props.selectedEditor !== undefined && editorStore.editors.length === 0) {
      await editorStore.getEditors();
      editors.value = editorStore.editors;
    }
  } catch (error) {
    console.error("Error loading editors:", error);
  }
};

// Add new assignedStatuses array
const assignedStatuses = ref([
  { id: 1, name: 'Assigned' },
  { id: 0, name: 'Not Assigned' },
]);

</script>


<template>
  <VCol cols="12" md="3" v-if="props.selectedAssignedStatus !== undefined">
    <AppAutocomplete v-model="localSelectedAssignedStatus" :items="assignedStatuses" :item-title="(item) => item.name"
      :item-value="(item) => item.id" label="Assigned Status" placeholder="Select Assigned Status" clearable />
  </VCol>
  <VCol cols="12" md="3" v-if="props.selectedLeadStatus !== undefined">
    <AppAutocomplete v-model="localSelectedLeadStatus" :items="leadStatuses" :item-title="(item) => item.text"
      :item-value="(item) => item.id" label="Lead Status" placeholder="Select Lead Status" clearable />
  </VCol>
  <!-- Application history -->

  <VCol cols="12" md="3" v-if="props.selectedStatus !== undefined">
    <AppAutocomplete v-model="localSelectedStatus" :items="statuses" :item-title="(item) => item.name"
      :item-value="(item) => item.id" label="Status" placeholder="Select Status" clearable />
  </VCol>
  <VCol v-if="isAdmin && props.selectedChannelPartner !== undefined" cols="12" md="3">
    <AppAutocomplete v-model="localSelectedChannelPartner" :items="channelPartners" :item-title="(item) => item.name"
      :item-value="(item) => item.id" label="Channel Partner" placeholder="Select Channel Partner" clearable />
  </VCol>
  <VCol cols="12" md="3" v-if="props.selectedUniversity !== undefined">
    <AppAutocomplete v-model="localSelectedUniversity" :items="universities" :item-title="(item) => item.name"
      :item-value="(item) => item.id" label="University" placeholder="Select University" clearable />
  </VCol>
  <VCol v-if="isAdmin && props.selectedApplicationOfficer !== undefined" cols="12" md="3">
    <AppAutocomplete v-model="localSelectedApplicationOfficer" :items="applicationOfficers"
      :item-title="(item) => item.name" :item-value="(item) => item.id" label="Application Officer"
      placeholder="Select Application Officer" clearable />
  </VCol>

  <!-- course -->

  <VCol cols="12" sm="6" md="3" v-if="props.selectedCountry !== undefined">
    <AppAutocomplete v-model="localSelectedCountry" :items="countries" :item-title="(item) => item.name"
      :item-value="(item) => item.id" label="Filter by Country" placeholder="Select Country" clearable />
  </VCol>
  <VCol cols="12" sm="6" md="3" v-if="props.selectedIntake !== undefined">
    <AppAutocomplete v-model="localSelectedIntake" :items="intakes" :item-title="(item) => item.name"
      :item-value="(item) => item.id" label="Filter by Intake" placeholder="Select Intake" clearable />
  </VCol>
  <VCol cols="12" sm="6" md="3" v-if="props.selectedUniversity2 !== undefined">
    <AppAutocomplete v-model="localSelectedUniversity2" :items="universities" :item-title="(item) => item.name"
      :item-value="(item) => item.id" label="Filter by University" placeholder="Select University" clearable />
  </VCol>
  <VCol cols="12" sm="6" md="3" v-if="props.selectedCourseName !== undefined">
    <AppTextField v-model="localSelectedCourseName" label="Filter by Course Name" placeholder="Enter Course Name"
      clearable />
  </VCol>
  <VCol cols="12" sm="6" md="3" v-if="props.selectedCourseType !== undefined">
    <AppAutocomplete v-model="localSelectedCourseType" :items="courseType" :item-title="(item) => item.name"
      :item-value="(item) => item.id" label="Filter by coursetype" placeholder="Select Coursetype" clearable />
  </VCol>
  <!-- user -->

  <VCol cols="12" sm="6" md="3" v-if="props.selectedRole !== undefined">
    <AppSelect v-model="localSelectedRole" label="Filter by Role" placeholder="Select role" :items="roles" clearable
      clear-icon="tabler-x" :item-title="(item) => item.role" :item-value="(item) => item.role" />
  </VCol>

  <VCol cols="12" sm="6" md="3" v-if="props.selectedParent !== undefined">
    <AppAutocomplete v-model="localSelectedParent" label="Filter by Parent" placeholder="Select Parent"
      :items="userStore.parentUsers" clearable clear-icon="tabler-x" :item-title="(item) => item.full_name"
      :item-value="(item) => item.id" />
  </VCol>
  <VCol cols="12" sm="6" md="3" v-if="props.selectedUserStatus !== undefined">
    <AppAutocomplete v-model="localSelectedUserStatus" :items="[
      { value: 1, title: 'Active' },
      { value: 0, title: 'Inactive' }
    ]" placeholder="Select Status" label="Filter by User Status " @change="fetchUsers" clearable
      clear-icon="tabler-x" />
  </VCol>
  <VCol cols="12" sm="6" md="3" v-if="props.selectedMou !== undefined">
    <AppAutocomplete v-model="localSelectedMou" :items="[
      { value: 1, title: 'Complete' },
      { value: 0, title: 'Incomplete' }
    ]" placeholder="Select Mou" label="Filter by Mou" @change="fetchUsers" clearable clear-icon="tabler-x" />
  </VCol>
  <!--All record  -->

  <VCol cols="12" sm="6" md="3" v-if="props.selectedEditor !== undefined">
    <AppAutocomplete v-model="localSelectedEditor" :items="editorStore.editors" :item-title="(item) => item.full_name"
      :item-value="(item) => item.id" label="Editor" placeholder="Select Editor" clearable />
  </VCol>


  <VCol cols="12" md="3" v-if="props.selectedDateFrom !== undefined">
    <AppDateTimePicker v-model="localSelectedDateFrom" label="From Date" placeholder="Select From Date" />
  </VCol>
  <VCol cols="12" md="3" v-if="props.selectedDateTo !== undefined">
    <AppDateTimePicker v-model="localSelectedDateTo" label="To Date" placeholder="Select To Date" />
  </VCol>



</template>
