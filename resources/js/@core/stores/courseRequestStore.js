import { defineStore } from 'pinia'

export const useCourseRequestStore = defineStore({
  id: 'course-request',
  state: () => ({
    courseRequests: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchCourseRequests() {
      this.isLoading = true
      try {
        const response = await $api('/course-requests', {
          method: 'GET',
        })
        this.courseRequests = response.data
      } catch (error) {
        console.error('Error fetching course requests:', error)
        this.error = error.message
      } finally {
        this.isLoading = false
      }
    },
    async completeCourseRequest(id) {
      try {
        await $api(`/course-requests/${id}/complete`, {
          method: 'POST',
        })
        // Remove the completed request from the list
        this.courseRequests = this.courseRequests.filter(request => request.id !== id)
      } catch (error) {
        console.error('Error completing course request:', error)
        throw error
      }
    },
  },
})
