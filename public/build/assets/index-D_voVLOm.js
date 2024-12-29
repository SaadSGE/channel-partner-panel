import{_ as X}from"./AppTextField-DFkCpbYz.js";import{_ as G}from"./DialogCloseBtn-BTGsMDFw.js";import{u as M}from"./rolePermission-nqSxQQ9y.js";import{f as N}from"./helpers-CofNusnb.js";import{V as O}from"./VCard-CiUXVH6b.js";import{V as E}from"./VCardText-haI9Z-IX.js";import{V as J}from"./VForm-BglYL0G4.js";import{V as z}from"./VTable-9EnPL_hl.js";import{V as D}from"./VCheckbox-D-DyNUv_.js";import{r as _,H,a6 as L,w as $,o as c,f as K,e as t,b as e,d as l,x as y,n as f,c as h,F as R,i as A,z as W,a9 as I,v as U,a as Y,a2 as Z,a4 as F}from"./main-C3zi_SKQ.js";import{V as ee}from"./VDialog-3Jy0gPfO.js";import{a as C,V as T}from"./VRow-s-aEvbE2.js";import{V as le}from"./VSpacer-ZOaaLL5l.js";import"./VInput-DkaOtTDM.js";import"./index-DPXcXuYg.js";import"./index-C8YGC3Io.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-Dognc3Fg.js";import"./VAvatar-DNScsPhF.js";import"./VImg-CXAH5jII.js";import"./VCheckboxBtn-ChwCrhEn.js";import"./dialog-transition-CxaPI8Wz.js";import"./scopeId-CNDVdJ3R.js";/* empty css              */const se={class:"text-h4 text-center mb-2"},te=l("p",{class:"text-body-1 text-center mb-6"}," Set Role Permissions ",-1),oe=l("h5",{class:"text-h5 my-6"}," Role Permissions ",-1),ae={class:"text-h6"},ne={class:"d-flex justify-end"},ie={class:"d-flex justify-end"},re={class:"d-flex justify-end"},de={class:"d-flex justify-end"},ue=l("h5",{class:"text-h5 my-6"}," Custom Permissions ",-1),ce={class:"text-h6"},me={colspan:"4"},_e={class:"d-flex justify-end"},fe={class:"d-flex align-center justify-center gap-4"},pe={__name:"AddEditRoleDialog",props:{rolePermissions:{type:Object,required:!1,default:()=>({id:"",name:"",permissions:[]})},isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","update:rolePermissions"],setup(S,{emit:w}){const V=M(),o=_([]),m=_([]);H(async()=>{await V.getAllPermission(),o.value=V.permissions,console.log(o.value),o.value.forEach(s=>{m.value=[...new Set([...m.value,...Object.keys(s.custom_permissions||{})])]})});const r=S,p=w,b=_(!1),g=_(""),d=_(null),k=_(),x=L(()=>{let s=0;return o.value.forEach(i=>{Object.entries(i).forEach(([u,P])=>{u!=="name"&&P&&s++}),Object.values(i.custom_permissions||{}).forEach(u=>{u&&s++})}),s}),n=L(()=>x.value>0&&x.value<o.value.length*(4+m.value.length));$(b,s=>{o.value=o.value.map(i=>({...i,read:s,edit:s,create:s,delete:s,custom_permissions:Object.fromEntries(Object.entries(i.custom_permissions||{}).map(([u])=>[u,s]))}))}),$(n,()=>{n.value||(b.value=!1)}),$(o,()=>{x.value===o.value.length*(4+m.value.length)&&(b.value=!0)},{deep:!0}),$(r,()=>{r.rolePermissions&&r.rolePermissions.permissions.length&&(g.value=r.rolePermissions.name,d.value=r.rolePermissions.id,o.value=o.value.map(s=>{var u;const i=(u=r.rolePermissions)==null?void 0:u.permissions.find(P=>P.name===s.name);return i?{...s,...i,custom_permissions:{...s.custom_permissions,...i.custom_permissions||{}}}:s}))});const q=async()=>{var i;const s={id:d.value,name:g.value,permissions:o.value};try{await V.setRolePermission(s),p("update:rolePermissions",s),p("update:isDialogVisible",!1),p("roleSubmitted"),b.value=!1,(i=k.value)==null||i.reset()}catch(u){console.error("Failed to save role permissions:",u)}},B=()=>{var s;p("update:isDialogVisible",!1),b.value=!1,(s=k.value)==null||s.reset()};return(s,i)=>{const u=G,P=X;return c(),K(ee,{width:s.$vuetify.display.smAndDown?"auto":900,"model-value":r.isDialogVisible,"onUpdate:modelValue":B},{default:t(()=>[e(u,{onClick:B}),e(O,{class:"pa-sm-10 pa-2"},{default:t(()=>[e(E,null,{default:t(()=>[l("h4",se,y(r.rolePermissions.name?"Edit":"Add New")+" Role ",1),te,e(f(J),{ref_key:"refPermissionForm",ref:k},{default:t(()=>[e(P,{modelValue:g.value,"onUpdate:modelValue":i[0]||(i[0]=a=>g.value=a),label:"Role Name",placeholder:"Enter Role Name"},null,8,["modelValue"]),oe,e(z,{class:"permission-table text-no-wrap mb-6"},{default:t(()=>[(c(!0),h(R,null,A(o.value,a=>(c(),h("tr",{key:a.name},[l("td",null,[l("h6",ae,y(f(N)(a.name)),1)]),l("td",null,[l("div",ne,[e(D,{modelValue:a.read,"onUpdate:modelValue":v=>a.read=v,label:"Read"},null,8,["modelValue","onUpdate:modelValue"])])]),l("td",null,[l("div",ie,[e(D,{modelValue:a.create,"onUpdate:modelValue":v=>a.create=v,label:"Create"},null,8,["modelValue","onUpdate:modelValue"])])]),l("td",null,[l("div",re,[e(D,{modelValue:a.edit,"onUpdate:modelValue":v=>a.edit=v,label:"Edit"},null,8,["modelValue","onUpdate:modelValue"])])]),l("td",null,[l("div",de,[e(D,{modelValue:a.delete,"onUpdate:modelValue":v=>a.delete=v,label:"Delete"},null,8,["modelValue","onUpdate:modelValue"])])])]))),128))]),_:1}),ue,e(z,{class:"permission-table text-no-wrap mb-6"},{default:t(()=>[(c(!0),h(R,null,A(o.value,a=>(c(),h(R,{key:a.name},[a.custom?(c(!0),h(R,{key:0},A(a.custom_permissions,(v,j)=>(c(),h("tr",{key:j},[l("td",null,[l("h6",ce,y(f(N)(a.name))+" "+y(f(N)(j)),1)]),l("td",me,[l("div",_e,[e(D,{modelValue:a.custom_permissions[j],"onUpdate:modelValue":Q=>a.custom_permissions[j]=Q},null,8,["modelValue","onUpdate:modelValue"])])])]))),128)):W("",!0)],64))),128))]),_:1}),l("div",fe,[e(I,{onClick:q},{default:t(()=>[U(" Submit ")]),_:1}),e(I,{color:"secondary",variant:"tonal",onClick:B},{default:t(()=>[U(" Cancel ")]),_:1})])]),_:1},512)]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},ve="/build/assets/girl-using-mobile-CKXBkoEQ.png",he={class:"text-body-1"},Ve={class:"d-flex justify-space-between align-center"},be={class:"text-h5"},ge={class:"d-flex align-center"},xe=["onClick"],ye=["src"],Re=l("div",{class:"text-end"},[U(" Add new role,"),l("br"),U(" if it doesn't exist. ")],-1),Ce={__name:"RoleCards",setup(S){const w=_([]),V=M(),o=_(!1),m=_(),r=_(!1);H(async()=>{await p()});const p=async()=>{await V.getAllRoles(),w.value=V.roles},b=(g,d)=>{o.value=!0,m.value=g,m.value.id=d};return(g,d)=>{const k=Y("IconBtn"),x=pe;return c(),h(R,null,[e(T,null,{default:t(()=>[(c(!0),h(R,null,A(f(w),n=>(c(),K(C,{key:n.role,cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(O,null,{default:t(()=>[e(E,{class:"d-flex align-center pb-4"},{default:t(()=>[l("div",he," Total "+y(n.details.user_count)+" users ",1),e(le)]),_:2},1024),e(E,null,{default:t(()=>[l("div",Ve,[l("div",null,[l("h5",be,y(n.role.toUpperCase()),1),l("div",ge,[l("a",{href:"javascript:void(0)",onClick:q=>b(n.details,n.id)}," Edit Role ",8,xe)])]),e(k,null,{default:t(()=>[e(Z,{icon:"tabler-copy",class:"text-high-emphasis"})]),_:1})])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),e(C,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(O,{class:"h-100",ripple:!1},{default:t(()=>[e(T,{"no-gutters":"",class:"h-100"},{default:t(()=>[e(C,{cols:"5",class:"d-flex flex-column justify-end align-center mt-5"},{default:t(()=>[l("img",{width:"85",src:f(ve)},null,8,ye)]),_:1}),e(C,{cols:"7"},{default:t(()=>[e(E,{class:"d-flex flex-column align-end justify-end gap-4"},{default:t(()=>[e(I,{size:"small",onClick:d[0]||(d[0]=n=>r.value=!0)},{default:t(()=>[U(" Add New Role ")]),_:1}),Re]),_:1})]),_:1})]),_:1})]),_:1}),e(x,{"is-dialog-visible":f(r),"onUpdate:isDialogVisible":d[1]||(d[1]=n=>F(r)?r.value=n:null),onRoleSubmitted:p},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(x,{"is-dialog-visible":f(o),"onUpdate:isDialogVisible":d[2]||(d[2]=n=>F(o)?o.value=n:null),"role-permissions":f(m),"onUpdate:rolePermissions":d[3]||(d[3]=n=>F(m)?m.value=n:null),onRoleSubmitted:p},null,8,["is-dialog-visible","role-permissions"])],64)}}},we=l("h4",{class:"text-h4 mb-1"}," Roles List ",-1),ke=l("p",{class:"text-body-1 mb-0"}," A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need ",-1),We={__name:"index",setup(S){return(w,V)=>(c(),K(T,null,{default:t(()=>[e(C,{cols:"12"},{default:t(()=>[we,ke]),_:1}),e(C,{cols:"12"},{default:t(()=>[e(Ce)]),_:1})]),_:1}))}};export{We as default};
