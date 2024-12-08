<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between align-center">
        <VCardTitle class="text-left padding-bottom">Interested University</VCardTitle>
        <VBtn v-if="props.isEdit" :color="isEditing ? 'success' : 'primary'" @click="toggleEdit">
          {{ isEditing ? 'Save Changes' : 'Edit' }}
        </VBtn>
      </div>

      <!-- Table View -->
      <div v-if="props.isEdit && !isEditing">
        <VRow v-for="(university, index) in props.universityEntry" :key="index">
          <VCol cols="12" md="6">
            <VTable density="compact" class="info-table custom-table">
              <tbody>
                <tr>
                  <td class="font-weight-bold">Country</td>
                  <td>{{ getCountryName(university.country_id) || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Intake</td>
                  <td>{{ getIntakeName(university.intake_id, university.intakes) || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Course Type</td>
                  <td>{{ getCourseTypeName(university.course_type, university.courseTypes) || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">University</td>
                  <td>{{ getUniversityName(university.university_id, university.universities) || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Course</td>
                  <td>{{ getCourseName(university.course_id, university.courses) || '-' }}</td>
                </tr>

              </tbody>
            </VTable>
          </VCol>


        </VRow>
      </div>

      <!-- Form View -->
      <VRow v-else v-for="(university, index) in props.universityEntry" :key="index">
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
          <template v-if="!props.isEdit || isEditing">
            <VBtn v-if="index !== 0" icon="tabler-x" color="error" @click="removeInterestedUniversity(index)"
              class="me-2" size="small" />
            <VBtn icon="tabler-plus" color="primary" @click="addInterestedUniversity" size="small" />
          </template>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const commonFunctionStore = commonFunction();

const props = defineProps({
  universityEntry: {
    type: Array,
    required: true,
    default: () => [{
      country_id: '',
      intake_id: '',
      course_type: '',
      university_id: '',
      course_id: '',
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

const isEditing = ref(false);

const toggleEdit = () => {
  if (isEditing.value) {
    emit('saveChanges', props.universityEntry);
  }
  isEditing.value = !isEditing.value;
};

const emit = defineEmits(['updateUniversityEntry', 'saveChanges']);

onMounted(async () => {
  commonFunctionStore.getUniqueCountries();
});

// Watch for changes and emit updates
watch(() => props.universityEntry, (newValue) => {
  if (!newValue || newValue.length === 0) {
    props.universityEntry.push({
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
  }
  emit('updateUniversityEntry', newValue);
}, { deep: true, immediate: true });

const onCountryChange = async (index) => {
  const entry = props.universityEntry[index];
  entry.intake_id = null;
  entry.course_type = null;
  entry.university_id = null;
  entry.course_id = null;
  // Fetch new intakes
  entry.intakes = await commonFunctionStore.getIntakesByCountry(entry.country_id);
  emit('updateUniversityEntry', props.universityEntry);
};

const onIntakeChange = async (index) => {
  const entry = props.universityEntry[index];
  // Reset dependent fields
  entry.course_type = null;
  entry.university_id = null;
  entry.course_id = null;

  // Fetch course types
  entry.courseTypes = await commonFunctionStore.getCourseTypesByCountryIntake(
    entry.country_id,
    entry.intake_id
  );
  console.log(entry.courseTypes);
  emit('updateUniversityEntry', props.universityEntry);
};

const onCourseTypeChange = async (index) => {
  const entry = props.universityEntry[index];
  // Reset dependent fields
  entry.university_id = null;
  entry.course_id = null;

  // Fetch universities
  entry.universities = await commonFunctionStore.getUniversitiesByCountryIntakeCourseType(
    entry.country_id,
    entry.intake_id,
    entry.course_type
  );
  emit('updateUniversityEntry', props.universityEntry);
};

const onUniversityChange = async (index) => {
  const entry = props.universityEntry[index];
  entry.course_id = null;

  // Fetch courses
  entry.courses = await commonFunctionStore.getCourseDetails(
    entry.intake_id,
    entry.university_id,
    entry.course_type
  );
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

// Add these helper methods to get display names
const getCountryName = (countryId) => {
  const country = commonFunctionStore.countries.find(c => c.id === countryId);
  return country ? country.name : null;
};

const getIntakeName = (intakeId, intakes) => {
  const intake = intakes.find(i => i.intake_id === intakeId);
  return intake ? intake.intake_name : null;
};

const getCourseTypeName = (courseTypeId, courseTypes) => {
  if (!courseTypes || !courseTypeId) return null;
  const courseType = courseTypes.find(ct => ct.id === courseTypeId);
  console.log('CourseType:', courseTypeId, courseTypes, courseType); // For debugging
  return courseType ? courseType.name : null;
};

const getUniversityName = (universityId, universities) => {
  const university = universities.find(u => u.university_id === universityId);
  return university ? university.university_name : null;
};

const getCourseName = (courseId, courses) => {
  const course = courses.find(c => c.id === courseId);
  return course ? course.course_name : null;
};
</script>

<style lang="scss" scoped>
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

.info-table {
  overflow: hidden;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  background: transparent !important;
  inline-size: 100%;
  margin-block-end: 16px;
}

.info-table td {
  border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  padding-block: 12px !important;
  padding-inline: 16px !important;
  text-align: start;
}

.info-table td:first-child {
  background-color: rgba(var(--v-theme-surface), 0.04);
  inline-size: 140px;
}

.info-table tr:last-child td {
  border-block-end: none;
}

/* Add spacing between multiple university entries */
.v-row+.v-row {
  margin-block-start: 20px;
}

/* Make tables responsive */
@media (max-width: 960px) {
  .v-col-md-6:first-child {
    margin-block-end: 1rem;
  }
}

/* Adjust font size for smaller screens */
@media (max-width: 1400px) {
  .info-table td {
    font-size: 0.8rem;
    padding-block: 8px !important;
    padding-inline: 12px !important;
  }
}

.padding-bottom {
  padding-block-end: 20px;
}

.custom-table {
  position: relative;
  z-index: 1;
  background: transparent !important;
  box-shadow: 0 2px 6px 0 rgba(var(--v-shadow-key-umbra-color), 0.14);

  :deep(td) {
    background-color: rgb(var(--v-theme-surface));
    border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    padding-block: 12px !important;
    padding-inline: 16px !important;
  }

  :deep(tr:last-child td) {
    border-block-end: none;
  }

  :deep(td:first-child) {
    background-color: rgba(var(--v-theme-surface), 0.04);
    font-weight: 600;
    inline-size: 140px;
  }
}

.v-card {
  position: relative;
  z-index: 0;
  border-radius: 6px;
  background: rgb(var(--v-theme-surface)) !important;
  box-shadow: 0 4px 18px -4px rgba(var(--v-shadow-key-umbra-color), 0.1);

  :deep(.v-card-text) {
    position: relative;
    z-index: 1;
    padding-block: 16px;
    padding-inline: 24px;
  }

  &::before {
    position: absolute;
    z-index: 0;
    border-radius: inherit;
    background:
      linear-gradient(180deg,
        rgba(var(--v-theme-surface), 0.05) 0%,
        rgba(var(--v-theme-surface), 0.02) 100%);
    content: "";
    inset: 0;
  }
}

.info-table {
  overflow: hidden;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 24px -4px rgba(var(--v-shadow-key-umbra-color), 0.2);
    transform: translateY(-2px);
  }
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .custom-table :deep(td) {
    font-size: 0.8rem;
    padding-block: 8px !important;
    padding-inline: 12px !important;
  }

  .v-card {
    margin-inline: 8px;
  }
}
</style>
