import{_ as G}from"./AppTextField-DnblfOQu.js";import{_ as J}from"./DialogCloseBtn-BajPU_lL.js";import{u as H}from"./rolePermission-BgnZryg_.js";import{f as N}from"./helpers-BzhXonZD.js";import{V as O}from"./VCard-ZAB0EwIJ.js";import{V as E}from"./VCardText-1-ZGu5dD.js";import{V as W}from"./VForm-B8qs5EG-.js";import{V as z}from"./VTable-D_FPn4ay.js";import{V as D}from"./VCheckbox-DlGt1Uio.js";import{r as _,H as Q,a6 as L,w as $,o as c,f as K,e as t,b as e,d as l,x as R,n as p,c as f,F as x,i as A,z as M,a8 as I,v as U,a as Y,a2 as Z,a4 as F}from"./main-CVWDuzes.js";import{V as ee}from"./VDialog-C11j6Au2.js";import{a as C,V as T}from"./VRow-CD6ZT1z3.js";import{V as le}from"./VSpacer-Cu63oyPP.js";import"./VTextField-BN3Dgytm.js";import"./index-CwN3L1A2.js";import"./index-CLkLnF4x.js";import"./forwardRefs-D3j0TLhE.js";import"./VAvatar-CniKLuiJ.js";import"./VImg-Bii9QvBb.js";import"./VCheckboxBtn-DPlaWpS6.js";import"./dialog-transition-DwFLikRc.js";import"./lazy-BVsDlChf.js";import"./scopeId-BngyCZ-L.js";/* empty css              */const se={class:"text-h4 text-center mb-2"},te=l("p",{class:"text-body-1 text-center mb-6"}," Set Role Permissions ",-1),oe=l("h5",{class:"text-h5 my-6"}," Role Permissions ",-1),ae={key:0},ne={class:"text-h6"},ie={class:"d-flex justify-end"},re={class:"d-flex justify-end"},de={class:"d-flex justify-end"},ue={class:"d-flex justify-end"},ce=l("h5",{class:"text-h5 my-6"}," Custom Permissions ",-1),me={class:"text-h6"},_e={colspan:"4"},fe={class:"d-flex justify-end"},pe={class:"d-flex align-center justify-center gap-4"},ve={__name:"AddEditRoleDialog",props:{rolePermissions:{type:Object,required:!1,default:()=>({id:"",name:"",permissions:[]})},isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","update:rolePermissions"],setup(S,{emit:k}){const V=H(),a=_([]),m=_([]);Q(async()=>{await V.getAllPermission(),a.value=V.permissions,console.log(a.value),a.value.forEach(s=>{m.value=[...new Set([...m.value,...Object.keys(s.custom_permissions||{})])]})});const r=S,v=k,b=_(!1),g=_(""),d=_(null),w=_(),y=L(()=>{let s=0;return a.value.forEach(i=>{Object.entries(i).forEach(([u,P])=>{u!=="name"&&P&&s++}),Object.values(i.custom_permissions||{}).forEach(u=>{u&&s++})}),s}),n=L(()=>y.value>0&&y.value<a.value.length*(4+m.value.length));$(b,s=>{a.value=a.value.map(i=>({...i,read:s,edit:s,create:s,delete:s,custom_permissions:Object.fromEntries(Object.entries(i.custom_permissions||{}).map(([u])=>[u,s]))}))}),$(n,()=>{n.value||(b.value=!1)}),$(a,()=>{y.value===a.value.length*(4+m.value.length)&&(b.value=!0)},{deep:!0}),$(r,()=>{r.rolePermissions&&r.rolePermissions.permissions.length&&(g.value=r.rolePermissions.name,d.value=r.rolePermissions.id,a.value=a.value.map(s=>{var u;const i=(u=r.rolePermissions)==null?void 0:u.permissions.find(P=>P.name===s.name);return i?{...s,...i,custom_permissions:{...s.custom_permissions,...i.custom_permissions||{}}}:s}))});const q=async()=>{var i;const s={id:d.value,name:g.value,permissions:a.value};try{await V.setRolePermission(s),v("update:rolePermissions",s),v("update:isDialogVisible",!1),v("roleSubmitted"),b.value=!1,(i=w.value)==null||i.reset()}catch(u){console.error("Failed to save role permissions:",u)}},B=()=>{var s;v("update:isDialogVisible",!1),b.value=!1,(s=w.value)==null||s.reset()};return(s,i)=>{const u=J,P=G;return c(),K(ee,{width:s.$vuetify.display.smAndDown?"auto":900,"model-value":r.isDialogVisible,"onUpdate:modelValue":B},{default:t(()=>[e(u,{onClick:B}),e(O,{class:"pa-sm-10 pa-2"},{default:t(()=>[e(E,null,{default:t(()=>[l("h4",se,R(r.rolePermissions.name?"Edit":"Add New")+" Role ",1),te,e(p(W),{ref_key:"refPermissionForm",ref:w},{default:t(()=>[e(P,{modelValue:g.value,"onUpdate:modelValue":i[0]||(i[0]=o=>g.value=o),label:"Role Name",placeholder:"Enter Role Name"},null,8,["modelValue"]),oe,e(z,{class:"permission-table text-no-wrap mb-6"},{default:t(()=>[(c(!0),f(x,null,A(a.value,o=>(c(),f(x,{key:o.name},[o.custom?M("",!0):(c(),f("tr",ae,[l("td",null,[l("h6",ne,R(p(N)(o.name)),1)]),l("td",null,[l("div",ie,[e(D,{modelValue:o.read,"onUpdate:modelValue":h=>o.read=h,label:"Read"},null,8,["modelValue","onUpdate:modelValue"])])]),l("td",null,[l("div",re,[e(D,{modelValue:o.create,"onUpdate:modelValue":h=>o.create=h,label:"Create"},null,8,["modelValue","onUpdate:modelValue"])])]),l("td",null,[l("div",de,[e(D,{modelValue:o.edit,"onUpdate:modelValue":h=>o.edit=h,label:"Edit"},null,8,["modelValue","onUpdate:modelValue"])])]),l("td",null,[l("div",ue,[e(D,{modelValue:o.delete,"onUpdate:modelValue":h=>o.delete=h,label:"Delete"},null,8,["modelValue","onUpdate:modelValue"])])])]))],64))),128))]),_:1}),ce,e(z,{class:"permission-table text-no-wrap mb-6"},{default:t(()=>[(c(!0),f(x,null,A(a.value,o=>(c(),f(x,{key:o.name},[o.custom?(c(!0),f(x,{key:0},A(o.custom_permissions,(h,j)=>(c(),f("tr",{key:j},[l("td",null,[l("h6",me,R(p(N)(o.name))+" "+R(p(N)(j)),1)]),l("td",_e,[l("div",fe,[e(D,{modelValue:o.custom_permissions[j],"onUpdate:modelValue":X=>o.custom_permissions[j]=X},null,8,["modelValue","onUpdate:modelValue"])])])]))),128)):M("",!0)],64))),128))]),_:1}),l("div",pe,[e(I,{onClick:q},{default:t(()=>[U(" Submit ")]),_:1}),e(I,{color:"secondary",variant:"tonal",onClick:B},{default:t(()=>[U(" Cancel ")]),_:1})])]),_:1},512)]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},he="/build/assets/girl-using-mobile-CKXBkoEQ.png",Ve={class:"text-body-1"},be={class:"d-flex justify-space-between align-center"},ge={class:"text-h5"},xe={class:"d-flex align-center"},ye=["onClick"],Re=["src"],Ce=l("div",{class:"text-end"},[U(" Add new role,"),l("br"),U(" if it doesn't exist. ")],-1),ke={__name:"RoleCards",setup(S){const k=_([]),V=H(),a=_(!1),m=_(),r=_(!1);Q(async()=>{await v()});const v=async()=>{await V.getAllRoles(),k.value=V.roles},b=(g,d)=>{a.value=!0,m.value=g,m.value.id=d};return(g,d)=>{const w=Y("IconBtn"),y=ve;return c(),f(x,null,[e(T,null,{default:t(()=>[(c(!0),f(x,null,A(p(k),n=>(c(),K(C,{key:n.role,cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(O,null,{default:t(()=>[e(E,{class:"d-flex align-center pb-4"},{default:t(()=>[l("div",Ve," Total "+R(n.details.user_count)+" users ",1),e(le)]),_:2},1024),e(E,null,{default:t(()=>[l("div",be,[l("div",null,[l("h5",ge,R(n.role.toUpperCase()),1),l("div",xe,[l("a",{href:"javascript:void(0)",onClick:q=>b(n.details,n.id)}," Edit Role ",8,ye)])]),e(w,null,{default:t(()=>[e(Z,{icon:"tabler-copy",class:"text-high-emphasis"})]),_:1})])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),e(C,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(O,{class:"h-100",ripple:!1},{default:t(()=>[e(T,{"no-gutters":"",class:"h-100"},{default:t(()=>[e(C,{cols:"5",class:"d-flex flex-column justify-end align-center mt-5"},{default:t(()=>[l("img",{width:"85",src:p(he)},null,8,Re)]),_:1}),e(C,{cols:"7"},{default:t(()=>[e(E,{class:"d-flex flex-column align-end justify-end gap-4"},{default:t(()=>[e(I,{size:"small",onClick:d[0]||(d[0]=n=>r.value=!0)},{default:t(()=>[U(" Add New Role ")]),_:1}),Ce]),_:1})]),_:1})]),_:1})]),_:1}),e(y,{"is-dialog-visible":p(r),"onUpdate:isDialogVisible":d[1]||(d[1]=n=>F(r)?r.value=n:null),onRoleSubmitted:v},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(y,{"is-dialog-visible":p(a),"onUpdate:isDialogVisible":d[2]||(d[2]=n=>F(a)?a.value=n:null),"role-permissions":p(m),"onUpdate:rolePermissions":d[3]||(d[3]=n=>F(m)?m.value=n:null),onRoleSubmitted:v},null,8,["is-dialog-visible","role-permissions"])],64)}}},we=l("h4",{class:"text-h4 mb-1"}," Roles List ",-1),Pe=l("p",{class:"text-body-1 mb-0"}," A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need ",-1),Ye={__name:"index",setup(S){return(k,V)=>(c(),K(T,null,{default:t(()=>[e(C,{cols:"12"},{default:t(()=>[we,Pe]),_:1}),e(C,{cols:"12"},{default:t(()=>[e(ke)]),_:1})]),_:1}))}};export{Ye as default};
