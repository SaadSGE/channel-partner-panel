<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { defineEmits, defineProps, ref, watch } from "vue";
const loadings = ref([]);

const commonFunctionStore = commonFunction();
const statusName = ref("");
const description = ref("");
const colorCode = ref("");
const healthType = ref(null);
const isLoading = ref(false);
const convertToStudent = ref(false);
const deadLead = ref(false);
const healthTypeOptions = [
  { title: 'Hot', value: 'hot' },
  { title: 'Warm', value: 'warm' },
  { title: 'Dead', value: 'dead' },
];
const showColorPicker = ref(false);

const props = defineProps({
  isNavDrawerOpen: Boolean,
  editedItem: Object,
});

const id = ref(null);
const refForm = ref(null);
const emits = defineEmits(["update:isNavDrawerOpen"]);

watch(
  () => props.editedItem,
  (newValue) => {
    if (newValue) {
      console.log('newValue', newValue);
      statusName.value = newValue.name;
      description.value = newValue.description;
      colorCode.value = newValue.color_code;
      healthType.value = newValue.health_type;
      id.value = newValue.id;
      convertToStudent.value = newValue.convert_to_student == 1 ? true : false;
      deadLead.value = newValue.dead_lead == 1 ? true : false;
    }
  },
  { immediate: true }
);

// Validation rule for required fields
const requiredValidator = (value) => !!value || "Required field";

// Function to handle form submission
const updateLeadStatus = async () => {
  const isValid = await refForm.value.validate();
  if (!isValid) return;

  const statusData = {
    name: statusName.value,
    description: description.value,
    color_code: colorCode.value,
    health_type: healthType.value,
    convert_to_student: convertToStudent.value,
    dead_lead: deadLead.value,
  };

  try {
    isLoading.value = true;
    await commonFunctionStore.updateLeadStatus(id.value, statusData);
    isLoading.value = false;
    statusName.value = "";
    description.value = "";
    colorCode.value = "";
    healthType.value = null;
    emits("update:isNavDrawerOpen", false);
  } catch (error) {
    console.error("Failed to update lead status:", error);
  }
};
</script>

<template>
  <VNavigationDrawer v-model="props.isNavDrawerOpen" temporary touchless border="none" location="end" width="400"
    elevation="10" :scrim="false" class="app-customizer">
    <div class="customizer-heading d-flex align-center justify-space-between pa-6">
      <div>
        <h6 class="text-h6">Update Lead Status</h6>
      </div>
      <div class="d-flex align-center gap-1">
        <VBtn icon variant="text" color="medium-emphasis" size="small" @click="emits('update:isNavDrawerOpen', false)">
          <VIcon icon="tabler-x" color="high-emphasis" size="24" />
        </VBtn>
      </div>
    </div>

    <VDivider />
    <VForm ref="refForm" @submit.prevent="updateLeadStatus" class="pa-6">
      <AppTextField v-model="statusName" label="Status Name" :rules="[requiredValidator]" class="mb-4" />
      <AppTextarea v-model="description" label="Description" :rules="[requiredValidator]" class="mb-4" />
      <div class="mb-4">
        <VLabel class="mb-2">Color Code</VLabel>
        <div class="d-flex align-center gap-2">
          <VTextField v-model="colorCode" :rules="[requiredValidator]" readonly
            :style="{ backgroundColor: colorCode }" />
          <VBtn icon variant="tonal" @click="showColorPicker = true">
            <VIcon icon="tabler-palette" />
          </VBtn>
        </div>
      </div>
      <VDialog v-model="showColorPicker" width="300">
        <VCard>
          <VCardTitle class="d-flex justify-space-between align-center pa-4">
            Select Color
            <VBtn icon variant="text" @click="showColorPicker = false">
              <VIcon icon="tabler-x" />
            </VBtn>
          </VCardTitle>
          <VCardText>
            <VColorPicker v-model="colorCode" mode="hex" hide-inputs />
          </VCardText>
          <VCardActions>
            <VSpacer />
            <VBtn color="primary" @click="showColorPicker = false">
              Done
            </VBtn>
          </VCardActions>
        </VCard>
      </VDialog>
      <AppSelect v-model="healthType" :items="healthTypeOptions" label="Health Type" :rules="[requiredValidator]"
        class="mb-4" />
      <VCheckbox v-model="convertToStudent" label="Success Lead" class="mb-2" density="comfortable" />
      <VCheckbox v-model="deadLead" label="Dead Lead" class="mb-4" density="comfortable" />

      <VBtn :loading="isLoading" :disabled="isLoading" color="primary" @click="updateLeadStatus" block>
        Update
      </VBtn>
    </VForm>
  </VNavigationDrawer>
</template>
