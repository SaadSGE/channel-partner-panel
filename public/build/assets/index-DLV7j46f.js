import{p as J}from"./formatters-DZJovT4t.js";import{_ as K}from"./TablePagination-3JCLk4xQ.js";import{_ as X}from"./AppTextField-FNCD987S.js";import{_ as Z}from"./AppSelect-DtQLuCd_.js";import{u as ee}from"./rolePermission-B36ozP4e.js";import{u as te}from"./user-Bdvb_LZB.js";import re from"./AddNewUserDrawer-B-VUdvUH.js";import oe from"./EditNewUserDrawer-BVYpZiqv.js";import{S as p}from"./sweetalert2-z6gKu1nJ.js";import{$ as E}from"./api-99WOKqi0.js";import{V as T,a as se,b as le}from"./VCard-BJp96eTV.js";import{V as y}from"./VCardText-BrEuz_jZ.js";import{V as ae}from"./VAvatar-DJAkgXLu.js";import{r as l,H as ie,w as ne,o as b,c as $,b as e,d as a,e as o,F as P,i as ue,f as me,x as V,y as pe,n as de,a1 as d,v as c,a7 as A}from"./main-Bq8deQCX.js";import{a as N,V as O}from"./VRow-D_Z_DnuS.js";import{V as R}from"./VDivider-c212GQ1F.js";import{V as ce}from"./VSpacer-CzfxDigB.js";import{V as fe}from"./VDataTableServer-icrReC_t.js";import{V as ve}from"./VMenu-BqPvUGXu.js";import{V as _e,a as U,b as C}from"./VList-Dvf4ggmo.js";import"./helpers-DK5QwNv0.js";import"./VPagination-C10XkiYt.js";import"./form-BxL6QJTk.js";import"./VTextField-C04YWSgW.js";/* empty css                   */import"./VCounter-DEwuRr79.js";import"./index-CW8R-nlC.js";import"./index-CjfOI940.js";import"./VField-DEuo-wJT.js";import"./easing-CjukEv2V.js";import"./VInput-DAjVSw52.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-CAeDrijQ.js";import"./dialog-transition-DzwEt7fH.js";import"./VOverlay-BTcTkavH.js";import"./lazy-BTUcCFF4.js";import"./scopeId-BUtXmUdf.js";import"./VCheckboxBtn-DTBqEPH6.js";import"./VSelectionControl-CoB5g4dr.js";import"./VChip-DBWGAsrD.js";import"./VSlideGroup-SZRIlWpK.js";import"./validators-DOkm11CL.js";import"./AppAutocomplete-DS7OW5yN.js";import"./filter-C3Mblgdv.js";import"./AppDrawerHeaderSection-DezrnMr9.js";import"./auth-qtO6fsQN.js";import"./vue3-perfect-scrollbar.esm-DBCgvJ9N.js";import"./VNavigationDrawer-B6LZOCGU.js";import"./ssrBoot-CDYbaJai.js";import"./VForm-BkNHcqLX.js";import"./VCheckbox-QKGPytFk.js";import"./VImg-CCyGr-Sd.js";/* empty css              */import"./index-B3bPRkoL.js";import"./VDataTable-BX7BMFr2.js";import"./VTable-4g02zjPA.js";const Ve={class:"d-flex mb-6"},ge={class:"d-flex justify-space-between"},we={class:"d-flex flex-column gap-y-1"},he={class:"text-body-1 text-high-emphasis"},xe={class:"d-flex gap-x-2 align-center"},ye={class:"text-h4"},be={class:"text-sm"},Ue={class:"me-3 d-flex gap-3"},Ce={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},De={style:{"inline-size":"15.625rem"}},Et={__name:"index",setup(ke){const I=te(),D=ee(),g=l(!1),f=l([]),w=l(0),n=l(10),u=l(1),L=l(),z=l(),v=l(""),_=l();l(),l();const k=l(!1),B=l([]),h=l(!1),S=l(null),F=s=>{const r=f.value.findIndex(i=>i.id===s.id);r!==-1&&f.value.splice(r,1,s)},W=s=>{M(s)},M=s=>{S.value=s,h.value=!0},m=async()=>{k.value=!0;try{const s=await I.fetchUsers(u.value,v.value,_.value);f.value=s.data,w.value=s.total}catch(s){console.error("Error fetching users:",s)}finally{k.value=!1}},j=async s=>{try{await E("/apps/users",{method:"POST",body:s}),await m(),p.fire("Success!","User added successfully!","success")}catch(r){console.error("Error adding user:",r),p.fire("Error!","Failed to add user.","error")}},H=async s=>{if((await p.fire({title:"Are you sure?",text:"Do you want to delete this user?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await E(`/apps/users/${s}`,{method:"DELETE"}),await m(),p.fire("Deleted!","The user has been deleted.","success")}catch(i){console.error("Error deleting user:",i),p.fire("Error!","There was an error deleting the user.","error")}},Q=s=>{var r,i;L.value=(r=s.sortBy[0])==null?void 0:r.key,z.value=(i=s.sortBy[0])==null?void 0:i.order,m()},Y=[{title:"Name",key:"full_name"},{title:"Email",key:"email"},{title:"Mobile Number",key:"mobile_number"},{title:"Whatsapp Number",key:"whatsapp_number"},{title:"Role",key:"role"},{title:"Record Count",key:"record_count"},{title:"Actions",key:"actions",sortable:!1}];return ie(async()=>{await D.getAllRoles(),B.value=D.roles,m()}),ne([v,_],()=>{m()}),(s,r)=>{const i=Z,q=X,G=K;return b(),$(P,null,[e(oe,{isDrawerOpen:h.value,editedUser:S.value,"onUpdate:isDrawerOpen":r[0]||(r[0]=t=>h.value=t),onUserUpdated:F},null,8,["isDrawerOpen","editedUser"]),a("section",null,[a("div",Ve,[e(O,null,{default:o(()=>[(b(!0),$(P,null,ue(s.widgetData,(t,x)=>(b(),me(N,{key:x,cols:"12",md:"3",sm:"6"},{default:o(()=>[e(T,null,{default:o(()=>[e(y,null,{default:o(()=>[a("div",ge,[a("div",we,[a("div",he,V(t.title),1),a("div",xe,[a("h4",ye,V(t.value),1),a("div",{class:pe(["text-base",t.change>0?"text-success":"text-error"])}," ("+V(("prefixWithPlus"in s?s.prefixWithPlus:de(J))(t.change))+"%) ",3)]),a("div",be,V(t.desc),1)]),e(ae,{color:t.iconColor,variant:"tonal",rounded:"",size:"42"},{default:o(()=>[e(d,{icon:t.icon,size:"26"},null,8,["icon"])]),_:2},1032,["color"])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),e(T,{class:"mb-6"},{default:o(()=>[e(se,{class:"pb-4"},{default:o(()=>[e(le,null,{default:o(()=>[c("Filters")]),_:1})]),_:1}),e(y,null,{default:o(()=>[e(O,null,{default:o(()=>[e(N,{cols:"12",sm:"4"},{default:o(()=>[e(i,{modelValue:_.value,"onUpdate:modelValue":r[1]||(r[1]=t=>_.value=t),placeholder:"Select Role",items:B.value,clearable:"","clear-icon":"tabler-x","item-title":t=>t.role,"item-value":t=>t.role},null,8,["modelValue","items","item-title","item-value"])]),_:1})]),_:1})]),_:1}),e(R),e(y,{class:"d-flex flex-wrap gap-4"},{default:o(()=>[a("div",Ue,[e(i,{"model-value":n.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":r[2]||(r[2]=t=>n.value=parseInt(t,10))},null,8,["model-value"])]),e(ce),a("div",Ce,[a("div",De,[e(q,{modelValue:v.value,"onUpdate:modelValue":r[3]||(r[3]=t=>v.value=t),placeholder:"Search User"},null,8,["modelValue"])]),e(A,{"prepend-icon":"tabler-plus",onClick:r[4]||(r[4]=t=>g.value=!0)},{default:o(()=>[c(" Add New User ")]),_:1})])]),_:1}),e(R),e(fe,{"items-per-page":n.value,"onUpdate:itemsPerPage":r[6]||(r[6]=t=>n.value=t),page:u.value,"onUpdate:page":r[7]||(r[7]=t=>u.value=t),items:f.value,"items-length":w.value,headers:Y,class:"text-no-wrap","show-select":"","onUpdate:options":Q},{"item.actions":o(({item:t})=>[e(A,{icon:"",variant:"text",color:"medium-emphasis"},{default:o(()=>[e(d,{icon:"tabler-dots-vertical"}),e(ve,{activator:"parent"},{default:o(()=>[e(_e,null,{default:o(()=>[e(U,{to:{name:"user-view-id",params:{id:t.id}}},{prepend:o(()=>[e(d,{icon:"tabler-eye"})]),default:o(()=>[e(C,null,{default:o(()=>[c("View")]),_:1})]),_:2},1032,["to"]),e(U,{onClick:x=>W(t)},{prepend:o(()=>[e(d,{icon:"tabler-pencil"})]),default:o(()=>[e(C,null,{default:o(()=>[c("Edit")]),_:1})]),_:2},1032,["onClick"]),e(U,{onClick:x=>H(t.id)},{prepend:o(()=>[e(d,{icon:"tabler-trash"})]),default:o(()=>[e(C,null,{default:o(()=>[c("Delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:o(()=>[e(G,{page:u.value,"onUpdate:page":r[5]||(r[5]=t=>u.value=t),"items-per-page":n.value,"total-items":w.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),e(re,{isDrawerOpen:g.value,"onUpdate:isDrawerOpen":r[8]||(r[8]=t=>g.value=t),onUserData:j},null,8,["isDrawerOpen"])])],64)}}};export{Et as default};
