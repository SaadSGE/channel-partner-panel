import { defineStore } from 'pinia'
import { handleErrorResponse } from '../utils/helpers'

export const useNigeriaStudentStore = defineStore('NigeriaStudent', {
  state: () => ({
    students: [],
    isLoading: false,
    error: null,
  }),

  getters: {
    getStudents: state => state.students,
  },

  actions: {
    async fetchStudents(page = 1, searchQuery = '', perPage = 10) {
      this.isLoading = true
      try {
        const response = await $api('/nigeria-students', {
          method: 'GET',
          params: {
            page,
            searchQuery,
            perPage,
          },
        })
        this.students = response.data
        this.error = null
        return response
      } catch (error) {
        handleErrorResponse(error)
      } finally {
        this.isLoading = false
      }
    },

    async registerStudent(studentData) {
      this.isLoading = true
      try {
        const response = await $api('/nigeria-students', {
          method: 'POST',
          body: JSON.stringify(studentData),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        this.students.push(response.data.student)
        this.error = null
        return response.data
      } catch (error) {
        handleErrorResponse(error)
      } finally {
        this.isLoading = false
      }
    },

    async updateStudent(id, studentData) {
      this.isLoading = true
      try {
        const response = await $api(`/nigeria-students/${id}`, {
          method: 'PUT',
          body: JSON.stringify(studentData),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const index = this.students.findIndex(student => student.id === id)
        if (index !== -1) {
          this.students[index] = response.data.student
        }
        this.error = null
        return response.data
      } catch (error) {
        handleErrorResponse(error)
      } finally {
        this.isLoading = false
      }
    },

    async deleteStudent(id) {
      this.isLoading = true
      try {
        await $api(`/nigeria-students/${id}`, {
          method: 'DELETE',
        })
        this.students = this.students.filter(student => student.id !== id)
        this.error = null
      } catch (error) {
        handleErrorResponse(error)
      } finally {
        this.isLoading = false
      }
    },

    clearError() {
      this.error = null
    },
  },
})
