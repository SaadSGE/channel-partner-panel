import{_ as N}from"./AppTextField-DgZofsLH.js";import{r as e,o as b,f as h,e as n,d as l,b as o,a2 as g,a8 as p,v as x,a7 as D}from"./main-D5McJ9Zv.js";import{c as y}from"./commonFunction-CKbZ0Xmh.js";import{V as F}from"./VNavigationDrawer-eLhI8uu1.js";import{V as O}from"./VDivider-Bg58jSdU.js";import{V as B}from"./VForm-CTPemAxI.js";import"./VTextField-C6tY1X-k.js";import"./index-D8QWoZBU.js";import"./index-6ozB1_Sf.js";import"./forwardRefs-D3j0TLhE.js";import"./scopeId-cOAU0TpX.js";import"./ssrBoot-BFxq1bKX.js";const z={class:"customizer-heading d-flex align-center justify-space-between"},I=l("div",null,[l("h6",{class:"text-h6"},"Add New Intake")],-1),A={class:"d-flex align-center gap-1"},H={__name:"add",props:{isNavDrawerOpen:Boolean},emits:["update:isNavDrawerOpen"],setup(f,{emit:v}){e([]);const V=y();e("");const s=e("");e(""),e(),e(),e([]),e([]),e([]);const r=e(!1),d=f,m=e(null),c=v,_=t=>!!t||"Required field",u=async()=>{m.value.validate().then(t=>{if(t.valid)k();else return})},k=async()=>{const t={name:s.value};try{r.value=!0,await V.addIntake(t),r.value=!1,s.value="",c("update:isNavDrawerOpen",!1)}catch(a){console.error("Failed to add intake:",a)}};return(t,a)=>{const w=N;return b(),h(F,{modelValue:d.isNavDrawerOpen,"onUpdate:modelValue":a[2]||(a[2]=i=>d.isNavDrawerOpen=i),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:n(()=>[l("div",z,[I,l("div",A,[o(p,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:a[0]||(a[0]=i=>c("update:isNavDrawerOpen",!1))},{default:n(()=>[o(g,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),o(O),o(B,{ref_key:"refForm",ref:m,onSubmit:D(u,["prevent"]),class:"form-padding mt-4"},{default:n(()=>[o(w,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=i=>s.value=i),label:"Intake Name",rules:[_],class:"mb-2"},null,8,["modelValue","rules"]),o(p,{loading:r.value,disabled:r.value,color:"primary",onClick:u,class:"mt-4",block:""},{default:n(()=>[x("Add")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{H as default};
