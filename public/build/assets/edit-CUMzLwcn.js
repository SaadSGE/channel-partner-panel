import{_ as x}from"./AppAutocomplete-Bnpv6Vja.js";import{_ as D}from"./AppTextField-DgZofsLH.js";import{r as o,H as B,w as C,o as F,f as O,e as n,d as m,b as r,a2 as k,a8 as b,v as U,a7 as z}from"./main-D5McJ9Zv.js";import{c as A}from"./commonFunction-CKbZ0Xmh.js";import{V as I}from"./VNavigationDrawer-eLhI8uu1.js";import{V as S}from"./VDivider-Bg58jSdU.js";import{V as $}from"./VForm-CTPemAxI.js";import"./VTextField-C6tY1X-k.js";import"./index-D8QWoZBU.js";import"./index-6ozB1_Sf.js";import"./forwardRefs-D3j0TLhE.js";import"./VSelect-ok_Yuo8W.js";import"./VList-DY6ojEBA.js";import"./ssrBoot-BFxq1bKX.js";import"./VAvatar-BewUqin6.js";import"./VImg-Bp_ZHGHr.js";import"./dialog-transition-B_BJ9JA7.js";import"./lazy-BGqaIAZx.js";import"./scopeId-cOAU0TpX.js";import"./VMenu-ovXTXsem.js";import"./VCheckboxBtn-CzZbLG_Q.js";import"./VChip-DaZnyOu_.js";import"./VSlideGroup-MxxTfIYi.js";import"./filter-fftxsn9K.js";const j={class:"customizer-heading d-flex align-center justify-space-between"},q=m("div",null,[m("h6",{class:"text-h6"},"Update Branch")],-1),M={class:"d-flex align-center gap-1"},ue={__name:"edit",props:{isNavDrawerOpen:Boolean,editedItem:Object},emits:["update:isNavDrawerOpen"],setup(w,{emit:N}){o([]);const u=A(),i=o(""),l=o(null),p=o([]),s=o(!1),c=w,v=o(null),f=o(null),_=N;B(async()=>{await y()});const y=async()=>{try{await u.getAllCountries(),p.value=await u.allCountries}catch(e){console.error("Error fetching countries:",e)}};C(()=>c.editedItem,e=>{e&&(i.value=e.name,l.value=e.country_id,v.value=e.id)},{immediate:!0});const V=e=>!!e||"Required field",h=async()=>{if(!await f.value.validate())return;const a={name:i.value,country_id:l.value};try{s.value=!0,await u.updateBranch(v.value,a),s.value=!1,i.value="",l.value=null,_("update:isNavDrawerOpen",!1)}catch(d){console.error("Failed to update branch:",d)}};return(e,a)=>{const d=D,g=x;return F(),O(I,{modelValue:c.isNavDrawerOpen,"onUpdate:modelValue":a[3]||(a[3]=t=>c.isNavDrawerOpen=t),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:n(()=>[m("div",j,[q,m("div",M,[r(b,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:a[0]||(a[0]=t=>_("update:isNavDrawerOpen",!1))},{default:n(()=>[r(k,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),r(S),r($,{ref_key:"refForm",ref:f,onSubmit:z(h,["prevent"]),class:"form-padding mt-4"},{default:n(()=>[r(d,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=t=>i.value=t),label:"Branch Name",rules:[V],class:"mb-2"},null,8,["modelValue","rules"]),r(g,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=t=>l.value=t),items:p.value,"item-title":t=>t.name,"item-value":t=>t.id,label:"Country Name",placeholder:"Select Country",rules:[V],clearable:""},null,8,["modelValue","items","item-title","item-value","rules"]),r(b,{loading:s.value,disabled:s.value,color:"primary",onClick:h,class:"mt-4",block:""},{default:n(()=>[U(" Update ")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{ue as default};