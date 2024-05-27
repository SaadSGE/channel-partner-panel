import{_ as U}from"./AppSelect-BGvwt7BC.js";import{_ as N}from"./InvoiceAddPaymentDrawer-CGJoK6YP.js";import{_ as $}from"./InvoiceEditable-VyXGPJG1.js";import{_ as I}from"./InvoiceSendInvoiceDrawer-vvNohoeU.js";import{r as l,i as O,ac as j,m as s,o as k,f as g,e as a,c as R,b as t,y as M,a6 as f,t as r,d as i,a2 as m,v as E}from"./main--Sxm5_s2.js";import{u as L}from"./useApi-ClxpKLcx.js";import{V as W,a as C}from"./VRow-iwFKqp57.js";import{V as Y}from"./VAlert-B9lCP_6K.js";import{V as q}from"./VCard-D_9YY7eU.js";import{V as z}from"./VCardText-B_32FgjQ.js";import{V as P}from"./form-ByD6MPa6.js";import{V as D}from"./VSwitch-CoCzyrf6.js";import"./VSelect-Bq1c87WX.js";import"./VTextField-C1pfXiLn.js";/* empty css                   */import"./VCounter-C_khUIuy.js";import"./index-CGqMMtXP.js";import"./VImg-Za-rMnCD.js";import"./VField-B3XaJafD.js";import"./easing-CjukEv2V.js";import"./VInput-CrRB8sjj.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-BjxwPgvk.js";import"./ssrBoot-CzFyEH1_.js";import"./VAvatar-YOWsFQVe.js";import"./VDivider-Cp-mvYZ4.js";import"./dialog-transition-DRpkJfSb.js";import"./VMenu-_uOTsNv8.js";import"./VOverlay-CZU57HtJ.js";import"./lazy-kZ4tXhNN.js";import"./scopeId-BjQrr5BR.js";import"./VCheckboxBtn-Cf31ky1q.js";import"./VSelectionControl-RP8APfRy.js";import"./VChip-B1-AfmoZ.js";import"./VSlideGroup-DDUY1mOj.js";import"./AppTextarea-rc3wG6vT.js";import"./AppDateTimePicker-DUVxvyXN.js";import"./AppTextField-BGLtjjph.js";import"./AppDrawerHeaderSection-BaF1kZfG.js";import"./VSpacer-ByV7dMrX.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-BK9G7Rkn.js";import"./VForm-C6pZhiuU.js";import"./VNavigationDrawer-DbQ5fLVg.js";import"./VTooltip-8y015s8K.js";import"./VNodeRenderer-CKrVXq-M.js";const F={class:"d-flex flex-wrap gap-4"},G={class:"d-flex align-center justify-space-between"},H={class:"d-flex align-center justify-space-between"},J={class:"d-flex align-center justify-space-between"},K={key:1},qe={__name:"[id]",async setup(Q){let p,x;const n=l(),v=O(),{data:y}=([p,x]=j(()=>L(`/apps/invoice/${v.params.id}`)),p=await p,x(),p);y.value&&(n.value={invoice:y.value.invoice,paymentDetails:y.value.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,hours:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"});const S=c=>{var e;(e=n.value)==null||e.purchasedProducts.push(c)},h=c=>{var e;(e=n.value)==null||e.purchasedProducts.splice(c,1)},u=l(!1),d=l(!1),_=l(!0),V=l(!1),w=l(!1),b=l("Bank Account"),B=["Bank Account","PayPal","UPI Transfer"];return(c,e)=>{var A;const T=U;return s(n)&&((A=s(n))!=null&&A.invoice)?(k(),g(W,{key:0},{default:a(()=>[t(C,{cols:"12",md:"9"},{default:a(()=>{var o;return[(o=s(n))!=null&&o.invoice?(k(),g($,{key:0,data:s(n),onPush:S,onRemove:h},null,8,["data"])):M("",!0)]}),_:1}),t(C,{cols:"12",md:"3"},{default:a(()=>[t(q,{class:"mb-8"},{default:a(()=>[t(z,null,{default:a(()=>[t(f,{block:"","prepend-icon":"tabler-send",class:"mb-4",onClick:e[0]||(e[0]=o=>u.value=!0)},{default:a(()=>[r(" Send Invoice ")]),_:1}),i("div",F,[t(f,{color:"secondary",variant:"tonal",class:"flex-grow-1",to:{name:"apps-invoice-preview-id",params:{id:s(v).params.id}}},{default:a(()=>[r(" Preview ")]),_:1},8,["to"]),t(f,{color:"secondary",variant:"tonal",class:"mb-4 flex-grow-1"},{default:a(()=>[r(" Save ")]),_:1})]),t(f,{block:"",color:"success","prepend-icon":"tabler-currency-dollar",onClick:e[1]||(e[1]=o=>d.value=!0)},{default:a(()=>[r(" Add Payment ")]),_:1})]),_:1})]),_:1}),t(T,{modelValue:s(b),"onUpdate:modelValue":e[2]||(e[2]=o=>m(b)?b.value=o:null),items:B,label:"Accept Payment Via",class:"mb-4"},null,8,["modelValue"]),i("div",G,[t(P,{for:"payment-terms"},{default:a(()=>[r(" Payment Terms ")]),_:1}),i("div",null,[t(D,{id:"payment-terms",modelValue:s(_),"onUpdate:modelValue":e[3]||(e[3]=o=>m(_)?_.value=o:null)},null,8,["modelValue"])])]),i("div",H,[t(P,{for:"client-notes"},{default:a(()=>[r(" Client Notes ")]),_:1}),i("div",null,[t(D,{id:"client-notes",modelValue:s(V),"onUpdate:modelValue":e[4]||(e[4]=o=>m(V)?V.value=o:null)},null,8,["modelValue"])])]),i("div",J,[t(P,{for:"payment-stub"},{default:a(()=>[r(" Payment Stub ")]),_:1}),i("div",null,[t(D,{id:"payment-stub",modelValue:s(w),"onUpdate:modelValue":e[5]||(e[5]=o=>m(w)?w.value=o:null)},null,8,["modelValue"])])])]),_:1}),t(I,{isDrawerOpen:s(u),"onUpdate:isDrawerOpen":e[6]||(e[6]=o=>m(u)?u.value=o:null)},null,8,["isDrawerOpen"]),t(N,{isDrawerOpen:s(d),"onUpdate:isDrawerOpen":e[7]||(e[7]=o=>m(d)?d.value=o:null)},null,8,["isDrawerOpen"])]),_:1})):(k(),R("section",K,[t(Y,{type:"error",variant:"tonal"},{default:a(()=>[r(" Invoice with ID "+E(s(v).params.id)+" not found! ",1)]),_:1})]))}}};export{qe as default};