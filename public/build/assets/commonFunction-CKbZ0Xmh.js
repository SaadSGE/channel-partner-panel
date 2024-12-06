import{aU as d,aV as o}from"./main-D5McJ9Zv.js";const h=d({id:"common-function",state:()=>({countries:[],allCountries:[],branches:[],courses:[],intakes:[],errors:[],universities:[],courseDetails:[],courseTypes:[],students:[],countryIntakeUniversityCourse:[],selectedCountryId:null,selectedCourseId:null,selectedIntakeId:null,selectedUniversityId:null,selectedCourseDetailsId:null,selectedCourseType:null}),getters:{getPreparedCourseDetails:e=>{var s,t,n;if(e.courseDetails.length===0||!e.selectedCourseDetailsId)return null;const r=e.courseDetails.find(i=>i.id===e.selectedCourseDetailsId);return r?{courseName:r.course_name,intake:((s=e.intakes.find(i=>i.intake_id===e.selectedIntakeId))==null?void 0:s.intake_name)||"",tuitionFee:r.tution_fee,courseDuration:r.course_duration,courseLabel:e.selectedCourseType,location:((t=e.countries.find(i=>i.id===e.selectedCountryId))==null?void 0:t.name)||"",universityLogo:((n=e.universities.find(i=>i.university_id===e.selectedUniversityId))==null?void 0:n.university_logo)||"",academicRequirement:r.academic_requirement||"",englishRequirement:r.english_requirement||""}:null},getFilteredCourseDetails:e=>(r,s,t,n,i)=>{e.selectedCountryId=r,e.selectedCourseId=s,e.selectedIntakeId=t,e.selectedUniversityId=n;const a=e.countryIntakeUniversityCourse.find(c=>parseInt(c.country_id,10)===r&&parseInt(c.course_id,10)===s&&parseInt(c.intake_id,10)===t&&parseInt(c.university_id,10)===n);return a?(e.selectedCourseDetailsId=a.id,{courseName:a.course_name,intake:a.intake_name,tuitionFee:a.tution_fee,courseDuration:a.course_duration,courseLabel:a.course_type,location:a.country_name,universityLogo:a.university_logo||"",academicRequirement:a.academic_requirement||"",englishRequirement:a.english_requirement||""}):{courseName:"",intake:"",tuitionFee:"",courseDuration:"",courseLabel:"",location:"",universityLogo:"",academicRequirement:"",englishRequirement:""}}},actions:{async getUniqueCountries(){try{const e=await o("/getUniqueCountry",{method:"GET"});this.countries=e.data}catch(e){console.error("Error fetching countries:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getIntakesByCountry(e){try{const r=await o(`/intakes/country/${e}`,{method:"GET"});return this.intakes=r.data,r.data}catch(r){console.error("Error fetching intakes:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async getCourseTypesByCountryIntake(e,r){try{const s=await o(`/course-types/${e}/${r}`,{method:"GET"});return this.courseTypes=s.data,s.data}catch(s){console.error("Error fetching course types:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async getUniversitiesByCountryIntakeCourseType(e,r,s){try{const t=await o(`/universities/${e}/${r}/${s}`,{method:"GET"});return this.universities=t.data,t.data}catch(t){console.error("Error fetching universities:",t),this.errors=t.response?t.response.data.errors:["An unexpected error occurred"]}},async getCourseDetails(e,r,s){try{const t=await o(`/course-details/${e}/${r}/${s}`,{method:"GET"});return this.courseDetails=t.data,this.selectedIntakeId=e,this.selectedUniversityId=r,t.data}catch(t){console.error("Error fetching course details:",t),this.errors=t.response?t.response.data.errors:["An unexpected error occurred"]}},setSelectedCountryId(e){this.selectedCountryId=e},async getCountryIntakeUniversityCourse(){try{const e=await o("/get-country-intake-university-course",{method:"GET"});this.countryIntakeUniversityCourse=e.data;const r=new Map;return e.data.forEach(s=>{r.has(s.country_id)||r.set(s.country_id,{id:s.country_id,name:s.country_name})}),this.countries=Array.from(r.values()),e.data}catch(e){console.error("Error fetching countries:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getCountries(){try{const e=await o("/application-country",{method:"GET"});return this.countries=e.data,e.data}catch(e){console.error("Error fetching countries:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getCourses(){try{const e=await o("/course",{method:"GET"});return this.courses=e.data,e.data}catch(e){console.error("Error fetching courses:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getIntakes(){try{const e=await o("/intake",{method:"GET"});return this.intakes=e.data,e.data}catch(e){console.error("Error fetching intakes:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getUniversities(e=null,r="",s=10,t="created_at"){try{const n=await o("/university",{method:"GET",headers:{"Content-Type":"application/json"},params:{page:e,searchQuery:r,perPage:s,sortBy:t}});return this.universities=n.data,n}catch(n){throw console.error("Error fetching universities:",n),this.errors=n.response?n.response.data.errors:["An unexpected error occurred"],n}},async getCourseDetailsAll(){try{const e=await o("/course-detail-all",{method:"GET"});this.courseDetails=e.data}catch(e){console.error("Error fetching course details:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async addUniversity(e){try{const r=await o("/university",{method:"POST",body:e});this.universities.push(r.data)}catch(r){console.error("Error adding university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async deleteUniversity(e){try{await o(`/university/${e}`,{method:"DELETE"}),this.universities=this.universities.filter(r=>r.id!==e)}catch(r){console.error("Error deleting university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async updateUniversity(e,r){try{const s=await o(`/university/${e}`,{method:"PUT",body:r}),t=this.universities.findIndex(n=>n.id===e);t!==-1&&this.universities.splice(t,1,s.data)}catch(s){console.error("Error updating university:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async addIntake(e){try{const r=await o("/intake",{method:"POST",body:e});this.intakes.push(r.data)}catch(r){console.error("Error adding university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async updateIntake(e,r){try{const s=await o(`/intake/${e}`,{method:"PUT",body:r}),t=this.intakes.findIndex(n=>n.id===e);t!==-1&&this.intakes.splice(t,1,s.data)}catch(s){console.error("Error updating intake:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async deleteIntake(e){try{await o(`/intake/${e}`,{method:"DELETE"}),this.intakes=this.intakes.filter(r=>r.id!==e)}catch(r){console.error("Error deleting intake:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async getBranches(){try{const e=await o("/branches",{method:"GET"});this.branches=e.data}catch(e){console.error("Error fetching branches:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async addBranch(e){try{const r=await o("/branches",{method:"POST",body:e});this.branches.push(r.data)}catch(r){console.error("Error adding branch:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async updateBranch(e,r){try{const s=await o(`/branches/${e}`,{method:"PUT",body:r}),t=this.branches.findIndex(n=>n.id===e);t!==-1&&this.branches.splice(t,1,s.data)}catch(s){console.error("Error updating branch:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async deleteBranch(e){try{await o(`/branches/${e}`,{method:"DELETE"}),this.branches=this.branches.filter(r=>r.id!==e)}catch(r){console.error("Error deleting branch:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async getAllCountries(){try{const e=await o("/countries",{method:"GET"});this.allCountries=e.data}catch(e){console.error("Error fetching countries:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async addAllCountry(e){try{const r=await o("/countries",{method:"POST",body:e});this.allCountries.unshift(r.data)}catch(r){console.error("Error adding country:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async updateAllCountry(e,r){try{const s=await o(`/countries/${e}`,{method:"PUT",body:r}),t=this.allCountries.findIndex(n=>n.id===e);t!==-1&&this.allCountries.splice(t,1,s.data)}catch(s){console.error("Error updating country:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async deleteAllCountry(e){try{await o(`/countries/${e}`,{method:"DELETE"}),this.allCountries=this.allCountries.filter(r=>r.id!==e)}catch(r){console.error("Error deleting country:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async getAllStudents(){try{const e=await o("/students",{method:"GET"});this.students=e.data}catch(e){console.error("Error fetching students:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getStudentById(e){try{const r=await o(`/students/${e}`,{method:"GET"});return this.students=r.data,r.data}catch(r){console.error("Error fetching student:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async deleteAllStudent(e){try{await o(`/students/${e}`,{method:"DELETE"}),this.students=this.students.filter(r=>r.id!==e)}catch(r){console.error("Error deleting student:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}}}});export{h as c};
