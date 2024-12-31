import{_ as P}from"./TablePagination-Bmp7OljY.js";import{_ as z}from"./AppTextField-CFEcUJ0X.js";import{_ as E}from"./AppSelect-C14-bm8c.js";import{_ as H}from"./Filters-D4hJny9W.js";import{c as R}from"./commonFunction-qoPwjnBP.js";import{S as g}from"./sweetalert2-z6gKu1nJ.js";import J from"./add-CYCrXWAI.js";import Y from"./edit-Df3a7fWi.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as B}from"./VCardText-GT6EW7Jt.js";import{V as q}from"./VRow-BBNb4MQU.js";import{V as N}from"./VCard-71K5Tl-H.js";import{V as G}from"./VSpacer-Cnm-3_nn.js";import{r as o,w as K,a as M,o as Q,c as W,b as a,e as l,d as n,a9 as X,a2 as h,v as y,J as Z,x as D,F as ee}from"./main-BO5sTPae.js";import{V as te}from"./VDataTableServer-DbwDGYK5.js";import{V as ae}from"./VChip-DVbSPksP.js";import"./VDivider-cI3vDDxP.js";import"./VPagination-C2UeqZte.js";import"./VInput-DSvjyyeS.js";import"./index-DCByG_JE.js";import"./index-Jo_PMSvD.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-CO2kbJct.js";import"./VSelect-XhjNJXNW.js";import"./VList-BorT8EZ-.js";import"./ssrBoot-I5NMsS7C.js";import"./VAvatar-D-6b8t5v.js";import"./VImg-D6TgAy6r.js";import"./dialog-transition-jVtgk1lL.js";import"./scopeId-CPfV55ua.js";import"./VMenu-DTeAfeL4.js";import"./VCheckboxBtn-B9XvnkYk.js";import"./AppDateTimePicker-DkYFR9z5.js";import"./AppAutocomplete-BjPeLlem.js";import"./filter-D4151CUw.js";import"./rolePermission-DQXv1Uwo.js";import"./helpers-hBOzq4AY.js";import"./user-BVy9r1xf.js";import"./AppTextarea-Dc6YbgeZ.js";import"./VNavigationDrawer-C-Z8puWT.js";import"./VDialog-CMvigysf.js";import"./VColorPicker-DKJ9jQt9.js";import"./VCheckbox-ChDjagBK.js";import"./VForm-F7Uybg-m.js";/* empty css              */import"./VDataTable-C81hWVyP.js";import"./VTable-DLvcGL6O.js";const oe={class:"me-3 d-flex gap-3"},le={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},re={style:{"inline-size":"15.625rem"}},se={class:"d-flex align-center gap-2"},ne={class:"d-flex gap-1"},ie={__name:"index",setup(pe){const m=R(),u=o([]),c=o(!1),v=o(!1),T=[{title:"Status Name",key:"name"},{title:"Description",key:"description"},{title:"Color Code",key:"color_code"},{title:"Health Type",key:"health_type"},{title:"Actions",key:"actions",sortable:!1}],U=o({id:"",name:"",description:"",color_code:"",health_type:""}),f=o(!1),w=o(U.value),I=r=>{w.value=r,v.value=!0},L=r=>{var t,p;S.value=(t=r.sortBy[0])==null?void 0:t.key,C.value=(p=r.sortBy[0])==null?void 0:p.order,x()},x=async()=>{f.value=!0;const r=await m.getLeadStatus(_.value,i.value,s.value,S.value,C.value,d.value);console.log(r),u.value=r.data,f.value=!1,V.value=r.total},d=o(null),V=o(0),i=o(1),s=o(10),_=o(""),S=o(null),C=o(null),A=async r=>{const t={...r};if((await g.fire({title:"Are you sure?",text:"Do you want to delete this status?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await m.deleteLeadStatus(t.id),u.value=m.leadStatuses,g.fire("Deleted!","The status has been deleted.","success")}catch{g.fire("Error!","There was an error deleting the status.","error")}};return K(d,()=>{x()}),(r,t)=>{const p=H,b=E,O=z,k=M("IconBtn"),$=P;return Q(),W(ee,null,[a(J,{isNavDrawerOpen:c.value,"onUpdate:isNavDrawerOpen":t[0]||(t[0]=e=>c.value=e),onUpdateLeadStatuses:r.getAllLeadStatuses},null,8,["isNavDrawerOpen","onUpdateLeadStatuses"]),a(Y,{isNavDrawerOpen:v.value,"onUpdate:isNavDrawerOpen":t[1]||(t[1]=e=>v.value=e),editedItem:w.value},null,8,["isNavDrawerOpen","editedItem"]),a(N,{class:"mb-4"},{default:l(()=>[a(B,null,{default:l(()=>[a(q,null,{default:l(()=>[a(p,{"lead-health-type":d.value,onUpdateLeadHealthType:t[2]||(t[2]=e=>d.value=e)},null,8,["lead-health-type"])]),_:1})]),_:1})]),_:1}),a(N,{loading:f.value},{default:l(()=>[a(B,{class:"d-flex flex-wrap gap-4"},{default:l(()=>[n("div",oe,[a(b,{"model-value":s.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":t[3]||(t[3]=e=>s.value=parseInt(e,10))},null,8,["model-value"])]),a(G),n("div",le,[n("div",re,[a(O,{modelValue:_.value,"onUpdate:modelValue":t[4]||(t[4]=e=>_.value=e),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])])]),a(X,{onClick:t[5]||(t[5]=e=>c.value=!0)},{default:l(()=>[a(h,{icon:"tabler-plus"}),y(" Add New Status ")]),_:1})]),_:1}),a(te,{"items-per-page":s.value,"onUpdate:itemsPerPage":t[7]||(t[7]=e=>s.value=e),page:i.value,"onUpdate:page":t[8]||(t[8]=e=>i.value=e),items:u.value,headers:T,class:"text-no-wrap color-black table-padding","onUpdate:options":L},{"item.color_code":l(({item:e})=>[n("div",se,[n("div",{style:Z({backgroundColor:e.color_code,width:"24px",height:"24px",borderRadius:"4px",border:"1px solid #ddd"})},null,4),y(" "+D(e.color_code),1)])]),"item.health_type":l(({item:e})=>[a(ae,{color:e.health_type==="hot"?"error":e.health_type==="warm"?"warning":"info",size:"small"},{default:l(()=>[y(D(e.health_type?e.health_type.charAt(0).toUpperCase()+e.health_type.slice(1):"N/A"),1)]),_:2},1032,["color"])]),"item.actions":l(({item:e})=>[n("div",ne,[a(k,{onClick:F=>I(e)},{default:l(()=>[a(h,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),a(k,{onClick:F=>A(e)},{default:l(()=>[a(h,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),bottom:l(()=>[a($,{page:i.value,"onUpdate:page":t[6]||(t[6]=e=>i.value=e),"items-per-page":s.value,"total-items":V.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items"])]),_:1},8,["loading"])],64)}}},ot=j(ie,[["__scopeId","data-v-2c57d6db"]]);export{ot as default};