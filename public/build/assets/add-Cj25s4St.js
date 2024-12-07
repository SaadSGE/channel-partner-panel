import{_ as y}from"./AppAutocomplete-DVX6hFXO.js";import{_ as B}from"./AppTextField-DC2x1dsw.js";import{r as o,H as x,o as D,f as C,e as n,d as m,b as t,a2 as F,a9 as _,v as k,a8 as A}from"./main-Z3go8Xzc.js";import{c as O}from"./commonFunction-C4n_HNA0.js";import{V as z}from"./VNavigationDrawer-CoilFs32.js";import{V as S}from"./VDivider-SUUc1KGp.js";import{V as U}from"./VForm-CRZr7ck4.js";import"./VInput-KBboyctu.js";import"./index-BgvB69-2.js";import"./index-CJOm_KJi.js";import"./forwardRefs-D3j0TLhE.js";import"./VSelect-DZ8I6LSD.js";import"./VTextField-B1_fIF9I.js";import"./VList-CuZQ3pYZ.js";import"./ssrBoot-CoAt9jNJ.js";import"./VAvatar-DFwpysqo.js";import"./VImg-DvovO2d-.js";import"./dialog-transition-6CoWjX9C.js";import"./scopeId-Brt4yQ2W.js";import"./VMenu-CiscxyXl.js";import"./VCheckboxBtn-GLY3abaH.js";import"./VChip-CISZQW4c.js";import"./filter-CBgIupOh.js";const $={class:"customizer-heading d-flex align-center justify-space-between"},q=m("div",null,[m("h6",{class:"text-h6"},"Add New Branch")],-1),M={class:"d-flex align-center gap-1"},se={__name:"add",props:{isNavDrawerOpen:Boolean,updateBranches:Function},emits:["update:isNavDrawerOpen","updateBranches"],setup(w,{emit:N}){o([]);const d=O(),l=o(""),i=o(null),p=o([]),s=o(!1),f=w,v=o(null),c=N,V=r=>!!r||"Required field";x(async()=>{await b()});const b=async()=>{try{await d.getAllCountries(),p.value=d.allCountries}catch(r){console.error("Error fetching countries:",r)}},h=async()=>{if(!await v.value.validate())return;const e={name:l.value,country_id:i.value};try{s.value=!0,await d.addBranch(e),s.value=!1,l.value="",i.value=null,c("update:isNavDrawerOpen",!1),c("updateBranches")}catch(u){console.error("Failed to add branch:",u)}};return(r,e)=>{const u=B,g=y;return D(),C(z,{modelValue:f.isNavDrawerOpen,"onUpdate:modelValue":e[3]||(e[3]=a=>f.isNavDrawerOpen=a),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:n(()=>[m("div",$,[q,m("div",M,[t(_,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:e[0]||(e[0]=a=>c("update:isNavDrawerOpen",!1))},{default:n(()=>[t(F,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),t(S),t(U,{ref_key:"refForm",ref:v,onSubmit:A(h,["prevent"]),class:"form-padding mt-4"},{default:n(()=>[t(u,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value=a),label:"Branch Name",rules:[V],class:"mb-2"},null,8,["modelValue","rules"]),t(g,{modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=a=>i.value=a),items:p.value,"item-title":a=>a.name,"item-value":a=>a.id,label:"Country Name",placeholder:"Select Country",rules:[V],clearable:""},null,8,["modelValue","items","item-title","item-value","rules"]),t(_,{loading:s.value,disabled:s.value,color:"primary",onClick:h,class:"mt-4",block:""},{default:n(()=>[k(" Add ")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{se as default};