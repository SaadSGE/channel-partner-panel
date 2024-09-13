import{ao as a}from"./main-kzKK1XE4.js";import{$ as i}from"./api-CV6Ytb4u.js";const l=a({id:"common-function",state:()=>({countries:[],courses:[],intakes:[],errors:[],universities:[],courseDetails:[],courseTypes:[],countryIntakeUniversityCourse:[],selectedCountryId:null,selectedCourseId:null,selectedIntakeId:null,selectedUniversityId:null,selectedCourseDetailsId:null,selectedCourseType:null}),getters:{getPreparedCourseDetails:e=>{var s,t,n;if(e.courseDetails.length===0||!e.selectedCourseDetailsId)return null;const r=e.courseDetails.find(o=>o.id===e.selectedCourseDetailsId);return e.selectedCourseId=r.course_id,r?(console.log(e.courseTypes),console.log(e),{courseName:r.course_name,intake:((s=e.intakes.find(o=>o.intake_id===e.selectedIntakeId))==null?void 0:s.intake_name)||"",tuitionFee:r.tution_fee,courseDuration:r.course_duration,courseLabel:e.selectedCourseType,location:((t=e.countries.find(o=>o.id===e.selectedCountryId))==null?void 0:t.name)||"",universityLogo:((n=e.universities.find(o=>o.university_id===e.selectedUniversityId))==null?void 0:n.university_logo)||"",academicRequirement:r.academic_requirement||"",englishRequirement:r.english_requirement||""}):null},getFilteredCourseDetails:e=>(r,s,t,n)=>{e.selectedCountryId=r,e.selectedCourseId=s,e.selectedIntakeId=t,e.selectedUniversityId=n;const o=e.countryIntakeUniversityCourse.find(c=>parseInt(c.country_id,10)===r&&parseInt(c.course_id,10)===s&&parseInt(c.intake_id,10)===t&&parseInt(c.university_id,10)===n);return o?(e.selectedCourseDetailsId=o.id,{courseName:o.course_name,intake:o.intake_name,tuitionFee:o.tution_fee,courseDuration:o.course_duration,courseLabel:o.course_type,location:o.country_name,universityLogo:o.university_logo||"",academicRequirement:o.academic_requirement||"",englishRequirement:o.english_requirement||""}):{courseName:"",intake:"",tuitionFee:"",courseDuration:"",courseLabel:"",location:"",universityLogo:"",academicRequirement:"",englishRequirement:""}}},actions:{async getUniqueCountries(){try{const e=await i("/getUniqueCountry",{method:"GET"});this.countries=e.data}catch(e){console.error("Error fetching countries:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getIntakesByCountry(e){try{const r=await i(`/intakes/country/${e}`,{method:"GET"});this.intakes=r.data}catch(r){console.error("Error fetching intakes:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async getCourseTypesByCountryIntake(e,r){try{const s=await i(`/course-types/${e}/${r}`,{method:"GET"});this.courseTypes=s.data}catch(s){console.error("Error fetching course types:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async getUniversitiesByCountryIntakeCourseType(e,r,s){try{const t=await i(`/universities/${e}/${r}/${s}`,{method:"GET"});this.universities=t.data}catch(t){console.error("Error fetching universities:",t),this.errors=t.response?t.response.data.errors:["An unexpected error occurred"]}},async getCourseDetails(e,r,s){try{const t=await i(`/course-details/${e}/${r}/${s}`,{method:"GET"});this.courseDetails=t.data,this.selectedIntakeId=e,this.selectedUniversityId=r}catch(t){console.error("Error fetching course details:",t),this.errors=t.response?t.response.data.errors:["An unexpected error occurred"]}},setSelectedCountryId(e){this.selectedCountryId=e},async getCountryIntakeUniversityCourse(){try{const e=await i("/get-country-intake-university-course",{method:"GET"});this.countryIntakeUniversityCourse=e.data;const r=new Map;e.data.forEach(s=>{r.has(s.country_id)||r.set(s.country_id,{id:s.country_id,name:s.country_name})}),this.countries=Array.from(r.values())}catch(e){console.error("Error fetching countries:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getCountries(){try{const e=await i("/application-country",{method:"GET"});this.countries=e.data}catch(e){console.error("Error fetching countries:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getCourses(){try{const e=await i("/course",{method:"GET"});this.courses=e.data}catch(e){console.error("Error fetching courses:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getIntakes(){try{const e=await i("/intake",{method:"GET"});this.intakes=e.data}catch(e){console.error("Error fetching intakes:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getUniversities(e=null,r="",s=10,t="created_at"){try{const n=await i("/university",{method:"GET",headers:{"Content-Type":"application/json"},params:{page:e,searchQuery:r,perPage:s,sortBy:t}});return this.universities=n.data,n}catch(n){throw console.error("Error fetching universities:",n),this.errors=n.response?n.response.data.errors:["An unexpected error occurred"],n}},async getCourseDetailsAll(){try{const e=await i("/course-detail-all",{method:"GET"});this.courseDetails=e.data}catch(e){console.error("Error fetching course details:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async addUniversity(e){try{const r=await i("/university",{method:"POST",body:e});this.universities.push(r.data)}catch(r){console.error("Error adding university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async deleteUniversity(e){try{await i(`/university/${e}`,{method:"DELETE"}),this.universities=this.universities.filter(r=>r.id!==e)}catch(r){console.error("Error deleting university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async updateUniversity(e,r){try{const s=await i(`/university/${e}`,{method:"PUT",body:r}),t=this.universities.findIndex(n=>n.id===e);t!==-1&&this.universities.splice(t,1,s.data)}catch(s){console.error("Error updating university:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async addIntake(e){try{const r=await i("/intake",{method:"POST",body:e});this.intakes.push(r.data)}catch(r){console.error("Error adding university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async updateIntake(e,r){try{const s=await i(`/intake/${e}`,{method:"PUT",body:r}),t=this.intakes.findIndex(n=>n.id===e);t!==-1&&this.intakes.splice(t,1,s.data)}catch(s){console.error("Error updating university:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async deleteIntake(e){try{await i(`/intake/${e}`,{method:"DELETE"}),this.intakes=this.intakes.filter(r=>r.id!==e)}catch(r){console.error("Error deleting intake:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}}}});export{l as c};
