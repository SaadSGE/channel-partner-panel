<template>
  <VCard class="mx-auto" >
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
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div class="d-flex justify-end mt-4">

          <VBtn color="primary" @click="next()">Next</VBtn>

      </div>
    </VCardText>
  </VCard>
</template>

<script lang="ts" setup>

import { useFileStore } from "@/@core/stores/fileStore";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";
import "filepond/dist/filepond.min.css";
import { ref } from 'vue';
import vueFilePond from "vue-filepond";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginPdfPreview
);
const emit = defineEmits(['update:uploadDocumentShow', 'update:studentFormShow']);
const errorMessage = ref<string | null>(null);
const next = () => {
  if (files.value.length === 0) {
    errorMessage.value = "Please upload at least one file.";
  } else {
    errorMessage.value = null;
    emit('update:uploadDocumentShow', false);
    emit('update:studentFormShow', true);
  }
};

const fileStore = useFileStore();
const files = ref(fileStore.files);
console.log(files.value)

const server = {
  process: (fieldName, file, metadata, load, error, progress, abort) => {
    console.log(file)
    fileStore.uploadFile(fieldName, file)
      .then(response => load(response))
      .catch(err => error(err));
  },
  revert: (uniqueFileId, load, error) => {

    fileStore.removeFile(uniqueFileId);
    load();
  }
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
