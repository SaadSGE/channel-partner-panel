<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { useFileStore } from "@/@core/stores/fileStore";
import { useStudentStore } from "@/@core/stores/studentStore";
import { computed, ref, watch } from 'vue';

const commonFunctionStore = commonFunction();
const fileStore = useFileStore();
const studentStore = useStudentStore();

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false,
  },
  generalInfo: {
    type: Object,
    required: true,
    default: () => ({
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
      date_of_birth: '',
      gender: '',
      passport_number: '',
      address: '',
      city: '',
      country: '',
      visa_refusal: ''
    })
  }
});

const formData = ref({ ...props.generalInfo });

// Add a watch to update formData when generalInfo changes
watch(
  () => props.generalInfo,
  (newValue) => {
    formData.value = { ...newValue };
  },
  { deep: true }
);

const emit = defineEmits(['updateGeneralInfo', 'saveChanges']);

const isEditing = ref(false);

const toggleEdit = async () => {
  if (isEditing.value) {
    try {
      // Assuming you have access to the student ID through props or route
      const studentId = props.studentId; // Add this prop to your props definition
      // Prepare the form data in the expected format
      const updateData = {
        generalInfo: formData.value,
        // Add empty arrays for other sections if they're required by the API
        universityEntry: [],
        educationalHistory: [],
        englishProficiency: [],
        employmentHistory: [],
        documentPaths: [],
      };

      await studentStore.updateStudent(studentId, updateData);
      emit('saveChanges', formData.value);
    } catch (error) {
      // Handle error (you might want to show an error message to the user)
      console.error('Error updating student:', error);
    }
  }
  isEditing.value = !isEditing.value;
};

const genderOptions = ['Male', 'Female', 'Other'];

const formattedDateOfBirth = computed({
  get: () => {
    const dob = formData.value.date_of_birth;
    if (!dob) return '';

    try {
      const date = new Date(dob);
      return date.toISOString().split('T')[0];
    } catch (e) {
      return '';
    }
  },
  set: (value) => {
    formData.value.date_of_birth = value;
  }
});
const countries = ref([
  "Bangladesh",
  "Nigeria",
  "Sri Lanka",
  "India",
  "Bhutan",
  "Ghana",
  "Pakistan",
])

const tableData = computed(() => [
  { label: 'Name', value: `${formData.value.first_name} ${formData.value.last_name}` },
  { label: 'Email', value: formData.value.email },
  { label: 'Mobile', value: formData.value.mobile },
  { label: 'Date of Birth', value: formattedDateOfBirth.value },
  { label: 'Gender', value: formData.value.gender },
  { label: 'Passport No', value: formData.value.passport_number },
  { label: 'Visa Refusal', value: formData.value.visa_refusal },
  { label: 'Address', value: formData.value.address },
  { label: 'City', value: formData.value.city },
  { label: 'Country', value: formData.value.country },
]);

