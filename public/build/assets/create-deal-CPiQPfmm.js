import{_ as B}from"./AppStepper-DBISmADn.js";import{_ as I}from"./AppDateTimePicker-B-lRXrlO.js";import{_ as A}from"./AppSelect-DVrK7h8K.js";import{_ as R}from"./AppTextarea-ByDOsXo4.js";import{_ as S}from"./AppTextField-cZdEbA_N.js";import{V as D,a as d}from"./VRow-jDTGyzOx.js";import{V as v}from"./VCheckbox-CqLsD_A8.js";import{V as P}from"./VForm-DFIfHyTm.js";import{r as g,w as U,o as _,f as b,e as a,b as e,n as t,d as s,v as y,c as N,aj as O,y as z,a3 as T,a7 as x,a1 as $}from"./main-0xwlEiGX.js";import{V as j}from"./VChip-BB-vy8Yz.js";import{V as F}from"./VSwitch-BQWF9PLC.js";import{V as k}from"./VImg-BG4xnC5-.js";import{_ as E}from"./CustomRadiosWithIcon-CkvybVM7.js";import{u as L}from"./useGenerateImageVariant-DvejVTEF.js";import{s as W}from"./sitting-girl-with-laptop-CNJqEmDN.js";import{c as q}from"./Check-C5FXWFBn.js";import{d as G}from"./Diamond-BSuz62Nl.js";import{V as Y}from"./VCard-CB6wSISi.js";import{V as M}from"./VCardText-Fl_VNXuW.js";import{V as K,a as C}from"./VWindowItem-BdA1-wzY.js";import"./VSlideGroupItem-DauScI91.js";import"./VSlideGroup-Bd5KFLyZ.js";import"./index-qJYA1wi-.js";import"./VAvatar-DSEBzUti.js";import"./VField-CdORDiCe.js";import"./form-tHQ3ONH_.js";import"./easing-CjukEv2V.js";import"./VInput-DiUmufv5.js";import"./index-8vuZJrvj.js";import"./VSelect-lOzMAnqr.js";import"./VTextField-HbhbIpkm.js";/* empty css                   */import"./VCounter-D3ZUUh6O.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-BY6Z6w6f.js";import"./ssrBoot-Dr6OBUHk.js";import"./VDivider-Dq1ILL5h.js";import"./dialog-transition-BQ1-GeCr.js";import"./VMenu-C3y8YuAg.js";import"./VOverlay-JtG0veL-.js";import"./lazy-I-XFqQUQ.js";import"./scopeId-ClHLQny1.js";import"./VCheckboxBtn-DPm2uuzH.js";import"./VSelectionControl-D3be63WJ.js";/* empty css              */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VRadioGroup-C9Kt5xo6.js";const X=s("h6",{class:"text-body-2 text-high-emphasis mb-2"}," Notify Users ",-1),H={class:"d-flex align-center flex-wrap gap-x-3"},J={__name:"DealDetails",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(f,{emit:c}){const m=f,u=c,l=g(m.formData),V=["iPhone 12 Pro Max","iPhone 12 Pro","iPhone 11 Pro Max","iPhone 11","iPhone 12 Mini","OnePlus Nord CE"];return U(l,()=>{u("update:formData",l.value)}),(o,n)=>{const i=S,p=R,h=A,w=I;return _(),b(P,null,{default:a(()=>[e(D,null,{default:a(()=>[e(d,{cols:"12",sm:"6"},{default:a(()=>[e(i,{modelValue:t(l).title,"onUpdate:modelValue":n[0]||(n[0]=r=>t(l).title=r),label:"Deal Title",placeholder:"Black Friday Sale, 50% off on all products"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(i,{modelValue:t(l).code,"onUpdate:modelValue":n[1]||(n[1]=r=>t(l).code=r),label:"Deal Code",placeholder:"BLACKFRIDAY50"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(p,{modelValue:t(l).description,"onUpdate:modelValue":n[2]||(n[2]=r=>t(l).description=r),label:"Deal Description",placeholder:"Write something about this deal",rows:"5","auto-grow":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(D,null,{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(h,{modelValue:t(l).offeredUItems,"onUpdate:modelValue":n[3]||(n[3]=r=>t(l).offeredUItems=r),multiple:"",chips:"",label:"Offered Items",placeholder:"Select Offered Items",items:V},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(h,{modelValue:t(l).cartCondition,"onUpdate:modelValue":n[4]||(n[4]=r=>t(l).cartCondition=r),label:"Cart Condition",placeholder:"Select Cart Condition",items:["Cart must contain all selected Downloads","Cart needs one or more of the selected Downloads"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(w,{modelValue:t(l).dealDuration,"onUpdate:modelValue":n[5]||(n[5]=r=>t(l).dealDuration=r),label:"Deal Duration",placeholder:"Select Date Range",config:{mode:"range"}},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[X,s("div",H,[e(v,{modelValue:t(l).notification.email,"onUpdate:modelValue":n[6]||(n[6]=r=>t(l).notification.email=r),label:"Email",value:"email"},null,8,["modelValue"]),e(v,{modelValue:t(l).notification.sms,"onUpdate:modelValue":n[7]||(n[7]=r=>t(l).notification.sms=r),label:"SMS",value:"sms"},null,8,["modelValue"]),e(v,{modelValue:t(l).notification.pushNotification,"onUpdate:modelValue":n[8]||(n[8]=r=>t(l).notification.pushNotification=r),label:"Push Notification",value:"push-notification"},null,8,["modelValue"])])]),_:1})]),_:1})]),_:1})}}},Q="/build/assets/standingGirlImg-D4XlyY_n.png",Z=s("h4",{class:"text-h4 mb-4"}," Almost done! 🚀 ",-1),ee=s("p",null,"Confirm your deal details information and submit to create it.",-1),te={class:"text-base"},le=s("tr",null,[s("td",{style:{"inline-size":"150px"}},[s("p",{class:"font-weight-medium mb-2"}," Deal Type ")]),s("td",null,[s("p",{class:"mb-2"}," Percentage ")])],-1),oe=s("tr",null,[s("td",null,[s("p",{class:"font-weight-medium mb-2"}," Amount ")]),s("td",null,[s("p",{class:"mb-2"}," 25% ")])],-1),ae=s("td",null,[s("p",{class:"font-weight-medium mb-2"}," Deal Code ")],-1),se={class:"mb-2"},ne=s("tr",null,[s("td",null,[s("p",{class:"font-weight-medium mb-2"}," Deal Title ")]),s("td",null,[s("p",{class:"mb-2"}," Black friday sale, 25% OFF ")])],-1),ie=s("tr",null,[s("td",null,[s("p",{class:"font-weight-medium mb-2"}," Deal Duration ")]),s("td",null,[s("p",{class:"mb-2"}," 2021-07-14 to 2021-07-30 ")])],-1),re={class:"border rounded pa-4 pb-0"},de={__name:"DealReviewComplete",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(f,{emit:c}){const m=f,u=c,l=g(m.formData);return U(l,()=>{u("update:formData",l.value)}),(V,o)=>(_(),b(D,null,{default:a(()=>[e(d,{cols:"12",md:"6",class:"pb-4 pb-sm-0"},{default:a(()=>[Z,ee,s("table",te,[le,oe,s("tr",null,[ae,s("td",null,[s("p",se,[e(j,{size:"small",color:"warning",label:""},{default:a(()=>[y(" 25PEROFF ")]),_:1})])])]),ne,ie]),e(F,{modelValue:t(l).isDealDetailsConfirmed,"onUpdate:modelValue":o[0]||(o[0]=n=>t(l).isDealDetailsConfirmed=n),label:"I have confirmed the deal details.",class:"mb-3"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:a(()=>[s("div",re,[e(k,{width:"207",src:t(Q),class:"mx-auto flip-in-rtl"},null,8,["src"])])]),_:1})]),_:1}))}},me="/build/assets/DealTypeBackground-dark-BPiBufkA.png",ue="/build/assets/DealTypeBackground-light-jC2nuw-r.png",pe={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 41 40"},ce=O('<g opacity=".2"><path fill="currentColor" d="M4 15.14h32.5V30a1.25 1.25 0 0 1-1.25 1.25h-30A1.25 1.25 0 0 1 4 30z"></path><path fill="#fff" fill-opacity=".2" d="M4 15.14h32.5V30a1.25 1.25 0 0 1-1.25 1.25h-30A1.25 1.25 0 0 1 4 30z"></path></g><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26.5 26.25h5m-12.5 0h2.5M4 15.14h32.5M5.25 8.75h30c.69 0 1.25.56 1.25 1.25v20c0 .69-.56 1.25-1.25 1.25h-30C4.56 31.25 4 30.69 4 30V10c0-.69.56-1.25 1.25-1.25"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".2" stroke-width="2" d="M26.5 26.25h5m-12.5 0h2.5M4 15.14h32.5M5.25 8.75h30c.69 0 1.25.56 1.25 1.25v20c0 .69-.56 1.25-1.25 1.25h-30C4.56 31.25 4 30.69 4 30V10c0-.69.56-1.25 1.25-1.25"></path>',3),fe=[ce];function _e(f,c){return _(),N("svg",pe,[...fe])}const Ve={render:_e},be={class:"d-flex align-center justify-center w-100 deal-type-image-wrapper border rounded px-5 pt-2 pb-5"},De={__name:"DealType",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(f,{emit:c}){const m=f,u=c,l=L(ue,me),V=[{icon:{icon:q,size:"28"},title:"Percentage",desc:"Create a deal which offer uses some % off (i.e 5% OFF) on total.",value:"percentage"},{icon:{icon:Ve,size:"28"},title:"Flat Amount",desc:"Create a deal which offer uses some flat amount (i.e $5 OFF) on total.",value:"flat"},{icon:{icon:G,size:"28"},title:"Prime member",desc:"Create prime member only deal to encourage the prime members.",value:"prime"}],o=g(m.formData);return U(o,()=>{u("update:formData",o.value)}),(n,i)=>{const p=E,h=S,w=A;return _(),b(P,null,{default:a(()=>[e(D,null,{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[s("div",be,[e(k,{src:t(W)},null,8,["src"]),e(k,{src:t(l),class:"position-absolute deal-type-background-img d-md-block d-none"},null,8,["src"])])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(p,{"selected-radio":t(o).Offer,"onUpdate:selectedRadio":i[0]||(i[0]=r=>t(o).Offer=r),"radio-content":V,"grid-column":{cols:"12",sm:"4"}},null,8,["selected-radio"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(h,{modelValue:t(o).discount,"onUpdate:modelValue":i[1]||(i[1]=r=>t(o).discount=r),type:"number",label:"Discount",placeholder:"25",hint:"Enter the discount percentage. 10 = 10%","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(w,{modelValue:t(o).region,"onUpdate:modelValue":i[2]||(i[2]=r=>t(o).region=r),label:"Region",items:["Asia","Europe","Africa","Australia","North America","South America"],placeholder:"Select Region",hint:"Select applicable regions for the deal.","persistent-hint":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},ge={__name:"DealUsage",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(f,{emit:c}){const m=f,u=c,l=g(m.formData);return U(l,()=>{u("update:formData",l.value)}),(V,o)=>{const n=A,i=S;return _(),b(P,null,{default:a(()=>[e(D,null,{default:a(()=>[e(d,{cols:"12",sm:"6"},{default:a(()=>[e(n,{modelValue:t(l).userType,"onUpdate:modelValue":o[0]||(o[0]=p=>t(l).userType=p),label:"User Type",placeholder:"Select User Type",items:["All","Registered","Unregistered","Prime Member"]},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(i,{modelValue:t(l).maxUsers,"onUpdate:modelValue":o[1]||(o[1]=p=>t(l).maxUsers=p),label:"Max Users",placeholder:"1000",type:"number"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(i,{modelValue:t(l).cartAmount,"onUpdate:modelValue":o[2]||(o[2]=p=>t(l).cartAmount=p),label:"Minimum Cart Amount",placeholder:"$199",type:"number"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(i,{modelValue:t(l).promotionFree,"onUpdate:modelValue":o[3]||(o[3]=p=>t(l).promotionFree=p),label:"Promotion Fee",placeholder:"$4.99",type:"number"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(n,{modelValue:t(l).paymentMethod,"onUpdate:modelValue":o[4]||(o[4]=p=>t(l).paymentMethod=p),label:"Payment Method",placeholder:"Select Payment Method",items:["Any","Credit Card","Net Banking","Wallet"]},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(n,{modelValue:t(l).dealStatus,"onUpdate:modelValue":o[5]||(o[5]=p=>t(l).dealStatus=p),label:"Deal Status",placeholder:"Select Deal Status",items:["Active","Inactive","Suspended","Abandoned"]},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(F,{modelValue:t(l).isSingleUserCustomer,"onUpdate:modelValue":o[6]||(o[6]=p=>t(l).isSingleUserCustomer=p),label:"Limit this discount to a single-use per customer?"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},he={class:"d-flex flex-wrap gap-4 justify-space-between mt-6"},ft={__name:"create-deal",setup(f){const c=[{title:"Deal Type",subtitle:"Choose type of deal",icon:"tabler-users"},{title:"Deal Details",subtitle:"Provide deal details",icon:"tabler-id"},{title:"Deal Usage",subtitle:"Limitations & Offers",icon:"tabler-credit-card"},{title:"Review & Complete",subtitle:"Launch a deal",icon:"tabler-checkbox"}],m=g(0),u=g({dealType:{Offer:"percentage",discount:null,region:null},dealDetails:{title:"",code:"",description:"",offeredUItems:[],cartCondition:null,dealDuration:"",notification:{email:!1,sms:!1,pushNotification:!1}},dealUsage:{userType:null,maxUsers:null,cartAmount:null,promotionFree:null,paymentMethod:null,dealStatus:null,isSingleUserCustomer:!1},dealReviewComplete:{isDealDetailsConfirmed:!0}}),l=()=>{console.log("createDealData :>> ",u.value)};return(V,o)=>{const n=B;return _(),b(Y,null,{default:a(()=>[e(D,{"no-gutters":""},{default:a(()=>[e(d,{cols:"12",md:"4",lg:"3",class:z(V.$vuetify.display.mdAndUp?"border-e":"border-b")},{default:a(()=>[e(M,null,{default:a(()=>[e(n,{"current-step":t(m),"onUpdate:currentStep":o[0]||(o[0]=i=>T(m)?m.value=i:null),direction:"vertical",items:c,"icon-size":"22",class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(d,{cols:"12",md:"8",lg:"9"},{default:a(()=>[e(M,null,{default:a(()=>[e(K,{modelValue:t(m),"onUpdate:modelValue":o[5]||(o[5]=i=>T(m)?m.value=i:null),class:"disable-tab-transition"},{default:a(()=>[e(C,null,{default:a(()=>[e(De,{"form-data":t(u).dealType,"onUpdate:formData":o[1]||(o[1]=i=>t(u).dealType=i)},null,8,["form-data"])]),_:1}),e(C,null,{default:a(()=>[e(J,{"form-data":t(u).dealDetails,"onUpdate:formData":o[2]||(o[2]=i=>t(u).dealDetails=i)},null,8,["form-data"])]),_:1}),e(C,null,{default:a(()=>[e(ge,{"form-data":t(u).dealUsage,"onUpdate:formData":o[3]||(o[3]=i=>t(u).dealUsage=i)},null,8,["form-data"])]),_:1}),e(C,null,{default:a(()=>[e(de,{"form-data":t(u).dealReviewComplete,"onUpdate:formData":o[4]||(o[4]=i=>t(u).dealReviewComplete=i)},null,8,["form-data"])]),_:1})]),_:1},8,["modelValue"]),s("div",he,[e(x,{color:"secondary",variant:"tonal",disabled:t(m)===0,onClick:o[6]||(o[6]=i=>m.value--)},{default:a(()=>[e($,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),y(" Previous ")]),_:1},8,["disabled"]),c.length-1===t(m)?(_(),b(x,{key:0,color:"success",onClick:l},{default:a(()=>[y(" submit ")]),_:1})):(_(),b(x,{key:1,onClick:o[7]||(o[7]=i=>m.value++)},{default:a(()=>[y(" Next "),e($,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ft as default};
