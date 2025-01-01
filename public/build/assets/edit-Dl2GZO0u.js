import{_ as L}from"./AppTextField-BMFiMzM2.js";import{_ as I}from"./AppAutocomplete-CAMgT96Z.js";import{r as o,H as M,w as $,a as T,o as v,f as V,e as i,d as r,b as l,a2 as w,a9 as g,c as S,z as b,v as U,a8 as j}from"./main-Cf2RrCNo.js";import{c as q}from"./commonFunction-BrGZhaxr.js";import{V as E}from"./VNavigationDrawer-nobPI86N.js";import{V as H}from"./VDivider-_r-tuU57.js";import{V as R}from"./VImg-B9V4zKv-.js";import{V as G}from"./VForm-BJS4O2tp.js";import"./VInput-O3d6ZIfR.js";import"./index-C_0MfI4p.js";import"./index-DO6biqBj.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-BczpwYvz.js";import"./VSelect-CzXEDS5u.js";import"./VList-Bar9JdAL.js";import"./ssrBoot-CT58Kpxi.js";import"./VAvatar-BuH-7h8e.js";import"./dialog-transition-CWr76YKO.js";import"./scopeId-NJDsUcFH.js";import"./VMenu-DSDOZfIF.js";import"./VCheckboxBtn-CUNKIzFL.js";import"./VChip-CarZCoqq.js";import"./filter-C6oZiC-t.js";const J={class:"customizer-heading d-flex align-center justify-space-between"},K=r("div",null,[r("h6",{class:"text-h6"},"Edit University")],-1),P={class:"d-flex align-center gap-1"},Q={class:"mb-2"},W=r("label",{class:"mb-2",style:{"font-size":"0.9rem"}},"University Logo",-1),X={key:0,class:"image-container"},we={__name:"edit",props:{isNavDrawerOpen:Boolean,editedItem:Object,universities:Array},emits:["update:isNavDrawerOpen"],setup(F,{emit:D}){const _=F,c=q(),n=o(""),u=o(""),d=o(""),p=o(""),m=o("");o([]);const k=o([]);o([]),o([]);const f=o(!1),N=o(null),C=o(null),h=D;M(async()=>{c.countries.length===0&&await c.getCountries(),k.value=c.countries}),$(()=>_.editedItem,async a=>{a&&(n.value=a.country_id,u.value=a.name,d.value=a.address,p.value=a.logo,N.value=a.id)},{immediate:!0});const y=a=>!!a||"Required field",x=async()=>{C.value.validate().then(a=>{if(a.valid)B();else return})},s=o(!1),B=async()=>{const a={countryId:n.value,name:u.value,address:d.value,logo:s.value===!1?p.value:m.value[0].upload.data};try{f.value=!0,await c.updateUniversity(N.value,a),f.value=!1,u.value="",d.value="",p.value=null,n.value="",h("update:isNavDrawerOpen",!1)}catch(e){console.error("Failed to add university:",e)}};return(a,e)=>{const O=I,A=L,z=T("VueFileAgent");return v(),V(E,{modelValue:_.isNavDrawerOpen,"onUpdate:modelValue":e[8]||(e[8]=t=>_.isNavDrawerOpen=t),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:i(()=>[r("div",J,[K,r("div",P,[l(g,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:e[0]||(e[0]=t=>h("update:isNavDrawerOpen",!1))},{default:i(()=>[l(w,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),l(H),l(G,{ref_key:"refForm",ref:C,onSubmit:j(x,["prevent"]),class:"form-padding mt-4"},{default:i(()=>[l(O,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t),items:k.value,"item-title":t=>t.name,"item-value":t=>t.id,label:"Country",placeholder:"Select Country",rules:[y],class:"mb-2"},null,8,["modelValue","items","item-title","item-value","rules"]),l(A,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=t=>u.value=t),label:"University Name",rules:[y],class:"mb-2"},null,8,["modelValue","rules"]),l(A,{modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=t=>d.value=t),label:"University Address",rules:[y],class:"mb-2"},null,8,["modelValue","rules"]),r("div",Q,[W,s.value?b("",!0):(v(),S("div",X,[l(R,{src:p.value,"aspect-ratio":"16/9",height:"150"},null,8,["src"])])),s.value?(v(),V(z,{key:1,helpText:"Choose university Logo",deletable:!0,modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=t=>m.value=t),rawModelValue:m.value,"onUpdate:rawModelValue":e[5]||(e[5]=t=>m.value=t),rules:[y]},null,8,["modelValue","rawModelValue","rules"])):b("",!0)]),s.value?(v(),V(g,{key:0,onClick:e[6]||(e[6]=t=>s.value=!1),color:"info",class:"mb-2 mt-2",style:{float:"inline-end"}},{default:i(()=>[l(w,{start:"",icon:"tabler-arrow-left"}),U(" Back ")]),_:1})):b("",!0),s.value?b("",!0):(v(),V(g,{key:1,onClick:e[7]||(e[7]=t=>s.value=!0),color:"success",class:"mb-2 mt-2",style:{float:"inline-end"}},{default:i(()=>[U(" Change Logo "),l(w,{end:"",icon:"tabler-cloud-upload"})]),_:1})),l(g,{loading:f.value,disabled:f.value,color:"primary",onClick:x,class:"mt-4",block:""},{default:i(()=>[U("Update")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{we as default};