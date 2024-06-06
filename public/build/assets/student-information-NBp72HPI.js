import{r as i}from"./validators-DpYrMFzk.js";import{an as K,M as z,r as u,k as H,o as Q,f as X,e as l,b as e,v as b,a6 as Z,n,d as B,a7 as P,R as x,U as ee}from"./main-1mV8A3Ok.js";import{_ as le}from"./AppAutocomplete-D7ikexWo.js";import{_ as ae}from"./AppDateTimePicker-DvOi717z.js";import{_ as te}from"./AppTextField-B6qaM17A.js";import{c as oe}from"./commonFunction-BAVgyaoK.js";import{u as ue}from"./fileStore-BBCXV64c.js";import{$ as re}from"./api-BuB0jJ0_.js";import{S as se}from"./sweetalert2-z6gKu1nJ.js";import{b as $,V as M,d as de}from"./VCard-Quhh9XGX.js";import{V as ie}from"./VForm-BWQfR_Be.js";import{V as p,a as r}from"./VRow-DPIoBZFC.js";import{V as E,a as k}from"./VRadioGroup-CnRxwzzX.js";import{V as O}from"./VCardText-DBYlaQFO.js";import{V as ne}from"./VSpacer-DdVb5-0q.js";import{V as me}from"./VDialog-vx0H8kpa.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./helpers-DK5QwNv0.js";import"./form-DD45LEPy.js";import"./VSelect-CTcRpsXh.js";import"./VTextField-DZMrnS7D.js";/* empty css                   */import"./VCounter-BqhfE6c3.js";import"./index-Dr4Jpfvu.js";import"./index-D5HNSvtj.js";import"./VField-DrOa7Jrs.js";import"./easing-CjukEv2V.js";import"./VInput-Cc3qPpf8.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-4bYWa8Xg.js";import"./ssrBoot-BSr0_Qc6.js";import"./VAvatar-CS2PSZbd.js";import"./VImg-B0OvyP-a.js";import"./VDivider-BynfZOFp.js";import"./dialog-transition-C3AmnP1-.js";import"./VMenu-C6RKladz.js";import"./VOverlay-Dw-bxEan.js";import"./lazy-B94C784v.js";import"./scopeId-B6VPZtEP.js";import"./VCheckboxBtn-BuqUvF2m.js";import"./VSelectionControl-gOd1ayQx.js";import"./VChip-BGAzZtGp.js";import"./VSlideGroup-D7xdXnSf.js";import"./filter-CA-4VRNq.js";import"./index-B3bPRkoL.js";/* empty css              */const fe=K({id:"application-store",state:()=>({errors:[],successMessage:""}),actions:{async submitApplication(f,y,C,c,V,v,_){try{const s=await re("/application",{method:"POST",body:JSON.stringify({...f,course_id:y,intake_id:C,university_id:c,country_id:V,course_details_id:v,document_paths:_}),headers:{"Content-Type":"application/json"}});return this.successMessage="Application submitted successfully",s.data}catch(s){throw console.error("Error submitting application:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"],s}}}}),G=f=>(x("data-v-be7fc5f9"),f=f(),ee(),f),ce=G(()=>B("label",null,"Gender",-1)),Ve=G(()=>B("label",null,"Any Previous Visa Refusal",-1)),ve={class:"d-flex justify-end mt-4"},_e=z({__name:"student-information",setup(f){const y=ue(),C=fe(),c=u(""),V=u(""),v=u(""),_=u(""),s=u(""),I=u(""),q=u(""),A=u(""),N=u(""),U=u(""),h=u(""),R=u(""),w=u("male"),g=u("no"),m=oe(),T=u(null),S=u(!1),L=u(["Bangladesh","Nigeria","Sri Lanka","India","Bhutan","Ghana"]),Y=async()=>{T.value.validate().then(o=>{if(o.valid)S.value=!0;else return})},j=async()=>{S.value=!1;const o=m.selectedCourseId,a=m.selectedIntakeId,d=m.selectedUniversityId,D=m.selectedCountryId,F=m.selectedCourseDetailsId,t=y.filePaths,W={student_passport_no:c.value,date_of_birth:V.value,student_first_name:v.value,student_last_name:_.value,student_whatsapp_number:s.value,counsellor_number:I.value,student_email:q.value,counsellor_email:A.value,student_address:N.value,student_city:U.value,student_country:h.value,student_region_state:R.value,gender:w.value,visa_refusal:g.value};try{await C.submitApplication(W,o,a,d,D,F,t),se.fire({icon:"success",title:"Application Successful",text:"You have been submitted application successfully! Please wait for admin review",confirmButtonText:"OK"}),m.selectedCourseId=null,m.selectedIntakeId=null,m.selectedUniversityId=null,m.selectedCountryId=null,m.selectedCourseDetailsId=null,y.filePaths=[],y.files=[],c.value="",V.value="",v.value="",_.value="",s.value="",I.value="",q.value="",A.value="",N.value="",U.value="",h.value="",R.value="",w.value="",g.value="",J.push({name:"application"})}catch{console.error(C.errors)}};u(["State 1","State 2","State 3","State 4","State 5"]);const J=H();return(o,a)=>{const d=te,D=ae,F=le;return Q(),X(M,{class:"mx-auto","max-width":"1200"},{default:l(()=>[e($,null,{default:l(()=>[b("Please enter student details to process this application")]),_:1}),e(O,null,{default:l(()=>[e(ie,{onSubmit:Z(t=>({}),["prevent"]),class:"form-padding",ref_key:"refForm",ref:T},{default:l(()=>[e(p,null,{default:l(()=>[e(r,{cols:"12",md:"12"},{default:l(()=>[e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=t=>c.value=t),label:"Student Passport No.",placeholder:"A099800",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(D,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=t=>V.value=t),label:"Date of birth",placeholder:"Select date",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=t=>v.value=t),label:"Student First Name",placeholder:"John",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:_.value,"onUpdate:modelValue":a[3]||(a[3]=t=>_.value=t),label:"Student Last Name",placeholder:"Doe",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:s.value,"onUpdate:modelValue":a[4]||(a[4]=t=>s.value=t),label:"Student WhatsApp Number",placeholder:"+1234567890",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:I.value,"onUpdate:modelValue":a[5]||(a[5]=t=>I.value=t),label:"Counsellor Number",placeholder:"+1234567890",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:q.value,"onUpdate:modelValue":a[6]||(a[6]=t=>q.value=t),label:"Enter Student E-Mail ID",placeholder:"student@example.com",type:"email",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:A.value,"onUpdate:modelValue":a[7]||(a[7]=t=>A.value=t),label:"Email-id of Counsellor",placeholder:"counsellor@example.com",type:"email",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:N.value,"onUpdate:modelValue":a[8]||(a[8]=t=>N.value=t),label:"Student Address",placeholder:"123 Main St",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:U.value,"onUpdate:modelValue":a[9]||(a[9]=t=>U.value=t),label:"Student City",placeholder:"City",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:h.value,"onUpdate:modelValue":a[10]||(a[10]=t=>h.value=t),label:"Student Country",items:L.value,placeholder:"Select Country",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","items","rules"])]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[ce,e(E,{modelValue:w.value,"onUpdate:modelValue":a[11]||(a[11]=t=>w.value=t),row:""},{default:l(()=>[e(k,{label:"Male",value:"male"}),e(k,{label:"Female",value:"female"})]),_:1},8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[Ve,e(E,{modelValue:g.value,"onUpdate:modelValue":a[12]||(a[12]=t=>g.value=t),row:""},{default:l(()=>[e(k,{label:"Yes",value:"yes"}),e(k,{label:"No",value:"no"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),B("div",ve,[e(P,{color:"primary",onClick:a[13]||(a[13]=t=>Y())},{default:l(()=>[b("Submit")]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(me,{modelValue:S.value,"onUpdate:modelValue":a[15]||(a[15]=t=>S.value=t),"max-width":"500"},{default:l(()=>[e(M,null,{default:l(()=>[e($,{class:"text-h5"},{default:l(()=>[b("Confirm Submission")]),_:1}),e(O,null,{default:l(()=>[b("Are you sure you want to submit the application?")]),_:1}),e(de,null,{default:l(()=>[e(ne),e(P,{color:"primary",onClick:j},{default:l(()=>[b("Yes")]),_:1}),e(P,{color:"secondary",onClick:a[14]||(a[14]=t=>S.value=!1)},{default:l(()=>[b("No")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),ml=pe(_e,[["__scopeId","data-v-be7fc5f9"]]);export{ml as default};