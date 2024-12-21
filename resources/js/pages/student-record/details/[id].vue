<script setup>

import { useStudentStore } from '@/@core/stores/studentStore';
import EducationHistory from '@/components/student/EducationHistory.vue';
import EmploymentHistory from '@/components/student/EmploymentHistory.vue';
import EnglishProficiency from '@/components/student/EnglishProficiency.vue';
import GeneralInformation from '@/components/student/GeneralInformation.vue';
import LeadInfo from '@/components/student/LeadInfo.vue';
import StudentDocuments from '@/components/student/StudentDocuments.vue';
import UniversityEntry from '@/components/student/UniversityEntry.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
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
  documents: [],
  lead: {
    email: '',
    name: '',
    phone: '',
    interested_course: '',
    interested_country: '',
    Ielts_or_english_test: '',
    current_educational_qualifications: ''
  }
});

// Assuming lead_id is part of the route params or fetched from the storeonst lead_id = ref(null); // Replace with actual logic to get lead_id

const hasLeadInfo = computed(() => studentStore.studentInfo.lead !== null);

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
      documents: studentStore.studentInfo.documentPaths,
      leadInfo: {
        email: studentStore.studentInfo.lead.email,
        name: studentStore.studentInfo.lead.name,
        phone: studentStore.studentInfo.lead.phone,
        interested_course: studentStore.studentInfo.lead.interested_course,
        interested_country: studentStore.studentInfo.lead.interested_country,
        Ielts_or_english_test: studentStore.studentInfo.lead.Ielts_or_english_test,
        current_educational_qualifications: studentStore.studentInfo.lead.current_educational_qualifications
      }
    };
  } catch (error) {
    console.error('Error fetching student details:', error);
  } finally {
    isLoading.value = false;
  }
};

// Handler functions (read-only versions)
const handleGeneralInfoUpdate = async (data) => {
  try {
    await studentStore.updateGeneralInfo(id, data);
  } catch (error) {
    console.error('Error updating general info:', error);
  }
};

const handleUniversityEntryUpdate = async (data) => {

  try {
    isLoading.value = true;
    await studentStore.updateInterestedUniversity(id, data);

    toast.success('University entry updated successfully', {
      position: 'top-right',
      theme: 'colored',
    });
  } catch (error) {
    console.error('Error updating university entry:', error);
    // Show error message
    toast.error('Failed to update university entry', {
      position: 'top-right',
      theme: 'colored',
    });
  } finally {
    isLoading.value = false;
  }
};

const handleEducationalHistoryUpdate = async (data) => {
  try {
    isLoading.value = true;
    await studentStore.updateEducationalHistory(id, data);
    toast.success('Educational history updated successfully', {
      position: 'top-right',
      theme: 'colored',
    });
  } catch (error) {
    console.error('Error updating educational history:', error);
    toast.error('Failed to update educational history', {
      position: 'top-right',
      theme: 'colored',
    });
  } finally {
    isLoading.value = false;
  }
};

const handleEnglishProficiencyUpdate = async (data) => {
  try {
    isLoading.value = true;
    await studentStore.updateEnglishProficiency(id, data);
    toast.success('English proficiency updated successfully', {
      position: 'top-right',
      theme: 'colored',
    });
  } catch (error) {
    console.error('Error updating English proficiency:', error);
    toast.error('Failed to update English proficiency', {
      position: 'top-right',
      theme: 'colored',
    });
  } finally {
    isLoading.value = false;
  }
};

const handleEmploymentHistoryUpdate = async (data) => {
  try {
    isLoading.value = true;
    await studentStore.updateEmploymentHistory(id, data);
    toast.success('Employment history updated successfully', {
      position: 'top-right',
      theme: 'colored',
    });
  } catch (error) {
    console.error('Error updating employment history:', error);
    toast.error('Failed to update employment history', {
      position: 'top-right',
      theme: 'colored',
    });
  } finally {
    isLoading.value = false;
  }
};

const handleDocumentsUpdate = async (data) => {
  try {
    isLoading.value = true;
    formData.value.documents = data;
    toast.success('Documents updated successfully', {
      position: 'top-right',
      theme: 'colored',
    });
  } catch (error) {
    console.error('Error updating documents:', error);
    toast.error('Failed to update documents', {
      position: 'top-right',
      theme: 'colored',
    });
  } finally {
    isLoading.value = false;
  }
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
      <VTab value="documents">
        Documents
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
      <VTab v-if="hasLeadInfo" value="lead-info">
        Lead Information
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
          <StudentDocuments :documents="formData.documents" :is-edit="true" @update:documents="handleDocumentsUpdate" />
        </VWindowItem>

        <VWindowItem v-if="hasLeadInfo" value="lead-info">
          <LeadInfo :lead="studentStore.studentInfo.lead" />
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
