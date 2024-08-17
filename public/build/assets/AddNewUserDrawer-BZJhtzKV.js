import{r as m,e as O,c as L}from"./validators-HfjVqymk.js";import{k as T,r as V,H as $,o as U,f as M,e as t,b as a,a6 as G,n as s,c as I,F as H,z as K,a7 as q,v as S,d as W,aA as g}from"./main-DI9bilKL.js";import{_ as j}from"./AppAutocomplete-BHxpwZ0f.js";import{_ as z}from"./AppSelect-BrXo91Xc.js";import{_ as J}from"./AppTextField-DsHjZT-7.js";import{_ as Y}from"./AppDrawerHeaderSection-2jpy0xAy.js";import{u as Q}from"./auth-DS2DgnCE.js";import{u as X}from"./rolePermission-BYFK5S2R.js";import{S as D}from"./sweetalert2-z6gKu1nJ.js";import{P as Z}from"./vue3-perfect-scrollbar.esm-XD9SZbE3.js";import{V as h}from"./VNavigationDrawer-CJUiVSTr.js";import{V as x}from"./VDivider-DAeqrtiH.js";import{V as _}from"./VCard-CM7-Yo25.js";import{V as ee}from"./VCardText-YJJ07lj2.js";import{V as le}from"./VForm-BU55QTUp.js";import{V as ae,a as d}from"./VRow-avbXmunL.js";import{V as n}from"./VCheckbox-CNG8W-LL.js";import"./helpers-JeqSko8v.js";import"./form-CqRPo2MT.js";import"./VSelect-DuuJ4rQp.js";import"./VTextField-DgJlZB2d.js";/* empty css                   */import"./VCounter-C91_tcU4.js";import"./index-Bt4xwmVe.js";import"./index-ZRDCw_IN.js";import"./VField-Cj_qxRK6.js";import"./easing-CjukEv2V.js";import"./VInput-Hn6wtwNP.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-DFq4fc-g.js";import"./ssrBoot-Ba0Q5umV.js";import"./VAvatar-SvSnUnoG.js";import"./VImg-N6PQ5vsr.js";import"./dialog-transition-Ckjx3Wqh.js";import"./VMenu-BhFpX5K5.js";import"./VOverlay-D2JYMgZX.js";import"./lazy-DTqfz1uU.js";import"./scopeId-N86s5X-U.js";import"./VCheckboxBtn-xlQo9Aul.js";import"./VSelectionControl-DkC3uH3y.js";import"./VChip-DOcQPi_6.js";import"./VSlideGroup-CuaNqhyO.js";import"./filter-C5e2TWQS.js";import"./VSpacer-3iVp6ZaS.js";/* empty css              */import"./api-B3i4OeVA.js";import"./index-B3bPRkoL.js";const re=W("label",null,"Country Recruit For",-1),he={__name:"AddNewUserDrawer",props:{isDrawerOpen:{type:Boolean,required:!0}},emits:["update:isDrawerOpen","userData"],setup(B,{emit:A}){const k=B,f=A,c=X(),F=Q();T();const C=V(!1),p=V(),N=V([]),o=V({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",mobileNumber:"",whatsappNumber:"",companyName:"",website:"",address:"",city:"",postCode:"",country:"",role:"",status:"",avatar:"",createForm:"admin"}),i=V({recruitCountries:[]});$(async()=>{await c.getAllRoles(),N.value=c.roles});const y=()=>{f("update:isDrawerOpen",!1),g(()=>{var r,e;(r=p.value)==null||r.reset(),(e=p.value)==null||e.resetValidation()})},P=r=>r?r.toLowerCase():"",R=async()=>{var r;(r=p.value)==null||r.validate().then(async({valid:e})=>{var v;if(e)try{const u={...o.value,...i.value};await F.register(u),D.fire({icon:"success",title:"Registration Successful",text:"You have been registered successfully!",confirmButtonText:"OK"}),f("userData",u),f("update:isDrawerOpen",!1),g(()=>{var b,w;(b=p.value)==null||b.reset(),(w=p.value)==null||w.resetValidation(),i.value.recruitCountries=[]})}catch(u){console.error("Error in registration:",u),D.fire({icon:"error",title:"Registration Failed",text:((v=u.response)==null?void 0:v.data.message)||"An unexpected error occurred",confirmButtonText:"OK"})}})},E=r=>{f("update:isDrawerOpen",r)};return(r,e)=>{const v=Y,u=J,b=z,w=j;return U(),M(h,{temporary:"",width:400,location:"end",class:"scrollable-content","model-value":k.isDrawerOpen,"onUpdate:modelValue":E},{default:t(()=>[a(v,{title:"Add New User",onCancel:y}),a(x),a(s(Z),{options:{wheelPropagation:!1}},{default:t(()=>[a(_,{flat:""},{default:t(()=>[a(ee,null,{default:t(()=>[a(le,{ref_key:"refForm",ref:p,modelValue:C.value,"onUpdate:modelValue":e[21]||(e[21]=l=>C.value=l),onSubmit:G(R,["prevent"])},{default:t(()=>[a(ae,null,{default:t(()=>[a(d,{cols:"12",md:"6"},{default:t(()=>[a(u,{modelValue:o.value.firstName,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value.firstName=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"First Name",placeholder:"John"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12",md:"6"},{default:t(()=>[a(u,{modelValue:o.value.lastName,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.lastName=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"Last Name",placeholder:"Doe"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(u,{modelValue:o.value.email,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value.email=l),rules:["requiredValidator"in r?r.requiredValidator:s(m),"emailValidator"in r?r.emailValidator:s(O)],label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12",md:"6"},{default:t(()=>[a(u,{modelValue:o.value.password,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value.password=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"Password",type:"password",placeholder:"Enter your password"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12",md:"6"},{default:t(()=>[a(u,{modelValue:o.value.confirmPassword,"onUpdate:modelValue":e[4]||(e[4]=l=>o.value.confirmPassword=l),rules:["requiredValidator"in r?r.requiredValidator:s(m),("confirmedValidator"in r?r.confirmedValidator:s(L))(o.value.confirmPassword,o.value.password)],label:"Confirm Password",type:"password",placeholder:"Confirm your password"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(u,{modelValue:o.value.mobileNumber,"onUpdate:modelValue":e[5]||(e[5]=l=>o.value.mobileNumber=l),label:"Mobile Number (optional)",type:"tel",placeholder:"+1-541-754-3010"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(u,{modelValue:o.value.whatsappNumber,"onUpdate:modelValue":e[6]||(e[6]=l=>o.value.whatsappNumber=l),label:"WhatsApp Number (optional)",type:"tel",placeholder:"+1-541-754-3010"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(b,{modelValue:o.value.role,"onUpdate:modelValue":e[7]||(e[7]=l=>o.value.role=l),label:"Select Role",placeholder:"Select Role",rules:["requiredValidator"in r?r.requiredValidator:s(m)],items:N.value,"item-title":l=>l.role,"item-value":l=>l.role},null,8,["modelValue","rules","items","item-title","item-value"])]),_:1}),P(o.value.role)==="channel partner"?(U(),I(H,{key:0},[a(d,{cols:"12"},{default:t(()=>[a(u,{modelValue:o.value.companyName,"onUpdate:modelValue":e[8]||(e[8]=l=>o.value.companyName=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"Company Name",placeholder:"Enter company name"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(u,{modelValue:o.value.website,"onUpdate:modelValue":e[9]||(e[9]=l=>o.value.website=l),label:"Website",placeholder:"Enter website URL"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(u,{modelValue:o.value.address,"onUpdate:modelValue":e[10]||(e[10]=l=>o.value.address=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"Address",placeholder:"Enter address"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(u,{modelValue:o.value.city,"onUpdate:modelValue":e[11]||(e[11]=l=>o.value.city=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"City",placeholder:"Enter city"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(u,{modelValue:o.value.postCode,"onUpdate:modelValue":e[12]||(e[12]=l=>o.value.postCode=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"Post Code",placeholder:"Enter post code"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(w,{modelValue:o.value.country,"onUpdate:modelValue":e[13]||(e[13]=l=>o.value.country=l),label:"Select Country",placeholder:"Select Country",rules:["requiredValidator"in r?r.requiredValidator:s(m)],items:["India","Bangladesh","Nigeria","Nepal","Bhutan","Ghana","Sri Lanka"]},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[re,a(n,{value:"Nigeria",label:"Nigeria",modelValue:i.value.recruitCountries,"onUpdate:modelValue":e[14]||(e[14]=l=>i.value.recruitCountries=l)},null,8,["modelValue"]),a(n,{value:"India",label:"India",modelValue:i.value.recruitCountries,"onUpdate:modelValue":e[15]||(e[15]=l=>i.value.recruitCountries=l)},null,8,["modelValue"]),a(n,{value:"Bangladesh",label:"Bangladesh",modelValue:i.value.recruitCountries,"onUpdate:modelValue":e[16]||(e[16]=l=>i.value.recruitCountries=l)},null,8,["modelValue"]),a(n,{value:"Nepal",label:"Nepal",modelValue:i.value.recruitCountries,"onUpdate:modelValue":e[17]||(e[17]=l=>i.value.recruitCountries=l)},null,8,["modelValue"]),a(n,{value:"Bhutan",label:"Bhutan",modelValue:i.value.recruitCountries,"onUpdate:modelValue":e[18]||(e[18]=l=>i.value.recruitCountries=l)},null,8,["modelValue"]),a(n,{value:"Ghana",label:"Ghana",modelValue:i.value.recruitCountries,"onUpdate:modelValue":e[19]||(e[19]=l=>i.value.recruitCountries=l)},null,8,["modelValue"]),a(n,{value:"Sri Lanka",label:"Sri Lanka",modelValue:i.value.recruitCountries,"onUpdate:modelValue":e[20]||(e[20]=l=>i.value.recruitCountries=l)},null,8,["modelValue"])]),_:1})],64)):K("",!0),a(d,{cols:"12"},{default:t(()=>[a(q,{type:"submit",class:"me-3"},{default:t(()=>[S(" Submit ")]),_:1}),a(q,{type:"reset",variant:"tonal",color:"error",onClick:y},{default:t(()=>[S(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}};export{he as default};
