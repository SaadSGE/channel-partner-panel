<template>
  <VCard>
    <DateRangePicker title="Dashboard Overview" @dateRangeSelected="handleDateRangeSelected" @close-menu="closeMenu" />
    <VCard class="pa-5">
      <!-- <div class="d-flex justify-space-between align-center mb-5">
      <div class="d-flex align-center">
        <h2 class="text-h5 font-weight-bold" style="margin-inline-end: 16px;">Dashboard Overview</h2>
      </div>
      <div class="d-flex align-center">
        <div class="mt-n4 me-n2">
          <VMenu v-model="menuVisible" :close-on-content-click="false">
            <template #activator="{ props }">
              <MoreBtn size="small" v-bind="props" class="ma-2" />
            </template>
<VCard min-width="400" class="pa-1 mt-2" style="margin-block-start: 10px;">
  <VCardText>
    <DateRangePicker @dateRangeSelected="handleDateRangeSelected" @close-menu="closeMenu" />
  </VCardText>
</VCard>
</VMenu>
</div>
</div>
</div> -->
      <VRow>
        <!-- Conditional rendering based on user role -->
        <VCol cols="12" md="4" sm="6" lg="3" v-if="isAdmin">
          <VCard>
            <VCardItem class="pb-3">
              <VCardTitle>Total Channel Partners</VCardTitle>
            </VCardItem>

            <VCardText class="pb-4">
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

            <VCardText class="pb-4">
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

            <VCardText class="pb-4">
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
              <VCardTitle>{{ formatKey(status) }}</VCardTitle>
            </VCardItem>

            <VCardText class="pb-4">
              <div class="d-flex align-center justify-space-between gap-x-2">
                <h4 class="text-h4 text-center">{{ count }}</h4>
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VCard>
  </VCard>
  <VRow class="mt-5">
    <!-- 👉 Application Status Charts -->
    <VCol cols="12" lg="12" md="8">
      <ApplicationStatusCharts />
    </VCol>

    <VCol cols="12" lg="8">
      <ApplicationTable />
    </VCol>

    <VCol cols="12" md="4">
      <TopTenUniversities @dateRangeSelected="handleDateRangeSelected" @close-menu="closeMenu" />
    </VCol>

    <VCol cols="12" md="6">
      <TopTenCP @dateRangeSelected="handleDateRangeSelected" @close-menu="closeMenu" />
    </VCol>

    <VCol cols="12" md="6">
      <TopTenACO @dateRangeSelected="handleDateRangeSelected" @close-menu="closeMenu" />
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
import LeadStatusChart from "@/components/Dashboard/LeadStatusChart.vue";
import TopTenACO from "@/components/Dashboard/TopTenACO.vue";
import TopTenCP from "@/components/Dashboard/TopTenCP.vue";
import TopTenUniversities from "@/components/Dashboard/TopTenUniversities.vue";
import { computed, onMounted, ref } from 'vue';
import { VRow } from "vuetify/lib/components/index.mjs";
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
const myRef = ref(null);
const dateValue = ref([]);
const formatter = ref({
  date: 'DD MMM YYYY',
  month: 'MMM',
});

const menuVisible = ref(false);

const handleDateRangeSelected = (dateRange) => {
  console.log('Date Range Selected:', dateRange);
  menuVisible.value = false; // Close menu after selecting dates
};

const closeMenu = () => {
  menuVisible.value = false;
};
onMounted(async () => {
  await dashboardStore.fetchDashboard();
  dashboards.value = dashboardStore.dashboards;
  userRole.value = getUserRole();
});

const items = ref(['This Week', 'This Month', 'This Year']);
const isAdmin = computed(() => containsString(userRole.value, 'admin'));
const isApplicationControlOfficer = computed(() => containsString(userRole.value, 'application control officer'));
const isChannelPartner = computed(() => containsString(userRole.value, 'channel partner'));
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

</script>
