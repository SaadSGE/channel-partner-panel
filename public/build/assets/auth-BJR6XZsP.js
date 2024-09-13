import{ao as p}from"./main-kzKK1XE4.js";import{h as s}from"./helpers-BeXnm4sY.js";import{$ as a}from"./api-CV6Ytb4u.js";const y=p({id:"auth",state:()=>({user:[],errors:[]}),actions:{async register(e){try{const t=await a("/register",{method:"POST",body:e});return this.errors={},t.data}catch(t){s(t)}},async login(e,t){try{return(await a("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).data}catch(r){throw console.error("Error logging in:",r),r}},async updateUser(e){var t;try{const r=new FormData;return r.append("first_name",e.firstName),r.append("last_name",e.lastName),r.append("email",e.email),r.append("mobile_number",e.mobileNumber),r.append("whatsapp_number",e.whatsappNumber),r.append("company_name",e.companyName),r.append("website",e.website),r.append("address",e.address),r.append("city",e.city),r.append("post_code",e.postCode),r.append("country",e.country),r.append("role",e.role),r.append("status",e.status),r.append("_method","PUT"),Array.isArray(e.recruitCountries)&&e.recruitCountries.forEach((n,o)=>{r.append(`recruit_countries[${o}]`,n)}),e.agreement&&r.append("agreement",e.agreement[0]),e.commission_structure&&r.append("commission_structure",e.commission_structure[0]),(await a(`/users/${e.id}`,{method:"POST",body:r})).data}catch(r){throw console.error("Error updating user:",r),this.errors=((t=r.response)==null?void 0:t.data.errors)||["An unexpected error occurred"],r}},async resetPassword(e){try{return(await a("/reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})})).data}catch(t){s(t)}}}});export{y as u};