// Add missing validators (these seem to be used in the template but weren't defined)
const requiredValidator = (v) => !!v || 'This field is required';
const emailValidator = (v) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(v) || 'Please enter a valid email';
};
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between align-center">
        <VCardTitle class="padding-bottom">General Info</VCardTitle>
        <VBtn v-if="props.isEdit" :color="isEditing ? 'success' : 'primary'" @click="toggleEdit">
          {{ isEditing ? 'Save Changes' : 'Edit' }}
        </VBtn>
      </div>

      <!-- Table View -->
      <div v-if="props.isEdit && !isEditing">
        <VRow>
          <VCol cols="12" md="6">
            <VTable density="compact" class="info-table">
              <tbody>
                <tr>
                  <td class="font-weight-bold">Name</td>
                  <td>{{ formData.first_name }} {{ formData.last_name || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Email</td>
                  <td>{{ formData.email || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Mobile</td>
                  <td>{{ formData.mobile || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Date of Birth</td>
                  <td>{{ formattedDateOfBirth || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Gender</td>
                  <td>{{ formData.gender || '-' }}</td>
                </tr>
              </tbody>
            </VTable>
          </VCol>

          <VCol cols="12" md="6">
            <VTable density="compact" class="info-table">
              <tbody>
                <tr>
                  <td class="font-weight-bold">Passport No</td>
                  <td>{{ formData.passport_number || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Visa Refusal</td>
                  <td>{{ formData.visa_refusal || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Address</td>
                  <td>{{ formData.address || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">City</td>
                  <td>{{ formData.city || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Country</td>
                  <td>{{ formData.country || '-' }}</td>
                </tr>
              </tbody>
            </VTable>
          </VCol>
        </VRow>
      </div>

      <!-- Form View -->
      <VRow v-else>
        <VCol cols="12" md="12">
          <VRow>
            <VCol cols="12" md="6">
              <AppTextField v-model="formData.first_name" label="First Name(*)" placeholder="First Name"
                :rules="[requiredValidator]" density="compact" />
            </VCol>
            <VCol cols="12" md="6">
              <AppTextField v-model="formData.last_name" label="Last Name(*)" placeholder="Last Name"
                :rules="[requiredValidator]" density="compact" />
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12" md="6">
              <AppTextField v-model="formData.email" label="Email(*)" placeholder="Email"
                :rules="[requiredValidator, emailValidator]" density="compact" />
            </VCol>
            <VCol cols="12" md="6">
              <AppTextField v-model="formData.mobile" label="Mobile No(*)" placeholder="Mobile No"
                :rules="[requiredValidator]" density="compact" />
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12" md="6">
              <AppDateTimePicker v-model="formattedDateOfBirth" label="Date of birth" placeholder="Select date" />
            </VCol>
            <VCol cols="12" md="6">
              <AppSelect v-model="formData.gender" :items="genderOptions" label="Gender" placeholder="Select Gender"
                density="compact" />
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12" md="6">
              <AppTextField v-model="formData.passport_number" label="Passport No" placeholder="Passport No"
                density="compact" />
            </VCol>
            <VCol cols="12" md="6">
              <label>Any Previous Visa Refusal</label>
              <VRadioGroup v-model="formData.visa_refusal" row>
                <VRadio label="Yes" value="yes" />
                <VRadio label="No" value="no" />
              </VRadioGroup>
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12" md="12">
              <AppTextField v-model="formData.address" label="Address" placeholder="Address" density="compact" />
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12" md="6">
              <AppTextField v-model="formData.city" label="City" placeholder="City" density="compact" />
            </VCol>
            <VCol cols="12" md="6">
              <AppAutocomplete v-model="formData.country" :items="countries" label="Country"
                placeholder="Select Country" density="compact" class="small-dropdown" />
            </VCol>
          </VRow>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.small-dropdown :deep(.v-field__input),
.small-dropdown :deep(.v-list-item-title) {
  font-size: 0.8rem !important;
}

.small-dropdown :deep(.v-field__input) {
  min-block-size: 32px;
  padding-block: 5px;
}

.small-dropdown :deep(.v-field__label) {
  font-size: 0.55rem !important;
}

.padding-bottom {
  padding-block-end: 30px;
}

// Enhanced table styles
.custom-table {
  position: relative;
  z-index: 1;
  background: transparent !important;
  box-shadow: 0 2px 6px 0 rgba(var(--v-shadow-key-umbra-color), 0.14);
}

.info-table {
  overflow: hidden;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  background: #f0f7ff !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 24px -4px rgba(var(--v-shadow-key-umbra-color), 0.2);
    transform: translateY(-2px);
  }

  td {
    background-color: #f0f7ff !important;
    border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    padding-block: 12px !important;
    padding-inline: 16px !important;
  }

  td:first-child {
    background-color: #e1f0ff !important;
    font-weight: 600;
    inline-size: 140px;
  }

  tr:last-child td {
    border-block-end: none;
  }
}

// Enhanced card styles
.v-card {
  position: relative;
  z-index: 0;
  border-radius: 6px;
  background: rgb(var(--v-theme-surface)) !important;
  box-shadow: 0 4px 18px -4px rgba(var(--v-shadow-key-umbra-color), 0.1);

  :deep(.v-card-text) {
    position: relative;
    z-index: 1;
    padding-block: 16px;
    padding-inline: 24px;
  }

  &::before {
    position: absolute;
    z-index: 0;
    border-radius: inherit;
    background:
      linear-gradient(180deg,
        rgba(var(--v-theme-surface), 0.05) 0%,
        rgba(var(--v-theme-surface), 0.02) 100%);
    content: "";
    inset: 0;
  }
}

/* Make tables full height */
.v-table {
  background: transparent !important;
  block-size: 100%;

  td {
    padding-block: 8px !important;
    padding-inline: 16px !important;
  }
}

/* Add some spacing between tables on mobile */
@media (max-width: 960px) {
  .v-col-md-6:first-child {
    margin-block-end: 1rem;
  }

  .custom-table :deep(td) {
    font-size: 0.8rem;
    padding-block: 8px !important;
    padding-inline: 12px !important;
  }

  .v-card {
    margin-inline: 8px;
  }
}
</style>
