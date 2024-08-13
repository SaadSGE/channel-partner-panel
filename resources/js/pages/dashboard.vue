<script lang="js" setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { useDashboardStore } from "@/@core/stores/dashboard";
import ApplicationOverviewTable from "@/views/dashboards/crm/ApplicationOverviewTable.vue";

import { onMounted, ref } from 'vue';

definePage({
  meta: {
    action: 'read',
    subject: 'dashboard',
  },
});

const commonFunctionStore = commonFunction();
const dashboardStore = useDashboardStore();
const dashboards = ref({});
const userRole = ref('');

onMounted(async () => {


  // Fetch dashboard data
  await dashboardStore.fetchDashboard();
  dashboards.value = dashboardStore.dashboards;
  const userData =  useCookie('userData').value;
  userRole.value = userData.main_role;
});

const formatStatus = (status) => {
  return status.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
};
</script>



<template>
  <VRow>
    <!-- Conditional rendering based on user role -->
    <VCol cols="12" md="4" sm="6" lg="3" v-if="userRole === 'admin'">
      <VCard>
        <VCardItem class="pb-3">
          <VCardTitle>Total Channel Partners</VCardTitle>
        </VCardItem>

        <VCardText>
          <div class="d-flex align-center justify-space-between gap-x-2">
            <h4 class="text-h4 text-center">{{ dashboards.total_channel_partners }}</h4>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" md="4" sm="6" lg="3" v-if="userRole === 'admin'">
      <VCard>
        <VCardItem class="pb-3">
          <VCardTitle>Total Editors</VCardTitle>
        </VCardItem>

        <VCardText>
          <div class="d-flex align-center justify-space-between gap-x-2">
            <h4 class="text-h4 text-center">{{ dashboards.total_editors }}</h4>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" md="4" sm="6" lg="3" v-if="userRole === 'admin'">
      <VCard>
        <VCardItem class="pb-3">
          <VCardTitle>Total Record</VCardTitle>
        </VCardItem>

        <VCardText>
          <div class="d-flex align-center justify-space-between gap-x-2">
            <h4 class="text-h4 text-center">{{ dashboards.total_courses }}</h4>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <!-- Application Status Cards for All Roles -->
    <VCol cols="12" md="4" sm="6" lg="3" v-for="(count, status) in dashboards.applications_by_status" :key="status">
      <VCard>
        <VCardItem class="pb-3">
          <VCardTitle>{{ formatStatus(status) }}</VCardTitle>
        </VCardItem>

        <VCardText>
          <div class="d-flex align-center justify-space-between gap-x-2">
            <h4 class="text-h4 text-center">{{ count }}</h4>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <!-- Application Overview Table for All Roles -->
    <VCol cols="12" md="12">
      <VCard title=" Application Processing Data">
        <ApplicationOverviewTable />
      </VCard>
    </VCol>
  </VRow>
</template>


