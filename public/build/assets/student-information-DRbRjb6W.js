import{r as i,e as E}from"./validators-CQ_Qiucq.js";import{M as H,r as u,k as Q,o as X,f as Z,e as l,b as e,v as p,a7 as x,n as d,d as R,a8 as B,R as ee,U as le}from"./main-CVWDuzes.js";import{_ as ae}from"./AppCardActions-LPj--HwO.js";import{_ as te}from"./AppAutocomplete-DKdotpjg.js";import{_ as oe}from"./AppDateTimePicker-Yvp8-hAT.js";import{_ as ue}from"./AppTextField-DnblfOQu.js";import{c as re}from"./commonFunction-CSVmfta4.js";import{u as de}from"./fileStore-t8LSOH75.js";import{u as se}from"./submitApplication-DwKUV0tg.js";import{S as M}from"./sweetalert2-z6gKu1nJ.js";import{b as L,V as ie,c as ne}from"./VCard-ZAB0EwIJ.js";import{V as me}from"./VForm-B8qs5EG-.js";import{V as m,a as r}from"./VRow-CD6ZT1z3.js";import{V as G,a as k}from"./VRadioGroup-BH1bhrZf.js";import{V as O}from"./VCardText-1-ZGu5dD.js";import{V as pe}from"./VSpacer-Cu63oyPP.js";import{V as fe}from"./VDialog-C11j6Au2.js";import{_ as Ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./helpers-BzhXonZD.js";import"./index-CwN3L1A2.js";import"./dialog-transition-DwFLikRc.js";import"./forwardRefs-D3j0TLhE.js";import"./lazy-BVsDlChf.js";import"./scopeId-BngyCZ-L.js";import"./index-CLkLnF4x.js";import"./VTextField-BN3Dgytm.js";import"./VSelect-Bo02E6yO.js";import"./VList-zhex7iho.js";import"./ssrBoot-GkZ9Y4H-.js";import"./VAvatar-CniKLuiJ.js";import"./VImg-Bii9QvBb.js";import"./VDivider-BYqXoHql.js";import"./VMenu-2fVyirbu.js";import"./VCheckboxBtn-DPlaWpS6.js";import"./VChip-BnZebdch.js";import"./VSlideGroup-B-76nVKh.js";import"./filter-CRIqhMmW.js";/* empty css              */const Y=V=>(ee("data-v-f4184de4"),V=V(),le(),V),ve=Y(()=>R("label",null,"Gender",-1)),ce=Y(()=>R("label",null,"Any Previous Visa Refusal",-1)),_e={class:"d-flex justify-end mt-4"},be=H({__name:"student-information",setup(V){const v=de(),K=se(),c=u(""),_=u(""),b=u(""),S=u(""),y=u(""),C=u(""),I=u(""),q=u(""),A=u(""),U=u(""),N=u(""),T=u(""),w=u("male"),g=u("no"),n=re(),$=u(null),f=u(!1),W=u(["Bangladesh","Nigeria","Sri Lanka","India","Bhutan","Ghana","Pakistan"]),j=async()=>{$.value.validate().then(o=>{if(o.valid)f.value=!0;else return})},J=async()=>{f.value=!1,h.value=!0;const o=n.selectedCourseId,a=n.selectedIntakeId,s=n.selectedUniversityId,D=n.selectedCountryId,F=n.selectedCourseDetailsId;v.filePaths;const P={student_passport_no:c.value,date_of_birth:_.value,student_first_name:b.value,student_last_name:S.value,student_whatsapp_number:y.value,counsellor_number:C.value,student_email:I.value,counsellor_email:q.value,student_address:A.value,student_city:U.value,student_country:N.value,student_region_state:T.value,gender:w.value,visa_refusal:g.value};try{await K.submitApplication(P,o,a,s,D,F,v.filePaths),M.fire({icon:"success",title:"Application Successful",text:"You have been submitted application successfully! Please wait for admin review",confirmButtonText:"OK"}),n.selectedCourseId=null,n.selectedIntakeId=null,n.selectedUniversityId=null,n.selectedCountryId=null,n.selectedCourseDetailsId=null,v.filePaths=[],v.files=[],c.value="",_.value="",b.value="",S.value="",y.value="",C.value="",I.value="",q.value="",A.value="",U.value="",N.value="",T.value="",w.value="",g.value="",z.push({name:"application"})}catch(t){M.fire({icon:"error",title:"Application Failed",text:t,confirmButtonText:"OK"})}h.value=!1},h=u(!1);u(["State 1","State 2","State 3","State 4","State 5"]);const z=Q();return(o,a)=>{const s=ue,D=oe,F=te,P=ae;return X(),Z(P,{class:"mx-auto","max-width":"1200",loading:h.value,"no-actions":""},{default:l(()=>[e(L,null,{default:l(()=>[p(" Please enter student details to process this application ")]),_:1}),e(O,null,{default:l(()=>[e(me,{ref_key:"refForm",ref:$,class:"form-padding",onSubmit:x(t=>({}),["prevent"])},{default:l(()=>[e(m,null,{default:l(()=>[e(r,{cols:"12",md:"12"},{default:l(()=>[e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=t=>c.value=t),label:"Student Passport No.",placeholder:"A099800",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(D,{modelValue:_.value,"onUpdate:modelValue":a[1]||(a[1]=t=>_.value=t),label:"Date of birth",placeholder:"Select date",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=t=>b.value=t),label:"Student First Name",placeholder:"John",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:S.value,"onUpdate:modelValue":a[3]||(a[3]=t=>S.value=t),label:"Student Last Name",placeholder:"Doe",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:y.value,"onUpdate:modelValue":a[4]||(a[4]=t=>y.value=t),label:"Student WhatsApp Number",placeholder:"+1234567890",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:C.value,"onUpdate:modelValue":a[5]||(a[5]=t=>C.value=t),label:"Counsellor Number",placeholder:"+1234567890",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:I.value,"onUpdate:modelValue":a[6]||(a[6]=t=>I.value=t),label:"Enter Student E-Mail ID",placeholder:"student@example.com",type:"email",rules:["requiredValidator"in o?o.requiredValidator:d(i),"emailValidator"in o?o.emailValidator:d(E)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:q.value,"onUpdate:modelValue":a[7]||(a[7]=t=>q.value=t),label:"Email-id of Counsellor",placeholder:"counsellor@example.com",type:"email",rules:["requiredValidator"in o?o.requiredValidator:d(i),"emailValidator"in o?o.emailValidator:d(E)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:A.value,"onUpdate:modelValue":a[8]||(a[8]=t=>A.value=t),label:"Student Address",placeholder:"123 Main St",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(s,{modelValue:U.value,"onUpdate:modelValue":a[9]||(a[9]=t=>U.value=t),label:"Student City",placeholder:"City",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:N.value,"onUpdate:modelValue":a[10]||(a[10]=t=>N.value=t),label:"Student Country",items:W.value,placeholder:"Select Country",rules:["requiredValidator"in o?o.requiredValidator:d(i)]},null,8,["modelValue","items","rules"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[ve,e(G,{modelValue:w.value,"onUpdate:modelValue":a[11]||(a[11]=t=>w.value=t),row:""},{default:l(()=>[e(k,{label:"Male",value:"male"}),e(k,{label:"Female",value:"female"})]),_:1},8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[ce,e(G,{modelValue:g.value,"onUpdate:modelValue":a[12]||(a[12]=t=>g.value=t),row:""},{default:l(()=>[e(k,{label:"Yes",value:"yes"}),e(k,{label:"No",value:"no"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),R("div",_e,[e(B,{color:"primary",onClick:j},{default:l(()=>[p(" Submit ")]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(fe,{modelValue:f.value,"onUpdate:modelValue":a[14]||(a[14]=t=>f.value=t),"max-width":"500"},{default:l(()=>[e(ie,null,{default:l(()=>[e(L,{class:"text-h5"},{default:l(()=>[p(" Confirm Submission ")]),_:1}),e(O,null,{default:l(()=>[p("Are you sure you want to submit the application?")]),_:1}),e(ne,null,{default:l(()=>[e(pe),e(B,{color:"primary",onClick:J},{default:l(()=>[p(" Yes ")]),_:1}),e(B,{color:"secondary",onClick:a[13]||(a[13]=t=>f.value=!1)},{default:l(()=>[p(" No ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["loading"])}}}),tl=Ve(be,[["__scopeId","data-v-f4184de4"]]);export{tl as default};
