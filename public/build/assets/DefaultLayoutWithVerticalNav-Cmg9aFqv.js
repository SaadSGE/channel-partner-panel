import{_ as ae}from"./AppLoadingIndicator-DIjOQztC.js";import{u as ie}from"./notification-BZK703we.js";import{M as z,N,T as E,r as S,O as ne,P as oe,Q as K,l as P,j as Y,w as R,a as M,o as n,f as c,e as d,d as _,A as B,b as h,n as e,q as u,K as I,L as A,h as f,s as C,c as q,F as Q,i as X,y as F,R as re,U as le,k as se,V as ce,m as U,W as w,X as ue,p as de,t as O,v as x,x as L,z as $,Y as Z,Z as ve,_ as pe,$ as me,a0 as fe,B as J,C as ge,D as be,H as he,a1 as ye,I as G,S as Ne}from"./main-DEXLFq5-.js";import Ce from"./Footer-DLCbflPP.js";import ke from"./NavBarNotifications-IpDif0Ku.js";import Ve from"./UserProfile-CdFpj3g1.js";import{_ as Ie}from"./I18n-E68jGFca.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{P as Ae}from"./vue3-perfect-scrollbar.esm-CSeKWONk.js";import{V as Se}from"./VNodeRenderer-Biz62hcn.js";import{V as we}from"./VSpacer-Cc-cMN1O.js";import"./api-CQno0kML.js";import"./index-Dz1rBMAR.js";import"./formatters-lemdAz7z.js";import"./helpers-fLnzIySp.js";import"./VBadge-v5LBcSxJ.js";import"./index-UZWnqimo.js";import"./VMenu-Bwz97Y1a.js";import"./VOverlay-D3a_JeIA.js";import"./easing-CjukEv2V.js";import"./lazy-BlycEKg-.js";import"./scopeId-gfVHp0yK.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-OLWOH0ts.js";import"./VCard-BQ9pbwZy.js";import"./VAvatar-BaU-tpmv.js";import"./VImg-BwxQFvJc.js";import"./VCardText-CEHG5Us3.js";import"./VChip-BSo4JJOl.js";import"./index-dXcoFe5c.js";import"./VSlideGroup-CbIPENnS.js";import"./VTooltip-CXdZ1-vq.js";import"./VDivider-BGznFT5b.js";import"./VList-DKU5_qd-.js";import"./ssrBoot-D7sdtyqv.js";import"./useAbility-aRqBr4BX.js";import"./VListItemAction-BKfJ4K8_.js";/* empty css              */const Re=z({name:"TransitionExpand",setup(t,{slots:i}){const r=a=>{const y=getComputedStyle(a).width;a.style.width=y,a.style.position="absolute",a.style.visibility="hidden",a.style.height="auto";const b=getComputedStyle(a).height;a.style.width="",a.style.position="",a.style.visibility="",a.style.height="0px",getComputedStyle(a).height,requestAnimationFrame(()=>{a.style.height=b})},p=a=>{a.style.height="auto"},o=a=>{const y=getComputedStyle(a).height;a.style.height=y,getComputedStyle(a).height,requestAnimationFrame(()=>{a.style.height="0px"})};return()=>N(N(E),{name:"expand",onEnter:r,onAfterEnter:p,onLeave:o},()=>{var a;return(a=i.default)==null?void 0:a.call(i)})}}),_e=ee(Re,[["__scopeId","data-v-2683bda9"]]),$e=t=>(re("data-v-20c5b81b"),t=t(),le(),t),je={class:"nav-header"},qe={class:"app-logo-title"},Oe=$e(()=>_("div",{class:"vertical-nav-items-shadow"},null,-1)),xe={__name:"VerticalNav",props:{tag:{type:null,required:!1,default:"aside"},navItems:{type:null,required:!0},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const i=t,r=S(),p=ne(r);oe(K,p);const o=P(),a=m=>"heading"in m?Ee:"children"in m?Te:te,y=Y();R(()=>y.name,()=>{i.toggleIsOverlayNavActive(!1)});const b=S(!1),g=m=>b.value=m,V=m=>{b.value=m.target.scrollTop>0},k=o.isVerticalNavMini(p);return(m,l)=>{const v=M("RouterLink");return n(),c(f(i.tag),{ref_key:"refNav",ref:r,class:F(["layout-vertical-nav",[{"overlay-nav":e(o).isLessThanOverlayNavBreakpoint,hovered:e(p),visible:t.isOverlayNavActive,scrolled:e(b)}]])},{default:d(()=>[_("div",je,[B(m.$slots,"nav-header",{},()=>[h(v,{to:"/",class:"app-logo app-title-wrapper"},{default:d(()=>[h(e(Se),{nodes:e(u).app.logo},null,8,["nodes"]),h(E,{name:"vertical-nav-app-title"},{default:d(()=>[I(_("h1",qe," Shabuj Global ",512),[[A,!e(k)]])]),_:1})]),_:1}),I((n(),c(f(e(u).app.iconRenderer||"div"),C({class:["header-action d-none nav-unpin",e(o).isVerticalNavCollapsed&&"d-lg-block"]},e(u).icons.verticalNavUnPinned,{onClick:l[0]||(l[0]=s=>e(o).isVerticalNavCollapsed=!e(o).isVerticalNavCollapsed)}),null,16,["class"])),[[A,e(o).isVerticalNavCollapsed]]),I((n(),c(f(e(u).app.iconRenderer||"div"),C({class:["header-action d-none nav-pin",!e(o).isVerticalNavCollapsed&&"d-lg-block"]},e(u).icons.verticalNavPinned,{onClick:l[1]||(l[1]=s=>e(o).isVerticalNavCollapsed=!e(o).isVerticalNavCollapsed)}),null,16,["class"])),[[A,!e(o).isVerticalNavCollapsed]]),(n(),c(f(e(u).app.iconRenderer||"div"),C({class:"header-action d-lg-none"},e(u).icons.close,{onClick:l[2]||(l[2]=s=>t.toggleIsOverlayNavActive(!1))}),null,16))],!0)]),B(m.$slots,"before-nav-items",{},()=>[Oe],!0),B(m.$slots,"nav-items",{updateIsVerticalNavScrolled:g},()=>[(n(),c(e(Ae),{key:e(o).isAppRTL,tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:V},{default:d(()=>[(n(!0),q(Q,null,X(t.navItems,(s,T)=>(n(),c(f(a(s)),{key:T,item:s},null,8,["item"]))),128))]),_:1}))],!0)]),_:3},8,["class"])}}},Le=ee(xe,[["__scopeId","data-v-20c5b81b"]]),Pe={class:"nav-group-children"},Te=Object.assign({name:"VerticalNavGroup"},{__name:"VerticalNavGroup",props:{item:{type:null,required:!0}},setup(t){const i=t,r=Y(),p=se(),o=P(),a=o.isVerticalNavMini(),y=ce(K,S(!1)),b=S(!1),g=S(!1),V=l=>l.some(v=>{let s=w.value.includes(v.title);return"children"in v&&(s=V(v.children)||s),s}),k=l=>{l.forEach(v=>{"children"in v&&k(v.children),w.value=w.value.filter(s=>s!==v.title)})};R(()=>r.path,()=>{const l=U(i.item.children,p);g.value=l&&!o.isVerticalNavMini(y).value,b.value=l},{immediate:!0}),R(g,l=>{const v=w.value.indexOf(i.item.title);l&&v===-1?w.value.push(i.item.title):!l&&v!==-1&&(w.value.splice(v,1),k(i.item.children))},{immediate:!0}),R(w,l=>{if(l.at(-1)===i.item.title)return;const s=U(i.item.children,p);s||V(i.item.children)||(g.value=s,b.value=s)},{deep:!0}),R(o.isVerticalNavMini(y),l=>{g.value=l?!1:b.value});const m=ue();return(l,v)=>e(de)(t.item)?(n(),q("li",{key:0,class:F(["nav-group",[{active:e(b),open:e(g),disabled:t.item.disable}]])},[_("div",{class:"nav-group-label",onClick:v[0]||(v[0]=s=>g.value=!e(g))},[(n(),c(f(e(u).app.iconRenderer||"div"),C(t.item.icon||e(u).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),(n(),c(f(e(m)?Z:"div"),C({name:"transition-slide-x"},e(m)?void 0:{class:"d-flex align-center flex-grow-1"}),{default:d(()=>[I((n(),c(f(e(u).app.i18n.enable?"i18n-t":"span"),C(e(O)(t.item.title,"span"),{key:"title",class:"nav-item-title"}),{default:d(()=>[x(L(t.item.title),1)]),_:1},16)),[[A,!e(a)]]),t.item.badgeContent?I((n(),c(f(e(u).app.i18n.enable?"i18n-t":"span"),C({key:0},e(O)(t.item.badgeContent,"span"),{key:"badge",class:["nav-item-badge",t.item.badgeClass]}),{default:d(()=>[x(L(t.item.badgeContent),1)]),_:1},16,["class"])),[[A,!e(a)]]):$("",!0),I((n(),c(f(e(u).app.iconRenderer||"div"),C(e(u).icons.chevronRight,{key:"arrow",class:"nav-group-arrow"}),null,16)),[[A,!e(a)]])]),_:1},16))]),h(e(_e),null,{default:d(()=>[I(_("ul",Pe,[(n(!0),q(Q,null,X(t.item.children,s=>(n(),c(f("children"in s?"VerticalNavGroup":e(te)),{key:s.title,item:s},null,8,["item"]))),128))],512),[[A,e(g)]])]),_:1})],2)):$("",!0)}}),Be=z({props:{navItems:{type:Array,required:!0},verticalNavAttrs:{type:Object,default:()=>({})}},setup(t,{slots:i}){const{width:r}=ve(),p=P(),o=S(!1),a=S(!1),y=pe(o);return me(o,a),R(r,()=>{!p.isLessThanOverlayNavBreakpoint&&a.value&&(a.value=!1)}),()=>{var D,H,W;const b=fe(t,"verticalNavAttrs"),{wrapper:g,wrapperProps:V,...k}=b.value,m=N(Le,{isOverlayNavActive:o.value,toggleIsOverlayNavActive:y,navItems:t.navItems,...k},{"nav-header":()=>{var j;return(j=i["vertical-nav-header"])==null?void 0:j.call(i)},"before-nav-items":()=>{var j;return(j=i["before-vertical-nav-items"])==null?void 0:j.call(i)}}),l=N("header",{class:["layout-navbar",{"navbar-blur":p.isNavbarBlurEnabled}]},[N("div",{class:"navbar-content-container"},(D=i.navbar)==null?void 0:D.call(i,{toggleVerticalOverlayNavActive:y}))]),v=N("main",{class:"layout-page-content"},N("div",{class:"page-content-container"},(H=i.default)==null?void 0:H.call(i))),s=N("footer",{class:"layout-footer"},[N("div",{class:"footer-content-container"},(W=i.footer)==null?void 0:W.call(i))]),T=N("div",{class:["layout-overlay",{visible:a.value}],onClick:()=>{a.value=!a.value}});return N("div",{class:["layout-wrapper",...p._layoutClasses]},[g?N(g,V,{default:()=>m}):m,N("div",{class:"layout-content-wrapper"},[l,v,s]),T])}}}),te={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(t){const r=P().isVerticalNavMini();return(p,o)=>e(J)(t.item.action,t.item.subject)?(n(),q("li",{key:0,class:F(["nav-link",{disabled:t.item.disable}])},[(n(),c(f(t.item.to?"RouterLink":"a"),C(e(be)(t.item),{class:{"router-link-active router-link-exact-active":e(ge)(t.item,p.$router)}}),{default:d(()=>[(n(),c(f(e(u).app.iconRenderer||"div"),C(t.item.icon||e(u).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),h(Z,{name:"transition-slide-x"},{default:d(()=>[I((n(),c(f(e(u).app.i18n.enable?"i18n-t":"span"),C({key:"title",class:"nav-item-title"},e(O)(t.item.title,"span")),{default:d(()=>[x(L(t.item.title),1)]),_:1},16)),[[A,!e(r)]]),t.item.badgeContent?I((n(),c(f(e(u).app.i18n.enable?"i18n-t":"span"),C({key:"badge",class:["nav-item-badge",t.item.badgeClass]},e(O)(t.item.badgeContent,"span")),{default:d(()=>[x(L(t.item.badgeContent),1)]),_:1},16,["class"])),[[A,!e(r)]]):$("",!0)]),_:1})]),_:1},16,["class"]))],2)):$("",!0)}},Ge={key:0,class:"nav-section-title"},Me={class:"title-wrapper"},Ee={__name:"VerticalNavSectionTitle",props:{item:{type:null,required:!0}},setup(t){const r=P().isVerticalNavMini();return(p,o)=>e(J)(t.item.action,t.item.subject)?(n(),q("li",Ge,[_("div",Me,[h(E,{name:"vertical-nav-section-title",mode:"out-in"},{default:d(()=>[(n(),c(f(e(r)?e(u).app.iconRenderer:e(u).app.i18n.enable?"i18n-t":"span"),C({key:e(r),class:e(r)?"placeholder-icon":"title-text"},{...e(u).icons.sectionTitlePlaceholder,...e(O)(t.item.heading,"span")}),{default:d(()=>[x(L(e(r)?null:t.item.heading),1)]),_:1},16,["class"]))]),_:1})])])):$("",!0)}},Fe=[{title:"Dashboard",icon:{icon:"tabler-smart-home"},to:"dashboard",action:"read",subject:"dashboard"},{title:"New Application",icon:{icon:"tabler-school"},to:"application-new",action:"create",subject:"application"},{title:"Application Request",icon:{icon:"tabler-clipboard-check"},to:"application-request",action:"read",subject:"application-request"},{title:"Compliance Request",icon:{icon:"tabler-clipboard-check"},to:"compliance-request",action:"read",subject:"compliance-request"},{title:"Application List",icon:{icon:"tabler-apps"},to:"application",action:"read",subject:"application"},{title:"University List",icon:{icon:"tabler-apps"},to:"university-list",action:"read",subject:"dashboard"},{title:"Course Request",icon:{icon:"tabler-command"},action:"read",subject:"course-request",children:[{title:"Course",to:"course-request",action:"read",subject:"course-request"}]},{title:"Record",icon:{icon:"tabler-files"},action:"read",subject:"record",children:[{title:"All Record",to:"record",action:"read",subject:"record"},{title:"University",to:"record-university",action:"read",subject:"record"},{title:"Intake",to:"record-intake",action:"read",subject:"record"}]},{title:"Roles & Permission",icon:{icon:"tabler-command"},action:"create",subject:"dashboard",children:[{title:"Roles",to:"roles",action:"create",subject:"dashboard"},{title:"Permissions",to:"permissions",action:"create",subject:"dashboard"}]},{title:"User",icon:{icon:"tabler-user"},to:"user",action:"read",subject:"user"},{title:"Email",icon:{icon:"tabler-mail"},to:"email",action:"read",subject:"email"}],De=[...Fe],He={class:"d-flex h-100 align-center"},_t={__name:"DefaultLayoutWithVerticalNav",setup(t){const i=S(!1),r=S(null);R([i,r],()=>{i.value&&r.value&&r.value.fallbackHandle(),!i.value&&r.value&&r.value.resolveHandle()},{immediate:!0});const p=ie();return he(()=>{p.fetchNotifications()}),(o,a)=>{const y=M("IconBtn"),b=ae,g=M("RouterView");return n(),c(e(Be),{"nav-items":e(De)},{navbar:d(({toggleVerticalOverlayNavActive:V})=>{var k;return[_("div",He,[h(y,{id:"vertical-nav-toggle-btn",class:"ms-n3 d-lg-none",onClick:m=>V(!0)},{default:d(()=>[h(ye,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"]),h(we),e(G).app.i18n.enable&&((k=e(G).app.i18n.langConfig)!=null&&k.length)?(n(),c(Ie,{key:0,languages:e(G).app.i18n.langConfig},null,8,["languages"])):$("",!0),h(ke,{class:"me-1"}),h(Ve)])]}),footer:d(()=>[h(Ce)]),default:d(()=>[h(b,{ref_key:"refLoadingIndicator",ref:r},null,512),h(g,null,{default:d(({Component:V})=>[(n(),c(Ne,{timeout:0,onFallback:a[0]||(a[0]=k=>i.value=!0),onResolve:a[1]||(a[1]=k=>i.value=!1)},{default:d(()=>[(n(),c(f(V)))]),_:2},1024))]),_:1})]),_:1},8,["nav-items"])}}};export{_t as default};
