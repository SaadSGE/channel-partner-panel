import{r as _,a as x,o as v,c as g,d as o,b as e,n as t,N as h,e as a,I as d,x as V,v as i,a6 as w,a7 as C,y as k}from"./main-DEXLFq5-.js";import{_ as T}from"./AppTextField-DqkBLktw.js";import{_ as N}from"./AuthProvider-BM_PJSyK.js";import{a as B,b as L}from"./auth-v1-top-shape-gPxasD3d.js";import{V as c}from"./VNodeRenderer-Biz62hcn.js";import{a as R,b as U,V as j}from"./VCard-BQ9pbwZy.js";import{V as b}from"./VCardText-CEHG5Us3.js";import{V as P}from"./VForm-BKwayuHd.js";import{V as S,a as m}from"./VRow-DKkqacc7.js";import{V as $}from"./VCheckbox-DQFeDuhk.js";import{V as y}from"./VDivider-BGznFT5b.js";import"./form-B1xJlf5M.js";import"./VTextField-YMVwCEg-.js";/* empty css                   */import"./VCounter-DAizO-YE.js";import"./index-dXcoFe5c.js";import"./index-UZWnqimo.js";import"./VField-tGKhD_Vg.js";import"./easing-CjukEv2V.js";import"./VInput-GP-yT9Tv.js";import"./forwardRefs-C-GTDzx5.js";import"./VAvatar-BaU-tpmv.js";import"./VImg-BwxQFvJc.js";/* empty css              */import"./VCheckboxBtn-DE8plL2h.js";import"./VSelectionControl-BkLZjsBe.js";const F={class:"auth-wrapper d-flex align-center justify-center pa-4"},I={class:"position-relative my-sm-16"},M={class:"app-logo"},z={class:"app-logo-title"},A={class:"text-h4 mb-1"},D={class:"text-capitalize"},E=o("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),H={class:"d-flex align-center justify-space-between flex-wrap my-6"},W=o("span",{class:"d-inline-block"}," New on our platform? ",-1),q=o("span",{class:"mx-4 text-high-emphasis"},"or",-1),ye={__name:"login-v1",setup(G){const l=_({email:"",password:"",remember:!1}),p=_(!1);return(n,s)=>{const u=T,f=x("RouterLink");return v(),g("div",F,[o("div",I,[e(t(c),{nodes:("h"in n?n.h:t(h))("div",{innerHTML:t(B)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(t(c),{nodes:("h"in n?n.h:t(h))("div",{innerHTML:t(L)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),e(j,{class:k(["auth-card",n.$vuetify.display.smAndUp?"pa-6":"pa-0"]),"max-width":"460"},{default:a(()=>[e(R,{class:"justify-center"},{default:a(()=>[e(U,null,{default:a(()=>[o("div",M,[e(t(c),{nodes:t(d).app.logo},null,8,["nodes"]),o("h1",z,V(t(d).app.title),1)])]),_:1})]),_:1}),e(b,null,{default:a(()=>[o("h4",A,[i(" Welcome to "),o("span",D,V(t(d).app.title),1),i("! 👋🏻 ")]),E]),_:1}),e(b,null,{default:a(()=>[e(P,{onSubmit:w(()=>{},["prevent"])},{default:a(()=>[e(S,null,{default:a(()=>[e(m,{cols:"12"},{default:a(()=>[e(u,{modelValue:t(l).email,"onUpdate:modelValue":s[0]||(s[0]=r=>t(l).email=r),autofocus:"",label:"Email or Username",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(u,{modelValue:t(l).password,"onUpdate:modelValue":s[1]||(s[1]=r=>t(l).password=r),label:"Password",placeholder:"············",type:t(p)?"text":"password","append-inner-icon":t(p)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[2]||(s[2]=r=>p.value=!t(p))},null,8,["modelValue","type","append-inner-icon"]),o("div",H,[e($,{modelValue:t(l).remember,"onUpdate:modelValue":s[3]||(s[3]=r=>t(l).remember=r),label:"Remember me"},null,8,["modelValue"]),e(f,{class:"text-primary",to:{name:"pages-authentication-forgot-password-v1"}},{default:a(()=>[i(" Forgot Password? ")]),_:1})]),e(C,{block:"",type:"submit"},{default:a(()=>[i(" Login ")]),_:1})]),_:1}),e(m,{cols:"12",class:"text-body-1 text-center"},{default:a(()=>[W,e(f,{class:"text-primary ms-1 d-inline-block text-body-1",to:{name:"pages-authentication-register-v1"}},{default:a(()=>[i(" Create an account ")]),_:1})]),_:1}),e(m,{cols:"12",class:"d-flex align-center"},{default:a(()=>[e(y),q,e(y)]),_:1}),e(m,{cols:"12",class:"text-center"},{default:a(()=>[e(N)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])])])}}};export{ye as default};