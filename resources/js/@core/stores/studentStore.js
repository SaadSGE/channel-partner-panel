import { $api } from "@/utils/api";
import { defineStore } from "pinia";

const formatDate = (dateStr) => {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  return date.toISOString().split("T")[0]; // Returns YYYY-MM-DD format
};

export const useStudentStore = defineStore({
  id: "student-store",
  state: () => ({
    errors: [],
    successMessage: "",
    students: [],
    studentInfo: {
      generalInfo: {},
      educationalHistory: [],
      employmentHistory: [],
      englishProficiency: [],
      interestedUniversity: [],
      documentPaths: [],
      lead: {},
    },
  }),
  actions: {
    async storeStudent(formData) {
      try {
        const generalInfoRequest = {
          general_info: {
            student_first_name: formData.generalInfo.first_name,
            student_last_name: formData.generalInfo.last_name,
            student_email: formData.generalInfo.email,
            student_whatsapp_number: formData.generalInfo.mobile,
            date_of_birth: formatDate(formData.generalInfo.date_of_birth),
            gender: formData.generalInfo.gender,
            student_passport_no: formData.generalInfo.passport_number,
            student_address: formData.generalInfo.address,
            student_city: formData.generalInfo.city,
            student_country: formData.generalInfo.country,
            student_region_state: formData.generalInfo.state,
            visa_refusal: formData.generalInfo.visa_refusal,
          },
        };

        const interestedUniversityRequest = {
          interested_university: formData.universityEntry?.length
            ? formData.universityEntry
              .map((entry) => ({
                country_id: entry.country_id || null,
                intake_id: entry.intake_id || null,
                university_id: entry.university_id || null,
                course_id: entry.course_id || null,
              }))
              .filter(
                (entry) =>
                  entry.country_id ||
                  entry.intake_id ||
                  entry.university_id ||
                  entry.course_id
              )
            : [],
        };

        const educationalHistoryRequest = {
          educational_history: formData.educationalHistory?.length
            ? formData.educationalHistory
              .map((edu) => ({
                degree_name: edu.degree || null,
                institution_name: edu.institution || null,
                passing_year: edu.passing_year || null,
                result: edu.result || null,
              }))
              .filter(
                (edu) =>
                  edu.degree_name ||
                  edu.institution_name ||
                  edu.passing_year ||
                  edu.result
              )
            : [],
        };

        const englishProficiencyRequest = {
          english_proficiency: formData.englishProficiency?.length
            ? formData.englishProficiency
              .map((prof) => ({
                proficiency_title: prof.title || null,
                overall_score: prof.overall_score || null,
                reading: prof.reading || null,
                writing: prof.writing || null,
                speaking: prof.speaking || null,
                listening: prof.listening || null,
              }))
              .filter(
                (prof) =>
                  prof.proficiency_title ||
                  prof.overall_score ||
                  prof.reading ||
                  prof.writing ||
                  prof.speaking ||
                  prof.listening
              )
            : [],
        };

        const employmentHistoryRequest = {
          employment_history: formData.employmentHistory?.length
            ? formData.employmentHistory
              .map((emp) => ({
                company_name: emp.company_name || null,
                designation: emp.designation || null,
                year: emp.year || null,
              }))
              .filter(
                (emp) => emp.company_name || emp.designation || emp.year
              )
            : [],
        };

        const documentRequest = {
          document_paths: formData.documentPaths.map((path) => ({
            path: path.path,
            document_name: path.document_name,
            missing: path.missing || false,
          })),
        };

        const response = await $api("/students", {
          method: "POST",
          body: JSON.stringify({
            ...generalInfoRequest,
            ...interestedUniversityRequest,
            ...educationalHistoryRequest,
            ...englishProficiencyRequest,
            ...employmentHistoryRequest,
            ...documentRequest,
          }),
        });

        this.successMessage = "Student created successfully";
        return response.data;
      } catch (error) {
        console.error("Error storing student:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },

    async getStudentList(
      page = 1,
      itemsPerPage = 10,
      searchQuery = "",
      sortBy = "",
      orderBy = "",
      filters = {}
    ) {
      try {
        const response = await $api("/students", {
          method: "GET",
          params: {
            page,
            perPage: itemsPerPage,
            searchQuery,
            sortBy,
            orderBy,
            ...filters,
          },
        });

        this.students = response.data;
        return response;
      } catch (error) {
        console.error("Error fetching students:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },

    async getStudentDetails(id) {
      try {
        const response = await $api(`/students/${id}`, {
          method: "GET",
        });

        // Update store state with student details
        const studentData = response.data;

        this.studentInfo = {
          generalInfo: studentData.generalInfo || {},
          educationalHistory: studentData.educationalHistory || [],
          employmentHistory: studentData.employmentHistory || [],
          englishProficiency: studentData.englishProficiency || [],
          interestedUniversity: studentData.interestedUniversity || [],
          documentPaths: studentData.documentPaths || [],
          lead: studentData.lead || {},
        };

        return response.data;
      } catch (error) {
        console.error("Error fetching student details:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },

    async updateStudent(id, formData) {
      try {
        const generalInfoRequest = {
          general_info: {
            student_first_name: formData.generalInfo.first_name,
            student_last_name: formData.generalInfo.last_name,
            student_email: formData.generalInfo.email,
            student_whatsapp_number: formData.generalInfo.mobile,
            date_of_birth: formatDate(formData.generalInfo.date_of_birth),
            gender: formData.generalInfo.gender,
            student_passport_no: formData.generalInfo.passport_number,
            student_address: formData.generalInfo.address,
            student_city: formData.generalInfo.city,
            student_country: formData.generalInfo.country,
            visa_refusal: formData.generalInfo.visa_refusal,
          },
        };

        const interestedUniversityRequest = {
          interested_university: formData.universityEntry.map((entry) => ({
            country_id: entry.country_id,
            intake_id: entry.intake_id,
            course_type: entry.course_type,
            university_id: entry.university_id,
            course_id: entry.course_id,
          })),
        };

        const educationalHistoryRequest = {
          educational_history: formData.educationalHistory.map((edu) => ({
            degree_name: edu.degree,
            institution_name: edu.institution,
            passing_year: edu.passingYear,
            result: edu.result,
          })),
        };

        const englishProficiencyRequest = {
          english_proficiency: formData.englishProficiency.map((prof) => ({
            proficiency_title: prof.proficiencyTitle,
            overall_score: prof.overallScore,
            reading: prof.reading,
            writing: prof.writing,
            speaking: prof.speaking,
            listening: prof.listening,
          })),
        };

        const employmentHistoryRequest = {
          employment_history: formData.employmentHistory.map((emp) => ({
            company_name: emp.company_name,
            designation: emp.designation,
            year: emp.year,
          })),
        };

        const documentRequest = {
          document_paths: formData.documentPaths || [],
        };

        const response = await $api(`/students/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            ...generalInfoRequest,
            ...interestedUniversityRequest,
            ...educationalHistoryRequest,
            ...englishProficiencyRequest,
            ...employmentHistoryRequest,
            ...documentRequest,
          }),
        });

        this.successMessage = "Student updated successfully";
        return response.data;
      } catch (error) {
        console.error("Error updating student:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },

    async deleteStudent(id) {
      try {
        await $api(`/student/${id}`, {
          method: "DELETE",
        });

        this.successMessage = "Student deleted successfully";
      } catch (error) {
        console.error("Error deleting student:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },

    async updateGeneralInfo(studentId, generalInfo) {
      try {
        const response = await $api(`/students/${studentId}/general-info`, {
          method: "PUT",
          body: JSON.stringify({
            general_info: {
              student_first_name: generalInfo.first_name,
              student_last_name: generalInfo.last_name,
              student_email: generalInfo.email,
              student_whatsapp_number: generalInfo.mobile,
              date_of_birth: formatDate(generalInfo.date_of_birth),
              gender: generalInfo.gender,
              student_passport_no: generalInfo.passport_number,
              student_address: generalInfo.address,
              student_city: generalInfo.city,
              student_country: generalInfo.country,
              student_region_state: generalInfo.state,
              visa_refusal: generalInfo.visa_refusal,
            },
          }),
        });

        this.studentInfo.generalInfo = response.data;
        this.successMessage = "General info updated successfully";
        return response.data;
      } catch (error) {
        this.handleError(error);
        throw error;
      }
    },

    async updateInterestedUniversity(studentId, universityEntry) {
      try {
        console.log("Updating university preferences with data:", {
          studentId,
          universityEntry,
        });

        const requestBody = {
          interested_university: universityEntry?.length
            ? universityEntry
              .map((entry) => ({
                id: entry.id || null,
                country_id: entry.country_id || null,
                intake_id: entry.intake_id || null,
                university_id: entry.university_id || null,
                course_id: entry.course_id || null,
              }))
              .filter(
                (entry) =>
                  entry.country_id ||
                  entry.intake_id ||
                  entry.university_id ||
                  entry.course_id
              )
            : [],
        };

        console.log("Request body:", requestBody);

        const response = await $api(
          `/students/${studentId}/interested-university`,
          {
            method: "PUT",
            body: JSON.stringify(requestBody),
          }
        );

        console.log("API Response:", response);

        this.studentInfo.interestedUniversity = response.data;
        this.successMessage = "University preferences updated successfully";
        return response.data;
      } catch (error) {
        console.error("Error in updateInterestedUniversity:", error);
        this.handleError(error);
        throw error;
      }
    },

    async updateEducationalHistory(studentId, educationalHistory) {
      try {
        const response = await $api(
          `/students/${studentId}/educational-history`,
          {
            method: "PUT",
            body: JSON.stringify({
              educational_history: educationalHistory?.length
                ? educationalHistory
                  .map((edu) => ({
                    id: edu.id || null,
                    degree_name: edu.degree || null,
                    institution_name: edu.institution || null,
                    passing_year: edu.passing_year || null,
                    result: edu.result || null,
                  }))
                  .filter(
                    (edu) =>
                      edu.degree_name ||
                      edu.institution_name ||
                      edu.passing_year ||
                      edu.result
                  )
                : [],
            }),
          }
        );

        this.studentInfo.educationalHistory = response.data;
        this.successMessage = "Educational history updated successfully";
        return response.data;
      } catch (error) {
        this.handleError(error);
        throw error;
      }
    },

    async updateEnglishProficiency(studentId, englishProficiency) {
      try {
        const response = await $api(
          `/students/${studentId}/english-proficiency`,
          {
            method: "PUT",
            body: JSON.stringify({
              english_proficiency: englishProficiency?.length
                ? englishProficiency
                  .map((prof) => ({
                    id: prof.id || null,
                    proficiency_title: prof.proficiencyTitle || null,
                    overall_score: prof.overallScore || null,
                    reading: prof.reading || null,
                    writing: prof.writing || null,
                    speaking: prof.speaking || null,
                    listening: prof.listening || null,
                  }))
                  .filter(
                    (prof) =>
                      prof.proficiency_title ||
                      prof.overall_score ||
                      prof.reading ||
                      prof.writing ||
                      prof.speaking ||
                      prof.listening
                  )
                : [],
            }),
          }
        );

        this.successMessage = "English proficiency updated successfully";
        return this.studentInfo.englishProficiency;
      } catch (error) {
        this.handleError(error);
        throw error;
      }
    },

    async updateEmploymentHistory(studentId, employmentHistory) {
      try {
        const response = await $api(
          `/students/${studentId}/employment-history`,
          {
            method: "PUT",
            body: JSON.stringify({
              employment_history: employmentHistory?.length
                ? employmentHistory
                  .map((emp) => ({
                    id: emp.id || null,
                    company_name: emp.company_name || null,
                    designation: emp.designation || null,
                    year: emp.year || null,
                  }))
                  .filter(
                    (emp) => emp.company_name || emp.designation || emp.year
                  )
                : [],
            }),
          }
        );

        this.studentInfo.employmentHistory = response.data;
        this.successMessage = "Employment history updated successfully";
        return response.data;
      } catch (error) {
        this.handleError(error);
        throw error;
      }
    },

    handleError(error) {
      console.error("API Error:", error);
      this.errors = error.response?.data?.errors || [
        "An unexpected error occurred",
      ];
    },

    clearErrors() {
      this.errors = [];
    },

    clearSuccessMessage() {
      this.successMessage = "";
    },

    async updateDocuments(studentId, documentPaths) {
      try {
        // Format the document paths into the expected structure
        const formattedDocumentPaths = documentPaths.map((doc) => ({
          document_name: doc.document_name,
          path: doc.path,
          missing: doc.missing || false,
        }));

        const response = await $api(`/students/${studentId}/documents`, {
          method: "PUT",
          body: JSON.stringify({
            document_paths: formattedDocumentPaths,
          }),
        });

        this.studentInfo.documentPaths = response.data;
        this.successMessage = "Documents updated successfully";
        return response.data;
      } catch (error) {
        this.handleError(error);
        throw error;
      }
    },
  },
});
