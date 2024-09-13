import{_ as ae}from"./AppLoadingIndicator-D0hm5OWu.js";import{M as z,N,T as E,r as A,O as ie,P as ne,Q as K,l as T,j as Y,w as R,a as M,o,f as c,e as u,d as _,A as B,b,n as e,q as d,K as V,L as I,h as m,s as C,c as O,F as Q,i as X,y as F,R as oe,U as re,k as le,V as se,m as U,W as w,X as ce,p as de,t as x,v as L,x as P,z as $,Y as Z,Z as ue,_ as ve,$ as pe,a0 as me,B as J,C as fe,D as ge,a1 as he,I as G,S as be}from"./main-kzKK1XE4.js";import ye from"./Footer-0UmNJEe9.js";import Ne from"./NavBarNotifications-6jJd_Gdz.js";import Ce from"./UserProfile-BQh-UDK6.js";import{_ as ke}from"./I18n-BNCfG8gy.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{P as Ve}from"./vue3-perfect-scrollbar.esm-CDYQlObX.js";import{V as Ie}from"./VNodeRenderer-qWkdY1sq.js";import{V as Ae}from"./VSpacer-C0t0HYZC.js";import"./formatters-xRfodRst.js";import"./helpers-BeXnm4sY.js";import"./VBadge-C8G_8YWt.js";import"./index-LtM8Y5gz.js";import"./VMenu-BVP4sHy0.js";import"./VOverlay-Y9TS9n9w.js";import"./easing-CjukEv2V.js";import"./lazy-Ko0eglkA.js";import"./scopeId-B2QFYqCu.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-BOcmMYsD.js";import"./VCard-DWOcblIG.js";import"./VAvatar-BVVy9Zei.js";import"./VImg-C74ZfjM4.js";import"./VCardText-do432SKI.js";import"./VChip-CUMWd3v2.js";import"./index-BlZJFp_B.js";import"./VSlideGroup-BnF1OZOC.js";import"./VTooltip-Dq79JjKT.js";import"./VDivider-BRvIS9W0.js";import"./VList-XkRzCeNh.js";import"./ssrBoot-vn9iu_kZ.js";import"./useAbility-C8qxDfyK.js";import"./VListItemAction-BkQ4GjIl.js";/* empty css              */const Se=z({name:"TransitionExpand",setup(t,{slots:a}){const r=i=>{const y=getComputedStyle(i).width;i.style.width=y,i.style.position="absolute",i.style.visibility="hidden",i.style.height="auto";const h=getComputedStyle(i).height;i.style.width="",i.style.position="",i.style.visibility="",i.style.height="0px",getComputedStyle(i).height,requestAnimationFrame(()=>{i.style.height=h})},f=i=>{i.style.height="auto"},n=i=>{const y=getComputedStyle(i).height;i.style.height=y,getComputedStyle(i).height,requestAnimationFrame(()=>{i.style.height="0px"})};return()=>N(N(E),{name:"expand",onEnter:r,onAfterEnter:f,onLeave:n},()=>{var i;return(i=a.default)==null?void 0:i.call(a)})}}),we=ee(Se,[["__scopeId","data-v-2683bda9"]]),Re=t=>(oe("data-v-20c5b81b"),t=t(),re(),t),_e={class:"nav-header"},$e={class:"app-logo-title"},je=Re(()=>_("div",{class:"vertical-nav-items-shadow"},null,-1)),Oe={__name:"VerticalNav",props:{tag:{type:null,required:!1,default:"aside"},navItems:{type:null,required:!0},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const a=t,r=A(),f=ie(r);ne(K,f);const n=T(),i=g=>"heading"in g?Ge:"children"in g?Pe:te,y=Y();R(()=>y.name,()=>{a.toggleIsOverlayNavActive(!1)});const h=A(!1),p=g=>h.value=g,k=g=>{h.value=g.target.scrollTop>0},S=n.isVerticalNavMini(f);return(g,l)=>{const v=M("RouterLink");return o(),c(m(a.tag),{ref_key:"refNav",ref:r,class:F(["layout-vertical-nav",[{"overlay-nav":e(n).isLessThanOverlayNavBreakpoint,hovered:e(f),visible:t.isOverlayNavActive,scrolled:e(h)}]])},{default:u(()=>[_("div",_e,[B(g.$slots,"nav-header",{},()=>[b(v,{to:"/",class:"app-logo app-title-wrapper"},{default:u(()=>[b(e(Ie),{nodes:e(d).app.logo},null,8,["nodes"]),b(E,{name:"vertical-nav-app-title"},{default:u(()=>[V(_("h1",$e," Shabuj Global ",512),[[I,!e(S)]])]),_:1})]),_:1}),V((o(),c(m(e(d).app.iconRenderer||"div"),C({class:["header-action d-none nav-unpin",e(n).isVerticalNavCollapsed&&"d-lg-block"]},e(d).icons.verticalNavUnPinned,{onClick:l[0]||(l[0]=s=>e(n).isVerticalNavCollapsed=!e(n).isVerticalNavCollapsed)}),null,16,["class"])),[[I,e(n).isVerticalNavCollapsed]]),V((o(),c(m(e(d).app.iconRenderer||"div"),C({class:["header-action d-none nav-pin",!e(n).isVerticalNavCollapsed&&"d-lg-block"]},e(d).icons.verticalNavPinned,{onClick:l[1]||(l[1]=s=>e(n).isVerticalNavCollapsed=!e(n).isVerticalNavCollapsed)}),null,16,["class"])),[[I,!e(n).isVerticalNavCollapsed]]),(o(),c(m(e(d).app.iconRenderer||"div"),C({class:"header-action d-lg-none"},e(d).icons.close,{onClick:l[2]||(l[2]=s=>t.toggleIsOverlayNavActive(!1))}),null,16))],!0)]),B(g.$slots,"before-nav-items",{},()=>[je],!0),B(g.$slots,"nav-items",{updateIsVerticalNavScrolled:p},()=>[(o(),c(e(Ve),{key:e(n).isAppRTL,tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:k},{default:u(()=>[(o(!0),O(Q,null,X(t.navItems,(s,q)=>(o(),c(m(i(s)),{key:q,item:s},null,8,["item"]))),128))]),_:1}))],!0)]),_:3},8,["class"])}}},xe=ee(Oe,[["__scopeId","data-v-20c5b81b"]]),Le={class:"nav-group-children"},Pe=Object.assign({name:"VerticalNavGroup"},{__name:"VerticalNavGroup",props:{item:{type:null,required:!0}},setup(t){const a=t,r=Y(),f=le(),n=T(),i=n.isVerticalNavMini(),y=se(K,A(!1)),h=A(!1),p=A(!1),k=l=>l.some(v=>{let s=w.value.includes(v.title);return"children"in v&&(s=k(v.children)||s),s}),S=l=>{l.forEach(v=>{"children"in v&&S(v.children),w.value=w.value.filter(s=>s!==v.title)})};R(()=>r.path,()=>{const l=U(a.item.children,f);p.value=l&&!n.isVerticalNavMini(y).value,h.value=l},{immediate:!0}),R(p,l=>{const v=w.value.indexOf(a.item.title);l&&v===-1?w.value.push(a.item.title):!l&&v!==-1&&(w.value.splice(v,1),S(a.item.children))},{immediate:!0}),R(w,l=>{if(l.at(-1)===a.item.title)return;const s=U(a.item.children,f);s||k(a.item.children)||(p.value=s,h.value=s)},{deep:!0}),R(n.isVerticalNavMini(y),l=>{p.value=l?!1:h.value});const g=ce();return(l,v)=>e(de)(t.item)?(o(),O("li",{key:0,class:F(["nav-group",[{active:e(h),open:e(p),disabled:t.item.disable}]])},[_("div",{class:"nav-group-label",onClick:v[0]||(v[0]=s=>p.value=!e(p))},[(o(),c(m(e(d).app.iconRenderer||"div"),C(t.item.icon||e(d).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),(o(),c(m(e(g)?Z:"div"),C({name:"transition-slide-x"},e(g)?void 0:{class:"d-flex align-center flex-grow-1"}),{default:u(()=>[V((o(),c(m(e(d).app.i18n.enable?"i18n-t":"span"),C(e(x)(t.item.title,"span"),{key:"title",class:"nav-item-title"}),{default:u(()=>[L(P(t.item.title),1)]),_:1},16)),[[I,!e(i)]]),t.item.badgeContent?V((o(),c(m(e(d).app.i18n.enable?"i18n-t":"span"),C({key:0},e(x)(t.item.badgeContent,"span"),{key:"badge",class:["nav-item-badge",t.item.badgeClass]}),{default:u(()=>[L(P(t.item.badgeContent),1)]),_:1},16,["class"])),[[I,!e(i)]]):$("",!0),V((o(),c(m(e(d).app.iconRenderer||"div"),C(e(d).icons.chevronRight,{key:"arrow",class:"nav-group-arrow"}),null,16)),[[I,!e(i)]])]),_:1},16))]),b(e(we),null,{default:u(()=>[V(_("ul",Le,[(o(!0),O(Q,null,X(t.item.children,s=>(o(),c(m("children"in s?"VerticalNavGroup":e(te)),{key:s.title,item:s},null,8,["item"]))),128))],512),[[I,e(p)]])]),_:1})],2)):$("",!0)}}),Te=z({props:{navItems:{type:Array,required:!0},verticalNavAttrs:{type:Object,default:()=>({})}},setup(t,{slots:a}){const{width:r}=ue(),f=T(),n=A(!1),i=A(!1),y=ve(n);return pe(n,i),R(r,()=>{!f.isLessThanOverlayNavBreakpoint&&i.value&&(i.value=!1)}),()=>{var D,H,W;const h=me(t,"verticalNavAttrs"),{wrapper:p,wrapperProps:k,...S}=h.value,g=N(xe,{isOverlayNavActive:n.value,toggleIsOverlayNavActive:y,navItems:t.navItems,...S},{"nav-header":()=>{var j;return(j=a["vertical-nav-header"])==null?void 0:j.call(a)},"before-nav-items":()=>{var j;return(j=a["before-vertical-nav-items"])==null?void 0:j.call(a)}}),l=N("header",{class:["layout-navbar",{"navbar-blur":f.isNavbarBlurEnabled}]},[N("div",{class:"navbar-content-container"},(D=a.navbar)==null?void 0:D.call(a,{toggleVerticalOverlayNavActive:y}))]),v=N("main",{class:"layout-page-content"},N("div",{class:"page-content-container"},(H=a.default)==null?void 0:H.call(a))),s=N("footer",{class:"layout-footer"},[N("div",{class:"footer-content-container"},(W=a.footer)==null?void 0:W.call(a))]),q=N("div",{class:["layout-overlay",{visible:i.value}],onClick:()=>{i.value=!i.value}});return N("div",{class:["layout-wrapper",...f._layoutClasses]},[p?N(p,k,{default:()=>g}):g,N("div",{class:"layout-content-wrapper"},[l,v,s]),q])}}}),te={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(t){const r=T().isVerticalNavMini();return(f,n)=>e(J)(t.item.action,t.item.subject)?(o(),O("li",{key:0,class:F(["nav-link",{disabled:t.item.disable}])},[(o(),c(m(t.item.to?"RouterLink":"a"),C(e(ge)(t.item),{class:{"router-link-active router-link-exact-active":e(fe)(t.item,f.$router)}}),{default:u(()=>[(o(),c(m(e(d).app.iconRenderer||"div"),C(t.item.icon||e(d).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),b(Z,{name:"transition-slide-x"},{default:u(()=>[V((o(),c(m(e(d).app.i18n.enable?"i18n-t":"span"),C({key:"title",class:"nav-item-title"},e(x)(t.item.title,"span")),{default:u(()=>[L(P(t.item.title),1)]),_:1},16)),[[I,!e(r)]]),t.item.badgeContent?V((o(),c(m(e(d).app.i18n.enable?"i18n-t":"span"),C({key:"badge",class:["nav-item-badge",t.item.badgeClass]},e(x)(t.item.badgeContent,"span")),{default:u(()=>[L(P(t.item.badgeContent),1)]),_:1},16,["class"])),[[I,!e(r)]]):$("",!0)]),_:1})]),_:1},16,["class"]))],2)):$("",!0)}},qe={key:0,class:"nav-section-title"},Be={class:"title-wrapper"},Ge={__name:"VerticalNavSectionTitle",props:{item:{type:null,required:!0}},setup(t){const r=T().isVerticalNavMini();return(f,n)=>e(J)(t.item.action,t.item.subject)?(o(),O("li",qe,[_("div",Be,[b(E,{name:"vertical-nav-section-title",mode:"out-in"},{default:u(()=>[(o(),c(m(e(r)?e(d).app.iconRenderer:e(d).app.i18n.enable?"i18n-t":"span"),C({key:e(r),class:e(r)?"placeholder-icon":"title-text"},{...e(d).icons.sectionTitlePlaceholder,...e(x)(t.item.heading,"span")}),{default:u(()=>[L(P(e(r)?null:t.item.heading),1)]),_:1},16,["class"]))]),_:1})])])):$("",!0)}},Me=[{title:"Dashboard",icon:{icon:"tabler-smart-home"},to:"dashboard",action:"read",subject:"dashboard"},{title:"New Application",icon:{icon:"tabler-school"},to:"application-new",action:"create",subject:"application"},{title:"Application History",icon:{icon:"tabler-apps"},to:"application",action:"read",subject:"application"},{title:"University List",icon:{icon:"tabler-apps"},to:"university-list",action:"read",subject:"dashboard"},{title:"Course Request",icon:{icon:"tabler-command"},action:"read",subject:"dashboard",children:[{title:"Course",to:"course-request",action:"read",subject:"dashboard"}]},{title:"Record",icon:{icon:"tabler-files"},action:"read",subject:"record",children:[{title:"All Record",to:"record",action:"read",subject:"record"},{title:"University",to:"record-university",action:"read",subject:"record"},{title:"Intake",to:"record-intake",action:"read",subject:"record"}]},{title:"Roles & Permission",icon:{icon:"tabler-command"},action:"create",subject:"dashboard",children:[{title:"Roles",to:"roles",action:"create",subject:"dashboard"},{title:"Permissions",to:"permissions",action:"create",subject:"dashboard"}]},{title:"User",icon:{icon:"tabler-user"},to:"user",action:"read",subject:"user"},{title:"Email",icon:{icon:"tabler-mail"},to:"email",action:"read",subject:"email"}],Ee=[...Me],Fe={class:"d-flex h-100 align-center"},It={__name:"DefaultLayoutWithVerticalNav",setup(t){const a=A(!1),r=A(null);return R([a,r],()=>{a.value&&r.value&&r.value.fallbackHandle(),!a.value&&r.value&&r.value.resolveHandle()},{immediate:!0}),(f,n)=>{const i=M("IconBtn"),y=ae,h=M("RouterView");return o(),c(e(Te),{"nav-items":e(Ee)},{navbar:u(({toggleVerticalOverlayNavActive:p})=>{var k;return[_("div",Fe,[b(i,{id:"vertical-nav-toggle-btn",class:"ms-n3 d-lg-none",onClick:S=>p(!0)},{default:u(()=>[b(he,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"]),b(Ae),e(G).app.i18n.enable&&((k=e(G).app.i18n.langConfig)!=null&&k.length)?(o(),c(ke,{key:0,languages:e(G).app.i18n.langConfig},null,8,["languages"])):$("",!0),b(Ne,{class:"me-1"}),b(Ce)])]}),footer:u(()=>[b(ye)]),default:u(()=>[b(y,{ref_key:"refLoadingIndicator",ref:r},null,512),b(h,null,{default:u(({Component:p})=>[(o(),c(be,{timeout:0,onFallback:n[0]||(n[0]=k=>a.value=!0),onResolve:n[1]||(n[1]=k=>a.value=!1)},{default:u(()=>[(o(),c(m(p)))]),_:2},1024))]),_:1})]),_:1},8,["nav-items"])}}};export{It as default};
