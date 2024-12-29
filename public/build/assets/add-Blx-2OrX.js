import{_ as N}from"./AppTextarea-hexXRf6S.js";import{r as l,o as h,f as b,e as i,d as n,b as a,a2 as g,a9 as u,v as x,a8 as D}from"./main-C3zi_SKQ.js";import{c as y}from"./commonFunction-DaV-cpx8.js";import{V as k}from"./VNavigationDrawer-DvmlspX8.js";import{V as F}from"./VDivider-Byc_tc4C.js";import{V as O}from"./VForm-BglYL0G4.js";import"./VInput-DkaOtTDM.js";import"./index-DPXcXuYg.js";import"./index-C8YGC3Io.js";import"./forwardRefs-D3j0TLhE.js";import"./scopeId-CNDVdJ3R.js";import"./ssrBoot-d-rE-ebl.js";const B={class:"customizer-heading d-flex align-center justify-space-between"},z=n("div",null,[n("h6",{class:"text-h6"},"Add New Notice")],-1),A={class:"d-flex align-center gap-1"},H={__name:"add",props:{isNavDrawerOpen:Boolean},emits:["update:isNavDrawerOpen"],setup(f,{emit:v}){const o=l(!1),V=y(),t=l(""),d=f,c=l(null),m=v,p=async()=>{c.value.validate().then(s=>{if(s.valid)_();else return})},_=async()=>{const s={content:t.value};try{o.value=!0,await V.addNotice(s),o.value=!1,t.value="",m("update:isNavDrawerOpen",!1)}catch(e){console.error("Failed to add notice:",e)}};return(s,e)=>{const w=N;return h(),b(k,{modelValue:d.isNavDrawerOpen,"onUpdate:modelValue":e[2]||(e[2]=r=>d.isNavDrawerOpen=r),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:i(()=>[n("div",B,[z,n("div",A,[a(u,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:e[0]||(e[0]=r=>m("update:isNavDrawerOpen",!1))},{default:i(()=>[a(g,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),a(F),a(O,{ref_key:"refForm",ref:c,onSubmit:D(p,["prevent"]),class:"form-padding mt-4"},{default:i(()=>[a(w,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=r=>t.value=r),placeholder:"Add new notice",class:"mb-2"},null,8,["modelValue"]),a(u,{loading:o.value,disabled:o.value,color:"primary",onClick:p,class:"mt-4",block:""},{default:i(()=>[x("Add ")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{H as default};
