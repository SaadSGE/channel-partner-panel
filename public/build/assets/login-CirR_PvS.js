import{r as v,e as L}from"./validators-DtluRmbX.js";import{r as V,j as P,k as C,a as q,o as A,c as D,b as e,e as a,d as l,n as t,I as _,x as w,v as u,a6 as M,a7 as F,F as N,ab as g,be as O}from"./main-C74_jUeT.js";import{_ as j}from"./AppTextField-CDNIz15Y.js";import{u as U}from"./auth-BJpedzLA.js";import{u as h}from"./useGenerateImageVariant-Cd5teodn.js";import{a as K,b as z,c as H,d as W}from"./auth-v2-login-illustration-light-CZAH_Qyi.js";import{a as Y,b as $}from"./misc-mask-light-Ha4lQOdV.js";import{V as G}from"./VNodeRenderer-BU1gLq5f.js";import{S as x}from"./sweetalert2-z6gKu1nJ.js";import{u as J}from"./useAbility-DrlqX2ye.js";import{a as d,V as R}from"./VRow-26QtYvrR.js";import{V as Q}from"./VImg-Dm111l4M.js";import{V as X}from"./VCard-N5Ac_lHY.js";import{V as k}from"./VCardText-B7x7b_F3.js";import{V as Z}from"./VForm-Da8LGrcf.js";import{V as ee}from"./VCheckbox-DvVxthmn.js";import"./helpers-B6UT3l9l.js";import"./form-Dm2p5Mi6.js";import"./VTextField-C640B_wh.js";/* empty css                   */import"./VCounter-Cri1LZbZ.js";import"./index-DT81gwx7.js";import"./index-ofTVLbpv.js";import"./VField-fzvzWeo2.js";import"./easing-CjukEv2V.js";import"./VInput-DbiX_CVz.js";import"./forwardRefs-C-GTDzx5.js";import"./api-BIeHaLk3.js";import"./index-Dz1rBMAR.js";/* empty css              */import"./VAvatar-BSdqOW6E.js";import"./VCheckboxBtn-Cph1Oy13.js";import"./VSelectionControl-DISd8ZlM.js";const te="/build/assets/login-org-dUEdhnK8.gif";var ae={VITE_APP_NAME:"Shabujglobal.org",VITE_REVERB_APP_KEY:"d1eop90n3fpgmkutltzq",VITE_REVERB_HOST:"localhost",VITE_REVERB_PORT:"8080",VITE_REVERB_SCHEME:"http",VITE_WEBSITE:"org",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const oe={class:"auth-logo d-flex align-center gap-x-3"},re={class:"auth-title"},se={class:"position-relative bg-background w-100 me-0"},le={class:"d-flex align-center justify-center w-100 h-100",style:{"padding-inline":"6.25rem"}},ie={class:"text-h4 mb-1"},ne={class:"text-capitalize"},me=l("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),ue={class:"d-flex align-center flex-wrap justify-space-between my-6"},de=l("span",null,"New on our platform?",-1),We={__name:"login",setup(pe){h(W,H,z,K,!0),h($,Y);const I=ae.VITE_APP_URL;console.log(I);const T=h(te),p=V(!1),b=V(),m=U(),c=P(),E=C(),S=J(),n=V({email:"",password:""}),B=()=>{var s;(s=b.value)==null||s.validate().then(async({valid:r})=>{if(r)try{const i=await m.login(n.value.email,n.value.password),{accessToken:f,userData:o,abilities:y}=i;if(o.status===0){x.fire({icon:"error",title:"Account Inactive",text:"Your account is currently inactive. Please contact the administrator for assistance.",confirmButtonText:"OK"});return}g("userAbilityRules").value=y,S.update(y),o.main_role=o.role,o.role="admin",g("userData").value=o,g("accessToken").value=f,await O(()=>{o.main_role=="editor"?E.replace(c.query.to?String(c.query.to):"/record"):E.replace(c.query.to?String(c.query.to):"/")})}catch(i){x.fire({icon:"error",title:"Login Failed",text:"Credential not match",confirmButtonText:"OK"}),console.error("Login error:",i)}})};return(s,r)=>{const i=q("RouterLink"),f=j;return A(),D(N,null,[e(i,{to:"/"},{default:a(()=>[l("div",oe,[e(t(G),{nodes:t(_).app.logo},null,8,["nodes"]),l("h1",re,w(t(_).app.title),1)])]),_:1}),e(R,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:a(()=>[e(d,{md:"8",class:"d-none d-md-flex"},{default:a(()=>[l("div",se,[l("div",le,[e(Q,{src:t(T),class:"auth-illustration mt-16 mb-2"},null,8,["src"])])])]),_:1}),e(d,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:a(()=>[e(X,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:a(()=>[e(k,null,{default:a(()=>[l("h4",ie,[u(" Welcome to "),l("span",ne,w(t(_).app.title),1),u("! 👋🏻 ")]),me]),_:1}),e(k,null,{default:a(()=>[e(t(Z),{ref_key:"refVForm",ref:b,onSubmit:M(B,["prevent"])},{default:a(()=>[e(R,null,{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(f,{modelValue:t(n).email,"onUpdate:modelValue":r[0]||(r[0]=o=>t(n).email=o),label:"Email",placeholder:"johndoe@email.com",type:"email",autofocus:"",rules:["requiredValidator"in s?s.requiredValidator:t(v),"emailValidator"in s?s.emailValidator:t(L)],"error-messages":t(m).errors.email},null,8,["modelValue","rules","error-messages"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(f,{modelValue:t(n).password,"onUpdate:modelValue":r[1]||(r[1]=o=>t(n).password=o),label:"Password",placeholder:"············",rules:["requiredValidator"in s?s.requiredValidator:t(v)],type:t(p)?"text":"password","error-messages":t(m).errors.password,"append-inner-icon":t(p)?"tabler-eye-off":"tabler-eye","onClick:appendInner":r[2]||(r[2]=o=>p.value=!t(p))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),l("div",ue,[e(ee,{modelValue:t(m).rememberMe,"onUpdate:modelValue":r[3]||(r[3]=o=>t(m).rememberMe=o),label:"Remember Me"},null,8,["modelValue"]),e(i,{class:"text-primary",to:"/forgot-password"},{default:a(()=>[u(" Forgot Password? ")]),_:1})]),e(F,{block:"",type:"submit"},{default:a(()=>[u(" Login ")]),_:1})]),_:1}),e(d,{cols:"12",class:"text-center"},{default:a(()=>[de,e(i,{class:"text-primary ms-1",to:{name:"register"}},{default:a(()=>[u(" Create an account ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{We as default};
