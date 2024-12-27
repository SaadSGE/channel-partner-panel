<template>
  <!-- <VCard class="mb-6">
        <VCardTitle>Select Existing Student</VCardTitle>
        <VCardText>
            <AppAutocomplete v-model="selectedStudent" :items="students" item-title="student_name_with_email"
                item-value="id" label="Search Existing Student" placeholder="Start typing to search...">
            </AppAutocomplete>
            <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
            <div class="d-flex justify-end mt-4">
                <VBtn color="primary" @click="submitApplication">Next</VBtn>
            </div>
        </VCardText>
    </VCard> -->

  <!-- <div class="d-flex align-center my-6">
    <VDivider></VDivider>
    <span class="mx-4">OR</span>
    <VDivider></VDivider>
  </div> -->


  <VCard>
    <VCardTitle>Please upload only color scan copy files for new student</VCardTitle>
    <VCardText>
      <file-pond ref="pond" name="student_document" :allow-multiple="true" allowRemove="true" :files="files"
        :server="server" label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" />
      <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
      <div class="d-flex justify-end mt-4">
        <VBtn color="primary" @click="next()">Next</VBtn>
      </div>
    </VCardText>
  </VCard>
</template>

<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { useFileStore } from "@/@core/stores/fileStore";
import { useStudentStore } from '@/@core/stores/studentStore';
import { useApplicationStore } from "@/@core/stores/submitApplication";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";
import "filepond/dist/filepond.min.css";
import Swal from "sweetalert2";
import { ref, watch } from 'vue';
import vueFilePond from "vue-filepond";
import { useRouter } from 'vue-router';
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginPdfPreview
);
const commonFunctionStore = commonFunction();
const emit = defineEmits(['update:uploadDocumentShow', 'update:studentFormShow']);
const errorMessage = ref(null);
const files = ref([]);

const fileStore = useFileStore();
const applicationStore = useApplicationStore();
const studentStore = useStudentStore();
const router = useRouter();
files.value = fileStore.files;

// New refs for student search
const selectedStudent = ref(null);
const students = ref([]);
const tempFileCount = ref(0);

// Function to fetch students based on search query
const searchStudents = async (query) => {
  students.value = await studentStore.search(query);
};

// Watch for changes in selected student
watch(selectedStudent, (newValue) => {
  if (newValue) {
    console.log('Selected student:', newValue);
    // You can emit an event or update a store with the selected student data
  }
});

const nextStudent = () => {
  if (!selectedStudent.value) {
    errorMessage.value = "Please select a student before proceeding.";
  } else {
    errorMessage.value = null;
    // Proceed to the next step or perform any other action
    console.log('Selected student:', selectedStudent.value);
    // You may want to emit an event or update a store here
  }
};

const next = () => {
  if (files.value.length === 0) {
    errorMessage.value = "Please upload at least one file.";
  } else {
    errorMessage.value = null;
    emit('update:uploadDocumentShow', false);
    emit('update:studentFormShow', true);
  }
};

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

//on mounted fetch all students
onMounted(async () => {
  students.value = await studentStore.search();
});
const removeFile = (fileId) => {
  fileStore.removeFile(fileId);
};

// Assuming you have a list with items
const listItems = document.querySelectorAll('.student-list-item');

listItems.forEach(item => {
  item.addEventListener('click', function () {
    // Handle item selection
    console.log('Item selected:', this.textContent);
    // Add your selection logic here
  });
});
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
</script>

<style scoped>
.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-block-end: 1px solid #ccc;
  padding-block: 0.5rem;
  padding-inline: 0;
}

.file-item i {
  margin-inline-end: 0.5rem;
}

.delete-btn {
  margin-inline-start: 1rem;
}

.progress {
  inline-size: 100%;
}

.v-btn--icon {
  padding: 0;
  min-inline-size: unset;
}

.error-message {
  color: red;
  margin-block-start: 1rem;
}

.d-flex.align-center {
  text-align: center;
}

.d-flex.align-center span {
  color: rgba(0, 0, 0, 60%);
  font-weight: bold;
}
</style>
