import{_ as D}from"./AppTextField-CkFZWfQr.js";import{c as N}from"./commonFunction-Dcw8B1JM.js";import{S as p}from"./sweetalert2-z6gKu1nJ.js";import I from"./add-r5My5eIN.js";import B from"./edit-g0E3qLhQ.js";import{V as b}from"./VCardText-BpOf8J-6.js";import{V as O,a as v}from"./VRow-DXPoGva5.js";import{r as o,H as T,a as $,o as A,c as F,b as t,e as r,a7 as U,v as S,d as E,a1 as g,F as L}from"./main-cX0WqYxM.js";import{V as z}from"./VDataTable-5hxHc4Iy.js";import{V as H}from"./VImg-Bq9A4AwQ.js";import{V as M}from"./VCard-DD-bpITE.js";import"./form-Czg29FUN.js";import"./VTextField-BhwINXfE.js";/* empty css                   */import"./VCounter-DI58UdTG.js";import"./index-BKtWMVh-.js";import"./index-BjWxQyns.js";import"./VField-B7xwQl8Z.js";import"./easing-CjukEv2V.js";import"./VInput-Ba_C3A5C.js";import"./forwardRefs-C-GTDzx5.js";import"./api-s62Rnj22.js";import"./index-B3bPRkoL.js";import"./AppAutocomplete-CXlwgUY3.js";import"./VSelect-DtO2EVlD.js";import"./VList-f6hP_K5D.js";import"./ssrBoot-C0TROgbJ.js";import"./VAvatar-DESUj1gt.js";import"./VDivider-nun6oEDR.js";import"./dialog-transition-B4Ks4ZCJ.js";import"./VMenu-DmEIPCL-.js";import"./VOverlay-Dt8LsyC0.js";import"./lazy-DOHHlfda.js";import"./scopeId-CTCEP_tp.js";import"./VCheckboxBtn-CqaF7eTX.js";import"./VSelectionControl-BqAQcVjD.js";import"./VChip-DQyCHdpB.js";import"./VSlideGroup-BcPHj7ED.js";import"./filter-DGYbPMOH.js";import"./VNavigationDrawer-CddwQuPR.js";import"./VForm-DI8lUs6V.js";/* empty css              */import"./VPagination-fgTP1I_v.js";import"./VTable-BumcRST_.js";const R={class:"d-flex gap-1"},Fe={__name:"index",setup(Y){const e=N();o(""),o(""),o(""),o(null);const w=o([]),_=o([]),s=o([]),l=o(!1),m=o(!1);T(async()=>{d.value=!0,e.countries.length===0&&await e.getCountries(),e.courses.length===0&&await e.getCourses(),e.intakes.length===0&&await e.getIntakes(),e.universities.length===0&&await e.getUniversities(),e.courseDetails.length===0&&await e.getCourseDetails(),w.value=e.countries,_.value=e.intakes,s.value=e.universities,d.value=!1});const h=[{title:"Country",key:"country.name"},{title:"Name",key:"name"},{title:"Logo",key:"logo"},{title:"Address",key:"address"},{title:"Actions",key:"actions",sortable:!1}],C=o({id:1,country:"",name:"",logo:"",address:""}),V=o(-1),d=o(!1),c=o(C.value),k=n=>{V.value=s.value.indexOf(n),c.value={...n},m.value=!0},y=async n=>{const a={...n};if((await p.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await e.deleteUniversity(a.id),s.value=e.universities,p.fire("Deleted!","The item has been deleted.","success")}catch{p.fire("Error!","There was an error deleting the item.","error")}};return(n,a)=>{const f=D,u=$("IconBtn");return A(),F(L,null,[t(I,{isNavDrawerOpen:l.value,"onUpdate:isNavDrawerOpen":a[0]||(a[0]=i=>l.value=i)},null,8,["isNavDrawerOpen"]),t(B,{isNavDrawerOpen:m.value,"onUpdate:isNavDrawerOpen":a[1]||(a[1]=i=>m.value=i),editedItem:c.value},null,8,["isNavDrawerOpen","editedItem"]),t(M,{loading:d.value},{default:r(()=>[t(b,null,{default:r(()=>[t(O,null,{default:r(()=>[t(v,{cols:"12","offset-md":"7",md:"3"},{default:r(()=>[t(f,{modelValue:n.search,"onUpdate:modelValue":a[2]||(a[2]=i=>n.search=i),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),t(v,{cols:"12",md:"2"},{default:r(()=>[t(U,{style:{"z-index":"1001"},onClick:a[3]||(a[3]=i=>l.value=!0)},{default:r(()=>[S("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),t(z,{headers:h,items:s.value||[],"items-per-page":5,class:"text-no-wrap color-black table-padding"},{"item.logo":r(({item:i})=>[t(H,{src:i.logo,width:"100",height:"100"},null,8,["src"])]),"item.actions":r(({item:i})=>[E("div",R,[t(u,{onClick:x=>k(i)},{default:r(()=>[t(g,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),t(u,{onClick:x=>y(i)},{default:r(()=>[t(g,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items"])]),_:1},8,["loading"])],64)}}};export{Fe as default};
