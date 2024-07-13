<script setup>
definePage({
  meta: {
    action: 'read',
    subject: 'application',
  },
})
import { useApplicationListStore } from '@/@core/stores/applicationList';
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Document from './details-document.vue';
const route = useRoute();
const applicationId = route.params.id;

const store = useApplicationListStore();
const currentTab = ref("student-course-details");

const files = ref([
  { name: "Document1.pdf", progress: 100 },
  { name: "Document2.pdf", progress: 100 },
  { name: "Document3.pdf", progress: 100 },
  { name: "Document4.pdf", progress: 100 },
]);

const comments = ref([
  {
    date: "2024-05-06 19:27:34",
    status: "Received",
    body: "Application Received. <br>Forhadul Alam",
  },
]);

const statuses = ref([
  {
    dateAdded: "2024-05-06 19:27:34",
    comment: "Application Received.",
    status: "Application Received<br>Secondary Status: No Application Fees",
  },
]);
const applicationData = ref({
  application_id:'',
  created_at:'',
  counsellor_email:'',
  counsellor_number:'',

});
const studentData = ref({
    id: null,
    student_id: null,
    first_name: null,
    last_name: null,
    passport_no: null,
    date_of_birth: null,
    whatsapp_number: null,
    email: null,
    address: null,
    city: null,
    country: null,
    region: null,
    state: null,
    gender: null,
    visa_refusal: null,
    created_at: null,
    updated_at: null,
    document: [
        {
            id: null,
            student_id: null,
            path: null,
            created_at: null,
            updated_at: null,
        }
    ]
});
const documents = ref([])
onMounted(async () => {
    await store.getApplicationDetails(applicationId);
    applicationData.value = store.applicationData
    documents.value = store.documents
    studentData.value = store.students

});
</script>

<template>
  <VCard>
    <VCardTitle>Application Details</VCardTitle>
    <VCardText>
      <VTabs v-model="currentTab">
        <VTab value="student-course-details">Student/Course Details</VTab>
        <VTab value="upload-download">Upload/Download</VTab>
        <VTab value="status">Status</VTab>
        <VTab value="comments">Comments</VTab>
        <VTab value="university-communication">University Communication</VTab>
      </VTabs>

      <VCardText>
        <VWindow v-model="currentTab">
          <!-- Student/Course Details Tab -->
          <VWindowItem value="student-course-details">
            <VRow>
              <VCol cols="12">
                <VTable>
                  <tbody>
                    <tr>
                      <td><strong>Application Id</strong></td>
                      <td>{{ applicationData.application_id }}</td>
                      <td><strong>Date Added</strong></td>
                      <td>{{ applicationData.created_at }}</td>
                    </tr>
                    <tr>
                      <td><strong>Student ID</strong></td>
                      <td>{{ studentData.student_id??'' }}</td>
                      <td><strong>Student Passport No.</strong></td>
                      <td>{{ studentData.passport_no }}</td>
                    </tr>
                    <tr>
                      <td><strong>Student Name</strong></td>
                      <td>{{ studentData.first_name }} {{ studentData.last_name }}</td>
                      <td><strong>Student Date of Birth</strong></td>
                      <td>{{ studentData.date_of_birth }}</td>
                    </tr>
                    <tr>
                      <td><strong>Student E-Mail</strong></td>
                      <td>{{ studentData.email }}</td>
                      <td><strong>Student Phone No.</strong></td>
                      <td>{{ studentData.whatsapp_number }}</td>
                    </tr>
                    <tr>
                      <td><strong>Communication E-Mail ID</strong></td>
                      <td>{{ applicationData.counsellor_email }}</td>
                      <td><strong>Communication Phone No.</strong></td>
                      <td>{{ applicationData.counsellor_number }}</td>
                    </tr>
                  </tbody>
                </VTable>
              </VCol>
            </VRow>
          </VWindowItem>

          <!-- Upload/Download Tab -->
          <VWindowItem value="upload-download">
           <Document :existing-documents="documents"/>
          </VWindowItem>

          <!-- Status Tab -->
          <VWindowItem value="status">
            <VRow>
              <VCol cols="12">
                <VTable>
                  <thead>
                    <tr>
                      <th>Date Added</th>
                      <th>Comment</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(status, index) in statuses" :key="index">
                      <td>{{ status.dateAdded }}</td>
                      <td>{{ status.comment }}</td>
                      <td v-html="status.status"></td>
                    </tr>
                  </tbody>
                </VTable>
              </VCol>
            </VRow>
          </VWindowItem>

          <!-- Comments Tab -->
          <VWindowItem value="comments">
            <VRow>
              <VCol cols="12">
                <div class="comment-section">
                  <div
                    v-for="(comment, index) in comments"
                    :key="index"
                    class="comment"
                  >
                    <div class="comment-header">
                      <span class="comment-date">{{ comment.date }}</span>
                      <span class="comment-status badge badge-primary">{{
                        comment.status
                      }}</span>
                    </div>
                    <div class="comment-body" v-html="comment.body"></div>
                  </div>
                  <!-- Additional comments can be dynamically added here -->
                </div>
              </VCol>
            </VRow>
          </VWindowItem>

          <!-- University Communication Tab -->
          <VWindowItem value="university-communication">
            <VRow>
              <VCol cols="12">
                <VTable>
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>Subject</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- If no data is available, show this message -->
                    <tr>
                      <td colspan="3" class="text-center">No Data Found</td>
                    </tr>
                  </tbody>
                </VTable>
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCardText>
  </VCard>
</template>

<style scoped>
.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #f8f9fa;
  border-radius: 5px;
}

.file-item i.fas.fa-file-alt {
  margin-right: 10px;
}

.delete-btn {
  margin-left: 10px;
}

.progress {
  width: 100%;
}

.comment-section {
  margin-top: 10px;
}

.comment {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.comment-date {
  font-weight: bold;
}

.comment-status {
  float: right;
}

.comment-body {
  font-size: 14px;
  color: #333;
}
</style>
