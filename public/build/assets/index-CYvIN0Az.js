import{_ as M}from"./AppCardActions-oV1fcPRg.js";import{_ as O}from"./TablePagination-BWZJrImI.js";import{_ as j}from"./AppTextField-DgZofsLH.js";import{_ as q}from"./AppSelect-uvpu5-01.js";import{u as D}from"./rolePermission-D0bHF4mi.js";import{r as l,w as S,o as k,f as H,e as i,b as e,v as h,x as B,a7 as Q,a8 as T,H as R,a as Y,c as G,d as b,a2 as C}from"./main-D5McJ9Zv.js";import{S as x}from"./sweetalert2-z6gKu1nJ.js";import{V as J,b as K}from"./VCard-Cgis6yXZ.js";import{V as A}from"./VCardText-ByrVCN3b.js";import{V as W}from"./VForm-CTPemAxI.js";import{a as X}from"./VTextField-C6tY1X-k.js";import{V as Z}from"./VDialog-DlKcqVlB.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as te}from"./VSpacer-2uBqlsAT.js";import{V as se}from"./VDataTableServer-B5AYWZYB.js";import"./index-D8QWoZBU.js";import"./dialog-transition-B_BJ9JA7.js";import"./forwardRefs-D3j0TLhE.js";import"./lazy-BGqaIAZx.js";import"./scopeId-cOAU0TpX.js";import"./index-6ozB1_Sf.js";import"./VDivider-Bg58jSdU.js";import"./VPagination-DrHkONnY.js";import"./VSelect-ok_Yuo8W.js";import"./VList-DY6ojEBA.js";import"./ssrBoot-BFxq1bKX.js";import"./VAvatar-BewUqin6.js";import"./VImg-Bp_ZHGHr.js";import"./VMenu-ovXTXsem.js";import"./VCheckboxBtn-CzZbLG_Q.js";import"./VChip-DaZnyOu_.js";import"./VSlideGroup-MxxTfIYi.js";import"./helpers-C_zUu5UZ.js";/* empty css              */import"./VDataTable-DqLWisIw.js";import"./VTable-M5UisAIY.js";import"./filter-fftxsn9K.js";const oe={__name:"AddEditPermissionDialog",props:{isDialogVisible:Boolean,permission:Object},emits:["update:isDialogVisible","saved"],setup(c,{emit:y}){const p=c,f=y,u=D(),o=l("");S(()=>p.permission,r=>{r?o.value=r.name:o.value=""},{immediate:!0});const n=async()=>{try{p.permission?await u.updatePermission({id:p.permission.id,name:o.value}):await u.createPermission({name:o.value}),d(),f("saved"),x.fire({icon:"success",title:"Success",text:p.permission?"Permission updated successfully":"Permission created successfully"})}catch(r){d(),x.fire({icon:"error",title:"Error",text:r})}},d=()=>{f("update:isDialogVisible",!1),o.value=""};return(r,m)=>(k(),H(Z,{"model-value":c.isDialogVisible,"onUpdate:modelValue":d,"max-width":"600px"},{default:i(()=>[e(J,null,{default:i(()=>[e(K,null,{default:i(()=>[h(B(c.permission?"Edit":"Add")+" Permission ",1)]),_:1}),e(A,null,{default:i(()=>[e(W,{onSubmit:Q(n,["prevent"])},{default:i(()=>[e(X,{modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=v=>o.value=v),label:"Permission Name",required:""},null,8,["modelValue"]),e(T,{type:"submit",color:"primary",class:"mt-4"},{default:i(()=>[h(B(c.permission?"Update":"Create")+" Permission ",1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]))}},ie={class:"permission-list-container"},ae={class:"me-3 d-flex gap-3"},le={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},re={style:{"inline-size":"15.625rem"}},ne={class:"text-high-emphasis text-body-1"},me={class:"d-flex flex-column ms-3"},pe={__name:"index",setup(c){const y=D(),p=[{title:"Name",key:"name"},{title:"Actions",key:"actions",sortable:!1}],f=l([]),u=l(0),o=l(10),n=l(1),d=l("name"),r=l("asc"),m=l(""),v=l(!1),_=l(!1),P=l(null),g=async()=>{v.value=!0;try{const a=await y.getAllPermissionForTable({page:n.value,perPage:o.value,sortBy:d.value,orderBy:r.value,searchQuery:m.value});f.value=a.data,u.value=a.total}catch(a){console.error("Error fetching permissions:",a)}finally{v.value=!1}},U=a=>{var t,V;d.value=((t=a.sortBy[0])==null?void 0:t.key)||"name",r.value=((V=a.sortBy[0])==null?void 0:V.order)||"asc",g()},$=a=>{P.value={...a},_.value=!0},E=async a=>{if((await x.fire({title:"Are you sure?",text:"Do you want to delete this permission?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await y.deletePermission(a),g(),x.fire("Deleted!","The permission has been deleted.","success")}catch{x.fire("Error!","There was an error deleting the permission.","error")}},I=async()=>{g(),_.value=!1,P.value=null};return S([m],()=>{g()}),R(()=>{g()}),(a,t)=>{const V=q,N=j,w=Y("IconBtn"),F=O,z=M;return k(),G("div",ie,[e(z,{title:"Permission List",loading:v.value,"no-actions":""},{default:i(()=>[e(A,{class:"d-flex flex-wrap gap-4"},{default:i(()=>[b("div",ae,[e(V,{"model-value":o.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":t[0]||(t[0]=s=>o.value=parseInt(s,10))},null,8,["model-value"])]),e(te),b("div",le,[b("div",re,[e(N,{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=s=>m.value=s),placeholder:"Search Permission"},null,8,["modelValue"])]),e(T,{density:"default","prepend-icon":"tabler-plus",onClick:t[2]||(t[2]=s=>_.value=!0)},{default:i(()=>[h(" Add Permission ")]),_:1})])]),_:1}),e(se,{"items-per-page":o.value,"onUpdate:itemsPerPage":t[4]||(t[4]=s=>o.value=s),page:n.value,"onUpdate:page":t[5]||(t[5]=s=>n.value=s),items:f.value,"items-length":u.value,headers:p,class:"text-no-wrap color-black permission-table","onUpdate:options":U},{"item.name":i(({item:s})=>[b("div",ne,B(s.name),1)]),"item.actions":i(({item:s})=>[b("div",me,[e(w,{onClick:L=>$(s)},{default:i(()=>[e(C,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(w,{onClick:L=>E(s.id)},{default:i(()=>[e(C,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),bottom:i(()=>[e(F,{page:n.value,"onUpdate:page":t[3]||(t[3]=s=>n.value=s),"items-per-page":o.value,"total-items":u.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1},8,["loading"]),e(oe,{isDialogVisible:_.value,"onUpdate:isDialogVisible":t[6]||(t[6]=s=>_.value=s),permission:P.value,onSaved:I},null,8,["isDialogVisible","permission"])])}}},Ge=ee(pe,[["__scopeId","data-v-b0026e3b"]]);export{Ge as default};