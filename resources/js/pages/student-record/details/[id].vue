<script setup>

import { useStudentStore } from '@/@core/stores/studentStore';
import EducationHistory from '@/components/student/EducationHistory.vue';
import EmploymentHistory from '@/components/student/EmploymentHistory.vue';
import EnglishProficiency from '@/components/student/EnglishProficiency.vue';
import GeneralInformation from '@/components/student/GeneralInformation.vue';
import StudentDocuments from '@/components/student/StudentDocuments.vue';
import UniversityEntry from '@/components/student/UniversityEntry.vue';
definePage({
  meta: {
    action: 'read',
    subject: 'dashboard',
  },
});
const studentStore = useStudentStore();
const currentTab = ref("general-info");
const isLoading = ref(false);
const route = useRoute();
const id = route.params.id;

// Form data structure matching the one in info.vue
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
  }],
  documents: []
});

const router = useRouter();

const goBack = () => {
  router.back();
};

onMounted(async () => {
  await getStudentDetails(id);
});

const getStudentDetails = async (id) => {
  isLoading.value = true;
  try {
    await studentStore.getStudentDetails(id);


    // Map store data to formData structure
    formData.value = {
      generalInfo: {
        first_name: studentStore.studentInfo.generalInfo.student_first_name,
        last_name: studentStore.studentInfo.generalInfo.student_last_name,
        email: studentStore.studentInfo.generalInfo.student_email,
        mobile: studentStore.studentInfo.generalInfo.student_whatsapp_number,
        date_of_birth: studentStore.studentInfo.generalInfo.date_of_birth,
        gender: studentStore.studentInfo.generalInfo.gender,
        passport_number: studentStore.studentInfo.generalInfo.student_passport_no,
        address: studentStore.studentInfo.generalInfo.student_address,
        city: studentStore.studentInfo.generalInfo.student_city,
        country: studentStore.studentInfo.generalInfo.student_country,
        visa_refusal: studentStore.studentInfo.generalInfo.visa_refusal
      },
      universityEntry: studentStore.studentInfo.interestedUniversity,
      educationalHistory: studentStore.studentInfo.educationalHistory,
      englishProficiency: studentStore.studentInfo.englishProficiency,
      employmentHistory: studentStore.studentInfo.employmentHistory,
      documents: studentStore.studentInfo.documentPaths
    };
  } catch (error) {
    console.error('Error fetching student details:', error);
  } finally {
    isLoading.value = false;
  }
};

// Handler functions (read-only versions)
const handleGeneralInfoUpdate = (data) => {
  // Read-only implementation
  console.log('General info update attempted:', data);
};

const handleUniversityEntryUpdate = (data) => {
  // Read-only implementation
  console.log('University entry update attempted:', data);
};

const handleEducationalHistoryUpdate = (data) => {
  // Read-only implementation
  console.log('Educational history update attempted:', data);
};

const handleEnglishProficiencyUpdate = (data) => {
  // Read-only implementation
  console.log('English proficiency update attempted:', data);
};

const handleEmploymentHistoryUpdate = (data) => {
  // Read-only implementation
  console.log('Employment history update attempted:', data);
};
</script>

<template>
  <VCard>
    <VCardTitle class="d-flex justify-space-between align-center">
      <div>Student Details</div>
      <VBtn color="primary" @click="goBack">
        <VIcon icon="tabler-arrow-left" class="mr-2" />
        Back
      </VBtn>
    </VCardTitle>

    <VTabs v-model="currentTab">
      <VTab value="general-info">
        General Info
      </VTab>
      <VTab value="interested-university">
        Interested University
      </VTab>
      <VTab value="educational-history">
        Educational History
      </VTab>
      <VTab value="english-proficiency">
        English Proficiency
      </VTab>
      <VTab value="employment-history">
        Employment History
      </VTab>
      <VTab value="documents">
        Documents
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem value="general-info">
          <GeneralInformation :general-info="formData.generalInfo" @updateGeneralInfo="handleGeneralInfoUpdate"
            :is-edit="true" :readonly="true" />
        </VWindowItem>

        <VWindowItem value="interested-university">
          <UniversityEntry :university-entry="formData.universityEntry"
            @updateUniversityEntry="handleUniversityEntryUpdate" :readonly="true" :is-edit="true" />
        </VWindowItem>

        <VWindowItem value="educational-history">
          <EducationHistory :educational-history="formData.educationalHistory"
            @updateEducationalHistory="handleEducationalHistoryUpdate" :readonly="true" :is-edit="true" />
        </VWindowItem>

        <VWindowItem value="english-proficiency">
          <EnglishProficiency :english-proficiency="formData.englishProficiency"
            @updateEnglishProficiency="handleEnglishProficiencyUpdate" :readonly="true" :is-edit="true" />
        </VWindowItem>

        <VWindowItem value="employment-history">
          <EmploymentHistory :employment-history="formData.employmentHistory"
            @updateEmploymentHistory="handleEmploymentHistoryUpdate" :readonly="true" :is-edit="true" />
        </VWindowItem>

        <VWindowItem value="documents">
          <StudentDocuments :documents="formData.documents" :is-edit="true" />
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>

<style>
.t-padding {
  padding-block-end: 180px;
}
</style>
