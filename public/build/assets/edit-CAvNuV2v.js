import{_ as L}from"./AppTextField-Dj_2VU4u.js";import{_ as I}from"./AppAutocomplete-jm6vCFFl.js";import{H as M,r as a,w as $,a as T,o as p,f as V,e as i,d as r,b as l,a1 as w,a7 as g,c as S,z as b,v as U,a6 as j}from"./main-ujAelBRR.js";import{c as q}from"./commonFunction-DMBq5GIm.js";import{V as E}from"./VNavigationDrawer-DpagIYL6.js";import{V as H}from"./VDivider-DXhZ4_Ma.js";import{V as R}from"./VImg-B-k9boYc.js";import{V as G}from"./VForm-Cj7R7EXF.js";import"./form-DjAS8tMT.js";import"./VTextField-BHFVqzxS.js";/* empty css                   */import"./VCounter-CdDHwVPl.js";import"./index-CkRDasSw.js";import"./index-DlgBW9fg.js";import"./VField-fQZzp9Ta.js";import"./easing-CjukEv2V.js";import"./VInput-BKqZjaTf.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-DIeZ6EOS.js";import"./VList-NX9tgIKQ.js";import"./ssrBoot-yb-Fj9Tf.js";import"./VAvatar-D8FR7LeD.js";import"./dialog-transition-BeKC65XY.js";import"./VMenu-BeXH8Btp.js";import"./VOverlay-D2BMFUHd.js";import"./lazy-BRQ2t-65.js";import"./scopeId-DeUnOUYx.js";import"./VCheckboxBtn-DNZac1JW.js";import"./VSelectionControl-Doks1cAL.js";import"./VChip-CqAu_joY.js";import"./VSlideGroup-DoQsWgeA.js";import"./filter-Ps3BHC02.js";import"./api-BGzK74uO.js";import"./index-B3bPRkoL.js";const J={class:"customizer-heading d-flex align-center justify-space-between"},K=r("div",null,[r("h6",{class:"text-h6"},"Edit University")],-1),P={class:"d-flex align-center gap-1"},Q={class:"mb-2"},W=r("label",{class:"mb-2",style:{"font-size":"0.9rem"}},"University Logo",-1),X={key:0,class:"image-container"},Oe={__name:"edit",props:{isNavDrawerOpen:Boolean,editedItem:Object,universities:Array},emits:["update:isNavDrawerOpen"],setup(A,{emit:F}){M(async()=>{v.courseDetails.length===0&&await v.getCourseDetails(),k.value=v.countries});const _=A,v=q(),n=a(""),u=a(""),m=a(""),c=a(""),d=a("");a([]);const k=a([]);a([]),a([]);const f=a(!1),h=a(null),N=a(null),C=F;$(()=>_.editedItem,async o=>{o&&(n.value=o.country_id,u.value=o.name,m.value=o.address,c.value=o.logo,h.value=o.id)},{immediate:!0});const y=o=>!!o||"Required field",x=async()=>{N.value.validate().then(o=>{if(o.valid)B();else return})},s=a(!1),B=async()=>{const o={countryId:n.value,name:u.value,address:m.value,logo:s.value===!1?c.value:d.value[0].upload.data};try{f.value=!0,await v.updateUniversity(h.value,o),f.value=!1,u.value="",m.value="",c.value=null,n.value="",C("update:isNavDrawerOpen",!1)}catch(e){console.error("Failed to add university:",e)}};return(o,e)=>{const O=I,D=L,z=T("VueFileAgent");return p(),V(E,{modelValue:_.isNavDrawerOpen,"onUpdate:modelValue":e[8]||(e[8]=t=>_.isNavDrawerOpen=t),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:i(()=>[r("div",J,[K,r("div",P,[l(g,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:e[0]||(e[0]=t=>C("update:isNavDrawerOpen",!1))},{default:i(()=>[l(w,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),l(H),l(G,{ref_key:"refForm",ref:N,onSubmit:j(x,["prevent"]),class:"form-padding mt-4"},{default:i(()=>[l(O,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t),items:k.value,"item-title":t=>t.name,"item-value":t=>t.id,label:"Country",placeholder:"Select Country",rules:[y],class:"mb-2"},null,8,["modelValue","items","item-title","item-value","rules"]),l(D,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=t=>u.value=t),label:"University Name",rules:[y],class:"mb-2"},null,8,["modelValue","rules"]),l(D,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=t=>m.value=t),label:"University Address",rules:[y],class:"mb-2"},null,8,["modelValue","rules"]),r("div",Q,[W,s.value?b("",!0):(p(),S("div",X,[l(R,{src:c.value,"aspect-ratio":"16/9",height:"150"},null,8,["src"])])),s.value?(p(),V(z,{key:1,helpText:"Choose university Logo",deletable:!0,modelValue:d.value,"onUpdate:modelValue":e[4]||(e[4]=t=>d.value=t),rawModelValue:d.value,"onUpdate:rawModelValue":e[5]||(e[5]=t=>d.value=t),rules:[y]},null,8,["modelValue","rawModelValue","rules"])):b("",!0)]),s.value?(p(),V(g,{key:0,onClick:e[6]||(e[6]=t=>s.value=!1),color:"info",class:"mb-2 mt-2",style:{float:"right"}},{default:i(()=>[l(w,{start:"",icon:"tabler-arrow-left"}),U(" Back ")]),_:1})):b("",!0),s.value?b("",!0):(p(),V(g,{key:1,onClick:e[7]||(e[7]=t=>s.value=!0),color:"success",class:"mb-2 mt-2",style:{float:"right"}},{default:i(()=>[U(" Change Logo "),l(w,{end:"",icon:"tabler-cloud-upload"})]),_:1})),l(g,{loading:f.value,disabled:f.value,color:"primary",onClick:x,class:"mt-4",block:""},{default:i(()=>[U("Update")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{Oe as default};