<script setup>
definePage({
  meta: {
    action: "read",
    subject: "application",
  },
});
import { useApplicationListStore } from "@/@core/stores/applicationList";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Document from "./details-document.vue";

const route = useRoute();
const applicationId = route.params.id;

const store = useApplicationListStore();

const currentTab = ref("student-course-details");
const showModal = ref(false); // Modal visibility state
const showCommentModal = ref(false); // Modal visibility state for comments
const showUniversityCommModal = ref(false); // Modal visibility state for university communications
const newStatus = ref(""); // Selected new status
const newComment = ref(""); // New comment
const newUniversityComm = ref({
  subject: "",
  message: "",
}); // New university communication

const files = ref([
  { name: "Document1.pdf", progress: 100 },
  { name: "Document2.pdf", progress: 100 },
  { name: "Document3.pdf", progress: 100 },
  { name: "Document4.pdf", progress: 100 },
]);

const comments = ref([]);
const universityCommunications = ref([]);

const statuses = ref([
  {
    created_at: "",
    comment: "",
    status_text: "",
  },
]);

const applicationData = ref({
  application_id: "",
  created_at: "",
  counsellor_email: "",
  counsellor_number: "",
});
const statusFile = ref();
const statusLoading = ref(true);
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
    },
  ],
});

const documents = ref([]);
const allStatuses = ref([]);
onMounted(async () => {
  await refreshData();
});

const refreshData = async () => {
  await store.getApplicationDetails(applicationId);
  await store.getApplicationStatusses(applicationId);
  await store.getApplicationAllStatuses();


  applicationData.value = store.applicationData;
  documents.value = store.documents;
  studentData.value = store.students;
  statuses.value = store.statuses;
  comments.value = store.comments;
  universityCommunications.value = store.universityCommunications;
  allStatuses.value = store.allStatuses.filter(
    (status) => status.id !== applicationData.value.status
  );
};

const handleStatusChange = async () => {
  try {
    let data = new FormData();
    data.append('status', newStatus.value);
    data.append('comment', newComment.value);
    if (statusFile.value) {
      data.append('file', statusFile.value[0]);
    }

    await store.updateStatus(applicationId, data);
    showModal.value = false;
    await refreshData(); // Ensure refreshData is called to update the UI
  } catch (error) {
    console.error('Error updating status:', error);
  }
};

