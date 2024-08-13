<script setup>
definePage({
  meta: {
    action: 'read',
    subject: 'application',
  },
})
import { useFileStore } from "@/@core/stores/fileStore";
import { ref } from "vue";
import StudentInformation from "./student-information.vue";
import UploadDocuemnt from "./upload-document.vue";
const currentTab = ref("item-1");


// Props
const props = defineProps({
  courseDetails: {
    type: Object,
    required: true
  },

});
const emit = defineEmits(['update:showCourseDetails', 'update:showApplicationForm']);
const back = () => {
  emit('update:showCourseDetails', false);
  emit('update:showApplicationForm', true);
};
const fileStore = useFileStore();
const courseDetailsShow = ref(true)
const uploadDocumentShow = ref(false)
const studentFormShow = ref(false)
const uploadDocument = ()=>{
  fileStore.resetFiles()
  uploadDocumentShow.value=true;
  courseDetailsShow.value=false
}
</script>
<template>
  <VRow>
    <VCol md="3" sm="3">
      <VCard>
        <VCardText>
          <div
            class="d-flex justify-center align-start pb-0 px-3 pt-3 mb-4 bg-light rounded"
          >
            <VImg
              :src="courseDetails.universityLogo"
              width="145"
              height="140"
            />
          </div>
          <div style="color: black">
            <div class="mb-4">
              <label class="font-weight-bold">Course Name: </label>
              <span> {{ courseDetails.courseName }}</span>
            </div>
            <div class="mb-4">
              <label class="font-weight-bold">Intake: </label>
              <span> {{ courseDetails.intake }}</span>
            </div>
            <div class="mb-4">
              <label class="font-weight-bold">Tuition Fee: </label>
              <span> {{ courseDetails.tuitionFee }}</span>
            </div>
            <div class="mb-4">
              <label class="font-weight-bold">Course Duration:</label>
              <span> {{ courseDetails.courseDuration }}</span>
            </div>
            <div class="mb-4">
              <label class="font-weight-bold">Course Label: </label>
              <span> {{ courseDetails.courseLabel }}</span>
            </div>
            <div class="mb-4">
              <label class="font-weight-bold">Location: </label>
              <span> {{ courseDetails.location }}</span>
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol md="9" sm="9">
      <div v-if="courseDetailsShow" >
        <VCard>
        <VTabs v-model="currentTab">
          <VTab>Academic Requirement</VTab>
          <VTab>English Requirement</VTab>
        </VTabs>

        <VCardText>
          <VWindow v-model="currentTab">
            <VWindowItem value="item-1">
              <div v-html="courseDetails.academicRequirement"></div>
            </VWindowItem>
            <VWindowItem value="item-2">
              <div v-html="courseDetails.englishRequirement"></div>
            </VWindowItem>
          </VWindow>
        </VCardText>
      </VCard>
      <VCardText class="d-flex justify-space-between flex-wrap gap-4">
              <VBtn color="secondary" @click="back()" >Back</VBtn>
              <VBtn color="primary" @click="uploadDocument">Next</VBtn>
            </VCardText>
      </div>
      <div v-if="uploadDocumentShow">
        <UploadDocuemnt
         @update:uploadDocumentShow="uploadDocumentShow = $event"
         @update:studentFormShow="studentFormShow = $event"
        />
      </div>

      <div v-if="studentFormShow">
        <StudentInformation/>
      </div>

    </VCol>




  </VRow>
</template>

<style lang="scss">
.form-padding {
  padding: 0rem 2rem 2rem 2rem;
}
</style>
