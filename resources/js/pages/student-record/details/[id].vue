<script setup>
import { commonFunction } from '@/@core/stores/commonFunction';
import { useRoute, useRouter } from 'vue-router';
import { VCardText } from 'vuetify/lib/components/index.mjs';

definePage({
    meta: {
        public: true
    }
})
const student = ref([]);
const currentTab = ref("general-info");
const commonFunctionStore = commonFunction();
const isLoading = ref(false);
const route = useRoute();
const id = route.params.id;

const router = useRouter();

const goBack = () => {
    router.back();
};

onMounted(() => {
    getStudentById(id);
});

const getStudentById = async (id) => {
    isLoading.value = true;
    const data = await commonFunctionStore.getStudentById(id);

    student.value = data;
    isLoading.value = false;
}

</script>

<template>
    <VCard>
        <VCardTitle class="d-flex justify-space-between align-center">
            <div>Student Details</div>
            <VBtn color="primary" @click="goBack">
                <VIcon icon="tabler-arrow-left" class="mr-2" />
                Back
            </VBtn>
        </VCardTitle>

        <VTabs v-model="currentTab">
            <VTab value="general-info">
                General Info
            </VTab>
            <VTab value="interested-university">
                Interested University
            </VTab>
            <VTab value="educational-history">
                Educational History
            </VTab>
            <VTab value="english-proficiency">
                English Proficiency
            </VTab>
            <VTab value="employment-history">
                Employment History
            </VTab>
        </VTabs>

        <VCardText>
            <VWindow v-model="currentTab">
                <VWindowItem value="general-info">

                    <VRow>
                        <VCol cols="12">
                            <VTable>
                                <tbody>

                                    <tr>
                                        <td><strong>Student ID</strong></td>
                                        <td>{{ student.student_id ?? "" }}</td>
                                        <td><strong>Student Passport No.</strong></td>
                                        <td>{{ student.passport_no }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Student Name</strong></td>
                                        <td>
                                            {{ student.first_name }} {{ student.last_name }}
                                        </td>
                                        <td><strong>Student Date of Birth</strong></td>
                                        <td>{{ student.date_of_birth }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Student E-Mail</strong></td>
                                        <td>{{ student.email }}</td>
                                        <td><strong>Student Mobile No.</strong></td>
                                        <td>{{ student.whatsapp_number }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Student gender</strong></td>
                                        <td>{{ student.gender }}</td>
                                        <td><strong>Previous visa refusal</strong></td>
                                        <td>{{ student.visa_refusal }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>City</strong></td>
                                        <td>{{ student.city }}</td>
                                        <td><strong>Country</strong></td>
                                        <td>{{ student.country }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Address</strong></td>
                                        <td>{{ student.address }}</td>
                                    </tr>
                                </tbody>
                            </VTable>
                        </VCol>
                    </VRow>
                </VWindowItem>

                <VWindowItem value="interested-university">

                    <VRow>
                        <VCol cols="12">
                            <VTable v-for="(university, index) in student.interested_universities" :key="index"
                                :value="index" class="t-padding">
                                <tbody>
                                    <tr>
                                        <td><strong>University Id</strong></td>
                                        <td>{{ university.university.id }}</td>
                                        <td><strong>University Name</strong></td>
                                        <td>{{ university.university.name }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>University Address</strong></td>
                                        <td>{{ university.university.address }}</td>

                                    </tr>
                                    <tr>
                                        <td><strong>Country Id</strong></td>
                                        <td>{{ university.country.id }}</td>
                                        <td><strong>Country Name</strong></td>
                                        <td>{{ university.country.name }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Timezone</strong></td>
                                        <td>{{ university.country.timezone }}</td>
                                        <td><strong>Country Created At</strong></td>
                                        <td>{{ university.country.created_at }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Course Id</strong></td>
                                        <td>{{ university.course.id }}</td>
                                        <td><strong>Course type</strong></td>
                                        <td>{{ university.course.type }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Course name</strong></td>
                                        <td>{{ university.course.name }}</td>
                                        <td><strong>Course Created At</strong></td>
                                        <td>{{ university.course.created_at }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Intake Id</strong></td>
                                        <td>{{ university.intake.id }}</td>
                                        <td><strong>Intake Name</strong></td>
                                        <td>{{ university.intake.name }}</td>
                                    </tr>
                                </tbody>
                            </VTable>
                        </VCol>
                    </VRow>
                </VWindowItem>
            </VWindow>
        </VCardText>
    </VCard>
</template>
<style>
.t-padding {
    padding-bottom: 180px;
}
</style>
