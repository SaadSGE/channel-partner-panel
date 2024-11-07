import{_ as N}from"./AppTextField-Ce_7aj-l.js";import{r as t,o as b,f as g,e as i,d as n,b as a,a1 as x,a7 as V,v as D,a6 as h}from"./main-CSiErTrC.js";import{c as z}from"./commonFunction-D4acHsqR.js";import{V as C}from"./VNavigationDrawer-D5AtBS9q.js";import{V as F}from"./VDivider-CJXv-daG.js";import{V as k}from"./VForm-D2vsoaeH.js";import"./VTextField-BE_Olmik.js";import"./index-DfinjJ0j.js";import"./index-D0fdz3wH.js";import"./forwardRefs-D9kYFWgq.js";import"./api-DWFqE0EF.js";import"./index-BYrzgnBV.js";import"./scopeId-BtBFTQc-.js";import"./ssrBoot-CaQoqm2n.js";const O={class:"customizer-heading d-flex align-center justify-space-between"},A=n("div",null,[n("h6",{class:"text-h6"},"Add New Country")],-1),B={class:"d-flex align-center gap-1"},K={__name:"add",props:{isNavDrawerOpen:Boolean},emits:["update:isNavDrawerOpen"],setup(w,{emit:_}){t([]);const y=z(),r=t(""),d=t("");t([]);const l=t(!1),u=w,c=t(null),p=_,f=m=>!!m||"Required field",v=async()=>{if(!await c.value.validate())return;const e={name:r.value,timezone:d.value};try{l.value=!0,await y.addAllCountry(e),l.value=!1,r.value="",p("update:isNavDrawerOpen",!1)}catch(s){console.error("Failed to add country:",s)}};return(m,e)=>{const s=N;return b(),g(C,{modelValue:u.isNavDrawerOpen,"onUpdate:modelValue":e[3]||(e[3]=o=>u.isNavDrawerOpen=o),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:i(()=>[n("div",O,[A,n("div",B,[a(V,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:e[0]||(e[0]=o=>p("update:isNavDrawerOpen",!1))},{default:i(()=>[a(x,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),a(F),a(k,{ref_key:"refForm",ref:c,onSubmit:h(v,["prevent"]),class:"form-padding mt-4"},{default:i(()=>[a(s,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o),label:"Country Name",rules:[f],class:"mb-2"},null,8,["modelValue","rules"]),a(s,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=o=>d.value=o),label:"Timezone",rules:[f],class:"mb-2"},null,8,["modelValue","rules"]),a(V,{loading:l.value,disabled:l.value,color:"primary",onClick:v,class:"mt-4",block:""},{default:i(()=>[D(" Add ")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{K as default};