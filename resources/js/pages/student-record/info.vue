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
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
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
    overallScore: null,
    reading: null,
    writing: null,
    speaking: null,
    listening: null
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
const router = useRouter();
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
  const isValid = await refForm.value?.validate()

  if (!isValid.valid) {
    toast("Please fill all necessary fields before submitting", {
      type: "error",
      position: "top-right",
      theme: "colored",
    });
    return
  }


  try {
    const response = await studentStore.storeStudent({
      generalInfo: formData.value.generalInfo,
      universityEntry: formData.value.universityEntry,
      educationalHistory: formData.value.educationalHistory,
      englishProficiency: formData.value.englishProficiency,
      employmentHistory: formData.value.employmentHistory,
      documentPaths: fileStore.filePaths
    });

    // Show success notification
    toast("Student information saved successfully", {
      type: "success",
      position: "top-right",
      theme: "colored",
    });

    router.push({ name: 'student-record-all-record' })
  } catch (error) {
    toast("Failed to save student information", {
      type: "error",
      position: "top-right",
      theme: "colored",
    });
    console.error('Failed to create student:', error);
  }
};

// Add this validation function
const validateFormData = () => {
  // Validate General Info
  const gi = formData.value.generalInfo
  if (!gi.first_name || !gi.last_name || !gi.email || !gi.mobile) {
    commonFunctionStore.showErrorNotification('Please fill all required fields in General Information')
    return false
  }

  // Validate email format
  if (!validationRules.email(gi.email)) {
    commonFunctionStore.showErrorNotification('Please enter a valid email address')
    return false
  }

  // Validate phone format
  if (!validationRules.phone(gi.mobile)) {
    commonFunctionStore.showErrorNotification('Please enter a valid phone number')
    return false
  }

  // Validate University Entry
  if (formData.value.universityEntry.length === 0 ||
    !formData.value.universityEntry[0].country_id ||
    !formData.value.universityEntry[0].university_id) {
    commonFunctionStore.showErrorNotification('Please fill required university entry information')
    return false
  }

  // Validate Educational History
  if (formData.value.educationalHistory.length === 0 ||
    !formData.value.educationalHistory[0].degree ||
    !formData.value.educationalHistory[0].institution) {
    commonFunctionStore.showErrorNotification('Please fill required educational history information')
    return false
  }

  return true
}
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
