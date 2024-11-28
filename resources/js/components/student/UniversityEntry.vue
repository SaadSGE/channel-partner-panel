<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { watch } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const commonFunctionStore = commonFunction();

const props = defineProps({
  universityEntry: {
    type: Array,
    required: true,
    default: () => [{
      id: null,
      country_id: '',
      intake_id: '',
      course_type: '',
      university_id: '',
      course_id: '',
      // Additional properties for UI state
      intakes: [],
      courseTypes: [],
      universities: [],
      courses: []
    }]
  },
  isEdit: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['updateUniversityEntry']);

// Watch for changes and emit updates
watch(() => props.universityEntry, (newValue) => {
  emit('updateUniversityEntry', newValue);
}, { deep: true });

const onCountryChange = async (index) => {
  const entry = props.universityEntry[index];
  // Reset dependent fields
  entry.intake_id = null;
  entry.course_type = null;
  entry.university_id = null;
  entry.course_id = null;

  // Use data from props instead of fetching
  entry.intakes = entry.country.intakes || [];
  emit('updateUniversityEntry', props.universityEntry);
};

const onIntakeChange = async (index) => {
  const entry = props.universityEntry[index];
  // Reset dependent fields
  entry.course_type = null;
  entry.university_id = null;
  entry.course_id = null;

  // Use data from props instead of fetching
  entry.courseTypes = entry.intake.courseTypes || [];
  emit('updateUniversityEntry', props.universityEntry);
};

const onCourseTypeChange = async (index) => {
  const entry = props.universityEntry[index];
  // Reset dependent fields
  entry.university_id = null;
  entry.course_id = null;

  // Use data from props instead of fetching
  entry.universities = entry.courseType.universities || [];
  emit('updateUniversityEntry', props.universityEntry);
};

const onUniversityChange = async (index) => {
  const entry = props.universityEntry[index];
  entry.course_id = null;

  // Use data from props instead of fetching
  entry.courses = entry.university.courses || [];
  emit('updateUniversityEntry', props.universityEntry);
};

const addInterestedUniversity = () => {
  const lastEntry = props.universityEntry[props.universityEntry.length - 1];

  if (!lastEntry.country_id ||
    !lastEntry.intake_id ||
    !lastEntry.course_type ||
    !lastEntry.university_id ||
    !lastEntry.course_id) {
    toast("Please fill all fields before adding a new entry", {
      type: "error",
      position: "top-right",
      theme: "colored",
    });
    return;
  }

  props.universityEntry.push({
    id: null,
    country_id: '',
    intake_id: null,
    course_type: null,
    university_id: null,
    course_id: null,
    intakes: [],
    courseTypes: [],
    universities: [],
    courses: []
  });
  emit('updateUniversityEntry', props.universityEntry);
};

const removeInterestedUniversity = (index) => {
  if (index !== 0) {
    props.universityEntry.splice(index, 1);
    emit('updateUniversityEntry', props.universityEntry);
  }
};
</script>
<template>
  <VCard>
    <VCardText>
      <VCardTitle class="text-left padding-bottom">Interested University</VCardTitle>
      <p class="text-center padding-bottom">Add interested University, Intake, Course</p>
      <VRow v-for="(university, index) in props.universityEntry" :key="index">
        <VCol cols="12" md="2">
          <AppAutocomplete v-model="university.country_id" :items="commonFunctionStore.countries" item-title="name"
            item-value="id" label="Country to Apply" placeholder="Select Country"
            @update:modelValue="onCountryChange(index)" density="compact" class="small-dropdown" />
        </VCol>

        <VCol cols="12" md="2">
          <AppAutocomplete v-model="university.intake_id" :items="university.intakes" item-title="intake_name"
            item-value="intake_id" label="Intake" placeholder="Select Intake" :disabled="!university.country_id"
            @update:modelValue="onIntakeChange(index)" density="compact" class="small-dropdown" />
        </VCol>

        <VCol cols="12" md="2">
          <AppAutocomplete v-model="university.course_type" :items="university.courseTypes" item-title="name"
            item-value="id" label="Course Type" placeholder="Select Course Type" :disabled="!university.intake_id"
            @update:modelValue="onCourseTypeChange(index)" density="compact" class="small-dropdown" />
        </VCol>

        <VCol cols="12" md="2">
          <AppAutocomplete v-model="university.university_id" :items="university.universities"
            item-title="university_name" item-value="university_id" label="University" placeholder="Select University"
            :disabled="!university.course_type" @update:modelValue="onUniversityChange(index)" density="compact"
            class="small-dropdown" />
        </VCol>

        <VCol cols="12" md="3">
          <AppAutocomplete v-model="university.course_id" :items="university.courses" item-title="course_name"
            item-value="id" label="Course" placeholder="Select Course" :disabled="!university.university_id"
            density="compact" class="small-dropdown" />
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
