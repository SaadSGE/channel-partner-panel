import{a as T}from"./submitApplication-D7eXtQQh.js";import S from"./student-information-C_IZRSUY.js";import F from"./upload-document-B9WP1NgW.js";import{V as v}from"./VCard-C0bM0ZXG.js";import{V as c}from"./VCardText-DuS4qxmo.js";import{V as L}from"./VImg-DFj61J6e.js";import{a as V,V as N}from"./VRow-CT0QuKMD.js";import{V as B,a as w,b as q,c as D}from"./VWindowItem-CFHEnjii.js";import{r as n,o as u,f as R,e as o,b as t,d as e,x as i,c as p,v as m,a7 as g,z as f}from"./main-DPb0_12f.js";import"./api-CbkWr8Ve.js";import"./index-BYrzgnBV.js";import"./helpers-D6joOrZs.js";import"./validators-WxtbmeC2.js";import"./AppCardActions-D1DIha3j.js";import"./index-RtQTYc-4.js";import"./dialog-transition-CdQQCviD.js";import"./forwardRefs-D9kYFWgq.js";import"./scopeId-BacWre44.js";import"./index-D5BOVv8n.js";import"./AppAutocomplete-auFazs0X.js";import"./VTextField-9aIjmxOS.js";import"./VSelect-DwHgvjnN.js";import"./VList-BfLBVeHb.js";import"./ssrBoot-WBVlJHJ4.js";import"./VAvatar-DBQAuZOP.js";import"./VDivider-B8LX-A2l.js";import"./VMenu-y1B7IMSs.js";import"./VCheckboxBtn-DHRGWJBW.js";import"./VChip-C8WHXIHk.js";import"./filter-CA0zSWB2.js";import"./AppDateTimePicker-lsCaIz4-.js";import"./AppTextField-CFn_jv_O.js";import"./commonFunction-U3XaDVDG.js";import"./sweetalert2-z6gKu1nJ.js";import"./VForm-BlnZ_x-m.js";import"./VRadioGroup-BZM3xHVj.js";import"./VSpacer-CA8JUBl4.js";/* empty css              */import"./VDialog-CP1IxFsu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-filepond.esm-CPMzZiyU.js";import"./studentStore-BuwU8nMM.js";const U={class:"d-flex justify-center align-start pb-0 px-3 pt-3 mb-4 bg-light rounded"},H={style:{color:"black"}},I={class:"mb-4"},M=e("label",{class:"font-weight-bold"},"Course Name: ",-1),j={class:"mb-4"},A=e("label",{class:"font-weight-bold"},"Intake: ",-1),E={class:"mb-4"},W=e("label",{class:"font-weight-bold"},"Tuition Fee: ",-1),z={class:"mb-4"},O=e("label",{class:"font-weight-bold"},"Course Duration:",-1),$={class:"mb-4"},G=e("label",{class:"font-weight-bold"},"Course Label: ",-1),J={class:"mb-4"},K=e("label",{class:"font-weight-bold"},"Location: ",-1),P={key:0},Q=["innerHTML"],X=["innerHTML"],Y={key:1},Z={key:2},ze={__name:"course-details",props:{courseDetails:{type:Object,required:!0}},emits:["update:showCourseDetails","update:showApplicationForm"],setup(l,{emit:k}){const r=n("item-1"),_=k,C=()=>{_("update:showCourseDetails",!1),_("update:showApplicationForm",!0)},x=T(),b=n(!0),d=n(!1),h=n(!1),y=()=>{x.resetFiles(),d.value=!0,b.value=!1};return(ee,s)=>(u(),R(N,null,{default:o(()=>[t(V,{md:"3",sm:"3"},{default:o(()=>[t(v,null,{default:o(()=>[t(c,null,{default:o(()=>[e("div",U,[t(L,{src:l.courseDetails.universityLogo,width:"145",height:"140"},null,8,["src"])]),e("div",H,[e("div",I,[M,e("span",null,i(l.courseDetails.courseName),1)]),e("div",j,[A,e("span",null,i(l.courseDetails.intake),1)]),e("div",E,[W,e("span",null,i(l.courseDetails.tuitionFee),1)]),e("div",z,[O,e("span",null,i(l.courseDetails.courseDuration),1)]),e("div",$,[G,e("span",null,i(l.courseDetails.courseLabel),1)]),e("div",J,[K,e("span",null,i(l.courseDetails.location),1)])])]),_:1})]),_:1})]),_:1}),t(V,{md:"9",sm:"9"},{default:o(()=>[b.value?(u(),p("div",P,[t(v,null,{default:o(()=>[t(B,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=a=>r.value=a)},{default:o(()=>[t(w,null,{default:o(()=>[m("Academic Requirement")]),_:1}),t(w,null,{default:o(()=>[m("English Requirement")]),_:1})]),_:1},8,["modelValue"]),t(c,null,{default:o(()=>[t(q,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=a=>r.value=a)},{default:o(()=>[t(D,{value:"item-1"},{default:o(()=>[e("div",{innerHTML:l.courseDetails.academicRequirement},null,8,Q)]),_:1}),t(D,{value:"item-2"},{default:o(()=>[e("div",{innerHTML:l.courseDetails.englishRequirement},null,8,X)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(c,{class:"d-flex justify-space-between flex-wrap gap-4"},{default:o(()=>[t(g,{color:"secondary",onClick:s[2]||(s[2]=a=>C())},{default:o(()=>[m("Back")]),_:1}),t(g,{color:"primary",onClick:y},{default:o(()=>[m("Next")]),_:1})]),_:1})])):f("",!0),d.value?(u(),p("div",Y,[t(F,{"onUpdate:uploadDocumentShow":s[3]||(s[3]=a=>d.value=a),"onUpdate:studentFormShow":s[4]||(s[4]=a=>h.value=a)})])):f("",!0),h.value?(u(),p("div",Z,[t(S)])):f("",!0)]),_:1})]),_:1}))}};export{ze as default};
