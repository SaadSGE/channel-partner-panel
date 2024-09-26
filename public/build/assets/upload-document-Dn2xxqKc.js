import{_ as O}from"./AppAutocomplete-ntipd3-P.js";import{c as j}from"./commonFunction-DaG56h7y.js";import{a as K,u as Y}from"./submitApplication-C1DrsT_D.js";import{v as q,p as z,a as G,b as L}from"./vue-filepond.esm-CI7Lig9V.js";import{S}from"./sweetalert2-z6gKu1nJ.js";import{ao as M,r as u,k as H,w as J,o as x,c as y,b as t,e as r,d as f,F as Q,v as m,x as b,z as g,a7 as V,n as W,R as X,U as Z}from"./main-Bl2S878v.js";import{$ as ee}from"./api-DA03bhL_.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as F,b as B}from"./VCard-BwM2Hv7u.js";import{V as k}from"./VCardText-B8ILYUbj.js";import{V as A}from"./VDivider-0uTiaTOp.js";import"./form-BgF578sf.js";import"./VSelect-DS53LwHp.js";import"./VTextField-C6eKnmHI.js";/* empty css                   */import"./VCounter-zaCnLXhF.js";import"./index-BUESfoyi.js";import"./index-CvHQXubi.js";import"./VField-CvHsy3Gw.js";import"./easing-CjukEv2V.js";import"./VInput-BHzeCb_g.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-_71UWNur.js";import"./ssrBoot-DVdC0ipF.js";import"./VAvatar-BNy4aAwU.js";import"./VImg-C7L2_Cfc.js";import"./dialog-transition-Do2WoKK9.js";import"./VMenu-DQYrk3kV.js";import"./VOverlay-CoABp32a.js";import"./lazy-D17lYkkN.js";import"./scopeId-BrrwTSQ7.js";import"./VCheckboxBtn-CpT2uvvt.js";import"./VSelectionControl-CHcFDMyx.js";import"./VChip-Dsa3sMeg.js";import"./VSlideGroup-C6LQopTA.js";import"./filter-w97jT8s0.js";import"./helpers-BY2vbE1z.js";import"./index-B3bPRkoL.js";const oe=M({id:"student",state:()=>({students:[],errors:[]}),actions:{async search(n){var c;try{const a=await ee("/api/students/search",{method:"GET",params:{query:n}});return this.students=a.data,this.students}catch(a){throw console.error("Error searching students:",a),this.errors=((c=a.response)==null?void 0:c.data.errors)||["An unexpected error occurred"],a}}}}),se=n=>(X("data-v-648b2e28"),n=n(),Z(),n),re={key:0,class:"text-error"},ae={class:"d-flex justify-end mt-4"},le={class:"d-flex align-center my-6"},ne=se(()=>f("span",{class:"mx-4"},"OR",-1)),ie={key:0,class:"text-error"},ue={class:"d-flex justify-end mt-4"},ce={__name:"upload-document",emits:["update:uploadDocumentShow","update:studentFormShow"],setup(n,{emit:c}){const a=q(L,G,z),o=j(),w=c,l=u(null),h=u([]),d=K(),D=Y(),E=oe(),T=H();h.value=d.files;const i=u(null),C=u([]),I=u(0),N=async e=>{C.value=await E.search(e)};J(i,e=>{e&&console.log("Selected student:",e)});const P=()=>{h.value.length===0?l.value="Please upload at least one file.":(l.value=null,w("update:uploadDocumentShow",!1),w("update:studentFormShow",!0))},U={process:(e,s,_,p,R,pe,me)=>{I.value+=1,d.uploadFile(e,s).then(v=>p(v)).catch(v=>R(v))},revert:(e,s,_)=>{I.value-=1,d.removeFile(e),s()}};document.querySelectorAll(".student-list-item").forEach(e=>{e.addEventListener("click",function(){console.log("Item selected:",this.textContent)})});const $=async()=>{try{if(!i.value){l.value="Please select a student before submitting the application.";return}(await S.fire({title:"Confirm Submission",text:"Are you sure you want to submit this application?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, submit it!"})).isConfirmed&&(await D.submitApplication(null,o.selectedCourseId,o.selectedIntakeId,o.selectedUniversityId,o.selectedCountryId,o.selectedCourseDetailsId,d.filePaths,i.value),S.fire({icon:"success",title:"Application Successful",text:"You have submitted the application successfully!",confirmButtonText:"OK"}),o.selectedCourseId=null,o.selectedIntakeId=null,o.selectedUniversityId=null,o.selectedCountryId=null,o.selectedCourseDetailsId=null,T.push({name:"application"}))}catch(e){S.fire({icon:"error",title:"Application Failed",text:e,confirmButtonText:"OK"})}};return(e,s)=>{const _=O;return x(),y(Q,null,[t(F,{class:"mb-6"},{default:r(()=>[t(B,null,{default:r(()=>[m("Select Existing Student")]),_:1}),t(k,null,{default:r(()=>[t(_,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=p=>i.value=p),items:C.value,"item-title":"student_name_with_email","item-value":"id",label:"Search Existing Student",placeholder:"Start typing to search...","onUpdate:search":N},null,8,["modelValue","items"]),l.value?(x(),y("p",re,b(l.value),1)):g("",!0),f("div",ae,[t(V,{color:"primary",onClick:$},{default:r(()=>[m("Next")]),_:1})])]),_:1})]),_:1}),f("div",le,[t(A),ne,t(A)]),t(F,null,{default:r(()=>[t(B,null,{default:r(()=>[m("Please upload only color scan copy files for new student")]),_:1}),t(k,null,{default:r(()=>[t(W(a),{ref:"pond",name:"student_document","allow-multiple":!0,allowRemove:"true",files:h.value,server:U,"label-idle":"Drop files here or <span class='filepond--label-action'>Browse</span>"},null,8,["files"]),l.value?(x(),y("p",ie,b(l.value),1)):g("",!0),f("div",ue,[t(V,{color:"primary",onClick:s[1]||(s[1]=p=>P())},{default:r(()=>[m("Next")]),_:1})])]),_:1})]),_:1})],64)}}},Xe=te(ce,[["__scopeId","data-v-648b2e28"]]);export{Xe as default};
