import{aK as u,aL as o}from"./main-Z3go8Xzc.js";import{h as a}from"./helpers-Bzg9TCNL.js";const m=u({id:"application-store",state:()=>({errors:[],successMessage:""}),actions:{async updateApplicationsFile(s,t){try{const e=await o("/update-application-file",{method:"POST",body:JSON.stringify({application_id:s,document_paths:t}),headers:{"Content-Type":"application/json"}});return this.successMessage="Application submitted successfully",e.data}catch(e){throw console.error("Error submitting application:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"],e}},async submitApplication(s,t,e,i,n,c,p,d=null,l=null){try{const r=await o("/application",{method:"POST",body:JSON.stringify({...s,course_id:t,intake_id:e,university_id:i,country_id:n,course_details_id:c,document_paths:p,student_id:d,channel_partner_email:l}),headers:{"Content-Type":"application/json"}});return this.errors={},this.successMessage="Application submitted successfully",r.data}catch(r){a(r)}},async updateApplication(s,t){try{const e=await o(`/students/${t}`,{method:"PATCH",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}});return console.log("Updated application:",s,t),this.errors={},this.successMessage="Application updated successfully",e.data}catch(e){console.error("Update error:",e),a(e)}}}});export{m as u};