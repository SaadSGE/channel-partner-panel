import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as f}from"./VCardText-BUwI9t0p.js";import{V as w,a as v}from"./VRadioGroup-DBSYUbci.js";import{V as N,a as O}from"./VAlert-BnzUAUtV.js";import{V as h,a as j}from"./VCard-BcVqdyFs.js";import{r as V,o as p,c as _,b as e,e as l,n as b,a3 as C,v as i,d as t,a7 as c,F as g,i as P,x,f as R,a as q,af as z,a1 as D,aF as B}from"./main-BpRJEuHK.js";import{_ as M}from"./AppSelect-CBPjddAQ.js";import{_ as L}from"./AppTextField-CsCrQe1Y.js";import{V as S}from"./VCheckbox-BU2fGb8D.js";import{V as U,a as d}from"./VRow-CxyAOmZF.js";import{V as T}from"./VTable-Q5t_aE-E.js";import{_ as F,a as K}from"./AddPaymentMethodDialog-Z1ssn72c.js";import{V as I}from"./VAvatar-D0wvyc7Y.js";import{V as Y}from"./VDivider-DAIZJBV6.js";import{V as W}from"./VChip-LYcLtKDw.js";import{V as H}from"./VMenu-Ckp8qSnu.js";import{V as G,a as J,b as Z}from"./VList-B5o8sxfn.js";import{V as k}from"./VSpacer-VYcFnFPF.js";import{V as Q,a as X}from"./VTabs-CWtOxu_U.js";import{V as ee,a as A}from"./VWindowItem-CiCmHKVf.js";import"./VSelectionControl-BUkLTX6n.js";import"./form-Bi2WLKdv.js";import"./VInput-DIhjK6jf.js";import"./index-Cfj6udwB.js";import"./index-D3x8Fsa3.js";import"./VImg-D8z1cghn.js";import"./VSelect-DCPFHZsW.js";import"./VTextField-DtwlNhTz.js";/* empty css                   */import"./VCounter-B4lWrRPd.js";import"./VField-Bp0x0750.js";import"./easing-CjukEv2V.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DvPyLqRv.js";import"./VOverlay-CCPASCnR.js";import"./lazy-Dh5Sv2fw.js";import"./scopeId-BznV2Det.js";import"./VCheckboxBtn-hm1yEHw9.js";/* empty css              */import"./DialogCloseBtn-DbO3XbWL.js";import"./american-express-CXyAY91m.js";import"./master-dark-CntEUc-b.js";import"./mastercard-uJg4wwnP.js";import"./visa-dark-ix33InJE.js";import"./visa-light-CUbHTc8-.js";import"./useGenerateImageVariant-8s_wOgte.js";import"./VDialog-DleDYQYl.js";import"./VSlideGroup-OyRAVAZl.js";import"./ssrBoot-Qrqdpyg_.js";const le={class:"d-flex justify-end gap-x-4"},te={__name:"SettingsCheckout",setup($){const u=V("Phone number"),n=V("Only require last name"),m=V("Don't include"),s=V("Optional"),r=V("Optional");return(a,o)=>(p(),_(g,null,[e(h,{title:"Customer contact method",subtitle:"Select what contact method customers use to check out.",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[e(w,{modelValue:b(u),"onUpdate:modelValue":o[0]||(o[0]=y=>C(u)?u.value=y:null),class:"mb-4"},{default:l(()=>[e(v,{label:"Phone number",value:"Phone number"}),e(v,{label:"Email",value:"Email"})]),_:1},8,["modelValue"]),e(N,{type:"info",variant:"tonal"},{default:l(()=>[e(O,{class:"mb-0"},{default:l(()=>[i(" To send SMS updates, you need to install an SMS App. ")]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{title:"Customer information",class:"mb-6"},{default:l(()=>[e(f,{class:"customer-info-card"},{default:l(()=>[e(w,{modelValue:b(n),"onUpdate:modelValue":o[1]||(o[1]=y=>C(n)?n.value=y:null),label:"Full name",class:"mb-4"},{default:l(()=>[e(v,{value:"Only require last name",label:"Only require last name"}),e(v,{value:"Require first and last name",label:"Require first and last name"})]),_:1},8,["modelValue"]),e(w,{modelValue:b(m),"onUpdate:modelValue":o[2]||(o[2]=y=>C(m)?m.value=y:null),label:"Company name",class:"mb-4"},{default:l(()=>[e(v,{value:"Don't include",label:"Don't include"}),e(v,{value:"Optional",label:"Optional"}),e(v,{value:"Required",label:"Required"})]),_:1},8,["modelValue"]),e(w,{modelValue:b(s),"onUpdate:modelValue":o[3]||(o[3]=y=>C(s)?s.value=y:null),label:"Address line 2 (apartment, unit, etc.)",class:"mb-4"},{default:l(()=>[e(v,{value:"Don't include",label:"Don't include"}),e(v,{value:"Optional",label:"Optional"}),e(v,{value:"Required",label:"Required"})]),_:1},8,["modelValue"]),e(w,{modelValue:b(r),"onUpdate:modelValue":o[4]||(o[4]=y=>C(r)?r.value=y:null),label:"Shipping address phone number",class:"mb-4"},{default:l(()=>[e(v,{value:"Don't include",label:"Don't include"}),e(v,{value:"Optional",label:"Optional"}),e(v,{value:"Required",label:"Required"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t("div",le,[e(c,{variant:"tonal",color:"secondary"},{default:l(()=>[i(" Discard ")]),_:1}),e(c,null,{default:l(()=>[i("Save Changes")]),_:1})])],64))}},ae=E(te,[["__scopeId","data-v-1e2b9f9d"]]),oe={class:"my-4"},ne={class:"d-flex justify-end gap-x-4 mt-6"},se={__name:"SettingsLocations",setup($){const u=V(!0);return(n,m)=>{const s=L,r=M;return p(),_("div",null,[e(h,{title:"Location Name",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[e(s,{label:"Location Name",placeholder:"Empire Hub"}),t("div",oe,[e(S,{modelValue:b(u),"onUpdate:modelValue":m[0]||(m[0]=a=>C(u)?u.value=a:null),label:"Fulfil online orders from this location"},null,8,["modelValue"])]),e(N,{type:"info",variant:"tonal"},{default:l(()=>[e(O,{class:"mb-0"},{default:l(()=>[i(" This is your default location. To change whether you fulfill online orders from this location, select another default location first. ")]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{title:"Address"},{default:l(()=>[e(f,null,{default:l(()=>[e(U,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(r,{label:"Country/religion",placeholder:"Select Country",items:["United States","UK","Canada"],"model-value":"United States"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"Address",placeholder:"123 , New Street"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"Apartment, suite, etc.",placeholder:"Empire Heights"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"Phone",placeholder:"+1 (234) 456-7890"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"City",placeholder:"New York"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"State",placeholder:"NY"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"PIN code",type:"number",placeholder:"123897"})]),_:1})]),_:1})]),_:1})]),_:1}),t("div",ne,[e(c,{variant:"tonal",color:"secondary"},{default:l(()=>[i(" Discard ")]),_:1}),e(c,null,{default:l(()=>[i("Save Changes")]),_:1})])])}}},de=t("h5",{class:"text-h5 mb-2"}," Customer ",-1),ie=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," TYPE "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," APP ")])],-1),re={width:"400px",class:"text-high-emphasis"},ue=t("h5",{class:"text-h5 mb-2"}," Orders ",-1),ce=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," TYPE "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," APP ")])],-1),me={width:"400px",class:"text-high-emphasis"},pe=t("h5",{class:"text-h5 mb-2"}," Shipping ",-1),_e=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," TYPE "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," APP ")])],-1),fe={width:"400px",class:"text-high-emphasis"},he={class:"d-flex justify-end gap-x-4"},be={__name:"SettingsNotifications",setup($){const u=V([{type:"New customer sign up",email:!0,app:!0},{type:"Customer account password reset",email:!0,app:!0},{type:"Customer account invite",email:!1,app:!1}]),n=V([{type:"Picked up",email:!0,app:!0},{type:"Shipping update ",email:!0,app:!1},{type:"Delivered",email:!1,app:!0}]),m=V([{type:"Order purchase",email:!0,app:!0},{type:"Order cancelled",email:!0,app:!1},{type:"Order refund request",email:!1,app:!0},{type:"Order confirmation",email:!0,app:!1},{type:"Payment error",email:!0,app:!1}]);return(s,r)=>(p(),_(g,null,[e(h,{class:"mb-4"},{default:l(()=>[e(f,null,{default:l(()=>[de,e(T,{class:"text-no-wrap mb-6 border rounded"},{default:l(()=>[ie,t("tbody",null,[(p(!0),_(g,null,P(b(u),a=>(p(),_("tr",{key:a.type},[t("td",re,x(a.type),1),t("td",null,[e(S,{modelValue:a.email,"onUpdate:modelValue":o=>a.email=o},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e(S,{modelValue:a.app,"onUpdate:modelValue":o=>a.app=o},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),ue,e(T,{class:"text-no-wrap mb-6 border rounded"},{default:l(()=>[ce,t("tbody",null,[(p(!0),_(g,null,P(b(m),a=>(p(),_("tr",{key:a.type},[t("td",me,x(a.type),1),t("td",null,[e(S,{modelValue:a.email,"onUpdate:modelValue":o=>a.email=o},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e(S,{modelValue:a.app,"onUpdate:modelValue":o=>a.app=o},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),pe,e(T,{class:"text-no-wrap mb-6 border rounded"},{default:l(()=>[_e,t("tbody",null,[(p(!0),_(g,null,P(b(n),a=>(p(),_("tr",{key:a.type},[t("td",fe,x(a.type),1),t("td",null,[e(S,{modelValue:a.email,"onUpdate:modelValue":o=>a.email=o},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e(S,{modelValue:a.app,"onUpdate:modelValue":o=>a.app=o},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1}),t("div",he,[e(c,{variant:"tonal",color:"secondary"},{default:l(()=>[i(" Discard ")]),_:1}),e(c,null,{default:l(()=>[i("Save Changes")]),_:1})])],64))}},ve="/build/assets/paypal-primary-JR2AHgCz.png",ye=t("div",{class:"text-body-1 mb-5"}," Providers that enable you to accept payment methods at a rate set by the third-party. An additional fee will apply to new orders once you select a plan. ",-1),Ve=t("h6",{class:"text-h6 mb-5"}," Default ",-1),ge={class:"my-class mb-5"},xe={class:"d-flex justify-space-between align-center mb-6"},Ce=["src"],Se={class:"d-flex justify-space-between flex-wrap mt-6 gap-4"},Pe=t("div",null,[t("div",{class:"text-body-2 mb-2",style:{"min-inline-size":"220px"}}," Provider "),t("h6",{class:"text-h6"}," PayPal ")],-1),$e=t("div",{class:"text-body-2 mb-2",style:{"min-inline-size":"220px"}}," Status ",-1),De=t("div",null,[t("div",{class:"text-body-2 mb-2",style:{"min-inline-size":"220px"}}," Transaction Fee "),t("h6",{class:"text-h6"}," 2.99% ")],-1),Ae=t("p",null,"Payments that are made outside your online store. When a customer selects a manual payment method such as cash on delivery, you'll need to approve their order before it can be fulfilled.",-1),Ue={class:"d-flex justify-end gap-x-4"},we={__name:"SettingsPayment",setup($){const u=V(!1),n=V(!1);return(m,s)=>{const r=F,a=K;return p(),_(g,null,[t("div",null,[e(h,{class:"mb-6",title:"Payment providers"},{default:l(()=>[e(f,null,{default:l(()=>[ye,e(c,{variant:"tonal",onClick:s[0]||(s[0]=o=>n.value=!n.value)},{default:l(()=>[i(" Choose a provider ")]),_:1})]),_:1})]),_:1}),e(h,{title:"Supported payment methods",subtitle:"Payment methods that are available with one of Vuexy's approved payment providers.",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[Ve,t("div",ge,[t("div",xe,[e(I,{variant:"elevated",color:"#fff",rounded:"",size:"36"},{default:l(()=>[t("img",{src:b(ve),height:"25"},null,8,Ce)]),_:1}),e(c,{variant:"text"},{default:l(()=>[i(" Activate PayPal ")]),_:1})]),e(Y),t("div",Se,[Pe,t("div",null,[$e,e(W,{color:"warning",size:"small",label:""},{default:l(()=>[i(" Inactive ")]),_:1})]),De])]),e(c,{variant:"tonal",onClick:s[1]||(s[1]=o=>u.value=!u.value)},{default:l(()=>[i(" Add Payment Methods ")]),_:1})]),_:1})]),_:1}),e(h,{title:"Manual payment methods",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[Ae,e(c,{variant:"tonal","append-icon":m.$vuetify.display.smAndUp?"tabler-chevron-down":""},{default:l(()=>[i(" Add Manual Payment Methods "),e(H,{activator:"parent"},{default:l(()=>[e(G,null,{default:l(()=>[(p(!0),_(g,null,P(["Create custom payment method","Bank Deposit","Money Order","Cash on Delivery(COD)"],(o,y)=>(p(),R(J,{key:y,value:y},{default:l(()=>[e(Z,null,{default:l(()=>[i(x(o),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["append-icon"])]),_:1})]),_:1}),t("div",Ue,[e(c,{color:"secondary",variant:"tonal"},{default:l(()=>[i(" Discard ")]),_:1}),e(c,{color:"primary"},{default:l(()=>[i(" save changes ")]),_:1})])]),e(r,{"is-dialog-visible":u.value,"onUpdate:isDialogVisible":s[2]||(s[2]=o=>u.value=o)},null,8,["is-dialog-visible"]),e(a,{"is-dialog-visible":n.value,"onUpdate:isDialogVisible":s[3]||(s[3]=o=>n.value=o)},null,8,["is-dialog-visible"])],64)}}},Te={class:"mb-6"},Ie={class:"d-flex flex-wrap align-center mb-4"},Ne=t("div",null,[t("h6",{class:"text-h6"}," Domestic "),t("div",{class:"text-body-2"}," United state of America ")],-1),Oe=t("thead",null,[t("tr",null,[t("th",null,"RATE NAME"),t("th",null,"CONDITION"),t("th",null,"PRICE"),t("th",null,"ACTIONS")])],-1),ke={class:"d-flex flex-wrap align-center mb-4"},Ee=t("div",null,[t("h6",{class:"text-h6"}," International "),t("div",{class:"text-body-2"}," United state of America ")],-1),Re=t("thead",null,[t("tr",null,[t("th",null,"RATE NAME"),t("th",null,"CONDITION"),t("th",null,"PRICE"),t("th",null,"ACTIONS")])],-1),Me={class:"d-flex justify-end gap-x-4"},Le={__name:"SettingsShippingAndDelivery",setup($){const u=[{rate:"Weight",condition:"5Kg-10Kg",price:"$9"},{rate:"VAT",condition:"12%",price:"$25"},{rate:"Duty",condition:"-",price:"-"}],n=[{rate:"Weight",condition:"5Kg-10Kg",price:"$9"},{rate:"VAT",condition:"12%",price:"$25"},{rate:"Duty",condition:"Japan",price:"$49"}];return(m,s)=>{const r=q("IconBtn");return p(),_(g,null,[e(h,{class:"mb-6"},{default:l(()=>[e(j,{title:"Shipping Zone",subtitle:"Choose where you ship and how much you charge for shipping at checkout."},{append:l(()=>[e(c,{variant:"text"},{default:l(()=>[i(" Create Zone ")]),_:1})]),_:1}),e(f,null,{default:l(()=>[t("div",Te,[t("div",Ie,[e(I,{image:b(z),size:"34",class:"me-2"},null,8,["image"]),Ne,e(k),t("div",null,[e(r,{color:"secondary"},{default:l(()=>[e(D,{icon:"tabler-pencil"})]),_:1}),e(r,{color:"secondary"},{default:l(()=>[e(D,{icon:"tabler-trash"})]),_:1})])]),e(T,{class:"mb-4 border rounded"},{default:l(()=>[Oe,t("tbody",null,[(p(),_(g,null,P(u,(a,o)=>t("tr",{key:o},[t("td",null,x(a.rate),1),t("td",null,x(a.condition),1),t("td",null,x(a.price),1),t("td",null,[e(r,null,{default:l(()=>[e(D,{icon:"tabler-dots-vertical"})]),_:1})])])),64))])]),_:1}),e(c,{variant:"tonal"},{default:l(()=>[i(" Add rate ")]),_:1})]),t("div",null,[t("div",ke,[e(I,{image:b(B),size:"30",class:"me-2"},null,8,["image"]),Ee,e(k),t("div",null,[e(r,{color:"secondary"},{default:l(()=>[e(D,{icon:"tabler-pencil"})]),_:1}),e(r,{color:"secondary"},{default:l(()=>[e(D,{icon:"tabler-trash"})]),_:1})])]),e(T,{class:"mb-4 border rounded"},{default:l(()=>[Re,t("tbody",null,[(p(),_(g,null,P(n,(a,o)=>t("tr",{key:o},[t("td",null,x(a.rate),1),t("td",null,x(a.condition),1),t("td",null,x(a.price),1),t("td",null,[e(r,null,{default:l(()=>[e(D,{icon:"tabler-dots-vertical"})]),_:1})])])),64))])]),_:1}),e(c,{variant:"tonal"},{default:l(()=>[i(" Add rate ")]),_:1})])]),_:1})]),_:1}),t("div",Me,[e(c,{variant:"tonal",color:"secondary"},{default:l(()=>[i(" Discard ")]),_:1}),e(c,null,{default:l(()=>[i("Save Changes")]),_:1})])],64)}}},je={},qe=t("div",{class:"v-card-title text-wrap"}," Time zone and units of measurement ",-1),ze=t("div",{class:"text-wrap"}," Used to calculate product prices, shipping weights, and order times. ",-1),Be=t("div",{class:"mt-2"}," Your order ID will appear as #1001, #1002, #1003 ... ",-1),Fe={class:"d-flex justify-end gap-x-4"};function Ke($,u){const n=L,m=M;return p(),_(g,null,[e(h,{title:"Profile",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[e(U,null,{default:l(()=>[e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Store name",placeholder:"Pixinvent"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Phone",placeholder:"+(123) 456-7890"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Store contact email",placeholder:"johndoe@email.com"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Sender email",placeholder:"johndoe@email.com"})]),_:1}),e(d,null,{default:l(()=>[e(N,{color:"warning",variant:"tonal",icon:"tabler-bell"},{default:l(()=>[e(O,{class:"mb-0"},{default:l(()=>[i(" Confirm that you have access to johndoe@gmail.com in sender email settings. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{title:"Billing Information",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[e(U,null,{default:l(()=>[e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Legal business name",placeholder:"Pixinvent"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Country/Region",items:["United States","Canada","UK"],placeholder:"Canada"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{placeholder:"126, New Street",label:"Address"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Apartment,suit, etc.",placeholder:"Empire Heights"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(n,{label:"City",placeholder:"New York"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(n,{label:"State",placeholder:"NY"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(n,{label:"PIN Code",placeholder:"111011"})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{class:"mb-6"},{title:l(()=>[qe]),subtitle:l(()=>[ze]),default:l(()=>[e(f,null,{default:l(()=>[e(U,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(m,{label:"Time zone",items:["(UTC-12:00) International Date Line West","(UTC-11:00) Coordinated Universal Time-11","(UTC-09:00) Alaska","(UTC-08:00) Baja California"],placeholder:"(UTC-12:00) International Date Line West"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Unit system",items:["Metric System","Imperial","International System"],placeholder:"Metric System"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Default weight unit",placeholder:"Kilogram",items:["Kilogram","Pounds","Gram"]})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{title:"Store currency",subtitle:"The currency your products are sold in.",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[e(m,{label:"Store currency",items:["USD","INR","Euro","Pound"],placeholder:"USD"})]),_:1})]),_:1}),e(h,{title:"Order id format",subtitle:"Shown on the Orders page, customer pages, and customer order notifications to identify orders.",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[e(U,null,{default:l(()=>[e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Prefix",prefix:"#"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Suffix",suffix:"$"})]),_:1})]),_:1}),Be]),_:1})]),_:1}),t("div",Fe,[e(c,{variant:"tonal",color:"secondary"},{default:l(()=>[i(" Discard ")]),_:1}),e(c,null,{default:l(()=>[i("Save Changes")]),_:1})])],64)}const Ye=E(je,[["render",Ke]]),We=t("h5",{class:"text-h5 mb-4"}," Getting Started ",-1),Bl={__name:"settings",setup($){const u=[{icon:"tabler-building-store",title:"Store Details"},{icon:"tabler-credit-card",title:"Payments"},{icon:"tabler-shopping-cart",title:"Checkout"},{icon:"tabler-discount",title:"Shipping & Delivery"},{icon:"tabler-map-pin",title:"Location"},{icon:"tabler-bell-ringing",title:"Notifications"}],n=V(null);return(m,s)=>(p(),R(U,null,{default:l(()=>[e(d,{cols:"12",md:"4"},{default:l(()=>[We,e(Q,{modelValue:b(n),"onUpdate:modelValue":s[0]||(s[0]=r=>C(n)?n.value=r:null),direction:"vertical",class:"v-tabs-pill disable-tab-transition"},{default:l(()=>[(p(),_(g,null,P(u,(r,a)=>e(X,{key:a,"prepend-icon":r.icon},{default:l(()=>[i(x(r.title),1)]),_:2},1032,["prepend-icon"])),64))]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"8"},{default:l(()=>[e(ee,{modelValue:b(n),"onUpdate:modelValue":s[1]||(s[1]=r=>C(n)?n.value=r:null),class:"disable-tab-transition",touch:!1},{default:l(()=>[e(A,null,{default:l(()=>[e(Ye)]),_:1}),e(A,null,{default:l(()=>[e(we)]),_:1}),e(A,null,{default:l(()=>[e(ae)]),_:1}),e(A,null,{default:l(()=>[e(Le)]),_:1}),e(A,null,{default:l(()=>[e(se)]),_:1}),e(A,null,{default:l(()=>[e(be)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};export{Bl as default};
