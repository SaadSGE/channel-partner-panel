<script setup>
import { useAuthStore } from '@/@core/stores/auth';
import { useRolePermissionStore } from "@/@core/stores/rolePermission";
import Swal from 'sweetalert2';
import { nextTick, onMounted, ref, watch } from 'vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  editedUser: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits([
  'update:isDrawerOpen',
  'userUpdated',
]);

const roleStore = useRolePermissionStore();
const authStore = useAuthStore();

const isFormValid = ref(false);
const refForm = ref();
const roles = ref([]);

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
  plan: '',
  status: '',
  recruitCountries: [],
});

const updateFormWithEditedUser = (user) => {
  if (user) {
    form.value = {
      ...form.value,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      mobileNumber: user.mobile_number,
      whatsappNumber: user.whatsapp_number,
      companyName: user.company_name,
      website: user.website,
      address: user.address,
      city: user.city,
      postCode: user.post_code,
      country: user.country,
      role: user.role,
      plan: '', // Add appropriate mapping if needed
      status: user.status,
      recruitCountries: user.recruit_countries ? JSON.parse(user.recruit_countries) : [], // Assuming recruit_countries is JSON
    };
  }
};


onMounted(async () => {
  console.log("Initial editedUser:", props.editedUser); // Log the initial editedUser

  await roleStore.getAllRoles();
  roles.value = roleStore.roles;

  // Initialize form with editedUser data
  updateFormWithEditedUser(props.editedUser);
});

// Watch for changes in editedUser and update form
watch(
  () => props.editedUser,
  (newUser) => {
    console.log("Updated editedUser:", newUser); // Log the updated editedUser
    updateFormWithEditedUser(newUser);
  },
  { immediate: true }
);

const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false);
  nextTick(() => {
    refForm.value?.reset();
    refForm.value?.resetValidation();
  });
};

const lowerCase = (name) => {
  return name ? name.toLowerCase() : '';
};

const onSubmit = async () => {
  refForm.value?.validate().then(async ({ valid }) => {
    if (valid) {
      try {
        // Assume there's an updateUser method in authStore
        await authStore.updateUser(form.value);
        Swal.fire({
          icon: 'success',
          title: 'User Updated Successfully',
          text: 'The user details have been updated!',
          confirmButtonText: 'OK',
        });

        // Emit userUpdated and reset form
        emit('userUpdated', form.value);
        emit('update:isDrawerOpen', false);

        nextTick(() => {
          refForm.value?.reset();
          refForm.value?.resetValidation();
        });
      } catch (error) {
        console.error('Error updating user:', error);
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
      <AppDrawerHeaderSection
        title="Edit User"
        @cancel="closeNavigationDrawer"
      />
      <VDivider />
      <PerfectScrollbar :options="{ wheelPropagation: false }">
        <VCard flat>
          <VCardText>
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
                <!-- Email -->
                <VCol cols="12">
                  <AppTextField
                    v-model="form.email"
                    :rules="[requiredValidator, emailValidator]"
                    label="Email"
                    placeholder="johndoe@email.com"
                  />
                </VCol>
                <!-- Password -->
                <VCol cols="12" md="6">
                  <AppTextField
                    v-model="form.password"
                    :rules="[requiredValidator]"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </VCol>
                <!-- Confirm Password -->
                <VCol cols="12" md="6">
                  <AppTextField
                    v-model="form.confirmPassword"
                    :rules="[requiredValidator, confirmedValidator(form.confirmPassword, form.password)]"
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                  />
                </VCol>
                <!-- Mobile Number -->
                <VCol cols="12">
                  <AppTextField
                    v-model="form.mobileNumber"
                    label="Mobile Number"
                    type="tel"
                    placeholder="+1-541-754-3010"
                  />
                </VCol>
                <!-- WhatsApp Number -->
                <VCol cols="12">
                  <AppTextField
                    v-model="form.whatsappNumber"
                    label="WhatsApp Number"
                    type="tel"
                    placeholder="+1-541-754-3010"
                  />
                </VCol>
                <!-- Role -->
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
                  <!-- Company Name -->
                  <VCol cols="12">
                    <AppTextField
                      v-model="form.companyName"
                      :rules="[requiredValidator]"
                      label="Company Name"
                      placeholder="Enter company name"
                    />
                  </VCol>
                  <!-- Website -->
                  <VCol cols="12">
                    <AppTextField
                      v-model="form.website"
                      label="Website"
                      placeholder="Enter website URL"
                    />
                  </VCol>
                  <!-- Address -->
                  <VCol cols="12">
                    <AppTextField
                      v-model="form.address"
                      :rules="[requiredValidator]"
                      label="Address"
                      placeholder="Enter address"
                    />
                  </VCol>
                  <!-- City -->
                  <VCol cols="12">
                    <AppTextField
                      v-model="form.city"
                      :rules="[requiredValidator]"
                      label="City"
                      placeholder="Enter city"
                    />
                  </VCol>
                  <!-- Post Code -->
                  <VCol cols="12">
                    <AppTextField
                      v-model="form.postCode"
                      :rules="[requiredValidator]"
                      label="Post Code"
                      placeholder="Enter post code"
                    />
                  </VCol>
                  <!-- Country -->
                  <VCol cols="12">
                    <AppAutocomplete
                      v-model="form.country"
                      label="Select Country"
                      placeholder="Select Country"
                      :rules="[requiredValidator]"
                      :items="['India', 'Bangladesh', 'Nigeria', 'Nepal', 'Bhutan', 'Ghana', 'Sri Lanka']"
                    />
                  </VCol>
                  <!-- Country Recruit For -->
                  <VCol cols="12">
                    <label>Country Recruit For</label>
                    <VCheckboxGroup v-model="form.recruitCountries">
                      <VCheckbox value="Nigeria" label="Nigeria" />
                      <VCheckbox value="India" label="India" />
                      <VCheckbox value="Bangladesh" label="Bangladesh" />
                      <VCheckbox value="Nepal" label="Nepal" />
                      <VCheckbox value="Bhutan" label="Bhutan" />
                      <VCheckbox value="Ghana" label="Ghana" />
                      <VCheckbox value="Sri Lanka" label="Sri Lanka" />
                    </VCheckboxGroup>
                  </VCol>
                </template>
                <!-- Submit and Cancel -->
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
