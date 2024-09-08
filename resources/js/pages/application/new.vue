<script lang="js" setup>
definePage({
  meta: {
    action: 'create',
    subject: 'application',
  },
})

import { commonFunction } from "@/@core/stores/commonFunction";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { VForm } from 'vuetify/components/VForm';
import CourseDetails from "./course-details.vue";

const router = useRouter();
const commonFunctionStore = commonFunction();

const countryToApply = ref("");
const passportCountry = ref("");
const intake = ref(null);
const courseType = ref(null);
const university = ref(null);
const course = ref(null);
const refForm = ref(null);
const showAppllicationForm = ref(true);
const showCourseDetails = ref(false);
const isLoading = ref(true);

const passportCountries = [
  "Bangladesh",
  "Nigeria",
  "Sri Lanka",
  "India",
  "Bhutan",
  "Ghana",
];

onMounted(async () => {
  await commonFunctionStore.getUniqueCountries();
  isLoading.value = false;
});

watch(countryToApply, async (newVal) => {
  if (newVal) {
    intake.value = null;
    courseType.value = null;
    university.value = null;
    course.value = null;
    commonFunctionStore.setSelectedCountryId(newVal);
    await commonFunctionStore.getIntakesByCountry(newVal);
  }
});

watch(intake, async (newVal) => {
  if (newVal) {
    courseType.value = null;
    university.value = null;
    course.value = null;
    await commonFunctionStore.getCourseTypesByCountryIntake(countryToApply.value, newVal);
  }
});

watch(courseType, async (newVal) => {
  if (newVal) {
    university.value = null;
    course.value = null;
    await commonFunctionStore.getUniversitiesByCountryIntakeCourseType(countryToApply.value, intake.value, newVal);
  }
});

watch(university, async (newVal) => {
  if (newVal) {
    course.value = null;
    if (intake.value && courseType.value) {
      await commonFunctionStore.getCourseDetails(intake.value, newVal, courseType.value);
    }
  }
});

watch(course, (newVal) => {
  if (newVal) {
    commonFunctionStore.selectedCourseDetailsId = newVal;
  }
});

const next = () => {
  refForm.value.validate().then((success) => {
    if (success.valid) {
      showCourseDetails.value = true;
      showAppllicationForm.value = false;
    }
  });
};

</script>


<template>
  <div v-if="showAppllicationForm">
    <AppCardActions title="New Application" :loading="isLoading" no-actions>
      <VForm ref="refForm" @submit.prevent="() => {}" class="form-padding">
        <VRow>
          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="countryToApply"
              :items="commonFunctionStore.countries"
              item-title="name"
              item-value="id"
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
              :items="commonFunctionStore.intakes"
              item-title="intake_name"
              item-value="intake_id"
              label="Intake"
              placeholder="Select Intake"
              :rules="[requiredValidator]"
              :disabled="!countryToApply"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="courseType"
              :items="commonFunctionStore.courseTypes"
              item-title="name"
              item-value="id"
              label="Course Type"
              placeholder="Select Course Type"
              :rules="[requiredValidator]"
              :disabled="!intake"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="university"
              :items="commonFunctionStore.universities"
              item-title="university_name"
              item-value="university_id"
              label="University"
              placeholder="Select University"
              :rules="[requiredValidator]"
              :disabled="!courseType"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="course"
              :items="commonFunctionStore.courseDetails"
              item-title="course_name"
              item-value="id"
              label="Course"
              placeholder="Select Course"
              :rules="[requiredValidator]"
              :disabled="!university"
            />
          </VCol>
          <VCol cols="12" class="d-flex gap-4 justify-end">
            <VBtn @click="next()" type="submit" color="primary">Next</VBtn>
          </VCol>
        </VRow>
      </VForm>
    </AppCardActions>
  </div>
  <div v-if="showCourseDetails">
    <CourseDetails
      :courseDetails="commonFunctionStore.getPreparedCourseDetails"
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
