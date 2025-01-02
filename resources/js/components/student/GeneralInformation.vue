<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { useFileStore } from "@/@core/stores/fileStore";
import { computed, ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const commonFunctionStore = commonFunction();
const fileStore = useFileStore();
const props = defineProps({
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
  },
  isEdit: {
    type: Boolean,
    default: false
  }
});

const isEditing = ref(false);

const toggleEdit = async () => {
  if (isEditing.value) {
    try {
      const hasChanges = JSON.stringify(formData.value) !== JSON.stringify(props.generalInfo);
      if (hasChanges) {
        await emit('updateGeneralInfo', props.generalInfo);
        toast("General information updated successfully", {
          type: "success",
          position: "top-right",
          theme: "colored",
        });
      }
    } catch (error) {
      console.error('Error saving general information:', error);
      toast("Error updating general information", {
        type: "error",
        position: "top-right",
        theme: "colored",
      });
      return;
    }
  }
  isEditing.value = !isEditing.value;
};

const formData = ref(props.generalInfo);

props.generalInfo.first_name = fileStore.studentInfo.generalInfo.first_name;
props.generalInfo.last_name = fileStore.studentInfo.generalInfo.last_name;
props.generalInfo.email = fileStore.studentInfo.generalInfo.email;
props.generalInfo.mobile = fileStore.studentInfo.generalInfo.mobile;
props.generalInfo.date_of_birth = fileStore.studentInfo.generalInfo.date_of_birth;
props.generalInfo.gender = fileStore.studentInfo.generalInfo.gender;
props.generalInfo.passport_number = fileStore.studentInfo.generalInfo.passport_number;
props.generalInfo.address = fileStore.studentInfo.generalInfo.address;
props.generalInfo.city = fileStore.studentInfo.generalInfo.city;
props.generalInfo.country = fileStore.studentInfo.generalInfo.country;

const emit = defineEmits(['updateGeneralInfo', 'saveChanges']);

const genderOptions = ['Male', 'Female', 'Other'];

const formattedDateOfBirth = computed({
  get: () => {
    const dob = props.generalInfo.date_of_birth;
    if (!dob) return '';

    try {
      const date = new Date(dob);
      return date.toISOString().split('T')[0];
    } catch (e) {
      return '';
    }
  },
  set: (value) => {
    props.generalInfo.date_of_birth = value;
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
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between align-center">
        <VCardTitle class="padding-bottom">General Info</VCardTitle>
        <VBtn v-if="props.isEdit && $can('edit', 'student')" :color="isEditing ? 'success' : 'primary'"
          @click="toggleEdit">
          {{ isEditing ? 'Save Changes' : 'Edit' }}
        </VBtn>
      </div>

      <div v-if="props.isEdit && !isEditing">
        <VRow>
          <VCol cols="12" md="6">
            <VTable density="compact" class="info-table custom-table">
              <tbody>
                <tr>
                  <td class="font-weight-bold">First Name</td>
                  <td>{{ props.generalInfo.first_name || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Last Name</td>
                  <td>{{ props.generalInfo.last_name || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Email</td>
                  <td>{{ props.generalInfo.email || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Mobile</td>
                  <td>{{ props.generalInfo.mobile || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Date of Birth</td>
                  <td>{{ formattedDateOfBirth || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Gender</td>
                  <td>{{ props.generalInfo.gender || '-' }}</td>
                </tr>
              </tbody>
            </VTable>
          </VCol>

          <VCol cols="12" md="6">
            <VTable density="compact" class="info-table custom-table">
              <tbody>

                <tr>
                  <td class="font-weight-bold">Passport No</td>
                  <td>{{ props.generalInfo.passport_number || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Visa Refusal</td>
                  <td>{{ props.generalInfo.visa_refusal || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Address</td>
                  <td>{{ props.generalInfo.address || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">City</td>
                  <td>{{ props.generalInfo.city || '-' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Country</td>
                  <td>{{ props.generalInfo.country || '-' }}</td>
                </tr>
              </tbody>
            </VTable>
          </VCol>
        </VRow>
      </div>

      <div v-else>
        <VRow>
          <VCol cols="12" md="6">
            <AppTextField v-model="props.generalInfo.first_name" label="First Name(*)" placeholder="First Name"
              :rules="[requiredValidator]" density="compact" />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField v-model="props.generalInfo.last_name" label="Last Name(*)" placeholder="Last Name"
              :rules="[requiredValidator]" density="compact" />
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12" md="6">
            <AppTextField v-model="props.generalInfo.email" label="Email(*)" placeholder="Email"
              :rules="[requiredValidator, emailValidator]" density="compact" />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField v-model="props.generalInfo.mobile" label="Mobile No(*)" placeholder="Mobile No"
              :rules="[requiredValidator]" density="compact" />
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12" md="6">
            <AppDateTimePicker v-model="formattedDateOfBirth" label="Date of birth" placeholder="Select date" />
          </VCol>
          <VCol cols="12" md="6">
            <AppSelect v-model="props.generalInfo.gender" :items="genderOptions" label="Gender"
              placeholder="Select Gender" density="compact" />
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12" md="6">
            <AppTextField v-model="props.generalInfo.passport_number" label="Passport No" placeholder="Passport No"
              density="compact" />
          </VCol>
          <VCol cols="12" md="6">
            <label>Any Previous Visa Refusal</label>
            <VRadioGroup v-model="props.generalInfo.visa_refusal" row>
              <VRadio label="Yes" value="yes" />
              <VRadio label="No" value="no" />
            </VRadioGroup>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12" md="12">
            <AppTextField v-model="props.generalInfo.address" label="Address" placeholder="Address" density="compact" />
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12" md="6">
            <AppTextField v-model="props.generalInfo.city" label="City" placeholder="City" density="compact" />
          </VCol>
          <VCol cols="12" md="6">
            <AppAutocomplete v-model="props.generalInfo.country" :items="countries" label="Country"
              placeholder="Select Country" density="compact" class="small-dropdown" />
          </VCol>
        </VRow>
      </div>
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

.custom-table {
  position: relative;
  z-index: 1;
  background: #f0f7ff !important;
  box-shadow: 0 2px 6px 0 rgba(var(--v-shadow-key-umbra-color), 0.14);
}
</style>
