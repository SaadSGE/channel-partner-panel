<script setup>
import { getLeadStatus } from "@/@core/utils/helpers";
const props = defineProps({
    showDialog: Boolean,
    leadId: Number,
});

const emit = defineEmits(["updateStatus", "closeDialog"]);
const selectedStatus = ref('');
const statusOptions = Array.from({ length: 15 }, (i) => ({
    value: i + 1,
    text: getLeadStatus(i + 1),
}));
console.log(statusOptions);
watch(
    () => props.showDialog,
    (newVal) => {
        if (newVal) {
            // Fetch and set the current lead's status
            selectedStatus.value = getLeadStatus(props.leadId);
        }
    }
);

// Close dialog function
const closeDialog = () => {
    emit("closeDialog");
};

// Update status function
const updateStatus = () => {
    if (selectedStatus.value) {
        emit("updateStatus", { leadId: props.leadId, status: selectedStatus.value });
        closeDialog();
    }
};
</script>

<template>
    <VDialog :model-value="props.showDialog" persistent :width="$vuetify.display.smAndDown ? 'auto' : 400">
        <VCard>
            <VCardTitle>Select New Status</VCardTitle>
            <VCardText>
                <AppAutocomplete v-model="selectedStatus" :items="statusOptions" :item-title="(item) => item.name"
                    :item-value="(item) => item.id" label="Status" placeholder="Select Status"
                    :rules="[requiredValidator]" clearable />
            </VCardText>
            <VCardActions>
                <VSpacer />
                <VBtn color="primary" @click="updateStatus">Update Status</VBtn>
                <VBtn text @click="closeDialog">Cancel</VBtn>
            </VCardActions>
        </VCard>
    </VDialog>
</template>

<style scoped>
/* Style adjustments if needed */
</style>
