<script setup>
definePage({
  meta: {
    public: true
  },
})
import { commonFunction } from '@/@core/stores/commonFunction';
import { useFileStore } from "@/@core/stores/fileStore";
import { useApplicationStore } from '@/@core/stores/submitApplication';
import { useStudentStore } from '@/stores/studentStore';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const tempFileCount = ref(0);
const applicationStore = useApplicationStore();
const fileStore = useFileStore();
const files = ref([]);
const errorMessage = ref(null);
const studentStore = useStudentStore();
const commonFunctionStore = commonFunction();
const selectedStudent = ref(null);
const students = ref([]);
const router = useRouter();
files.value = fileStore.files;

// Watch for changes in selected student
watch(selectedStudent, (newValue) => {
  if (newValue) {
    console.log('Selected student:', newValue);
    // You can emit an event or update a store with the selected student data
  }
});
onMounted(async () => {
  students.value = await studentStore.search();
});

// Function to fetch students based on search query
const searchStudents = async (query) => {
  students.value = await studentStore.search(query);
};

const back = () => {
  router.push("/application/new")
};


const submitApplication = async () => {
  try {
    if (!selectedStudent.value) {
      errorMessage.value = "Please select a student before submitting the application.";
      return;
    }

    // Show confirmation dialog
    const result = await Swal.fire({
      title: 'Confirm Submission',
      text: "Are you sure you want to submit this application?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!'
    });

    // If user confirms, proceed with submission
    if (result.isConfirmed) {
      await applicationStore.submitApplication(
        null, // studentData (null because we're using an existing student)
        commonFunctionStore.selectedCourseId,
        commonFunctionStore.selectedIntakeId,
        commonFunctionStore.selectedUniversityId,
        commonFunctionStore.selectedCountryId,
        commonFunctionStore.selectedCourseDetailsId,
        fileStore.filePaths,
        selectedStudent.value // studentId
      );

      Swal.fire({
        icon: 'success',
        title: 'Application Successful',
        text: 'You have submitted the application successfully!',
        confirmButtonText: 'OK'
      });

      // Reset store values after successful submission
      commonFunctionStore.selectedCourseId = null;
      commonFunctionStore.selectedIntakeId = null;
      commonFunctionStore.selectedUniversityId = null;
      commonFunctionStore.selectedCountryId = null;
      commonFunctionStore.selectedCourseDetailsId = null;

      // Redirect to application page
      router.push({ name: "application" });
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Application Failed',
      text: error,
      confirmButtonText: 'OK'
    });
  }
}

const server = {
  process: (fieldName, file, metadata, load, error, progress, abort) => {
    tempFileCount.value += 1;
    fileStore
      .uploadFile(fieldName, file)
      .then((response) => load(response))
      .catch((err) => error(err));
  },
  revert: (uniqueFileId, load, error) => {
    tempFileCount.value -= 1;
    fileStore.removeFile(uniqueFileId);
    load();
  },
};

const removeFile = (fileId) => {
  fileStore.removeFile(fileId);
};

</script>
<template>

  <VCard class="mb-6">
    <VCardTitle>Select Existing Student</VCardTitle>
    <VCardText>
      <AppAutocomplete v-model="selectedStudent" :items="students" item-title="student_name_with_email" item-value="id"
        label="Search Existing Student" placeholder="Start typing to search...">
      </AppAutocomplete>
      <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
      <div class="d-flex justify-space-between mt-4">
        <VBtn color="secondary" @click="back()">Back</VBtn>
        <VBtn color="primary" @click="submitApplication">Next</VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
