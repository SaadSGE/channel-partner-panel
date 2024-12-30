import{u as S}from"./fileStore-Cuwz1UBQ.js";import T from"./student-information-CKG-ApvD.js";import F from"./upload-document-CDlifZLv.js";import{V as v}from"./VCard-BOFUYVjh.js";import{V as p}from"./VCardText-Io1XnNxC.js";import{V as L}from"./VImg-DMIafN81.js";import{a as V,V as N}from"./VRow-lZn-sppq.js";import{V as B,a as w,b as U,c as D}from"./VWindowItem-2FXa2KM8.js";import{r as n,o as u,f as q,e as o,b as t,d as e,x as i,c as f,v as m,a9 as g,z as b}from"./main-Chpg_S2F.js";import"./validators-D02V_TYF.js";import"./helpers-FtjfYHxl.js";import"./AppCardActions-Cn0i-UA_.js";import"./index-zlu4swji.js";import"./dialog-transition-BhHG9wUE.js";import"./forwardRefs-D3j0TLhE.js";import"./scopeId-Bs5Lp4Sg.js";import"./index-C4-GU5od.js";import"./AppAutocomplete-yqpjlxUf.js";import"./VInput-DD7K0I3z.js";import"./VSelect-BXjkeAaU.js";import"./VTextField-TFJRZd5d.js";import"./VList-DHEQ2-yk.js";import"./ssrBoot-CwN-h_rL.js";import"./VAvatar-BibMrmet.js";import"./VDivider-B2cQESyw.js";import"./VMenu-CLf3Moh0.js";import"./VCheckboxBtn-BzQ2N5Gd.js";import"./VChip-m1kqjwJD.js";import"./filter-C7BqSIMx.js";import"./AppDateTimePicker-gLl6XTMx.js";import"./AppTextField-9nxRsrZx.js";import"./commonFunction-BJISIr2J.js";import"./submitApplication-s0L0MxKP.js";import"./sweetalert2-z6gKu1nJ.js";import"./VForm-BJ7hVFMt.js";import"./VRadioGroup-sakmDKfE.js";import"./VSpacer-CkTRFcGW.js";/* empty css              */import"./VDialog-4E_d2k8T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./studentStore-DXXjRNaM.js";import"./vue-filepond.esm-V7BZH694.js";const R={class:"d-flex justify-center align-start pb-0 px-3 pt-3 mb-4 bg-light rounded"},H={style:{color:"black"}},I={class:"mb-4"},M=e("label",{class:"font-weight-bold"},"Course Name: ",-1),j={class:"mb-4"},A=e("label",{class:"font-weight-bold"},"Intake: ",-1),E={class:"mb-4"},W=e("label",{class:"font-weight-bold"},"Tuition Fee: ",-1),z={class:"mb-4"},O=e("label",{class:"font-weight-bold"},"Course Duration:",-1),$={class:"mb-4"},G=e("label",{class:"font-weight-bold"},"Course Label: ",-1),J={class:"mb-4"},K=e("label",{class:"font-weight-bold"},"Location: ",-1),P={key:0},Q=["innerHTML"],X=["innerHTML"],Y={key:1},Z={key:2},ze={__name:"course-details",props:{courseDetails:{type:Object,required:!0}},emits:["update:showCourseDetails","update:showApplicationForm"],setup(a,{emit:k}){const r=n("item-1"),_=k,C=()=>{_("update:showCourseDetails",!1),_("update:showApplicationForm",!0)},x=S(),d=n(!0),c=n(!1),h=n(!1),y=()=>{x.resetFiles(),c.value=!0,d.value=!1};return(ee,s)=>(u(),q(N,null,{default:o(()=>[t(V,{md:"3",sm:"3"},{default:o(()=>[t(v,null,{default:o(()=>[t(p,null,{default:o(()=>[e("div",R,[t(L,{src:a.courseDetails.universityLogo,width:"145",height:"140"},null,8,["src"])]),e("div",H,[e("div",I,[M,e("span",null,i(a.courseDetails.courseName),1)]),e("div",j,[A,e("span",null,i(a.courseDetails.intake),1)]),e("div",E,[W,e("span",null,i(a.courseDetails.tuitionFee),1)]),e("div",z,[O,e("span",null,i(a.courseDetails.courseDuration),1)]),e("div",$,[G,e("span",null,i(a.courseDetails.courseLabel),1)]),e("div",J,[K,e("span",null,i(a.courseDetails.location),1)])])]),_:1})]),_:1})]),_:1}),t(V,{md:"9",sm:"9"},{default:o(()=>[d.value?(u(),f("div",P,[t(v,null,{default:o(()=>[t(B,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=l=>r.value=l)},{default:o(()=>[t(w,null,{default:o(()=>[m("Academic Requirement")]),_:1}),t(w,null,{default:o(()=>[m("English Requirement")]),_:1})]),_:1},8,["modelValue"]),t(p,null,{default:o(()=>[t(U,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=l=>r.value=l)},{default:o(()=>[t(D,{value:"item-1"},{default:o(()=>[e("div",{innerHTML:a.courseDetails.academicRequirement},null,8,Q)]),_:1}),t(D,{value:"item-2"},{default:o(()=>[e("div",{innerHTML:a.courseDetails.englishRequirement},null,8,X)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(p,{class:"d-flex justify-space-between flex-wrap gap-4"},{default:o(()=>[t(g,{color:"secondary",onClick:s[2]||(s[2]=l=>C())},{default:o(()=>[m("Back")]),_:1}),t(g,{color:"primary",onClick:y},{default:o(()=>[m("Next")]),_:1})]),_:1})])):b("",!0),c.value?(u(),f("div",Y,[t(F,{"onUpdate:uploadDocumentShow":s[3]||(s[3]=l=>c.value=l),"onUpdate:studentFormShow":s[4]||(s[4]=l=>h.value=l),"onUpdate:courseDetailsShow":s[5]||(s[5]=l=>d.value=l)})])):b("",!0),h.value?(u(),f("div",Z,[t(T)])):b("",!0)]),_:1})]),_:1}))}};export{ze as default};