import{_ as ae}from"./AppLoadingIndicator-hAlGQ1VY.js";import{u as ie}from"./notification-DJJ4eHao.js";import{M as z,N,T as E,r as S,O as ne,P as oe,Q as K,l as P,j as Y,w as R,a as M,o as n,f as c,e as d,d as _,A as B,b as h,n as e,q as u,K as I,L as A,h as f,s as C,c as q,F as Q,i as X,y as F,R as re,U as se,k as le,V as ce,m as U,W as w,X as ue,p as de,t as L,v as O,x,z as $,Y as Z,Z as ve,_ as pe,$ as me,a0 as fe,B as J,C as be,D as ge,H as he,a1 as ye,I as G,S as Ne}from"./main-Cp2POdXb.js";import Ce from"./Footer-BZVHehj2.js";import ke from"./NavBarNotifications-Dqn0LqHg.js";import Ve from"./UserProfile-DZtfpB4N.js";import{_ as Ie}from"./I18n-CQsvJEOt.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{P as Ae}from"./vue3-perfect-scrollbar.esm-C7kiyJub.js";import{V as Se}from"./VNodeRenderer-BOrtmnwQ.js";import{V as we}from"./VSpacer-i5anbK_5.js";import"./api-DlJz2cXw.js";import"./index-BYrzgnBV.js";import"./formatters-DULOiX1-.js";import"./VBadge-DOLvWsAf.js";import"./index-ClsSkh9w.js";import"./VMenu-D59SCE8_.js";import"./dialog-transition-1LjPfX5Q.js";import"./forwardRefs-D9kYFWgq.js";import"./scopeId-COQ9BaAw.js";import"./VCard-oCmDgLNf.js";import"./VAvatar-DP4U1kqO.js";import"./VImg-CgcLxCLJ.js";import"./VCardText-DIkb2F71.js";import"./VChip-ihqZWhi4.js";import"./index-BkQ_qyLp.js";import"./VTooltip-Bl7HRiN8.js";import"./VDivider-DEaYy4t1.js";import"./VList-Cacr4NmG.js";import"./ssrBoot-CQ8JDYey.js";import"./useAbility-BlVrxauM.js";import"./VListItemAction-D3X5-6bJ.js";/* empty css              */const Re=z({name:"TransitionExpand",setup(t,{slots:i}){const r=a=>{const y=getComputedStyle(a).width;a.style.width=y,a.style.position="absolute",a.style.visibility="hidden",a.style.height="auto";const g=getComputedStyle(a).height;a.style.width="",a.style.position="",a.style.visibility="",a.style.height="0px",getComputedStyle(a).height,requestAnimationFrame(()=>{a.style.height=g})},p=a=>{a.style.height="auto"},o=a=>{const y=getComputedStyle(a).height;a.style.height=y,getComputedStyle(a).height,requestAnimationFrame(()=>{a.style.height="0px"})};return()=>N(N(E),{name:"expand",onEnter:r,onAfterEnter:p,onLeave:o},()=>{var a;return(a=i.default)==null?void 0:a.call(i)})}}),_e=ee(Re,[["__scopeId","data-v-2683bda9"]]),$e=t=>(re("data-v-20c5b81b"),t=t(),se(),t),je={class:"nav-header"},qe={class:"app-logo-title"},Le=$e(()=>_("div",{class:"vertical-nav-items-shadow"},null,-1)),Oe={__name:"VerticalNav",props:{tag:{type:null,required:!1,default:"aside"},navItems:{type:null,required:!0},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const i=t,r=S(),p=ne(r);oe(K,p);const o=P(),a=m=>"heading"in m?Ee:"children"in m?Te:te,y=Y();R(()=>y.name,()=>{i.toggleIsOverlayNavActive(!1)});const g=S(!1),b=m=>g.value=m,V=m=>{g.value=m.target.scrollTop>0},k=o.isVerticalNavMini(p);return(m,s)=>{const v=M("RouterLink");return n(),c(f(i.tag),{ref_key:"refNav",ref:r,class:F(["layout-vertical-nav",[{"overlay-nav":e(o).isLessThanOverlayNavBreakpoint,hovered:e(p),visible:t.isOverlayNavActive,scrolled:e(g)}]])},{default:d(()=>[_("div",je,[B(m.$slots,"nav-header",{},()=>[h(v,{to:"/",class:"app-logo app-title-wrapper"},{default:d(()=>[h(e(Se),{nodes:e(u).app.logo},null,8,["nodes"]),h(E,{name:"vertical-nav-app-title"},{default:d(()=>[I(_("h1",qe," Shabuj Global ",512),[[A,!e(k)]])]),_:1})]),_:1}),I((n(),c(f(e(u).app.iconRenderer||"div"),C({class:["header-action d-none nav-unpin",e(o).isVerticalNavCollapsed&&"d-lg-block"]},e(u).icons.verticalNavUnPinned,{onClick:s[0]||(s[0]=l=>e(o).isVerticalNavCollapsed=!e(o).isVerticalNavCollapsed)}),null,16,["class"])),[[A,e(o).isVerticalNavCollapsed]]),I((n(),c(f(e(u).app.iconRenderer||"div"),C({class:["header-action d-none nav-pin",!e(o).isVerticalNavCollapsed&&"d-lg-block"]},e(u).icons.verticalNavPinned,{onClick:s[1]||(s[1]=l=>e(o).isVerticalNavCollapsed=!e(o).isVerticalNavCollapsed)}),null,16,["class"])),[[A,!e(o).isVerticalNavCollapsed]]),(n(),c(f(e(u).app.iconRenderer||"div"),C({class:"header-action d-lg-none"},e(u).icons.close,{onClick:s[2]||(s[2]=l=>t.toggleIsOverlayNavActive(!1))}),null,16))],!0)]),B(m.$slots,"before-nav-items",{},()=>[Le],!0),B(m.$slots,"nav-items",{updateIsVerticalNavScrolled:b},()=>[(n(),c(e(Ae),{key:e(o).isAppRTL,tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:V},{default:d(()=>[(n(!0),q(Q,null,X(t.navItems,(l,T)=>(n(),c(f(a(l)),{key:T,item:l},null,8,["item"]))),128))]),_:1}))],!0)]),_:3},8,["class"])}}},xe=ee(Oe,[["__scopeId","data-v-20c5b81b"]]),Pe={class:"nav-group-children"},Te=Object.assign({name:"VerticalNavGroup"},{__name:"VerticalNavGroup",props:{item:{type:null,required:!0}},setup(t){const i=t,r=Y(),p=le(),o=P(),a=o.isVerticalNavMini(),y=ce(K,S(!1)),g=S(!1),b=S(!1),V=s=>s.some(v=>{let l=w.value.includes(v.title);return"children"in v&&(l=V(v.children)||l),l}),k=s=>{s.forEach(v=>{"children"in v&&k(v.children),w.value=w.value.filter(l=>l!==v.title)})};R(()=>r.path,()=>{const s=U(i.item.children,p);b.value=s&&!o.isVerticalNavMini(y).value,g.value=s},{immediate:!0}),R(b,s=>{const v=w.value.indexOf(i.item.title);s&&v===-1?w.value.push(i.item.title):!s&&v!==-1&&(w.value.splice(v,1),k(i.item.children))},{immediate:!0}),R(w,s=>{if(s.at(-1)===i.item.title)return;const l=U(i.item.children,p);l||V(i.item.children)||(b.value=l,g.value=l)},{deep:!0}),R(o.isVerticalNavMini(y),s=>{b.value=s?!1:g.value});const m=ue();return(s,v)=>e(de)(t.item)?(n(),q("li",{key:0,class:F(["nav-group",[{active:e(g),open:e(b),disabled:t.item.disable}]])},[_("div",{class:"nav-group-label",onClick:v[0]||(v[0]=l=>b.value=!e(b))},[(n(),c(f(e(u).app.iconRenderer||"div"),C(t.item.icon||e(u).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),(n(),c(f(e(m)?Z:"div"),C({name:"transition-slide-x"},e(m)?void 0:{class:"d-flex align-center flex-grow-1"}),{default:d(()=>[I((n(),c(f(e(u).app.i18n.enable?"i18n-t":"span"),C(e(L)(t.item.title,"span"),{key:"title",class:"nav-item-title"}),{default:d(()=>[O(x(t.item.title),1)]),_:1},16)),[[A,!e(a)]]),t.item.badgeContent?I((n(),c(f(e(u).app.i18n.enable?"i18n-t":"span"),C({key:0},e(L)(t.item.badgeContent,"span"),{key:"badge",class:["nav-item-badge",t.item.badgeClass]}),{default:d(()=>[O(x(t.item.badgeContent),1)]),_:1},16,["class"])),[[A,!e(a)]]):$("",!0),I((n(),c(f(e(u).app.iconRenderer||"div"),C(e(u).icons.chevronRight,{key:"arrow",class:"nav-group-arrow"}),null,16)),[[A,!e(a)]])]),_:1},16))]),h(e(_e),null,{default:d(()=>[I(_("ul",Pe,[(n(!0),q(Q,null,X(t.item.children,l=>(n(),c(f("children"in l?"VerticalNavGroup":e(te)),{key:l.title,item:l},null,8,["item"]))),128))],512),[[A,e(b)]])]),_:1})],2)):$("",!0)}}),Be=z({props:{navItems:{type:Array,required:!0},verticalNavAttrs:{type:Object,default:()=>({})}},setup(t,{slots:i}){const{width:r}=ve(),p=P(),o=S(!1),a=S(!1),y=pe(o);return me(o,a),R(r,()=>{!p.isLessThanOverlayNavBreakpoint&&a.value&&(a.value=!1)}),()=>{var D,H,W;const g=fe(t,"verticalNavAttrs"),{wrapper:b,wrapperProps:V,...k}=g.value,m=N(xe,{isOverlayNavActive:o.value,toggleIsOverlayNavActive:y,navItems:t.navItems,...k},{"nav-header":()=>{var j;return(j=i["vertical-nav-header"])==null?void 0:j.call(i)},"before-nav-items":()=>{var j;return(j=i["before-vertical-nav-items"])==null?void 0:j.call(i)}}),s=N("header",{class:["layout-navbar",{"navbar-blur":p.isNavbarBlurEnabled}]},[N("div",{class:"navbar-content-container"},(D=i.navbar)==null?void 0:D.call(i,{toggleVerticalOverlayNavActive:y}))]),v=N("main",{class:"layout-page-content"},N("div",{class:"page-content-container"},(H=i.default)==null?void 0:H.call(i))),l=N("footer",{class:"layout-footer"},[N("div",{class:"footer-content-container"},(W=i.footer)==null?void 0:W.call(i))]),T=N("div",{class:["layout-overlay",{visible:a.value}],onClick:()=>{a.value=!a.value}});return N("div",{class:["layout-wrapper",...p._layoutClasses]},[b?N(b,V,{default:()=>m}):m,N("div",{class:"layout-content-wrapper"},[s,v,l]),T])}}}),te={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(t){const r=P().isVerticalNavMini();return(p,o)=>e(J)(t.item.action,t.item.subject)?(n(),q("li",{key:0,class:F(["nav-link",{disabled:t.item.disable}])},[(n(),c(f(t.item.to?"RouterLink":"a"),C(e(ge)(t.item),{class:{"router-link-active router-link-exact-active":e(be)(t.item,p.$router)}}),{default:d(()=>[(n(),c(f(e(u).app.iconRenderer||"div"),C(t.item.icon||e(u).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),h(Z,{name:"transition-slide-x"},{default:d(()=>[I((n(),c(f(e(u).app.i18n.enable?"i18n-t":"span"),C({key:"title",class:"nav-item-title"},e(L)(t.item.title,"span")),{default:d(()=>[O(x(t.item.title),1)]),_:1},16)),[[A,!e(r)]]),t.item.badgeContent?I((n(),c(f(e(u).app.i18n.enable?"i18n-t":"span"),C({key:"badge",class:["nav-item-badge",t.item.badgeClass]},e(L)(t.item.badgeContent,"span")),{default:d(()=>[O(x(t.item.badgeContent),1)]),_:1},16,["class"])),[[A,!e(r)]]):$("",!0)]),_:1})]),_:1},16,["class"]))],2)):$("",!0)}},Ge={key:0,class:"nav-section-title"},Me={class:"title-wrapper"},Ee={__name:"VerticalNavSectionTitle",props:{item:{type:null,required:!0}},setup(t){const r=P().isVerticalNavMini();return(p,o)=>e(J)(t.item.action,t.item.subject)?(n(),q("li",Ge,[_("div",Me,[h(E,{name:"vertical-nav-section-title",mode:"out-in"},{default:d(()=>[(n(),c(f(e(r)?e(u).app.iconRenderer:e(u).app.i18n.enable?"i18n-t":"span"),C({key:e(r),class:e(r)?"placeholder-icon":"title-text"},{...e(u).icons.sectionTitlePlaceholder,...e(L)(t.item.heading,"span")}),{default:d(()=>[O(x(e(r)?null:t.item.heading),1)]),_:1},16,["class"]))]),_:1})])])):$("",!0)}},Fe=[{title:"Dashboard",icon:{icon:"tabler-smart-home"},to:"dashboard",action:"read",subject:"dashboard"},{title:"New Application",icon:{icon:"tabler-school"},to:"application-new",action:"create",subject:"application"},{title:"Application Request",icon:{icon:"tabler-clipboard-check"},to:"application-request",action:"read",subject:"application-request"},{title:"Compliance Request",icon:{icon:"tabler-clipboard-check"},to:"compliance-request",action:"read",subject:"compliance-request"},{title:"Application List",icon:{icon:"tabler-apps"},to:"application",action:"read",subject:"application"},{title:"University List",icon:{icon:"tabler-apps"},to:"university-list",action:"read",subject:"dashboard"},{title:"Course Request List",icon:{icon:"tabler-apps"},to:"course-request-list",action:"enable",subject:"course-request-list"},{title:"Course Request",icon:{icon:"tabler-command"},action:"read",subject:"course-request",children:[{title:"Course",to:"course-request",action:"read",subject:"course-request"}]},{title:"Record",icon:{icon:"tabler-files"},action:"read",subject:"record",children:[{title:"All Record",to:"record",action:"read",subject:"record"},{title:"University",to:"record-university",action:"read",subject:"record"},{title:"Intake",to:"record-intake",action:"read",subject:"record"}]},{title:"Roles & Permission",icon:{icon:"tabler-command"},action:"create",subject:"dashboard",children:[{title:"Roles",to:"roles",action:"create",subject:"dashboard"},{title:"Permissions",to:"permissions",action:"create",subject:"dashboard"}]},{title:"User",icon:{icon:"tabler-user"},to:"user",action:"read",subject:"user"},{title:"Email",icon:{icon:"tabler-mail"},to:"email",action:"read",subject:"email"}],De=[...Fe],He={class:"d-flex h-100 align-center"},It={__name:"DefaultLayoutWithVerticalNav",setup(t){const i=S(!1),r=S(null);R([i,r],()=>{i.value&&r.value&&r.value.fallbackHandle(),!i.value&&r.value&&r.value.resolveHandle()},{immediate:!0});const p=ie();return he(()=>{p.fetchNotifications()}),(o,a)=>{const y=M("IconBtn"),g=ae,b=M("RouterView");return n(),c(e(Be),{"nav-items":e(De)},{navbar:d(({toggleVerticalOverlayNavActive:V})=>{var k;return[_("div",He,[h(y,{id:"vertical-nav-toggle-btn",class:"ms-n3 d-lg-none",onClick:m=>V(!0)},{default:d(()=>[h(ye,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"]),h(we),e(G).app.i18n.enable&&((k=e(G).app.i18n.langConfig)!=null&&k.length)?(n(),c(Ie,{key:0,languages:e(G).app.i18n.langConfig},null,8,["languages"])):$("",!0),h(ke,{class:"me-1"}),h(Ve)])]}),footer:d(()=>[h(Ce)]),default:d(()=>[h(g,{ref_key:"refLoadingIndicator",ref:r},null,512),h(b,null,{default:d(({Component:V})=>[(n(),c(Ne,{timeout:0,onFallback:a[0]||(a[0]=k=>i.value=!0),onResolve:a[1]||(a[1]=k=>i.value=!1)},{default:d(()=>[(n(),c(f(V)))]),_:2},1024))]),_:1})]),_:1},8,["nav-items"])}}};export{It as default};
