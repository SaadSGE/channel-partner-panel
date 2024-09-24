import{r as oe}from"./validators-DtIjcirE.js";import{a5 as ie,r as s,H as ne,w as ue,o as m,c as me,b as a,d as k,e as r,v as n,a6 as de,n as S,a7 as P,f as d,z as p,a1 as y,F as pe}from"./main-SNycq9Wb.js";import{_ as ce}from"./TablePagination-ddmjcYmS.js";import{_ as fe}from"./AppTextField-CKsu1tnY.js";import{_ as ve}from"./AppSelect-J1ufI1O2.js";import{_ as Ve}from"./AppAutocomplete-Cnhp6Z0L.js";import{u as ge}from"./rolePermission-CmhcSGNC.js";import{u as _e}from"./user-BvY8Vsj7.js";import ye from"./AddNewUserDrawer-Bew0mm4J.js";import Ue from"./EditNewUserDrawer-CzWCuwsG.js";import{S as i}from"./sweetalert2-z6gKu1nJ.js";import{g as we}from"./helpers-BHofXdUS.js";import{V as q,b as z,d as be,a as Ce}from"./VCard-CTTUvP1z.js";import{V as A}from"./VCardText-CwCJmYPu.js";import{V as ke}from"./VForm-Bg3RvoJw.js";import{V as M}from"./VSpacer-DPxtITdL.js";import{V as Se}from"./VDialog-BgVWCRtI.js";import{V as Pe,a as H}from"./VRow-B1B3_OLg.js";import{V as Q}from"./VDivider-CC60AYOk.js";import{V as he}from"./VDataTableServer-bGZFIONY.js";import{V as De}from"./VMenu-PzCZZKa2.js";import{V as $e,a as h,b as D}from"./VList-z56gNYuu.js";import{V as xe}from"./VSwitch-DkNGhv5t.js";import"./VPagination-B4RCI3Zr.js";import"./form-DW-m8cpN.js";import"./VTextField-zPE8edNe.js";/* empty css                   */import"./VCounter-MEafN2p_.js";import"./index-BaCvR2Dp.js";import"./index-DjC5zcGq.js";import"./VField-C1vhRwZI.js";import"./easing-CjukEv2V.js";import"./VInput-C4di7BqM.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-CSWjg-oZ.js";import"./dialog-transition-B7N3KhaO.js";import"./VOverlay-DxhpEcDN.js";import"./lazy-BKZCIQX2.js";import"./scopeId-5ufJ0QOa.js";import"./VCheckboxBtn-6VThbI5d.js";import"./VSelectionControl-Dz_Kc7uM.js";import"./VAvatar-BOD9YOS2.js";import"./VImg-CnAFr3TP.js";import"./VChip-ByagRxUI.js";import"./VSlideGroup-B_lpQXVB.js";import"./filter-BDyw-pmA.js";import"./api-CIy2BM77.js";import"./index-B3bPRkoL.js";import"./AppDrawerHeaderSection-H20PLY3Z.js";import"./auth-BRYoFHL1.js";import"./vue3-perfect-scrollbar.esm-Bv_DwBB7.js";import"./VNavigationDrawer-fmLz9zP0.js";import"./ssrBoot-B0L9SX1n.js";import"./VFileInput-jfuvoUUN.js";import"./VCheckbox-D5-GXn6k.js";/* empty css              */import"./VDataTable-Cu1laUii.js";import"./VTable-BNjn7saJ.js";const Be={class:"me-3 d-flex gap-3"},Ae={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},Ee={style:{"inline-size":"15.625rem"}},Nt={__name:"index",setup(Te){const Y=ie(()=>"calc(100vh - 200px)"),u=_e(),E=ge(),$=s(!1),U=s([]),x=s(0),c=s(10),f=s(1),j=s(),G=s(),w=s(""),b=s(),C=s(null);s(),s();const T=s(!1),F=s([]),B=s(!1),R=s(null),v=s(!1),V=s(null),I=s(null),L=s(we()==="admin"),J=t=>{I.value=t,V.value=t.parent_id||"",v.value=!0},N=async()=>{if(!V.value)return;const t=await u.setParent(I.value.id,V.value);t.success?(g(),i.fire("Success!",t.message,"success"),v.value=!1):i.fire("Error!",t.message,"error")},K=t=>{console.log(t);const l=U.value.findIndex(o=>o.id===t.id);l!==-1&&U.value.splice(l,1,t)},W=t=>{X(t)},X=t=>{R.value=t,B.value=!0},g=async()=>{T.value=!0;try{const t=await u.fetchUsers(f.value,w.value,b.value,C.value);U.value=t.data,x.value=t.total}catch(t){console.error("Error fetching users:",t)}finally{T.value=!1}},Z=async t=>{try{await g(),i.fire("Success!","User added successfully!","success")}catch(l){console.error("Error adding user:",l),i.fire("Error!","Failed to add user.","error")}},ee=async t=>{if((await i.fire({title:"Are you sure?",text:"Do you want to delete this user?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed){const o=await u.deleteUser(t);o.success?i.fire("Deleted!",o.message,"success"):i.fire("Error!",o.message,"error")}},te=t=>{var l,o;j.value=(l=t.sortBy[0])==null?void 0:l.key,G.value=(o=t.sortBy[0])==null?void 0:o.order,g()},ae=[{title:"Name",key:"full_name"},{title:"Company",key:"company_name_with_email"},{title:"Role",key:"role"},...L.value?[{title:"Parent",key:"parent.full_name"}]:[],{title:"Record Count",key:"record_count"},...L.value?[{title:"Status",key:"status",sortable:!1}]:[],{title:"Actions",key:"actions",sortable:!1}],le=async t=>{t.statusLoading=!0;try{(await u.updateUserStatus(t.id,t.status)).status?i.fire("Success!","User status updated successfully!","success"):(i.fire("Error!","Failed to update user status.","error"),t.status=t.status===1?0:1)}catch(l){console.error("Error updating user status:",l),i.fire("Error!","Failed to update user status.","error"),t.status=t.status===1?0:1}finally{t.statusLoading=!1}};return ne(async()=>{await E.getAllRoles(),F.value=E.roles,await u.fetchParentUsers(),g()}),ue([w,b,C],()=>{g()}),(t,l)=>{const o=Ve,O=ve,re=fe,se=ce;return m(),me(pe,null,[a(Ue,{isDrawerOpen:B.value,editedUser:R.value,"onUpdate:isDrawerOpen":l[0]||(l[0]=e=>B.value=e),onUserUpdated:K},null,8,["isDrawerOpen","editedUser"]),k("section",null,[a(Se,{modelValue:v.value,"onUpdate:modelValue":l[3]||(l[3]=e=>v.value=e),"max-width":"500px"},{default:r(()=>[a(q,null,{default:r(()=>[a(z,null,{default:r(()=>[n("Set Parent")]),_:1}),a(A,null,{default:r(()=>[a(ke,{onSubmit:de(N,["prevent"])},{default:r(()=>[a(o,{modelValue:V.value,"onUpdate:modelValue":l[1]||(l[1]=e=>V.value=e),items:S(u).parentUsers,"item-title":e=>e.name_with_email,"item-value":e=>e.id,label:"Parent",placeholder:"Select Parent",rules:["requiredValidator"in t?t.requiredValidator:S(oe)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1})]),_:1}),a(be,null,{default:r(()=>[a(M),a(P,{color:"primary",onClick:N},{default:r(()=>[n("Submit")]),_:1}),a(P,{onClick:l[2]||(l[2]=e=>v.value=!1)},{default:r(()=>[n("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(q,{class:"mb-6"},{default:r(()=>[t.$can("filter","user")?(m(),d(Ce,{key:0,class:"pb-4"},{default:r(()=>[a(z,null,{default:r(()=>[n("Filter")]),_:1})]),_:1})):p("",!0),t.$can("filter","user")?(m(),d(A,{key:1},{default:r(()=>[a(Pe,null,{default:r(()=>[a(H,{cols:"12",sm:"4"},{default:r(()=>[a(O,{modelValue:b.value,"onUpdate:modelValue":l[4]||(l[4]=e=>b.value=e),placeholder:"Select Role",items:F.value,clearable:"","clear-icon":"tabler-x","item-title":e=>e.role,"item-value":e=>e.role},null,8,["modelValue","items","item-title","item-value"])]),_:1}),a(H,{cols:"12",sm:"4"},{default:r(()=>[a(o,{modelValue:C.value,"onUpdate:modelValue":l[5]||(l[5]=e=>C.value=e),placeholder:"Select Parent",items:S(u).parentUsers,clearable:"","clear-icon":"tabler-x","item-title":e=>e.full_name,"item-value":e=>e.id},null,8,["modelValue","items","item-title","item-value"])]),_:1})]),_:1})]),_:1})):p("",!0),a(Q),a(A,{class:"d-flex flex-wrap gap-4"},{default:r(()=>[k("div",Be,[a(O,{"model-value":c.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":l[6]||(l[6]=e=>c.value=parseInt(e,10))},null,8,["model-value"])]),a(M),k("div",Ae,[k("div",Ee,[a(re,{modelValue:w.value,"onUpdate:modelValue":l[7]||(l[7]=e=>w.value=e),placeholder:"Search User"},null,8,["modelValue"])]),t.$can("create","user")?(m(),d(P,{key:0,"prepend-icon":"tabler-plus",onClick:l[8]||(l[8]=e=>$.value=!0)},{default:r(()=>[n(" Add New User ")]),_:1})):p("",!0)])]),_:1}),a(Q),a(he,{"items-per-page":c.value,"onUpdate:itemsPerPage":l[10]||(l[10]=e=>c.value=e),page:f.value,"onUpdate:page":l[11]||(l[11]=e=>f.value=e),items:U.value,"items-length":x.value,headers:ae,class:"text-no-wrap","show-select":"",height:S(Y),"onUpdate:options":te},{"item.actions":r(({item:e})=>[a(P,{icon:"",variant:"text",color:"medium-emphasis"},{default:r(()=>[a(y,{icon:"tabler-dots-vertical"}),a(De,{activator:"parent"},{default:r(()=>[a($e,null,{default:r(()=>[a(h,{to:{name:"user-view-id",params:{id:e.id}}},{prepend:r(()=>[a(y,{icon:"tabler-eye"})]),default:r(()=>[a(D,null,{default:r(()=>[n("View")]),_:1})]),_:2},1032,["to"]),t.$can("edit","user")?(m(),d(h,{key:0,onClick:_=>W(e)},{prepend:r(()=>[a(y,{icon:"tabler-pencil"})]),default:r(()=>[a(D,null,{default:r(()=>[n("Edit")]),_:1})]),_:2},1032,["onClick"])):p("",!0),t.$can("edit","user")?(m(),d(h,{key:1,onClick:_=>J(e)},{prepend:r(()=>[a(y,{icon:"tabler-pencil"})]),default:r(()=>[a(D,null,{default:r(()=>[n("Set Parent")]),_:1})]),_:2},1032,["onClick"])):p("",!0),t.$can("delete","user")?(m(),d(h,{key:2,onClick:_=>ee(e.id)},{prepend:r(()=>[a(y,{icon:"tabler-trash"})]),default:r(()=>[a(D,null,{default:r(()=>[n("Delete")]),_:1})]),_:2},1032,["onClick"])):p("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"item.status":r(({item:e})=>[a(xe,{modelValue:e.status,"onUpdate:modelValue":_=>e.status=_,"true-value":1,"false-value":0,onChange:_=>le(e),loading:e.statusLoading},null,8,["modelValue","onUpdate:modelValue","onChange","loading"])]),bottom:r(()=>[a(se,{page:f.value,"onUpdate:page":l[9]||(l[9]=e=>f.value=e),"items-per-page":c.value,"total-items":x.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length","height"])]),_:1}),a(ye,{isDrawerOpen:$.value,"onUpdate:isDrawerOpen":l[12]||(l[12]=e=>$.value=e),onUserData:Z},null,8,["isDrawerOpen"])])],64)}}};export{Nt as default};
