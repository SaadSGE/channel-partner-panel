<script lang="js" setup>
definePage({
    meta: {
        action: 'read',
        subject: 'dashboard',
    },
})
import { commonFunction } from "@/@core/stores/commonFunction";
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const taskForm = ref({
    yesterday_tasks: '',
    today_plans: '',
    blockers: ''
})

const isSubmitting = ref(false);
const commonFunctionStore = commonFunction();

const submitTask = async () => {
    try {
        // Check if any field is empty
        if (!taskForm.value.yesterday_tasks.trim()) {
            toast.error('Please fill in what you did yesterday', {
                position: 'top-right',
                theme: 'colored',
            });
            return;
        }

        if (!taskForm.value.today_plans.trim()) {
            toast.error('Please fill in what you plan to do today', {
                position: 'top-right',
                theme: 'colored',
            });
            return;
        }

        if (!taskForm.value.blockers.trim()) {
            toast.error('Please fill in any blockages', {
                position: 'top-right',
                theme: 'colored',
            });
            return;
        }

        isSubmitting.value = true
        // API call will go here
        await commonFunctionStore.addDailyTask(taskForm.value)

        // Show success message
        toast.success('Daily task has been added successfully', {
            position: 'top-right',
            theme: 'colored',
        });

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
                        <AppTextarea v-model="taskForm.yesterday_tasks" label="What did you do yesterday?" rows="3" />
                    </VCol>

                    <VCol cols="12">
                        <AppTextarea v-model="taskForm.today_plans" label="What do you plan to do today?" rows="3" />
                    </VCol>

                    <VCol cols="12">
                        <AppTextarea v-model="taskForm.blockers" label="Any Blockages?" rows="2" />
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
