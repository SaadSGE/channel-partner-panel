import{p as oe}from"./formatters-Cw2xOObF.js";import{_ as le}from"./TablePagination-BAuLNU8y.js";import{_ as ae}from"./AppTextField-B6qaM17A.js";import{_ as se}from"./AppSelect-CBj18RKD.js";import{u as re}from"./useApi-zOVy4X5j.js";import{c as ie}from"./createUrl-CQIJK7-m.js";import{$ as ne}from"./api-BuB0jJ0_.js";import{V as O}from"./VCard-Quhh9XGX.js";import{V as F}from"./VCardText-DBYlaQFO.js";import{V as L,a as x}from"./VRow-DPIoBZFC.js";import{V as W}from"./VChip-BGAzZtGp.js";import{V as S}from"./VAvatar-CS2PSZbd.js";import{r as i,ad as ce,a5 as q,a as de,o as f,c as w,b as t,e as o,F as G,i as ue,d as r,x as m,f as P,v,n as s,z as $,a1 as k,y as pe,a3 as d,a7 as H,s as me}from"./main-1mV8A3Ok.js";import{V as C}from"./VDivider-BynfZOFp.js";import{V as fe}from"./VSpacer-DdVb5-0q.js";import{V as ve}from"./VDataTableServer-lVUzVSPk.js";import{V as ge}from"./VSwitch-D8_EovUJ.js";import{V as he}from"./VMenu-C6RKladz.js";import{V as _e,a as A}from"./VList-4bYWa8Xg.js";import"./helpers-DK5QwNv0.js";import"./VPagination-Du7AMigc.js";import"./form-DD45LEPy.js";import"./VTextField-DZMrnS7D.js";/* empty css                   */import"./VCounter-BqhfE6c3.js";import"./index-Dr4Jpfvu.js";import"./index-D5HNSvtj.js";import"./VField-DrOa7Jrs.js";import"./easing-CjukEv2V.js";import"./VInput-Cc3qPpf8.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-CTcRpsXh.js";import"./dialog-transition-C3AmnP1-.js";import"./VOverlay-Dw-bxEan.js";import"./lazy-B94C784v.js";import"./scopeId-B6VPZtEP.js";import"./VCheckboxBtn-BuqUvF2m.js";import"./VSelectionControl-gOd1ayQx.js";import"./index-B3bPRkoL.js";import"./VImg-B0OvyP-a.js";/* empty css              */import"./VSlideGroup-D7xdXnSf.js";import"./VDataTable-CWF9oBIS.js";import"./VTable-CyIy3e88.js";import"./filter-CA-4VRNq.js";import"./ssrBoot-BSr0_Qc6.js";const ye={class:"d-flex flex-column gap-y-1"},be={class:"text-body-1 text-capitalize"},Ve={class:"text-h4"},xe={class:"d-flex align-center gap-x-2"},ke={class:"text-no-wrap"},Se={class:"d-flex flex-wrap gap-4 ma-6"},we={class:"d-flex align-center"},Pe={class:"d-flex gap-4 flex-wrap align-center"},$e={class:"d-flex align-center gap-x-4"},Ce={class:"d-flex flex-column"},Ae={class:"text-body-1 font-weight-medium text-high-emphasis"},De={class:"text-body-2"},Ue={class:"text-body-1 text-high-emphasis"},wt={__name:"index",async setup(Be){let g,D;const h=i([{title:"In-Store Sales",value:"$5,345",icon:"tabler-smart-home",desc:"5k orders",change:5.7},{title:"Website Sales",value:"$674,347",icon:"tabler-device-laptop",desc:"21k orders",change:12.4},{title:"Discount",value:"$14,235",icon:"tabler-gift",desc:"6k orders"},{title:"Affiliate",value:"$8,345",icon:"tabler-wallet",desc:"150 orders",change:-3.5}]),Q=[{title:"Product",key:"product"},{title:"Category",key:"category"},{title:"Stock",key:"stock",sortable:!1},{title:"SKU",key:"sku"},{title:"Price",key:"price"},{title:"QTY",key:"qty"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],_=i(),y=i(),b=i(),V=i(""),R=i([{title:"Scheduled",value:"Scheduled"},{title:"Publish",value:"Published"},{title:"Inactive",value:"Inactive"}]),j=i([{title:"Accessories",value:"Accessories"},{title:"Home Decor",value:"Home Decor"},{title:"Electronics",value:"Electronics"},{title:"Shoes",value:"Shoes"},{title:"Office",value:"Office"},{title:"Games",value:"Games"}]),K=i([{title:"In Stock",value:!0},{title:"Out of Stock",value:!1}]),c=i(10),u=i(1),U=i(),B=i(),Y=l=>{var a,p;U.value=(a=l.sortBy[0])==null?void 0:a.key,B.value=(p=l.sortBy[0])==null?void 0:p.order},z=l=>{if(l==="Accessories")return{color:"error",icon:"tabler-device-watch"};if(l==="Home Decor")return{color:"info",icon:"tabler-home"};if(l==="Electronics")return{color:"primary",icon:"tabler-device-imac"};if(l==="Shoes")return{color:"success",icon:"tabler-shoe"};if(l==="Office")return{color:"warning",icon:"tabler-briefcase"};if(l==="Games")return{color:"primary",icon:"tabler-device-gamepad-2"}},J=l=>{if(l==="Scheduled")return{text:"Scheduled",color:"warning"};if(l==="Published")return{text:"Publish",color:"success"};if(l==="Inactive")return{text:"Inactive",color:"error"}},{data:I,execute:X}=([g,D]=ce(()=>re(ie("/apps/ecommerce/products",{query:{q:V,stock:b,category:y,status:_,page:u,itemsPerPage:c,sortBy:U,orderBy:B}}))),g=await g,D(),g),Z=q(()=>I.value.products),E=q(()=>I.value.total),M=async l=>{await ne(`apps/ecommerce/products/${l}`,{method:"DELETE"}),X()};return(l,a)=>{const p=se,ee=ae,T=de("IconBtn"),te=le;return f(),w("div",null,[t(O,{class:"mb-6"},{default:o(()=>[t(F,{class:"px-3"},{default:o(()=>[t(L,null,{default:o(()=>[(f(!0),w(G,null,ue(s(h),(e,n)=>(f(),w(G,{key:n},[t(x,{cols:"12",sm:"6",md:"3",class:"px-6"},{default:o(()=>[r("div",{class:pe(["d-flex justify-space-between",l.$vuetify.display.xs?n!==s(h).length-1?"border-b pb-4":"":l.$vuetify.display.sm&&n<s(h).length/2?"border-b pb-4":""])},[r("div",ye,[r("div",be,m(e.title),1),r("h4",Ve,m(e.value),1),r("div",xe,[r("div",ke,m(e.desc),1),e.change?(f(),P(W,{key:0,label:"",color:e.change>0?"success":"error",size:"small"},{default:o(()=>[v(m(("prefixWithPlus"in l?l.prefixWithPlus:s(oe))(e.change))+"% ",1)]),_:2},1032,["color"])):$("",!0)])]),t(S,{variant:"tonal",rounded:"",size:"44"},{default:o(()=>[t(k,{icon:e.icon,size:"28",class:"text-high-emphasis"},null,8,["icon"])]),_:2},1024)],2)]),_:2},1024),(l.$vuetify.display.mdAndUp?n!==s(h).length-1:l.$vuetify.display.smAndUp&&n%2===0)?(f(),P(C,{key:0,vertical:"",inset:"",length:"92"})):$("",!0)],64))),128))]),_:1})]),_:1})]),_:1}),t(O,{title:"Filters",class:"mb-6"},{default:o(()=>[t(F,null,{default:o(()=>[t(L,null,{default:o(()=>[t(x,{cols:"12",sm:"4"},{default:o(()=>[t(p,{modelValue:s(_),"onUpdate:modelValue":a[0]||(a[0]=e=>d(_)?_.value=e:null),placeholder:"Status",items:s(R),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","items"])]),_:1}),t(x,{cols:"12",sm:"4"},{default:o(()=>[t(p,{modelValue:s(y),"onUpdate:modelValue":a[1]||(a[1]=e=>d(y)?y.value=e:null),placeholder:"Category",items:s(j),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","items"])]),_:1}),t(x,{cols:"12",sm:"4"},{default:o(()=>[t(p,{modelValue:s(b),"onUpdate:modelValue":a[2]||(a[2]=e=>d(b)?b.value=e:null),placeholder:"Stock",items:s(K),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),t(C),r("div",Se,[r("div",we,[t(ee,{modelValue:s(V),"onUpdate:modelValue":a[3]||(a[3]=e=>d(V)?V.value=e:null),placeholder:"Search Product",style:{"inline-size":"200px"},class:"me-3"},null,8,["modelValue"])]),t(fe),r("div",Pe,[t(p,{modelValue:s(c),"onUpdate:modelValue":a[4]||(a[4]=e=>d(c)?c.value=e:null),items:[5,10,20,25,50]},null,8,["modelValue"]),t(H,{variant:"tonal",color:"secondary","prepend-icon":"tabler-upload"},{default:o(()=>[v(" Export ")]),_:1}),t(H,{color:"primary","prepend-icon":"tabler-plus",onClick:a[5]||(a[5]=e=>l.$router.push("/apps/ecommerce/product/add"))},{default:o(()=>[v(" Add Product ")]),_:1})])]),t(C,{class:"mt-4"}),t(ve,{"items-per-page":s(c),"onUpdate:itemsPerPage":a[7]||(a[7]=e=>d(c)?c.value=e:null),page:s(u),"onUpdate:page":a[8]||(a[8]=e=>d(u)?u.value=e:null),headers:Q,"show-select":"",items:s(Z),"items-length":s(E),class:"text-no-wrap","onUpdate:options":Y},{"item.product":o(({item:e})=>[r("div",$e,[e.image?(f(),P(S,{key:0,size:"38",variant:"tonal",rounded:"",image:e.image},null,8,["image"])):$("",!0),r("div",Ce,[r("span",Ae,m(e.productName),1),r("span",De,m(e.productBrand),1)])])]),"item.category":o(({item:e})=>{var n;return[t(S,{size:"30",variant:"tonal",color:(n=z(e.category))==null?void 0:n.color,class:"me-4"},{default:o(()=>{var N;return[t(k,{icon:(N=z(e.category))==null?void 0:N.icon,size:"18"},null,8,["icon"])]}),_:2},1032,["color"]),r("span",Ue,m(e.category),1)]}),"item.stock":o(({item:e})=>[t(ge,{"model-value":e.stock},null,8,["model-value"])]),"item.status":o(({item:e})=>[t(W,me(J(e.status),{density:"default",label:"",size:"small"}),null,16)]),"item.actions":o(({item:e})=>[t(T,null,{default:o(()=>[t(k,{icon:"tabler-edit"})]),_:1}),t(T,null,{default:o(()=>[t(k,{icon:"tabler-dots-vertical"}),t(he,{activator:"parent"},{default:o(()=>[t(_e,null,{default:o(()=>[t(A,{value:"download","prepend-icon":"tabler-download"},{default:o(()=>[v(" Download ")]),_:1}),t(A,{value:"delete","prepend-icon":"tabler-trash",onClick:n=>M(e.id)},{default:o(()=>[v(" Delete ")]),_:2},1032,["onClick"]),t(A,{value:"duplicate","prepend-icon":"tabler-copy"},{default:o(()=>[v(" Duplicate ")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:o(()=>[t(te,{page:s(u),"onUpdate:page":a[6]||(a[6]=e=>d(u)?u.value=e:null),"items-per-page":s(c),"total-items":s(E)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})])}}};export{wt as default};