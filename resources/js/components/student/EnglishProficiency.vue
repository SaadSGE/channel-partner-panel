<script setup>
import { useFileStore } from "@/@core/stores/fileStore";
import { onMounted, watch } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps({
  readonly: {
    type: Boolean,
    default: false,
  },
  englishProficiency: {
    type: Array,
    required: true,
    default: () => [{
      title: '',
      overall_score: '',
      reading: '',
      writing: '',
      speaking: '',
      listening: ''
    }]
  }
});

const emit = defineEmits(['updateEnglishProficiency']);
const fileStore = useFileStore();

onMounted(() => {
  if (props.englishProficiency.length === 0) {
    props.englishProficiency.push({
      title: '', overall_score: '', reading: '',
      writing: '', speaking: '', listening: ''
    });
  }

  if (fileStore.studentInfo.englishProficiency?.length) {
    props.englishProficiency.splice(0, props.englishProficiency.length, ...fileStore.studentInfo.englishProficiency);
  }
});

const addEnglishProficiency = () => {
  const lastEntry = props.englishProficiency[props.englishProficiency.length - 1];

  if (!lastEntry.title || !lastEntry.overall_score) {
    toast("Please fill all required fields before adding a new entry", {
      type: "error",
      position: "top-right",
      theme: "colored",
    });
    return;
  }

  props.englishProficiency.push({
    title: '',
    overall_score: '',
    reading: '',
    writing: '',
    speaking: '',
    listening: ''
  });
  emit('updateEnglishProficiency', props.englishProficiency);
}

const removeEnglishProficiency = (index) => {
  if (index !== 0) {
    props.englishProficiency.splice(index, 1);
    emit('updateEnglishProficiency', props.englishProficiency);
  }
}

// Watch for changes and emit updates
watch(() => props.englishProficiency, (newValue) => {
  emit('updateEnglishProficiency', newValue);
}, { deep: true });
</script>

<template>
  <VCard>
    <VCardText>
      <VCardTitle class="text-left padding-bottom">English Proficiency</VCardTitle>
      <p class="text-center" v-if="!readonly">Add English Proficiency</p>
      <VRow v-for="(proficiency, index) in englishProficiency" :key="index">
        <VCol cols="12" md="3">
          <AppTextField v-model="proficiency.title" label="Proficiency Title" placeholder="Proficiency Title"
            density="compact" :readonly="readonly" />
        </VCol>
        <VCol cols="12" md="3">
          <AppTextField v-model="proficiency.overall_score" label="Overall Score" placeholder="Overall Score"
            density="compact" :readonly="readonly" />
        </VCol>
        <VCol cols="12" md="1">
          <AppTextField v-model="proficiency.listening" label="Listening" placeholder="Listening" density="compact"
            :readonly="readonly" />
        </VCol>
        <VCol cols="12" md="1">
          <AppTextField v-model="proficiency.speaking" label="Speaking" placeholder="Speaking" density="compact"
            :readonly="readonly" />
        </VCol>
        <VCol cols="12" md="1">
          <AppTextField v-model="proficiency.writing" label="Writing" placeholder="Writing" density="compact"
            :readonly="readonly" />
        </VCol>
        <VCol cols="12" md="1">
          <AppTextField v-model="proficiency.reading" label="Reading" placeholder="Reading" density="compact"
            :readonly="readonly" />
        </VCol>
        <VCol cols="12" md="2" class="d-flex align-center mt-5" v-if="!readonly">
          <VBtn v-if="index !== 0" icon="tabler-x" color="error" @click="removeEnglishProficiency(index)" class="me-2"
            size="small" />
          <VBtn icon="tabler-plus" color="primary" @click="addEnglishProficiency" size="small" />
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
