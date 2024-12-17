<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { defineEmits, defineProps, ref, watch } from "vue";
const loadings = ref([]);

const commonFunctionStore = commonFunction();
const statusName = ref("");
const description = ref("");
const colorCode = ref("");

const isLoading = ref(false);

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
            statusName.value = newValue.name;
            description.value = newValue.description;
            colorCode.value = newValue.color_code;

            id.value = newValue.id;
        }
    },
    { immediate: true }
);

// Validation rule for required fields
const requiredValidator = (value) => !!value || "Required field";

// Function to handle form submission
const updateApplicationStatus = async () => {
    const isValid = await refForm.value.validate();
    if (!isValid) return;

    const statusData = {
        name: statusName.value,
        description: description.value,
        color: colorCode.value,

    };

    try {
        isLoading.value = true;
        await commonFunctionStore.updateApplicationStatus(id.value, statusData);
        isLoading.value = false;
        statusName.value = "";
        description.value = "";
        colorCode.value = "";

        emits("update:isNavDrawerOpen", false);
    } catch (error) {
        console.error("Failed to update application status:", error);
    }
};
</script>

<template>
    <VNavigationDrawer v-model="props.isNavDrawerOpen" temporary touchless border="none" location="end" width="400"
        elevation="10" :scrim="false" class="app-customizer">
        <div class="customizer-heading d-flex align-center justify-space-between">
            <div>
                <h6 class="text-h6">Update Application Status</h6>
            </div>
            <div class="d-flex align-center gap-1">
                <VBtn icon variant="text" color="medium-emphasis" size="small"
                    @click="emits('update:isNavDrawerOpen', false)">
                    <VIcon icon="tabler-x" color="high-emphasis" size="24" />
                </VBtn>
            </div>
        </div>

        <VDivider />
        <VForm ref="refForm" @submit.prevent="updateApplicationStatus" class="form-padding mt-4">
            <AppTextField v-model="statusName" label="Status Name" :rules="[requiredValidator]" class="mb-2" />
            <AppTextarea v-model="description" label="Description" :rules="[requiredValidator]" class="mb-2" />
            <AppTextField v-model="colorCode" label="Color Code" :rules="[requiredValidator]" class="mb-2" />

            class="mb-2" />

            <VBtn :loading="isLoading" :disabled="isLoading" color="primary" @click="updateApplicationStatus"
                class="mt-4" block>
                Update
            </VBtn>
        </VForm>
    </VNavigationDrawer>
</template>
