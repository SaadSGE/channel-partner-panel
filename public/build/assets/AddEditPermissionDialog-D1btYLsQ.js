import{_ as g}from"./AppTextField-BCvUXX3V.js";import{_ as x}from"./DialogCloseBtn-Bf2EfDQ9.js";import{V as b}from"./VCard-DWOcblIG.js";import{V as h}from"./VCardText-do432SKI.js";import{V as y}from"./VForm-Bgr5kXKW.js";import{V as N}from"./VAlert-CFyJdmRI.js";import{r as v,w as D,o as w,f as B,e as t,b as e,d as o,x as r,v as m,n as C,a3 as k,a7 as A}from"./main-kzKK1XE4.js";import{V as E}from"./VCheckbox-B7lHpJTv.js";import{V as P}from"./VDialog-Baqmc-4e.js";const S={class:"text-h4 text-center mb-2"},q={class:"text-body-1 text-center mb-6"},T={class:"d-flex gap-4 mb-6 flex-wrap flex-column flex-sm-row"},I={__name:"AddEditPermissionDialog",props:{isDialogVisible:{type:Boolean,required:!0},permissionName:{type:String,required:!1,default:""}},emits:["update:isDialogVisible","update:permissionName"],setup(d,{emit:p}){const s=d,i=p,a=v(""),l=()=>{i("update:isDialogVisible",!1),a.value=""},u=()=>{i("update:isDialogVisible",!1),i("update:permissionName",a.value)};return D(s,()=>{a.value=s.permissionName}),(c,n)=>{const f=x,_=g;return w(),B(P,{width:c.$vuetify.display.smAndDown?"auto":600,"model-value":s.isDialogVisible,"onUpdate:modelValue":l},{default:t(()=>[e(f,{onClick:l}),e(b,{class:"pa-2 pa-sm-10"},{default:t(()=>[e(h,null,{default:t(()=>[o("h4",S,r(s.permissionName?"Edit":"Add")+" Permission ",1),o("p",q,r(s.permissionName?"Edit":"Add")+" permission as per your requirements. ",1),e(y,null,{default:t(()=>[e(N,{type:"warning",title:"Warning!",variant:"tonal",class:"mb-6"},{text:t(()=>[m(" By "+r(s.permissionName?"editing":"adding")+" the permission name, you might break the system permissions functionality. ",1)]),_:1}),o("div",T,[e(_,{modelValue:C(a),"onUpdate:modelValue":n[0]||(n[0]=V=>k(a)?a.value=V:null),placeholder:"Enter Permission Name"},null,8,["modelValue"]),e(A,{onClick:u},{default:t(()=>[m(" Update ")]),_:1})]),e(E,{label:"Set as core permission"})]),_:1})]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}};export{I as _};
