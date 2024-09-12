import{_ as T}from"./AppTextField-NIranakw.js";import{r as c,d8 as C,k as F,a as P,o as h,c as R,b as e,e as t,d as a,n as s,I as _,x as g,a6 as A,f as N,v as V,z as j,a7 as E,a1 as L,F as M}from"./main-BSpI_2CL.js";import{u as D}from"./auth-CgvYuRsX.js";import{u as d}from"./useGenerateImageVariant-D6h_aeLb.js";import{a as z,b as K}from"./auth-v2-forgot-password-illustration-light-SXBFhqP4.js";import{l as O}from"./login-image-CycFNA80.js";import{a as G,b as U}from"./misc-mask-light-Ha4lQOdV.js";import{V as $}from"./VNodeRenderer-CHyEIDEU.js";import{S as w}from"./sweetalert2-z6gKu1nJ.js";import{a as r,V as x}from"./VRow-a18vhg8U.js";import{V as q}from"./VImg-o7pbezjE.js";import{V as H}from"./VCard-CpeE6zKp.js";import{V as v}from"./VCardText-B0hdZjM1.js";import{V as J}from"./VForm-DAMOE1Td.js";import{V as Q}from"./VAlert-YmiiUWn1.js";import"./form-CMEPPpeo.js";import"./VTextField-CERBXMv-.js";/* empty css                   */import"./VCounter-Dl8l4qQU.js";import"./index-fUpBkQ-C.js";import"./index-Dd4E7JjT.js";import"./VField-BOwtP06I.js";import"./easing-CjukEv2V.js";import"./VInput-BL92zCDM.js";import"./forwardRefs-C-GTDzx5.js";import"./helpers-CZK5uZEr.js";import"./api-BT0-XMST.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VAvatar-BRryBAB-.js";const W={class:"auth-logo d-flex align-center gap-x-3"},X={class:"auth-title"},Y={class:"position-relative bg-background w-100 me-0"},Z={class:"d-flex align-center justify-center w-100 h-100",style:{"padding-inline":"150px"}},ee=["src"],te=a("h4",{class:"text-h4 mb-1"}," Forgot Password? 🔒 ",-1),ae=a("p",{class:"mb-0"}," Enter your email and we'll send you a temporary password ",-1),se=a("span",null,"Back to login",-1),je={__name:"forgot-password",setup(oe){const i=c(""),p=D(),{errors:f}=C(p),m=c(!1),n=c(""),y=F();d(K,z);const b=d(U,G),k=d(O),S=async()=>{var u,l;m.value=!0,n.value="";try{const o=await p.resetPassword(i.value);n.value=o.message,w.fire({icon:"success",title:"Password Reset Successful",text:"A new password has been sent to your email.",confirmButtonText:"OK"}).then(()=>{y.push({name:"login"})}),i.value=""}catch(o){w.fire({icon:"error",title:"Error",text:((l=(u=o.response)==null?void 0:u.data)==null?void 0:l.message)||"An error occurred while resetting the password.",confirmButtonText:"OK"})}finally{m.value=!1}};return(u,l)=>{const o=P("RouterLink"),B=T;return h(),R(M,null,[e(o,{to:"/"},{default:t(()=>[a("div",W,[e(s($),{nodes:s(_).app.logo},null,8,["nodes"]),a("h1",X,g(s(_).app.title),1)])]),_:1}),e(x,{class:"auth-wrapper bg-surface","no-gutters":""},{default:t(()=>[e(r,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[a("div",Y,[a("div",Z,[e(q,{"max-width":"800",src:s(k),class:"auth-illustration mt-16 mb-2 flip-in-rtl"},null,8,["src"])]),a("img",{class:"auth-footer-mask flip-in-rtl",src:s(b),alt:"auth-footer-mask",height:"280",width:"100"},null,8,ee)])]),_:1}),e(r,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(H,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-6"},{default:t(()=>[e(v,null,{default:t(()=>[te,ae]),_:1}),e(v,null,{default:t(()=>[e(J,{onSubmit:A(S,["prevent"])},{default:t(()=>[e(x,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(B,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=I=>i.value=I),autofocus:"",label:"Email",placeholder:"johndoe@email.com",type:"email","error-messages":s(f).email},null,8,["modelValue","error-messages"])]),_:1}),n.value?(h(),N(r,{key:0,cols:"12"},{default:t(()=>[e(Q,{type:s(f).email?"error":"success",class:"mb-3"},{default:t(()=>[V(g(n.value),1)]),_:1},8,["type"])]),_:1})):j("",!0),e(r,{cols:"12"},{default:t(()=>[e(E,{block:"",type:"submit",loading:m.value},{default:t(()=>[V(" Send Temporary Password ")]),_:1},8,["loading"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(o,{class:"d-flex align-center justify-center",to:{name:"login"}},{default:t(()=>[e(L,{icon:"tabler-chevron-left",size:"20",class:"me-1 flip-in-rtl"}),se]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{je as default};