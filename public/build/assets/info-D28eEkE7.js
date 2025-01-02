import{c as k}from"./commonFunction-d2zCghtn.js";import{u as S}from"./fileStore-CiLK-Mc5.js";import{u as P}from"./studentStore-PURWWfuU.js";import{G as I,U as F,E as x,a as C,b as w}from"./UniversityEntry-VTVEfI1E.js";import{r as n,H as B,k as G,o as T,c as N,b as t,e as i,a2 as q,v as a,a9 as m,d as D}from"./main-rAiiXsdI.js";import{i as s}from"./index-C7FPtGEp.js";import{V as L}from"./VCardText-B1XaOe8w.js";import{b as M,V as R}from"./VCard-BnXNTOMD.js";import{V as Y}from"./VForm-D9NCl5KL.js";import"./AppTextField-DmYTd6Wj.js";import"./VInput-DHoDyuf5.js";import"./index-BNNg5QkT.js";import"./index-DJAqJtim.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-ENbq1Mml.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VTable-DGs3k_Vu.js";import"./VRow-CniF1p1V.js";/* empty css              */import"./validators-s9ExGhpn.js";import"./helpers-Qc6KRDow.js";import"./AppAutocomplete-W-pUNgKs.js";import"./VSelect-DZps_XtY.js";import"./VList-B00F7rJx.js";import"./ssrBoot-CrRLApXi.js";import"./VAvatar-Beus088c.js";import"./VImg-r7JonUwe.js";import"./VDivider-BSC9O3QS.js";import"./dialog-transition-C_YyFp2L.js";import"./scopeId-BDZL6E0l.js";import"./VMenu-D43ItwZF.js";import"./VCheckboxBtn-B7aWkCFW.js";import"./VChip-BYboZiGy.js";import"./filter-CtD6SXQX.js";import"./AppSelect-CMySccpi.js";import"./AppDateTimePicker-CxNHMBCo.js";import"./VRadioGroup-BHGLwKFd.js";const j={class:"submit-btn-flex"},Ie={__name:"info",emits:["back"],setup(z,{emit:u}){const p=S(),l=n(null),d=k(),y=n(!0),f=P(),e=n({generalInfo:{first_name:"",last_name:"",email:"",mobile:"",date_of_birth:"",gender:"",passport_number:"",address:"",city:"",country:"",visa_refusal:"no"},universityEntry:[{country_id:"",intake_id:"",course_type:"",university_id:"",course_id:""}],educationalHistory:[{degree:"",institution:"",passingYear:"",result:""}],englishProficiency:[{proficiencyTitle:"",overallScore:null,reading:null,writing:null,speaking:null,listening:null}],employmentHistory:[{company_name:"",designation:"",year:""}]});B(async()=>{await d.getUniqueCountries(),y.value=!1});const v=G(),h=u,g=()=>{h("back")},_=o=>{e.value.generalInfo=o},E=o=>{e.value.universityEntry=o},H=o=>{e.value.educationalHistory=o},b=o=>{e.value.englishProficiency=o},U=o=>{e.value.employmentHistory=o},V=async()=>{var r;if(!(await((r=l.value)==null?void 0:r.validate())).valid){s("Please fill all necessary fields before submitting",{type:"error",position:"top-right",theme:"colored"});return}try{const c=await f.storeStudent({generalInfo:e.value.generalInfo,universityEntry:e.value.universityEntry,educationalHistory:e.value.educationalHistory,englishProficiency:e.value.englishProficiency,employmentHistory:e.value.employmentHistory,documentPaths:p.filePaths});s("Student information saved successfully",{type:"success",position:"top-right",theme:"colored"}),v.push({name:"student-record-all-record"})}catch(c){s("Failed to save student information",{type:"error",position:"top-right",theme:"colored"}),console.error("Failed to create student:",c)}};return(o,r)=>(T(),N("div",null,[t(m,{color:"secondary",class:"mb-4",onClick:g},{default:i(()=>[t(q,{start:"",icon:"tabler-arrow-left"}),a(" Back ")]),_:1}),t(R,null,{default:i(()=>[t(L,null,{default:i(()=>[t(M,{class:"text-center"},{default:i(()=>[a("Student Information")]),_:1}),t(Y,{ref_key:"refForm",ref:l,class:"form-padding"},{default:i(()=>[t(I,{class:"mt-3","general-info":e.value.generalInfo,onUpdateGeneralInfo:_},null,8,["general-info"]),t(F,{class:"mt-3","university-entry":e.value.universityEntry,onUpdateUniversityEntry:E},null,8,["university-entry"]),t(x,{class:"mt-3","educational-history":e.value.educationalHistory,onUpdateEducationalHistory:H},null,8,["educational-history"]),t(C,{class:"mt-3","english-proficiency":e.value.englishProficiency,onUpdateEnglishProficiency:b},null,8,["english-proficiency"]),t(w,{class:"mt-3","employment-history":e.value.employmentHistory,onUpdateEmploymentHistory:U},null,8,["employment-history"]),D("div",j,[t(m,{color:"primary",onClick:V},{default:i(()=>[a("Submit")]),_:1})])]),_:1},512)]),_:1})]),_:1})]))}};export{Ie as default};
