import{an as a}from"./main-DYSjY2V3.js";import{$ as t}from"./api-Bx79Vctl.js";const i=a({id:"record-store",state:()=>({errors:[],successMessage:""}),actions:{async fetchRecord(s=1,r="",e=null){try{return await t("/course-detail",{method:"GET",headers:{"Content-Type":"application/json"},params:{page:s,searchQuery:r,id:e}})}catch(o){throw console.error("Error getting application list:",o),this.errors=o.response?o.response.data.errors:["An unexpected error occurred"],o}},async submitApplication(s){try{const r=await t("/course-detail",{method:"POST",body:s,headers:{"Content-Type":"application/json"}});return this.successMessage="Data submitted successfully",r.data}catch(r){throw console.error("Error submitting application:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],r}},async submitEditApplication(s,r){try{const e=await t(`/course-detail/${s}`,{method:"PUT",body:r,headers:{"Content-Type":"application/json"}});return this.successMessage="Data submitted successfully",e.data}catch(e){throw console.error("Error submitting application:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"],e}},async deleteRecord(s){try{await t(`/course-detail/${s}`,{method:"DELETE"})}catch(r){console.error("Error deleting course details:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}}}});export{i as u};
