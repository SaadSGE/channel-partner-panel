<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const mobile = ref('');
const dob = ref('');
const gender = ref('');
const passportNo = ref('');
const visaRefusal = ref('');
const address = ref('');
const studentCity = ref('');
const studentCountry = ref('');

const countries = ref([
  "Bangladesh",
  "Nigeria",
  "Sri Lanka",
  "India",
  "Bhutan",
  "Ghana",
  "Pakistan",
]);
</script>

<template>
  <VCard>
    <VCardText>
      <VCardTitle class="text-left padding-bottom">General Info</VCardTitle>
      <VRow>
        <VCol cols="12" md="12">
          <VRow>
            <VCol cols="12" md="6">
              <AppTextField v-model="firstName" label="First Name(*)" placeholder="First Name"
                :rules="[requiredValidator]" density="compact" />
            </VCol>
            <VCol cols="12" md="6">
              <AppTextField v-model="lastName" label="Last Name(*)" placeholder="Last Name" :rules="[requiredValidator]"
                density="compact" />
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12" md="6">
              <AppTextField v-model="email" label="Email(*)" placeholder="Email" :rules="[requiredValidator]"
                density="compact" />
            </VCol>
            <VCol cols="12" md="6">
              <AppTextField v-model="mobile" label="Mobile No(*)" placeholder="Mobile No" :rules="[requiredValidator]"
                density="compact" />
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12" md="6">
              <AppTextField v-model="dob" label="DOB" placeholder="DOB" density="compact" />
            </VCol>
            <VCol cols="12" md="6">
              <AppTextField v-model="gender" label="Gender" placeholder="Gender" density="compact" />
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12" md="6">
              <AppTextField v-model="passportNo" label="Passport No" placeholder="Passport No" density="compact" />
            </VCol>
            <VCol cols="12" md="6">
              <label>Any Previous Visa Refusal</label>
              <VRadioGroup v-model="visaRefusal" row>
                <VRadio label="Yes" value="yes" />
                <VRadio label="No" value="no" />
              </VRadioGroup>
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12" md="12">
              <AppTextField v-model="address" label="Address" placeholder="Address" density="compact" />
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12" md="6">
              <AppTextField v-model="studentCity" label="City" placeholder="City" density="compact" />
            </VCol>
            <VCol cols="12" md="6">
              <AppAutocomplete v-model="studentCountry" label="Country" :items="countries" placeholder="Select Country"
                density="compact" class="small-dropdown" />
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
