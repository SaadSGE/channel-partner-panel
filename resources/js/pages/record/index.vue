
<script lang="js" setup>
import AppCardActions from "@/@core/components/cards/AppCardActions.vue";
import { commonFunction } from "@/@core/stores/commonFunction";
import { useRecordStore } from "@/@core/stores/recordStore";
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { VForm } from 'vuetify/components/VForm';

const router = useRouter();

const commonFunctionStore = commonFunction();
const recordStore = useRecordStore();
const country = ref("");
const passportCountry = ref("");
const intake = ref("");
const courseType = ref("");
const university = ref("");
const course = ref("");
const tutionFee = ref("");
const courseDuration = ref("");
const strp = ref();
const countries = ref();
const passportCountries = [
  "Bangladesh",
  "Nigeria",
  "Sri Lanka",
  "India",
  "Bhutan",
  "Ghana",
];
const intakes = ref();
const courseTypes = ["Graduate", "Post Graduate"];
const universities = ref();
const courses = ref();
const courseDetails = ref({
  courseName: "",
  intake: "",
  tuitionFee: "",
  courseDuration: "",
  courseLabel: "",
  location: "",
universityLogo:"",
academicRequirement:"",
englishRequirement:"",

});
const refForm = ref(null);
const showAppllicationForm = ref(true)
const showCourseDetails = ref(false)
const next = () => {
  refForm.value.validate().then(success => {
    console.log(success)
    if (success.valid) {
      showCourseDetails.value = true;
      showAppllicationForm.value = false;
    }
  });
};
const filteredCourseDetails = computed(() => {

  return commonFunctionStore.getFilteredCourseDetails(
    countryToApply.value,
    course.value,
    intake.value,
    university.value

  );
});
const academicRequirementEditor = ref('');
const englishRequirementEditor = ref('');
const records = ref();
const total = ref();
onMounted(async () => {
  if (commonFunctionStore.countries.length === 0) {
    await commonFunctionStore.getCountries();
  }
  if (commonFunctionStore.courses.length === 0) {
    await commonFunctionStore.getCourses();
  }
  if (commonFunctionStore.intakes.length === 0) {
    await commonFunctionStore.getIntakes();
  }
  if (commonFunctionStore.universities.length === 0) {
    await commonFunctionStore.getUniversities();
  }

  if (commonFunctionStore.courseDetails.length === 0) {
    await commonFunctionStore.getCourseDetails();
  }

  countries.value = commonFunctionStore.countries;
  courses.value = commonFunctionStore.courses;
  intakes.value = commonFunctionStore.intakes;
  universities.value = commonFunctionStore.universities;
  const fetchRecord = await recordStore.fetchRecord();
  records.value = fetchRecord.data
  total.value = fetchRecord.total

});
const submit = async () => {

  const isFormValid = await refForm.value.validate();
  if (isFormValid) {
    try {
      const recordData = {
        countryId: country.value,
        intakeId: intake.value,
        courseType: courseType.value,
        universityId: university.value,
        course: course.value,
        tutionFee: tutionFee.value,
        courseDuration: courseDuration.value,
        academicRequirement: academicRequirementEditor.value,
        englishRequirement: englishRequirementEditor.value,
      };

      const response = await recordStore.submitApplication(recordData);

      if (response) {
        // Handle successful submission (e.g., show a success message, navigate to another page, etc.)
        console.log(recordStore.successMessage);
        // Optionally, reset form fields
        resetForm();
      }
    } catch (error) {
      console.log(error)
      // Handle submission error (e.g., show error messages, log errors, etc.)
      console.error('Form submission error:', recordStore.errors);
    }
  }
};

