import{_ as h}from"./AppTextField-DFkCpbYz.js";import{c as k}from"./commonFunction-DaV-cpx8.js";import{S as p}from"./sweetalert2-z6gKu1nJ.js";import x from"./add-DpX4HPm7.js";import B from"./edit-BacASM8a.js";import{V as D}from"./VCardText-haI9Z-IX.js";import{V as b,a as v}from"./VRow-s-aEvbE2.js";import{r,H as I,a as T,o as O,c as A,b as e,e as a,a9 as $,v as F,d as S,a2 as C,F as z}from"./main-C3zi_SKQ.js";import{V as E}from"./VDataTable-XBMr3zT1.js";import{V as U}from"./VCard-CiUXVH6b.js";import"./VInput-DkaOtTDM.js";import"./index-DPXcXuYg.js";import"./index-C8YGC3Io.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-Dognc3Fg.js";import"./VNavigationDrawer-DvmlspX8.js";import"./scopeId-CNDVdJ3R.js";import"./ssrBoot-d-rE-ebl.js";import"./VDivider-Byc_tc4C.js";import"./VForm-BglYL0G4.js";import"./VAvatar-DNScsPhF.js";import"./VImg-CXAH5jII.js";/* empty css              */import"./VPagination-y2flez4n.js";import"./VSelect-C09sQe_X.js";import"./VList-Bmx0u8vq.js";import"./dialog-transition-CxaPI8Wz.js";import"./VMenu-mUALx6PX.js";import"./VCheckboxBtn-ChwCrhEn.js";import"./VChip-Drmygec1.js";import"./VTable-9EnPL_hl.js";import"./filter-CQxRTFIJ.js";const H={class:"d-flex gap-1"},Ve={__name:"index",setup(L){const l=k(),i=r([]),s=r(!1),m=r(!1);I(async()=>{await w()});const w=async()=>{d.value=!0,await l.getAllCountries(),i.value=l.allCountries,console.log(i),d.value=!1},_=[{title:"Country Name",key:"name"},{title:"Timezone",key:"timezone"},{title:"Actions",key:"actions",sortable:!1}],V=r({id:"",name:""});r(-1);const d=r(!1),u=r(V.value),g=n=>{u.value=n,console.log(u.value),m.value=!0},N=async n=>{const t={...n};if((await p.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await l.deleteAllCountry(t.id),i.value=l.allCountries,p.fire("Deleted!","The item has been deleted.","success")}catch{p.fire("Error!","There was an error deleting the item.","error")}};return(n,t)=>{const f=h,c=T("IconBtn");return O(),A(z,null,[e(x,{isNavDrawerOpen:s.value,"onUpdate:isNavDrawerOpen":t[0]||(t[0]=o=>s.value=o)},null,8,["isNavDrawerOpen"]),e(B,{isNavDrawerOpen:m.value,"onUpdate:isNavDrawerOpen":t[1]||(t[1]=o=>m.value=o),editedItem:u.value},null,8,["isNavDrawerOpen","editedItem"]),e(U,{loading:d.value},{default:a(()=>[e(D,null,{default:a(()=>[e(b,null,{default:a(()=>[e(v,{cols:"12","offset-md":"7",md:"3"},{default:a(()=>[e(f,{modelValue:n.search,"onUpdate:modelValue":t[2]||(t[2]=o=>n.search=o),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),e(v,{cols:"12",md:"2"},{default:a(()=>[e($,{style:{"z-index":"1001"},onClick:t[3]||(t[3]=o=>s.value=!0)},{default:a(()=>[F("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),e(E,{headers:_,items:i.value||[],"items-per-page":10,class:"text-no-wrap color-black table-padding"},{"item.actions":a(({item:o})=>[S("div",H,[e(c,{onClick:y=>g(o)},{default:a(()=>[e(C,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(c,{onClick:y=>N(o)},{default:a(()=>[e(C,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items"])]),_:1},8,["loading"])],64)}}};export{Ve as default};
