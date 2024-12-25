<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { useLeadStore } from "@/@core/stores/leadStore";
import { onMounted, ref } from 'vue';
import { toast } from 'vue3-toastify';

const props = defineProps({
  showUploadCard: Boolean,
});

const emit = defineEmits(['update:showUploadCard', 'leadsUploaded']);

const leadStore = useLeadStore();
const commonFunctionStore = commonFunction();
const selectedCountry = ref(null);
const selectedBranch = ref(null);
const selectedLeadType = ref(null);
const selectedEvent = ref(null);
const isUploading = ref(false);
const fileInput = ref(null);

onMounted(async () => {
  await commonFunctionStore.getAllCountries();
  await commonFunctionStore.getBranches();
});

const toggleUploadCard = () => {
  emit('update:showUploadCard', !props.showUploadCard);
};

const downloadSampleFile = () => {
  // Logic to download sample file
};

const handleFileUpload = (event) => {
  fileInput.value = event.target.files[0];
};

const uploadFile = async () => {
  if (!fileInput.value) {
    toast.error("Please select a file to upload", {
      position: "top-right",
      theme: "colored",
    });
    return;
  }

  const allowedTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel', 'text/csv'];
  if (!allowedTypes.includes(fileInput.value.type)) {
    toast.error("Please upload only Excel or CSV files", {
      position: "top-right",
      theme: "colored",
    });
    return;
  }

  if (selectedLeadType.value !== 'event' && !selectedCountry.value) {
    toast.error("Please select a Country", {
      position: "top-right",
      theme: "colored",
    });
    return;
  }

  if (!selectedBranch.value) {
    toast.error("Please select a Branch", {
      position: "top-right",
      theme: "colored",
    });
    return;
  }

  isUploading.value = true;
  try {
    const formData = new FormData();
    formData.append('file', fileInput.value);
    formData.append('assigned_branch', selectedBranch.value);
    formData.append('lead_country_id', selectedCountry.value || '');
    formData.append('lead_type', selectedLeadType.value || '');
    formData.append('lead_event_id', selectedEvent.value || '');

    await leadStore.uploadLeads(formData);

    // Reset form
    selectedBranch.value = null;
    selectedCountry.value = null;
    if (document.querySelector('input[type="file"]')) {
      document.querySelector('input[type="file"]').value = '';
    }
    fileInput.value = null;
    emit('update:showUploadCard', false);
    emit('leadsUploaded');

    toast.success("File uploaded successfully!", {
      position: "top-right",
      theme: "colored",
    });
  } catch (error) {
    const errorMessage = error?.message || "Some records contain empty values.";
    toast.error(errorMessage, {
      position: "top-right",
      theme: "colored",
    });
  } finally {
    isUploading.value = false;
  }
};
</script>

<template>
  <VCard v-if="showUploadCard" class="mt-4 w-100 full-width-card upload-card">
    <VCardText>
      <VRow justify="space-between" class="align-center">
        <span class="text-h6 upload-title">Upload Lead Excel/csv File</span>
        <VBtn color="error" icon @click="toggleUploadCard" class="close-btn">
          <VIcon icon="tabler-x" />
        </VBtn>
      </VRow>

      <div class="form-padding mt-6 upload-form">
        <VRow class="mb-4 fade-in">
          <Filters :selected-lead-type="selectedLeadType" @update-lead-type="selectedLeadType = $event"
            country-label="Lead Country" branch-label="Lead Branch (Optional)" />

          <template v-if="selectedLeadType === 'social'">
            <VCol cols="12" md="4">
              <AppAutocomplete v-model="selectedCountry" :items="commonFunctionStore.allCountries"
                :item-title="(item) => item.name" :item-value="(item) => item.id" label="Select Country"
                placeholder="Select Country" clearable class="slide-in" />
            </VCol>
            <VCol cols="12" md="4">
              <AppAutocomplete v-model="selectedBranch" :items="commonFunctionStore.branches"
                :item-title="(item) => item.name" :item-value="(item) => item.id" label="Select Branch"
                placeholder="Select Branch" clearable class="slide-in" />
            </VCol>
          </template>

          <template v-if="selectedLeadType === 'event'">
            <Filters :selected-event="selectedEvent" @update-event="selectedEvent = $event" />
            <VCol cols="12" md="4">
              <AppAutocomplete v-model="selectedBranch" :items="commonFunctionStore.branches"
                :item-title="(item) => item.name" :item-value="(item) => item.id" label="Select Branch"
                placeholder="Select Branch" clearable class="slide-in" />
            </VCol>
          </template>
        </VRow>

        <VRow justify="center" align="center" class="gap-4 fade-in" v-if="selectedLeadType">
          <VCol cols="12" md="6">
            <VFileInput accept=".xlsx, .csv" label="Upload Excel/CSV file" @change="handleFileUpload" variant="outlined"
              color="purple-lighten-4" class="file-input-animate" :class="{ 'has-file': fileInput }" />
          </VCol>

          <VBtn prepend-icon="tabler-cloud-upload" @click="uploadFile" color="purple-lighten-4" class="upload-btn"
            :loading="isUploading" :disabled="isUploading">
            {{ isUploading ? 'Uploading...' : 'Upload' }}
          </VBtn>
        </VRow>

        <VRow justify="center" class="mt-2 fade-in" v-if="selectedLeadType">
          <p class="text-caption text-primary">Only Excel/CSV file support</p>
        </VRow>

        <VRow justify="center" align="center" class="mt-6 gap-2 sample-section fade-in" v-if="selectedLeadType">
          <span class="font-weight-bold">Download Sample Excel/CSV File</span>
          <VBtn prepend-icon="tabler-cloud-download" @click="downloadSampleFile" class="download-btn btn-small"
            variant="outlined">
            Download Sample
          </VBtn>
        </VRow>
      </div>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
/* Copy all the relevant styles from the original file */
</style>
