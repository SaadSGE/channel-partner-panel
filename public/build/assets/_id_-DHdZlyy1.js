import{V as B}from"./VNodeRenderer-qWkdY1sq.js";import{j as $,r as h,ad as O,n as e,o as v,c as y,b as s,e as a,a3 as D,d as t,I as k,x as o,F as N,i as P,y as f,a7 as d,v as c}from"./main-kzKK1XE4.js";import{_ as R}from"./InvoiceAddPaymentDrawer-B84IiqHT.js";import{_ as A}from"./InvoiceSendInvoiceDrawer-BE6GxGHo.js";import{u as E}from"./useApi-BYt2Zzcz.js";import{V,a as b}from"./VRow-xJk10beR.js";import{V as q}from"./VAlert-CFyJdmRI.js";import{V as S}from"./VCard-DWOcblIG.js";import{V as j}from"./VTable-Bn8Sveon.js";import{V as C}from"./VDivider-BRvIS9W0.js";import{V as L}from"./VCardText-do432SKI.js";import"./AppTextarea-6cS45ZNa.js";import"./form-CvSQlg_q.js";/* empty css                   */import"./VCounter-4ZaRFOI2.js";import"./index-BlZJFp_B.js";import"./index-LtM8Y5gz.js";import"./VField-BVEdELyf.js";import"./easing-CjukEv2V.js";import"./VInput-D5j0P0kz.js";import"./forwardRefs-C-GTDzx5.js";import"./AppSelect-Caxo72fS.js";import"./VSelect-B-OkTK7V.js";import"./VTextField-D9hGg4NW.js";import"./VList-XkRzCeNh.js";import"./ssrBoot-vn9iu_kZ.js";import"./VAvatar-BVVy9Zei.js";import"./VImg-C74ZfjM4.js";import"./dialog-transition-BOcmMYsD.js";import"./VMenu-BVP4sHy0.js";import"./VOverlay-Y9TS9n9w.js";import"./lazy-Ko0eglkA.js";import"./scopeId-B2QFYqCu.js";import"./VCheckboxBtn-DO-m-uTG.js";import"./VSelectionControl-BVXMxy4r.js";import"./VChip-CUMWd3v2.js";import"./VSlideGroup-BnF1OZOC.js";import"./AppDateTimePicker-DsrC_JZZ.js";import"./AppTextField-BCvUXX3V.js";import"./AppDrawerHeaderSection-B1nNHHZY.js";import"./VSpacer-C0t0HYZC.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-CDYQlObX.js";import"./VForm-Bgr5kXKW.js";import"./VNavigationDrawer-DXNbk8u4.js";const U={key:0},W={class:"invoice-header-preview d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row bg-var-theme-background gap-6 rounded pa-6 mb-6"},F={class:"d-flex align-center app-logo mb-6"},M={class:"app-logo-title"},z=t("h6",{class:"text-h6 font-weight-regular"}," Office 149, 450 South Brand Brooklyn ",-1),G=t("h6",{class:"text-h6 font-weight-regular"}," San Diego County, CA 91905, USA ",-1),Y=t("h6",{class:"text-h6 font-weight-regular"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),H={class:"font-weight-medium text-lg mb-6"},J={class:"text-h6 font-weight-regular"},Q=t("span",null,"Date Issued: ",-1),K={class:"text-h6 font-weight-regular"},X=t("span",null,"Due Date: ",-1),Z=t("h6",{class:"text-h6 mb-4"}," Invoice To: ",-1),tt={class:"mb-0"},et={class:"mb-0"},st={class:"mb-0"},ot={class:"mb-0"},at={class:"mb-0"},nt=t("h6",{class:"text-h6 mb-4"}," Bill To: ",-1),lt=t("td",{class:"pe-4"}," Total Due: ",-1),it=t("td",{class:"pe-4"}," Bank Name: ",-1),rt=t("td",{class:"pe-4"}," Country: ",-1),ct=t("td",{class:"pe-4"}," IBAN: ",-1),dt=t("td",{class:"pe-4"}," SWIFT Code: ",-1),pt=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," ITEM "),t("th",{scope:"col"}," DESCRIPTION "),t("th",{scope:"col",class:"text-center"}," HOURS "),t("th",{scope:"col",class:"text-center"}," QTY "),t("th",{scope:"col",class:"text-center"}," TOTAL ")])],-1),mt={class:"text-base"},ut={class:"text-no-wrap"},_t={class:"text-no-wrap"},ht={class:"text-center"},ft={class:"text-center"},bt={class:"text-center"},wt={class:"d-flex justify-space-between flex-column flex-sm-row print-row"},xt=t("div",{class:"mb-2"},[t("div",{class:"d-flex align-center mb-1"},[t("h6",{class:"text-h6 me-2"}," Salesperson: "),t("span",null,"Jenny Parker")]),t("p",null,"Thanks for your business")],-1),vt={class:"w-100"},yt=t("td",{class:"pe-16"}," Subtotal: ",-1),gt=t("h6",{class:"text-base font-weight-medium"}," $1800 ",-1),Dt=[gt],kt=t("td",{class:"pe-16"}," Discount: ",-1),Vt=t("h6",{class:"text-base font-weight-medium"}," $28 ",-1),St=[Vt],Ct=t("td",{class:"pe-16"}," Tax: ",-1),Tt=t("h6",{class:"text-base font-weight-medium"}," 21% ",-1),It=[Tt],Bt={class:"w-100"},$t=t("td",{class:"pe-16"}," Total: ",-1),Ot=t("h6",{class:"text-base font-weight-medium"}," $1690 ",-1),Nt=[Ot],Pt=t("p",{class:"mb-0"},[t("span",{class:"text-high-emphasis font-weight-medium me-1"}," Note: "),t("span",null,"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!")],-1),Rt={class:"d-flex flex-wrap gap-4"},At={key:1},Ie={__name:"[id]",async setup(Et){let p,g;const w=$(),m=h(!1),u=h(!1),l=h(),r=h(),{data:x}=([p,g]=O(()=>E(`/apps/invoice/${Number(w.params.id)}`)),p=await p,g(),p);x.value&&(l.value=x.value.invoice,r.value=x.value.paymentDetails);const T=[{name:"Premium Branding Package",description:"Branding & Promotion",qty:1,hours:15,price:32},{name:"SMM",description:"Social media templates",qty:1,hours:14,price:28},{name:"Web Design",description:"Web designing package",qty:1,hours:12,price:24},{name:"SEO",description:"Search engine optimization",qty:1,hours:5,price:22}],I=()=>{window.print()};return(_,i)=>e(l)&&e(r)?(v(),y("section",U,[s(V,null,{default:a(()=>[s(b,{cols:"12",md:"9"},{default:a(()=>[s(S,{class:"invoice-preview-wrapper pa-6 pa-sm-12"},{default:a(()=>[t("div",W,[t("div",null,[t("div",F,[s(e(B),{nodes:e(k).app.logo},null,8,["nodes"]),t("h6",M,o(e(k).app.title),1)]),z,G,Y]),t("div",null,[t("h6",H," Invoice #"+o(e(l).id),1),t("h6",J,[Q,t("span",null,o(new Date(e(l).issuedDate).toLocaleDateString("en-GB")),1)]),t("h6",K,[X,t("span",null,o(new Date(e(l).dueDate).toLocaleDateString("en-GB")),1)])])]),s(V,{class:"print-row mb-6"},{default:a(()=>[s(b,{class:"text-no-wrap"},{default:a(()=>[Z,t("p",tt,o(e(l).client.name),1),t("p",et,o(e(l).client.company),1),t("p",st,o(e(l).client.address)+", "+o(e(l).client.country),1),t("p",ot,o(e(l).client.contact),1),t("p",at,o(e(l).client.companyEmail),1)]),_:1}),s(b,{class:"text-no-wrap"},{default:a(()=>[nt,t("table",null,[t("tbody",null,[t("tr",null,[lt,t("td",null,o(e(r).totalDue),1)]),t("tr",null,[it,t("td",null,o(e(r).bankName),1)]),t("tr",null,[rt,t("td",null,o(e(r).country),1)]),t("tr",null,[ct,t("td",null,o(e(r).iban),1)]),t("tr",null,[dt,t("td",null,o(e(r).swiftCode),1)])])])]),_:1})]),_:1}),s(j,{class:"invoice-preview-table border text-high-emphasis overflow-hidden mb-6"},{default:a(()=>[pt,t("tbody",mt,[(v(),y(N,null,P(T,n=>t("tr",{key:n.name},[t("td",ut,o(n.name),1),t("td",_t,o(n.description),1),t("td",ht,o(n.hours),1),t("td",ft,o(n.qty),1),t("td",bt," $"+o(n.price),1)])),64))])]),_:1}),t("div",wt,[xt,t("div",null,[t("table",vt,[t("tbody",null,[t("tr",null,[yt,t("td",{class:f(_.$vuetify.locale.isRtl?"text-start":"text-end")},Dt,2)]),t("tr",null,[kt,t("td",{class:f(_.$vuetify.locale.isRtl?"text-start":"text-end")},St,2)]),t("tr",null,[Ct,t("td",{class:f(_.$vuetify.locale.isRtl?"text-start":"text-end")},It,2)])])]),s(C,{class:"my-2"}),t("table",Bt,[t("tbody",null,[t("tr",null,[$t,t("td",{class:f(_.$vuetify.locale.isRtl?"text-start":"text-end")},Nt,2)])])])])]),s(C,{class:"my-6 border-dashed"}),Pt]),_:1})]),_:1}),s(b,{cols:"12",md:"3",class:"d-print-none"},{default:a(()=>[s(S,null,{default:a(()=>[s(L,null,{default:a(()=>[s(d,{block:"","prepend-icon":"tabler-send",class:"mb-4",onClick:i[0]||(i[0]=n=>u.value=!0)},{default:a(()=>[c(" Send Invoice ")]),_:1}),s(d,{block:"",color:"secondary",variant:"tonal",class:"mb-4"},{default:a(()=>[c(" Download ")]),_:1}),t("div",Rt,[s(d,{variant:"tonal",color:"secondary",class:"flex-grow-1",onClick:I},{default:a(()=>[c(" Print ")]),_:1}),s(d,{color:"secondary",variant:"tonal",class:"mb-4 flex-grow-1",to:{name:"apps-invoice-edit-id",params:{id:e(w).params.id}}},{default:a(()=>[c(" Edit ")]),_:1},8,["to"])]),s(d,{block:"","prepend-icon":"tabler-currency-dollar",color:"success",onClick:i[1]||(i[1]=n=>m.value=!0)},{default:a(()=>[c(" Add Payment ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(R,{isDrawerOpen:e(m),"onUpdate:isDrawerOpen":i[2]||(i[2]=n=>D(m)?m.value=n:null)},null,8,["isDrawerOpen"]),s(A,{isDrawerOpen:e(u),"onUpdate:isDrawerOpen":i[3]||(i[3]=n=>D(u)?u.value=n:null)},null,8,["isDrawerOpen"])])):(v(),y("section",At,[s(q,{type:"error",variant:"tonal"},{default:a(()=>[c(" Invoice with ID "+o(e(w).params.id)+" not found! ",1)]),_:1})]))}};export{Ie as default};
