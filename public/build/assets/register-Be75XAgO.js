import{r as d,e as k,c as I}from"./validators-IgT9dpV5.js";import{k as S,r as v,a as B,o as E,c as R,b as e,e as t,d as p,n as u,I as c,x as P,a6 as L,a7 as F,v as g,F as A,R as D,U as T}from"./main-0xwlEiGX.js";import{_ as G}from"./AppTextField-cZdEbA_N.js";import{_ as M}from"./AppAutocomplete-DGgCoLNA.js";import{u as $}from"./auth-BOmjDoYL.js";import{a as W,b as x,c as K,d as O}from"./auth-v2-register-illustration-light-C9iRgAjB.js";import{a as j,b as Y}from"./misc-mask-light-Ha4lQOdV.js";import{V as z}from"./VNodeRenderer-CrmyDyn7.js";import{S as C}from"./sweetalert2-z6gKu1nJ.js";import{u as w}from"./useGenerateImageVariant-DvejVTEF.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as s,V as b}from"./VRow-jDTGyzOx.js";import{V as J}from"./VCard-CB6wSISi.js";import{V as N}from"./VCardText-Fl_VNXuW.js";import{V as Q}from"./VForm-DFIfHyTm.js";import{V as m}from"./VCheckbox-CqLsD_A8.js";import"./helpers-CK0esMst.js";import"./form-tHQ3ONH_.js";import"./VTextField-HbhbIpkm.js";/* empty css                   */import"./VCounter-D3ZUUh6O.js";import"./index-qJYA1wi-.js";import"./index-8vuZJrvj.js";import"./VField-CdORDiCe.js";import"./easing-CjukEv2V.js";import"./VInput-DiUmufv5.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-lOzMAnqr.js";import"./VList-BY6Z6w6f.js";import"./ssrBoot-Dr6OBUHk.js";import"./VAvatar-DSEBzUti.js";import"./VImg-BG4xnC5-.js";import"./VDivider-Dq1ILL5h.js";import"./dialog-transition-BQ1-GeCr.js";import"./VMenu-C3y8YuAg.js";import"./VOverlay-JtG0veL-.js";import"./lazy-I-XFqQUQ.js";import"./scopeId-ClHLQny1.js";import"./VCheckboxBtn-DPm2uuzH.js";import"./VSelectionControl-D3be63WJ.js";import"./VChip-BB-vy8Yz.js";import"./VSlideGroup-Bd5KFLyZ.js";import"./filter-Cb17nhuU.js";import"./api-D9SKbSpL.js";import"./index-B3bPRkoL.js";/* empty css              */const V=f=>(D("data-v-403aae0d"),f=f(),T(),f),X={class:"auth-logo d-flex align-center gap-x-3"},Z={class:"auth-title"},_=V(()=>p("h4",{class:"text-h4 mb-1"},"Register User",-1)),ee=V(()=>p("h3",null,"Personal Information",-1)),le=V(()=>p("h3",{class:"mt-8"},"Company Details",-1)),ae=V(()=>p("h3",{class:"mt-8"},"Country you recruit for *",-1)),re=V(()=>p("span",{class:"d-inline-block"},"Already have an account?",-1)),oe={__name:"register",setup(f){const h=S();w(O,K,x,W,!0),w(Y,j),v(!0),v(!1);const l=v({firstName:"",lastName:"",email:"",mobileNumber:"",whatsappNumber:"",companyName:"",website:"",address:"",city:"",postCode:"",country:"",password:"",recruitCountries:[],privacyPolicies:!1}),n=v(!1),U=$(),q=async()=>{try{const o=await U.register(l.value);C.fire({icon:"success",title:"Registration Successful",text:"You have been registered successfully!",confirmButtonText:"OK"}),l.value={firstName:"",lastName:"",email:"",mobileNumber:"",whatsappNumber:"",companyName:"",website:"",address:"",city:"",postCode:"",country:"",password:"",recruitCountries:[],privacyPolicies:!1,confirmPassword:""},h.push({name:"login"})}catch(o){console.error("Error in registration:",o),C.fire({icon:"error",title:"Registration Failed",text:o,confirmButtonText:"OK"})}};return(o,a)=>{const y=B("RouterLink"),i=G;return E(),R(A,null,[e(y,{to:"/"},{default:t(()=>[p("div",X,[e(u(z),{nodes:u(c).app.logo},null,8,["nodes"]),p("h1",Z,P(u(c).app.title),1)])]),_:1}),e(b,{"no-gutters":"",class:"auth-wrapper bg-surface mt-15"},{default:t(()=>[e(s,{cols:"12",md:"12",class:"auth-card-v2 d-flex align-center justify-center",style:{"background-color":"white"}},{default:t(()=>[e(J,{"max-width":1200,"min-width":1200,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(N,null,{default:t(()=>[_]),_:1}),e(N,null,{default:t(()=>[e(u(Q),{onSubmit:L(q,["prevent"])},{default:t(()=>[ee,e(b,null,{default:t(()=>[e(s,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(i,{modelValue:l.value.firstName,"onUpdate:modelValue":a[0]||(a[0]=r=>l.value.firstName=r),rules:["requiredValidator"in o?o.requiredValidator:u(d)],label:"First Name *",placeholder:"Enter your first name"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(i,{modelValue:l.value.lastName,"onUpdate:modelValue":a[1]||(a[1]=r=>l.value.lastName=r),rules:["requiredValidator"in o?o.requiredValidator:u(d)],label:"Last Name *",placeholder:"Enter your last name"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"4",sm:"12"},{default:t(()=>[e(i,{modelValue:l.value.email,"onUpdate:modelValue":a[2]||(a[2]=r=>l.value.email=r),rules:["requiredValidator"in o?o.requiredValidator:u(d),"emailValidator"in o?o.emailValidator:u(k)],label:"Email *",type:"email",placeholder:"Enter your email address"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"4",sm:"12"},{default:t(()=>[e(i,{modelValue:l.value.mobileNumber,"onUpdate:modelValue":a[3]||(a[3]=r=>l.value.mobileNumber=r),label:"Mobile No",type:"text",placeholder:"Enter your mobile number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"4",sm:"12"},{default:t(()=>[e(i,{modelValue:l.value.whatsappNumber,"onUpdate:modelValue":a[4]||(a[4]=r=>l.value.whatsappNumber=r),label:"Whatsapp Number",type:"text",placeholder:"Enter your WhatsApp number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(i,{modelValue:l.value.password,"onUpdate:modelValue":a[5]||(a[5]=r=>l.value.password=r),rules:["requiredValidator"in o?o.requiredValidator:u(d)],label:"Password *",placeholder:"Enter your password",type:n.value?"text":"password","append-inner-icon":n.value?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[6]||(a[6]=r=>n.value=!n.value)},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(i,{modelValue:l.value.confirmPassword,"onUpdate:modelValue":a[7]||(a[7]=r=>l.value.confirmPassword=r),rules:["requiredValidator"in o?o.requiredValidator:u(d),("confirmedValidator"in o?o.confirmedValidator:u(I))(l.value.confirmPassword,l.value.password)],label:"Confirm Password *",placeholder:"Confirm your password",type:n.value?"text":"password","append-inner-icon":n.value?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[8]||(a[8]=r=>n.value=!n.value)},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1})]),_:1}),le,e(b,null,{default:t(()=>[e(s,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(i,{modelValue:l.value.companyName,"onUpdate:modelValue":a[9]||(a[9]=r=>l.value.companyName=r),rules:["requiredValidator"in o?o.requiredValidator:u(d)],label:"Company Name *",placeholder:"Enter your company name"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(i,{modelValue:l.value.website,"onUpdate:modelValue":a[10]||(a[10]=r=>l.value.website=r),label:"Website",placeholder:"Enter your company website"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(i,{modelValue:l.value.address,"onUpdate:modelValue":a[11]||(a[11]=r=>l.value.address=r),rules:["requiredValidator"in o?o.requiredValidator:u(d)],label:"Address *",placeholder:"Enter your company address"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(i,{modelValue:l.value.city,"onUpdate:modelValue":a[12]||(a[12]=r=>l.value.city=r),rules:["requiredValidator"in o?o.requiredValidator:u(d)],label:"City *",placeholder:"Enter your city"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(i,{modelValue:l.value.postCode,"onUpdate:modelValue":a[13]||(a[13]=r=>l.value.postCode=r),rules:["requiredValidator"in o?o.requiredValidator:u(d)],label:"Post Code *",placeholder:"Enter your postal code"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(M,{modelValue:l.value.country,"onUpdate:modelValue":a[14]||(a[14]=r=>l.value.country=r),items:["India","Bangladesh","Nigeria","Nepal","Bhutan","Ghana","Sri Lanka"],label:"Country *",rules:["requiredValidator"in o?o.requiredValidator:u(d)],placeholder:"Select your country"},null,8,["modelValue","rules"])]),_:1})]),_:1}),ae,e(b,null,{default:t(()=>[e(s,{cols:"12",md:"12",sm:"12",class:"demo-space-x"},{default:t(()=>[e(m,{value:"Nigeria",label:"Nigeria",modelValue:l.value.recruitCountries,"onUpdate:modelValue":a[15]||(a[15]=r=>l.value.recruitCountries=r)},null,8,["modelValue"]),e(m,{value:"India",label:"India",modelValue:l.value.recruitCountries,"onUpdate:modelValue":a[16]||(a[16]=r=>l.value.recruitCountries=r)},null,8,["modelValue"]),e(m,{value:"Bangladesh",label:"Bangladesh",modelValue:l.value.recruitCountries,"onUpdate:modelValue":a[17]||(a[17]=r=>l.value.recruitCountries=r)},null,8,["modelValue"]),e(m,{value:"Nepal",label:"Nepal",modelValue:l.value.recruitCountries,"onUpdate:modelValue":a[18]||(a[18]=r=>l.value.recruitCountries=r)},null,8,["modelValue"]),e(m,{value:"Bhutan",label:"Bhutan",modelValue:l.value.recruitCountries,"onUpdate:modelValue":a[19]||(a[19]=r=>l.value.recruitCountries=r)},null,8,["modelValue"]),e(m,{value:"Ghana",label:"Ghana",modelValue:l.value.recruitCountries,"onUpdate:modelValue":a[20]||(a[20]=r=>l.value.recruitCountries=r)},null,8,["modelValue"]),e(m,{value:"Sri Lanka",label:"Sri Lanka",modelValue:l.value.recruitCountries,"onUpdate:modelValue":a[21]||(a[21]=r=>l.value.recruitCountries=r)},null,8,["modelValue"])]),_:1})]),_:1}),e(F,{block:"",type:"submit"},{default:t(()=>[g("Sign up")]),_:1}),e(s,{cols:"12",class:"text-center text-base"},{default:t(()=>[re,e(y,{class:"text-primary ms-1 d-inline-block",to:{name:"login"}},{default:t(()=>[g(" Sign in instead ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}},Xe=H(oe,[["__scopeId","data-v-403aae0d"]]);export{Xe as default};
