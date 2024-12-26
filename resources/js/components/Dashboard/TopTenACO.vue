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
        <VCardItem>
            <VCardTitle>Top 10 ACO</VCardTitle>
            <VCardSubtitle>
                8.52k Total Applications
            </VCardSubtitle>
            <template #append>
                <div class="mt-n4 me-n2">
                    <MoreBtn size="small" :menu-list="moreList" />
                </div>
            </template>
        </VCardItem>

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

<style lang="scss" scoped>
.card-list {
    --v-card-list-gap: 16px;
}
</style>
