import{_ as U}from"./AppSelect-D2Erl3Sx.js";import{_ as O}from"./AppTextarea-DDJmHz2b.js";import{_ as $}from"./AppTextField-BObPlpdg.js";import{r as t,o as A,f as h,e as o,d as r,b as a,a2 as C,a9 as i,v as V,J as z,a8 as B}from"./main-Fnquxq59.js";import{c as j}from"./commonFunction-aHx3jXPa.js";import{V as q}from"./VNavigationDrawer-CZIABg5Y.js";import{V as H}from"./VDivider-yXWRSAV-.js";import{V as P}from"./VInput-CZub6Zk0.js";import{V as I}from"./VTextField-CaLyShim.js";import{V as J}from"./VDialog-DJxSFL81.js";import{V as M,b as R,c as W}from"./VCard-BV1M2n13.js";import{V as E}from"./VCardText-BZC4GHLq.js";import{V as G}from"./VColorPicker-BXv0s5wK.js";import{V as K}from"./VSpacer-DsGM5CTR.js";import{V as S}from"./VCheckbox-mR6HNuo-.js";import{V as Q}from"./VForm-B6K_oZ0i.js";import"./VSelect-nUKQwNEk.js";import"./forwardRefs-D3j0TLhE.js";import"./VList-DRH0Z_ga.js";import"./index-MHNCXv1N.js";import"./ssrBoot-GPPxPnS1.js";import"./index-BIh3WpW1.js";import"./VAvatar-BvpeSpy9.js";import"./VImg-D0Y1lsUC.js";import"./dialog-transition-BbDK651E.js";import"./scopeId-B5QIExbG.js";import"./VMenu-Ck1TOVry.js";import"./VCheckboxBtn-1CZZxZt9.js";import"./VChip-Dt8JHKvn.js";/* empty css              */const X={class:"customizer-heading d-flex align-center justify-space-between pa-6"},Y=r("div",null,[r("h6",{class:"text-h6"},"Add New Lead Status")],-1),Z={class:"d-flex align-center gap-1"},ee={class:"mb-4"},ae={class:"d-flex align-center gap-2"},Oe={__name:"add",props:{isNavDrawerOpen:Boolean,updateLeadStatuses:Function},emits:["update:isNavDrawerOpen","updateLeadStatuses"],setup(k,{emit:D}){const N=j(),n=t(""),u=t(""),s=t("#000000");t(null);const m=t(!1),p=t(!1),v=t(!1),c=t(null),L=[{title:"Hot",value:"hot"},{title:"Warm",value:"warm"},{title:"Cold",value:"cold"}],d=t(!1),w=k,y=t(null),b=D,f=_=>!!_||"Required field",g=async()=>{if(!await y.value.validate())return;const e={name:n.value,description:u.value,color_code:s.value,health_type:c.value,convert_to_student:p.value,dead_lead:v.value};console.log(e);try{m.value=!0,await N.addLeadStatus(e),m.value=!1,n.value="",u.value="",s.value="#000000",p.value=!1,v.value=!1,c.value=null,b("update:isNavDrawerOpen",!1),b("updateLeadStatuses")}catch(x){console.error("Failed to add lead status:",x)}};return(_,e)=>{const x=$,T=O,F=U;return A(),h(q,{modelValue:w.isNavDrawerOpen,"onUpdate:modelValue":e[12]||(e[12]=l=>w.isNavDrawerOpen=l),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:o(()=>[r("div",X,[Y,r("div",Z,[a(i,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:e[0]||(e[0]=l=>b("update:isNavDrawerOpen",!1))},{default:o(()=>[a(C,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),a(H),a(Q,{ref_key:"refForm",ref:y,onSubmit:B(g,["prevent"]),class:"pa-6"},{default:o(()=>[a(x,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value=l),label:"Status Name",rules:[f],class:"mb-4"},null,8,["modelValue","rules"]),a(T,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=l=>u.value=l),label:"Description",rules:[f],class:"mb-4"},null,8,["modelValue","rules"]),r("div",ee,[a(P,{class:"mb-2"},{default:o(()=>[V("Color Code")]),_:1}),r("div",ae,[a(I,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=l=>s.value=l),rules:[f],readonly:"",style:z({backgroundColor:s.value})},null,8,["modelValue","rules","style"]),a(i,{icon:"",variant:"tonal",onClick:e[4]||(e[4]=l=>d.value=!0)},{default:o(()=>[a(C,{icon:"tabler-palette"})]),_:1})])]),a(J,{modelValue:d.value,"onUpdate:modelValue":e[8]||(e[8]=l=>d.value=l),width:"300"},{default:o(()=>[a(M,null,{default:o(()=>[a(R,{class:"d-flex justify-space-between align-center pa-4"},{default:o(()=>[V(" Select Color "),a(i,{icon:"",variant:"text",onClick:e[5]||(e[5]=l=>d.value=!1)},{default:o(()=>[a(C,{icon:"tabler-x"})]),_:1})]),_:1}),a(E,null,{default:o(()=>[a(G,{modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=l=>s.value=l),mode:"hex","hide-inputs":""},null,8,["modelValue"])]),_:1}),a(W,null,{default:o(()=>[a(K),a(i,{color:"primary",onClick:e[7]||(e[7]=l=>d.value=!1)},{default:o(()=>[V(" Done ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(F,{modelValue:c.value,"onUpdate:modelValue":e[9]||(e[9]=l=>c.value=l),items:L,label:"Health Type",rules:[f],class:"mb-4"},null,8,["modelValue","rules"]),a(S,{modelValue:p.value,"onUpdate:modelValue":e[10]||(e[10]=l=>p.value=l),label:"Success Lead",class:"mb-2",density:"comfortable"},null,8,["modelValue"]),a(S,{modelValue:v.value,"onUpdate:modelValue":e[11]||(e[11]=l=>v.value=l),label:"Dead Lead",class:"mb-4",density:"comfortable"},null,8,["modelValue"]),a(i,{loading:m.value,disabled:m.value,color:"primary",onClick:g,block:""},{default:o(()=>[V(" Add ")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{Oe as default};