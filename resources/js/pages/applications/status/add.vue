<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { defineEmits, defineProps, ref } from "vue";
const commonFunctionStore = commonFunction();
const statusName = ref(""); // Status name input
const description = ref(""); // Description input
const colorCode = ref(""); // Color code input

const isLoading = ref(false);
const props = defineProps({
    isNavDrawerOpen: Boolean,
    updateApplicationStatuses: Function,
});
const refForm = ref(null);
const emits = defineEmits(["update:isNavDrawerOpen", "updateApplicationStatuses"]);

// Validation rule for required fields
const requiredValidator = (value) => !!value || "Required field";

// Function to handle form submission
const addStatus = async () => {
    const isValid = await refForm.value.validate();
    if (!isValid) return;

    const statusData = {
        name: statusName.value,
        description: description.value,
        color: colorCode.value,

    };
    console.log(statusData);
    try {
        isLoading.value = true;
        await commonFunctionStore.addApplicationStatus(statusData);

        isLoading.value = false;
        // Reset form fields
        statusName.value = "";
        description.value = "";
        colorCode.value = "";

        emits("update:isNavDrawerOpen", false);
        emits("updateApplicationStatuses");
    } catch (error) {
        console.error("Failed to add application status:", error);
    }
};
</script>

<template>
    <VNavigationDrawer v-model="props.isNavDrawerOpen" temporary touchless border="none" location="end" width="400"
        elevation="10" :scrim="false" class="app-customizer">
        <div class="customizer-heading d-flex align-center justify-space-between">
            <div>
                <h6 class="text-h6">Add New Application Status</h6>
            </div>
            <div class="d-flex align-center gap-1">
                <VBtn icon variant="text" color="medium-emphasis" size="small"
                    @click="emits('update:isNavDrawerOpen', false)">
                    <VIcon icon="tabler-x" color="high-emphasis" size="24" />
                </VBtn>
            </div>
        </div>

        <VDivider />
        <VForm ref="refForm" @submit.prevent="addStatus" class="form-padding mt-4">
            <AppTextField v-model="statusName" label="Status Name" :rules="[requiredValidator]" class="mb-2" />

            <AppTextarea v-model="description" label="Description" :rules="[requiredValidator]" class="mb-2" />

            <AppTextField v-model="colorCode" label="Color Code" :rules="[requiredValidator]" class="mb-2" />



            <VBtn :loading="isLoading" :disabled="isLoading" color="primary" @click="addStatus" class="mt-4" block>
                Add
            </VBtn>
        </VForm>
    </VNavigationDrawer>
</template>
<style lang="scss">
.form-padding {
    padding-block: 0 2rem;
    padding-inline: 2rem;
}
</style>
