import{_ as g}from"./AppTextField-DNSGeJTs.js";import{c as b}from"./commonFunction-DW_UOJx8.js";import{S as u}from"./sweetalert2-z6gKu1nJ.js";import y from"./add-DNxO04nC.js";import k from"./edit-BQ2Ir3E2.js";import{V as x}from"./VCardText-Dsl0ulqP.js";import{V as D,a as w}from"./VRow-SEQ7anqH.js";import{r as n,H as I,a as O,o as T,c as $,b as e,e as o,a7 as A,v as F,d as S,a1 as _,F as U}from"./main-CW6J46NJ.js";import{V as E}from"./VDataTable-CIl3qruu.js";import{V as z}from"./VCard-lZrVp0iR.js";import"./VTextField-gZ8HwU6B.js";import"./index-W_VNoMv-.js";import"./index-F08MoCw-.js";import"./forwardRefs-D3j0TLhE.js";import"./api-Cgi-Fhk5.js";import"./index-BYrzgnBV.js";import"./AppAutocomplete-CJMH10Vr.js";import"./VSelect-CcVz3iFK.js";import"./VList-Diz4LjG6.js";import"./ssrBoot-DaOPCd7x.js";import"./VAvatar-ByMc3J0n.js";import"./VImg-BGvtR03T.js";import"./VDivider-ErUZE3J0.js";import"./dialog-transition-CTgTQmSB.js";import"./lazy-Bh2QwbdU.js";import"./scopeId-0n4uV60R.js";import"./VMenu-CUI-NTkG.js";import"./VCheckboxBtn-BJK3_V3x.js";import"./VChip-GCsyCK7C.js";import"./VSlideGroup-BPtW-2Zq.js";import"./filter-HlywHvyJ.js";import"./VNavigationDrawer-wfYw4-A3.js";import"./VForm-DXz4M86Q.js";/* empty css              */import"./VPagination-BK4h2J6a.js";import"./VTable-C6z4aAig.js";const H={class:"d-flex gap-1"},ge={__name:"index",setup(L){const i=b(),s=n([]),l=n(!1),m=n(!1);I(async()=>{await f()});const f=async()=>{c.value=!0,await i.getBranches(),s.value=i.branches,c.value=!1},h=[{title:"Branch Name",key:"name"},{title:"Country Name",key:"country.name"},{title:"Actions",key:"actions",sortable:!1}],V=n({id:"",name:""}),c=n(!1),d=n(V.value),B=r=>{d.value=r,console.log(d.value),m.value=!0},C=async r=>{const t={...r};if((await u.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await i.deleteBranch(t.id),s.value=i.branches,u.fire("Deleted!","The item has been deleted.","success")}catch{u.fire("Error!","There was an error deleting the item.","error")}};return(r,t)=>{const v=g,p=O("IconBtn");return T(),$(U,null,[e(y,{isNavDrawerOpen:l.value,"onUpdate:isNavDrawerOpen":t[0]||(t[0]=a=>l.value=a),onUpdateBranches:f},null,8,["isNavDrawerOpen"]),e(k,{isNavDrawerOpen:m.value,"onUpdate:isNavDrawerOpen":t[1]||(t[1]=a=>m.value=a),editedItem:d.value},null,8,["isNavDrawerOpen","editedItem"]),e(z,{loading:c.value},{default:o(()=>[e(x,null,{default:o(()=>[e(D,null,{default:o(()=>[e(w,{cols:"12","offset-md":"7",md:"3"},{default:o(()=>[e(v,{modelValue:r.search,"onUpdate:modelValue":t[2]||(t[2]=a=>r.search=a),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),e(w,{cols:"12",md:"2"},{default:o(()=>[e(A,{style:{"z-index":"1001"},onClick:t[3]||(t[3]=a=>l.value=!0)},{default:o(()=>[F("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),e(E,{headers:h,items:s.value||[],"items-per-page":10,class:"text-no-wrap color-black table-padding"},{"item.actions":o(({item:a})=>[S("div",H,[e(p,{onClick:N=>B(a)},{default:o(()=>[e(_,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(p,{onClick:N=>C(a)},{default:o(()=>[e(_,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items"])]),_:1},8,["loading"])],64)}}};export{ge as default};
