import{p as se,a as oe}from"./formatters-keB9aOAq.js";import{_ as re}from"./TablePagination-BbsoX0yd.js";import{_ as ie}from"./AppTextField-BD3ZAl-7.js";import{_ as ne}from"./AppSelect-DghfcegZ.js";import ce from"./AddNewUserDrawer-CETTlfTv.js";import{u as ue}from"./useApi-C4Gedb4v.js";import{c as pe}from"./createUrl-Djtr7lKi.js";import{$ as N}from"./api-0nR_o9Cu.js";import{V as R,a as y}from"./VRow-DC1nzTNA.js";import{V as W,a as de,b as me}from"./VCard-4bNPQQjd.js";import{V as U}from"./VCardText-BhEVnKCu.js";import{V as O}from"./VAvatar-BJmyczTY.js";import{r as i,ad as fe,a5 as F,a as q,o as v,c as C,d as s,b as t,e as a,n as o,a3 as c,F as ve,i as _e,f as M,x as n,y as xe,a1 as u,v as p,a7 as A}from"./main-cAWQX6jp.js";import{V as j}from"./VDivider-B9Qd0m0I.js";import{V as be}from"./VSpacer-Bf_SdZjf.js";import{V as ge}from"./VDataTableServer-BP_J6Zm-.js";import{V as Ve}from"./VImg-mHq3aHKZ.js";import{V as he}from"./VChip-oLWUlvcm.js";import{V as ye}from"./VMenu-B0nSNvr6.js";import{V as we,a as P,b as S}from"./VList-DxP1JR_I.js";import"./helpers-Bfkpy5Sk.js";import"./VPagination-CbKnZX9E.js";import"./form-_YereJuA.js";import"./VTextField-a5amF184.js";/* empty css                   */import"./VCounter-Deg2-yIN.js";import"./index-Ct-Eh3yE.js";import"./index-Hi4wUk4K.js";import"./VField-MCHClXxZ.js";import"./easing-CjukEv2V.js";import"./VInput-BBlfwkck.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-Dmma-kFZ.js";import"./dialog-transition-Bv5CtFcc.js";import"./VOverlay-C7tWCvmt.js";import"./lazy-C4XpMoWr.js";import"./scopeId-6-j3OWvd.js";import"./VCheckboxBtn-BXz97H5X.js";import"./VSelectionControl-VAHWFGYo.js";import"./validators-Cm2L-yNN.js";import"./AppAutocomplete-ChnOfYpL.js";import"./filter-CSh49kr6.js";import"./AppDrawerHeaderSection-CQRzSYMU.js";import"./auth-DO8TEoXW.js";import"./rolePermission-V_UptGPq.js";import"./sweetalert2-z6gKu1nJ.js";import"./vue3-perfect-scrollbar.esm-DFEerKVh.js";import"./VNavigationDrawer-DjIEYAgp.js";import"./ssrBoot-NXJfjqAB.js";import"./VForm-CqrL5QFS.js";import"./VFileInput-DV1QfOkk.js";import"./VCheckbox-C7C7EALM.js";import"./index-Dz1rBMAR.js";/* empty css              */import"./VDataTable-DzQnQj8t.js";import"./VTable-CsPIC_YZ.js";import"./VSlideGroup-Bxd7_XFR.js";const ke={class:"d-flex mb-6"},Ue={class:"d-flex justify-space-between"},Ce={class:"d-flex flex-column gap-y-1"},Ae={class:"text-body-1 text-high-emphasis"},Pe={class:"d-flex gap-x-2 align-center"},Se={class:"text-h4"},Le={class:"text-sm"},Te={class:"me-3 d-flex gap-3"},Be={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},De={style:{"inline-size":"15.625rem"}},ze={class:"d-flex align-center gap-x-4"},$e={key:1},Ie={class:"d-flex flex-column"},Ee={class:"text-base"},Ne={class:"text-sm"},Re={class:"d-flex align-center gap-x-2"},We={class:"text-capitalize text-high-emphasis text-body-1"},Oe={class:"text-body-1 text-high-emphasis text-capitalize"},Qt={__name:"index",async setup(Fe){let _,L;const x=i(""),b=i(),g=i(),V=i(),d=i(10),m=i(1),T=i(),B=i(),Q=r=>{var l,f;T.value=(l=r.sortBy[0])==null?void 0:l.key,B.value=(f=r.sortBy[0])==null?void 0:f.order},G=[{title:"User",key:"user"},{title:"Role",key:"role"},{title:"Plan",key:"plan"},{title:"Billing",key:"billing"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],{data:D,execute:z}=([_,L]=fe(()=>ue(pe("/apps/users",{query:{q:x,status:V,plan:g,role:b,itemsPerPage:d,page:m,sortBy:T,orderBy:B}}))),_=await _,L(),_),H=F(()=>D.value.users),$=F(()=>D.value.totalUsers),J=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],K=[{title:"Basic",value:"basic"},{title:"Company",value:"company"},{title:"Enterprise",value:"enterprise"},{title:"Team",value:"team"}],X=[{title:"Pending",value:"pending"},{title:"Active",value:"active"},{title:"Inactive",value:"inactive"}],w=r=>{const l=r.toLowerCase();return l==="subscriber"?{color:"success",icon:"tabler-user"}:l==="author"?{color:"error",icon:"tabler-device-desktop"}:l==="maintainer"?{color:"info",icon:"tabler-chart-pie"}:l==="editor"?{color:"warning",icon:"tabler-edit"}:l==="admin"?{color:"primary",icon:"tabler-crown"}:{color:"primary",icon:"tabler-user"}},Y=r=>{const l=r.toLowerCase();return l==="pending"?"warning":l==="active"?"success":l==="inactive"?"secondary":"primary"},h=i(!1),Z=async r=>{await N("/apps/users",{method:"POST",body:r}),z()},I=async r=>{await N(`/apps/users/${r}`,{method:"DELETE"}),z()},ee=i([{title:"Session",value:"21,459",change:29,desc:"Total Users",icon:"tabler-users",iconColor:"primary"},{title:"Paid Users",value:"4,567",change:18,desc:"Last Week Analytics",icon:"tabler-user-plus",iconColor:"error"},{title:"Active Users",value:"19,860",change:-14,desc:"Last Week Analytics",icon:"tabler-user-check",iconColor:"success"},{title:"Pending Users",value:"237",change:42,desc:"Last Week Analytics",icon:"tabler-user-search",iconColor:"warning"}]);return(r,l)=>{const f=ne,te=ie,ae=q("RouterLink"),E=q("IconBtn"),le=re;return v(),C("section",null,[s("div",ke,[t(R,null,{default:a(()=>[(v(!0),C(ve,null,_e(o(ee),(e,k)=>(v(),M(y,{key:k,cols:"12",md:"3",sm:"6"},{default:a(()=>[t(W,null,{default:a(()=>[t(U,null,{default:a(()=>[s("div",Ue,[s("div",Ce,[s("div",Ae,n(e.title),1),s("div",Pe,[s("h4",Se,n(e.value),1),s("div",{class:xe(["text-base",e.change>0?"text-success":"text-error"])}," ("+n(("prefixWithPlus"in r?r.prefixWithPlus:o(se))(e.change))+"%) ",3)]),s("div",Le,n(e.desc),1)]),t(O,{color:e.iconColor,variant:"tonal",rounded:"",size:"42"},{default:a(()=>[t(u,{icon:e.icon,size:"26"},null,8,["icon"])]),_:2},1032,["color"])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),t(W,{class:"mb-6"},{default:a(()=>[t(de,{class:"pb-4"},{default:a(()=>[t(me,null,{default:a(()=>[p("Filters")]),_:1})]),_:1}),t(U,null,{default:a(()=>[t(R,null,{default:a(()=>[t(y,{cols:"12",sm:"4"},{default:a(()=>[t(f,{modelValue:o(b),"onUpdate:modelValue":l[0]||(l[0]=e=>c(b)?b.value=e:null),placeholder:"Select Role",items:J,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),t(y,{cols:"12",sm:"4"},{default:a(()=>[t(f,{modelValue:o(g),"onUpdate:modelValue":l[1]||(l[1]=e=>c(g)?g.value=e:null),placeholder:"Select Plan",items:K,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),t(y,{cols:"12",sm:"4"},{default:a(()=>[t(f,{modelValue:o(V),"onUpdate:modelValue":l[2]||(l[2]=e=>c(V)?V.value=e:null),placeholder:"Select Status",items:X,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(j),t(U,{class:"d-flex flex-wrap gap-4"},{default:a(()=>[s("div",Te,[t(f,{"model-value":o(d),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":l[3]||(l[3]=e=>d.value=parseInt(e,10))},null,8,["model-value"])]),t(be),s("div",Be,[s("div",De,[t(te,{modelValue:o(x),"onUpdate:modelValue":l[4]||(l[4]=e=>c(x)?x.value=e:null),placeholder:"Search User"},null,8,["modelValue"])]),t(A,{variant:"tonal",color:"secondary","prepend-icon":"tabler-upload"},{default:a(()=>[p(" Export ")]),_:1}),t(A,{"prepend-icon":"tabler-plus",onClick:l[5]||(l[5]=e=>h.value=!0)},{default:a(()=>[p(" Add New User ")]),_:1})])]),_:1}),t(j),t(ge,{"items-per-page":o(d),"onUpdate:itemsPerPage":l[7]||(l[7]=e=>c(d)?d.value=e:null),page:o(m),"onUpdate:page":l[8]||(l[8]=e=>c(m)?m.value=e:null),items:o(H),"items-length":o($),headers:G,class:"text-no-wrap","show-select":"","onUpdate:options":Q},{"item.user":a(({item:e})=>[s("div",ze,[t(O,{size:"34",variant:e.avatar?void 0:"tonal",color:e.avatar?void 0:w(e.role).color},{default:a(()=>[e.avatar?(v(),M(Ve,{key:0,src:e.avatar},null,8,["src"])):(v(),C("span",$e,n(("avatarText"in r?r.avatarText:o(oe))(e.fullName)),1))]),_:2},1032,["variant","color"]),s("div",Ie,[s("h6",Ee,[t(ae,{to:{name:"apps-user-view-id",params:{id:e.id}},class:"font-weight-medium text-link"},{default:a(()=>[p(n(e.fullName),1)]),_:2},1032,["to"])]),s("div",Ne,n(e.email),1)])])]),"item.role":a(({item:e})=>[s("div",Re,[t(u,{size:22,icon:w(e.role).icon,color:w(e.role).color},null,8,["icon","color"]),s("div",We,n(e.role),1)])]),"item.plan":a(({item:e})=>[s("div",Oe,n(e.currentPlan),1)]),"item.status":a(({item:e})=>[t(he,{color:Y(e.status),size:"small",label:"",class:"text-capitalize"},{default:a(()=>[p(n(e.status),1)]),_:2},1032,["color"])]),"item.actions":a(({item:e})=>[t(E,{onClick:k=>I(e.id)},{default:a(()=>[t(u,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),t(E,null,{default:a(()=>[t(u,{icon:"tabler-eye"})]),_:1}),t(A,{icon:"",variant:"text",color:"medium-emphasis"},{default:a(()=>[t(u,{icon:"tabler-dots-vertical"}),t(ye,{activator:"parent"},{default:a(()=>[t(we,null,{default:a(()=>[t(P,{to:{name:"apps-user-view-id",params:{id:e.id}}},{prepend:a(()=>[t(u,{icon:"tabler-eye"})]),default:a(()=>[t(S,null,{default:a(()=>[p("View")]),_:1})]),_:2},1032,["to"]),t(P,{link:""},{prepend:a(()=>[t(u,{icon:"tabler-pencil"})]),default:a(()=>[t(S,null,{default:a(()=>[p("Edit")]),_:1})]),_:1}),t(P,{onClick:k=>I(e.id)},{prepend:a(()=>[t(u,{icon:"tabler-trash"})]),default:a(()=>[t(S,null,{default:a(()=>[p("Delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[t(le,{page:o(m),"onUpdate:page":l[6]||(l[6]=e=>c(m)?m.value=e:null),"items-per-page":o(d),"total-items":o($)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),t(ce,{isDrawerOpen:o(h),"onUpdate:isDrawerOpen":l[9]||(l[9]=e=>c(h)?h.value=e:null),onUserData:Z},null,8,["isDrawerOpen"])])}}};export{Qt as default};