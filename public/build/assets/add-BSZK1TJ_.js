import{_ as D}from"./AppTextField-BCvUXX3V.js";import{_ as F}from"./AppAutocomplete-l16l5B7F.js";import{r as t,H as C,a as k,o as O,f as z,e as v,d as i,b as a,a1 as B,a7 as w,v as L,a6 as M}from"./main-kzKK1XE4.js";import{c as T}from"./commonFunction-DHBCL3Q6.js";import{V as S}from"./VNavigationDrawer-DXNbk8u4.js";import{V as $}from"./VDivider-BRvIS9W0.js";import{V as q}from"./VForm-Bgr5kXKW.js";import"./form-CvSQlg_q.js";import"./VTextField-D9hGg4NW.js";/* empty css                   */import"./VCounter-4ZaRFOI2.js";import"./index-BlZJFp_B.js";import"./index-LtM8Y5gz.js";import"./VField-BVEdELyf.js";import"./easing-CjukEv2V.js";import"./VInput-D5j0P0kz.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-B-OkTK7V.js";import"./VList-XkRzCeNh.js";import"./ssrBoot-vn9iu_kZ.js";import"./VAvatar-BVVy9Zei.js";import"./VImg-C74ZfjM4.js";import"./dialog-transition-BOcmMYsD.js";import"./VMenu-BVP4sHy0.js";import"./VOverlay-Y9TS9n9w.js";import"./lazy-Ko0eglkA.js";import"./scopeId-B2QFYqCu.js";import"./VCheckboxBtn-DO-m-uTG.js";import"./VSelectionControl-BVXMxy4r.js";import"./VChip-CUMWd3v2.js";import"./VSlideGroup-BnF1OZOC.js";import"./filter-BqVARIH-.js";import"./api-CV6Ytb4u.js";import"./index-B3bPRkoL.js";const I={class:"customizer-heading d-flex align-center justify-space-between"},j=i("div",null,[i("h6",{class:"text-h6"},"Add New University")],-1),H={class:"d-flex align-center gap-1"},R={class:"mb-2"},E=i("label",{class:"mb-2",style:{"font-size":"0.9rem"}},"University Logo",-1),G="/api/university-logo-upload",he={__name:"add",props:{isNavDrawerOpen:Boolean},emits:["update:isNavDrawerOpen"],setup(U,{emit:N}){t([]);const s=T(),r=t(""),n=t(""),u=t(""),m=t(),c=t(),f=t([]);t([]),t([]);const d=t(!1),V=U,y=t(null),g=N;C(async()=>{s.countries.length===0&&await s.getCountries(),f.value=s.countries});const p=l=>!!l||"Required field",b=async()=>{y.value.validate().then(l=>{if(l.valid)x();else return})},x=async()=>{const l={countryId:r.value,name:n.value,address:u.value,logo:m.value[0].upload.data};try{d.value=!0,await s.addUniversity(l),d.value=!1,n.value="",u.value="",m.value=null,r.value="",g("update:isNavDrawerOpen",!1)}catch(e){console.error("Failed to add university:",e)}};return(l,e)=>{const A=F,_=D,h=k("VueFileAgent");return O(),z(S,{modelValue:V.isNavDrawerOpen,"onUpdate:modelValue":e[6]||(e[6]=o=>V.isNavDrawerOpen=o),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:v(()=>[i("div",I,[j,i("div",H,[a(w,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:e[0]||(e[0]=o=>g("update:isNavDrawerOpen",!1))},{default:v(()=>[a(B,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),a($),a(q,{ref_key:"refForm",ref:y,onSubmit:M(b,["prevent"]),class:"form-padding mt-4"},{default:v(()=>[a(A,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o),items:f.value,"item-title":o=>o.name,"item-value":o=>o.id,label:"Country",placeholder:"Select Country",rules:[p],class:"mb-2"},null,8,["modelValue","items","item-title","item-value","rules"]),a(_,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=o=>n.value=o),label:"University Name",rules:[p],class:"mb-2"},null,8,["modelValue","rules"]),a(_,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=o=>u.value=o),label:"University Address",rules:[p],class:"mb-2"},null,8,["modelValue","rules"]),i("div",R,[E,a(h,{multiple:!1,uploadUrl:G,helpText:"Choose university Logo",deletable:!0,modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=o=>m.value=o),rawModelValue:c.value,"onUpdate:rawModelValue":e[5]||(e[5]=o=>c.value=o),rules:[p]},null,8,["modelValue","rawModelValue","rules"])]),a(w,{loading:d.value,disabled:d.value,color:"primary",onClick:b,class:"mt-4",block:""},{default:v(()=>[L("Add")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{he as default};
