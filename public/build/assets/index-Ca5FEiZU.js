import{_ as z}from"./AppTextField-BGLtjjph.js";import{_ as M}from"./DialogCloseBtn-BNJjS9-A.js";import{V as E}from"./VCard-D_9YY7eU.js";import{V as F}from"./VCardText-B_32FgjQ.js";import{V as O}from"./VForm-C6pZhiuU.js";import{V as W}from"./VAlert-B9lCP_6K.js";import{r as m,w as G,o as w,f as h,e as i,b as e,d,v as V,t as P,m as o,a2 as p,a6 as k,ac as H,a4 as T,a as J,c as K,h as Q,F as X,a0 as S}from"./main--Sxm5_s2.js";import{V as Y}from"./VCheckbox-Btuo1xd9.js";import{V as Z}from"./VDialog-CfanG9YN.js";import{_ as ee}from"./TablePagination-CtsC9Qd5.js";import{_ as te}from"./AppSelect-BGvwt7BC.js";import{u as se}from"./useApi-ClxpKLcx.js";import{c as ie}from"./createUrl-CDHbQMxi.js";import{V as oe,a as ae}from"./VRow-iwFKqp57.js";import{V as le}from"./VDivider-Cp-mvYZ4.js";import{V as re}from"./VDataTableServer-CvZcWAXx.js";import{V as ne}from"./VChip-B1-AfmoZ.js";import"./form-ByD6MPa6.js";import"./VTextField-C1pfXiLn.js";/* empty css                   */import"./VCounter-C_khUIuy.js";import"./index-CGqMMtXP.js";import"./VImg-Za-rMnCD.js";import"./VField-B3XaJafD.js";import"./easing-CjukEv2V.js";import"./VInput-CrRB8sjj.js";import"./forwardRefs-C-GTDzx5.js";import"./VAvatar-YOWsFQVe.js";import"./VCheckboxBtn-Cf31ky1q.js";import"./VSelectionControl-RP8APfRy.js";import"./VOverlay-CZU57HtJ.js";import"./lazy-kZ4tXhNN.js";import"./scopeId-BjQrr5BR.js";import"./dialog-transition-DRpkJfSb.js";import"./VPagination-BXh-q8hY.js";import"./VSelect-Bq1c87WX.js";import"./VList-BjxwPgvk.js";import"./ssrBoot-CzFyEH1_.js";import"./VMenu-_uOTsNv8.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VDataTable-Cya3Pxh-.js";import"./VTable-Dxc9O5Y6.js";import"./filter-CuXFwKKm.js";import"./VSlideGroup-DDUY1mOj.js";const me={class:"text-h4 text-center mb-2"},pe={class:"text-body-1 text-center mb-6"},de={class:"d-flex gap-4 mb-6 flex-wrap flex-column flex-sm-row"},ue={__name:"AddEditPermissionDialog",props:{isDialogVisible:{type:Boolean,required:!0},permissionName:{type:String,required:!1,default:""}},emits:["update:isDialogVisible","update:permissionName"],setup(C,{emit:u}){const r=C,g=u,a=m(""),l=()=>{g("update:isDialogVisible",!1),a.value=""},n=()=>{g("update:isDialogVisible",!1),g("update:permissionName",a.value)};return G(r,()=>{a.value=r.permissionName}),(b,_)=>{const A=M,c=z;return w(),h(Z,{width:b.$vuetify.display.smAndDown?"auto":600,"model-value":r.isDialogVisible,"onUpdate:modelValue":l},{default:i(()=>[e(A,{onClick:l}),e(E,{class:"pa-2 pa-sm-10"},{default:i(()=>[e(F,null,{default:i(()=>[d("h4",me,V(r.permissionName?"Edit":"Add")+" Permission ",1),d("p",pe,V(r.permissionName?"Edit":"Add")+" permission as per your requirements. ",1),e(O,null,{default:i(()=>[e(W,{type:"warning",title:"Warning!",variant:"tonal",class:"mb-6"},{text:i(()=>[P(" By "+V(r.permissionName?"editing":"adding")+" the permission name, you might break the system permissions functionality. ",1)]),_:1}),d("div",de,[e(c,{modelValue:o(a),"onUpdate:modelValue":_[0]||(_[0]=f=>p(a)?a.value=f:null),placeholder:"Enter Permission Name"},null,8,["modelValue"]),e(k,{onClick:n},{default:i(()=>[P(" Update ")]),_:1})]),e(Y,{label:"Set as core permission"})]),_:1})]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},ce={class:"d-flex gap-2 align-center"},fe=d("p",{class:"text-body-1 mb-0"}," Show ",-1),ge={class:"d-flex align-center gap-4 flex-wrap"},_e={class:"text-high-emphasis text-body-1"},ve={class:"d-flex gap-4"},mt={__name:"index",async setup(C){let u,r;const g=[{title:"Name",key:"name"},{title:"Assigned To",key:"assignedTo",sortable:!1},{title:"Created Date",key:"createdDate",sortable:!1},{title:"Actions",key:"actions",sortable:!1}],a=m(""),l=m(10),n=m(1),b=m(),_=m(),A=v=>{var s,y;b.value=(s=v.sortBy[0])==null?void 0:s.key,_.value=(y=v.sortBy[0])==null?void 0:y.order},c=m(!1),f=m(!1),x=m(""),N={support:{color:"info",text:"Support"},users:{color:"success",text:"Users"},manager:{color:"warning",text:"Manager"},administrator:{color:"primary",text:"Administrator"},"restricted-user":{color:"error",text:"Restricted User"}},{data:U}=([u,r]=H(()=>se(ie("/apps/permissions",{query:{q:a,itemsPerPage:l,page:n,sortBy:b,orderBy:_}}))),u=await u,r(),u),q=T(()=>U.value.permissions),B=T(()=>U.value.totalPermissions),I=v=>{c.value=!0,x.value=v};return(v,s)=>{const y=te,R=z,j=ee,L=J("IconBtn"),$=ue;return w(),h(oe,null,{default:i(()=>[e(ae,{cols:"12"},{default:i(()=>[e(E,null,{default:i(()=>[e(F,{class:"d-flex align-center justify-space-between flex-wrap gap-4"},{default:i(()=>[d("div",ce,[fe,e(y,{"model-value":o(l),items:[{value:5,title:"5"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"5.5rem"},"onUpdate:modelValue":s[0]||(s[0]=t=>l.value=parseInt(t,10))},null,8,["model-value"])]),d("div",ge,[e(R,{modelValue:o(a),"onUpdate:modelValue":s[1]||(s[1]=t=>p(a)?a.value=t:null),placeholder:"Search Permission",style:{"inline-size":"15.625rem"}},null,8,["modelValue"]),e(k,{density:"default","prepend-icon":"tabler-plus",onClick:s[2]||(s[2]=t=>f.value=!0)},{default:i(()=>[P(" Add Permission ")]),_:1})])]),_:1}),e(le),e(re,{"items-per-page":o(l),"onUpdate:itemsPerPage":s[4]||(s[4]=t=>p(l)?l.value=t:null),page:o(n),"onUpdate:page":s[5]||(s[5]=t=>p(n)?n.value=t:null),"items-length":o(B),"items-per-page-options":[{value:5,title:"5"},{value:10,title:"10"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],headers:g,items:o(q),"item-value":"name",class:"text-no-wrap","onUpdate:options":A},{"item.name":i(({item:t})=>[d("div",_e,V(t.name),1)]),"item.assignedTo":i(({item:t})=>[d("div",ve,[(w(!0),K(X,null,Q(t.assignedTo,D=>(w(),h(ne,{key:D,label:"",size:"small",color:N[D].color,class:"font-weight-medium"},{default:i(()=>[P(V(N[D].text),1)]),_:2},1032,["color"]))),128))])]),bottom:i(()=>[e(j,{page:o(n),"onUpdate:page":s[3]||(s[3]=t=>p(n)?n.value=t:null),"items-per-page":o(l),"total-items":o(B)},null,8,["page","items-per-page","total-items"])]),"item.actions":i(({item:t})=>[e(k,{icon:"",size:"small",color:"medium-emphasis",variant:"text",onClick:D=>I(t.name)},{default:i(()=>[e(S,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(L,null,{default:i(()=>[e(S,{icon:"tabler-dots-vertical",size:"22"})]),_:1})]),_:1},8,["items-per-page","page","items-length","items-per-page-options","items"])]),_:1}),e($,{isDialogVisible:o(c),"onUpdate:isDialogVisible":s[6]||(s[6]=t=>p(c)?c.value=t:null),"permission-name":o(x),"onUpdate:permissionName":s[7]||(s[7]=t=>p(x)?x.value=t:null)},null,8,["isDialogVisible","permission-name"]),e($,{isDialogVisible:o(f),"onUpdate:isDialogVisible":s[8]||(s[8]=t=>p(f)?f.value=t:null)},null,8,["isDialogVisible"])]),_:1})]),_:1})}}};export{mt as default};