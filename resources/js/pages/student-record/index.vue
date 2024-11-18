<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { useFileStore } from "@/@core/stores/fileStore";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";
import "filepond/dist/filepond.min.css";
import VueFilePond from 'vue-filepond';
import { useRouter } from "vue-router";
import Info from './info.vue';

definePage({
  meta: {
    action: 'read',
    subject: 'dashboard',
  },
})
const fileStore = useFileStore();
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const mobile = ref('');
const dob = ref('');
const gender = ref('');
const passportNo = ref('');
const visaRefusal = ref('');
const address = ref('');
const studentCity = ref('');
const studentCountry = ref('');
const refForm = ref(null);
const course = ref(null);
const intake = ref(null);
const university = ref(null);
const commonFunctionStore = commonFunction();
const countries = ref([
  "Bangladesh",
  "Nigeria",
  "Sri Lanka",
  "India",
  "Bhutan",
  "Ghana",
  "Pakistan",
])
const FilePond = VueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginPdfPreview
);

const server = {
  process: (fieldName, file, metadata, load, error, progress, abort) => {
    fileStore
      .uploadFile(fieldName, file)
      .then((fileId) => {
        file.fieldName = fieldName;
        file.fileId = fileId;
        load(fileId);
      })
      .catch((err) => error(err));
  },
  revert: (uniqueFileId, load, error) => {
    const pondFile = files.value.find(file => file.fileId === uniqueFileId);
    if (pondFile) {
      fileStore.removeFile(uniqueFileId);
      fileStore.removeDocument(pondFile.fieldName, fileStore.getFilePath(uniqueFileId));
    }
    load();
  },
};

const files = ref([]);
const router = useRouter();
const dynamicId = ref('1');
const targetRoute = 'student-record';
const showDocumentUpload = ref(true)

function goToNextPage() {
  showDocumentUpload.value = false
  console.log('Final Documents:', fileStore.documents)
  console.log('Student Info:', fileStore.studentInfo)
}

function continueWithoutDocument() {
  fileStore.continueWithoutDocuments();
  showDocumentUpload.value = false;
  console.log('Final Documents:', fileStore.documents);
  console.log('Student Info:', fileStore.studentInfo);
}
</script>
<template>
  <div v-if="showDocumentUpload">
    <VCard>
      <VCardTitle class="text-center">Upload Necessary Document</VCardTitle>
      <VCardTitle>Passport(*)</VCardTitle>
      <VCardText>
        <file-pond ref="pond" name="passport" :allow-multiple="false" allowRemove="true"
          label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" :server="server"
          :files="files" />
        <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
      </VCardText>
    </VCard>
    <VCard>
      <VCardTitle>Academic Reference Letter(*)</VCardTitle>
      <VCardText>
        <file-pond ref="pond" name="academic_letter" :allow-multiple="false" allowRemove="true"
          label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" :server="server"
          :files="files" />
        <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
      </VCardText>
    </VCard>
    <VCard>
      <VCardTitle>Professional Reference Letter</VCardTitle>
      <VCardText>
        <file-pond ref="pond" name="professional_letter" :allow-multiple="false" allowRemove="true"
          label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" :server="server"
          :files="files" />
        <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
      </VCardText>
    </VCard>
    <VCard>
      <VCardTitle>CV/Resume</VCardTitle>
      <VCardText>
        <file-pond ref="pond" name="cv-resume" :allow-multiple="false" allowRemove="true"
          label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" :server="server"
          :files="files" />
        <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
      </VCardText>
    </VCard>
    <VCard>
      <VCardTitle>SOP</VCardTitle>
      <VCardText>
        <file-pond ref="pond" name="sop" :allow-multiple="false" allowRemove="true"
          label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" :server="server"
          :files="files" />
        <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
      </VCardText>
    </VCard>
    <VCard>
      <VCardTitle>Supporting Document</VCardTitle>
      <VCardText>
        <file-pond ref="pond" name="supporting_document" :allow-multiple="true" allowRemove="true"
          label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" :server="server"
          :files="files" />
        <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
        <div class="btn-flex">
          <div>
            <VBtn color="secondary">Cancel</VBtn>
          </div>
          <div>
            <!-- <VBtn color="primary" @click="continueWithoutDocument">
              Continue Without Document
            </VBtn> -->
            <VBtn color="primary" class="btn-margin" @click="goToNextPage">
              Continue
            </VBtn>
          </div>
        </div>
      </VCardText>
    </VCard>
  </div>

  <Info v-else @back="showDocumentUpload = true" />
</template>
<style>
.btn-flex {
  display: flex;
  justify-content: space-between;
}

.btn-margin {
  margin-inline-start: 32px;
}
</style>
