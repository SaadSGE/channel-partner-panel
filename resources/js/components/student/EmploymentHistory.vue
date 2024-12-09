<script setup>
import { useFileStore } from "@/@core/stores/fileStore";
import { onMounted, ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const fileStore = useFileStore();
const props = defineProps({
  isEdit: {
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
const isEditing = ref(false);

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
    props.employmentHistory.push({
      company_name: '',
      designation: '',
      year: ''
    });
  }
  if (isEditing.value) {

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

}

const removeEmploymentHistory = (index) => {
  if (index !== 0) {
    props.employmentHistory.splice(index, 1);

  }
}

const toggleEdit = () => {
  if (isEditing.value) {
    emit('updateEmploymentHistory', props.employmentHistory);
  }
  isEditing.value = !isEditing.value;
};
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between align-center">
        <VCardTitle class="padding-bottom">Employment History</VCardTitle>
        <VBtn v-if="props.isEdit" :color="isEditing ? 'success' : 'primary'" @click="toggleEdit">
          {{ isEditing ? 'Save Changes' : 'Edit' }}
        </VBtn>
      </div>

      <!-- Table View -->
      <div v-if="props.isEdit && !isEditing">
        <VTable density="compact" class="info-table custom-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Designation</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employment, index) in employmentHistory" :key="index">
              <td>{{ employment.company_name || '-' }}</td>
              <td>{{ employment.designation || '-' }}</td>
              <td>{{ employment.year || '-' }}</td>
            </tr>
          </tbody>
        </VTable>
      </div>

      <!-- Form View -->
      <VRow v-else v-for="(employment, index) in employmentHistory" :key="index">
        <VCol cols="12" md="3">
          <AppTextField v-model="employment.company_name" label="Company Name" placeholder="Company Name"
            density="compact" />
        </VCol>
        <VCol cols="12" md="3">
          <AppTextField v-model="employment.designation" label="Designation" placeholder="Designation"
            density="compact" />
        </VCol>
        <VCol cols="12" md="4">
          <AppTextField v-model="employment.year" label="Year" placeholder="Year" density="compact" />
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

<style lang="scss" scoped>
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

.custom-table {
  position: relative;
  z-index: 1;
  background: #f0f7ff !important;
  box-shadow: 0 2px 6px 0 rgba(var(--v-shadow-key-umbra-color), 0.14);

  :deep(th) {
    background-color: #e1f0ff !important;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.2px;
    padding-block: 12px !important;
    padding-inline: 16px !important;
    text-transform: uppercase;
  }

  :deep(td) {
    background-color: #f0f7ff !important;
    border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    padding-block: 12px !important;
    padding-inline: 16px !important;
  }
}

.info-table {
  overflow: hidden;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  background: #f0f7ff !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 24px -4px rgba(var(--v-shadow-key-umbra-color), 0.2);
    transform: translateY(-2px);
  }

  :deep(td) {
    background-color: #f0f7ff !important;
    border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    padding-block: 12px !important;
    padding-inline: 16px !important;
  }
}
</style>
