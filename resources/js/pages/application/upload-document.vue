<template>
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
import { useFileStore } from "@/@core/stores/fileStore";
import { useApplicationStore } from "@/@core/stores/submitApplication";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";
import "filepond/dist/filepond.min.css";
import { ref } from 'vue';
import vueFilePond from "vue-filepond";
import { useRouter } from 'vue-router';


const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginPdfPreview
);

const emit = defineEmits(['update:uploadDocumentShow', 'update:studentFormShow']);
const errorMessage = ref(null);
const files = ref([]);

const fileStore = useFileStore();
const applicationStore = useApplicationStore();

const router = useRouter();
files.value = fileStore.files;


const tempFileCount = ref(0);



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
