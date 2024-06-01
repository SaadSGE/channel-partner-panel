
<script lang="js" setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { VForm } from 'vuetify/components/VForm';
import CourseDetails from "./course-details.vue";

const router = useRouter();

const commonFunctionStore = commonFunction();
const countryToApply = ref("");
const passportCountry = ref("");
const intake = ref("");
const courseType = ref("");
const university = ref("");
const course = ref("");
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
</script>
<template>
  <div v-if="showAppllicationForm">
    <VCard title="New Application">
      <VForm ref="refForm"
     @submit.prevent="() => {}" class="form-padding">
        <VRow>
          <VCol cols="12" md="6">

            <AppAutocomplete
              v-model="countryToApply"
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
              v-model="passportCountry"
              :items="passportCountries"
              label="Country of Student Passport"
              placeholder="Select Country of Student's Passport"
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

          <!-- University -->
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

          <!-- Course -->
          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="course"
              :items="courses"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Course"
              placeholder="Select Course"
              :rules="[requiredValidator]"
            />
          </VCol>

          <!-- Submit and Reset Buttons -->
          <VCol cols="12" class="d-flex gap-4 justify-end">
            <VBtn  @click="next()" type="submit" color="primary" > Next </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCard>
  </div>
  <div v-if="showCourseDetails">
    <CourseDetails
      :courseDetails="filteredCourseDetails"
      @update:showCourseDetails="showCourseDetails = $event"
      @update:showApplicationForm="showAppllicationForm = $event"
    />
  </div>
</template>
<style lang="scss">
.form-padding {
  padding: 0rem 2rem 2rem 2rem;
}
</style>
