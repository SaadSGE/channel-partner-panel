<script setup>
import { useAuthStore } from '@/@core/stores/auth';
import { useRolePermissionStore } from "@/@core/stores/rolePermission";
import Swal from 'sweetalert2';
import { ref, watch } from 'vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

// Props and Emits
const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  editedUser: {
    type: Object,
  },
  branches: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits([
  'update:isDrawerOpen',
  'userUpdated',
]);

// Store and State
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
  branch_id: '',
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
  agreement: null, // Placeholder for agreement file
  commission_structure: null, //
});

// Initialize roles and form
// Initialize roles and form
const updateFormWithEditedUser = (user) => {
  if (user) {
    form.value = {
      ...form.value,
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      mobileNumber: user.mobile_number,
      branch_id: user.branch_id,
      whatsappNumber: user.whatsapp_number,
      companyName: user.company_name,
      website: user.website,
      address: user.address,
      city: user.city,
      postCode: user.post_code,
      country: user.country,
      role: user.role,
      plan: user.plan || '', // Handle default or missing fields
      status: user.status,
      // Parse recruit_countries if it's a JSON string
      recruitCountries: typeof user.recruit_countries === 'string' ? JSON.parse(user.recruit_countries) : user.recruit_countries || [],
    };
  }
};


// Update form when component is mounted and when `editedUser` prop changes
watch(
  () => props.editedUser,
  (newUser) => {
    console.log("props.editedUser:", newUser); // Log the value of props.editedUser
    updateFormWithEditedUser(newUser);
  },
  { immediate: true }
);


// Load roles on mount
onMounted(async () => {
  await roleStore.getAllRoles();
  roles.value = roleStore.roles;
});

// Close Drawer Function
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false);

};

// Submit Form
const onSubmit = async () => {
  refForm.value?.validate().then(async ({ valid }) => {
    if (valid) {
      try {
        // Pass the entire form to the store's updateUser method
        const user = await authStore.updateUser(form.value);
        console.log("Selected branch_id:", form.value.branch_id);
        Swal.fire({
          icon: 'success',
          title: 'User Updated Successfully',
          text: 'The user details have been updated!',
          confirmButtonText: 'OK',
        });

        // Emit updated user data and close drawer
        emit('userUpdated', user);
        emit('update:isDrawerOpen', false);

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



// Handle Drawer Model Value Update
const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val);
};
const lowerCase = (name) => {
  return name ? name.toLowerCase() : '';
};

</script>

<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection title="Edit User" @cancel="closeNavigationDrawer" />
    <VDivider />
    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 First Name -->
              <VCol cols="12" md="6">
                <AppTextField v-model="form.firstName" :rules="[requiredValidator]" label="First Name"
                  placeholder="John" />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol cols="12" md="6">
                <AppTextField v-model="form.lastName" :rules="[requiredValidator]" label="Last Name"
                  placeholder="Doe" />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="12">
                <AppTextField v-model="form.email" :rules="[requiredValidator, emailValidator]" label="Email"
                  placeholder="johndoe@email.com" />
              </VCol>

              <!-- 👉 Mobile Number -->
              <VCol cols="12">
                <AppTextField v-model="form.mobileNumber" label="Mobile Number" type="tel"
                  placeholder="+1-541-754-3010" />
              </VCol>

              <!-- 👉 WhatsApp Number -->
              <VCol cols="12">
                <AppTextField v-model="form.whatsappNumber" label="WhatsApp Number" type="tel"
                  placeholder="+1-541-754-3010" />
              </VCol>
              <!-- 👉 Branch -->
              <VCol cols="12">
                <AppSelect v-model="form.branch_id" label="Select Branch" placeholder="Select Branch"
                  :rules="[requiredValidator]" :items="props.branches"
                  :item-title="(item) => item.branch_name_with_country" :item-value="(item) => item.id" />
              </VCol>

              <!-- 👉 Role -->
              <VCol cols="12">
                <AppSelect v-model="form.role" label="Select Role" placeholder="Select Role"
                  :rules="[requiredValidator]" :items="roles" :item-title="(item) => item.role"
                  :item-value="(item) => item.role" />
              </VCol>

              <!-- Conditional Fields for Channel Partner Role -->
              <template v-if="lowerCase(form.role) === 'channel partner'">
                <VCol cols="12">
                  <VFileInput v-model="form.agreement" label="Upload Agreement" />
                </VCol>

                <!-- 👉 Commission Structure File -->
                <VCol cols="12">
                  <VFileInput v-model="form.commission_structure" label="Upload Commission Structure" />
                </VCol>
                <!-- 👉 Company Name -->
                <VCol cols="12">
                  <AppTextField v-model="form.companyName" :rules="[requiredValidator]" label="Company Name"
                    placeholder="Enter company name" />
                </VCol>

                <!-- 👉 Website -->
                <VCol cols="12">
                  <AppTextField v-model="form.website" label="Website" placeholder="Enter website URL" />
                </VCol>

                <!-- 👉 Address -->
                <VCol cols="12">
                  <AppTextField v-model="form.address" :rules="[requiredValidator]" label="Address"
                    placeholder="Enter address" />
                </VCol>

                <!-- 👉 City -->
                <VCol cols="12">
                  <AppTextField v-model="form.city" :rules="[requiredValidator]" label="City"
                    placeholder="Enter city" />
                </VCol>

                <!-- 👉 Post Code -->
                <VCol cols="12">
                  <AppTextField v-model="form.postCode" :rules="[requiredValidator]" label="Post Code"
                    placeholder="Enter post code" />
                </VCol>

                <!-- 👉 Country -->
                <VCol cols="12">
                  <AppAutocomplete v-model="form.country" label="Select Country" placeholder="Select Country"
                    :rules="[requiredValidator]"
                    :items="['India', 'Bangladesh', 'Nigeria', 'Nepal', 'Bhutan', 'Ghana', 'Sri Lanka']" />
                </VCol>

                <!-- 👉 Country Recruit For (multi-checkbox) -->
                <VCol cols="12">
                  <label>Country Recruit For</label>
                  <VCheckbox value="Nigeria" label="Nigeria" v-model="form.recruitCountries" />
                  <VCheckbox value="India" label="India" v-model="form.recruitCountries" />
                  <VCheckbox value="Bangladesh" label="Bangladesh" v-model="form.recruitCountries" />
                  <VCheckbox value="Nepal" label="Nepal" v-model="form.recruitCountries" />
                  <VCheckbox value="Bhutan" label="Bhutan" v-model="form.recruitCountries" />
                  <VCheckbox value="Ghana" label="Ghana" v-model="form.recruitCountries" />
                  <VCheckbox value="Sri Lanka" label="Sri Lanka" v-model="form.recruitCountries" />
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
