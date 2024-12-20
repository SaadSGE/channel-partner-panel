<template>
  <VRow>
    <!-- Conditional rendering based on user role -->
    <VCol cols="12" md="4" sm="6" lg="3" v-if="isAdmin">
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

    <VCol cols="12" md="4" sm="6" lg="3" v-if="isAdmin">
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

    <VCol cols="12" md="4" sm="6" lg="3" v-if="isAdmin">
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

    <!-- Total Applications Card for Application Control Officer -->


    <!-- Application Status Cards for All Roles -->
    <VCol cols="12" md="4" sm="6" lg="3" v-for="(count, status) in dashboards.applications_by_status" :key="status">
      <VCard>
        <VCardItem class="pb-3">
          <VCardTitle>{{ formatKey(status) }}</VCardTitle>
        </VCardItem>

        <VCardText>
          <div class="d-flex align-center justify-space-between gap-x-2">
            <h4 class="text-h4 text-center">{{ count }}</h4>
          </div>
        </VCardText>
      </VCard>
    </VCol>
    <!-- 👉 Application Status Charts -->
    <VCol cols="12" lg="12" md="8">
      <ApplicationStatusCharts />
    </VCol>

    <VCol cols="12" lg="8">
      <ApplicationTable />
    </VCol>

    <VCol cols="12" md="4">
      <TopTenUniversities />
    </VCol>

    <VCol cols="12" md="4">
      <TopTenCP />
    </VCol>

    <VCol cols="12" md="4">
      <TopTenACO />
    </VCol>
    <VCol cols="12" md="4">
      <LeadStats />
    </VCol>
    <VCol cols="12" lg="12" md="8">
      <LeadStatusChart />
    </VCol>
  </VRow>


</template>

<script setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { useDashboardStore } from "@/@core/stores/dashboard";
import { containsString, formatKey, getUserRole } from '@/@core/utils/helpers';
import ApplicationStatusCharts from "@/components/Dashboard/ApplicationStatusCharts.vue";
import ApplicationTable from "@/components/Dashboard/ApplicationTable.vue";
import LeadStats from "@/components/Dashboard/LeadStats.vue";
import LeadStatusChart from "@/components/Dashboard/LeadStatusChart.vue";
import TopTenACO from "@/components/Dashboard/TopTenACO.vue";
import TopTenCP from "@/components/Dashboard/TopTenCP.vue";
import TopTenUniversities from "@/components/Dashboard/TopTenUniversities.vue";
import { computed, onMounted, ref } from 'vue';

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
  await dashboardStore.fetchDashboard();
  dashboards.value = dashboardStore.dashboards;
  userRole.value = getUserRole();
});

const isAdmin = computed(() => containsString(userRole.value, 'admin'));
const isApplicationControlOfficer = computed(() => containsString(userRole.value, 'application control officer'));
const isChannelPartner = computed(() => containsString(userRole.value, 'channel partner'));
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

</script>
