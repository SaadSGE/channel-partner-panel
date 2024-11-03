<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { defineEmits, defineProps, ref } from "vue";
const loadings = ref([]);

const commonFunctionStore = commonFunction();

const countryName = ref(""); // Selected country (ID)
const timezone = ref("");
const allCountries = ref([]); // List of countries
const isLoading = ref(false);
const props = defineProps({
    isNavDrawerOpen: Boolean,
});
const refForm = ref(null);
const emits = defineEmits(["update:isNavDrawerOpen"]);

// Validation rule for required fields
const requiredValidator = (value) => !!value || "Required field";





// Function to handle form submission
const addAllCountry = async () => {
    const isValid = await refForm.value.validate();
    if (!isValid) return;

    const countryData = {

        name: countryName.value,
        timezone: timezone.value

    };

    try {
        isLoading.value = true;
        await commonFunctionStore.addAllCountry(countryData);
        isLoading.value = false;
        countryName.value = "";
        emits("update:isNavDrawerOpen", false);
    } catch (error) {
        console.error("Failed to add country:", error);
    }
};
</script>

<template>
    <VNavigationDrawer v-model="props.isNavDrawerOpen" temporary touchless border="none" location="end" width="400"
        elevation="10" :scrim="false" class="app-customizer">
        <div class="customizer-heading d-flex align-center justify-space-between">
            <div>
                <h6 class="text-h6">Add New Country</h6>
            </div>
            <div class="d-flex align-center gap-1">
                <VBtn icon variant="text" color="medium-emphasis" size="small"
                    @click="emits('update:isNavDrawerOpen', false)">
                    <VIcon icon="tabler-x" color="high-emphasis" size="24" />
                </VBtn>
            </div>
        </div>

        <VDivider />
        <VForm ref="refForm" @submit.prevent="addAllCountry" class="form-padding mt-4">
            <AppTextField v-model="countryName" label="Country Name" :rules="[requiredValidator]" class="mb-2" />
            <AppTextField v-model="timezone" label="Timezone" :rules="[requiredValidator]" class="mb-2" />
            <VBtn :loading="isLoading" :disabled="isLoading" color="primary" @click="addAllCountry" class="mt-4" block>
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
