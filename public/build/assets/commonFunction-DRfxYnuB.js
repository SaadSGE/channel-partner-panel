import{an as c}from"./main-CI7cqQmu.js";import{$ as n}from"./api-DfxwZSPq.js";const p=c({id:"common-function",state:()=>({countries:[],courses:[],intakes:[],errors:[],universities:[],courseDetails:[],countryIntakeUniversityCourse:[],selectedCountryId:null,selectedCourseId:null,selectedIntakeId:null,selectedUniversityId:null,selectedCourseDetailsId:null}),getters:{getFilteredCourseDetails:e=>(r,s,i,t)=>{e.selectedCountryId=r,e.selectedCourseId=s,e.selectedIntakeId=i,e.selectedUniversityId=t;const o=e.countryIntakeUniversityCourse.find(a=>parseInt(a.country_id,10)===r&&parseInt(a.course_id,10)===s&&parseInt(a.intake_id,10)===i&&parseInt(a.university_id,10)===t);return o?(console.log("test"),console.log(o),e.selectedCourseDetailsId=o.id,{courseName:o.course_name,intake:o.intake_name,tuitionFee:o.tution_fee,courseDuration:o.course_duration,courseLabel:o.course_type,location:o.country_name,universityLogo:o.university_logo||"",academicRequirement:o.academic_requirement||"",englishRequirement:o.english_requirement||""}):{courseName:"",intake:"",tuitionFee:"",courseDuration:"",courseLabel:"",location:"",universityLogo:"",academicRequirement:"",englishRequirement:""}}},actions:{async getCountryIntakeUniversityCourse(){try{const e=await n("/get-country-intake-university-course",{method:"GET"});this.countryIntakeUniversityCourse=e.data;const r=new Map;e.data.forEach(s=>{r.has(s.country_id)||r.set(s.country_id,{id:s.country_id,name:s.country_name})}),this.countries=Array.from(r.values())}catch(e){console.error("Error fetching countries:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getCountries(){try{const e=await n("/application-country",{method:"GET"});this.countries=e.data}catch(e){console.error("Error fetching countries:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getCourses(){try{const e=await n("/course",{method:"GET"});this.courses=e.data}catch(e){console.error("Error fetching courses:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getIntakes(){try{const e=await n("/intake",{method:"GET"});this.intakes=e.data}catch(e){console.error("Error fetching intakes:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getUniversities(e=null,r="",s=10,i="created_at"){try{const t=await n("/university",{method:"GET",headers:{"Content-Type":"application/json"},params:{page:e,searchQuery:r,perPage:s,sortBy:i}});return this.universities=t.data,t}catch(t){throw console.error("Error fetching universities:",t),this.errors=t.response?t.response.data.errors:["An unexpected error occurred"],t}},async getCourseDetails(){try{const e=await n("/course-detail-all",{method:"GET"});this.courseDetails=e.data}catch(e){console.error("Error fetching course details:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async addUniversity(e){try{const r=await n("/university",{method:"POST",body:e});this.universities.push(r.data)}catch(r){console.error("Error adding university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async deleteUniversity(e){try{await n(`/university/${e}`,{method:"DELETE"}),this.universities=this.universities.filter(r=>r.id!==e)}catch(r){console.error("Error deleting university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async updateUniversity(e,r){try{const s=await n(`/university/${e}`,{method:"PUT",body:r}),i=this.universities.findIndex(t=>t.id===e);i!==-1&&this.universities.splice(i,1,s.data)}catch(s){console.error("Error updating university:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async addIntake(e){try{const r=await n("/intake",{method:"POST",body:e});this.intakes.push(r.data)}catch(r){console.error("Error adding university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async updateIntake(e,r){try{const s=await n(`/intake/${e}`,{method:"PUT",body:r}),i=this.intakes.findIndex(t=>t.id===e);i!==-1&&this.intakes.splice(i,1,s.data)}catch(s){console.error("Error updating university:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async deleteIntake(e){try{await n(`/intake/${e}`,{method:"DELETE"}),this.intakes=this.intakes.filter(r=>r.id!==e)}catch(r){console.error("Error deleting intake:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}}}});export{p as c};