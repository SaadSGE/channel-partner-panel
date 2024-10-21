<script setup>
import { useNigeriaStudentStore } from '@core/stores/nigeriaStudent';
import { emailValidator, requiredValidator } from '@core/utils/validators';
import Swal from 'sweetalert2';
import { computed, ref } from 'vue';
console.log('nigeria')
definePage({
  meta: {
    layout: "blank",
    public: true,
    unauthenticatedOnly: true,
  },
});

const nigeriaStudentStore = useNigeriaStudentStore()
const refForm = ref(null)

const formData = ref({
  fullName: '',
  email: '',
  contactNumber: '',
  interestedCourse: '',
})

const isLoading = computed(() => nigeriaStudentStore.isLoading)
const error = computed(() => nigeriaStudentStore.error)

const submitForm = async () => {
  const { valid } = await refForm.value.validate()
  if (!valid) return

  try {
    await nigeriaStudentStore.registerStudent(formData.value)
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful',
      text: 'You have been registered successfully!',
      confirmButtonText: 'OK',
    }).then(() => {
      // Reload the page after the success message is confirmed
      location.reload();
    })
    // Reset form after successful submission
    formData.value = {
      fullName: '',
      email: '',
      contactNumber: '',
      interestedCourse: '',
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Registration Failed',
      text: error.message || 'An error occurred during registration',
      confirmButtonText: 'OK',
    })
  } finally {
    nigeriaStudentStore.clearError()
  }
}

const exclusiveServices = [
  'Free application processing',
  'Visa application support',
  'Assistance with accommodation arrangements',
  'Post-arrival guidance',
  'National Insurance application support',
  'Bank account setup assistance',
  'Doctor registration support',
  'Help with finding part-time jobs',
  'Information on work permits after degree completion',
  'Special discounts for future referrals',
]
</script>

<template>
  <VContainer class="fill-height">
    <!-- Logo as a banner -->
    <div class="text-center mb-4">
      <img src="https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/channelPartnerPanel/sge-logo-trans.png"
        alt="Logo" style="inline-size: 100%; max-block-size: 200px; object-fit: cover;" />
    </div>

    <!-- Registration Form Section -->
    <VRow justify="center" class="mt-8">
      <VCol cols="12" sm="10" md="8" lg="6">
        <VCard class="elevation-12">
          <VCardTitle class="text-h5 font-weight-bold pa-4">
            Membership Registration
          </VCardTitle>
          <VCardText>
            <VForm ref="refForm" @submit.prevent="submitForm">
              <VRow>
                <VCol cols="12">
                  <AppTextField v-model="formData.fullName" label="Full Name" placeholder="John Doe"
                    :rules="[requiredValidator]" />
                </VCol>
                <VCol cols="12">
                  <AppTextField v-model="formData.email" label="Email" type="email" placeholder="john@example.com"
                    :rules="[requiredValidator, emailValidator]" />
                </VCol>
                <VCol cols="12">
                  <AppTextField v-model="formData.contactNumber" label="Contact Number" placeholder="+234 123 456 7890"
                    :rules="[requiredValidator]" />
                </VCol>
                <VCol cols="12">
                  <AppTextField v-model="formData.interestedCourse" label="Course you're interested to study"
                    placeholder="e.g., Computer Science" :rules="[requiredValidator]" />
                </VCol>
                <VCol cols="12">
                  <VBtn type="submit" color="primary" block :loading="isLoading">
                    Register
                  </VBtn>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <!-- Membership Benefits Section -->
    <VRow justify="center" class="mt-4">
      <VCol cols="12" sm="10" md="10" lg="10">
        <VCard class="elevation-12" style=" border: 1px solid #90caf9;background-color: #e3f2fd;">
          <VCardTitle class="text-h5 font-weight-bold pa-4">
            Membership Benefits
          </VCardTitle>
          <VCardText>
            <h3 class="text-h6 font-weight-bold mb-2">
              Exclusive Services for Our Members:
            </h3>
            <ul>
              <li v-for="(item, index) in exclusiveServices" :key="index">
                <VIcon color="primary" icon="mdi-check-circle" class="mr-2" />
                {{ item }}
              </li>
            </ul>
            <h3 class="text-h6 font-weight-bold mt-4 mb-2">
              Additional Benefits:
            </h3>
            <p>
              Upon enrollment, you'll join our alumni network and gain access to a wide range of exclusive services and
              opportunities in the UK.
            </p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
ul {
  list-style-type: disc;

  /* Use disc for bullet points */
  padding-inline-start: 20px;

  /* Indent the list */
}
</style>
