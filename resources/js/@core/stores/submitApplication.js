// src/stores/applicationStore.ts
import { defineStore } from 'pinia';

export const useApplicationStore = defineStore({
  id: "application-store",
  state: () => ({
    errors: [],
    successMessage: '',
  }),
  actions: {
    async updateApplicationsFile(applicationId, filePaths) {
      try {
        const response = await $api('/update-application-file', {
          method: 'POST',
          body: JSON.stringify({
            application_id: applicationId,
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
    async submitApplication(studentData = {}, courseId, intakeId, universityId, countryId, courseDetailsId, filePaths, studentId = null, channelPartnerEmail = null) {
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
            student_id: studentId,
            channel_partner_email: channelPartnerEmail,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Clear previous errors and set success message
        this.errors = {};
        this.successMessage = 'Application submitted successfully';
        return response.data;

      } catch (error) {
        handleErrorResponse(error)
      }
    },


    async updateApplication(updatedData, studentID) {
      try {
        const response = await $api(`/students/${studentID}`, {
          method: 'PATCH', // Use PATCH for partial updates
          body: JSON.stringify(updatedData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log("Updated application:", updatedData, studentID);
        this.errors = {};
        this.successMessage = 'Application updated successfully';
        return response.data;

      } catch (error) {
        console.error("Update error:", error);
        handleErrorResponse(error);
      }
    }
  },
});
