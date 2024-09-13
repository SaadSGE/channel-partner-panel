import{_ as k}from"./AppSelect-Caxo72fS.js";import{_ as x}from"./AppTextField-BCvUXX3V.js";import{_ as w}from"./CustomRadiosWithIcon-S2GlGpry.js";import{_ as S}from"./DialogCloseBtn-Bf2EfDQ9.js";import{r as f,ar as V,o as c,f as b,e as d,b as e,d as p,x as B,n as s,a3 as R,a6 as $,a7 as _,v as C,z}from"./main-kzKK1XE4.js";import{h as T,o as F}from"./office-CkZqh1Qt.js";import{V as H}from"./VCard-DWOcblIG.js";import{V as O}from"./VCardText-do432SKI.js";import{V as q}from"./VForm-Bgr5kXKW.js";import{V as E,a as t}from"./VRow-xJk10beR.js";import{V as M}from"./VSwitch-DNZ8sAu1.js";import{V as Z}from"./VDialog-Baqmc-4e.js";const j={class:"text-h4 text-center mb-2"},I=p("p",{class:"text-body-1 text-center mb-6"}," Add new address for express delivery ",-1),J={class:"d-flex mb-6"},se={__name:"AddEditAddressDialog",props:{billingAddress:{type:Object,required:!1,default:()=>({firstName:"",lastName:"",selectedCountry:null,addressLine1:"",addressLine2:"",landmark:"",contact:"",country:null,city:"",state:"",zipCode:null})},isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","submit"],setup(y,{emit:g}){const n=y,r=g,o=f(structuredClone(V(n.billingAddress))),A=()=>{r("update:isDialogVisible",!1),o.value=structuredClone(V(n.billingAddress))},v=()=>{r("update:isDialogVisible",!1),r("submit",o.value)},m=f("Home"),D=[{icon:{icon:T,size:"28"},title:"Home",desc:"Delivery Time (9am - 9pm)",value:"Home"},{icon:{icon:F,size:"28"},title:"Office",desc:"Delivery Time (9am - 5pm)",value:"Office"}];return(u,l)=>{const N=S,L=w,i=x,U=k;return c(),b(Z,{width:u.$vuetify.display.smAndDown?"auto":900,"model-value":n.isDialogVisible,"onUpdate:modelValue":l[11]||(l[11]=a=>u.$emit("update:isDialogVisible",a))},{default:d(()=>[e(N,{onClick:l[0]||(l[0]=a=>u.$emit("update:isDialogVisible",!1))}),n.billingAddress?(c(),b(H,{key:0,class:"pa-sm-10 pa-2"},{default:d(()=>[e(O,null,{default:d(()=>[p("h4",j,B(n.billingAddress.addressLine1||n.billingAddress.addressLine2?"Edit":"Add New")+" Address ",1),I,p("div",J,[e(L,{"selected-radio":s(m),"onUpdate:selectedRadio":l[1]||(l[1]=a=>R(m)?m.value=a:null),"radio-content":D,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])]),e(q,{onSubmit:$(v,["prevent"])},{default:d(()=>[e(E,null,{default:d(()=>[e(t,{cols:"12",md:"6"},{default:d(()=>[e(i,{modelValue:s(o).firstName,"onUpdate:modelValue":l[2]||(l[2]=a=>s(o).firstName=a),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:d(()=>[e(i,{modelValue:s(o).lastName,"onUpdate:modelValue":l[3]||(l[3]=a=>s(o).lastName=a),label:"Last Name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(t,{cols:"12"},{default:d(()=>[e(U,{modelValue:s(o).selectedCountry,"onUpdate:modelValue":l[4]||(l[4]=a=>s(o).selectedCountry=a),label:"Select Country",placeholder:"Select Country",items:["USA","Aus","Canada","NZ"]},null,8,["modelValue"])]),_:1}),e(t,{cols:"12"},{default:d(()=>[e(i,{modelValue:s(o).addressLine1,"onUpdate:modelValue":l[5]||(l[5]=a=>s(o).addressLine1=a),label:"Address Line 1",placeholder:"12, Business Park"},null,8,["modelValue"])]),_:1}),e(t,{cols:"12"},{default:d(()=>[e(i,{modelValue:s(o).addressLine2,"onUpdate:modelValue":l[6]||(l[6]=a=>s(o).addressLine2=a),label:"Address Line 2",placeholder:"Mall Road"},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:d(()=>[e(i,{modelValue:s(o).landmark,"onUpdate:modelValue":l[7]||(l[7]=a=>s(o).landmark=a),label:"Landmark",placeholder:"Nr. Hard Rock Cafe"},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:d(()=>[e(i,{modelValue:s(o).city,"onUpdate:modelValue":l[8]||(l[8]=a=>s(o).city=a),label:"City",placeholder:"Los Angeles"},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:d(()=>[e(i,{modelValue:s(o).state,"onUpdate:modelValue":l[9]||(l[9]=a=>s(o).state=a),label:"State",placeholder:"California"},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:d(()=>[e(i,{modelValue:s(o).zipCode,"onUpdate:modelValue":l[10]||(l[10]=a=>s(o).zipCode=a),label:"Zip Code",placeholder:"99950",type:"number"},null,8,["modelValue"])]),_:1}),e(t,{cols:"12"},{default:d(()=>[e(M,{label:"Use as a billing address?"})]),_:1}),e(t,{cols:"12",class:"text-center"},{default:d(()=>[e(_,{type:"submit",class:"me-3"},{default:d(()=>[C(" submit ")]),_:1}),e(_,{variant:"tonal",color:"secondary",onClick:A},{default:d(()=>[C(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):z("",!0)]),_:1},8,["width","model-value"])}}};export{se as _};
