import{_ as w}from"./AppTextField-CPdHWpXc.js";import{r as e,w as N,o as g,f as x,e as n,d as l,b as o,a1 as D,a7 as f,v as y,a6 as F}from"./main-p-5DQ3fZ.js";import{c as O}from"./commonFunction-C4g_ywws.js";import{V as I}from"./VNavigationDrawer-BO6zTuBc.js";import{V as B}from"./VDivider-CLUPjuaS.js";import{V as z}from"./VForm-DVL49Adw.js";import"./form-Ca0bS9AQ.js";import"./VTextField-CWgA6buZ.js";/* empty css                   */import"./VCounter-CvqiO-zE.js";import"./index-B5-sYsAC.js";import"./index-DyCmQs2G.js";import"./VField-DhQXCcnx.js";import"./easing-CjukEv2V.js";import"./VInput-CTdjTCAX.js";import"./forwardRefs-C-GTDzx5.js";import"./api-SbiBdIjk.js";import"./index-B3bPRkoL.js";import"./scopeId-BtuOjnYq.js";import"./ssrBoot-Cfbx2I9P.js";const U={class:"customizer-heading d-flex align-center justify-space-between"},C=l("div",null,[l("h6",{class:"text-h6"},"Update Intake")],-1),j={class:"d-flex align-center gap-1"},ae={__name:"edit",props:{isNavDrawerOpen:Boolean,editedItem:Object},emits:["update:isNavDrawerOpen"],setup(v,{emit:V}){e([]);const _=O();e("");const i=e("");e(""),e(),e(),e([]),e([]),e([]);const r=e(!1),m=v,d=e(null),p=e(null),c=V;N(()=>m.editedItem,async a=>{a&&(i.value=a.name,d.value=a.id)},{immediate:!0});const k=a=>!!a||"Required field",u=async()=>{p.value.validate().then(a=>{if(a.valid)b();else return})},b=async()=>{const a={name:i.value};try{r.value=!0,await _.updateIntake(d.value,a),r.value=!1,i.value="",c("update:isNavDrawerOpen",!1)}catch(t){console.error("Failed to add intake:",t)}};return(a,t)=>{const h=w;return g(),x(I,{modelValue:m.isNavDrawerOpen,"onUpdate:modelValue":t[2]||(t[2]=s=>m.isNavDrawerOpen=s),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:n(()=>[l("div",U,[C,l("div",j,[o(f,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:t[0]||(t[0]=s=>c("update:isNavDrawerOpen",!1))},{default:n(()=>[o(D,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),o(B),o(z,{ref_key:"refForm",ref:p,onSubmit:F(u,["prevent"]),class:"form-padding mt-4"},{default:n(()=>[o(h,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=s=>i.value=s),label:"Intake Name",rules:[k],class:"mb-2"},null,8,["modelValue","rules"]),o(f,{loading:r.value,disabled:r.value,color:"primary",onClick:u,class:"mt-4",block:""},{default:n(()=>[y("Update")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{ae as default};
