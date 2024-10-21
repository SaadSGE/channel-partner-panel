import{r as k,e as F}from"./validators-WxtbmeC2.js";import{r as g,j as R,k as B,a as T,o as D,c as A,b as e,e as a,d as l,n as t,I as V,x as w,v as d,a6 as M,a7 as P,F as j,ag as h,aF as N}from"./main-DPb0_12f.js";import{_ as E}from"./AppTextField-CFn_jv_O.js";import{u as K}from"./auth-DolWrgk8.js";import{u as _,a as U,b as O}from"./misc-mask-light-DLBdqFg8.js";import{V as Y}from"./VNodeRenderer-Bg4BrW0X.js";import{S as x}from"./sweetalert2-z6gKu1nJ.js";import{u as $}from"./useAbility-COQ38Mu7.js";import{a as m,V as C}from"./VRow-CT0QuKMD.js";import{V as z}from"./VImg-DFj61J6e.js";import{V as G}from"./VCard-C0bM0ZXG.js";import{V as I}from"./VCardText-DuS4qxmo.js";import{V as H}from"./VForm-BlnZ_x-m.js";import{V as W}from"./VCheckbox-BU8IYwEv.js";import"./helpers-D6joOrZs.js";import"./VTextField-9aIjmxOS.js";import"./index-RtQTYc-4.js";import"./index-D5BOVv8n.js";import"./forwardRefs-D9kYFWgq.js";import"./api-CbkWr8Ve.js";import"./index-BYrzgnBV.js";/* empty css              */import"./VAvatar-DBQAuZOP.js";import"./VCheckboxBtn-DHRGWJBW.js";const J="/build/assets/auth-v2-login-illustration-bordered-dark-cDkPk8mY.png",Q="/build/assets/auth-v2-login-illustration-bordered-light-CIHqcIVA.png",X="/build/assets/auth-v2-login-illustration-dark-ClExSVqL.png",Z="/build/assets/auth-v2-login-illustration-light-C4sKfRS1.png",ee="/build/assets/login-org-dUEdhnK8.gif",te={class:"auth-logo d-flex align-center gap-x-3"},ae={class:"auth-title"},oe={class:"position-relative bg-background w-100 me-0"},re={class:"d-flex align-center justify-center w-100 h-100",style:{"padding-inline":"6.25rem"}},se={class:"text-h4 mb-1"},le={class:"text-capitalize"},ie=l("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),ne={class:"d-flex align-center flex-wrap justify-space-between my-6"},ue=l("span",null,"New on our platform?",-1),Ae={__name:"login",setup(de){_(Z,X,Q,J,!0),_(O,U),console.log("hello2");const L=_(ee),c=g(!1),b=g(),u=K(),p=R(),v=B(),q=$(),n=g({email:"",password:""}),S=()=>{var s;(s=b.value)==null||s.validate().then(async({valid:r})=>{if(r)try{const i=await u.login(n.value.email,n.value.password),{accessToken:f,userData:o,abilities:y}=i;if(o.status===0){x.fire({icon:"error",title:"Account Inactive",text:"Your account is currently inactive. Please contact the administrator for assistance.",confirmButtonText:"OK"});return}h("userAbilityRules").value=y,q.update(y),o.main_role=o.role,o.role="admin",h("userData").value=o,h("accessToken").value=f,await N(()=>{o.main_role=="editor"?v.replace(p.query.to?String(p.query.to):"/record"):v.replace(p.query.to?String(p.query.to):"/")})}catch(i){x.fire({icon:"error",title:"Login Failed",text:"Credential not match",confirmButtonText:"OK"}),console.error("Login error:",i)}})};return(s,r)=>{const i=T("RouterLink"),f=E;return D(),A(j,null,[e(i,{to:"/"},{default:a(()=>[l("div",te,[e(t(Y),{nodes:t(V).app.logo},null,8,["nodes"]),l("h1",ae,w(t(V).app.title),1)])]),_:1}),e(C,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:a(()=>[e(m,{md:"8",class:"d-none d-md-flex"},{default:a(()=>[l("div",oe,[l("div",re,[e(z,{src:t(L),class:"auth-illustration mt-16 mb-2"},null,8,["src"])])])]),_:1}),e(m,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:a(()=>[e(G,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:a(()=>[e(I,null,{default:a(()=>[l("h4",se,[d(" Welcome to "),l("span",le,w(t(V).app.title),1),d("! 👋🏻 ")]),ie]),_:1}),e(I,null,{default:a(()=>[e(t(H),{ref_key:"refVForm",ref:b,onSubmit:M(S,["prevent"])},{default:a(()=>[e(C,null,{default:a(()=>[e(m,{cols:"12"},{default:a(()=>[e(f,{modelValue:t(n).email,"onUpdate:modelValue":r[0]||(r[0]=o=>t(n).email=o),label:"Email",placeholder:"johndoe@email.com",type:"email",autofocus:"",rules:["requiredValidator"in s?s.requiredValidator:t(k),"emailValidator"in s?s.emailValidator:t(F)],"error-messages":t(u).errors.email},null,8,["modelValue","rules","error-messages"])]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(f,{modelValue:t(n).password,"onUpdate:modelValue":r[1]||(r[1]=o=>t(n).password=o),label:"Password",placeholder:"············",rules:["requiredValidator"in s?s.requiredValidator:t(k)],type:t(c)?"text":"password","error-messages":t(u).errors.password,"append-inner-icon":t(c)?"tabler-eye-off":"tabler-eye","onClick:appendInner":r[2]||(r[2]=o=>c.value=!t(c))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),l("div",ne,[e(W,{modelValue:t(u).rememberMe,"onUpdate:modelValue":r[3]||(r[3]=o=>t(u).rememberMe=o),label:"Remember Me"},null,8,["modelValue"]),e(i,{class:"text-primary",to:"/forgot-password"},{default:a(()=>[d(" Forgot Password? ")]),_:1})]),e(P,{block:"",type:"submit"},{default:a(()=>[d(" Login ")]),_:1})]),_:1}),e(m,{cols:"12",class:"text-center"},{default:a(()=>[ue,e(i,{class:"text-primary ms-1",to:{name:"register"}},{default:a(()=>[d(" Create an account ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{Ae as default};
