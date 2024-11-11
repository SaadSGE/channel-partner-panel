<script setup>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const englishProficiency = ref([{
  proficiencyTitle: '',
  overallScore: '',
  reading: '',
  writing: '',
  speaking: '',
  listening: ''
}]);

const addEnglishProficiency = () => {
  const lastEntry = englishProficiency.value[englishProficiency.value.length - 1];

  if (!lastEntry.proficiencyTitle ||
    !lastEntry.overallScore ||
    !lastEntry.reading ||
    !lastEntry.writing ||
    !lastEntry.speaking ||
    !lastEntry.listening) {

    toast("Please fill all fields before adding a new entry", {
      type: "error",
      position: "top-right",
      theme: "colored",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return;
  }

  englishProficiency.value.push({
    proficiencyTitle: '',
    overallScore: '',
    reading: '',
    writing: '',
    speaking: '',
    listening: ''
  });
}

const removeEnglishProficiency = (index) => {
  if (index !== 0) {
    englishProficiency.value.splice(index, 1);
  }
}
</script>

<template>
  <VCard>
    <VCardText>
      <VCardTitle class="text-left padding-bottom">English Proficiency</VCardTitle>
      <p class="text-center padding-bottom">Add English Proficiency</p>
      <VRow v-for="(proficiency, index) in englishProficiency" :key="index">
        <VCol cols="12" md="3">
          <AppTextField v-model="proficiency.proficiencyTitle" label="Proficiency Title" placeholder="Proficiency Title"
            density="compact" />
        </VCol>
        <VCol cols="12" md="3">
          <AppTextField v-model="proficiency.overallScore" label="Overall Score" placeholder="Overall Score"
            density="compact" />
        </VCol>
        <VCol cols="12" md="1">
          <AppTextField v-model="proficiency.listening" label="Listening" placeholder="Listening" density="compact" />
        </VCol>
        <VCol cols="12" md="1">
          <AppTextField v-model="proficiency.speaking" label="Speaking" placeholder="Speaking" density="compact" />
        </VCol>
        <VCol cols="12" md="1">
          <AppTextField v-model="proficiency.writing" label="Writing" placeholder="Writing" density="compact" />
        </VCol>
        <VCol cols="12" md="1">
          <AppTextField v-model="proficiency.reading" label="Reading" placeholder="Reading" density="compact" />
        </VCol>
        <VCol cols="12" md="2" class="d-flex align-center">
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
