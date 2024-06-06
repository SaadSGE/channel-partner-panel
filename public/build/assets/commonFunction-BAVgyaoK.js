import{an as h}from"./main-1mV8A3Ok.js";import{$ as t}from"./api-BuB0jJ0_.js";const g=h({id:"common-function",state:()=>({countries:[],courses:[],intakes:[],errors:[],universities:[],courseDetails:[],selectedCountryId:null,selectedCourseId:null,selectedIntakeId:null,selectedUniversityId:null,selectedCourseDetailsId:null}),getters:{getFilteredCourseDetails:e=>(r,s,n,i)=>{var a,d,u,l,p;console.log(r),console.log(s),console.log(n),console.log(i),e.selectedCountryId=r,e.selectedCourseId=s,e.selectedIntakeId=n,e.selectedUniversityId=i;const o=e.courseDetails.find(c=>parseInt(c.country_id,10)===r&&parseInt(c.course_id,10)===s&&parseInt(c.intake_id,10)===n&&parseInt(c.university_id,10)===i);return console.log(e.courseDetails),console.log(o),o?(e.selectedCourseDetailsId=o.id,{courseName:((a=o.course)==null?void 0:a.name)||"",intake:((d=o.intake)==null?void 0:d.name)||"",tuitionFee:o.tuition_fee||"",courseDuration:o.course_duration||"",courseLabel:((u=o.course)==null?void 0:u.type)||"",location:((l=o.country)==null?void 0:l.name)||"",universityLogo:((p=o.university)==null?void 0:p.logo)||"",academicRequirement:o.academic_requirement||"",englishRequirement:o.english_requirement||""}):{courseName:"",intake:"",tuitionFee:"",courseDuration:"",courseLabel:"",location:"",universityLogo:"",academicRequirement:"",englishRequirement:""}}},actions:{async getCountries(){try{const e=await t("/application-country",{method:"GET"});this.countries=e.data}catch(e){console.error("Error fetching countries:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getCourses(){try{const e=await t("/course",{method:"GET"});this.courses=e.data}catch(e){console.error("Error fetching courses:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getIntakes(){try{const e=await t("/intake",{method:"GET"});this.intakes=e.data}catch(e){console.error("Error fetching intakes:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getUniversities(){try{const e=await t("/university",{method:"GET"});this.universities=e.data}catch(e){console.error("Error fetching universities:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getCourseDetails(){try{const e=await t("/course-detail-all",{method:"GET"});this.courseDetails=e.data}catch(e){console.error("Error fetching course details:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async addUniversity(e){try{const r=await t("/university",{method:"POST",body:e});this.universities.push(r.data)}catch(r){console.error("Error adding university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async deleteUniversity(e){try{await t(`/university/${e}`,{method:"DELETE"}),this.universities=this.universities.filter(r=>r.id!==e)}catch(r){console.error("Error deleting university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async updateUniversity(e,r){try{const s=await t(`/university/${e}`,{method:"PUT",body:r}),n=this.universities.findIndex(i=>i.id===e);n!==-1&&this.universities.splice(n,1,s.data)}catch(s){console.error("Error updating university:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async addIntake(e){try{const r=await t("/intake",{method:"POST",body:e});this.intakes.push(r.data)}catch(r){console.error("Error adding university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async updateIntake(e,r){try{const s=await t(`/intake/${e}`,{method:"PUT",body:r}),n=this.intakes.findIndex(i=>i.id===e);n!==-1&&this.intakes.splice(n,1,s.data)}catch(s){console.error("Error updating university:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async deleteIntake(e){try{await t(`/intake/${e}`,{method:"DELETE"}),this.intakes=this.intakes.filter(r=>r.id!==e)}catch(r){console.error("Error deleting intake:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}}}});export{g as c};