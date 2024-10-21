<script setup>
import { useApplicationListStore } from "@/@core/stores/applicationList";
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { onMounted, ref } from 'vue';

const props = defineProps({
  applicationId: {
    type: String,
    required: true
  }
});

const store = useApplicationListStore();
const showAcoCoCommModal = ref(false);
const newAcoCoComm = ref("");
const acoCoCommunications = ref([]);
const isAcoCoCommLoading = ref(false);

const handleAddAcoCoComm = async () => {
  try {
    isAcoCoCommLoading.value = true;
    await store.addAcoCoCommunication(props.applicationId, newAcoCoComm.value);
    newAcoCoComm.value = ""; // Clear the input
    showAcoCoCommModal.value = false; // Close the modal
    await fetchCommunications(); // Refresh data to reflect new communication
  } catch (error) {
    console.error("Error adding ACO & CO communication:", error);
  } finally {
    isAcoCoCommLoading.value = false;
  }
};

const fetchCommunications = async () => {
  await store.getAcoCoCommunications(props.applicationId);
  acoCoCommunications.value = store.acoCoCommunications;
};
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};
onMounted(fetchCommunications);
</script>

<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-end mb-4">
      <VBtn color="primary" @click="showAcoCoCommModal = true">
        <VIcon start icon="mdi-plus" />
        Add New Communication
      </VBtn>
    </VCol>
    <VCol cols="12">
      <VCard>
        <VCardTitle class="text-h6 font-weight-bold pa-4">
          ACO & CO Communications
        </VCardTitle>
        <VCardText>
          <div class="comment-section">
            <VTimeline :density="dense">
              <VTimelineItem v-for="(comm, index) in acoCoCommunications" :key="index" dot-color="primary" size="small">
                <template #opposite>
                  <div class="text-caption">{{ formatDate(comm.created_at) }}</div>
                </template>
                <VCard class="elevation-1">
                  <VCardTitle class="text-subtitle-1">
                    {{ comm.user.full_name }}
                  </VCardTitle>
                  <VCardText>
                    <div v-html="comm.message" />
                  </VCardText>
                </VCard>
              </VTimelineItem>
            </VTimeline>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <!-- Modal for adding new ACO & CO communication -->
  <VDialog v-model="showAcoCoCommModal" max-width="500px">
    <VCard>
      <VCardTitle class="text-h6 font-weight-bold pa-4">Add a New ACO & CO Communication</VCardTitle>
      <VCardText>
        <VForm @submit.prevent="handleAddAcoCoComm">
          <VLabel class="text-body-1 font-weight-medium mb-2">
            Message
          </VLabel>
          <QuillEditor v-model:content="newAcoCoComm" theme="snow" content-type="html" class="mt-2" />
        </VForm>
      </VCardText>
      <VCardActions class="pa-4">
        <VSpacer />
        <VBtn color="primary" :loading="isAcoCoCommLoading" :disabled="isAcoCoCommLoading" @click="handleAddAcoCoComm">
          <VIcon start icon="mdi-send" />
          Submit Communication
        </VBtn>
        <VBtn color="secondary" :disabled="isAcoCoCommLoading" @click="showAcoCoCommModal = false">
          Cancel
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
