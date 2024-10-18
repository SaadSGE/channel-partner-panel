<script setup>
import { useAuthStore } from "@/@core/stores/auth";
import { useGenerateImageVariant } from "@core/composable/useGenerateImageVariant";
import authV2LoginIllustrationBorderedDark from "@images/pages/auth-v2-login-illustration-bordered-dark.png";
import authV2LoginIllustrationBorderedLight from "@images/pages/auth-v2-login-illustration-bordered-light.png";
import authV2LoginIllustrationDark from "@images/pages/auth-v2-login-illustration-dark.png";
import authV2LoginIllustrationLight from "@images/pages/auth-v2-login-illustration-light.png";
import loginImage from "@images/pages/login-image.png";
import loginImageOrg from "@images/pages/login-org.gif";
import authV2MaskDark from "@images/pages/misc-mask-dark.png";
import authV2MaskLight from "@images/pages/misc-mask-light.png";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";
import Swal from "sweetalert2";
// import { useRoute, useRouter } from "vue-router"
import { VForm } from "vuetify/components/VForm";
const authThemeImg = useGenerateImageVariant(
  authV2LoginIllustrationLight,
  authV2LoginIllustrationDark,
  authV2LoginIllustrationBorderedLight,
  authV2LoginIllustrationBorderedDark,
  true
);
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark);
const appUrl = import.meta.env.VITE_WEBSITE;
const appName = import.meta.env.APP_URL;
//console log doteenv app_name
console.log(appName);


const loginImage2 = appUrl === 'org' ? useGenerateImageVariant(loginImageOrg) : useGenerateImageVariant(loginImage);

definePage({
  meta: {
    layout: "blank",
    unauthenticatedOnly: true,
  },
});

const isPasswordVisible = ref(false);
const refVForm = ref();

const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const ability = useAbility();

const credentials = ref({
  email: "",
  password: "",
});

const onSubmit = () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      try {
        const res = await authStore.login(
          credentials.value.email,
          credentials.value.password
        );

        const { accessToken, userData, abilities } = res;

        if (userData.status === 0) {
          Swal.fire({
            icon: "error",
            title: "Account Inactive",
            text: "Your account is currently inactive. Please contact the administrator for assistance.",
            confirmButtonText: "OK",
          });
          return;
        }

        useCookie("userAbilityRules").value = abilities;
        ability.update(abilities);
        userData.main_role = userData.role;
        userData.role = "admin";
        useCookie("userData").value = userData;
        useCookie("accessToken").value = accessToken;

        await nextTick(() => {
          if (userData.main_role == 'editor') {
            router.replace(route.query.to ? String(route.query.to) : "/record");
          }
          else {
            router.replace(route.query.to ? String(route.query.to) : "/");
          }
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Credential not match",
          confirmButtonText: "OK",
        });
        console.error("Login error:", err);
      }
    }
  });
};
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

  <VRow no-gutters class="auth-wrapper bg-surface">
    <VCol md="8" class="d-none d-md-flex">
      <div class="position-relative bg-background w-100 me-0">
        <div class="d-flex align-center justify-center w-100 h-100" style="padding-inline: 6.25rem;">
          <VImg :src="loginImage2" class="auth-illustration mt-16 mb-2" />
        </div>
      </div>
    </VCol>

    <VCol cols="12" md="4" class="auth-card-v2 d-flex align-center justify-center">
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <h4 class="text-h4 mb-1">
            Welcome to
            <span class="text-capitalize"> {{ themeConfig.app.title }} </span>!
            👋🏻
          </h4>
          <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p>
        </VCardText>

        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField v-model="credentials.email" label="Email" placeholder="johndoe@email.com" type="email"
                  autofocus :rules="[requiredValidator, emailValidator]" :error-messages="authStore.errors.email" />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField v-model="credentials.password" label="Password" placeholder="············"
                  :rules="[requiredValidator]" :type="isPasswordVisible ? 'text' : 'password'"
                  :error-messages="authStore.errors.password" :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                    " @click:append-inner="isPasswordVisible = !isPasswordVisible" />

                <div class="d-flex align-center flex-wrap justify-space-between my-6">
                  <VCheckbox v-model="authStore.rememberMe" label="Remember Me" />
                  <RouterLink class="text-primary" to="/forgot-password">
                    Forgot Password?
                  </RouterLink>
                </div>

                <VBtn block type="submit"> Login </VBtn>
              </VCol>

              <!-- create account -->
              <VCol cols="12" class="text-center">
                <span>New on our platform?</span>
                <RouterLink class="text-primary ms-1" :to="{ name: 'register' }">
                  Create an account
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
