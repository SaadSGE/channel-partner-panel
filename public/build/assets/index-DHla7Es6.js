import{_ as h}from"./AppTextField-DC2x1dsw.js";import{c as k}from"./commonFunction-C4n_HNA0.js";import{S as p}from"./sweetalert2-z6gKu1nJ.js";import x from"./add-D2dsgD9b.js";import B from"./edit-D9X-cfDO.js";import{V as D}from"./VCardText-Bjotn_eE.js";import{V as b,a as v}from"./VRow-eo7qXlZG.js";import{r,H as I,a as T,o as O,c as A,b as e,e as a,a9 as $,v as F,d as S,a2 as C,F as z}from"./main-Z3go8Xzc.js";import{V as E}from"./VDataTable-DjbBVbtI.js";import{V as U}from"./VCard-B6jmDFyP.js";import"./VInput-KBboyctu.js";import"./index-BgvB69-2.js";import"./index-CJOm_KJi.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-B1_fIF9I.js";import"./VNavigationDrawer-CoilFs32.js";import"./scopeId-Brt4yQ2W.js";import"./ssrBoot-CoAt9jNJ.js";import"./VDivider-SUUc1KGp.js";import"./VForm-CRZr7ck4.js";import"./VAvatar-DFwpysqo.js";import"./VImg-DvovO2d-.js";/* empty css              */import"./VPagination-DvivjafL.js";import"./VSelect-DZ8I6LSD.js";import"./VList-CuZQ3pYZ.js";import"./dialog-transition-6CoWjX9C.js";import"./VMenu-CiscxyXl.js";import"./VCheckboxBtn-GLY3abaH.js";import"./VChip-CISZQW4c.js";import"./VTable-CvwxmxPq.js";import"./filter-CBgIupOh.js";const H={class:"d-flex gap-1"},Ve={__name:"index",setup(L){const l=k(),i=r([]),s=r(!1),m=r(!1);I(async()=>{await w()});const w=async()=>{d.value=!0,await l.getAllCountries(),i.value=l.allCountries,console.log(i),d.value=!1},_=[{title:"Country Name",key:"name"},{title:"Timezone",key:"timezone"},{title:"Actions",key:"actions",sortable:!1}],V=r({id:"",name:""});r(-1);const d=r(!1),u=r(V.value),g=n=>{u.value=n,console.log(u.value),m.value=!0},N=async n=>{const t={...n};if((await p.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await l.deleteAllCountry(t.id),i.value=l.allCountries,p.fire("Deleted!","The item has been deleted.","success")}catch{p.fire("Error!","There was an error deleting the item.","error")}};return(n,t)=>{const f=h,c=T("IconBtn");return O(),A(z,null,[e(x,{isNavDrawerOpen:s.value,"onUpdate:isNavDrawerOpen":t[0]||(t[0]=o=>s.value=o)},null,8,["isNavDrawerOpen"]),e(B,{isNavDrawerOpen:m.value,"onUpdate:isNavDrawerOpen":t[1]||(t[1]=o=>m.value=o),editedItem:u.value},null,8,["isNavDrawerOpen","editedItem"]),e(U,{loading:d.value},{default:a(()=>[e(D,null,{default:a(()=>[e(b,null,{default:a(()=>[e(v,{cols:"12","offset-md":"7",md:"3"},{default:a(()=>[e(f,{modelValue:n.search,"onUpdate:modelValue":t[2]||(t[2]=o=>n.search=o),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),e(v,{cols:"12",md:"2"},{default:a(()=>[e($,{style:{"z-index":"1001"},onClick:t[3]||(t[3]=o=>s.value=!0)},{default:a(()=>[F("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),e(E,{headers:_,items:i.value||[],"items-per-page":10,class:"text-no-wrap color-black table-padding"},{"item.actions":a(({item:o})=>[S("div",H,[e(c,{onClick:y=>g(o)},{default:a(()=>[e(C,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(c,{onClick:y=>N(o)},{default:a(()=>[e(C,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items"])]),_:1},8,["loading"])],64)}}};export{Ve as default};
