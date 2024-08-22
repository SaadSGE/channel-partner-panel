<script setup>
import { useAuthStore } from '@/@core/stores/auth';
import { useRolePermissionStore } from "@/@core/stores/rolePermission";
import Swal from 'sweetalert2';
import { nextTick, onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

// Props and Emits
const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
]);

// Store and Router
const roleStore = useRolePermissionStore();
const authStore = useAuthStore();
const router = useRouter();

// Form Refs and State
const isFormValid = ref(false);
const refForm = ref();
const roles = ref([]);

// Main Form Data
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  mobileNumber: '',
  whatsappNumber: '',
  companyName: '',
  website: '',
  address: '',
  city: '',
  postCode: '',
  country: '',
  role: '',
  status: '',
  avatar: '',
  createForm: 'admin',
  agreement:null,
  commission_structure:null,

});

// Separate Reactive Variable for Recruit Countries
const recruitForm = ref({
  recruitCountries: [],
});

// On Component Mount
onMounted(async () => {
  await roleStore.getAllRoles();
  roles.value = roleStore.roles;
});

// Close Drawer Function
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false);
  nextTick(() => {
    refForm.value?.reset();
    refForm.value?.resetValidation();
  });
};

// Lowercase Function for Role Check
const lowerCase = (name) => {
  return name ? name.toLowerCase() : '';
};

// Submit Form
const onSubmit = async () => {
  refForm.value?.validate().then(async ({ valid }) => {
    if (valid) {
      try {
        // Combine form data and recruitForm data before submission
        const submitData = new FormData();

        // Append form data to FormData object
        for (const key in form.value) {
          if (form.value[key]) {
            submitData.append(key, form.value[key]);
          }
        }

        // Append recruitForm data
        for (const country of recruitForm.value.recruitCountries) {
          submitData.append('recruitCountries[]', country);
        }

        // Check for files and append to FormData with document_type
        if (form.value.agreement) {
          submitData.append('document_type', 'agreement');
          submitData.append('agreement', form.value.agreement[0]);
        }

        if (form.value.commission_structure) {
          submitData.append('document_type', 'commission_structure');
          submitData.append('commission_structure', form.value.commission_structure[0]);
        }

        await authStore.register(submitData);
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'You have been registered successfully!',
          confirmButtonText: 'OK',
        });

        // Emit userData and reset form
        emit('userData', submitData);
        emit('update:isDrawerOpen', false);

        nextTick(() => {
          refForm.value?.reset();
          refForm.value?.resetValidation();
          recruitForm.value.recruitCountries = []; // Reset recruitCountries separately
        });

      } catch (error) {
        console.error('Error in registration:', error);
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.response?.data.message || 'An unexpected error occurred',
          confirmButtonText: 'OK',
        });
      }
    }
  });
};

// Handle Drawer Model Value Update
const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val);
};
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      title="Add New User"
      @cancel="closeNavigationDrawer"
    />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 First Name -->
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="form.firstName"
                  :rules="[requiredValidator]"
                  label="First Name"
                  placeholder="John"
                />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="form.lastName"
                  :rules="[requiredValidator]"
                  label="Last Name"
                  placeholder="Doe"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.email"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <!-- 👉 Password -->
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="form.password"
                  :rules="[requiredValidator]"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                />
              </VCol>

              <!-- 👉 Confirm Password -->
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="form.confirmPassword"
                  :rules="[requiredValidator, confirmedValidator(form.confirmPassword, form.password)]"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your password"
                />
              </VCol>

              <!-- 👉 Mobile Number (optional) -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.mobileNumber"
                  label="Mobile Number (optional)"
                  type="tel"
                  placeholder="+1-541-754-3010"
                />
              </VCol>

              <!-- 👉 WhatsApp Number (optional) -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.whatsappNumber"
                  label="WhatsApp Number (optional)"
                  type="tel"
                  placeholder="+1-541-754-3010"
                />
              </VCol>

              <!-- 👉 Role -->
            <VCol cols="12">
                <AppSelect
                  v-model="form.role"
                  label="Select Role"
                  placeholder="Select Role"
                  :rules="[requiredValidator]"
                  :items="roles"
                  :item-title="(item) => item.role"
                  :item-value="(item) => item.role"
                />
              </VCol>

              <!-- Conditional Fields for Channel Partner Role -->
              <template v-if="lowerCase(form.role) === 'channel partner'">
                <VCol cols="12">
                  <VFileInput
                    chips
                    v-model="form.agreement"
                    label="Upload Agreement"


                  />
                </VCol>

                <!-- 👉 Commission Structure (optional file) -->
                <VCol cols="12">
                  <VFileInput
                    chips
                    v-model="form.commission_structure"
                    label="Upload Commission Structure"


                  />
                </VCol>

                <!-- 👉 Company Name -->
                <VCol cols="12">
                  <AppTextField
                    v-model="form.companyName"
                    :rules="[requiredValidator]"
                    label="Company Name"
                    placeholder="Enter company name"
                  />
                </VCol>

                <!-- 👉 Website (nullable) -->
                <VCol cols="12">
                  <AppTextField
                    v-model="form.website"
                    label="Website"
                    placeholder="Enter website URL"
                  />
                </VCol>

                <!-- 👉 Address -->
                <VCol cols="12">
                  <AppTextField
                    v-model="form.address"
                    :rules="[requiredValidator]"
                    label="Address"
                    placeholder="Enter address"
                  />
                </VCol>

                <!-- 👉 City -->
                <VCol cols="12">
                  <AppTextField
                    v-model="form.city"
                    :rules="[requiredValidator]"
                    label="City"
                    placeholder="Enter city"
                  />
                </VCol>

                <!-- 👉 Post Code -->
                <VCol cols="12">
                  <AppTextField
                    v-model="form.postCode"
                    :rules="[requiredValidator]"
                    label="Post Code"
                    placeholder="Enter post code"
                  />
                </VCol>

                <!-- 👉 Country -->
                <VCol cols="12">
                  <AppAutocomplete
                    v-model="form.country"
                    label="Select Country"
                    placeholder="Select Country"
                    :rules="[requiredValidator]"
                    :items="['India', 'Bangladesh', 'Nigeria', 'Nepal', 'Bhutan', 'Ghana', 'Sri Lanka']"
                  />
                </VCol>

                <!-- 👉 Country Recruit For (multi-checkbox) -->
                <VCol cols="12">
                  <label>Country Recruit For</label>

                  <VCheckbox value="Nigeria" label="Nigeria" v-model="recruitForm.recruitCountries" />
                  <VCheckbox value="India" label="India" v-model="recruitForm.recruitCountries"/>
                  <VCheckbox value="Bangladesh" label="Bangladesh" v-model="recruitForm.recruitCountries"/>
                  <VCheckbox value="Nepal" label="Nepal" v-model="recruitForm.recruitCountries"/>
                  <VCheckbox value="Bhutan" label="Bhutan" v-model="recruitForm.recruitCountries"/>
                  <VCheckbox value="Ghana" label="Ghana" v-model="recruitForm.recruitCountries"/>
                  <VCheckbox value="Sri Lanka" label="Sri Lanka" v-model="recruitForm.recruitCountries" />
                </VCol>
              </template>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn type="submit" class="me-3">
                  Submit
                </VBtn>
                <VBtn type="reset" variant="tonal" color="error" @click="closeNavigationDrawer">
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
