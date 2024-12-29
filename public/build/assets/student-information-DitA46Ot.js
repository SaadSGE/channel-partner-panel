import{r as i,e as M}from"./validators-HG5DkttQ.js";import{M as H,r as u,k as Q,o as X,f as Z,e as l,b as e,v as p,a8 as ee,n as d,z as L,d as D,a9 as P,R as le,U as ae}from"./main-C3zi_SKQ.js";import{_ as te}from"./AppCardActions-BzFDC1pP.js";import{_ as oe}from"./AppAutocomplete-BHNP4SGW.js";import{_ as ue}from"./AppDateTimePicker-Coy05tHX.js";import{_ as re}from"./AppTextField-DFkCpbYz.js";import{c as de}from"./commonFunction-DaV-cpx8.js";import{u as ne}from"./fileStore-DewosusF.js";import{u as se}from"./submitApplication-Cpo3Wa5j.js";import{S as x}from"./sweetalert2-z6gKu1nJ.js";import{b as G,V as ie,c as me}from"./VCard-CiUXVH6b.js";import{V as pe}from"./VForm-BglYL0G4.js";import{V as m,a as r}from"./VRow-s-aEvbE2.js";import{V as O,a as U}from"./VRadioGroup-CwVE70Kn.js";import{V as Y}from"./VCardText-haI9Z-IX.js";import{V as ce}from"./VSpacer-ZOaaLL5l.js";import{V as fe}from"./VDialog-3Jy0gPfO.js";import{_ as Ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./helpers-CofNusnb.js";import"./index-DPXcXuYg.js";import"./dialog-transition-CxaPI8Wz.js";import"./forwardRefs-D3j0TLhE.js";import"./scopeId-CNDVdJ3R.js";import"./index-C8YGC3Io.js";import"./VInput-DkaOtTDM.js";import"./VSelect-C09sQe_X.js";import"./VTextField-Dognc3Fg.js";import"./VList-Bmx0u8vq.js";import"./ssrBoot-d-rE-ebl.js";import"./VAvatar-DNScsPhF.js";import"./VImg-CXAH5jII.js";import"./VDivider-Byc_tc4C.js";import"./VMenu-mUALx6PX.js";import"./VCheckboxBtn-ChwCrhEn.js";import"./VChip-Drmygec1.js";import"./filter-CQxRTFIJ.js";/* empty css              */const K=f=>(le("data-v-711badc1"),f=f(),ae(),f),ve=K(()=>D("label",null,"Gender",-1)),_e=K(()=>D("label",null,"Any Previous Visa Refusal",-1)),be={class:"d-flex justify-end mt-4"},Se=H({__name:"student-information",setup(f){const V=ne(),W=se(),v=u(""),_=u(""),b=u(""),S=u(""),y=u(""),$=u(""),C=u(""),E=u(""),q=u(""),I=u(""),h=u(""),T=u(""),k=u("male"),A=u("no"),n=de(),R=u(null),c=u(!1),N=u(""),j=u(["Bangladesh","Nigeria","Sri Lanka","India","Bhutan","Ghana","Pakistan"]),z=async()=>{R.value.validate().then(o=>{if(o.valid)c.value=!0;else return})},J=async()=>{c.value=!1,w.value=!0;const o=n.selectedCourseId,t=n.selectedIntakeId,s=n.selectedUniversityId,g=n.selectedCountryId,B=n.selectedCourseDetailsId;V.filePaths;const F={student_passport_no:v.value,date_of_birth:_.value,student_first_name:b.value,student_last_name:S.value,student_whatsapp_number:y.value,counsellor_number:$.value,student_email:C.value,counsellor_email:E.value,student_address:q.value,student_city:I.value,student_country:h.value,student_region_state:T.value,gender:k.value,visa_refusal:A.value};try{await W.submitApplication(F,o,t,s,g,B,V.filePaths,null,N.value),n.selectedCourseId=null,n.selectedIntakeId=null,n.selectedUniversityId=null,n.selectedCountryId=null,n.selectedCourseDetailsId=null,V.filePaths=[],V.files=[],v.value="",_.value="",b.value="",S.value="",y.value="",$.value="",C.value="",E.value="",q.value="",I.value="",h.value="",T.value="",k.value="",A.value="",N.value="",x.fire({icon:"success",title:"Application Successful",text:"You have been submitted application successfully! Please wait for admin review",confirmButtonText:"OK"}).then(a=>{a.isConfirmed&&location.reload()})}catch(a){x.fire({icon:"error",title:"Application Failed",text:a,confirmButtonText:"OK"})}w.value=!1},w=u(!1);return u(["State 1","State 2","State 3","State 4","State 5"]),Q(),(o,t)=>{const s=re,g=ue,B=oe,F=te;return X(),Z(F,{class:"mx-auto","max-width":"1200",loading:w.value,"no-actions":""},{default:l(()=>[e(G,null,{default:l(()=>[p(" Please enter student details to process this application ")]),_:1}),e(Y,null,{default:l(()=>[e(pe,{ref_key:"refForm",ref:R,class:"form-padding",onSubmit:ee(a=>({}),["prevent"])},{default:l(()=>[e(m,null,{default:l(()=>[e(r,{cols:"12",md:"12"},{default:l(()=>[e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=a=>v.value=a),label:"Student Passport No.",placeholder:"A099800",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(g,{modelValue:_.value,"onUpdate:modelValue":t[1]||(t[1]=a=>_.value=a),label:"Date of birth",placeholder:"Select date",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:b.value,"onUpdate:modelValue":t[2]||(t[2]=a=>b.value=a),label:"Student First Name",placeholder:"John",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:S.value,"onUpdate:modelValue":t[3]||(t[3]=a=>S.value=a),label:"Student Last Name",placeholder:"Doe",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:y.value,"onUpdate:modelValue":t[4]||(t[4]=a=>y.value=a),label:"Student WhatsApp Number",placeholder:"+1234567890",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:C.value,"onUpdate:modelValue":t[5]||(t[5]=a=>C.value=a),label:"Enter Student E-Mail ID",placeholder:"student@example.com",type:"email",rules:["requiredValidator"in o?o.requiredValidator:d(i),"emailValidator"in o?o.emailValidator:d(M)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[L("",!0)]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[L("",!0)]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:q.value,"onUpdate:modelValue":t[8]||(t[8]=a=>q.value=a),label:"Student Address",placeholder:"123 Main St",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:I.value,"onUpdate:modelValue":t[9]||(t[9]=a=>I.value=a),label:"Student City",placeholder:"City",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(B,{modelValue:h.value,"onUpdate:modelValue":t[10]||(t[10]=a=>h.value=a),label:"Student Country",items:j.value,placeholder:"Select Country",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","items","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:N.value,"onUpdate:modelValue":t[11]||(t[11]=a=>N.value=a),label:"Channel Partner Email",placeholder:"partner@example.com",type:"email",rules:["requiredValidator"in o?o.requiredValidator:d(i),"emailValidator"in o?o.emailValidator:d(M)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[ve,e(O,{modelValue:k.value,"onUpdate:modelValue":t[12]||(t[12]=a=>k.value=a),row:""},{default:l(()=>[e(U,{label:"Male",value:"male"}),e(U,{label:"Female",value:"female"})]),_:1},8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[_e,e(O,{modelValue:A.value,"onUpdate:modelValue":t[13]||(t[13]=a=>A.value=a),row:""},{default:l(()=>[e(U,{label:"Yes",value:"yes"}),e(U,{label:"No",value:"no"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),D("div",be,[e(P,{color:"primary",onClick:z},{default:l(()=>[p(" Submit ")]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(fe,{modelValue:c.value,"onUpdate:modelValue":t[15]||(t[15]=a=>c.value=a),"max-width":"500"},{default:l(()=>[e(ie,null,{default:l(()=>[e(G,{class:"text-h5"},{default:l(()=>[p(" Confirm Submission ")]),_:1}),e(Y,null,{default:l(()=>[p("Are you sure you want to submit the application?")]),_:1}),e(me,null,{default:l(()=>[e(ce),e(P,{color:"primary",onClick:J},{default:l(()=>[p(" Yes ")]),_:1}),e(P,{color:"secondary",onClick:t[14]||(t[14]=a=>c.value=!1)},{default:l(()=>[p(" No ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["loading"])}}}),tl=Ve(Se,[["__scopeId","data-v-711badc1"]]);export{tl as default};
