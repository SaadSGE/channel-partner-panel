import{_ as T}from"./AppTextarea-CLsd_Yni.js";import{_ as S}from"./AppTextField-CkFZWfQr.js";import{_ as $}from"./AppDrawerHeaderSection-BvRSCFws.js";import{r as d,o as k,f as I,e as a,b as e,a6 as O,n as t,a3 as p,d as g,a1 as A,v as V,a7 as v}from"./main-cX0WqYxM.js";import{P as U}from"./vue3-perfect-scrollbar.esm-CEWUVhmY.js";import{V as x}from"./VDivider-nun6oEDR.js";import{V as B}from"./VCard-DD-bpITE.js";import{V as F}from"./VCardText-BpOf8J-6.js";import{V as M}from"./VForm-DI8lUs6V.js";import{V as N,a as r}from"./VRow-DXPoGva5.js";import{V as j}from"./VChip-DQyCHdpB.js";import{V as P}from"./VNavigationDrawer-CddwQuPR.js";const q={class:"mb-6"},Z={__name:"InvoiceSendInvoiceDrawer",props:{isDrawerOpen:{type:Boolean,required:!0}},emits:["update:isDrawerOpen","submit"],setup(w,{emit:_}){const b=w,c=_,n=d("shelbyComapny@email.com"),s=d("qConsolidated@email.com"),i=d("Invoice of purchased Admin Templates"),m=d(`Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`),y=()=>{c("update:isDrawerOpen",!1),c("submit",{emailFrom:n.value,emailTo:s.value,invoiceSubject:i.value,paymentMessage:m.value})},D=u=>{c("update:isDrawerOpen",u)};return(u,o)=>{const h=$,f=S,C=T;return k(),I(P,{temporary:"",location:"end",width:400,"model-value":b.isDrawerOpen,class:"scrollable-content","onUpdate:modelValue":D},{default:a(()=>[e(h,{title:"Send Invoice",onCancel:o[0]||(o[0]=l=>u.$emit("update:isDrawerOpen",!1))}),e(x),e(t(U),{options:{wheelPropagation:!1}},{default:a(()=>[e(B,{flat:""},{default:a(()=>[e(F,null,{default:a(()=>[e(M,{onSubmit:O(y,["prevent"])},{default:a(()=>[e(N,null,{default:a(()=>[e(r,{cols:"12"},{default:a(()=>[e(f,{modelValue:t(n),"onUpdate:modelValue":o[1]||(o[1]=l=>p(n)?n.value=l:null),label:"From",placeholder:"sender@email.com"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(f,{modelValue:t(s),"onUpdate:modelValue":o[2]||(o[2]=l=>p(s)?s.value=l:null),label:"To",placeholder:"receiver@email.com"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(f,{modelValue:t(i),"onUpdate:modelValue":o[3]||(o[3]=l=>p(i)?i.value=l:null),label:"Subject",placeholder:"Invoice of purchased Admin Templates"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(C,{modelValue:t(m),"onUpdate:modelValue":o[4]||(o[4]=l=>p(m)?m.value=l:null),rows:"10",label:"Message",placeholder:"Thank you for your business, always a pleasure to work with you!"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:a(()=>[g("div",q,[e(j,{label:"",color:"primary",size:"small"},{default:a(()=>[e(A,{start:"",icon:"tabler-link"}),V(" Invoice Attached ")]),_:1})]),e(v,{type:"submit",class:"me-3"},{default:a(()=>[V(" Send ")]),_:1}),e(v,{color:"secondary",variant:"tonal",onClick:o[5]||(o[5]=l=>u.$emit("update:isDrawerOpen",!1))},{default:a(()=>[V(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}};export{Z as _};
