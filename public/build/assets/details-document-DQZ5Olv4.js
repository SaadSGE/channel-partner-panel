import{u as A,a as P}from"./submitApplication-DyUXfZYH.js";import{v as j,p as T,a as $,b as I}from"./vue-filepond.esm-D8tNDpvx.js";import{S as L}from"./sweetalert2-z6gKu1nJ.js";import{M as E,j as R,r as p,o as l,f as i,e as o,b as a,v as f,c as h,a7 as _,z as u,n as K,d as y,a1 as n,i as M,F as O,x as U}from"./main-DcRYtyhb.js";import{b as q,V as k}from"./VCard-Cx8jtWxj.js";import{V as g}from"./VCardText-DBuqztfA.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./api-Dzamjkic.js";import"./index-BYrzgnBV.js";import"./helpers-BK2cOSOq.js";import"./VAvatar-BSmSdand.js";import"./VImg-Dll55tVl.js";import"./index-DAZmEUgw.js";const H={key:0,class:"d-flex justify-end mt-2"},J={class:"d-flex justify-end mt-2 mb-2"},Q=["href"],W=E({__name:"details-document",props:{existingDocuments:{type:Array,default:()=>[]},zipLink:{type:String,default:""}},emits:["update:uploadDocumentShow","update:studentFormShow"],setup(x,{emit:X}){const w=R(),C=A(),r=P(),F=j(I,$,T),S=s=>{const e=document.createElement("a");e.href=s,e.target="_blank",e.download="test",document.body.appendChild(e),e.click(),document.body.removeChild(e)},v=x;p(null);const V=p(v.existingDocuments),D=p([]);r.filePaths;const z=w.params.id,c=p(0),B=()=>{C.updateApplicationsFile(z,r.filePaths),L.fire({icon:"success",title:"Success",text:"New Document Added Successfully",confirmButtonText:"OK"}),c.value=0};r.resetFiles();const N={process:(s,e,t,d,b,Y,Z)=>{c.value+=1,r.uploadFile(s,e).then(m=>d(m)).catch(m=>b(m))},revert:(s,e,t)=>{c.value-=1,r.removeFile(s),e()}};return(s,e)=>(l(),i(k,{class:"mx-auto"},{default:o(()=>[a(q,null,{default:o(()=>[f("Please upload only color scan copy files")]),_:1}),c.value>0?(l(),h("div",H,[a(_,{color:"primary",onClick:e[0]||(e[0]=t=>B())},{default:o(()=>[f("Update New Document")]),_:1})])):u("",!0),a(g,null,{default:o(()=>[a(K(F),{ref:"pond",name:"student_document","allow-multiple":!0,allowRemove:"true",files:D.value,server:N,"label-idle":"Drop files here or <span class='filepond--label-action'>Browse</span>"},null,8,["files"]),y("div",J,[a(_,{href:v.zipLink,color:"primary",target:"_blank"},{default:o(()=>[a(n,{size:"24",icon:"tabler-download"}),f(" Download All ")]),_:1},8,["href"])]),(l(!0),h(O,null,M(V.value,(t,d)=>(l(),i(k,{key:d,class:"mb-2"},{default:o(()=>[a(g,{class:"d-flex justify-space-between align-center"},{default:o(()=>[y("div",null,[t.file_type=="pdf"?(l(),i(n,{key:0,size:"28",icon:"tabler-file-type-pdf"})):u("",!0),t.file_type=="image"?(l(),i(n,{key:1,size:"28",icon:"tabler-file-type-png"})):u("",!0),t.file_type=="document"?(l(),i(n,{key:2,size:"26",color:"red",icon:"tabler-file-type-doc"})):u("",!0),y("a",{href:t.path,target:"_blank"},U(t.file_name),9,Q)]),a(_,{icon:"",onClick:b=>S(t.path)},{default:o(()=>[a(n,{size:"24",icon:"tabler-eye"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}}),me=G(W,[["__scopeId","data-v-050a37a3"]]);export{me as default};
