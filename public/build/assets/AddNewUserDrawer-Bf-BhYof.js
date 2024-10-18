import{r as m,e as L,c as T}from"./validators-C0afK3CL.js";import{k as $,r as f,H as I,o as N,f as M,e as u,b as a,a6 as G,n as s,c as H,F as K,z as W,a7 as U,v as q,d as j,aF as g}from"./main-Cp2POdXb.js";import{_ as z}from"./AppAutocomplete-BNiahicf.js";import{_ as J}from"./AppSelect-CwPVrUcc.js";import{_ as Y}from"./AppTextField-CZ3OMAlt.js";import{_ as Q}from"./AppDrawerHeaderSection-nb-JI6ng.js";import{u as X}from"./auth-iLLORVCF.js";import{u as Z}from"./rolePermission-CcRFK9eF.js";import{S}from"./sweetalert2-z6gKu1nJ.js";import{P as h}from"./vue3-perfect-scrollbar.esm-C7kiyJub.js";import{V as _}from"./VNavigationDrawer-6MheYzOi.js";import{V as x}from"./VDivider-DEaYy4t1.js";import{V as ee}from"./VCard-oCmDgLNf.js";import{V as le}from"./VCardText-DIkb2F71.js";import{V as ae}from"./VForm-Bbw74UUt.js";import{V as oe,a as i}from"./VRow-BcPNCwrl.js";import{V as D}from"./VFileInput-DPMTYZ6D.js";import{V as p}from"./VCheckbox-Bp77_nxV.js";import"./helpers-CwQmYJBr.js";import"./VTextField-DsBnAchm.js";import"./index-BkQ_qyLp.js";import"./index-ClsSkh9w.js";import"./forwardRefs-D9kYFWgq.js";import"./VSelect-Ax2TYqix.js";import"./VList-Cacr4NmG.js";import"./ssrBoot-CQ8JDYey.js";import"./VAvatar-DP4U1kqO.js";import"./VImg-CgcLxCLJ.js";import"./dialog-transition-1LjPfX5Q.js";import"./scopeId-COQ9BaAw.js";import"./VMenu-D59SCE8_.js";import"./VCheckboxBtn-D1rA0Sil.js";import"./VChip-ihqZWhi4.js";import"./filter-D-tUSS7Z.js";import"./VSpacer-i5anbK_5.js";/* empty css              */import"./api-DlJz2cXw.js";import"./index-BYrzgnBV.js";const re=j("label",null,"Country Recruit For",-1),We={__name:"AddNewUserDrawer",props:{isDrawerOpen:{type:Boolean,required:!0}},emits:["update:isDrawerOpen","userData"],setup(F,{emit:B}){const k=F,v=B,b=Z(),A=X();$();const w=f(!1),V=f(),C=f([]),o=f({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",mobileNumber:"",whatsappNumber:"",companyName:"",website:"",address:"",city:"",postCode:"",country:"",role:"",status:"",avatar:"",createForm:"admin",agreement:null,commission_structure:null}),d=f({recruitCountries:[]});I(async()=>{await b.getAllRoles(),C.value=b.roles});const y=()=>{v("update:isDrawerOpen",!1),g(()=>{var r,e;(r=V.value)==null||r.reset(),(e=V.value)==null||e.resetValidation()})},P=r=>r?r.toLowerCase():"",R=async()=>{var r;(r=V.value)==null||r.validate().then(async({valid:e})=>{if(e)try{const n=new FormData;for(const t in o.value)o.value[t]&&n.append(t,o.value[t]);for(const t of d.value.recruitCountries)n.append("recruitCountries[]",t);o.value.agreement&&(n.append("document_type","agreement"),n.append("agreement",o.value.agreement[0])),o.value.commission_structure&&(n.append("document_type","commission_structure"),n.append("commission_structure",o.value.commission_structure[0])),await A.register(n),S.fire({icon:"success",title:"Registration Successful",text:"You have been registered successfully!",confirmButtonText:"OK"}),v("userData",n),v("update:isDrawerOpen",!1),g(()=>{var t,c;(t=V.value)==null||t.reset(),(c=V.value)==null||c.resetValidation(),d.value.recruitCountries=[]})}catch(n){S.fire({icon:"error",title:"Registration Failed",text:n,confirmButtonText:"OK"})}})},E=r=>{v("update:isDrawerOpen",r)};return(r,e)=>{const n=Q,t=Y,c=J,O=z;return N(),M(_,{temporary:"",width:400,location:"end",class:"scrollable-content","model-value":k.isDrawerOpen,"onUpdate:modelValue":E},{default:u(()=>[a(n,{title:"Add New User",onCancel:y}),a(x),a(s(h),{options:{wheelPropagation:!1}},{default:u(()=>[a(ee,{flat:""},{default:u(()=>[a(le,null,{default:u(()=>[a(ae,{ref_key:"refForm",ref:V,modelValue:w.value,"onUpdate:modelValue":e[23]||(e[23]=l=>w.value=l),onSubmit:G(R,["prevent"])},{default:u(()=>[a(oe,null,{default:u(()=>[a(i,{cols:"12",md:"6"},{default:u(()=>[a(t,{modelValue:o.value.firstName,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value.firstName=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"First Name",placeholder:"John"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12",md:"6"},{default:u(()=>[a(t,{modelValue:o.value.lastName,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.lastName=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"Last Name",placeholder:"Doe"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12"},{default:u(()=>[a(t,{modelValue:o.value.email,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value.email=l),rules:["requiredValidator"in r?r.requiredValidator:s(m),"emailValidator"in r?r.emailValidator:s(L)],label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12",md:"6"},{default:u(()=>[a(t,{modelValue:o.value.password,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value.password=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"Password",type:"password",placeholder:"Enter your password"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12",md:"6"},{default:u(()=>[a(t,{modelValue:o.value.confirmPassword,"onUpdate:modelValue":e[4]||(e[4]=l=>o.value.confirmPassword=l),rules:["requiredValidator"in r?r.requiredValidator:s(m),("confirmedValidator"in r?r.confirmedValidator:s(T))(o.value.confirmPassword,o.value.password)],label:"Confirm Password",type:"password",placeholder:"Confirm your password"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12"},{default:u(()=>[a(t,{modelValue:o.value.mobileNumber,"onUpdate:modelValue":e[5]||(e[5]=l=>o.value.mobileNumber=l),label:"Mobile Number (optional)",type:"tel",placeholder:"+1-541-754-3010"},null,8,["modelValue"])]),_:1}),a(i,{cols:"12"},{default:u(()=>[a(t,{modelValue:o.value.whatsappNumber,"onUpdate:modelValue":e[6]||(e[6]=l=>o.value.whatsappNumber=l),label:"WhatsApp Number (optional)",type:"tel",placeholder:"+1-541-754-3010"},null,8,["modelValue"])]),_:1}),a(i,{cols:"12"},{default:u(()=>[a(c,{modelValue:o.value.role,"onUpdate:modelValue":e[7]||(e[7]=l=>o.value.role=l),label:"Select Role",placeholder:"Select Role",rules:["requiredValidator"in r?r.requiredValidator:s(m)],items:C.value,"item-title":l=>l.role,"item-value":l=>l.role},null,8,["modelValue","rules","items","item-title","item-value"])]),_:1}),P(o.value.role)==="channel partner"?(N(),H(K,{key:0},[a(i,{cols:"12"},{default:u(()=>[a(D,{chips:"",modelValue:o.value.agreement,"onUpdate:modelValue":e[8]||(e[8]=l=>o.value.agreement=l),label:"Upload Agreement"},null,8,["modelValue"])]),_:1}),a(i,{cols:"12"},{default:u(()=>[a(D,{chips:"",modelValue:o.value.commission_structure,"onUpdate:modelValue":e[9]||(e[9]=l=>o.value.commission_structure=l),label:"Upload Commission Structure"},null,8,["modelValue"])]),_:1}),a(i,{cols:"12"},{default:u(()=>[a(t,{modelValue:o.value.companyName,"onUpdate:modelValue":e[10]||(e[10]=l=>o.value.companyName=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"Company Name",placeholder:"Enter company name"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12"},{default:u(()=>[a(t,{modelValue:o.value.website,"onUpdate:modelValue":e[11]||(e[11]=l=>o.value.website=l),label:"Website",placeholder:"Enter website URL"},null,8,["modelValue"])]),_:1}),a(i,{cols:"12"},{default:u(()=>[a(t,{modelValue:o.value.address,"onUpdate:modelValue":e[12]||(e[12]=l=>o.value.address=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"Address",placeholder:"Enter address"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12"},{default:u(()=>[a(t,{modelValue:o.value.city,"onUpdate:modelValue":e[13]||(e[13]=l=>o.value.city=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"City",placeholder:"Enter city"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12"},{default:u(()=>[a(t,{modelValue:o.value.postCode,"onUpdate:modelValue":e[14]||(e[14]=l=>o.value.postCode=l),rules:["requiredValidator"in r?r.requiredValidator:s(m)],label:"Post Code",placeholder:"Enter post code"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12"},{default:u(()=>[a(O,{modelValue:o.value.country,"onUpdate:modelValue":e[15]||(e[15]=l=>o.value.country=l),label:"Select Country",placeholder:"Select Country",rules:["requiredValidator"in r?r.requiredValidator:s(m)],items:["India","Bangladesh","Nigeria","Nepal","Bhutan","Ghana","Sri Lanka"]},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12"},{default:u(()=>[re,a(p,{value:"Nigeria",label:"Nigeria",modelValue:d.value.recruitCountries,"onUpdate:modelValue":e[16]||(e[16]=l=>d.value.recruitCountries=l)},null,8,["modelValue"]),a(p,{value:"India",label:"India",modelValue:d.value.recruitCountries,"onUpdate:modelValue":e[17]||(e[17]=l=>d.value.recruitCountries=l)},null,8,["modelValue"]),a(p,{value:"Bangladesh",label:"Bangladesh",modelValue:d.value.recruitCountries,"onUpdate:modelValue":e[18]||(e[18]=l=>d.value.recruitCountries=l)},null,8,["modelValue"]),a(p,{value:"Nepal",label:"Nepal",modelValue:d.value.recruitCountries,"onUpdate:modelValue":e[19]||(e[19]=l=>d.value.recruitCountries=l)},null,8,["modelValue"]),a(p,{value:"Bhutan",label:"Bhutan",modelValue:d.value.recruitCountries,"onUpdate:modelValue":e[20]||(e[20]=l=>d.value.recruitCountries=l)},null,8,["modelValue"]),a(p,{value:"Ghana",label:"Ghana",modelValue:d.value.recruitCountries,"onUpdate:modelValue":e[21]||(e[21]=l=>d.value.recruitCountries=l)},null,8,["modelValue"]),a(p,{value:"Sri Lanka",label:"Sri Lanka",modelValue:d.value.recruitCountries,"onUpdate:modelValue":e[22]||(e[22]=l=>d.value.recruitCountries=l)},null,8,["modelValue"])]),_:1})],64)):W("",!0),a(i,{cols:"12"},{default:u(()=>[a(U,{type:"submit",class:"me-3"},{default:u(()=>[q(" Submit ")]),_:1}),a(U,{type:"reset",variant:"tonal",color:"error",onClick:y},{default:u(()=>[q(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}};export{We as default};
