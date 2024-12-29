import{c as V}from"./commonFunction-DaV-cpx8.js";import{u as S}from"./fileStore-DewosusF.js";import{u as k}from"./studentStore-44oXF-Ou.js";import{G as P,U as I,E as F,a as x,b as C}from"./UniversityEntry-BGoV4evb.js";import{i as n}from"./index-DPjvp4eR.js";import{r as a,H as w,o as B,c as G,b as t,e as i,a2 as T,v as s,a9 as m,d as N}from"./main-C3zi_SKQ.js";import{V as q}from"./VCardText-haI9Z-IX.js";import{b as D,V as L}from"./VCard-CiUXVH6b.js";import{V as M}from"./VForm-BglYL0G4.js";import"./AppTextField-DFkCpbYz.js";import"./VInput-DkaOtTDM.js";import"./index-DPXcXuYg.js";import"./index-C8YGC3Io.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-Dognc3Fg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VTable-9EnPL_hl.js";import"./VRow-s-aEvbE2.js";/* empty css              */import"./validators-HG5DkttQ.js";import"./helpers-CofNusnb.js";import"./AppAutocomplete-BHNP4SGW.js";import"./VSelect-C09sQe_X.js";import"./VList-Bmx0u8vq.js";import"./ssrBoot-d-rE-ebl.js";import"./VAvatar-DNScsPhF.js";import"./VImg-CXAH5jII.js";import"./VDivider-Byc_tc4C.js";import"./dialog-transition-CxaPI8Wz.js";import"./scopeId-CNDVdJ3R.js";import"./VMenu-mUALx6PX.js";import"./VCheckboxBtn-ChwCrhEn.js";import"./VChip-Drmygec1.js";import"./filter-CQxRTFIJ.js";import"./AppSelect-DUSpzFBi.js";import"./AppDateTimePicker-Coy05tHX.js";import"./VRadioGroup-CwVE70Kn.js";const Y={class:"submit-btn-flex"},ke={__name:"info",emits:["back"],setup(j,{emit:u}){const p=S(),l=a(null),d=V(),y=a(!0),f=k(),e=a({generalInfo:{first_name:"",last_name:"",email:"",mobile:"",date_of_birth:"",gender:"",passport_number:"",address:"",city:"",country:"",visa_refusal:"no"},universityEntry:[{country_id:"",intake_id:"",course_type:"",university_id:"",course_id:""}],educationalHistory:[{degree:"",institution:"",passingYear:"",result:""}],englishProficiency:[{proficiencyTitle:"",overallScore:"",reading:"",writing:"",speaking:"",listening:""}],employmentHistory:[{company_name:"",designation:"",year:""}]});w(async()=>{await d.getUniqueCountries(),y.value=!1});const v=u,h=()=>{v("back")},g=o=>{e.value.generalInfo=o},_=o=>{e.value.universityEntry=o},E=o=>{e.value.educationalHistory=o},H=o=>{e.value.englishProficiency=o},b=o=>{e.value.employmentHistory=o},U=async()=>{var r;if(!(await((r=l.value)==null?void 0:r.validate())).valid){n("Please fill all necessary fields before submitting",{type:"error",position:"top-right",theme:"colored"});return}try{const c=await f.storeStudent({generalInfo:e.value.generalInfo,universityEntry:e.value.universityEntry,educationalHistory:e.value.educationalHistory,englishProficiency:e.value.englishProficiency,employmentHistory:e.value.employmentHistory,documentPaths:p.filePaths});n("Student information saved successfully",{type:"success",position:"top-right",theme:"colored"}),router.push({name:"student-record"})}catch(c){n("Failed to save student information",{type:"error",position:"top-right",theme:"colored"}),console.error("Failed to create student:",c)}};return(o,r)=>(B(),G("div",null,[t(m,{color:"secondary",class:"mb-4",onClick:h},{default:i(()=>[t(T,{start:"",icon:"tabler-arrow-left"}),s(" Back ")]),_:1}),t(L,null,{default:i(()=>[t(q,null,{default:i(()=>[t(D,{class:"text-center"},{default:i(()=>[s("Student Information")]),_:1}),t(M,{ref_key:"refForm",ref:l,class:"form-padding"},{default:i(()=>[t(P,{class:"mt-3","general-info":e.value.generalInfo,onUpdateGeneralInfo:g},null,8,["general-info"]),t(I,{class:"mt-3","university-entry":e.value.universityEntry,onUpdateUniversityEntry:_},null,8,["university-entry"]),t(F,{class:"mt-3","educational-history":e.value.educationalHistory,onUpdateEducationalHistory:E},null,8,["educational-history"]),t(x,{class:"mt-3","english-proficiency":e.value.englishProficiency,onUpdateEnglishProficiency:H},null,8,["english-proficiency"]),t(C,{class:"mt-3","employment-history":e.value.employmentHistory,onUpdateEmploymentHistory:b},null,8,["employment-history"]),N("div",Y,[t(m,{color:"primary",onClick:U},{default:i(()=>[s("Submit")]),_:1})])]),_:1},512)]),_:1})]),_:1})]))}};export{ke as default};
