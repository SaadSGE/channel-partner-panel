<script setup>
import { useFileStore } from "@/@core/stores/fileStore";
import { onMounted, ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false,
  },
  educationalHistory: {
    type: Array,
    required: true,
    default: () => [{
      id: null,
      degree: '',
      institution: '',
      passing_year: '',
      result: ''
    }]
  }
});

const emit = defineEmits(['updateEducationalHistory']);
const fileStore = useFileStore();
const isEditing = ref(false);

onMounted(() => {
  if (props.educationalHistory.length === 0) {
    props.educationalHistory.push({ id: null, degree: '', institution: '', passing_year: '', result: '' });
  }

  if (fileStore.studentInfo.educationalHistory?.length) {
    props.educationalHistory.splice(0, props.educationalHistory.length, ...fileStore.studentInfo.educationalHistory);
  }
});

watch(() => props.educationalHistory.length, (newLength) => {
  if (newLength === 0) {
    props.educationalHistory.push({ id: null, degree: '', institution: '', passing_year: '', result: '' });
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
    id: null,
    degree: '',
    institution: '',
    passing_year: '',
    result: ''
  });

}

const removeEducationalHistory = (index) => {
  if (index !== 0) {
    props.educationalHistory.splice(index, 1);

  }
}

const toggleEdit = () => {
  if (isEditing.value) {

    emit('updateEducationalHistory', props.educationalHistory);
  }
  isEditing.value = !isEditing.value;
};
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between align-center">
        <VCardTitle class="padding-bottom">Educational History</VCardTitle>
        <VBtn v-if="props.isEdit && $can('edit', 'student')" :color="isEditing ? 'success' : 'primary'"
          @click="toggleEdit">
          {{ isEditing ? 'Save Changes' : 'Edit' }}
        </VBtn>
      </div>

      <!-- Table View -->
      <div v-if="props.isEdit && !isEditing">
        <VTable density="compact" class="info-table custom-table">
          <thead>
            <tr>
              <th>Degree</th>
              <th>Institution</th>
              <th>Passing Year</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(education, index) in educationalHistory" :key="index">
              <td>{{ education.degree || '-' }}</td>
              <td>{{ education.institution || '-' }}</td>
              <td>{{ education.passing_year || '-' }}</td>
              <td>{{ education.result || '-' }}</td>
            </tr>
          </tbody>
        </VTable>
      </div>

      <!-- Form View -->
      <VRow v-else v-for="(education, index) in educationalHistory" :key="index">
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

// Enhanced table styles
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

  :deep(tr:last-child td) {
    border-block-end: none;
  }
}

// Enhanced card styles
.v-card {
  position: relative;
  z-index: 0;
  border-radius: 6px;
  background: rgb(var(--v-theme-surface)) !important;
  box-shadow: 0 4px 18px -4px rgba(var(--v-shadow-key-umbra-color), 0.1);

  :deep(.v-card-text) {
    position: relative;
    z-index: 1;
    padding-block: 16px;
    padding-inline: 24px;
  }

  &::before {
    position: absolute;
    z-index: 0;
    border-radius: inherit;
    background:
      linear-gradient(180deg,
        rgba(var(--v-theme-surface), 0.05) 0%,
        rgba(var(--v-theme-surface), 0.02) 100%);
    content: "";
    inset: 0;
  }
}

/* Make tables full height */
.v-table {
  background: transparent !important;
  block-size: 100%;

  :deep(td) {
    padding-block: 8px !important;
    padding-inline: 16px !important;
  }
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .custom-table {

    :deep(td),
    :deep(th) {
      font-size: 0.8rem;
      padding-block: 8px !important;
      padding-inline: 12px !important;
    }
  }

  .v-card {
    margin-inline: 8px;
  }
}
</style>
