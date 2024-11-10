// src/stores/applicationStore.ts
import { defineStore } from "pinia";

export const useLeadStore = defineStore({
  id: "lead-store",
  state: () => ({
    errors: [],
    successMessage: "",
  }),
  actions: {
    // async getLeads() {
    //   try {
    //     const response = await $api("/leads", { method: "GET" });
    //     console.log(response);
    //     return response;
    //   } catch (error) {
    //     console.error("Error getting leads:", error);
    //     this.errors = error.response
    //       ? error.response.data.errors
    //       : ["An unexpected error occurred"];
    //     throw error;
    //   }
    // },

    async getLeads(
      id = null,
      page = 1,
      itemsPerPage = 10,
      searchQuery = "",
      sortBy = "",
      orderBy = "",
      status = null,
      dateFrom = null,
      dateTo = null
    ) {
      try {
        return await $api("/leads", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            id,
            page,
            perPage: itemsPerPage,
            searchQuery,
            sortBy,
            orderBy,
            status,
            dateFrom,
            dateTo,
          },
        });
      } catch (error) {
        console.error("Error getting leads list:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
  },
});
