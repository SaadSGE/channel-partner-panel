import { defineStore } from "pinia";

export const useDemoDashboardStore = defineStore({
  id: "demo-dashboard",
  state: () => ({
    dateValue: "",
    applicationStatuses: [],
  }),

  actions: {
    async fetchDashboardData(application_status_id = 1) {
      try {
        const response = await $api(
          `/demo-application-statuses/${application_status_id}`
        );
        this.applicationStatuses = response;
        console.log(this.applicationStatuses);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    },
  },
});
