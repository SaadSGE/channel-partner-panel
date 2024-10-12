import{_ as re}from"./RoleCards-HLSR7Fa-.js";import{a as se}from"./formatters-lemdAz7z.js";import{_ as ie}from"./TablePagination-CvNNTtuJ.js";import{_ as G}from"./AppTextField-DqkBLktw.js";import{_ as W}from"./AppSelect-BSnVakoD.js";import{r as V,e as ne}from"./validators-BmfWnwf1.js";import{r as n,o as N,f as F,e as l,b as e,n as o,a3 as u,a6 as ue,a7 as E,v as k,aB as J,ad as de,a5 as j,a as H,c as K,d as m,x as P,a1 as x}from"./main-DEXLFq5-.js";import{_ as me}from"./AppDrawerHeaderSection-DiK4iSGl.js";import{P as pe}from"./vue3-perfect-scrollbar.esm-CSeKWONk.js";import{V as X}from"./VDivider-BGznFT5b.js";import{V as Y}from"./VCard-BQ9pbwZy.js";import{V as Z}from"./VCardText-CEHG5Us3.js";import{V as ce}from"./VForm-BKwayuHd.js";import{V as ee,a as d}from"./VRow-DKkqacc7.js";import{V as fe}from"./VNavigationDrawer-p8mkfnwP.js";import{u as ve}from"./useApi-ClqVRpYQ.js";import{c as Ve}from"./createUrl-BNmXgIbh.js";import{$ as Q}from"./api-CQno0kML.js";import{V as _e}from"./VSpacer-Cc-cMN1O.js";import{V as be}from"./VDataTableServer-jwLqUrql.js";import{V as ye}from"./VAvatar-BaU-tpmv.js";import{V as ge}from"./VImg-BwxQFvJc.js";import{V as we}from"./VChip-BSo4JJOl.js";import{V as he}from"./VMenu-Bwz97Y1a.js";import{V as Ue,a as I,b as z}from"./VList-DKU5_qd-.js";import"./DialogCloseBtn-Bk0Es9Yw.js";import"./rolePermission-GxiapXfv.js";import"./helpers-fLnzIySp.js";import"./VTable-CgQReiGh.js";import"./VCheckbox-DQFeDuhk.js";import"./VCheckboxBtn-DE8plL2h.js";import"./VSelectionControl-BkLZjsBe.js";import"./form-B1xJlf5M.js";import"./VInput-GP-yT9Tv.js";import"./index-dXcoFe5c.js";import"./index-UZWnqimo.js";import"./VDialog-BWDml2hg.js";import"./VOverlay-D3a_JeIA.js";import"./easing-CjukEv2V.js";import"./lazy-BlycEKg-.js";import"./scopeId-gfVHp0yK.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-OLWOH0ts.js";import"./VPagination-Cz1XtQip.js";import"./VTextField-YMVwCEg-.js";/* empty css                   */import"./VCounter-DAizO-YE.js";import"./VField-tGKhD_Vg.js";import"./VSelect-rPk05iDq.js";/* empty css              */import"./ssrBoot-D7sdtyqv.js";import"./index-Dz1rBMAR.js";import"./VDataTable-DaZWUfDZ.js";import"./filter-CRYCQMRS.js";import"./VSlideGroup-CbIPENnS.js";const Se={__name:"AddNewUserDrawer",props:{isDrawerOpen:{type:Boolean,required:!0}},emits:["update:isDrawerOpen","userData"],setup(O,{emit:g}){const $=O,v=g,_=n(!1),b=n(),A=n(""),c=n(""),p=n(""),w=n(""),h=n(),C=n(""),q=n(),U=n(),S=n(),T=()=>{v("update:isDrawerOpen",!1),J(()=>{var r,s;(r=b.value)==null||r.reset(),(s=b.value)==null||s.resetValidation()})},L=()=>{var r;(r=b.value)==null||r.validate().then(({valid:s})=>{s&&(v("userData",{id:0,fullName:A.value,company:w.value,role:q.value,country:h.value,contact:C.value,email:p.value,currentPlan:U.value,status:S.value,avatar:"",billing:"Auto Debit"}),v("update:isDrawerOpen",!1),J(()=>{var y,f;(y=b.value)==null||y.reset(),(f=b.value)==null||f.resetValidation()}))})},R=r=>{v("update:isDrawerOpen",r)};return(r,s)=>{const y=me,f=G,D=W;return N(),F(fe,{temporary:"",width:400,location:"end",class:"scrollable-content","model-value":$.isDrawerOpen,"onUpdate:modelValue":R},{default:l(()=>[e(y,{title:"Add New User",onCancel:T}),e(X),e(o(pe),{options:{wheelPropagation:!1}},{default:l(()=>[e(Y,{flat:""},{default:l(()=>[e(Z,null,{default:l(()=>[e(ce,{ref_key:"refForm",ref:b,modelValue:o(_),"onUpdate:modelValue":s[9]||(s[9]=a=>u(_)?_.value=a:null),onSubmit:ue(L,["prevent"])},{default:l(()=>[e(ee,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(f,{modelValue:o(A),"onUpdate:modelValue":s[0]||(s[0]=a=>u(A)?A.value=a:null),rules:["requiredValidator"in r?r.requiredValidator:o(V)],label:"Full Name",placeholder:"John Doe"},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(f,{modelValue:o(c),"onUpdate:modelValue":s[1]||(s[1]=a=>u(c)?c.value=a:null),rules:["requiredValidator"in r?r.requiredValidator:o(V)],label:"Username",placeholder:"Johndoe"},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(f,{modelValue:o(p),"onUpdate:modelValue":s[2]||(s[2]=a=>u(p)?p.value=a:null),rules:["requiredValidator"in r?r.requiredValidator:o(V),"emailValidator"in r?r.emailValidator:o(ne)],label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(f,{modelValue:o(w),"onUpdate:modelValue":s[3]||(s[3]=a=>u(w)?w.value=a:null),rules:["requiredValidator"in r?r.requiredValidator:o(V)],label:"Company",placeholder:"PixInvent"},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(D,{modelValue:o(h),"onUpdate:modelValue":s[4]||(s[4]=a=>u(h)?h.value=a:null),label:"Select Country",placeholder:"Select Country",rules:["requiredValidator"in r?r.requiredValidator:o(V)],items:["USA","UK","India","Australia"]},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(f,{modelValue:o(C),"onUpdate:modelValue":s[5]||(s[5]=a=>u(C)?C.value=a:null),type:"number",rules:["requiredValidator"in r?r.requiredValidator:o(V)],label:"Contact",placeholder:"+1-541-754-3010"},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(D,{modelValue:o(q),"onUpdate:modelValue":s[6]||(s[6]=a=>u(q)?q.value=a:null),label:"Select Role",placeholder:"Select Role",rules:["requiredValidator"in r?r.requiredValidator:o(V)],items:["Admin","Author","Editor","Maintainer","Subscriber"]},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(D,{modelValue:o(U),"onUpdate:modelValue":s[7]||(s[7]=a=>u(U)?U.value=a:null),label:"Select Plan",placeholder:"Select Plan",rules:["requiredValidator"in r?r.requiredValidator:o(V)],items:["Basic","Company","Enterprise","Team"]},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(D,{modelValue:o(S),"onUpdate:modelValue":s[8]||(s[8]=a=>u(S)?S.value=a:null),label:"Select Status",placeholder:"Select Status",rules:["requiredValidator"in r?r.requiredValidator:o(V)],items:[{title:"Active",value:"active"},{title:"Inactive",value:"inactive"},{title:"Pending",value:"pending"}]},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(E,{type:"submit",class:"me-3"},{default:l(()=>[k(" Submit ")]),_:1}),e(E,{type:"reset",variant:"tonal",color:"error",onClick:T},{default:l(()=>[k(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}},De={class:"d-flex gap-2 align-center"},xe=m("p",{class:"text-body-1 mb-0"}," Show ",-1),ke={class:"d-flex align-center flex-wrap gap-4"},Ae={class:"d-flex align-center gap-x-4"},Ce={key:1},qe={class:"d-flex flex-column"},Pe={class:"text-base"},$e={class:"text-sm"},Be={class:"d-flex align-center gap-x-2"},Ne={class:"text-capitalize text-high-emphasis text-body-1"},Te={class:"text-body-1 text-high-emphasis text-capitalize"},Le={__name:"UserList",async setup(O){let g,$;const v=n(""),_=n(),b=n(),A=n(),c=n(10),p=n(1),w=n(),h=n(),C=a=>{var i,B;w.value=(i=a.sortBy[0])==null?void 0:i.key,h.value=(B=a.sortBy[0])==null?void 0:B.order},q=[{title:"User",key:"user"},{title:"Role",key:"role"},{title:"Plan",key:"plan"},{title:"Billing",key:"billing"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],{data:U,execute:S}=([g,$]=de(()=>ve(Ve("/apps/users",{query:{q:v,status:A,plan:b,role:_,itemsPerPage:c,page:p,sortBy:w,orderBy:h}}))),g=await g,$(),g),T=j(()=>U.value.users),L=j(()=>U.value.totalUsers),R=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],r=a=>{const i=a.toLowerCase();return i==="subscriber"?{color:"primary",icon:"tabler-user"}:i==="author"?{color:"warning",icon:"tabler-settings"}:i==="maintainer"?{color:"success",icon:"tabler-chart-donut"}:i==="editor"?{color:"info",icon:"tabler-pencil"}:i==="admin"?{color:"error",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"}},s=a=>{const i=a.toLowerCase();return i==="pending"?"warning":i==="active"?"success":i==="inactive"?"secondary":"primary"},y=n(!1),f=async a=>{await Q("/apps/users",{method:"POST",body:a}),S()},D=async a=>{await Q(`/apps/users/${a}`,{method:"DELETE"}),S()};return(a,i)=>{const B=W,le=G,te=H("RouterLink"),M=H("IconBtn"),ae=ie;return N(),K("section",null,[e(Y,null,{default:l(()=>[e(Z,{class:"d-flex flex-wrap gap-4"},{default:l(()=>[m("div",De,[xe,e(B,{"model-value":o(c),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"5.5rem"},"onUpdate:modelValue":i[0]||(i[0]=t=>c.value=parseInt(t,10))},null,8,["model-value"])]),e(_e),m("div",ke,[e(le,{modelValue:o(v),"onUpdate:modelValue":i[1]||(i[1]=t=>u(v)?v.value=t:null),placeholder:"Search User",style:{"inline-size":"15.625rem"}},null,8,["modelValue"]),e(B,{modelValue:o(_),"onUpdate:modelValue":i[2]||(i[2]=t=>u(_)?_.value=t:null),placeholder:"Select Role",items:R,clearable:"","clear-icon":"tabler-x",style:{"inline-size":"10rem"}},null,8,["modelValue"])])]),_:1}),e(X),e(be,{"items-per-page":o(c),"onUpdate:itemsPerPage":i[4]||(i[4]=t=>u(c)?c.value=t:null),page:o(p),"onUpdate:page":i[5]||(i[5]=t=>u(p)?p.value=t:null),"items-per-page-options":[{value:10,title:"10"},{value:20,title:"20"},{value:50,title:"50"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],items:o(T),"items-length":o(L),headers:q,class:"text-no-wrap","show-select":"","onUpdate:options":C},{"item.user":l(({item:t})=>[m("div",Ae,[e(ye,{size:"34",variant:t.avatar?void 0:"tonal",color:t.avatar?void 0:r(t.role).color},{default:l(()=>[t.avatar?(N(),F(ge,{key:0,src:t.avatar},null,8,["src"])):(N(),K("span",Ce,P(("avatarText"in a?a.avatarText:o(se))(t.fullName)),1))]),_:2},1032,["variant","color"]),m("div",qe,[m("h6",Pe,[e(te,{to:{name:"apps-user-view-id",params:{id:t.id}},class:"font-weight-medium text-link"},{default:l(()=>[k(P(t.fullName),1)]),_:2},1032,["to"])]),m("div",$e,P(t.email),1)])])]),"item.role":l(({item:t})=>[m("div",Be,[e(x,{size:22,icon:r(t.role).icon,color:r(t.role).color},null,8,["icon","color"]),m("div",Ne,P(t.role),1)])]),"item.plan":l(({item:t})=>[m("div",Te,P(t.currentPlan),1)]),"item.status":l(({item:t})=>[e(we,{color:s(t.status),size:"small",label:"",class:"text-capitalize"},{default:l(()=>[k(P(t.status),1)]),_:2},1032,["color"])]),"item.actions":l(({item:t})=>[e(M,{onClick:oe=>D(t.id)},{default:l(()=>[e(x,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(M,null,{default:l(()=>[e(x,{icon:"tabler-eye"})]),_:1}),e(E,{icon:"",variant:"text",color:"medium-emphasis"},{default:l(()=>[e(x,{icon:"tabler-dots-vertical"}),e(he,{activator:"parent"},{default:l(()=>[e(Ue,null,{default:l(()=>[e(I,{to:{name:"apps-user-view-id",params:{id:t.id}}},{prepend:l(()=>[e(x,{icon:"tabler-eye"})]),default:l(()=>[e(z,null,{default:l(()=>[k("View")]),_:1})]),_:2},1032,["to"]),e(I,{link:""},{prepend:l(()=>[e(x,{icon:"tabler-pencil"})]),default:l(()=>[e(z,null,{default:l(()=>[k("Edit")]),_:1})]),_:1}),e(I,{onClick:oe=>D(t.id)},{prepend:l(()=>[e(x,{icon:"tabler-trash"})]),default:l(()=>[e(z,null,{default:l(()=>[k("Delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:l(()=>[e(ae,{page:o(p),"onUpdate:page":i[3]||(i[3]=t=>u(p)?p.value=t:null),"items-per-page":o(c),"total-items":o(L)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items-per-page-options","items","items-length"])]),_:1}),e(Se,{isDrawerOpen:o(y),"onUpdate:isDrawerOpen":i[6]||(i[6]=t=>u(y)?y.value=t:null),onUserData:f},null,8,["isDrawerOpen"])])}}},Oe=m("h4",{class:"text-h4 mb-1"}," Roles List ",-1),Re=m("p",{class:"text-body-1 mb-0"}," A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need ",-1),Ie=m("h4",{class:"text-h4 mb-1 mt-6"}," Total users with their roles ",-1),ze=m("p",{class:"text-body-1 mb-0"}," Find all of your company’s administrator accounts and their associate roles. ",-1),Fl={__name:"index",setup(O){return(g,$)=>(N(),F(ee,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[Oe,Re]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(re)]),_:1}),e(d,{cols:"12"},{default:l(()=>[Ie,ze]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(Le)]),_:1})]),_:1}))}};export{Fl as default};