import{_ as D}from"./AppTextField-FNCD987S.js";import{c as N}from"./commonFunction-BuA7_9lY.js";import{S as p}from"./sweetalert2-z6gKu1nJ.js";import I from"./add-CCHaA_90.js";import B from"./edit-8BE9jKl5.js";import{V as b}from"./VCardText-BrEuz_jZ.js";import{V as O,a as v}from"./VRow-D_Z_DnuS.js";import{r as o,H as T,a as $,o as A,c as F,b as t,e as r,a7 as U,v as S,d as E,a1 as g,F as L}from"./main-Bq8deQCX.js";import{V as z}from"./VDataTable-BX7BMFr2.js";import{V as H}from"./VImg-CCyGr-Sd.js";import{V as M}from"./VCard-BJp96eTV.js";import"./form-BxL6QJTk.js";import"./VTextField-C04YWSgW.js";/* empty css                   */import"./VCounter-DEwuRr79.js";import"./index-CW8R-nlC.js";import"./index-CjfOI940.js";import"./VField-DEuo-wJT.js";import"./easing-CjukEv2V.js";import"./VInput-DAjVSw52.js";import"./forwardRefs-C-GTDzx5.js";import"./api-99WOKqi0.js";import"./index-B3bPRkoL.js";import"./AppAutocomplete-DS7OW5yN.js";import"./VSelect-CAeDrijQ.js";import"./VList-Dvf4ggmo.js";import"./ssrBoot-CDYbaJai.js";import"./VAvatar-DJAkgXLu.js";import"./VDivider-c212GQ1F.js";import"./dialog-transition-DzwEt7fH.js";import"./VMenu-BqPvUGXu.js";import"./VOverlay-BTcTkavH.js";import"./lazy-BTUcCFF4.js";import"./scopeId-BUtXmUdf.js";import"./VCheckboxBtn-DTBqEPH6.js";import"./VSelectionControl-CoB5g4dr.js";import"./VChip-DBWGAsrD.js";import"./VSlideGroup-SZRIlWpK.js";import"./filter-C3Mblgdv.js";import"./VNavigationDrawer-B6LZOCGU.js";import"./VForm-BkNHcqLX.js";/* empty css              */import"./VPagination-C10XkiYt.js";import"./VTable-4g02zjPA.js";const R={class:"d-flex gap-1"},Fe={__name:"index",setup(Y){const e=N();o(""),o(""),o(""),o(null);const w=o([]),_=o([]),s=o([]),l=o(!1),m=o(!1);T(async()=>{d.value=!0,e.countries.length===0&&await e.getCountries(),e.courses.length===0&&await e.getCourses(),e.intakes.length===0&&await e.getIntakes(),e.universities.length===0&&await e.getUniversities(),e.courseDetails.length===0&&await e.getCourseDetails(),w.value=e.countries,_.value=e.intakes,s.value=e.universities,d.value=!1});const h=[{title:"Country",key:"country.name"},{title:"Name",key:"name"},{title:"Logo",key:"logo"},{title:"Address",key:"address"},{title:"Actions",key:"actions",sortable:!1}],C=o({id:1,country:"",name:"",logo:"",address:""}),V=o(-1),d=o(!1),c=o(C.value),k=n=>{V.value=s.value.indexOf(n),c.value={...n},m.value=!0},y=async n=>{const a={...n};if((await p.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await e.deleteUniversity(a.id),s.value=e.universities,p.fire("Deleted!","The item has been deleted.","success")}catch{p.fire("Error!","There was an error deleting the item.","error")}};return(n,a)=>{const f=D,u=$("IconBtn");return A(),F(L,null,[t(I,{isNavDrawerOpen:l.value,"onUpdate:isNavDrawerOpen":a[0]||(a[0]=i=>l.value=i)},null,8,["isNavDrawerOpen"]),t(B,{isNavDrawerOpen:m.value,"onUpdate:isNavDrawerOpen":a[1]||(a[1]=i=>m.value=i),editedItem:c.value},null,8,["isNavDrawerOpen","editedItem"]),t(M,{loading:d.value},{default:r(()=>[t(b,null,{default:r(()=>[t(O,null,{default:r(()=>[t(v,{cols:"12","offset-md":"7",md:"3"},{default:r(()=>[t(f,{modelValue:n.search,"onUpdate:modelValue":a[2]||(a[2]=i=>n.search=i),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),t(v,{cols:"12",md:"2"},{default:r(()=>[t(U,{style:{"z-index":"1001"},onClick:a[3]||(a[3]=i=>l.value=!0)},{default:r(()=>[S("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),t(z,{headers:h,items:s.value||[],"items-per-page":5,class:"text-no-wrap color-black table-padding"},{"item.logo":r(({item:i})=>[t(H,{src:i.logo,width:"100",height:"100"},null,8,["src"])]),"item.actions":r(({item:i})=>[E("div",R,[t(u,{onClick:x=>k(i)},{default:r(()=>[t(g,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),t(u,{onClick:x=>y(i)},{default:r(()=>[t(g,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items"])]),_:1},8,["loading"])],64)}}};export{Fe as default};