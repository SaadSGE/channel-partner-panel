<script setup>
import { useDemoDashboardStore } from '@/@core/stores/demodashboard';
import { hexToRgb } from '@layouts/utils';
import { computed, onMounted, ref, watch } from 'vue';
import { useTheme } from 'vuetify';

const vuetifyTheme = useTheme();
const currentTab = ref(0);
const refVueApexChart = ref();
const demoDashboardStore = useDemoDashboardStore();
const chartData = ref([]);

// Fetch data when tab changes
watch(currentTab, async () => {
    // Add 1 to currentTab since API expects 1-based index
    chartData.value = await fetchChartData(currentTab.value + 1);

});

async function fetchChartData(leadStatusId) {
    const response = await demoDashboardStore.fetchLeadStatuses(leadStatusId);

    const statusData = demoDashboardStore.leadStatuses[leadStatusId - 1];

    if (statusData?.monthly_counts) {
        return [{
            data: statusData.monthly_counts
        }];
    }
    return [];
}

// Initial data fetch
onMounted(async () => {
    chartData.value = await fetchChartData(1); // Fetch initial data for first tab
});

const chartConfigs = computed(() => {
    const currentTheme = vuetifyTheme.current.value.colors
    const variableTheme = vuetifyTheme.current.value.variables
    const labelPrimaryColor = `rgba(${hexToRgb(currentTheme.primary)},${variableTheme['dragged-opacity']})`
    const legendColor = `rgba(${hexToRgb(currentTheme['on-background'])},${variableTheme['high-emphasis-opacity']})`
    const borderColor = `rgba(${hexToRgb(String(variableTheme['border-color']))},${variableTheme['border-opacity']})`
    const labelColor = `rgba(${hexToRgb(currentTheme['on-surface'])},${variableTheme['disabled-opacity']})`

    // Find max value index
    const getMaxIndex = (data) => {
        if (!data || !data[0] || !data[0].data) return -1;
        return data[0].data.reduce((maxIdx, curr, idx, arr) =>
            curr > arr[maxIdx] ? idx : maxIdx, 0);
    }

    const getColorArray = (maxIndex) => {
        const colors = new Array(12).fill(labelPrimaryColor);
        if (maxIndex >= 0) {
            colors[maxIndex] = `rgba(${hexToRgb(currentTheme.primary)}, 1)`;
        }
        return colors;
    }

    const maxIndex = getMaxIndex(chartData.value);

    return [
        {
            title: 'Hot Leads',
            icon: 'tabler-flame',
            chartOptions: {
                chart: {
                    parentHeightOffset: 0,
                    type: 'bar',
                    toolbar: { show: false },
                },
                plotOptions: {
                    bar: {
                        columnWidth: '32%',
                        borderRadiusApplication: 'end',
                        borderRadius: 4,
                        distributed: true,
                        dataLabels: { position: 'top' },
                    },
                },
                grid: {
                    show: false,
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: -10,
                        right: -10,
                    },
                },
                colors: getColorArray(maxIndex),
                dataLabels: {
                    enabled: true,
                    formatter(val) {
                        return `${val}`
                    },
                    offsetY: -25,
                    style: {
                        fontSize: '15px',
                        colors: [legendColor],
                        fontWeight: '600',
                        fontFamily: 'Public Sans',
                    },
                },
                legend: { show: false },
                tooltip: { enabled: false },
                xaxis: {
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                    ],
                    axisBorder: {
                        show: true,
                        color: borderColor,
                    },
                    axisTicks: { show: false },
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '13px',
                            fontFamily: 'Public Sans',
                        },
                    },
                },
                yaxis: {
                    labels: {
                        offsetX: -15,
                        formatter(val) {
                            return `${val / 1}`
                        },
                        style: {
                            fontSize: '13px',
                            colors: labelColor,
                            fontFamily: 'Public Sans',
                        },
                        min: 0,
                        max: 60000,
                        tickAmount: 6,
                    },
                },
                responsive: [
                    {
                        breakpoint: 1441,
                        options: { plotOptions: { bar: { columnWidth: '41%' } } },
                    },
                    {
                        breakpoint: 590,
                        options: {
                            plotOptions: { bar: { columnWidth: '61%' } },
                            yaxis: { labels: { show: false } },
                            grid: {
                                padding: {
                                    right: 0,
                                    left: -20,
                                },
                            },
                            dataLabels: {
                                style: {
                                    fontSize: '12px',
                                    fontWeight: '400',
                                },
                            },
                        },
                    },
                ],
            },
            series: chartData.value
        },
        {
            title: 'Warm Leads',
            icon: 'tabler-matchstick',
            chartOptions: {
                chart: {
                    parentHeightOffset: 0,
                    type: 'bar',
                    toolbar: { show: false },
                },
                plotOptions: {
                    bar: {
                        columnWidth: '32%',
                        borderRadiusApplication: 'end',
                        borderRadius: 4,
                        distributed: true,
                        dataLabels: { position: 'top' },
                    },
                },
                grid: {
                    show: false,
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: -10,
                        right: -10,
                    },
                },
                colors: getColorArray(maxIndex),
                dataLabels: {
                    enabled: true,
                    formatter(val) {
                        return `${val}`
                    },
                    offsetY: -25,
                    style: {
                        fontSize: '15px',
                        colors: [legendColor],
                        fontWeight: '600',
                        fontFamily: 'Public Sans',
                    },
                },
                legend: { show: false },
                tooltip: { enabled: false },
                xaxis: {
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                    ],
                    axisBorder: {
                        show: true,
                        color: borderColor,
                    },
                    axisTicks: { show: false },
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '13px',
                            fontFamily: 'Public Sans',
                        },
                    },
                },
                yaxis: {
                    labels: {
                        offsetX: -15,
                        formatter(val) {
                            return `${val / 1}`
                        },
                        style: {
                            fontSize: '13px',
                            colors: labelColor,
                            fontFamily: 'Public Sans',
                        },
                        min: 0,
                        max: 60000,
                        tickAmount: 6,
                    },
                },
                responsive: [
                    {
                        breakpoint: 1441,
                        options: { plotOptions: { bar: { columnWidth: '41%' } } },
                    },
                    {
                        breakpoint: 590,
                        options: {
                            plotOptions: { bar: { columnWidth: '61%' } },
                            grid: { padding: { right: 0 } },
                            dataLabels: {
                                style: {
                                    fontSize: '12px',
                                    fontWeight: '400',
                                },
                            },
                            yaxis: { labels: { show: false } },
                        },
                    },
                ],
            },
            series: chartData.value
        },
        {
            title: 'Dead Leads',
            icon: 'tabler-skull',
            chartOptions: {
                chart: {
                    parentHeightOffset: 0,
                    type: 'bar',
                    toolbar: { show: false },
                },
                plotOptions: {
                    bar: {
                        columnWidth: '32%',
                        borderRadiusApplication: 'end',
                        borderRadius: 4,
                        distributed: true,
                        dataLabels: { position: 'top' },
                    },
                },
                grid: {
                    show: false,
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: -10,
                        right: -10,
                    },
                },
                colors: getColorArray(maxIndex),
                dataLabels: {
                    enabled: true,
                    formatter(val) {
                        return `${val}`
                    },
                    offsetY: -25,
                    style: {
                        fontSize: '15px',
                        colors: [legendColor],
                        fontWeight: '600',
                        fontFamily: 'Public Sans',
                    },
                },
                legend: { show: false },
                tooltip: { enabled: false },
                xaxis: {
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                    ],
                    axisBorder: {
                        show: true,
                        color: borderColor,
                    },
                    axisTicks: { show: false },
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '13px',
                            fontFamily: 'Public Sans',
                        },
                    },
                },
                yaxis: {
                    labels: {
                        offsetX: -15,
                        formatter(val) {
                            return `${val / 1}`
                        },
                        style: {
                            fontSize: '13px',
                            colors: labelColor,
                            fontFamily: 'Public Sans',
                        },
                        min: 0,
                        max: 60000,
                        tickAmount: 6,
                    },
                },
                responsive: [
                    {
                        breakpoint: 1441,
                        options: { plotOptions: { bar: { columnWidth: '41%' } } },
                    },
                    {
                        breakpoint: 590,
                        options: {
                            plotOptions: { bar: { columnWidth: '61%' } },
                            grid: { padding: { right: 0 } },
                            dataLabels: {
                                style: {
                                    fontSize: '12px',
                                    fontWeight: '400',
                                },
                            },
                            yaxis: { labels: { show: false } },
                        },
                    },
                ],
            },
            series: chartData.value
        },

    ]
})


