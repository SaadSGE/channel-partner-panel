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
    async fetchUsers(page=1, searchQuery = '',role='',parentId='') {
        try {
          const response = await $api("/users", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            params: {
              page: page,
              searchQuery: searchQuery,
              role:role,
              parentId:parentId
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
      },
      async setParent(userId, parentId) {
        try {
          await $api(`/users/${userId}/set-parent`, {
            method: 'POST',
            body: JSON.stringify({ parent_id: parentId }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          await this.fetchUsers();  // Re-fetch users after setting parent
          return { success: true, message: 'Parent set successfully!' };
        } catch (error) {
          console.error('Error setting parent:', error);
          this.errors = error.response
            ? error.response.data.errors
            : ["An unexpected error occurred"];
          return { success: false, message: 'Failed to set parent.' };
        }
      },
      async deleteUser(id) {
        try {
          await $api(`/users/${id}`, {
            method: 'DELETE',
            headers: {
              "Content-Type": "application/json",
            },
          });
          await this.fetchUsers();  // Re-fetch users after deletion
          return { success: true, message: 'User deleted successfully!' };
        } catch (error) {
          console.error('Error deleting user:', error);
          this.errors = error.response
            ? error.response.data.errors
            : ["An unexpected error occurred"];
          return { success: false, message: 'Failed to delete user.' };
        }
      },

      async fetchParentUsers() {
        try {
          const response = await $api('/api/all-user', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          this.parentUsers = response.data; // Store the parent users in the state
        } catch (error) {
          console.error('Error fetching parent users:', error);
          this.errors = error.response
            ? error.response.data.errors
            : ['An unexpected error occurred'];
          throw error;
        }
      },



  },
});
