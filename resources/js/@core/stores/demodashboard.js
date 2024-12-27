import { defineStore } from "pinia";

export const useDemoDashboardStore = defineStore({
  id: "demo-dashboard",
  state: () => ({
    dateValue: "",
    applicationStatuses: [],
    dashboardData: [],
    leadStatuses: [],
  }),

  actions: {
    async fetchApplicationStatusData(application_status_id = 1) {
      try {
        const response = await $api(
          `/demo-application-statuses/${application_status_id}`
        );
        this.applicationStatuses = response;
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    },

    async fetchDashboardData() {
      try {
        const response = await $api(`/demo-dashboard`);
        this.dashboardData = response;
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    },

    async fetchLeadStatuses(lead_status_id = 1) {
      try {
        const response = await $api(`/demo-lead-statuses/${lead_status_id}`);
        this.leadStatuses = response;
      } catch (error) {
        console.error("Error fetching lead statuses:", error);
      }
    },
  },
});
