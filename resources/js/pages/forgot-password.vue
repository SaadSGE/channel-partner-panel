<script setup>
import { useAuthStore } from "@/@core/stores/auth";
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant';
import authV2ForgotPasswordIllustrationDark from '@images/pages/auth-v2-forgot-password-illustration-dark.png';
import authV2ForgotPasswordIllustrationLight from '@images/pages/auth-v2-forgot-password-illustration-light.png';
import loginImage from "@images/pages/login-image.png"; // Import the login image
import authV2MaskDark from '@images/pages/misc-mask-dark.png';
import authV2MaskLight from '@images/pages/misc-mask-light.png';
import { VNodeRenderer } from '@layouts/components/VNodeRenderer';
import { themeConfig } from '@themeConfig';
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter

definePage({
  meta: {
    layout: "blank",
    unauthenticatedOnly: true,
  },
});

const email = ref('')
const authStore = useAuthStore()
const { errors } = storeToRefs(authStore)
const isSubmitting = ref(false)
const resetStatus = ref('')
const router = useRouter(); // Initialize router

const authThemeImg = useGenerateImageVariant(authV2ForgotPasswordIllustrationLight, authV2ForgotPasswordIllustrationDark)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const loginImage2 = useGenerateImageVariant(loginImage); // Generate image variant

const resetPassword = async () => {
  isSubmitting.value = true
  resetStatus.value = ''
  try {
    const response = await authStore.resetPassword(email.value)
    resetStatus.value = response.message; // Assuming the API returns a success message

    // Show success message using SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Password Reset Successful',
      text: 'A new password has been sent to your email.',
      confirmButtonText: 'OK',
    }).then(() => {
      // Redirect to login page after confirmation
      router.push({ name: 'login' });
    });

    email.value = '' // Clear the email input
  } catch (error) {
    // Show error using SweetAlert
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response?.data?.message || 'An error occurred while resetting the password.',
      confirmButtonText: 'OK',
    });
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <RouterLink to="/">
    <div class="auth-logo d-flex align-center gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="auth-title">
        {{ themeConfig.app.title }}
      </h1>
    </div>
  </RouterLink>

  <VRow
    class="auth-wrapper bg-surface"
    no-gutters
  >
    <VCol
      md="8"
      class="d-none d-md-flex"
    >
      <div class="position-relative bg-background w-100 me-0">
        <div
          class="d-flex align-center justify-center w-100 h-100"
          style="padding-inline: 150px;"
        >
          <VImg
            max-width="800"
            :src="loginImage2"
            class="auth-illustration mt-16 mb-2 flip-in-rtl"
          />
        </div>

        <img
          class="auth-footer-mask flip-in-rtl"
          :src="authThemeMask"
          alt="auth-footer-mask"
          height="280"
          width="100"
        >
      </div>
    </VCol>

    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-6"
      >
        <VCardText>
          <h4 class="text-h4 mb-1">
            Forgot Password? 🔒
          </h4>
          <p class="mb-0">
            Enter your email and we'll send you a temporary password
          </p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="resetPassword">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="email"
                  autofocus
                  label="Email"
                  placeholder="johndoe@email.com"
                  type="email"
                  :error-messages="errors.email"
                />
              </VCol>

              <!-- Reset status -->
              <VCol v-if="resetStatus" cols="12">
                <VAlert
                  :type="errors.email ? 'error' : 'success'"
                  class="mb-3"
                >
                  {{ resetStatus }}
                </VAlert>
              </VCol>

              <!-- Reset link -->
              <VCol cols="12">
                <VBtn
                  block
                  type="submit"
                  :loading="isSubmitting"
                >
                  Send Temporary Password
                </VBtn>
              </VCol>

              <!-- back to login -->
              <VCol cols="12">
                <RouterLink
                  class="d-flex align-center justify-center"
                  :to="{ name: 'login' }"
                >
                  <VIcon
                    icon="tabler-chevron-left"
                    size="20"
                    class="me-1 flip-in-rtl"
                  />
                  <span>Back to login</span>
                </RouterLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>
