import{N as F,F as A}from"./front-page-navbar-DP4Arjym.js";import{u as H}from"./useApi-BwWkFMhU.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as U,a as P}from"./VRow-ODK9nVFs.js";import{aK as k,aL as B,aN as S,aT as I,b as a,a$ as $,aM as w,b3 as z,a5 as C,be as j,aS as E,aX as K,a_ as X,bi as q,a0 as f,b7 as G,ba as J,bj as O,a1 as R,aU as Q,F as N,s as W,r as Y,o as _,c as V,e as p,n,d as m,x as y,i as Z,f as ee,z as te,R as ae,U as re}from"./main-ujAelBRR.js";import{V as se}from"./VDivider-DXhZ4_Ma.js";import{V as L}from"./VImg-B-k9boYc.js";import{V as ie}from"./VTextField-BHFVqzxS.js";import{V as oe,a as le}from"./VList-NX9tgIKQ.js";import{V as ce}from"./VContainer-D9uQBApl.js";import"./AppTextField-Dj_2VU4u.js";import"./form-DjAS8tMT.js";import"./VNodeRenderer-DCkAW9Fr.js";import"./useGenerateImageVariant-DmjlMVT1.js";import"./VForm-Cj7R7EXF.js";import"./forwardRefs-C-GTDzx5.js";import"./VChip-CqAu_joY.js";import"./index-CkRDasSw.js";import"./VSlideGroup-DoQsWgeA.js";import"./VAvatar-D8FR7LeD.js";import"./VNavigationDrawer-DpagIYL6.js";import"./scopeId-DeUnOUYx.js";import"./ssrBoot-yb-Fj9Tf.js";import"./VToolbar-Dsve-3EO.js";import"./VMenu-BeXH8Btp.js";import"./VOverlay-D2BMFUHd.js";import"./easing-CjukEv2V.js";import"./lazy-BRQ2t-65.js";import"./index-DlgBW9fg.js";import"./dialog-transition-BeKC65XY.js";import"./VCard-CZZLRspk.js";import"./VCardText-CZjnDVEX.js";import"./VSpacer-CjhTvJ9a.js";/* empty css              *//* empty css                   */import"./VCounter-CdDHwVPl.js";import"./VField-fQZzp9Ta.js";import"./VInput-BKqZjaTf.js";const ne=k({divider:[Number,String],...B()},"VBreadcrumbsDivider"),de=S()({name:"VBreadcrumbsDivider",props:ne(),setup(e,r){let{slots:t}=r;return I(()=>{var l;return a("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((l=t==null?void 0:t.default)==null?void 0:l.call(t))??e.divider])}),{}}}),ue=k({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...B(),...$(),...w({tag:"li"})},"VBreadcrumbsItem"),me=S()({name:"VBreadcrumbsItem",props:ue(),setup(e,r){let{slots:t,attrs:l}=r;const c=z(e,l),s=C(()=>{var o;return e.active||((o=c.isActive)==null?void 0:o.value)}),d=C(()=>s.value?e.activeColor:e.color),{textColorClasses:u,textColorStyles:i}=j(d);return I(()=>a(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":s.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:s.value&&e.activeClass},u.value,e.class],style:[i.value,e.style],"aria-current":s.value?"page":void 0},{default:()=>{var o,v;return[c.isLink.value?a("a",{class:"v-breadcrumbs-item--link",href:c.href.value,"aria-current":s.value?"page":void 0,onClick:c.navigate},[((v=t.default)==null?void 0:v.call(t))??e.title]):((o=t.default)==null?void 0:o.call(t))??e.title]}})),{}}}),ve=k({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:E,items:{type:Array,default:()=>[]},...B(),...K(),...X(),...w({tag:"ul"})},"VBreadcrumbs"),pe=S()({name:"VBreadcrumbs",props:ve(),setup(e,r){let{slots:t}=r;const{backgroundColorClasses:l,backgroundColorStyles:c}=q(f(e,"bgColor")),{densityClasses:s}=G(e),{roundedClasses:d}=J(e);O({VBreadcrumbsDivider:{divider:f(e,"divider")},VBreadcrumbsItem:{activeClass:f(e,"activeClass"),activeColor:f(e,"activeColor"),color:f(e,"color"),disabled:f(e,"disabled")}});const u=C(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return I(()=>{const i=!!(t.prepend||e.icon);return a(e.tag,{class:["v-breadcrumbs",l.value,s.value,d.value,e.class],style:[c.value,e.style]},{default:()=>{var o;return[i&&a("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?a(Q,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):a(R,{key:"prepend-icon",start:!0,icon:e.icon},null)]),u.value.map((v,b,x)=>{var D;let{item:g,raw:T}=v;return a(N,null,[((D=t.item)==null?void 0:D.call(t,{item:g,index:b}))??a(me,W({key:b,disabled:b>=x.length-1},typeof g=="string"?{title:g}:g),{default:t.title?()=>{var h;return(h=t.title)==null?void 0:h.call(t,{item:g,index:b})}:void 0}),b<x.length-1&&a(de,null,{default:t.divider?()=>{var h;return(h=t.divider)==null?void 0:h.call(t,{item:T,index:b})}:void 0})])}),(o=t.default)==null?void 0:o.call(t)]}})}),{}}}),be=e=>(ae("data-v-6117a7c6"),e=e(),re(),e),fe={class:"bg-surface help-center-article"},ge={key:0,class:"article-section"},he={class:"text-h4 mb-2"},_e={class:"text-body-1"},ye=["innerHTML"],Ve={class:"my-6 text-body-1"},Ce=be(()=>m("h5",{class:"text-h5 px-6 py-2 mb-4 rounded",style:{background:"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"}}," Articles in this section ",-1)),ke={class:"text-body-1 text-high-emphasis"},Be={__name:"[title]",setup(e){const r=Y();return setTimeout(async()=>{const{data:t,error:l}=await H("/pages/help-center/article");l.value?console.log(l.value):r.value=t.value},1e3),(t,l)=>(_(),V("div",fe,[a(F),a(ce,null,{default:p(()=>{var c;return[n(r)&&((c=n(r))!=null&&c.title)?(_(),V("div",ge,[a(U,null,{default:p(()=>[a(P,{cols:"12",md:"8"},{default:p(()=>{var s,d,u,i,o,v;return[m("div",null,[a(pe,{class:"px-0 pb-2 pt-0 help-center-breadcrumbs",items:[{title:"Help Center",to:{name:"front-pages-help-center"},class:"text-primary"},{title:"how to add product in cart"}]}),m("h4",he,y((s=n(r))==null?void 0:s.title),1),m("div",_e,y((d=n(r))==null?void 0:d.lastUpdated),1)]),a(se,{class:"my-6"}),m("div",{class:"mb-6 text-body-1",innerHTML:(u=n(r))==null?void 0:u.productContent},null,8,ye),a(L,{class:"rounded-lg",src:(i=n(r))==null?void 0:i.productImg},null,8,["src"]),m("p",Ve,y((o=n(r))==null?void 0:o.checkoutContent),1),a(L,{class:"rounded-lg",src:(v=n(r))==null?void 0:v.checkoutImg},null,8,["src"])]}),_:1}),a(P,{cols:"12",md:"4"},{default:p(()=>[a(ie,{"prepend-inner-icon":"tabler-search",placeholder:"Search...",class:"mb-6"}),m("div",null,[Ce,a(oe,{class:"card-list"},{default:p(()=>{var s;return[(_(!0),V(N,null,Z((s=n(r))==null?void 0:s.articleList,(d,u)=>(_(),ee(le,{key:u,link:"",class:"text-disabled"},{append:p(()=>[a(R,{icon:t.$vuetify.locale.isRtl?"tabler-chevron-left":"tabler-chevron-right",size:"20"},null,8,["icon"])]),default:p(()=>[m("div",ke,y(d),1)]),_:2},1024))),128))]}),_:1})])]),_:1})]),_:1})])):te("",!0)]}),_:1}),a(A)]))}},nt=M(Be,[["__scopeId","data-v-6117a7c6"]]);export{nt as default};