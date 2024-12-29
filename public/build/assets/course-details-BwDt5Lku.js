import{u as S}from"./fileStore-DewosusF.js";import T from"./student-information-CSYstHgj.js";import F from"./upload-document-BGxSP3yF.js";import{V as v}from"./VCard-CiUXVH6b.js";import{V as p}from"./VCardText-haI9Z-IX.js";import{V as L}from"./VImg-CXAH5jII.js";import{a as V,V as N}from"./VRow-s-aEvbE2.js";import{V as B,a as w,b as U,c as D}from"./VWindowItem-coQBpkBo.js";import{r as n,o as u,f as q,e as o,b as t,d as e,x as i,c as f,v as m,a9 as g,z as b}from"./main-C3zi_SKQ.js";import"./validators-HG5DkttQ.js";import"./helpers-CofNusnb.js";import"./AppCardActions-BzFDC1pP.js";import"./index-DPXcXuYg.js";import"./dialog-transition-CxaPI8Wz.js";import"./forwardRefs-D3j0TLhE.js";import"./scopeId-CNDVdJ3R.js";import"./index-C8YGC3Io.js";import"./AppAutocomplete-BHNP4SGW.js";import"./VInput-DkaOtTDM.js";import"./VSelect-C09sQe_X.js";import"./VTextField-Dognc3Fg.js";import"./VList-Bmx0u8vq.js";import"./ssrBoot-d-rE-ebl.js";import"./VAvatar-DNScsPhF.js";import"./VDivider-Byc_tc4C.js";import"./VMenu-mUALx6PX.js";import"./VCheckboxBtn-ChwCrhEn.js";import"./VChip-Drmygec1.js";import"./filter-CQxRTFIJ.js";import"./AppDateTimePicker-Coy05tHX.js";import"./AppTextField-DFkCpbYz.js";import"./commonFunction-DaV-cpx8.js";import"./submitApplication-Cpo3Wa5j.js";import"./sweetalert2-z6gKu1nJ.js";import"./VForm-BglYL0G4.js";import"./VRadioGroup-CwVE70Kn.js";import"./VSpacer-ZOaaLL5l.js";/* empty css              */import"./VDialog-3Jy0gPfO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./studentStore-44oXF-Ou.js";import"./vue-filepond.esm-C6Z9rRm3.js";const R={class:"d-flex justify-center align-start pb-0 px-3 pt-3 mb-4 bg-light rounded"},H={style:{color:"black"}},I={class:"mb-4"},M=e("label",{class:"font-weight-bold"},"Course Name: ",-1),j={class:"mb-4"},A=e("label",{class:"font-weight-bold"},"Intake: ",-1),E={class:"mb-4"},W=e("label",{class:"font-weight-bold"},"Tuition Fee: ",-1),z={class:"mb-4"},O=e("label",{class:"font-weight-bold"},"Course Duration:",-1),$={class:"mb-4"},G=e("label",{class:"font-weight-bold"},"Course Label: ",-1),J={class:"mb-4"},K=e("label",{class:"font-weight-bold"},"Location: ",-1),P={key:0},Q=["innerHTML"],X=["innerHTML"],Y={key:1},Z={key:2},ze={__name:"course-details",props:{courseDetails:{type:Object,required:!0}},emits:["update:showCourseDetails","update:showApplicationForm"],setup(a,{emit:k}){const r=n("item-1"),_=k,C=()=>{_("update:showCourseDetails",!1),_("update:showApplicationForm",!0)},x=S(),d=n(!0),c=n(!1),h=n(!1),y=()=>{x.resetFiles(),c.value=!0,d.value=!1};return(ee,s)=>(u(),q(N,null,{default:o(()=>[t(V,{md:"3",sm:"3"},{default:o(()=>[t(v,null,{default:o(()=>[t(p,null,{default:o(()=>[e("div",R,[t(L,{src:a.courseDetails.universityLogo,width:"145",height:"140"},null,8,["src"])]),e("div",H,[e("div",I,[M,e("span",null,i(a.courseDetails.courseName),1)]),e("div",j,[A,e("span",null,i(a.courseDetails.intake),1)]),e("div",E,[W,e("span",null,i(a.courseDetails.tuitionFee),1)]),e("div",z,[O,e("span",null,i(a.courseDetails.courseDuration),1)]),e("div",$,[G,e("span",null,i(a.courseDetails.courseLabel),1)]),e("div",J,[K,e("span",null,i(a.courseDetails.location),1)])])]),_:1})]),_:1})]),_:1}),t(V,{md:"9",sm:"9"},{default:o(()=>[d.value?(u(),f("div",P,[t(v,null,{default:o(()=>[t(B,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=l=>r.value=l)},{default:o(()=>[t(w,null,{default:o(()=>[m("Academic Requirement")]),_:1}),t(w,null,{default:o(()=>[m("English Requirement")]),_:1})]),_:1},8,["modelValue"]),t(p,null,{default:o(()=>[t(U,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=l=>r.value=l)},{default:o(()=>[t(D,{value:"item-1"},{default:o(()=>[e("div",{innerHTML:a.courseDetails.academicRequirement},null,8,Q)]),_:1}),t(D,{value:"item-2"},{default:o(()=>[e("div",{innerHTML:a.courseDetails.englishRequirement},null,8,X)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(p,{class:"d-flex justify-space-between flex-wrap gap-4"},{default:o(()=>[t(g,{color:"secondary",onClick:s[2]||(s[2]=l=>C())},{default:o(()=>[m("Back")]),_:1}),t(g,{color:"primary",onClick:y},{default:o(()=>[m("Next")]),_:1})]),_:1})])):b("",!0),c.value?(u(),f("div",Y,[t(F,{"onUpdate:uploadDocumentShow":s[3]||(s[3]=l=>c.value=l),"onUpdate:studentFormShow":s[4]||(s[4]=l=>h.value=l),"onUpdate:courseDetailsShow":s[5]||(s[5]=l=>d.value=l)})])):b("",!0),h.value?(u(),f("div",Z,[t(T)])):b("",!0)]),_:1})]),_:1}))}};export{ze as default};
