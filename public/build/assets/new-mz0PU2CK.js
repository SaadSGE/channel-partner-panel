import{r as c}from"./validators-Dm1NbkBz.js";import{k as F,r as u,H as T,w as y,o as k,c as b,b as l,e as r,n as i,a6 as B,a7 as D,v as I,z as S,F as N}from"./main-DcRYtyhb.js";import{_ as $}from"./AppCardActions-CUvJ5rlc.js";import{_ as P}from"./AppAutocomplete-s4yX0C5g.js";import{_ as h}from"./Filters-rQcL9WMQ.js";import{c as L}from"./commonFunction-tp9lW0ZL.js";import M from"./course-details-BbliYJTh.js";import{V as R}from"./VForm-By449w53.js";import{V as j,a as p}from"./VRow-DVOqp4Ce.js";import"./helpers-BK2cOSOq.js";import"./index-D9fV9cxA.js";import"./VCard-Cx8jtWxj.js";import"./VAvatar-BSmSdand.js";import"./VImg-Dll55tVl.js";import"./index-DAZmEUgw.js";import"./VCardText-DBuqztfA.js";import"./dialog-transition-Bayb46R9.js";import"./forwardRefs-D9kYFWgq.js";import"./scopeId-CB9q39my.js";import"./VTextField-CRmIugRS.js";import"./VSelect-26lvxBcu.js";import"./VList-BPp9J6kG.js";import"./ssrBoot-BIenGeCS.js";import"./VDivider-OgX-iOTt.js";import"./VMenu-KYSCHawE.js";import"./VCheckboxBtn-DJABChzu.js";import"./VChip-ThYzxD0S.js";import"./filter-6ZEjh5GN.js";import"./AppDateTimePicker-CYMNbMeJ.js";import"./AppSelect-BMbAkSU4.js";import"./AppTextField-CNPVqh_a.js";import"./api-Dzamjkic.js";import"./index-BYrzgnBV.js";import"./rolePermission-CyqPUE45.js";import"./user-BpYOmrVQ.js";import"./submitApplication-DyUXfZYH.js";import"./student-information-C7c0VOOv.js";import"./sweetalert2-z6gKu1nJ.js";import"./VRadioGroup-BgCkxlHh.js";import"./VSpacer-DJ6dVuUN.js";/* empty css              */import"./VDialog-BBPcRICL.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./upload-document-BK6vS3L2.js";import"./vue-filepond.esm-D8tNDpvx.js";import"./studentStore-D9XbUnrY.js";import"./VWindowItem-CiNK4i_-.js";const z={key:0},E={key:1},Le={__name:"new",setup(G){F();const a=L(),g=u(""),s=u(null),n=u(null),m=u(null),d=u(null),q=u(null),V=u(!0),C=u(!1),_=u(!0),v=u(""),U=["Bangladesh","Nigeria","Sri Lanka","India","Bhutan","Ghana","Pakistan"];T(async()=>{await a.getUniqueCountries(),_.value=!1}),y(v,async e=>{e&&(s.value=null,n.value=null,m.value=null,d.value=null,a.setSelectedCountryId(e),await a.getIntakesByCountry(e))}),y(s,async e=>{e&&(n.value=null,m.value=null,d.value=null,await a.getCourseTypesByCountryIntake(v.value,e))}),y(n,async e=>{e&&(m.value=null,d.value=null,a.selectedCourseType=e,await a.getUniversitiesByCountryIntakeCourseType(v.value,s.value,e))}),y(m,async e=>{e&&(d.value=null,s.value&&n.value&&await a.getCourseDetails(s.value,e,n.value))}),y(d,e=>{e&&(a.selectedCourseDetailsId=e)});const w=()=>{q.value.validate().then(e=>{e.valid&&(C.value=!0,V.value=!1)})};return(e,t)=>{const f=P,A=$;return k(),b(N,null,[V.value?(k(),b("div",z,[l(A,{title:"New Application",loading:_.value,"no-actions":""},{default:r(()=>[l(i(R),{ref_key:"refForm",ref:q,onSubmit:B(()=>{},["prevent"]),class:"form-padding"},{default:r(()=>[l(j,null,{default:r(()=>[l(h),l(p,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=o=>v.value=o),items:i(a).countries,"item-title":"name","item-value":"id",label:"Country to Apply",placeholder:"Select Country",rules:["requiredValidator"in e?e.requiredValidator:i(c)]},null,8,["modelValue","items","rules"])]),_:1}),l(p,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:g.value,"onUpdate:modelValue":t[1]||(t[1]=o=>g.value=o),items:U,label:"Country of Student Passport",placeholder:"Select Country of Student's Passport",rules:["requiredValidator"in e?e.requiredValidator:i(c)]},null,8,["modelValue","rules"])]),_:1}),l(p,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=o=>s.value=o),items:i(a).intakes,"item-title":"intake_name","item-value":"intake_id",label:"Intake",placeholder:"Select Intake",rules:["requiredValidator"in e?e.requiredValidator:i(c)],disabled:!v.value},null,8,["modelValue","items","rules","disabled"])]),_:1}),l(p,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=o=>n.value=o),items:i(a).courseTypes,"item-title":"name","item-value":"id",label:"Course Type",placeholder:"Select Course Type",rules:["requiredValidator"in e?e.requiredValidator:i(c)],disabled:!s.value},null,8,["modelValue","items","rules","disabled"])]),_:1}),l(p,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:m.value,"onUpdate:modelValue":t[4]||(t[4]=o=>m.value=o),items:i(a).universities,"item-title":"university_name","item-value":"university_id",label:"University",placeholder:"Select University",rules:["requiredValidator"in e?e.requiredValidator:i(c)],disabled:!n.value},null,8,["modelValue","items","rules","disabled"])]),_:1}),l(p,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:d.value,"onUpdate:modelValue":t[5]||(t[5]=o=>d.value=o),items:i(a).courseDetails,"item-title":"course_name","item-value":"id",label:"Course",placeholder:"Select Course",rules:["requiredValidator"in e?e.requiredValidator:i(c)],disabled:!m.value},null,8,["modelValue","items","rules","disabled"])]),_:1}),l(p,{cols:"12",class:"d-flex gap-4 justify-end"},{default:r(()=>[l(D,{onClick:t[6]||(t[6]=o=>w()),type:"submit",color:"primary"},{default:r(()=>[I("Next")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1},8,["loading"])])):S("",!0),C.value?(k(),b("div",E,[l(M,{courseDetails:i(a).getPreparedCourseDetails,"onUpdate:showCourseDetails":t[7]||(t[7]=o=>C.value=o),"onUpdate:showApplicationForm":t[8]||(t[8]=o=>V.value=o)},null,8,["courseDetails"])])):S("",!0)],64)}}};export{Le as default};
