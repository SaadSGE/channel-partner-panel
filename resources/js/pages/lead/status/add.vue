<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { defineEmits, defineProps, onMounted, ref } from "vue";
const loadings = ref([]);

const commonFunctionStore = commonFunction();
const branchName = ref(""); // Branch name input
const countryName = ref(null); // Selected country (ID)
const countriesName = ref([]); // List of countries
const isLoading = ref(false);
const props = defineProps({
    isNavDrawerOpen: Boolean,
    updateBranches: Function,
});
const refForm = ref(null);
const emits = defineEmits(["update:isNavDrawerOpen", "updateBranches"]);

// Validation rule for required fields
const requiredValidator = (value) => !!value || "Required field";

// Fetch countries on component mount
onMounted(async () => {
    await getCountries();
});

// Fetch countries from API
const getCountries = async () => {
    try {
        await commonFunctionStore.getAllCountries();
        countriesName.value = commonFunctionStore.allCountries;
    } catch (error) {
        console.error("Error fetching countries:", error);
    }
};

// Function to handle form submission
const addBranch = async () => {
    const isValid = await refForm.value.validate();
    if (!isValid) return;

    const branchData = {
        name: branchName.value,
        country_id: countryName.value,
    };

    try {
        isLoading.value = true;
        await commonFunctionStore.addBranch(branchData);
        isLoading.value = false;
        branchName.value = "";
        countryName.value = null;
        emits("update:isNavDrawerOpen", false);
        emits("updateBranches");
    } catch (error) {
        console.error("Failed to add branch:", error);
    }
};
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
        <VForm ref="refForm" @submit.prevent="addBranch" class="form-padding mt-4">
            <AppTextField v-model="branchName" label="Branch Name" :rules="[requiredValidator]" class="mb-2" />
            <!-- Country Select Field -->
            <AppAutocomplete v-model="countryName" :items="countriesName" :item-title="(item) => item.name"
                :item-value="(item) => item.id" label="Country Name" placeholder="Select Country"
                :rules="[requiredValidator]" clearable />

            <VBtn :loading="isLoading" :disabled="isLoading" color="primary" @click="addBranch" class="mt-4" block>
                Add
            </VBtn>
        </VForm>
    </VNavigationDrawer>
</template>

<!-- <style lang="scss">
.form-padding {
    padding-block: 0 2rem;
    padding-inline: 2rem;
}
</style> -->
