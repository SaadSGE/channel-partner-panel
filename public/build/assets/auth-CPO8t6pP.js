import{an as o}from"./main-DgLT1kb1.js";import{h as p}from"./helpers-u03GLcBG.js";import{$ as a}from"./api-CcMcPL5O.js";const h=o({id:"auth",state:()=>({user:[],errors:[]}),actions:{async register(r){try{const t=await a("/register",{method:"POST",body:r});return this.errors={},t.data}catch(t){p(t)}},async login(r,t){try{return(await a("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:t})})).data}catch(e){throw console.error("Error logging in:",e),e}},async updateUser(r){var t;try{const e=new FormData;return e.append("first_name",r.firstName),e.append("last_name",r.lastName),e.append("email",r.email),e.append("mobile_number",r.mobileNumber),e.append("whatsapp_number",r.whatsappNumber),e.append("company_name",r.companyName),e.append("website",r.website),e.append("address",r.address),e.append("city",r.city),e.append("post_code",r.postCode),e.append("country",r.country),e.append("role",r.role),e.append("status",r.status),e.append("_method","PUT"),Array.isArray(r.recruitCountries)&&r.recruitCountries.forEach((s,n)=>{e.append(`recruit_countries[${n}]`,s)}),r.agreement&&e.append("agreement",r.agreement[0]),r.commission_structure&&e.append("commission_structure",r.commission_structure[0]),(await a(`/users/${r.id}`,{method:"POST",body:e})).data}catch(e){throw console.error("Error updating user:",e),this.errors=((t=e.response)==null?void 0:t.data.errors)||["An unexpected error occurred"],e}}}});export{h as u};