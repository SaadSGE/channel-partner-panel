import{_ as ie}from"./CustomRadiosWithIcon-CVWyGEpY.js";import{_ as $}from"./AppSelect-BKwH8iOE.js";import{_ as de}from"./AppTextarea-CV8wjH_S.js";import{_ as N}from"./AppTextField-5L6ZrvrS.js";import{r as m,o as F,f as T,e as l,d as p,b as e,v as x,a7 as w,n as t,c as j,F as oe,i as ne,y as M,K as ae,L as se,R as ce,U as pe,a6 as U,a3 as i,x as ue,a1 as Ve}from"./main-vt969jOT.js";import{_ as be}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as fe,V as re}from"./VCard-BWuxblAR.js";import{V as Ce}from"./VSpacer-8DhaBq0w.js";import{V as le}from"./VCardText-DAP1U9Q5.js";import{V as _,a as o}from"./VRow-BuOoUSOf.js";import{V as A}from"./VForm-DjHB6_TI.js";import{V as L}from"./VCheckbox-BCrFD-uY.js";import{V as D,a as R}from"./VRadioGroup-vX3OhfjI.js";import{V as S}from"./VDivider-E6LKNu6V.js";import{V as he,a as ve}from"./VList-BdRDtW0k.js";import{a as O,b as K,c as Q,V as xe}from"./VExpansionPanel-vz9GnxE-.js";import{V as ye}from"./form-DUOB9_Hh.js";import{V as X}from"./VTextField-C71Ro_6v.js";import{_ as _e}from"./AppDateTimePicker-DWC3wTcg.js";import{a as Z,V as we}from"./VTabs-DBDqADkV.js";import{V as Fe,a as ee}from"./VWindowItem--a5eHPau.js";import{r as E,e as ge}from"./validators-A2mcE8hH.js";import{_ as ke}from"./AppAutocomplete-CxGZDsTS.js";import{_ as Ae}from"./AppCardCode-7ZvHklaE.js";import"./VSelect-_-89dtUr.js";import"./forwardRefs-C-GTDzx5.js";import"./index-DWsrJnnF.js";import"./dialog-transition-Bjy6pRcT.js";import"./easing-CjukEv2V.js";import"./VMenu-BfQrpMvD.js";import"./VOverlay-DfIHkUI8.js";import"./lazy-CIHVLeF0.js";import"./scopeId-DLC1cN3c.js";import"./VCheckboxBtn-5OjfNikF.js";import"./VSelectionControl-DHh7iHR1.js";import"./VAvatar-B_WFcG2x.js";import"./VImg-Bh2q_8F2.js";import"./VChip-CVQzg_Gi.js";import"./index-VG46TLvn.js";import"./VSlideGroup-Dm1_H0s8.js";/* empty css                   */import"./VCounter-B6Oh3WPI.js";import"./VField-1csaSf-d.js";import"./VInput-OliC4xM8.js";/* empty css              */import"./ssrBoot-Cg72e95v.js";import"./helpers-hU9jE_IB.js";import"./filter-r1dY20YT.js";import"./vue3-perfect-scrollbar.esm-Bfnp5e_0.js";const I=g=>(ce("data-v-62f7ba2e"),g=g(),pe(),g),Te={class:"w-100 sticky-header overflow-hidden rounded-t"},Re={class:"d-flex align-center gap-4 flex-wrap bg-custom-background pa-6"},Ne=I(()=>p("h5",{class:"text-h5 mb-6"}," 1. Delivery Address ",-1)),Le=I(()=>p("p",{class:"text-high-emphasis text-base mb-1"}," Address Type ",-1)),Ie=I(()=>p("h5",{class:"text-h5 mb-6"}," 2. Delivery Type ",-1)),Se=I(()=>p("h5",{class:"text-h5 mb-6"}," 3. Apply Promo code ",-1)),Ue={class:"d-flex align-center gap-4"},Pe={class:"d-flex align-center gap-2 my-4"},De=I(()=>p("span",null,"OR",-1)),Be=I(()=>p("h5",{class:"text-h5 mb-6"}," 4. Payment Method ",-1)),ze=I(()=>p("p",null," Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ",-1)),Ee=I(()=>p("p",null,"You can pay cash or make the payment via debit/credit card directly to the delivery person.",-1)),Me=[ze,Ee],$e={__name:"DemoFormLayoutSticky",setup(g){const f=[{title:"Standard",desc:"Delivery in 3-5 days.",value:"standard",icon:{icon:"tabler-briefcase-2",size:"32"}},{title:"Express",desc:"Delivery within 2 days.",value:"express",icon:{icon:"tabler-rocket",size:"32"}},{title:"Overnight",desc:"Delivery within a days.",value:"overnight",icon:{icon:"tabler-crown",size:"32"}}],C=[{code:"TAKEITALL",desc:"Apply this code to get 15% discount on orders above 20$."},{code:"FESTIVE10",desc:"Apply this code to get 10% discount on all orders."},{code:"MYSTERYDEAL",desc:"Apply this code to get discount between 10% - 50%."}],s=m({fullName:"",email:"",contactNumber:null,altContactNumber:null,address:"",pincode:null,Landmark:"",city:"",state:null,defaultAddress:!1,addressType:"home",deliveryType:"overnight",promoCode:"",paymentMethod:"card",cardNumber:null,cardName:"",cardExDate:"",cardCvv:""});return(u,r)=>{const h=N,n=de,d=$,a=ie;return F(),T(re,{class:"overflow-visible"},{default:l(()=>[p("div",Te,[p("div",Re,[e(fe,null,{default:l(()=>[x("Sticky Action Bar")]),_:1}),e(Ce),p("div",null,[e(w,{variant:"tonal",class:"me-4"},{default:l(()=>[x(" Back ")]),_:1}),e(w,null,{default:l(()=>[x("Place Order")]),_:1})])])]),e(le,null,{default:l(()=>[e(_,null,{default:l(()=>[e(o,{md:"8",cols:"12",class:"mx-auto"},{default:l(()=>[e(A,null,{default:l(()=>[Ne,e(_,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:t(s).fullName,"onUpdate:modelValue":r[0]||(r[0]=c=>t(s).fullName=c),label:"Full Name",placeholder:"John Doe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:t(s).email,"onUpdate:modelValue":r[1]||(r[1]=c=>t(s).email=c),label:"Email",placeholder:"john.doe",suffix:"@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:t(s).contactNumber,"onUpdate:modelValue":r[2]||(r[2]=c=>t(s).contactNumber=c),label:"Contact Number",placeholder:"658 123 4567",type:"number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:t(s).altContactNumber,"onUpdate:modelValue":r[3]||(r[3]=c=>t(s).altContactNumber=c),label:"Alternate Number",placeholder:"658 123 4567",type:"number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:t(s).address,"onUpdate:modelValue":r[4]||(r[4]=c=>t(s).address=c),label:"Address",placeholder:"1456, Mall Road",rows:"2"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:t(s).pincode,"onUpdate:modelValue":r[5]||(r[5]=c=>t(s).pincode=c),label:"Pincode",placeholder:"658468",type:"number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:t(s).Landmark,"onUpdate:modelValue":r[6]||(r[6]=c=>t(s).Landmark=c),label:"Landmark",placeholder:"Nr. Wall Street"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:t(s).city,"onUpdate:modelValue":r[7]||(r[7]=c=>t(s).city=c),label:"City",placeholder:"Jackson"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:t(s).state,"onUpdate:modelValue":r[8]||(r[8]=c=>t(s).state=c),label:"State",placeholder:"Select State",items:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida"]},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(L,{modelValue:t(s).defaultAddress,"onUpdate:modelValue":r[9]||(r[9]=c=>t(s).defaultAddress=c),label:"Use this as default delivery address"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[Le,e(D,{modelValue:t(s).addressType,"onUpdate:modelValue":r[10]||(r[10]=c=>t(s).addressType=c),inline:""},{default:l(()=>[e(R,{label:"Home (All day delivery)",value:"home"}),e(R,{label:"Office (Delivery between 10 AM - 5 PM)",value:"work"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(S,{class:"my-4"}),Ie,e(a,{"selected-radio":t(s).deliveryType,"onUpdate:selectedRadio":r[11]||(r[11]=c=>t(s).deliveryType=c),"radio-content":f,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"]),e(S,{class:"my-4"}),Se,p("div",Ue,[e(h,{modelValue:t(s).promoCode,"onUpdate:modelValue":r[12]||(r[12]=c=>t(s).promoCode=c),placeholder:"TAKEITALL"},null,8,["modelValue"]),e(w,null,{default:l(()=>[x("Apply")]),_:1})]),p("div",Pe,[e(S,{style:{"border-style":"dashed"}}),De,e(S,{style:{"border-style":"dashed"}})]),e(he,{class:"border rounded py-0",lines:"two"},{default:l(()=>[(F(),j(oe,null,ne(C,(c,V)=>e(ve,{key:c.code,title:c.code,subtitle:c.desc,class:M(V!==0?"border-t":"")},{append:l(()=>[e(w,{variant:"tonal"},{default:l(()=>[x(" Apply ")]),_:1})]),_:2},1032,["title","subtitle","class"])),64))]),_:1}),e(S,{class:"my-4"}),Be,e(D,{modelValue:t(s).paymentMethod,"onUpdate:modelValue":r[13]||(r[13]=c=>t(s).paymentMethod=c),inline:"",class:"mb-4"},{default:l(()=>[e(R,{value:"card",label:"Credit/Debit/ATM Card"}),e(R,{value:"cash-on-delivery",label:"Cash On Delivery"})]),_:1},8,["modelValue"]),ae(e(_,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(h,{label:"Card Number",placeholder:"1356 3215 6548 7898"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{label:"Name",placeholder:"John Doe"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(h,{label:"Exp. Date",placeholder:"MM/YY"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(h,{label:"CVV Code",placeholder:"654"})]),_:1})]),_:1},512),[[se,t(s).paymentMethod==="card"]]),ae(p("div",null,Me,512),[[se,t(s).paymentMethod==="cash-on-delivery"]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},je=be($e,[["__scopeId","data-v-62f7ba2e"]]),qe=p("div",{class:"w-100"},[p("div",{class:"d-flex justify-space-between"},[p("h6",{class:"text-base font-weight-medium"}," Standard 3-5 Days "),p("h6",{class:"text-base font-weight-medium"}," Free ")]),p("span",{class:"text-sm"},"Friday, 15 Nov - Monday, 18 Nov")],-1),He=p("div",{class:"w-100"},[p("div",{class:"d-flex justify-space-between"},[p("h5",{class:"text-base font-weight-medium"}," Express "),p("h6",{class:"text-base font-weight-medium"}," $5.00 ")]),p("span",{class:"text-sm"},"Friday, 15 Nov - Sunday, 17 Nov")],-1),Je=p("div",{class:"w-100"},[p("div",{class:"d-flex justify-space-between"},[p("h6",{class:"text-base font-weight-medium"}," Overnight "),p("h6",{class:"text-base font-weight-medium"}," $10.00 ")]),p("span",{class:"text-sm"},"Friday, 15 Nov - Saturday, 16 Nov")],-1),We={class:"me-1"},Ye=p("div",{class:"text-high-emphasis"}," Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ",-1),Ge={class:"d-flex gap-4"},Oe={__name:"DemoFormLayoutCollapsible",setup(g){const f=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii"],C=m("home"),s=m("standard"),u=m("credit-debit-card"),r=m(0),h=[{radioValue:"credit-debit-card",radioLabel:"Credit/Debit/ATM Card",icon:"tabler-credit-card"},{radioValue:"cash-on-delivery",radioLabel:"Cash On Delivery",icon:"tabler-help"}];return(n,d)=>{const a=N,c=de,V=$;return F(),T(xe,{modelValue:t(r),"onUpdate:modelValue":d[6]||(d[6]=y=>i(r)?r.value=y:null)},{default:l(()=>[e(O,null,{default:l(()=>[e(K,null,{default:l(()=>[x("Delivery Address")]),_:1}),e(Q,null,{default:l(()=>[e(A,{class:"pt-4 pb-2",onSubmit:U(()=>{},["prevent"])},{default:l(()=>[e(_,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{label:"Full Name",placeholder:"John Doe"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{label:"Phone No",type:"number",placeholder:"+1 123 456 7890"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(c,{label:"Address",placeholder:"1234 Main St, New York, NY 10001, USA",rows:"3"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{label:"Pincode",placeholder:"123456",type:"number"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{label:"Landmark",placeholder:"Near City Mall"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{label:"City",placeholder:"New York"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(V,{items:f,label:"State",placeholder:"Select State"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(ye,{class:"mb-3"},{default:l(()=>[x(" Address Type ")]),_:1}),e(D,{modelValue:t(C),"onUpdate:modelValue":d[0]||(d[0]=y=>i(C)?C.value=y:null),inline:""},{default:l(()=>[p("div",null,[e(R,{label:"Home (All day delivery)",value:"home"}),e(R,{label:"Office (Delivery between 10 AM - 5 PM)",value:"office"})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(O,null,{default:l(()=>[e(K,null,{default:l(()=>[x("Delivery Options")]),_:1}),e(Q,null,{default:l(()=>[e(D,{modelValue:t(s),"onUpdate:modelValue":d[4]||(d[4]=y=>i(s)?s.value=y:null),class:"delivery-options pt-4 pb-2"},{default:l(()=>[p("div",{class:M(["delivery-option d-flex rounded-t",t(s)==="standard"?"active":""]),onClick:d[1]||(d[1]=y=>s.value="standard")},[e(R,{inline:"",value:"standard",class:"mt-n4"}),qe],2),p("div",{class:M(["delivery-option d-flex",t(s)==="express"?"active":""]),onClick:d[2]||(d[2]=y=>s.value="express")},[e(R,{inline:"",class:"mt-n4",value:"express"}),He],2),p("div",{class:M(["delivery-option d-flex rounded-b",t(s)==="overnight"?"active":""]),onClick:d[3]||(d[3]=y=>s.value="overnight")},[e(R,{inline:"",class:"mt-n4",value:"overnight"}),Je],2)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(O,null,{default:l(()=>[e(K,null,{default:l(()=>[x("Payment Method")]),_:1}),e(Q,null,{default:l(()=>[e(_,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(A,{class:"pt-4 pb-2"},{default:l(()=>[p("div",null,[e(D,{modelValue:t(u),"onUpdate:modelValue":d[5]||(d[5]=y=>i(u)?u.value=y:null),inline:""},{default:l(()=>[p("div",null,[(F(),j(oe,null,ne(h,y=>e(R,{key:y.radioValue,value:y.radioValue},{label:l(()=>[p("span",We,ue(y.radioLabel),1),e(Ve,{size:"18",icon:y.icon},null,8,["icon"])]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])]),t(u)==="credit-debit-card"?(F(),T(_,{key:0},{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(a,{label:"Card Number",type:"number",placeholder:"1234 5678 9012 3456"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(X,{label:"Name",placeholder:"john doe"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(X,{label:"Expiry Date",placeholder:"MM/YY"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(X,{label:"CVV Code",type:"number",max:"3",placeholder:"123"})]),_:1})]),_:1})):(F(),T(_,{key:1},{default:l(()=>[e(o,null,{default:l(()=>[Ye]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1}),e(S,{class:"my-5"}),p("div",Ge,[e(w,null,{default:l(()=>[x("Place Order")]),_:1}),e(w,{color:"secondary",variant:"tonal"},{default:l(()=>[x(" Cancel ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Ke={__name:"DemoFormLayoutFormWithTabs",setup(g){const f=m("personal-info"),C=m(""),s=m(""),u=m(),r=m(""),h=m(),n=["USA","Canada","UK","Denmark","Germany","Iceland","Israel","Mexico"],d=["English","German","French","Spanish","Portuguese","Russian","Korean"],a=m(""),c=m(""),V=m(""),y=m(""),P=m(""),q=m(""),H=m(""),J=m(""),W=m(""),Y=m(""),G=m([]),B=m(!1),z=m(!1);return(_l,b)=>{const k=N,te=$,me=_e;return F(),j(oe,null,[e(we,{modelValue:t(f),"onUpdate:modelValue":b[0]||(b[0]=v=>i(f)?f.value=v:null)},{default:l(()=>[e(Z,{value:"personal-info"},{default:l(()=>[x(" Personal Info ")]),_:1}),e(Z,{value:"account-details"},{default:l(()=>[x(" Account Details ")]),_:1}),e(Z,{value:"social-links"},{default:l(()=>[x(" Social Links ")]),_:1})]),_:1},8,["modelValue"]),e(re,{flat:""},{default:l(()=>[e(le,null,{default:l(()=>[e(Fe,{modelValue:t(f),"onUpdate:modelValue":b[19]||(b[19]=v=>i(f)?f.value=v:null),class:"disable-tab-transition"},{default:l(()=>[e(ee,{value:"personal-info"},{default:l(()=>[e(A,{class:"mt-2"},{default:l(()=>[e(_,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(k,{modelValue:t(C),"onUpdate:modelValue":b[1]||(b[1]=v=>i(C)?C.value=v:null),label:"First name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(o,{md:"6",cols:"12"},{default:l(()=>[e(k,{modelValue:t(s),"onUpdate:modelValue":b[2]||(b[2]=v=>i(s)?s.value=v:null),label:"Last name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(te,{modelValue:t(u),"onUpdate:modelValue":b[3]||(b[3]=v=>i(u)?u.value=v:null),items:n,label:"Country",placeholder:"Select Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(te,{modelValue:t(G),"onUpdate:modelValue":b[4]||(b[4]=v=>i(G)?G.value=v:null),items:d,multiple:"",chips:"",clearable:"",label:"Language",placeholder:"Select Language"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(me,{modelValue:t(r),"onUpdate:modelValue":b[5]||(b[5]=v=>i(r)?r.value=v:null),label:"Birth Date",placeholder:"Select Birth Date"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:t(h),"onUpdate:modelValue":b[6]||(b[6]=v=>i(h)?h.value=v:null),type:"number",label:"Phone No.",placeholder:"+1 123 456 7890"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(ee,{value:"account-details"},{default:l(()=>[e(A,{class:"mt-2"},{default:l(()=>[e(_,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:t(a),"onUpdate:modelValue":b[7]||(b[7]=v=>i(a)?a.value=v:null),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:t(c),"onUpdate:modelValue":b[8]||(b[8]=v=>i(c)?c.value=v:null),label:"Email",suffix:"@example.com",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:t(V),"onUpdate:modelValue":b[9]||(b[9]=v=>i(V)?V.value=v:null),label:"Password",placeholder:"············",type:t(B)?"text":"password","append-inner-icon":t(B)?"tabler-eye-off":"tabler-eye","onClick:appendInner":b[10]||(b[10]=v=>B.value=!t(B))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:t(y),"onUpdate:modelValue":b[11]||(b[11]=v=>i(y)?y.value=v:null),label:"Confirm Password",placeholder:"············",type:t(z)?"text":"password","append-inner-icon":t(z)?"tabler-eye-off":"tabler-eye","onClick:appendInner":b[12]||(b[12]=v=>z.value=!t(z))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(ee,{value:"social-links"},{default:l(()=>[e(A,{class:"mt-2"},{default:l(()=>[e(_,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:t(P),"onUpdate:modelValue":b[13]||(b[13]=v=>i(P)?P.value=v:null),label:"Twitter",placeholder:"https://twitter.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:t(q),"onUpdate:modelValue":b[14]||(b[14]=v=>i(q)?q.value=v:null),label:"Facebook",placeholder:"https://facebook.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:t(H),"onUpdate:modelValue":b[15]||(b[15]=v=>i(H)?H.value=v:null),label:"Google+",placeholder:"https://plus.google.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:t(J),"onUpdate:modelValue":b[16]||(b[16]=v=>i(J)?J.value=v:null),label:"LinkedIn",placeholder:"https://linkedin.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:t(W),"onUpdate:modelValue":b[17]||(b[17]=v=>i(W)?W.value=v:null),label:"Instagram",placeholder:"https://instagram.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:t(Y),"onUpdate:modelValue":b[18]||(b[18]=v=>i(Y)?Y.value=v:null),label:"Quora",placeholder:"https://quora.com/username"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(S),e(le,{class:"d-flex gap-4"},{default:l(()=>[e(w,null,{default:l(()=>[x("Submit")]),_:1}),e(w,{color:"secondary",variant:"tonal"},{default:l(()=>[x(" Cancel ")]),_:1})]),_:1})]),_:1})],64)}}},Qe={__name:"DemoFormLayoutFormValidation",setup(g){const f=m(""),C=m(""),s=["Item 1","Item 2","Item 3","Item 4"],u=m(),r=m(!1),h=m();return(n,d)=>{const a=N,c=$;return F(),T(A,{ref_key:"form",ref:h,"lazy-validation":""},{default:l(()=>[e(_,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(f),"onUpdate:modelValue":d[0]||(d[0]=V=>i(f)?f.value=V:null),rules:["requiredValidator"in n?n.requiredValidator:t(E)],label:"Name",placeholder:"John Doe",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(C),"onUpdate:modelValue":d[1]||(d[1]=V=>i(C)?C.value=V:null),rules:["emailValidator"in n?n.emailValidator:t(ge),"requiredValidator"in n?n.requiredValidator:t(E)],label:"E-mail",placeholder:"johndoe@email.com",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(c,{modelValue:t(u),"onUpdate:modelValue":d[2]||(d[2]=V=>i(u)?u.value=V:null),items:s,rules:["requiredValidator"in n?n.requiredValidator:t(E)],placeholder:"Select an Item",label:"Item",name:"select",require:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(L,{modelValue:t(r),"onUpdate:modelValue":d[3]||(d[3]=V=>i(r)?r.value=V:null),rules:["requiredValidator"in n?n.requiredValidator:t(E)],label:"Do you agree?",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(w,{color:"success",onClick:d[4]||(d[4]=V=>{var y;return(y=t(h))==null?void 0:y.validate()})},{default:l(()=>[x(" Validate ")]),_:1}),e(w,{color:"error",onClick:d[5]||(d[5]=V=>{var y;return(y=t(h))==null?void 0:y.reset()})},{default:l(()=>[x(" Reset Form ")]),_:1}),e(w,{color:"warning",onClick:d[6]||(d[6]=V=>{var y;return(y=t(h))==null?void 0:y.resetValidation()})},{default:l(()=>[x(" Reset Validation ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},Xe={__name:"DemoFormLayoutFormHint",setup(g){const f=m(""),C=m(""),s=m(),u=m(!1),r=["foo","bar","fizz","buzz"],h=m([]);return(n,d)=>{const a=N,c=ke;return F(),T(A,{onSubmit:U(()=>{},["prevent"])},{default:l(()=>[e(_,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(f),"onUpdate:modelValue":d[0]||(d[0]=V=>i(f)?f.value=V:null),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(C),"onUpdate:modelValue":d[1]||(d[1]=V=>i(C)?C.value=V:null),label:"Email",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(s),"onUpdate:modelValue":d[2]||(d[2]=V=>i(s)?s.value=V:null),label:"Password",autocomplete:"on",type:"password","persistent-hint":"",placeholder:"············",hint:"Your password must be 8-20 characters long."},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(c,{modelValue:t(h),"onUpdate:modelValue":d[3]||(d[3]=V=>i(h)?h.value=V:null),items:r,chips:"",multiple:"",label:"Autocomplete",placeholder:"Select"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(L,{modelValue:t(u),"onUpdate:modelValue":d[4]||(d[4]=V=>i(u)?u.value=V:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(w,{type:"submit"},{default:l(()=>[x(" Submit ")]),_:1}),e(w,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[x(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}},Ze={__name:"DemoFormLayoutMultipleColumn",setup(g){const f=m(""),C=m(""),s=m(""),u=m(""),r=m(""),h=m(""),n=m(!1);return(d,a)=>{const c=N;return F(),T(A,{onSubmit:U(()=>{},["prevent"])},{default:l(()=>[e(_,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:t(f),"onUpdate:modelValue":a[0]||(a[0]=V=>i(f)?f.value=V:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:t(C),"onUpdate:modelValue":a[1]||(a[1]=V=>i(C)?C.value=V:null),label:"Last Name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:t(h),"onUpdate:modelValue":a[2]||(a[2]=V=>i(h)?h.value=V:null),label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:t(s),"onUpdate:modelValue":a[3]||(a[3]=V=>i(s)?s.value=V:null),label:"City",placeholder:"New York"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:t(u),"onUpdate:modelValue":a[4]||(a[4]=V=>i(u)?u.value=V:null),label:"Country",placeholder:"United States"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:t(r),"onUpdate:modelValue":a[5]||(a[5]=V=>i(r)?r.value=V:null),label:"Company",placeholder:"Pixinvent"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(L,{modelValue:t(n),"onUpdate:modelValue":a[6]||(a[6]=V=>i(n)?n.value=V:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(w,{type:"submit"},{default:l(()=>[x(" Submit ")]),_:1}),e(w,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[x(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}},el={__name:"DemoFormLayoutVerticalFormWithIcons",setup(g){const f=m(""),C=m(""),s=m(),u=m(),r=m(!1);return(h,n)=>{const d=N;return F(),T(A,{onSubmit:U(a=>({}),["prevent"])},{default:l(()=>[e(_,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(d,{modelValue:t(f),"onUpdate:modelValue":n[0]||(n[0]=a=>i(f)?f.value=a:null),"prepend-inner-icon":"tabler-user",label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(d,{modelValue:t(C),"onUpdate:modelValue":n[1]||(n[1]=a=>i(C)?C.value=a:null),"prepend-inner-icon":"tabler-mail",label:"Email",type:"email",placeholder:"johndoe@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(d,{modelValue:t(s),"onUpdate:modelValue":n[2]||(n[2]=a=>i(s)?s.value=a:null),"prepend-inner-icon":"tabler-device-mobile",label:"Mobile",placeholder:"+1 123 456 7890",type:"number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(d,{modelValue:t(u),"onUpdate:modelValue":n[3]||(n[3]=a=>i(u)?u.value=a:null),"prepend-inner-icon":"tabler-lock",label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(L,{modelValue:t(r),"onUpdate:modelValue":n[4]||(n[4]=a=>i(r)?r.value=a:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(w,{type:"submit",class:"me-2"},{default:l(()=>[x(" Submit ")]),_:1}),e(w,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[x(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}},ll={__name:"DemoFormLayoutVerticalForm",setup(g){const f=m(""),C=m(""),s=m(),u=m(),r=m(!1);return(h,n)=>{const d=N;return F(),T(A,{onSubmit:U(()=>{},["prevent"])},{default:l(()=>[e(_,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(d,{modelValue:t(f),"onUpdate:modelValue":n[0]||(n[0]=a=>i(f)?f.value=a:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(d,{modelValue:t(C),"onUpdate:modelValue":n[1]||(n[1]=a=>i(C)?C.value=a:null),label:"Email",type:"email",placeholder:"johndoe@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(d,{modelValue:t(s),"onUpdate:modelValue":n[2]||(n[2]=a=>i(s)?s.value=a:null),label:"Mobile",placeholder:"+1 123 456 7890",type:"number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(d,{modelValue:t(u),"onUpdate:modelValue":n[3]||(n[3]=a=>i(u)?u.value=a:null),label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(L,{modelValue:t(r),"onUpdate:modelValue":n[4]||(n[4]=a=>i(r)?r.value=a:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(w,{type:"submit"},{default:l(()=>[x(" Submit ")]),_:1}),e(w,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[x(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}},ol=p("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstNameHorizontalIcons"},"First Name",-1),tl=p("label",{class:"v-label text-body-2 text-high-emphasis",for:"emailHorizontalIcons"},"Email",-1),al=p("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobileHorizontalIcons"},"Mobile",-1),sl=p("label",{class:"v-label text-body-2 text-high-emphasis",for:"passwordHorizontalIcons"},"Password",-1),dl={__name:"DemoFormLayoutHorizontalFormWithIcons",setup(g){const f=m(""),C=m(""),s=m(),u=m(),r=m(!1);return(h,n)=>{const d=N;return F(),T(A,{onSubmit:U(()=>{},["prevent"])},{default:l(()=>[e(_,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(_,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[ol]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"firstNameHorizontalIcons",modelValue:t(f),"onUpdate:modelValue":n[0]||(n[0]=a=>i(f)?f.value=a:null),"prepend-inner-icon":"tabler-user",placeholder:"John","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(_,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[tl]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"emailHorizontalIcons",modelValue:t(C),"onUpdate:modelValue":n[1]||(n[1]=a=>i(C)?C.value=a:null),"prepend-inner-icon":"tabler-mail",placeholder:"johndoe@email.com","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(_,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[al]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"mobileHorizontalIcons",modelValue:t(s),"onUpdate:modelValue":n[2]||(n[2]=a=>i(s)?s.value=a:null),type:"number","prepend-inner-icon":"tabler-device-mobile",placeholder:"+1 123 456 7890","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(_,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[sl]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"passwordHorizontalIcons",modelValue:t(u),"onUpdate:modelValue":n[3]||(n[3]=a=>i(u)?u.value=a:null),"prepend-inner-icon":"tabler-lock",autocomplete:"on",type:"password",placeholder:"············","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"px-2"},{default:l(()=>[e(L,{modelValue:t(r),"onUpdate:modelValue":n[4]||(n[4]=a=>i(r)?r.value=a:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(w,{type:"submit"},{default:l(()=>[x(" Submit ")]),_:1}),e(w,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[x(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}},nl=p("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstName"},"First Name",-1),rl=p("label",{class:"v-label text-body-2 text-high-emphasis",for:"email"},"Email",-1),ml=p("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobile"},"Mobile",-1),il=p("label",{class:"v-label text-body-2 text-high-emphasis",for:"password"},"Password",-1),cl={__name:"DemoFormLayoutHorizontalForm",setup(g){const f=m(""),C=m(""),s=m(),u=m(),r=m(!1);return(h,n)=>{const d=N;return F(),T(A,{onSubmit:U(()=>{},["prevent"])},{default:l(()=>[e(_,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(_,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[nl]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"firstName",modelValue:t(f),"onUpdate:modelValue":n[0]||(n[0]=a=>i(f)?f.value=a:null),placeholder:"John","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(_,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[rl]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"email",modelValue:t(C),"onUpdate:modelValue":n[1]||(n[1]=a=>i(C)?C.value=a:null),placeholder:"johndoe@email.com","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(_,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[ml]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"mobile",modelValue:t(s),"onUpdate:modelValue":n[2]||(n[2]=a=>i(s)?s.value=a:null),type:"number",placeholder:"+1 123 456 7890","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(_,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[il]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"password",modelValue:t(u),"onUpdate:modelValue":n[3]||(n[3]=a=>i(u)?u.value=a:null),autocomplete:"on",type:"password",placeholder:"············","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"px-2"},{default:l(()=>[e(L,{modelValue:t(r),"onUpdate:modelValue":n[4]||(n[4]=a=>i(r)?r.value=a:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(w,{type:"submit"},{default:l(()=>[x(" Submit ")]),_:1}),e(w,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[x(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}},pl={ts:`<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          persistent-hint
          placeholder="············"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
          placeholder="Select"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          persistent-hint
          placeholder="············"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
          placeholder="Select"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ul={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          placeholder="John Doe"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          placeholder="johndoe@email.com"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="Select an Item"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          placeholder="John Doe"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          placeholder="johndoe@email.com"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="Select an Item"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Vl={ts:`<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},bl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="px-2"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="px-2"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},fl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="px-2"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="px-2"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Cl={ts:`<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="New York"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="United States"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Pixinvent"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="New York"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="United States"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Pixinvent"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},hl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},vl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},xl=p("h6",{class:"text-h6 mb-6"}," Collapsible Section ",-1),yl=p("h6",{class:"text-h6 mb-6"}," Sticky Section ",-1),vo={__name:"form-layouts",setup(g){return(f,C)=>{const s=cl,u=Ae,r=dl,h=ll,n=el,d=Ze,a=Xe,c=Qe,V=Ke,y=Oe,P=je;return F(),j("div",null,[e(_,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(u,{title:"Horizontal Form",code:bl},{default:l(()=>[e(s)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(u,{title:"Horizontal Form with Icons",code:fl},{default:l(()=>[e(r)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(u,{title:"Vertical Form",code:hl},{default:l(()=>[e(h)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(u,{title:"Vertical Form with Icons",code:vl},{default:l(()=>[e(n)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(u,{title:"Multiple Column",code:Cl},{default:l(()=>[e(d)]),_:1},8,["code"])]),_:1})]),_:1}),e(_,{class:"match-height my-3"},{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(u,{title:"Form Hint",code:pl},{default:l(()=>[e(a)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(u,{title:"Form Validation",code:ul},{default:l(()=>[e(c)]),_:1},8,["code"])]),_:1})]),_:1}),e(_,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(u,{title:"Form with Tabs","no-padding":"",code:Vl},{default:l(()=>[e(V)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[xl,e(y)]),_:1}),e(o,{cols:"12"},{default:l(()=>[yl,e(P)]),_:1})]),_:1})])}}};export{vo as default};
