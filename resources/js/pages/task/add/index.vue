<script lang="js" setup>
definePage({
    meta: {
        action: 'read',
        subject: 'dashboard',
    },
})
import { ref } from 'vue';

const taskForm = ref({
    yesterday: '',
    today: '',
    blockages: ''
})

const isSubmitting = ref(false)

const submitTask = async () => {
    try {
        isSubmitting.value = true
        // API call will go here

        // Reset form after successful submission
        taskForm.value = {
            yesterday: '',
            today: '',
            blockages: ''
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
                        <AppTextarea v-model="taskForm.yesterday" label="What did you do yesterday?" rows="3"
                            required />
                    </VCol>

                    <VCol cols="12">
                        <AppTextarea v-model="taskForm.today" label="What do you plan to do today?" rows="3" required />
                    </VCol>

                    <VCol cols="12">
                        <AppTextarea v-model="taskForm.blockages" label="Any Blockages?" rows="2" />
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
