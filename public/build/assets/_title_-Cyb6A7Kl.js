import{N as T,F as A}from"./front-page-navbar-C8vxhBNH.js";import{u as H}from"./useApi-AHeqRBDI.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as M,a as P}from"./VRow-CRrnIqi-.js";import{aH as k,aI as B,aK as I,aQ as S,b as a,aY as Q,aJ as w,b0 as U,a4 as C,bb as q,aP as z,aU as E,aX as J,bf as K,$ as f,b4 as X,b7 as Y,bg as j,a0 as L,aR as G,F,q as O,r as W,o as _,c as V,e as b,m as n,d as m,v as y,h as Z,f as ee,y as te,Q as ae,R as re}from"./main-BI5VI6i0.js";import{V as se}from"./VDivider-DtVcK_Gx.js";import{V as R}from"./VImg-DI7xTG9w.js";import{V as ie}from"./VTextField-Dp-DBSMV.js";import{V as oe,a as le}from"./VList-h5YkYLl0.js";import{V as ce}from"./VContainer-Byc7k9lm.js";import"./AppTextField-Klz_PysZ.js";import"./form-DbGo1lnp.js";import"./VNodeRenderer-9uQluWif.js";import"./useGenerateImageVariant-BN1qq_3C.js";import"./VForm-B2KlJ7SF.js";import"./forwardRefs-C-GTDzx5.js";import"./VChip-Cs-iUZNn.js";import"./index-e7dW0JKJ.js";import"./VSlideGroup-P9Xy8RHk.js";import"./VAvatar-n2qV56T0.js";import"./VNavigationDrawer-_tWd_he5.js";import"./scopeId-Hc84qN6Q.js";import"./ssrBoot-D2vSMLhM.js";import"./VToolbar-Cqj8171A.js";import"./VMenu-JvonJ3nn.js";import"./VOverlay-qEQJxqAM.js";import"./easing-CjukEv2V.js";import"./lazy-xPrwExHY.js";import"./dialog-transition-DX8Xx8LU.js";import"./VCard-CX5697gH.js";import"./VCardText-CauGIraz.js";import"./VSpacer-BYvQ46CJ.js";/* empty css              *//* empty css                   */import"./VCounter-HQgLnzYE.js";import"./VField-OsXR_KH5.js";import"./VInput-CG6IfuLO.js";const ne=k({divider:[Number,String],...B()},"VBreadcrumbsDivider"),de=I()({name:"VBreadcrumbsDivider",props:ne(),setup(e,r){let{slots:t}=r;return S(()=>{var l;return a("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((l=t==null?void 0:t.default)==null?void 0:l.call(t))??e.divider])}),{}}}),ue=k({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...B(),...Q(),...w({tag:"li"})},"VBreadcrumbsItem"),me=I()({name:"VBreadcrumbsItem",props:ue(),setup(e,r){let{slots:t,attrs:l}=r;const c=U(e,l),s=C(()=>{var o;return e.active||((o=c.isActive)==null?void 0:o.value)}),d=C(()=>s.value?e.activeColor:e.color),{textColorClasses:u,textColorStyles:i}=q(d);return S(()=>a(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":s.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:s.value&&e.activeClass},u.value,e.class],style:[i.value,e.style],"aria-current":s.value?"page":void 0},{default:()=>{var o,v;return[c.isLink.value?a("a",{class:"v-breadcrumbs-item--link",href:c.href.value,"aria-current":s.value?"page":void 0,onClick:c.navigate},[((v=t.default)==null?void 0:v.call(t))??e.title]):((o=t.default)==null?void 0:o.call(t))??e.title]}})),{}}}),ve=k({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:z,items:{type:Array,default:()=>[]},...B(),...E(),...J(),...w({tag:"ul"})},"VBreadcrumbs"),be=I()({name:"VBreadcrumbs",props:ve(),setup(e,r){let{slots:t}=r;const{backgroundColorClasses:l,backgroundColorStyles:c}=K(f(e,"bgColor")),{densityClasses:s}=X(e),{roundedClasses:d}=Y(e);j({VBreadcrumbsDivider:{divider:f(e,"divider")},VBreadcrumbsItem:{activeClass:f(e,"activeClass"),activeColor:f(e,"activeColor"),color:f(e,"color"),disabled:f(e,"disabled")}});const u=C(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return S(()=>{const i=!!(t.prepend||e.icon);return a(e.tag,{class:["v-breadcrumbs",l.value,s.value,d.value,e.class],style:[c.value,e.style]},{default:()=>{var o;return[i&&a("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?a(G,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):a(L,{key:"prepend-icon",start:!0,icon:e.icon},null)]),u.value.map((v,p,x)=>{var D;let{item:g,raw:N}=v;return a(F,null,[((D=t.item)==null?void 0:D.call(t,{item:g,index:p}))??a(me,O({key:p,disabled:p>=x.length-1},typeof g=="string"?{title:g}:g),{default:t.title?()=>{var h;return(h=t.title)==null?void 0:h.call(t,{item:g,index:p})}:void 0}),p<x.length-1&&a(de,null,{default:t.divider?()=>{var h;return(h=t.divider)==null?void 0:h.call(t,{item:N,index:p})}:void 0})])}),(o=t.default)==null?void 0:o.call(t)]}})}),{}}}),pe=e=>(ae("data-v-6117a7c6"),e=e(),re(),e),fe={class:"bg-surface help-center-article"},ge={key:0,class:"article-section"},he={class:"text-h4 mb-2"},_e={class:"text-body-1"},ye=["innerHTML"],Ve={class:"my-6 text-body-1"},Ce=pe(()=>m("h5",{class:"text-h5 px-6 py-2 mb-4 rounded",style:{background:"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"}}," Articles in this section ",-1)),ke={class:"text-body-1 text-high-emphasis"},Be={__name:"[title]",setup(e){const r=W();return setTimeout(async()=>{const{data:t,error:l}=await H("/pages/help-center/article");l.value?console.log(l.value):r.value=t.value},1e3),(t,l)=>(_(),V("div",fe,[a(T),a(ce,null,{default:b(()=>{var c;return[n(r)&&((c=n(r))!=null&&c.title)?(_(),V("div",ge,[a(M,null,{default:b(()=>[a(P,{cols:"12",md:"8"},{default:b(()=>{var s,d,u,i,o,v;return[m("div",null,[a(be,{class:"px-0 pb-2 pt-0 help-center-breadcrumbs",items:[{title:"Help Center",to:{name:"front-pages-help-center"},class:"text-primary"},{title:"how to add product in cart"}]}),m("h4",he,y((s=n(r))==null?void 0:s.title),1),m("div",_e,y((d=n(r))==null?void 0:d.lastUpdated),1)]),a(se,{class:"my-6"}),m("div",{class:"mb-6 text-body-1",innerHTML:(u=n(r))==null?void 0:u.productContent},null,8,ye),a(R,{class:"rounded-lg",src:(i=n(r))==null?void 0:i.productImg},null,8,["src"]),m("p",Ve,y((o=n(r))==null?void 0:o.checkoutContent),1),a(R,{class:"rounded-lg",src:(v=n(r))==null?void 0:v.checkoutImg},null,8,["src"])]}),_:1}),a(P,{cols:"12",md:"4"},{default:b(()=>[a(ie,{"prepend-inner-icon":"tabler-search",placeholder:"Search...",class:"mb-6"}),m("div",null,[Ce,a(oe,{class:"card-list"},{default:b(()=>{var s;return[(_(!0),V(F,null,Z((s=n(r))==null?void 0:s.articleList,(d,u)=>(_(),ee(le,{key:u,link:"",class:"text-disabled"},{append:b(()=>[a(L,{icon:t.$vuetify.locale.isRtl?"tabler-chevron-left":"tabler-chevron-right",size:"20"},null,8,["icon"])]),default:b(()=>[m("div",ke,y(d),1)]),_:2},1024))),128))]}),_:1})])]),_:1})]),_:1})])):te("",!0)]}),_:1}),a(A)]))}},ct=$(Be,[["__scopeId","data-v-6117a7c6"]]);export{ct as default};