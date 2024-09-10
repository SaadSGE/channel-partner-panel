// src/stores/applicationStore.js
import {
  defineStore
} from 'pinia';

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
      dateTo = null
    ) {
      try {
        const response = await $api('/application', {
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
            dateTo
          }
        });
        return response;
      } catch (error) {
        console.error('Error getting application list:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },


    async getApplicationDetails(id) {
      try {
        const response = await $api(`/application/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.applicationData = response.data;
        // Assuming response.data.student.document is an array of objects with a `path` property
        this.documents = response.data.student.document.map(doc => doc.path);
        this.students = response.data.student;
        this.comments = response.data.comments;
        this.universityCommunications = response.data.university_communications;
        return response.data;
      } catch (error) {
        console.error('Error getting application details:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },


    async deleteItem(id) {
      try {
        await $api(`/application/${id}`, {
          method: 'DELETE',
        });
        // Refresh the application list after deletion
        await this.getApplicationList();
      } catch (error) {
        console.error('Error deleting application:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
      }
    },

    async getApplicationStatusses(id) {
      try {
        const response = await $api(`/application-statuses/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.statuses = response.data;
      } catch (error) {
        console.error('Error getting application list:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },
    async getApplicationAllStatuses() {
      try {
        const response = await $api('/application-all-statuses', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.allStatuses = response.data;
      } catch (error) {
        console.error('Error getting application list:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },
    async updateStatus(id, formData) {

      try {
        const response = await $api(`/application/${id}/status`, {
          method: 'POST',
          body: formData,

        });
        return response.data;
      } catch (error) {
        console.error('Error updating status:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },
    async addComment(id, comment) {
      try {
        const response = await $api(`/application/${id}/comment`, {
          method: 'POST',
          body: JSON.stringify({
            comment
          }),
        });
        return response.data;
      } catch (error) {
        console.error('Error adding comment:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },
    async getUniversityCommunications(id) {
      try {
        const response = await $api(`/application/${id}/university-communications`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.universityCommunications = response.data;
      } catch (error) {
        console.error('Error getting university communications:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },
    async addUniversityCommunication(id, {
      subject,
      message
    }) {
      try {
        const response = await $api(`/application/${id}/university-communication`, {
          method: 'POST',
          body: JSON.stringify({
            subject,
            message
          }),
        });
        return response.data;
      } catch (error) {
        console.error('Error adding university communication:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },

  },
});
