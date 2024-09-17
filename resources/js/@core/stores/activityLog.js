import { defineStore } from 'pinia';

export const useActivityLogStore = defineStore({
  id: 'activityLog',
  actions: {
    async fetchUserActivityLogs(userId, page = 1, perPage = 10, sortBy = { key: 'created_at', order: 'desc' }) {
      try {
        const response = await $api(`/users/${userId}/activity-logs`, {
          method: 'GET',
          params: {
            page,
            per_page: perPage,
            sort_by: sortBy.key,
            sort_order: sortBy.order,
          },
        });
        return response;
      } catch (error) {
        console.error('Error fetching user activity logs:', error);
        throw error;
      }
    },
  },
});
