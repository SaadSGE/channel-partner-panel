<script setup>
definePage({
  meta: {
    action: "read",
    subject: "application",
  },
})
import { useApplicationListStore } from "@/@core/stores/applicationList";
import ActivityLog from "@/components/ActivityLog/ApplicationActivityLog.vue";

import { useNotificationStore } from '@/@core/stores/notification';
import AcoAoCommunication from '@/components/AcoAoCommunication.vue';
import AcoCoCommunication from '@/components/AcoCoCommunication.vue';
import ApplicationOfficerAssignments from '@/components/ApplicationOfficerAssignments.vue';
import ComplianceOfficerAssignments from '@/components/ComplianceOfficerAssignments.vue';
import StudentInfoEditDialog from "@/components/dialogs/StudentInfoEditDialog.vue";
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Document from "./details-document.vue";

const isAdmin = ref(getUserRole() === 'admin')
const route = useRoute()
const applicationId = route.params.id
console.log(applicationId)
const store = useApplicationListStore()
const notificationStore = useNotificationStore()

const currentTab = ref("student-course-details")
const showModal = ref(false) // Modal visibility state
const showCommentModal = ref(false) // Modal visibility state for comments
const showUniversityCommModal = ref(false) // Modal visibility state for university communications
const newStatus = ref("") // Selected new status
const newComment = ref("") // New comment
const isStudentInfoEditDialogVisible = ref(false)
const newUniversityComm = ref({
  subject: "",
  message: "",
}) // New university communication

const files = ref([
  { name: "Document1.pdf", progress: 100 },
  { name: "Document2.pdf", progress: 100 },
  { name: "Document3.pdf", progress: 100 },
  { name: "Document4.pdf", progress: 100 },
])

const comments = ref([])
const universityCommunications = ref([])

const statuses = ref([
  {
    created_at: "",
    comment: "",
    status_text: "",
  },
])

const applicationData = ref({
  application_id: "",
  created_at: "",
  counsellor_email: "",
  counsellor_number: "",
})

const statusFile = ref()
const statusLoading = ref(true)

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
})

const documents = ref([])
const allStatuses = ref([])

const router = useRouter();

const goBack = () => {
  router.back();
};

// Function to update the current tab based on the hash
const updateTabFromHash = () => {
  const hash = route.hash.replace('#', '');
  if (hash) {
    currentTab.value = hash;
  }
};

// Watch for changes in the route's hash
watch(() => route.hash, updateTabFromHash);

// Set the initial tab based on the hash when the component is mounted
onMounted(async () => {
  updateTabFromHash();
  await refreshData();
  await updateNotificationCounts();

  // Mark notifications as read for the initial tab
  const notificationHash = {
    'status': 'status',
    'comments': 'comments',
    'university-communication': 'university-communication',
    'aco-ao-communication': 'aco-ao-communication',
    'assign-officer': 'assign-officer',
    'assign-compliance-officer': 'assign-compliance-officer',
    'aco-co-communication': 'aco-co-communication'
  }[currentTab.value];

  if (notificationHash) {
    await notificationStore.markNotificationsAsReadByApplicationIdAndHash(
      applicationId,
      notificationHash
    );
    await updateNotificationCounts();
  }
});

const refreshData = async () => {
  await store.getApplicationDetails(applicationId)
  await store.getApplicationStatusses(applicationId)
  await store.getApplicationAllStatuses()

  applicationData.value = store.applicationData
  documents.value = store.documents
  studentData.value = store.students
  statuses.value = store.statuses
  comments.value = store.comments
  universityCommunications.value = store.universityCommunications
  allStatuses.value = store.allStatuses.filter(
    status => status.id !== applicationData.value.status,
  )

  console.log(studentData);
}

const isStatusLoading = ref(false)
const isCommentLoading = ref(false)
const isUniversityCommLoading = ref(false)

const handleStatusChange = async () => {
  try {
    isStatusLoading.value = true
    let data = new FormData()
    data.append("status", newStatus.value)
    data.append("comment", newComment.value)
    if (statusFile.value) {
      data.append("file", statusFile.value[0])
    }

    await store.updateStatus(applicationId, data)
    showModal.value = false

    // Reset fields
    newStatus.value = ""
    newComment.value = ""
    statusFile.value = null
    await refreshData()
  } catch (error) {
    console.error("Error updating status:", error)
  } finally {
    isStatusLoading.value = false
  }
}

