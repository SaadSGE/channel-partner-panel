import { defineStore } from 'pinia'

export const useNotificationStore = defineStore({
  id: 'notification',
  state: () => ({
    notifications: [],
    errors: [],
  }),
  actions: {
    async fetchNotifications() {
      try {
        const response = await $api('/notifications', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        this.notifications = response.data // Update this line
      } catch (error) {
        console.error('Error fetching notifications:', error)
        this.errors = error.response ? error.response.data.data : ['An unexpected error occurred'] // Update this line
        throw error
      }
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
