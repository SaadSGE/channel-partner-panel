import{_ as h}from"./AppTextField-CJNePmKO.js";import{c as k}from"./commonFunction-BLJLFjho.js";import{S as c}from"./sweetalert2-z6gKu1nJ.js";import x from"./add-DupsV1mV.js";import B from"./edit-DIh1qlYn.js";import{V as y}from"./VCardText-DQAZyNzv.js";import{V as b,a as w}from"./VRow-D11-WciL.js";import{r,H as I,a as E,o as O,c as T,b as e,e as a,a9 as $,v as F,d as A,a2 as _,F as S}from"./main-BuHbEuHJ.js";import{V as U}from"./VDataTable-BxsVuR94.js";import{V as z}from"./VCard-Dhty15tX.js";import"./VInput-CCox_OUa.js";import"./index-CSShtD91.js";import"./index-DaC6jyKz.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-B_-rMKcI.js";import"./AppTextarea-CIfX3v3O.js";import"./VNavigationDrawer-IwbTI5RT.js";import"./scopeId-eRg5DMNb.js";import"./ssrBoot-Bn-b0LnU.js";import"./VDivider-DMuXb6qS.js";import"./VForm-G6b_bIRX.js";import"./VAvatar-BNyCSDbn.js";import"./VImg-DCopR1T8.js";/* empty css              */import"./VPagination-CaSAnNnc.js";import"./VSelect-DtCOCXg9.js";import"./VList-BVGy6Px1.js";import"./dialog-transition-DlI8lVmf.js";import"./VMenu-BzEZUkU1.js";import"./VCheckboxBtn-pYHs74bi.js";import"./VChip-BGt3DX3B.js";import"./VTable-CBTxvEMr.js";import"./filter-DIwO9oFD.js";const H={class:"d-flex gap-1"},Ne={__name:"index",setup(L){const i=k(),s=r([]),l=r(!1),m=r(!1);I(async()=>{await u()});const u=async()=>{d.value=!0,await i.getEvents(),s.value=i.events,d.value=!1},V=[{title:"Event Name",key:"name"},{title:"Description",key:"description"},{title:"Actions",key:"actions",sortable:!1}],C=r({id:"",name:""}),d=r(!1),f=r(C.value),N=n=>{f.value=n,m.value=!0},g=async n=>{const t={...n};if((await c.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await i.deleteEvent(t.id),s.value=i.events,c.fire("Deleted!","The item has been deleted.","success")}catch{c.fire("Error!","There was an error deleting the item.","error")}};return(n,t)=>{const v=h,p=E("IconBtn");return O(),T(S,null,[e(x,{isNavDrawerOpen:l.value,"onUpdate:isNavDrawerOpen":t[0]||(t[0]=o=>l.value=o),onUpdateEvents:u},null,8,["isNavDrawerOpen"]),e(B,{isNavDrawerOpen:m.value,"onUpdate:isNavDrawerOpen":t[1]||(t[1]=o=>m.value=o),editedItem:f.value},null,8,["isNavDrawerOpen","editedItem"]),e(z,{loading:d.value},{default:a(()=>[e(y,null,{default:a(()=>[e(b,null,{default:a(()=>[e(w,{cols:"12","offset-md":"7",md:"3"},{default:a(()=>[e(v,{modelValue:n.search,"onUpdate:modelValue":t[2]||(t[2]=o=>n.search=o),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),e(w,{cols:"12",md:"2"},{default:a(()=>[e($,{style:{"z-index":"1001"},onClick:t[3]||(t[3]=o=>l.value=!0)},{default:a(()=>[F("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),e(U,{headers:V,items:s.value||[],"items-per-page":10,class:"text-no-wrap color-black table-padding"},{"item.actions":a(({item:o})=>[A("div",H,[e(p,{onClick:D=>N(o)},{default:a(()=>[e(_,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(p,{onClick:D=>g(o)},{default:a(()=>[e(_,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items"])]),_:1},8,["loading"])],64)}}};export{Ne as default};
