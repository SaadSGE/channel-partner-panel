<template>
  <VCard class="mx-auto">
    <VCardTitle>Please upload only color scan copy files</VCardTitle>
    <VCardText>
      <file-pond
        ref="pond"
        name="test"
        :allow-multiple="true"
        allowRemove="true"
        :files="files"
        :server="server"
        label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
      />
      <VCard
        v-for="(document, index) in currentDocuments"
        :key="index"
        class="mb-2"
      >
        <VCardText class="d-flex justify-space-between align-center">
          <div>
            <VIcon
              size="28"
              icon="tabler-file-type-pdf"
              v-if="document.file_type == 'pdf'"
            />
            <VIcon
              size="28"
              icon="tabler-file-type-png"
              v-if="document.file_type == 'image'"
            />
            <VIcon
              size="26"
              color="red"
              icon="tabler-file-type-doc"
              v-if="document.file_type == 'document'"
            />
            <a :href="document.path" target="_blank">{{
              document.file_name
            }}</a>
          </div>
          <VBtn icon :href="document.path" target="_blank" download>
            <VIcon size="24" icon="tabler-download" />
          </VBtn>
        </VCardText>
      </VCard>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <!-- <div class="d-flex justify-end mt-4">
        <VBtn color="primary" @click="next()">Next</VBtn>
      </div> -->
    </VCardText>
  </VCard>
</template>

<script lang="ts" setup>
import { useFileStore } from "@/@core/stores/fileStore";
import axios from "axios";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";
import "filepond/dist/filepond.min.css";
import { ref } from "vue";
import vueFilePond from "vue-filepond";

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginPdfPreview
);

// Define props
const props = defineProps({
  existingDocuments: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits([
  "update:uploadDocumentShow",
  "update:studentFormShow",
]);
const errorMessage = ref<string | null>(null);

const currentDocuments = ref(props.existingDocuments);
console.log(currentDocuments.value);
const files = ref([]);
const fileStore = useFileStore();

const test = ref([]);

const getUploadedFile = async (url, fileName, arr) => {
  try {
    const response = await axios.get(url, {
      responseType: "blob",
    });
    const blob = response.data;
    let mimeType = "application/octet-stream";

    if (fileName.endsWith(".pdf")) {
      mimeType = "application/pdf";
    } else if (fileName.endsWith(".doc")) {
      mimeType = "application/msword";
    } else if (fileName.endsWith(".docx")) {
      mimeType =
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    }

    const file = new File([blob], fileName, { type: mimeType });
    arr.push(file);
  } catch (error) {
    console.error("Error fetching the file:", error);
  }
};



const server = {
  process: (fieldName, file, metadata, load, error, progress, abort) => {
    fileStore
      .uploadFile(fieldName, file)
      .then((response) => load(response))
      .catch((err) => error(err));
  },
  revert: (uniqueFileId, load, error) => {
    fileStore.removeFile(uniqueFileId);
    load();
  },
};

const removeFile = (fileId) => {
  fileStore.removeFile(fileId);
};

// Watch existingDocuments prop to initialize files
// watch(() => props.existingDocuments, (newDocs) => {
//   files.value = newDocs;
// }, { immediate: true });
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
