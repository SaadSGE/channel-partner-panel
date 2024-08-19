import{_ as N}from"./AppTextField-Dj_2VU4u.js";import{c as x}from"./commonFunction-DMBq5GIm.js";import{S as c}from"./sweetalert2-z6gKu1nJ.js";import B from"./add-BU5O8KGH.js";import I from"./edit-BRo-yu4G.js";import{V as b}from"./VCardText-CZjnDVEX.js";import{V as y,a as v}from"./VRow-ODK9nVFs.js";import{r as o,H as O,a as T,o as $,c as F,b as t,e as r,a7 as A,v as S,d as U,a1 as w,F as E}from"./main-ujAelBRR.js";import{V as z}from"./VDataTable-DLT-pktp.js";import{V as H}from"./VCard-CZZLRspk.js";import"./form-DjAS8tMT.js";import"./VTextField-BHFVqzxS.js";/* empty css                   */import"./VCounter-CdDHwVPl.js";import"./index-CkRDasSw.js";import"./index-DlgBW9fg.js";import"./VField-fQZzp9Ta.js";import"./easing-CjukEv2V.js";import"./VInput-BKqZjaTf.js";import"./forwardRefs-C-GTDzx5.js";import"./api-BGzK74uO.js";import"./index-B3bPRkoL.js";import"./VNavigationDrawer-DpagIYL6.js";import"./scopeId-DeUnOUYx.js";import"./ssrBoot-yb-Fj9Tf.js";import"./VDivider-DXhZ4_Ma.js";import"./VForm-Cj7R7EXF.js";import"./VAvatar-D8FR7LeD.js";import"./VImg-B-k9boYc.js";/* empty css              */import"./VPagination-DauIcoym.js";import"./VSelect-DIeZ6EOS.js";import"./VList-NX9tgIKQ.js";import"./dialog-transition-BeKC65XY.js";import"./VMenu-BeXH8Btp.js";import"./VOverlay-D2BMFUHd.js";import"./lazy-BRQ2t-65.js";import"./VCheckboxBtn-DNZac1JW.js";import"./VSelectionControl-Doks1cAL.js";import"./VChip-CqAu_joY.js";import"./VSlideGroup-DoQsWgeA.js";import"./VTable-m-sxPlBt.js";import"./filter-Ps3BHC02.js";const L={class:"d-flex gap-1"},Te={__name:"index",setup(M){const e=x();o(""),o(""),o(""),o(null);const g=o([]),s=o([]),_=o([]),l=o(!1),m=o(!1);O(async()=>{p.value=!0,e.countries.length===0&&await e.getCountries(),e.courses.length===0&&await e.getCourses(),e.intakes.length===0&&await e.getIntakes(),e.universities.length===0&&await e.getUniversities(),e.courseDetails.length===0&&await e.getCourseDetails(),g.value=e.countries,s.value=e.intakes,_.value=e.universities,p.value=!1});const C=[{title:"Name",key:"name"},{title:"Actions",key:"actions",sortable:!1}],V=o({id:"",name:""});o(-1);const p=o(!1),u=o(V.value),h=n=>{u.value=n,console.log(u.value),m.value=!0},k=async n=>{const a={...n};if((await c.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await e.deleteIntake(a.id),s.value=e.intakes,c.fire("Deleted!","The item has been deleted.","success")}catch{c.fire("Error!","There was an error deleting the item.","error")}};return(n,a)=>{const f=N,d=T("IconBtn");return $(),F(E,null,[t(B,{isNavDrawerOpen:l.value,"onUpdate:isNavDrawerOpen":a[0]||(a[0]=i=>l.value=i)},null,8,["isNavDrawerOpen"]),t(I,{isNavDrawerOpen:m.value,"onUpdate:isNavDrawerOpen":a[1]||(a[1]=i=>m.value=i),editedItem:u.value},null,8,["isNavDrawerOpen","editedItem"]),t(H,{loading:p.value},{default:r(()=>[t(b,null,{default:r(()=>[t(y,null,{default:r(()=>[t(v,{cols:"12","offset-md":"7",md:"3"},{default:r(()=>[t(f,{modelValue:n.search,"onUpdate:modelValue":a[2]||(a[2]=i=>n.search=i),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),t(v,{cols:"12",md:"2"},{default:r(()=>[t(A,{style:{"z-index":"1001"},onClick:a[3]||(a[3]=i=>l.value=!0)},{default:r(()=>[S("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),t(z,{headers:C,items:s.value||[],"items-per-page":5,class:"text-no-wrap color-black table-padding"},{"item.actions":r(({item:i})=>[U("div",L,[t(d,{onClick:D=>h(i)},{default:r(()=>[t(w,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),t(d,{onClick:D=>k(i)},{default:r(()=>[t(w,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items"])]),_:1},8,["loading"])],64)}}};export{Te as default};