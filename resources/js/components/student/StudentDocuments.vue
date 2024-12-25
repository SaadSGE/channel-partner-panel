<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between align-center mb-4">
        <VCardTitle>Documents</VCardTitle>
        <VBtn v-if="!readonly && $can('edit', 'student')" :color="hasUploads ? 'success' : 'primary'"
          @click="toggleEdit">
          {{ buttonText }}
        </VBtn>
      </div>

      <VAlert v-if="errorMessage && $can('edit', 'student')" type="error" class="mb-4" closable
        @click:close="errorMessage = ''">
        {{ errorMessage }}
      </VAlert>

      <!-- Add the Download All button inside a div aligned to the right -->
      <div class="d-flex justify-end mt-2 mb-2">
        <VBtn :href="zipLink" color="warning" target="_blank" @click="downloadAllFiles">
          <VIcon size="24" icon="tabler-download" />
          Download All
        </VBtn>
      </div>

      <!-- View Mode -->
      <div v-if="!isEditing">
        <!-- Missing Documents Section - At Top -->
        <template v-if="missingDocuments.length > 0">
          <VCardTitle class="text-warning">Missing Required Documents</VCardTitle>
          <VCard v-for="doc in missingDocuments" :key="doc.name" class="mb-4 missing-document-card">
            <VCardText>
              <div class="d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                  <VIcon icon="tabler-file-alert" color="warning" size="24" class="me-2" />
                  <div>
                    <span class="text-body-1 font-weight-medium">{{ doc.label }}</span>
                    <div class="text-caption text-warning">Required document missing</div>
                  </div>
                </div>
                <VBtn v-if="!readonly" color="warning" variant="outlined" size="small"
                  @click="handleUploadClick(doc.name)">
                  {{ isUploading(doc.name) ? 'Cancel Upload' : 'Upload Document' }}
                </VBtn>
              </div>

              <!-- Individual Upload Block -->
              <VExpandTransition>
                <div v-if="isUploading(doc.name)" class="mt-4">
                  <file-pond :name="doc.name" :allow-multiple="doc.name === 'supporting_document'" :server="server"
                    :files="null" allowRemove="true"
                    label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" />
                </div>
              </VExpandTransition>
            </VCardText>
          </VCard>
          <VDivider class="my-4" />
        </template>

        <!-- Existing Documents -->
        <template v-if="documents.length > 0">
          <VCardTitle>Uploaded Documents</VCardTitle>
          <VCard v-for="doc in documents" :key="doc.file_name" class="mb-4 document-card">
            <VCardText class="d-flex justify-space-between align-center">
              <div class="d-flex align-center">
                <VIcon :icon="getDocumentIcon(doc.file_type)" size="24" class="me-2" />
                <div>
                  <span class="text-body-1 font-weight-medium">{{ getFormattedDocumentName(doc.document_name) }}</span>
                  <div class="text-caption text-medium-emphasis">{{ doc.file_name }}</div>
                </div>
              </div>
              <div class="d-flex align-center">
                <VBtn icon variant="text" color="primary" @click="viewDocument(doc.path)" class="me-2">
                  <VIcon icon="tabler-eye" />
                </VBtn>
                <VChip :color="doc.file_type === 'pdf' ? 'error' : 'primary'" size="small" class="text-uppercase">
                  {{ doc.file_type }}
                </VChip>
              </div>
            </VCardText>
          </VCard>
        </template>

        <!-- No Documents Message -->
        <VCard v-if="documents.length === 0 && missingDocuments.length === 0" class="mb-4">
          <VCardText class="text-center text-medium-emphasis">
            No documents available
          </VCardText>
        </VCard>
      </div>

      <!-- Edit Mode - For bulk editing -->
      <div v-else>
        <!-- Required Documents First -->
        <template v-for="type in documentTypes" :key="type.name">
          <VCard class="mb-4" :class="{ 'missing-document': !getDocumentStatus(type.name) && type.required }">
            <VCardTitle class="d-flex align-center">
              {{ type.label }}
              <VChip v-if="type.required" color="warning" size="small" class="ms-2"
                :class="{ 'error': !getDocumentStatus(type.name) }">
                Required
              </VChip>
            </VCardTitle>
            <VCardText>
              <!-- Show current file if exists -->
              <div v-if="getDocumentStatus(type.name)" class="d-flex align-center mb-4 current-file">
                <VIcon :icon="getDocumentIcon(getDocumentStatus(type.name).file_type)" size="20" class="me-2" />
                <span class="text-body-2">{{ getDocumentStatus(type.name).file_name }}</span>
                <VSpacer />
                <VBtn icon variant="text" color="primary" size="small"
                  @click="viewDocument(getDocumentStatus(type.name).path)" class="ms-2">
                  <VIcon icon="tabler-eye" size="20" />
                </VBtn>
              </div>

              <!-- FilePond uploader -->
              <file-pond :name="type.name" :allow-multiple="type.name === 'supporting_document'" :server="server"
                :files="files" allowRemove="true"
                label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" />
            </VCardText>
          </VCard>
        </template>
      </div>

      <VOverlay v-model="isLoading" class="align-center justify-center">
        <VProgressCircular indeterminate size="64" />
      </VOverlay>
    </VCardText>
  </VCard>
