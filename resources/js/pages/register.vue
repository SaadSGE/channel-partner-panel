<script setup>
import AppAutocomplete from "@/@core/components/app-form-elements/AppAutocomplete.vue";
import { useAuthStore } from '@/@core/stores/auth';
import authV2RegisterIllustrationBorderedDark from "@images/pages/auth-v2-register-illustration-bordered-dark.png";
import authV2RegisterIllustrationBorderedLight from "@images/pages/auth-v2-register-illustration-bordered-light.png";
import authV2RegisterIllustrationDark from "@images/pages/auth-v2-register-illustration-dark.png";
import authV2RegisterIllustrationLight from "@images/pages/auth-v2-register-illustration-light.png";
import authV2MaskDark from "@images/pages/misc-mask-dark.png";
import authV2MaskLight from "@images/pages/misc-mask-light.png";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { VForm } from "vuetify/components/VForm";


const router = useRouter();

const imageVariant = useGenerateImageVariant(
  authV2RegisterIllustrationLight,
  authV2RegisterIllustrationDark,
  authV2RegisterIllustrationBorderedLight,
  authV2RegisterIllustrationBorderedDark,
  true
);
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark);
const checkboxOne = ref(true);
const checkboxTwo = ref(false);

const capitalizedLabel = (label) => {
  const convertLabelText = label.toString();
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1);
};

definePage({
  meta: {
    layout: "blank",
    unauthenticatedOnly: true,
  },
});

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  whatsappNumber: "",
  companyName: "",
  website: "",
  address: "",
  city: "",
  postCode: "",
  country: "",
  password: "",
  recruitCountries: [],
  privacyPolicies: false,
});
const isPasswordVisible = ref(false);

const authStore = useAuthStore();

const registerUser = async () => {
  try {
    const response = await authStore.register(form.value);

    Swal.fire({
      icon: 'success',
      title: 'Registration Successful',
      text: 'You have been registered successfully!',
      confirmButtonText: 'OK'
    });

    // Clear form data after successful registration
    form.value = {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      whatsappNumber: "",
      companyName: "",
      website: "",
      address: "",
      city: "",
      postCode: "",
      country: "",
      password: "",
      recruitCountries: [],
      privacyPolicies: false,
      confirmPassword :""
    };

    // Redirect to the login page
    router.push({ name: 'login' });

  } catch (error) {
    console.error('Error in registration:', error);
    Swal.fire({
      icon: 'error',
      title: 'Registration Failed',
      text: error.response?.data.message || 'An unexpected error occurred',
      confirmButtonText: 'OK'
    });
  }
};
</script>

