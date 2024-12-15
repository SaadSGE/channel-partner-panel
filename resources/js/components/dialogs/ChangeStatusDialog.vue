<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    showDialog: Boolean,
    leadId: Number,
    statusId: Number,
    leadStatuses: Array,
    resolveLeadStatusName: Function,
});

const emit = defineEmits(['updateStatus', 'closeDialog']);
const selectedStatus = ref(null); // Store selected status ID

// Watch for dialog open to set current status
watch(
    () => props.showDialog,
    (newVal) => {
        if (newVal) {
            // Set the current status when the dialog is opened
            selectedStatus.value = props.resolveLeadStatusName(props.statusId);
        }
    }
);

// Close dialog function
const closeDialog = () => {
    emit('closeDialog');
};

// Emit updateStatus with leadId and selectedStatus ID
const updateStatus = () => {
    if (selectedStatus.value !== null) {
        emit('updateStatus', { leadId: props.leadId, statusId: selectedStatus.value });
        closeDialog();
    }
};
</script>

<template>
    <VDialog :model-value="props.showDialog" persistent :width="$vuetify.display.smAndDown ? 'auto' : 400"
        @click:outside="closeDialog">
        <VCard>
            <VCardTitle>Select New Status</VCardTitle>
            <VCardText>
                <!-- Use leadStatuses as items in AppAutocomplete -->
                <AppAutocomplete v-model="selectedStatus" :items="leadStatuses" :item-title="(item) => item.name"
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
