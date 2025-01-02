import{_ as x}from"./AppTextarea-D44kLR6u.js";import{_ as D}from"./AppTextField-DmYTd6Wj.js";import{r as l,o as g,f as h,e as n,d as i,b as a,a2 as F,a9 as V,v as k,a8 as y}from"./main-rAiiXsdI.js";import{c as B}from"./commonFunction-d2zCghtn.js";import{V as E}from"./VNavigationDrawer-1gZUtPAh.js";import{V as O}from"./VDivider-BSC9O3QS.js";import{V as z}from"./VForm-D9NCl5KL.js";import"./VInput-DHoDyuf5.js";import"./index-BNNg5QkT.js";import"./index-DJAqJtim.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-ENbq1Mml.js";import"./scopeId-BDZL6E0l.js";import"./ssrBoot-CrRLApXi.js";const A={class:"customizer-heading d-flex align-center justify-space-between"},C=i("div",null,[i("h6",{class:"text-h6"},"Add New Event")],-1),T={class:"d-flex align-center gap-1"},Q={__name:"add",props:{isNavDrawerOpen:Boolean,updateEvents:Function},emits:["update:isNavDrawerOpen","updateBranches"],setup(_,{emit:w}){const N=B(),o=l(""),s=l(""),r=l(!1),p=_,c=l(null),d=w,v=m=>!!m||"Required field",f=async()=>{if(!await c.value.validate())return;const e={name:o.value,description:s.value};try{r.value=!0,await N.addEvent(e),r.value=!1,o.value="",s.value="",d("update:isNavDrawerOpen",!1),d("updateEvents")}catch(u){console.error("Failed to add event:",u)}};return(m,e)=>{const u=D,b=x;return g(),h(E,{modelValue:p.isNavDrawerOpen,"onUpdate:modelValue":e[3]||(e[3]=t=>p.isNavDrawerOpen=t),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:n(()=>[i("div",A,[C,i("div",T,[a(V,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:e[0]||(e[0]=t=>d("update:isNavDrawerOpen",!1))},{default:n(()=>[a(F,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),a(O),a(z,{ref_key:"refForm",ref:c,onSubmit:y(f,["prevent"]),class:"form-padding mt-4"},{default:n(()=>[a(u,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value=t),label:"Event Name",rules:[v],class:"mb-2"},null,8,["modelValue","rules"]),a(b,{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=t=>s.value=t),label:"Description",rules:[v],class:"mb-2"},null,8,["modelValue","rules"]),a(V,{loading:r.value,disabled:r.value,color:"primary",onClick:f,class:"mt-4",block:""},{default:n(()=>[k(" Add ")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{Q as default};