// src/stores/applicationStore.js
import { defineStore } from 'pinia';

export const useApplicationListStore = defineStore({
  id: "application-list",
  state: () => ({
    errors: [],
    successMessage: '',
    applicationData: '',
    documents: [], // Ensure documents is an array
    students: [],
  }),
  actions: {
    async getApplicationList() {
      try {
        const response = await $api('/application', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error getting application list:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },
    async getApplicationDetails(id) {
      try {
        const response = await $api(`/application/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.applicationData = response.data;
        // Assuming response.data.student.document is an array of objects with a `path` property
        this.documents = response.data.student.document.map(doc => doc.path);
        this.students = response.data.student;
        return response.data;
      } catch (error) {
        console.error('Error getting application details:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },


    async deleteItem(id) {
      try {
        await $api(`/application/${id}`, {
          method: 'DELETE',
        });
        // Refresh the application list after deletion
        await this.getApplicationList();
      } catch (error) {
        console.error('Error deleting application:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
      }
    },

  },
});
