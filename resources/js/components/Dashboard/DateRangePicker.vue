<script lang="js" setup>
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: false,
    },
});

const fromDate = ref('');
const toDate = ref('');

const emit = defineEmits(['dateRangeSelected', 'close-menu']);

const applyDateRange = () => {
    emit('dateRangeSelected', {
        fromDate: fromDate.value,
        toDate: toDate.value,
    });
    emit('close-menu'); // Emit event to close the menu
};
</script>

<template>

    <VCardItem>
        <VCardTitle>{{ title }}</VCardTitle>
        <VCardSubtitle v-if="subtitle">
            {{ subtitle }}
        </VCardSubtitle>
        <template #append>
            <div style="position: relative;" class="mt-n4 me-n2">
                <VMenu :close-on-content-click="false">
                    <template #activator="{ props }">
                        <MoreBtn size="small" v-bind="props" class="ma-2" />
                    </template>
                    <VCard style="position: absolute;inset-inline-end: 0;" min-width="400" min-height="160"
                        class="pa-1 mt-2">
                        <VCardText>
                            <VRow class="date-range-picker cursor-default">
                                <VCol cols="12" md="6">
                                    <AppDateTimePicker v-model="fromDate" placeholder="Select From Date" @click.stop />
                                </VCol>

                                <VCol cols="12" md="6">
                                    <AppDateTimePicker v-model="toDate" placeholder="Select To Date" @click.stop />
                                </VCol>

                                <VCol cols="12" class="d-flex justify-end">
                                    <VBtn color="primary" @click="applyDateRange">
                                        Apply
                                    </VBtn>
                                </VCol>
                            </VRow>
                        </VCardText>
                    </VCard>
                </VMenu>
            </div>
        </template>
    </VCardItem>
</template>
