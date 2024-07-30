// src/stores/applicationStore.js
import { defineStore } from 'pinia';

export const useRolePermissionStore = defineStore({
  id: "role-permission",
  state: () => ({
    roles:[],
    permissions:[]
  }),
  actions: {

    async getAllRoles() {
      try {
        const response = await $api('/roles', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.roles =  response.data;
      } catch (error) {
        console.error('Error getting application list:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },

    async getAllPermission() {
      try {
        const response = await $api('/permissions', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.permissions =  response.data;
      } catch (error) {
        console.error('Error getting application list:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },

    async setRolePermission(rolePermissions) {
      try {
        const response = await $api(`/roles/${rolePermissions.name}/permissions`, {
          method: 'POST',
          body: JSON.stringify(rolePermissions),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error setting role permissions:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },

    async updateRolePermission(rolePermissions) {
      try {
        const response = await $api(`/roles/${rolePermissions.name}/permissions`, {
          method: 'POST',
          body: JSON.stringify(rolePermissions),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error setting role permissions:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },




  },
});
