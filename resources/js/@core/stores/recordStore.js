// src/stores/applicationStore.ts
import { defineStore } from 'pinia';

export const useRecordStore = defineStore( {
    id: "record-store",
  state: () => ({
    errors: [],
    successMessage: '',


  }),
  actions: {
    async fetchRecord(){
      try {
              const response = await $api('/course-detail', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              return response;
            } catch (error) {
              console.error('Error getting application list:', error);
              this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
              throw error;
            }
    },
    async submitApplication(recordData) {
      try {
        const response = await $api('/course-detail', {
          method: 'POST',
          body: recordData,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.successMessage = 'Data submitted successfully';
        return response.data;
      } catch (error) {
        console.error('Error submitting application:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },
  },
});
