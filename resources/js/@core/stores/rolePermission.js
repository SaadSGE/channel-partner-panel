// src/stores/applicationStore.js
import { defineStore } from 'pinia';
import { handleErrorResponse } from '../utils/helpers';
export const useRolePermissionStore = defineStore({
  id: "role-permission",
  state: () => ({
    roles: [],
    permissions: [],
    loading: false,
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

    async getAllPermissionForTable({ page, perPage, sortBy, orderBy, searchQuery }) {
      this.loading = true;
      try {
        const response = await $api('/permissions-table', {
          method: 'GET',
          params: {
            page,
            perPage,
            sortBy,
            orderBy,
            searchQuery,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.permissions = response.data;
        this.loading = false;
        return response;
      } catch (error) {
        console.error('Error getting permissions:', error);
        this.loading = false;
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

    async createPermission(permissionData) {
      try {
        const response = await $api('/permissions', {
          method: 'POST',
          body: JSON.stringify(permissionData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response.data;
      } catch (error) {
        handleErrorResponse(error);
      }
    },

    async updatePermission(permissionData) {
      try {
        const response = await $api(`/permissions/${permissionData.id}`, {
          method: 'PUT',
          body: JSON.stringify(permissionData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response.data;
      } catch (error) {
        handleErrorResponse(error);
      }
    },

    async deletePermission(id) {
      try {
        await $api(`/permissions/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        handleErrorResponse(error);
      }
    },
  },
});