const handleAddComment = async () => {
  try {
    isCommentLoading.value = true
    await store.addComment(applicationId, newComment.value)
    newComment.value = "" // Clear the comment input
    showCommentModal.value = false // Close the comment modal
    await refreshData() // Refresh data to reflect new comment
  } catch (error) {
    console.error("Error adding comment:", error)
  } finally {
    isCommentLoading.value = false
  }
}

const handleAddUniversityComm = async () => {
  try {
    isUniversityCommLoading.value = true
    await store.addUniversityCommunication(
      applicationId,
      newUniversityComm.value,
    )
    newUniversityComm.value = { subject: "", message: "" } // Clear the input
    showUniversityCommModal.value = false // Close the university communication modal
    await refreshData() // Refresh data to reflect new communication
  } catch (error) {
    console.error("Error adding university communication:", error)
  } finally {
    isUniversityCommLoading.value = false
  }
}

const statusNotificationCount = ref(0)
const commentsNotificationCount = ref(0)
const universityCommNotificationCount = ref(0)
const acoAoCommNotificationCount = ref(0)
const assignOfficerNotificationCount = ref(0)
const assignComplianceOfficerNotificationCount = ref(0)
const acoCoCommNotificationCount = ref(0)

const updateNotificationCounts = async () => {
  statusNotificationCount.value = await notificationStore.fetchNotificationCountByApplicationIdAndNotificationHash(
    applicationId,
    'status'
  )
  commentsNotificationCount.value = await notificationStore.fetchNotificationCountByApplicationIdAndNotificationHash(
    applicationId,
    'comments'
  )
  universityCommNotificationCount.value = await notificationStore.fetchNotificationCountByApplicationIdAndNotificationHash(
    applicationId,
    'university-communication'
  )
  acoAoCommNotificationCount.value = await notificationStore.fetchNotificationCountByApplicationIdAndNotificationHash(
    applicationId,
    'aco-ao-communication'
  )
  assignOfficerNotificationCount.value = await notificationStore.fetchNotificationCountByApplicationIdAndNotificationHash(
    applicationId,
    'assign-officer'
  )
  assignComplianceOfficerNotificationCount.value = await notificationStore.fetchNotificationCountByApplicationIdAndNotificationHash(
    applicationId,
    'assign-compliance-officer'
  )
  acoCoCommNotificationCount.value = await notificationStore.fetchNotificationCountByApplicationIdAndNotificationHash(
    applicationId,
    'aco-co-communication'
  )
}

// Add this watch for currentTab
watch(currentTab, async (newTab) => {
  try {
    // Map tabs to their notification hashes
    const tabHashMap = {
      'status': 'status',
      'comments': 'comments',
      'university-communication': 'university-communication',
      'aco-ao-communication': 'aco-ao-communication',
      'assign-officer': 'assign-officer',
      'assign-compliance-officer': 'assign-compliance-officer',
      'aco-co-communication': 'aco-co-communication'
    };

    const notificationHash = tabHashMap[newTab];

    if (notificationHash) {
      // Mark notifications as read for this tab
      await notificationStore.markNotificationsAsReadByApplicationIdAndHash(
        applicationId,
        notificationHash
      );

      // Update notification counts after marking as read
      await updateNotificationCounts();
    }
  } catch (error) {
    console.error('Error marking notifications as read:', error);
  }
});
</script>

