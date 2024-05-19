// src/stores/applicationStore.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore( {
    id: "auth",
    state: () => ({
        errors: [],
      }),
  actions: {
    async register(form) {
        try {
          const response = await $api('/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
          });
          return response.data;
        } catch (error) {
          console.error('Error registering:', error);
          this.errors = error.response?.data.errors || ['An unexpected error occurred'];
          throw error;
        }
      },
      async login(email, password) {
        try {
          const response = await $api('/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
          return response.data;
        } catch (error) {
          console.error('Error registering:', error);
          // this.errors = error.response?.data.errors || ['An unexpected error occurred'];
          throw error;
        }
      },



  },
});
