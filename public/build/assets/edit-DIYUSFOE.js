import{_ as w}from"./AppTextField-DGND8uwM.js";import{r as e,w as N,o as g,f as x,e as n,d as l,b as o,a2 as D,a9 as f,v as y,a8 as F}from"./main-PSRKRJA0.js";import{c as O}from"./commonFunction-CDt6OG7X.js";import{V as I}from"./VNavigationDrawer-o6xFU2Z6.js";import{V as B}from"./VDivider-DEBv-hep.js";import{V as z}from"./VForm-D5RpSLJx.js";import"./VInput-B0LENz5u.js";import"./index-DV-y-cvE.js";import"./index-CMM0iKWC.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-CFvU48c8.js";import"./scopeId-b3Cfj1r-.js";import"./ssrBoot-Fgsxd-Md.js";const U={class:"customizer-heading d-flex align-center justify-space-between"},C=l("div",null,[l("h6",{class:"text-h6"},"Update Intake")],-1),j={class:"d-flex align-center gap-1"},P={__name:"edit",props:{isNavDrawerOpen:Boolean,editedItem:Object},emits:["update:isNavDrawerOpen"],setup(v,{emit:V}){e([]);const _=O();e("");const s=e("");e(""),e(),e(),e([]),e([]),e([]);const i=e(!1),d=v,m=e(null),c=e(null),u=V;N(()=>d.editedItem,async a=>{a&&(s.value=a.name,m.value=a.id)},{immediate:!0});const k=a=>!!a||"Required field",p=async()=>{c.value.validate().then(a=>{if(a.valid)b();else return})},b=async()=>{const a={name:s.value};try{i.value=!0,await _.updateIntake(m.value,a),i.value=!1,s.value="",u("update:isNavDrawerOpen",!1)}catch(t){console.error("Failed to add intake:",t)}};return(a,t)=>{const h=w;return g(),x(I,{modelValue:d.isNavDrawerOpen,"onUpdate:modelValue":t[2]||(t[2]=r=>d.isNavDrawerOpen=r),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:n(()=>[l("div",U,[C,l("div",j,[o(f,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:t[0]||(t[0]=r=>u("update:isNavDrawerOpen",!1))},{default:n(()=>[o(D,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),o(B),o(z,{ref_key:"refForm",ref:c,onSubmit:F(p,["prevent"]),class:"form-padding mt-4"},{default:n(()=>[o(h,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=r=>s.value=r),label:"Intake Name",rules:[k],class:"mb-2"},null,8,["modelValue","rules"]),o(f,{loading:i.value,disabled:i.value,color:"primary",onClick:p,class:"mt-4",block:""},{default:n(()=>[y("Update ")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{P as default};