<template>
  <VCard>
    <VCardTitle class="d-flex justify-space-between align-center">
      <div>Application Details</div>
      <VBtn color="primary" @click="goBack">
        <VIcon icon="tabler-arrow-left" class="mr-2" />
        Back
      </VBtn>
    </VCardTitle>
    <VCardText>
      <!-- Modal for changing status -->
      <VDialog v-model="showModal" max-width="500px">
        <VCard>
          <VCardTitle>Change Current Status</VCardTitle>
          <VCardText>
            <VForm @submit.prevent="handleStatusChange">
              <AppAutocomplete v-model="newStatus" :items="allStatuses" :item-title="(item) => item.name"
                :item-value="(item) => item.id" label="Status" placeholder="Select Status"
                :rules="[requiredValidator]" />
              <VLabel class="mt-2">
                Add any necessary file (Optional)
              </VLabel>
              <VFileInput v-model="statusFile" color="primary" label="File input" variant="outlined" class="mt-2" />

              <VLabel class="mt-2">
                Comment (Optional)
              </VLabel>
              <AppTextarea v-model="newComment" placeholder="Place any comment regarding status" />
            </VForm>
          </VCardText>
          <VCardActions>
            <VSpacer />
            <VBtn color="primary" :loading="isStatusLoading" :disabled="isStatusLoading" @click="handleStatusChange">
              Submit
            </VBtn>
            <VBtn :disabled="isStatusLoading" @click="showModal = false">
              Cancel
            </VBtn>
          </VCardActions>
        </VCard>
      </VDialog>

      <!-- Modal for adding a comment -->
      <VDialog v-model="showCommentModal" max-width="500px">
        <VCard>
          <VCardTitle>Add a New Comment</VCardTitle>
          <VCardText>
            <VForm @submit.prevent="handleAddComment">
              <VLabel class="mt-2">
                New Comment
              </VLabel>
              <AppTextarea v-model="newComment" placeholder="Add a new comment" class="mt-2" />
            </VForm>
          </VCardText>
          <VCardActions>
            <VSpacer />
            <VBtn color="primary" :loading="isCommentLoading" :disabled="isCommentLoading" @click="handleAddComment">
              Submit Comment
            </VBtn>
            <VBtn :disabled="isCommentLoading" @click="showCommentModal = false">
              Cancel
            </VBtn>
          </VCardActions>
        </VCard>
      </VDialog>

      <!-- Modal for adding a university communication -->
      <VDialog v-model="showUniversityCommModal" max-width="500px">
        <VCard>
          <VCardTitle>Add a New University Communication</VCardTitle>
          <VCardText>
            <VForm @submit.prevent="handleAddUniversityComm">
              <VLabel class="mt-2">
                Subject
              </VLabel>
              <VTextField v-model="newUniversityComm.subject" placeholder="Subject" class="mt-2" />
              <VLabel class="mt-2">
                Message
              </VLabel>
              <QuillEditor v-model:content="newUniversityComm.message" theme="snow" content-type="html" class="mt-2" />
            </VForm>
          </VCardText>
          <VCardActions>
            <VSpacer />
            <VBtn color="primary" :loading="isUniversityCommLoading" :disabled="isUniversityCommLoading"
              @click="handleAddUniversityComm">
              Submit Communication
            </VBtn>
            <VBtn :disabled="isUniversityCommLoading" @click="showUniversityCommModal = false">
              Cancel
            </VBtn>
          </VCardActions>
        </VCard>
      </VDialog>

      <VTabs v-model="currentTab">
        <VTab value="student-course-details">
          Student/Course Details
        </VTab>
        <VTab value="upload-download">
          Upload/Download
        </VTab>
        <VTab value="status">
          Status
          <VBadge v-if="statusNotificationCount > 0" :content="statusNotificationCount" color="error" location="top end"
            offset-x="-15" offset-y="3" />
        </VTab>
        <VTab value="comments">
          Comments
          <VBadge v-if="commentsNotificationCount > 0" :content="commentsNotificationCount" color="error"
            location="top end" offset-x="-15" offset-y="3" />
        </VTab>
        <VTab value="university-communication">
          University Communication
          <VBadge v-if="universityCommNotificationCount > 0" :content="universityCommNotificationCount" color="error"
            location="top end" offset-x="-15" offset-y="3" />
        </VTab>
        <VTab value="aco-ao-communication" v-if="$can('enable', 'aco-ao-communication')">
          ACO & AO Communication
          <VBadge v-if="acoAoCommNotificationCount > 0" :content="acoAoCommNotificationCount" color="error"
            location="top end" offset-x="-15" offset-y="3" />
        </VTab>
        <VTab value="assign-officer" v-if="$can('assign', 'application-officer')">
          Assign Application Officer
          <VBadge v-if="assignOfficerNotificationCount > 0" :content="assignOfficerNotificationCount" color="error"
            location="top end" offset-x="-15" offset-y="3" />
        </VTab>
        <VTab value="assign-compliance-officer" v-if="$can('assign', 'compliance-officer')">Assign Compliance Officer
          <VBadge v-if="assignComplianceOfficerNotificationCount > 0"
            :content="assignComplianceOfficerNotificationCount" color="error" location="top end" offset-x="-15"
            offset-y="3" />
        </VTab>
        <VTab value="aco-co-communication" v-if="$can('enable', 'aco-co-communication')">ACO & CO Communication
          <VBadge v-if="acoCoCommNotificationCount > 0" :content="acoCoCommNotificationCount" color="error"
            location="top end" offset-x="-15" offset-y="3" />
        </VTab>
        <VTab v-if="isAdmin" value="activity-logs">
          Activity Logs
        </VTab>
      </VTabs>

      <VCardText>
        <VWindow v-model="currentTab">
          <!-- Student/Course Details Tab -->
          <VWindowItem value="student-course-details">
            <div class='icon-right'>
              <IconBtn @click="isStudentInfoEditDialogVisible = !isStudentInfoEditDialogVisible">
                <VIcon icon="tabler-edit" />
              </IconBtn>
              <StudentInfoEditDialog v-model:is-dialog-visible="isStudentInfoEditDialogVisible"
                :first_name="studentData.first_name" :last_name="studentData.last_name" :email="studentData.email"
                :passport_no="studentData.passport_no" :dob="studentData.date_of_birth" :id="studentData.id"
                @refreshUpdateInfo="refreshData" />
            </div>
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
            <Document :existing-documents="documents" :zip-link="studentData.document_zip_link" />
          </VWindowItem>

          <!-- Status Tab -->
          <VWindowItem value="status">
            <VRow>
              <VCol cols="12" class="d-flex justify-end">
                <VBtn v-if="
                  currentTab === 'status' && $can('status', 'application')
                " color="primary" @click="showModal = true">
                  Change Current Status
                </VBtn>
              </VCol>
              <VCol cols="12">
                <VTable>
                  <thead>
                    <tr>
                      <th>Date Added</th>
                      <th>Comment</th>
                      <th>Status and Document</th>
                      <!-- Combined column -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(status, index) in statuses" :key="index">
                      <td>{{ status.created_at }}</td>
                      <td>{{ status.comment }}</td>
                      <td>
                        <div>
                          <span v-html="status.status_text" />
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
                <VBtn v-if="$can('comment', 'application')" color="primary" @click="showCommentModal = true">
                  Add New Comment
                </VBtn>
              </VCol>
              <VCol cols="12">
                <div class="comment-section">
                  <div v-for="(comment, index) in comments" :key="index" class="comment">
                    <div class="comment-header">
                      <span class="comment-date">{{ comment.created_at }}</span>
                    </div>
                    <div class="comment-body" v-html="comment.comment_with_user" />
                  </div>
                </div>
              </VCol>
            </VRow>
          </VWindowItem>

          <!-- University Communication Tab -->
          <VWindowItem value="university-communication">
            <VRow>
              <VCol cols="12" class="d-flex justify-end">
                <VBtn v-if="$can('university_communication', 'application')" color="primary"
                  @click="showUniversityCommModal = true">
                  Add New Communication
                </VBtn>
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
                      <div v-html="comm.message" />
                    </div>
                  </div>
                </div>
              </VCol>
            </VRow>
          </VWindowItem>

          <!-- ACO & AO Communication Tab -->
          <VWindowItem value="aco-ao-communication" v-if="$can('enable', 'aco-ao-communication')">
            <AcoAoCommunication :application-id="applicationId" />
          </VWindowItem>

          <VWindowItem value="activity-logs">
            <ActivityLog :application-id="applicationId" />
          </VWindowItem>
          <VWindowItem value="assign-officer">
            <ApplicationOfficerAssignments :application-id="applicationId" />
          </VWindowItem>
          <VWindowItem value="assign-compliance-officer">
            <ComplianceOfficerAssignments :application-id="applicationId" />
          </VWindowItem>
          <VWindowItem value="aco-co-communication">
            <AcoCoCommunication :application-id="applicationId" />
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
  border-radius: 5px;
  background-color: #f8f9fa;
  margin-block-end: 5px;
}

.file-item i.fas.fa-file-alt {
  margin-inline-end: 10px;
}

.delete-btn {
  margin-inline-start: 10px;
}

.progress {
  inline-size: 100%;
}

.comment-section {
  margin-block-start: 10px;
}

.comment {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-block-end: 10px;
}

.comment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 5px;
}

.comment-date {
  font-weight: bold;
}

.comment-status {
  float: inline-end;
}

.comment-body {
  color: #333;
  font-size: 14px;
}

.current-status-label {
  color: red;
  font-weight: bold;
  margin-inline-start: 5px;
}

.ql-editor {
  overflow: auto;
  block-size: 250px;
  max-block-size: 250px;
}

.icon-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  inset-block-start: 10px;
  inset-inline-end: 10px;
}

.custom-badge {
  margin-block-start: -0.25rem;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
}

:deep(.v-badge__badge) {
  border-radius: 10px;
  block-size: 20px;
  font-size: 12px;
  inset-block-end: calc(100% - 2px) !important;
  min-inline-size: 20px;
  padding-block: 0;
  padding-inline: 6px;
}
</style>
