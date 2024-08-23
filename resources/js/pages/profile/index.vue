<script setup>
definePage({
  meta: {
    public: true,
  },
})

import { useUserStore } from '@/@core/stores/user';
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';

// Store and State
const authStore = useUserStore();
const isFormValid = ref(false);
const refForm = ref();

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  mobileNumber: '',
  whatsappNumber: '',
  companyName: '',
  website: '',
  address: '',
  city: '',
  postCode: '',
  country: '',
  role: '',
});

const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
});

const userRole = ref(''); // To store the user's role

// Fetch user profile data on mount
onMounted(async () => {
  const profile = await authStore.getUserProfile(); // Fetch user profile from API
  if (profile) {
    form.value = {
      ...form.value,
      firstName: profile.first_name,
      lastName: profile.last_name,
      email: profile.email,
      mobileNumber: profile.mobile_number,
      whatsappNumber: profile.whatsapp_number,
      companyName: profile.company_name,
      website: profile.website,
      address: profile.address,
      city: profile.city,
      postCode: profile.post_code,
      country: profile.country,
      role: profile.role,
    };
    userRole.value = profile.role; // Store the user's role
  }
});

// Submit Profile Form
const onSubmit = async () => {
  refForm.value?.validate().then(async ({ valid }) => {
    if (valid) {
      try {
        // Update user profile with the form data
        await authStore.updateUserProfile(form.value); // Assuming there's a method to update user profile

        Swal.fire({
          icon: 'success',
          title: 'Profile Updated Successfully',
          text: 'Your profile details have been updated!',
          confirmButtonText: 'OK',
        });
      } catch (error) {
        console.error('Error updating profile:', error);
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: error.response?.data.message || 'An unexpected error occurred',
          confirmButtonText: 'OK',
        });
      }
    }
  });
};

// Submit Password Change Form
const onChangePassword = async () => {
  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    Swal.fire({
      icon: 'error',
      title: 'Password Mismatch',
      text: 'New password and confirm password do not match.',
      confirmButtonText: 'OK',
    });
    return;
  }

  try {
    await authStore.changePassword({
      current_password: passwordForm.value.currentPassword,
      new_password: passwordForm.value.newPassword,
    });

    Swal.fire({
      icon: 'success',
      title: 'Password Changed Successfully',
      text: 'Your password has been updated!',
      confirmButtonText: 'OK',
    });

    // Reset the form fields after successful password change

  } catch (error) {

    Swal.fire({
      icon: 'error',
      title: 'Change Password Failed',
      text: error,
      confirmButtonText: 'OK',
    });
  }
};
</script>

<template>
  <VCard title="General Information">
    <VCardText>
      <!-- Profile Form -->
      <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
        <VRow>
          <!-- First Name -->
          <VCol cols="12" md="6">
            <AppTextField
              v-model="form.firstName"
              :rules="[requiredValidator]"
              label="First Name"
              placeholder="John"
            />
          </VCol>

          <!-- Last Name -->
          <VCol cols="12" md="6">
            <AppTextField
              v-model="form.lastName"
              :rules="[requiredValidator]"
              label="Last Name"
              placeholder="Doe"
            />
          </VCol>

          <!-- Mobile Number -->
          <VCol cols="12" md="4">
            <AppTextField
              v-model="form.mobileNumber"
              label="Mobile Number"
              type="tel"
              placeholder="+1-541-754-3010"
            />
          </VCol>

          <!-- WhatsApp Number -->
          <VCol cols="12" md="4">
            <AppTextField
              v-model="form.whatsappNumber"
              label="WhatsApp Number"
              type="tel"
              placeholder="+1-541-754-3010"
            />
          </VCol>

          <!-- Conditional Fields for Channel Partner Role -->
          <template v-if="form.role === 'channel partner'">
            <!-- Company Name -->
            <VCol cols="12" md="4">
              <AppTextField
                v-model="form.companyName"
                :rules="[requiredValidator]"
                label="Company Name"
                placeholder="Enter company name"
              />
            </VCol>

            <!-- Website -->
            <VCol cols="12" md="4">
              <AppTextField
                v-model="form.website"
                label="Website"
                placeholder="Enter website URL"
              />
            </VCol>

            <!-- Address -->
            <VCol cols="12" md="4">
              <AppTextField
                v-model="form.address"
                :rules="[requiredValidator]"
                label="Address"
                placeholder="Enter address"
              />
            </VCol>

            <!-- City -->
            <VCol cols="12" md="4">
              <AppTextField
                v-model="form.city"
                :rules="[requiredValidator]"
                label="City"
                placeholder="Enter city"
              />
            </VCol>

            <!-- Post Code -->
            <VCol cols="12" md="4">
              <AppTextField
                v-model="form.postCode"
                :rules="[requiredValidator]"
                label="Post Code"
                placeholder="Enter post code"
              />
            </VCol>
          </template>

          <!-- Submit and Reset -->
          <VCol cols="12">
            <VBtn type="submit" class="me-3">
              Save Changes
            </VBtn>
            <VBtn type="reset" variant="tonal" color="error">
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
  </VCard>

  <VCard title="Change Password" class="mt-4">
    <VCardText>
      <VForm @submit.prevent="onChangePassword">
        <VRow>
          <!-- Current Password -->
          <VCol cols="12">
            <AppTextField
              v-model="passwordForm.currentPassword"
              label="Current Password"
              type="password"
              :rules="[requiredValidator]"
              placeholder="Enter current password"
            />
          </VCol>

          <!-- New Password -->
          <VCol cols="12">
            <AppTextField
              v-model="passwordForm.newPassword"
              label="New Password"
              type="password"
              :rules="[requiredValidator]"
              placeholder="Enter new password"
            />
          </VCol>

          <!-- Confirm New Password -->
          <VCol cols="12">
            <AppTextField
              v-model="passwordForm.confirmPassword"
              label="Confirm New Password"
              type="password"
              :rules="[requiredValidator]"
              placeholder="Confirm new password"
            />
          </VCol>

          <!-- Submit -->
          <VCol cols="12">
            <VBtn type="submit" class="me-3">
              Change Password
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
  </VCard>
</template>
