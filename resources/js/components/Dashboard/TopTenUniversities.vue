<script lang="js" setup>
import { useDemoDashboardStore } from '@/@core/stores/demodashboard';
import universitylogo from '../../../images/university.jpg';

const demoDashboardStore = useDemoDashboardStore();
const topTenUniversities = ref([]);

const fetchTopTenUniversities = async () => {
    await demoDashboardStore.fetchDashboardData();
    topTenUniversities.value = demoDashboardStore.dashboardData.top_universities;
}

onMounted(async () => {
    await fetchTopTenUniversities();
});


</script>

<template>
    <VCard>
        <DateRangePicker title="Top 10 Universities" subtitle="8.52k Total Applications"
            @dateRangeSelected="handleDateRangeSelected" @close-menu="closeMenu" />

        <VCardText>
            <VList class="card-list">
                <VListItem v-for="university in topTenUniversities" :key="university.name">
                    <template #prepend>
                        <VAvatar size="34" color="secondary" variant="tonal" class="me-1" :image="universitylogo" />
                    </template>

                    <VListItemTitle class="font-weight-medium">
                        {{ university.name }}
                    </VListItemTitle>
                    <VListItemSubtitle>
                        {{ university.country }}
                    </VListItemSubtitle>

                    <template #append>
                        <div class="d-flex align-center font-weight-medium">
                            <div class="font-weight-medium">
                                {{ university.applications }}
                            </div>
                        </div>
                    </template>
                </VListItem>
            </VList>
        </VCardText>
    </VCard>
</template>
