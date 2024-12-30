import{bg as u,bh as o}from"./main-Fnquxq59.js";const h=u({id:"common-function",state:()=>({countries:[],allCountries:[],branches:[],courses:[],intakes:[],notices:[],activeNotices:[],tasks:[],leadStatus:[],applicationStatus:[],errors:[],universities:[],courseDetails:[],courseTypes:[],countryIntakeUniversityCourse:[],selectedCountryId:null,selectedCourseId:null,selectedIntakeId:null,selectedUniversityId:null,selectedCourseDetailsId:null,selectedCourseType:null}),getters:{getPreparedCourseDetails:r=>{var s,t,n;if(r.courseDetails.length===0||!r.selectedCourseDetailsId)return null;const e=r.courseDetails.find(a=>a.id===r.selectedCourseDetailsId);return e?{courseName:e.course_name,intake:((s=r.intakes.find(a=>a.intake_id===r.selectedIntakeId))==null?void 0:s.intake_name)||"",tuitionFee:e.tution_fee,courseDuration:e.course_duration,courseLabel:r.selectedCourseType,location:((t=r.countries.find(a=>a.id===r.selectedCountryId))==null?void 0:t.name)||"",universityLogo:((n=r.universities.find(a=>a.university_id===r.selectedUniversityId))==null?void 0:n.university_logo)||"",academicRequirement:e.academic_requirement||"",englishRequirement:e.english_requirement||""}:null},getFilteredCourseDetails:r=>(e,s,t,n)=>{r.selectedCountryId=e,r.selectedCourseId=s,r.selectedIntakeId=t,r.selectedUniversityId=n;const a=r.countryIntakeUniversityCourse.find(c=>parseInt(c.country_id,10)===e&&parseInt(c.course_id,10)===s&&parseInt(c.intake_id,10)===t&&parseInt(c.university_id,10)===n);return a?(r.selectedCourseDetailsId=a.id,{courseName:a.course_name,intake:a.intake_name,tuitionFee:a.tution_fee,courseDuration:a.course_duration,courseLabel:a.course_type,location:a.country_name,universityLogo:a.university_logo||"",academicRequirement:a.academic_requirement||"",englishRequirement:a.english_requirement||""}):{courseName:"",intake:"",tuitionFee:"",courseDuration:"",courseLabel:"",location:"",universityLogo:"",academicRequirement:"",englishRequirement:""}}},actions:{async getUniqueCountries(){try{const r=await o("/getUniqueCountry",{method:"GET"});return this.countries=r.data,r.data}catch(r){console.error("Error fetching countries:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async getIntakesByCountry(r){try{const e=await o(`/intakes/country/${r}`,{method:"GET"});return this.intakes=e.data,e.data}catch(e){console.error("Error fetching intakes:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getCourseTypesByCountryIntake(r,e){try{const s=await o(`/course-types/${r}/${e}`,{method:"GET"});return this.courseTypes=s.data,s.data}catch(s){console.error("Error fetching course types:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async getUniversitiesByCountryIntakeCourseType(r,e,s){try{const t=await o(`/universities/${r}/${e}/${s}`,{method:"GET"});return this.universities=t.data,t.data}catch(t){console.error("Error fetching universities:",t),this.errors=t.response?t.response.data.errors:["An unexpected error occurred"]}},async getCourseDetails(r,e,s){try{const t=await o(`/course-details/${r}/${e}/${s}`,{method:"GET"});return this.courseDetails=t.data,this.selectedIntakeId=r,this.selectedUniversityId=e,t.data}catch(t){console.error("Error fetching course details:",t),this.errors=t.response?t.response.data.errors:["An unexpected error occurred"]}},setSelectedCountryId(r){this.selectedCountryId=r},async getCountryIntakeUniversityCourse(){try{const r=await o("/get-country-intake-university-course",{method:"GET"});this.countryIntakeUniversityCourse=r.data;const e=new Map;r.data.forEach(s=>{e.has(s.country_id)||e.set(s.country_id,{id:s.country_id,name:s.country_name})}),this.countries=Array.from(e.values())}catch(r){console.error("Error fetching countries:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async getCountries(){try{const r=await o("/application-country",{method:"GET"});this.countries=r.data}catch(r){console.error("Error fetching countries:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async getCourses(){try{const r=await o("/course",{method:"GET"});this.courses=r.data}catch(r){console.error("Error fetching courses:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async getIntakes(){try{const r=await o("/intake",{method:"GET"});this.intakes=r.data}catch(r){console.error("Error fetching intakes:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async getUniversities(r=null,e="",s=10,t="created_at"){try{const n=await o("/university",{method:"GET",headers:{"Content-Type":"application/json"},params:{page:r,searchQuery:e,perPage:s,sortBy:t}});return this.universities=n.data,n}catch(n){throw console.error("Error fetching universities:",n),this.errors=n.response?n.response.data.errors:["An unexpected error occurred"],n}},async getCourseDetailsAll(){try{const r=await o("/course-detail-all",{method:"GET"});this.courseDetails=r.data}catch(r){console.error("Error fetching course details:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async addUniversity(r){try{const e=await o("/university",{method:"POST",body:r});this.universities.push(e.data)}catch(e){console.error("Error adding university:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async deleteUniversity(r){try{await o(`/university/${r}`,{method:"DELETE"}),this.universities=this.universities.filter(e=>e.id!==r)}catch(e){console.error("Error deleting university:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async updateUniversity(r,e){try{const s=await o(`/university/${r}`,{method:"PUT",body:e}),t=this.universities.findIndex(n=>n.id===r);t!==-1&&this.universities.splice(t,1,s.data)}catch(s){console.error("Error updating university:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async addIntake(r){try{const e=await o("/intake",{method:"POST",body:r});this.intakes.push(e.data)}catch(e){console.error("Error adding university:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async updateIntake(r,e){try{const s=await o(`/intake/${r}`,{method:"PUT",body:e}),t=this.intakes.findIndex(n=>n.id===r);t!==-1&&this.intakes.splice(t,1,s.data)}catch(s){console.error("Error updating intake:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async deleteIntake(r){try{await o(`/intake/${r}`,{method:"DELETE"}),this.intakes=this.intakes.filter(e=>e.id!==r)}catch(e){console.error("Error deleting intake:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getBranches(){try{const r=await o("/branches",{method:"GET"});this.branches=r.data}catch(r){console.error("Error fetching branches:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async addBranch(r){try{const e=await o("/branches",{method:"POST",body:r});this.branches.push(e.data)}catch(e){console.error("Error adding branch:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async updateBranch(r,e){try{const s=await o(`/branches/${r}`,{method:"PUT",body:e}),t=this.branches.findIndex(n=>n.id===r);t!==-1&&this.branches.splice(t,1,s.data)}catch(s){console.error("Error updating branch:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async deleteBranch(r){try{await o(`/branches/${r}`,{method:"DELETE"}),this.branches=this.branches.filter(e=>e.id!==r)}catch(e){console.error("Error deleting branch:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getAllCountries(){try{const r=await o("/countries",{method:"GET"});this.allCountries=r.data}catch(r){console.error("Error fetching countries:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async addAllCountry(r){try{const e=await o("/countries",{method:"POST",body:r});this.allCountries.unshift(e.data)}catch(e){console.error("Error adding country:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async updateAllCountry(r,e){try{const s=await o(`/countries/${r}`,{method:"PUT",body:e}),t=this.allCountries.findIndex(n=>n.id===r);t!==-1&&this.allCountries.splice(t,1,s.data)}catch(s){console.error("Error updating country:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async deleteAllCountry(r){try{await o(`/countries/${r}`,{method:"DELETE"}),this.allCountries=this.allCountries.filter(e=>e.id!==r)}catch(e){console.error("Error deleting country:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getNotices(){try{const r=await o("/notices",{method:"GET"});this.notices=r.data}catch(r){console.error("Error fetching notices:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async getActiveNotices(){try{const r=await o("/active-notices",{method:"GET"});this.activeNotices=r.data}catch(r){console.error("Error fetching active notices:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async addNotice(r){try{const e=await o("/notices",{method:"POST",body:r});this.notices.push(e.data)}catch(e){console.error("Error adding notice:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async updateNoticeStatus(r,e){try{const s=await o(`/notices/${r}`,{method:"PUT",body:{status:e}}),t=this.notices.findIndex(n=>n.id===r);return t!==-1&&(this.notices[t].status=e),s}catch(s){throw console.error("Error updating notice status:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"],s}},async deleteNotice(r){try{await o(`/notices/${r}`,{method:"DELETE"}),this.notices=this.notices.filter(e=>e.id!==r)}catch(e){console.error("Error deleting notice:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getDailyTasks(r,e=1,s=10,t="",n="",a="",c=null,d=null){try{console.log(r);const i=await o("/daily-tasks",{method:"GET",params:{user_id:r,page:e,perPage:s,searchQuery:t,sortBy:n,orderBy:a,dateFrom:c,dateTo:d}});this.tasks=i.data}catch(i){console.error("Error fetching daily tasks:",i),this.errors=i.response?i.response.data.errors:["An unexpected error occurred"]}},async addDailyTask(r){try{const e=await o("/daily-tasks",{method:"POST",body:r});this.tasks.push(e.data)}catch(e){console.error("Error adding task:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getLeadStatus(r="",e=1,s=10,t="",n="",a=null){try{const c=await o("/lead-statuses",{method:"GET",params:{searchQuery:r,page:e,perPage:s,sortBy:t,orderBy:n,health_type:a}});return this.leadStatus=c.data,c}catch(c){console.error("Error fetching lead status:",c),this.errors=c.response?c.response.data.errors:["An unexpected error occurred"]}},async addLeadStatus(r){try{console.log(r);const e=await o("/lead-statuses",{method:"POST",body:r});this.leadStatus.push(e.data)}catch(e){console.error("Error adding lead status:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async updateLeadStatus(r,e){try{const s=await o(`/lead-statuses/${r}`,{method:"PUT",body:e}),t=this.leadStatus.findIndex(n=>n.id===r);t!==-1&&(this.leadStatus[t]=s.data)}catch(s){console.error("Error updating lead status:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async deleteLeadStatus(r){try{await o(`/lead-statuses/${r}`,{method:"DELETE"}),this.leadStatus=this.leadStatus.filter(e=>e.id!==r)}catch(e){console.error("Error deleting lead status:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async getApplicationStatus(){try{const r=await o("/application-statuses",{method:"GET"});this.applicationStatus=r.data}catch(r){console.error("Error fetching application status:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async addApplicationStatus(r){try{console.log(r);const e=await o("/application-statuses",{method:"POST",body:r});this.applicationStatus.push(e.data)}catch(e){console.error("Error adding application status:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}},async updateApplicationStatus(r,e){try{const s=await o(`/application-statuses/${r}`,{method:"PUT",body:e}),t=this.applicationStatus.findIndex(n=>n.id===r);t!==-1&&(this.applicationStatus[t]=s.data)}catch(s){console.error("Error updating application status:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"]}},async deleteApplicationStatus(r){try{await o(`/application-statuses/${r}`,{method:"DELETE"}),this.applicationStatus=this.applicationStatus.filter(e=>e.id!==r)}catch(e){console.error("Error deleting application status:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"]}}}});export{h as c};