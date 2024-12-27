// src/stores/applicationStore.ts
import { defineStore } from "pinia";
import { handleErrorResponse } from "../utils/helpers";
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
      dateTo = null,
      assignedStatus = null,
      leadType = null,
      event = null,
      branch = null,
      leadCountry = null
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
            assigned_status: assignedStatus,
            lead_type: leadType,
            event,
            branch,
            lead_country: leadCountry
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

    async uploadLeads(formData) {
      try {
        const response = await $api("/leads/upload", {
          method: "POST",
          body: formData,
        });

        this.successMessage = response.data.message;
        return response.data;
      } catch (error) {
        handleErrorResponse(error);
      }
    },

    async fetchLeadCount(country, branch) {
      try {
        const response = await $api("/leads/count", {
          method: "GET",
          params: {
            country,
            branch_id: branch,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching lead count:", error);
        throw error;
      }
    },

    async saveAssignedLeads(assignedData, leadCountry, branchId) {
      try {
        const response = await $api("/leads/assign", {
          method: "POST",
          body: JSON.stringify({
            assigned_data: assignedData,
            lead_country: leadCountry,
            branch_id: branchId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        return response;
      } catch (error) {
        console.error("Error saving assigned leads:", error);
        throw error;
      }
    },

    async addNoteToLead(leadId, note) {
      try {
        const response = await $api(`/leads/${leadId}/add-note`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ note }),
        });

        return response.data;
      } catch (error) {
        console.error("Error adding note to lead:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
  },
});
