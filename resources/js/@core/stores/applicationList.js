// src/stores/applicationStore.js
import {
  defineStore,
} from 'pinia'
import { handleErrorResponse } from '../utils/helpers'

export const useApplicationListStore = defineStore({
  id: "application-list",
  state: () => ({
    errors: [],
    successMessage: '',
    applicationData: '',
    documents: [], // Ensure documents is an array
    students: [],
    statuses: [],
    allStatuses: [],
    comments: [],
    universityCommunications: [],
    applicationOfficers: [],
    applicationOfficerOptions: [],
    acoAoCommunications: [],
    complianceOfficers: [],
    complianceOfficerOptions: [],
    acoCoCommunications: [],
  }),
  actions: {
    async getApplicationList(
      id = null,
      page = 1,
      itemsPerPage = 10,
      searchQuery = '',
      sortBy = '',
      orderBy = '',
      status = null,
      university = null,
      channelPartner = null,
      applicationOfficer = null,
      studentEmail = '',
      dateFrom = null,
      dateTo = null,
    ) {
      try {
        return await $api('/application', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            id,
            page,
            perPage: itemsPerPage,
            searchQuery,
            sortBy,
            orderBy,
            status,
            university,
            channelPartner,
            applicationOfficer,
            studentEmail,
            dateFrom,
            dateTo,
          },
        })
      } catch (error) {
        console.error('Error getting application list:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },


    async getApplicationDetails(id) {
      try {
        const response = await $api(`/application/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        this.applicationData = response.data

        // Assuming response.data.student.document is an array of objects with a `path` property
        this.documents = response.data.student.document.map(doc => doc.path)
        this.students = response.data.student
        this.comments = response.data.comments
        this.universityCommunications = response.data.university_communications

        return response.data
      } catch (error) {
        console.error('Error getting application details:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },


    async deleteItem(id) {
      try {
        await $api(`/application/${id}`, {
          method: 'DELETE',
        })

        // Refresh the application list after deletion
        await this.getApplicationList()
      } catch (error) {
        console.error('Error deleting application:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
      }
    },

    async getApplicationStatusses(id) {
      try {
        const response = await $api(`/application-statuses/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        this.statuses = response.data
      } catch (error) {
        console.error('Error getting application list:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },
    async getApplicationAllStatuses() {
      try {
        const response = await $api('/application-all-statuses', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        this.allStatuses = response.data
      } catch (error) {
        console.error('Error getting application list:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },
    async updateStatus(id, formData) {

      try {
        const response = await $api(`/application/${id}/status`, {
          method: 'POST',
          body: formData,

        })


        return response.data
      } catch (error) {
        console.error('Error updating status:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },
    async addComment(id, comment) {
      try {
        const response = await $api(`/application/${id}/comment`, {
          method: 'POST',
          body: JSON.stringify({
            comment,
          }),
        })


        return response.data
      } catch (error) {
        console.error('Error adding comment:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },
    async getUniversityCommunications(id) {
      try {
        const response = await $api(`/application/${id}/university-communications`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        this.universityCommunications = response.data
      } catch (error) {
        console.error('Error getting university communications:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },
    async addUniversityCommunication(id, {
      subject,
      message,
    }) {
      try {
        const response = await $api(`/application/${id}/university-communication`, {
          method: 'POST',
          body: JSON.stringify({
            subject,
            message,
          }),
        })


        return response.data
      } catch (error) {
        console.error('Error adding university communication:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },
    async assignApplicationOfficer(applicationId, userId) {
      try {
        const response = await $api(`/applications/${applicationId}/assign-officer`, {
          method: 'POST',
          body: JSON.stringify({ user_id: userId }),
        })

        await this.fetchApplicationOfficers(applicationId)

        return response.data
      } catch (error) {

        handleErrorResponse(error)

      }
    },

    async fetchApplicationOfficers(applicationId) {
      try {
        const response = await $api(`/applications/${applicationId}/officers`, {
          method: 'GET',
        })

        this.applicationOfficers = response.data

        return response.data
      } catch (error) {
        throw error.response?.data?.message || 'An error occurred while fetching application officers.'
      }
    },

    async loadAllApplicationOfficers() {
      try {
        const response = await $api('/fetch-application-officers', {
          method: 'GET',
        })

        this.applicationOfficerOptions = response.data

        return response.data
      } catch (error) {
        console.error('Error loading application officers:', error)
        throw error.response?.data?.message || 'An error occurred while loading application officers.'
      }
    },

    async fetchApplicationRequests() {
      try {


        const response = await $api('/application-requests', {
          method: 'GET',
        })

        return response.data
      } catch (error) {
        console.error('Error fetching application requests:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async acceptApplicationRequest(id) {
      try {
        const response = await $api(`/application-requests/${id}/accept`, {
          method: 'POST',
        })


        return response.data
      } catch (error) {
        console.error('Error accepting application request:', error)
        throw error
      }
    },

    async rejectApplicationRequest(id) {
      try {
        const response = await $api(`/application-requests/${id}/reject`, {
          method: 'POST',
        })


        return response.data
      } catch (error) {
        console.error('Error rejecting application request:', error)
        throw error
      }
    },

    async getApplicationRequests(page, perPage, searchQuery, sortBy, sortOrder) {
      try {
        return await $api('/application-requests', {
          method: 'GET',
          params: {
            page,
            perPage: perPage,
            searchQuery,
            sortBy,
            sortOrder,
          },
        })
      } catch (error) {
        console.error('Error fetching application requests:', error)
        throw error
      }
    },

    async getAcoAoCommunications(id) {
      try {
        const response = await $api(`/application/${id}/aco-ao-communications`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        console.log(response.data);
        this.acoAoCommunications = response.data
      } catch (error) {
        console.error('Error getting ACO & AO communications:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },

    async addAcoAoCommunication(id, message) {
      try {
        const response = await $api(`/application/${id}/aco-ao-communication`, {
          method: 'POST',
          body: JSON.stringify({
            message,
          }),
        })

        return response.data
      } catch (error) {
        console.error('Error adding ACO & AO communication:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },

    async assignComplianceOfficer(applicationId, userId) {
      try {
        const response = await $api(`/applications/${applicationId}/assign-compliance-officer`, {
          method: 'POST',
          body: JSON.stringify({ user_id: userId }),
        })

        await this.fetchComplianceOfficers(applicationId)

        return response.data
      } catch (error) {
        handleErrorResponse(error)
      }
    },

    async fetchComplianceOfficers(applicationId) {
      try {
        const response = await $api(`/applications/${applicationId}/compliance-officers`, {
          method: 'GET',
        })

        this.complianceOfficers = response.data

        return response.data
      } catch (error) {
        throw error.response?.data?.message || 'An error occurred while fetching compliance officers.'
      }
    },

    async loadAllComplianceOfficers() {
      try {
        const response = await $api('/fetch-compliance-officers', {
          method: 'GET',
        })

        this.complianceOfficerOptions = response.data

        return response.data
      } catch (error) {
        console.error('Error loading compliance officers:', error)
        throw error.response?.data?.message || 'An error occurred while loading compliance officers.'
      }
    },

    async getAcoCoCommunications(id) {
      try {
        const response = await $api(`/application/${id}/aco-co-communications`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        console.log(response.data);
        this.acoCoCommunications = response.data
      } catch (error) {
        console.error('Error getting ACO & CO communications:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },

    async addAcoCoCommunication(id, message) {
      try {
        const response = await $api(`/application/${id}/aco-co-communication`, {
          method: 'POST',
          body: JSON.stringify({
            message,
          }),
        })

        return response.data
      } catch (error) {
        console.error('Error adding ACO & CO communication:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },

    // Add these new methods
    async getComplianceRequests(page, perPage, searchQuery, sortBy, sortOrder) {
      try {
        return await $api('/compliance-requests', {
          method: 'GET',
          params: {
            page,
            perPage: perPage,
            searchQuery,
            sortBy,
            sortOrder,
          },
        })
      } catch (error) {
        console.error('Error fetching compliance requests:', error)
        throw error
      }
    },

    async acceptComplianceRequest(id) {
      try {
        const response = await $api(`/compliance-requests/${id}/accept`, {
          method: 'POST',
        })
        return response.data
      } catch (error) {
        console.error('Error accepting compliance request:', error)
        throw error
      }
    },

    async rejectComplianceRequest(id) {
      try {
        const response = await $api(`/compliance-requests/${id}/reject`, {
          method: 'POST',
        })
        return response.data
      } catch (error) {
        console.error('Error rejecting compliance request:', error)
        throw error
      }
    },

    async getStudentList(
      id = null,
      page = 1,
      itemsPerPage = 10,
      searchQuery = '',
      dateFrom = null,
      dateTo = null,
    ) {
      try {
        return await $api('/students', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            id,
            page,
            perPage: itemsPerPage,
            searchQuery,
            dateFrom,
            dateTo,
          },
        })
      } catch (error) {
        console.error('Error getting student list:', error)
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred']
        throw error
      }
    },
  },
})
