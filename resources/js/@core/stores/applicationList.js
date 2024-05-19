// src/stores/applicationStore.ts
import { defineStore } from 'pinia';

export const useApplicationListStore = defineStore( {
    id: "application-list",
  state: () => ({
    errors: [],
    successMessage: '',
    applicationData:'',
    documents:[],
    students:[],
  }),
  actions: {
    async getApplicationList ()
    {
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
        this.applicationData = response.data
        this.documents = response.data.student.document;
        this.students = response.data.student;
          return response.data;
      } catch (error) {
          console.error('Error getting application details:', error);
          this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
          throw error;
      }
  }


  },
});
