import{an as l}from"./main-0xwlEiGX.js";import{$ as o}from"./api-D9SKbSpL.js";const v=l({id:"common-function",state:()=>({countries:[],courses:[],intakes:[],errors:[],universities:[],courseDetails:[],countryIntakeUniversityCourse:[],selectedCountryId:null,selectedCourseId:null,selectedIntakeId:null,selectedUniversityId:null,selectedCourseDetailsId:null}),getters:{getFilteredCourseDetails:e=>(r,s,n,i)=>{var a,u,d,p,h;e.selectedCountryId=r,e.selectedCourseId=s,e.selectedIntakeId=n,e.selectedUniversityId=i;const t=e.courseDetails.find(c=>parseInt(c.country_id,10)===r&&parseInt(c.course_id,10)===s&&parseInt(c.intake_id,10)===n&&parseInt(c.university_id,10)===i);return console.log(e.courseDetails),console.log(t),t?(e.selectedCourseDetailsId=t.id,{courseName:((a=t.course)==null?void 0:a.name)||"",intake:((u=t.intake)==null?void 0:u.name)||"",tuitionFee:t.tuition_fee||"",courseDuration:t.course_duration||"",courseLabel:((d=t.course)==null?void 0:d.type)||"",location:((p=t.country)==null?void 0:p.name)||"",universityLogo:((h=t.university)==null?void 0:h.logo)||"",academicRequirement:t.academic_requirement||"",englishRequirement:t.english_requirement||""}):{courseName:"",intake:"",tuitionFee:"",courseDuration:"",courseLabel:"",location:"",universityLogo:"",academicRequirement:"",englishRequirement:""}}},actions:{async getCountryIntakeUniversityCourse(){try{const e=await o("/get-country-intake-university-course",{method:"GET"});this.countryIntakeUniversityCourse=e.data;const r=new Map;e.data.forEach(s=>{r.has(s.country_id)||r.set(s.country_id,{id:s.country_id,name:s.country_name})}),this.countries=Array.from(r.values())}catch(e){console.error("Error fetching countries:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getCountries(){try{const e=await o("/application-country",{method:"GET"});this.countries=e.data}catch(e){console.error("Error fetching countries:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getCourses(){try{const e=await o("/course",{method:"GET"});this.courses=e.data}catch(e){console.error("Error fetching courses:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getIntakes(){try{const e=await o("/intake",{method:"GET"});this.intakes=e.data}catch(e){console.error("Error fetching intakes:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getUniversities(){try{const e=await o("/university",{method:"GET"});this.universities=e.data}catch(e){console.error("Error fetching universities:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getCourseDetails(){try{const e=await o("/course-detail-all",{method:"GET"});this.courseDetails=e.data}catch(e){console.error("Error fetching course details:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async addUniversity(e){try{const r=await o("/university",{method:"POST",body:e});this.universities.push(r.data)}catch(r){console.error("Error adding university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async deleteUniversity(e){try{await o(`/university/${e}`,{method:"DELETE"}),this.universities=this.universities.filter(r=>r.id!==e)}catch(r){console.error("Error deleting university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async updateUniversity(e,r){try{const s=await o(`/university/${e}`,{method:"PUT",body:r}),n=this.universities.findIndex(i=>i.id===e);n!==-1&&this.universities.splice(n,1,s.data)}catch(s){console.error("Error updating university:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async addIntake(e){try{const r=await o("/intake",{method:"POST",body:e});this.intakes.push(r.data)}catch(r){console.error("Error adding university:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async updateIntake(e,r){try{const s=await o(`/intake/${e}`,{method:"PUT",body:r}),n=this.intakes.findIndex(i=>i.id===e);n!==-1&&this.intakes.splice(n,1,s.data)}catch(s){console.error("Error updating university:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async deleteIntake(e){try{await o(`/intake/${e}`,{method:"DELETE"}),this.intakes=this.intakes.filter(r=>r.id!==e)}catch(r){console.error("Error deleting intake:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}}}});export{v as c};
