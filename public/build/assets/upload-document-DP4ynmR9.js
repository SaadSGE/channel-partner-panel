import{c as F}from"./commonFunction-CKbZ0Xmh.js";import{u as y}from"./fileStore-DbVpCYem.js";import{u as C}from"./submitApplication-BkPSKl1M.js";import{V as b,p as k,a as B,b as D}from"./vue-filepond.esm-BxzmqGAF.js";import"./sweetalert2-z6gKu1nJ.js";import{r as o,k as N,w as I,H as P,o as m,f as E,e as a,b as l,v as p,n as T,c as $,x as A,z as M,d as R,a8 as j}from"./main-D5McJ9Zv.js";import{u as q}from"./studentStore-BRDvrkwO.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as H,b as L}from"./VCard-Cgis6yXZ.js";import{V as U}from"./VCardText-ByrVCN3b.js";import"./helpers-C_zUu5UZ.js";import"./VAvatar-BewUqin6.js";import"./VImg-Bp_ZHGHr.js";import"./index-6ozB1_Sf.js";const G={key:0,class:"text-error"},J={class:"d-flex justify-end mt-4"},K={__name:"upload-document",emits:["update:uploadDocumentShow","update:studentFormShow"],setup(O,{emit:f}){const v=b(D,B,k);F();const c=f,s=o(null),r=o([]),n=y();C();const _=q();N(),r.value=n.files;const h=o(null),S=o([]),i=o(0);I(h,e=>{e&&console.log("Selected student:",e)});const x=()=>{r.value.length===0?s.value="Please upload at least one file.":(s.value=null,c("update:uploadDocumentShow",!1),c("update:studentFormShow",!0))},w={process:(e,t,d,V,g,W,X)=>{i.value+=1,n.uploadFile(e,t).then(u=>V(u)).catch(u=>g(u))},revert:(e,t,d)=>{i.value-=1,n.removeFile(e),t()}};return P(async()=>{S.value=await _.search()}),document.querySelectorAll(".student-list-item").forEach(e=>{e.addEventListener("click",function(){console.log("Item selected:",this.textContent)})}),(e,t)=>(m(),E(H,null,{default:a(()=>[l(L,null,{default:a(()=>[p("Please upload only color scan copy files for new student")]),_:1}),l(U,null,{default:a(()=>[l(T(v),{ref:"pond",name:"student_document","allow-multiple":!0,allowRemove:"true",files:r.value,server:w,"label-idle":"Drop files here or <span class='filepond--label-action'>Browse</span>"},null,8,["files"]),s.value?(m(),$("p",G,A(s.value),1)):M("",!0),R("div",J,[l(j,{color:"primary",onClick:t[0]||(t[0]=d=>x())},{default:a(()=>[p("Next")]),_:1})])]),_:1})]),_:1}))}},me=z(K,[["__scopeId","data-v-f2612b96"]]);export{me as default};
