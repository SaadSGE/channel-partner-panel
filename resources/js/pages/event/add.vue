<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { defineEmits, defineProps, ref } from "vue";

const commonFunctionStore = commonFunction();
const eventName = ref("");
const eventDescription = ref("");
const isLoading = ref(false);
const props = defineProps({
    isNavDrawerOpen: Boolean,
    updateEvents: Function,
});
const refForm = ref(null);
const emits = defineEmits(["update:isNavDrawerOpen", "updateBranches"]);

// Validation rule for required fields
const requiredValidator = (value) => !!value || "Required field";

// Function to handle form submission
const addEvent = async () => {
    const isValid = await refForm.value.validate();
    if (!isValid) return;

    const eventData = {
        name: eventName.value,
        description: eventDescription.value,
    };

    try {
        isLoading.value = true;
        await commonFunctionStore.addEvent(eventData);
        isLoading.value = false;
        eventName.value = "";
        eventDescription.value = "";
        emits("update:isNavDrawerOpen", false);
        emits("updateEvents");
    } catch (error) {
        console.error("Failed to add event:", error);
    }
};
</script>

<template>
    <VNavigationDrawer v-model="props.isNavDrawerOpen" temporary touchless border="none" location="end" width="400"
        elevation="10" :scrim="false" class="app-customizer">
        <div class="customizer-heading d-flex align-center justify-space-between">
            <div>
                <h6 class="text-h6">Add New Event</h6>
            </div>
            <div class="d-flex align-center gap-1">
                <VBtn icon variant="text" color="medium-emphasis" size="small"
                    @click="emits('update:isNavDrawerOpen', false)">
                    <VIcon icon="tabler-x" color="high-emphasis" size="24" />
                </VBtn>
            </div>
        </div>

        <VDivider />
        <VForm ref="refForm" @submit.prevent="addEvent" class="form-padding mt-4">
            <AppTextField v-model="eventName" label="Event Name" :rules="[requiredValidator]" class="mb-2" />
            <!-- Country Select Field -->
            <AppTextarea v-model="eventDescription" label="Description" :rules="[requiredValidator]" class="mb-2" />

            <VBtn :loading="isLoading" :disabled="isLoading" color="primary" @click="addEvent" class="mt-4" block>
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
