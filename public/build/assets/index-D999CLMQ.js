import{_ as B}from"./AppCardActions-psTMY8MR.js";import{_ as A}from"./AppTextField-X1ewiPvb.js";import{_ as C}from"./AppSelect-DbwsGN5P.js";import{_ as H}from"./Filters-bDBGBxPQ.js";import{c as M}from"./commonFunction-CuNRXKf3.js";import{V as S}from"./VRow-CemoShqY.js";import{V as y}from"./VCardText-CoYlGcSx.js";import{V as $}from"./VSpacer-BGQLKd_7.js";import{V as b}from"./VDataTableServer-DWbJfYxq.js";import{V as P}from"./VCard-WsNu-CUP.js";import{r as a,H as z,w as N,o as g,c as E,b as l,e as r,f as I,z as L,d as f}from"./main-BbKAJsEu.js";import{f as k}from"./format-BCRuzLUD.js";import"./index-a1egYM2L.js";import"./dialog-transition-DUpWxnkh.js";import"./forwardRefs-D3j0TLhE.js";import"./scopeId-E6Tfu-lp.js";import"./index-jfRb4oAi.js";import"./VInput-CKT3AF91.js";import"./VTextField-Dw3CtdIS.js";import"./VSelect-BW-p8TCG.js";import"./VList-BaVlfDaw.js";import"./ssrBoot-DDoGs2RE.js";import"./VAvatar-DsnYE8Rc.js";import"./VImg-of_73Tzw.js";import"./VDivider-a8NmzqIF.js";import"./VMenu-B_SQHP0s.js";import"./VCheckboxBtn-DMWKYr2O.js";import"./VChip-CDNaVAGu.js";import"./AppDateTimePicker-D18XDtdF.js";import"./AppAutocomplete-DJvo5W9e.js";import"./filter-6S-z_YZq.js";import"./rolePermission-BL-bshKQ.js";import"./helpers-DYwcM94F.js";import"./user-DzBsQTkr.js";/* empty css              */import"./VDataTable-CS-xTMV0.js";import"./VPagination-GnhuUf2O.js";import"./VTable-DqiEzlVe.js";const O={class:"me-3 d-flex gap-3"},R={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},Y={style:{"inline-size":"15.625rem"}},Ce={__name:"index",setup(j){const u=a([]),c=M(),i=a(!1),V=a(0),s=a(10),v=a(1),T=a(),U=a(),m=a(""),n=a(null),p=a(null),d=a(null),w=a([{title:"Date",key:"created_at",formatFn:o=>k(new Date(o),"dd-MM-yyyy HH:mm")},{title:"User",key:"user.name_with_email"},{title:"Yesterday",key:"yesterday_tasks"},{title:"Today",key:"today_plans"},{title:"Blockages",key:"blockers"}]);z(()=>{_()});const _=async()=>{try{i.value=!0,await c.getDailyTasks(d.value,v.value,s.value,m.value,T.value,U.value,n.value,p.value),u.value=c.tasks.map(o=>({...o,created_at:k(new Date(o.created_at),"dd-MM-yyyy HH:mm")})),V.value=c.tasks.total}catch(o){console.error("Failed to fetch tasks:",o)}finally{i.value=!1}};return N([m,n,p,d],()=>{_()}),(o,e)=>{const x=H,F=C,D=A,h=B;return g(),E("section",null,[l(P,{class:"mb-6"},{default:r(()=>[l(h,{title:"Tasks",loading:i.value,"no-actions":""},{default:r(()=>[o.$can("filter","user")?(g(),I(y,{key:0},{default:r(()=>[l(S,null,{default:r(()=>[l(x,{"selected-dateFrom":n.value,"selected-dateTo":p.value,"selected-user":d.value,onUpdateDateFrom:e[0]||(e[0]=t=>n.value=t),onUpdateDateTo:e[1]||(e[1]=t=>p.value=t),onUpdateUser:e[2]||(e[2]=t=>d.value=t)},null,8,["selected-dateFrom","selected-dateTo","selected-user"])]),_:1})]),_:1})):L("",!0),l(y,{class:"d-flex flex-wrap gap-4"},{default:r(()=>[f("div",O,[l(F,{"model-value":s.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":e[3]||(e[3]=t=>s.value=parseInt(t,10))},null,8,["model-value"])]),l($),f("div",R,[f("div",Y,[l(D,{modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=t=>m.value=t),placeholder:"Search here"},null,8,["modelValue"])])])]),_:1}),l(b,{"items-per-page":s.value,"onUpdate:itemsPerPage":e[5]||(e[5]=t=>s.value=t),page:v.value,"onUpdate:page":e[6]||(e[6]=t=>v.value=t),loading:i.value,"onUpdate:options":o.updateOptions,"items-length":u.value.length,headers:w.value,items:u.value,"item-value":"total",class:"text-no-wrap text-sm rounded-0"},null,8,["items-per-page","page","loading","onUpdate:options","items-length","headers","items"])]),_:1},8,["loading"])]),_:1})])}}};export{Ce as default};