const resetForm = () => {
  country.value = "";
  intake.value = "";
  courseType.value = "";
  university.value = "";
  course.value = "";
  tutionFee.value = "";
  courseDuration.value = "";
  academicRequirementEditor.value.root.innerHTML = "";
  englishRequirementEditor.value.root.innerHTML = "";
};
const headers = [
  {
    title: 'Country',
    key: 'country.name',
  },
  {
    title: 'Intake',
    key: 'intake.name',
  },
  {
    title: 'University',
    key: 'university.name',
  },
  {
    title: 'Tution Fee',
    key: 'tuition_fee',
  },
  {
    title: 'Course Duration',
    key: 'course_duration',
  },
  {
    title: 'Academic Requirement',
    key: 'academic_requirement',
  },
  {
    title: 'English Requirement',
    key: 'english_requirement',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
</script>
<template>
  <div v-if="showAppllicationForm">
    <AppCardActions title="Add Record"  action-collapsed visible="false" collapsed="true">
      <VForm ref="refForm" @submit.prevent="() => {}" class="form-padding">
        <VRow>
          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="country"
              :items="countries"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Country to Apply"
              placeholder="Select Country"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="intake"
              :items="intakes"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Intake"
              placeholder="Select Intake"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="courseType"
              :items="courseTypes"
              label="Course Type"
              placeholder="Select Course Type"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="university"
              :items="universities"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="University"
              placeholder="Select University"
              :rules="[requiredValidator]"
            />
          </VCol>

          <!-- University -->
          <VCol cols="12" md="6">
            <AppTextField
              v-model="course"
              label="Course Name."
              placeholder="BSC in Machine Learning"
              :rules="[requiredValidator]"
            />
          </VCol>

          <!-- Course -->
          <VCol cols="12" md="6">
            <AppTextField
              v-model="tutionFee"
              label="Tuttion Fee (Mention euro or dollar)"
              placeholder="1000 euro"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppTextField
              v-model="courseDuration"
              label="Course Duration (Mention years)"
              placeholder="2 years"
              :rules="[requiredValidator]"
            />
          </VCol>
          <VCol cols="12" md="12" style="margin: auto">
            <VLabel class="mb-2">Academic Requirement</VLabel>
            <QuillEditor theme="snow"  v-model:content="academicRequirementEditor" content-type="html"/>
          </VCol>

          <VCol cols="12" md="12" style="margin: auto">
            <VLabel class="mb-2">English Requirement</VLabel>
            <QuillEditor theme="snow" v-model:content="englishRequirementEditor" content-type="html"/>
          </VCol>

          <!-- Submit and Reset Buttons -->
          <VCol cols="12" >
            <VBtn @click="submit()" type="submit" color="primary" block> Submit </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </AppCardActions>

    <VCard title="Course Details" class="mt-2">
      <VCardText>
          <div class="d-flex justify-space-between flex-wrap gap-6 ">
            <div>
              <AppTextField
                v-model="searchQuery"
                style="max-inline-size: 200px; min-inline-size: 200px;"
                placeholder="Search Review"
              />
            </div>
            <div class="d-flex flex-row gap-4 align-center flex-wrap">
              <AppSelect
                v-model="itemsPerPage"
                :items="[10, 25, 50, 100]"
                style="inline-size: 6.25rem;"
              />
            </div>
          </div>
        </VCardText>
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :loading="isLoading"
        :items-length="total"
        :headers="headers"
        :items="records"
        item-value="total"
        class="text-no-wrap text-sm rounded-0"
        @update:options="updateOptions"
      >
      <template #item.academic_requirement="{ item }">
        <div v-html="item.academic_requirement"></div>
      </template>
      <template #item.english_requirement="{ item }">
        <div v-html="item.english_requirement"></div>
      </template>
      <template #bottom>
            <TablePagination
              v-model:page="page"
              :items-per-page="itemsPerPage"
              :total-items="total"
            />
          </template>
      </VDataTableServer>

    </VCard>
  </div>
</template>
<style lang="scss">
.form-padding {
  padding: 0rem 2rem 2rem 2rem;
}
.label {
  color: black;
}
.ql-editor {
  height: 250px;
  max-height: 250px;
  overflow: auto;
}
</style>
