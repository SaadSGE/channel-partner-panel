<script setup>
import { useRecordStore } from "@/@core/stores/recordStore";
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

const searchQuery = ref("");
const isLoading = ref(false);
const showModal = ref(false); // State to control modal visibility

// Form fields for the modal
const universityName = ref("");
const courseName = ref("");
const intakeName = ref("");
const isFormValid = ref(false);
const refForm = ref(null); // Reference to the form

// Validation rules
const requiredValidator = (value) => !!value || 'This field is required';

onMounted(async () => {
  await getRecord();
});

const getRecord = async (page = 1) => {
  isLoading.value = true;
  const fetchRecord = await recordStore.fetchRecord(page, searchQuery.value);
  records.value = fetchRecord.data;
  total.value = fetchRecord.total;
  isLoading.value = false;
};

watch([searchQuery], () => {
  getRecord();
});

const formatKey = (key) => {
  return key
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize the first letter of each word
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

const records = ref();
const total = ref();
const itemsPerPage = ref(10);
const page = ref(1);

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
        showModal.value = false; // Close modal after submission
        refForm.value.reset(); // Reset form after submission
      } catch (error) {
        Swal.fire("Error!", "Failed to submit the request.", "error");
      }
    }
  });
};
</script>


<template>
    <!-- Main Card Container -->
    <VCard class="p-5">
      <!-- Header for Search Section -->
      <VCardTitle class="text-center">
        Search Course/University/Intake
      </VCardTitle>

      <!-- Search Bar Container -->
      <VCardText class="d-flex flex-column align-center">
        <!-- Search Input -->
        <AppTextField
          v-model="searchQuery"
          placeholder=" Search Course/University/Intake"
          class="mx-auto"
          style="max-inline-size: 30rem; min-inline-size: 30rem"
        />

        <!-- Additional Text Below Search Bar -->
        <div class="text-center mt-2">
          Don't find your desired record?
          <a href="#" @click.prevent="showModal = true">Click here to request</a>
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
              style="inline-size: 6.25rem"
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

