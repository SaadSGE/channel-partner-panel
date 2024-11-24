import{aU as f,aV as t}from"./main-D5McJ9Zv.js";import{h as u}from"./helpers-C_zUu5UZ.js";const A=f({id:"application-list",state:()=>({errors:[],successMessage:"",applicationData:"",documents:[],students:[],statuses:[],allStatuses:[],comments:[],universityCommunications:[],applicationOfficers:[],applicationOfficerOptions:[],acoAoCommunications:[],complianceOfficers:[],complianceOfficerOptions:[],acoCoCommunications:[]}),actions:{async getApplicationList(e=null,r=1,o=10,a="",n="",s="",p=null,l=null,d=null,c=null,h="",m=null,y=null){try{return await t("/application",{method:"GET",headers:{"Content-Type":"application/json"},params:{id:e,page:r,perPage:o,searchQuery:a,sortBy:n,orderBy:s,status:p,university:l,channelPartner:d,applicationOfficer:c,studentEmail:h,dateFrom:m,dateTo:y}})}catch(i){throw console.error("Error getting application list:",i),this.errors=i.response?i.response.data.errors:["An unexpected error occurred"],i}},async getApplicationDetails(e){try{const r=await t(`/application/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return this.applicationData=r.data,this.documents=r.data.student.document.map(o=>o.path),this.students=r.data.student,this.comments=r.data.comments,this.universityCommunications=r.data.university_communications,r.data}catch(r){throw console.error("Error getting application details:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],r}},async deleteItem(e){try{await t(`/application/${e}`,{method:"DELETE"}),await this.getApplicationList()}catch(r){console.error("Error deleting application:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"]}},async getApplicationStatusses(e){try{const r=await t(`/application-statuses/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});this.statuses=r.data}catch(r){throw console.error("Error getting application list:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],r}},async getApplicationAllStatuses(){try{const e=await t("/application-all-statuses",{method:"GET",headers:{"Content-Type":"application/json"}});this.allStatuses=e.data}catch(e){throw console.error("Error getting application list:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"],e}},async updateStatus(e,r){try{return(await t(`/application/${e}/status`,{method:"POST",body:r})).data}catch(o){throw console.error("Error updating status:",o),this.errors=o.response?o.response.data.errors:["An unexpected error occurred"],o}},async addComment(e,r){try{return(await t(`/application/${e}/comment`,{method:"POST",body:JSON.stringify({comment:r})})).data}catch(o){throw console.error("Error adding comment:",o),this.errors=o.response?o.response.data.errors:["An unexpected error occurred"],o}},async getUniversityCommunications(e){try{const r=await t(`/application/${e}/university-communications`,{method:"GET",headers:{"Content-Type":"application/json"}});this.universityCommunications=r.data}catch(r){throw console.error("Error getting university communications:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],r}},async addUniversityCommunication(e,{subject:r,message:o}){try{return(await t(`/application/${e}/university-communication`,{method:"POST",body:JSON.stringify({subject:r,message:o})})).data}catch(a){throw console.error("Error adding university communication:",a),this.errors=a.response?a.response.data.errors:["An unexpected error occurred"],a}},async assignApplicationOfficer(e,r){try{const o=await t(`/applications/${e}/assign-officer`,{method:"POST",body:JSON.stringify({user_id:r})});return await this.fetchApplicationOfficers(e),o.data}catch(o){u(o)}},async fetchApplicationOfficers(e){var r,o;try{const a=await t(`/applications/${e}/officers`,{method:"GET"});return this.applicationOfficers=a.data,a.data}catch(a){throw((o=(r=a.response)==null?void 0:r.data)==null?void 0:o.message)||"An error occurred while fetching application officers."}},async loadAllApplicationOfficers(){var e,r;try{const o=await t("/fetch-application-officers",{method:"GET"});return this.applicationOfficerOptions=o.data,o.data}catch(o){throw console.error("Error loading application officers:",o),((r=(e=o.response)==null?void 0:e.data)==null?void 0:r.message)||"An error occurred while loading application officers."}},async fetchApplicationRequests(){try{return(await t("/application-requests",{method:"GET"})).data}catch(e){throw console.error("Error fetching application requests:",e),e}finally{this.loading=!1}},async acceptApplicationRequest(e){try{return(await t(`/application-requests/${e}/accept`,{method:"POST"})).data}catch(r){throw console.error("Error accepting application request:",r),r}},async rejectApplicationRequest(e){try{return(await t(`/application-requests/${e}/reject`,{method:"POST"})).data}catch(r){throw console.error("Error rejecting application request:",r),r}},async getApplicationRequests(e,r,o,a,n){try{return await t("/application-requests",{method:"GET",params:{page:e,perPage:r,searchQuery:o,sortBy:a,sortOrder:n}})}catch(s){throw console.error("Error fetching application requests:",s),s}},async getAcoAoCommunications(e){try{const r=await t(`/application/${e}/aco-ao-communications`,{method:"GET",headers:{"Content-Type":"application/json"}});console.log(r.data),this.acoAoCommunications=r.data}catch(r){throw console.error("Error getting ACO & AO communications:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],r}},async addAcoAoCommunication(e,r){try{return(await t(`/application/${e}/aco-ao-communication`,{method:"POST",body:JSON.stringify({message:r})})).data}catch(o){throw console.error("Error adding ACO & AO communication:",o),this.errors=o.response?o.response.data.errors:["An unexpected error occurred"],o}},async assignComplianceOfficer(e,r){try{const o=await t(`/applications/${e}/assign-compliance-officer`,{method:"POST",body:JSON.stringify({user_id:r})});return await this.fetchComplianceOfficers(e),o.data}catch(o){u(o)}},async fetchComplianceOfficers(e){var r,o;try{const a=await t(`/applications/${e}/compliance-officers`,{method:"GET"});return this.complianceOfficers=a.data,a.data}catch(a){throw((o=(r=a.response)==null?void 0:r.data)==null?void 0:o.message)||"An error occurred while fetching compliance officers."}},async loadAllComplianceOfficers(){var e,r;try{const o=await t("/fetch-compliance-officers",{method:"GET"});return this.complianceOfficerOptions=o.data,o.data}catch(o){throw console.error("Error loading compliance officers:",o),((r=(e=o.response)==null?void 0:e.data)==null?void 0:r.message)||"An error occurred while loading compliance officers."}},async getAcoCoCommunications(e){try{const r=await t(`/application/${e}/aco-co-communications`,{method:"GET",headers:{"Content-Type":"application/json"}});console.log(r.data),this.acoCoCommunications=r.data}catch(r){throw console.error("Error getting ACO & CO communications:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],r}},async addAcoCoCommunication(e,r){try{return(await t(`/application/${e}/aco-co-communication`,{method:"POST",body:JSON.stringify({message:r})})).data}catch(o){throw console.error("Error adding ACO & CO communication:",o),this.errors=o.response?o.response.data.errors:["An unexpected error occurred"],o}},async getComplianceRequests(e,r,o,a,n){try{return await t("/compliance-requests",{method:"GET",params:{page:e,perPage:r,searchQuery:o,sortBy:a,sortOrder:n}})}catch(s){throw console.error("Error fetching compliance requests:",s),s}},async acceptComplianceRequest(e){try{return(await t(`/compliance-requests/${e}/accept`,{method:"POST"})).data}catch(r){throw console.error("Error accepting compliance request:",r),r}},async rejectComplianceRequest(e){try{return(await t(`/compliance-requests/${e}/reject`,{method:"POST"})).data}catch(r){throw console.error("Error rejecting compliance request:",r),r}},async getStudentList(e=null,r=1,o=10,a="",n="",s="",p=null,l=null,d=null){try{return await t("/students",{method:"GET",headers:{"Content-Type":"application/json"},params:{id:e,page:r,perPage:o,searchQuery:a,sortBy:n,orderBy:s,status:p,dateFrom:l,dateTo:d}})}catch(c){throw console.error("Error getting student list:",c),this.errors=c.response?c.response.data.errors:["An unexpected error occurred"],c}}}});export{A as u};
