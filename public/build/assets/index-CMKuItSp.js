import{r as f}from"./validators-BneuZIUi.js";import{k as h,r as s,H as w,w as y,o as g,f as D,e as o,b as l,c as S,n as r,a8 as I,a9 as F,v as N,z as U,d as P}from"./main-BO5sTPae.js";import{_ as $}from"./AppCardActions-TXowglF1.js";import{_ as j}from"./AppAutocomplete-BjPeLlem.js";import{_ as z}from"./Filters-D4hJny9W.js";import{c as L}from"./commonFunction-qoPwjnBP.js";import M from"./course-details-NYZIBogE.js";import{a as u,V as _}from"./VRow-BBNb4MQU.js";import{V as R}from"./VForm-F7Uybg-m.js";import{V as E}from"./VContainer-WXmPjUV9.js";import"./helpers-hBOzq4AY.js";import"./index-DCByG_JE.js";import"./VCard-71K5Tl-H.js";import"./VAvatar-D-6b8t5v.js";import"./VImg-D6TgAy6r.js";import"./index-Jo_PMSvD.js";import"./VCardText-GT6EW7Jt.js";import"./dialog-transition-jVtgk1lL.js";import"./forwardRefs-D3j0TLhE.js";import"./scopeId-CPfV55ua.js";import"./VInput-DSvjyyeS.js";import"./VSelect-XhjNJXNW.js";import"./VTextField-CO2kbJct.js";import"./VList-BorT8EZ-.js";import"./ssrBoot-I5NMsS7C.js";import"./VDivider-cI3vDDxP.js";import"./VMenu-DTeAfeL4.js";import"./VCheckboxBtn-B9XvnkYk.js";import"./VChip-DVbSPksP.js";import"./filter-D4151CUw.js";import"./AppDateTimePicker-DkYFR9z5.js";import"./AppSelect-C14-bm8c.js";import"./AppTextField-CFEcUJ0X.js";import"./rolePermission-DQXv1Uwo.js";import"./user-BVy9r1xf.js";import"./fileStore-B2mrhtdk.js";import"./student-information-DJ0wj4xQ.js";import"./submitApplication-D3yLK2cA.js";import"./sweetalert2-z6gKu1nJ.js";import"./VRadioGroup-Bz6cINZ9.js";import"./VSpacer-Cnm-3_nn.js";/* empty css              */import"./VDialog-CMvigysf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./upload-document-Bko2OZjq.js";import"./studentStore-jcySfGTM.js";import"./vue-filepond.esm-BS04GuxC.js";import"./VWindowItem--GvgkEJF.js";const G=P("img",{src:"https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/channelPartnerPanel/sge-logo-trans.png",alt:"Logo",style:{"block-size":"auto","inline-size":"100%","object-fit":"cover"}},null,-1),H={key:0},J={key:1},Re={__name:"index",setup(K){h();const i=L(),k=s(""),n=s(null),m=s(null),d=s(null),p=s(null),b=s(null),V=s(!0),C=s(!1),q=s(!0),v=s(""),B=["Bangladesh","Nigeria","Sri Lanka","India","Bhutan","Ghana","Pakistan"];w(async()=>{await i.getUniqueCountries(),q.value=!1}),y(v,async e=>{e&&(n.value=null,m.value=null,d.value=null,p.value=null,i.setSelectedCountryId(e),await i.getIntakesByCountry(e))}),y(n,async e=>{e&&(m.value=null,d.value=null,p.value=null,await i.getCourseTypesByCountryIntake(v.value,e))}),y(m,async e=>{e&&(d.value=null,p.value=null,i.selectedCourseType=e,await i.getUniversitiesByCountryIntakeCourseType(v.value,n.value,e))}),y(d,async e=>{e&&(p.value=null,n.value&&m.value&&await i.getCourseDetails(n.value,e,m.value))}),y(p,e=>{e&&(i.selectedCourseDetailsId=e)});const A=()=>{b.value.validate().then(e=>{e.valid&&(C.value=!0,V.value=!1)})};return(e,t)=>{const c=j,T=$;return g(),D(E,{class:"fill-height"},{default:o(()=>[l(_,{justify:"center"},{default:o(()=>[l(u,{cols:"12",md:"8"},{default:o(()=>[G]),_:1})]),_:1}),l(_,{justify:"center",class:"mt-8"},{default:o(()=>[l(u,{cols:"12",sm:"12",md:"12",lg:"12"},{default:o(()=>[V.value?(g(),S("div",H,[l(T,{title:"New Application",loading:q.value,"no-actions":""},{default:o(()=>[l(r(R),{ref_key:"refForm",ref:b,onSubmit:I(()=>{},["prevent"]),class:"form-padding"},{default:o(()=>[l(_,null,{default:o(()=>[l(z),l(u,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=a=>v.value=a),items:r(i).countries,"item-title":"name","item-value":"id",label:"Country to Apply",placeholder:"Select Country",rules:["requiredValidator"in e?e.requiredValidator:r(f)]},null,8,["modelValue","items","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=a=>k.value=a),items:B,label:"Country of Student Passport",placeholder:"Select Country of Student's Passport",rules:["requiredValidator"in e?e.requiredValidator:r(f)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=a=>n.value=a),items:r(i).intakes,"item-title":"intake_name","item-value":"intake_id",label:"Intake",placeholder:"Select Intake",rules:["requiredValidator"in e?e.requiredValidator:r(f)],disabled:!v.value},null,8,["modelValue","items","rules","disabled"])]),_:1}),l(u,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:m.value,"onUpdate:modelValue":t[3]||(t[3]=a=>m.value=a),items:r(i).courseTypes,"item-title":"name","item-value":"id",label:"Course Type",placeholder:"Select Course Type",rules:["requiredValidator"in e?e.requiredValidator:r(f)],disabled:!n.value},null,8,["modelValue","items","rules","disabled"])]),_:1}),l(u,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:d.value,"onUpdate:modelValue":t[4]||(t[4]=a=>d.value=a),items:r(i).universities,"item-title":"university_name","item-value":"university_id",label:"University",placeholder:"Select University",rules:["requiredValidator"in e?e.requiredValidator:r(f)],disabled:!m.value},null,8,["modelValue","items","rules","disabled"])]),_:1}),l(u,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:p.value,"onUpdate:modelValue":t[5]||(t[5]=a=>p.value=a),items:r(i).courseDetails,"item-title":"course_name","item-value":"id",label:"Course",placeholder:"Select Course",rules:["requiredValidator"in e?e.requiredValidator:r(f)],disabled:!d.value},null,8,["modelValue","items","rules","disabled"])]),_:1}),l(u,{cols:"12",class:"d-flex gap-4 justify-end"},{default:o(()=>[l(F,{onClick:t[6]||(t[6]=a=>A()),type:"submit",color:"primary"},{default:o(()=>[N("Next")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1},8,["loading"])])):U("",!0),C.value?(g(),S("div",J,[l(M,{courseDetails:r(i).getPreparedCourseDetails,"onUpdate:showCourseDetails":t[7]||(t[7]=a=>C.value=a),"onUpdate:showApplicationForm":t[8]||(t[8]=a=>V.value=a)},null,8,["courseDetails"])])):U("",!0)]),_:1})]),_:1})]),_:1})}}};export{Re as default};