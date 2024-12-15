<script lang="js" setup>
definePage({
    meta: {
        action: 'read',
        subject: 'dashboard',
    },
})
import { commonFunction } from "@/@core/stores/commonFunction";
import { ref } from 'vue';

const requiredValidator = value => {
    if (!value || !value.trim()) return 'This field is required'
    return true
}

const taskForm = ref({
    yesterday_tasks: '',
    today_plans: '',
    blockers: ''
})

const isSubmitting = ref(false);
const commonFunctionStore = commonFunction();

const submitTask = async () => {
    try {
        isSubmitting.value = true
        // API call will go here
        await commonFunctionStore.addDailyTask(taskForm.value)

        // Reset form after successful submission
        taskForm.value = {
            yesterday_tasks: '',
            today_plans: '',
            blockers: ''
        }
    } catch (error) {
        console.error('Failed to submit task:', error)
    } finally {
        isSubmitting.value = false
    }
}
</script>

<template>
    <VCard>
        <VCardTitle class="text-h5 pa-4">
            Submit Your Daily Task
        </VCardTitle>

        <VCardText>
            <VForm @submit.prevent="submitTask">
                <VRow>
                    <VCol cols="12">
                        <AppTextarea v-model="taskForm.yesterday_tasks" label="What did you do yesterday?" rows="3"
                            :rules="[requiredValidator]" required />
                    </VCol>

                    <VCol cols="12">
                        <AppTextarea v-model="taskForm.today_plans" label="What do you plan to do today?" rows="3"
                            :rules="[requiredValidator]" required />
                    </VCol>

                    <VCol cols="12">
                        <AppTextarea v-model="taskForm.blockers" label="Any Blockages?" rows="2"
                            :rules="[requiredValidator]" />
                    </VCol>

                    <VCol cols="12" class="d-flex justify-end">
                        <VBtn type="submit" color="primary" :loading="isSubmitting">
                            Submit Task
                        </VBtn>
                    </VCol>
                </VRow>
            </VForm>
        </VCardText>
    </VCard>

</template>
