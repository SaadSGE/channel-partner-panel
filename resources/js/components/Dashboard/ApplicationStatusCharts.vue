<script lang="js" setup>
import { useDemoDashboardStore } from '@/@core/stores/demodashboard';
import { hexToRgb } from '@layouts/utils';
import { computed, ref } from 'vue';
import { useTheme } from 'vuetify';

const vuetifyTheme = useTheme();
const currentTab = ref(0);
const refVueApexChart = ref();
const demoDashboardStore = useDemoDashboardStore();
const statusItems = ref([
    {
        application_status_id: 1,
        application_status_name: "Application Processing"
    },
    {
        application_status_id: 2,
        application_status_name: "Pending Documents"
    },
    {
        application_status_id: 3,
        application_status_name: "Offer Issued"
    },
    {
        application_status_id: 4,
        application_status_name: "Visa Applied"
    }
]);

// Set default selected status to "Application Processing"
const selectedStatus = ref(statusItems.value[0].application_status_id);

const chartConfigs = computed(() => {
    const currentTheme = vuetifyTheme.current.value.colors;
    const variableTheme = vuetifyTheme.current.value.variables;
    const labelPrimaryColor = `rgba(${hexToRgb(currentTheme.primary)},${variableTheme['dragged-opacity']})`;
    const legendColor = `rgba(${hexToRgb(currentTheme['on-background'])},${variableTheme['high-emphasis-opacity']})`;
    const borderColor = `rgba(${hexToRgb(String(variableTheme['border-color']))},${variableTheme['border-opacity']})`;
    const labelColor = `rgba(${hexToRgb(currentTheme['on-surface'])},${variableTheme['disabled-opacity']})`;

    return {
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
            colors: [
                labelPrimaryColor,
                labelPrimaryColor,
                `rgba(${hexToRgb(currentTheme.primary)}, 1)`,
                labelPrimaryColor,
                labelPrimaryColor,
                labelPrimaryColor,
                labelPrimaryColor,
                labelPrimaryColor,
                labelPrimaryColor,
                labelPrimaryColor,
                labelPrimaryColor,
                labelPrimaryColor,
            ],
            dataLabels: {
                enabled: true,
                formatter(val) {
                    return `${val}k`;
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
                        return `${val / 1}k`;
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
    };
});

const chartData = computed(() => {
    if (!selectedStatus.value || !demoDashboardStore.applicationStatuses.length)
        return [];

    const status = demoDashboardStore.applicationStatuses.find(
        s => s.application_status_id === selectedStatus.value
    );

    return status ? [{
        data: status.monthly_counts
    }] : [];
});

</script>

<template>
    <VCard title="Application Status">
        <template #append>
            <div class="mt-n4 me-n2">
                <AppAutocomplete v-model="selectedStatus" :items="statusItems" item-title="application_status_name"
                    item-value="application_status_id" label="Select Status" style="min-inline-size: 200px;" />
            </div>
        </template>

        <VCardText>
            <div v-if="selectedStatus" class="mb-4">
                <VChip color="primary" label class="text-capitalize">
                    {{ statusItems.value?.find(item => item.application_status_id ===
                        selectedStatus)?.application_status_name }}
                </VChip>
            </div>

            <VueApexCharts ref="refVueApexChart" :options="chartConfigs.chartOptions" :series="chartData" height="230"
                class="mt-3" />
        </VCardText>
    </VCard>
</template>
