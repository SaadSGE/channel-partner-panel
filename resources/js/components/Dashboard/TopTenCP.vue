<script lang="js" setup>
import { useDemoDashboardStore } from '@/@core/stores/demodashboard';

const demoDashboardStore = useDemoDashboardStore();

const topTenCP = ref([]);

const fetchTopTenCP = async () => {
    await demoDashboardStore.fetchDashboardData();
    topTenCP.value = demoDashboardStore.dashboardData.top_channel_partners;
}

onMounted(async () => {
    await fetchTopTenCP();
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
            <VCardTitle>Top Ten Channel Partners</VCardTitle>
            <VCardSubtitle>
                Average 72% completed
            </VCardSubtitle>
            <template #append>
                <div class="mt-n4 me-n2">
                    <MoreBtn size="small" :menu-list="moreList" />
                </div>
            </template>
        </VCardItem>

        <VCardText>
            <VList class="card-list">
                <VListItem v-for="channelPartner in topTenCP" :key="channelPartner.name">
                    <!-- <template #prepend>
                        <VAvatar size="34" rounded class="me-1">
                            <VImg :src="channelPartner.avatarImg" />
                        </VAvatar>
                    </template> -->

                    <VListItemTitle class="font-weight-medium">
                        {{ channelPartner.name }}
                    </VListItemTitle>
                    <VListItemSubtitle class="me-4">
                        {{ channelPartner.applications }}
                    </VListItemSubtitle>

                    <template #append>
                        <div class="d-flex align-center gap-x-4">
                            <div style="inline-size: 4.875rem;">
                                <VProgressLinear :model-value="channelPartner.success_rate"
                                    :color="channelPartner.progressColor" height="8" rounded-bar rounded />
                            </div>
                            <span class="text-disabled">{{ channelPartner.success_rate }}%</span>
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
