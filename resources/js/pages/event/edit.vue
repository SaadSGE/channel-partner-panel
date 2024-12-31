<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { defineEmits, defineProps, ref, watch } from "vue";

const commonFunctionStore = commonFunction();
const eventName = ref("");
const eventDescription = ref("");
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
            eventName.value = newValue.name;
            eventDescription.value = newValue.description;
            id.value = newValue.id;
        }
    },
    { immediate: true }
);

// Validation rule for required fields
const requiredValidator = (value) => !!value || "Required field";

// Function to handle form submission
const updateevent = async () => {
    const isValid = await refForm.value.validate();
    if (!isValid) return;

    const eventData = {
        name: eventName.value,
        description: eventDescription.value,
    };

    try {
        isLoading.value = true;
        await commonFunctionStore.updateEvent(id.value, eventData);
        isLoading.value = false;
        eventName.value = "";
        eventDescription.value = "";
        emits("update:isNavDrawerOpen", false);
    } catch (error) {
        console.error("Failed to update event:", error);
    }
};
</script>

<template>
    <VNavigationDrawer v-model="props.isNavDrawerOpen" temporary touchless border="none" location="end" width="400"
        elevation="10" :scrim="false" class="app-customizer">
        <div class="customizer-heading d-flex align-center justify-space-between">
            <div>
                <h6 class="text-h6">Update Event</h6>
            </div>
            <div class="d-flex align-center gap-1">
                <VBtn icon variant="text" color="medium-emphasis" size="small"
                    @click="emits('update:isNavDrawerOpen', false)">
                    <VIcon icon="tabler-x" color="high-emphasis" size="24" />
                </VBtn>
            </div>
        </div>

        <VDivider />
        <VForm ref="refForm" @submit.prevent="updateevent" class="form-padding mt-4">
            <AppTextField v-model="eventName" label="Event Name" :rules="[requiredValidator]" class="mb-2" />
            <AppTextarea v-model="eventDescription" label="Description" :rules="[requiredValidator]" class="mb-2" />
            <VBtn :loading="isLoading" :disabled="isLoading" color="primary" @click="updateevent" class="mt-4" block>
                Update
            </VBtn>
        </VForm>
    </VNavigationDrawer>
</template>
<style lang="scss">
.form-padding {
    padding-block: 0 2rem;
    padding-inline: 2rem;
}

.app-customizer {
    .customizer-section {
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        gap: 1.5rem;
    }

    .customizer-heading {
        padding-block: 1rem;
        padding-inline: 1.5rem;
    }

    .custom-input-wrapper {
        .v-col {
            padding-inline: 10px;
        }

        .v-label.custom-input {
            border: none;
            color: rgb(var(--v-theme-on-surface));
            outline: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
        }
    }

    .v-navigation-drawer__content {
        display: flex;
        flex-direction: column;
    }

    .v-label.custom-input.active {
        border-color: transparent;
        outline: 2px solid rgb(var(--v-theme-primary));
    }

    .v-label.custom-input:not(.active):hover {
        border-color: rgba(var(--v-border-color), 0.22);
    }

    .customizer-skins {
        .custom-input.active {
            .customizer-skins-icon-wrapper {
                background-color:
                    rgba(var(--v-global-theme-primary),
                        var(--v-selected-opacity));
            }
        }
    }

    .app-customizer-primary-colors {
        .primary-color-wrapper:not(.active) {
            &:hover {
                outline-color: rgba(var(--v-border-color), 0.22) !important;
            }
        }
    }
}

.app-customizer-toggler {
    position: fixed !important;
    inset-block-start: 20%;
    inset-inline-end: 0;
}
</style>
