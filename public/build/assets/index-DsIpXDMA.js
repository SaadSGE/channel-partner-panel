import{_ as k}from"./AppTextField-CFEcUJ0X.js";import{c as D}from"./commonFunction-qoPwjnBP.js";import{S as v}from"./sweetalert2-z6gKu1nJ.js";import B from"./add-B8OVUkyv.js";import A from"./edit-j9Mp7muG.js";import{V as b}from"./VCardText-GT6EW7Jt.js";import{V as I,a as w}from"./VRow-BBNb4MQU.js";import{r,H as O,a as T,o as $,c as F,b as e,e as o,a9 as E,v as U,d as z,a2 as h,F as H}from"./main-BO5sTPae.js";import{V as L}from"./VDataTable-C81hWVyP.js";import{V as M}from"./VCard-71K5Tl-H.js";import"./VInput-DSvjyyeS.js";import"./index-DCByG_JE.js";import"./index-Jo_PMSvD.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-CO2kbJct.js";import"./AppTextarea-Dc6YbgeZ.js";import"./VNavigationDrawer-C-Z8puWT.js";import"./scopeId-CPfV55ua.js";import"./ssrBoot-I5NMsS7C.js";import"./VDivider-cI3vDDxP.js";import"./VForm-F7Uybg-m.js";import"./VAvatar-D-6b8t5v.js";import"./VImg-D6TgAy6r.js";/* empty css              */import"./VPagination-C2UeqZte.js";import"./VSelect-XhjNJXNW.js";import"./VList-BorT8EZ-.js";import"./dialog-transition-jVtgk1lL.js";import"./VMenu-DTeAfeL4.js";import"./VCheckboxBtn-B9XvnkYk.js";import"./VChip-DVbSPksP.js";import"./VTable-DLvcGL6O.js";import"./filter-D4151CUw.js";const R={class:"d-flex gap-1"},xe={__name:"index",setup(Y){const n=D(),i=r([]),l=r(!1),c=r(!1),p=r(""),C=r([]);O(async()=>{await d()});const d=async()=>{m.value=!0,await n.getApplicationStatus(),i.value=n.applicationStatus,m.value=!1},V=[{title:"Status Name",key:"name"},{title:"Description",key:"description"},{title:"Color Code",key:"color"},{title:"Actions",key:"actions",sortable:!1}],g=r({id:"",name:"",description:"",color_code:"",health_rating:""}),m=r(!1),u=r(g.value),S=s=>{u.value=s,console.log(u.value),c.value=!0},x=async s=>{const t={...s};if((await v.fire({title:"Are you sure?",text:"Do you want to delete this status?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await n.deleteApplicationStatus(t.id),i.value=n.applicationStatus,v.fire("Deleted!","The status has been deleted.","success")}catch{v.fire("Error!","There was an error deleting the status.","error")}},y=async()=>{try{await d(),C.value=i.value}catch(s){console.error("Error refreshing statuses:",s)}};return(s,t)=>{const _=k,f=T("IconBtn");return $(),F(H,null,[e(B,{isNavDrawerOpen:l.value,"onUpdate:isNavDrawerOpen":t[0]||(t[0]=a=>l.value=a),onUpdateApplicationStatuses:d,onStatusAdded:y},null,8,["isNavDrawerOpen"]),e(A,{isNavDrawerOpen:c.value,"onUpdate:isNavDrawerOpen":t[1]||(t[1]=a=>c.value=a),editedItem:u.value},null,8,["isNavDrawerOpen","editedItem"]),e(M,{loading:m.value},{default:o(()=>[e(b,null,{default:o(()=>[e(I,null,{default:o(()=>[e(w,{cols:"12","offset-md":"7",md:"3"},{default:o(()=>[e(_,{modelValue:p.value,"onUpdate:modelValue":t[2]||(t[2]=a=>p.value=a),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),e(w,{cols:"12",md:"2"},{default:o(()=>[e(E,{style:{"z-index":"1001"},onClick:t[3]||(t[3]=a=>l.value=!0)},{default:o(()=>[U("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),e(L,{headers:V,items:i.value||[],"items-per-page":10,search:p.value,class:"text-no-wrap color-black table-padding"},{"item.actions":o(({item:a})=>[z("div",R,[e(f,{onClick:N=>S(a)},{default:o(()=>[e(h,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(f,{onClick:N=>x(a)},{default:o(()=>[e(h,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items","search"])]),_:1},8,["loading"])],64)}}};export{xe as default};