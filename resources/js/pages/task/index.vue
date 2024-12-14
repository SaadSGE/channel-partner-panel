<script lang="js" setup>
definePage({
    meta: {
        action: 'read',
        subject: 'dashboard',
    },
})
import { commonFunction } from '@/@core/stores/commonFunction';
import { ref } from 'vue';

const tasks = ref([]);
const commonFunctionStore = commonFunction();
const isLoading = ref(false)
const totalTasks = ref(0)
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const search = ref('')
const selectedDateFrom = ref(null)
const selectedDateTo = ref(null)

const headers = ref([
    { title: 'Date', key: 'created_at' },
    { title: 'User', key: 'user.full_name' },
    { title: 'Yesterday', key: 'yesterday_tasks' },
    { title: 'Today', key: 'today_plans' },
    { title: 'Blockages', key: 'blockers' },


])
onMounted(() => {
    fetchTasks()
})


const fetchTasks = async () => {
    try {
        isLoading.value = true
        await commonFunctionStore.getDailyTasks(
            null,
            page.value,
            itemsPerPage.value,
            search.value,
            sortBy.value,
            orderBy.value,
            selectedDateFrom.value,
            selectedDateTo.value,
        )
        tasks.value = commonFunctionStore.tasks
        totalTasks.value = commonFunctionStore.tasks.total
    } catch (error) {
        console.error('Failed to fetch tasks:', error)
    } finally {
        isLoading.value = false
    }
}

// Watchers
watch([
    search,
    selectedDateFrom,
    selectedDateTo,
], () => {
    fetchTasks()
})
</script>

<template>

    <section>
        <VCard class="mb-6">
            <AppCardActions title="Tasks" :loading="isLoading" no-actions>

                <VCardText v-if="$can('filter', 'user')">
                    <VRow>
                        <!-- 👉 Select status -->
                        <Filters :selected-dateFrom="selectedDateFrom" :selected-dateTo="selectedDateTo"
                            @update-dateFrom="selectedDateFrom = $event" @update-dateTo="selectedDateTo = $event">
                        </Filters>
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
