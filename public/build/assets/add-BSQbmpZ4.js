import{r as s}from"./validators-WxtbmeC2.js";import{k as E,r as l,a5 as L,H as N,a as _,o as B,c as H,b as t,e as a,n,a6 as P,v as F,a7 as $,z as G}from"./main-DPb0_12f.js";import{_ as Q}from"./AppTextField-CFn_jv_O.js";import{_ as z}from"./AppAutocomplete-auFazs0X.js";import{c as O}from"./commonFunction-U3XaDVDG.js";import{u as Y}from"./recordStore-CiF9St7l.js";/* empty css                         */import{V as j}from"./VForm-BlnZ_x-m.js";import{V as J,a as u}from"./VRow-CT0QuKMD.js";import{V as S}from"./VTextField-9aIjmxOS.js";import{V as K}from"./VCard-C0bM0ZXG.js";import"./helpers-D6joOrZs.js";import"./VSelect-DwHgvjnN.js";import"./forwardRefs-D9kYFWgq.js";import"./VList-BfLBVeHb.js";import"./index-RtQTYc-4.js";import"./ssrBoot-WBVlJHJ4.js";import"./index-D5BOVv8n.js";import"./VAvatar-DBQAuZOP.js";import"./VImg-DFj61J6e.js";import"./VDivider-B8LX-A2l.js";import"./dialog-transition-CdQQCviD.js";import"./scopeId-BacWre44.js";import"./VMenu-y1B7IMSs.js";import"./VCheckboxBtn-DHRGWJBW.js";import"./VChip-C8WHXIHk.js";import"./filter-CA0zSWB2.js";import"./api-CbkWr8Ve.js";import"./index-BYrzgnBV.js";/* empty css              */import"./VCardText-DuS4qxmo.js";const W={key:0},he={__name:"add",setup(X){E();const r=O(),b=Y(),v=l("");l("");const m=l(""),V=l(""),d=l(""),p=l(""),f=l(""),y=l("");l();const k=l(),w=l(),h=["Graduate","Post Graduate","Foundation (Pathway)","International Year One (Pathway)"],U=l(),A=l();l({courseName:"",intake:"",tuitionFee:"",courseDuration:"",courseLabel:"",location:"",universityLogo:"",academicRequirement:"",englishRequirement:""});const R=l(null),D=l(!0);l(!1),L(()=>r.getFilteredCourseDetails(countryToApply.value,p.value,m.value,d.value));const g=l(""),q=l("");N(async()=>{r.countries.length===0&&await r.getCountries(),r.courses.length===0&&await r.getCourses(),r.intakes.length===0&&await r.getIntakes(),r.universities.length===0&&await r.getUniversities(),r.courseDetails.length===0&&await r.getCourseDetails(),k.value=r.countries,A.value=r.courses,w.value=r.intakes,U.value=r.universities});const M=async()=>{if(await R.value.validate())try{const o={countryId:v.value,intakeId:m.value,courseType:V.value,universityId:d.value,course:p.value,tutionFee:f.value,courseDuration:y.value,academicRequirement:g.value,englishRequirement:q.value};await b.submitApplication(o)&&(console.log(b.successMessage),I())}catch(o){console.log(o),console.error("Form submission error:",b.errors)}},I=()=>{v.value="",m.value="",V.value="",d.value="",p.value="",f.value="",y.value="",g.value.root.innerHTML="",q.value.root.innerHTML=""};return(i,o)=>{const c=z,C=Q,T=_("QuillEditor");return D.value?(B(),H("div",W,[t(K,{title:"New Application"},{default:a(()=>[t(n(j),{ref_key:"refForm",ref:R,onSubmit:P(()=>{},["prevent"]),class:"form-padding"},{default:a(()=>[t(J,null,{default:a(()=>[t(u,{cols:"12",md:"6"},{default:a(()=>[t(c,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=e=>v.value=e),items:k.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Country to Apply",placeholder:"Select Country",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(c,{modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=e=>m.value=e),items:w.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Intake",placeholder:"Select Intake",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(c,{modelValue:V.value,"onUpdate:modelValue":o[2]||(o[2]=e=>V.value=e),items:h,label:"Course Type",placeholder:"Select Course Type",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","rules"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(c,{modelValue:d.value,"onUpdate:modelValue":o[3]||(o[3]=e=>d.value=e),items:U.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"University",placeholder:"Select University",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(C,{modelValue:p.value,"onUpdate:modelValue":o[4]||(o[4]=e=>p.value=e),label:"Course Name.",placeholder:"BSC in Machine Learning",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","rules"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(C,{modelValue:f.value,"onUpdate:modelValue":o[5]||(o[5]=e=>f.value=e),label:"Tuttion Fee (Mention euro or dollar)",placeholder:"1000 euro",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","rules"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(C,{modelValue:y.value,"onUpdate:modelValue":o[6]||(o[6]=e=>y.value=e),label:"Course Duration (Mention years)",placeholder:"2 years",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","rules"])]),_:1}),t(u,{cols:"12",md:"12",style:{margin:"auto"}},{default:a(()=>[t(S,{class:"mb-2"},{default:a(()=>[F("Academic Requirement")]),_:1}),t(T,{theme:"snow",content:g.value,"onUpdate:content":o[7]||(o[7]=e=>g.value=e),"content-type":"html"},null,8,["content"])]),_:1}),t(u,{cols:"12",md:"12",style:{margin:"auto"}},{default:a(()=>[t(S,{class:"mb-2"},{default:a(()=>[F("English Requirement")]),_:1}),t(T,{theme:"snow",content:q.value,"onUpdate:content":o[8]||(o[8]=e=>q.value=e),"content-type":"html"},null,8,["content"])]),_:1}),t(u,{cols:"12"},{default:a(()=>[t($,{onClick:o[9]||(o[9]=e=>M()),type:"submit",color:"primary",block:""},{default:a(()=>[F(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})])):G("",!0)}}};export{he as default};
