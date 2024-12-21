<script setup>
import { commonFunction } from '@/@core/stores/commonFunction';
import { onMounted, watch } from 'vue';
import { VBtn, VCardText, VCardTitle, VRow } from 'vuetify/lib/components/index.mjs';

definePage({
  meta: {
    public: true
  }
})

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
const countryToApply = ref('');
const courseType = ref('');
const proficiencyTitle = ref('');
const overallScore = ref('');
const reading = ref('');
const writing = ref('');
const listening = ref('');
const speaking = ref('');
const refForm = ref(null);
const course = ref(null);
const intake = ref(null);
const university = ref(null);
const isLoading = ref(false);
const commonFunctionStore = commonFunction();
const countries = ref([
  "Bangladesh",
  "Nigeria",
  "Sri Lanka",
  "India",
  "Bhutan",
  "Ghana",
  "Pakistan",
])

onMounted(async () => {
  await commonFunctionStore.getUniqueCountries();
  isLoading.value = false;
});

watch(countryToApply, async (newVal) => {
  if (newVal) {
    intake.value = null;
    courseType.value = null;
    university.value = null;
    course.value = null;
    commonFunctionStore.setSelectedCountryId(newVal);
    await commonFunctionStore.getIntakesByCountry(newVal);
  }
});



watch(intake, async (newVal) => {
  if (newVal) {
    courseType.value = null;
    university.value = null;
    course.value = null;
    await commonFunctionStore.getCourseTypesByCountryIntake(countryToApply.value, newVal);
  }
});

watch(courseType, async (newVal) => {
  if (newVal) {
    university.value = null;
    course.value = null;
    commonFunctionStore.selectedCourseType = newVal;
    await commonFunctionStore.getUniversitiesByCountryIntakeCourseType(countryToApply.value, intake.value, newVal);
  }
});

watch(university, async (newVal) => {
  if (newVal) {
    course.value = null;
    if (intake.value && courseType.value) {
      await commonFunctionStore.getCourseDetails(intake.value, newVal, courseType.value);
    }
  }
});

watch(course, (newVal) => {
  if (newVal) {
    commonFunctionStore.selectedCourseDetailsId = newVal;
  }
});
const interestedUniversity = ref([{ countryToApply: '', courseType: '', intake: '', university: '', course: '' }])
const educationalHistory = ref([{ degree: '', institution: '', passingYear: '', result: '' }]);
const englishProficiency = ref([{ proficiencyTitle: '', overallScore: '', reading: '', writing: '', speaking: '', listening: '' }])
const employmentHistory = ref([{ companyName: '', designation: '' }]);

function addInterestedUniversity() {
  interestedUniversity.value.push({ countryToApply: '', courseType: '', intake: '', university: '', course: '' })
}

function removeInterestedUniversity(index) {
  if (index !== 0) {
    interestedUniversity.value.splice(index, 1)
  }
}

function addEducationalHistory() {
  educationalHistory.value.push({ degree: '', institution: '', passingYear: '', result: '' });
}

function removeEducationalHistory(index) {
  if (index !== 0) {
    educationalHistory.value.splice(index, 1);
  }
}

function addEnglishProficiency() {
  englishProficiency.value.push({ proficiencyTitle: '', overallScore: '', reading: '', writing: '', speaking: '', listening: '' })
}

function removeEnglishProficiency(index) {
  if (index !== 0) {
    englishProficiency.value.splice(index, 1);
  }
}

function addEmploymentHistory() {
  employmentHistory.value.push({ companyName: '', designation: '' });
}

function removeEmploymentHistory(index) {
  if (index !== 0) {
    employmentHistory.value.splice(index, 1);
  }
}
</script>

