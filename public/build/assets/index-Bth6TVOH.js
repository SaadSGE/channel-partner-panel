import{_ as N}from"./AppTextField-DNSGeJTs.js";import{c as h}from"./commonFunction-DW_UOJx8.js";import{S as u}from"./sweetalert2-z6gKu1nJ.js";import x from"./add-DsmDYfbq.js";import B from"./edit-aFTbys5p.js";import{V as D}from"./VCardText-Dsl0ulqP.js";import{V as I,a as v}from"./VRow-SEQ7anqH.js";import{r as t,H as b,a as y,o as O,c as T,b as e,e as r,a7 as $,v as F,d as A,a1 as w,F as S}from"./main-CW6J46NJ.js";import{V as E}from"./VDataTable-CIl3qruu.js";import{V as U}from"./VCard-lZrVp0iR.js";import"./VTextField-gZ8HwU6B.js";import"./index-W_VNoMv-.js";import"./index-F08MoCw-.js";import"./forwardRefs-D3j0TLhE.js";import"./api-Cgi-Fhk5.js";import"./index-BYrzgnBV.js";import"./VNavigationDrawer-wfYw4-A3.js";import"./scopeId-0n4uV60R.js";import"./ssrBoot-DaOPCd7x.js";import"./VDivider-ErUZE3J0.js";import"./VForm-DXz4M86Q.js";import"./VAvatar-ByMc3J0n.js";import"./VImg-BGvtR03T.js";/* empty css              */import"./VPagination-BK4h2J6a.js";import"./VSelect-CcVz3iFK.js";import"./VList-Diz4LjG6.js";import"./dialog-transition-CTgTQmSB.js";import"./lazy-Bh2QwbdU.js";import"./VMenu-CUI-NTkG.js";import"./VCheckboxBtn-BJK3_V3x.js";import"./VChip-GCsyCK7C.js";import"./VSlideGroup-BPtW-2Zq.js";import"./VTable-C6z4aAig.js";import"./filter-HlywHvyJ.js";const z={class:"d-flex gap-1"},ge={__name:"index",setup(H){const i=h();t(""),t(""),t(""),t(null),t([]);const l=t([]);t([]);const s=t(!1),m=t(!1);b(async()=>{d.value=!0,i.intakes.length===0&&await i.getIntakes(),l.value=i.intakes,d.value=!1});const _=[{title:"Name",key:"name"},{title:"Actions",key:"actions",sortable:!1}],V=t({id:"",name:""});t(-1);const d=t(!1),p=t(V.value),k=n=>{p.value=n,console.log(p.value),m.value=!0},C=async n=>{const o={...n};if((await u.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await i.deleteIntake(o.id),l.value=i.intakes,u.fire("Deleted!","The item has been deleted.","success")}catch{u.fire("Error!","There was an error deleting the item.","error")}};return(n,o)=>{const f=N,c=y("IconBtn");return O(),T(S,null,[e(x,{isNavDrawerOpen:s.value,"onUpdate:isNavDrawerOpen":o[0]||(o[0]=a=>s.value=a)},null,8,["isNavDrawerOpen"]),e(B,{isNavDrawerOpen:m.value,"onUpdate:isNavDrawerOpen":o[1]||(o[1]=a=>m.value=a),editedItem:p.value},null,8,["isNavDrawerOpen","editedItem"]),e(U,{loading:d.value},{default:r(()=>[e(D,null,{default:r(()=>[e(I,null,{default:r(()=>[e(v,{cols:"12","offset-md":"7",md:"3"},{default:r(()=>[e(f,{modelValue:n.search,"onUpdate:modelValue":o[2]||(o[2]=a=>n.search=a),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),e(v,{cols:"12",md:"2"},{default:r(()=>[e($,{style:{"z-index":"1001"},onClick:o[3]||(o[3]=a=>s.value=!0)},{default:r(()=>[F("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),e(E,{headers:_,items:l.value||[],"items-per-page":5,class:"text-no-wrap color-black table-padding"},{"item.actions":r(({item:a})=>[A("div",z,[e(c,{onClick:g=>k(a)},{default:r(()=>[e(w,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(c,{onClick:g=>C(a)},{default:r(()=>[e(w,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items"])]),_:1},8,["loading"])],64)}}};export{ge as default};
