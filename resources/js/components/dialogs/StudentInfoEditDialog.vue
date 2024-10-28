<script setup>
const props = defineProps({
    isDialogVisible: {
        type: Boolean,
        required: true,
    },
})
const fullName = ref('')
const passportNo = ref('')
const dob = ref('')
const email = ref('')
const emit = defineEmits(['update:isDialogVisible'])

const dialogVisibleUpdate = val => {
    emit('update:isDialogVisible', val)
}
</script>

<template>
    <VDialog :model-value="props.isDialogVisible" :width="$vuetify.display.smAndDown ? 'auto' : 1200"
        @update:model-value="dialogVisibleUpdate">
        <!-- 👉 Dialog close btn -->
        <DialogCloseBtn @click="$emit('update:isDialogVisible', false)" />

        <VCard class="pricing-dialog pa-2 pa-sm-10">
            <VCardText>
                <VForm @submit.prevent="() => { }">
                    <VRow>
                        <!-- 👉 First Name -->
                        <VCol cols="12" md="6">
                            <AppTextField v-model="fullName" label="Full Name" placeholder="John Doe" />
                        </VCol>

                        <!-- 👉 Email -->
                        <VCol cols="12" md="6">
                            <AppTextField v-model="email" label="Email" placeholder="johndoe@email.com" />
                        </VCol>

                        <!-- 👉 Passport -->
                        <VCol cols="12" md="6">
                            <AppTextField v-model="passportNo" label="Passport No" placeholder="A04292351" />
                        </VCol>

                        <!-- 👉 Country -->
                        <VCol cols="12" md="6">
                            <AppTextField v-model="dob" label="Date of Birth" placeholder="United States" />
                        </VCol>

                        <VCol cols="12" class="d-flex gap-4">
                            <VBtn type="submit">
                                Update
                            </VBtn>
                        </VCol>
                    </VRow>
                </VForm>
            </VCardText>
        </VCard>
    </VDialog>
</template>
