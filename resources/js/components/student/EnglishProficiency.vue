<script setup>
import { useFileStore } from "@/@core/stores/fileStore";
import { onMounted, watch } from 'vue';
import 'vue3-toastify/dist/index.css';

const props = defineProps({
  englishProficiency: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      overall_score: '',
      reading: '',
      writing: '',
      speaking: '',
      listening: ''
    })
  }
});

const emit = defineEmits(['updateEnglishProficiency']);
const fileStore = useFileStore();

onMounted(() => {
  if (fileStore.studentInfo.englishProficiency) {
    props.englishProficiency = fileStore.studentInfo.englishProficiency;
  }
});

// Watch for changes and emit updates
watch(() => props.englishProficiency, (newValue) => {
  emit('updateEnglishProficiency', newValue);
}, { deep: true });
</script>

<template>
  <VCard>
    <VCardText>
      <VCardTitle class="text-left padding-bottom">English Proficiency</VCardTitle>
      <VRow>
        <VCol cols="12" md="3">
          <AppTextField v-model="props.englishProficiency.title" label="Proficiency Title"
            placeholder="Proficiency Title" density="compact" />
        </VCol>
        <VCol cols="12" md="3">
          <AppTextField v-model="props.englishProficiency.overall_score" label="Overall Score"
            placeholder="Overall Score" density="compact" />
        </VCol>
        <VCol cols="12" md="1">
          <AppTextField v-model="props.englishProficiency.listening" label="Listening" placeholder="Listening"
            density="compact" />
        </VCol>
        <VCol cols="12" md="1">
          <AppTextField v-model="props.englishProficiency.speaking" label="Speaking" placeholder="Speaking"
            density="compact" />
        </VCol>
        <VCol cols="12" md="1">
          <AppTextField v-model="props.englishProficiency.writing" label="Writing" placeholder="Writing"
            density="compact" />
        </VCol>
        <VCol cols="12" md="1">
          <AppTextField v-model="props.englishProficiency.reading" label="Reading" placeholder="Reading"
            density="compact" />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style scoped>
.small-dropdown :deep(.v-field__input),
.small-dropdown :deep(.v-list-item-title) {
  font-size: 0.8rem !important;
}

.small-dropdown :deep(.v-field__input) {
  min-block-size: 32px;
  padding-block: 5px;
}

.small-dropdown :deep(.v-field__label) {
  font-size: 0.55rem !important;
}

.padding-bottom {
  padding-block-end: 30px;
}
</style>
