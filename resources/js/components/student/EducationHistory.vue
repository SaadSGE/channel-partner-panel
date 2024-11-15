<script setup>
import { useFileStore } from "@/@core/stores/fileStore";
import { onMounted, watch } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps({
  educationalHistory: {
    type: Array,
    required: true,
    default: () => [{
      degree: '',
      institution: '',
      passing_year: '',
      result: ''
    }]
  }
});

const emit = defineEmits(['updateEducationalHistory']);
const fileStore = useFileStore();
onMounted(() => {
  if (props.educationalHistory.length === 0) {
    props.educationalHistory.push({ degree: '', institution: '', passing_year: '', result: '' });
  }

  if (fileStore.studentInfo.educationalHistory?.length) {
    props.educationalHistory.splice(0, props.educationalHistory.length, ...fileStore.studentInfo.educationalHistory);
  }
});

watch(() => props.educationalHistory.length, (newLength) => {
  if (newLength === 0) {
    props.educationalHistory.push({ degree: '', institution: '', passing_year: '', result: '' });
  }
});

const addEducationalHistory = () => {
  const lastEntry = props.educationalHistory[props.educationalHistory.length - 1];

  if (!lastEntry.degree || !lastEntry.institution) {
    toast("Please fill all required fields before adding a new entry", {
      type: "error",
      position: "top-right",
      theme: "colored",
    });
    return;
  }

  props.educationalHistory.push({
    degree: '',
    institution: '',
    passing_year: '',
    result: ''
  });
  emit('updateEducationalHistory', props.educationalHistory);
}

const removeEducationalHistory = (index) => {
  if (index !== 0) {
    props.educationalHistory.splice(index, 1);
    emit('updateEducationalHistory', props.educationalHistory);
  }
}
</script>

<template>
  <VCard>
    <VCardText>
      <VCardTitle>Educational History</VCardTitle>
      <p class="text-center">Add Educational History</p>
      <VRow v-for="(education, index) in educationalHistory" :key="index">
        <VCol cols="12" md="3">
          <AppTextField v-model="education.degree" label="Degree" placeholder="Degree" density="compact" />
        </VCol>
        <VCol cols="12" md="3">
          <AppTextField v-model="education.institution" label="Institution" placeholder="Institution"
            density="compact" />
        </VCol>
        <VCol cols="12" md="2">
          <AppTextField v-model="education.passing_year" label="Passing Year" placeholder="Passing Year"
            density="compact" />
        </VCol>
        <VCol cols="12" md="2">
          <AppTextField v-model="education.result" label="Result" placeholder="Result" density="compact" />
        </VCol>
        <VCol cols="12" md="2" class="d-flex align-center mt-5">
          <VBtn v-if="index !== 0" icon="tabler-x" color="error" @click="removeEducationalHistory(index)" class="me-2"
            size="small" />
          <VBtn icon="tabler-plus" color="primary" @click="addEducationalHistory" size="small" />
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
</style>
