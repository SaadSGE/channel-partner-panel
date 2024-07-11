<script lang="js" setup>
definePage({
  meta: {
    action: 'create',
    subject: 'application',
  },
})
import { commonFunction } from "@/@core/stores/commonFunction";
import { computed, onMounted, ref, watch } from "vue";
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
  {
    name: 'Graduate',
    id: 'Graduate',
  },
  {
    name: 'Post Graduate',
    id: 'Post Graduate',
  },
];
const universities = ref();
const courses = ref();
const countryIntakeUniversityCourse = ref();
const courseDetails = ref({
  courseName: "",
  intake: "",
  tuitionFee: "",
  courseDuration: "",
  courseLabel: "",
  location: "",
  universityLogo: "",
  academicRequirement: "",
  englishRequirement: "",
});
const refForm = ref(null);
const showAppllicationForm = ref(true);
const showCourseDetails = ref(false);
const next = () => {
  refForm.value.validate().then((success) => {
    console.log(success);
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
  await commonFunctionStore.getCountryIntakeUniversityCourse();

  await commonFunctionStore.getCourses();
  await commonFunctionStore.getIntakes();
  await commonFunctionStore.getUniversities();
  await commonFunctionStore.getCourseDetails();

  countryIntakeUniversityCourse.value = commonFunctionStore.countryIntakeUniversityCourse;
  countries.value = commonFunctionStore.countries;
  courses.value = commonFunctionStore.courses;
  intakes.value = commonFunctionStore.intakes;
  universities.value = commonFunctionStore.universities;
});

// Utility function to remove duplicates
const uniqueById = (array) => {
  const seen = new Set();
  return array.filter(item => {
    const duplicate = seen.has(item.id);
    seen.add(item.id);
    return !duplicate;
  });
};

// Utility function to remove duplicate by key
const uniqueByKey = (array, key) => {
  const seen = new Set();
  return array.filter(item => {
    const duplicate = seen.has(item[key]);
    seen.add(item[key]);
    return !duplicate;
  });
};

// Computed properties for filtering
const filteredIntakes = computed(() => {
  const filtered = countryIntakeUniversityCourse.value
    .filter(item => item.country_id === countryToApply.value)
    .map(item => ({
      id: item.intake_id,
      name: item.intake_name
    }));
  return uniqueById(filtered);
});

const filteredCourseTypes = computed(() => {
  const filtered = countryIntakeUniversityCourse.value
    .filter(item => item.country_id === countryToApply.value && item.intake_id === intake.value)
    .map(item => ({
      id: item.course_type,
      name: item.course_type
    }));
  return uniqueByKey(filtered, 'id');
});

const filteredUniversities = computed(() => {
  const filtered = countryIntakeUniversityCourse.value
    .filter(item => item.country_id === countryToApply.value && item.intake_id === intake.value && item.course_type === courseType.value)
    .map(item => ({
      id: item.university_id,
      name: item.university_name
    }));
  return uniqueById(filtered);
});

const filteredCourses = computed(() => {
  const filtered = countryIntakeUniversityCourse.value
    .filter(item => item.country_id === countryToApply.value && item.intake_id === intake.value && item.course_type === courseType.value && item.university_id === university.value)
    .map(item => ({
      id: item.course_id,
      name: item.course_name
    }));
  return uniqueById(filtered);
});

// Watchers to reset dependent fields
watch(countryToApply, (newVal) => {
  intake.value = null;
  courseType.value = null;
  university.value = null;
  course.value = null;
});

watch(intake, (newVal) => {
  courseType.value = null;
  university.value = null;
  course.value = null;
});

watch(courseType, (newVal) => {
  university.value = null;
  course.value = null;
});

watch(university, (newVal) => {
  course.value = null;
});
</script>

<template>
  <div v-if="showAppllicationForm">
    <VCard title="New Application">
      <VForm ref="refForm" @submit.prevent="() => {}" class="form-padding">
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
              :items="countryToApply ? filteredIntakes : [{ name: 'Select Country First', id: null }]"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Intake"
              placeholder="Select Intake"
              :rules="[requiredValidator]"
              :disabled="!countryToApply"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="courseType"
              :items="intake ? filteredCourseTypes : [{ name: 'Select Intake First', id: null }]"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Course Type"
              placeholder="Select Course Type"
              :rules="[requiredValidator]"
              :disabled="!intake"
            />
          </VCol>

          <!-- University -->
          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="university"
              :items="courseType ? filteredUniversities : [{ name: 'Select Course Type First', id: null }]"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="University"
              placeholder="Select University"
              :rules="[requiredValidator]"
              :disabled="!courseType"
            />
          </VCol>

          <!-- Course -->
          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="course"
              :items="university ? filteredCourses : [{ name: 'Select University First', id: null }]"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Course"
              placeholder="Select Course"
              :rules="[requiredValidator]"
              :disabled="!university"
            />
          </VCol>

          <!-- Submit and Reset Buttons -->
          <VCol cols="12" class="d-flex gap-4 justify-end">
            <VBtn @click="next()" type="submit" color="primary">Next</VBtn>
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
