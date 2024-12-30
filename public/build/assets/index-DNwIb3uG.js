import{r as f}from"./validators-B3V6vxc3.js";import{k as h,r as s,H as w,w as y,o as g,f as D,e as o,b as l,c as S,n as r,a8 as I,a9 as F,v as N,z as U,d as P}from"./main-Fnquxq59.js";import{_ as $}from"./AppCardActions-CL6xIl9f.js";import{_ as j}from"./AppAutocomplete-Sfjbz5Jd.js";import{_ as z}from"./Filters-CjDfwejU.js";import{c as L}from"./commonFunction-aHx3jXPa.js";import M from"./course-details-CavLs7Zg.js";import{a as u,V as _}from"./VRow-CZuh9ehv.js";import{V as R}from"./VForm-B6K_oZ0i.js";import{V as E}from"./VContainer-B44_0P_4.js";import"./helpers-D3v8wGNq.js";import"./index-MHNCXv1N.js";import"./VCard-BV1M2n13.js";import"./VAvatar-BvpeSpy9.js";import"./VImg-D0Y1lsUC.js";import"./index-BIh3WpW1.js";import"./VCardText-BZC4GHLq.js";import"./dialog-transition-BbDK651E.js";import"./forwardRefs-D3j0TLhE.js";import"./scopeId-B5QIExbG.js";import"./VInput-CZub6Zk0.js";import"./VSelect-nUKQwNEk.js";import"./VTextField-CaLyShim.js";import"./VList-DRH0Z_ga.js";import"./ssrBoot-GPPxPnS1.js";import"./VDivider-yXWRSAV-.js";import"./VMenu-Ck1TOVry.js";import"./VCheckboxBtn-1CZZxZt9.js";import"./VChip-Dt8JHKvn.js";import"./filter-BPg4cofz.js";import"./AppDateTimePicker-Bs945VZl.js";import"./AppSelect-D2Erl3Sx.js";import"./AppTextField-BObPlpdg.js";import"./rolePermission-BQu99Xml.js";import"./user-BCzbzf1B.js";import"./fileStore-BvYAxG0m.js";import"./student-information-H-OT7jH_.js";import"./submitApplication-BJRC18Eg.js";import"./sweetalert2-z6gKu1nJ.js";import"./VRadioGroup-CifYcYqw.js";import"./VSpacer-DsGM5CTR.js";/* empty css              */import"./VDialog-DJxSFL81.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./upload-document-3uUZrXqO.js";import"./studentStore-zeF1WM-l.js";import"./vue-filepond.esm-UMceeZ7i.js";import"./VWindowItem-B5u3oDbh.js";const G=P("img",{src:"https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/channelPartnerPanel/sge-logo-trans.png",alt:"Logo",style:{"block-size":"auto","inline-size":"100%","object-fit":"cover"}},null,-1),H={key:0},J={key:1},Re={__name:"index",setup(K){h();const i=L(),k=s(""),n=s(null),m=s(null),d=s(null),p=s(null),b=s(null),V=s(!0),C=s(!1),q=s(!0),v=s(""),B=["Bangladesh","Nigeria","Sri Lanka","India","Bhutan","Ghana","Pakistan"];w(async()=>{await i.getUniqueCountries(),q.value=!1}),y(v,async e=>{e&&(n.value=null,m.value=null,d.value=null,p.value=null,i.setSelectedCountryId(e),await i.getIntakesByCountry(e))}),y(n,async e=>{e&&(m.value=null,d.value=null,p.value=null,await i.getCourseTypesByCountryIntake(v.value,e))}),y(m,async e=>{e&&(d.value=null,p.value=null,i.selectedCourseType=e,await i.getUniversitiesByCountryIntakeCourseType(v.value,n.value,e))}),y(d,async e=>{e&&(p.value=null,n.value&&m.value&&await i.getCourseDetails(n.value,e,m.value))}),y(p,e=>{e&&(i.selectedCourseDetailsId=e)});const A=()=>{b.value.validate().then(e=>{e.valid&&(C.value=!0,V.value=!1)})};return(e,t)=>{const c=j,T=$;return g(),D(E,{class:"fill-height"},{default:o(()=>[l(_,{justify:"center"},{default:o(()=>[l(u,{cols:"12",md:"8"},{default:o(()=>[G]),_:1})]),_:1}),l(_,{justify:"center",class:"mt-8"},{default:o(()=>[l(u,{cols:"12",sm:"12",md:"12",lg:"12"},{default:o(()=>[V.value?(g(),S("div",H,[l(T,{title:"New Application",loading:q.value,"no-actions":""},{default:o(()=>[l(r(R),{ref_key:"refForm",ref:b,onSubmit:I(()=>{},["prevent"]),class:"form-padding"},{default:o(()=>[l(_,null,{default:o(()=>[l(z),l(u,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=a=>v.value=a),items:r(i).countries,"item-title":"name","item-value":"id",label:"Country to Apply",placeholder:"Select Country",rules:["requiredValidator"in e?e.requiredValidator:r(f)]},null,8,["modelValue","items","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=a=>k.value=a),items:B,label:"Country of Student Passport",placeholder:"Select Country of Student's Passport",rules:["requiredValidator"in e?e.requiredValidator:r(f)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=a=>n.value=a),items:r(i).intakes,"item-title":"intake_name","item-value":"intake_id",label:"Intake",placeholder:"Select Intake",rules:["requiredValidator"in e?e.requiredValidator:r(f)],disabled:!v.value},null,8,["modelValue","items","rules","disabled"])]),_:1}),l(u,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:m.value,"onUpdate:modelValue":t[3]||(t[3]=a=>m.value=a),items:r(i).courseTypes,"item-title":"name","item-value":"id",label:"Course Type",placeholder:"Select Course Type",rules:["requiredValidator"in e?e.requiredValidator:r(f)],disabled:!n.value},null,8,["modelValue","items","rules","disabled"])]),_:1}),l(u,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:d.value,"onUpdate:modelValue":t[4]||(t[4]=a=>d.value=a),items:r(i).universities,"item-title":"university_name","item-value":"university_id",label:"University",placeholder:"Select University",rules:["requiredValidator"in e?e.requiredValidator:r(f)],disabled:!m.value},null,8,["modelValue","items","rules","disabled"])]),_:1}),l(u,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:p.value,"onUpdate:modelValue":t[5]||(t[5]=a=>p.value=a),items:r(i).courseDetails,"item-title":"course_name","item-value":"id",label:"Course",placeholder:"Select Course",rules:["requiredValidator"in e?e.requiredValidator:r(f)],disabled:!d.value},null,8,["modelValue","items","rules","disabled"])]),_:1}),l(u,{cols:"12",class:"d-flex gap-4 justify-end"},{default:o(()=>[l(F,{onClick:t[6]||(t[6]=a=>A()),type:"submit",color:"primary"},{default:o(()=>[N("Next")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1},8,["loading"])])):U("",!0),C.value?(g(),S("div",J,[l(M,{courseDetails:r(i).getPreparedCourseDetails,"onUpdate:showCourseDetails":t[7]||(t[7]=a=>C.value=a),"onUpdate:showApplicationForm":t[8]||(t[8]=a=>V.value=a)},null,8,["courseDetails"])])):U("",!0)]),_:1})]),_:1})]),_:1})}}};export{Re as default};