import{_ as B}from"./AppTextField-BMFiMzM2.js";import{c as b}from"./commonFunction-BrGZhaxr.js";import{S as p}from"./sweetalert2-z6gKu1nJ.js";import x from"./add-BJ8kbh4N.js";import I from"./edit-CTrAcSqd.js";import{V as E}from"./VCardText-IRdJ9bwp.js";import{V as O,a as _}from"./VRow-C9v94k4S.js";import{r,H as T,a as $,o as u,c as V,b as e,e as a,a9 as F,v as A,a2 as C,f as S,z as k,F as U}from"./main-Cf2RrCNo.js";import{V as z}from"./VDataTable-DyOP0rEJ.js";import{V as H}from"./VCard-DuEmEQwN.js";import"./VInput-O3d6ZIfR.js";import"./index-C_0MfI4p.js";import"./index-DO6biqBj.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-BczpwYvz.js";import"./AppTextarea-B--WpYYt.js";import"./VNavigationDrawer-nobPI86N.js";import"./scopeId-NJDsUcFH.js";import"./ssrBoot-CT58Kpxi.js";import"./VDivider-_r-tuU57.js";import"./VForm-BJS4O2tp.js";import"./VAvatar-BuH-7h8e.js";import"./VImg-B9V4zKv-.js";/* empty css              */import"./VPagination-DChGaon_.js";import"./VSelect-CzXEDS5u.js";import"./VList-Bar9JdAL.js";import"./dialog-transition-CWr76YKO.js";import"./VMenu-DSDOZfIF.js";import"./VCheckboxBtn-CUNKIzFL.js";import"./VChip-CarZCoqq.js";import"./VTable-D59o5ndN.js";import"./filter-C6oZiC-t.js";const L={key:0,class:"d-flex gap-1"},Ne={__name:"index",setup(M){const i=b(),s=r([]),l=r(!1),m=r(!1);T(async()=>{await f()});const f=async()=>{d.value=!0,await i.getEvents(),s.value=i.events,d.value=!1},N=[{title:"Event Name",key:"name"},{title:"Description",key:"description"},{title:"Actions",key:"actions",sortable:!1}],g=r({id:"",name:""}),d=r(!1),v=r(g.value),y=n=>{v.value=n,m.value=!0},D=async n=>{const t={...n};if((await p.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await i.deleteEvent(t.id),s.value=i.events,p.fire("Deleted!","The item has been deleted.","success")}catch{p.fire("Error!","There was an error deleting the item.","error")}};return(n,t)=>{const w=B,c=$("IconBtn");return u(),V(U,null,[e(x,{isNavDrawerOpen:l.value,"onUpdate:isNavDrawerOpen":t[0]||(t[0]=o=>l.value=o),onUpdateEvents:f},null,8,["isNavDrawerOpen"]),e(I,{isNavDrawerOpen:m.value,"onUpdate:isNavDrawerOpen":t[1]||(t[1]=o=>m.value=o),editedItem:v.value},null,8,["isNavDrawerOpen","editedItem"]),e(H,{loading:d.value},{default:a(()=>[e(E,null,{default:a(()=>[e(O,null,{default:a(()=>[e(_,{cols:"12","offset-md":"7",md:"3"},{default:a(()=>[e(w,{modelValue:n.search,"onUpdate:modelValue":t[2]||(t[2]=o=>n.search=o),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),e(_,{cols:"12",md:"2"},{default:a(()=>[e(F,{style:{"z-index":"1001"},onClick:t[3]||(t[3]=o=>l.value=!0)},{default:a(()=>[A("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),e(z,{headers:N,items:s.value||[],"items-per-page":10,class:"text-no-wrap color-black table-padding"},{"item.actions":a(({item:o})=>[n.$can("edit","event")?(u(),V("div",L,[e(c,{onClick:h=>y(o)},{default:a(()=>[e(C,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),n.$can("delete","event")?(u(),S(c,{key:0,onClick:h=>D(o)},{default:a(()=>[e(C,{icon:"tabler-trash"})]),_:2},1032,["onClick"])):k("",!0)])):k("",!0)]),_:1},8,["items"])]),_:1},8,["loading"])],64)}}};export{Ne as default};