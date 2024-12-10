<script lang="js" setup>
definePage({
    meta: {
        action: 'read',
        subject: 'dashboard',
    },
})
import { computed, onMounted, ref } from 'vue';

const tasks = ref([
    {
        date: '2024-12-05',
        yesterday: 'Completed module A.',
        today: 'Work on module B.',
        blockages: 'None'
    },
    {
        date: '2024-12-04',
        yesterday: 'Attended client calls.',
        today: 'Finalize designs.',
        blockages: 'Delayed feedback.'
    }
])

const isLoading = ref(false)

const sortedTasks = computed(() => {
    return [...tasks.value].sort((a, b) => new Date(b.date) - new Date(a.date))
})

onMounted(async () => {
    try {
        isLoading.value = true
        // Add API call here to fetch tasks
    } catch (error) {
        console.error('Failed to fetch tasks:', error)
    } finally {
        isLoading.value = false
    }
})
</script>

<template>
    <VCard>
        <VCardTitle class="text-h5 pa-4">
            Task Schedule
        </VCardTitle>

        <VCardText>
            <VTable v-if="!isLoading">
                <thead>
                    <tr>
                        <th class="text-left">
                            Date
                        </th>
                        <th class="text-left">
                            Yesterday
                        </th>
                        <th class="text-left">
                            Today
                        </th>
                        <th class="text-left">
                            Blockages
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in sortedTasks" :key="task.date">
                        <td>{{ new Date(task.date).toLocaleDateString() }}</td>
                        <td>{{ task.yesterday }}</td>
                        <td>{{ task.today }}</td>
                        <td>{{ task.blockages }}</td>
                    </tr>
                </tbody>
            </VTable>

            <div v-else class="d-flex justify-center align-center pa-4">
                <VProgressCircular indeterminate />
            </div>
        </VCardText>
    </VCard>
</template>
