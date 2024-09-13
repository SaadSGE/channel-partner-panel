
<script lang="js" setup>
definePage({
  meta: {
    action: 'read',
    subject: 'record',
  },
})
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
const courseTypes = [
  "Graduate",
  "Post Graduate",
  "Foundation (Pathway)",
  "International Year One (Pathway)",
];


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

</script>
<template>
  <div v-if="showAppllicationForm">
    <VCard title="New Application">
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
          <VCol cols="12" md="12" style="margin: auto;">
            <VLabel class="mb-2">Academic Requirement</VLabel>
            <QuillEditor theme="snow"  v-model:content="academicRequirementEditor" content-type="html"/>
          </VCol>

          <VCol cols="12" md="12" style="margin: auto;">
            <VLabel class="mb-2">English Requirement</VLabel>
            <QuillEditor theme="snow" v-model:content="englishRequirementEditor" content-type="html"/>
          </VCol>

          <!-- Submit and Reset Buttons -->
          <VCol cols="12" >
            <VBtn @click="submit()" type="submit" color="primary" block> Submit </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCard>
  </div>
</template>
<style lang="scss">
.form-padding {
  padding-block: 0 2rem;
  padding-inline: 2rem;
}

.label {
  color: black;
}

.ql-editor {
  overflow: auto;
  block-size: 250px;
  max-block-size: 250px;
}
</style>
