// src/stores/applicationStore.ts
import { defineStore } from 'pinia';

export const useApplicationListStore = defineStore( {
    id: "application-list",
  state: () => ({
    errors: [],
    successMessage: '',
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
    }
  },
});
