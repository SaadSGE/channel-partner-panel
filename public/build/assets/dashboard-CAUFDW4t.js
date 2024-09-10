import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as g,V as F}from"./VRow-Bzb-aqP7.js";import{V as x,a as V,c as Z}from"./VCard-B7k9GI3s.js";import{V as w}from"./VCardText-BmGyakr4.js";import{V as N}from"./VAvatar-DQfbjzTA.js";import{r as C,o as p,f,e as t,c as B,F as D,i as I,n as _,d as o,b as e,J as ee,a1 as O,x as n,R as E,U as Y,v as y,y as te,a3 as z,ad as oe,a5 as M,a as se,a4 as S,a7 as ie}from"./main-CGWwRiT_.js";import{q as G}from"./vue3-apexcharts-fJPD8DpC.js";import{_ as A}from"./MoreBtn-DBLG9Det.js";import{V as ae,a as le,b as re,d as ne}from"./VList-D-gCIxkV.js";import{V as ce,a as de}from"./VTabs-DorzpTXn.js";import{V as pe,a as T}from"./VWindowItem-CvWcfEg4.js";import{V as k,a as m}from"./VTimelineItem-E0je5iv6.js";import{V as R}from"./VDivider-BBNe6FC2.js";import{_ as ue}from"./TablePagination-DCou8Vyr.js";import{u as me}from"./useApi-DC6sN3Nn.js";import{c as _e}from"./createUrl-DWYFDdT_.js";import{V as he}from"./VDataTableServer-CfcWua8K.js";import{V as ve}from"./VChip-BqeweNy2.js";import{V as fe}from"./VTable-BFrx29Pg.js";/* empty css              */import"./VImg-Djij_NeG.js";import"./index-DQUQ96P0.js";import"./VMenu-BL4z1N2z.js";import"./VOverlay-DAfdTtIn.js";import"./easing-CjukEv2V.js";import"./lazy-CTqaGN_c.js";import"./scopeId-6IEgYeE5.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CXbOcQ9P.js";import"./index-BOYzkDlu.js";import"./ssrBoot-BHzMJUWh.js";import"./VSlideGroup-De2DvjAX.js";import"./VPagination-DeWoPZ7v.js";import"./index-B3bPRkoL.js";import"./VDataTable-DYEWnZdy.js";import"./VSelect-CeAw6mYM.js";import"./VTextField-C4nfnc5x.js";/* empty css                   */import"./VCounter-fGbJU7P4.js";import"./VField-Ccw4JNiL.js";import"./form-DCP4nY8j.js";import"./VInput-b5mEzrmC.js";import"./VCheckboxBtn-BaqJlnsa.js";import"./VSelectionControl-xPyoBWpO.js";import"./filter-zA-OqLQg.js";const ge=c=>(E("data-v-b20c9830"),c=c(),Y(),c),be={class:"d-flex align-center gap-x-4 mb-1"},ye={class:"text-h4"},xe={class:"text-body-1 mb-1"},ke={class:"d-flex gap-x-2 align-center"},Ce={class:"text-h6"},Ve=ge(()=>o("div",{class:"text-sm text-disabled"}," than last week ",-1)),we={__name:"LogisticsCardStatistics",setup(c){const i=C([{icon:"tabler-truck",color:"primary",title:"On route vehicles",value:42,change:18.2,isHover:!1},{icon:"tabler-alert-triangle",color:"warning",title:"Vehicles with errors",value:8,change:-8.7,isHover:!1},{icon:"tabler-git-fork",color:"error",title:"Deviated from route",value:27,change:4.3,isHover:!1},{icon:"tabler-clock",color:"info",title:"Late vehicles",value:13,change:-2.5,isHover:!1}]);return(u,d)=>(p(),f(F,null,{default:t(()=>[(p(!0),B(D,null,I(_(i),(s,a)=>(p(),f(g,{key:a,cols:"12",md:"3",sm:"6"},{default:t(()=>[o("div",null,[e(x,{class:"logistics-card-statistics cursor-pointer",style:ee(s.isHover?`border-block-end-color: rgb(var(--v-theme-${s.color}))`:`border-block-end-color: rgba(var(--v-theme-${s.color}),0.38)`),onMouseenter:r=>s.isHover=!0,onMouseleave:r=>s.isHover=!1},{default:t(()=>[e(w,null,{default:t(()=>[o("div",be,[e(N,{variant:"tonal",color:s.color,rounded:""},{default:t(()=>[e(O,{icon:s.icon,size:"28"},null,8,["icon"])]),_:2},1032,["color"]),o("h4",ye,n(s.value),1)]),o("div",xe,n(s.title),1),o("div",ke,[o("h6",Ce,n(s.change>0?"+":"")+" "+n(s.change)+"% ",1),Ve])]),_:2},1024)]),_:2},1032,["style","onMouseenter","onMouseleave"])])]),_:2},1024))),128))]),_:1}))}},$e=W(we,[["__scopeId","data-v-b20c9830"]]),P="rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))",Se="rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity))",ze={__name:"LogisticsDeliveryExpectations",setup(c){const i={donut:{series1:"#28C76F",series2:"#28C76FCC",series3:"#28C76F99",series4:"#28C76F66"}},u=[13,25,22,40],d={labels:["Incorrect address","Weather conditions","Federal Holidays","Damage during transit"],colors:[i.donut.series1,i.donut.series2,i.donut.series3,i.donut.series4],stroke:{width:0},dataLabels:{enabled:!1,formatter(s){return`${Number.parseInt(s)}%`}},legend:{show:!0,position:"bottom",offsetY:10,markers:{width:8,height:8,offsetX:-3},itemMargin:{horizontal:15,vertical:5},fontSize:"13px",fontWeight:400,labels:{colors:P,useSeriesColors:!1}},tooltip:{theme:!1},grid:{padding:{top:15}},plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,value:{fontSize:"24px",color:P,fontWeight:500,offsetY:-20,formatter(s){return`${Number.parseInt(s)}%`}},name:{offsetY:20},total:{show:!0,fontSize:"0.9375rem",fontWeight:400,label:"AVG. Exceptions",color:Se,formatter(){return"30%"}}}}}},responsive:[{breakpoint:420,options:{chart:{height:400}}}]};return(s,a)=>{const r=A,$=G;return p(),f(x,null,{default:t(()=>[e(V,{title:"Delivery exceptions"},{append:t(()=>[e(r)]),_:1}),e(w,null,{default:t(()=>[e($,{type:"donut",height:"400",options:d,series:u})]),_:1})]),_:1})}}},Oe={class:"text-body-1 font-weight-medium"},Ae={__name:"LogisticsDeliveryPerformance",setup(c){const i=[{title:"Packages in transit",value:"10k",change:25.8,icon:"tabler-box",color:"primary"},{title:"Packages out for delivery",value:"5k",change:4.3,icon:"tabler-truck",color:"info"},{title:"Packages delivered",value:"15k",change:-12.5,icon:"tabler-circle-check",color:"success"},{title:"Delivery success rate",value:"95%",change:35.6,icon:"tabler-percentage",color:"warning"},{title:"Average delivery time",value:"2.5 Days",change:-2.15,icon:"tabler-clock",color:"secondary"},{title:"Customer satisfaction",value:"4.5/5",change:5.7,icon:"tabler-users",color:"error"}];return(u,d)=>{const s=A;return p(),f(x,null,{default:t(()=>[e(V,{title:"Delivery performance"},{append:t(()=>[e(s)]),default:t(()=>[e(Z,null,{default:t(()=>[y(" 12% increase in this month ")]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(ae,{class:"card-list"},{default:t(()=>[(p(),B(D,null,I(i,(a,r)=>e(le,{key:r},{prepend:t(()=>[e(N,{color:a.color,variant:"tonal",rounded:"",size:"38",class:"me-1"},{default:t(()=>[e(O,{icon:a.icon,size:"26"},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[o("span",Oe,n(a.value),1)]),default:t(()=>[e(re,{class:"me-2"},{default:t(()=>[y(n(a.title),1)]),_:2},1024),e(ne,null,{default:t(()=>[o("div",{class:te([a.change>0?"text-success":"text-error","d-flex align-center gap-x-1"])},[e(O,{icon:a.change>0?"tabler-chevron-up":"tabler-chevron-down",size:"20"},null,8,["icon"]),o("div",null,n(a.change)+"%",1)],2)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}},Le=W(Ae,[["__scopeId","data-v-0915a579"]]),Re=o("div",{class:"text-body-2 text-uppercase text-success"}," Sender ",-1),Be=o("div",{class:"app-timeline-title"}," Myrtle Ullrich ",-1),De=o("div",{class:"app-timeline-text"}," 101 Boulder, California(CA), 95959 ",-1),Ie=o("div",{class:"text-body-2 text-primary text-uppercase"}," Receiver ",-1),Te=o("div",{class:"app-timeline-title"}," Barry Schowalter ",-1),We=o("div",{class:"app-timeline-text"}," 939 Orange, California(CA), 92118 ",-1),Ne=o("div",{class:"text-body-2 text-uppercase text-success"}," Sender ",-1),He=o("div",{class:"app-timeline-title"}," Veronica Herman ",-1),Je=o("div",{class:"app-timeline-text"}," 162 Windsor, California(CA), 95492 ",-1),Me=o("div",{class:"text-body-2 text-primary text-uppercase"}," Receiver ",-1),Pe=o("div",{class:"app-timeline-title"}," Helen Jacobs ",-1),Ue=o("div",{class:"app-timeline-text"}," 487 Sunset, California(CA), 94043 ",-1),Fe=o("div",{class:"text-body-2 text-uppercase text-success"}," Sender ",-1),Ee=o("div",{class:"app-timeline-title"}," Myrtle Ullrich ",-1),Ye=o("div",{class:"app-timeline-text"}," 101 Boulder, California(CA), 95959 ",-1),Ge=o("div",{class:"text-body-2 text-primary text-uppercase"}," Receiver ",-1),qe=o("div",{class:"app-timeline-title"}," Barry Schowalter ",-1),Xe=o("div",{class:"app-timeline-text"}," 939 Orange, California(CA), 92118 ",-1),je=o("div",{class:"text-body-2 text-uppercase text-success"}," Sender ",-1),Ke=o("div",{class:"app-timeline-title"}," Veronica Herman ",-1),Qe=o("div",{class:"app-timeline-text"}," 162 Windsor, California(CA), 95492 ",-1),Ze=o("div",{class:"text-body-2 text-primary text-uppercase"}," Receiver ",-1),et=o("div",{class:"app-timeline-title"}," Helen Jacobs ",-1),tt=o("div",{class:"app-timeline-text"}," 487 Sunset, California(CA), 94043 ",-1),ot=o("div",{class:"text-body-2 text-uppercase text-success"}," Sender ",-1),st=o("div",{class:"app-timeline-title"}," Myrtle Ullrich ",-1),it=o("div",{class:"app-timeline-text"}," 101 Boulder, California(CA), 95959 ",-1),at=o("div",{class:"text-body-2 text-primary text-uppercase"}," Receiver ",-1),lt=o("div",{class:"app-timeline-title"}," Barry Schowalter ",-1),rt=o("div",{class:"app-timeline-text"}," 939 Orange, California(CA), 92118 ",-1),nt=o("div",{class:"text-body-2 text-uppercase text-success"}," Sender ",-1),ct=o("div",{class:"app-timeline-title"}," Veronica Herman ",-1),dt=o("div",{class:"app-timeline-text"}," 162 Windsor, California(CA), 95492 ",-1),pt=o("div",{class:"text-body-2 text-primary text-uppercase"}," Receiver ",-1),ut=o("div",{class:"app-timeline-title"}," Helen Jacobs ",-1),mt=o("div",{class:"app-timeline-text"}," 487 Sunset, California(CA), 94043 ",-1),_t={__name:"LogisticsOrderByCountries",setup(c){const i=C("New"),u=["New","Preparing","Shipping"];return(d,s)=>{const a=A;return p(),f(x,{class:"country-order-card"},{default:t(()=>[e(V,{title:"Orders by countries",subtitle:"62 deliveries in progress"},{append:t(()=>[e(a)]),_:1}),e(ce,{modelValue:_(i),"onUpdate:modelValue":s[0]||(s[0]=r=>z(i)?i.value=r:null),grow:"",class:"disable-tab-transition"},{default:t(()=>[(p(),B(D,null,I(u,(r,$)=>e(de,{key:$},{default:t(()=>[y(n(r),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(w,null,{default:t(()=>[e(pe,{modelValue:_(i),"onUpdate:modelValue":s[1]||(s[1]=r=>z(i)?i.value=r:null)},{default:t(()=>[e(T,null,{default:t(()=>[o("div",null,[e(k,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1",class:"v-timeline--variant-outlined"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"20",elevation:0},{default:t(()=>[Re,Be,De]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"20",elevation:0},{default:t(()=>[Ie,Te,We]),_:1})]),_:1}),e(R,{class:"my-4",style:{"border-style":"dashed"}}),e(k,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1",class:"v-timeline--variant-outlined"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"20",elevation:0},{default:t(()=>[Ne,He,Je]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"20",elevation:0},{default:t(()=>[Me,Pe,Ue]),_:1})]),_:1})])]),_:1}),e(T,null,{default:t(()=>[o("div",null,[e(k,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1",class:"v-timeline--variant-outlined"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"20",elevation:0},{default:t(()=>[Fe,Ee,Ye]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"20",elevation:0},{default:t(()=>[Ge,qe,Xe]),_:1})]),_:1}),e(R,{class:"my-4",style:{"border-style":"dashed"}}),e(k,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1",class:"v-timeline--variant-outlined"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"20",elevation:0},{default:t(()=>[je,Ke,Qe]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"20",elevation:0},{default:t(()=>[Ze,et,tt]),_:1})]),_:1})])]),_:1}),e(T,null,{default:t(()=>[o("div",null,[e(k,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1",class:"v-timeline--variant-outlined"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"20",elevation:0},{default:t(()=>[ot,st,it]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"20",elevation:0},{default:t(()=>[at,lt,rt]),_:1})]),_:1}),e(R,{class:"my-4",style:{"border-style":"dashed"}}),e(k,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1",class:"v-timeline--variant-outlined"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"20",elevation:0},{default:t(()=>[nt,ct,dt]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"20",elevation:0},{default:t(()=>[pt,ut,mt]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},ht={class:"text-link text-base font-weight-medium d-inline-block"},vt={class:"d-flex align-center gap-x-4",style:{"min-inline-size":"240px"}},ft={class:"w-100"},gt={__name:"LogisticsOverviewTable",async setup(c){let i,u;const d=C(5),s=C(1),a=C(),r=C(),$=h=>{var v,L;a.value=(v=h.sortBy[0])==null?void 0:v.key,r.value=(L=h.sortBy[0])==null?void 0:L.order},{data:H}=([i,u]=oe(()=>me(_e("/apps/logistics/vehicles",{query:{page:s,itemsPerPage:d,sortBy:a,orderBy:r}}))),i=await i,u(),i),q=M(()=>H.value.vehicles),J=M(()=>H.value.totalVehicles),X=[{title:"LOCATION",key:"location"},{title:"STARTING ROUTE",key:"startRoute"},{title:"ENDING ROUTE",key:"endRoute"},{title:"WARNINGS",key:"warnings"},{title:"PROGRESS",key:"progress"}],j=h=>{if(h==="No Warnings")return"success";if(h==="fuel problems")return"primary";if(h==="Temperature Not Optimal")return"warning";if(h==="Ecu Not Responding")return"error";if(h==="Oil Leakage")return"info"};return(h,v)=>{const L=A,K=se("RouterLink"),Q=ue;return p(),f(x,null,{default:t(()=>[e(V,{title:"On Route vehicles"},{append:t(()=>[e(L)]),_:1}),e(R),e(he,{"items-per-page":_(d),"onUpdate:itemsPerPage":v[1]||(v[1]=l=>z(d)?d.value=l:null),page:_(s),"onUpdate:page":v[2]||(v[2]=l=>z(s)?s.value=l:null),"items-per-page-options":[{value:5,title:"5"},{value:10,title:"10"},{value:20,title:"20"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],"items-length":_(J),items:_(q),"item-value":"location",headers:X,"show-select":"",class:"text-no-wrap","onUpdate:options":$},{"item.location":t(({item:l})=>[e(N,{variant:"tonal",color:"secondary",class:"me-4",size:"40"},{default:t(()=>[e(O,{icon:"tabler-car",size:"28"})]),_:1}),e(K,{to:{name:"apps-logistics-fleet"}},{default:t(()=>[o("div",ht," VOL-"+n(l.location),1)]),_:2},1024)]),"item.startRoute":t(({item:l})=>[y(n(l.startCity)+", "+n(l.startCountry),1)]),"item.endRoute":t(({item:l})=>[y(n(l.endCity)+", "+n(l.endCountry),1)]),"item.warnings":t(({item:l})=>[e(ve,{color:j(l.warnings),label:"",size:"small"},{default:t(()=>[y(n(l.warnings),1)]),_:2},1032,["color"])]),"item.progress":t(({item:l})=>[o("div",vt,[o("div",ft,[e(S,{"model-value":l.progress,rounded:"",color:"primary",height:8},null,8,["model-value"])]),o("div",null,n(l.progress)+"% ",1)])]),bottom:t(()=>[e(Q,{page:_(s),"onUpdate:page":v[0]||(v[0]=l=>z(s)?s.value=l:null),"items-per-page":_(d),"total-items":_(J)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items-per-page-options","items-length","items"])]),_:1})}}},bt="rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))",U="rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity))",yt="rgba(var(--v-border-color), var(--v-border-opacity))",xt={__name:"LogisticsShipmentStatistics",setup(c){const i={line:{series1:"#FFB400",series2:"#9055FD",series3:"#7367f029"}},u=[{name:"Shipment",type:"column",data:[38,45,33,38,32,48,45,40,42,37]},{name:"Delivery",type:"line",data:[23,28,23,32,25,42,32,32,26,24]}],d={chart:{type:"line",stacked:!1,parentHeightOffset:0,toolbar:{show:!1},zoom:{enabled:!1}},markers:{size:5,colors:"#fff",strokeColors:i.line.series2,hover:{size:6},borderRadius:4},stroke:{curve:"smooth",width:[0,3],lineCap:"round"},legend:{show:!0,position:"bottom",markers:{width:8,height:8,offsetX:-3},height:40,itemMargin:{horizontal:10,vertical:0},fontSize:"15px",fontFamily:"Open Sans",fontWeight:400,labels:{colors:bt,useSeriesColors:!1},offsetY:10},grid:{strokeDashArray:8,borderColor:yt},colors:[i.line.series1,i.line.series2],fill:{opacity:[1,1]},plotOptions:{bar:{columnWidth:"30%",borderRadius:4,borderRadiusApplication:"end"}},dataLabels:{enabled:!1},xaxis:{tickAmount:10,categories:["1 Jan","2 Jan","3 Jan","4 Jan","5 Jan","6 Jan","7 Jan","8 Jan","9 Jan","10 Jan"],labels:{style:{colors:U,fontSize:"13px",fontWeight:400}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{tickAmount:4,min:0,max:50,labels:{style:{colors:U,fontSize:"13px",fontWeight:400},formatter(s){return`${s}%`}}},responsive:[{breakpoint:1400,options:{chart:{height:320},xaxis:{labels:{style:{fontSize:"10px"}}},legend:{itemMargin:{vertical:0,horizontal:10},fontSize:"13px",offsetY:12}}},{breakpoint:1025,options:{chart:{height:415},plotOptions:{bar:{columnWidth:"50%"}}}},{breakpoint:982,options:{plotOptions:{bar:{columnWidth:"30%"}}}},{breakpoint:480,options:{chart:{height:250},legend:{offsetY:7}}}]};return(s,a)=>{const r=G;return p(),f(x,null,{default:t(()=>[e(V,{title:"Shipment statistics",subtitle:"Total number of deliveries 23.8k"},{append:t(()=>[e(ie,{variant:"tonal","append-icon":"tabler-chevron-down"},{default:t(()=>[y(" January ")]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(r,{id:"shipment-statistics",type:"line",height:"320",options:d,series:u})]),_:1})]),_:1})}}},b=c=>(E("data-v-80dec57d"),c=c(),Y(),c),kt={class:"d-flex mb-6"},Ct={style:{"inline-size":"39.7%"}},Vt=b(()=>o("div",{class:"vehicle-progress-label position-relative mb-6 text-body-1 d-none d-sm-block"}," On the way ",-1)),wt=b(()=>o("div",{class:"text-start text-sm font-weight-medium"}," 39.7% ",-1)),$t={style:{"inline-size":"28.3%"}},St=b(()=>o("div",{class:"vehicle-progress-label position-relative mb-6 text-body-1 d-none d-sm-block"}," Unloading ",-1)),zt=b(()=>o("div",{class:"text-white text-sm font-weight-medium text-start"}," 28.3% ",-1)),Ot={style:{"inline-size":"17.4%"}},At=b(()=>o("div",{class:"vehicle-progress-label position-relative mb-6 text-body-1 d-none d-sm-block"}," Loading ",-1)),Lt=b(()=>o("div",{class:"text-white text-sm font-weight-medium text-start"}," 17.4% ",-1)),Rt={style:{"inline-size":"14.6%"}},Bt=b(()=>o("div",{class:"vehicle-progress-label position-relative mb-6 text-body-1 d-none d-sm-block"}," Waiting ",-1)),Dt=b(()=>o("div",{class:"text-sm text-surface font-weight-medium text-start"}," 14.6% ",-1)),It={width:"70%",style:{"padding-inline-start":"0 !important"}},Tt={class:"d-flex align-center gap-x-2"},Wt={class:"text-body-1 text-high-emphasis"},Nt={class:"text-h6"},Ht={class:"text-body-1"},Jt={__name:"LogisticsVehicleOverview",setup(c){const i=[{icon:"tabler-car",title:"On the way",time:"2hr 10min",percentage:39.7},{icon:"tabler-circle-arrow-down",title:"Unloading",time:"3hr 15min",percentage:28.3},{icon:"tabler-circle-arrow-up",title:"Loading",time:"1hr 24min",percentage:17.4},{icon:"tabler-clock",title:"Waiting",time:"5hr 19min",percentage:14.6}];return(u,d)=>{const s=A;return p(),f(x,null,{default:t(()=>[e(V,{title:"Vehicles Overview"},{append:t(()=>[e(s)]),_:1}),e(w,null,{default:t(()=>[o("div",kt,[o("div",Ct,[Vt,e(S,{color:"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))","model-value":"100",height:"46",class:"rounded-e-0 rounded-lg"},{default:t(()=>[wt]),_:1})]),o("div",$t,[St,e(S,{color:"rgb(var(--v-theme-primary))","model-value":"100",class:"rounded-0",height:"46"},{default:t(()=>[zt]),_:1})]),o("div",Ot,[At,e(S,{color:"rgb(var(--v-theme-info))","model-value":"100",height:"46",class:"rounded-0"},{default:t(()=>[Lt]),_:1})]),o("div",Rt,[Bt,e(S,{color:"rgb(var(--v-tooltip-background))","model-value":"100",height:"46",class:"rounded-s-0 rounded-lg"},{default:t(()=>[Dt]),_:1})])]),e(fe,{class:"text-no-wrap"},{default:t(()=>[o("tbody",null,[(p(),B(D,null,I(i,(a,r)=>o("tr",{key:r},[o("td",It,[o("div",Tt,[e(O,{icon:a.icon,size:"24",class:"text-high-emphasis"},null,8,["icon"]),o("div",Wt,n(a.title),1)])]),o("td",null,[o("h6",Nt,n(a.time),1)]),o("td",null,[o("div",Ht,n(a.percentage)+"% ",1)])])),64))])]),_:1})]),_:1})]),_:1})}}},Mt=W(Jt,[["__scopeId","data-v-80dec57d"]]),Do={__name:"dashboard",setup(c){return(i,u)=>(p(),f(F,{class:"match-height"},{default:t(()=>[e(g,{cols:"12"},{default:t(()=>[e($e)]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(Mt)]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(xt)]),_:1}),e(g,{cols:"12",md:"4"},{default:t(()=>[e(Le)]),_:1}),e(g,{cols:"12",md:"4"},{default:t(()=>[e(ze)]),_:1}),e(g,{cols:"12",md:"4"},{default:t(()=>[e(_t)]),_:1}),e(g,{cols:"12"},{default:t(()=>[e(gt)]),_:1})]),_:1}))}};export{Do as default};
