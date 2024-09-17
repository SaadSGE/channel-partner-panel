<script setup>
definePage({
  meta: {
    action: "read",
    subject: "dashboard",
  },
});
import { useActivityLogStore } from "@/@core/stores/activityLog";
import { useApplicationListStore } from "@/@core/stores/applicationList";
import { } from "@/@core/stores/commonFunction";
import { useRecordStore } from "@/@core/stores/recordStore";
import { useUserStore } from "@/@core/stores/user";
import { containsString } from '@/@core/utils/helpers.js';
import ApplicationList from "@/pages/application/index.vue";
import UserBioPanel from "@/pages/user/UserBioPanel.vue";

import { format } from 'date-fns';
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const route = useRoute("apps-user-view-id");
const userTab = ref(null);
const router = useRouter();
const recordStore = useRecordStore();
const tabs = [
  {
    icon: "tabler-users",
    title: "Account",
  },
  {
    icon: "tabler-lock",
    title: "Security",
  },
  {
    icon: "tabler-bookmark",
    title: "Billing & Plan",
  },
  {
    icon: "tabler-bell",
    title: "Notifications",
  },
  {
    icon: "tabler-link",
    title: "Connections",
  },
];
const applicationLists = ref();
const store = useUserStore();
const storeApplication = useApplicationListStore();
const userData = ref([]);
const searchQuery = ref("");
const isLoading = ref(false);

const activityLogStore = useActivityLogStore();
const activityLogs = ref([]);
const isLoadingActivityLog = ref(false);
const totalActivityLogs = ref(0);
const activityLogOptions = ref({
  page: 1,
  itemsPerPage: 10,
  sortBy: [{ key: 'created_at', order: 'desc' }],
});

const activityLogHeaders = [
  { title: 'Date', key: 'created_at', sortable: true },
  { title: 'Activity Type', key: 'description', sortable: true },
  { title: 'Details', key: 'details', sortable: false },
  { title: 'IP Address', key: 'ip_address', sortable: false },
];

onMounted(async () => {
  userData.value = await store.fetchUser(route.params.id);
  currentDocuments.value = userData.value.documents || [];
  await getRecord();
  await fetchActivityLogs();
});

const downloadFile = (fileUrl) => {
  const link = document.createElement('a');
      link.href = fileUrl;
      link.target = '_blank';
      link.download = 'test';

      // Simulate a click on the element <a>
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
};

const getRecord = async (page = 1) => {
  const fetchRecord = await recordStore.fetchRecord(
    page,
    searchQuery.value,
    route.params.id
  );
  records.value = fetchRecord.data;
  total.value = fetchRecord.total;
};

const formatKey = (key) => {
  return key
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize the first letter of each word
};

const headersApplication = [
  {
    title: "APPLICATION ID",
    key: "application_id",
  },
  {
    title: "Student Name",
    key: "student.name",
  },

  {
    title: "University/Course Details",
    key: "university.name",
  },
  {
    title: "Status",
    key: "status",
  },

  {
    title: "Date Added",
    key: "created_at",
  },
  {
    title: "Action",
    key: "action",
    sortable: false,
  },
];

const headersRecord = [
  { title: "Country", key: "country.name" },
  { title: "Intake", key: "intake.name" },
  { title: "University", key: "university.name" },
  { title: "Course Type", key: "course.type" },
  { title: "Course Name", key: "course.name" },
  { title: "Tution Fee", key: "tuition_fee" },
  { title: "Course Duration", key: "course_duration" },
  { title: "Academic Requirement", key: "academic_requirement" },
  { title: "English Requirement", key: "english_requirement" },
  { title: "Actions", key: "actions", sortable: false },
];

const headersUser = [
  { title: "Name", key: "full_name" },
  { title: "Email", key: "email" },
  { title: "Record Count", key: "record_count" },
  { title: "Actions", key: "actions", sortable: false },
];

const currentDocuments = ref([]);

