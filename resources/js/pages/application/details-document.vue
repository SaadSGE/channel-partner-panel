<template>
  <VCard class="mx-auto">
    <VCardTitle>Please upload only color scan copy files</VCardTitle>

    <div class="d-flex justify-end mt-2" v-if="tempFileCount > 0">
      <VBtn color="primary" @click="update()">Update New Document</VBtn>
    </div>

    <VCardText>
      <file-pond
        ref="pond"
        name="student_document"
        :allow-multiple="true"
        allowRemove="true"
        :files="files"
        :server="server"
        label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
      />

      <!-- Wrap the Download All button inside a div aligned to the right -->
      <div class="d-flex justify-end mt-2 mb-2">
        <VBtn color="primary" @click="downloadAllFiles">
          <VIcon size="24" icon="tabler-download" />
          Download All
        </VBtn>
      </div>

      <VCard v-for="(document, index) in currentDocuments" :key="index" class="mb-2">
        <VCardText class="d-flex justify-space-between align-center">
          <div>
            <VIcon size="28" icon="tabler-file-type-pdf" v-if="document.file_type == 'pdf'" />
            <VIcon size="28" icon="tabler-file-type-png" v-if="document.file_type == 'image'" />
            <VIcon size="26" color="red" icon="tabler-file-type-doc" v-if="document.file_type == 'document'" />
            <a :href="document.path" target="_blank">{{ document.file_name }}</a>
          </div>
          <VBtn icon @click="downloadFile(document.path)">
            <VIcon size="24" icon="tabler-eye" />
          </VBtn>
        </VCardText>
      </VCard>
    </VCardText>
  </VCard>
</template>


<script lang="ts" setup>
import { useFileStore } from "@/@core/stores/fileStore";
import { useApplicationStore } from "@/@core/stores/submitApplication";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";
import "filepond/dist/filepond.min.css";
import Swal from 'sweetalert2';
import { ref } from "vue";
import vueFilePond from "vue-filepond";
import { useRoute } from "vue-router";
const route = useRoute();
const applicationStore = useApplicationStore();
const fileStore = useFileStore();
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginPdfPreview
);

const downloadAllFiles = () => {
  if (props.zipLink) {
    const link = document.createElement('a');
    link.href = props.zipLink;
    link.target = '_blank';
    link.download = 'documents.zip';  // Optional: Set the file name for the downloaded ZIP
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Download Failed',
      text: 'No ZIP file available for download.',
    });
  }
};

const downloadFile = (fileUrl: string) => {
  const link = document.createElement('a');
      link.href = fileUrl;
      link.target = '_blank';
      link.download = 'test';

      // Simulate a click on the element <a>
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
};


// Define props
const props = defineProps({
  existingDocuments: {
    type: Array,
    default: () => [],
  },
  zipLink: {
    type: String,
    default: ''
  }
});


const emit = defineEmits(["update:uploadDocumentShow", "update:studentFormShow"]);
const errorMessage = ref<string | null>(null);
const currentDocuments = ref(props.existingDocuments);
const files = ref([]);
const filePaths = fileStore.filePaths;
const applicationId = route.params.id;
const tempFileCount = ref(0);

const update = () => {

 applicationStore.updateApplicationsFile(applicationId, fileStore.filePaths);
 Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'New Document Added Successfully',
      confirmButtonText: 'OK'
    });
    tempFileCount.value =0
};
 fileStore.resetFiles()

const next = () => {
  if (files.value.length === 0) {
    errorMessage.value = "Please upload at least one file.";
  } else {
    errorMessage.value = null;
    emit("update:uploadDocumentShow", false);
    emit("update:studentFormShow", true);
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
</script>

<style scoped>
.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
}

.file-item i {
  margin-right: 0.5rem;
}

.delete-btn {
  margin-left: 1rem;
}

.progress {
  width: 100%;
}

.v-btn--icon {
  min-width: unset;
  padding: 0;
}

.error-message {
  color: red;
  margin-top: 1rem;
}
</style>
