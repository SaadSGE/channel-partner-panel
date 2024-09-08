<script setup>
import { commonFunction } from "@/@core/stores/commonFunction.js";
import { useRecordStore } from "@/@core/stores/recordStore.js";
import Swal from 'sweetalert2';
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

definePage({
  meta: {
   public:true
  },
});

const recordStore = useRecordStore();
const router = useRouter();
const commonFunctionStore = commonFunction();

const searchQuery = ref("");
const isLoading = ref(false);
const showModal = ref(false);

// Form fields for the modal
const universityName = ref("");
const courseName = ref("");
const intakeName = ref("");
const isFormValid = ref(false);
const refForm = ref(null);

// Validation rules
const requiredValidator = (value) => !!value || 'This field is required';

// Add these for filtering
const selectedCountry = ref(null);
const selectedIntake = ref(null);
const selectedUniversity = ref(null);
const selectedCourseName = ref("");

const countries = ref([]);
const intakes = ref([]);
const universities = ref([]);

const records = ref([]);
const total = ref(0);
const itemsPerPage = ref(10);
const page = ref(1);

onMounted(async () => {
  await getRecord();
  await loadFilterOptions();
});

const loadFilterOptions = async () => {
  if (commonFunctionStore.countries.length === 0) await commonFunctionStore.getCountries();
  if (commonFunctionStore.intakes.length === 0) await commonFunctionStore.getIntakes();
  if (commonFunctionStore.universities.length === 0) await commonFunctionStore.getUniversities();

  countries.value = commonFunctionStore.countries;
  intakes.value = commonFunctionStore.intakes;
  universities.value = commonFunctionStore.universities;
};

const getRecord = async (page = 1) => {
  isLoading.value = true;
  const fetchRecord = await recordStore.fetchRecord(
    page,
    searchQuery.value,
    selectedCountry.value,
    selectedIntake.value,
    selectedUniversity.value,
    selectedCourseName.value
  );
  records.value = fetchRecord.data;
  total.value = fetchRecord.total;
  isLoading.value = false;
};

watch([searchQuery, selectedCountry, selectedIntake, selectedUniversity, selectedCourseName], () => {
  getRecord();
});

const updateOptions = (event) => {
  getRecord(event.page);
};

const requestRecord = async () => {
  refForm.value.validate().then(async (valid) => {
    if (valid.valid) {

      try {
        await recordStore.requestForm({
          universityName: universityName.value,
          courseName: courseName.value,
          intakeName: intakeName.value,
        });
        Swal.fire("Success!", "Your request has been successfully submitted. Our team will review it and get back to you shortly.", "success");
        showModal.value = false;
        refForm.value.reset();
      } catch (error) {
        Swal.fire("Error!", "Failed to submit the request.", "error");
      }
    }
  });
};

const headersRecord = [
  { title: "Country", key: "country.name" },
  { title: "Intake", key: "intake.name" },
  { title: "University", key: "university.name" },
  { title: "Course Type", key: "course.type" },
  { title: "Course Name", key: "course.name" },
  { title: "Tuition Fee", key: "tuition_fee" },
  { title: "Course Duration", key: "course_duration" },
  { title: "Academic Requirement", key: "academic_requirement" },
  { title: "English Requirement", key: "english_requirement" },
  { title: "Actions", key: "actions", sortable: false },
];

</script>

<template>
  <!-- Main Card Container -->
  <VCard class="p-5">
    <!-- Header for Search Section -->


    <!-- Search and Filter Section -->
    <VCardText>
      <VRow>
        <VCol cols="12" sm="6" md="3">
          <AppAutocomplete
            v-model="selectedCountry"
            :items="countries"
            :item-title="(item) => item.name"
            :item-value="(item) => item.id"
            label="Filter by Country"
            placeholder="Select Country"
            clearable
          />
        </VCol>
        <VCol cols="12" sm="6" md="3">
          <AppAutocomplete
            v-model="selectedIntake"
            :items="intakes"
            :item-title="(item) => item.name"
            :item-value="(item) => item.id"
            label="Filter by Intake"
            placeholder="Select Intake"
            clearable
          />
        </VCol>
        <VCol cols="12" sm="6" md="3">
          <AppAutocomplete
            v-model="selectedUniversity"
            :items="universities"
            :item-title="(item) => item.name"
            :item-value="(item) => item.id"
            label="Filter by University"
            placeholder="Select University"
            clearable
          />
        </VCol>
        <VCol cols="12" sm="6" md="3">
          <AppTextField
            v-model="selectedCourseName"
            label="Filter by Course Name"
            placeholder="Enter Course Name"
            clearable
          />
        </VCol>
      </VRow>
      <div class="d-flex flex-column align-center">
        <VCardTitle class="text-center mt-5">
          Search Course/University/Intake
        </VCardTitle>
        <VRow class="mt-2">
          <VCol cols="12" sm="8" md="6">
            <AppTextField
              v-model="searchQuery"
              placeholder="Search Course/University/Intake"
              class="mx-auto"
              style="max-inline-size: 30rem; min-inline-size: 30rem;"
            />
          </VCol>
        </VRow>
        <!-- Additional Text Below Search Bar -->
        <div class="text-center mt-2">
          Don't find your desired record?
          <a href="#" @click.prevent="showModal = true">Click here to request</a>
        </div>
      </div>
    </VCardText>
  </VCard>

  <!-- Data Table Card Container -->
  <AppCardActions class="mt-2" :loading="isLoading" no-actions>
    <VCardText>
      <div class="d-flex justify-space-between flex-wrap gap-6">
        <!-- Items Per Page Selector -->
        <div class="d-flex flex-row gap-4 align-center flex-wrap">
          <AppSelect
            v-model="itemsPerPage"
            :items="[10, 25, 50, 100]"
            style="inline-size: 6.25rem;"
          />
        </div>
      </div>
    </VCardText>

    <!-- Data Table -->
    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      :loading="isLoading"
      :items-length="total"
      :headers="headersRecord"
      :items="records"
      item-value="total"
      class="text-no-wrap text-sm rounded-0"
      @update:options="updateOptions"
    >
      <template #item.academic_requirement="{ item }">
        <ShowMore :text="item.academic_requirement" :lines="3" />
      </template>
      <template #item.english_requirement="{ item }">
        <ShowMore :text="item.english_requirement" :lines="3" />
      </template>
      <template #bottom>
        <TablePagination
          v-model:page="page"
          :items-per-page="itemsPerPage"
          :total-items="total"
        />
      </template>
    </VDataTableServer>
  </AppCardActions>

  <!-- Modal for Requesting Record -->
  <VDialog v-model="showModal" max-width="500px">
    <VCard>
      <VCardTitle>Request Record</VCardTitle>
      <VCardText>
        <VForm ref="refForm" v-model="isFormValid" @submit.prevent="requestRecord">
          <VTextField
            v-model="universityName"
            :rules="[requiredValidator]"
            label="University Name"
            placeholder="Enter university name"
            class="mt-2"
          />
          <VTextField
            v-model="courseName"
            :rules="[requiredValidator]"
            label="Course Name"
            placeholder="Enter course name"
            class="mt-2"
          />
          <VTextField
            v-model="intakeName"
            :rules="[requiredValidator]"
            label="Intake"
            placeholder="Enter intake"
            class="mt-2"
          />
        </VForm>
      </VCardText>
      <VCardActions>
        <VSpacer></VSpacer>
        <VBtn color="primary" @click="requestRecord">Submit</VBtn>
        <VBtn @click="showModal = false">Cancel</VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

