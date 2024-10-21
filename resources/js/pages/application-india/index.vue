<script lang="js" setup>
definePage({
  meta: {
    layout: "blank",
    unauthenticatedOnly: true,
  },
});

import Filters from "@/@core/components/Filters.vue";
import { commonFunction } from "@/@core/stores/commonFunction";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { VForm } from 'vuetify/components/VForm';
import CourseDetails from "./course-details.vue";

const router = useRouter();
const commonFunctionStore = commonFunction();


const passportCountry = ref("");
const intake = ref(null);
const courseType = ref(null);
const university = ref(null);
const course = ref(null);
const refForm = ref(null);
const showAppllicationForm = ref(true);
const showCourseDetails = ref(false);
const isLoading = ref(true);
const countryToApply = ref("");

const passportCountries = [
  "Bangladesh",
  "Nigeria",
  "Sri Lanka",
  "India",
  "Bhutan",
  "Ghana",
  "Pakistan",
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
    commonFunctionStore.selectedCourseType = newVal;
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
  <VContainer class="fill-height">
    <VRow justify="center"> <!-- Changed main container VRow to v-row -->
      <VCol cols="12" md="8"> <!-- Changed main container VCol to v-col -->
        <img src="https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/channelPartnerPanel/sge-logo-trans.png"
          alt="Logo" style=" block-size: auto;inline-size: 100%; object-fit: cover;" /> <!-- Unchanged -->
      </VCol> <!-- Changed main container VCol to v-col -->
    </VRow> <!-- Changed main container VRow to v-row -->
    <VRow justify="center" class="mt-8">
      <VCol cols="12" sm="12" md="12" lg="12">
        <div v-if="showAppllicationForm">
          <AppCardActions title="New Application" :loading="isLoading" no-actions>
            <VForm ref="refForm" @submit.prevent="() => { }" class="form-padding">
              <v-row> <!-- Changed inner VRow to v-row -->
                <Filters></Filters>
                <v-col cols="12" md="6"> <!-- Changed inner VCol to v-col -->
                  <AppAutocomplete v-model="countryToApply" :items="commonFunctionStore.countries" item-title="name"
                    item-value="id" label="Country to Apply" placeholder="Select Country"
                    :rules="[requiredValidator]" />
                </v-col> <!-- Changed inner VCol to v-col -->

                <v-col cols="12" md="6"> <!-- Changed inner VCol to v-col -->
                  <AppAutocomplete v-model="passportCountry" :items="passportCountries"
                    label="Country of Student Passport" placeholder="Select Country of Student's Passport"
                    :rules="[requiredValidator]" />
                </v-col> <!-- Changed inner VCol to v-col -->

                <v-col cols="12" md="6"> <!-- Changed inner VCol to v-col -->
                  <AppAutocomplete v-model="intake" :items="commonFunctionStore.intakes" item-title="intake_name"
                    item-value="intake_id" label="Intake" placeholder="Select Intake" :rules="[requiredValidator]"
                    :disabled="!countryToApply" />
                </v-col> <!-- Changed inner VCol to v-col -->

                <v-col cols="12" md="6"> <!-- Changed inner VCol to v-col -->
                  <AppAutocomplete v-model="courseType" :items="commonFunctionStore.courseTypes" item-title="name"
                    item-value="id" label="Course Type" placeholder="Select Course Type" :rules="[requiredValidator]"
                    :disabled="!intake" />
                </v-col> <!-- Changed inner VCol to v-col -->

                <v-col cols="12" md="6"> <!-- Changed inner VCol to v-col -->
                  <AppAutocomplete v-model="university" :items="commonFunctionStore.universities"
                    item-title="university_name" item-value="university_id" label="University"
                    placeholder="Select University" :rules="[requiredValidator]" :disabled="!courseType" />
                </v-col> <!-- Changed inner VCol to v-col -->

                <v-col cols="12" md="6"> <!-- Changed inner VCol to v-col -->
                  <AppAutocomplete v-model="course" :items="commonFunctionStore.courseDetails" item-title="course_name"
                    item-value="id" label="Course" placeholder="Select Course" :rules="[requiredValidator]"
                    :disabled="!university" />
                </v-col> <!-- Changed inner VCol to v-col -->
                <v-col cols="12" class="d-flex gap-4 justify-end"> <!-- Changed inner VCol to v-col -->
                  <VBtn @click="next()" type="submit" color="primary">Next</VBtn>
                </v-col> <!-- Changed inner VCol to v-col -->
              </v-row> <!-- Changed inner VRow to v-row -->
            </VForm>
          </AppCardActions>
        </div>
        <div v-if="showCourseDetails">
          <CourseDetails :courseDetails="commonFunctionStore.getPreparedCourseDetails"
            @update:showCourseDetails="showCourseDetails = $event"
            @update:showApplicationForm="showAppllicationForm = $event" />
        </div>
      </VCol>
    </VRow>

  </VContainer>

</template>

<style lang="scss">
.centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  inline-size: 100%;

  /* Ensure it takes full width up to the max */
  margin-block: 0;
  margin-inline: auto;

  /* Center the container */
  max-inline-size: 75rem;
  min-inline-size: 75rem;

  /* Set a maximum width */
  padding-block: 2rem 0;
  padding-inline: 0;
}

.form-padding {
  padding-block: 0 2rem;
  padding-inline: 2rem;
}
</style>
