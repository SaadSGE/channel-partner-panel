import{a as D}from"./formatters-DZJovT4t.js";import{_ as $}from"./TablePagination-3JCLk4xQ.js";import{_ as P}from"./AppSelect-DtQLuCd_.js";import{_ as N}from"./AppTextField-FNCD987S.js";import{_ as O}from"./ECommerceAddCustomerDrawer-BWThXK5J.js";import{u as z}from"./useApi-CHT_LUKA.js";import{c as R}from"./createUrl-DLwNCLu9.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as E}from"./VCard-BJp96eTV.js";import{V as F}from"./VCardText-BrEuz_jZ.js";import{r as n,ad as L,a5 as w,a as j,o as x,c as C,b as o,e as r,n as a,a3 as p,d as s,a7 as b,v,f as Q,x as l}from"./main-Bq8deQCX.js";import{V as G}from"./VDivider-c212GQ1F.js";import{V as H}from"./VDataTableServer-icrReC_t.js";import{V as J}from"./VAvatar-DJAkgXLu.js";import{V as K}from"./VImg-CCyGr-Sd.js";import"./helpers-DK5QwNv0.js";import"./VPagination-C10XkiYt.js";import"./form-BxL6QJTk.js";import"./VSelect-CAeDrijQ.js";import"./VTextField-C04YWSgW.js";/* empty css                   */import"./VCounter-DEwuRr79.js";import"./index-CW8R-nlC.js";import"./index-CjfOI940.js";import"./VField-DEuo-wJT.js";import"./easing-CjukEv2V.js";import"./VInput-DAjVSw52.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-Dvf4ggmo.js";import"./ssrBoot-CDYbaJai.js";import"./dialog-transition-DzwEt7fH.js";import"./VMenu-BqPvUGXu.js";import"./VOverlay-BTcTkavH.js";import"./lazy-BTUcCFF4.js";import"./scopeId-BUtXmUdf.js";import"./VCheckboxBtn-DTBqEPH6.js";import"./VSelectionControl-CoB5g4dr.js";import"./VChip-DBWGAsrD.js";import"./VSlideGroup-SZRIlWpK.js";import"./validators-DOkm11CL.js";import"./AppDrawerHeaderSection-DezrnMr9.js";import"./VSpacer-CzfxDigB.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-DBCgvJ9N.js";import"./VForm-BkNHcqLX.js";import"./VRow-D_Z_DnuS.js";import"./VSwitch-BN4Yvthj.js";import"./VNavigationDrawer-B6LZOCGU.js";import"./index-B3bPRkoL.js";import"./VDataTable-BX7BMFr2.js";import"./VTable-4g02zjPA.js";import"./filter-C3Mblgdv.js";const M={class:"d-flex justify-space-between flex-wrap gap-y-4"},W={class:"d-flex flex-row gap-4 align-center flex-wrap"},X={class:"d-flex align-center gap-x-3"},Y={key:1},Z={class:"d-flex flex-column"},tt={class:"text-body-2"},et={class:"text-body-1 text-high-emphasis"},ot={class:"d-flex gap-x-2"},rt=["src"],at={class:"text-body-1"},st={class:"text-h6"},it={__name:"index",async setup(mt){let c,g;const _=n(""),d=n(!1),i=n(10),m=n(1),y=n(),V=n(),B=[{title:"Customer",key:"customer"},{title:"Customer Id",key:"customerId"},{title:"Country",key:"country"},{title:"Orders",key:"orders"},{title:"Total Spent",key:"totalSpent"}],T=u=>{var e,f;y.value=(e=u.sortBy[0])==null?void 0:e.key,V.value=(f=u.sortBy[0])==null?void 0:f.order},{data:h}=([c,g]=L(()=>z(R("/apps/ecommerce/customers",{query:{q:_,itemsPerPage:i,page:m,sortBy:y,orderBy:V}}))),c=await c,g(),c),S=w(()=>h.value.customers),k=w(()=>h.value.total);return(u,e)=>{const f=N,U=P,A=j("RouterLink"),I=$;return x(),C("div",null,[o(E,null,{default:r(()=>[o(F,null,{default:r(()=>[s("div",M,[o(f,{modelValue:a(_),"onUpdate:modelValue":e[0]||(e[0]=t=>p(_)?_.value=t:null),style:{"max-inline-size":"280px","min-inline-size":"280px"},placeholder:"Search Name"},null,8,["modelValue"]),s("div",W,[o(U,{modelValue:a(i),"onUpdate:modelValue":e[1]||(e[1]=t=>p(i)?i.value=t:null),items:[5,10,20,50,100]},null,8,["modelValue"]),o(b,{"prepend-icon":"tabler-upload",variant:"tonal",color:"secondary"},{default:r(()=>[v(" Export ")]),_:1}),o(b,{"prepend-icon":"tabler-plus",onClick:e[2]||(e[2]=t=>d.value=!a(d))},{default:r(()=>[v(" Add Customer ")]),_:1})])])]),_:1}),o(G),o(H,{"items-per-page":a(i),"onUpdate:itemsPerPage":e[4]||(e[4]=t=>p(i)?i.value=t:null),page:a(m),"onUpdate:page":e[5]||(e[5]=t=>p(m)?m.value=t:null),items:a(S),"item-value":"customer",headers:B,"items-length":a(k),"show-select":"",class:"text-no-wrap","onUpdate:options":T},{"item.customer":r(({item:t})=>[s("div",X,[o(J,{size:"34",variant:t.avatar?void 0:"tonal"},{default:r(()=>[t.avatar?(x(),Q(K,{key:0,src:t.avatar},null,8,["src"])):(x(),C("span",Y,l(("avatarText"in u?u.avatarText:a(D))(t.customer)),1))]),_:2},1032,["variant"]),s("div",Z,[o(A,{to:{name:"apps-ecommerce-customer-details-id",params:{id:t.customerId}},class:"text-link font-weight-medium d-inline-block",style:{"line-height":"1.375rem"}},{default:r(()=>[v(l(t.customer),1)]),_:2},1032,["to"]),s("div",tt,l(t.email),1)])])]),"item.customerId":r(({item:t})=>[s("div",et," #"+l(t.customerId),1)]),"item.orders":r(({item:t})=>[v(l(t.order),1)]),"item.country":r(({item:t})=>[s("div",ot,[s("img",{src:t.countryFlag,height:"22",width:"22"},null,8,rt),s("span",at,l(t.country),1)])]),"item.totalSpent":r(({item:t})=>[s("h6",st," $"+l(t.totalSpent),1)]),bottom:r(()=>[o(I,{page:a(m),"onUpdate:page":e[3]||(e[3]=t=>p(m)?m.value=t:null),"items-per-page":a(i),"total-items":a(k)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),o(O,{"is-drawer-open":a(d),"onUpdate:isDrawerOpen":e[6]||(e[6]=t=>p(d)?d.value=t:null)},null,8,["is-drawer-open"])])}}},ie=q(it,[["__scopeId","data-v-856a5915"]]);export{ie as default};