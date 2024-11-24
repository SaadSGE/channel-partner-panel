import{u as T}from"./fileStore-t8LSOH75.js";import S from"./student-information-uOkY3e8t.js";import F from"./upload-document-0PMqAwyE.js";import{V as v}from"./VCard-ZAB0EwIJ.js";import{V as c}from"./VCardText-1-ZGu5dD.js";import{V as L}from"./VImg-Bii9QvBb.js";import{a as V,V as N}from"./VRow-CD6ZT1z3.js";import{V as B,a as w,b as q,c as D}from"./VWindowItem-BQ50jDqE.js";import{r as n,o as u,f as R,e as o,b as t,d as e,x as i,c as p,v as m,a8 as g,z as f}from"./main-CVWDuzes.js";import"./validators-CQ_Qiucq.js";import"./helpers-BzhXonZD.js";import"./AppCardActions-LPj--HwO.js";import"./index-CwN3L1A2.js";import"./dialog-transition-DwFLikRc.js";import"./forwardRefs-D3j0TLhE.js";import"./lazy-BVsDlChf.js";import"./scopeId-BngyCZ-L.js";import"./index-CLkLnF4x.js";import"./AppAutocomplete-DKdotpjg.js";import"./VTextField-BN3Dgytm.js";import"./VSelect-Bo02E6yO.js";import"./VList-zhex7iho.js";import"./ssrBoot-GkZ9Y4H-.js";import"./VAvatar-CniKLuiJ.js";import"./VDivider-BYqXoHql.js";import"./VMenu-2fVyirbu.js";import"./VCheckboxBtn-DPlaWpS6.js";import"./VChip-BnZebdch.js";import"./VSlideGroup-B-76nVKh.js";import"./filter-CRIqhMmW.js";import"./AppDateTimePicker-Yvp8-hAT.js";import"./AppTextField-DnblfOQu.js";import"./commonFunction-CSVmfta4.js";import"./submitApplication-DwKUV0tg.js";import"./sweetalert2-z6gKu1nJ.js";import"./VForm-B8qs5EG-.js";import"./VRadioGroup-BH1bhrZf.js";import"./VSpacer-Cu63oyPP.js";/* empty css              */import"./VDialog-C11j6Au2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-filepond.esm-Caq5CsWe.js";import"./studentStore-CEsniVwX.js";const U={class:"d-flex justify-center align-start pb-0 px-3 pt-3 mb-4 bg-light rounded"},H={style:{color:"black"}},I={class:"mb-4"},M=e("label",{class:"font-weight-bold"},"Course Name: ",-1),j={class:"mb-4"},A=e("label",{class:"font-weight-bold"},"Intake: ",-1),E={class:"mb-4"},W=e("label",{class:"font-weight-bold"},"Tuition Fee: ",-1),z={class:"mb-4"},O=e("label",{class:"font-weight-bold"},"Course Duration:",-1),$={class:"mb-4"},G=e("label",{class:"font-weight-bold"},"Course Label: ",-1),J={class:"mb-4"},K=e("label",{class:"font-weight-bold"},"Location: ",-1),P={key:0},Q=["innerHTML"],X=["innerHTML"],Y={key:1},Z={key:2},Oe={__name:"course-details",props:{courseDetails:{type:Object,required:!0}},emits:["update:showCourseDetails","update:showApplicationForm"],setup(l,{emit:k}){const r=n("item-1"),_=k,C=()=>{_("update:showCourseDetails",!1),_("update:showApplicationForm",!0)},x=T(),b=n(!0),d=n(!1),h=n(!1),y=()=>{x.resetFiles(),d.value=!0,b.value=!1};return(ee,s)=>(u(),R(N,null,{default:o(()=>[t(V,{md:"3",sm:"3"},{default:o(()=>[t(v,null,{default:o(()=>[t(c,null,{default:o(()=>[e("div",U,[t(L,{src:l.courseDetails.universityLogo,width:"145",height:"140"},null,8,["src"])]),e("div",H,[e("div",I,[M,e("span",null,i(l.courseDetails.courseName),1)]),e("div",j,[A,e("span",null,i(l.courseDetails.intake),1)]),e("div",E,[W,e("span",null,i(l.courseDetails.tuitionFee),1)]),e("div",z,[O,e("span",null,i(l.courseDetails.courseDuration),1)]),e("div",$,[G,e("span",null,i(l.courseDetails.courseLabel),1)]),e("div",J,[K,e("span",null,i(l.courseDetails.location),1)])])]),_:1})]),_:1})]),_:1}),t(V,{md:"9",sm:"9"},{default:o(()=>[b.value?(u(),p("div",P,[t(v,null,{default:o(()=>[t(B,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=a=>r.value=a)},{default:o(()=>[t(w,null,{default:o(()=>[m("Academic Requirement")]),_:1}),t(w,null,{default:o(()=>[m("English Requirement")]),_:1})]),_:1},8,["modelValue"]),t(c,null,{default:o(()=>[t(q,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=a=>r.value=a)},{default:o(()=>[t(D,{value:"item-1"},{default:o(()=>[e("div",{innerHTML:l.courseDetails.academicRequirement},null,8,Q)]),_:1}),t(D,{value:"item-2"},{default:o(()=>[e("div",{innerHTML:l.courseDetails.englishRequirement},null,8,X)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(c,{class:"d-flex justify-space-between flex-wrap gap-4"},{default:o(()=>[t(g,{color:"secondary",onClick:s[2]||(s[2]=a=>C())},{default:o(()=>[m("Back")]),_:1}),t(g,{color:"primary",onClick:y},{default:o(()=>[m("Next")]),_:1})]),_:1})])):f("",!0),d.value?(u(),p("div",Y,[t(F,{"onUpdate:uploadDocumentShow":s[3]||(s[3]=a=>d.value=a),"onUpdate:studentFormShow":s[4]||(s[4]=a=>h.value=a)})])):f("",!0),h.value?(u(),p("div",Z,[t(S)])):f("",!0)]),_:1})]),_:1}))}};export{Oe as default};
