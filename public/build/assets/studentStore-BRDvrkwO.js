import{aU as e,aV as a}from"./main-D5McJ9Zv.js";const n=e({id:"student",state:()=>({students:[],errors:[]}),actions:{async search(t=null){var s;try{const r=await a("/api/students/search",{method:"GET",params:{query:t}});return this.students=r.data,this.students}catch(r){throw console.error("Error searching students:",r),this.errors=((s=r.response)==null?void 0:s.data.errors)||["An unexpected error occurred"],r}}}});export{n as u};