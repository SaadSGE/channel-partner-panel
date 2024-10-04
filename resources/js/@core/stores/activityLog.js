import { defineStore } from 'pinia'

export const useActivityLogStore = defineStore({
  id: 'activityLog',
  state: () => ({
    activityLogs: [],
    totalLogs: 0,
    currentPage: 1,
    perPage: 10,
    sortBy: 'created_at',
    sortOrder: 'desc',
    activityType: null,
    searchQuery: '', // Add this line
    dateFrom: null,
    dateTo: null,
  }),
  actions: {
    async fetchUserActivityLogs(userId) {
      try {
        const response = await $api(`/users/${userId}/activity-logs`, {
          method: 'GET',
          params: {
            page: this.currentPage,
            per_page: this.perPage,
            sort_by: this.sortBy,
            sort_order: this.sortOrder,
            activity_type: this.activityType,
            search: this.searchQuery, // Add this line
            date_from: this.dateFrom,
            date_to: this.dateTo,
          },
        })

        this.activityLogs = response.data.data
        this.totalLogs = response.data.total
        
        return response
      } catch (error) {
        console.error('Error fetching user activity logs:', error)
        throw error
      }
    },
    setPage(page) {
      this.currentPage = page
    },
    setPerPage(perPage) {
      this.perPage = perPage
    },
    setSorting(sortBy, sortOrder) {
      this.sortBy = sortBy
      this.sortOrder = sortOrder
    },
    setActivityType(activityType) {
      this.activityType = activityType
    },
    setSearchQuery(query) { // Add this action
      this.searchQuery = query
    },
    setDateFrom(date) {
      this.dateFrom = date
    },
    setDateTo(date) {
      this.dateTo = date
    },
    async fetchApplicationActivityLogs(applicationId) {
      try {
        const response = await $api(`/applications/${applicationId}/activity-logs`, {
          method: 'GET',
          params: {
            page: this.currentPage,
            per_page: this.perPage,
            sort_by: this.sortBy,
            sort_order: this.sortOrder,
            activity_type: this.activityType,
            search: this.searchQuery,
          },
        })

        this.activityLogs = response.data.data
        this.totalLogs = response.data.total
        
        return response
      } catch (error) {
        console.error('Error fetching application activity logs:', error)
        throw error
      }
    },
  },
})
