import{r as w,e as q}from"./validators-DpYrMFzk.js";import{r as f,i as B,j as S,a as F,o as M,c as T,b as a,e as t,d as s,m as e,H as V,v,t as c,a5 as j,a6 as D,F as N,aa as g,ax as A}from"./main--Sxm5_s2.js";import{_ as P}from"./AppTextField-BGLtjjph.js";import{u as U}from"./auth-BjV4DkWq.js";import{u as h}from"./useGenerateImageVariant-nZ8a454m.js";import{a as E,b as H,c as $,d as z}from"./auth-v2-login-illustration-light-CZAH_Qyi.js";import{a as G,b as K}from"./misc-mask-light-Ha4lQOdV.js";import{V as O}from"./VNodeRenderer-CKrVXq-M.js";import{S as W}from"./sweetalert2-z6gKu1nJ.js";import{u as J}from"./useAbility-CrSDvdFl.js";import{a as u,V as k}from"./VRow-iwFKqp57.js";import{V as Q}from"./VImg-Za-rMnCD.js";import{V as X}from"./VCard-D_9YY7eU.js";import{V as x}from"./VCardText-B_32FgjQ.js";import{V as Y}from"./VForm-C6pZhiuU.js";import{V as Z}from"./VCheckbox-Btuo1xd9.js";import"./helpers-DK5QwNv0.js";import"./form-ByD6MPa6.js";import"./VTextField-C1pfXiLn.js";/* empty css                   */import"./VCounter-C_khUIuy.js";import"./index-CGqMMtXP.js";import"./VField-B3XaJafD.js";import"./easing-CjukEv2V.js";import"./VInput-CrRB8sjj.js";import"./forwardRefs-C-GTDzx5.js";import"./api-j-2iTHQQ.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VAvatar-YOWsFQVe.js";import"./VCheckboxBtn-Cf31ky1q.js";import"./VSelectionControl-RP8APfRy.js";const ee="/build/assets/login-image-BqaMlRfH.png",ae={class:"auth-logo d-flex align-center gap-x-3"},te={class:"auth-title"},oe={class:"position-relative bg-background w-100 me-0"},re={class:"d-flex align-center justify-center w-100 h-100",style:{"padding-inline":"6.25rem"}},se={class:"text-h4 mb-1"},le={class:"text-capitalize"},ie=s("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),ne={class:"d-flex align-center flex-wrap justify-space-between my-6"},me=s("span",null,"New on our platform?",-1),$e={__name:"login",setup(ue){h(z,$,H,E,!0),h(K,G);const L=h(ee),d=f(!1),_=f(),m=U(),b=B(),C=S(),R=J(),i=f({email:"test@gmail.com",password:"123456"}),I=()=>{var r;(r=_.value)==null||r.validate().then(async({valid:o})=>{if(o)try{const n=await m.login(i.value.email,i.value.password),{accessToken:p,userData:l}=n,y=[{action:"manage",subject:"all"}];g("userAbilityRules").value=y,R.update(y),g("userData").value=l,g("accessToken").value=p,await A(()=>{C.replace(b.query.to?String(b.query.to):"/")})}catch(n){W.fire({icon:"error",title:"Login Failed",text:"Credential not match",confirmButtonText:"OK"}),console.error("Login error:",n)}})};return(r,o)=>{const n=F("RouterLink"),p=P;return M(),T(N,null,[a(n,{to:"/"},{default:t(()=>[s("div",ae,[a(e(O),{nodes:e(V).app.logo},null,8,["nodes"]),s("h1",te,v(e(V).app.title),1)])]),_:1}),a(k,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:t(()=>[a(u,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[s("div",oe,[s("div",re,[a(Q,{src:e(L),class:"auth-illustration mt-16 mb-2"},null,8,["src"])])])]),_:1}),a(u,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[a(X,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[a(x,null,{default:t(()=>[s("h4",se,[c(" Welcome to "),s("span",le,v(e(V).app.title),1),c("! 👋🏻 ")]),ie]),_:1}),a(x,null,{default:t(()=>[a(e(Y),{ref_key:"refVForm",ref:_,onSubmit:j(I,["prevent"])},{default:t(()=>[a(k,null,{default:t(()=>[a(u,{cols:"12"},{default:t(()=>[a(p,{modelValue:e(i).email,"onUpdate:modelValue":o[0]||(o[0]=l=>e(i).email=l),label:"Email",placeholder:"johndoe@email.com",type:"email",autofocus:"",rules:["requiredValidator"in r?r.requiredValidator:e(w),"emailValidator"in r?r.emailValidator:e(q)],"error-messages":e(m).errors.email},null,8,["modelValue","rules","error-messages"])]),_:1}),a(u,{cols:"12"},{default:t(()=>[a(p,{modelValue:e(i).password,"onUpdate:modelValue":o[1]||(o[1]=l=>e(i).password=l),label:"Password",placeholder:"············",rules:["requiredValidator"in r?r.requiredValidator:e(w)],type:e(d)?"text":"password","error-messages":e(m).errors.password,"append-inner-icon":e(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[2]||(o[2]=l=>d.value=!e(d))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),s("div",ne,[a(Z,{modelValue:e(m).rememberMe,"onUpdate:modelValue":o[3]||(o[3]=l=>e(m).rememberMe=l),label:"Remember Me"},null,8,["modelValue"])]),a(D,{block:"",type:"submit"},{default:t(()=>[c(" Login ")]),_:1})]),_:1}),a(u,{cols:"12",class:"text-center"},{default:t(()=>[me,a(n,{class:"text-primary ms-1",to:{name:"register"}},{default:t(()=>[c(" Create an account ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{$e as default};