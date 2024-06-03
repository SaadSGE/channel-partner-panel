<script lang="js" setup>
definePage({
  meta: {
    action: 'read',
    subject: 'public',
  },
})
import { commonFunction } from "@/@core/stores/commonFunction";
import AppllicatationOverviewTable from "@/views/dashboards/crm/ApplicationOverviewTable.vue";
import CrmEarningReportsYearlyOverview from "@/views/dashboards/crm/CrmEarningReportsYearlyOverview.vue";
import { onMounted } from "vue";
const commonFunctionStore = commonFunction()
onMounted(async () => {
  if (commonFunctionStore.countries.length === 0) {
        await commonFunctionStore.getCountries();
    }
    if (commonFunctionStore.courses.length === 0) {
        await commonFunctionStore.getCourses();
    }
    if (commonFunctionStore.intakes.length === 0) {
        await commonFunctionStore.getIntakes();
    }
    if (commonFunctionStore.universities.length === 0) {
        await commonFunctionStore.getUniversities();
    }
    if (commonFunctionStore.courseDetails.length === 0) {
        await commonFunctionStore.getCourseDetails();
    }

});
</script>

<template>
  <VRow>
    <VCol cols="12" md="4" sm="6" lg="3">
      <VCard>
        <VCardItem class="pb-3">
          <VCardTitle>New Application</VCardTitle>
          <VCardSubtitle>Last Week</VCardSubtitle>
        </VCardItem>

        <VCardText>
          <div class="d-flex align-center justify-space-between gap-x-2">
            <h4 class="text-h4 text-center">124</h4>
            <div class="text-sm text-success">+12.6%</div>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" md="4" sm="6" lg="3">
      <VCard>
        <VCardItem class="pb-3">
          <VCardTitle>Application Reveiw</VCardTitle>
          <VCardSubtitle>Last Week</VCardSubtitle>
        </VCardItem>

        <VCardText>
          <div class="d-flex align-center justify-space-between gap-x-2">
            <h4 class="text-h4 text-center">12</h4>
            <div class="text-sm text-success">+12.6%</div>
          </div>
        </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12" md="4" sm="6" lg="3">
      <VCard>
        <VCardItem class="pb-3">
          <VCardTitle>Application Submitted</VCardTitle>
          <VCardSubtitle>Last Week</VCardSubtitle>
        </VCardItem>

        <VCardText>
          <div class="d-flex align-center justify-space-between gap-x-2">
            <h4 class="text-h4 text-center">12</h4>
            <div class="text-sm text-success">+12.6%</div>
          </div>
        </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12" md="4" sm="6" lg="3">
      <VCard>
        <VCardItem class="pb-3">
          <VCardTitle>Application Declined</VCardTitle>
          <VCardSubtitle>Last Week</VCardSubtitle>
        </VCardItem>

        <VCardText>
          <div class="d-flex align-center justify-space-between gap-x-2">
            <h4 class="text-h4 text-center">12</h4>
            <div class="text-sm text-success">+12.6%</div>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" md="12">
      <CrmEarningReportsYearlyOverview />
    </VCol>

    <VCol cols="12" md="12">
      <VCard title=" Application Processing Data">
        <AppllicatationOverviewTable />
      </VCard>
    </VCol>
  </VRow>
</template>
