import{_ as ne}from"./AppTextField-BFz_am9_.js";import{_ as _e}from"./DialogCloseBtn-BUzns98q.js";import{V as Q}from"./VCard-jdokyVzG.js";import{V as z}from"./VCardText-BWN8dbxQ.js";import{V as ve}from"./VForm-C16ipWQ7.js";import{V as ge}from"./VTable-DyBViOxg.js";import{V as j}from"./VCheckbox-40QYLtDa.js";import{r as c,a4 as K,w as F,o as f,f as M,e as t,b as e,d as a,v as y,m as o,a2 as b,c as D,F as N,h as ee,a6 as W,t as U,ae as B,af as E,ag as T,ah as L,au as O,aw as H,av as re,cL as he,cM as be,cN as Ve,a as te,y as J,a0 as C,ac as we}from"./main-BvYP52SQ.js";import{V as ye}from"./VDialog-DhhoDm0a.js";import{a as P,V as ae}from"./VRow-_sMVvyKw.js";import{V as ie}from"./VSpacer-Gao2-Szb.js";import{V as q}from"./VAvatar-CE6b77hk.js";import{a as xe}from"./formatters-Cw2xOObF.js";import{_ as Ue}from"./TablePagination-DeNZ323K.js";import{_ as $e}from"./AppSelect-6q28UDMr.js";import{_ as ke}from"./AddNewUserDrawer-C1E7v4Kv.js";import{u as Ce}from"./useApi-BO9ySSXo.js";import{c as De}from"./createUrl-DsPL5Mqu.js";import{$ as oe}from"./api-Y1duly9G.js";import{V as Pe}from"./VDivider-D_SmbYXv.js";import{V as Re}from"./VDataTableServer-6rxa9o41.js";import{V as Ae}from"./VImg-C1COJ1y2.js";import{V as Me}from"./VChip-DpU9i33E.js";import{V as Se}from"./VMenu-hNkc-VcH.js";import{V as Be,a as Y,b as Z}from"./VList-B9A1hChN.js";import"./form-CBH9G5mO.js";import"./VTextField-Dg6X1_pi.js";/* empty css                   */import"./VCounter-C0tCWJKs.js";import"./index-BizsYg1A.js";import"./VField-gRJWzc5v.js";import"./easing-CjukEv2V.js";import"./VInput-DMUh93C3.js";import"./forwardRefs-C-GTDzx5.js";import"./VCheckboxBtn-CHtRirqj.js";import"./VSelectionControl-BpA6oqTX.js";import"./VOverlay-Bc38tH3X.js";import"./lazy-CEsVGIel.js";import"./scopeId-CLB9B5My.js";import"./dialog-transition-CTdH1v6l.js";/* empty css              */import"./helpers-DK5QwNv0.js";import"./VPagination-DM2A68EV.js";import"./VSelect-zEvN-ZQE.js";import"./validators-DpYrMFzk.js";import"./AppDrawerHeaderSection-CGM-AOOR.js";import"./vue3-perfect-scrollbar.esm-DiLmIKoO.js";import"./VNavigationDrawer-B088S2ln.js";import"./ssrBoot-DnPehlU3.js";import"./index-B3bPRkoL.js";import"./VDataTable-BO0NqAZN.js";import"./filter-BedOLCV5.js";import"./VSlideGroup-CQDnPb98.js";const Ee={class:"text-h4 text-center mb-2"},Te=a("p",{class:"text-body-1 text-center mb-6"}," Set Role Permissions ",-1),Le=a("h5",{class:"text-h5 my-6"}," Role Permissions ",-1),Ne=a("td",null,[a("h6",{class:"text-h6"}," Administrator Access ")],-1),ze={colspan:"3"},Ie={class:"d-flex justify-end"},je={class:"text-h6"},Fe={class:"d-flex justify-end"},Oe={class:"d-flex justify-end"},qe={class:"d-flex justify-end"},Qe={class:"d-flex align-center justify-center gap-4"},Ke={__name:"AddEditRoleDialog",props:{rolePermissions:{type:Object,required:!1,default:()=>({name:"",permissions:[]})},isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","update:rolePermissions"],setup(I,{emit:$}){const p=I,_=$,i=c([{name:"User Management",read:!1,write:!1,create:!1},{name:"Content Management",read:!1,write:!1,create:!1},{name:"Disputes Management",read:!1,write:!1,create:!1},{name:"Database Management",read:!1,write:!1,create:!1},{name:"Financial Management",read:!1,write:!1,create:!1},{name:"Reporting",read:!1,write:!1,create:!1},{name:"API Control",read:!1,write:!1,create:!1},{name:"Repository Management",read:!1,write:!1,create:!1},{name:"Payroll",read:!1,write:!1,create:!1}]),h=c(!1),V=c(""),u=c(),v=K(()=>{let n=0;return i.value.forEach(d=>{Object.entries(d).forEach(([k,R])=>{k!=="name"&&R&&n++})}),n}),w=K(()=>v.value>0&&v.value<i.value.length*3);F(h,n=>{i.value=i.value.map(d=>({...d,read:n,write:n,create:n}))}),F(w,()=>{w.value||(h.value=!1)}),F(i,()=>{v.value===i.value.length*3&&(h.value=!0)},{deep:!0}),F(p,()=>{p.rolePermissions&&p.rolePermissions.permissions.length&&(V.value=p.rolePermissions.name,i.value=i.value.map(n=>{var k;const d=(k=p.rolePermissions)==null?void 0:k.permissions.find(R=>R.name===n.name);return d?{...n,...d}:n}))});const r=()=>{var d;const n={name:V.value,permissions:i.value};_("update:rolePermissions",n),_("update:isDialogVisible",!1),h.value=!1,(d=u.value)==null||d.reset()},x=()=>{var n;_("update:isDialogVisible",!1),h.value=!1,(n=u.value)==null||n.reset()};return(n,d)=>{const k=_e,R=ne;return f(),M(ye,{width:n.$vuetify.display.smAndDown?"auto":900,"model-value":p.isDialogVisible,"onUpdate:modelValue":x},{default:t(()=>[e(k,{onClick:x}),e(Q,{class:"pa-sm-10 pa-2"},{default:t(()=>[e(z,null,{default:t(()=>[a("h4",Ee,y(p.rolePermissions.name?"Edit":"Add New")+" Role ",1),Te,e(o(ve),{ref_key:"refPermissionForm",ref:u},{default:t(()=>[e(R,{modelValue:o(V),"onUpdate:modelValue":d[0]||(d[0]=m=>b(V)?V.value=m:null),label:"Role Name",placeholder:"Enter Role Name"},null,8,["modelValue"]),Le,e(ge,{class:"permission-table text-no-wrap mb-6"},{default:t(()=>[a("tr",null,[Ne,a("td",ze,[a("div",Ie,[e(j,{modelValue:o(h),"onUpdate:modelValue":d[1]||(d[1]=m=>b(h)?h.value=m:null),indeterminate:o(w),"onUpdate:indeterminate":d[2]||(d[2]=m=>b(w)?w.value=m:null),label:"Select All"},null,8,["modelValue","indeterminate"])])])]),(f(!0),D(N,null,ee(o(i),m=>(f(),D("tr",{key:m.name},[a("td",null,[a("h6",je,y(m.name),1)]),a("td",null,[a("div",Fe,[e(j,{modelValue:m.read,"onUpdate:modelValue":A=>m.read=A,label:"Read"},null,8,["modelValue","onUpdate:modelValue"])])]),a("td",null,[a("div",Oe,[e(j,{modelValue:m.write,"onUpdate:modelValue":A=>m.write=A,label:"Write"},null,8,["modelValue","onUpdate:modelValue"])])]),a("td",null,[a("div",qe,[e(j,{modelValue:m.create,"onUpdate:modelValue":A=>m.create=A,label:"Create"},null,8,["modelValue","onUpdate:modelValue"])])])]))),128))]),_:1}),a("div",Qe,[e(W,{onClick:r},{default:t(()=>[U(" Submit ")]),_:1}),e(W,{color:"secondary",variant:"tonal",onClick:x},{default:t(()=>[U(" Cancel ")]),_:1})])]),_:1},512)]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},We="/build/assets/girl-using-mobile-CKXBkoEQ.png",Xe={class:"text-body-1"},Ge={class:"v-avatar-group"},He={class:"d-flex justify-space-between align-center"},Je={class:"text-h5"},Ye={class:"d-flex align-center"},Ze=["onClick"],et=["src"],tt=a("div",{class:"text-end"},[U(" Add new role,"),a("br"),U(" if it doesn't exist. ")],-1),at={__name:"RoleCards",setup(I){const $=c([{role:"Administrator",users:[B,E,T,L],details:{name:"Administrator",permissions:[{name:"User Management",read:!0,write:!0,create:!0},{name:"Disputes Management",read:!0,write:!0,create:!0},{name:"API Control",read:!0,write:!0,create:!0}]}},{role:"Manager",users:[B,E,T,L,O,H,re],details:{name:"Manager",permissions:[{name:"Reporting",read:!0,write:!0,create:!1},{name:"Payroll",read:!0,write:!0,create:!0},{name:"User Management",read:!0,write:!0,create:!0}]}},{role:"Users",users:[B,E,T,L,O],details:{name:"Users",permissions:[{name:"User Management",read:!0,write:!1,create:!1},{name:"Content Management",read:!0,write:!1,create:!1},{name:"Disputes Management",read:!0,write:!1,create:!1},{name:"Database Management",read:!0,write:!1,create:!1}]}},{role:"Support",users:[B,E,T,L,O,H],details:{name:"Support",permissions:[{name:"Repository Management",read:!0,write:!0,create:!1},{name:"Content Management",read:!0,write:!0,create:!1},{name:"Database Management",read:!0,write:!0,create:!1}]}},{role:"Restricted User",users:[B,E,T,L,O,H,re,he,be,Ve],details:{name:"Restricted User",permissions:[{name:"User Management",read:!0,write:!1,create:!1},{name:"Content Management",read:!0,write:!1,create:!1},{name:"Disputes Management",read:!0,write:!1,create:!1},{name:"Database Management",read:!0,write:!1,create:!1}]}}]),p=c(!1),_=c(),i=c(!1),h=V=>{p.value=!0,_.value=V};return(V,u)=>{const v=te("IconBtn"),w=Ke;return f(),D(N,null,[e(ae,null,{default:t(()=>[(f(!0),D(N,null,ee(o($),r=>(f(),M(P,{key:r.role,cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(Q,null,{default:t(()=>[e(z,{class:"d-flex align-center pb-4"},{default:t(()=>[a("div",Xe," Total "+y(r.users.length)+" users ",1),e(ie),a("div",Ge,[(f(!0),D(N,null,ee(r.users,(x,n)=>(f(),D(N,{key:x},[r.users.length>4&&r.users.length!==4&&n<3?(f(),M(q,{key:0,size:"40",image:x},null,8,["image"])):J("",!0),r.users.length===4?(f(),M(q,{key:1,size:"40",image:x},null,8,["image"])):J("",!0)],64))),128)),r.users.length>4?(f(),M(q,{key:0,color:V.$vuetify.theme.current.dark?"#373B50":"#EEEDF0"},{default:t(()=>[a("span",null," +"+y(r.users.length-3),1)]),_:2},1032,["color"])):J("",!0)])]),_:2},1024),e(z,null,{default:t(()=>[a("div",He,[a("div",null,[a("h5",Je,y(r.role),1),a("div",Ye,[a("a",{href:"javascript:void(0)",onClick:x=>h(r.details)}," Edit Role ",8,Ze)])]),e(v,null,{default:t(()=>[e(C,{icon:"tabler-copy",class:"text-high-emphasis"})]),_:1})])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),e(P,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(Q,{class:"h-100",ripple:!1},{default:t(()=>[e(ae,{"no-gutters":"",class:"h-100"},{default:t(()=>[e(P,{cols:"5",class:"d-flex flex-column justify-end align-center mt-5"},{default:t(()=>[a("img",{width:"85",src:o(We)},null,8,et)]),_:1}),e(P,{cols:"7"},{default:t(()=>[e(z,{class:"d-flex flex-column align-end justify-end gap-4"},{default:t(()=>[e(W,{size:"small",onClick:u[0]||(u[0]=r=>i.value=!0)},{default:t(()=>[U(" Add New Role ")]),_:1}),tt]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{"is-dialog-visible":o(i),"onUpdate:isDialogVisible":u[1]||(u[1]=r=>b(i)?i.value=r:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(w,{"is-dialog-visible":o(p),"onUpdate:isDialogVisible":u[2]||(u[2]=r=>b(p)?p.value=r:null),"role-permissions":o(_),"onUpdate:rolePermissions":u[3]||(u[3]=r=>b(_)?_.value=r:null)},null,8,["is-dialog-visible","role-permissions"])],64)}}},st={class:"d-flex gap-2 align-center"},lt=a("p",{class:"text-body-1 mb-0"}," Show ",-1),rt={class:"d-flex align-center flex-wrap gap-4"},ot={class:"d-flex align-center gap-x-4"},nt={key:1},it={class:"d-flex flex-column"},ut={class:"text-base"},dt={class:"text-sm"},mt={class:"d-flex align-center gap-x-2"},ct={class:"text-capitalize text-high-emphasis text-body-1"},pt={class:"text-body-1 text-high-emphasis text-capitalize"},ft={__name:"UserList",async setup(I){let $,p;const _=c(""),i=c(),h=c(),V=c(),u=c(10),v=c(1),w=c(),r=c(),x=g=>{var l,S;w.value=(l=g.sortBy[0])==null?void 0:l.key,r.value=(S=g.sortBy[0])==null?void 0:S.order},n=[{title:"User",key:"user"},{title:"Role",key:"role"},{title:"Plan",key:"plan"},{title:"Billing",key:"billing"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],{data:d,execute:k}=([$,p]=we(()=>Ce(De("/apps/users",{query:{q:_,status:V,plan:h,role:i,itemsPerPage:u,page:v,sortBy:w,orderBy:r}}))),$=await $,p(),$),R=K(()=>d.value.users),m=K(()=>d.value.totalUsers),A=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],X=g=>{const l=g.toLowerCase();return l==="subscriber"?{color:"primary",icon:"tabler-user"}:l==="author"?{color:"warning",icon:"tabler-settings"}:l==="maintainer"?{color:"success",icon:"tabler-chart-donut"}:l==="editor"?{color:"info",icon:"tabler-pencil"}:l==="admin"?{color:"error",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"}},ue=g=>{const l=g.toLowerCase();return l==="pending"?"warning":l==="active"?"success":l==="inactive"?"secondary":"primary"},G=c(!1),de=async g=>{await oe("/apps/users",{method:"POST",body:g}),k()},se=async g=>{await oe(`/apps/users/${g}`,{method:"DELETE"}),k()};return(g,l)=>{const S=$e,me=ne,ce=te("RouterLink"),le=te("IconBtn"),pe=Ue;return f(),D("section",null,[e(Q,null,{default:t(()=>[e(z,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[a("div",st,[lt,e(S,{"model-value":o(u),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"5.5rem"},"onUpdate:modelValue":l[0]||(l[0]=s=>u.value=parseInt(s,10))},null,8,["model-value"])]),e(ie),a("div",rt,[e(me,{modelValue:o(_),"onUpdate:modelValue":l[1]||(l[1]=s=>b(_)?_.value=s:null),placeholder:"Search User",style:{"inline-size":"15.625rem"}},null,8,["modelValue"]),e(S,{modelValue:o(i),"onUpdate:modelValue":l[2]||(l[2]=s=>b(i)?i.value=s:null),placeholder:"Select Role",items:A,clearable:"","clear-icon":"tabler-x",style:{"inline-size":"10rem"}},null,8,["modelValue"])])]),_:1}),e(Pe),e(Re,{"items-per-page":o(u),"onUpdate:itemsPerPage":l[4]||(l[4]=s=>b(u)?u.value=s:null),page:o(v),"onUpdate:page":l[5]||(l[5]=s=>b(v)?v.value=s:null),"items-per-page-options":[{value:10,title:"10"},{value:20,title:"20"},{value:50,title:"50"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],items:o(R),"items-length":o(m),headers:n,class:"text-no-wrap","show-select":"","onUpdate:options":x},{"item.user":t(({item:s})=>[a("div",ot,[e(q,{size:"34",variant:s.avatar?void 0:"tonal",color:s.avatar?void 0:X(s.role).color},{default:t(()=>[s.avatar?(f(),M(Ae,{key:0,src:s.avatar},null,8,["src"])):(f(),D("span",nt,y(("avatarText"in g?g.avatarText:o(xe))(s.fullName)),1))]),_:2},1032,["variant","color"]),a("div",it,[a("h6",ut,[e(ce,{to:{name:"apps-user-view-id",params:{id:s.id}},class:"font-weight-medium text-link"},{default:t(()=>[U(y(s.fullName),1)]),_:2},1032,["to"])]),a("div",dt,y(s.email),1)])])]),"item.role":t(({item:s})=>[a("div",mt,[e(C,{size:22,icon:X(s.role).icon,color:X(s.role).color},null,8,["icon","color"]),a("div",ct,y(s.role),1)])]),"item.plan":t(({item:s})=>[a("div",pt,y(s.currentPlan),1)]),"item.status":t(({item:s})=>[e(Me,{color:ue(s.status),size:"small",label:"",class:"text-capitalize"},{default:t(()=>[U(y(s.status),1)]),_:2},1032,["color"])]),"item.actions":t(({item:s})=>[e(le,{onClick:fe=>se(s.id)},{default:t(()=>[e(C,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(le,null,{default:t(()=>[e(C,{icon:"tabler-eye"})]),_:1}),e(W,{icon:"",variant:"text",color:"medium-emphasis"},{default:t(()=>[e(C,{icon:"tabler-dots-vertical"}),e(Se,{activator:"parent"},{default:t(()=>[e(Be,null,{default:t(()=>[e(Y,{to:{name:"apps-user-view-id",params:{id:s.id}}},{prepend:t(()=>[e(C,{icon:"tabler-eye"})]),default:t(()=>[e(Z,null,{default:t(()=>[U("View")]),_:1})]),_:2},1032,["to"]),e(Y,{link:""},{prepend:t(()=>[e(C,{icon:"tabler-pencil"})]),default:t(()=>[e(Z,null,{default:t(()=>[U("Edit")]),_:1})]),_:1}),e(Y,{onClick:fe=>se(s.id)},{prepend:t(()=>[e(C,{icon:"tabler-trash"})]),default:t(()=>[e(Z,null,{default:t(()=>[U("Delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:t(()=>[e(pe,{page:o(v),"onUpdate:page":l[3]||(l[3]=s=>b(v)?v.value=s:null),"items-per-page":o(u),"total-items":o(m)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items-per-page-options","items","items-length"])]),_:1}),e(ke,{isDrawerOpen:o(G),"onUpdate:isDrawerOpen":l[6]||(l[6]=s=>b(G)?G.value=s:null),onUserData:de},null,8,["isDrawerOpen"])])}}},_t=a("h4",{class:"text-h4 mb-1"}," Roles List ",-1),vt=a("p",{class:"text-body-1 mb-0"}," A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need ",-1),gt=a("h4",{class:"text-h4 mb-1 mt-6"}," Total users with their roles ",-1),ht=a("p",{class:"text-body-1 mb-0"}," Find all of your company’s administrator accounts and their associate roles. ",-1),ha={__name:"index",setup(I){return($,p)=>(f(),M(ae,null,{default:t(()=>[e(P,{cols:"12"},{default:t(()=>[_t,vt]),_:1}),e(P,{cols:"12"},{default:t(()=>[e(at)]),_:1}),e(P,{cols:"12"},{default:t(()=>[gt,ht]),_:1}),e(P,{cols:"12"},{default:t(()=>[e(ft)]),_:1})]),_:1}))}};export{ha as default};
