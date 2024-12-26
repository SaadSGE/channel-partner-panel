import { defineStore } from "pinia";

export const useDemoDashboardStore = defineStore({
  id: "demo-dashboard",
  state: () => ({
    dateValue: "",
    applicationStatuses: [],
    selectedStatus: null,
  }),

  actions: {
    async fetchDashboardData() {
      try {
        const response = await $api("/demo-dashboard");
        this.applicationStatuses = response.data.application_statuses;
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    },
  },
});
