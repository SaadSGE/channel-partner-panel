<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { ref } from "vue";

const loadings = ref([]);
const commonFunctionStore = commonFunction();

const yesterdayTask = ref("");
const todayPlan = ref("");
const blockages = ref("");
const isLoading = ref(false);
const refForm = ref(null);

// Validation rule for required fields
const requiredValidator = (value) => !!value || "Required field";

// Function to handle form submission
const submitDailyTask = async () => {
    const isValid = await refForm.value.validate();
    if (!isValid) return;

    const taskData = {
        yesterday: yesterdayTask.value,
        today: todayPlan.value,
        blockages: blockages.value,
        date: new Date().toISOString().split('T')[0]
    };

    try {
        isLoading.value = true;
        // Add API call here to submit task
        yesterdayTask.value = "";
        todayPlan.value = "";
        blockages.value = "";
    } catch (error) {
        console.error("Failed to submit task:", error);
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <VCard>
        <VCardTitle class="text-h5 pa-4">
            Submit Your Daily Task
        </VCardTitle>

        <VCardText>
            <VForm ref="refForm" @submit.prevent="submitDailyTask">
                <VRow>
                    <VCol cols="12">
                        <VTextarea v-model="yesterdayTask" label="What did you do yesterday?"
                            :rules="[requiredValidator]" rows="3" />
                    </VCol>

                    <VCol cols="12">
                        <VTextarea v-model="todayPlan" label="What do you plan to do today?"
                            :rules="[requiredValidator]" rows="3" />
                    </VCol>

                    <VCol cols="12">
                        <VTextarea v-model="blockages" label="Any Blockage?" rows="3" />
                    </VCol>

                    <VCol cols="12" class="d-flex justify-end">
                        <VBtn type="submit" :loading="isLoading">
                            Submit
                        </VBtn>
                    </VCol>
                </VRow>
            </VForm>
        </VCardText>
    </VCard>
</template>
