import{_ as G}from"./TablePagination-BULv2C6I.js";import{_ as J}from"./AppSelect-CBPjddAQ.js";import{_ as K}from"./AppTextField-CsCrQe1Y.js";import{q as X}from"./vue3-apexcharts-xY5AyYC7.js";import{u as Y}from"./useApi-45JaubqR.js";import{c as Z}from"./createUrl-C3MhRNsS.js";import{$ as ee}from"./api-5K5WZjfU.js";import{V as te,a as g}from"./VRow-CxyAOmZF.js";import{V as w}from"./VCard-BcVqdyFs.js";import{V as x}from"./VCardText-BUwI9t0p.js";import{r as m,ad as se,a5 as P,a as A,o as B,f as oe,e as o,b as s,d as t,a1 as W,v as r,c as ae,i as le,y as ie,x as l,a4 as re,F as ne,n as i,a3 as u,a7 as de}from"./main-BpRJEuHK.js";import{V as y}from"./VChip-LYcLtKDw.js";import{V as O}from"./VDivider-DAIZJBV6.js";import{V as ce}from"./VDataTableServer-13YlLSI5.js";import{V as T}from"./VAvatar-D0wvyc7Y.js";import{V as pe}from"./VRating-CDwSskyV.js";import{V as me}from"./VMenu-Ckp8qSnu.js";import{V as ue,a as D}from"./VList-B5o8sxfn.js";import"./VPagination-B0gLn1as.js";import"./form-Bi2WLKdv.js";import"./VSelect-DCPFHZsW.js";import"./VTextField-DtwlNhTz.js";/* empty css                   */import"./VCounter-B4lWrRPd.js";import"./index-Cfj6udwB.js";import"./index-D3x8Fsa3.js";import"./VField-Bp0x0750.js";import"./easing-CjukEv2V.js";import"./VInput-DIhjK6jf.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DvPyLqRv.js";import"./VOverlay-CCPASCnR.js";import"./lazy-Dh5Sv2fw.js";import"./scopeId-BznV2Det.js";import"./VCheckboxBtn-hm1yEHw9.js";import"./VSelectionControl-BUkLTX6n.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VImg-D8z1cghn.js";import"./VSlideGroup-OyRAVAZl.js";import"./VDataTable-BQHEzN2C.js";import"./VTable-Q5t_aE-E.js";import"./filter-CDJqwCii.js";import"./ssrBoot-Qrqdpyg_.js";const he={class:"d-flex gap-6 flex-column flex-sm-row"},ve={class:"d-flex align-center gap-x-2"},_e=t("h3",{class:"text-h3 text-primary"}," 4.89 ",-1),fe=t("h6",{class:"my-2 text-h6"}," Total 187 reviews ",-1),be=t("div",{class:"mb-2 text-wrap"}," All reviews are from genuine customers ",-1),ge={class:"flex-grow-1"},we={class:"text-no-wrap text-sm"},xe={class:"flex-grow-1",style:{"min-inline-size":"150px"}},ye={class:"text-sm"},Ve={class:"d-flex justify-space-between flex-sm-row flex-column"},ke=t("h5",{class:"text-h5 mb-2"}," Reviews statistics ",-1),Re={class:"mb-8 mb-sm-12"},Ce=t("div",{class:"d-inline-block me-2"}," 12 New Reviews ",-1),ze=t("div",null,[t("div",{class:"text-high-emphasis text-body-1 mb-2"},[t("span",{class:"text-success"},"87%"),r(" Positive Reviews ")]),t("div",{class:"text-body-2"}," Weekly Report ")],-1),Le={class:"d-flex justify-space-between flex-wrap gap-6"},Se={class:"d-flex flex-row gap-4 align-center flex-wrap"},Pe={class:"d-flex gap-x-4 align-center"},Ae={class:"d-flex flex-column"},Be={class:"text-h6"},We={class:"text-body-2 text-wrap clamp-text"},Oe={class:"d-flex align-center gap-x-4"},Te={class:"d-flex flex-column"},De={class:"text-body-2"},Ue={class:"my-4"},$e={class:"text-h6 mb-1"},Ee={class:"text-sm text-wrap mb-0"},Ie="rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))",Bt={__name:"manage-review",async setup(Ne){let h,V;const v=m("All"),_=m(""),n=m(10),d=m(1),k=m(),R=m(),{data:C,execute:U}=([h,V]=se(()=>Y(Z("/apps/ecommerce/reviews",{query:{q:_,status:v,page:d,itemsPerPage:n,sortBy:k,orderBy:R}}))),h=await h,V(),h),$=P(()=>C.value.reviews),z=P(()=>C.value.total),E=p=>{var a,f;k.value=(a=p.sortBy[0])==null?void 0:a.key,R.value=(f=p.sortBy[0])==null?void 0:f.order},I=async p=>{await ee(`/apps/ecommerce/reviews/${p}`,{method:"DELETE"}),U()},L=[{rating:5,value:124},{rating:4,value:40},{rating:3,value:12},{rating:2,value:7},{rating:1,value:2}],N=[{title:"Product",key:"product"},{title:"Reviewer",key:"reviewer"},{title:"Review",key:"review",sortable:!1},{title:"Date",key:"date"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],c={colorsLabel:{success:"#28c76f29"},colors:{success:"#28c76f"}},q=[{data:[20,40,60,80,100,80,60]}],F={chart:{height:160,width:190,type:"bar",toolbar:{show:!1}},legend:{show:!1},grid:{show:!1,padding:{top:-25,bottom:-12}},colors:[c.colorsLabel.success,c.colorsLabel.success,c.colorsLabel.success,c.colorsLabel.success,c.colors.success,c.colorsLabel.success,c.colorsLabel.success],plotOptions:{bar:{barHeight:"75%",columnWidth:"25%",borderRadius:4,distributed:!0}},dataLabels:{enabled:!1},xaxis:{categories:["M","T","W","T","F","S","S"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:Ie,fontSize:"13px"}}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:0,options:{chart:{width:"100%"},plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:1440,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:1400,options:{plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:1200,options:{chart:{height:130,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:992,chart:{height:150,width:190,toolbar:{show:!1}},options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:883,options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:768,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:600,options:{chart:{width:"100%",height:"200",type:"bar"},plotOptions:{bar:{borderRadius:6,columnWidth:"30% "}}}},{breakpoint:420,options:{plotOptions:{chart:{width:"100%",height:"200",type:"bar"},bar:{borderRadius:4,columnWidth:"30%"}}}}]};return(p,a)=>{const f=X,j=K,S=J,M=A("RouterLink"),H=A("IconBtn"),Q=G;return B(),oe(te,{class:"match-height"},{default:o(()=>[s(g,{cols:"12",md:"6"},{default:o(()=>[s(w,null,{default:o(()=>[s(x,null,{default:o(()=>[t("div",he,[t("div",null,[t("div",ve,[_e,s(W,{icon:"tabler-star-filled",color:"primary",size:"32"})]),fe,be,s(y,{color:"primary",label:"",size:"small"},{default:o(()=>[r(" +5 This week ")]),_:1})]),s(O,{vertical:p.$vuetify.display.smAndUp},null,8,["vertical"]),t("div",ge,[(B(),ae(ne,null,le(L,(e,b)=>t("div",{key:b,class:ie(["d-flex align-center gap-x-4",b!==L.length-1?"mb-3":""])},[t("div",we,l(e.rating)+" Star ",1),t("div",xe,[s(re,{color:"primary",height:"8","model-value":e.value/185*100,rounded:""},null,8,["model-value"])]),t("div",ye,l(e.value),1)],2)),64))])])]),_:1})]),_:1})]),_:1}),s(g,{cols:"12",md:"6"},{default:o(()=>[s(w,null,{default:o(()=>[s(x,null,{default:o(()=>[t("div",Ve,[t("div",null,[ke,t("div",Re,[Ce,s(y,{color:"success",size:"small",label:""},{default:o(()=>[r(" +8.4% ")]),_:1})]),ze]),t("div",null,[s(f,{id:"shipment-statistics",type:"bar",height:"152",options:F,series:q})])])]),_:1})]),_:1})]),_:1}),s(g,{cols:"12"},{default:o(()=>[s(w,null,{default:o(()=>[s(x,null,{default:o(()=>[t("div",Le,[t("div",null,[s(j,{modelValue:i(_),"onUpdate:modelValue":a[0]||(a[0]=e=>u(_)?_.value=e:null),style:{"max-inline-size":"200px","min-inline-size":"200px"},placeholder:"Search Review"},null,8,["modelValue"])]),t("div",Se,[s(S,{modelValue:i(n),"onUpdate:modelValue":a[1]||(a[1]=e=>u(n)?n.value=e:null),items:[10,25,50,100],style:{"inline-size":"6.25rem"}},null,8,["modelValue"]),s(S,{modelValue:i(v),"onUpdate:modelValue":a[2]||(a[2]=e=>u(v)?v.value=e:null),style:{"max-inline-size":"7.5rem","min-inline-size":"7.5rem"},items:[{title:"All",value:"All"},{title:"Published",value:"Published"},{title:"Pending",value:"Pending"}]},null,8,["modelValue"]),s(de,{"prepend-icon":"tabler-upload",variant:"tonal",color:"default"},{default:o(()=>[r(" Export ")]),_:1})])])]),_:1}),s(O),s(ce,{"items-per-page":i(n),"onUpdate:itemsPerPage":a[4]||(a[4]=e=>u(n)?n.value=e:null),page:i(d),"onUpdate:page":a[5]||(a[5]=e=>u(d)?d.value=e:null),headers:N,items:i($),"show-select":"","items-length":i(z),class:"text-no-wrap","onUpdate:options":E},{"item.product":o(({item:e})=>[t("div",Pe,[s(T,{image:e.productImage,size:38,variant:"tonal",rounded:""},null,8,["image"]),t("div",Ae,[t("h6",Be,l(e.product),1),t("div",We,l(e.companyName),1)])])]),"item.reviewer":o(({item:e})=>[t("div",Oe,[s(T,{image:e.avatar,size:"34"},null,8,["image"]),t("div",Te,[s(M,{to:{name:"apps-ecommerce-customer-details-id",params:{id:478426}},class:"font-weight-medium",style:{"line-height":"1.375rem"}},{default:o(()=>[r(l(e.reviewer),1)]),_:2},1024),t("div",De,l(e.email),1)])])]),"item.review":o(({item:e})=>[t("div",Ue,[s(pe,{readonly:"","model-value":e.review,size:"24",class:"mb-1"},null,8,["model-value"]),t("h6",$e,l(e.head),1),t("p",Ee,l(e.para),1)])]),"item.date":o(({item:e})=>[r(l(new Date(e.date).toDateString()),1)]),"item.status":o(({item:e})=>[s(y,{color:e.status==="Published"?"success":"warning",label:"",size:"small"},{default:o(()=>[r(l(e.status),1)]),_:2},1032,["color"])]),"item.actions":o(({item:e})=>[s(H,null,{default:o(()=>[s(W,{icon:"tabler-dots-vertical"}),s(me,{activator:"parent"},{default:o(()=>[s(ue,null,{default:o(()=>[s(D,{value:"view",to:{name:"apps-ecommerce-order-details-id",params:{id:e.id}}},{default:o(()=>[r(" View ")]),_:2},1032,["to"]),s(D,{value:"delete",onClick:b=>I(e.id)},{default:o(()=>[r(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:o(()=>[s(Q,{page:i(d),"onUpdate:page":a[3]||(a[3]=e=>u(d)?d.value=e:null),"items-per-page":i(n),"total-items":i(z)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})]),_:1})]),_:1})}}};export{Bt as default};
