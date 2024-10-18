import{_ as I}from"./AppTextField-CZ3OMAlt.js";import{r as c,cl as T,k as F,a as P,o as h,c as R,b as e,e as t,d as s,n as a,I as g,x as _,a6 as A,f as N,v as V,z as j,a7 as E,a1 as L,F as M}from"./main-Cp2POdXb.js";import{u as z}from"./auth-iLLORVCF.js";import{u as d,a as D,b as K}from"./misc-mask-light-DlAELlAq.js";import{l as O}from"./login-image-CycFNA80.js";import{V as W}from"./VNodeRenderer-BOrtmnwQ.js";import{S as w}from"./sweetalert2-z6gKu1nJ.js";import{a as r,V as v}from"./VRow-BcPNCwrl.js";import{V as G}from"./VImg-CgcLxCLJ.js";import{V as J}from"./VCard-oCmDgLNf.js";import{V as x}from"./VCardText-DIkb2F71.js";import{V as U}from"./VForm-Bbw74UUt.js";import{V as $}from"./VAlert-D4djiukh.js";import"./VTextField-DsBnAchm.js";import"./index-BkQ_qyLp.js";import"./index-ClsSkh9w.js";import"./forwardRefs-D9kYFWgq.js";import"./helpers-CwQmYJBr.js";import"./api-DlJz2cXw.js";import"./index-BYrzgnBV.js";/* empty css              */import"./VAvatar-DP4U1kqO.js";const q="/build/assets/auth-v2-forgot-password-illustration-dark-CvJNzmSW.png",H="/build/assets/auth-v2-forgot-password-illustration-light-BAgKvSuW.png",Q={class:"auth-logo d-flex align-center gap-x-3"},X={class:"auth-title"},Y={class:"position-relative bg-background w-100 me-0"},Z={class:"d-flex align-center justify-center w-100 h-100",style:{"padding-inline":"150px"}},ee=["src"],te=s("h4",{class:"text-h4 mb-1"}," Forgot Password? 🔒 ",-1),se=s("p",{class:"mb-0"}," Enter your email and we'll send you a temporary password ",-1),ae=s("span",null,"Back to login",-1),Ce={__name:"forgot-password",setup(oe){const n=c(""),p=z(),{errors:f}=T(p),u=c(!1),i=c(""),b=F();d(H,q);const k=d(K,D),y=d(O),S=async()=>{var m,l;u.value=!0,i.value="";try{const o=await p.resetPassword(n.value);i.value=o.message,w.fire({icon:"success",title:"Password Reset Successful",text:"A new password has been sent to your email.",confirmButtonText:"OK"}).then(()=>{b.push({name:"login"})}),n.value=""}catch(o){w.fire({icon:"error",title:"Error",text:((l=(m=o.response)==null?void 0:m.data)==null?void 0:l.message)||"An error occurred while resetting the password.",confirmButtonText:"OK"})}finally{u.value=!1}};return(m,l)=>{const o=P("RouterLink"),B=I;return h(),R(M,null,[e(o,{to:"/"},{default:t(()=>[s("div",Q,[e(a(W),{nodes:a(g).app.logo},null,8,["nodes"]),s("h1",X,_(a(g).app.title),1)])]),_:1}),e(v,{class:"auth-wrapper bg-surface","no-gutters":""},{default:t(()=>[e(r,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[s("div",Y,[s("div",Z,[e(G,{"max-width":"800",src:a(y),class:"auth-illustration mt-16 mb-2 flip-in-rtl"},null,8,["src"])]),s("img",{class:"auth-footer-mask flip-in-rtl",src:a(k),alt:"auth-footer-mask",height:"280",width:"100"},null,8,ee)])]),_:1}),e(r,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(J,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-6"},{default:t(()=>[e(x,null,{default:t(()=>[te,se]),_:1}),e(x,null,{default:t(()=>[e(U,{onSubmit:A(S,["prevent"])},{default:t(()=>[e(v,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(B,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=C=>n.value=C),autofocus:"",label:"Email",placeholder:"johndoe@email.com",type:"email","error-messages":a(f).email},null,8,["modelValue","error-messages"])]),_:1}),i.value?(h(),N(r,{key:0,cols:"12"},{default:t(()=>[e($,{type:a(f).email?"error":"success",class:"mb-3"},{default:t(()=>[V(_(i.value),1)]),_:1},8,["type"])]),_:1})):j("",!0),e(r,{cols:"12"},{default:t(()=>[e(E,{block:"",type:"submit",loading:u.value},{default:t(()=>[V(" Send Temporary Password ")]),_:1},8,["loading"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(o,{class:"d-flex align-center justify-center",to:{name:"login"}},{default:t(()=>[e(L,{icon:"tabler-chevron-left",size:"20",class:"me-1 flip-in-rtl"}),ae]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{Ce as default};
