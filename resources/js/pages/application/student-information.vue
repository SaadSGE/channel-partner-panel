<template>
  <VCard class="mx-auto " max-width="1200">
    <VCardTitle
      >Please enter student details to process this application</VCardTitle
    >
    <VCardText>
      <VForm @submit.prevent="{}" class="form-padding" ref="refForm">
        <VRow>
          <VCol cols="12" md="12">
            <VRow>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="studentPassportNo"
                  label="Student Passport No."
                  placeholder="A099800"
                  :rules="[requiredValidator]"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppDateTimePicker
                  v-model="dateOfBirth"
                  label="Date of birth"
                  placeholder="Select date"
                  :rules="[requiredValidator]"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="studentFirstName"
                  label="Student First Name"
                  placeholder="John"
                  :rules="[requiredValidator]"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="studentLastName"
                  label="Student Last Name"
                  placeholder="Doe"
                  :rules="[requiredValidator]"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="studentWhatsappNumber"
                  label="Student WhatsApp Number"
                  placeholder="+1234567890"
                  :rules="[requiredValidator]"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="counsellorNumber"
                  label="Counsellor Number"
                  placeholder="+1234567890"
                  :rules="[requiredValidator]"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="studentEmail"
                  label="Enter Student E-Mail ID"
                  placeholder="student@example.com"
                  type="email"
                  :rules="[requiredValidator]"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="counsellorEmail"
                  label="Email-id of Counsellor"
                  placeholder="counsellor@example.com"
                  type="email"
                  :rules="[requiredValidator]"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="studentAddress"
                  label="Student Address"
                  placeholder="123 Main St"

                  :rules="[requiredValidator]"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="studentCity"
                  label="Student City"
                  placeholder="City"

                  :rules="[requiredValidator]"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol cols="12" md="6">
                <AppAutocomplete
                  v-model="studentCountry"
                  label="Student Country"
                  :items="countries"
                  placeholder="Select Country"
                  :rules="[requiredValidator]"
                />
              </VCol>

            </VRow>
            <VRow>
              <VCol cols="12" md="6">
                <label>Gender</label>
                <VRadioGroup v-model="gender" row>
                  <VRadio label="Male" value="male" />
                  <VRadio label="Female" value="female" />
                </VRadioGroup>
              </VCol>
              <VCol cols="12" md="6">
                <label>Any Previous Visa Refusal</label>
                <VRadioGroup v-model="visaRefusal" row>
                  <VRadio label="Yes" value="yes" />
                  <VRadio label="No" value="no" />
                </VRadioGroup>
              </VCol>
            </VRow>
            <div class="d-flex justify-end mt-4">

<VBtn color="primary" @click="openDialog()">Submit</VBtn>

</div>
          </VCol>
        </VRow>
      </VForm>
    </VCardText>

    <v-dialog v-model="isDialogVisible" max-width="500">
      <v-card>
        <v-card-title class="text-h5">Confirm Submission</v-card-title>
        <v-card-text>Are you sure you want to submit the application?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submit">Yes</v-btn>
          <v-btn color="secondary" @click="isDialogVisible = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </VCard>
</template>

  <script lang="ts" setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { useFileStore } from "@/@core/stores/fileStore";
import { useApplicationStore } from "@/@core/stores/submitApplication";
import Swal from 'sweetalert2';
import { ref } from "vue";
import { useRouter } from "vue-router";
const fileStore = useFileStore();
const applicationStore = useApplicationStore();
// Define the form data
const studentPassportNo = ref("");
const dateOfBirth = ref("");
const studentFirstName = ref("");
const studentLastName = ref("");
const studentWhatsappNumber = ref("");
const counsellorNumber = ref("");
const studentEmail = ref("");
const counsellorEmail = ref("");
const studentAddress = ref("");
const studentCity = ref("");
const studentCountry = ref("");
const studentRegionState = ref("");
const gender = ref("male");
const visaRefusal = ref("no");
const commonFunctionStore = commonFunction();
const refForm = ref(null);
const isDialogVisible = ref(false);
// Define the countries and states list
const countries = ref([
  "Bangladesh",
  "Nigeria",
  "Sri Lanka",
  "India",
  "Bhutan",
  "Ghana",
]);
const openDialog = async () => {
  refForm.value.validate().then(success => {
    console.log(success)
    if (!success.valid) {
     return;
    }
  });


    isDialogVisible.value = true;

};
const submit = async () => {

  isDialogVisible.value = false;

  const courseId = commonFunctionStore.selectedCourseId;
  const intakeId = commonFunctionStore.selectedIntakeId;
  const universityId = commonFunctionStore.selectedUniversityId;
  const countryId = commonFunctionStore.selectedCountryId;
  const courseDetailsId = commonFunctionStore.selectedCourseDetailsId;

  const filePaths = fileStore.filePaths;
  const studentData = {
    student_passport_no: studentPassportNo.value,
    date_of_birth: dateOfBirth.value,
    student_first_name: studentFirstName.value,
    student_last_name: studentLastName.value,
    student_whatsapp_number: studentWhatsappNumber.value,
    counsellor_number: counsellorNumber.value,
    student_email: studentEmail.value,
    counsellor_email: counsellorEmail.value,
    student_address: studentAddress.value,
    student_city: studentCity.value,
    student_country: studentCountry.value,
    student_region_state: studentRegionState.value,
    gender: gender.value,
    visa_refusal: visaRefusal.value,
  };

  try {
    await applicationStore.submitApplication(studentData, courseId, intakeId, universityId, countryId, courseDetailsId, filePaths);
    Swal.fire({
      icon: 'success',
      title: 'Application Successful',
      text: 'You have been submitted application successfully! Please waith for admin review',
      confirmButtonText: 'OK'
    });
    router.push({ name: "application" });

  } catch (error) {
    console.error(applicationStore.errors);
  }
};

const states = ref(["State 1", "State 2", "State 3", "State 4", "State 5"]);

const router = useRouter();


</script>

  <style scoped>
.form-padding {
  padding: 16px;
}
</style>
