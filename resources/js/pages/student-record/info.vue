<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import EducationHistory from '@/components/student/EducationHistory.vue';
import EmploymentHistory from '@/components/student/EmploymentHistory.vue';
import EnglishProficiency from '@/components/student/EnglishProficiency.vue';
import GeneralInformation from '@/components/student/GeneralInformation.vue';
import UniversityEntry from '@/components/student/UniversityEntry.vue';
import { onMounted } from 'vue';

definePage({
  meta: {
    public: true
  }
})

const refForm = ref(null);
const commonFunctionStore = commonFunction();

onMounted(async () => {
  await commonFunctionStore.getUniqueCountries();
  isLoading.value = false;
});

const emit = defineEmits(['back'])

const handleBack = () => {
  emit('back')
}
</script>

<template>
  <div>
    <VBtn color="secondary" class="mb-4" @click="handleBack">
      <VIcon start icon="tabler-arrow-left" />
      Back
    </VBtn>

    <VCard>
      <VCardText>
        <VCardTitle class="text-center">Student Information</VCardTitle>
        <VForm ref="refForm" class="form-padding">
          <GeneralInformation class="mt-3" />
          <UniversityEntry class="mt-3" />
          <EducationHistory class="mt-3" />
          <EnglishProficiency class="mt-3" />
          <EmploymentHistory class="mt-3" />

          <div class="submit-btn-flex">
            <VBtn color="primary">Submit</VBtn>
          </div>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style>
.submit-btn-flex {
  display: flex;
  justify-content: end;
  margin-block-start: 18px;
  margin-inline-end: 18px;
}

.card-padding {
  padding-block-end: 180px;
}
</style>
