import{_ as q}from"./AddEditPermissionDialog-D1btYLsQ.js";import{_ as E}from"./TablePagination-QV9owBYl.js";import{_ as j}from"./AppTextField-BCvUXX3V.js";import{_ as L}from"./AppSelect-Caxo72fS.js";import{u as M}from"./useApi-BYt2Zzcz.js";import{c as O}from"./createUrl-DzUNE4nR.js";import{V as G,a as H}from"./VRow-xJk10beR.js";import{V as J}from"./VCard-DWOcblIG.js";import{V as K}from"./VCardText-do432SKI.js";import{r as a,ad as Q,a5 as U,a as W,o as V,f as w,e as s,b as o,d as p,n as i,a3 as n,a7 as B,v as C,x as T,c as X,i as Y,F as Z,a1 as $}from"./main-kzKK1XE4.js";import{V as ee}from"./VDivider-BRvIS9W0.js";import{V as te}from"./VDataTableServer-BK7W-VlH.js";import{V as oe}from"./VChip-CUMWd3v2.js";import"./DialogCloseBtn-Bf2EfDQ9.js";import"./VForm-Bgr5kXKW.js";import"./form-CvSQlg_q.js";import"./forwardRefs-C-GTDzx5.js";import"./VAlert-CFyJdmRI.js";import"./VAvatar-BVVy9Zei.js";import"./VImg-C74ZfjM4.js";import"./index-LtM8Y5gz.js";import"./VCheckbox-B7lHpJTv.js";import"./VCheckboxBtn-DO-m-uTG.js";import"./VSelectionControl-BVXMxy4r.js";import"./VInput-D5j0P0kz.js";import"./index-BlZJFp_B.js";import"./VDialog-Baqmc-4e.js";import"./VOverlay-Y9TS9n9w.js";import"./easing-CjukEv2V.js";import"./lazy-Ko0eglkA.js";import"./scopeId-B2QFYqCu.js";import"./dialog-transition-BOcmMYsD.js";import"./VPagination-woXwbF1u.js";import"./VTextField-D9hGg4NW.js";/* empty css                   */import"./VCounter-4ZaRFOI2.js";import"./VField-BVEdELyf.js";import"./VSelect-B-OkTK7V.js";import"./VList-XkRzCeNh.js";import"./ssrBoot-vn9iu_kZ.js";import"./VMenu-BVP4sHy0.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VDataTable-CE0B1Kpe.js";import"./VTable-Bn8Sveon.js";import"./filter-BqVARIH-.js";import"./VSlideGroup-BnF1OZOC.js";const se={class:"d-flex gap-2 align-center"},ie=p("p",{class:"text-body-1 mb-0"}," Show ",-1),ae={class:"d-flex align-center gap-4 flex-wrap"},le={class:"text-high-emphasis text-body-1"},re={class:"d-flex gap-4"},ot={__name:"index",async setup(ne){let d,x;const z=[{title:"Name",key:"name"},{title:"Assigned To",key:"assignedTo",sortable:!1},{title:"Created Date",key:"createdDate",sortable:!1},{title:"Actions",key:"actions",sortable:!1}],u=a(""),l=a(10),r=a(1),b=a(),y=a(),N=m=>{var t,v;b.value=(t=m.sortBy[0])==null?void 0:t.key,y.value=(v=m.sortBy[0])==null?void 0:v.order},c=a(!1),f=a(!1),g=a(""),D={support:{color:"info",text:"Support"},users:{color:"success",text:"Users"},manager:{color:"warning",text:"Manager"},administrator:{color:"primary",text:"Administrator"},"restricted-user":{color:"error",text:"Restricted User"}},{data:P}=([d,x]=Q(()=>M(O("/apps/permissions",{query:{q:u,itemsPerPage:l,page:r,sortBy:b,orderBy:y}}))),d=await d,x(),d),S=U(()=>P.value.permissions),k=U(()=>P.value.totalPermissions),h=m=>{c.value=!0,g.value=m};return(m,t)=>{const v=L,F=j,I=E,R=W("IconBtn"),A=q;return V(),w(G,null,{default:s(()=>[o(H,{cols:"12"},{default:s(()=>[o(J,null,{default:s(()=>[o(K,{class:"d-flex align-center justify-space-between flex-wrap gap-4"},{default:s(()=>[p("div",se,[ie,o(v,{"model-value":i(l),items:[{value:5,title:"5"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"5.5rem"},"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=parseInt(e,10))},null,8,["model-value"])]),p("div",ae,[o(F,{modelValue:i(u),"onUpdate:modelValue":t[1]||(t[1]=e=>n(u)?u.value=e:null),placeholder:"Search Permission",style:{"inline-size":"15.625rem"}},null,8,["modelValue"]),o(B,{density:"default","prepend-icon":"tabler-plus",onClick:t[2]||(t[2]=e=>f.value=!0)},{default:s(()=>[C(" Add Permission ")]),_:1})])]),_:1}),o(ee),o(te,{"items-per-page":i(l),"onUpdate:itemsPerPage":t[4]||(t[4]=e=>n(l)?l.value=e:null),page:i(r),"onUpdate:page":t[5]||(t[5]=e=>n(r)?r.value=e:null),"items-length":i(k),"items-per-page-options":[{value:5,title:"5"},{value:10,title:"10"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],headers:z,items:i(S),"item-value":"name",class:"text-no-wrap","onUpdate:options":N},{"item.name":s(({item:e})=>[p("div",le,T(e.name),1)]),"item.assignedTo":s(({item:e})=>[p("div",re,[(V(!0),X(Z,null,Y(e.assignedTo,_=>(V(),w(oe,{key:_,label:"",size:"small",color:D[_].color,class:"font-weight-medium"},{default:s(()=>[C(T(D[_].text),1)]),_:2},1032,["color"]))),128))])]),bottom:s(()=>[o(I,{page:i(r),"onUpdate:page":t[3]||(t[3]=e=>n(r)?r.value=e:null),"items-per-page":i(l),"total-items":i(k)},null,8,["page","items-per-page","total-items"])]),"item.actions":s(({item:e})=>[o(B,{icon:"",size:"small",color:"medium-emphasis",variant:"text",onClick:_=>h(e.name)},{default:s(()=>[o($,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),o(R,null,{default:s(()=>[o($,{icon:"tabler-dots-vertical",size:"22"})]),_:1})]),_:1},8,["items-per-page","page","items-length","items-per-page-options","items"])]),_:1}),o(A,{isDialogVisible:i(c),"onUpdate:isDialogVisible":t[6]||(t[6]=e=>n(c)?c.value=e:null),"permission-name":i(g),"onUpdate:permissionName":t[7]||(t[7]=e=>n(g)?g.value=e:null)},null,8,["isDialogVisible","permission-name"]),o(A,{isDialogVisible:i(f),"onUpdate:isDialogVisible":t[8]||(t[8]=e=>n(f)?f.value=e:null)},null,8,["isDialogVisible"])]),_:1})]),_:1})}}};export{ot as default};
