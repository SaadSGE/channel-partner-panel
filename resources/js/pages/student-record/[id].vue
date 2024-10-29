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
const degree = ref('');
const institution = ref('');
const passingYear = ref('');
const result = ref('');
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
</script>

<template>

    <VCard>
        <VCardText>
            <VCardTitle class="text-center">Student Information</VCardTitle>
            <VForm ref="refForm" class="form-padding">

                <VCard>
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
                                        <AppTextField v-model="email" label="Email(*)" placeholder="Email"
                                            :rules="[requiredValidator]" />
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
                                        <AppTextField v-model="passportNo" label="Passport No"
                                            placeholder="Passport No" />
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
                <VCard>
                    <VCardText>
                        <VCardTitle class="text-left padding-bottom">Interested University</VCardTitle>
                        <p class="text-center padding-bottom">Add interested University, Intake, Course</p>
                        <VRow>

                            <VCol cols="12" md="2">
                                <AppAutocomplete v-model="countryToApply" :items="commonFunctionStore.countries"
                                    item-title="name" item-value="id" label="Country to Apply"
                                    placeholder="Select Country" :rules="[requiredValidator]" />
                            </VCol>

                            <VCol cols="12" md="2">
                                <AppAutocomplete v-model="intake" :items="commonFunctionStore.intakes"
                                    item-title="intake_name" item-value="intake_id" label="Intake"
                                    placeholder="Select Intake" :rules="[requiredValidator]"
                                    :disabled="!countryToApply" />
                            </VCol>

                            <VCol cols="12" md="2">
                                <AppAutocomplete v-model="courseType" :items="commonFunctionStore.courseTypes"
                                    item-title="name" item-value="id" label="Course Type"
                                    placeholder="Select Course Type" :rules="[requiredValidator]" :disabled="!intake" />
                            </VCol>

                            <VCol cols="12" md="2">
                                <AppAutocomplete v-model="university" :items="commonFunctionStore.universities"
                                    item-title="university_name" item-value="university_id" label="University"
                                    placeholder="Select University" :rules="[requiredValidator]"
                                    :disabled="!courseType" />
                            </VCol>

                            <VCol cols="12" md="2">
                                <AppAutocomplete v-model="course" :items="commonFunctionStore.courseDetails"
                                    item-title="course_name" item-value="id" label="Course" placeholder="Select Course"
                                    :rules="[requiredValidator]" :disabled="!university" />
                            </VCol>

                            <VCol cols="12" md="2" class="text-center addBtn">
                                <VBtn color="primary">+</VBtn>
                            </VCol>
                        </VRow>
                    </VCardText>
                </VCard>
                <VCard>
                    <VCardText>
                        <VCardTitle class="text-left padding-bottom">Educational History</VCardTitle>
                        <p class="text-center padding-bottom">Add Educational History</p>
                        <VRow>
                            <VCol cols="12" md="3">
                                <AppTextField v-model="degree" label="Degree" placeholder="Degree" />
                            </VCol>
                            <VCol cols="12" md="3">
                                <AppTextField v-model="institution" label="Institution" placeholder="Institution" />
                            </VCol>
                            <VCol cols="12" md="2">
                                <AppTextField v-model="passingYear" label="Passing Year" placeholder="Passing year" />
                            </VCol>
                            <VCol cols="12" md="2">
                                <AppTextField v-model="result" label="Result(in point)" placeholder="Result" />
                            </VCol>
                            <VCol cols="12" md="2" class="text-center addBtn2">
                                <VBtn color="primary">+</VBtn>
                            </VCol>
                        </VRow>
                    </VCardText>
                </VCard>
                <VCard>
                    <VCardText>
                        <VCardTitle class="text-left padding-bottom">English Proficiency</VCardTitle>
                        <p class="text-center padding-bottom">Add English Proficiency</p>
                        <VRow>
                            <VCol cols="12" md="2">
                                <AppTextField v-model="proficiencyTitle" label="Proficiency Tiltle"
                                    placeholder="Proficiency Tiltle" />
                            </VCol>
                            <VCol cols="12" md="2">
                                <AppTextField v-model="overallScore" label="Overall Score"
                                    placeholder="Overall Score" />
                            </VCol>
                            <VCol cols="12" md="2">
                                <AppTextField v-model="listening" label="Listening" placeholder="Listening" />
                            </VCol>
                            <VCol cols="12" md="2">
                                <AppTextField v-model="speaking" label="Speaking" placeholder="Speaking" />
                            </VCol>
                            <VCol cols="12" md="1">
                                <AppTextField v-model="writing" label="Writing" placeholder="Writing" />
                            </VCol>
                            <VCol cols="12" md="1">
                                <AppTextField v-model="reading" label="Reading" placeholder="Reading" />
                            </VCol>
                            <VCol cols="12" md="2" class="text-center addBtn2">
                                <VBtn color="primary">+</VBtn>
                            </VCol>
                        </VRow>
                    </VCardText>
                </VCard>
                <VCard>
                    <VCardText>
                        <VCardTitle class="text-left padding-bottom">English Proficiency</VCardTitle>
                        <p class="text-center padding-bottom">Employment with payment</p>
                        <VRow>
                            <VCol cols="12" md="5">
                                <AppTextField v-model="companyName" label="Company Name" placeholder="Company Name" />
                            </VCol>
                            <VCol cols="12" md="5">
                                <AppTextField v-model="designation" label="Designation" placeholder="Designation" />
                            </VCol>
                            <VCol cols="12" md="2" class="text-center addBtn2">
                                <VBtn color="primary">+</VBtn>
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
    margin-right: 18px;
    margin-top: 18px;
    display: flex;
    justify-content: end;
}

.addBtn {
    margin-top: 25px;
}

.addBtn2 {
    margin-top: 22px
}

.text-left {
    padding-left: 0px;
}

.padding-bottom {
    padding-bottom: 30px;
}
</style>
