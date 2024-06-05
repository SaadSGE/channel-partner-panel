import{r as w,e as q}from"./validators-DpYrMFzk.js";import{r as g,j as B,k as S,a as F,o as M,c as T,b as a,e as t,d as s,n as e,I as V,x as v,v as c,a6 as j,a7 as D,F as A,ab as h,aA as N}from"./main-46fJF4Ly.js";import{_ as P}from"./AppTextField-BiS_KFta.js";import{u as U}from"./auth-B2PYqnd3.js";import{u as _}from"./useGenerateImageVariant-CLvQU5c8.js";import{a as E,b as $,c as z,d as G}from"./auth-v2-login-illustration-light-CZAH_Qyi.js";import{a as H,b as K}from"./misc-mask-light-Ha4lQOdV.js";import{V as O}from"./VNodeRenderer-CuJMaBma.js";import{S as W}from"./sweetalert2-z6gKu1nJ.js";import{u as J}from"./useAbility-B6yJIWVs.js";import{a as u,V as k}from"./VRow-DUKZE336.js";import{V as Q}from"./VImg-ZBC3KXqQ.js";import{V as X}from"./VCard-DMTjdXUy.js";import{V as x}from"./VCardText-1yDQu2OT.js";import{V as Y}from"./VForm-CFxhAGQX.js";import{V as Z}from"./VCheckbox-C-DuKBS8.js";import"./helpers-DK5QwNv0.js";import"./form-Cof7gYfN.js";import"./VTextField-BRS8HhxH.js";/* empty css                   */import"./VCounter-4pitKJQp.js";import"./index-DkHFl9i8.js";import"./index-CAksEt0X.js";import"./VField-BhFXHFEK.js";import"./easing-CjukEv2V.js";import"./VInput-BvsHXrrJ.js";import"./forwardRefs-C-GTDzx5.js";import"./api-BPpc59eu.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VAvatar-DBcKRZVo.js";import"./VCheckboxBtn-CUr3L21I.js";import"./VSelectionControl-DvCugJqL.js";const ee="/build/assets/login-image-BqaMlRfH.png",ae={class:"auth-logo d-flex align-center gap-x-3"},te={class:"auth-title"},oe={class:"position-relative bg-background w-100 me-0"},re={class:"d-flex align-center justify-center w-100 h-100",style:{"padding-inline":"6.25rem"}},se={class:"text-h4 mb-1"},le={class:"text-capitalize"},ie=s("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),ne={class:"d-flex align-center flex-wrap justify-space-between my-6"},me=s("span",null,"New on our platform?",-1),He={__name:"login",setup(ue){_(G,z,$,E,!0),_(K,H);const L=_(ee),d=g(!1),b=g(),m=U(),y=B(),C=S(),R=J(),i=g({email:"test.admin@gmail.com",password:"password"}),I=()=>{var r;(r=b.value)==null||r.validate().then(async({valid:o})=>{if(o)try{const n=await m.login(i.value.email,i.value.password),{accessToken:p,userData:l,abilities:f}=n;console.log([{action:"manage",subject:"all"}]),console.log(f),h("userAbilityRules").value=f,R.update(f),h("userData").value=l,h("accessToken").value=p,await N(()=>{C.replace(y.query.to?String(y.query.to):"/")})}catch(n){W.fire({icon:"error",title:"Login Failed",text:"Credential not match",confirmButtonText:"OK"}),console.error("Login error:",n)}})};return(r,o)=>{const n=F("RouterLink"),p=P;return M(),T(A,null,[a(n,{to:"/"},{default:t(()=>[s("div",ae,[a(e(O),{nodes:e(V).app.logo},null,8,["nodes"]),s("h1",te,v(e(V).app.title),1)])]),_:1}),a(k,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:t(()=>[a(u,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[s("div",oe,[s("div",re,[a(Q,{src:e(L),class:"auth-illustration mt-16 mb-2"},null,8,["src"])])])]),_:1}),a(u,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[a(X,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[a(x,null,{default:t(()=>[s("h4",se,[c(" Welcome to "),s("span",le,v(e(V).app.title),1),c("! 👋🏻 ")]),ie]),_:1}),a(x,null,{default:t(()=>[a(e(Y),{ref_key:"refVForm",ref:b,onSubmit:j(I,["prevent"])},{default:t(()=>[a(k,null,{default:t(()=>[a(u,{cols:"12"},{default:t(()=>[a(p,{modelValue:e(i).email,"onUpdate:modelValue":o[0]||(o[0]=l=>e(i).email=l),label:"Email",placeholder:"johndoe@email.com",type:"email",autofocus:"",rules:["requiredValidator"in r?r.requiredValidator:e(w),"emailValidator"in r?r.emailValidator:e(q)],"error-messages":e(m).errors.email},null,8,["modelValue","rules","error-messages"])]),_:1}),a(u,{cols:"12"},{default:t(()=>[a(p,{modelValue:e(i).password,"onUpdate:modelValue":o[1]||(o[1]=l=>e(i).password=l),label:"Password",placeholder:"············",rules:["requiredValidator"in r?r.requiredValidator:e(w)],type:e(d)?"text":"password","error-messages":e(m).errors.password,"append-inner-icon":e(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[2]||(o[2]=l=>d.value=!e(d))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),s("div",ne,[a(Z,{modelValue:e(m).rememberMe,"onUpdate:modelValue":o[3]||(o[3]=l=>e(m).rememberMe=l),label:"Remember Me"},null,8,["modelValue"])]),a(D,{block:"",type:"submit"},{default:t(()=>[c(" Login ")]),_:1})]),_:1}),a(u,{cols:"12",class:"text-center"},{default:t(()=>[me,a(n,{class:"text-primary ms-1",to:{name:"register"}},{default:t(()=>[c(" Create an account ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{He as default};
