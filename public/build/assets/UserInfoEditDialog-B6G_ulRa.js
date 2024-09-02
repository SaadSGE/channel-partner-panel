import{_ as N}from"./AppSelect-DYC1_d_9.js";import{_ as w}from"./AppTextField-BWfr7uEL.js";import{_ as C}from"./DialogCloseBtn-BdwHj_uM.js";import{r as c,aq as V,w as S,o as h,f as A,e as s,b as e,a6 as B,n as o,a3 as F,a7 as b,v as g,d as U}from"./main-DYSjY2V3.js";import{V as I}from"./VCard-CiYH5VQe.js";import{V as j}from"./VCardText-BxWv1fYU.js";import{V as k}from"./VForm-DEOEi-I4.js";import{V as E,a as d}from"./VRow-BB7ODKef.js";import{V as $}from"./VSwitch-C7dR_JNk.js";import{V as R}from"./VDialog-BmbKgerv.js";const T=U("h4",{class:"text-h4 text-center mb-2"}," Edit User Information ",-1),q=U("p",{class:"text-body-1 text-center mb-6"}," Updating user details will receive a privacy audit. ",-1),W={__name:"UserInfoEditDialog",props:{userData:{type:Object,required:!1,default:()=>({id:0,fullName:"",firstName:"",lastName:"",company:"",role:"",username:"",country:"",contact:"",email:"",currentPlan:"",status:"",avatar:"",taskDone:null,projectDone:null,taxId:"",language:""})},isDialogVisible:{type:Boolean,required:!0}},emits:["submit","update:isDialogVisible"],setup(_,{emit:D}){const n=_,m=D,a=c(structuredClone(V(n.userData))),i=c(!1);S(n,()=>{a.value=structuredClone(V(n.userData))});const v=()=>{m("update:isDialogVisible",!1),m("submit",a.value)},x=()=>{a.value=structuredClone(V(n.userData)),m("update:isDialogVisible",!1)},f=r=>{m("update:isDialogVisible",r)};return(r,l)=>{const y=C,u=w,p=N;return h(),A(R,{width:r.$vuetify.display.smAndDown?"auto":900,"model-value":n.isDialogVisible,"onUpdate:modelValue":f},{default:s(()=>[e(y,{onClick:l[0]||(l[0]=t=>f(!1))}),e(I,{class:"pa-sm-10 pa-2"},{default:s(()=>[e(j,null,{default:s(()=>[T,q,e(k,{class:"mt-6",onSubmit:B(v,["prevent"])},{default:s(()=>[e(E,null,{default:s(()=>[e(d,{cols:"12",md:"6"},{default:s(()=>[e(u,{modelValue:o(a).firstName,"onUpdate:modelValue":l[1]||(l[1]=t=>o(a).firstName=t),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:s(()=>[e(u,{modelValue:o(a).lastName,"onUpdate:modelValue":l[2]||(l[2]=t=>o(a).lastName=t),label:"Last Name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:s(()=>[e(u,{modelValue:o(a).username,"onUpdate:modelValue":l[3]||(l[3]=t=>o(a).username=t),label:"Username",placeholder:"john.doe.007"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:s(()=>[e(u,{modelValue:o(a).email,"onUpdate:modelValue":l[4]||(l[4]=t=>o(a).email=t),label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:s(()=>[e(p,{modelValue:o(a).status,"onUpdate:modelValue":l[5]||(l[5]=t=>o(a).status=t),label:"Status",placeholder:"Active",items:["Active","Inactive","Pending"]},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:s(()=>[e(u,{modelValue:o(a).taxId,"onUpdate:modelValue":l[6]||(l[6]=t=>o(a).taxId=t),label:"Tax ID",placeholder:"123456789"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:s(()=>[e(u,{modelValue:o(a).contact,"onUpdate:modelValue":l[7]||(l[7]=t=>o(a).contact=t),label:"Phone Number",placeholder:"+1 9876543210"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:s(()=>[e(p,{modelValue:o(a).language,"onUpdate:modelValue":l[8]||(l[8]=t=>o(a).language=t),"closable-chips":"",chips:"",multiple:"",label:"Language",placeholder:"English",items:["English","Spanish","French"]},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:s(()=>[e(p,{modelValue:o(a).country,"onUpdate:modelValue":l[9]||(l[9]=t=>o(a).country=t),label:"Country",placeholder:"United States",items:["United States","United Kingdom","France"]},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:s(()=>[e($,{modelValue:o(i),"onUpdate:modelValue":l[10]||(l[10]=t=>F(i)?i.value=t:null),density:"compact",label:"Use as a billing address?"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:s(()=>[e(b,{type:"submit"},{default:s(()=>[g(" Submit ")]),_:1}),e(b,{color:"secondary",variant:"tonal",onClick:x},{default:s(()=>[g(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}};export{W as _};
