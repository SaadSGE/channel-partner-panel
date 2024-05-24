import{c as x}from"./commonFunction-B0tqSvpr.js";import{V as g}from"./VTable-DyBViOxg.js";import{L as P,o as f,f as m,e as s,d as t,c as y,h as O,v as o,F as k,G as C,b as e,t as n}from"./main-BvYP52SQ.js";import{_ as N}from"./CrmEarningReportsYearlyOverview-Cyrgi3Bg.js";import{V as A,a as r}from"./VRow-_sMVvyKw.js";import{V as i,a as c,b as p,c as u}from"./VCard-jdokyVzG.js";import{V as d}from"./VCardText-BWN8dbxQ.js";import"./api-Y1duly9G.js";import"./index-B3bPRkoL.js";import"./vue3-apexcharts-C-QLvXq2.js";import"./MoreBtn-PFKvD2d4.js";import"./VMenu-hNkc-VcH.js";import"./VOverlay-Bc38tH3X.js";import"./easing-CjukEv2V.js";import"./lazy-CEsVGIel.js";import"./scopeId-CLB9B5My.js";import"./VImg-C1COJ1y2.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CTdH1v6l.js";import"./VList-B9A1hChN.js";import"./index-BizsYg1A.js";import"./ssrBoot-DnPehlU3.js";import"./VAvatar-CE6b77hk.js";import"./VDivider-D_SmbYXv.js";import"./VSlideGroup-CQDnPb98.js";import"./VSlideGroupItem-CM-2C4yq.js";/* empty css              */const S=t("thead",null,[t("tr",null,[t("th",null,"Intake"),t("th",null,"Details"),t("th",null,"Applications Submitted"),t("th",null,"No of App Process"),t("th",null,"App Not Process"),t("th",null,"Case Close"),t("th",null,"Total Offer"),t("th",null,"Payment")])],-1),v=P({__name:"ApplicationOverviewTable",setup(_){const a=[{intake:"April/May/June/July 2024",details:"15 Offers",applicationsSubmitted:15,noOfAppProcess:3,appNotProcess:0,caseClose:1,totalOffer:15,payment:3},{intake:"August/September/October/November 2023",details:"10 Processing, 4 Not Processed",applicationsSubmitted:88,noOfAppProcess:10,appNotProcess:4,caseClose:9,totalOffer:6,payment:0},{intake:"August/September/October/November 2024",details:"4 Not Processed",applicationsSubmitted:49,noOfAppProcess:8,appNotProcess:4,caseClose:12,totalOffer:12,payment:3},{intake:"December 2023",details:"0 Offers",applicationsSubmitted:4,noOfAppProcess:0,appNotProcess:0,caseClose:1,totalOffer:1,payment:0},{intake:"January/February/March 2022",details:"0 Offers",applicationsSubmitted:35,noOfAppProcess:3,appNotProcess:0,caseClose:29,totalOffer:3,payment:0},{intake:"January/February/March 2023",details:"3 Processing, 0 Not Processed",applicationsSubmitted:31,noOfAppProcess:3,appNotProcess:0,caseClose:12,totalOffer:2,payment:1},{intake:"January/February/March 2024",details:"4 Not Processed",applicationsSubmitted:62,noOfAppProcess:4,appNotProcess:4,caseClose:20,totalOffer:22,payment:1},{intake:"September/October 2024",details:"2 Not Processed",applicationsSubmitted:2,noOfAppProcess:0,appNotProcess:2,caseClose:2,totalOffer:0,payment:0}];return(b,h)=>(f(),m(g,{class:"text-no-wrap"},{default:s(()=>[S,t("tbody",null,[(f(),y(k,null,O(a,l=>t("tr",{key:l.intake},[t("td",null,o(l.intake),1),t("td",null,o(l.details),1),t("td",null,o(l.applicationsSubmitted),1),t("td",null,o(l.noOfAppProcess),1),t("td",null,o(l.appNotProcess),1),t("td",null,o(l.caseClose),1),t("td",null,o(l.totalOffer),1),t("td",null,o(l.payment),1)])),64))])]),_:1}))}}),w=t("div",{class:"d-flex align-center justify-space-between gap-x-2"},[t("h4",{class:"text-h4 text-center"},"124"),t("div",{class:"text-sm text-success"},"+12.6%")],-1),V=t("div",{class:"d-flex align-center justify-space-between gap-x-2"},[t("h4",{class:"text-h4 text-center"},"12"),t("div",{class:"text-sm text-success"},"+12.6%")],-1),D=t("div",{class:"d-flex align-center justify-space-between gap-x-2"},[t("h4",{class:"text-h4 text-center"},"12"),t("div",{class:"text-sm text-success"},"+12.6%")],-1),F=t("div",{class:"d-flex align-center justify-space-between gap-x-2"},[t("h4",{class:"text-h4 text-center"},"12"),t("div",{class:"text-sm text-success"},"+12.6%")],-1),nt={__name:"dashboard",setup(_){const a=x();return C(async()=>{a.countries.length===0&&await a.getCountries(),a.courses.length===0&&await a.getCourses(),a.intakes.length===0&&await a.getIntakes(),a.universities.length===0&&await a.getUniversities(),a.courseDetails.length===0&&await a.getCourseDetails()}),(b,h)=>(f(),m(A,null,{default:s(()=>[e(r,{cols:"12",md:"4",sm:"6",lg:"3"},{default:s(()=>[e(i,null,{default:s(()=>[e(c,{class:"pb-3"},{default:s(()=>[e(p,null,{default:s(()=>[n("New Application")]),_:1}),e(u,null,{default:s(()=>[n("Last Week")]),_:1})]),_:1}),e(d,null,{default:s(()=>[w]),_:1})]),_:1})]),_:1}),e(r,{cols:"12",md:"4",sm:"6",lg:"3"},{default:s(()=>[e(i,null,{default:s(()=>[e(c,{class:"pb-3"},{default:s(()=>[e(p,null,{default:s(()=>[n("Application Reveiw")]),_:1}),e(u,null,{default:s(()=>[n("Last Week")]),_:1})]),_:1}),e(d,null,{default:s(()=>[V]),_:1})]),_:1})]),_:1}),e(r,{cols:"12",md:"4",sm:"6",lg:"3"},{default:s(()=>[e(i,null,{default:s(()=>[e(c,{class:"pb-3"},{default:s(()=>[e(p,null,{default:s(()=>[n("Application Submitted")]),_:1}),e(u,null,{default:s(()=>[n("Last Week")]),_:1})]),_:1}),e(d,null,{default:s(()=>[D]),_:1})]),_:1})]),_:1}),e(r,{cols:"12",md:"4",sm:"6",lg:"3"},{default:s(()=>[e(i,null,{default:s(()=>[e(c,{class:"pb-3"},{default:s(()=>[e(p,null,{default:s(()=>[n("Application Declined")]),_:1}),e(u,null,{default:s(()=>[n("Last Week")]),_:1})]),_:1}),e(d,null,{default:s(()=>[F]),_:1})]),_:1})]),_:1}),e(r,{cols:"12",md:"12"},{default:s(()=>[e(N)]),_:1}),e(r,{cols:"12",md:"12"},{default:s(()=>[e(i,{title:" Application Processing Data"},{default:s(()=>[e(v)]),_:1})]),_:1})]),_:1}))}};export{nt as default};
