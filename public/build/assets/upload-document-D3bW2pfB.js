import{u as V}from"./fileStore-Bg1bISLs.js";import{v as g,p as w,a as C,b as F}from"./filepond-plugin-image-preview.esm-BF_mn76E.js";import{b as S,V as b}from"./VCard-BJp96eTV.js";import{M as y,r as p,o as c,f as B,e as a,b as s,v as m,n as k,c as D,x as N,z as P,d as T,a7 as $}from"./main-Bq8deQCX.js";import{V as M}from"./VCardText-BrEuz_jZ.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./api-99WOKqi0.js";import"./index-B3bPRkoL.js";import"./VAvatar-DJAkgXLu.js";import"./VImg-CCyGr-Sd.js";import"./index-CjfOI940.js";const z={key:0,class:"error-message"},E={class:"d-flex justify-end mt-4"},I=y({__name:"upload-document",emits:["update:uploadDocumentShow","update:studentFormShow"],setup(U,{emit:f}){const _=g(F,C,w),d=f,t=p(null),l=p([]),r=V();l.value=r.files;const v=()=>{l.value.length===0?t.value="Please upload at least one file.":(t.value=null,d("update:uploadDocumentShow",!1),d("update:studentFormShow",!0))},h={process:(o,e,n,u,x,q,A)=>{r.uploadFile(o,e).then(i=>u(i)).catch(i=>x(i))},revert:(o,e,n)=>{r.removeFile(o).then(()=>e()).catch(u=>n(u))}};return(o,e)=>(c(),B(b,{class:"mx-auto"},{default:a(()=>[s(S,null,{default:a(()=>[m("Please upload only color scan copy files")]),_:1}),s(M,null,{default:a(()=>[s(k(_),{ref:"pond",name:"student_document","allow-multiple":!0,"allow-remove":"true",files:l.value,server:h,"label-idle":"Drop files here or <span class='filepond--label-action'>Browse</span>"},null,8,["files"]),t.value?(c(),D("div",z,N(t.value),1)):P("",!0),T("div",E,[s($,{color:"primary",onClick:e[0]||(e[0]=n=>v())},{default:a(()=>[m("Next")]),_:1})])]),_:1})]),_:1}))}}),Z=j(I,[["__scopeId","data-v-0ff3da65"]]);export{Z as default};