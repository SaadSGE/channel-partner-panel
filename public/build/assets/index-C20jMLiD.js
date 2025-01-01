import{_ as P}from"./TablePagination-BI20AWgG.js";import{_ as z}from"./AppTextField-BNeJXgDa.js";import{_ as E}from"./AppSelect-N8xse3dI.js";import{_ as H}from"./Filters-B-AcXERl.js";import{c as R}from"./commonFunction-DmSA9djT.js";import{S as h}from"./sweetalert2-z6gKu1nJ.js";import J from"./add-CPBbhEmY.js";import Y from"./edit-BpZQXb35.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as B}from"./VCardText-DpRShg84.js";import{V as q}from"./VRow-D2_yjpKw.js";import{V as N}from"./VCard-BMcYqK4c.js";import{V as G}from"./VSpacer-BqonUa-I.js";import{r as o,w as K,a as M,o as Q,c as W,b as a,e as l,d as n,a9 as X,a2 as g,v as y,J as Z,x as D,F as ee}from"./main-BADZmGzY.js";import{V as te}from"./VDataTableServer-jhOd5HdN.js";import{V as ae}from"./VChip-Cm4E8fkC.js";import"./VDivider-Dlzz5Gif.js";import"./VPagination-D64DIkS1.js";import"./VInput-Bt4jOYU7.js";import"./index-M4AAPadW.js";import"./index-CWxjtjo1.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-CPDcYvV-.js";import"./VSelect-C1SS_ZqB.js";import"./VList-C1NZgyeR.js";import"./ssrBoot-Mt929TXd.js";import"./VAvatar-BEEmQOUP.js";import"./VImg-KML9Z82w.js";import"./dialog-transition-BHECC9gm.js";import"./scopeId-BIg2yWZu.js";import"./VMenu-8-lIYCIn.js";import"./VCheckboxBtn-CVbHPjf1.js";import"./AppDateTimePicker-D7PsRTgM.js";import"./AppAutocomplete-BddWbecx.js";import"./filter-AyVZ7QHP.js";import"./rolePermission-DVUNoWaB.js";import"./helpers-DGBpgzAb.js";import"./user-CmCEUi5Y.js";import"./AppTextarea-C_ABNvrm.js";import"./VNavigationDrawer-rm8-3mhr.js";import"./VDialog-Cz-Jf7e_.js";import"./VColorPicker-D68H8FI_.js";import"./VCheckbox-DuCNCa9q.js";import"./VForm-NhQaZf3T.js";/* empty css              */import"./VDataTable-DoL6YIB_.js";import"./VTable-CU9xN2Lm.js";const oe={class:"me-3 d-flex gap-3"},le={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},re={style:{"inline-size":"15.625rem"}},se={class:"d-flex align-center gap-2"},ne={class:"d-flex gap-1"},ie={__name:"index",setup(pe){const u=R(),c=o([]),v=o(!1),f=o(!1),T=[{title:"Status Name",key:"name"},{title:"Description",key:"description"},{title:"Color Code",key:"color_code"},{title:"Health Type",key:"health_type"},{title:"Actions",key:"actions",sortable:!1}],U=o({id:"",name:"",description:"",color_code:"",health_type:""}),_=o(!1),w=o(U.value),I=r=>{w.value=r,f.value=!0},L=r=>{var t,p;S.value=(t=r.sortBy[0])==null?void 0:t.key,C.value=(p=r.sortBy[0])==null?void 0:p.order,x()},x=async()=>{_.value=!0;const r=await u.getLeadStatus(m.value,i.value,s.value,S.value,C.value,d.value);c.value=r.data,_.value=!1,V.value=r.total},d=o(null),V=o(0),i=o(1),s=o(10),m=o(""),S=o(null),C=o(null),A=async r=>{const t={...r};if((await h.fire({title:"Are you sure?",text:"Do you want to delete this status?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await u.deleteLeadStatus(t.id),c.value=u.leadStatuses,h.fire("Deleted!","The status has been deleted.","success")}catch{h.fire("Error!","There was an error deleting the status.","error")}};return K([d,m],()=>{x()}),(r,t)=>{const p=H,b=E,O=z,k=M("IconBtn"),$=P;return Q(),W(ee,null,[a(J,{isNavDrawerOpen:v.value,"onUpdate:isNavDrawerOpen":t[0]||(t[0]=e=>v.value=e),onUpdateLeadStatuses:r.getAllLeadStatuses},null,8,["isNavDrawerOpen","onUpdateLeadStatuses"]),a(Y,{isNavDrawerOpen:f.value,"onUpdate:isNavDrawerOpen":t[1]||(t[1]=e=>f.value=e),editedItem:w.value},null,8,["isNavDrawerOpen","editedItem"]),a(N,{class:"mb-4"},{default:l(()=>[a(B,null,{default:l(()=>[a(q,null,{default:l(()=>[a(p,{"lead-health-type":d.value,onUpdateLeadHealthType:t[2]||(t[2]=e=>d.value=e)},null,8,["lead-health-type"])]),_:1})]),_:1})]),_:1}),a(N,{loading:_.value},{default:l(()=>[a(B,{class:"d-flex flex-wrap gap-4"},{default:l(()=>[n("div",oe,[a(b,{"model-value":s.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":t[3]||(t[3]=e=>s.value=parseInt(e,10))},null,8,["model-value"])]),a(G),n("div",le,[n("div",re,[a(O,{modelValue:m.value,"onUpdate:modelValue":t[4]||(t[4]=e=>m.value=e),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])])]),a(X,{onClick:t[5]||(t[5]=e=>v.value=!0)},{default:l(()=>[a(g,{icon:"tabler-plus"}),y(" Add New Status ")]),_:1})]),_:1}),a(te,{"items-per-page":s.value,"onUpdate:itemsPerPage":t[7]||(t[7]=e=>s.value=e),page:i.value,"onUpdate:page":t[8]||(t[8]=e=>i.value=e),items:c.value,headers:T,class:"text-no-wrap color-black table-padding","onUpdate:options":L},{"item.color_code":l(({item:e})=>[n("div",se,[n("div",{style:Z({backgroundColor:e.color_code,width:"24px",height:"24px",borderRadius:"4px",border:"1px solid #ddd"})},null,4),y(" "+D(e.color_code),1)])]),"item.health_type":l(({item:e})=>[a(ae,{color:e.health_type==="hot"?"error":e.health_type==="warm"?"warning":"info",size:"small"},{default:l(()=>[y(D(e.health_type?e.health_type.charAt(0).toUpperCase()+e.health_type.slice(1):"N/A"),1)]),_:2},1032,["color"])]),"item.actions":l(({item:e})=>[n("div",ne,[a(k,{onClick:F=>I(e)},{default:l(()=>[a(g,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),a(k,{onClick:F=>A(e)},{default:l(()=>[a(g,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),bottom:l(()=>[a($,{page:i.value,"onUpdate:page":t[6]||(t[6]=e=>i.value=e),"items-per-page":s.value,"total-items":V.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items"])]),_:1},8,["loading"])],64)}}},ot=j(ie,[["__scopeId","data-v-aa69bd17"]]);export{ot as default};