<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { defineEmits, defineProps, ref } from "vue";
const commonFunctionStore = commonFunction();
const statusName = ref(""); // Status name input
const description = ref(""); // Description input
const colorCode = ref(""); // Color code input
const healthRating = ref(null); // Health rating input
const isLoading = ref(false);
const convertToStudent = ref(false); // New checkbox for Convert to Student
const deadLead = ref(false); // New checkbox for Dead Lead
const props = defineProps({
  isNavDrawerOpen: Boolean,
  updateLeadStatuses: Function,
});
const refForm = ref(null);
const emits = defineEmits(["update:isNavDrawerOpen", "updateLeadStatuses"]);

// Validation rule for required fields
const requiredValidator = (value) => !!value || "Required field";

// Function to handle form submission
const addStatus = async () => {
  const isValid = await refForm.value.validate();
  if (!isValid) return;

  const statusData = {
    name: statusName.value,
    description: description.value,
    color_code: colorCode.value,
    health_rating: healthRating.value,
    convert_to_student: convertToStudent.value,
    dead_lead: deadLead.value,
  };
  console.log(statusData);
  try {
    isLoading.value = true;
    await commonFunctionStore.addLeadStatus(statusData);
    isLoading.value = false;
    // Reset form fields
    statusName.value = "";
    description.value = "";
    colorCode.value = "";
    healthRating.value = null;
    convertToStudent.value = false;
    deadLead.value = false;
    emits("update:isNavDrawerOpen", false);
    emits("updateLeadStatuses");
  } catch (error) {
    console.error("Failed to add lead status:", error);
  }
};
</script>

<template>
  <VNavigationDrawer v-model="props.isNavDrawerOpen" temporary touchless border="none" location="end" width="400"
    elevation="10" :scrim="false" class="app-customizer">
    <div class="customizer-heading d-flex align-center justify-space-between">
      <div>
        <h6 class="text-h6">Add New Lead Status</h6>
      </div>
      <div class="d-flex align-center gap-1">
        <VBtn icon variant="text" color="medium-emphasis" size="small" @click="emits('update:isNavDrawerOpen', false)">
          <VIcon icon="tabler-x" color="high-emphasis" size="24" />
        </VBtn>
      </div>
    </div>

    <VDivider />
    <VForm ref="refForm" @submit.prevent="addStatus" class="form-padding mt-4">
      <AppTextField v-model="statusName" label="Status Name" :rules="[requiredValidator]" class="mb-2" />

      <AppTextarea v-model="description" label="Description" :rules="[requiredValidator]" class="mb-2" />

      <AppTextField v-model="colorCode" label="Color Code" :rules="[requiredValidator]" class="mb-2" />

      <AppTextField v-model="healthRating" type="number" label="Health Rating" :rules="[requiredValidator]"
        class="mb-2" />

      <VCheckbox v-model="convertToStudent" label="Convert to Student" class="mb-2" />
      <VCheckbox v-model="deadLead" label="Dead Lead" class="mb-2" />

      <VBtn :loading="isLoading" :disabled="isLoading" color="primary" @click="addStatus" class="mt-4" block>
        Add
      </VBtn>
    </VForm>
  </VNavigationDrawer>
</template>
