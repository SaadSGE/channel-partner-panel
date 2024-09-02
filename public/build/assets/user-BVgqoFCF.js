import{an as a}from"./main-DYSjY2V3.js";import{h as c}from"./helpers-D1bXR6is.js";import{$ as t}from"./api-Bx79Vctl.js";const u=a({id:"user",state:()=>({allUsers:[],users:[],errors:[],user:[],profile:[]}),actions:{async fetcAllhUser(){try{const e=await t("fetch-all-user",{method:"GET",headers:{"Content-Type":"application/json"}});this.allUsers=e.data,console.log(this.allUsers)}catch(e){throw console.error("Error getting user details:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"],e}},async fetchUsers(e=1,r="",s="",n=""){try{return await t("/users",{method:"GET",headers:{"Content-Type":"application/json"},params:{page:e,searchQuery:r,role:s,parentId:n}})}catch(o){throw console.error("Error getting users list:",o),this.errors=o.response?o.response.data.errors:["An unexpected error occurred"],o}},async fetchUser(e){try{return(await t(`/users/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}})).data}catch(r){throw console.error("Error getting user details:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],r}},async setParent(e,r){try{return await t(`/users/${e}/set-parent`,{method:"POST",body:JSON.stringify({parent_id:r}),headers:{"Content-Type":"application/json"}}),await this.fetchUsers(),{success:!0,message:"Parent set successfully!"}}catch(s){return console.error("Error setting parent:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"],{success:!1,message:"Failed to set parent."}}},async deleteUser(e){try{return await t(`/users/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}}),await this.fetchUsers(),{success:!0,message:"User deleted successfully!"}}catch(r){return console.error("Error deleting user:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],{success:!1,message:"Failed to delete user."}}},async fetchParentUsers(){try{const e=await t("/api/all-user",{method:"GET",headers:{"Content-Type":"application/json"}});this.parentUsers=e.data}catch(e){throw console.error("Error fetching parent users:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"],e}},async getUserProfile(){try{const e=await t("/user/profile",{method:"GET",headers:{"Content-Type":"application/json"}});return this.profile=e.data,e.data}catch(e){throw console.error("Error fetching user profile:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"],e}},async updateUserProfile(e){const r={first_name:e.firstName,last_name:e.lastName,mobile_number:e.mobileNumber,whatsapp_number:e.whatsappNumber,company_name:e.companyName,website:e.website,address:e.address,city:e.city,post_code:e.postCode,country:e.country};try{const s=await t("/user/profile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});return this.profile=s.data,s.data}catch(s){throw console.error("Error updating user profile:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"],s}},async changePassword(e){try{return(await t("/user/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).data}catch(r){console.log(r),c(r)}}}});export{u};
