import{a as X}from"./formatters-Nbll4nBv.js";import{_ as Y}from"./TablePagination-DCou8Vyr.js";import{_ as Z}from"./AppSelect-60N9cfxq.js";import{_ as ee}from"./AppTextField-B3ifRZFg.js";import{m as te}from"./master-dark-CntEUc-b.js";import{m as ae}from"./mastercard-uJg4wwnP.js";import{p as oe,a as re}from"./paypal-light-Bw_A0ie5.js";import{u as B}from"./useGenerateImageVariant-B0rbG1Jl.js";import{u as se}from"./useApi-DC6sN3Nn.js";import{c as le}from"./createUrl-DWYFDdT_.js";import{$ as ie}from"./api-CbZJzeec.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as z}from"./VCard-B7k9GI3s.js";import{V as T}from"./VCardText-BmGyakr4.js";import{V as me,a as de}from"./VRow-Bzb-aqP7.js";import{V as U}from"./VAvatar-DQfbjzTA.js";import{r as p,ad as pe,a5 as A,a as L,o as c,c as x,b as t,e as a,F as O,i as ce,d as s,x as n,a1 as h,y as S,n as r,f as I,z as ue,a3 as u,a7 as fe,v as f,s as _e}from"./main-CGWwRiT_.js";import{V as R}from"./VDivider-BBNe6FC2.js";import{V as ve}from"./VDataTableServer-CfcWua8K.js";import{V as ye}from"./VImg-Djij_NeG.js";import{V as ge}from"./VChip-BqeweNy2.js";import{V as xe}from"./VMenu-BL4z1N2z.js";import{V as he,a as E}from"./VList-D-gCIxkV.js";import"./helpers--SRe6l6M.js";import"./VPagination-DeWoPZ7v.js";import"./form-DCP4nY8j.js";import"./VSelect-CeAw6mYM.js";import"./VTextField-C4nfnc5x.js";/* empty css                   */import"./VCounter-fGbJU7P4.js";import"./index-BOYzkDlu.js";import"./index-DQUQ96P0.js";import"./VField-Ccw4JNiL.js";import"./easing-CjukEv2V.js";import"./VInput-b5mEzrmC.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CXbOcQ9P.js";import"./VOverlay-DAfdTtIn.js";import"./lazy-CTqaGN_c.js";import"./scopeId-6IEgYeE5.js";import"./VCheckboxBtn-BaqJlnsa.js";import"./VSelectionControl-xPyoBWpO.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VDataTable-DYEWnZdy.js";import"./VTable-BFrx29Pg.js";import"./filter-zA-OqLQg.js";import"./VSlideGroup-De2DvjAX.js";import"./ssrBoot-BHzMJUWh.js";const Ve={class:"d-flex flex-column"},be={class:"text-h4"},ke={class:"text-body-1"},we={class:"d-flex justify-sm-space-between justify-start flex-wrap gap-4"},De={class:"d-flex gap-x-4 align-center"},Ce={class:"d-flex align-center gap-x-3"},Pe={key:1,class:"font-weight-medium"},$e={class:"d-flex flex-column"},Be={class:"text-body-1 font-weight-medium"},ze={class:"text-body-2"},Te={style:{"line-height":"22px"}},Ue={class:"d-flex align-center"},Ae=["src"],Le={class:"text-body-1"},Oe={__name:"index",async setup(Se){let _,V;const v=p([{title:"Pending Payment",value:56,icon:"tabler-calendar-stats"},{title:"Completed",value:12689,icon:"tabler-checks"},{title:"Refunded",value:124,icon:"tabler-wallet"},{title:"Failed",value:32,icon:"tabler-alert-octagon"}]),F=B(ae,te),N=B(re,oe),y=p(""),m=p(10),d=p(1),b=p(),k=p(),j=[{title:"Order",key:"order"},{title:"Date",key:"date"},{title:"Customers",key:"customers"},{title:"Payment",key:"payment",sortable:!1},{title:"Status",key:"status"},{title:"Method",key:"method",sortable:!1},{title:"Action",key:"actions",sortable:!1}],q=o=>{var l,g;b.value=(l=o.sortBy[0])==null?void 0:l.key,k.value=(g=o.sortBy[0])==null?void 0:g.order},w=o=>{if(o===1)return{text:"Paid",color:"success"};if(o===2)return{text:"Pending",color:"warning"};if(o===3)return{text:"Cancelled",color:"secondary"};if(o===4)return{text:"Failed",color:"error"}},M=o=>{if(o==="Delivered")return{text:"Delivered",color:"success"};if(o==="Out for Delivery")return{text:"Out for Delivery",color:"primary"};if(o==="Ready to Pickup")return{text:"Ready to Pickup",color:"info"};if(o==="Dispatched")return{text:"Dispatched",color:"warning"}},{data:D,execute:G}=([_,V]=pe(()=>se(le("/apps/ecommerce/orders",{query:{q:y,page:d,itemsPerPage:m,sortBy:b,orderBy:k}}))),_=await _,V(),_),Q=A(()=>D.value.orders),C=A(()=>D.value.total),H=async o=>{await ie(`/apps/ecommerce/orders/${o}`,{method:"DELETE"}),G()};return(o,l)=>{const g=ee,J=Z,P=L("RouterLink"),K=L("IconBtn"),W=Y;return c(),x("div",null,[t(z,{class:"mb-6"},{default:a(()=>[t(T,null,{default:a(()=>[t(me,null,{default:a(()=>[(c(!0),x(O,null,ce(r(v),(e,i)=>(c(),x(O,{key:i},[t(de,{cols:"12",sm:"6",md:"3",class:"px-6"},{default:a(()=>[s("div",{class:S(["d-flex justify-space-between",o.$vuetify.display.xs?i!==r(v).length-1?"border-b pb-4":"":o.$vuetify.display.sm&&i<r(v).length/2?"border-b pb-4":""])},[s("div",Ve,[s("h4",be,n(e.value),1),s("div",ke,n(e.title),1)]),t(U,{variant:"tonal",rounded:"",size:"42"},{default:a(()=>[t(h,{icon:e.icon,size:"26",class:"text-high-emphasis"},null,8,["icon"])]),_:2},1024)],2)]),_:2},1024),(o.$vuetify.display.mdAndUp?i!==r(v).length-1:o.$vuetify.display.smAndUp&&i%2===0)?(c(),I(R,{key:0,vertical:"",inset:"",length:"60"})):ue("",!0)],64))),128))]),_:1})]),_:1})]),_:1}),t(z,null,{default:a(()=>[t(T,null,{default:a(()=>[s("div",we,[t(g,{modelValue:r(y),"onUpdate:modelValue":l[0]||(l[0]=e=>u(y)?y.value=e:null),placeholder:"Search Order",style:{"max-inline-size":"200px","min-inline-size":"200px"}},null,8,["modelValue"]),s("div",De,[t(J,{modelValue:r(m),"onUpdate:modelValue":l[1]||(l[1]=e=>u(m)?m.value=e:null),style:{"min-inline-size":"6.25rem"},items:[5,10,20,50,100]},null,8,["modelValue"]),t(fe,{variant:"tonal",color:"secondary","prepend-icon":"tabler-upload",text:"Export"})])])]),_:1}),t(R),t(ve,{"items-per-page":r(m),"onUpdate:itemsPerPage":l[3]||(l[3]=e=>u(m)?m.value=e:null),page:r(d),"onUpdate:page":l[4]||(l[4]=e=>u(d)?d.value=e:null),headers:j,items:r(Q),"item-value":"order","items-length":r(C),"show-select":"",class:"text-no-wrap","onUpdate:options":q},{"item.order":a(({item:e})=>[t(P,{to:{name:"apps-ecommerce-order-details-id",params:{id:e.order}}},{default:a(()=>[f(" #"+n(e.order),1)]),_:2},1032,["to"])]),"item.date":a(({item:e})=>[f(n(new Date(e.date).toDateString()),1)]),"item.customers":a(({item:e})=>[s("div",Ce,[t(U,{size:"34",color:e.avatar.length?"":"primary",variant:e.avatar.length?void 0:"tonal"},{default:a(()=>[e.avatar?(c(),I(ye,{key:0,src:e.avatar},null,8,["src"])):(c(),x("span",Pe,n(("avatarText"in o?o.avatarText:r(X))(e.customer)),1))]),_:2},1032,["color","variant"]),s("div",$e,[s("div",Be,[t(P,{to:{name:"pages-user-profile-tab",params:{tab:"profile"}},class:"text-link"},{default:a(()=>[f(n(e.customer),1)]),_:2},1024)]),s("div",ze,n(e.email),1)])])]),"item.payment":a(({item:e})=>{var i,$;return[s("div",{class:S([`text-${(i=w(e.payment))==null?void 0:i.color}`,"font-weight-medium d-flex align-center gap-x-2"])},[t(h,{icon:"tabler-circle-filled",size:"10"}),s("div",Te,n(($=w(e.payment))==null?void 0:$.text),1)],2)]}),"item.status":a(({item:e})=>[t(ge,_e(M(e.status),{label:"",size:"small"}),null,16)]),"item.method":a(({item:e})=>[s("div",Ue,[s("img",{src:e.method==="mastercard"?r(F):r(N),height:"18"},null,8,Ae),s("div",Le," ..."+n(e.method==="mastercard"?e.methodNumber:"@gmail.com"),1)])]),"item.actions":a(({item:e})=>[t(K,null,{default:a(()=>[t(h,{icon:"tabler-dots-vertical"}),t(xe,{activator:"parent"},{default:a(()=>[t(he,null,{default:a(()=>[t(E,{value:"view",to:{name:"apps-ecommerce-order-details-id",params:{id:e.order}}},{default:a(()=>[f(" View ")]),_:2},1032,["to"]),t(E,{value:"delete",onClick:i=>H(e.id)},{default:a(()=>[f(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[t(W,{page:r(d),"onUpdate:page":l[2]||(l[2]=e=>u(d)?d.value=e:null),"items-per-page":r(m),"total-items":r(C)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})])}}},Ut=ne(Oe,[["__scopeId","data-v-1fec068d"]]);export{Ut as default};
