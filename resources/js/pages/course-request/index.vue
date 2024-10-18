<script setup>
import { useRecordStore } from '@/@core/stores/recordStore';
import Swal from 'sweetalert2';

definePage({
    meta: {
        public: true
    },
});

const recordStore = useRecordStore();
const showModal = ref(false);
const isFormValid = ref(false);
const refForm = ref(null);
const universityName = ref("");
const courseName = ref("");
const intakeName = ref("");
const requiredValidator = (value) => !!value || 'This field is required';


const requestRecord = async () => {
    refForm.value.validate().then(async (valid) => {
        if (valid.valid) {

            try {
                await recordStore.requestForm({
                    universityName: universityName.value,
                    courseName: courseName.value,
                    intakeName: intakeName.value,
                });
                Swal.fire("Success!", "Your request has been successfully submitted. Our team will review it and get back to you shortly.", "success");
                showModal.value = false;
                refForm.value.reset();
            } catch (error) {
                Swal.fire("Error!", "Failed to submit the request.", "error");
            }
        }
    });
};
</script>
<template>
    <div class="text-center mt-2">
        Don't find your desired record?
        <a href="#" @click.prevent="showModal = true">Click here to request</a>
    </div>

    <VDialog v-model="showModal" max-width="500px">
        <VCard>
            <VCardTitle>Request Record</VCardTitle>
            <VCardText>
                <VForm ref="refForm" v-model="isFormValid" @submit.prevent="requestRecord">
                    <VTextField v-model="universityName" :rules="[requiredValidator]" label="University Name"
                        placeholder="Enter university name" class="mt-2" />
                    <VTextField v-model="courseName" :rules="[requiredValidator]" label="Course Name"
                        placeholder="Enter course name" class="mt-2" />
                    <VTextField v-model="intakeName" :rules="[requiredValidator]" label="Intake"
                        placeholder="Enter intake" class="mt-2" />
                </VForm>
            </VCardText>
            <VCardActions>
                <VSpacer></VSpacer>
                <VBtn color="primary" @click="requestRecord">Submit</VBtn>
                <VBtn @click="showModal = false">Cancel</VBtn>
            </VCardActions>
        </VCard>
    </VDialog>
</template>
