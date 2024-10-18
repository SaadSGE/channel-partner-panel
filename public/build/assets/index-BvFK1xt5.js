import{r as oe}from"./validators-C0afK3CL.js";import{a5 as ne,r as l,H as ie,w as ue,o as u,c as de,b as s,d as b,e as r,v as i,a6 as me,n as A,a7 as P,f as m,z as p,a1 as _,F as pe}from"./main-Cp2POdXb.js";import{_ as ce}from"./TablePagination-BcAfm0K9.js";import{_ as fe}from"./AppTextField-CZ3OMAlt.js";import{_ as ve}from"./AppSelect-CwPVrUcc.js";import{_ as Ve}from"./AppAutocomplete-BNiahicf.js";import{_ as ge}from"./Filters-DPx99Svc.js";import{u as Ue}from"./rolePermission-CcRFK9eF.js";import{u as _e}from"./user-DBNttqJC.js";import ye from"./AddNewUserDrawer-Bf-BhYof.js";import we from"./EditNewUserDrawer-XvlUMXsZ.js";import{S as n}from"./sweetalert2-z6gKu1nJ.js";import{g as Se}from"./helpers-CwQmYJBr.js";import{V as O,b as q,c as ke,a as Ce}from"./VCard-oCmDgLNf.js";import{V as E}from"./VCardText-DIkb2F71.js";import{V as be}from"./VForm-Bbw74UUt.js";import{V as z}from"./VSpacer-i5anbK_5.js";import{V as Pe}from"./VDialog-uMvXWSQO.js";import{V as $e}from"./VRow-BcPNCwrl.js";import{V as M}from"./VDivider-DEaYy4t1.js";import{V as De}from"./VDataTableServer-CFw024t0.js";import{V as he}from"./VMenu-D59SCE8_.js";import{V as xe,a as $,b as D}from"./VList-Cacr4NmG.js";import{V as Be}from"./VSwitch-CH_7YIlM.js";import"./VPagination-CJMWe2os.js";import"./VTextField-DsBnAchm.js";import"./index-BkQ_qyLp.js";import"./index-ClsSkh9w.js";import"./forwardRefs-D9kYFWgq.js";import"./VSelect-Ax2TYqix.js";import"./dialog-transition-1LjPfX5Q.js";import"./scopeId-COQ9BaAw.js";import"./VCheckboxBtn-D1rA0Sil.js";import"./VAvatar-DP4U1kqO.js";import"./VImg-CgcLxCLJ.js";import"./VChip-ihqZWhi4.js";import"./filter-D-tUSS7Z.js";import"./AppDateTimePicker-ChcD8AMW.js";import"./commonFunction-RcgXUj1f.js";import"./api-DlJz2cXw.js";import"./index-BYrzgnBV.js";import"./AppDrawerHeaderSection-nb-JI6ng.js";import"./auth-iLLORVCF.js";import"./vue3-perfect-scrollbar.esm-C7kiyJub.js";import"./VNavigationDrawer-6MheYzOi.js";import"./ssrBoot-CQ8JDYey.js";import"./VFileInput-DPMTYZ6D.js";import"./VCheckbox-Bp77_nxV.js";/* empty css              */import"./VDataTable-CT00mbbd.js";import"./VTable-7DamCojC.js";const Ae={class:"me-3 d-flex gap-3"},Ee={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},Te={style:{"inline-size":"15.625rem"}},Et={__name:"index",setup(Fe){const H=ne(()=>"calc(100vh - 200px)"),d=_e(),T=Ue(),h=l(!1),y=l([]),x=l(0),c=l(10),f=l(1),Q=l(),Y=l(),w=l(""),S=l(null),k=l(null);l(),l();const C=l(null),F=l(!1),j=l([]),B=l(!1),R=l(null),v=l(!1),V=l(null),I=l(null),L=l(Se()==="admin"),G=e=>{I.value=e,V.value=e.parent_id||"",v.value=!0},N=async()=>{if(!V.value)return;const e=await d.setParent(I.value.id,V.value);e.success?(g(),n.fire("Success!",e.message,"success"),v.value=!1):n.fire("Error!",e.message,"error")},J=e=>{console.log(e);const t=y.value.findIndex(o=>o.id===e.id);t!==-1&&y.value.splice(t,1,e)},K=e=>{W(e)},W=e=>{R.value=e,B.value=!0},g=async()=>{F.value=!0;try{const e=await d.fetchUsers(f.value,w.value,S.value,k.value,C.value);y.value=e.data,x.value=e.total}catch(e){console.error("Error fetching users:",e)}finally{F.value=!1}},X=async e=>{try{await g(),n.fire("Success!","User added successfully!","success")}catch(t){console.error("Error adding user:",t),n.fire("Error!","Failed to add user.","error")}},Z=async e=>{if((await n.fire({title:"Are you sure?",text:"Do you want to delete this user?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed){const o=await d.deleteUser(e);o.success?n.fire("Deleted!",o.message,"success"):n.fire("Error!",o.message,"error")}},ee=e=>{var t,o;Q.value=(t=e.sortBy[0])==null?void 0:t.key,Y.value=(o=e.sortBy[0])==null?void 0:o.order,g()},te=[{title:"Name",key:"full_name"},{title:"Company",key:"company_name_with_email"},{title:"Role",key:"role"},...L.value?[{title:"Parent",key:"parent.full_name"}]:[],{title:"Record Count",key:"record_count"},...L.value?[{title:"Status",key:"status",sortable:!1}]:[],{title:"Actions",key:"actions",sortable:!1}],ae=async e=>{e.statusLoading=!0;try{(await d.updateUserStatus(e.id,e.status)).status?n.fire("Success!","User status updated successfully!","success"):(n.fire("Error!","Failed to update user status.","error"),e.status=e.status===1?0:1)}catch(t){console.error("Error updating user status:",t),n.fire("Error!","Failed to update user status.","error"),e.status=e.status===1?0:1}finally{e.statusLoading=!1}};return ie(async()=>{await T.getAllRoles(),j.value=T.roles,await d.fetchParentUsers(),g()}),ue([w,S,k,C],()=>{g()}),(e,t)=>{const o=Ve,se=ve,re=fe,le=ce;return u(),de(pe,null,[s(we,{isDrawerOpen:B.value,editedUser:R.value,"onUpdate:isDrawerOpen":t[0]||(t[0]=a=>B.value=a),onUserUpdated:J},null,8,["isDrawerOpen","editedUser"]),b("section",null,[s(Pe,{modelValue:v.value,"onUpdate:modelValue":t[3]||(t[3]=a=>v.value=a),"max-width":"500px"},{default:r(()=>[s(O,null,{default:r(()=>[s(q,null,{default:r(()=>[i("Set Parent")]),_:1}),s(E,null,{default:r(()=>[s(be,{onSubmit:me(N,["prevent"])},{default:r(()=>[s(o,{modelValue:V.value,"onUpdate:modelValue":t[1]||(t[1]=a=>V.value=a),items:A(d).parentUsers,"item-title":a=>a.name_with_email,"item-value":a=>a.id,label:"Parent",placeholder:"Select Parent",rules:["requiredValidator"in e?e.requiredValidator:A(oe)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1})]),_:1}),s(ke,null,{default:r(()=>[s(z),s(P,{color:"primary",onClick:N},{default:r(()=>[i("Submit")]),_:1}),s(P,{onClick:t[2]||(t[2]=a=>v.value=!1)},{default:r(()=>[i("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(O,{class:"mb-6"},{default:r(()=>[e.$can("filter","user")?(u(),m(Ce,{key:0,class:"pb-4"},{default:r(()=>[s(q,null,{default:r(()=>[i("Filter")]),_:1})]),_:1})):p("",!0),e.$can("filter","user")?(u(),m(E,{key:1},{default:r(()=>[s($e,null,{default:r(()=>[s(ge,{"selected-role":S.value,onUpdateRole:t[4]||(t[4]=a=>S.value=a),"selected-parent":k.value,onUpdateParent:t[5]||(t[5]=a=>k.value=a),"selected-userStatus":C.value,onUpdateUserStatus:t[6]||(t[6]=a=>C.value=a)},null,8,["selected-role","selected-parent","selected-userStatus"])]),_:1})]),_:1})):p("",!0),s(M),s(E,{class:"d-flex flex-wrap gap-4"},{default:r(()=>[b("div",Ae,[s(se,{"model-value":c.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":t[7]||(t[7]=a=>c.value=parseInt(a,10))},null,8,["model-value"])]),s(z),b("div",Ee,[b("div",Te,[s(re,{modelValue:w.value,"onUpdate:modelValue":t[8]||(t[8]=a=>w.value=a),placeholder:"Search User"},null,8,["modelValue"])]),e.$can("create","user")?(u(),m(P,{key:0,"prepend-icon":"tabler-plus",onClick:t[9]||(t[9]=a=>h.value=!0)},{default:r(()=>[i(" Add New User ")]),_:1})):p("",!0)])]),_:1}),s(M),s(De,{"items-per-page":c.value,"onUpdate:itemsPerPage":t[11]||(t[11]=a=>c.value=a),page:f.value,"onUpdate:page":t[12]||(t[12]=a=>f.value=a),items:y.value,"items-length":x.value,headers:te,class:"text-no-wrap","show-select":"",height:A(H),"onUpdate:options":ee},{"item.actions":r(({item:a})=>[s(P,{icon:"",variant:"text",color:"medium-emphasis"},{default:r(()=>[s(_,{icon:"tabler-dots-vertical"}),s(he,{activator:"parent"},{default:r(()=>[s(xe,null,{default:r(()=>[s($,{to:{name:"user-view-id",params:{id:a.id}}},{prepend:r(()=>[s(_,{icon:"tabler-eye"})]),default:r(()=>[s(D,null,{default:r(()=>[i("View")]),_:1})]),_:2},1032,["to"]),e.$can("edit","user")?(u(),m($,{key:0,onClick:U=>K(a)},{prepend:r(()=>[s(_,{icon:"tabler-pencil"})]),default:r(()=>[s(D,null,{default:r(()=>[i("Edit")]),_:1})]),_:2},1032,["onClick"])):p("",!0),e.$can("edit","user")?(u(),m($,{key:1,onClick:U=>G(a)},{prepend:r(()=>[s(_,{icon:"tabler-pencil"})]),default:r(()=>[s(D,null,{default:r(()=>[i("Set Parent")]),_:1})]),_:2},1032,["onClick"])):p("",!0),e.$can("delete","user")?(u(),m($,{key:2,onClick:U=>Z(a.id)},{prepend:r(()=>[s(_,{icon:"tabler-trash"})]),default:r(()=>[s(D,null,{default:r(()=>[i("Delete")]),_:1})]),_:2},1032,["onClick"])):p("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"item.status":r(({item:a})=>[s(Be,{modelValue:a.status,"onUpdate:modelValue":U=>a.status=U,"true-value":1,"false-value":0,onChange:U=>ae(a),loading:a.statusLoading},null,8,["modelValue","onUpdate:modelValue","onChange","loading"])]),bottom:r(()=>[s(le,{page:f.value,"onUpdate:page":t[10]||(t[10]=a=>f.value=a),"items-per-page":c.value,"total-items":x.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length","height"])]),_:1}),s(ye,{isDrawerOpen:h.value,"onUpdate:isDrawerOpen":t[13]||(t[13]=a=>h.value=a),onUserData:X},null,8,["isDrawerOpen"])])],64)}}};export{Et as default};