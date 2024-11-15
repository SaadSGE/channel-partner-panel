<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { useFileStore } from "@/@core/stores/fileStore";
import { useStudentStore } from '@/@core/stores/studentStore';
import EducationHistory from '@/components/student/EducationHistory.vue';
import EmploymentHistory from '@/components/student/EmploymentHistory.vue';
import EnglishProficiency from '@/components/student/EnglishProficiency.vue';
import GeneralInformation from '@/components/student/GeneralInformation.vue';
import UniversityEntry from '@/components/student/UniversityEntry.vue';
import { onMounted, ref } from 'vue';

definePage({
  meta: {
    public: true
  }
})

const fileStore = useFileStore();
const refForm = ref(null);
const commonFunctionStore = commonFunction();
const isLoading = ref(true);
const studentStore = useStudentStore();

// Store all collected data
const formData = ref({
  generalInfo: {
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    date_of_birth: '',
    gender: '',
    passport_number: '',
    address: '',
    city: '',
    country: '',
    visa_refusal: 'no'
  },
  universityEntry: [{
    country_id: '',
    intake_id: '',
    course_type: '',
    university_id: '',
    course_id: ''
  }],
  educationalHistory: [{
    degree: '',
    institution: '',
    passingYear: '',
    result: ''
  }],
  englishProficiency: [{
    proficiencyTitle: '',
    overallScore: '',
    reading: '',
    writing: '',
    speaking: '',
    listening: ''
  }],
  employmentHistory: [{
    company_name: '',
    designation: '',
    year: ''
  }]
});

onMounted(async () => {
  await commonFunctionStore.getUniqueCountries();
  isLoading.value = false;
});

const emit = defineEmits(['back'])

const handleBack = () => {
  emit('back')
}

// Update methods to store data in formData
const handleGeneralInfoUpdate = (data) => {
  formData.value.generalInfo = data;
};

const handleUniversityEntryUpdate = (data) => {
  formData.value.universityEntry = data;
};

const handleEducationalHistoryUpdate = (data) => {
  formData.value.educationalHistory = data;
};

const handleEnglishProficiencyUpdate = (data) => {
  formData.value.englishProficiency = data;
};

const handleEmploymentHistoryUpdate = (data) => {
  formData.value.employmentHistory = data;
};

// Method to handle form submission
const handleSubmit = async () => {
  try {
    const response = await studentStore.storeStudent({
      generalInfo: formData.value.generalInfo,
      universityEntry: formData.value.universityEntry,
      educationalHistory: formData.value.educationalHistory,
      englishProficiency: formData.value.englishProficiency,
      employmentHistory: formData.value.employmentHistory,
      documentPaths: fileStore.filePaths // Get document paths from fileStore
    });

    // Handle success (e.g., show notification, redirect)
    console.log('Student created successfully:', response);
  } catch (error) {
    // Handle error (e.g., show error message)
    console.error('Failed to create student:', error);
  }
};
</script>

<template>
  <div>
    <VBtn color="secondary" class="mb-4" @click="handleBack">
      <VIcon start icon="tabler-arrow-left" />
      Back
    </VBtn>

    <VCard>
      <VCardText>
        <VCardTitle class="text-center">Student Information</VCardTitle>
        <VForm ref="refForm" class="form-padding">
          <GeneralInformation class="mt-3" :general-info="formData.generalInfo"
            @updateGeneralInfo="handleGeneralInfoUpdate" />
          <UniversityEntry class="mt-3" :university-entry="formData.universityEntry"
            @updateUniversityEntry="handleUniversityEntryUpdate" />
          <EducationHistory class="mt-3" :educational-history="formData.educationalHistory"
            @updateEducationalHistory="handleEducationalHistoryUpdate" />
          <EnglishProficiency class="mt-3" :english-proficiency="formData.englishProficiency"
            @updateEnglishProficiency="handleEnglishProficiencyUpdate" />
          <EmploymentHistory class="mt-3" :employment-history="formData.employmentHistory"
            @updateEmploymentHistory="handleEmploymentHistoryUpdate" />

          <div class="submit-btn-flex">
            <VBtn color="primary" @click="handleSubmit">Submit</VBtn>
          </div>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style>
.submit-btn-flex {
  display: flex;
  justify-content: end;
  margin-block-start: 18px;
  margin-inline-end: 18px;
}

.card-padding {
  padding-block-end: 180px;
}
</style>
