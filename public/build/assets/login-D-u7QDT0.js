import{r as v,e as R}from"./validators-DhsujtoB.js";import{r as V,j as S,k as B,a as F,o as M,c as T,b as a,e as t,d as l,n as e,I as g,x as k,v as f,a6 as D,a7 as j,F as A,ab as _,aA as N}from"./main-C3aczJNT.js";import{_ as P}from"./AppTextField-I5UKlFC7.js";import{u as U}from"./auth-CbtTPbea.js";import{u as h}from"./useGenerateImageVariant-BOrv7OMg.js";import{a as E,b as $,c as z,d as G}from"./auth-v2-login-illustration-light-CZAH_Qyi.js";import{a as H,b as K}from"./misc-mask-light-Ha4lQOdV.js";import{V as O}from"./VNodeRenderer-D-tO9Xd3.js";import{S as W}from"./sweetalert2-z6gKu1nJ.js";import{u as J}from"./useAbility-kwOHvVsW.js";import{a as u,V as x}from"./VRow-DZV-I3wT.js";import{V as Q}from"./VImg-BIXW4ypZ.js";import{V as X}from"./VCard-BoF5Se1H.js";import{V as L}from"./VCardText-DociP0vQ.js";import{V as Y}from"./VForm-BJS0-pq1.js";import{V as Z}from"./VCheckbox-DnS756o7.js";import"./helpers-DkHoQPEm.js";import"./form-DXUotdvJ.js";import"./VTextField-D1okVibP.js";/* empty css                   */import"./VCounter-DAsHO5of.js";import"./index-D3sZMnWI.js";import"./index-Ci2pHsMa.js";import"./VField-BBoh8nI9.js";import"./easing-CjukEv2V.js";import"./VInput-DvThVAav.js";import"./forwardRefs-C-GTDzx5.js";import"./api-WEQNakzg.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VAvatar-BM8r58xX.js";import"./VCheckboxBtn-CpzlI66m.js";import"./VSelectionControl-xLF5omUn.js";const ee="/build/assets/login-image-BqaMlRfH.png",ae={class:"auth-logo d-flex align-center gap-x-3"},te={class:"auth-title"},oe={class:"position-relative bg-background w-100 me-0"},re={class:"d-flex align-center justify-center w-100 h-100",style:{"padding-inline":"6.25rem"}},se={class:"text-h4 mb-1"},le={class:"text-capitalize"},ie=l("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),ne={class:"d-flex align-center flex-wrap justify-space-between my-6"},me=l("span",null,"New on our platform?",-1),Ge={__name:"login",setup(ue){h(G,z,$,E,!0),h(K,H);const C=h(ee),d=V(!1),b=V(),m=U(),p=S(),y=B(),q=J(),i=V({email:"",password:""}),I=()=>{var s;(s=b.value)==null||s.validate().then(async({valid:r})=>{if(r)try{const n=await m.login(i.value.email,i.value.password),{accessToken:c,userData:o,abilities:w}=n;_("userAbilityRules").value=w,q.update(w),o.main_role=o.role,o.role="admin",_("userData").value=o,_("accessToken").value=c,await N(()=>{o.main_role=="editor"?y.replace(p.query.to?String(p.query.to):"/record"):y.replace(p.query.to?String(p.query.to):"/")})}catch(n){W.fire({icon:"error",title:"Login Failed",text:"Credential not match",confirmButtonText:"OK"}),console.error("Login error:",n)}})};return(s,r)=>{const n=F("RouterLink"),c=P;return M(),T(A,null,[a(n,{to:"/"},{default:t(()=>[l("div",ae,[a(e(O),{nodes:e(g).app.logo},null,8,["nodes"]),l("h1",te,k(e(g).app.title),1)])]),_:1}),a(x,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:t(()=>[a(u,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[l("div",oe,[l("div",re,[a(Q,{src:e(C),class:"auth-illustration mt-16 mb-2"},null,8,["src"])])])]),_:1}),a(u,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[a(X,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[a(L,null,{default:t(()=>[l("h4",se,[f(" Welcome to "),l("span",le,k(e(g).app.title),1),f("! 👋🏻 ")]),ie]),_:1}),a(L,null,{default:t(()=>[a(e(Y),{ref_key:"refVForm",ref:b,onSubmit:D(I,["prevent"])},{default:t(()=>[a(x,null,{default:t(()=>[a(u,{cols:"12"},{default:t(()=>[a(c,{modelValue:e(i).email,"onUpdate:modelValue":r[0]||(r[0]=o=>e(i).email=o),label:"Email",placeholder:"johndoe@email.com",type:"email",autofocus:"",rules:["requiredValidator"in s?s.requiredValidator:e(v),"emailValidator"in s?s.emailValidator:e(R)],"error-messages":e(m).errors.email},null,8,["modelValue","rules","error-messages"])]),_:1}),a(u,{cols:"12"},{default:t(()=>[a(c,{modelValue:e(i).password,"onUpdate:modelValue":r[1]||(r[1]=o=>e(i).password=o),label:"Password",placeholder:"············",rules:["requiredValidator"in s?s.requiredValidator:e(v)],type:e(d)?"text":"password","error-messages":e(m).errors.password,"append-inner-icon":e(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":r[2]||(r[2]=o=>d.value=!e(d))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),l("div",ne,[a(Z,{modelValue:e(m).rememberMe,"onUpdate:modelValue":r[3]||(r[3]=o=>e(m).rememberMe=o),label:"Remember Me"},null,8,["modelValue"])]),a(j,{block:"",type:"submit"},{default:t(()=>[f(" Login ")]),_:1})]),_:1}),a(u,{cols:"12",class:"text-center"},{default:t(()=>[me,a(n,{class:"text-primary ms-1",to:{name:"register"}},{default:t(()=>[f(" Create an account ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{Ge as default};