</template>

<script setup>
import { useFileStore } from '@/@core/stores/fileStore';
import { useStudentStore } from '@/@core/stores/studentStore';
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";
import "filepond/dist/filepond.min.css";
import { computed, onMounted, ref, watch } from 'vue';
import VueFilePond from 'vue-filepond';
import { useRoute } from 'vue-router';

const props = defineProps({
  documents: {
    type: Array,
    required: true,
    default: () => ([])
  },
  readonly: {
    type: Boolean,
    default: false
  },
  zipLink: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:documents']);
const fileStore = useFileStore();
const isEditing = ref(false);
const hasUploads = ref(false);
const isLoading = ref(false);
const errorMessage = ref('');
const uploadingDocuments = ref(new Set());
const files = ref([]);

// Get the student ID from the route
const route = useRoute();
const studentId = route.params.id;

// Create FilePond component with plugins
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
        // Add the file to our local files array with all necessary information
        files.value.push({
          fieldName: fieldName,
          fileId: fileId,
          file: file,
          path: fileStore.getFilePath(fileId)
        });

        hasUploads.value = true;
        load(fileId);
      })
      .catch((err) => error(err));
  },
  revert: (uniqueFileId, load, error) => {
    // Remove the file from our local files array
    const fileIndex = files.value.findIndex(file => file.fileId === uniqueFileId);
    if (fileIndex !== -1) {
      fileStore.removeFile(uniqueFileId);
      fileStore.removeDocument(files.value[fileIndex].fieldName, files.value[fileIndex].path);
      files.value.splice(fileIndex, 1);

      if (files.value.length === 0) {
        hasUploads.value = false;
      }
    }
    load();
  },
  load: (source, load, error, progress, abort, headers) => {
    // This handles loading existing files
    load(source);
  }
};

const documentTypes = [
  { name: 'passport', label: 'Passport', required: true },
  { name: 'academic_letter', label: 'Academic Reference Letter', required: true },
  { name: 'professional_letter', label: 'Professional Reference Letter', required: true },
  { name: 'cv-resume', label: 'CV/Resume', required: true },
  { name: 'sop', label: 'SOP', required: true },
  { name: 'supporting_document', label: 'Supporting Document', required: false }
];

// Helper function to check if a document exists
const getDocumentStatus = (documentName) => {
  return props.documents.find(doc => doc.document_name === documentName);
};

// Computed property for missing documents
const missingDocuments = computed(() => {
  return documentTypes.filter(type => {
    const exists = getDocumentStatus(type.name);
    return !exists && type.required;
  });
});

// Track which documents are being uploaded


const toggleUploadFor = (documentName) => {
  if (uploadingDocuments.value.has(documentName)) {
    uploadingDocuments.value.delete(documentName);
  } else {
    uploadingDocuments.value.add(documentName);
  }
};

const isUploading = (documentName) => {
  return uploadingDocuments.value.has(documentName);
};

