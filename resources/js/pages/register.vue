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
      confirmPassword: ""
    };

    // Redirect to the login page
    router.push({ name: 'login' });

  } catch (error) {
    console.error('Error in registration:', error);

    Swal.fire({
      icon: 'error',
      title: 'Registration Failed',
      text: error,
      confirmButtonText: 'OK'
    });
  }
};

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
  'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
  'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
  'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
  'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia',
  'Fiji', 'Finland', 'France',
  'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
  'Haiti', 'Honduras', 'Hungary',
  'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast',
  'Jamaica', 'Japan', 'Jordan',
  'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan',
  'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
  'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
  'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway',
  'Oman',
  'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
  'Qatar',
  'Romania', 'Russia', 'Rwanda',
  'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
  'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu',
  'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan',
  'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam',
  'Yemen',
  'Zambia', 'Zimbabwe'
];

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
      class="auth-card-v2 d-flex align-center justify-center"
      style="background-color: white;"
    >
      <VCard class="mt-12 mt-sm-0 pa-4" width="100%" max-width="1200">
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
                  :items="countries"
                  label="Country *"
                  :rules="[requiredValidator]"
                  placeholder="Select your country"
                />
              </VCol>
            </VRow>

            <h3 class="mt-8">Country you recruit from *</h3>
            <VRow>
              <VCol cols="12">

                <AppAutocomplete
                v-model="form.recruitCountries"
                  :items="countries"
                  label="Select Countries *"
                  :rules="[requiredValidator]"
                  multiple
                  chips
                  placeholder="Select countries you recruit from"
                  closable-chips
                ></AppAutocomplete>

              </VCol>
            </VRow>

            <VBtn block type="submit" class="mt-4">Sign up</VBtn>

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
.v-label {
  position: relative;
}

/* Style the asterisk */
.v-label ::after {
  color: red;
  content: " *";
}
</style>
