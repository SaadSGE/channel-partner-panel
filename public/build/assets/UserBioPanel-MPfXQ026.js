import{a as U}from"./formatters-BpElQVFp.js";import{_ as C}from"./UserUpgradePlanDialog-BOoHcpa3.js";import{_ as I}from"./UserInfoEditDialog-Cv7bEJa0.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as N,a as B}from"./VRow-BieLNsVU.js";import{V as h}from"./VCardText-CbRypzFE.js";import{V as T}from"./VAvatar-BXy3EmlP.js";import{V as z}from"./VImg-BimLayih.js";import{V as P}from"./VChip-sCNXMvma.js";import{V as R}from"./VDivider-CLUPjuaS.js";import{V as S,a as l,b as i}from"./VList-O1LucjXW.js";import{V as A}from"./VCard-Du2y21h0.js";import{r as b,o as u,c as x,b as t,e,n as f,a3 as D,F as E,f as V,x as o,d as a,v as r,z as L,R as F,U as W}from"./main-p-5DQ3fZ.js";import"./helpers-CUQICrA6.js";import"./ConfirmDialog-7CaUUNW3.js";import"./VDialog-h66PTUdI.js";import"./VOverlay-BK6G1Zrr.js";import"./easing-CjukEv2V.js";import"./lazy-BUy2qP8o.js";import"./scopeId-BtuOjnYq.js";import"./index-DyCmQs2G.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-NCKnRJuF.js";import"./AppSelect-DTzlt4D2.js";import"./form-Ca0bS9AQ.js";import"./VSelect-APMMrNYL.js";import"./VTextField-CWgA6buZ.js";/* empty css                   */import"./VCounter-CvqiO-zE.js";import"./index-B5-sYsAC.js";import"./VField-DhQXCcnx.js";import"./VInput-CTdjTCAX.js";import"./VMenu-BE0APXIu.js";import"./VCheckboxBtn-CtHYOLz9.js";import"./VSelectionControl-CoMSnHis.js";import"./DialogCloseBtn-BF5AHv88.js";import"./AppTextField-CPdHWpXc.js";import"./VForm-DVL49Adw.js";import"./VSwitch-Dz6cyCxN.js";/* empty css              */import"./VSlideGroup-DciGs61O.js";import"./ssrBoot-Cfbx2I9P.js";const v=d=>(F("data-v-5d574534"),d=d(),W(),d),$={key:1,class:"text-5xl font-weight-medium"},j={class:"text-h5 mt-4"},q=v(()=>a("h5",{class:"text-h5"},"Details",-1)),M={class:"text-h6"},O={class:"d-inline-block text-body-1"},G=v(()=>a("span",{class:"text-h6"},"Email:",-1)),H={class:"text-body-1"},J={class:"text-h6"},K={class:"d-inline-block text-capitalize text-body-1"},Q={class:"text-h6"},X={class:"d-inline-block text-body-1"},Y={class:"text-h6"},Z={class:"d-inline-block text-body-1"},tt={class:"text-h6"},et={class:"d-inline-block text-body-1"},at={class:"text-h6"},st={class:"d-inline-block text-body-1"},ot={href:"{{ props.userData.website }}",target:"_blank"},lt={class:"text-h6"},it={class:"d-inline-block text-body-1"},rt={class:"text-h6"},nt={class:"d-inline-block text-body-1"},dt={class:"text-h6"},ct={class:"d-inline-block text-body-1"},ut={class:"text-h6"},_t={class:"d-inline-block text-body-1"},mt={class:"text-h6"},pt={class:"d-inline-block text-body-1"},ft={__name:"UserBioPanel",props:{userData:{type:Object,required:!0}},setup(d){const s=d,_=b(!1),m=b(!1),y=n=>n==="channel partner"?{color:"warning",icon:"tabler-user"}:n==="editor"?{color:"success",icon:"tabler-circle-check"}:n==="admin"?{color:"primary",icon:"tabler-chart-pie-2"}:n==="editor"?{color:"info",icon:"tabler-pencil"}:n==="admin"?{color:"secondary",icon:"tabler-server-2"}:{color:"primary",icon:"tabler-user"};return(n,c)=>{const k=I,g=C;return u(),x(E,null,[t(N,null,{default:e(()=>[t(B,{cols:"12"},{default:e(()=>[s.userData?(u(),V(A,{key:0},{default:e(()=>[t(h,{class:"text-center pt-12"},{default:e(()=>[t(T,{rounded:"",size:100,color:s.userData.avatar?void 0:"primary",variant:s.userData.avatar?void 0:"tonal"},{default:e(()=>[s.userData.avatar?(u(),V(z,{key:0,src:s.userData.avatar},null,8,["src"])):(u(),x("span",$,o(("avatarText"in n?n.avatarText:f(U))(s.userData.full_name)),1))]),_:1},8,["color","variant"]),a("h5",j,o(s.userData.full_name),1),t(P,{label:"",color:y(s.userData.role).color,size:"small",class:"text-capitalize mt-4"},{default:e(()=>[r(o(s.userData.role),1)]),_:1},8,["color"])]),_:1}),t(h,null,{default:e(()=>[q,t(R,{class:"my-4"}),t(S,{class:"card-list mt-2"},{default:e(()=>[t(l,null,{default:e(()=>[t(i,null,{default:e(()=>[a("h6",M,[r(" Username: "),a("div",O,o(s.userData.full_name),1)])]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(i,null,{default:e(()=>[G,a("span",H,o(s.userData.email),1)]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(i,null,{default:e(()=>[a("h6",J,[r(" Role: "),a("div",K,o(s.userData.role),1)])]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(i,null,{default:e(()=>[a("h6",Q,[r(" Mobile Number: "),a("div",X,o(s.userData.mobile_number),1)])]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(i,null,{default:e(()=>[a("h6",Y,[r(" WhatsApp Number: "),a("div",Z,o(s.userData.whatsapp_number),1)])]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(i,null,{default:e(()=>[a("h6",tt,[r(" Company Name: "),a("div",et,o(s.userData.company_name),1)])]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(i,null,{default:e(()=>[a("h6",at,[r(" Website: "),a("div",st,[a("a",ot,o(s.userData.website),1)])])]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(i,null,{default:e(()=>[a("h6",lt,[r(" Address: "),a("div",it,o(s.userData.address),1)])]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(i,null,{default:e(()=>[a("h6",rt,[r(" City: "),a("div",nt,o(s.userData.city),1)])]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(i,null,{default:e(()=>[a("h6",dt,[r(" Post Code: "),a("div",ct,o(s.userData.post_code),1)])]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(i,null,{default:e(()=>[a("h6",ut,[r(" Country: "),a("div",_t,o(s.userData.country),1)])]),_:1})]),_:1}),t(l,null,{default:e(()=>[t(i,null,{default:e(()=>[a("h6",mt,[r(" Status: "),a("div",pt,o(s.userData.status==1?"Active":"Inactive"),1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):L("",!0)]),_:1})]),_:1}),t(k,{isDialogVisible:f(_),"onUpdate:isDialogVisible":c[0]||(c[0]=p=>D(_)?_.value=p:null),"user-data":s.userData},null,8,["isDialogVisible","user-data"]),t(g,{isDialogVisible:f(m),"onUpdate:isDialogVisible":c[1]||(c[1]=p=>D(m)?m.value=p:null)},null,8,["isDialogVisible"])],64)}}},oe=w(ft,[["__scopeId","data-v-5d574534"]]);export{oe as default};