const toggleEdit = () => {
  if (hasUploads.value) {
    handleDocumentUpdate();
  } else {
    isEditing.value = !isEditing.value;
  }
  if (!isEditing.value) {
    hasUploads.value = false;
  }
};

const viewDocument = (path) => {
  window.open(path, '_blank');
};

// Helper function to get formatted document name
const getFormattedDocumentName = (documentName) => {
  return documentName
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const getDocumentIcon = (fileType) => {
  switch (fileType) {
    case 'pdf':
      return 'tabler-file-type-pdf';
    case 'image':
      return 'tabler-file-type-png';
    default:
      return 'tabler-file';
  }
};

// Add this computed property for dynamic button text
const buttonText = computed(() => {
  if (hasUploads.value) {
    return 'Save Changes';
  }
  return 'Edit Documents';
});

const handleUploadClick = (documentName) => {
  if (uploadingDocuments.value.has(documentName)) {
    uploadingDocuments.value.delete(documentName);
    if (uploadingDocuments.value.size === 0) {
      hasUploads.value = false;
    }
  } else {
    uploadingDocuments.value.add(documentName);
    hasUploads.value = true;
  }
};

// Add store initialization
const studentStore = useStudentStore();

// Update handleDocumentUpdate to use store
const handleDocumentUpdate = async () => {
  isLoading.value = true;
  errorMessage.value = '';

  try {
    console.log('Files before processing:', files.value);

    const documentPaths = files.value.map(file => ({
      document_name: file.fieldName,
      path: file.path,
      missing: missingDocuments.value.some(doc => doc.name === file.fieldName)
    }));

    console.log('Document paths to be sent:', documentPaths);

    const response = await studentStore.updateDocuments(studentId, documentPaths);

    // Update the local state
    isEditing.value = false;
    files.value = [];
    hasUploads.value = false;

    // Emit the update event with the new data
    emit('update:documents', response);

  } catch (error) {
    console.error('Error in handleDocumentUpdate:', error);
    errorMessage.value = 'Failed to update documents. Please try again.';
  } finally {
    isLoading.value = false;
  }
};

// Initialize files from props if they exist
onMounted(() => {
  // Remove the initialization of files.value here
  // We'll only populate files when actually uploading
});

// Add a watch for isEditing
watch(isEditing, (newValue) => {
  if (newValue) {
    // Clear files when entering edit mode
    files.value = [];
  } else {
    // Reset files when exiting edit mode without saving
    files.value = props.documents.map(doc => ({
      fieldName: doc.document_name,
      path: doc.path,
      file: doc.file_name
    }));
  }
});

const downloadAllFiles = async () => {
  if (props.zipLink) {
    try {
      const response = await fetch(props.zipLink, { mode: 'cors' });
      const blob = await response.blob();

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.target = '_blank';
      link.download = 'documents.zip';  // Optional: Set the file name for the downloaded ZIP
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {


    }
  } else {
    errorMessage.value = 'No ZIP file available for download.';
  }
};
</script>

<style lang="scss" scoped>
.document-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 24px -4px rgba(var(--v-shadow-key-umbra-color), 0.2);
    transform: translateY(-2px);
  }
}

.missing-document-card {
  border: 1px dashed rgb(var(--v-theme-warning));
  background-color: rgb(var(--v-theme-warning), 0.05) !important;
}

.missing-document {
  border: 1px dashed rgb(var(--v-theme-warning));

  .v-card-title {
    color: rgb(var(--v-theme-warning));
  }
}

// Add smooth transition for upload block
.v-expand-transition {

  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease-in-out;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
}

/* Add FilePond custom styles */
:deep(.filepond--panel-root) {
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  background-color: rgb(var(--v-theme-surface));
}

:deep(.filepond--drop-label) {
  color: rgb(var(--v-theme-on-surface));
}

:deep(.filepond--label-action) {
  text-decoration-color: rgb(var(--v-theme-primary));
}

.current-file {
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  background-color: rgb(var(--v-theme-surface));
  padding-block: 8px;
  padding-inline: 12px;

  .v-btn {
    margin-inline-start: auto;
  }
}
</style>
