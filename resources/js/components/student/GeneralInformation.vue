<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { useFileStore } from "@/@core/stores/fileStore";
import { computed, ref } from 'vue';
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
  }
});


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





const emit = defineEmits(['updateGeneralInfo']);

// Watch for changes in any field and emit updates




const genderOptions = ['Male', 'Female', 'Other'];

// Add this computed property
const formattedDateOfBirth = computed({
  get: () => {
    const dob = fileStore.studentInfo.generalInfo.date_of_birth;
    if (!dob) return '';

    // Convert date string to YYYY-MM-DD format for input[type="date"]
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

// Remove the watch as we're now using a computed with getter/setter
</script>

<template>
  <VCard>
    <VCardText>
      <VCardTitle class="padding-bottom">General Info</VCardTitle>
      <VRow>
        <VCol cols="12" md="12">
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
              <AppTextField v-model="props.generalInfo.address" label="Address" placeholder="Address"
                density="compact" />
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
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style scoped>
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
</style>
