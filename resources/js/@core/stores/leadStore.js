// src/stores/applicationStore.ts
import { defineStore } from "pinia";

export const useLeadStore = defineStore({
  id: "lead-store",
  state: () => ({
    errors: [],
    successMessage: "",
  }),
  actions: {
    async getLeads() {
      try {
        const response = await $api("/leads", { method: "GET" });
        console.log(response);
        return response;
      } catch (error) {
        console.error("Error getting leads:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
  },
});
