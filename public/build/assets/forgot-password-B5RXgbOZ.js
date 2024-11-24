import{_ as I}from"./AppTextField-DgZofsLH.js";import{r as m,co as R,k as T,a as F,o as g,c as P,b as e,e as t,d as s,n as a,I as h,x as _,a7 as A,f as N,v as V,z as M,a8 as j,a2 as E,F as L}from"./main-D5McJ9Zv.js";import{u as z}from"./auth-CTL6A-W7.js";import{u as d,a as D,b as K}from"./misc-mask-light-DtqQYv1C.js";import{V as O}from"./VNodeRenderer-DQm_Ivdn.js";import{S as w}from"./sweetalert2-z6gKu1nJ.js";import{a as r,V as v}from"./VRow-D0QZu219.js";import{V as W}from"./VImg-Bp_ZHGHr.js";import{V as q}from"./VCard-Cgis6yXZ.js";import{V as x}from"./VCardText-ByrVCN3b.js";import{V as G}from"./VForm-CTPemAxI.js";import{V as H}from"./VAlert-DlRX-OZc.js";import"./VTextField-C6tY1X-k.js";import"./index-D8QWoZBU.js";import"./index-6ozB1_Sf.js";import"./forwardRefs-D3j0TLhE.js";import"./helpers-C_zUu5UZ.js";/* empty css              */import"./VAvatar-BewUqin6.js";const J="/build/assets/auth-v2-forgot-password-illustration-dark-CvJNzmSW.png",U="/build/assets/auth-v2-forgot-password-illustration-light-BAgKvSuW.png",$="/build/assets/login-image-BqaMlRfH.png",Q={class:"auth-logo d-flex align-center gap-x-3"},X={class:"auth-title"},Y={class:"position-relative bg-background w-100 me-0"},Z={class:"d-flex align-center justify-center w-100 h-100",style:{"padding-inline":"150px"}},ee=["src"],te=s("h4",{class:"text-h4 mb-1"}," Forgot Password? 🔒 ",-1),se=s("p",{class:"mb-0"}," Enter your email and we'll send you a temporary password ",-1),ae=s("span",null,"Back to login",-1),ye={__name:"forgot-password",setup(oe){const n=m(""),p=z(),{errors:f}=R(p),u=m(!1),i=m(""),b=T();d(U,J);const k=d(K,D),y=d($),S=async()=>{var c,l;u.value=!0,i.value="";try{const o=await p.resetPassword(n.value);i.value=o.message,w.fire({icon:"success",title:"Password Reset Successful",text:"A new password has been sent to your email.",confirmButtonText:"OK"}).then(()=>{b.push({name:"login"})}),n.value=""}catch(o){w.fire({icon:"error",title:"Error",text:((l=(c=o.response)==null?void 0:c.data)==null?void 0:l.message)||"An error occurred while resetting the password.",confirmButtonText:"OK"})}finally{u.value=!1}};return(c,l)=>{const o=F("RouterLink"),B=I;return g(),P(L,null,[e(o,{to:"/"},{default:t(()=>[s("div",Q,[e(a(O),{nodes:a(h).app.logo},null,8,["nodes"]),s("h1",X,_(a(h).app.title),1)])]),_:1}),e(v,{class:"auth-wrapper bg-surface","no-gutters":""},{default:t(()=>[e(r,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[s("div",Y,[s("div",Z,[e(W,{"max-width":"800",src:a(y),class:"auth-illustration mt-16 mb-2 flip-in-rtl"},null,8,["src"])]),s("img",{class:"auth-footer-mask flip-in-rtl",src:a(k),alt:"auth-footer-mask",height:"280",width:"100"},null,8,ee)])]),_:1}),e(r,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(q,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-6"},{default:t(()=>[e(x,null,{default:t(()=>[te,se]),_:1}),e(x,null,{default:t(()=>[e(G,{onSubmit:A(S,["prevent"])},{default:t(()=>[e(v,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(B,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=C=>n.value=C),autofocus:"",label:"Email",placeholder:"johndoe@email.com",type:"email","error-messages":a(f).email},null,8,["modelValue","error-messages"])]),_:1}),i.value?(g(),N(r,{key:0,cols:"12"},{default:t(()=>[e(H,{type:a(f).email?"error":"success",class:"mb-3"},{default:t(()=>[V(_(i.value),1)]),_:1},8,["type"])]),_:1})):M("",!0),e(r,{cols:"12"},{default:t(()=>[e(j,{block:"",type:"submit",loading:u.value},{default:t(()=>[V(" Send Temporary Password ")]),_:1},8,["loading"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(o,{class:"d-flex align-center justify-center",to:{name:"login"}},{default:t(()=>[e(E,{icon:"tabler-chevron-left",size:"20",class:"me-1 flip-in-rtl"}),ae]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{ye as default};
