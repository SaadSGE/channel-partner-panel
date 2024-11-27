// src/stores/applicationStore.ts
import { defineStore } from "pinia";

export const useLeadStore = defineStore({
  id: "lead-store",
  state: () => ({
    errors: [],
    successMessage: "",
  }),
  actions: {
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

    async updateLeadStatus(id, updatedData) {
      try {
        console.log("Updating lead with data:", id, updatedData);

        const response = await $api(`/leads/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: updatedData,
        });

        console.log("Lead status updated successfully:", response);
        return response.data;
      } catch (error) {
        console.error("Error updating lead status:", error);

        // Capture and handle errors in a readable way
        this.errors = error.response?.data?.errors || [
          "An unexpected error occurred",
        ];
        throw error;
      }
    },

    async addNote(id, notes) {
      console.log("Adding note with:", notes);
      try {
        const response = await $api(`/leads/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(notes),
        });

        return response.data;
      } catch (error) {
        console.error("Error adding note:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
  },
});
