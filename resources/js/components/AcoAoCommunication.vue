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
const showAcoAoCommModal = ref(false);
const newAcoAoComm = ref("");
const acoAoCommunications = ref([]);
const isAcoAoCommLoading = ref(false);

const handleAddAcoAoComm = async () => {
  try {
    isAcoAoCommLoading.value = true;
    await store.addAcoAoCommunication(props.applicationId, newAcoAoComm.value);
    newAcoAoComm.value = ""; // Clear the input
    showAcoAoCommModal.value = false; // Close the modal
    await fetchCommunications(); // Refresh data to reflect new communication
  } catch (error) {
    console.error("Error adding ACO & AO communication:", error);
  } finally {
    isAcoAoCommLoading.value = false;
  }
};

const fetchCommunications = async () => {
  await store.getAcoAoCommunications(props.applicationId);
  acoAoCommunications.value = store.acoAoCommunications;
};
const formatDate = (dateString) => {
  if (dateString && !dateString.includes("T")) {
    dateString = dateString.replace(" ", "T");
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  return date.toLocaleDateString();
};

onMounted(fetchCommunications);
</script>

<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-end mb-4">
      <VBtn color="primary" @click="showAcoAoCommModal = true">
        <VIcon start icon="mdi-plus" />
        Add New Communication
      </VBtn>
    </VCol>
    <VCol cols="12">
      <VCard>
        <VCardTitle class="text-h6 font-weight-bold pa-4">
          ACO & AO Communications
        </VCardTitle>
        <VCardText>
          <div class="comment-section">
            <VTimeline :density="dense">
              <VTimelineItem v-for="(comm, index) in acoAoCommunications" :key="index" dot-color="primary" size="small">
                <template #opposite>
                  <div class="text-caption">{{ comm.created_at }}</div>
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

  <!-- Modal for adding new ACO & AO communication -->
  <VDialog v-model="showAcoAoCommModal" max-width="500px">
    <VCard>
      <VCardTitle class="text-h6 font-weight-bold pa-4">Add a New ACO & AO Communication</VCardTitle>
      <VCardText>
        <VForm @submit.prevent="handleAddAcoAoComm">
          <VLabel class="text-body-1 font-weight-medium mb-2">
            Message
          </VLabel>
          <QuillEditor v-model:content="newAcoAoComm" theme="snow" content-type="html" class="mt-2" />
        </VForm>
      </VCardText>
      <VCardActions class="pa-4">
        <VSpacer />
        <VBtn color="primary" :loading="isAcoAoCommLoading" :disabled="isAcoAoCommLoading" @click="handleAddAcoAoComm">
          <VIcon start icon="mdi-send" />
          Submit Communication
        </VBtn>
        <VBtn color="secondary" :disabled="isAcoAoCommLoading" @click="showAcoAoCommModal = false">
          Cancel
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
