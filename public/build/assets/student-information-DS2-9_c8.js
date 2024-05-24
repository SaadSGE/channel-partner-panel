import{r as i}from"./validators-DpYrMFzk.js";import{am as K,L as Q,r as u,j as z,o as H,f as X,e as l,b as e,t as b,a5 as Z,m as n,d as B,a6 as P,Q as x,R as ee}from"./main-YBWz1m4t.js";import{_ as le}from"./AppAutocomplete-COwSkSZX.js";import{_ as ae}from"./AppDateTimePicker-1D1Td1pC.js";import{_ as te}from"./AppTextField-B2if4bSm.js";import{c as oe}from"./commonFunction-DPBFUHR9.js";import{u as ue}from"./fileStore-Cjj2DORV.js";import{$ as re}from"./api-BYim2R_w.js";import{S as se}from"./sweetalert2-z6gKu1nJ.js";import{b as $,V as E,d as de}from"./VCard-aRxFMGTe.js";import{V as ie}from"./VForm-1ZXcAXZb.js";import{V as p,a as r}from"./VRow-CH5g8HuZ.js";import{V as M,a as k}from"./VRadioGroup-BTXjC59k.js";import{V as L}from"./VCardText-CaShbxwl.js";import{V as ne}from"./VSpacer-CRYZ80VM.js";import{V as me}from"./VDialog-DqBdJYKR.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./helpers-DK5QwNv0.js";import"./form-DUbDiGkB.js";import"./VSelect-BK3aNs61.js";import"./VTextField-dZ4ED2B_.js";/* empty css                   */import"./VCounter-Cx7iZhs2.js";import"./index-DOrI7ip-.js";import"./VImg-C8Kd6YyE.js";import"./VField-BTI8mHCh.js";import"./easing-CjukEv2V.js";import"./VInput-NG6w-0Dr.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-DoSLEW52.js";import"./ssrBoot-HuZQbiMn.js";import"./VAvatar-DdgukJKc.js";import"./VDivider-Du1fZeuf.js";import"./dialog-transition-B_mVtzGI.js";import"./VMenu-CbfqcCdv.js";import"./VOverlay-U94FvvZI.js";import"./lazy-CychInSX.js";import"./scopeId-B6oRxvVA.js";import"./VCheckboxBtn-DGr8mkkl.js";import"./VSelectionControl-D9MVmDQd.js";import"./VChip-DjWStkAQ.js";import"./VSlideGroup-BZWOKAn_.js";import"./filter-hKrB_mi7.js";import"./index-B3bPRkoL.js";/* empty css              */const fe=K({id:"application-store",state:()=>({errors:[],successMessage:""}),actions:{async submitApplication(f,S,C,c,V,v,_){try{const s=await re("/application",{method:"POST",body:JSON.stringify({...f,course_id:S,intake_id:C,university_id:c,country_id:V,course_details_id:v,document_paths:_}),headers:{"Content-Type":"application/json"}});return this.successMessage="Application submitted successfully",s.data}catch(s){throw console.error("Error submitting application:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"],s}}}}),O=f=>(x("data-v-a884ac00"),f=f(),ee(),f),ce=O(()=>B("label",null,"Gender",-1)),Ve=O(()=>B("label",null,"Any Previous Visa Refusal",-1)),ve={class:"d-flex justify-end mt-4"},_e=Q({__name:"student-information",setup(f){const S=ue(),C=fe(),c=u(""),V=u(""),v=u(""),_=u(""),s=u(""),I=u(""),q=u(""),A=u(""),N=u(""),h=u(""),w=u(""),R=u(""),U=u("male"),g=u("no"),m=oe(),T=u(null),y=u(!1),j=u(["Bangladesh","Nigeria","Sri Lanka","India","Bhutan","Ghana"]),G=async()=>{T.value.validate().then(o=>{if(o.valid)y.value=!0;else return})},Y=async()=>{y.value=!1;const o=m.selectedCourseId,a=m.selectedIntakeId,d=m.selectedUniversityId,D=m.selectedCountryId,F=m.selectedCourseDetailsId,t=S.filePaths,W={student_passport_no:c.value,date_of_birth:V.value,student_first_name:v.value,student_last_name:_.value,student_whatsapp_number:s.value,counsellor_number:I.value,student_email:q.value,counsellor_email:A.value,student_address:N.value,student_city:h.value,student_country:w.value,student_region_state:R.value,gender:U.value,visa_refusal:g.value};try{await C.submitApplication(W,o,a,d,D,F,t),se.fire({icon:"success",title:"Application Successful",text:"You have been submitted application successfully! Please wait for admin review",confirmButtonText:"OK"}),m.selectedCourseId=null,m.selectedIntakeId=null,m.selectedUniversityId=null,m.selectedCountryId=null,m.selectedCourseDetailsId=null,S.filePaths=[],c.value="",V.value="",v.value="",_.value="",s.value="",I.value="",q.value="",A.value="",N.value="",h.value="",w.value="",R.value="",U.value="",g.value="",J.push({name:"application"})}catch{console.error(C.errors)}};u(["State 1","State 2","State 3","State 4","State 5"]);const J=z();return(o,a)=>{const d=te,D=ae,F=le;return H(),X(E,{class:"mx-auto","max-width":"1200"},{default:l(()=>[e($,null,{default:l(()=>[b("Please enter student details to process this application")]),_:1}),e(L,null,{default:l(()=>[e(ie,{onSubmit:Z(t=>({}),["prevent"]),class:"form-padding",ref_key:"refForm",ref:T},{default:l(()=>[e(p,null,{default:l(()=>[e(r,{cols:"12",md:"12"},{default:l(()=>[e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=t=>c.value=t),label:"Student Passport No.",placeholder:"A099800",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(D,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=t=>V.value=t),label:"Date of birth",placeholder:"Select date",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=t=>v.value=t),label:"Student First Name",placeholder:"John",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:_.value,"onUpdate:modelValue":a[3]||(a[3]=t=>_.value=t),label:"Student Last Name",placeholder:"Doe",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:s.value,"onUpdate:modelValue":a[4]||(a[4]=t=>s.value=t),label:"Student WhatsApp Number",placeholder:"+1234567890",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:I.value,"onUpdate:modelValue":a[5]||(a[5]=t=>I.value=t),label:"Counsellor Number",placeholder:"+1234567890",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:q.value,"onUpdate:modelValue":a[6]||(a[6]=t=>q.value=t),label:"Enter Student E-Mail ID",placeholder:"student@example.com",type:"email",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:A.value,"onUpdate:modelValue":a[7]||(a[7]=t=>A.value=t),label:"Email-id of Counsellor",placeholder:"counsellor@example.com",type:"email",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:N.value,"onUpdate:modelValue":a[8]||(a[8]=t=>N.value=t),label:"Student Address",placeholder:"123 Main St",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:h.value,"onUpdate:modelValue":a[9]||(a[9]=t=>h.value=t),label:"Student City",placeholder:"City",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:w.value,"onUpdate:modelValue":a[10]||(a[10]=t=>w.value=t),label:"Student Country",items:j.value,placeholder:"Select Country",rules:["requiredValidator"in o?o.requiredValidator:n(i)]},null,8,["modelValue","items","rules"])]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[ce,e(M,{modelValue:U.value,"onUpdate:modelValue":a[11]||(a[11]=t=>U.value=t),row:""},{default:l(()=>[e(k,{label:"Male",value:"male"}),e(k,{label:"Female",value:"female"})]),_:1},8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[Ve,e(M,{modelValue:g.value,"onUpdate:modelValue":a[12]||(a[12]=t=>g.value=t),row:""},{default:l(()=>[e(k,{label:"Yes",value:"yes"}),e(k,{label:"No",value:"no"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),B("div",ve,[e(P,{color:"primary",onClick:a[13]||(a[13]=t=>G())},{default:l(()=>[b("Submit")]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(me,{modelValue:y.value,"onUpdate:modelValue":a[15]||(a[15]=t=>y.value=t),"max-width":"500"},{default:l(()=>[e(E,null,{default:l(()=>[e($,{class:"text-h5"},{default:l(()=>[b("Confirm Submission")]),_:1}),e(L,null,{default:l(()=>[b("Are you sure you want to submit the application?")]),_:1}),e(de,null,{default:l(()=>[e(ne),e(P,{color:"primary",onClick:Y},{default:l(()=>[b("Yes")]),_:1}),e(P,{color:"secondary",onClick:a[14]||(a[14]=t=>y.value=!1)},{default:l(()=>[b("No")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),nl=pe(_e,[["__scopeId","data-v-a884ac00"]]);export{nl as default};