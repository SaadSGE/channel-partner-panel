import{_ as ae}from"./AppLoadingIndicator-DNck9IDD.js";import{M as U,N,T as E,r as A,O as ie,P as ne,Q as K,l as j,j as Y,w as _,a as M,o as r,f as c,e as d,d as $,A as G,b as y,n as e,q as u,K as V,L as I,h as m,s as k,c as x,F as Q,i as X,y as F,R as re,U as oe,k as le,V as se,m as z,W as w,X as ce,p as ue,t as L,v as T,x as P,z as R,Y as Z,Z as de,_ as ve,$ as pe,a0 as me,B as J,C as fe,D as ge,a1 as he,I as q,S as ye}from"./main-cX0WqYxM.js";import be from"./Footer-B9d9Agv3.js";import Ne from"./NavBarNotifications-BbzECoQT.js";import ke from"./UserProfile-T9_5SnJy.js";import{_ as Ce}from"./I18n-Czi5Q9oV.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{P as Ve}from"./vue3-perfect-scrollbar.esm-CEWUVhmY.js";import{V as Ie}from"./VNodeRenderer-CLBFzEzQ.js";import{V as Ae}from"./VSpacer-8nHgqEb0.js";import"./formatters-Cw2xOObF.js";import"./helpers-DK5QwNv0.js";import"./VBadge-C_BbR_GI.js";import"./index-BjWxQyns.js";import"./VMenu-DmEIPCL-.js";import"./VOverlay-Dt8LsyC0.js";import"./easing-CjukEv2V.js";import"./lazy-DOHHlfda.js";import"./scopeId-CTCEP_tp.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B4Ks4ZCJ.js";import"./VCard-DD-bpITE.js";import"./VAvatar-DESUj1gt.js";import"./VImg-Bq9A4AwQ.js";import"./VCardText-BpOf8J-6.js";import"./VChip-DQyCHdpB.js";import"./index-BKtWMVh-.js";import"./VSlideGroup-BcPHj7ED.js";import"./VTooltip-CgUe9OkG.js";import"./VDivider-nun6oEDR.js";import"./VList-f6hP_K5D.js";import"./ssrBoot-C0TROgbJ.js";import"./useAbility-CmEnqA5Q.js";import"./VListItemAction-CB7xDky_.js";/* empty css              */const Se=U({name:"TransitionExpand",setup(t,{slots:a}){const o=i=>{const b=getComputedStyle(i).width;i.style.width=b,i.style.position="absolute",i.style.visibility="hidden",i.style.height="auto";const h=getComputedStyle(i).height;i.style.width="",i.style.position="",i.style.visibility="",i.style.height="0px",getComputedStyle(i).height,requestAnimationFrame(()=>{i.style.height=h})},f=i=>{i.style.height="auto"},n=i=>{const b=getComputedStyle(i).height;i.style.height=b,getComputedStyle(i).height,requestAnimationFrame(()=>{i.style.height="0px"})};return()=>N(N(E),{name:"expand",onEnter:o,onAfterEnter:f,onLeave:n},()=>{var i;return(i=a.default)==null?void 0:i.call(a)})}}),we=ee(Se,[["__scopeId","data-v-2683bda9"]]),_e=t=>(re("data-v-20c5b81b"),t=t(),oe(),t),$e={class:"nav-header"},Re={class:"app-logo-title"},Oe=_e(()=>$("div",{class:"vertical-nav-items-shadow"},null,-1)),xe={__name:"VerticalNav",props:{tag:{type:null,required:!1,default:"aside"},navItems:{type:null,required:!0},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const a=t,o=A(),f=ie(o);ne(K,f);const n=j(),i=g=>"heading"in g?qe:"children"in g?Pe:te,b=Y();_(()=>b.name,()=>{a.toggleIsOverlayNavActive(!1)});const h=A(!1),p=g=>h.value=g,C=g=>{h.value=g.target.scrollTop>0},S=n.isVerticalNavMini(f);return(g,l)=>{const v=M("RouterLink");return r(),c(m(a.tag),{ref_key:"refNav",ref:o,class:F(["layout-vertical-nav",[{"overlay-nav":e(n).isLessThanOverlayNavBreakpoint,hovered:e(f),visible:t.isOverlayNavActive,scrolled:e(h)}]])},{default:d(()=>[$("div",$e,[G(g.$slots,"nav-header",{},()=>[y(v,{to:"/",class:"app-logo app-title-wrapper"},{default:d(()=>[y(e(Ie),{nodes:e(u).app.logo},null,8,["nodes"]),y(E,{name:"vertical-nav-app-title"},{default:d(()=>[V($("h1",Re," Shabuj Global ",512),[[I,!e(S)]])]),_:1})]),_:1}),V((r(),c(m(e(u).app.iconRenderer||"div"),k({class:["header-action d-none nav-unpin",e(n).isVerticalNavCollapsed&&"d-lg-block"]},e(u).icons.verticalNavUnPinned,{onClick:l[0]||(l[0]=s=>e(n).isVerticalNavCollapsed=!e(n).isVerticalNavCollapsed)}),null,16,["class"])),[[I,e(n).isVerticalNavCollapsed]]),V((r(),c(m(e(u).app.iconRenderer||"div"),k({class:["header-action d-none nav-pin",!e(n).isVerticalNavCollapsed&&"d-lg-block"]},e(u).icons.verticalNavPinned,{onClick:l[1]||(l[1]=s=>e(n).isVerticalNavCollapsed=!e(n).isVerticalNavCollapsed)}),null,16,["class"])),[[I,!e(n).isVerticalNavCollapsed]]),(r(),c(m(e(u).app.iconRenderer||"div"),k({class:"header-action d-lg-none"},e(u).icons.close,{onClick:l[2]||(l[2]=s=>t.toggleIsOverlayNavActive(!1))}),null,16))],!0)]),G(g.$slots,"before-nav-items",{},()=>[Oe],!0),G(g.$slots,"nav-items",{updateIsVerticalNavScrolled:p},()=>[(r(),c(e(Ve),{key:e(n).isAppRTL,tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:C},{default:d(()=>[(r(!0),x(Q,null,X(t.navItems,(s,B)=>(r(),c(m(i(s)),{key:B,item:s},null,8,["item"]))),128))]),_:1}))],!0)]),_:3},8,["class"])}}},Le=ee(xe,[["__scopeId","data-v-20c5b81b"]]),Te={class:"nav-group-children"},Pe=Object.assign({name:"VerticalNavGroup"},{__name:"VerticalNavGroup",props:{item:{type:null,required:!0}},setup(t){const a=t,o=Y(),f=le(),n=j(),i=n.isVerticalNavMini(),b=se(K,A(!1)),h=A(!1),p=A(!1),C=l=>l.some(v=>{let s=w.value.includes(v.title);return"children"in v&&(s=C(v.children)||s),s}),S=l=>{l.forEach(v=>{"children"in v&&S(v.children),w.value=w.value.filter(s=>s!==v.title)})};_(()=>o.path,()=>{const l=z(a.item.children,f);p.value=l&&!n.isVerticalNavMini(b).value,h.value=l},{immediate:!0}),_(p,l=>{const v=w.value.indexOf(a.item.title);l&&v===-1?w.value.push(a.item.title):!l&&v!==-1&&(w.value.splice(v,1),S(a.item.children))},{immediate:!0}),_(w,l=>{if(l.at(-1)===a.item.title)return;const s=z(a.item.children,f);s||C(a.item.children)||(p.value=s,h.value=s)},{deep:!0}),_(n.isVerticalNavMini(b),l=>{p.value=l?!1:h.value});const g=ce();return(l,v)=>e(ue)(t.item)?(r(),x("li",{key:0,class:F(["nav-group",[{active:e(h),open:e(p),disabled:t.item.disable}]])},[$("div",{class:"nav-group-label",onClick:v[0]||(v[0]=s=>p.value=!e(p))},[(r(),c(m(e(u).app.iconRenderer||"div"),k(t.item.icon||e(u).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),(r(),c(m(e(g)?Z:"div"),k({name:"transition-slide-x"},e(g)?void 0:{class:"d-flex align-center flex-grow-1"}),{default:d(()=>[V((r(),c(m(e(u).app.i18n.enable?"i18n-t":"span"),k(e(L)(t.item.title,"span"),{key:"title",class:"nav-item-title"}),{default:d(()=>[T(P(t.item.title),1)]),_:1},16)),[[I,!e(i)]]),t.item.badgeContent?V((r(),c(m(e(u).app.i18n.enable?"i18n-t":"span"),k({key:0},e(L)(t.item.badgeContent,"span"),{key:"badge",class:["nav-item-badge",t.item.badgeClass]}),{default:d(()=>[T(P(t.item.badgeContent),1)]),_:1},16,["class"])),[[I,!e(i)]]):R("",!0),V((r(),c(m(e(u).app.iconRenderer||"div"),k(e(u).icons.chevronRight,{key:"arrow",class:"nav-group-arrow"}),null,16)),[[I,!e(i)]])]),_:1},16))]),y(e(we),null,{default:d(()=>[V($("ul",Te,[(r(!0),x(Q,null,X(t.item.children,s=>(r(),c(m("children"in s?"VerticalNavGroup":e(te)),{key:s.title,item:s},null,8,["item"]))),128))],512),[[I,e(p)]])]),_:1})],2)):R("",!0)}}),je=U({props:{navItems:{type:Array,required:!0},verticalNavAttrs:{type:Object,default:()=>({})}},setup(t,{slots:a}){const{width:o}=de(),f=j(),n=A(!1),i=A(!1),b=ve(n);return pe(n,i),_(o,()=>{!f.isLessThanOverlayNavBreakpoint&&i.value&&(i.value=!1)}),()=>{var D,H,W;const h=me(t,"verticalNavAttrs"),{wrapper:p,wrapperProps:C,...S}=h.value,g=N(Le,{isOverlayNavActive:n.value,toggleIsOverlayNavActive:b,navItems:t.navItems,...S},{"nav-header":()=>{var O;return(O=a["vertical-nav-header"])==null?void 0:O.call(a)},"before-nav-items":()=>{var O;return(O=a["before-vertical-nav-items"])==null?void 0:O.call(a)}}),l=N("header",{class:["layout-navbar",{"navbar-blur":f.isNavbarBlurEnabled}]},[N("div",{class:"navbar-content-container"},(D=a.navbar)==null?void 0:D.call(a,{toggleVerticalOverlayNavActive:b}))]),v=N("main",{class:"layout-page-content"},N("div",{class:"page-content-container"},(H=a.default)==null?void 0:H.call(a))),s=N("footer",{class:"layout-footer"},[N("div",{class:"footer-content-container"},(W=a.footer)==null?void 0:W.call(a))]),B=N("div",{class:["layout-overlay",{visible:i.value}],onClick:()=>{i.value=!i.value}});return N("div",{class:["layout-wrapper",...f._layoutClasses]},[p?N(p,C,{default:()=>g}):g,N("div",{class:"layout-content-wrapper"},[l,v,s]),B])}}}),te={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(t){const o=j().isVerticalNavMini();return(f,n)=>e(J)(t.item.action,t.item.subject)?(r(),x("li",{key:0,class:F(["nav-link",{disabled:t.item.disable}])},[(r(),c(m(t.item.to?"RouterLink":"a"),k(e(ge)(t.item),{class:{"router-link-active router-link-exact-active":e(fe)(t.item,f.$router)}}),{default:d(()=>[(r(),c(m(e(u).app.iconRenderer||"div"),k(t.item.icon||e(u).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),y(Z,{name:"transition-slide-x"},{default:d(()=>[V((r(),c(m(e(u).app.i18n.enable?"i18n-t":"span"),k({key:"title",class:"nav-item-title"},e(L)(t.item.title,"span")),{default:d(()=>[T(P(t.item.title),1)]),_:1},16)),[[I,!e(o)]]),t.item.badgeContent?V((r(),c(m(e(u).app.i18n.enable?"i18n-t":"span"),k({key:"badge",class:["nav-item-badge",t.item.badgeClass]},e(L)(t.item.badgeContent,"span")),{default:d(()=>[T(P(t.item.badgeContent),1)]),_:1},16,["class"])),[[I,!e(o)]]):R("",!0)]),_:1})]),_:1},16,["class"]))],2)):R("",!0)}},Be={key:0,class:"nav-section-title"},Ge={class:"title-wrapper"},qe={__name:"VerticalNavSectionTitle",props:{item:{type:null,required:!0}},setup(t){const o=j().isVerticalNavMini();return(f,n)=>e(J)(t.item.action,t.item.subject)?(r(),x("li",Be,[$("div",Ge,[y(E,{name:"vertical-nav-section-title",mode:"out-in"},{default:d(()=>[(r(),c(m(e(o)?e(u).app.iconRenderer:e(u).app.i18n.enable?"i18n-t":"span"),k({key:e(o),class:e(o)?"placeholder-icon":"title-text"},{...e(u).icons.sectionTitlePlaceholder,...e(L)(t.item.heading,"span")}),{default:d(()=>[T(P(e(o)?null:t.item.heading),1)]),_:1},16,["class"]))]),_:1})])])):R("",!0)}},Me=[{title:"Dashboard",icon:{icon:"tabler-smart-home"},to:"dashboard",action:"read",subject:"dashboard"},{title:"New Application",icon:{icon:"tabler-apps"},to:"application-new",action:"create",subject:"application"},{title:"Application History",icon:{icon:"tabler-apps"},to:"application",action:"read",subject:"application"},{title:"Record",icon:{icon:"tabler-files"},action:"read",subject:"record",children:[{title:"All Record",to:"record",action:"read",subject:"record"},{title:"University",to:"record-university",action:"read",subject:"record"},{title:"Intake",to:"record-intake",action:"read",subject:"record"}]}],Ee=[...Me],Fe={class:"d-flex h-100 align-center"},It={__name:"DefaultLayoutWithVerticalNav",setup(t){const a=A(!1),o=A(null);return _([a,o],()=>{a.value&&o.value&&o.value.fallbackHandle(),!a.value&&o.value&&o.value.resolveHandle()},{immediate:!0}),(f,n)=>{const i=M("IconBtn"),b=ae,h=M("RouterView");return r(),c(e(je),{"nav-items":e(Ee)},{navbar:d(({toggleVerticalOverlayNavActive:p})=>{var C;return[$("div",Fe,[y(i,{id:"vertical-nav-toggle-btn",class:"ms-n3 d-lg-none",onClick:S=>p(!0)},{default:d(()=>[y(he,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"]),y(Ae),e(q).app.i18n.enable&&((C=e(q).app.i18n.langConfig)!=null&&C.length)?(r(),c(Ce,{key:0,languages:e(q).app.i18n.langConfig},null,8,["languages"])):R("",!0),y(Ne,{class:"me-1"}),y(ke)])]}),footer:d(()=>[y(be)]),default:d(()=>[y(b,{ref_key:"refLoadingIndicator",ref:o},null,512),y(h,null,{default:d(({Component:p})=>[(r(),c(ye,{timeout:0,onFallback:n[0]||(n[0]=C=>a.value=!0),onResolve:n[1]||(n[1]=C=>a.value=!1)},{default:d(()=>[(r(),c(m(p)))]),_:2},1024))]),_:1})]),_:1},8,["nav-items"])}}};export{It as default};
