import{_ as B}from"./AppTextField-DMqdYcKP.js";import{bg as E,bh as m,r as V,a6 as v,o as x,f as F,e as t,b as e,v as p,a8 as j,n as d,a9 as I,d as u,c as U,i as R,F as O,a2 as D,x as P,R as A,U as M}from"./main-BvFQxvBT.js";import{h as f}from"./helpers-Dq4Czwmk.js";import{r as h,e as $}from"./validators-DuJVVkWA.js";import{S}from"./sweetalert2-z6gKu1nJ.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as n,V as b}from"./VRow-C_WBmDjV.js";import{V as w,b as N}from"./VCard-B7qhezZk.js";import{V as C}from"./VCardText-DWakh8Y2.js";import{V as K}from"./VForm-DDmIgmTN.js";import{V as z}from"./VContainer-BINTQZvy.js";import"./VInput-DyyFC-H6.js";import"./index-Dgw-CaPr.js";import"./index-7dKs4xIn.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-CzYs9nDg.js";/* empty css              */import"./VAvatar-WzIA0iyC.js";import"./VImg-BMf7BfAR.js";const q=E("NigeriaStudent",{state:()=>({students:[],isLoading:!1,error:null}),getters:{getStudents:r=>r.students},actions:{async fetchStudents(r=1,s="",l=10){this.isLoading=!0;try{const a=await m("/nigeria-students",{method:"GET",params:{page:r,searchQuery:s,perPage:l}});return this.students=a.data,this.error=null,a}catch(a){f(a)}finally{this.isLoading=!1}},async registerStudent(r){this.isLoading=!0;try{const s=await m("/nigeria-students",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});return this.students.push(s.data.student),this.error=null,s.data}catch(s){f(s)}finally{this.isLoading=!1}},async updateStudent(r,s){this.isLoading=!0;try{const l=await m(`/nigeria-students/${r}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}),a=this.students.findIndex(_=>_.id===r);return a!==-1&&(this.students[a]=l.data.student),this.error=null,l.data}catch(l){f(l)}finally{this.isLoading=!1}},async deleteStudent(r){this.isLoading=!0;try{await m(`/nigeria-students/${r}`,{method:"DELETE"}),this.students=this.students.filter(s=>s.id!==r),this.error=null}catch(s){f(s)}finally{this.isLoading=!1}},clearError(){this.error=null}}}),g=r=>(A("data-v-65bcf50c"),r=r(),M(),r),G=g(()=>u("div",{class:"text-center mb-4"},[u("img",{src:"https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/channelPartnerPanel/sge-logo-trans.png",alt:"Logo",style:{"inline-size":"100%","max-block-size":"200px","object-fit":"cover"}})],-1)),H=g(()=>u("h3",{class:"text-h6 font-weight-bold mb-2"}," Exclusive Services for Our Members: ",-1)),Y=g(()=>u("h3",{class:"text-h6 font-weight-bold mt-4 mb-2"}," Additional Benefits: ",-1)),Q=g(()=>u("p",null," Upon enrollment, you'll join our alumni network and gain access to a wide range of exclusive services and opportunities in the UK. ",-1)),W={__name:"index",setup(r){console.log("nigeria");const s=q(),l=V(null),a=V({fullName:"",email:"",contactNumber:"",interestedCourse:""}),_=v(()=>s.isLoading);v(()=>s.error);const L=async()=>{const{valid:y}=await l.value.validate();if(y)try{await s.registerStudent(a.value),S.fire({icon:"success",title:"Registration Successful",text:"You have been registered successfully!",confirmButtonText:"OK"}).then(()=>{location.reload()}),a.value={fullName:"",email:"",contactNumber:"",interestedCourse:""}}catch(o){S.fire({icon:"error",title:"Registration Failed",text:o.message||"An error occurred during registration",confirmButtonText:"OK"})}finally{s.clearError()}},k=["Free application processing","Visa application support","Assistance with accommodation arrangements","Post-arrival guidance","National Insurance application support","Bank account setup assistance","Doctor registration support","Help with finding part-time jobs","Information on work permits after degree completion","Special discounts for future referrals"];return(y,o)=>{const c=B;return x(),F(z,{class:"fill-height"},{default:t(()=>[G,e(b,{justify:"center",class:"mt-8"},{default:t(()=>[e(n,{cols:"12",sm:"10",md:"8",lg:"6"},{default:t(()=>[e(w,{class:"elevation-12"},{default:t(()=>[e(N,{class:"text-h5 font-weight-bold pa-4"},{default:t(()=>[p(" Membership Registration ")]),_:1}),e(C,null,{default:t(()=>[e(K,{ref_key:"refForm",ref:l,onSubmit:j(L,["prevent"])},{default:t(()=>[e(b,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(c,{modelValue:a.value.fullName,"onUpdate:modelValue":o[0]||(o[0]=i=>a.value.fullName=i),label:"Full Name",placeholder:"John Doe",rules:[d(h)]},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(c,{modelValue:a.value.email,"onUpdate:modelValue":o[1]||(o[1]=i=>a.value.email=i),label:"Email",type:"email",placeholder:"john@example.com",rules:[d(h),d($)]},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(c,{modelValue:a.value.contactNumber,"onUpdate:modelValue":o[2]||(o[2]=i=>a.value.contactNumber=i),label:"Contact Number",placeholder:"+234 123 456 7890",rules:[d(h)]},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(c,{modelValue:a.value.interestedCourse,"onUpdate:modelValue":o[3]||(o[3]=i=>a.value.interestedCourse=i),label:"Course you're interested to study",placeholder:"e.g., Computer Science",rules:[d(h)]},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(I,{type:"submit",color:"primary",block:"",loading:_.value},{default:t(()=>[p(" Register ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{justify:"center",class:"mt-4"},{default:t(()=>[e(n,{cols:"12",sm:"10",md:"10",lg:"10"},{default:t(()=>[e(w,{class:"elevation-12",style:{border:"1px solid #90caf9","background-color":"#e3f2fd"}},{default:t(()=>[e(N,{class:"text-h5 font-weight-bold pa-4"},{default:t(()=>[p(" Membership Benefits ")]),_:1}),e(C,null,{default:t(()=>[H,u("ul",null,[(x(),U(O,null,R(k,(i,T)=>u("li",{key:T},[e(D,{color:"primary",icon:"mdi-check-circle",class:"mr-2"}),p(" "+P(i),1)])),64))]),Y,Q]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},_e=J(W,[["__scopeId","data-v-65bcf50c"]]);export{_e as default};