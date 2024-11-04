<script setup>
import { useApplicationStore } from "@/@core/stores/submitApplication";
import Swal from 'sweetalert2';
import { defineEmits, defineProps, ref } from 'vue';
const props = defineProps({
    isDialogVisible: Boolean,
    first_name: String,
    last_name: String,
    email: String,
    passport_no: String,
    dob: String,
    id: String,
    refreshUpdateInfo: Function
});
const applicationStore = useApplicationStore()
const studentPassportNo = ref("");
const dateOfBirth = ref("");
const studentFirstName = ref("");
const studentLastName = ref("");
const studentEmail = ref("");
const id = ref("");
const isSwalVisible = ref(false);
const isLoading = ref(false)

// Initialize form fields when dialog opens
watch(() => props.isDialogVisible, (newVal) => {
    if (newVal) {
        studentFirstName.value = props.first_name;
        studentLastName.value = props.last_name;
        studentEmail.value = props.email;
        studentPassportNo.value = props.passport_no;
        dateOfBirth.value = props.dob;
        id.value = props.id
    }
});

const emit = defineEmits(['update:isDialogVisible', 'refreshUpdateInfo']);
const dialogVisibleUpdate = (val) => {
    emit('update:isDialogVisible', val);
};

const refForm = ref(null);

// Handle form validation and display confirmation dialog
const openDialog = async () => {
    if (refForm.value) {
        refForm.value.validate().then((success) => {
            if (success) {
                isSwalVisible.value = true;
            }
        });
    }
};

// Final submission after confirmation
const submit = async () => {
    isLoading.value = true
    const updatedData = {
        passport_no: studentPassportNo.value,
        date_of_birth: dateOfBirth.value,
        first_name: studentFirstName.value,
        last_name: studentLastName.value,
        email: studentEmail.value,
    };

    try {
        await applicationStore.updateApplication(updatedData, id.value);

        Swal.fire({
            icon: 'success',
            title: 'Update Successful',
            text: 'Application updated successfully!',
            confirmButtonText: 'OK',
        });

        // Reset values after update
        // studentPassportNo.value = '';
        // dateOfBirth.value = '';
        // studentFirstName.value = '';
        // studentLastName.value = '';
        // studentEmail.value = '';

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Update Failed',
            text: error,
            confirmButtonText: 'OK',
        });
    } finally {
        isLoading.value = false;
    }

    // Close confirmation dialog and the main dialog
    isSwalVisible.value = false;
    dialogVisibleUpdate(false);
    emit('refreshUpdateInfo');
};
</script>

<template>
    <VDialog :model-value="props.isDialogVisible" persistent :width="$vuetify.display.smAndDown ? 'auto' : 1200"
        @update:model-value="dialogVisibleUpdate">
        <!-- 👉 Dialog close btn -->
        <DialogCloseBtn @click="$emit('update:isDialogVisible', false)" />

        <VCard class="pricing-dialog pa-2 pa-sm-10">
            <VCardText>
                <VForm ref="refForm" class="form-padding" @submit.prevent="{ }">
                    <VRow>
                        <VCol cols="12" md="12">
                            <VRow>
                                <VCol cols="12" md="6">
                                    <AppTextField v-model="studentFirstName" label="Student First Name"
                                        placeholder="John" :rules="[requiredValidator]" />
                                </VCol>
                                <VCol cols="12" md="6">
                                    <AppTextField v-model="studentLastName" label="Student Last Name" placeholder="Doe"
                                        :rules="[requiredValidator]" />
                                </VCol>
                            </VRow>
                            <VRow>
                                <VCol cols="12" md="6">
                                    <AppTextField v-model="studentPassportNo" label="Student Passport No."
                                        placeholder="A099800" :rules="[requiredValidator]" />
                                </VCol>
                                <VCol cols="12" md="6">
                                    <AppDateTimePicker v-model="dateOfBirth" label="Date of birth"
                                        placeholder="Select date" :rules="[requiredValidator]" />
                                </VCol>
                            </VRow>
                            <VRow>
                                <VCol cols="12" md="6">
                                    <AppTextField v-model="studentEmail" label="Enter Student E-Mail ID"
                                        placeholder="student@example.com" type="email"
                                        :rules="[requiredValidator, emailValidator]" />
                                </VCol>
                            </VRow>
                            <div class="d-flex justify-end mt-4">
                                <VBtn color="primary" @click="openDialog">
                                    Update
                                </VBtn>
                            </div>
                        </VCol>
                    </VRow>
                </VForm>
            </VCardText>
        </VCard>
    </VDialog>

    <!-- Confirmation Dialog -->
    <VDialog v-model="isSwalVisible" max-width="500">
        <VCard>
            <VCardTitle class="text-h5">
                Confirm Submission
            </VCardTitle>
            <VCardText>Are you sure you want to update the information?</VCardText>
            <VCardActions>
                <VSpacer />
                <VBtn color="primary" @click="submit">
                    Yes
                </VBtn>
                <VBtn color="secondary" @click="isSwalVisible = false">
                    No
                </VBtn>
            </VCardActions>
        </VCard>
    </VDialog>
</template>
