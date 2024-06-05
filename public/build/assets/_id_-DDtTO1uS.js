import{_ as U}from"./AppSelect-Bwy7N3wD.js";import{_ as N}from"./InvoiceAddPaymentDrawer-DNAhCZUi.js";import{_ as $}from"./InvoiceEditable-DH_owrtH.js";import{_ as I}from"./InvoiceSendInvoiceDrawer-CvmLwzXm.js";import{r as l,j as O,ad as j,n as s,o as k,f as g,e as a,c as R,b as t,z as M,a7 as f,v as r,d as i,a3 as m,x as z}from"./main-46fJF4Ly.js";import{u as E}from"./useApi-DSSuk7K-.js";import{V as L,a as C}from"./VRow-DUKZE336.js";import{V as W}from"./VAlert-D6D75zZU.js";import{V as Y}from"./VCard-DMTjdXUy.js";import{V as q}from"./VCardText-1yDQu2OT.js";import{V as P}from"./form-Cof7gYfN.js";import{V as x}from"./VSwitch-DwAe42OJ.js";import"./VSelect-BJdoV_9a.js";import"./VTextField-BRS8HhxH.js";/* empty css                   */import"./VCounter-4pitKJQp.js";import"./index-DkHFl9i8.js";import"./index-CAksEt0X.js";import"./VField-BhFXHFEK.js";import"./easing-CjukEv2V.js";import"./VInput-BvsHXrrJ.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-CG2BG0Du.js";import"./ssrBoot-DQQ69Fpa.js";import"./VAvatar-DBcKRZVo.js";import"./VImg-ZBC3KXqQ.js";import"./VDivider-DOOYxpa5.js";import"./dialog-transition-BnCPKqrq.js";import"./VMenu-8Xy30vKo.js";import"./VOverlay-BzXT9Jk8.js";import"./lazy-n2io-S55.js";import"./scopeId-DhBpevBo.js";import"./VCheckboxBtn-CUr3L21I.js";import"./VSelectionControl-DvCugJqL.js";import"./VChip-BHBhRfUm.js";import"./VSlideGroup-BmWaeuhF.js";import"./AppTextarea-BTwlMYKi.js";import"./AppDateTimePicker-CPBWk4Ec.js";import"./AppTextField-BiS_KFta.js";import"./AppDrawerHeaderSection-COuF2gQM.js";import"./VSpacer-CBsGU1UM.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-DYif9n4y.js";import"./VForm-CFxhAGQX.js";import"./VNavigationDrawer-WWSub-o3.js";import"./VTooltip-CWzeIU4c.js";import"./VNodeRenderer-CuJMaBma.js";const F={class:"d-flex flex-wrap gap-4"},G={class:"d-flex align-center justify-space-between"},H={class:"d-flex align-center justify-space-between"},J={class:"d-flex align-center justify-space-between"},K={key:1},qe={__name:"[id]",async setup(Q){let p,D;const n=l(),v=O(),{data:y}=([p,D]=j(()=>E(`/apps/invoice/${v.params.id}`)),p=await p,D(),p);y.value&&(n.value={invoice:y.value.invoice,paymentDetails:y.value.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,hours:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"});const S=c=>{var e;(e=n.value)==null||e.purchasedProducts.push(c)},h=c=>{var e;(e=n.value)==null||e.purchasedProducts.splice(c,1)},u=l(!1),d=l(!1),_=l(!0),V=l(!1),w=l(!1),b=l("Bank Account"),B=["Bank Account","PayPal","UPI Transfer"];return(c,e)=>{var A;const T=U;return s(n)&&((A=s(n))!=null&&A.invoice)?(k(),g(L,{key:0},{default:a(()=>[t(C,{cols:"12",md:"9"},{default:a(()=>{var o;return[(o=s(n))!=null&&o.invoice?(k(),g($,{key:0,data:s(n),onPush:S,onRemove:h},null,8,["data"])):M("",!0)]}),_:1}),t(C,{cols:"12",md:"3"},{default:a(()=>[t(Y,{class:"mb-8"},{default:a(()=>[t(q,null,{default:a(()=>[t(f,{block:"","prepend-icon":"tabler-send",class:"mb-4",onClick:e[0]||(e[0]=o=>u.value=!0)},{default:a(()=>[r(" Send Invoice ")]),_:1}),i("div",F,[t(f,{color:"secondary",variant:"tonal",class:"flex-grow-1",to:{name:"apps-invoice-preview-id",params:{id:s(v).params.id}}},{default:a(()=>[r(" Preview ")]),_:1},8,["to"]),t(f,{color:"secondary",variant:"tonal",class:"mb-4 flex-grow-1"},{default:a(()=>[r(" Save ")]),_:1})]),t(f,{block:"",color:"success","prepend-icon":"tabler-currency-dollar",onClick:e[1]||(e[1]=o=>d.value=!0)},{default:a(()=>[r(" Add Payment ")]),_:1})]),_:1})]),_:1}),t(T,{modelValue:s(b),"onUpdate:modelValue":e[2]||(e[2]=o=>m(b)?b.value=o:null),items:B,label:"Accept Payment Via",class:"mb-4"},null,8,["modelValue"]),i("div",G,[t(P,{for:"payment-terms"},{default:a(()=>[r(" Payment Terms ")]),_:1}),i("div",null,[t(x,{id:"payment-terms",modelValue:s(_),"onUpdate:modelValue":e[3]||(e[3]=o=>m(_)?_.value=o:null)},null,8,["modelValue"])])]),i("div",H,[t(P,{for:"client-notes"},{default:a(()=>[r(" Client Notes ")]),_:1}),i("div",null,[t(x,{id:"client-notes",modelValue:s(V),"onUpdate:modelValue":e[4]||(e[4]=o=>m(V)?V.value=o:null)},null,8,["modelValue"])])]),i("div",J,[t(P,{for:"payment-stub"},{default:a(()=>[r(" Payment Stub ")]),_:1}),i("div",null,[t(x,{id:"payment-stub",modelValue:s(w),"onUpdate:modelValue":e[5]||(e[5]=o=>m(w)?w.value=o:null)},null,8,["modelValue"])])])]),_:1}),t(I,{isDrawerOpen:s(u),"onUpdate:isDrawerOpen":e[6]||(e[6]=o=>m(u)?u.value=o:null)},null,8,["isDrawerOpen"]),t(N,{isDrawerOpen:s(d),"onUpdate:isDrawerOpen":e[7]||(e[7]=o=>m(d)?d.value=o:null)},null,8,["isDrawerOpen"])]),_:1})):(k(),R("section",K,[t(W,{type:"error",variant:"tonal"},{default:a(()=>[r(" Invoice with ID "+z(s(v).params.id)+" not found! ",1)]),_:1})]))}}};export{qe as default};
