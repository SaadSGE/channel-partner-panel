<script setup>
import { useFileStore } from "@/@core/stores/fileStore";
import { onMounted, ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps({
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
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['updateEnglishProficiency', 'saveChanges']);
const fileStore = useFileStore();

const isEditing = ref(false);

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

const toggleEdit = () => {
  if (isEditing.value) {
    emit('saveChanges', props.englishProficiency);
  }
  isEditing.value = !isEditing.value;
};

// Watch for changes and emit updates
watch(() => props.englishProficiency, (newValue) => {
  emit('updateEnglishProficiency', newValue);
}, { deep: true });
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between align-center">
        <VCardTitle class="padding-bottom">English Proficiency</VCardTitle>
        <VBtn v-if="props.isEdit" :color="isEditing ? 'success' : 'primary'" @click="toggleEdit">
          {{ isEditing ? 'Save Changes' : 'Edit' }}
        </VBtn>
      </div>

      <div v-if="props.isEdit && !isEditing">
        <VTable density="compact" class="info-table custom-table">
          <thead>
            <tr>
              <th>Proficiency Title</th>
              <th>Overall Score</th>
              <th>Listening</th>
              <th>Speaking</th>
              <th>Writing</th>
              <th>Reading</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!props.englishProficiency?.length">
              <td colspan="6" class="text-center text-medium-emphasis">No English proficiency records found.</td>
            </tr>
            <tr v-else v-for="(proficiency, index) in englishProficiency" :key="index">
              <td>{{ proficiency.proficiencyTitle || '-' }}</td>
              <td>{{ proficiency.overallScore || '-' }}</td>
              <td>{{ proficiency.listening || '-' }}</td>
              <td>{{ proficiency.speaking || '-' }}</td>
              <td>{{ proficiency.writing || '-' }}</td>
              <td>{{ proficiency.reading || '-' }}</td>
            </tr>
          </tbody>
        </VTable>
      </div>

      <template v-else>
        <p class="text-center">Add English Proficiency</p>
        <VRow v-for="(proficiency, index) in englishProficiency" :key="index">
          <VCol cols="12" md="3">
            <AppTextField v-model="proficiency.title" label="Proficiency Title" placeholder="Proficiency Title"
              density="compact" />
          </VCol>
          <VCol cols="12" md="3">
            <AppTextField v-model="proficiency.overall_score" label="Overall Score" placeholder="Overall Score"
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
          <VCol cols="12" md="2" class="d-flex align-center mt-5">
            <VBtn v-if="index !== 0" icon="tabler-x" color="error" @click="removeEnglishProficiency(index)" class="me-2"
              size="small" />
            <VBtn icon="tabler-plus" color="primary" @click="addEnglishProficiency" size="small" />
          </VCol>
        </VRow>
      </template>
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

  :deep(tr:last-child td) {
    border-block-end: none;
  }
}
</style>
