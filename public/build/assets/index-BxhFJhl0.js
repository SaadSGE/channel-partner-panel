import{_ as D}from"./AppSelect-X1MCRhil.js";import{_ as x}from"./InvoiceEditable-BwS7HCSQ.js";import{_ as B}from"./InvoiceSendInvoiceDrawer-D-cm2cGV.js";import{V as U,a as b}from"./VRow-a18vhg8U.js";import{V as C}from"./VCard-CpeE6zKp.js";import{V as N}from"./VCardText-B0hdZjM1.js";import{r as l,o as h,c as A,b as t,e as o,n,a3 as i,F as T,a7 as V,v as r,d as s}from"./main-BSpI_2CL.js";import{V as y}from"./form-CMEPPpeo.js";import{V as _}from"./VSwitch-D1ng3ATL.js";import"./VSelect-CfFRikuZ.js";import"./VTextField-CERBXMv-.js";/* empty css                   */import"./VCounter-Dl8l4qQU.js";import"./index-fUpBkQ-C.js";import"./index-Dd4E7JjT.js";import"./VField-BOwtP06I.js";import"./easing-CjukEv2V.js";import"./VInput-BL92zCDM.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-x2BFwD49.js";import"./ssrBoot-C7OFAziE.js";import"./VAvatar-BRryBAB-.js";import"./VImg-o7pbezjE.js";import"./VDivider-Dgh3-wqM.js";import"./dialog-transition-W38b6xcl.js";import"./VMenu-BX-gfm2E.js";import"./VOverlay-B4MR1gw8.js";import"./lazy-iWUArzjE.js";import"./scopeId-CnwtrNNH.js";import"./VCheckboxBtn-Zr57G0GN.js";import"./VSelectionControl-CGuQIYma.js";import"./VChip-zBwYxMgH.js";import"./VSlideGroup-DPanv1s6.js";import"./AppDateTimePicker-CdCSu7-F.js";import"./AppTextField-NIranakw.js";import"./AppTextarea-BqKL4iRy.js";import"./VTooltip-D7Wy6z4A.js";import"./VNodeRenderer-CHyEIDEU.js";import"./useApi-BqIVEyrF.js";import"./AppDrawerHeaderSection-CpCNQWkc.js";import"./VSpacer-sbsrg8y9.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-bwZ1E0Bb.js";import"./VForm-DAMOE1Td.js";import"./VNavigationDrawer-2Eb2TNN2.js";const g={class:"d-flex align-center justify-space-between"},$={class:"d-flex align-center justify-space-between"},j={class:"d-flex align-center justify-space-between"},Ce={__name:"index",setup(I){const d=l({invoice:{id:5037,issuedDate:"",service:"",total:0,avatar:"",invoiceStatus:"",dueDate:"",balance:0,client:{address:"112, Lorem Ipsum, Florida",company:"Greeva Inc",companyEmail:"johndoe@greeva.com",contact:"+1 123 3452 12",country:"USA",name:"John Doe"}},paymentDetails:{totalDue:"$12,110.55",bankName:"American Bank",country:"United States",iban:"ETD95476213",swiftCode:"BR91905"},purchasedProducts:[{title:"",cost:0,hours:0,description:""}],note:"",paymentMethod:"",salesperson:"",thanksNote:""}),u=l(!0),c=l(!1),f=l(!1),v=l("Bank Account"),P=["Bank Account","PayPal","UPI Transfer"],m=l(!1),w=p=>{var e;(e=d.value)==null||e.purchasedProducts.push(p)},k=p=>{var e;(e=d.value)==null||e.purchasedProducts.splice(p,1)};return(p,e)=>{const S=D;return h(),A(T,null,[t(U,null,{default:o(()=>[t(b,{cols:"12",md:"9"},{default:o(()=>[t(x,{data:n(d),onPush:w,onRemove:k},null,8,["data"])]),_:1}),t(b,{cols:"12",md:"3"},{default:o(()=>[t(C,{class:"mb-8"},{default:o(()=>[t(N,null,{default:o(()=>[t(V,{block:"","prepend-icon":"tabler-send",class:"mb-4",onClick:e[0]||(e[0]=a=>m.value=!0)},{default:o(()=>[r(" Send Invoice ")]),_:1}),t(V,{block:"",color:"secondary",variant:"tonal",class:"mb-4",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{default:o(()=>[r(" Preview ")]),_:1}),t(V,{block:"",color:"secondary",variant:"tonal"},{default:o(()=>[r(" Save ")]),_:1})]),_:1})]),_:1}),t(S,{modelValue:n(v),"onUpdate:modelValue":e[1]||(e[1]=a=>i(v)?v.value=a:null),items:P,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),s("div",g,[t(y,{for:"payment-terms"},{default:o(()=>[r(" Payment Terms ")]),_:1}),s("div",null,[t(_,{id:"payment-terms",modelValue:n(u),"onUpdate:modelValue":e[2]||(e[2]=a=>i(u)?u.value=a:null)},null,8,["modelValue"])])]),s("div",$,[t(y,{for:"client-notes"},{default:o(()=>[r(" Client Notes ")]),_:1}),s("div",null,[t(_,{id:"client-notes",modelValue:n(c),"onUpdate:modelValue":e[3]||(e[3]=a=>i(c)?c.value=a:null)},null,8,["modelValue"])])]),s("div",j,[t(y,{for:"payment-stub"},{default:o(()=>[r(" Payment Stub ")]),_:1}),s("div",null,[t(_,{id:"payment-stub",modelValue:n(f),"onUpdate:modelValue":e[4]||(e[4]=a=>i(f)?f.value=a:null)},null,8,["modelValue"])])])]),_:1})]),_:1}),t(B,{isDrawerOpen:n(m),"onUpdate:isDrawerOpen":e[5]||(e[5]=a=>i(m)?m.value=a:null)},null,8,["isDrawerOpen"])],64)}}};export{Ce as default};