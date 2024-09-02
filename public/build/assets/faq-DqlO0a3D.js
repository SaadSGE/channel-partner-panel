import{_ as B}from"./AppSearchHeader-DPsItFDt.js";import{r as p,w,o as i,c as u,b as e,e as a,d as l,K as x,L as q,n as o,a3 as V,F as f,i as h,f as y,a1 as _,v as T,x as m,y as F}from"./main-C3aczJNT.js";import{s as W}from"./sitting-girl-with-laptop-CNJqEmDN.js";import{$ as A}from"./api-WEQNakzg.js";import{V as k,a as v}from"./VRow-DZV-I3wT.js";import{V as N}from"./VChip-D-BI3-AX.js";import{V as Q,a as U}from"./VTabs-3t3RKET4.js";import{V as E}from"./VImg-BIXW4ypZ.js";import{V as P,a as R}from"./VWindowItem-syeypbJ_.js";import{V as z}from"./VAvatar-BM8r58xX.js";import{V as $,a as D}from"./VExpansionPanel-WJOQnV08.js";import{V as H}from"./VCard-BoF5Se1H.js";import{V as C}from"./VCardText-DociP0vQ.js";import"./AppTextField-I5UKlFC7.js";import"./form-DXUotdvJ.js";import"./VTextField-D1okVibP.js";/* empty css                   */import"./VCounter-DAsHO5of.js";import"./index-D3sZMnWI.js";import"./index-Ci2pHsMa.js";import"./VField-BBoh8nI9.js";import"./easing-CjukEv2V.js";import"./VInput-DvThVAav.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VSlideGroup-DEAEgikf.js";import"./lazy-Bwi8doWD.js";import"./ssrBoot-NmuqpgkZ.js";const j={class:"d-flex align-center mb-4"},G={class:"text-h5"},K={class:"text-body-1"},Y=l("span",{class:"text-base font-weight-medium"}," No Results Found!! ",-1),J={class:"text-center pt-16"},M=l("h4",{class:"text-h4 mb-2"}," You still have a question? ",-1),O=l("p",{class:"text-body-1 mb-6"}," If you can't find question in our FAQ, you can contact us. We'll answer you shortly! ",-1),X={class:"text-h5 mb-1"},Ie={__name:"faq",setup(Z){const b=p(""),n=p([]),I=async()=>{const g=await A("/pages/faq",{query:{q:b.value}}).catch(s=>console.log(s));n.value=g},r=p("Payment"),d=p(0);w(r,()=>d.value=0),w(b,I,{immediate:!0});const L=[{icon:"tabler-phone",via:"+ (810) 2548 2568",tagLine:"We are always happy to help!"},{icon:"tabler-mail",via:"hello@help.com",tagLine:"Best way to get answer faster!"}];return(g,s)=>{const S=B;return i(),u("section",null,[e(S,{title:"Hello, how can we help?",subtitle:"or choose a category to quickly find the help you need","custom-class":"mb-6",placeholder:"Search Articles...",density:"comfortable","is-reverse":""}),e(k,null,{default:a(()=>[x(e(v,{cols:"12",sm:"4",lg:"3",class:"position-relative"},{default:a(()=>[e(Q,{modelValue:o(r),"onUpdate:modelValue":s[0]||(s[0]=t=>V(r)?r.value=t:null),direction:"vertical",class:"v-tabs-pill",grow:""},{default:a(()=>[(i(!0),u(f,null,h(o(n),t=>(i(),y(U,{key:t.faqTitle,value:t.faqTitle},{default:a(()=>[e(_,{icon:t.faqIcon,size:20,start:""},null,8,["icon"]),T(" "+m(t.faqTitle),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(E,{width:245,src:o(W),class:"d-none d-sm-block mt-4 mx-auto"},null,8,["src"])]),_:1},512),[[q,o(n).length]]),e(v,{cols:"12",sm:"8",lg:"9"},{default:a(()=>[e(P,{modelValue:o(r),"onUpdate:modelValue":s[2]||(s[2]=t=>V(r)?r.value=t:null),class:"faq-v-window disable-tab-transition"},{default:a(()=>[(i(!0),u(f,null,h(o(n),t=>(i(),y(R,{key:t.faqTitle,value:t.faqTitle},{default:a(()=>[l("div",j,[e(z,{rounded:"",color:"primary",variant:"tonal",class:"me-4",size:"50"},{default:a(()=>[e(_,{size:30,icon:t.faqIcon},null,8,["icon"])]),_:2},1024),l("div",null,[l("h5",G,m(t.faqTitle),1),l("div",K,m(t.faqSubtitle),1)])]),e($,{modelValue:o(d),"onUpdate:modelValue":s[1]||(s[1]=c=>V(d)?d.value=c:null),multiple:""},{default:a(()=>[(i(!0),u(f,null,h(t.faqs,c=>(i(),y(D,{key:c.question,title:c.question,text:c.answer},null,8,["title","text"]))),128))]),_:2},1032,["modelValue"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),x(e(v,{cols:"12",class:F(o(n).length?"":"d-flex justify-center align-center")},{default:a(()=>[e(_,{icon:"tabler-help",start:"",size:"20"}),Y]),_:1},8,["class"]),[[q,!o(n).length]])]),_:1}),l("div",J,[e(N,{label:"",color:"primary",size:"small",class:"mb-2"},{default:a(()=>[T(" Question ")]),_:1}),M,O,e(k,{class:"mt-9"},{default:a(()=>[(i(),u(f,null,h(L,t=>e(v,{key:t.icon,sm:"6",cols:"12"},{default:a(()=>[e(H,{flat:"",style:{"background-color":"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"}},{default:a(()=>[e(C,{class:"pb-4"},{default:a(()=>[e(z,{rounded:"",color:"primary",variant:"tonal",size:"46"},{default:a(()=>[e(_,{icon:t.icon,size:"26"},null,8,["icon"])]),_:2},1024)]),_:2},1024),e(C,null,{default:a(()=>[l("h5",X,m(t.via),1),l("div",null,m(t.tagLine),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])])}}};export{Ie as default};
