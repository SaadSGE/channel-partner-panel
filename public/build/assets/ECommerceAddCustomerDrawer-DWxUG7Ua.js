import{r as u,e as P}from"./validators-yRjgDR_h.js";import{r as s,o as T,f as $,e as r,b as e,n as o,a6 as F,a3 as i,d as m,a7 as g,v as h}from"./main-kzKK1XE4.js";import{_ as j}from"./AppSelect-Caxo72fS.js";import{_ as E}from"./AppTextField-BCvUXX3V.js";import{_ as M}from"./AppDrawerHeaderSection-B1nNHHZY.js";import{P as R}from"./vue3-perfect-scrollbar.esm-CDYQlObX.js";import{V as H}from"./VDivider-BRvIS9W0.js";import{V as I}from"./VCardText-do432SKI.js";import{V as L}from"./VForm-Bgr5kXKW.js";import{V as z,a as t}from"./VRow-xJk10beR.js";import{V as J}from"./VSwitch-DNZ8sAu1.js";import{V as K}from"./VCard-DWOcblIG.js";import{V as Y}from"./VNavigationDrawer-DXNbk8u4.js";const G=m("h6",{class:"text-h6"}," Basic Information ",-1),Q=m("div",{class:"text-body-1 font-weight-medium text-high-emphasis"}," Shipping Information ",-1),W={class:"d-flex justify-space-between"},X=m("div",{class:"d-flex flex-column gap-y-1"},[m("h6",{class:"text-h6"}," Use as a billing address? "),m("div",{class:"text-body-2"}," Please check budget for more info ")],-1),Z={class:"d-flex gap-4 justify-start pb-10"},pe={__name:"ECommerceAddCustomerDrawer",props:{isDrawerOpen:{type:Boolean,required:!0}},emits:["update:isDrawerOpen"],setup(A,{emit:S}){const _=A,C=S,k=l=>{C("update:isDrawerOpen",l)},D=s(),p=s(),V=s(),f=s(),v=s(),b=s(),c=s(),w=s(),q=s(),U=s(),y=s(!1),B=()=>{var l;(l=D.value)==null||l.reset(),C("update:isDrawerOpen",!1)};return(l,a)=>{const N=M,n=E,O=j;return T(),$(Y,{"model-value":_.isDrawerOpen,temporary:"",location:"end",width:"370",border:"none","onUpdate:modelValue":k},{default:r(()=>[e(N,{title:"Add a Customer",onCancel:a[0]||(a[0]=d=>l.$emit("update:isDrawerOpen",!1))}),e(H),e(K,{flat:""},{default:r(()=>[e(o(R),{options:{wheelPropagation:!1},class:"h-100"},{default:r(()=>[e(I,{style:{"block-size":"calc(100vh - 5rem)"}},{default:r(()=>[e(o(L),{ref_key:"refVForm",ref:D,onSubmit:a[11]||(a[11]=F(()=>{},["prevent"]))},{default:r(()=>[e(z,null,{default:r(()=>[e(t,null,{default:r(()=>[G]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(p),"onUpdate:modelValue":a[1]||(a[1]=d=>i(p)?p.value=d:null),label:"Name*",rules:["requiredValidator"in l?l.requiredValidator:o(u)],placeholder:"John Doe"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(V),"onUpdate:modelValue":a[2]||(a[2]=d=>i(V)?V.value=d:null),label:"Email*",rules:["requiredValidator"in l?l.requiredValidator:o(u),"emailValidator"in l?l.emailValidator:o(P)],placeholder:"johndoe@email.com"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(f),"onUpdate:modelValue":a[3]||(a[3]=d=>i(f)?f.value=d:null),label:"Mobile*",rules:["requiredValidator"in l?l.requiredValidator:o(u)],placeholder:"+(123) 456-7890"},null,8,["modelValue","rules"])]),_:1}),e(t,null,{default:r(()=>[Q]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(v),"onUpdate:modelValue":a[4]||(a[4]=d=>i(v)?v.value=d:null),label:"Address Line 1*",rules:["requiredValidator"in l?l.requiredValidator:o(u)],placeholder:"45, Rocker Terrace"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(b),"onUpdate:modelValue":a[5]||(a[5]=d=>i(b)?b.value=d:null),placeholder:"Empire Heights,",rules:["requiredValidator"in l?l.requiredValidator:o(u)],label:"Address Line 2*"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(c),"onUpdate:modelValue":a[6]||(a[6]=d=>i(c)?c.value=d:null),label:"Town*",rules:["requiredValidator"in l?l.requiredValidator:o(u)],placeholder:"New York"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(w),"onUpdate:modelValue":a[7]||(a[7]=d=>i(w)?w.value=d:null),placeholder:"Texas",rules:["requiredValidator"in l?l.requiredValidator:o(u)],label:"State/Province*"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(q),"onUpdate:modelValue":a[8]||(a[8]=d=>i(q)?q.value=d:null),label:"Post Code*",type:"number",rules:["requiredValidator"in l?l.requiredValidator:o(u)],placeholder:"982347"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(O,{modelValue:o(U),"onUpdate:modelValue":a[9]||(a[9]=d=>i(U)?U.value=d:null),placeholder:"United States",rules:["requiredValidator"in l?l.requiredValidator:o(u)],label:"Country",items:["United States","United Kingdom","Canada"]},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[m("div",W,[X,e(J,{modelValue:o(y),"onUpdate:modelValue":a[10]||(a[10]=d=>i(y)?y.value=d:null)},null,8,["modelValue"])])]),_:1}),e(t,{cols:"12"},{default:r(()=>[m("div",Z,[e(g,{type:"submit",color:"primary"},{default:r(()=>[h(" Add ")]),_:1}),e(g,{color:"error",variant:"tonal",onClick:B},{default:r(()=>[h(" Discard ")]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}};export{pe as _};
