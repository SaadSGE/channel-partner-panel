import{V as m}from"./VCard-D_9YY7eU.js";import{V as d}from"./VCardText-B_32FgjQ.js";import{r as g,o as h,c as D,b as e,e as t,a6 as a,d as n,v as u,t as f,a0 as w,m as V,a2 as v,F as z}from"./main--Sxm5_s2.js";import{V as p}from"./VDialog-CfanG9YN.js";const q=n("span",{class:"text-5xl"},"!",-1),S={class:"text-lg font-weight-medium"},T={class:"text-h4 mb-4"},B=n("span",{class:"text-5xl font-weight-light"},"X",-1),M={class:"text-h4 mb-4"},Q={__name:"ConfirmDialog",props:{confirmationQuestion:{type:String,required:!0},isDialogVisible:{type:Boolean,required:!0},confirmTitle:{type:String,required:!0},confirmMsg:{type:String,required:!0},cancelTitle:{type:String,required:!0},cancelMsg:{type:String,required:!0}},emits:["update:isDialogVisible","confirm"],setup(y,{emit:b}){const s=y,c=b,o=g(!1),i=g(!1),x=_=>{c("update:isDialogVisible",_)},k=()=>{c("confirm",!0),x(!1),o.value=!0},C=()=>{c("confirm",!1),c("update:isDialogVisible",!1),i.value=!0};return(_,l)=>(h(),D(z,null,[e(p,{"max-width":"500","model-value":s.isDialogVisible,"onUpdate:modelValue":x},{default:t(()=>[e(m,{class:"text-center px-10 py-6"},{default:t(()=>[e(d,null,{default:t(()=>[e(a,{icon:"",variant:"outlined",color:"warning",class:"my-4",style:{"block-size":"88px","inline-size":"88px","pointer-events":"none"}},{default:t(()=>[q]),_:1}),n("h6",S,u(s.confirmationQuestion),1)]),_:1}),e(d,{class:"d-flex align-center justify-center gap-2"},{default:t(()=>[e(a,{variant:"elevated",onClick:k},{default:t(()=>[f(" Confirm ")]),_:1}),e(a,{color:"secondary",variant:"tonal",onClick:C},{default:t(()=>[f(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]),e(p,{modelValue:V(o),"onUpdate:modelValue":l[1]||(l[1]=r=>v(o)?o.value=r:null),"max-width":"500"},{default:t(()=>[e(m,null,{default:t(()=>[e(d,{class:"text-center px-10 py-6"},{default:t(()=>[e(a,{icon:"",variant:"outlined",color:"success",class:"my-4",style:{"block-size":"88px","inline-size":"88px","pointer-events":"none"}},{default:t(()=>[e(w,{icon:"tabler-check",size:"38"})]),_:1}),n("h1",T,u(s.confirmTitle),1),n("p",null,u(s.confirmMsg),1),e(a,{color:"success",onClick:l[0]||(l[0]=r=>o.value=!1)},{default:t(()=>[f(" Ok ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(p,{modelValue:V(i),"onUpdate:modelValue":l[3]||(l[3]=r=>v(i)?i.value=r:null),"max-width":"500"},{default:t(()=>[e(m,null,{default:t(()=>[e(d,{class:"text-center px-10 py-6"},{default:t(()=>[e(a,{icon:"",variant:"outlined",color:"error",class:"my-4",style:{"block-size":"88px","inline-size":"88px","pointer-events":"none"}},{default:t(()=>[B]),_:1}),n("h1",M,u(s.cancelTitle),1),n("p",null,u(s.cancelMsg),1),e(a,{color:"success",onClick:l[2]||(l[2]=r=>i.value=!1)},{default:t(()=>[f(" Ok ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{Q as _};
