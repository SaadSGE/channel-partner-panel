<template>
  <VCard>
    <VCardText>
      <VCardTitle class="text-left padding-bottom">Interested University</VCardTitle>
      <p class="text-center padding-bottom">Add interested University, Intake, Course</p>
      <VRow v-for="(university, index) in interestedUniversity" :key="index">
        <VCol cols="12" md="2">
          <AppAutocomplete v-model="university.countryToApply" :items="commonFunctionStore.countries" item-title="name"
            item-value="id" label="Country to Apply" placeholder="Select Country" :rules="[requiredValidator]"
            @update:modelValue="onCountryChange(index)" density="compact" class="small-dropdown" />
        </VCol>

        <VCol cols="12" md="2">
          <AppAutocomplete v-model="university.intake" :items="university.intakes" item-title="intake_name"
            item-value="intake_id" label="Intake" placeholder="Select Intake" :rules="[requiredValidator]"
            :disabled="!university.countryToApply" @update:modelValue="onIntakeChange(index)" density="compact"
            class="small-dropdown" />
        </VCol>

        <VCol cols="12" md="2">
          <AppAutocomplete v-model="university.courseType" :items="university.courseTypes" item-title="name"
            item-value="id" label="Course Type" placeholder="Select Course Type" :rules="[requiredValidator]"
            :disabled="!university.intake" @update:modelValue="onCourseTypeChange(index)" density="compact"
            class="small-dropdown" />
        </VCol>

        <VCol cols="12" md="2">
          <AppAutocomplete v-model="university.university" :items="university.universities" item-title="university_name"
            item-value="university_id" label="University" placeholder="Select University" :rules="[requiredValidator]"
            :disabled="!university.courseType" @update:modelValue="onUniversityChange(index)" density="compact"
            class="small-dropdown" />
        </VCol>

        <VCol cols="12" md="3">
          <AppAutocomplete v-model="university.course" :items="university.courses" item-title="course_name"
            item-value="id" label="Course" placeholder="Select Course" :rules="[requiredValidator]"
            :disabled="!university.university" density="compact" class="small-dropdown" />
        </VCol>

        <VCol cols="12" md="1" class="d-flex align-center mt-6">
          <VBtn v-if="index !== 0" icon="tabler-x" color="error" @click="removeInterestedUniversity(index)" class="me-2"
            size="small" />
          <VBtn icon="tabler-plus" color="primary" @click="addInterestedUniversity" size="small" />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const commonFunctionStore = commonFunction();
const interestedUniversity = ref([{
  countryToApply: '',
  intake: null,
  courseType: null,
  university: null,
  course: null,
  intakes: [],
  courseTypes: [],
  universities: [],
  courses: []
}]);


const onCountryChange = async (index) => {

  const university = interestedUniversity.value[index];
  university.intake = null;
  university.courseType = null;
  university.university = null;
  university.course = null;
  university.intakes = await commonFunctionStore.getIntakesByCountry(university.countryToApply);

};

const onIntakeChange = async (index) => {
  console.log(index + " intake changed");
  const university = interestedUniversity.value[index];
  university.courseType = null;
  university.university = null;
  university.course = null;
  university.courseTypes = await commonFunctionStore.getCourseTypesByCountryIntake(university.countryToApply, university.intake);
};

const onCourseTypeChange = async (index) => {
  console.log(index + " course type changed");
  const university = interestedUniversity.value[index];
  university.university = null;
  university.course = null;
  university.universities = await commonFunctionStore.getUniversitiesByCountryIntakeCourseType(university.countryToApply, university.intake, university.courseType);
};

const onUniversityChange = async (index) => {
  console.log(index + " university changed");
  const university = interestedUniversity.value[index];
  university.course = null;
  university.courses = await commonFunctionStore.getCourseDetails(university.intake, university.university, university.courseType);
};

const addInterestedUniversity = () => {
  const lastEntry = interestedUniversity.value[interestedUniversity.value.length - 1];

  if (!lastEntry.countryToApply ||
    !lastEntry.intake ||
    !lastEntry.courseType ||
    !lastEntry.university ||
    !lastEntry.course) {

    toast("Please fill all fields before adding a new entry", {
      type: "error",
      position: "top-right",
      theme: "colored",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return;
  }

  interestedUniversity.value.push({
    countryToApply: '',
    intake: null,
    courseType: null,
    university: null,
    course: null,
    intakes: [],
    courseTypes: [],
    universities: [],
    courses: []
  });
};

const removeInterestedUniversity = (index) => {
  if (index !== 0) {
    interestedUniversity.value.splice(index, 1);
  }
};
</script>

<style scoped>
.small-dropdown :deep(.v-field__input),
.small-dropdown :deep(.v-list-item-title) {
  font-size: 0.8rem !important;
}

.small-dropdown :deep(.v-field__input) {
  min-block-size: 32px;
  padding-block: 5px;
}

.small-dropdown :deep(.v-field__label) {
  font-size: 0.55rem !important;
}
</style>
