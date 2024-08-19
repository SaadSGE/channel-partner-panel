import{an as n}from"./main-ujAelBRR.js";import{$ as o}from"./api-BGzK74uO.js";const i=n({id:"user",state:()=>({users:[],errors:[],user:[]}),actions:{async fetchUsers(e=1,r="",s="",a=""){try{return await o("/users",{method:"GET",headers:{"Content-Type":"application/json"},params:{page:e,searchQuery:r,role:s,parentId:a}})}catch(t){throw console.error("Error getting users list:",t),this.errors=t.response?t.response.data.errors:["An unexpected error occurred"],t}},async fetchUser(e){try{return(await o(`/users/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}})).data}catch(r){throw console.error("Error getting user details:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],r}},async setParent(e,r){try{return await o(`/users/${e}/set-parent`,{method:"POST",body:JSON.stringify({parent_id:r}),headers:{"Content-Type":"application/json"}}),await this.fetchUsers(),{success:!0,message:"Parent set successfully!"}}catch(s){return console.error("Error setting parent:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"],{success:!1,message:"Failed to set parent."}}},async deleteUser(e){try{return await o(`/users/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}}),await this.fetchUsers(),{success:!0,message:"User deleted successfully!"}}catch(r){return console.error("Error deleting user:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],{success:!1,message:"Failed to delete user."}}},async fetchParentUsers(){try{const e=await o("/api/all-user",{method:"GET",headers:{"Content-Type":"application/json"}});this.parentUsers=e.data}catch(e){throw console.error("Error fetching parent users:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"],e}}}});export{i as u};