const intake = ref("");
const courseType = ref("");
const university = ref("");
const course = ref("");
const records = ref();
const total = ref();
const itemsPerPage = ref(10);
const page = ref(1);

const updateOptions = (event) => {
  getRecord(event.page);
};

const users = ref([]);
const totalUsers = ref(0);
const sortBy = ref();
const orderBy = ref();

const fetchUsers = async () => {
  isLoading.value = true;
  try {
    const response = await store.fetchUsers(
      page.value,
      searchQuery.value,
      selectedRole.value,
      route.params.id
    );
    users.value = response.data;
    console.log(users.value);
    totalUsers.value = response.total;
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    isLoading.value = false;
  }
};

const updateUserOptions = (options) => {
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
  fetchUsers();
};

const fetchActivityLogs = async () => {
  isLoadingActivityLog.value = true;
  try {
    const response = await activityLogStore.fetchUserActivityLogs(
      route.params.id,
      activityLogOptions.value.page,
      activityLogOptions.value.itemsPerPage,
      activityLogOptions.value.sortBy[0]
    );
    activityLogs.value = response.data.data.map(log => ({
      ...log,
      created_at: format(new Date(log.created_at), 'yyyy-MM-dd HH:mm:ss'),
      ip_address: log.properties.ip || 'N/A',
      details: formatActivityDetails(log),
    }));
    totalActivityLogs.value = response.data.total;
  } catch (error) {
    console.error("Error fetching activity logs:", error);
  } finally {
    isLoadingActivityLog.value = false;
  }
};

const formatActivityDetails = (activity) => {
  switch (activity.description) {
    case 'login':
      return 'User logged in';
    case 'logout':
      return 'User logged out';
    case 'profile_update':
      return 'Updated profile information';
    case 'password_change':
      return 'Changed password';
    case 'application_submit':
      return `Submitted application #${activity.properties.application_id}`;
    case 'application_update':
      return `Updated application #${activity.properties.application_id}`;
    case 'document_upload':
      return `Uploaded document: ${activity.properties.document_name || 'Unknown'}`;
    case 'comment_add':
      return `Added comment to application #${activity.properties.application_id || 'Unknown'}`;
    default:
      return activity.description || 'Performed an action';
  }
};

const getActivityColor = (activityType) => {
  switch (activityType) {
    case 'login': return 'success';
    case 'logout': return 'warning';
    case 'application_submit': return 'primary';
    case 'application_update': return 'info';
    default: return 'default';
  }
};

const handleActivityLogUpdate = (options) => {
  activityLogOptions.value = options;
  fetchActivityLogs();
};
</script>

