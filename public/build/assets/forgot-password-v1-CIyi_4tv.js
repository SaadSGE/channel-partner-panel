import{r as _,a as h,o as V,c as v,d as a,b as e,m as t,M as m,e as o,H as p,v as y,a5 as b,a6 as g,t as k,a0 as w,x as C}from"./main-BI5VI6i0.js";import{_ as x}from"./AppTextField-Klz_PysZ.js";import{a as T,b as B}from"./auth-v1-top-shape-gPxasD3d.js";import{V as l}from"./VNodeRenderer-9uQluWif.js";import{a as L,b as R,V as S}from"./VCard-CX5697gH.js";import{V as d}from"./VCardText-CauGIraz.js";import{V as j}from"./VForm-B2KlJ7SF.js";import{V as M,a as n}from"./VRow-CRrnIqi-.js";import"./form-DbGo1lnp.js";import"./VTextField-Dp-DBSMV.js";/* empty css                   */import"./VCounter-HQgLnzYE.js";import"./index-e7dW0JKJ.js";import"./VImg-DI7xTG9w.js";import"./VField-OsXR_KH5.js";import"./easing-CjukEv2V.js";import"./VInput-CG6IfuLO.js";import"./forwardRefs-C-GTDzx5.js";import"./VAvatar-n2qV56T0.js";/* empty css              */const N={class:"auth-wrapper d-flex align-center justify-center pa-4"},E={class:"position-relative my-sm-16"},F={class:"app-logo"},H={class:"app-logo-title"},z=a("h4",{class:"text-h4 mb-1"}," Forgot Password? 🔒 ",-1),A=a("p",{class:"mb-0"}," Enter your email and we'll send you instructions to reset your password ",-1),I=a("span",null,"Back to login",-1),ie={__name:"forgot-password-v1",setup(U){const i=_({email:""});return(s,r)=>{const c=x,u=h("RouterLink");return V(),v("div",N,[a("div",E,[e(t(l),{nodes:("h"in s?s.h:t(m))("div",{innerHTML:t(T)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(t(l),{nodes:("h"in s?s.h:t(m))("div",{innerHTML:t(B)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),e(S,{class:C(["auth-card",s.$vuetify.display.smAndUp?"pa-6":"pa-0"]),"max-width":"460"},{default:o(()=>[e(L,{class:"justify-center"},{default:o(()=>[e(R,null,{default:o(()=>[a("div",F,[e(t(l),{nodes:t(p).app.logo},null,8,["nodes"]),a("h1",H,y(t(p).app.title),1)])]),_:1})]),_:1}),e(d,null,{default:o(()=>[z,A]),_:1}),e(d,null,{default:o(()=>[e(j,{onSubmit:b(()=>{},["prevent"])},{default:o(()=>[e(M,null,{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[e(c,{modelValue:t(i).email,"onUpdate:modelValue":r[0]||(r[0]=f=>t(i).email=f),autofocus:"",label:"Email",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(g,{block:"",type:"submit"},{default:o(()=>[k(" Send Reset Link ")]),_:1})]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(u,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v1"}},{default:o(()=>[e(w,{icon:"tabler-chevron-left",size:"20",class:"me-1 flip-in-rtl"}),I]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])])])}}};export{ie as default};