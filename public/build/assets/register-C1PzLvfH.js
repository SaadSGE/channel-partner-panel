import{r as u,e as q,c as I}from"./validators-DLm9bwa3.js";import{k as E,r as V,a as M,o as U,c as A,b as e,e as i,d as m,n as t,I as g,x as P,a8 as R,a9 as T,v,F as L,R as G,U as z}from"./main-Z3go8Xzc.js";import{_ as D}from"./AppTextField-DC2x1dsw.js";import{_ as h}from"./AppAutocomplete-DVX6hFXO.js";import{u as K}from"./auth-CZAAsovr.js";import{u as w,a as F,b as _}from"./misc-mask-light-DPnW3lun.js";import{V as j}from"./VNodeRenderer-CUg7rlD4.js";import{S as C}from"./sweetalert2-z6gKu1nJ.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as s,V as b}from"./VRow-eo7qXlZG.js";import{V as Z}from"./VCard-B6jmDFyP.js";import{V as S}from"./VCardText-Bjotn_eE.js";import{V as $}from"./VForm-CRZr7ck4.js";import"./helpers-Bzg9TCNL.js";import"./VInput-KBboyctu.js";import"./index-BgvB69-2.js";import"./index-CJOm_KJi.js";import"./forwardRefs-D3j0TLhE.js";import"./VTextField-B1_fIF9I.js";import"./VSelect-DZ8I6LSD.js";import"./VList-CuZQ3pYZ.js";import"./ssrBoot-CoAt9jNJ.js";import"./VAvatar-DFwpysqo.js";import"./VImg-DvovO2d-.js";import"./VDivider-SUUc1KGp.js";import"./dialog-transition-6CoWjX9C.js";import"./scopeId-Brt4yQ2W.js";import"./VMenu-CiscxyXl.js";import"./VCheckboxBtn-GLY3abaH.js";import"./VChip-CISZQW4c.js";import"./filter-CBgIupOh.js";/* empty css              */const J="/build/assets/auth-v2-register-illustration-bordered-dark-DATv6AkE.png",O="/build/assets/auth-v2-register-illustration-bordered-light-efkpyIZr.png",W="/build/assets/auth-v2-register-illustration-dark-C-ca1QvB.png",Y="/build/assets/auth-v2-register-illustration-light-BRfYNCm0.png",p=c=>(G("data-v-1d98ad9c"),c=c(),z(),c),Q={class:"auth-logo d-flex align-center gap-x-3"},x={class:"auth-title"},X=p(()=>m("h4",{class:"text-h4 mb-1"},"Register User",-1)),ee=p(()=>m("h3",null,"Personal Information",-1)),ae=p(()=>m("h3",{class:"mt-8"},"Company Details",-1)),le=p(()=>m("h3",{class:"mt-8"},"Country you recruit from *",-1)),re=p(()=>m("span",{class:"d-inline-block"},"Already have an account?",-1)),oe={__name:"register",setup(c){const N=E();w(Y,W,O,J,!0),w(_,F),V(!0),V(!1);const a=V({firstName:"",lastName:"",email:"",mobileNumber:"",whatsappNumber:"",companyName:"",website:"",address:"",city:"",postCode:"",country:"",password:"",recruitCountries:[],privacyPolicies:!1}),d=V(!1),k=K(),B=async()=>{try{const r=await k.register(a.value);C.fire({icon:"success",title:"Registration Successful",text:"You have been registered successfully!",confirmButtonText:"OK"}),a.value={firstName:"",lastName:"",email:"",mobileNumber:"",whatsappNumber:"",companyName:"",website:"",address:"",city:"",postCode:"",country:"",password:"",recruitCountries:[],privacyPolicies:!1,confirmPassword:""},N.push({name:"login"})}catch(r){console.error("Error in registration:",r),C.fire({icon:"error",title:"Registration Failed",text:r,confirmButtonText:"OK"})}},f=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];return(r,l)=>{const y=M("RouterLink"),n=D;return U(),A(L,null,[e(y,{to:"/"},{default:i(()=>[m("div",Q,[e(t(j),{nodes:t(g).app.logo},null,8,["nodes"]),m("h1",x,P(t(g).app.title),1)])]),_:1}),e(b,{"no-gutters":"",class:"auth-wrapper bg-surface mt-15"},{default:i(()=>[e(s,{cols:"12",class:"auth-card-v2 d-flex align-center justify-center",style:{"background-color":"white"}},{default:i(()=>[e(Z,{class:"mt-12 mt-sm-0 pa-4",width:"100%","max-width":"1200"},{default:i(()=>[e(S,null,{default:i(()=>[X]),_:1}),e(S,null,{default:i(()=>[e(t($),{onSubmit:R(B,["prevent"])},{default:i(()=>[ee,e(b,null,{default:i(()=>[e(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[e(n,{modelValue:a.value.firstName,"onUpdate:modelValue":l[0]||(l[0]=o=>a.value.firstName=o),rules:["requiredValidator"in r?r.requiredValidator:t(u)],label:"First Name *",placeholder:"Enter your first name"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[e(n,{modelValue:a.value.lastName,"onUpdate:modelValue":l[1]||(l[1]=o=>a.value.lastName=o),rules:["requiredValidator"in r?r.requiredValidator:t(u)],label:"Last Name *",placeholder:"Enter your last name"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"4",sm:"12"},{default:i(()=>[e(n,{modelValue:a.value.email,"onUpdate:modelValue":l[2]||(l[2]=o=>a.value.email=o),rules:["requiredValidator"in r?r.requiredValidator:t(u),"emailValidator"in r?r.emailValidator:t(q)],label:"Email *",type:"email",placeholder:"Enter your email address"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"4",sm:"12"},{default:i(()=>[e(n,{modelValue:a.value.mobileNumber,"onUpdate:modelValue":l[3]||(l[3]=o=>a.value.mobileNumber=o),label:"Mobile No",type:"text",placeholder:"Enter your mobile number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"4",sm:"12"},{default:i(()=>[e(n,{modelValue:a.value.whatsappNumber,"onUpdate:modelValue":l[4]||(l[4]=o=>a.value.whatsappNumber=o),label:"Whatsapp Number",type:"text",placeholder:"Enter your WhatsApp number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[e(n,{modelValue:a.value.password,"onUpdate:modelValue":l[5]||(l[5]=o=>a.value.password=o),rules:["requiredValidator"in r?r.requiredValidator:t(u)],label:"Password *",placeholder:"Enter your password",type:d.value?"text":"password","append-inner-icon":d.value?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[6]||(l[6]=o=>d.value=!d.value)},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[e(n,{modelValue:a.value.confirmPassword,"onUpdate:modelValue":l[7]||(l[7]=o=>a.value.confirmPassword=o),rules:["requiredValidator"in r?r.requiredValidator:t(u),("confirmedValidator"in r?r.confirmedValidator:t(I))(a.value.confirmPassword,a.value.password)],label:"Confirm Password *",placeholder:"Confirm your password",type:d.value?"text":"password","append-inner-icon":d.value?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[8]||(l[8]=o=>d.value=!d.value)},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1})]),_:1}),ae,e(b,null,{default:i(()=>[e(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[e(n,{modelValue:a.value.companyName,"onUpdate:modelValue":l[9]||(l[9]=o=>a.value.companyName=o),rules:["requiredValidator"in r?r.requiredValidator:t(u)],label:"Company Name *",placeholder:"Enter your company name"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[e(n,{modelValue:a.value.website,"onUpdate:modelValue":l[10]||(l[10]=o=>a.value.website=o),label:"Website",placeholder:"Enter your company website"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[e(n,{modelValue:a.value.address,"onUpdate:modelValue":l[11]||(l[11]=o=>a.value.address=o),rules:["requiredValidator"in r?r.requiredValidator:t(u)],label:"Address *",placeholder:"Enter your company address"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[e(n,{modelValue:a.value.city,"onUpdate:modelValue":l[12]||(l[12]=o=>a.value.city=o),rules:["requiredValidator"in r?r.requiredValidator:t(u)],label:"City *",placeholder:"Enter your city"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[e(n,{modelValue:a.value.postCode,"onUpdate:modelValue":l[13]||(l[13]=o=>a.value.postCode=o),rules:["requiredValidator"in r?r.requiredValidator:t(u)],label:"Post Code *",placeholder:"Enter your postal code"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[e(h,{modelValue:a.value.country,"onUpdate:modelValue":l[14]||(l[14]=o=>a.value.country=o),items:f,label:"Country *",rules:["requiredValidator"in r?r.requiredValidator:t(u)],placeholder:"Select your country"},null,8,["modelValue","rules"])]),_:1})]),_:1}),le,e(b,null,{default:i(()=>[e(s,{cols:"12"},{default:i(()=>[e(h,{modelValue:a.value.recruitCountries,"onUpdate:modelValue":l[15]||(l[15]=o=>a.value.recruitCountries=o),items:f,label:"Select Countries *",rules:["requiredValidator"in r?r.requiredValidator:t(u)],multiple:"",chips:"",placeholder:"Select countries you recruit from","closable-chips":""},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(T,{block:"",type:"submit",class:"mt-4"},{default:i(()=>[v("Sign up")]),_:1}),e(s,{cols:"12",class:"text-center text-base"},{default:i(()=>[re,e(y,{class:"text-primary ms-1 d-inline-block",to:{name:"login"}},{default:i(()=>[v(" Sign in instead ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}},Ge=H(oe,[["__scopeId","data-v-1d98ad9c"]]);export{Ge as default};