<template>
  <VRow>
    <VCol cols="12" md="5" lg="4">
      <UserBioPanel :user-data="userData" />
    </VCol>
    <VCol cols="12" md="4" sm="6" lg="8">
      <VRow>
        <VCol
          cols="12"
          md="5"
          lg="4"
          v-for="(value, key) in userData.dashboard"
          :key="key"
        >
          <VCard>
            <VCardItem class="pb-3">
              <VCardTitle>{{ formatKey(key) }}</VCardTitle>
              <VCardSubtitle>Last Week</VCardSubtitle>
            </VCardItem>

            <VCardText>
              <div class="d-flex align-center justify-space-between gap-x-2">
                <h4 class="text-h4 text-center">{{ value }}</h4>
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VCol>
  </VRow>

  <VCard class="mt-5" v-if="containsString(userData.role,'channel partner')">
    <ApplicationList :userId="route.params.id"/>
    <VCardTitle>Documents</VCardTitle>
    <VCardText>
      <VCard
        v-for="(document, index) in currentDocuments"
        :key="index"
        class="mb-2"
      >
        <VCardText class="d-flex justify-space-between align-center">
          <div>

            <VIcon size="26" color="red" icon="tabler-file-type-doc" />
            <a :href="document.document_path" target="_blank">{{ formatKey(document.document_type) }}</a>
          </div>
          <VBtn icon @click="downloadFile(document.document_path)">
            <VIcon size="24" icon="tabler-eye" />
          </VBtn>
        </VCardText>
      </VCard>
    </VCardText>
  </VCard>

  <VCard title="Course Details" class="mt-2" v-if="containsString(userData.role,'editor')">
    <VCardText>
      <div class="d-flex justify-space-between flex-wrap gap-6">
        <div>
          <AppTextField
            v-model="searchQuery"
            style="max-inline-size: 200px; min-inline-size: 200px;"
            placeholder="Search Record"
          />
        </div>
        <div class="d-flex flex-row gap-4 align-center flex-wrap">
          <AppSelect
            v-model="itemsPerPage"
            :items="[10, 25, 50, 100]"
            style="inline-size: 6.25rem;"
          />
        </div>
      </div>
    </VCardText>
    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      :loading="isLoading"
      :items-length="total"
      :headers="headersRecord"
      :items="records"
      item-value="total"
      class="text-no-wrap text-sm rounded-0"
      @update:options="updateOptions"
    >
      <template #item.academic_requirement="{ item }">
        <ShowMore :text="item.academic_requirement" :lines="3" />
      </template>
      <template #item.english_requirement="{ item }">
        <ShowMore :text="item.english_requirement" :lines="3" />
      </template>
      <template #bottom>
        <TablePagination
          v-model:page="page"
          :items-per-page="itemsPerPage"
          :total-items="total"
        />
      </template>
    </VDataTableServer>
  </VCard>

  <VCard title="User Activity Log" class="mt-5">
    <VCardText>
      <VDataTable
        v-model:options="activityLogOptions"
        :headers="activityLogHeaders"
        :items="activityLogs"
        :items-length="totalActivityLogs"
        :loading="isLoadingActivityLog"
        class="elevation-1"
        @update:options="handleActivityLogUpdate"
      >
        <template v-slot:item.description="{ item }">
          <VChip
            :color="getActivityColor(item.description)"
            size="small"
          >
            {{ item.description }}
          </VChip>
        </template>

        <template v-slot:item.details="{ item }">
          <div v-if="item.description === 'application_submit'">
            <strong>Application ID:</strong> {{ item.properties.application_id }}<br>
            <strong>Student Name:</strong> {{ item.properties.student_name }}<br>
            <strong>Student Email:</strong> {{ item.properties.student_email }}<br>
            <strong>University:</strong> {{ item.properties.university_name }}<br>
            <strong>Intake:</strong> {{ item.properties.intake_name }}
          </div>
          <div v-else-if="item.description === 'application_status_update'">
            <strong>Application ID:</strong> {{ item.properties.application_id }}<br>
            <strong>Student Name:</strong> {{ item.properties.student_eamil }}<br>
            <strong>New Status:</strong> {{ item.properties.new_status }}<br>
            <strong>Old Status:</strong> {{ item.properties.old_status }}
          </div>
          <div v-else-if="item.description === 'document_upload'">
            <strong>Application ID:</strong> {{ item.properties.application_id }}<br>
            <strong>Student Name:</strong> {{ item.properties.student_name }}<br>
            <strong>Document Name:</strong> {{ item.properties.document_name }}
          </div>
          <div v-else-if="item.description === 'comment_added'">
            <strong>Application ID:</strong> {{ item.properties.application_id }}<br>
            <strong>Student Name:</strong> {{ item.properties.student_name }}<br>
            <strong>Comment:</strong> {{ item.properties.comment }}
          </div>
          <div v-else-if="item.description === 'university_communication_added'">
            <strong>Application ID:</strong> {{ item.properties.application_id }}<br>
            <strong>Student Name:</strong> {{ item.properties.student_name }}<br>
            <strong>Subject:</strong> {{ item.properties.subject }}
          </div>
          <div v-else>
            {{ item.details }}
          </div>
        </template>



      </VDataTable>
    </VCardText>
  </VCard>
</template>
