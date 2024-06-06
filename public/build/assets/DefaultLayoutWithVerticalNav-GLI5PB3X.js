import{_ as ae}from"./AppLoadingIndicator-CG9JkRWL.js";import{M as U,N,T as E,r as A,O as ie,P as ne,Q as K,l as B,j as Y,w as _,a as M,o as l,f as c,e as v,d as $,A as G,b as y,n as e,q as u,K as V,L as I,h as m,s as k,c as x,F as Q,i as X,y as F,R as le,U as oe,k as re,V as se,m as z,W as w,X as ce,p as ue,t as L,v as T,x as P,z as R,Y as Z,Z as ve,_ as de,$ as pe,a0 as me,B as J,C as fe,D as ge,a1 as he,I as q,S as ye}from"./main-1mV8A3Ok.js";import be from"./Footer-CdjXEWUr.js";import Ne from"./NavBarNotifications-DHG3R9FF.js";import ke from"./UserProfile-I8EAUU31.js";import{_ as Ce}from"./I18n-Cf0jTVM-.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{P as Ve}from"./vue3-perfect-scrollbar.esm-DJsoSPRD.js";import{V as Ie}from"./VNodeRenderer-DT_US9Ej.js";import{V as Ae}from"./VSpacer-DdVb5-0q.js";import"./formatters-Cw2xOObF.js";import"./helpers-DK5QwNv0.js";import"./VBadge-CwuW2LWl.js";import"./index-D5HNSvtj.js";import"./VMenu-C6RKladz.js";import"./VOverlay-Dw-bxEan.js";import"./easing-CjukEv2V.js";import"./lazy-B94C784v.js";import"./scopeId-B6VPZtEP.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-C3AmnP1-.js";import"./VCard-Quhh9XGX.js";import"./VAvatar-CS2PSZbd.js";import"./VImg-B0OvyP-a.js";import"./VCardText-DBYlaQFO.js";import"./VChip-BGAzZtGp.js";import"./index-Dr4Jpfvu.js";import"./VSlideGroup-D7xdXnSf.js";import"./VTooltip-ttGfmVc9.js";import"./VDivider-BynfZOFp.js";import"./VList-4bYWa8Xg.js";import"./ssrBoot-BSr0_Qc6.js";import"./useAbility-Bo2aFEt_.js";import"./VListItemAction-DerFTC9X.js";/* empty css              */const Se=U({name:"TransitionExpand",setup(t,{slots:a}){const o=i=>{const b=getComputedStyle(i).width;i.style.width=b,i.style.position="absolute",i.style.visibility="hidden",i.style.height="auto";const h=getComputedStyle(i).height;i.style.width="",i.style.position="",i.style.visibility="",i.style.height="0px",getComputedStyle(i).height,requestAnimationFrame(()=>{i.style.height=h})},f=i=>{i.style.height="auto"},n=i=>{const b=getComputedStyle(i).height;i.style.height=b,getComputedStyle(i).height,requestAnimationFrame(()=>{i.style.height="0px"})};return()=>N(N(E),{name:"expand",onEnter:o,onAfterEnter:f,onLeave:n},()=>{var i;return(i=a.default)==null?void 0:i.call(a)})}}),we=ee(Se,[["__scopeId","data-v-2683bda9"]]),_e=t=>(le("data-v-20c5b81b"),t=t(),oe(),t),$e={class:"nav-header"},Re={class:"app-logo-title"},Oe=_e(()=>$("div",{class:"vertical-nav-items-shadow"},null,-1)),xe={__name:"VerticalNav",props:{tag:{type:null,required:!1,default:"aside"},navItems:{type:null,required:!0},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const a=t,o=A(),f=ie(o);ne(K,f);const n=B(),i=g=>"heading"in g?qe:"children"in g?Pe:te,b=Y();_(()=>b.name,()=>{a.toggleIsOverlayNavActive(!1)});const h=A(!1),p=g=>h.value=g,C=g=>{h.value=g.target.scrollTop>0},S=n.isVerticalNavMini(f);return(g,r)=>{const d=M("RouterLink");return l(),c(m(a.tag),{ref_key:"refNav",ref:o,class:F(["layout-vertical-nav",[{"overlay-nav":e(n).isLessThanOverlayNavBreakpoint,hovered:e(f),visible:t.isOverlayNavActive,scrolled:e(h)}]])},{default:v(()=>[$("div",$e,[G(g.$slots,"nav-header",{},()=>[y(d,{to:"/",class:"app-logo app-title-wrapper"},{default:v(()=>[y(e(Ie),{nodes:e(u).app.logo},null,8,["nodes"]),y(E,{name:"vertical-nav-app-title"},{default:v(()=>[V($("h1",Re," Shabuj Global ",512),[[I,!e(S)]])]),_:1})]),_:1}),V((l(),c(m(e(u).app.iconRenderer||"div"),k({class:["header-action d-none nav-unpin",e(n).isVerticalNavCollapsed&&"d-lg-block"]},e(u).icons.verticalNavUnPinned,{onClick:r[0]||(r[0]=s=>e(n).isVerticalNavCollapsed=!e(n).isVerticalNavCollapsed)}),null,16,["class"])),[[I,e(n).isVerticalNavCollapsed]]),V((l(),c(m(e(u).app.iconRenderer||"div"),k({class:["header-action d-none nav-pin",!e(n).isVerticalNavCollapsed&&"d-lg-block"]},e(u).icons.verticalNavPinned,{onClick:r[1]||(r[1]=s=>e(n).isVerticalNavCollapsed=!e(n).isVerticalNavCollapsed)}),null,16,["class"])),[[I,!e(n).isVerticalNavCollapsed]]),(l(),c(m(e(u).app.iconRenderer||"div"),k({class:"header-action d-lg-none"},e(u).icons.close,{onClick:r[2]||(r[2]=s=>t.toggleIsOverlayNavActive(!1))}),null,16))],!0)]),G(g.$slots,"before-nav-items",{},()=>[Oe],!0),G(g.$slots,"nav-items",{updateIsVerticalNavScrolled:p},()=>[(l(),c(e(Ve),{key:e(n).isAppRTL,tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:C},{default:v(()=>[(l(!0),x(Q,null,X(t.navItems,(s,j)=>(l(),c(m(i(s)),{key:j,item:s},null,8,["item"]))),128))]),_:1}))],!0)]),_:3},8,["class"])}}},Le=ee(xe,[["__scopeId","data-v-20c5b81b"]]),Te={class:"nav-group-children"},Pe=Object.assign({name:"VerticalNavGroup"},{__name:"VerticalNavGroup",props:{item:{type:null,required:!0}},setup(t){const a=t,o=Y(),f=re(),n=B(),i=n.isVerticalNavMini(),b=se(K,A(!1)),h=A(!1),p=A(!1),C=r=>r.some(d=>{let s=w.value.includes(d.title);return"children"in d&&(s=C(d.children)||s),s}),S=r=>{r.forEach(d=>{"children"in d&&S(d.children),w.value=w.value.filter(s=>s!==d.title)})};_(()=>o.path,()=>{const r=z(a.item.children,f);p.value=r&&!n.isVerticalNavMini(b).value,h.value=r},{immediate:!0}),_(p,r=>{const d=w.value.indexOf(a.item.title);r&&d===-1?w.value.push(a.item.title):!r&&d!==-1&&(w.value.splice(d,1),S(a.item.children))},{immediate:!0}),_(w,r=>{if(r.at(-1)===a.item.title)return;const s=z(a.item.children,f);s||C(a.item.children)||(p.value=s,h.value=s)},{deep:!0}),_(n.isVerticalNavMini(b),r=>{p.value=r?!1:h.value});const g=ce();return(r,d)=>e(ue)(t.item)?(l(),x("li",{key:0,class:F(["nav-group",[{active:e(h),open:e(p),disabled:t.item.disable}]])},[$("div",{class:"nav-group-label",onClick:d[0]||(d[0]=s=>p.value=!e(p))},[(l(),c(m(e(u).app.iconRenderer||"div"),k(t.item.icon||e(u).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),(l(),c(m(e(g)?Z:"div"),k({name:"transition-slide-x"},e(g)?void 0:{class:"d-flex align-center flex-grow-1"}),{default:v(()=>[V((l(),c(m(e(u).app.i18n.enable?"i18n-t":"span"),k(e(L)(t.item.title,"span"),{key:"title",class:"nav-item-title"}),{default:v(()=>[T(P(t.item.title),1)]),_:1},16)),[[I,!e(i)]]),t.item.badgeContent?V((l(),c(m(e(u).app.i18n.enable?"i18n-t":"span"),k({key:0},e(L)(t.item.badgeContent,"span"),{key:"badge",class:["nav-item-badge",t.item.badgeClass]}),{default:v(()=>[T(P(t.item.badgeContent),1)]),_:1},16,["class"])),[[I,!e(i)]]):R("",!0),V((l(),c(m(e(u).app.iconRenderer||"div"),k(e(u).icons.chevronRight,{key:"arrow",class:"nav-group-arrow"}),null,16)),[[I,!e(i)]])]),_:1},16))]),y(e(we),null,{default:v(()=>[V($("ul",Te,[(l(!0),x(Q,null,X(t.item.children,s=>(l(),c(m("children"in s?"VerticalNavGroup":e(te)),{key:s.title,item:s},null,8,["item"]))),128))],512),[[I,e(p)]])]),_:1})],2)):R("",!0)}}),Be=U({props:{navItems:{type:Array,required:!0},verticalNavAttrs:{type:Object,default:()=>({})}},setup(t,{slots:a}){const{width:o}=ve(),f=B(),n=A(!1),i=A(!1),b=de(n);return pe(n,i),_(o,()=>{!f.isLessThanOverlayNavBreakpoint&&i.value&&(i.value=!1)}),()=>{var D,H,W;const h=me(t,"verticalNavAttrs"),{wrapper:p,wrapperProps:C,...S}=h.value,g=N(Le,{isOverlayNavActive:n.value,toggleIsOverlayNavActive:b,navItems:t.navItems,...S},{"nav-header":()=>{var O;return(O=a["vertical-nav-header"])==null?void 0:O.call(a)},"before-nav-items":()=>{var O;return(O=a["before-vertical-nav-items"])==null?void 0:O.call(a)}}),r=N("header",{class:["layout-navbar",{"navbar-blur":f.isNavbarBlurEnabled}]},[N("div",{class:"navbar-content-container"},(D=a.navbar)==null?void 0:D.call(a,{toggleVerticalOverlayNavActive:b}))]),d=N("main",{class:"layout-page-content"},N("div",{class:"page-content-container"},(H=a.default)==null?void 0:H.call(a))),s=N("footer",{class:"layout-footer"},[N("div",{class:"footer-content-container"},(W=a.footer)==null?void 0:W.call(a))]),j=N("div",{class:["layout-overlay",{visible:i.value}],onClick:()=>{i.value=!i.value}});return N("div",{class:["layout-wrapper",...f._layoutClasses]},[p?N(p,C,{default:()=>g}):g,N("div",{class:"layout-content-wrapper"},[r,d,s]),j])}}}),te={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(t){const o=B().isVerticalNavMini();return(f,n)=>e(J)(t.item.action,t.item.subject)?(l(),x("li",{key:0,class:F(["nav-link",{disabled:t.item.disable}])},[(l(),c(m(t.item.to?"RouterLink":"a"),k(e(ge)(t.item),{class:{"router-link-active router-link-exact-active":e(fe)(t.item,f.$router)}}),{default:v(()=>[(l(),c(m(e(u).app.iconRenderer||"div"),k(t.item.icon||e(u).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),y(Z,{name:"transition-slide-x"},{default:v(()=>[V((l(),c(m(e(u).app.i18n.enable?"i18n-t":"span"),k({key:"title",class:"nav-item-title"},e(L)(t.item.title,"span")),{default:v(()=>[T(P(t.item.title),1)]),_:1},16)),[[I,!e(o)]]),t.item.badgeContent?V((l(),c(m(e(u).app.i18n.enable?"i18n-t":"span"),k({key:"badge",class:["nav-item-badge",t.item.badgeClass]},e(L)(t.item.badgeContent,"span")),{default:v(()=>[T(P(t.item.badgeContent),1)]),_:1},16,["class"])),[[I,!e(o)]]):R("",!0)]),_:1})]),_:1},16,["class"]))],2)):R("",!0)}},je={key:0,class:"nav-section-title"},Ge={class:"title-wrapper"},qe={__name:"VerticalNavSectionTitle",props:{item:{type:null,required:!0}},setup(t){const o=B().isVerticalNavMini();return(f,n)=>e(J)(t.item.action,t.item.subject)?(l(),x("li",je,[$("div",Ge,[y(E,{name:"vertical-nav-section-title",mode:"out-in"},{default:v(()=>[(l(),c(m(e(o)?e(u).app.iconRenderer:e(u).app.i18n.enable?"i18n-t":"span"),k({key:e(o),class:e(o)?"placeholder-icon":"title-text"},{...e(u).icons.sectionTitlePlaceholder,...e(L)(t.item.heading,"span")}),{default:v(()=>[T(P(e(o)?null:t.item.heading),1)]),_:1},16,["class"]))]),_:1})])])):R("",!0)}},Me=[{title:"Dashboard",icon:{icon:"tabler-smart-home"},to:"dashboard",action:"read",subject:"application"},{title:"New Application",icon:{icon:"tabler-apps"},to:"application-new",action:"create",subject:"application"},{title:"Application History",icon:{icon:"tabler-apps"},to:"application",action:"read",subject:"application"},{title:"Record",icon:{icon:"tabler-files"},action:"read",subject:"record",children:[{title:"All Record",to:"record"},{title:"University",to:"record-university"},{title:"Intake",to:"record-intake"}]}],Ee=[...Me],Fe={class:"d-flex h-100 align-center"},It={__name:"DefaultLayoutWithVerticalNav",setup(t){const a=A(!1),o=A(null);return _([a,o],()=>{a.value&&o.value&&o.value.fallbackHandle(),!a.value&&o.value&&o.value.resolveHandle()},{immediate:!0}),(f,n)=>{const i=M("IconBtn"),b=ae,h=M("RouterView");return l(),c(e(Be),{"nav-items":e(Ee)},{navbar:v(({toggleVerticalOverlayNavActive:p})=>{var C;return[$("div",Fe,[y(i,{id:"vertical-nav-toggle-btn",class:"ms-n3 d-lg-none",onClick:S=>p(!0)},{default:v(()=>[y(he,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"]),y(Ae),e(q).app.i18n.enable&&((C=e(q).app.i18n.langConfig)!=null&&C.length)?(l(),c(Ce,{key:0,languages:e(q).app.i18n.langConfig},null,8,["languages"])):R("",!0),y(Ne,{class:"me-1"}),y(ke)])]}),footer:v(()=>[y(be)]),default:v(()=>[y(b,{ref_key:"refLoadingIndicator",ref:o},null,512),y(h,null,{default:v(({Component:p})=>[(l(),c(ye,{timeout:0,onFallback:n[0]||(n[0]=C=>a.value=!0),onResolve:n[1]||(n[1]=C=>a.value=!1)},{default:v(()=>[(l(),c(m(p)))]),_:2},1024))]),_:1})]),_:1},8,["nav-items"])}}};export{It as default};
