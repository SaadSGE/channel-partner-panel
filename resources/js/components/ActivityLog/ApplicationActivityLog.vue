<template>
  <VCard title="Application Activity Log" class="mt-5">
    <VCardText>
      <div class="d-flex justify-space-between flex-wrap gap-6">
        <div class="me-3 d-flex gap-3">
          <AppSelect
            v-model="itemsPerPage"
            :items="[
              { value: 10, title: '10' },
              { value: 25, title: '25' },
              { value: 50, title: '50' },
              { value: 100, title: '100' },
              { value: -1, title: 'All' },
            ]"
            style="inline-size: 6.25rem;"
            @update:model-value="itemsPerPage = parseInt($event, 10)"
          />
        </div>
        <!-- <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <div style="inline-size: 15.625rem;">
            <AppTextField
              v-model="searchQuery"
              placeholder="Search Activity"
            />
          </div>
          <AppSelect
            v-model="selectedActivityType"
            :items="activityTypes"
            placeholder="Select Activity Type"
            style="inline-size: 12.5rem;"
            clearable
          />
        </div> -->
      </div>
    </VCardText>

    <VDivider />

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



      <template #item.user="{ item }">
        {{ item.user }}

      </template>
      <template #item.created_at="{ item }">
        {{ format(new Date(item.created_at), 'dd MMM yyyy HH:mm:ss') }}
      </template>

      <template #item.ip_address="{ item }">
        {{ item.properties.ip }}
      </template>

      <template #item.details="{ item }">
        <template v-if="item.description === 'application_status_update'">
          Updated {{ item.properties.old_status }} to {{ item.properties.new_status }}
          <br>
          <span v-if="item.properties.comment">
            Comment: {{ item.properties.comment }}
          </span>
        </template>
        <template v-else-if="item.description === 'comment_added'">
          {{ item.properties.comment }}
        </template>
        <template v-else-if="item.description === 'university_communication_added'">
          Subject: {{ item.properties.subject }}
        </template>
        <template v-else>
          {{ item.properties.details || 'N/A' }}
        </template>
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
import { useApplicationListStore } from "@/@core/stores/applicationList";
import { formatKey } from "@/@core/utils/helpers";
import { format } from 'date-fns';
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
  applicationId: {
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

const activityTypes = [
  { title: 'Application Submit', value: 'application_submit' },
  { title: 'Application Update', value: 'application_update' },
  { title: 'Document Upload', value: 'document_upload' },
  { title: 'Comment Added', value: 'comment_added' },
  { title: 'Status Update', value: 'application_status_update' },
];

const activityLogHeaders = [
  { title: 'Date', key: 'created_at', sortable: true },
  { title: 'User', key: 'user', sortable: true }, // Add this line
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

    const response = await activityLogStore.fetchApplicationActivityLogs(props.applicationId);

    activityLogs.value = response.data.data.map(log => ({
      ...log,
      created_at: format(new Date(log.created_at), 'yyyy-MM-dd HH:mm:ss'),
      ip_address: log.properties.ip || 'N/A',
      details: formatActivityDetails(log),
      user: log.user ? log.user.name : 'System', // Add this line
    }));
    totalActivityLogs.value = response.data.total;
  } catch (error) {
    console.error("Error fetching activity logs:", error);
  } finally {
    isLoadingActivityLog.value = false;
  }
};

const applicationListStore = useApplicationListStore();
const allStatuses = ref([]);

const formatActivityDetails = (activity) => {
  switch (activity.description) {
    case 'application_submit':
      return `Submitted application #${activity.properties.application_id}`;
    case 'application_update':
      return `Updated application #${activity.properties.application_id}`;
    case 'document_upload':
      return `Uploaded document: ${activity.properties.document_name || 'Unknown'}`;
    case 'comment_added':
      return `Added comment to application #${activity.properties.application_id || 'Unknown'}`;
    case 'application_status_update':
      const oldStatus = getStatusName(activity.properties.old_status);
      const newStatus = getStatusName(activity.properties.new_status);
      return `Updated status from ${oldStatus} to ${newStatus}`;
    default:
      return activity.description || 'Performed an action';
  }
};

const getStatusName = (statusId) => {
  const status = allStatuses.value.find(s => s.id === parseInt(statusId));
  return status ? status.name : 'Unknown';
};

const getActivityColor = (activityType) => {
  switch (activityType) {
    case 'application_submit': return 'primary';
    case 'application_update': return 'info';
    case 'document_upload': return 'success';
    case 'comment_added': return 'warning';
    case 'application_status_update': return 'error';
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

watch([searchQuery, selectedActivityType], () => {
  page.value = 1;
  fetchActivityLogs();
});

onMounted(async () => {
  await fetchActivityLogs();
  await fetchAllStatuses();
});

const fetchAllStatuses = async () => {
  const response = await applicationListStore.getAllApplicationStatuses();
  allStatuses.value = response.data;
};

</script>
