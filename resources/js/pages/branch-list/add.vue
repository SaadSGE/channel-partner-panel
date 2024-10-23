<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { defineEmits, defineProps, ref } from "vue";
const loadings = ref([]);

const commonFunctionStore = commonFunction();
const branchName = ref(""); // Branch name input
const countryName = ref(null); // Selected country (ID)
const countriesName = ref([]); // List of countries
const isLoading = ref(false);
const props = defineProps({
    isNavDrawerOpen: Boolean,
});
const refForm = ref(null);
const emits = defineEmits(["update:isNavDrawerOpen"]);



// Placeholder for validation rule
const requiredValidator = (value) => !!value || "Required field";


// Fetch countries on component mount
onMounted(async () => {
    await getCountries();

});

// Fetch countries from API
const getCountries = async () => {
    try {
        const response = await commonFunctionStore.getCountriesName();
        console.log(response);
        countriesName.value = response.data;
    } catch (error) {
        console.error("Error fetching countriesName:", error);
    }
};

const addbranch = async () => {
    refForm.value.validate().then((success) => {
        if (!success.valid) {
            return;
        }
        else {
            submitbranch()
        }
    });

};
const submitbranch = async () => {
    const branchData = {
        name: branchName.value,
        countryId: countryName.value, // Using country ID instead of name
    };

    try {
        isLoading.value = true;
        await commonFunctionStore.addBranch(branchData);
        isLoading.value = false;
        branchName.value = "";
        emits("update:isNavDrawerOpen", false);
    } catch (error) {
        console.error("Failed to add branch:", error);
    }
}
</script>
<template>
    <VNavigationDrawer v-model="props.isNavDrawerOpen" temporary touchless border="none" location="end" width="400"
        elevation="10" :scrim="false" class="app-customizer">
        <div class="customizer-heading d-flex align-center justify-space-between">
            <div>
                <h6 class="text-h6">Add New Branch</h6>
            </div>

            <div class="d-flex align-center gap-1">
                <VBtn icon variant="text" color="medium-emphasis" size="small"
                    @click="emits('update:isNavDrawerOpen', false)">
                    <VIcon icon="tabler-x" color="high-emphasis" size="24" />
                </VBtn>
            </div>
        </div>

        <VDivider />
        <VForm ref="refForm" @submit.prevent="addbranch" class="form-padding mt-4">

            <AppTextField v-model="branchName" label="Branch Name" :rules="[requiredValidator]" class="mb-2" />
            <!-- Country Select Field -->
            <AppSelect v-model="countryName" label="Country Name" :items="countriesName" item-value="id"
                item-text="name" :rules="[requiredValidator]" class="mb-2" />


            <VBtn :loading="isLoading" :disabled="isLoading" color="primary" @click="addintake" class="mt-4" block>Add
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
