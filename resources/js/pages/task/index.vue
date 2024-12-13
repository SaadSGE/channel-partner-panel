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
const totalTasks = ref(0)
const itemsPerPage = ref(10)

const sortedTasks = computed(() => {
    return [...tasks.value].sort((a, b) => new Date(b.date) - new Date(a.date))
})
const headers = ref([
    { title: 'Date', key: 'date' },
    // { title: 'User', key: 'student.name' },
    { title: 'Yesterday', key: 'yesterday' },
    { title: 'Today', key: 'today' },
    { title: 'Blockages', key: 'blockages' },


])
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

    <section>
        <VCard class="mb-6">
            <AppCardActions title="Tasks" :loading="isLoading" no-actions>

                <VCardText v-if="$can('filter', 'user')">
                    <VRow>
                        <!-- 👉 Select status -->
                        <!-- <Filters :selected-assigned-status="selectedAssignedStatus"
                        :selected-lead-status="selectedLeadStatus" :selected-dateFrom="selectedDateFrom"
                        :selected-dateTo="selectedDateTo" @update-assignedStatus="selectedAssignedStatus = $event"
                        @update-lead-status="selectedLeadStatus = $event" @update-dateFrom="selectedDateFrom = $event"
                        @update-dateTo="selectedDateTo = $event">
                    </Filters> -->
                    </VRow>

                </VCardText>

                <VCardText class="d-flex flex-wrap gap-4">
                    <div class="me-3 d-flex gap-3">
                        <AppSelect :model-value="itemsPerPage" :items="[
                            { value: 10, title: '10' },
                            { value: 25, title: '25' },
                            { value: 50, title: '50' },
                            { value: 100, title: 100 },
                            { value: -1, title: 'All' },
                        ]" style="inline-size: 6.25rem;" @update:model-value="itemsPerPage = parseInt($event, 10)" />
                    </div>
                    <VSpacer />
                    <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
                        <!-- 👉 Search  -->
                        <div style="inline-size: 15.625rem;">
                            <AppTextField v-model="search" placeholder="Search here" />
                        </div>
                    </div>
                </VCardText>


                <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :loading="isLoading"
                    @update:options="updateOptions" :items-length="tasks.length" :headers="headers" :items="tasks"
                    item-value="total" class="text-no-wrap text-sm rounded-0">
                </VDataTableServer>
            </AppCardActions>
        </VCard>
    </section>
</template>
