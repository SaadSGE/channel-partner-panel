import{r as re}from"./validators-yRjgDR_h.js";import{r as o,H as oe,w as se,o as n,c as ie,b as t,d as k,e as r,v as i,a6 as ne,n as B,a7 as C,f as d,z as p,a1 as g,F as ue}from"./main-kzKK1XE4.js";import{_ as me}from"./TablePagination-QV9owBYl.js";import{_ as de}from"./AppTextField-BCvUXX3V.js";import{_ as pe}from"./AppSelect-Caxo72fS.js";import{_ as ce}from"./AppAutocomplete-l16l5B7F.js";import{u as fe}from"./rolePermission-DYLLofHZ.js";import{u as ve}from"./user-BfoH6Hqm.js";import Ve from"./AddNewUserDrawer-DbURDoK5.js";import _e from"./EditNewUserDrawer-DaA2TG7Z.js";import{S as u}from"./sweetalert2-z6gKu1nJ.js";import{g as ge}from"./helpers-BeXnm4sY.js";import{V as L,b as q,d as we,a as Ue}from"./VCard-DWOcblIG.js";import{V as A}from"./VCardText-do432SKI.js";import{V as ye}from"./VForm-Bgr5kXKW.js";import{V as z}from"./VSpacer-C0t0HYZC.js";import{V as be}from"./VDialog-Baqmc-4e.js";import{V as ke,a as M}from"./VRow-xJk10beR.js";import{V as H}from"./VDivider-BRvIS9W0.js";import{V as Ce}from"./VDataTableServer-BK7W-VlH.js";import{V as Se}from"./VMenu-BVP4sHy0.js";import{V as Pe,a as S,b as P}from"./VList-XkRzCeNh.js";import"./VPagination-woXwbF1u.js";import"./form-CvSQlg_q.js";import"./VTextField-D9hGg4NW.js";/* empty css                   */import"./VCounter-4ZaRFOI2.js";import"./index-BlZJFp_B.js";import"./index-LtM8Y5gz.js";import"./VField-BVEdELyf.js";import"./easing-CjukEv2V.js";import"./VInput-D5j0P0kz.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-B-OkTK7V.js";import"./dialog-transition-BOcmMYsD.js";import"./VOverlay-Y9TS9n9w.js";import"./lazy-Ko0eglkA.js";import"./scopeId-B2QFYqCu.js";import"./VCheckboxBtn-DO-m-uTG.js";import"./VSelectionControl-BVXMxy4r.js";import"./VAvatar-BVVy9Zei.js";import"./VImg-C74ZfjM4.js";import"./VChip-CUMWd3v2.js";import"./VSlideGroup-BnF1OZOC.js";import"./filter-BqVARIH-.js";import"./api-CV6Ytb4u.js";import"./index-B3bPRkoL.js";import"./AppDrawerHeaderSection-B1nNHHZY.js";import"./auth-BJR6XZsP.js";import"./vue3-perfect-scrollbar.esm-CDYQlObX.js";import"./VNavigationDrawer-DXNbk8u4.js";import"./ssrBoot-vn9iu_kZ.js";import"./VFileInput-Dmv_1bR6.js";import"./VCheckbox-B7lHpJTv.js";/* empty css              */import"./VDataTable-CE0B1Kpe.js";import"./VTable-Bn8Sveon.js";const De={class:"me-3 d-flex gap-3"},$e={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},xe={style:{"inline-size":"15.625rem"}},Rt={__name:"index",setup(Be){const m=ve(),E=fe(),D=o(!1),w=o([]),$=o(0),c=o(10),f=o(1),Q=o(),Y=o(),U=o(""),y=o(),b=o(null);o(),o();const T=o(!1),R=o([]),x=o(!1),h=o(null),v=o(!1),V=o(null),I=o(null),j=o(ge()==="admin"),G=a=>{I.value=a,V.value=a.parent_id||"",v.value=!0},N=async()=>{if(!V.value)return;const a=await m.setParent(I.value.id,V.value);a.success?(_(),u.fire("Success!",a.message,"success"),v.value=!1):u.fire("Error!",a.message,"error")},J=a=>{console.log(a);const l=w.value.findIndex(s=>s.id===a.id);l!==-1&&w.value.splice(l,1,a)},K=a=>{W(a)},W=a=>{h.value=a,x.value=!0},_=async()=>{T.value=!0;try{const a=await m.fetchUsers(f.value,U.value,y.value,b.value);w.value=a.data,$.value=a.total}catch(a){console.error("Error fetching users:",a)}finally{T.value=!1}},X=async a=>{try{await _(),u.fire("Success!","User added successfully!","success")}catch(l){console.error("Error adding user:",l),u.fire("Error!","Failed to add user.","error")}},Z=async a=>{if((await u.fire({title:"Are you sure?",text:"Do you want to delete this user?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed){const s=await m.deleteUser(a);s.success?u.fire("Deleted!",s.message,"success"):u.fire("Error!",s.message,"error")}},ee=a=>{var l,s;Q.value=(l=a.sortBy[0])==null?void 0:l.key,Y.value=(s=a.sortBy[0])==null?void 0:s.order,_()},te=[{title:"Name",key:"full_name"},{title:"Email",key:"email"},{title:"Role",key:"role"},...j.value?[{title:"Parent",key:"parent.full_name"}]:[],{title:"Record Count",key:"record_count"},{title:"Actions",key:"actions",sortable:!1}];return oe(async()=>{await E.getAllRoles(),R.value=E.roles,await m.fetchParentUsers(),_()}),se([U,y,b],()=>{_()}),(a,l)=>{const s=ce,O=pe,le=de,ae=me;return n(),ie(ue,null,[t(_e,{isDrawerOpen:x.value,editedUser:h.value,"onUpdate:isDrawerOpen":l[0]||(l[0]=e=>x.value=e),onUserUpdated:J},null,8,["isDrawerOpen","editedUser"]),k("section",null,[t(be,{modelValue:v.value,"onUpdate:modelValue":l[3]||(l[3]=e=>v.value=e),"max-width":"500px"},{default:r(()=>[t(L,null,{default:r(()=>[t(q,null,{default:r(()=>[i("Set Parent")]),_:1}),t(A,null,{default:r(()=>[t(ye,{onSubmit:ne(N,["prevent"])},{default:r(()=>[t(s,{modelValue:V.value,"onUpdate:modelValue":l[1]||(l[1]=e=>V.value=e),items:B(m).parentUsers,"item-title":e=>e.name_with_email,"item-value":e=>e.id,label:"Parent",placeholder:"Select Parent",rules:["requiredValidator"in a?a.requiredValidator:B(re)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1})]),_:1}),t(we,null,{default:r(()=>[t(z),t(C,{color:"primary",onClick:N},{default:r(()=>[i("Submit")]),_:1}),t(C,{onClick:l[2]||(l[2]=e=>v.value=!1)},{default:r(()=>[i("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(L,{class:"mb-6"},{default:r(()=>[a.$can("filter","user")?(n(),d(Ue,{key:0,class:"pb-4"},{default:r(()=>[t(q,null,{default:r(()=>[i("Filter")]),_:1})]),_:1})):p("",!0),a.$can("filter","user")?(n(),d(A,{key:1},{default:r(()=>[t(ke,null,{default:r(()=>[t(M,{cols:"12",sm:"4"},{default:r(()=>[t(O,{modelValue:y.value,"onUpdate:modelValue":l[4]||(l[4]=e=>y.value=e),placeholder:"Select Role",items:R.value,clearable:"","clear-icon":"tabler-x","item-title":e=>e.role,"item-value":e=>e.role},null,8,["modelValue","items","item-title","item-value"])]),_:1}),t(M,{cols:"12",sm:"4"},{default:r(()=>[t(s,{modelValue:b.value,"onUpdate:modelValue":l[5]||(l[5]=e=>b.value=e),placeholder:"Select Parent",items:B(m).parentUsers,clearable:"","clear-icon":"tabler-x","item-title":e=>e.full_name,"item-value":e=>e.id},null,8,["modelValue","items","item-title","item-value"])]),_:1})]),_:1})]),_:1})):p("",!0),t(H),t(A,{class:"d-flex flex-wrap gap-4"},{default:r(()=>[k("div",De,[t(O,{"model-value":c.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":l[6]||(l[6]=e=>c.value=parseInt(e,10))},null,8,["model-value"])]),t(z),k("div",$e,[k("div",xe,[t(le,{modelValue:U.value,"onUpdate:modelValue":l[7]||(l[7]=e=>U.value=e),placeholder:"Search User"},null,8,["modelValue"])]),a.$can("create","user")?(n(),d(C,{key:0,"prepend-icon":"tabler-plus",onClick:l[8]||(l[8]=e=>D.value=!0)},{default:r(()=>[i(" Add New User ")]),_:1})):p("",!0)])]),_:1}),t(H),t(Ce,{"items-per-page":c.value,"onUpdate:itemsPerPage":l[10]||(l[10]=e=>c.value=e),page:f.value,"onUpdate:page":l[11]||(l[11]=e=>f.value=e),items:w.value,"items-length":$.value,headers:te,class:"text-no-wrap","show-select":"","onUpdate:options":ee},{"item.actions":r(({item:e})=>[t(C,{icon:"",variant:"text",color:"medium-emphasis"},{default:r(()=>[t(g,{icon:"tabler-dots-vertical"}),t(Se,{activator:"parent"},{default:r(()=>[t(Pe,null,{default:r(()=>[t(S,{to:{name:"user-view-id",params:{id:e.id}}},{prepend:r(()=>[t(g,{icon:"tabler-eye"})]),default:r(()=>[t(P,null,{default:r(()=>[i("View")]),_:1})]),_:2},1032,["to"]),a.$can("edit","user")?(n(),d(S,{key:0,onClick:F=>K(e)},{prepend:r(()=>[t(g,{icon:"tabler-pencil"})]),default:r(()=>[t(P,null,{default:r(()=>[i("Edit")]),_:1})]),_:2},1032,["onClick"])):p("",!0),a.$can("edit","user")?(n(),d(S,{key:1,onClick:F=>G(e)},{prepend:r(()=>[t(g,{icon:"tabler-pencil"})]),default:r(()=>[t(P,null,{default:r(()=>[i("Set Parent")]),_:1})]),_:2},1032,["onClick"])):p("",!0),a.$can("delete","user")?(n(),d(S,{key:2,onClick:F=>Z(e.id)},{prepend:r(()=>[t(g,{icon:"tabler-trash"})]),default:r(()=>[t(P,null,{default:r(()=>[i("Delete")]),_:1})]),_:2},1032,["onClick"])):p("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:r(()=>[t(ae,{page:f.value,"onUpdate:page":l[9]||(l[9]=e=>f.value=e),"items-per-page":c.value,"total-items":$.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),t(Ve,{isDrawerOpen:D.value,"onUpdate:isDrawerOpen":l[12]||(l[12]=e=>D.value=e),onUserData:X},null,8,["isDrawerOpen"])])],64)}}};export{Rt as default};