<template>
  <RouterLink to="/">
    <div class="auth-logo d-flex align-center gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="auth-title">{{ themeConfig.app.title }}</h1>
    </div>
  </RouterLink>

  <VRow no-gutters class="auth-wrapper bg-surface mt-15">
    <VCol
      cols="12"
      md="12"
      class="auth-card-v2 d-flex align-center justify-center"
      style="background-color: white"
    >
      <VCard :max-width="1200" :min-width="1200" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <h4 class="text-h4 mb-1">Register User</h4>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="registerUser">
  <h3>Personal Information</h3>
  <VRow>
    <VCol cols="12" md="6" sm="12">
      <AppTextField
        v-model="form.firstName"
        :rules="[requiredValidator]"
        label="First Name *"
        placeholder="Enter your first name"
      />
    </VCol>

    <VCol cols="12" md="6" sm="12">
      <AppTextField
        v-model="form.lastName"
        :rules="[requiredValidator]"
        label="Last Name *"
        placeholder="Enter your last name"
      />
    </VCol>

    <VCol cols="12" md="4" sm="12">
      <AppTextField
        v-model="form.email"
        :rules="[requiredValidator,emailValidator]"
        label="Email *"
        type="email"
        placeholder="Enter your email address"
      />
    </VCol>

    <VCol cols="12" md="4" sm="12">
      <AppTextField
        v-model="form.mobileNumber"

        label="Mobile No"
        type="text"
        placeholder="Enter your mobile number"
      />
    </VCol>

    <VCol cols="12" md="4" sm="12">
      <AppTextField
        v-model="form.whatsappNumber"

        label="Whatsapp Number"
        type="text"
        placeholder="Enter your WhatsApp number"
      />
    </VCol>

    <VCol cols="12" md="6" sm="12">
      <AppTextField
        v-model="form.password"
        :rules="[requiredValidator]"
        label="Password *"
        placeholder="Enter your password"
        :type="isPasswordVisible ? 'text' : 'password'"
        :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
        @click:append-inner="isPasswordVisible = !isPasswordVisible"
      />
    </VCol>

    <VCol cols="12" md="6" sm="12">
      <AppTextField
        v-model="form.confirmPassword"
        :rules="[requiredValidator, confirmedValidator(form.confirmPassword, form.password)]"
        label="Confirm Password *"
        placeholder="Confirm your password"
        :type="isPasswordVisible ? 'text' : 'password'"
        :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
        @click:append-inner="isPasswordVisible = !isPasswordVisible"
      />
    </VCol>
  </VRow>

  <h3 class="mt-8">Company Details</h3>
  <VRow>
    <VCol cols="12" md="6" sm="12">
      <AppTextField
        v-model="form.companyName"
        :rules="[requiredValidator]"
        label="Company Name *"
        placeholder="Enter your company name"
      />
    </VCol>

    <VCol cols="12" md="6" sm="12">
      <AppTextField
        v-model="form.website"

        label="Website"
        placeholder="Enter your company website"
      />
    </VCol>

    <VCol cols="12" md="6" sm="12">
      <AppTextField
        v-model="form.address"
        :rules="[requiredValidator]"
        label="Address *"
        placeholder="Enter your company address"
      />
    </VCol>

    <VCol cols="12" md="6" sm="12">
      <AppTextField
        v-model="form.city"
        :rules="[requiredValidator]"
        label="City *"
        placeholder="Enter your city"
      />
    </VCol>

    <VCol cols="12" md="6" sm="12">
      <AppTextField
        v-model="form.postCode"
        :rules="[requiredValidator]"
        label="Post Code *"
        placeholder="Enter your postal code"
      />
    </VCol>

    <VCol cols="12" md="6" sm="12">
      <AppAutocomplete
        v-model="form.country"
        :items="['India', 'Bangladesh', 'Nigeria', 'Nepal', 'Bhutan', 'Ghana', 'Sri Lanka']"
        label="Country *"
        :rules="[requiredValidator]"
        placeholder="Select your country"
      />
    </VCol>
  </VRow>

  <h3 class="mt-8">Country you recruit for *</h3>
  <VRow>
    <VCol cols="12" md="12" sm="12" class="demo-space-x">

        <VCheckbox value="Nigeria" label="Nigeria"  v-model="form.recruitCountries"/>
        <VCheckbox value="India" label="India" v-model="form.recruitCountries"/>
        <VCheckbox value="Bangladesh" label="Bangladesh" v-model="form.recruitCountries" />
        <VCheckbox value="Nepal" label="Nepal" v-model="form.recruitCountries"/>
        <VCheckbox value="Bhutan" label="Bhutan" v-model="form.recruitCountries"/>
        <VCheckbox value="Ghana" label="Ghana" v-model="form.recruitCountries"/>
        <VCheckbox value="Sri Lanka" label="Sri Lanka" v-model="form.recruitCountries"/>

    </VCol>
  </VRow>

  <VBtn block type="submit">Sign up</VBtn>

  <VCol cols="12" class="text-center text-base">
    <span class="d-inline-block">Already have an account?</span>
    <RouterLink class="text-primary ms-1 d-inline-block" :to="{ name: 'login' }">
      Sign in instead
    </RouterLink>
  </VCol>
</VForm>

        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>
<style scoped>
/* Scoped styling for the form component */
.v-label  {
  position: relative;
}

/* Style the asterisk */
.v-label ::after {
  content: ' *';
  color: red;
}
</style>
