import{_ as A}from"./AppDateTimePicker-B-lRXrlO.js";import{q as h}from"./vue3-apexcharts-DeF2D5Mn.js";import{al as k,ak as x,a5 as _,o as f,f as p,n as g,e as a,b as t,d as C,v as c,cW as B,a7 as T,a1 as V}from"./main-0xwlEiGX.js";import{V as O,a as d}from"./VRow-jDTGyzOx.js";import{V as u,a as w,b as S,c as v}from"./VCard-CB6wSISi.js";import{V as m}from"./VCardText-Fl_VNXuW.js";import{V as F}from"./VChip-BB-vy8Yz.js";import"./VField-CdORDiCe.js";import"./form-tHQ3ONH_.js";import"./index-qJYA1wi-.js";import"./easing-CjukEv2V.js";import"./VInput-DiUmufv5.js";import"./index-8vuZJrvj.js";/* empty css              */import"./VAvatar-DSEBzUti.js";import"./VImg-BG4xnC5-.js";import"./VSlideGroup-Bd5KFLyZ.js";const b=r=>{const e=`rgba(${k(r.colors["on-surface"])},${r.variables["medium-emphasis-opacity"]})`,s=`rgba(${k(r.colors["on-surface"])},${r.variables["disabled-opacity"]})`,o=`rgba(${k(String(r.variables["border-color"]))},${r.variables["border-opacity"]})`,l=`rgba(${k(r.colors["on-surface"])},${r.variables["high-emphasis-opacity"]})`;return{themeSecondaryTextColor:e,themeDisabledTextColor:s,themeBorderColor:o,themePrimaryTextColor:l}},M=r=>{const e={series1:"#ff9f43",series2:"#7367f0",series3:"#28c76f"},{themeSecondaryTextColor:s,themeBorderColor:o,themeDisabledTextColor:l}=b(r);return{chart:{parentHeightOffset:0,toolbar:{show:!1},zoom:{type:"xy",enabled:!0}},legend:{position:"top",horizontalAlign:"left",markers:{offsetX:-3},fontSize:"13px",labels:{colors:s},itemMargin:{vertical:3,horizontal:10}},colors:[e.series1,e.series2,e.series3],grid:{borderColor:o,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{fontSize:"0.8125rem",colors:l}}},xaxis:{tickAmount:10,axisBorder:{show:!1},axisTicks:{color:o},crosshairs:{stroke:{color:o}},labels:{style:{colors:l},formatter:i=>Number.parseFloat(i).toFixed(1)}}}},Y=r=>{const{themeBorderColor:e,themeDisabledTextColor:s}=b(r);return{chart:{parentHeightOffset:0,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#ff9f43"],stroke:{curve:"straight"},dataLabels:{enabled:!1},markers:{strokeWidth:7,strokeOpacity:1,colors:["#ff9f43"],strokeColors:["#fff"]},grid:{padding:{top:-10},borderColor:e,xaxis:{lines:{show:!0}}},tooltip:{custom(o){return`<div class='bar-chart pa-2'>
          <span>${o.series[o.seriesIndex][o.dataPointIndex]}%</span>
        </div>`}},yaxis:{labels:{style:{colors:s,fontSize:"0.8125rem"}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:e},crosshairs:{stroke:{color:e}},labels:{style:{colors:s,fontSize:"0.8125rem"}},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12","20/12","21/12"]}}},H=r=>{const{themeBorderColor:e,themeDisabledTextColor:s}=b(r);return{chart:{parentHeightOffset:0,toolbar:{show:!1}},colors:["#00cfe8"],dataLabels:{enabled:!1},plotOptions:{bar:{borderRadius:8,barHeight:"30%",horizontal:!0}},grid:{borderColor:e,xaxis:{lines:{show:!1}},padding:{top:-10}},yaxis:{labels:{style:{colors:s,fontSize:"0.8125rem"}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:e},categories:["MON, 11","THU, 14","FRI, 15","MON, 18","WED, 20","FRI, 21","MON, 23"],labels:{style:{colors:s,fontSize:"0.8125rem"}}}}},R=r=>{const e={series1:"#28c76f",series2:"#ea5455"},{themeBorderColor:s,themeDisabledTextColor:o}=b(r);return{chart:{parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"40%"},candlestick:{colors:{upward:e.series1,downward:e.series2}}},grid:{padding:{top:-10},borderColor:s,xaxis:{lines:{show:!0}}},yaxis:{tooltip:{enabled:!0},crosshairs:{stroke:{color:s}},labels:{style:{colors:o,fontSize:"0.8125rem"}}},xaxis:{type:"datetime",axisBorder:{show:!1},axisTicks:{color:s},crosshairs:{stroke:{color:s}},labels:{style:{colors:o,fontSize:"0.8125rem"}}}}},N=r=>{const e={series1:"#fdd835",series2:"#32baff",series3:"#00d4bd",series4:"#7367f0",series5:"#FFA1A1"},{themeSecondaryTextColor:s,themePrimaryTextColor:o}=b(r);return{stroke:{lineCap:"round"},labels:["Comments","Replies","Shares"],legend:{show:!0,fontSize:"13px",position:"bottom",labels:{colors:s},markers:{offsetX:-3},itemMargin:{vertical:3,horizontal:10}},colors:[e.series1,e.series2,e.series4],plotOptions:{radialBar:{hollow:{size:"30%"},track:{margin:15,background:r.variables["track-bg"]},dataLabels:{name:{fontSize:"2rem"},value:{fontSize:"0.9375rem",color:s},total:{show:!0,fontWeight:400,label:"Comments",fontSize:"1.125rem",color:o,formatter(l){const i=l.globals.seriesTotals.reduce((n,y)=>n+y,0)/l.globals.series.length;return i%1===0?`${i}%`:`${i.toFixed(2)}%`}}}}},grid:{padding:{top:-30,bottom:-25}}}},I=r=>{const e={series1:"#fdd835",series2:"#00d4bd",series3:"#826bf8",series4:"#32baff",series5:"#ffa1a1"},{themeSecondaryTextColor:s,themePrimaryTextColor:o}=b(r);return{stroke:{width:0},labels:["Operational","Networking","Hiring","R&D"],colors:[e.series1,e.series5,e.series3,e.series2],dataLabels:{enabled:!0,formatter:l=>`${Number.parseInt(l,10)}%`},legend:{position:"bottom",markers:{offsetX:-3},fontSize:"13px",labels:{colors:s},itemMargin:{vertical:3,horizontal:10}},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1.125rem"},value:{fontSize:"1.125rem",color:s,formatter:l=>`${Number.parseInt(l,10)}`},total:{show:!0,fontSize:"1.125rem",label:"Operational",formatter:()=>"31%",color:o}}}}},responsive:[{breakpoint:992,options:{chart:{height:380},legend:{position:"bottom"}}},{breakpoint:576,options:{chart:{height:320},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"0.9375rem"},value:{fontSize:"0.9375rem"},total:{fontSize:"0.9375rem"}}}}}}}]}},P=r=>{const e={series3:"#e0cffe",series2:"#b992fe",series1:"#ab7efd"},{themeSecondaryTextColor:s,themeBorderColor:o,themeDisabledTextColor:l}=b(r);return{chart:{parentHeightOffset:0,toolbar:{show:!1}},tooltip:{shared:!1},dataLabels:{enabled:!1},stroke:{show:!1,curve:"straight"},legend:{position:"top",horizontalAlign:"left",fontSize:"13px",labels:{colors:s},markers:{offsetY:1,offsetX:-3},itemMargin:{vertical:3,horizontal:10}},colors:[e.series3,e.series2,e.series1],fill:{opacity:1,type:"solid"},grid:{show:!0,borderColor:o,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:l,fontSize:"0.8125rem"}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:o},crosshairs:{stroke:{color:o}},labels:{style:{colors:l,fontSize:"0.8125rem"}},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12"]}}},L=r=>{const e={series1:"#826af9",series2:"#d2b0ff",bg:"#f8d3ff"},{themeSecondaryTextColor:s,themeBorderColor:o,themeDisabledTextColor:l}=b(r);return{chart:{offsetX:-10,stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},fill:{opacity:1},dataLabels:{enabled:!1},colors:[e.series1,e.series2],legend:{position:"top",horizontalAlign:"left",fontSize:"13px",labels:{colors:s},markers:{offsetY:1,offsetX:-3},itemMargin:{vertical:3,horizontal:10}},stroke:{show:!0,colors:["transparent"]},plotOptions:{bar:{columnWidth:"15%",colors:{backgroundBarRadius:10,backgroundBarColors:[e.bg,e.bg,e.bg,e.bg,e.bg]}}},grid:{borderColor:o,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:l,fontSize:"0.8125rem"}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:o},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12"],crosshairs:{stroke:{color:o}},labels:{style:{colors:l,fontSize:"0.8125rem"}}},responsive:[{breakpoint:600,options:{plotOptions:{bar:{columnWidth:"35%"}}}}]}},W=r=>{const{themeSecondaryTextColor:e,themeDisabledTextColor:s}=b(r);return{chart:{parentHeightOffset:0,toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{colors:[r.colors.surface]},legend:{position:"bottom",fontSize:"13px",labels:{colors:e},markers:{offsetY:0,offsetX:-3},itemMargin:{vertical:3,horizontal:10}},plotOptions:{heatmap:{enableShades:!1,colorScale:{ranges:[{to:10,from:0,name:"0-10",color:"#b9b3f8"},{to:20,from:11,name:"10-20",color:"#aba4f6"},{to:30,from:21,name:"20-30",color:"#9d95f5"},{to:40,from:31,name:"30-40",color:"#8f85f3"},{to:50,from:41,name:"40-50",color:"#8176f2"},{to:60,from:51,name:"50-60",color:"#7367f0"}]}}},grid:{padding:{top:-20}},yaxis:{labels:{style:{colors:s,fontSize:"0.8125rem"}}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}}}},X=r=>{const e={series1:"#9b88fa",series2:"#ffa1a1"},{themeSecondaryTextColor:s,themeBorderColor:o,themeDisabledTextColor:l}=b(r);return{chart:{parentHeightOffset:0,toolbar:{show:!1},dropShadow:{top:1,blur:8,left:1,opacity:.2,enabled:!1}},markers:{size:0},fill:{opacity:[1,.8]},colors:[e.series1,e.series2],stroke:{width:0,show:!1},legend:{fontSize:"13px",labels:{colors:s},markers:{offsetX:-3},itemMargin:{vertical:3,horizontal:10}},plotOptions:{radar:{polygons:{strokeColors:o,connectorColors:o}}},grid:{show:!1,padding:{top:-20,bottom:-20}},yaxis:{show:!1},xaxis:{categories:["Battery","Brand","Camera","Memory","Storage","Display","OS","Price"],labels:{style:{fontSize:"0.8125rem",colors:[l,l,l,l,l,l,l,l]}}}}},j={__name:"ApexChartAreaChart",setup(r){const e=x(),s=_(()=>P(e.current.value)),o=[{name:"Visits",data:[100,120,90,170,130,160,140,240,220,180,270,280,375]},{name:"Clicks",data:[60,80,70,110,80,100,90,180,160,140,200,220,275]},{name:"Sales",data:[20,40,30,70,40,60,50,140,120,100,140,180,220]}];return(l,i)=>{const n=h;return f(),p(n,{type:"area",height:"400",options:g(s),series:o},null,8,["options"])}}},E={__name:"ApexChartBalance",setup(r){const e=x(),s=_(()=>Y(e.current.value)),o=[{data:[280,200,220,180,270,250,70,90,200,150,160,100,150,100,50]}];return(l,i)=>{const n=h;return f(),p(n,{type:"line",height:"400",options:g(s),series:o},null,8,["options"])}}},U={__name:"ApexChartDailySalesStates",setup(r){const e=x(),s=_(()=>W(e.current.value)),o=(i,n)=>{let y=0;const z=[];for(;y<i;){const $=`w${(y+1).toString()}`,D=Math.floor(Math.random()*(n.max-n.min+1))+n.min;z.push({x:$,y:D}),y+=1}return z},l=[{name:"SUN",data:o(24,{min:0,max:60})},{name:"MON",data:o(24,{min:0,max:60})},{name:"TUE",data:o(24,{min:0,max:60})},{name:"WED",data:o(24,{min:0,max:60})},{name:"THU",data:o(24,{min:0,max:60})},{name:"FRI",data:o(24,{min:0,max:60})},{name:"SAT",data:o(24,{min:0,max:60})}];return(i,n)=>{const y=h;return f(),p(y,{type:"heatmap",height:"350",options:g(s),series:l},null,8,["options"])}}},q={__name:"ApexChartDataScience",setup(r){const e=x(),s=_(()=>L(e.current.value)),o=[{name:"Apple",data:[90,120,55,100,80,125,175,70,88]},{name:"Samsung",data:[85,100,30,40,95,90,30,110,62]}];return(l,i)=>{const n=h;return f(),p(n,{type:"bar",height:"400",options:g(s),series:o},null,8,["options"])}}},G={__name:"ApexChartExpenseRatio",setup(r){const e=x(),s=_(()=>I(e.current.value)),o=[85,16,50,50];return(l,i)=>{const n=h;return f(),p(n,{type:"donut",height:"410",options:g(s),series:o},null,8,["options"])}}},J={__name:"ApexChartHorizontalBar",setup(r){const e=x(),s=_(()=>H(e.current.value)),o=[{data:[700,350,480,600,210,550,150]}];return(l,i)=>{const n=h;return f(),p(n,{type:"bar",height:"400",options:g(s),series:o},null,8,["options"])}}},K={__name:"ApexChartMobileComparison",setup(r){const e=x(),s=[{name:"iPhone 12",data:[41,64,81,60,42,42,33,23]},{name:"Samsung s20",data:[65,46,42,25,58,63,76,43]}],o=_(()=>X(e.current.value));return(l,i)=>{const n=h;return f(),p(n,{type:"radar",height:"400",options:g(o),series:s},null,8,["options"])}}},Q={__name:"ApexChartNewTechnologiesData",setup(r){const e=x(),s=_(()=>M(e.current.value)),o=[{name:"Angular",data:[{x:5.4,y:170},{x:5.4,y:100},{x:6.3,y:170},{x:5.7,y:140},{x:5.9,y:130},{x:7,y:150},{x:8,y:120},{x:9,y:170},{x:10,y:190},{x:11,y:220},{x:12,y:170},{x:13,y:230}]},{name:"Vue",data:[{x:14,y:220},{x:15,y:280},{x:16,y:230},{x:18,y:320},{x:17.5,y:280},{x:19,y:250},{x:20,y:350},{x:20.5,y:320},{x:20,y:320},{x:19,y:280},{x:17,y:280},{x:22,y:300},{x:18,y:120}]},{name:"React",data:[{x:14,y:290},{x:13,y:190},{x:20,y:220},{x:21,y:350},{x:21.5,y:290},{x:22,y:220},{x:23,y:140},{x:19,y:400},{x:20,y:200},{x:22,y:90},{x:20,y:120}]}];return(l,i)=>{const n=h;return f(),p(n,{type:"scatter",height:"400",options:g(s),series:o},null,8,["options"])}}},Z={__name:"ApexChartStatistics",setup(r){const e=x(),s=_(()=>N(e.current.value)),o=[80,50,35];return(l,i)=>{const n=h;return f(),p(n,{type:"radialBar",height:"400",options:g(s),series:o},null,8,["options"])}}},ee={__name:"ApexChartStocksPrices",setup(r){const e=x(),s=_(()=>R(e.current.value)),o=[{data:[{x:`7/12/${new Date().getFullYear()}`,y:[150,170,50,100]},{x:`8/12/${new Date().getFullYear()}`,y:[200,400,170,330]},{x:`9/12/${new Date().getFullYear()}`,y:[330,340,250,280]},{x:`10/12/${new Date().getFullYear()}`,y:[300,330,200,320]},{x:`11/12/${new Date().getFullYear()}`,y:[320,450,280,350]},{x:`12/12/${new Date().getFullYear()}`,y:[300,350,80,250]},{x:`13/12/${new Date().getFullYear()}`,y:[200,330,170,300]},{x:`14/12/${new Date().getFullYear()}`,y:[200,220,70,130]},{x:`15/12/${new Date().getFullYear()}`,y:[220,270,180,250]},{x:`16/12/${new Date().getFullYear()}`,y:[200,250,80,100]},{x:`17/12/${new Date().getFullYear()}`,y:[150,170,50,120]},{x:`18/12/${new Date().getFullYear()}`,y:[110,450,10,420]},{x:`19/12/${new Date().getFullYear()}`,y:[400,480,300,320]},{x:`20/12/${new Date().getFullYear()}`,y:[380,480,350,450]}]}];return(l,i)=>{const n=h;return f(),p(n,{type:"candlestick",height:"385",options:g(s),series:o},null,8,["options"])}}},te={class:"date-picker-wrapper"},oe={class:"date-picker-wrapper"},ae={class:"d-flex align-center"},se=C("h6",{class:"text-h6 me-3"}," $221,267 ",-1),re=C("span",null,"22%",-1),le={class:"date-picker-wrapper"},ne={class:"date-picker-wrapper"},ve={__name:"apex-chart",setup(r){return(e,s)=>{const o=A;return f(),p(O,{id:"apex-chart-wrapper"},{default:a(()=>[t(d,{cols:"12"},{default:a(()=>[t(u,null,{default:a(()=>[t(w,{class:"d-flex flex-wrap justify-space-between gap-4"},{append:a(()=>[C("div",te,[t(o,{"model-value":"2022-06-09","prepend-inner-icon":"tabler-calendar",placeholder:"Select Date",config:e.$vuetify.display.smAndDown?{position:"auto center"}:{position:"auto right"}},null,8,["config"])])]),default:a(()=>[t(S,null,{default:a(()=>[c("Area Chart")]),_:1}),t(v,null,{default:a(()=>[c("Commercial networks")]),_:1})]),_:1}),t(m,null,{default:a(()=>[t(j)]),_:1})]),_:1})]),_:1}),t(d,{cols:"12"},{default:a(()=>[t(u,null,{default:a(()=>[t(w,{class:"d-flex flex-wrap justify-space-between gap-4"},{append:a(()=>[C("div",oe,[t(o,{"model-value":"2022-06-09","prepend-inner-icon":"tabler-calendar",placeholder:"Select Date",config:e.$vuetify.display.smAndDown?{position:"auto center"}:{position:"auto right"}},null,8,["config"])])]),default:a(()=>[t(S,null,{default:a(()=>[c("Data Science")]),_:1})]),_:1}),t(m,null,{default:a(()=>[t(q)]),_:1})]),_:1})]),_:1}),t(d,{cols:"12"},{default:a(()=>[t(u,null,{default:a(()=>[t(w,{class:"d-flex flex-wrap justify-space-between gap-4"},{append:a(()=>[t(B,{density:"compact",color:"primary",variant:"outlined",divided:""},{default:a(()=>[t(T,null,{default:a(()=>[c("Daily")]),_:1}),t(T,null,{default:a(()=>[c("Monthly")]),_:1}),t(T,null,{default:a(()=>[c("Yearly")]),_:1})]),_:1})]),default:a(()=>[t(S,null,{default:a(()=>[c("New Technologies Data")]),_:1})]),_:1}),t(m,null,{default:a(()=>[t(Q)]),_:1})]),_:1})]),_:1}),t(d,{cols:"12"},{default:a(()=>[t(u,null,{default:a(()=>[t(w,{class:"d-flex flex-wrap justify-space-between gap-4"},{append:a(()=>[C("div",ae,[se,t(F,{label:"",color:"success"},{default:a(()=>[t(V,{start:"",icon:"tabler-arrow-up",size:"15"}),re]),_:1})])]),default:a(()=>[t(S,null,{default:a(()=>[c("Balance")]),_:1}),t(v,null,{default:a(()=>[c("Commercial networks & enterprises")]),_:1})]),_:1}),t(m,null,{default:a(()=>[t(E)]),_:1})]),_:1})]),_:1}),t(d,{cols:"12",md:"6"},{default:a(()=>[t(u,null,{default:a(()=>[t(w,{class:"d-flex flex-wrap justify-space-between gap-4"},{append:a(()=>[C("div",le,[t(o,{"model-value":"2022-06-09","prepend-inner-icon":"tabler-calendar",placeholder:"Select Date",config:e.$vuetify.display.smAndDown?{position:"auto center"}:{position:"auto right"}},null,8,["config"])])]),default:a(()=>[t(S,null,{default:a(()=>[c("Balance")]),_:1}),t(v,null,{default:a(()=>[c("$74,382.72")]),_:1})]),_:1}),t(m,null,{default:a(()=>[t(J)]),_:1})]),_:1})]),_:1}),t(d,{cols:"12",md:"6"},{default:a(()=>[t(u,null,{default:a(()=>[t(w,{class:"d-flex flex-wrap justify-space-between gap-4"},{append:a(()=>[C("div",ne,[t(o,{"model-value":"2022-06-09","prepend-inner-icon":"tabler-calendar",placeholder:"Select Date",config:e.$vuetify.display.smAndDown?{position:"auto center"}:{position:"auto right"}},null,8,["config"])])]),default:a(()=>[t(S,null,{default:a(()=>[c("Stocks Prices")]),_:1}),t(v,null,{default:a(()=>[c("$50,863.98")]),_:1})]),_:1}),t(m,null,{default:a(()=>[t(ee)]),_:1})]),_:1})]),_:1}),t(d,{cols:"12",md:"6"},{default:a(()=>[t(u,{title:"Daily Sales States"},{default:a(()=>[t(m,null,{default:a(()=>[t(U)]),_:1})]),_:1})]),_:1}),t(d,{cols:"12",md:"6"},{default:a(()=>[t(u,{title:"Statistics"},{default:a(()=>[t(m,null,{default:a(()=>[t(Z)]),_:1})]),_:1})]),_:1}),t(d,{cols:"12",md:"6"},{default:a(()=>[t(u,{title:"Mobile Comparison"},{default:a(()=>[t(m,null,{default:a(()=>[t(K)]),_:1})]),_:1})]),_:1}),t(d,{cols:"12",md:"6"},{default:a(()=>[t(u,{title:"Expense Ratio",subtitle:"Spending on various categories"},{default:a(()=>[t(m,null,{default:a(()=>[t(G)]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ve as default};
