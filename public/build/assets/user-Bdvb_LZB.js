import{an as n}from"./main-Bq8deQCX.js";import{$ as o}from"./api-99WOKqi0.js";const p=n({id:"user",state:()=>({users:[],errors:[],user:[]}),actions:{async fetchUsers(s=1,r="",t=""){try{return await o("/users",{method:"GET",headers:{"Content-Type":"application/json"},params:{page:s,searchQuery:r,role:t}})}catch(e){throw console.error("Error getting users list:",e),this.errors=e.response?e.response.data.errors:["An unexpected error occurred"],e}},async fetchUser(s){try{return(await o(`/users/${s}`,{method:"GET",headers:{"Content-Type":"application/json"}})).data}catch(r){throw console.error("Error getting user details:",r),this.errors=r.response?r.response.data.errors:["An unexpected error occurred"],r}}}});export{p as u};