</script>

<template>
    <VCard title="Leads Status" subtitle="Yearly Leads Status Overview">


        <VCardText>
            <VSlideGroup v-model="currentTab" show-arrows mandatory class="mb-10">
                <VSlideGroupItem v-for="(report, index) in chartConfigs" :key="report.title"
                    v-slot="{ isSelected, toggle }" :value="index">
                    <div style="block-size: 110px; inline-size: 150px;"
                        :style="isSelected ? 'border-color:rgb(var(--v-theme-primary)) !important' : ''"
                        :class="isSelected ? 'border' : 'border border-dashed'"
                        class="d-flex flex-column justify-center align-center cursor-pointer rounded py-4 px-5 me-4"
                        @click="toggle">
                        <VAvatar rounded size="38" :color="isSelected ? 'primary' : ''" variant="tonal" class="mb-2">
                            <VIcon size="22" :icon="report.icon" />
                        </VAvatar>
                        <h6 class="text-base font-weight-medium mb-0">
                            {{ report.title }}
                        </h6>
                    </div>
                </VSlideGroupItem>

                <!-- 👉 slider more -->
                <!-- <VSlideGroupItem>
                    <div style="block-size: 100px; inline-size: 110px;"
                        class="d-flex flex-column justify-center align-center rounded border border-dashed py-4 px-5">
                        <VAvatar rounded size="38" variant="tonal">
                            <VIcon size="22" icon="tabler-plus" />
                        </VAvatar>
                    </div>
                </VSlideGroupItem> -->
            </VSlideGroup>

            <VueApexCharts ref="refVueApexChart" :key="currentTab"
                :options="chartConfigs[Number(currentTab)].chartOptions"
                :series="chartConfigs[Number(currentTab)].series" height="230" class="mt-3" />
        </VCardText>
    </VCard>
</template>
