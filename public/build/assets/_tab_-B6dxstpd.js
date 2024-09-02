import{_ as ue}from"./ConfirmDialog-BAxCcJPE.js";import{_ as q}from"./AppSelect-BU0A07f2.js";import{_ as Z}from"./AppTextField-I5UKlFC7.js";import{r as p,o as V,c as $,b as e,e as t,n as a,d as l,a7 as A,a1 as G,v as u,a6 as j,a3 as g,F as B,af as ye,ad as ge,a5 as te,a as le,f as U,x as y,s as he,z as me,a4 as Ve,i as E,J as xe,R as we,U as Ce,j as Ae}from"./main-C3aczJNT.js";import{a as s,V as S}from"./VRow-DZV-I3wT.js";import{V as T,a as pe,b as fe}from"./VCard-BoF5Se1H.js";import{V as k}from"./VCardText-DociP0vQ.js";import{V as W}from"./VAvatar-BM8r58xX.js";import{V as O}from"./VForm-BJS0-pq1.js";import{V as H}from"./VCheckbox-DnS756o7.js";import{_ as ke,a as Te}from"./TwoFactorAuthDialog-BjMUhHcf.js";import{_ as De}from"./PricingPlanDialog-CAqBS3eG.js";import{a as Se}from"./formatters-CiU0ZTAr.js";import{_ as Pe}from"./TablePagination-BzgHHuH4.js";import{u as $e}from"./useApi-DH1vi0H5.js";import{c as Ie}from"./createUrl-COmG91s7.js";import{$ as Me}from"./api-WEQNakzg.js";import{V as Ue}from"./form-DXUotdvJ.js";import{V as ae}from"./VSpacer-EU5TnZkz.js";import{V as K}from"./VDivider-DdRZAoVo.js";import{V as Ge}from"./VDataTableServer-DTrMJOHW.js";import{V as Ne}from"./VTooltip-CP6zWzRQ.js";import{V as _e}from"./VImg-BIXW4ypZ.js";import{V as J}from"./VChip-D-BI3-AX.js";import{m as ze,v as Be,g as Le,s as Re,a as Ee,b as Fe,c as Oe,f as Ye,t as je,l as We,d as qe,e as He}from"./twitter-miPpr9FI.js";import{V as Ke,a as Je}from"./VAlert-BPN1ydRY.js";import{V as Ze,a as re}from"./VRadioGroup-DW1LqUvx.js";import{V as be}from"./VSwitch-BfwotbkF.js";import{V as oe,a as ne,b as de,d as ee}from"./VList-ceCjrQSh.js";import{V as ce}from"./VListItemAction-T1Rj7v6Q.js";import{V as Qe}from"./VTable-BTmYEBDa.js";import{l as Xe}from"./laptop-girl-BYZuEsdH.js";import{_ as et}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as tt}from"./VDataTable-CMF-sJu9.js";import{a as lt,V as at}from"./VTabs-3t3RKET4.js";import{a as Y,V as ot}from"./VWindowItem-syeypbJ_.js";import"./VDialog-ei-xzFYu.js";import"./VOverlay-5L4FjIyo.js";import"./easing-CjukEv2V.js";import"./lazy-Bwi8doWD.js";import"./scopeId-Coc7ZcXg.js";import"./index-Ci2pHsMa.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-JvXzrIWR.js";import"./VSelect-Cw7rSbey.js";import"./VTextField-D1okVibP.js";/* empty css                   */import"./VCounter-DAsHO5of.js";import"./index-D3sZMnWI.js";import"./VField-BBoh8nI9.js";import"./VInput-DvThVAav.js";import"./VMenu-B8h2e246.js";import"./VCheckboxBtn-CpzlI66m.js";import"./VSelectionControl-xLF5omUn.js";/* empty css              */import"./DialogCloseBtn-CB6rfXW9.js";import"./CustomRadios-CEwbON4_.js";import"./AppPricing-BU5B3rLH.js";import"./helpers-DkHoQPEm.js";import"./VPagination-CkqzN_bH.js";import"./index-B3bPRkoL.js";import"./VSlideGroup-DEAEgikf.js";import"./ssrBoot-NmuqpgkZ.js";import"./filter-CYW1DuhC.js";const nt={class:"d-flex flex-column justify-center gap-4"},st={class:"d-flex flex-wrap gap-4"},it=l("span",{class:"d-none d-sm-block"},"Upload new photo",-1),rt=l("span",{class:"d-none d-sm-block"},"Reset",-1),dt=l("p",{class:"text-body-1 mb-0"}," Allowed JPG, GIF or PNG. Max size of 800K ",-1),ct={__name:"AccountSettingsAccount",setup(N){const b={avatarImg:ye,firstName:"john",lastName:"Doe",email:"johnDoe@example.com",org:"Pixinvent",phone:"+1 (917) 543-9876",address:"123 Main St, New York, NY 10001",state:"New York",zip:"10001",country:"USA",language:"English",timezone:"(GMT-11:00) International Date Line West",currency:"USD"},_=p(),x=p(!1),d=p(structuredClone(b)),v=p(!1),i=[D=>!!D||"Please confirm account deactivation"],h=()=>{d.value=structuredClone(b)},I=D=>{const o=new FileReader,{files:w}=D.target;w&&w.length&&(o.readAsDataURL(w[0]),o.onload=()=>{typeof o.result=="string"&&(d.value.avatarImg=o.result)})},L=()=>{d.value.avatarImg=b.avatarImg},z=["(GMT-11:00) International Date Line West","(GMT-11:00) Midway Island","(GMT-10:00) Hawaii","(GMT-09:00) Alaska","(GMT-08:00) Pacific Time (US & Canada)","(GMT-08:00) Tijuana","(GMT-07:00) Arizona","(GMT-07:00) Chihuahua","(GMT-07:00) La Paz","(GMT-07:00) Mazatlan","(GMT-07:00) Mountain Time (US & Canada)","(GMT-06:00) Central America","(GMT-06:00) Central Time (US & Canada)","(GMT-06:00) Guadalajara","(GMT-06:00) Mexico City","(GMT-06:00) Monterrey","(GMT-06:00) Saskatchewan","(GMT-05:00) Bogota","(GMT-05:00) Eastern Time (US & Canada)","(GMT-05:00) Indiana (East)","(GMT-05:00) Lima","(GMT-05:00) Quito","(GMT-04:00) Atlantic Time (Canada)","(GMT-04:00) Caracas","(GMT-04:00) La Paz","(GMT-04:00) Santiago","(GMT-03:30) Newfoundland","(GMT-03:00) Brasilia","(GMT-03:00) Buenos Aires","(GMT-03:00) Georgetown","(GMT-03:00) Greenland","(GMT-02:00) Mid-Atlantic","(GMT-01:00) Azores","(GMT-01:00) Cape Verde Is.","(GMT+00:00) Casablanca","(GMT+00:00) Dublin","(GMT+00:00) Edinburgh","(GMT+00:00) Lisbon","(GMT+00:00) London"],P=["USD","EUR","GBP","AUD","BRL","CAD","CNY","CZK","DKK","HKD","HUF","INR"];return(D,o)=>{const w=Z,M=q,m=ue;return V(),$(B,null,[e(S,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(T,null,{default:t(()=>[e(k,{class:"d-flex"},{default:t(()=>[e(W,{rounded:"",size:"100",class:"me-6",image:a(d).avatarImg},null,8,["image"]),l("form",nt,[l("div",st,[e(A,{color:"primary",size:"small",onClick:o[0]||(o[0]=n=>{var F;return(F=a(_))==null?void 0:F.click()})},{default:t(()=>[e(G,{icon:"tabler-cloud-upload",class:"d-sm-none"}),it]),_:1}),l("input",{ref_key:"refInputEl",ref:_,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:I},null,544),e(A,{type:"reset",size:"small",color:"secondary",variant:"tonal",onClick:L},{default:t(()=>[rt,e(G,{icon:"tabler-refresh",class:"d-sm-none"})]),_:1})]),dt])]),_:1}),e(k,{class:"pt-2"},{default:t(()=>[e(O,{class:"mt-3"},{default:t(()=>[e(S,null,{default:t(()=>[e(s,{md:"6",cols:"12"},{default:t(()=>[e(w,{modelValue:a(d).firstName,"onUpdate:modelValue":o[1]||(o[1]=n=>a(d).firstName=n),placeholder:"John",label:"First Name"},null,8,["modelValue"])]),_:1}),e(s,{md:"6",cols:"12"},{default:t(()=>[e(w,{modelValue:a(d).lastName,"onUpdate:modelValue":o[2]||(o[2]=n=>a(d).lastName=n),placeholder:"Doe",label:"Last Name"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{modelValue:a(d).email,"onUpdate:modelValue":o[3]||(o[3]=n=>a(d).email=n),label:"E-mail",placeholder:"johndoe@gmail.com",type:"email"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{modelValue:a(d).org,"onUpdate:modelValue":o[4]||(o[4]=n=>a(d).org=n),label:"Organization",placeholder:"ThemeSelection"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{modelValue:a(d).phone,"onUpdate:modelValue":o[5]||(o[5]=n=>a(d).phone=n),label:"Phone Number",placeholder:"+1 (917) 543-9876"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{modelValue:a(d).address,"onUpdate:modelValue":o[6]||(o[6]=n=>a(d).address=n),label:"Address",placeholder:"123 Main St, New York, NY 10001"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{modelValue:a(d).state,"onUpdate:modelValue":o[7]||(o[7]=n=>a(d).state=n),label:"State",placeholder:"New York"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{modelValue:a(d).zip,"onUpdate:modelValue":o[8]||(o[8]=n=>a(d).zip=n),label:"Zip Code",placeholder:"10001"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(M,{modelValue:a(d).country,"onUpdate:modelValue":o[9]||(o[9]=n=>a(d).country=n),label:"Country",items:["USA","Canada","UK","India","Australia"],placeholder:"Select Country"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(M,{modelValue:a(d).language,"onUpdate:modelValue":o[10]||(o[10]=n=>a(d).language=n),label:"Language",placeholder:"Select Language",items:["English","Spanish","Arabic","Hindi","Urdu"]},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(M,{modelValue:a(d).timezone,"onUpdate:modelValue":o[11]||(o[11]=n=>a(d).timezone=n),label:"Timezone",placeholder:"Select Timezone",items:z,"menu-props":{maxHeight:200}},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(M,{modelValue:a(d).currency,"onUpdate:modelValue":o[12]||(o[12]=n=>a(d).currency=n),label:"Currency",placeholder:"Select Currency",items:P,"menu-props":{maxHeight:200}},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(A,null,{default:t(()=>[u("Save changes")]),_:1}),e(A,{color:"secondary",variant:"tonal",type:"reset",onClick:j(h,["prevent"])},{default:t(()=>[u(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(T,{title:"Delete Account"},{default:t(()=>[e(k,null,{default:t(()=>[l("div",null,[e(H,{modelValue:a(v),"onUpdate:modelValue":o[13]||(o[13]=n=>g(v)?v.value=n:null),rules:i,label:"I confirm my account deactivation"},null,8,["modelValue"])]),e(A,{disabled:!a(v),color:"error",class:"mt-6",onClick:o[14]||(o[14]=n=>x.value=!0)},{default:t(()=>[u(" Deactivate Account ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{isDialogVisible:a(x),"onUpdate:isDialogVisible":o[15]||(o[15]=n=>g(x)?x.value=n:null),"confirmation-question":"Are you sure you want to deactivate your account?","confirm-title":"Deactivated!","confirm-msg":"Your account has been deactivated successfully.","cancel-title":"Cancelled","cancel-msg":"Account Deactivation Cancelled!"},null,8,["isDialogVisible"])],64)}}},ut={class:"d-flex gap-2"},mt={class:"d-flex align-end flex-wrap gap-4"},pt={class:"invoice-list-search"},ft={class:"invoice-list-status"},_t={class:"text-body-1"},bt={class:"mb-0"},vt={class:"mb-0"},yt={class:"mb-0"},gt={class:"d-flex align-center"},ht={key:1},Vt={class:"d-flex flex-column"},xt={class:"text-body-2"},wt={key:1,class:"text-body-1 text-high-emphasis"},Ct={__name:"BillingHistoryTable",async setup(N){let b,_;const x=p(""),d=p(),v=p([]),i=p(10),h=p(1),I=p(),L=p(),z=c=>{var C,R;I.value=(C=c.sortBy[0])==null?void 0:C.key,L.value=(R=c.sortBy[0])==null?void 0:R.order},P=[{title:"#",key:"id"},{title:"Status",key:"status",sortable:!1},{title:"Client",key:"client"},{title:"Total",key:"total"},{title:"Issued Date",key:"date"},{title:"Balance",key:"balance"},{title:"Actions",key:"actions",sortable:!1}],{data:D,execute:o}=([b,_]=ge(()=>$e(Ie("/apps/invoice",{query:{q:x,status:d,itemsPerPage:i,page:h,sortBy:I,orderBy:L}}))),b=await b,_(),b),w=te(()=>{var c;return(c=D.value)==null?void 0:c.invoices}),M=te(()=>{var c;return(c=D.value)==null?void 0:c.totalInvoices}),m=(c,C)=>c===C?{status:"Unpaid",chip:{color:"error"}}:c===0?{status:"Paid",chip:{color:"success"}}:{status:c,chip:{variant:"text"}},n=c=>c==="Partial Payment"?{variant:"warning",icon:"tabler-chart-pie"}:c==="Paid"?{variant:"success",icon:"tabler-check"}:c==="Downloaded"?{variant:"info",icon:"tabler-arrow-down"}:c==="Draft"?{variant:"primary",icon:"tabler-folder"}:c==="Sent"?{variant:"secondary",icon:"tabler-mail"}:c==="Past Due"?{variant:"error",icon:"tabler-alert-circle"}:{variant:"secondary",icon:"tabler-x"},F=async c=>{await Me(`/apps/invoice/${c}`,{method:"DELETE"}),o()};return(c,C)=>{const R=q,f=Z,Q=le("RouterLink"),X=le("IconBtn"),ve=Pe;return a(w)?(V(),U(T,{key:0,id:"invoice-list",title:"Billing History"},{default:t(()=>[e(k,{class:"d-flex align-center flex-wrap gap-4"},{default:t(()=>[l("div",ut,[e(Ue,null,{default:t(()=>[u("Show")]),_:1}),e(R,{modelValue:a(i),"onUpdate:modelValue":C[0]||(C[0]=r=>g(i)?i.value=r:null),items:[5,10,20,25,50]},null,8,["modelValue"])]),e(A,{"prepend-icon":"tabler-plus",to:{name:"apps-invoice-add"}},{default:t(()=>[u(" Create invoice ")]),_:1}),e(ae),l("div",mt,[l("div",pt,[e(f,{modelValue:a(x),"onUpdate:modelValue":C[1]||(C[1]=r=>g(x)?x.value=r:null),placeholder:"Search Invoice"},null,8,["modelValue"])]),l("div",ft,[e(R,{modelValue:a(d),"onUpdate:modelValue":C[2]||(C[2]=r=>g(d)?d.value=r:null),placeholder:"Invoice Status",clearable:"","clear-icon":"tabler-x",items:["Downloaded","Draft","Sent","Paid","Partial Payment","Past Due"],style:{"inline-size":"12rem"}},null,8,["modelValue"])])])]),_:1}),e(K),e(Ge,{modelValue:a(v),"onUpdate:modelValue":C[4]||(C[4]=r=>g(v)?v.value=r:null),"items-per-page":a(i),"onUpdate:itemsPerPage":C[5]||(C[5]=r=>g(i)?i.value=r:null),page:a(h),"onUpdate:page":C[6]||(C[6]=r=>g(h)?h.value=r:null),"show-select":"","items-length":a(M),headers:P,items:a(w),class:"text-no-wrap","onUpdate:options":z},{"item.id":t(({item:r})=>[l("div",_t,[e(Q,{to:{name:"apps-invoice-preview-id",params:{id:r.id}}},{default:t(()=>[u(" #"+y(r.id),1)]),_:2},1032,["to"])])]),"item.status":t(({item:r})=>[e(Ne,null,{activator:t(({props:ie})=>[e(W,he({size:28},ie,{color:n(r.invoiceStatus).variant,variant:"tonal"}),{default:t(()=>[e(G,{size:"16",icon:n(r.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:t(()=>[l("p",bt,y(r.invoiceStatus),1),l("p",vt," Balance: "+y(r.balance),1),l("p",yt," Due date: "+y(r.dueDate),1)]),_:2},1024)]),"item.client":t(({item:r})=>[l("div",gt,[e(W,{size:"34",color:r.avatar.length?void 0:n(r.invoiceStatus).variant,variant:r.avatar.length?void 0:"tonal",class:"me-3"},{default:t(()=>[r.avatar.length?(V(),U(_e,{key:0,src:r.avatar},null,8,["src"])):(V(),$("span",ht,y(("avatarText"in c?c.avatarText:a(Se))(r.client.name)),1))]),_:2},1032,["color","variant"]),l("div",Vt,[e(Q,{class:"font-weight-medium text-body-1 text-high-emphasis mb-0 text-link",to:{name:"pages-user-profile-tab",params:{tab:"profile"}}},{default:t(()=>[u(y(r.client.name),1)]),_:2},1024),l("span",xt,y(r.client.companyEmail),1)])])]),"item.total":t(({item:r})=>[u(" $"+y(r.total),1)]),"item.date":t(({item:r})=>[u(y(r.issuedDate),1)]),"item.balance":t(({item:r})=>[typeof m(r.balance,r.total).status=="string"?(V(),U(J,{key:0,color:m(r.balance,r.total).chip.color,size:"small",label:""},{default:t(()=>[u(y(m(r.balance,r.total).status),1)]),_:2},1032,["color"])):(V(),$("div",wt,y(Number(m(r.balance,r.total).status)>0?`$${m(r.balance,r.total).status}`:`-$${Math.abs(Number(m(r.balance,r.total).status))}`),1))]),"item.actions":t(({item:r})=>[e(X,{onClick:ie=>F(r.id)},{default:t(()=>[e(G,{icon:"tabler-trash",size:"20"})]),_:2},1032,["onClick"]),e(X,{to:{name:"apps-invoice-preview-id",params:{id:r.id}}},{default:t(()=>[e(G,{icon:"tabler-eye",size:"20"})]),_:2},1032,["to"]),e(X,null,{default:t(()=>[e(G,{icon:"tabler-dots-vertical",size:"20"})]),_:1})]),bottom:t(()=>[e(ve,{page:a(h),"onUpdate:page":C[3]||(C[3]=r=>g(h)?h.value=r:null),"items-per-page":a(i),"total-items":a(M)},null,8,["page","items-per-page","total-items"])]),_:1},8,["modelValue","items-per-page","page","items-length","items"])]),_:1})):me("",!0)}}},At=l("div",{class:"mb-6"},[l("h3",{class:"text-body-1 text-high-emphasis font-weight-medium mb-1"}," Your Current Plan is Basic "),l("p",{class:"text-body-1"}," A simple start for everyone ")],-1),kt=l("div",{class:"mb-6"},[l("h3",{class:"text-body-1 text-high-emphasis font-weight-medium mb-1"}," Active until Dec 09, 2021 "),l("p",{class:"text-body-1"}," We will send you a notification upon Subscription expiration ")],-1),Tt={class:"text-body-1 text-high-emphasis font-weight-medium mb-1"},Dt=l("span",{class:"me-2"},"$199 Per Month",-1),St=l("p",{class:"text-base mb-0"}," Standard plan for small to medium businesses ",-1),Pt=l("span",null,"Your plan requires update",-1),$t={class:"d-flex font-weight-medium text-body-1 text-high-emphasis mt-6 mb-1"},It=l("span",null,"Days",-1),Mt=l("span",null,"12 of 30 Days",-1),Ut=l("p",{class:"text-body-2 mt-1 mb-0"}," 18 days remaining until your plan requires update ",-1),Gt={class:"d-flex flex-wrap gap-4"},Nt=l("h6",{class:"text-body-1 text-high-emphasis font-weight-medium mb-6"}," My Cards ",-1),zt={class:"d-flex flex-column gap-y-6"},Bt={class:"text-no-wrap"},Lt=["src"],Rt={class:"my-2 text-body-1 text-high-emphasis d-flex align-center"},Et={class:"me-4 font-weight-medium"},Ft={class:"text-body-1"},Ot={class:"d-flex flex-column text-sm-end"},Yt={class:"d-flex flex-wrap gap-4 order-sm-0 order-1"},jt={class:"text-body-2 my-4 order-sm-1 order-0"},Wt={__name:"AccountSettingsBillingAndPlans",setup(N){const b=p("credit-debit-atm-card"),_=p(!1),x=p(!1),d=p(!1),v=p(!1),i=[{name:"Tom McBride",number:"5531234567899856",expiry:"12/24",isPrimary:!0,type:"visa",cvv:"456",image:ze},{name:"Mildred Wagner",number:"4851234567895896",expiry:"10/27",isPrimary:!1,type:"mastercard",cvv:"123",image:Be}],h=["United States","Canada","United Kingdom","Australia","New Zealand","India","Russia","China","Japan"],I=p(),L=M=>{I.value=M,d.value=!0},z=p(0x7b5b5282deb5),P=p("john Doe"),D=p("05/24"),o=p(420),w=()=>{z.value=0x7b5b5282deb5,P.value="john Doe",D.value="05/24",o.value=420,b.value="credit-debit-atm-card"};return(M,m)=>{const n=ue,F=De,c=Z,C=ke,R=q;return V(),U(S,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(T,{title:"Current Plan"},{default:t(()=>[e(k,null,{default:t(()=>[e(S,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[l("div",null,[At,kt,l("div",null,[l("h3",Tt,[Dt,e(J,{color:"primary",size:"small",label:""},{default:t(()=>[u(" Popular ")]),_:1})]),St])])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(Ke,{icon:"tabler-alert-triangle",type:"warning",variant:"tonal"},{default:t(()=>[e(Je,{class:"mb-1"},{default:t(()=>[u(" We need your attention! ")]),_:1}),Pt]),_:1}),l("h6",$t,[It,e(ae),Mt]),e(Ve,{color:"primary",rounded:"","model-value":"15"}),Ut]),_:1}),e(s,{cols:"12"},{default:t(()=>[l("div",Gt,[e(A,{onClick:m[0]||(m[0]=f=>_.value=!0)},{default:t(()=>[u(" upgrade plan ")]),_:1}),e(A,{color:"error",variant:"tonal",onClick:m[1]||(m[1]=f=>x.value=!0)},{default:t(()=>[u(" Cancel Subscription ")]),_:1})])]),_:1})]),_:1}),e(n,{isDialogVisible:a(x),"onUpdate:isDialogVisible":m[2]||(m[2]=f=>g(x)?x.value=f:null),"confirmation-question":"Are you sure to cancel your subscription?","cancel-msg":"Unsubscription Cancelled!!","cancel-title":"Cancelled","confirm-msg":"Your subscription cancelled successfully.","confirm-title":"Unsubscribed!"},null,8,["isDialogVisible"]),e(F,{"is-dialog-visible":a(_),"onUpdate:isDialogVisible":m[3]||(m[3]=f=>g(_)?_.value=f:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(T,{title:"Payment Methods"},{default:t(()=>[e(k,null,{default:t(()=>[e(O,{onSubmit:j(()=>{},["prevent"])},{default:t(()=>[e(S,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(S,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(Ze,{modelValue:a(b),"onUpdate:modelValue":m[4]||(m[4]=f=>g(b)?b.value=f:null),inline:""},{default:t(()=>[e(re,{value:"credit-debit-atm-card",label:"Credit/Debit/ATM Card",color:"primary",class:"me-6"}),e(re,{value:"paypal-account",label:"Paypal account",color:"primary"})]),_:1},8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(S,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(c,{modelValue:a(z),"onUpdate:modelValue":m[5]||(m[5]=f=>g(z)?z.value=f:null),label:"Card Number",placeholder:"1234 1234 1234 1234",type:"number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(c,{modelValue:a(P),"onUpdate:modelValue":m[6]||(m[6]=f=>g(P)?P.value=f:null),label:"Name",placeholder:"John Doe"},null,8,["modelValue"])]),_:1}),e(s,{cols:"6",md:"3"},{default:t(()=>[e(c,{modelValue:a(D),"onUpdate:modelValue":m[7]||(m[7]=f=>g(D)?D.value=f:null),label:"Expiry Date",placeholder:"MM/YY"},null,8,["modelValue"])]),_:1}),e(s,{cols:"6",md:"3"},{default:t(()=>[e(c,{modelValue:a(o),"onUpdate:modelValue":m[8]||(m[8]=f=>g(o)?o.value=f:null),type:"number",label:"CVV Code",placeholder:"123"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(be,{modelValue:a(v),"onUpdate:modelValue":m[9]||(m[9]=f=>g(v)?v.value=f:null),density:"compact",label:"Save card for future billing?"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(A,{type:"submit"},{default:t(()=>[u(" Save changes ")]),_:1}),e(A,{color:"secondary",variant:"tonal",onClick:w},{default:t(()=>[u(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[Nt,l("div",zt,[(V(),$(B,null,E(i,f=>e(T,{key:f.name,flat:"",color:"rgba(var(--v-theme-on-surface),var(--v-hover-opacity))"},{default:t(()=>[e(k,{class:"d-flex flex-sm-row flex-column"},{default:t(()=>[l("div",Bt,[l("img",{src:f.image,height:"25"},null,8,Lt),l("h4",Rt,[l("div",Et,y(f.name),1),f.isPrimary?(V(),U(J,{key:0,label:"",color:"primary",size:"small"},{default:t(()=>[u(" Primary ")]),_:1})):me("",!0)]),l("div",Ft," **** **** **** "+y(f.number.substring(f.number.length-4)),1)]),e(ae),l("div",Ot,[l("div",Yt,[e(A,{variant:"tonal",size:"small",onClick:Q=>L(f)},{default:t(()=>[u(" Edit ")]),_:2},1032,["onClick"]),e(A,{color:"error",size:"small",variant:"tonal"},{default:t(()=>[u(" Delete ")]),_:1})]),l("span",jt,"Card expires at "+y(f.expiry),1)])]),_:2},1024)]),_:2},1024)),64))]),e(C,{isDialogVisible:a(d),"onUpdate:isDialogVisible":m[10]||(m[10]=f=>g(d)?d.value=f:null),"card-details":a(I)},null,8,["isDialogVisible","card-details"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(T,{title:"Billing Address"},{default:t(()=>[e(k,null,{default:t(()=>[e(O,{onSubmit:j(()=>{},["prevent"])},{default:t(()=>[e(S,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(c,{label:"Company Name",placeholder:"Pixinvent"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(c,{label:"Billing Email",placeholder:"pixinvent@email.com"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(c,{label:"Tax ID",placeholder:"123 123 1233"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(c,{label:"VAT Number",placeholder:"121212"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(c,{dirty:"",label:"Phone Number",type:"number",prefix:"US (+1)",placeholder:"+1 123 456 7890"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(R,{label:"Country",items:h,placeholder:"Select Country"})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(c,{label:"Billing Address",placeholder:"1234 Main St"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(c,{label:"State",placeholder:"New York"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(c,{label:"Zip Code",type:"number",placeholder:"100006"})]),_:1}),e(s,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(A,{type:"submit"},{default:t(()=>[u(" Save changes ")]),_:1}),e(A,{type:"reset",color:"secondary",variant:"tonal"},{default:t(()=>[u(" Discard ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(Ct)]),_:1})]),_:1})}}},qt=["src"],Ht={class:"text-h6"},Kt=["src"],Jt={class:"text-h6"},Zt=["href"],Qt={__name:"AccountSettingsConnections",setup(N){const b=p([{logo:Le,name:"Google",subtitle:"Calendar and contacts",connected:!0},{logo:Re,name:"Slack",subtitle:"Communication",connected:!1},{logo:Ee,name:"GitHub",subtitle:"Manage your Git repositories",connected:!0},{logo:Fe,name:"MailChimp",color:"yellow",subtitle:"Email marketing service",connected:!0},{logo:Oe,name:"Asana",subtitle:"Task management",connected:!1}]),_=p([{logo:Ye,name:"Facebook",connected:!1},{logo:je,name:"Twitter",links:{username:"@Pixinvent",link:"https://twitter.com/Pixinvents"},connected:!0},{logo:We,name:"LinkedIn",links:{username:"@Pixinvent",link:"https://in.linkedin.com/in/pixinvent-creative-studio-561a4713b"},connected:!0},{logo:qe,name:"Dribbble",connected:!1},{logo:He,name:"Behance",connected:!1}]);return(x,d)=>{const v=le("IconBtn");return V(),U(T,null,{default:t(()=>[e(S,null,{default:t(()=>[e(s,{cols:"12",md:"6",class:"pe-md-0 pb-0 pb-md-3"},{default:t(()=>[e(T,{title:"Connected Accounts",subtitle:"Display content from your connected accounts on your site",flat:""},{default:t(()=>[e(k,null,{default:t(()=>[e(oe,{class:"card-list"},{default:t(()=>[(V(!0),$(B,null,E(a(b),i=>(V(),U(ne,{key:i.logo},{prepend:t(()=>[e(W,{start:""},{default:t(()=>[l("img",{src:i.logo,height:"32"},null,8,qt)]),_:2},1024)]),append:t(()=>[e(ce,null,{default:t(()=>[e(be,{modelValue:i.connected,"onUpdate:modelValue":h=>i.connected=h,density:"compact",class:"me-1"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),default:t(()=>[e(de,null,{default:t(()=>[l("h6",Ht,y(i.name),1)]),_:2},1024),e(ee,{class:"text-xs"},{default:t(()=>[u(y(i.subtitle),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",md:"6",class:"ps-md-0 pt-0 pt-md-3"},{default:t(()=>[e(T,{title:"Social Accounts",subtitle:"Display content from social accounts on your site",flat:""},{default:t(()=>[e(k,null,{default:t(()=>[e(oe,{class:"card-list"},{default:t(()=>[(V(!0),$(B,null,E(a(_),i=>(V(),U(ne,{key:i.logo},{prepend:t(()=>[e(W,{rounded:"",start:""},{default:t(()=>[l("img",{src:i.logo,height:"32"},null,8,Kt)]),_:2},1024)]),append:t(()=>[e(ce,null,{default:t(()=>[e(v,{variant:"tonal",color:i.connected?"error":"secondary",class:"rounded"},{default:t(()=>[e(G,{size:"22",icon:i.connected?"tabler-trash":"tabler-link"},null,8,["icon"])]),_:2},1032,["color"])]),_:2},1024)]),default:t(()=>{var h;return[e(de,null,{default:t(()=>[l("h6",Jt,y(i.name),1)]),_:2},1024),(h=i.links)!=null&&h.link?(V(),U(ee,{key:0},{default:t(()=>{var I;return[l("a",{href:i.links.link,target:"_blank",rel:"noopener noreferrer"},y((I=i.links)==null?void 0:I.username),9,Zt)]}),_:2},1024)):(V(),U(ee,{key:1,class:"text-xs"},{default:t(()=>[u(" Not Connected ")]),_:1}))]}),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},Xt=l("p",{class:"text-body-1 mb-0"},[u(" We need permission from your browser to show notifications. "),l("span",{class:"text-primary cursor-pointer"},"Request Permission")],-1),el=l("thead",null,[l("tr",null,[l("th",{scope:"col"}," Type "),l("th",{scope:"col"}," EMAIL "),l("th",{scope:"col"}," BROWSER "),l("th",{scope:"col"}," App ")])],-1),tl={class:"text-body-1 text-high-emphasis"},ll=l("h6",{class:"text-body-1 font-weight-medium mb-6"}," When should we send you notifications? ",-1),al={class:"d-flex flex-wrap gap-4 mt-6"},ol={__name:"AccountSettingsNotification",setup(N){const b=p([{type:"New for you",email:!0,browser:!0,app:!0},{type:"Account activity",email:!0,browser:!0,app:!0},{type:"A new browser used to sign in",email:!0,browser:!0,app:!1},{type:"A new device is linked",email:!0,browser:!1,app:!1}]),_=p("Only when I'm online");return(x,d)=>{const v=q;return V(),U(T,null,{default:t(()=>[e(pe,null,{default:t(()=>[e(fe,null,{default:t(()=>[u("Recent Devices")]),_:1}),Xt]),_:1}),e(k,{class:"px-0"},{default:t(()=>[e(K),e(Qe,{class:"text-no-wrap rounded"},{default:t(()=>[el,l("tbody",null,[(V(!0),$(B,null,E(a(b),i=>(V(),$("tr",{key:i.type},[l("td",tl,y(i.type),1),l("td",null,[e(H,{modelValue:i.email,"onUpdate:modelValue":h=>i.email=h},null,8,["modelValue","onUpdate:modelValue"])]),l("td",null,[e(H,{modelValue:i.browser,"onUpdate:modelValue":h=>i.browser=h},null,8,["modelValue","onUpdate:modelValue"])]),l("td",null,[e(H,{modelValue:i.app,"onUpdate:modelValue":h=>i.app=h},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),e(K)]),_:1}),e(k,null,{default:t(()=>[e(O,{onSubmit:j(()=>{},["prevent"])},{default:t(()=>[ll,e(S,null,{default:t(()=>[e(s,{cols:"12",sm:"6"},{default:t(()=>[e(v,{modelValue:a(_),"onUpdate:modelValue":d[0]||(d[0]=i=>g(_)?_.value=i:null),mandatory:"",placeholder:"Select an option",items:["Only when I'm online","Anytime"]},null,8,["modelValue"])]),_:1})]),_:1}),l("div",al,[e(A,{type:"submit"},{default:t(()=>[u(" Save Changes ")]),_:1}),e(A,{color:"secondary",variant:"tonal",type:"reset"},{default:t(()=>[u(" Discard ")]),_:1})])]),_:1})]),_:1})]),_:1})}}},se=N=>(we("data-v-12ae4098"),N=N(),Ce(),N),nl=se(()=>l("h6",{class:"text-h6 text-medium-emphasis mb-4"}," Password Requirements: ",-1)),sl=se(()=>l("h5",{class:"text-h5 text-medium-emphasis mb-4"}," Two factor authentication is not enabled yet. ",-1)),il=se(()=>l("p",{class:"mb-6"},[u(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),l("a",{href:"javascript:void(0)",class:"text-decoration-none"},"Learn more.")],-1)),rl={class:"d-flex flex-column gap-y-2"},dl={class:"d-flex align-center flex-wrap"},cl={class:"text-h5 me-3"},ul={class:"d-flex align-center text-base font-weight-medium"},ml={class:"text-h6 text-medium-emphasis me-3"},pl={class:"cursor-pointer"},fl={class:"text-disabled"},_l={class:"d-flex"},bl={class:"text-high-emphasis text-body-1 font-weight-medium"},vl={__name:"AccountSettingsSecurity",setup(N){const b=p(!1),_=p(!1),x=p(!1),d=p(""),v=p(""),i=p(""),h=["Minimum 8 characters long - the more, the better","At least one lowercase character","At least one number, symbol, or whitespace character"],I=[{name:"Server Key 1",key:"23eaf7f0-f4f7-495e-8b86-fad3261282ac",createdOn:"28 Apr 2021, 18:20 GTM+4:10",permission:"Full Access"},{name:"Server Key 2",key:"bb98e571-a2e2-4de8-90a9-2e231b5e99",createdOn:"12 Feb 2021, 10:30 GTM+2:30",permission:"Read Only"},{name:"Server Key 3",key:"2e915e59-3105-47f2-8838-6e46bf83b711",createdOn:"28 Dec 2020, 12:21 GTM+4:10",permission:"Full Access"}],L=[{title:"BROWSER",key:"browser"},{title:"DEVICE",key:"device"},{title:"LOCATION",key:"location"},{title:"RECENT ACTIVITY",key:"recentActivity"}],z=[{browser:"Chrome on Windows",device:"HP Spectre 360",location:"New York, NY",recentActivity:"28 Apr 2022, 18:20",deviceIcon:{icon:"tabler-brand-windows",color:"primary"}},{browser:"Chrome on iPhone",device:"iPhone 12x",location:"Los Angeles, CA",recentActivity:"20 Apr 2022, 10:20",deviceIcon:{icon:"tabler-device-mobile",color:"error"}},{browser:"Chrome on Android",device:"Oneplus 9 Pro",location:"San Francisco, CA",recentActivity:"16 Apr 2022, 04:20",deviceIcon:{icon:"tabler-brand-android",color:"success"}},{browser:"Chrome on macOS",device:"Apple iMac",location:"New York, NY",recentActivity:"28 Apr 2022, 18:20",deviceIcon:{icon:"tabler-brand-apple",color:"secondary"}},{browser:"Chrome on Windows",device:"HP Spectre 360",location:"Los Angeles, CA",recentActivity:"20 Apr 2022, 10:20",deviceIcon:{icon:"tabler-brand-windows",color:"primary"}},{browser:"Chrome on Android",device:"Oneplus 9 Pro",location:"San Francisco, CA",recentActivity:"16 Apr 2022, 04:20",deviceIcon:{icon:"tabler-brand-android",color:"success"}}],P=p(!1);return(D,o)=>{const w=Z,M=q,m=Te;return V(),$(B,null,[e(S,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(T,{title:"Change Password"},{default:t(()=>[e(O,null,{default:t(()=>[e(k,{class:"pt-0"},{default:t(()=>[e(S,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{modelValue:a(d),"onUpdate:modelValue":o[0]||(o[0]=n=>g(d)?d.value=n:null),type:a(b)?"text":"password","append-inner-icon":a(b)?"tabler-eye-off":"tabler-eye",label:"Current Password",autocomplete:"on",placeholder:"············","onClick:appendInner":o[1]||(o[1]=n=>b.value=!a(b))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{modelValue:a(v),"onUpdate:modelValue":o[2]||(o[2]=n=>g(v)?v.value=n:null),type:a(_)?"text":"password","append-inner-icon":a(_)?"tabler-eye-off":"tabler-eye",label:"New Password",autocomplete:"on",placeholder:"············","onClick:appendInner":o[3]||(o[3]=n=>_.value=!a(_))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{modelValue:a(i),"onUpdate:modelValue":o[4]||(o[4]=n=>g(i)?i.value=n:null),type:a(x)?"text":"password","append-inner-icon":a(x)?"tabler-eye-off":"tabler-eye",label:"Confirm New Password",autocomplete:"on",placeholder:"············","onClick:appendInner":o[5]||(o[5]=n=>x.value=!a(x))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(k,null,{default:t(()=>[nl,e(oe,{class:"card-list"},{default:t(()=>[(V(),$(B,null,E(h,n=>e(ne,{key:n,title:n,class:"text-medium-emphasis"},{prepend:t(()=>[e(G,{size:"10",icon:"tabler-circle-filled"})]),_:2},1032,["title"])),64))]),_:1})]),_:1}),e(k,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(A,null,{default:t(()=>[u("Save changes")]),_:1}),e(A,{type:"reset",color:"secondary",variant:"tonal"},{default:t(()=>[u(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(T,{title:"Two-steps verification"},{default:t(()=>[e(k,null,{default:t(()=>[sl,il,e(A,{onClick:o[6]||(o[6]=n=>P.value=!0)},{default:t(()=>[u(" Enable two-factor authentication ")]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(T,{title:"Create an API key"},{default:t(()=>[e(S,{"no-gutters":""},{default:t(()=>[e(s,{cols:"12",md:"5","order-md":"0",order:"1"},{default:t(()=>[e(k,{class:"pt-1"},{default:t(()=>[e(O,{onSubmit:j(()=>{},["prevent"])},{default:t(()=>[e(S,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(M,{label:"Choose the API key type you want to create",placeholder:"Select API key type",items:["Full Control","Modify","Read & Execute","List Folder Contents","Read Only","Read & Write"]})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(w,{label:"Name the API key",placeholder:"Name the API key"})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(A,{type:"submit",block:""},{default:t(()=>[u(" Create Key ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",md:"7",order:"0","order-md":"1",class:"d-flex flex-column justify-center align-center"},{default:t(()=>[e(_e,{src:a(Xe),width:D.$vuetify.display.smAndDown?"150":"200",style:xe(D.$vuetify.display.smAndDown?"margin-block-end: 24px":"position: absolute; bottom: 0;")},null,8,["src","width","style"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(T,null,{default:t(()=>[e(pe,{class:"pb-4"},{default:t(()=>[e(fe,null,{default:t(()=>[u("API Key List & Access")]),_:1})]),_:1}),e(k,null,{default:t(()=>[u(" An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. ")]),_:1}),e(k,{class:"d-flex flex-column gap-y-6"},{default:t(()=>[(V(),$(B,null,E(I,n=>e(T,{key:n.key,flat:"",class:"pa-4",color:"rgba(var(--v-theme-on-surface),var(--v-hover-opacity))"},{default:t(()=>[l("div",rl,[l("div",dl,[l("h5",cl,y(n.name),1),e(J,{label:"",color:"primary",size:"small"},{default:t(()=>[u(y(n.permission),1)]),_:2},1024)]),l("div",ul,[l("h6",ml,y(n.key),1),l("div",pl,[e(G,{icon:"tabler-copy",size:"20"})])]),l("div",fl," Created on "+y(n.createdOn),1)])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(T,{title:"Recent Devices"},{default:t(()=>[e(K),e(tt,{headers:L,items:z,"hide-default-footer":"",class:"text-no-wrap"},{"item.browser":t(({item:n})=>[l("div",_l,[e(G,{start:"",size:"22",icon:n.deviceIcon.icon,color:n.deviceIcon.color},null,8,["icon","color"]),l("div",bl,y(n.browser),1)])]),bottom:t(()=>[]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{isDialogVisible:a(P),"onUpdate:isDialogVisible":o[7]||(o[7]=n=>g(P)?P.value=n:null)},null,8,["isDialogVisible"])],64)}}},yl=et(vl,[["__scopeId","data-v-12ae4098"]]),Sa={__name:"[tab]",setup(N){const b=Ae(),_=te({get:()=>b.params.tab,set:()=>b.params.tab}),x=[{title:"Account",icon:"tabler-users",tab:"account"},{title:"Security",icon:"tabler-lock",tab:"security"},{title:"Billing & Plans",icon:"tabler-file-text",tab:"billing-plans"},{title:"Notifications",icon:"tabler-bell",tab:"notification"},{title:"Connections",icon:"tabler-link",tab:"connection"}];return(d,v)=>(V(),$("div",null,[e(at,{modelValue:a(_),"onUpdate:modelValue":v[0]||(v[0]=i=>g(_)?_.value=i:null),class:"v-tabs-pill"},{default:t(()=>[(V(),$(B,null,E(x,i=>e(lt,{key:i.icon,value:i.tab,to:{name:"pages-account-settings-tab",params:{tab:i.tab}}},{default:t(()=>[e(G,{size:"20",start:"",icon:i.icon},null,8,["icon"]),u(" "+y(i.title),1)]),_:2},1032,["value","to"])),64))]),_:1},8,["modelValue"]),e(ot,{modelValue:a(_),"onUpdate:modelValue":v[1]||(v[1]=i=>g(_)?_.value=i:null),class:"mt-6 disable-tab-transition",touch:!1},{default:t(()=>[e(Y,{value:"account"},{default:t(()=>[e(ct)]),_:1}),e(Y,{value:"security"},{default:t(()=>[e(yl)]),_:1}),e(Y,{value:"billing-plans"},{default:t(()=>[e(Wt)]),_:1}),e(Y,{value:"notification"},{default:t(()=>[e(ol)]),_:1}),e(Y,{value:"connection"},{default:t(()=>[e(Qt)]),_:1})]),_:1},8,["modelValue"])]))}};export{Sa as default};
