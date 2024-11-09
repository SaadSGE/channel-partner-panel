<script setup>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const educationalHistory = ref([{ degree: '', institution: '', passingYear: '', result: '' }]);

const addEducationalHistory = () => {
  const lastEntry = educationalHistory.value[educationalHistory.value.length - 1];

  if (!lastEntry.degree ||
    !lastEntry.institution ||
    !lastEntry.passingYear ||
    !lastEntry.result) {

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

  educationalHistory.value.push({ degree: '', institution: '', passingYear: '', result: '' });
}

const removeEducationalHistory = (index) => {
  if (index !== 0) {
    educationalHistory.value.splice(index, 1);
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
          <AppTextField v-model="education.passingYear" label="Passing Year" placeholder="Passing Year"
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
