import{u as w}from"./fileStore-CvygF2xW.js";import{v as y,p as V,a as b,b as g}from"./filepond-plugin-image-preview.esm-Bv-HloI1.js";import{b as C,V as F}from"./VCard-B7k9GI3s.js";import{M as S,r as d,o as p,f as B,e as o,b as s,v as m,n as k,c as D,x as N,z as P,d as T,a7 as $}from"./main-CGWwRiT_.js";import{V as I}from"./VCardText-BmGyakr4.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./api-CbZJzeec.js";import"./index-B3bPRkoL.js";import"./VAvatar-DQfbjzTA.js";import"./VImg-Djij_NeG.js";import"./index-DQUQ96P0.js";const j={key:0,class:"error-message"},z={class:"d-flex justify-end mt-4"},E=S({__name:"upload-document",emits:["update:uploadDocumentShow","update:studentFormShow"],setup(U,{emit:f}){const _=y(g,b,V),c=f,t=d(null),l=d([]),r=w();l.value=r.files;const v=()=>{l.value.length===0?t.value="Please upload at least one file.":(t.value=null,c("update:uploadDocumentShow",!1),c("update:studentFormShow",!0))},x={process:async(a,e,n,u,h,q,A)=>{try{const i=await r.uploadFile(a,e);u(i)}catch(i){h(i)}},revert:async(a,e,n)=>{try{await r.removeFile(a),e()}catch(u){n(u)}}};return(a,e)=>(p(),B(F,{class:"mx-auto"},{default:o(()=>[s(C,null,{default:o(()=>[m("Please upload only color scan copy files")]),_:1}),s(I,null,{default:o(()=>[s(k(_),{ref:"pond",name:"student_document","allow-multiple":!0,"allow-remove":"true",files:l.value,server:x,"label-idle":"Drop files here or <span class='filepond--label-action'>Browse</span>"},null,8,["files"]),t.value?(p(),D("div",j,N(t.value),1)):P("",!0),T("div",z,[s($,{color:"primary",onClick:e[0]||(e[0]=n=>v())},{default:o(()=>[m("Next")]),_:1})])]),_:1})]),_:1}))}}),Z=M(E,[["__scopeId","data-v-a4b7ceb5"]]);export{Z as default};
