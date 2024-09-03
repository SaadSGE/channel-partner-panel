// src/stores/applicationStore.ts
import { defineStore } from "pinia";

export const useRecordStore = defineStore({
  id: "record-store",
  state: () => ({
    errors: [],
    successMessage: "",
  }),
  actions: {
    async fetchRecord(page=1, searchQuery = '',id=null) {
      try {
        const response = await $api("/course-detail", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            page: page,
            searchQuery: searchQuery,
            id:id
          }
        });
        return response;
      } catch (error) {
        console.error("Error getting application list:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
    async submitApplication(recordData) {
      try {
        const response = await $api("/course-detail", {
          method: "POST",
          body: recordData,
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.successMessage = "Data submitted successfully";
        return response.data;
      } catch (error) {
        console.error("Error submitting application:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
    async submitEditApplication(id, recordData) {
      try {
        const response = await $api(`/course-detail/${id}`, {
          method: "PUT",
          body: recordData,
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.successMessage = "Data submitted successfully";
        return response.data;
      } catch (error) {
        console.error("Error submitting application:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
    async deleteRecord(id) {
      try {
        await $api(`/course-detail/${id}`, {
          method: "DELETE",
        });

        //this.intakes = this.intakes.filter(intake => intake.id !== id);
      } catch (error) {
        console.error("Error deleting course details:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
      }
    },
    async requestForm(requestData) {
      try {
        const response = await $api("/request-record", {
          method: "POST",
          body: requestData,
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.successMessage = "Request submitted successfully";
        return response.data;
      } catch (error) {
        console.error("Error submitting request form:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
  },
});
