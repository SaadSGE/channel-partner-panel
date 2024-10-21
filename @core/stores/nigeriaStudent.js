import axios from '@axios'
import { defineStore } from 'pinia'

export const useNigeriaStudentStore = defineStore('nigeriaStudent', {
  state: () => ({
    // Add any state properties if needed
  }),
  actions: {
    async registerStudent(studentData) {
      try {
        const response = await axios.post('/api/nigeria-students', studentData)
        return response.data
      } catch (error) {
        console.error('Error registering student:', error)
        throw error
      }
    },
  },
})
