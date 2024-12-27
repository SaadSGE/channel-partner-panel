<script lang="js" setup>
import { useDemoDashboardStore } from '@/@core/stores/demodashboard';

const demoDashboardStore = useDemoDashboardStore();

const topTenACO = ref([]);

const fetchTopTenACO = async () => {
    await demoDashboardStore.fetchDashboardData();
    topTenACO.value = demoDashboardStore.dashboardData.top_application_officers;
}

onMounted(async () => {
    await fetchTopTenACO();
});

const moreList = [
    {
        title: 'View All',
        value: 'View All',
    },
]
</script>

<template>
    <VCard>
        <DateRangePicker title="Top 10 ACO" subtitle="8.52k Total Applications"
            @dateRangeSelected="handleDateRangeSelected" @close-menu="closeMenu" />
        <VCardText>
            <VList class="card-list">
                <VListItem v-for="aco in topTenACO" :key="aco.name">
                    <!-- <template #prepend>
                        <VAvatar :color="aco.avatarColor" variant="tonal" size="34" rounded class="me-1">
                            <VIcon :icon="aco.avatarIcon" size="22" />
                        </VAvatar>
                    </template> -->

                    <VListItemTitle class="font-weight-medium">
                        {{ aco.name }}
                    </VListItemTitle>
                    <VListItemSubtitle class="me-4">
                        {{ aco.country }}
                    </VListItemSubtitle>

                    <template #append>
                        <div class="d-flex gap-x-4">
                            <div class="text-body-1">
                                {{ aco.processed_applications }}
                            </div>
                            <div :class="`text-${aco.efficiency_rate_color}`">
                                {{ aco.efficiency_rate }}
                            </div>
                        </div>
                    </template>
                </VListItem>
            </VList>
        </VCardText>
    </VCard>
</template>
