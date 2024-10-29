<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";
import "filepond/dist/filepond.min.css";

import VueFilePond from 'vue-filepond';
import { useRouter } from "vue-router";

definePage({
    meta: {
        action: 'read',
        subject: 'dashboard',
    },
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
const FilePond = VueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginPdfPreview
);




const router = useRouter();
const dynamicId = ref('1');
const targetRoute = 'student-record';
function goToNextPage() {
    router.push({ path: `/${targetRoute}/${dynamicId.value}` });
}
</script>
<template>
    <VCard>
        <VCardTitle class="text-center">Upload Necessary Document</VCardTitle>
        <VCardTitle>Passport(*)</VCardTitle>
        <VCardText>
            <file-pond ref="pond" name="passport" :allow-multiple="false" allowRemove="true"
                label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" />
            <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
        </VCardText>
    </VCard>
    <VCard>
        <VCardTitle>Academic Reference Letter(*)</VCardTitle>
        <VCardText>
            <file-pond ref="pond" name="academic_letter" :allow-multiple="false" allowRemove="true"
                label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" />
            <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
        </VCardText>
    </VCard>
    <VCard>
        <VCardTitle>Professional Reference Letter</VCardTitle>
        <VCardText>
            <file-pond ref="pond" name="professional_letter" :allow-multiple="false" allowRemove="true"
                label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" />
            <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
        </VCardText>
    </VCard>
    <VCard>
        <VCardTitle>CV/Resume</VCardTitle>
        <VCardText>
            <file-pond ref="pond" name="cv-resume" :allow-multiple="false" allowRemove="true"
                label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" />
            <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
        </VCardText>
    </VCard>
    <VCard>
        <VCardTitle>SOP</VCardTitle>
        <VCardText>
            <file-pond ref="pond" name="sop" :allow-multiple="false" allowRemove="true"
                label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" />
            <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
        </VCardText>
    </VCard>
    <VCard>
        <VCardTitle>Supporting Document</VCardTitle>
        <VCardText>
            <file-pond ref="pond" name="passport" :allow-multiple="true" allowRemove="true"
                label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" />
            <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
            <div class="btn-flex">
                <div>
                    <VBtn color="secondary">Cancel</VBtn>
                </div>
                <div>
                    <VBtn color="primary" @click="goToNextPage">Continue Without Document</VBtn>
                    <VBtn color="primary" class="btn-margin" @click="goToNextPage">Continue</VBtn>
                </div>
            </div>
        </VCardText>
    </VCard>


</template>
<style>
.btn-flex {
    display: flex;
    justify-content: space-between;

}

.btn-margin {
    margin-left: 32px;
}
</style>
