// src/stores/applicationStore.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore( {
    id: "user",
    state: () => ({
        users:[],
        errors: [],
        user:[]
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
      async fetchUser(id) {
        try {
          const response = await $api(`/users/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          return response.data
        } catch (error) {
          console.error("Error getting user details:", error);
          this.errors = error.response
            ? error.response.data.errors
            : ["An unexpected error occurred"];
          throw error;
        }
      }



  },
});
