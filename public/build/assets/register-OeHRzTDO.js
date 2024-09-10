import{r as d,e as R,c as B}from"./validators-D4mQ9jzc.js";import{k as P,r as f,a as L,o as y,c as v,b as e,e as t,d as n,n as s,I as g,x as _,a6 as F,F as h,i as A,a7 as D,v as w,R as T,U as M}from"./main-CGWwRiT_.js";import{_ as $}from"./AppTextField-B3ifRZFg.js";import{_ as G}from"./AppAutocomplete-BIW2PHf4.js";import{u as W}from"./auth-fDa2dQ3p.js";import{a as K,b as O,c as j,d as x}from"./auth-v2-register-illustration-light-C9iRgAjB.js";import{a as Y,b as z}from"./misc-mask-light-Ha4lQOdV.js";import{V as H}from"./VNodeRenderer-CdRVllqo.js";import{S as N}from"./sweetalert2-z6gKu1nJ.js";import{u as C}from"./useGenerateImageVariant-B0rbG1Jl.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as i,V as c}from"./VRow-Bzb-aqP7.js";import{V as Q}from"./VCard-B7k9GI3s.js";import{V as q}from"./VCardText-BmGyakr4.js";import{V as X}from"./VForm-pw6D0N3h.js";import{V as Z}from"./VCheckbox-2XBWMHbN.js";import"./helpers--SRe6l6M.js";import"./form-DCP4nY8j.js";import"./VTextField-C4nfnc5x.js";/* empty css                   */import"./VCounter-fGbJU7P4.js";import"./index-BOYzkDlu.js";import"./index-DQUQ96P0.js";import"./VField-Ccw4JNiL.js";import"./easing-CjukEv2V.js";import"./VInput-b5mEzrmC.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-CeAw6mYM.js";import"./VList-D-gCIxkV.js";import"./ssrBoot-BHzMJUWh.js";import"./VAvatar-DQfbjzTA.js";import"./VImg-Djij_NeG.js";import"./VDivider-BBNe6FC2.js";import"./dialog-transition-CXbOcQ9P.js";import"./VMenu-BL4z1N2z.js";import"./VOverlay-DAfdTtIn.js";import"./lazy-CTqaGN_c.js";import"./scopeId-6IEgYeE5.js";import"./VCheckboxBtn-BaqJlnsa.js";import"./VSelectionControl-xPyoBWpO.js";import"./VChip-BqeweNy2.js";import"./VSlideGroup-De2DvjAX.js";import"./filter-zA-OqLQg.js";import"./api-CbZJzeec.js";import"./index-B3bPRkoL.js";/* empty css              */const p=V=>(T("data-v-e4bd9ce2"),V=V(),M(),V),ee={class:"auth-logo d-flex align-center gap-x-3"},ae={class:"auth-title"},le=p(()=>n("h4",{class:"text-h4 mb-1"},"Register User",-1)),re=p(()=>n("h3",null,"Personal Information",-1)),oe=p(()=>n("h3",{class:"mt-8"},"Company Details",-1)),te=p(()=>n("h3",{class:"mt-8"},"Country you recruit for *",-1)),se=p(()=>n("span",{class:"d-inline-block"},"Already have an account?",-1)),ie={__name:"register",setup(V){const k=P();C(x,j,O,K,!0),C(z,Y),f(!0),f(!1);const a=f({firstName:"",lastName:"",email:"",mobileNumber:"",whatsappNumber:"",companyName:"",website:"",address:"",city:"",postCode:"",country:"",password:"",recruitCountries:[],privacyPolicies:!1}),m=f(!1),U=W(),I=async()=>{try{const o=await U.register(a.value);N.fire({icon:"success",title:"Registration Successful",text:"You have been registered successfully!",confirmButtonText:"OK"}),a.value={firstName:"",lastName:"",email:"",mobileNumber:"",whatsappNumber:"",companyName:"",website:"",address:"",city:"",postCode:"",country:"",password:"",recruitCountries:[],privacyPolicies:!1,confirmPassword:""},k.push({name:"login"})}catch(o){console.error("Error in registration:",o),N.fire({icon:"error",title:"Registration Failed",text:o,confirmButtonText:"OK"})}},S=["Nigeria","India","Bangladesh","Nepal","Bhutan","Ghana","Sri Lanka"];return(o,l)=>{const b=L("RouterLink"),u=$;return y(),v(h,null,[e(b,{to:"/"},{default:t(()=>[n("div",ee,[e(s(H),{nodes:s(g).app.logo},null,8,["nodes"]),n("h1",ae,_(s(g).app.title),1)])]),_:1}),e(c,{"no-gutters":"",class:"auth-wrapper bg-surface mt-15"},{default:t(()=>[e(i,{cols:"12",class:"auth-card-v2 d-flex align-center justify-center",style:{"background-color":"white"}},{default:t(()=>[e(Q,{class:"mt-12 mt-sm-0 pa-4",width:"100%","max-width":"1200"},{default:t(()=>[e(q,null,{default:t(()=>[le]),_:1}),e(q,null,{default:t(()=>[e(s(X),{onSubmit:F(I,["prevent"])},{default:t(()=>[re,e(c,null,{default:t(()=>[e(i,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(u,{modelValue:a.value.firstName,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value.firstName=r),rules:["requiredValidator"in o?o.requiredValidator:s(d)],label:"First Name *",placeholder:"Enter your first name"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(u,{modelValue:a.value.lastName,"onUpdate:modelValue":l[1]||(l[1]=r=>a.value.lastName=r),rules:["requiredValidator"in o?o.requiredValidator:s(d)],label:"Last Name *",placeholder:"Enter your last name"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"4",sm:"12"},{default:t(()=>[e(u,{modelValue:a.value.email,"onUpdate:modelValue":l[2]||(l[2]=r=>a.value.email=r),rules:["requiredValidator"in o?o.requiredValidator:s(d),"emailValidator"in o?o.emailValidator:s(R)],label:"Email *",type:"email",placeholder:"Enter your email address"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"4",sm:"12"},{default:t(()=>[e(u,{modelValue:a.value.mobileNumber,"onUpdate:modelValue":l[3]||(l[3]=r=>a.value.mobileNumber=r),label:"Mobile No",type:"text",placeholder:"Enter your mobile number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"4",sm:"12"},{default:t(()=>[e(u,{modelValue:a.value.whatsappNumber,"onUpdate:modelValue":l[4]||(l[4]=r=>a.value.whatsappNumber=r),label:"Whatsapp Number",type:"text",placeholder:"Enter your WhatsApp number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(u,{modelValue:a.value.password,"onUpdate:modelValue":l[5]||(l[5]=r=>a.value.password=r),rules:["requiredValidator"in o?o.requiredValidator:s(d)],label:"Password *",placeholder:"Enter your password",type:m.value?"text":"password","append-inner-icon":m.value?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[6]||(l[6]=r=>m.value=!m.value)},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(i,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(u,{modelValue:a.value.confirmPassword,"onUpdate:modelValue":l[7]||(l[7]=r=>a.value.confirmPassword=r),rules:["requiredValidator"in o?o.requiredValidator:s(d),("confirmedValidator"in o?o.confirmedValidator:s(B))(a.value.confirmPassword,a.value.password)],label:"Confirm Password *",placeholder:"Confirm your password",type:m.value?"text":"password","append-inner-icon":m.value?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[8]||(l[8]=r=>m.value=!m.value)},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1})]),_:1}),oe,e(c,null,{default:t(()=>[e(i,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(u,{modelValue:a.value.companyName,"onUpdate:modelValue":l[9]||(l[9]=r=>a.value.companyName=r),rules:["requiredValidator"in o?o.requiredValidator:s(d)],label:"Company Name *",placeholder:"Enter your company name"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(u,{modelValue:a.value.website,"onUpdate:modelValue":l[10]||(l[10]=r=>a.value.website=r),label:"Website",placeholder:"Enter your company website"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(u,{modelValue:a.value.address,"onUpdate:modelValue":l[11]||(l[11]=r=>a.value.address=r),rules:["requiredValidator"in o?o.requiredValidator:s(d)],label:"Address *",placeholder:"Enter your company address"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(u,{modelValue:a.value.city,"onUpdate:modelValue":l[12]||(l[12]=r=>a.value.city=r),rules:["requiredValidator"in o?o.requiredValidator:s(d)],label:"City *",placeholder:"Enter your city"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(u,{modelValue:a.value.postCode,"onUpdate:modelValue":l[13]||(l[13]=r=>a.value.postCode=r),rules:["requiredValidator"in o?o.requiredValidator:s(d)],label:"Post Code *",placeholder:"Enter your postal code"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6",sm:"12"},{default:t(()=>[e(G,{modelValue:a.value.country,"onUpdate:modelValue":l[14]||(l[14]=r=>a.value.country=r),items:["India","Bangladesh","Nigeria","Nepal","Bhutan","Ghana","Sri Lanka"],label:"Country *",rules:["requiredValidator"in o?o.requiredValidator:s(d)],placeholder:"Select your country"},null,8,["modelValue","rules"])]),_:1})]),_:1}),te,e(c,null,{default:t(()=>[(y(),v(h,null,A(S,r=>e(i,{cols:"12",sm:"6",md:"4",key:r},{default:t(()=>[e(Z,{value:r,label:r,modelValue:a.value.recruitCountries,"onUpdate:modelValue":l[15]||(l[15]=E=>a.value.recruitCountries=E)},null,8,["value","label","modelValue"])]),_:2},1024)),64))]),_:1}),e(D,{block:"",type:"submit"},{default:t(()=>[w("Sign up")]),_:1}),e(i,{cols:"12",class:"text-center text-base"},{default:t(()=>[se,e(b,{class:"text-primary ms-1 d-inline-block",to:{name:"login"}},{default:t(()=>[w(" Sign in instead ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}},ea=J(ie,[["__scopeId","data-v-e4bd9ce2"]]);export{ea as default};
