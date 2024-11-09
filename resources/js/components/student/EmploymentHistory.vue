<script setup>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const employmentHistory = ref([{ companyName: '', designation: '' }]);

const addEmploymentHistory = () => {
  const lastEntry = employmentHistory.value[employmentHistory.value.length - 1];

  if (!lastEntry.companyName || !lastEntry.designation) {
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

  employmentHistory.value.push({ companyName: '', designation: '' });
}

const removeEmploymentHistory = (index) => {
  if (index !== 0) {
    employmentHistory.value.splice(index, 1);
  }
}
</script>

<template>
  <VCard>
    <VCardText>
      <VCardTitle class="text-left padding-bottom">Employment History</VCardTitle>
      <p class="text-center padding-bottom">Add Employment History</p>
      <VRow v-for="(employment, index) in employmentHistory" :key="index">
        <VCol cols="12" md="5">
          <AppTextField v-model="employment.companyName" label="Company Name" placeholder="Company Name"
            density="compact" />
        </VCol>
        <VCol cols="12" md="5">
          <AppTextField v-model="employment.designation" label="Designation" placeholder="Designation"
            density="compact" />
        </VCol>
        <VCol cols="12" md="2" class="d-flex align-center">
          <VBtn v-if="index !== 0" icon="tabler-x" color="error" @click="removeEmploymentHistory(index)" class="me-2"
            size="small" />
          <VBtn icon="tabler-plus" color="primary" @click="addEmploymentHistory" size="small" />
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
