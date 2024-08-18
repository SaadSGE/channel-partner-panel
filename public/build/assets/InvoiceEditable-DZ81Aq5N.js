import{_ as Y}from"./AppDateTimePicker-B-lRXrlO.js";import{_ as B}from"./AppTextField-cZdEbA_N.js";import{_ as F,V as j}from"./AppTextarea-ByDOsXo4.js";import{_ as q}from"./AppSelect-DVrK7h8K.js";import{a as p,V as T}from"./VRow-jDTGyzOx.js";import{V as z}from"./VTooltip-BV2v6vgf.js";import{r as h,aq as E,w as U,a5 as M,a as O,o as V,c as $,d as e,b as t,e as o,n as s,a3 as C,v as g,x as c,y,a1 as W,F as P,f as H,I as N,z as J,i as L,a7 as G}from"./main-0xwlEiGX.js";import{V as S}from"./VCard-CB6wSISi.js";import{V as K}from"./VNodeRenderer-CrmyDyn7.js";import{u as Q}from"./useApi-CJAwMBKl.js";import{V as X}from"./VSelect-lOzMAnqr.js";import{V as w}from"./VDivider-Dq1ILL5h.js";const Z={class:"add-products-header mb-2 d-none d-md-flex mb-4"},ee=e("h6",{class:"text-h6"}," Item ",-1),te=e("h6",{class:"text-h6 ps-2"}," Cost ",-1),se=e("h6",{class:"text-h6 ps-2"}," Hours ",-1),le=e("h6",{class:"text-h6"}," Price ",-1),oe={class:"pa-6 flex-grow-1"},ae={class:"text-high-emphasis text-no-wrap mt-4"},ne=e("p",{class:"mb-1"}," Discount ",-1),ie=e("span",null,"0%",-1),de={class:"mx-2"},ce={class:"my-2"},me=e("span",{class:"d-inline d-md-none"},"Price: ",-1),re={class:"text-high-emphasis"},ue={__name:"InvoiceProductEdit",props:{id:{type:Number,required:!0},data:{type:Object,required:!0,default:()=>({title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})}},emits:["removeProduct","totalAmount"],setup(A,{emit:I}){const i=A,x=I,a=[{title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."},{title:"App Customization",cost:26,hours:1,description:"Customization & Bug Fixes."},{title:"ABC Template",cost:28,hours:1,description:"Vuetify admin template."},{title:"App Development",cost:32,hours:1,description:"Native App Development."}],_=h("App Customization"),d=h(structuredClone(E(i.data)));U(_,()=>{const D=a.filter(m=>m.title===_.value);d.value=D[0]});const v=()=>{x("removeProduct",i.id)},f=M(()=>Number(d.value.cost)*Number(d.value.hours));return U(f,()=>{x("totalAmount",f.value)},{immediate:!0}),(D,m)=>{const k=q,r=F,l=B,b=O("IconBtn");return V(),$(P,null,[e("div",Z,[t(T,{class:"me-10"},{default:o(()=>[t(p,{cols:"12",md:"6"},{default:o(()=>[ee]),_:1}),t(p,{cols:"12",md:"2"},{default:o(()=>[te]),_:1}),t(p,{cols:"12",md:"2"},{default:o(()=>[se]),_:1}),t(p,{cols:"12",md:"2"},{default:o(()=>[le]),_:1})]),_:1})]),t(S,{flat:"",border:"",class:"d-flex flex-sm-row flex-column-reverse"},{default:o(()=>[e("div",oe,[t(T,null,{default:o(()=>[t(p,{cols:"12",md:"6"},{default:o(()=>[t(k,{modelValue:s(_),"onUpdate:modelValue":m[0]||(m[0]=u=>C(_)?_.value=u:null),items:a,"item-title":"title","item-value":"title",placeholder:"Select Item",class:"mb-6"},null,8,["modelValue"]),t(r,{modelValue:s(d).description,"onUpdate:modelValue":m[1]||(m[1]=u=>s(d).description=u),rows:"2",placeholder:"Item description","persistent-placeholder":""},null,8,["modelValue"])]),_:1}),t(p,{cols:"12",md:"2",sm:"4"},{default:o(()=>[t(l,{modelValue:s(d).cost,"onUpdate:modelValue":m[2]||(m[2]=u=>s(d).cost=u),type:"number",placeholder:"Cost",class:"mb-6"},null,8,["modelValue"]),e("div",ae,[ne,ie,e("span",de,[g(" 0% "),t(z,{activator:"parent"},{default:o(()=>[g("Tax 1")]),_:1})]),e("span",null,[g(" 0% "),t(z,{activator:"parent"},{default:o(()=>[g("Tax 2")]),_:1})])])]),_:1}),t(p,{cols:"12",md:"2",sm:"4"},{default:o(()=>[t(l,{modelValue:s(d).hours,"onUpdate:modelValue":m[3]||(m[3]=u=>s(d).hours=u),type:"number",placeholder:"5"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12",md:"2",sm:"4"},{default:o(()=>[e("p",ce,[me,e("span",re,"$"+c(s(f)),1)])]),_:1})]),_:1})]),e("div",{class:y(["d-flex flex-column align-end item-actions",D.$vuetify.display.smAndUp?"border-s":"border-b"])},[t(b,{size:"36",onClick:v},{default:o(()=>[t(W,{size:24,icon:"tabler-x"})]),_:1})],2)]),_:1})],64)}}},pe={class:"d-flex flex-wrap justify-space-between flex-column rounded bg-var-theme-background flex-sm-row gap-6 pa-6 mb-6"},_e={class:"d-flex align-center app-logo mb-6"},he={class:"app-logo-title"},fe=e("p",{class:"text-high-emphasis mb-0"}," Office 149, 450 South Brand Brooklyn ",-1),xe=e("p",{class:"text-high-emphasis mb-0"}," San Diego County, CA 91905, USA ",-1),ve=e("p",{class:"text-high-emphasis mb-0"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),be={class:"d-flex flex-column gap-2"},Ve={class:"d-flex align-start align-sm-center gap-x-4 font-weight-medium text-lg flex-column flex-sm-row"},ge=e("span",{class:"text-high-emphasis text-sm-end",style:{"inline-size":"5.625rem"}},"Invoice:",-1),ye={class:"d-flex gap-x-4 align-start align-sm-center flex-column flex-sm-row"},De=e("span",{class:"text-high-emphasis text-sm-end",style:{"inline-size":"5.625rem"}},"Date Issued:",-1),we={style:{"inline-size":"9.5rem"}},$e={class:"d-flex gap-x-4 align-start align-sm-center flex-column flex-sm-row"},Ce=e("span",{class:"text-high-emphasis text-sm-end",style:{"inline-size":"5.625rem"}},"Due Date:",-1),Ae={style:{"min-inline-size":"9.5rem"}},Ie=e("h6",{class:"text-h6 mb-4"}," Invoice To: ",-1),ke={class:"mb-0"},Te={class:"mb-0"},ze={key:0,class:"mb-0"},Ue={class:"mb-0"},Ne={class:"mb-0"},Be=e("h6",{class:"text-h6 mb-4"}," Bill To: ",-1),Pe=e("td",{class:"pe-4"}," Total Due: ",-1),Se=e("td",{class:"pe-4"}," Bank Name: ",-1),Re=e("td",{class:"pe-4"}," Country: ",-1),Ye=e("td",{class:"pe-4"}," IBAN: ",-1),Fe={class:"text-wrap me-4"},je=e("td",{class:"pe-4"}," SWIFT Code: ",-1),qe={class:"add-products-form"},Ee={class:"d-flex justify-space-between flex-wrap flex-column flex-sm-row"},Me={class:"mb-6 mb-sm-0"},Oe={class:"d-flex align-center mb-4"},We=e("h6",{class:"text-h6 me-2"}," Salesperson: ",-1),He={class:"w-100"},Je=e("td",{class:"pe-16"}," Subtotal: ",-1),Le=e("h6",{class:"text-h6"}," $1800 ",-1),Ge=[Le],Ke=e("td",{class:"pe-16"}," Discount: ",-1),Qe=e("h6",{class:"text-h6"}," $28 ",-1),Xe=[Qe],Ze=e("td",{class:"pe-16"}," Tax: ",-1),et=e("h6",{class:"text-h6"}," 21% ",-1),tt=[et],st={class:"w-100"},lt=e("td",{class:"pe-16"}," Total: ",-1),ot=e("h6",{class:"text-h6"}," $1690 ",-1),at=[ot],nt=e("h6",{class:"text-h6 mb-2"}," Note: ",-1),bt={__name:"InvoiceEditable",props:{data:{type:null,required:!0}},emits:["push","remove"],setup(A,{emit:I}){const i=A,x=I,a=h(i.data.invoice),_=h(i.data.salesperson),d=h(i.data.thanksNote),v=h(i.data.note),f=h([]);(async()=>{const{data:r,error:l}=await Q("/apps/invoice/clients");l.value?console.log(l.value):f.value=r.value})();const m=()=>{x("push",{title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})},k=r=>{x("remove",r)};return(r,l)=>{const b=B,u=Y;return V(),H(S,{class:"pa-6 pa-sm-12"},{default:o(()=>[e("div",pe,[e("div",null,[e("div",_e,[t(s(K),{nodes:s(N).app.logo},null,8,["nodes"]),e("h6",he,c(s(N).app.title),1)]),fe,xe,ve]),e("div",be,[e("div",Ve,[ge,e("span",null,[t(b,{modelValue:s(a).id,"onUpdate:modelValue":l[0]||(l[0]=n=>s(a).id=n),disabled:"",prefix:"#",style:{"inline-size":"9.5rem"}},null,8,["modelValue"])])]),e("div",ye,[De,e("span",we,[t(u,{modelValue:s(a).issuedDate,"onUpdate:modelValue":l[1]||(l[1]=n=>s(a).issuedDate=n),placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])]),e("div",$e,[Ce,e("span",Ae,[t(u,{modelValue:s(a).dueDate,"onUpdate:modelValue":l[2]||(l[2]=n=>s(a).dueDate=n),placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])])])]),t(T,null,{default:o(()=>[t(p,{class:"text-no-wrap"},{default:o(()=>[Ie,t(X,{modelValue:s(a).client,"onUpdate:modelValue":l[3]||(l[3]=n=>s(a).client=n),items:s(f),"item-title":"name","item-value":"name",placeholder:"Select Client","return-object":"",class:"mb-4",style:{"inline-size":"11.875rem"}},null,8,["modelValue","items"]),e("p",ke,c(s(a).client.name),1),e("p",Te,c(s(a).client.company),1),s(a).client.address?(V(),$("p",ze,c(s(a).client.address)+", "+c(s(a).client.country),1)):J("",!0),e("p",Ue,c(s(a).client.contact),1),e("p",Ne,c(s(a).client.companyEmail),1)]),_:1}),t(p,{class:"text-no-wrap"},{default:o(()=>[Be,e("table",null,[e("tbody",null,[e("tr",null,[Pe,e("td",null,c(i.data.paymentDetails.totalDue),1)]),e("tr",null,[Se,e("td",null,c(i.data.paymentDetails.bankName),1)]),e("tr",null,[Re,e("td",null,c(i.data.paymentDetails.country),1)]),e("tr",null,[Ye,e("td",null,[e("p",Fe,c(i.data.paymentDetails.iban),1)])]),e("tr",null,[je,e("td",null,c(i.data.paymentDetails.swiftCode),1)])])])]),_:1})]),_:1}),t(w,{class:"my-6 border-dashed"}),e("div",qe,[(V(!0),$(P,null,L(i.data.purchasedProducts,(n,R)=>(V(),$("div",{key:n.title,class:"mb-4"},[t(ue,{id:R,data:n,onRemoveProduct:k},null,8,["id","data"])]))),128)),t(G,{size:"small","prepend-icon":"tabler-plus",onClick:m},{default:o(()=>[g(" Add Item ")]),_:1})]),t(w,{class:"my-6 border-dashed"}),e("div",Ee,[e("div",Me,[e("div",Oe,[We,t(b,{modelValue:s(_),"onUpdate:modelValue":l[4]||(l[4]=n=>C(_)?_.value=n:null),style:{"inline-size":"8rem"},placeholder:"John Doe"},null,8,["modelValue"])]),t(b,{modelValue:s(d),"onUpdate:modelValue":l[5]||(l[5]=n=>C(d)?d.value=n:null),placeholder:"Thanks for your business"},null,8,["modelValue"])]),e("div",null,[e("table",He,[e("tbody",null,[e("tr",null,[Je,e("td",{class:y(r.$vuetify.locale.isRtl?"text-start":"text-end")},Ge,2)]),e("tr",null,[Ke,e("td",{class:y(r.$vuetify.locale.isRtl?"text-start":"text-end")},Xe,2)]),e("tr",null,[Ze,e("td",{class:y(r.$vuetify.locale.isRtl?"text-start":"text-end")},tt,2)])])]),t(w,{class:"mt-4 mb-3"}),e("table",st,[e("tbody",null,[e("tr",null,[lt,e("td",{class:y(r.$vuetify.locale.isRtl?"text-start":"text-end")},at,2)])])])])]),t(w,{class:"my-6 border-dashed"}),e("div",null,[nt,t(j,{modelValue:s(v),"onUpdate:modelValue":l[6]||(l[6]=n=>C(v)?v.value=n:null),placeholder:"Write note here...",rows:2},null,8,["modelValue"])])]),_:1})}}};export{bt as _};
