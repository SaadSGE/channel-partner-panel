import { defineStore } from 'pinia';

export const useStudentStore = defineStore({
  id: "student",
  state: () => ({
    students: [],
    errors: []
  }),
  actions: {
    async search(query = null) {
      try {
        const response = await $api('/api/students/search', {
          method: 'GET',
          params: { query }
        });

        this.students = response.data;

        return this.students;
      } catch (error) {
        console.error('Error searching students:', error);
        this.errors = error.response?.data.errors || ['An unexpected error occurred'];
        throw error;
      }
    },
  },
});