const handleAddComment = async () => {
  try {
    await store.addComment(applicationId, newComment.value);
    newComment.value = ''; // Clear the comment input
    showCommentModal.value = false; // Close the comment modal
    await refreshData(); // Refresh data to reflect new comment
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};

const handleAddUniversityComm = async () => {
  try {
    await store.addUniversityCommunication(applicationId, newUniversityComm.value);
    newUniversityComm.value = { subject: "", message: "" }; // Clear the input
    showUniversityCommModal.value = false; // Close the university communication modal
    await refreshData(); // Refresh data to reflect new communication
  } catch (error) {
    console.error('Error adding university communication:', error);
  }
};
</script>

<template>
  <VCard>
    <VCardTitle>Application Details</VCardTitle>
    <VCardText>
      <!-- Modal for changing status -->
      <VDialog v-model="showModal" max-width="500px">
        <VCard>
          <VCardTitle>Change Current Status</VCardTitle>
          <VCardText>
            <VForm @submit.prevent="handleStatusChange">
              <AppAutocomplete
                v-model="newStatus"
                :items="allStatuses"
                :item-title="(item) => item.name"
                :item-value="(item) => item.id"
                label="Status"
                placeholder="Select Status"
                :rules="[requiredValidator]"
              />
              <VLabel class="mt-2">Add any necessary file (Optional)</VLabel>
              <VFileInput
                v-model="statusFile"
                color="primary"
                label="File input"
                variant="outlined"
                class="mt-2"
              />

              <VLabel class="mt-2">Comment (Optional)</VLabel>
              <AppTextarea
                v-model="newComment"
                placeholder="Place any comment regarding status"
              />
            </VForm>
          </VCardText>
          <VCardActions>
            <VSpacer></VSpacer>
            <VBtn color="primary" @click="handleStatusChange">Submit</VBtn>
            <VBtn @click="showModal = false">Cancel</VBtn>
          </VCardActions>
        </VCard>
      </VDialog>

      <!-- Modal for adding a comment -->
      <VDialog v-model="showCommentModal" max-width="500px">
        <VCard>
          <VCardTitle>Add a New Comment</VCardTitle>
          <VCardText>
            <VForm @submit.prevent="handleAddComment">
              <VLabel class="mt-2">New Comment</VLabel>
              <AppTextarea v-model="newComment" placeholder="Add a new comment" class="mt-2" />
            </VForm>
          </VCardText>
          <VCardActions>
            <VSpacer></VSpacer>
            <VBtn color="primary" @click="handleAddComment">Submit Comment</VBtn>
            <VBtn @click="showCommentModal = false">Cancel</VBtn>
          </VCardActions>
        </VCard>
      </VDialog>

      <!-- Modal for adding a university communication -->
      <VDialog v-model="showUniversityCommModal" max-width="500px">
        <VCard>
          <VCardTitle>Add a New University Communication</VCardTitle>
          <VCardText>
            <VForm @submit.prevent="handleAddUniversityComm">
              <VLabel class="mt-2">Subject</VLabel>
              <VTextField v-model="newUniversityComm.subject" placeholder="Subject" class="mt-2" />
              <VLabel class="mt-2">Message</VLabel>
              <AppTextarea v-model="newUniversityComm.message" placeholder="Message" class="mt-2" />
            </VForm>
          </VCardText>
          <VCardActions>
            <VSpacer></VSpacer>
            <VBtn color="primary" @click="handleAddUniversityComm">Submit Communication</VBtn>
            <VBtn @click="showUniversityCommModal = false">Cancel</VBtn>
          </VCardActions>
        </VCard>
      </VDialog>

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
                      <td>{{ studentData.student_id ?? "" }}</td>
                      <td><strong>Student Passport No.</strong></td>
                      <td>{{ studentData.passport_no }}</td>
                    </tr>
                    <tr>
                      <td><strong>Student Name</strong></td>
                      <td>
                        {{ studentData.first_name }} {{ studentData.last_name }}
                      </td>
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
            <Document :existing-documents="documents" />
          </VWindowItem>

          <!-- Status Tab -->
          <VWindowItem value="status">
            <VRow>
              <VCol cols="12" class="d-flex justify-end">
                <VBtn v-if="currentTab === 'status'" @click="showModal = true" color="primary">Change Current Status</VBtn>
              </VCol>
              <VCol cols="12">
                <VTable>
                  <thead>
                    <tr>
                      <th>Date Added</th>
                      <th>Comment</th>
                      <th>Status and Document</th> <!-- Combined column -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(status, index) in statuses" :key="index">
                      <td>{{ status.created_at }}</td>
                      <td>{{ status.comment }}</td>
                      <td>
                        <div>
                          <span v-html="status.status_text"></span>
                          <span v-if="index === 0" class="current-status-label">(Current Status)</span>
                          <!-- Display file name and download link below the status -->
                          <div v-if="status.document">
                            <div>{{ status.file_name }}</div>
                            <a :href="status.document" target="_blank" class="download-link">Document</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </VTable>
              </VCol>
            </VRow>
          </VWindowItem>

          <!-- Comments Tab -->
          <VWindowItem value="comments">
            <VRow>
              <VCol cols="12" class="d-flex justify-end">
                <VBtn @click="showCommentModal = true" color="primary">Add New Comment</VBtn>
              </VCol>
              <VCol cols="12">
                <div class="comment-section">
                  <div v-for="(comment, index) in comments" :key="index" class="comment">
                    <div class="comment-header">
                      <span class="comment-date">{{ comment.created_at }}</span>
                    </div>
                    <div class="comment-body" v-html="comment.comment_with_user"></div>
                  </div>
                </div>
              </VCol>
            </VRow>
          </VWindowItem>

          <!-- University Communication Tab -->
          <VWindowItem value="university-communication">
          <VRow>
            <VCol cols="12" class="d-flex justify-end">
              <VBtn @click="showUniversityCommModal = true" color="primary">Add New Communication</VBtn>
            </VCol>
            <VCol cols="12">
              <div class="comment-section">
                <div v-for="(comm, index) in universityCommunications" :key="index" class="comment">
                  <div class="comment-header">
                    <span class="comment-date">{{ comm.created_at }}</span>
                  </div>
                  <div class="communication-subject">
                    <strong>Subject:</strong> {{ comm.subject }}
                  </div>
                  <div class="comment-body">

                    <div v-html="comm.message"></div>
                  </div>
                </div>
              </div>
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

.current-status-label {
  color: red;
  font-weight: bold;
  margin-left: 5px;
}

</style>
