<script setup>
import { defineModel, defineProps, onMounted, ref } from 'vue';
import { commonFunction } from '../stores/commonFunction';
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

const universities = ref([]);
const channelPartners = ref([]);
const applicationOfficers = ref([]);

const userStore = useUserStore();
const commonsFunctionStore = commonFunction();

const selectedStatus = defineModel('selectedStatus');
const selectedChannelPartner = defineModel('selectedChannelPartner');
const selectedUniversity = defineModel('selectedUniversity');
const selectedApplicationOfficer = defineModel('selectedApplicationOfficer')
const dateFrom = defineModel('dateFrom')
const dateTo = defineModel('dateTo')

const isAdmin = ref(getUserRole() === 'admin');
defineProps({
  filters: {
    type: Array,
    required: true
  }
})

const fetchFilterOptions = async () => {
  try {

    const universityList = await commonsFunctionStore.getUniversities();

    universities.value = universityList.data.map(university => ({
      id: university.id,
      name: university.name
    }));

    const channelPartnersResponse = await userStore.fetchUsers(1, '', 'channel partner', '', true);
    channelPartners.value = channelPartnersResponse.data.map(user => ({
      id: user.id,
      name: user.company_name_with_email
    }));

    const applicationOfficersResponse = await userStore.fetchUsers(1, '', 'application control officer', '', true);
    applicationOfficers.value = applicationOfficersResponse.data.map(user => ({
      id: user.id,
      name: user.name_with_email
    }));

  } catch (error) {
    console.error('Error fetching filter options:', error);
  }
};

onMounted(() => {
  fetchFilterOptions();

});
</script>


<template>
  <VCol cols="12" md="3">
    <AppAutocomplete v-model="selectedStatus" :items="statuses" :item-title="(item) => item.name"
      :item-value="(item) => item.id" label="Status" placeholder="Select Status" clearable />
  </VCol>
  <VCol v-if="isAdmin" cols="12" md="3">
    <AppAutocomplete v-model="selectedChannelPartner" :items="channelPartners" :item-title="(item) => item.name"
      :item-value="(item) => item.id" label="Channel Partner" placeholder="Select Channel Partner" clearable />
  </VCol>
  <VCol cols="12" md="3">
    <AppAutocomplete v-model="selectedUniversity" :items="universities" :item-title="(item) => item.name"
      :item-value="(item) => item.id" label="University" placeholder="Select University" clearable />
  </VCol>
  <VCol v-if="isAdmin" cols="12" md="3">
    <AppAutocomplete v-model="selectedApplicationOfficer" :items="applicationOfficers" :item-title="(item) => item.name"
      :item-value="(item) => item.id" label="Application Officer" placeholder="Select Application Officer" clearable />
  </VCol>
  <VCol cols="12" md="3">
    <AppDateTimePicker v-model="dateFrom" label="From Date" placeholder="Select From Date" />
  </VCol>
  <VCol cols="12" md="3">
    <AppDateTimePicker v-model="dateTo" label="To Date" placeholder="Select To Date" />
  </VCol>
</template>
