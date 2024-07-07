import{p as se,a as oe}from"./formatters-Cw2xOObF.js";import{_ as re}from"./TablePagination-TYUgG3kU.js";import{_ as ie}from"./AppTextField-CkFZWfQr.js";import{_ as ne}from"./AppSelect-CEujCHWI.js";import{_ as ce}from"./AddNewUserDrawer-DnendpZ1.js";import{u as ue}from"./useApi-CEG314Zu.js";import{c as de}from"./createUrl-B08THM6B.js";import{$ as N}from"./api-s62Rnj22.js";import{V as R,a as y}from"./VRow-DXPoGva5.js";import{V as W,a as pe,b as me}from"./VCard-DD-bpITE.js";import{V as U}from"./VCardText-BpOf8J-6.js";import{V as O}from"./VAvatar-DESUj1gt.js";import{r as i,ad as fe,a5 as F,a as q,o as v,c as C,d as s,b as t,e as a,n as o,a3 as c,F as ve,i as _e,f as M,x as n,y as xe,a1 as u,v as d,a7 as A}from"./main-cX0WqYxM.js";import{V as j}from"./VDivider-nun6oEDR.js";import{V as be}from"./VSpacer-8nHgqEb0.js";import{V as ge}from"./VDataTableServer-CiTHZ_Ds.js";import{V as Ve}from"./VImg-Bq9A4AwQ.js";import{V as he}from"./VChip-DQyCHdpB.js";import{V as ye}from"./VMenu-DmEIPCL-.js";import{V as we,a as P,b as S}from"./VList-f6hP_K5D.js";import"./helpers-DK5QwNv0.js";import"./VPagination-fgTP1I_v.js";import"./form-Czg29FUN.js";import"./VTextField-BhwINXfE.js";/* empty css                   */import"./VCounter-DI58UdTG.js";import"./index-BKtWMVh-.js";import"./index-BjWxQyns.js";import"./VField-B7xwQl8Z.js";import"./easing-CjukEv2V.js";import"./VInput-Ba_C3A5C.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-DtO2EVlD.js";import"./dialog-transition-B4Ks4ZCJ.js";import"./VOverlay-Dt8LsyC0.js";import"./lazy-DOHHlfda.js";import"./scopeId-CTCEP_tp.js";import"./VCheckboxBtn-CqaF7eTX.js";import"./VSelectionControl-BqAQcVjD.js";import"./validators-DpYrMFzk.js";import"./AppDrawerHeaderSection-BvRSCFws.js";import"./vue3-perfect-scrollbar.esm-CEWUVhmY.js";import"./VForm-DI8lUs6V.js";import"./VNavigationDrawer-CddwQuPR.js";import"./ssrBoot-C0TROgbJ.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VDataTable-5hxHc4Iy.js";import"./VTable-BumcRST_.js";import"./filter-DGYbPMOH.js";import"./VSlideGroup-BcPHj7ED.js";const ke={class:"d-flex mb-6"},Ue={class:"d-flex justify-space-between"},Ce={class:"d-flex flex-column gap-y-1"},Ae={class:"text-body-1 text-high-emphasis"},Pe={class:"d-flex gap-x-2 align-center"},Se={class:"text-h4"},Le={class:"text-sm"},Te={class:"me-3 d-flex gap-3"},Be={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},De={style:{"inline-size":"15.625rem"}},ze={class:"d-flex align-center gap-x-4"},$e={key:1},Ie={class:"d-flex flex-column"},Ee={class:"text-base"},Ne={class:"text-sm"},Re={class:"d-flex align-center gap-x-2"},We={class:"text-capitalize text-high-emphasis text-body-1"},Oe={class:"text-body-1 text-high-emphasis text-capitalize"},Wt={__name:"index",async setup(Fe){let _,L;const x=i(""),b=i(),g=i(),V=i(),p=i(10),m=i(1),T=i(),B=i(),Q=r=>{var l,f;T.value=(l=r.sortBy[0])==null?void 0:l.key,B.value=(f=r.sortBy[0])==null?void 0:f.order},G=[{title:"User",key:"user"},{title:"Role",key:"role"},{title:"Plan",key:"plan"},{title:"Billing",key:"billing"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],{data:D,execute:z}=([_,L]=fe(()=>ue(de("/apps/users",{query:{q:x,status:V,plan:g,role:b,itemsPerPage:p,page:m,sortBy:T,orderBy:B}}))),_=await _,L(),_),H=F(()=>D.value.users),$=F(()=>D.value.totalUsers),J=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],K=[{title:"Basic",value:"basic"},{title:"Company",value:"company"},{title:"Enterprise",value:"enterprise"},{title:"Team",value:"team"}],X=[{title:"Pending",value:"pending"},{title:"Active",value:"active"},{title:"Inactive",value:"inactive"}],w=r=>{const l=r.toLowerCase();return l==="subscriber"?{color:"success",icon:"tabler-user"}:l==="author"?{color:"error",icon:"tabler-device-desktop"}:l==="maintainer"?{color:"info",icon:"tabler-chart-pie"}:l==="editor"?{color:"warning",icon:"tabler-edit"}:l==="admin"?{color:"primary",icon:"tabler-crown"}:{color:"primary",icon:"tabler-user"}},Y=r=>{const l=r.toLowerCase();return l==="pending"?"warning":l==="active"?"success":l==="inactive"?"secondary":"primary"},h=i(!1),Z=async r=>{await N("/apps/users",{method:"POST",body:r}),z()},I=async r=>{await N(`/apps/users/${r}`,{method:"DELETE"}),z()},ee=i([{title:"Session",value:"21,459",change:29,desc:"Total Users",icon:"tabler-users",iconColor:"primary"},{title:"Paid Users",value:"4,567",change:18,desc:"Last Week Analytics",icon:"tabler-user-plus",iconColor:"error"},{title:"Active Users",value:"19,860",change:-14,desc:"Last Week Analytics",icon:"tabler-user-check",iconColor:"success"},{title:"Pending Users",value:"237",change:42,desc:"Last Week Analytics",icon:"tabler-user-search",iconColor:"warning"}]);return(r,l)=>{const f=ne,te=ie,ae=q("RouterLink"),E=q("IconBtn"),le=re;return v(),C("section",null,[s("div",ke,[t(R,null,{default:a(()=>[(v(!0),C(ve,null,_e(o(ee),(e,k)=>(v(),M(y,{key:k,cols:"12",md:"3",sm:"6"},{default:a(()=>[t(W,null,{default:a(()=>[t(U,null,{default:a(()=>[s("div",Ue,[s("div",Ce,[s("div",Ae,n(e.title),1),s("div",Pe,[s("h4",Se,n(e.value),1),s("div",{class:xe(["text-base",e.change>0?"text-success":"text-error"])}," ("+n(("prefixWithPlus"in r?r.prefixWithPlus:o(se))(e.change))+"%) ",3)]),s("div",Le,n(e.desc),1)]),t(O,{color:e.iconColor,variant:"tonal",rounded:"",size:"42"},{default:a(()=>[t(u,{icon:e.icon,size:"26"},null,8,["icon"])]),_:2},1032,["color"])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),t(W,{class:"mb-6"},{default:a(()=>[t(pe,{class:"pb-4"},{default:a(()=>[t(me,null,{default:a(()=>[d("Filters")]),_:1})]),_:1}),t(U,null,{default:a(()=>[t(R,null,{default:a(()=>[t(y,{cols:"12",sm:"4"},{default:a(()=>[t(f,{modelValue:o(b),"onUpdate:modelValue":l[0]||(l[0]=e=>c(b)?b.value=e:null),placeholder:"Select Role",items:J,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),t(y,{cols:"12",sm:"4"},{default:a(()=>[t(f,{modelValue:o(g),"onUpdate:modelValue":l[1]||(l[1]=e=>c(g)?g.value=e:null),placeholder:"Select Plan",items:K,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),t(y,{cols:"12",sm:"4"},{default:a(()=>[t(f,{modelValue:o(V),"onUpdate:modelValue":l[2]||(l[2]=e=>c(V)?V.value=e:null),placeholder:"Select Status",items:X,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(j),t(U,{class:"d-flex flex-wrap gap-4"},{default:a(()=>[s("div",Te,[t(f,{"model-value":o(p),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":l[3]||(l[3]=e=>p.value=parseInt(e,10))},null,8,["model-value"])]),t(be),s("div",Be,[s("div",De,[t(te,{modelValue:o(x),"onUpdate:modelValue":l[4]||(l[4]=e=>c(x)?x.value=e:null),placeholder:"Search User"},null,8,["modelValue"])]),t(A,{variant:"tonal",color:"secondary","prepend-icon":"tabler-upload"},{default:a(()=>[d(" Export ")]),_:1}),t(A,{"prepend-icon":"tabler-plus",onClick:l[5]||(l[5]=e=>h.value=!0)},{default:a(()=>[d(" Add New User ")]),_:1})])]),_:1}),t(j),t(ge,{"items-per-page":o(p),"onUpdate:itemsPerPage":l[7]||(l[7]=e=>c(p)?p.value=e:null),page:o(m),"onUpdate:page":l[8]||(l[8]=e=>c(m)?m.value=e:null),items:o(H),"items-length":o($),headers:G,class:"text-no-wrap","show-select":"","onUpdate:options":Q},{"item.user":a(({item:e})=>[s("div",ze,[t(O,{size:"34",variant:e.avatar?void 0:"tonal",color:e.avatar?void 0:w(e.role).color},{default:a(()=>[e.avatar?(v(),M(Ve,{key:0,src:e.avatar},null,8,["src"])):(v(),C("span",$e,n(("avatarText"in r?r.avatarText:o(oe))(e.fullName)),1))]),_:2},1032,["variant","color"]),s("div",Ie,[s("h6",Ee,[t(ae,{to:{name:"apps-user-view-id",params:{id:e.id}},class:"font-weight-medium text-link"},{default:a(()=>[d(n(e.fullName),1)]),_:2},1032,["to"])]),s("div",Ne,n(e.email),1)])])]),"item.role":a(({item:e})=>[s("div",Re,[t(u,{size:22,icon:w(e.role).icon,color:w(e.role).color},null,8,["icon","color"]),s("div",We,n(e.role),1)])]),"item.plan":a(({item:e})=>[s("div",Oe,n(e.currentPlan),1)]),"item.status":a(({item:e})=>[t(he,{color:Y(e.status),size:"small",label:"",class:"text-capitalize"},{default:a(()=>[d(n(e.status),1)]),_:2},1032,["color"])]),"item.actions":a(({item:e})=>[t(E,{onClick:k=>I(e.id)},{default:a(()=>[t(u,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),t(E,null,{default:a(()=>[t(u,{icon:"tabler-eye"})]),_:1}),t(A,{icon:"",variant:"text",color:"medium-emphasis"},{default:a(()=>[t(u,{icon:"tabler-dots-vertical"}),t(ye,{activator:"parent"},{default:a(()=>[t(we,null,{default:a(()=>[t(P,{to:{name:"apps-user-view-id",params:{id:e.id}}},{prepend:a(()=>[t(u,{icon:"tabler-eye"})]),default:a(()=>[t(S,null,{default:a(()=>[d("View")]),_:1})]),_:2},1032,["to"]),t(P,{link:""},{prepend:a(()=>[t(u,{icon:"tabler-pencil"})]),default:a(()=>[t(S,null,{default:a(()=>[d("Edit")]),_:1})]),_:1}),t(P,{onClick:k=>I(e.id)},{prepend:a(()=>[t(u,{icon:"tabler-trash"})]),default:a(()=>[t(S,null,{default:a(()=>[d("Delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[t(le,{page:o(m),"onUpdate:page":l[6]||(l[6]=e=>c(m)?m.value=e:null),"items-per-page":o(p),"total-items":o($)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),t(ce,{isDrawerOpen:o(h),"onUpdate:isDrawerOpen":l[9]||(l[9]=e=>c(h)?h.value=e:null),onUserData:Z},null,8,["isDrawerOpen"])])}}};export{Wt as default};
