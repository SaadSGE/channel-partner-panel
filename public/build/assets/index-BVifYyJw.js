import{_ as N}from"./AppTextField-X1ewiPvb.js";import{c as h}from"./commonFunction-CuNRXKf3.js";import{S as u}from"./sweetalert2-z6gKu1nJ.js";import x from"./add-BAT8t4Xt.js";import B from"./edit-MzGp5YS6.js";import{V as D}from"./VCardText-CoYlGcSx.js";import{V as I,a as v}from"./VRow-CemoShqY.js";import{r as t,H as b,a as y,o as O,c as T,b as e,e as n,a9 as $,v as F,d as A,a2 as w,F as S}from"./main-BbKAJsEu.js";import{V as E}from"./VDataTable-CS-xTMV0.js";import{V as U}from"./VCard-WsNu-CUP.js";import"./VInput-CKT3AF91.js";import"./index-a1egYM2L.js";import"./index-jfRb4oAi.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-Dw3CtdIS.js";import"./VNavigationDrawer-BzG-vzae.js";import"./scopeId-E6Tfu-lp.js";import"./ssrBoot-DDoGs2RE.js";import"./VDivider-a8NmzqIF.js";import"./VForm-BmHayyK8.js";import"./VAvatar-DsnYE8Rc.js";import"./VImg-of_73Tzw.js";/* empty css              */import"./VPagination-GnhuUf2O.js";import"./VSelect-BW-p8TCG.js";import"./VList-BaVlfDaw.js";import"./dialog-transition-DUpWxnkh.js";import"./VMenu-B_SQHP0s.js";import"./VCheckboxBtn-DMWKYr2O.js";import"./VChip-CDNaVAGu.js";import"./VTable-DqiEzlVe.js";import"./filter-6S-z_YZq.js";const z={class:"d-flex gap-1"},Ve={__name:"index",setup(H){const i=h();t(""),t(""),t(""),t(null),t([]);const l=t([]);t([]);const s=t(!1),m=t(!1);b(async()=>{d.value=!0,i.intakes.length===0&&await i.getIntakes(),l.value=i.intakes,d.value=!1});const _=[{title:"Name",key:"name"},{title:"Actions",key:"actions",sortable:!1}],V=t({id:"",name:""});t(-1);const d=t(!1),p=t(V.value),k=r=>{p.value=r,console.log(p.value),m.value=!0},C=async r=>{const a={...r};if((await u.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await i.deleteIntake(a.id),l.value=i.intakes,u.fire("Deleted!","The item has been deleted.","success")}catch{u.fire("Error!","There was an error deleting the item.","error")}};return(r,a)=>{const f=N,c=y("IconBtn");return O(),T(S,null,[e(x,{isNavDrawerOpen:s.value,"onUpdate:isNavDrawerOpen":a[0]||(a[0]=o=>s.value=o)},null,8,["isNavDrawerOpen"]),e(B,{isNavDrawerOpen:m.value,"onUpdate:isNavDrawerOpen":a[1]||(a[1]=o=>m.value=o),editedItem:p.value},null,8,["isNavDrawerOpen","editedItem"]),e(U,{loading:d.value},{default:n(()=>[e(D,null,{default:n(()=>[e(I,null,{default:n(()=>[e(v,{cols:"12","offset-md":"7",md:"3"},{default:n(()=>[e(f,{modelValue:r.search,"onUpdate:modelValue":a[2]||(a[2]=o=>r.search=o),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),e(v,{cols:"12",md:"2"},{default:n(()=>[e($,{style:{"z-index":"1001"},onClick:a[3]||(a[3]=o=>s.value=!0)},{default:n(()=>[F("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),e(E,{headers:_,items:l.value||[],"items-per-page":5,class:"text-no-wrap color-black table-padding"},{"item.actions":n(({item:o})=>[A("div",z,[e(c,{onClick:g=>k(o)},{default:n(()=>[e(w,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(c,{onClick:g=>C(o)},{default:n(()=>[e(w,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items"])]),_:1},8,["loading"])],64)}}};export{Ve as default};