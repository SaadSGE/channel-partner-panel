import{r as ue}from"./validators-CyxRyApg.js";import{a5 as de,r as l,H as me,w as pe,o as u,c as ce,b as r,d as h,e as s,v as i,a6 as fe,n as F,a7 as P,f as m,z as p,a1 as U,F as ve}from"./main-CSiErTrC.js";import{_ as Ve}from"./TablePagination-DSIIiVb_.js";import{_ as ge}from"./AppTextField-Ce_7aj-l.js";import{_ as ye}from"./AppSelect-CVe9OyaJ.js";import{_ as Ue}from"./AppAutocomplete-CoK3r2uy.js";import{_ as _e}from"./Filters-nX0VSkit.js";import{c as we}from"./commonFunction-D4acHsqR.js";import{u as be}from"./rolePermission-DAXb0fXz.js";import{u as Se}from"./user-DhABkF9b.js";import ke from"./AddNewUserDrawer-5GIY_ZCq.js";import Ce from"./EditNewUserDrawer-BZgzJRr4.js";import{S as n}from"./sweetalert2-z6gKu1nJ.js";import{g as he}from"./helpers-DTnLmPMO.js";import{V as z,b as M,c as Pe,a as $e}from"./VCard-Dyvot-OU.js";import{V as T}from"./VCardText-BbEmzcMK.js";import{V as De}from"./VForm-D2vsoaeH.js";import{V as H}from"./VSpacer-BeKQVHec.js";import{V as Be}from"./VDialog-DJAp8hLg.js";import{V as xe}from"./VRow-pUYaZicq.js";import{V as Q}from"./VDivider-CJXv-daG.js";import{V as Ae}from"./VDataTableServer-Yre9EQob.js";import{V as Ee}from"./VMenu-BPuY_Q26.js";import{V as Fe,a as $,b as D}from"./VList-ByOnc6tB.js";import{V as Te}from"./VSwitch-DhbUdgyx.js";import"./VPagination-cBXH8NfB.js";import"./VTextField-BE_Olmik.js";import"./index-DfinjJ0j.js";import"./index-D0fdz3wH.js";import"./forwardRefs-D9kYFWgq.js";import"./VSelect-BcYBjzlz.js";import"./dialog-transition-D7_ipZkV.js";import"./scopeId-BtBFTQc-.js";import"./VCheckboxBtn-42SIpkIn.js";import"./VAvatar-Bch8i2Kl.js";import"./VImg-DNzaKymM.js";import"./VChip-DmYAq59v.js";import"./filter-Db2PYUQe.js";import"./AppDateTimePicker-CY-sDC6k.js";import"./api-DWFqE0EF.js";import"./index-BYrzgnBV.js";import"./AppDrawerHeaderSection-DdsGZD7z.js";import"./auth-DuDby9oM.js";import"./vue3-perfect-scrollbar.esm-C2zPO6yf.js";import"./VNavigationDrawer-D5AtBS9q.js";import"./ssrBoot-CaQoqm2n.js";import"./VFileInput-X5FwE30T.js";import"./VCheckbox-CVz_TdFz.js";/* empty css              */import"./VDataTable-DsL9RnY9.js";import"./VTable-Dc2l-39x.js";const Re={class:"me-3 d-flex gap-3"},Ie={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},Le={style:{"inline-size":"15.625rem"}},It={__name:"index",setup(Ne){const Y=de(()=>"calc(100vh - 200px)"),d=Se(),R=be(),I=we(),B=l(!1),_=l([]),x=l(0),c=l(10),f=l(1),j=l(),G=l(),w=l(""),b=l(null),S=l(null);l(),l();const k=l(null),C=l(!1),J=l([]),A=l(!1),L=l(null),v=l(!1),V=l(null),N=l(null),O=l(he()==="admin"),E=l([]),K=e=>{N.value=e,V.value=e.parent_id||"",v.value=!0},q=async()=>{if(!V.value)return;const e=await d.setParent(N.value.id,V.value);e.success?(g(),n.fire("Success!",e.message,"success"),v.value=!1):n.fire("Error!",e.message,"error")},W=e=>{console.log(e);const t=_.value.findIndex(o=>o.id===e.id);t!==-1&&_.value.splice(t,1,e)},X=e=>{Z(e)},Z=e=>{L.value=e,A.value=!0},g=async()=>{C.value=!0;try{const e=await d.fetchUsers(f.value,w.value,b.value,S.value,k.value);_.value=e.data,x.value=e.total}catch(e){console.error("Error fetching users:",e)}finally{C.value=!1}},ee=async e=>{try{await g(),n.fire("Success!","User added successfully!","success")}catch(t){console.error("Error adding user:",t),n.fire("Error!","Failed to add user.","error")}},te=async e=>{if((await n.fire({title:"Are you sure?",text:"Do you want to delete this user?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed){const o=await d.deleteUser(e);o.success?n.fire("Deleted!",o.message,"success"):n.fire("Error!",o.message,"error")}},ae=e=>{var t,o;j.value=(t=e.sortBy[0])==null?void 0:t.key,G.value=(o=e.sortBy[0])==null?void 0:o.order,g()},re=[{title:"Name",key:"full_name"},{title:"Company",key:"company_name_with_email"},{title:"Role",key:"role"},...O.value?[{title:"Parent",key:"parent.full_name"}]:[],{title:"Record Count",key:"record_count"},...O.value?[{title:"Status",key:"status",sortable:!1}]:[],{title:"Actions",key:"actions",sortable:!1}],se=async e=>{e.statusLoading=!0;try{(await d.updateUserStatus(e.id,e.status)).status?n.fire("Success!","User status updated successfully!","success"):(n.fire("Error!","Failed to update user status.","error"),e.status=e.status===1?0:1)}catch(t){console.error("Error updating user status:",t),n.fire("Error!","Failed to update user status.","error"),e.status=e.status===1?0:1}finally{e.statusLoading=!1}};me(async()=>{await R.getAllRoles(),J.value=R.roles,await d.fetchParentUsers(),g(),le()}),pe([w,b,S,k],()=>{g()});const le=async()=>{C.value=!0;try{await I.getBranches(),E.value=I.branches}catch(e){console.error("Error fetching branches:",e)}finally{C.value=!1}};return(e,t)=>{const o=Ue,oe=ye,ne=ge,ie=Ve;return u(),ce(ve,null,[r(Ce,{isDrawerOpen:A.value,editedUser:L.value,branches:E.value,"onUpdate:isDrawerOpen":t[0]||(t[0]=a=>A.value=a),onUserUpdated:W},null,8,["isDrawerOpen","editedUser","branches"]),h("section",null,[r(Be,{modelValue:v.value,"onUpdate:modelValue":t[3]||(t[3]=a=>v.value=a),"max-width":"500px"},{default:s(()=>[r(z,null,{default:s(()=>[r(M,null,{default:s(()=>[i("Set Parent")]),_:1}),r(T,null,{default:s(()=>[r(De,{onSubmit:fe(q,["prevent"])},{default:s(()=>[r(o,{modelValue:V.value,"onUpdate:modelValue":t[1]||(t[1]=a=>V.value=a),items:F(d).parentUsers,"item-title":a=>a.name_with_email,"item-value":a=>a.id,label:"Parent",placeholder:"Select Parent",rules:["requiredValidator"in e?e.requiredValidator:F(ue)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1})]),_:1}),r(Pe,null,{default:s(()=>[r(H),r(P,{color:"primary",onClick:q},{default:s(()=>[i("Submit")]),_:1}),r(P,{onClick:t[2]||(t[2]=a=>v.value=!1)},{default:s(()=>[i("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),r(z,{class:"mb-6"},{default:s(()=>[e.$can("filter","user")?(u(),m($e,{key:0,class:"pb-4"},{default:s(()=>[r(M,null,{default:s(()=>[i("Filter")]),_:1})]),_:1})):p("",!0),e.$can("filter","user")?(u(),m(T,{key:1},{default:s(()=>[r(xe,null,{default:s(()=>[r(_e,{"selected-role":b.value,onUpdateRole:t[4]||(t[4]=a=>b.value=a),"selected-parent":S.value,onUpdateParent:t[5]||(t[5]=a=>S.value=a),"selected-userStatus":k.value,onUpdateUserStatus:t[6]||(t[6]=a=>k.value=a)},null,8,["selected-role","selected-parent","selected-userStatus"])]),_:1})]),_:1})):p("",!0),r(Q),r(T,{class:"d-flex flex-wrap gap-4"},{default:s(()=>[h("div",Re,[r(oe,{"model-value":c.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":t[7]||(t[7]=a=>c.value=parseInt(a,10))},null,8,["model-value"])]),r(H),h("div",Ie,[h("div",Le,[r(ne,{modelValue:w.value,"onUpdate:modelValue":t[8]||(t[8]=a=>w.value=a),placeholder:"Search User"},null,8,["modelValue"])]),e.$can("create","user")?(u(),m(P,{key:0,"prepend-icon":"tabler-plus",onClick:t[9]||(t[9]=a=>B.value=!0)},{default:s(()=>[i(" Add New User ")]),_:1})):p("",!0)])]),_:1}),r(Q),r(Ae,{"items-per-page":c.value,"onUpdate:itemsPerPage":t[11]||(t[11]=a=>c.value=a),page:f.value,"onUpdate:page":t[12]||(t[12]=a=>f.value=a),items:_.value,"items-length":x.value,headers:re,class:"text-no-wrap","show-select":"",height:F(Y),"onUpdate:options":ae},{"item.actions":s(({item:a})=>[r(P,{icon:"",variant:"text",color:"medium-emphasis"},{default:s(()=>[r(U,{icon:"tabler-dots-vertical"}),r(Ee,{activator:"parent"},{default:s(()=>[r(Fe,null,{default:s(()=>[r($,{to:{name:"user-view-id",params:{id:a.id}}},{prepend:s(()=>[r(U,{icon:"tabler-eye"})]),default:s(()=>[r(D,null,{default:s(()=>[i("View")]),_:1})]),_:2},1032,["to"]),e.$can("edit","user")?(u(),m($,{key:0,onClick:y=>X(a)},{prepend:s(()=>[r(U,{icon:"tabler-pencil"})]),default:s(()=>[r(D,null,{default:s(()=>[i("Edit")]),_:1})]),_:2},1032,["onClick"])):p("",!0),e.$can("edit","user")?(u(),m($,{key:1,onClick:y=>K(a)},{prepend:s(()=>[r(U,{icon:"tabler-pencil"})]),default:s(()=>[r(D,null,{default:s(()=>[i("Set Parent")]),_:1})]),_:2},1032,["onClick"])):p("",!0),e.$can("delete","user")?(u(),m($,{key:2,onClick:y=>te(a.id)},{prepend:s(()=>[r(U,{icon:"tabler-trash"})]),default:s(()=>[r(D,null,{default:s(()=>[i("Delete")]),_:1})]),_:2},1032,["onClick"])):p("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"item.status":s(({item:a})=>[r(Te,{modelValue:a.status,"onUpdate:modelValue":y=>a.status=y,"true-value":1,"false-value":0,onChange:y=>se(a),loading:a.statusLoading},null,8,["modelValue","onUpdate:modelValue","onChange","loading"])]),bottom:s(()=>[r(ie,{page:f.value,"onUpdate:page":t[10]||(t[10]=a=>f.value=a),"items-per-page":c.value,"total-items":x.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length","height"])]),_:1}),r(ke,{isDrawerOpen:B.value,"onUpdate:isDrawerOpen":t[13]||(t[13]=a=>B.value=a),branches:E.value,onUserData:ee},null,8,["isDrawerOpen","branches"])])],64)}}};export{It as default};
