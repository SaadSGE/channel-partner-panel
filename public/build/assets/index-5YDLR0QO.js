import{_ as N}from"./AppTextField-BiS_KFta.js";import{c as x}from"./commonFunction-pkBjADiw.js";import{S as c}from"./sweetalert2-z6gKu1nJ.js";import B from"./add-CDlJzb4R.js";import I from"./edit-h8zkKYOs.js";import{V as b}from"./VCard-DMTjdXUy.js";import{V as y}from"./VCardText-1yDQu2OT.js";import{V as O,a as v}from"./VRow-DUKZE336.js";import{r as o,H as T,a as $,o as F,c as A,b as t,e as r,F as S,a7 as U,v as E,d as z,a1 as w}from"./main-46fJF4Ly.js";import{V as H}from"./VDataTable-Bd6Xaawe.js";import"./form-Cof7gYfN.js";import"./VTextField-BRS8HhxH.js";/* empty css                   */import"./VCounter-4pitKJQp.js";import"./index-DkHFl9i8.js";import"./index-CAksEt0X.js";import"./VField-BhFXHFEK.js";import"./easing-CjukEv2V.js";import"./VInput-BvsHXrrJ.js";import"./forwardRefs-C-GTDzx5.js";import"./api-BPpc59eu.js";import"./index-B3bPRkoL.js";import"./VNavigationDrawer-WWSub-o3.js";import"./scopeId-DhBpevBo.js";import"./ssrBoot-DQQ69Fpa.js";import"./VDivider-DOOYxpa5.js";import"./VForm-CFxhAGQX.js";import"./VAvatar-DBcKRZVo.js";import"./VImg-ZBC3KXqQ.js";/* empty css              */import"./VPagination-DFQfmTiU.js";import"./VSelect-BJdoV_9a.js";import"./VList-CG2BG0Du.js";import"./dialog-transition-BnCPKqrq.js";import"./VMenu-8Xy30vKo.js";import"./VOverlay-BzXT9Jk8.js";import"./lazy-n2io-S55.js";import"./VCheckboxBtn-CUr3L21I.js";import"./VSelectionControl-DvCugJqL.js";import"./VChip-BHBhRfUm.js";import"./VSlideGroup-BmWaeuhF.js";import"./VTable-Dc471Yjh.js";import"./filter-WqfgxIFp.js";const L={class:"d-flex gap-1"},Te={__name:"index",setup(M){const e=x();o(""),o(""),o(""),o(null);const g=o([]),s=o([]),_=o([]),l=o(!1),m=o(!1);T(async()=>{p.value=!0,e.countries.length===0&&await e.getCountries(),e.courses.length===0&&await e.getCourses(),e.intakes.length===0&&await e.getIntakes(),e.universities.length===0&&await e.getUniversities(),e.courseDetails.length===0&&await e.getCourseDetails(),g.value=e.countries,s.value=e.intakes,_.value=e.universities,p.value=!1});const C=[{title:"Name",key:"name"},{title:"Actions",key:"actions",sortable:!1}],V=o({id:"",name:""});o(-1);const p=o(!1),u=o(V.value),h=n=>{u.value=n,console.log(u.value),m.value=!0},k=async n=>{const a={...n};if((await c.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await e.deleteIntake(a.id),s.value=e.intakes,c.fire("Deleted!","The item has been deleted.","success")}catch{c.fire("Error!","There was an error deleting the item.","error")}};return(n,a)=>{const f=N,d=$("IconBtn");return F(),A(S,null,[t(B,{isNavDrawerOpen:l.value,"onUpdate:isNavDrawerOpen":a[0]||(a[0]=i=>l.value=i)},null,8,["isNavDrawerOpen"]),t(I,{isNavDrawerOpen:m.value,"onUpdate:isNavDrawerOpen":a[1]||(a[1]=i=>m.value=i),editedItem:u.value},null,8,["isNavDrawerOpen","editedItem"]),t(b,{loading:p.value},{default:r(()=>[t(y,null,{default:r(()=>[t(O,null,{default:r(()=>[t(v,{cols:"12","offset-md":"7",md:"3"},{default:r(()=>[t(f,{modelValue:n.search,"onUpdate:modelValue":a[2]||(a[2]=i=>n.search=i),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),t(v,{cols:"12",md:"2"},{default:r(()=>[t(U,{style:{"z-index":"1001"},onClick:a[3]||(a[3]=i=>l.value=!0)},{default:r(()=>[E("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),t(H,{headers:C,items:s.value||[],"items-per-page":5,class:"text-no-wrap color-black table-padding"},{"item.actions":r(({item:i})=>[z("div",L,[t(d,{onClick:D=>h(i)},{default:r(()=>[t(w,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),t(d,{onClick:D=>k(i)},{default:r(()=>[t(w,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items"])]),_:1},8,["loading"])],64)}}};export{Te as default};
