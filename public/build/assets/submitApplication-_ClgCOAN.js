import{ao as p}from"./main-BpRJEuHK.js";import{$ as o}from"./api-5K5WZjfU.js";import{h as d}from"./helpers-Ck57-j5U.js";const m=p({id:"application-store",state:()=>({errors:[],successMessage:""}),actions:{async updateApplicationsFile(e,t){try{const s=await o("/update-application-file",{method:"POST",body:JSON.stringify({application_id:e,document_paths:t}),headers:{"Content-Type":"application/json"}});return this.successMessage="Application submitted successfully",s.data}catch(s){throw console.error("Error submitting application:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"],s}},async submitApplication(e,t,s,i,a,n,c){try{const r=await o("/application",{method:"POST",body:JSON.stringify({...e,course_id:t,intake_id:s,university_id:i,country_id:a,course_details_id:n,document_paths:c}),headers:{"Content-Type":"application/json"}});return this.errors={},this.successMessage="Application submitted successfully",r.data}catch(r){d(r)}}}});export{m as u};
