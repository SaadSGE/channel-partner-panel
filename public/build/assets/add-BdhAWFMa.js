import{r as s}from"./validators-DOkm11CL.js";import{k as I,r as l,a5 as L,H as N,a as _,o as B,c as H,b as t,e as r,n,a6 as $,v as k,a7 as G,z as Q}from"./main-Bq8deQCX.js";import{_ as z}from"./AppTextField-FNCD987S.js";import{_ as P}from"./AppAutocomplete-DS7OW5yN.js";import{c as j}from"./commonFunction-BuA7_9lY.js";import{u as J}from"./recordStore-DUwNZbX5.js";/* empty css                         */import{V as K}from"./VForm-BkNHcqLX.js";import{V as O,a as u}from"./VRow-D_Z_DnuS.js";import{V as S}from"./form-BxL6QJTk.js";import{V as W}from"./VCard-BJp96eTV.js";import"./helpers-DK5QwNv0.js";import"./VTextField-C04YWSgW.js";/* empty css                   */import"./VCounter-DEwuRr79.js";import"./index-CW8R-nlC.js";import"./index-CjfOI940.js";import"./VField-DEuo-wJT.js";import"./easing-CjukEv2V.js";import"./VInput-DAjVSw52.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-CAeDrijQ.js";import"./VList-Dvf4ggmo.js";import"./ssrBoot-CDYbaJai.js";import"./VAvatar-DJAkgXLu.js";import"./VImg-CCyGr-Sd.js";import"./VDivider-c212GQ1F.js";import"./dialog-transition-DzwEt7fH.js";import"./VMenu-BqPvUGXu.js";import"./VOverlay-BTcTkavH.js";import"./lazy-BTUcCFF4.js";import"./scopeId-BUtXmUdf.js";import"./VCheckboxBtn-DTBqEPH6.js";import"./VSelectionControl-CoB5g4dr.js";import"./VChip-DBWGAsrD.js";import"./VSlideGroup-SZRIlWpK.js";import"./filter-C3Mblgdv.js";import"./api-99WOKqi0.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VCardText-BrEuz_jZ.js";const X={key:0},He={__name:"add",setup(Y){I();const a=j(),b=J(),v=l("");l("");const m=l(""),V=l(""),d=l(""),p=l(""),f=l(""),y=l("");l();const F=l(),w=l(),A=["Graduate","Post Graduate"],U=l(),D=l();l({courseName:"",intake:"",tuitionFee:"",courseDuration:"",courseLabel:"",location:"",universityLogo:"",academicRequirement:"",englishRequirement:""});const R=l(null),M=l(!0);l(!1),L(()=>a.getFilteredCourseDetails(countryToApply.value,p.value,m.value,d.value));const g=l(""),q=l("");N(async()=>{a.countries.length===0&&await a.getCountries(),a.courses.length===0&&await a.getCourses(),a.intakes.length===0&&await a.getIntakes(),a.universities.length===0&&await a.getUniversities(),a.courseDetails.length===0&&await a.getCourseDetails(),F.value=a.countries,D.value=a.courses,w.value=a.intakes,U.value=a.universities});const h=async()=>{if(await R.value.validate())try{const o={countryId:v.value,intakeId:m.value,courseType:V.value,universityId:d.value,course:p.value,tutionFee:f.value,courseDuration:y.value,academicRequirement:g.value,englishRequirement:q.value};await b.submitApplication(o)&&(console.log(b.successMessage),E())}catch(o){console.log(o),console.error("Form submission error:",b.errors)}},E=()=>{v.value="",m.value="",V.value="",d.value="",p.value="",f.value="",y.value="",g.value.root.innerHTML="",q.value.root.innerHTML=""};return(i,o)=>{const c=P,C=z,T=_("QuillEditor");return M.value?(B(),H("div",X,[t(W,{title:"New Application"},{default:r(()=>[t(n(K),{ref_key:"refForm",ref:R,onSubmit:$(()=>{},["prevent"]),class:"form-padding"},{default:r(()=>[t(O,null,{default:r(()=>[t(u,{cols:"12",md:"6"},{default:r(()=>[t(c,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=e=>v.value=e),items:F.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Country to Apply",placeholder:"Select Country",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),t(u,{cols:"12",md:"6"},{default:r(()=>[t(c,{modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=e=>m.value=e),items:w.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Intake",placeholder:"Select Intake",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),t(u,{cols:"12",md:"6"},{default:r(()=>[t(c,{modelValue:V.value,"onUpdate:modelValue":o[2]||(o[2]=e=>V.value=e),items:A,label:"Course Type",placeholder:"Select Course Type",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","rules"])]),_:1}),t(u,{cols:"12",md:"6"},{default:r(()=>[t(c,{modelValue:d.value,"onUpdate:modelValue":o[3]||(o[3]=e=>d.value=e),items:U.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"University",placeholder:"Select University",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),t(u,{cols:"12",md:"6"},{default:r(()=>[t(C,{modelValue:p.value,"onUpdate:modelValue":o[4]||(o[4]=e=>p.value=e),label:"Course Name.",placeholder:"BSC in Machine Learning",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","rules"])]),_:1}),t(u,{cols:"12",md:"6"},{default:r(()=>[t(C,{modelValue:f.value,"onUpdate:modelValue":o[5]||(o[5]=e=>f.value=e),label:"Tuttion Fee (Mention euro or dollar)",placeholder:"1000 euro",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","rules"])]),_:1}),t(u,{cols:"12",md:"6"},{default:r(()=>[t(C,{modelValue:y.value,"onUpdate:modelValue":o[6]||(o[6]=e=>y.value=e),label:"Course Duration (Mention years)",placeholder:"2 years",rules:["requiredValidator"in i?i.requiredValidator:n(s)]},null,8,["modelValue","rules"])]),_:1}),t(u,{cols:"12",md:"12",style:{margin:"auto"}},{default:r(()=>[t(S,{class:"mb-2"},{default:r(()=>[k("Academic Requirement")]),_:1}),t(T,{theme:"snow",content:g.value,"onUpdate:content":o[7]||(o[7]=e=>g.value=e),"content-type":"html"},null,8,["content"])]),_:1}),t(u,{cols:"12",md:"12",style:{margin:"auto"}},{default:r(()=>[t(S,{class:"mb-2"},{default:r(()=>[k("English Requirement")]),_:1}),t(T,{theme:"snow",content:q.value,"onUpdate:content":o[8]||(o[8]=e=>q.value=e),"content-type":"html"},null,8,["content"])]),_:1}),t(u,{cols:"12"},{default:r(()=>[t(G,{onClick:o[9]||(o[9]=e=>h()),type:"submit",color:"primary",block:""},{default:r(()=>[k(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})])):Q("",!0)}}};export{He as default};