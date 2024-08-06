// src/stores/applicationStore.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore( {
    id: "user",
    state: () => ({
        users:[],
        errors: [],
      }),
  actions: {
    async fetchUsers(page=1, searchQuery = '',role='') {
        try {
          const response = await $api("/users", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            params: {
              page: page,
              searchQuery: searchQuery,
              role:role
            }
          });

          return response;
        } catch (error) {
          console.error("Error getting users list:", error);
          this.errors = error.response
            ? error.response.data.errors
            : ["An unexpected error occurred"];
          throw error;
        }
      },


  },
});
