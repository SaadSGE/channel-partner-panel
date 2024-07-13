import{r as f}from"./validators-DpYrMFzk.js";import{k as j,r as i,a5 as y,H as z,w as C,o as b,c as q,b as a,e as u,n as v,a6 as E,a7 as G,v as H,z as g,F as K}from"./main-CDRPFaNY.js";import{_ as J}from"./AppAutocomplete-CEetkUOi.js";import{c as O}from"./commonFunction-BRmT-kOl.js";import Q from"./course-details-CTCkogtW.js";import{V as W}from"./VForm-DD91z2_Q.js";import{V as X,a as c}from"./VRow-DG171xrl.js";import{V as Y}from"./VCard-CUakZSRI.js";import"./helpers-DK5QwNv0.js";import"./form-DFl-qzSd.js";import"./VSelect-B4EfN1tr.js";import"./VTextField-rFxScxsr.js";/* empty css                   */import"./VCounter-BFwuUf1O.js";import"./index-BXzSVUU4.js";import"./index-CVHqd1oZ.js";import"./VField-Bs2pjaM1.js";import"./easing-CjukEv2V.js";import"./VInput-Bw6BBFIY.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-CnOzWmr-.js";import"./ssrBoot-CTL0PgqY.js";import"./VAvatar-BAMcoFxP.js";import"./VImg-SuPXRRgz.js";import"./VDivider-BsQtjb1N.js";import"./dialog-transition-CA-i_Qve.js";import"./VMenu-8pAFPFaM.js";import"./VOverlay-B6gQtAW1.js";import"./lazy-5O8aYZ9w.js";import"./scopeId-Bse5Au55.js";import"./VCheckboxBtn-uLs-IoX7.js";import"./VSelectionControl-DTKwqzdb.js";import"./VChip-7wixwROe.js";import"./VSlideGroup-B0HMsFaF.js";import"./filter-B01bHWDc.js";import"./api-DZn48rN0.js";import"./index-B3bPRkoL.js";import"./student-information-DZZdoZHp.js";import"./AppDateTimePicker-DuoPPVgy.js";import"./AppTextField-BLOHmwRX.js";import"./fileStore-BkQr9UTO.js";import"./sweetalert2-z6gKu1nJ.js";import"./VRadioGroup-jkR27Pgg.js";import"./VCardText-BGI6sgVI.js";import"./VSpacer-CPC2fxWS.js";/* empty css              */import"./VDialog-CEddXehk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./upload-document-DrOIaIs7.js";import"./filepond-plugin-image-preview.esm-D6lRe-d6.js";import"./VTabs-DMqwAVkg.js";import"./VWindowItem-CFTBvGH6.js";const Z={key:0},x={key:1},xe={__name:"new",setup(ee){j();const o=O(),n=i(""),S=i(""),s=i(null),m=i(null),d=i(null),p=i(null);i();const U=i(),I=["Bangladesh","Nigeria","Sri Lanka","India","Bhutan","Ghana"],D=i(),A=i(),B=i(),V=i();i({courseName:"",intake:"",tuitionFee:"",courseDuration:"",courseLabel:"",location:"",universityLogo:"",academicRequirement:"",englishRequirement:""});const F=i(null),k=i(!0),w=i(!1),N=()=>{F.value.validate().then(l=>{console.log(l),l.valid&&(w.value=!0,k.value=!1)})},T=y(()=>o.getFilteredCourseDetails(n.value,p.value,s.value,d.value));z(async()=>{await o.getCountryIntakeUniversityCourse(),await o.getCourses(),await o.getIntakes(),await o.getUniversities(),await o.getCourseDetails(),V.value=o.countryIntakeUniversityCourse,U.value=o.countries,B.value=o.courses,D.value=o.intakes,A.value=o.universities});const _=l=>{const e=new Set;return l.filter(r=>{const t=e.has(r.id);return e.add(r.id),!t})},h=(l,e)=>{const r=new Set;return l.filter(t=>{const P=r.has(t[e]);return r.add(t[e]),!P})},R=y(()=>{const l=V.value.filter(e=>e.country_id===n.value).map(e=>({id:e.intake_id,name:e.intake_name}));return _(l)}),L=y(()=>{const l=V.value.filter(e=>e.country_id===n.value&&e.intake_id===s.value).map(e=>({id:e.course_type,name:e.course_type}));return h(l,"id")}),$=y(()=>{const l=V.value.filter(e=>e.country_id===n.value&&e.intake_id===s.value&&e.course_type===m.value).map(e=>({id:e.university_id,name:e.university_name}));return _(l)}),M=y(()=>{const l=V.value.filter(e=>e.country_id===n.value&&e.intake_id===s.value&&e.course_type===m.value&&e.university_id===d.value).map(e=>({id:e.course_id,name:e.course_name}));return _(l)});return C(n,l=>{s.value=null,m.value=null,d.value=null,p.value=null}),C(s,l=>{m.value=null,d.value=null,p.value=null}),C(m,l=>{d.value=null,p.value=null}),C(d,l=>{p.value=null}),(l,e)=>{const r=J;return b(),q(K,null,[k.value?(b(),q("div",Z,[a(Y,{title:"New Application"},{default:u(()=>[a(v(W),{ref_key:"refForm",ref:F,onSubmit:E(()=>{},["prevent"]),class:"form-padding"},{default:u(()=>[a(X,null,{default:u(()=>[a(c,{cols:"12",md:"6"},{default:u(()=>[a(r,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t),items:U.value,"item-title":t=>t.name,"item-value":t=>t.id,label:"Country to Apply",placeholder:"Select Country",rules:["requiredValidator"in l?l.requiredValidator:v(f)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),a(c,{cols:"12",md:"6"},{default:u(()=>[a(r,{modelValue:S.value,"onUpdate:modelValue":e[1]||(e[1]=t=>S.value=t),items:I,label:"Country of Student Passport",placeholder:"Select Country of Student's Passport",rules:["requiredValidator"in l?l.requiredValidator:v(f)]},null,8,["modelValue","rules"])]),_:1}),a(c,{cols:"12",md:"6"},{default:u(()=>[a(r,{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=t=>s.value=t),items:n.value?R.value:[{name:"Select Country First",id:null}],"item-title":t=>t.name,"item-value":t=>t.id,label:"Intake",placeholder:"Select Intake",rules:["requiredValidator"in l?l.requiredValidator:v(f)],disabled:!n.value},null,8,["modelValue","items","item-title","item-value","rules","disabled"])]),_:1}),a(c,{cols:"12",md:"6"},{default:u(()=>[a(r,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=t=>m.value=t),items:s.value?L.value:[{name:"Select Intake First",id:null}],"item-title":t=>t.name,"item-value":t=>t.id,label:"Course Type",placeholder:"Select Course Type",rules:["requiredValidator"in l?l.requiredValidator:v(f)],disabled:!s.value},null,8,["modelValue","items","item-title","item-value","rules","disabled"])]),_:1}),a(c,{cols:"12",md:"6"},{default:u(()=>[a(r,{modelValue:d.value,"onUpdate:modelValue":e[4]||(e[4]=t=>d.value=t),items:m.value?$.value:[{name:"Select Course Type First",id:null}],"item-title":t=>t.name,"item-value":t=>t.id,label:"University",placeholder:"Select University",rules:["requiredValidator"in l?l.requiredValidator:v(f)],disabled:!m.value},null,8,["modelValue","items","item-title","item-value","rules","disabled"])]),_:1}),a(c,{cols:"12",md:"6"},{default:u(()=>[a(r,{modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=t=>p.value=t),items:d.value?M.value:[{name:"Select University First",id:null}],"item-title":t=>t.name,"item-value":t=>t.id,label:"Course",placeholder:"Select Course",rules:["requiredValidator"in l?l.requiredValidator:v(f)],disabled:!d.value},null,8,["modelValue","items","item-title","item-value","rules","disabled"])]),_:1}),a(c,{cols:"12",class:"d-flex gap-4 justify-end"},{default:u(()=>[a(G,{onClick:e[6]||(e[6]=t=>N()),type:"submit",color:"primary"},{default:u(()=>[H("Next")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})])):g("",!0),w.value?(b(),q("div",x,[a(Q,{courseDetails:T.value,"onUpdate:showCourseDetails":e[7]||(e[7]=t=>w.value=t),"onUpdate:showApplicationForm":e[8]||(e[8]=t=>k.value=t)},null,8,["courseDetails"])])):g("",!0)],64)}}};export{xe as default};
