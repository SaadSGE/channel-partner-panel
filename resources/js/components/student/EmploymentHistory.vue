<script setup>
import { useFileStore } from "@/@core/stores/fileStore";
import { onMounted, watch } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const fileStore = useFileStore();
const props = defineProps({
  readonly: {
    type: Boolean,
    default: false,
  },
  employmentHistory: {
    type: Array,
    required: true,
    default: () => [{
      company_name: '',
      designation: '',
      year: ''
    }]
  }
});

const emit = defineEmits(['updateEmploymentHistory']);

onMounted(() => {
  if (fileStore.studentInfo.employmentHistory?.length) {
    props.employmentHistory.splice(0, props.employmentHistory.length, ...fileStore.studentInfo.employmentHistory);
  }
  if (props.employmentHistory.length === 0) {
    props.employmentHistory.push({ company_name: '', designation: '', year: '' });
  }
});

watch(() => props.employmentHistory.length, (newLength) => {
  if (newLength === 0) {
    props.employmentHistory.push({ company_name: '', designation: '', year: '' });
  }
});

const addEmploymentHistory = () => {
  const lastEntry = props.employmentHistory[props.employmentHistory.length - 1];

  if (!lastEntry.company_name || !lastEntry.designation) {
    toast("Please fill all required fields before adding a new entry", {
      type: "error",
      position: "top-right",
      theme: "colored",
    });
    return;
  }

  props.employmentHistory.push({
    company_name: '',
    designation: '',
    year: ''
  });
  emit('updateEmploymentHistory', props.employmentHistory);
}

const removeEmploymentHistory = (index) => {
  if (index !== 0) {
    props.employmentHistory.splice(index, 1);
    emit('updateEmploymentHistory', props.employmentHistory);
  }
}
</script>

<template>
  <VCard>
    <VCardText>
      <VCardTitle>Employment History</VCardTitle>
      <p class="text-center">Add Employment History</p>
      <VRow v-for="(employment, index) in employmentHistory" :key="index">
        <VCol cols="12" md="3">
          <AppTextField v-model="employment.company_name" label="Company Name" placeholder="Company Name"
            density="compact" :readonly="readonly" />
        </VCol>
        <VCol cols="12" md="3">
          <AppTextField v-model="employment.designation" label="Designation" placeholder="Designation" density="compact"
            :readonly="readonly" />
        </VCol>
        <VCol cols="12" md="4">
          <AppTextField v-model="employment.year" label="Year" placeholder="Year" density="compact"
            :readonly="readonly" />
        </VCol>
        <VCol cols="12" md="2" class="d-flex align-center mt-5">
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
