import{_ as h}from"./AppTextField-BNt40ux9.js";import{c as k}from"./commonFunction-DJ2PvGER.js";import{S as p}from"./sweetalert2-z6gKu1nJ.js";import x from"./add-I9Ej8qcg.js";import B from"./edit-D1xp59aD.js";import{V as D}from"./VCardText-RwzL7T9j.js";import{V as b,a as v}from"./VRow-DOXSTDpM.js";import{r,H as I,a as T,o as O,c as A,b as e,e as a,a9 as $,v as F,d as S,a2 as C,F as z}from"./main-DDOV-rwu.js";import{V as E}from"./VDataTable-b7wvnMIT.js";import{V as U}from"./VCard-BCPzdFHM.js";import"./VInput-D9Cvv_Eu.js";import"./index-BM5pQQYO.js";import"./index-CfvP81QT.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-DdMX1M-W.js";import"./VNavigationDrawer-CHZeyDiN.js";import"./scopeId-yDah53ce.js";import"./ssrBoot-mayXDmOz.js";import"./VDivider-B4HsVqYz.js";import"./VForm-kBsPDSEC.js";import"./VAvatar-B6rvhTg6.js";import"./VImg-CaPswjCg.js";/* empty css              */import"./VPagination-CFPolV4W.js";import"./VSelect-CcTDrTiQ.js";import"./VList-b0bmlacO.js";import"./dialog-transition-B9hkyYJQ.js";import"./VMenu-BSsWciP8.js";import"./VCheckboxBtn-D7X-DBK4.js";import"./VChip-BdhPa8_D.js";import"./VTable-DEXBCH3E.js";import"./filter-Df-hg_vD.js";const H={class:"d-flex gap-1"},Ve={__name:"index",setup(L){const l=k(),i=r([]),s=r(!1),m=r(!1);I(async()=>{await w()});const w=async()=>{d.value=!0,await l.getAllCountries(),i.value=l.allCountries,console.log(i),d.value=!1},_=[{title:"Country Name",key:"name"},{title:"Timezone",key:"timezone"},{title:"Actions",key:"actions",sortable:!1}],V=r({id:"",name:""});r(-1);const d=r(!1),u=r(V.value),g=n=>{u.value=n,console.log(u.value),m.value=!0},N=async n=>{const t={...n};if((await p.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await l.deleteAllCountry(t.id),i.value=l.allCountries,p.fire("Deleted!","The item has been deleted.","success")}catch{p.fire("Error!","There was an error deleting the item.","error")}};return(n,t)=>{const f=h,c=T("IconBtn");return O(),A(z,null,[e(x,{isNavDrawerOpen:s.value,"onUpdate:isNavDrawerOpen":t[0]||(t[0]=o=>s.value=o)},null,8,["isNavDrawerOpen"]),e(B,{isNavDrawerOpen:m.value,"onUpdate:isNavDrawerOpen":t[1]||(t[1]=o=>m.value=o),editedItem:u.value},null,8,["isNavDrawerOpen","editedItem"]),e(U,{loading:d.value},{default:a(()=>[e(D,null,{default:a(()=>[e(b,null,{default:a(()=>[e(v,{cols:"12","offset-md":"7",md:"3"},{default:a(()=>[e(f,{modelValue:n.search,"onUpdate:modelValue":t[2]||(t[2]=o=>n.search=o),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),e(v,{cols:"12",md:"2"},{default:a(()=>[e($,{style:{"z-index":"1001"},onClick:t[3]||(t[3]=o=>s.value=!0)},{default:a(()=>[F("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),e(E,{headers:_,items:i.value||[],"items-per-page":10,class:"text-no-wrap color-black table-padding"},{"item.actions":a(({item:o})=>[S("div",H,[e(c,{onClick:y=>g(o)},{default:a(()=>[e(C,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(c,{onClick:y=>N(o)},{default:a(()=>[e(C,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items"])]),_:1},8,["loading"])],64)}}};export{Ve as default};