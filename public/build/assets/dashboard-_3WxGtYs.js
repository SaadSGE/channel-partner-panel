import{c as w}from"./commonFunction-BF_FJ_wF.js";import{ao as C,r as y,H as T,a5 as h,o,f as l,e,b as t,v as c,d as a,x as n,z as x,c as k,i as j,n as S,F as B}from"./main-BSpI_2CL.js";import{$ as D}from"./api-BT0-XMST.js";import{g as E,d as b,f as N}from"./helpers-CZK5uZEr.js";import{a as u,V as R}from"./VRow-a18vhg8U.js";import{a as i,b as _,V as f}from"./VCard-CpeE6zKp.js";import{V as p}from"./VCardText-B0hdZjM1.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VAvatar-BRryBAB-.js";import"./VImg-o7pbezjE.js";import"./index-Dd4E7JjT.js";const F=C({id:"dashboard",state:()=>({dashboards:[],errors:[],user:[]}),actions:{async fetchDashboard(){try{const s=await D("/dashboard",{method:"GET",headers:{"Content-Type":"application/json"}});this.dashboards=s.data}catch(s){throw console.error("Error getting users list:",s),this.errors=s.response?s.response.data.errors:["An unexpected error occurred"],s}}}}),A={class:"d-flex align-center justify-space-between gap-x-2"},$={class:"text-h4 text-center"},z={class:"d-flex align-center justify-space-between gap-x-2"},G={class:"text-h4 text-center"},H={class:"d-flex align-center justify-space-between gap-x-2"},I={class:"text-h4 text-center"},K={class:"d-flex align-center justify-space-between gap-x-2"},L={class:"text-h4 text-center"},se={__name:"dashboard",setup(s){w();const g=F(),r=y({}),d=y("");T(async()=>{await g.fetchDashboard(),r.value=g.dashboards,d.value=E()});const m=h(()=>b(d.value,"admin"));return h(()=>b(d.value,"application control officer")),h(()=>b(d.value,"channel partner")),(M,P)=>(o(),l(R,null,{default:e(()=>[m.value?(o(),l(u,{key:0,cols:"12",md:"4",sm:"6",lg:"3"},{default:e(()=>[t(f,null,{default:e(()=>[t(i,{class:"pb-3"},{default:e(()=>[t(_,null,{default:e(()=>[c("Total Channel Partners")]),_:1})]),_:1}),t(p,null,{default:e(()=>[a("div",A,[a("h4",$,n(r.value.total_channel_partners),1)])]),_:1})]),_:1})]),_:1})):x("",!0),m.value?(o(),l(u,{key:1,cols:"12",md:"4",sm:"6",lg:"3"},{default:e(()=>[t(f,null,{default:e(()=>[t(i,{class:"pb-3"},{default:e(()=>[t(_,null,{default:e(()=>[c("Total Editors")]),_:1})]),_:1}),t(p,null,{default:e(()=>[a("div",z,[a("h4",G,n(r.value.total_editors),1)])]),_:1})]),_:1})]),_:1})):x("",!0),m.value?(o(),l(u,{key:2,cols:"12",md:"4",sm:"6",lg:"3"},{default:e(()=>[t(f,null,{default:e(()=>[t(i,{class:"pb-3"},{default:e(()=>[t(_,null,{default:e(()=>[c("Total Record")]),_:1})]),_:1}),t(p,null,{default:e(()=>[a("div",H,[a("h4",I,n(r.value.total_courses),1)])]),_:1})]),_:1})]),_:1})):x("",!0),(o(!0),k(B,null,j(r.value.applications_by_status,(V,v)=>(o(),l(u,{cols:"12",md:"4",sm:"6",lg:"3",key:v},{default:e(()=>[t(f,null,{default:e(()=>[t(i,{class:"pb-3"},{default:e(()=>[t(_,null,{default:e(()=>[c(n(S(N)(v)),1)]),_:2},1024)]),_:2},1024),t(p,null,{default:e(()=>[a("div",K,[a("h4",L,n(V),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}))}};export{se as default};
