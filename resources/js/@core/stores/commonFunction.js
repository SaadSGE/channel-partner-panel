import { defineStore } from 'pinia';

export const commonFunction = defineStore({
    id: "common-function",
    state: () => ({
        countries: [],
        courses: [],
        intakes:[],
        errors: [],
        universities:[],
        courseDetails:[],
        selectedCountryId:null,
        selectedCourseId:null,
        selectedIntakeId:null,
        selectedUniversityId:null,
        selectedCourseDetailsId:null
    }),

    getters: {
        getFilteredCourseDetails: (state) => (countryId, courseId, intakeId, universityId) => {
            state.selectedCountryId = countryId
            state.selectedCourseId = courseId
            state.selectedIntakeId = intakeId
            state.selectedUniversityId = universityId
          const filtered = state.courseDetails.find(
            (detail) =>
              detail.country_id === countryId &&
              detail.course_id === courseId &&
              detail.intake_id === intakeId &&
              detail.university_id === universityId
          );

          if (filtered) {
            state.selectedCourseDetailsId = filtered.id
            return {
              courseName: filtered.course?.name || '',
              intake: filtered.intake?.name || '',
              tuitionFee: filtered.tuition_fee || '',
              courseDuration: filtered.course_duration || '',
              courseLabel: filtered.course?.type || '',
              location: filtered.country?.name || '',
              universityLogo: filtered.university?.logo || '',
              academicRequirement: filtered.academic_requirement || '',
              englishRequirement: filtered.english_requirement || '',
            };
          } else {
            return {
              courseName: '',
              intake: '',
              tuitionFee: '',
              courseDuration: '',
              courseLabel: '',
              location: '',
              universityLogo: '',
              academicRequirement: '',
              englishRequirement: '',
            };
          }
        }
      },

    actions: {
        async getCountries() {
            try {
                const response = await $api('/application-country', { method: 'GET' });

                this.countries = response.data;
            } catch (error) {
                console.error('Error fetching countries:', error);
                this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
        },
        async getCourses() {
            try {
                const response = await $api('/course', { method: 'GET' });

                this.courses = response.data;
            } catch (error) {
                console.error('Error fetching courses:', error);
                this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
        },
        async getIntakes() {
            try {
                const response = await $api('/intake', { method: 'GET' });

                this.intakes = response.data;
            } catch (error) {
                console.error('Error fetching intakes:', error);
                this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
        },
        async getUniversities() {
            try {
                const response = await $api('/university', { method: 'GET' });

                this.universities = response.data;
            } catch (error) {
                console.error('Error fetching universites:', error);
                this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
        },
        async getCourseDetails() {
            try {
                const response = await $api('/course-detail', { method: 'GET' });

                this.courseDetails = response.data;

            } catch (error) {
                console.error('Error fetching course details:', error);
                this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
        }
    }

  });