<template>

  <VCard>
    <VCardText>
      <VCardTitle class="text-center">Student Information</VCardTitle>
      <VForm ref="refForm" class="form-padding">

        <VCard class="card-padding">
          <VCardText>
            <VCardTitle class="text-left padding-bottom">General Info</VCardTitle>
            <VRow>
              <VCol cols="12" md="12">
                <VRow>
                  <VCol cols="12" md="6">
                    <AppTextField v-model="firstName" label="First Name(*)" placeholder="First Name"
                      :rules="[requiredValidator]" />
                  </VCol>
                  <VCol cols="12" md="6">
                    <AppTextField v-model="lastName" label="Last Name(*)" placeholder="Last Name"
                      :rules="[requiredValidator]" />
                  </VCol>
                </VRow>
                <VRow>
                  <VCol cols="12" md="6">
                    <AppTextField v-model="email" label="Email(*)" placeholder="Email" :rules="[requiredValidator]" />
                  </VCol>
                  <VCol cols="12" md="6">
                    <AppTextField v-model="mobile" label="Mobile No(*)" placeholder="Mobile No"
                      :rules="[requiredValidator]" />
                  </VCol>
                </VRow>
                <VRow>
                  <VCol cols="12" md="6">
                    <AppTextField v-model="dob" label="DOB" placeholder="DOB" />
                  </VCol>
                  <VCol cols="12" md="6">
                    <AppTextField v-model="gender" label="Gender" placeholder="Gender" />
                  </VCol>
                </VRow>
                <VRow>
                  <VCol cols="12" md="6">
                    <AppTextField v-model="passportNo" label="Passport No" placeholder="Passport No" />
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
                    <AppTextField v-model="address" label="Address" placeholder="Address" />
                  </VCol>

                </VRow>
                <VRow>
                  <VCol cols="12" md="6">
                    <AppTextField v-model="studentCity" label="City" placeholder="City" />
                  </VCol>
                  <VCol cols="12" md="6">
                    <AppAutocomplete v-model="studentCountry" label="Country" :items="countries"
                      placeholder="Select Country" />
                  </VCol>
                </VRow>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
        <VCard class="card-padding">
          <VCardText>
            <VCardTitle class="text-left padding-bottom">Interested University</VCardTitle>
            <p class="text-center padding-bottom">Add interested University, Intake, Course</p>
            <VRow v-for="(university, index) in interestedUniversity" :key="index">

              <VCol cols="12" md="2">
                <AppAutocomplete v-model="university.countryToApply" :items="commonFunctionStore.countries"
                  item-title="name" item-value="id" label="Country to Apply" placeholder="Select Country"
                  :rules="[requiredValidator]" />
              </VCol>

              <VCol cols="12" md="2">
                <AppAutocomplete v-model="university.intake" :items="commonFunctionStore.intakes"
                  item-title="intake_name" item-value="intake_id" label="Intake" placeholder="Select Intake"
                  :rules="[requiredValidator]" :disabled="!university.countryToApply" />
              </VCol>

              <VCol cols="12" md="2">
                <AppAutocomplete v-model="university.courseType" :items="commonFunctionStore.courseTypes"
                  item-title="name" item-value="id" label="Course Type" placeholder="Select Course Type"
                  :rules="[requiredValidator]" :disabled="!university.intake" />
              </VCol>

              <VCol cols="12" md="2">
                <AppAutocomplete v-model="university.university" :items="commonFunctionStore.universities"
                  item-title="university_name" item-value="university_id" label="University"
                  placeholder="Select University" :rules="[requiredValidator]" :disabled="!university.courseType" />
              </VCol>

              <VCol cols="12" md="2">
                <AppAutocomplete v-model="university.course" :items="commonFunctionStore.courseDetails"
                  item-title="course_name" item-value="id" label="Course" placeholder="Select Course"
                  :rules="[requiredValidator]" :disabled="!university.university" />
              </VCol>
              <VCol v-if="index !== 0" cols="12" md="1" class="addBtn">
                <VBtn color="error" @click="removeInterestedUniversity(index)">Remove</VBtn>
              </VCol>
              <VCol cols="12" md="1" class="addBtn">
                <VBtn color="primary" @click="addInterestedUniversity">+</VBtn>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
        <VCard class="card-padding">
          <VCardText>
            <VCardTitle>Educational History</VCardTitle>
            <p class="text-center">Add Educational History</p>
            <VRow v-for="(education, index) in educationalHistory" :key="index">
              <VCol cols="12" md="3">
                <AppTextField v-model="education.degree" label="Degree" placeholder="Degree" />
              </VCol>
              <VCol cols="12" md="3">
                <AppTextField v-model="education.institution" label="Institution" placeholder="Institution" />
              </VCol>
              <VCol cols="12" md="2">
                <AppTextField v-model="education.passingYear" label="Passing Year" placeholder="Passing Year" />
              </VCol>
              <VCol cols="12" md="2">
                <AppTextField v-model="education.result" label="Result" placeholder="Result" />
              </VCol>
              <VCol v-if="index !== 0" cols="12" md="1">
                <VBtn color="error" class="addBtn2" @click="removeEducationalHistory(index)">Remove
                </VBtn>
              </VCol>
              <VCol cols="12" md="1">
                <VBtn color="primary" class="addBtn2" @click="addEducationalHistory">+</VBtn>
              </VCol>
            </VRow>

          </VCardText>
        </VCard>
        <VCard class="card-padding">
          <VCardText>
            <VCardTitle class="text-left padding-bottom">English Proficiency</VCardTitle>
            <p class="text-center padding-bottom">Add English Proficiency</p>
            <VRow v-for="(proficiency, index) in englishProficiency" :key="index">
              <VCol cols="12" md="3">
                <AppTextField v-model="proficiency.proficiencyTitle" label="Proficiency Tiltle"
                  placeholder="Proficiency Tiltle" />
              </VCol>
              <VCol cols="12" md="3">
                <AppTextField v-model="proficiency.overallScore" label="Overall Score" placeholder="Overall Score" />
              </VCol>
              <VCol cols="12" md="1">
                <AppTextField v-model="proficiency.listening" label="Listening" placeholder="Listening" />
              </VCol>
              <VCol cols="12" md="1">
                <AppTextField v-model="proficiency.speaking" label="Speaking" placeholder="Speaking" />
              </VCol>
              <VCol cols="12" md="1">
                <AppTextField v-model="proficiency.writing" label="Writing" placeholder="Writing" />
              </VCol>
              <VCol cols="12" md="1">
                <AppTextField v-model="proficiency.reading" label="Reading" placeholder="Reading" />
              </VCol>
              <VCol v-if="index !== 0" cols="12" md="1" class="addBtn2">
                <VBtn color="error" @click="removeEnglishProficiency(index)">Remove</VBtn>
              </VCol>
              <VCol cols="12" md="1" class="addBtn2">
                <VBtn color="primary" @click="addEnglishProficiency">+</VBtn>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
        <VCard class="card-padding">
          <VCardText>
            <VCardTitle>Employment History</VCardTitle>
            <p class="text-center">Add Employment with Payment</p>
            <VRow v-for="(employment, index) in employmentHistory" :key="index" class="mt-4">
              <VCol cols="12" md="5">
                <AppTextField v-model="employment.companyName" label="Company Name" placeholder="Company Name" />
              </VCol>
              <VCol cols="12" md="5">
                <AppTextField v-model="employment.designation" label="Designation" placeholder="Designation" />
              </VCol>
              <VCol v-if="index !== 0" cols="12" md="1" class="addBtn2">
                <VBtn color="error" @click="removeEmploymentHistory(index)">Remove
                </VBtn>
              </VCol>
              <VCol cols="12" md="1">
                <VBtn color="primary" class="addBtn2" @click="addEmploymentHistory">+</VBtn>
              </VCol>
            </VRow>

          </VCardText>
        </VCard>
        <div class="submit-btn-flex">
          <VBtn color="primary">Submit</VBtn>
        </div>
      </VForm>

    </VCardText>
  </VCard>

</template>
<style>
.submit-btn-flex {
  display: flex;
  justify-content: end;
  margin-block-start: 18px;
  margin-inline-end: 18px;
}

.addBtn {
  margin-block-start: 25px;
}

.addBtn2 {
  margin-block-start: 22px;
}

.text-left {
  padding-inline-start: 0;
}

.padding-bottom {
  padding-block-end: 30px;
}

.card-padding {
  padding-block-end: 180px;
}
</style>
