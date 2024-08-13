// src/stores/applicationStore.ts
import { defineStore } from 'pinia';

export const useDashboardStore = defineStore( {
    id: "dashboard",
    state: () => ({
        dashboards:[],
        errors: [],
        user:[]
      }),
  actions: {
    async fetchDashboard() {
        try {
          const response = await $api("/dashboard", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },

          });

          this.dashboards= response.data;
        } catch (error) {
          console.error("Error getting users list:", error);
          this.errors = error.response
            ? error.response.data.errors
            : ["An unexpected error occurred"];
          throw error;
        }
      },




  },
});
