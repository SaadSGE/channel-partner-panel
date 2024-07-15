// src/stores/applicationStore.ts
import { defineStore } from 'pinia';

export const useApplicationStore = defineStore( {
    id: "application-store",
  state: () => ({
    errors: [],
    successMessage: '',
  }),
  actions: {
    async updateApplicationsFile(applicationId,filePaths){
      try {
        const response = await $api('/update-application-file', {
          method: 'POST',
          body: JSON.stringify({
            application_id:applicationId,
            document_paths: filePaths,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.successMessage = 'Application submitted successfully';
        return response.data;
      } catch (error) {
        console.error('Error submitting application:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },
    async submitApplication(studentData, courseId, intakeId, universityId, countryId, courseDetailsId, filePaths) {
      try {
        const response = await $api('/application', {
          method: 'POST',
          body: JSON.stringify({
            ...studentData,
            course_id: courseId,
            intake_id: intakeId,
            university_id: universityId,
            country_id: countryId,
            course_details_id: courseDetailsId,
            document_paths: filePaths,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.successMessage = 'Application submitted successfully';
        return response.data;
      } catch (error) {
        console.error('Error submitting application:', error);
        this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        throw error;
      }
    },
  },
});
