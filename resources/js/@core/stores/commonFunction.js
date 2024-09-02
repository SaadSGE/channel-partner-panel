import { defineStore } from 'pinia';

export const commonFunction = defineStore({
    id: "common-function",
    state: () => ({
        countries: [],
        courses: [],
        intakes: [],
        errors: [],
        universities: [],
        courseDetails: [],
        countryIntakeUniversityCourse:[],
        selectedCountryId: null,
        selectedCourseId: null,
        selectedIntakeId: null,
        selectedUniversityId: null,
        selectedCourseDetailsId: null
    }),

    getters: {
      getFilteredCourseDetails: (state) => (countryId, courseId, intakeId, universityId) => {
        state.selectedCountryId = countryId;
        state.selectedCourseId = courseId;
        state.selectedIntakeId = intakeId;
        state.selectedUniversityId = universityId;

        const filtered = state.countryIntakeUniversityCourse.find((detail) => {
            return (
                parseInt(detail.country_id, 10) === countryId &&
                parseInt(detail.course_id, 10) === courseId &&
                parseInt(detail.intake_id, 10) === intakeId &&
                parseInt(detail.university_id, 10) === universityId
            );
        });
       // console.log(filtered)
        if (filtered) {
          console.log('test')
          console.log(filtered)
            state.selectedCourseDetailsId = filtered.id;
            return {
                courseName: filtered.course_name,
                intake: filtered.intake_name,
                tuitionFee: filtered.tution_fee,
                courseDuration: filtered.course_duration,
                courseLabel: filtered.course_type ,
                location: filtered.country_name,
                universityLogo: filtered.university_logo || '',
                academicRequirement: filtered.academic_requirement || '',
                englishRequirement: filtered.english_requirement || '',
            };
        }
        else{
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
      async getCountryIntakeUniversityCourse(){
        try {
          const response = await $api('/get-country-intake-university-course', { method: 'GET' });

          this.countryIntakeUniversityCourse = response.data;

          // Extract unique countries
          const countryMap = new Map();

          response.data.forEach(item => {
              if (!countryMap.has(item.country_id)) {
                  countryMap.set(item.country_id, { id: item.country_id, name: item.country_name });
              }
          });

          // Convert Map values to array
          this.countries = Array.from(countryMap.values());


      } catch (error) {
          console.error('Error fetching countries:', error);
          this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
      }
      },
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
        async getUniversities(page = null, searchQuery = '', perPage = 10, sortBy = 'created_at') {
          try {
              const response = await $api('/university', {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  params: {
                      page,
                      searchQuery,
                      perPage,
                      sortBy,

                  },
              });

              this.universities = response.data;
              return response; // Return response to allow further processing if needed
          } catch (error) {
              console.error('Error fetching universities:', error);
              this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
              throw error; // Re-throw error to handle it outside if necessary
          }
      },

        async getCourseDetails() {
            try {
                const response = await $api('/course-detail-all', { method: 'GET' });

                this.courseDetails = response.data;

            } catch (error) {
                console.error('Error fetching course details:', error);
                this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
        },
        async addUniversity(university) {

            try {
                const response = await $api('/university', {
                    method: 'POST',
                    body: university,

                  });

                this.universities.push(response.data);
            } catch (error) {
                console.error('Error adding university:', error);
                this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
        },

        async deleteUniversity(id) {
            try {
              await $api(`/university/${id}`, {
                method: 'DELETE',
              });

              this.universities = this.universities.filter(university => university.id !== id);
            } catch (error) {
              console.error('Error deleting university:', error);
              this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
          },
          async updateUniversity(id, updatedData) {
            try {
              const response = await $api(`/university/${id}`, {
                method: 'PUT',
                body: updatedData,
              });

              // Update the local universities array with the updated university data
              const index = this.universities.findIndex(university => university.id === id);
              if (index !== -1) {
                this.universities.splice(index, 1, response.data);
              }
            } catch (error) {
              console.error('Error updating university:', error);
              this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
          },

          async addIntake(intake) {

            try {
                const response = await $api('/intake', {
                    method: 'POST',
                    body: intake,

                  });

                this.intakes.push(response.data);
            } catch (error) {
                console.error('Error adding university:', error);
                this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
        },
        async updateIntake(id, updatedData) {
            try {
              const response = await $api(`/intake/${id}`, {
                method: 'PUT',
                body: updatedData,
              });

              // Update the local universities array with the updated university data
              const index = this.intakes.findIndex(intake => intake.id === id);
              if (index !== -1) {
                this.intakes.splice(index, 1, response.data);
              }
            } catch (error) {
              console.error('Error updating university:', error);
              this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
          },
          async deleteIntake(id) {
            try {
              await $api(`/intake/${id}`, {
                method: 'DELETE',
              });

              this.intakes = this.intakes.filter(intake => intake.id !== id);
            } catch (error) {
              console.error('Error deleting intake:', error);
              this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
          },



    }
});
