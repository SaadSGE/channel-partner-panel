import { defineStore } from 'pinia';

export const commonFunction = defineStore({
    id: "common-function",
    state: () => ({
      countries: [],
      allCountries: [],
      branches: [],
      courses: [],
      intakes: [],
      errors: [],
      universities: [],
      courseDetails: [],
      courseTypes: [],
      students: [],
      countryIntakeUniversityCourse:[],
      selectedCountryId: null,
      selectedCourseId: null,
      selectedIntakeId: null,
      selectedUniversityId: null,
      selectedCourseDetailsId: null,
      selectedCourseType: null,

    }),

    getters: {
      getPreparedCourseDetails: (state) => {
        if (state.courseDetails.length === 0 || !state.selectedCourseDetailsId) {
          return null;
        }

        const courseDetail = state.courseDetails.find(detail => detail.id === state.selectedCourseDetailsId);


        if (!courseDetail) {
          return null;
        }

        return {
          courseName: courseDetail.course_name,
          intake: state.intakes.find(i => i.intake_id === state.selectedIntakeId)?.intake_name || '',
          tuitionFee: courseDetail.tution_fee,
          courseDuration: courseDetail.course_duration,
          courseLabel: state.selectedCourseType,
          location: state.countries.find(c => c.id === state.selectedCountryId)?.name || '',
          universityLogo: state.universities.find(u => u.university_id === state.selectedUniversityId)?.university_logo || '',
          academicRequirement: courseDetail.academic_requirement || '',
          englishRequirement: courseDetail.english_requirement || '',
        };
      },

      getFilteredCourseDetails: (state) => (countryId, courseId, intakeId, universityId, studentId) => {
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

      async getUniqueCountries() {
        try {
          const response = await $api('/getUniqueCountry', { method: 'GET' });
          this.countries = response.data;
        } catch (error) {
          console.error('Error fetching countries:', error);
          this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        }
      },
      async getIntakesByCountry(countryId) {
        try {
          const response = await $api(`/intakes/country/${countryId}`, { method: 'GET' });
          this.intakes = response.data;
          return response.data;
        } catch (error) {
          console.error('Error fetching intakes:', error);
          this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        }
      },
      async getCourseTypesByCountryIntake(countryId, intakeId) {
        try {
          const response = await $api(`/course-types/${countryId}/${intakeId}`, { method: 'GET' });
          this.courseTypes = response.data;
          return response.data;
        } catch (error) {
          console.error('Error fetching course types:', error);
          this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        }
      },
      async getUniversitiesByCountryIntakeCourseType(countryId, intakeId, courseType) {
        try {
          const response = await $api(`/universities/${countryId}/${intakeId}/${courseType}`, { method: 'GET' });
          this.universities = response.data;
          return response.data;
        } catch (error) {
          console.error('Error fetching universities:', error);
          this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        }
      },
      async getCourseDetails(intakeId, universityId, courseType) {
        try {
            const response = await $api(`/course-details/${intakeId}/${universityId}/${courseType}`, {
                method: 'GET'
            });
            this.courseDetails = response.data;
            this.selectedIntakeId = intakeId;
            this.selectedUniversityId = universityId;
            return response.data;
        } catch (error) {
            console.error('Error fetching course details:', error);
            this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        }
    },
    setSelectedCountryId(countryId) {
      this.selectedCountryId = countryId;
    },
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
          return response.data;

      } catch (error) {
          console.error('Error fetching countries:', error);
          this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
      }
      },
        async getCountries() {


            try {
                const response = await $api('/application-country', { method: 'GET' });

                this.countries = response.data;
                return response.data;
            } catch (error) {
                console.error('Error fetching countries:', error);
                this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
        },
        async getCourses() {
            try {
                const response = await $api('/course', { method: 'GET' });

                this.courses = response.data;
                return response.data;
            } catch (error) {
                console.error('Error fetching courses:', error);
                this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
        },
        async getIntakes() {
            try {
                const response = await $api('/intake', { method: 'GET' });

                this.intakes = response.data;
                return response.data;
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

        async getCourseDetailsAll() {
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
              console.error('Error updating intake:', error);
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
          async getBranches() {
            try {
                const response = await $api('/branches', { method: 'GET' });
                this.branches = response.data;

            } catch (error) {
                console.error('Error fetching branches:', error);
                this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
        },

        async addBranch(branch) {
            try {
                const response = await $api('/branches', {
                    method: 'POST',
                    body: branch,
                  });
                this.branches.push(response.data);
            } catch (error) {
                console.error('Error adding branch:', error);
                this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
        },

        async updateBranch(id, updatedData) {
            try {
              const response = await $api(`/branches/${id}`, {
                method: 'PUT',
                body: updatedData,
              });
              // Update the local branches array with the updated branch data
              const index = this.branches.findIndex(branch => branch.id === id);
              if (index !== -1) {
                this.branches.splice(index, 1, response.data);
              }
            } catch (error) {
              console.error('Error updating branch:', error);
              this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
          },

        async deleteBranch(id) {
            try {
              await $api(`/branches/${id}`, {
                method: 'DELETE',
              });

              this.branches = this.branches.filter(branch => branch.id !== id);
            } catch (error) {
              console.error('Error deleting branch:', error);
              this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
          },

        async getAllCountries() {
          try {
              const response = await $api('/countries', { method: 'GET' });
              this.allCountries = response.data;

          } catch (error) {
              console.error('Error fetching countries:', error);
              this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
          }
      },

      async addAllCountry(country) {
                    try {
              const response = await $api('/countries', {
                  method: 'POST',
                  body: country,
                });

                this.allCountries.unshift(response.data);
          } catch (error) {
              console.error('Error adding country:', error);
              this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
          }
      },

      async updateAllCountry(id, updatedData) {
          try {
            const response = await $api(`/countries/${id}`, {
              method: 'PUT',
              body: updatedData,
            });
            const index = this.allCountries.findIndex(country => country.id === id);
            if (index !== -1) {
              this.allCountries.splice(index, 1, response.data);
            }
          } catch (error) {
            console.error('Error updating country:', error);
            this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
          }
        },

      async deleteAllCountry(id) {
          try {
            await $api(`/countries/${id}`, {
              method: 'DELETE',
            });

            this.allCountries = this.allCountries.filter(country => country.id !== id);
          } catch (error) {
            console.error('Error deleting country:', error);
            this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
          }
        },

        async getAllStudents() {
          try {
              const response = await $api('/students', { method: 'GET' });
              this.students = response.data;

          } catch (error) {
              console.error('Error fetching students:', error);
              this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
          }
      },

      async getStudentById(id) {
        try {
            const response = await $api(`/students/${id}`, { method: 'GET' });
            this.students = response.data;
            return response.data;
            } catch (error) {
            console.error('Error fetching student:', error);
            this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        }
    },
      async deleteAllStudent(id) {
        try {
          await $api(`/students/${id}`, {
            method: 'DELETE',
          });

          this.students = this.students.filter(student => student.id !== id);

        } catch (error) {
          console.error('Error deleting student:', error);
          this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
        }
      },

    }
});
