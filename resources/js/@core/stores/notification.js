import { $api } from '@/utils/api'
import { defineStore } from 'pinia'



export const useNotificationStore = defineStore({
  id: 'notification',
  state: () => ({
    notifications: [],
    errors: [],
    initialized: false,
  }),
  actions: {
    async fetchNotifications() {
        console.log('Fetching notifications, current initialized:', this.initialized)
      if (this.initialized) return

      try {
        const response = await $api('/notifications')
        this.notifications = response.data
        this.initialized = true
      } catch (error) {
        console.error('Error fetching notifications:', error)
        this.errors = error.response ? error.response.data.data : ['An unexpected error occurred']
        throw error
      }
    },

    //fetch notification count by application_id from notifications state
    async fetchNotificationCountByApplicationId(applicationId) {
      //also check if notification is read
      return this.notifications.filter(n => n.application_id === applicationId && !n.read).length
    },

    async markAsRead(notificationId) {
      try {
        await $api(`/notifications/${notificationId}/mark-as-read`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const notification = this.notifications.find(n => n.id === notificationId)
        if (notification) {
          notification.read = true
        }
      } catch (error) {
        console.error('Error marking notification as read:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },

    async fetchAllNotifications(page, perPage) {
      try {
        const response = await $api(`/notifications/all?page=${page}&perPage=${perPage}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        return response
      } catch (error) {
        console.error('Error fetching all notifications:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },
  },
})
