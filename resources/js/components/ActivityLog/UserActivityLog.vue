<template>
  <VCard title="User Activity Log" class="mt-5">
    <VCardText>

      <VRow class="d-flex justify-end align-center">

        <VCol cols="12" sm="6" md="3">
          <AppSelect
            v-model="selectedActivityType"
            :items="activityTypes"
            placeholder="Select Activity Type"
            clearable
          />
        </VCol>
        <VCol cols="12" sm="6" md="3">
          <AppDateTimePicker
            v-model="dateFrom"

            placeholder="Select From Date"
          />
        </VCol>
        <VCol cols="12" sm="6" md="3">
          <AppDateTimePicker
            v-model="dateTo"

            placeholder="Select To Date"
          />
        </VCol>
      </VRow>
    </VCardText>

    <VDivider />
    <VCardText>
      <VRow class="d-flex justify-end align-center">
        <VCol cols="auto">
          <AppSelect
            v-model="itemsPerPage"
            :items="[
              { value: 10, title: '10' },
              { value: 25, title: '25' },
              { value: 50, title: '50' },
              { value: 100, title: '100' },
              { value: -1, title: 'All' },
            ]"
            label="Items per page"
            style="inline-size: 8rem;"
            @update:model-value="itemsPerPage = parseInt($event, 10)"
          />
        </VCol>
      </VRow>
    </VCardText>
    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      :items="activityLogs"
      :items-length="totalActivityLogs"
      :headers="activityLogHeaders"
      :loading="isLoadingActivityLog"
      class="text-no-wrap"
      @update:options="handleActivityLogUpdate"
    >
      <template #item.description="{ item }">
        <VChip
          :color="getActivityColor(item.description)"
          size="small"
        >
          {{ formatKey(item.description) }}
        </VChip>
      </template>

      <template #item.details="{ item }">

        <div v-if="item.description === 'application_submit'">
          <strong>Application ID:</strong> {{ item.properties.application_id }}<br>
          <strong>Student Name:</strong> {{ item.properties.student_name }}<br>
          <strong>Student Email:</strong> {{ item.properties.student_email }}<br>
          <strong>University:</strong> {{ item.properties.university_name }}<br>
          <strong>Intake:</strong> {{ item.properties.intake_name }}
        </div>
        <div v-else-if="item.description === 'application_status_update'">
          <strong>Application ID:</strong> {{ item.properties.application_id }}<br>
          <strong>Student Email:</strong> {{ item.properties.student_email }}<br>
          <strong>New Status:</strong> {{ item.properties.new_status }}<br>
          <strong>Old Status:</strong> {{ item.properties.old_status }}<br>
          <strong>Student Email:</strong> {{ item.properties.student_email }}<br>
          <strong>University:</strong> {{ item.properties.university_name }}<br>
          <strong>Intake:</strong> {{ item.properties.intake_name }}<br>
        </div>
        <div v-else-if="item.description === 'document_upload'">
          <strong>Application ID:</strong> {{ item.properties.application_id }}<br>
          <strong>Student Email:</strong> {{ item.properties.student_email }}<br>
          <strong>University:</strong> {{ item.properties.university_name }}<br>
          <strong>Intake:</strong> {{ item.properties.intake_name }}<br>
          <strong>Document Name:</strong> {{ item.properties.document_name }}
        </div>
        <div v-else-if="item.description === 'comment_added'">
          <strong>Application ID:</strong> {{ item.properties.application_id }}<br>
          <strong>Student Email:</strong> {{ item.properties.student_email }}<br>
          <strong>University:</strong> {{ item.properties.university_name }}<br>
          <strong>Intake:</strong> {{ item.properties.intake_name }}<br>
          <strong>Comment:</strong> {{ item.properties.comment }}
        </div>
        <div v-else-if="item.description === 'university_communication_added'">
          <strong>Application ID:</strong> {{ item.properties.application_id }}<br>
          <strong>Student Email:</strong> {{ item.properties.student_email }}<br>
          <strong>University:</strong> {{ item.properties.university_name }}<br>
          <strong>Intake:</strong> {{ item.properties.intake_name }}<br>
          <strong>Subject:</strong> {{ item.properties.subject }}
        </div>
        <div v-else-if="item.description === 'course_request_submitted'">
          <strong>University Name:</strong> {{ item.properties.university_name }}<br>
          <strong>Course Name:</strong> {{ item.properties.course_name }}<br>
          <strong>Intake:</strong> {{ item.properties.intake }}
        </div>
        <div v-else-if="item.description === 'course_request_failed'">
          <strong>Error:</strong> {{ item.properties.error }}<br>
          <strong>University Name:</strong> {{ item.properties.university_name }}<br>
          <strong>Course Name:</strong> {{ item.properties.course_name }}<br>
          <strong>Intake:</strong> {{ item.properties.intake }}
        </div>
        <div v-else>
          {{ item.details }}
        </div>
      </template>

      <template #bottom>
        <TablePagination
          v-model:page="page"
          :items-per-page="itemsPerPage"
          :total-items="totalActivityLogs"
        />
      </template>
    </VDataTableServer>
  </VCard>
</template>

<script setup>
import { useActivityLogStore } from "@/@core/stores/activityLog";
import { formatKey } from "@/@core/utils/helpers";
import { format } from 'date-fns';
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
  userId: {
    type: String,
    required: true
  }
});

const activityLogStore = useActivityLogStore();
const activityLogs = ref([]);
const isLoadingActivityLog = ref(false);
const totalActivityLogs = ref(0);
const page = ref(1);
const itemsPerPage = ref(10);
const searchQuery = ref('');
const selectedActivityType = ref(null);
const dateFrom = ref(null);
const dateTo = ref(null);

const activityTypes = [
  { title: 'Login', value: 'login' },
  { title: 'Logout', value: 'logout' },
  { title: 'Application Submit', value: 'application_submit' },
  { title: 'Application Update', value: 'application_update' },
  { title: 'Document Upload', value: 'document_upload' },
];

const activityLogHeaders = [
  { title: 'Date', key: 'created_at', sortable: true },
  { title: 'Activity Type', key: 'description', sortable: true },
  { title: 'Details', key: 'details', sortable: false },
  { title: 'IP Address', key: 'ip_address', sortable: false },
];

const fetchActivityLogs = async () => {
  isLoadingActivityLog.value = true;
  try {
    activityLogStore.setPage(page.value);
    activityLogStore.setPerPage(itemsPerPage.value);
    activityLogStore.setActivityType(selectedActivityType.value);
    activityLogStore.setSearchQuery(searchQuery.value);
    activityLogStore.setDateFrom(dateFrom.value);
    activityLogStore.setDateTo(dateTo.value);

    const response = await activityLogStore.fetchUserActivityLogs(props.userId);

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
    case 'application_status_update': return 'info';
    case 'document_upload': return 'secondary';
    case 'comment_added': return 'success';
    case 'university_communication_added': return 'info';
    case 'course_request_submitted': return 'primary';
    case 'course_request_failed': return 'error';
    case 'profile_update': return 'secondary';
    case 'password_change': return 'warning';
    default: return 'default';
  }
};

const handleActivityLogUpdate = (options) => {
  page.value = options.page;
  itemsPerPage.value = options.itemsPerPage;
  if (options.sortBy && options.sortBy.length > 0) {
    activityLogStore.setSorting(options.sortBy[0].key, options.sortBy[0].order);
  }
  fetchActivityLogs();
};

watch([searchQuery, selectedActivityType, dateFrom, dateTo], () => {
  page.value = 1;
  fetchActivityLogs();
});

onMounted(() => {
  fetchActivityLogs();
});
</script>

