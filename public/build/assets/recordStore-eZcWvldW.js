import{ao as i}from"./main-Ckv26Emd.js";import{$ as t}from"./api-BVLLF4-V.js";const p=i({id:"record-store",state:()=>({errors:[],successMessage:""}),actions:{async fetchRecord(e=1,r="",s=null,a=null,c=null,n=""){try{return await t("/course-detail",{method:"GET",headers:{"Content-Type":"application/json"},params:{page:e,searchQuery:r,countryId:s,intakeId:a,universityId:c,courseName:n}})}catch(o){throw console.error("Error getting application list:",o),this.errors=o.response?o.response.data.errors:["An unexpected error occurred"],o}},async submitApplication(e){try{const r=await t("/course-detail",{method:"POST",body:e,headers:{"Content-Type":"application/json"}});return this.successMessage="Data submitted successfully",r.data}catch(r){throw console.error("Error submitting application:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],r}},async submitEditApplication(e,r){try{const s=await t(`/course-detail/${e}`,{method:"PUT",body:r,headers:{"Content-Type":"application/json"}});return this.successMessage="Data submitted successfully",s.data}catch(s){throw console.error("Error submitting application:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"],s}},async deleteRecord(e){try{await t(`/course-detail/${e}`,{method:"DELETE"})}catch(r){console.error("Error deleting course details:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async requestForm(e){try{const r=await t("/request-record",{method:"POST",body:e,headers:{"Content-Type":"application/json"}});return this.successMessage="Request submitted successfully",r.data}catch(r){throw console.error("Error submitting request form:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],r}}}});export{p as u};
