import{r as n}from"./validators-D1oSM3Jt.js";import{k as Ue,r as o,a5 as Fe,w as Se,H as Te,a as oe,o as Q,c as Re,f as X,e as r,d as S,b as l,J as Ie,a1 as j,z as G,K as Ae,L as De,n as i,v as F,a7 as re,a6 as ue}from"./main-EEGZSpAz.js";import{_ as Ee}from"./AppCardActions-Cd2Q_BYq.js";import{_ as _e}from"./TablePagination-lDQliyJ7.js";import{_ as Be}from"./AppSelect-DRLGZxiP.js";import{_ as he}from"./AppTextField-hqVdejhN.js";import{_ as Ne}from"./AppAutocomplete-dFVHU-fQ.js";import{e as $e,_ as Me}from"./Filters-rWm9XoUe.js";import{_ as ie}from"./ShowMore-OeDyrhd9.js";import{u as Pe}from"./applicationList-D_nRz4f2.js";import{c as ze}from"./commonFunction-e7j06GwD.js";import{u as Le}from"./recordStore-BMkbTlwz.js";/* empty css                         */import{S as Z}from"./sweetalert2-z6gKu1nJ.js";import{V as x,a as u}from"./VRow-DIhs2Kd2.js";import{V as O}from"./form-DIjoop8b.js";import{V as ne}from"./VForm-CYIPsys4.js";import{V as se,b as Qe}from"./VCard-DjDgR-fo.js";import{V as je}from"./VCardText-DcKVb-oC.js";import{V as Ge}from"./VDataTableServer-DYrz1MXQ.js";import"./helpers-NyGTX81Z.js";import"./index-PHfBVrL9.js";import"./VOverlay-CmE-WqWQ.js";import"./easing-CjukEv2V.js";import"./lazy-Di0BWC_0.js";import"./scopeId-gdKbSiHT.js";import"./index-DEpqG4PE.js";import"./VDivider-CrXn8ftj.js";import"./VPagination-CMiC2fRP.js";import"./VSelect-BaPB8cSA.js";import"./VTextField-BrOmDxVD.js";/* empty css                   */import"./VCounter-SOzeLgJG.js";import"./VField-MP45udtL.js";import"./VInput-BqcJsfgj.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-psZMOC0v.js";import"./ssrBoot-DCeQRs9P.js";import"./VAvatar-DBC8BHWd.js";import"./VImg-Df3r8EKV.js";import"./dialog-transition-CZkf91dj.js";import"./VMenu-DWECeUBH.js";import"./VCheckboxBtn-Bv_YfCMt.js";import"./VSelectionControl-BNatTHcN.js";import"./VChip-vNm_X31o.js";import"./VSlideGroup-BI3jjZOS.js";import"./filter-CgZygQhQ.js";import"./AppDateTimePicker-CJqGEfrw.js";import"./api-BB8haixw.js";import"./index-Dz1rBMAR.js";import"./rolePermission-Yq0hcCjy.js";import"./user-CbAHfkn5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css              */import"./VDataTable-DWsajwNj.js";import"./VTable-ByAsw10o.js";const Oe={key:0},Ye=S("span",null,"Edit Record",-1),He={class:"d-flex justify-space-between flex-wrap gap-6 mt-5"},Je={class:"d-flex flex-row gap-4 align-center flex-wrap"},Ke={class:"d-flex gap-1"},xt={__name:"index",props:{userId:{type:String,default:null}},setup(We){Ue();const s=ze(),k=Le();Pe(),$e();const d=o("");o("");const m=o(""),V=o(""),p=o(""),v=o(""),y=o(""),g=o(""),ee=o(null);o();const Y=o(),H=o(),J=o(),de=o(),C=o(""),q=o(""),te=o(),K=o(),T=o(10),A=o(1);o(),o();const D=o(!0),E=o(!1),R=o(!0),I=o(null),le=o(null),me=o(!0);o(!1),o([]),o(0),o(),o(""),o(null);const ae=["Graduate","Post Graduate","Foundation (Pathway)","International Year One (Pathway)"],pe=[{title:"Country",key:"country.name"},{title:"Intake",key:"intake.name"},{title:"University",key:"university.name"},{title:"Course Type",key:"course.type"},{title:"Course Name",key:"course.name"},{title:"Tution Fee",key:"tuition_fee"},{title:"Course Duration",key:"course_duration"},{title:"Academic Requirement",key:"academic_requirement"},{title:"English Requirement",key:"english_requirement"},{title:"Actions",key:"actions",sortable:!1}],_=o(null),B=o(null),h=o(null),N=o("");o(null),o(null),o("");const $=o(null),M=o(null),P=o(null);Fe(()=>s.getFilteredCourseDetails(d.value,v.value,m.value,p.value));const w=async(a=1)=>{U.value=!0;const t=await k.fetchRecord(a,z.value,_.value,B.value,h.value,N.value,$.value,M.value,P.value);te.value=t.data,K.value=t.total,U.value=!1},W=async()=>{d.value="",m.value="",V.value="",p.value="",v.value="",y.value="",g.value="",C.value=`
`,q.value=`
`,await I.value.resetValidation()},ve=async()=>{if(await I.value.validate()){try{const t={countryId:d.value,intakeId:m.value,courseType:V.value,universityId:p.value,course:v.value,tutionFee:y.value,courseDuration:g.value,academicRequirement:C.value,englishRequirement:q.value};await k.submitApplication(t)&&(console.log(k.successMessage),await W(),w(),R.value=!0)}catch(t){console.error("Form submission error:",k.errors,t)}await I.value.resetValidation()}},ce=async()=>{if(await le.value.validate()){try{const t={countryId:d.value,intakeId:m.value,courseType:V.value,universityId:p.value,course:v.value,tutionFee:y.value,courseDuration:g.value,academicRequirement:C.value,englishRequirement:q.value},c=await k.submitEditApplication(ee.value,t);c&&(console.log(c),W(),E.value=!1,D.value=!0,w())}catch(t){console.error("Form submission error:",k.errors,t)}await I.value.resetValidation()}},fe=a=>{D.value=!1,ee.value=a.id,d.value=a.country_id,m.value=a.intake_id,V.value=a.course.type,p.value=a.university_id,v.value=a.course.name,y.value=a.tuition_fee,g.value=a.course_duration,C.value=a.academic_requirement,q.value=a.english_requirement,E.value=!0},Ve=()=>{E.value=!1,D.value=!0,W()},ye=()=>{R.value=!R.value},ge=async a=>{const t={...a};if((await Z.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await k.deleteRecord(t.id),w(),Z.fire("Deleted!","The item has been deleted.","success")}catch{Z.fire("Error!","There was an error deleting the item.","error")}},U=o(!1),z=o(""),Ce=a=>{w(a.page)};return Se([z,_,B,h,N,$,M,P],()=>{w()}),Te(async()=>{U.value=!0,s.countries.length===0&&await s.getCountries(),s.courses.length===0&&await s.getCourses(),s.intakes.length===0&&await s.getIntakes(),s.universities.length===0&&await s.getUniversities(),Y.value=s.countries,de.value=s.courses,H.value=s.intakes,J.value=s.universities,await w(),U.value=!1}),(a,t)=>{const c=oe("IconBtn"),f=Ne,b=he,L=oe("QuillEditor"),qe=Be,ke=_e,be=Ee;return me.value?(Q(),Re("div",Oe,[D.value?(Q(),X(se,{key:0,title:"Add Record"},{append:r(()=>[S("div",null,[(!(a.actionRemove||a.actionRefresh)||a.actionCollapsed)&&!a.noActions?(Q(),X(c,{key:0,onClick:ye},{default:r(()=>[l(j,{size:"20",icon:"tabler-chevron-up",style:Ie({transform:R.value?"rotate(-180deg)":void 0})},null,8,["style"])]),_:1})):G("",!0)])]),default:r(()=>[Ae(l(i(ne),{ref_key:"refForm",ref:I,onSubmit:ue(()=>{},["prevent"]),class:"form-padding"},{default:r(()=>[l(x,null,{default:r(()=>[l(u,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e),items:Y.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Country to Apply",placeholder:"Select Country",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=e=>m.value=e),items:H.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Intake",placeholder:"Select Intake",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:V.value,"onUpdate:modelValue":t[2]||(t[2]=e=>V.value=e),items:ae,label:"Course Type",placeholder:"Select Course Type",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:p.value,"onUpdate:modelValue":t[3]||(t[3]=e=>p.value=e),items:J.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"University",placeholder:"Select University",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:r(()=>[l(b,{modelValue:v.value,"onUpdate:modelValue":t[4]||(t[4]=e=>v.value=e),label:"Course Name.",placeholder:"BSC in Machine Learning",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:r(()=>[l(b,{modelValue:y.value,"onUpdate:modelValue":t[5]||(t[5]=e=>y.value=e),label:"Tuttion Fee (Mention euro or dollar)",placeholder:"1000 euro",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:r(()=>[l(b,{modelValue:g.value,"onUpdate:modelValue":t[6]||(t[6]=e=>g.value=e),label:"Course Duration (Mention years)",placeholder:"2 years",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"12",style:{margin:"auto"}},{default:r(()=>[l(O,{class:"mb-2"},{default:r(()=>[F("Academic Requirement")]),_:1}),l(L,{theme:"snow",content:C.value,"onUpdate:content":t[7]||(t[7]=e=>C.value=e),"content-type":"html"},null,8,["content"])]),_:1}),l(u,{cols:"12",md:"12",style:{margin:"auto"}},{default:r(()=>[l(O,{class:"mb-2"},{default:r(()=>[F("English Requirement")]),_:1}),l(L,{theme:"snow",content:q.value,"onUpdate:content":t[8]||(t[8]=e=>q.value=e),"content-type":"html"},null,8,["content"])]),_:1}),l(u,{cols:"12"},{default:r(()=>[l(re,{onClick:t[9]||(t[9]=e=>ve()),type:"submit",color:"primary",block:""},{default:r(()=>[F(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512),[[De,!R.value]])]),_:1})):G("",!0),E.value?(Q(),X(se,{key:1,class:"mt-2"},{default:r(()=>[l(Qe,{class:"d-flex justify-space-between align-center mt-2 mb-2"},{default:r(()=>[Ye,l(c,{onClick:Ve},{default:r(()=>[l(j,{icon:"tabler-x"})]),_:1})]),_:1}),l(i(ne),{ref_key:"refFormEdit",ref:le,onSubmit:ue(()=>{},["prevent"]),class:"form-padding"},{default:r(()=>[l(x,null,{default:r(()=>[l(u,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:d.value,"onUpdate:modelValue":t[10]||(t[10]=e=>d.value=e),items:Y.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Country to Apply",placeholder:"Select Country",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:m.value,"onUpdate:modelValue":t[11]||(t[11]=e=>m.value=e),items:H.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Intake",placeholder:"Select Intake",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:V.value,"onUpdate:modelValue":t[12]||(t[12]=e=>V.value=e),items:ae,label:"Course Type",placeholder:"Select Course Type",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:r(()=>[l(f,{modelValue:p.value,"onUpdate:modelValue":t[13]||(t[13]=e=>p.value=e),items:J.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"University",placeholder:"Select University",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:r(()=>[l(b,{modelValue:v.value,"onUpdate:modelValue":t[14]||(t[14]=e=>v.value=e),label:"Course Name.",placeholder:"BSC in Machine Learning",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:r(()=>[l(b,{modelValue:y.value,"onUpdate:modelValue":t[15]||(t[15]=e=>y.value=e),label:"Tuttion Fee (Mention euro or dollar)",placeholder:"1000 euro",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:r(()=>[l(b,{modelValue:g.value,"onUpdate:modelValue":t[16]||(t[16]=e=>g.value=e),label:"Course Duration (Mention years)",placeholder:"2 years",rules:["requiredValidator"in a?a.requiredValidator:i(n)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"12",style:{margin:"auto"}},{default:r(()=>[l(O,{class:"mb-2"},{default:r(()=>[F("Academic Requirement")]),_:1}),l(L,{theme:"snow",content:C.value,"onUpdate:content":t[17]||(t[17]=e=>C.value=e),"content-type":"html"},null,8,["content"])]),_:1}),l(u,{cols:"12",md:"12",style:{margin:"auto"}},{default:r(()=>[l(O,{class:"mb-2"},{default:r(()=>[F("English Requirement")]),_:1}),l(L,{theme:"snow",content:q.value,"onUpdate:content":t[18]||(t[18]=e=>q.value=e),"content-type":"html"},null,8,["content"])]),_:1}),l(u,{cols:"12"},{default:r(()=>[l(re,{onClick:t[19]||(t[19]=e=>ce()),type:"submit",color:"primary",block:""},{default:r(()=>[F(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})):G("",!0),l(be,{title:"Course Details",class:"mt-2",loading:U.value,"no-actions":""},{default:r(()=>[l(je,null,{default:r(()=>[l(x,null,{default:r(()=>[l(Me,{"selected-country":_.value,onUpdateCountry:t[20]||(t[20]=e=>_.value=e),"selected-intake":B.value,onUpdateIntake:t[21]||(t[21]=e=>B.value=e),"selected-university2":h.value,onUpdateUniversity2:t[22]||(t[22]=e=>h.value=e),"selected-courseName":N.value,onUpdateCourseName:t[23]||(t[23]=e=>N.value=e),"selected-dateFrom":M.value,onUpdateDateFrom:t[24]||(t[24]=e=>M.value=e),"selected-dateTo":P.value,onUpdateDateTo:t[25]||(t[25]=e=>P.value=e),"selected-editor":$.value,onUpdateEditor:t[26]||(t[26]=e=>$.value=e)},null,8,["selected-country","selected-intake","selected-university2","selected-courseName","selected-dateFrom","selected-dateTo","selected-editor"])]),_:1}),S("div",He,[S("div",null,[l(b,{modelValue:z.value,"onUpdate:modelValue":t[27]||(t[27]=e=>z.value=e),style:{"max-inline-size":"200px","min-inline-size":"200px"},placeholder:"Search Record"},null,8,["modelValue"])]),S("div",Je,[l(qe,{modelValue:T.value,"onUpdate:modelValue":t[28]||(t[28]=e=>T.value=e),items:[10,25,50,100],style:{"inline-size":"6.25rem"}},null,8,["modelValue"])])])]),_:1}),l(Ge,{"items-per-page":T.value,"onUpdate:itemsPerPage":t[30]||(t[30]=e=>T.value=e),page:A.value,"onUpdate:page":t[31]||(t[31]=e=>A.value=e),loading:U.value,"items-length":K.value,headers:pe,items:te.value,"item-value":"total",class:"text-no-wrap text-sm rounded-0","onUpdate:options":Ce},{"item.academic_requirement":r(({item:e})=>[l(ie,{text:e.academic_requirement,lines:3},null,8,["text"])]),"item.english_requirement":r(({item:e})=>[l(ie,{text:e.english_requirement,lines:3},null,8,["text"])]),bottom:r(()=>[l(ke,{page:A.value,"onUpdate:page":t[29]||(t[29]=e=>A.value=e),"items-per-page":T.value,"total-items":K.value},null,8,["page","items-per-page","total-items"])]),"item.actions":r(({item:e})=>[S("div",Ke,[l(c,{onClick:we=>fe(e)},{default:r(()=>[l(j,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),l(c,{onClick:we=>ge(e)},{default:r(()=>[l(j,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items-per-page","page","loading","items-length","items"])]),_:1},8,["loading"])])):G("",!0)}}};export{xt as default};
