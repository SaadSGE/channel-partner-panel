import{_ as te}from"./AppLoadingIndicator-Dsp0SBQ8.js";import{o as b,c as z,F as Dt,i as Ot,f as C,h as T,j as $t,k as ee,l as ht,r as B,w as ot,m as oe,n as p,p as ne,e as L,d as w,q as O,s as j,t as Mt,v as Vt,x as bt,y as Q,z as vt,A as I,b as S,B as ie,C as re,D as se,E as ae,G as le,H as ce,I as N,J as ft,K as Lt,L as Rt,T as ue,a as _t,S as pe}from"./main-DYSjY2V3.js";import fe from"./Footer-S4pdRAw3.js";import de from"./NavBarNotifications-3hfD_166.js";import me from"./NavSearchBar-B0FuVKGh.js";import ge from"./NavbarShortcuts-Py7Yh4A6.js";import he from"./UserProfile-BqBLpPEk.js";import{_ as be}from"./I18n-CT-bdFGR.js";import{V as ve}from"./VNodeRenderer-DPVaG5Ox.js";import{V as ye}from"./VSpacer-C69Csaoq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./formatters-DBYwrp_G.js";import"./helpers-D1bXR6is.js";import"./vue3-perfect-scrollbar.esm-BSSP1m45.js";import"./VBadge-BGHsOMq1.js";import"./index-5A8LiR52.js";import"./VMenu-eeOjuncG.js";import"./VOverlay-Yt9LwXsZ.js";import"./easing-CjukEv2V.js";import"./lazy-V0kpBqvY.js";import"./scopeId-DW_WIG5W.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-w05nU5OS.js";import"./VCard-CiYH5VQe.js";import"./VAvatar-QvG5RvO1.js";import"./VImg-Bfl9zub6.js";import"./VCardText-BxWv1fYU.js";import"./VChip-DOF_MDg3.js";import"./index-BWzO9ddJ.js";import"./VSlideGroup--tDWDzDB.js";import"./VTooltip-H2WlNMRa.js";import"./VDivider-CH8Yhyyw.js";import"./VList-2j7MyfA6.js";import"./ssrBoot-BYPlKdcr.js";import"./shepherd.esm-C7bYZz12.js";import"./index-B3bPRkoL.js";import"./useApi-DVUGHz21.js";import"./VRow-BB7ODKef.js";/* empty css              */import"./useAbility-wnUhCleF.js";import"./VListItemAction-C_tH-iCm.js";const we={class:"nav-items"},xe={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(t){const e=o=>"children"in o?Ce:Ft;return(o,n)=>(b(),z("ul",we,[(b(!0),z(Dt,null,Ot(t.navItems,(i,r)=>(b(),C(T(e(i)),{key:r,item:i},null,8,["item"]))),128))]))}},ke={class:"nav-group-label"},Ce=Object.assign({name:"HorizontalNavGroup"},{__name:"HorizontalNavGroup",props:{item:{type:null,required:!0},childrenAtEnd:{type:Boolean,required:!1,default:!1},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t,o=$t(),n=ee(),i=ht(),r=B(!1);return ot(()=>o.path,()=>{const s=oe(e.item.children,n);r.value=s},{immediate:!0}),(s,a)=>p(ne)(t.item)?(b(),C(p(uo),{key:0,"is-rtl":p(i).isAppRTL,class:Q(["nav-group",[{active:p(r),"children-at-end":t.childrenAtEnd,"sub-item":t.isSubItem,disabled:t.item.disable}]]),tag:"li","content-container-tag":"ul","popper-inline-end":t.childrenAtEnd},{content:L(()=>[(b(!0),z(Dt,null,Ot(t.item.children,l=>(b(),C(T("children"in l?"HorizontalNavGroup":p(Ft)),{key:l.title,item:l,"children-at-end":"","is-sub-item":""},null,8,["item"]))),128))]),default:L(()=>[w("div",ke,[(b(),C(T(p(O).app.iconRenderer||"div"),j({class:"nav-item-icon"},t.item.icon||p(O).verticalNav.defaultNavItemIconProps),null,16)),(b(),C(T(p(O).app.i18n.enable?"i18n-t":"span"),j(p(Mt)(t.item.title,"span"),{class:"nav-item-title"}),{default:L(()=>[Vt(bt(t.item.title),1)]),_:1},16)),(b(),C(T(p(O).app.iconRenderer||"div"),j(p(O).icons.chevronDown,{class:"nav-group-arrow"}),null,16))])]),_:1},8,["is-rtl","class","popper-inline-end"])):vt("",!0)}}),Ae={class:"layout-navbar"},Le={class:"navbar-content-container"},Re={class:"layout-horizontal-nav"},_e={class:"horizontal-nav-content-container"},Se={class:"layout-page-content"},Te={class:"layout-footer"},Ee={class:"footer-content-container"},Pe={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(t){const e=ht();return(o,n)=>(b(),z("div",{class:Q(["layout-wrapper",p(e)._layoutClasses])},[w("div",{class:Q(["layout-navbar-and-nav-container",p(e).isNavbarBlurEnabled&&"header-blur"])},[w("div",Ae,[w("div",Le,[I(o.$slots,"navbar")])]),w("div",Re,[w("div",_e,[S(p(xe),{"nav-items":t.navItems},null,8,["nav-items"])])])],2),w("main",Se,[I(o.$slots,"default")]),w("footer",Te,[w("div",Ee,[I(o.$slots,"footer")])])],2))}},Ft={__name:"HorizontalNavLink",props:{item:{type:null,required:!0},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;return(o,n)=>p(ie)(t.item.action,t.item.subject)?(b(),z("li",{key:0,class:Q(["nav-link",[{"sub-item":e.isSubItem,disabled:t.item.disable}]])},[(b(),C(T(t.item.to?"RouterLink":"a"),j(p(se)(t.item),{class:{"router-link-active router-link-exact-active":p(re)(t.item,o.$router)}}),{default:L(()=>[(b(),C(T(p(O).app.iconRenderer||"div"),j({class:"nav-item-icon"},t.item.icon||p(O).verticalNav.defaultNavItemIconProps),null,16)),(b(),C(T(p(O).app.i18n.enable?"i18n-t":"span"),j({class:"nav-item-title"},p(Mt)(t.item.title,"span")),{default:L(()=>[Vt(bt(t.item.title),1)]),_:1},16))]),_:1},16,["class"]))],2)):vt("",!0)}},dt=Math.min,G=Math.max,nt=Math.round,$=t=>({x:t,y:t}),Ne={left:"right",right:"left",bottom:"top",top:"bottom"},De={start:"end",end:"start"};function St(t,e,o){return G(t,dt(e,o))}function st(t,e){return typeof t=="function"?t(e):t}function H(t){return t.split("-")[0]}function at(t){return t.split("-")[1]}function Bt(t){return t==="x"?"y":"x"}function It(t){return t==="y"?"height":"width"}function lt(t){return["top","bottom"].includes(H(t))?"y":"x"}function zt(t){return Bt(lt(t))}function Oe(t,e,o){o===void 0&&(o=!1);const n=at(t),i=zt(t),r=It(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=it(s)),[s,it(s)]}function $e(t){const e=it(t);return[mt(t),e,mt(e)]}function mt(t){return t.replace(/start|end/g,e=>De[e])}function Me(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function Ve(t,e,o,n){const i=at(t);let r=Me(H(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(mt)))),r}function it(t){return t.replace(/left|right|bottom|top/g,e=>Ne[e])}function Fe(t){return{top:0,right:0,bottom:0,left:0,...t}}function Be(t){return typeof t!="number"?Fe(t):{top:t,right:t,bottom:t,left:t}}function rt(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function Tt(t,e,o){let{reference:n,floating:i}=t;const r=lt(e),s=zt(e),a=It(s),l=H(e),c=r==="y",f=n.x+n.width/2-i.width/2,u=n.y+n.height/2-i.height/2,g=n[a]/2-i[a]/2;let d;switch(l){case"top":d={x:f,y:n.y-i.height};break;case"bottom":d={x:f,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:u};break;case"left":d={x:n.x-i.width,y:u};break;default:d={x:n.x,y:n.y}}switch(at(e)){case"start":d[s]-=g*(o&&c?-1:1);break;case"end":d[s]+=g*(o&&c?-1:1);break}return d}const Ie=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,a=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:u}=Tt(c,n,l),g=n,d={},m=0;for(let h=0;h<a.length;h++){const{name:v,fn:y}=a[h],{x,y:k,data:P,reset:A}=await y({x:f,y:u,initialPlacement:n,placement:g,strategy:i,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});f=x??f,u=k??u,d={...d,[v]:{...d[v],...P}},A&&m<=50&&(m++,typeof A=="object"&&(A.placement&&(g=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):A.rects),{x:f,y:u}=Tt(c,g,l)),h=-1)}return{x:f,y:u,placement:g,strategy:i,middlewareData:d}};async function Ht(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:g=!1,padding:d=0}=st(e,t),m=Be(d),v=a[g?u==="floating"?"reference":"floating":u],y=rt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(v)))==null||o?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:f,strategy:l})),x=u==="floating"?{x:n,y:i,width:s.floating.width,height:s.floating.height}:s.reference,k=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),P=await(r.isElement==null?void 0:r.isElement(k))?await(r.getScale==null?void 0:r.getScale(k))||{x:1,y:1}:{x:1,y:1},A=rt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:k,strategy:l}):x);return{top:(y.top-A.top+m.top)/P.y,bottom:(A.bottom-y.bottom+m.bottom)/P.y,left:(y.left-A.left+m.left)/P.x,right:(A.right-y.right+m.right)/P.x}}const ze=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...v}=st(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const y=H(i),x=H(a)===a,k=await(l.isRTL==null?void 0:l.isRTL(c.floating)),P=g||(x||!h?[it(a)]:$e(a));!g&&m!=="none"&&P.push(...Ve(a,h,m,k));const A=[a,...P],pt=await Ht(e,v),et=[];let U=((n=r.flip)==null?void 0:n.overflows)||[];if(f&&et.push(pt[y]),u){const F=Oe(i,s,k);et.push(pt[F[0]],pt[F[1]])}if(U=[...U,{placement:i,overflows:et}],!et.every(F=>F<=0)){var xt,kt;const F=(((xt=r.flip)==null?void 0:xt.index)||0)+1,At=A[F];if(At)return{data:{index:F,overflows:U},reset:{placement:At}};let K=(kt=U.filter(W=>W.overflows[0]<=0).sort((W,q)=>W.overflows[1]-q.overflows[1])[0])==null?void 0:kt.placement;if(!K)switch(d){case"bestFit":{var Ct;const W=(Ct=U.map(q=>[q.placement,q.overflows.filter(J=>J>0).reduce((J,Zt)=>J+Zt,0)]).sort((q,J)=>q[1]-J[1])[0])==null?void 0:Ct[0];W&&(K=W);break}case"initialPlacement":K=a;break}if(i!==K)return{reset:{placement:K}}}return{}}}};async function He(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=H(o),a=at(o),l=lt(o)==="y",c=["left","top"].includes(s)?-1:1,f=r&&l?-1:1,u=st(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof m=="number"&&(d=a==="end"?m*-1:m),l?{x:d*f,y:g*c}:{x:g*c,y:d*f}}const We=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:a}=e,l=await He(e,t);return s===((o=a.offset)==null?void 0:o.placement)&&(n=a.arrow)!=null&&n.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:s}}}}},qe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:v=>{let{x:y,y:x}=v;return{x:y,y:x}}},...l}=st(t,e),c={x:o,y:n},f=await Ht(e,l),u=lt(H(i)),g=Bt(u);let d=c[g],m=c[u];if(r){const v=g==="y"?"top":"left",y=g==="y"?"bottom":"right",x=d+f[v],k=d-f[y];d=St(x,d,k)}if(s){const v=u==="y"?"top":"left",y=u==="y"?"bottom":"right",x=m+f[v],k=m-f[y];m=St(x,m,k)}const h=a.fn({...e,[g]:d,[u]:m});return{...h,data:{x:h.x-o,y:h.y-n}}}}};function M(t){return Wt(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(Wt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Wt(t){return t instanceof Node||t instanceof R(t).Node}function D(t){return t instanceof Element||t instanceof R(t).Element}function E(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function Et(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=_(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function je(t){return["table","td","th"].includes(M(t))}function yt(t){const e=wt(),o=_(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function qt(t){let e=Y(t);for(;E(e)&&!ct(e);){if(yt(e))return e;e=Y(e)}return null}function wt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ct(t){return["html","body","#document"].includes(M(t))}function _(t){return R(t).getComputedStyle(t)}function ut(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Y(t){if(M(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Et(t)&&t.host||V(t);return Et(e)?e.host:e}function jt(t){const e=Y(t);return ct(e)?t.ownerDocument?t.ownerDocument.body:t.body:E(e)&&tt(e)?e:jt(e)}function gt(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=jt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=R(i);return r?e.concat(s,s.visualViewport||[],tt(i)?i:[],s.frameElement&&o?gt(s.frameElement):[]):e.concat(i,gt(i,[],o))}function Gt(t){const e=_(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=E(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,a=nt(o)!==r||nt(n)!==s;return a&&(o=r,n=s),{width:o,height:n,$:a}}function Xt(t){return D(t)?t:t.contextElement}function X(t){const e=Xt(t);if(!E(e))return $(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=Gt(e);let s=(r?nt(o.width):o.width)/n,a=(r?nt(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Ge=$(0);function Yt(t){const e=R(t);return!wt()||!e.visualViewport?Ge:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Xe(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==R(t)?!1:e}function Z(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=Xt(t);let s=$(1);e&&(n?D(n)&&(s=X(n)):s=X(t));const a=Xe(r,o,n)?Yt(r):$(0);let l=(i.left+a.x)/s.x,c=(i.top+a.y)/s.y,f=i.width/s.x,u=i.height/s.y;if(r){const g=R(r),d=n&&D(n)?R(n):n;let m=g.frameElement;for(;m&&n&&d!==g;){const h=X(m),v=m.getBoundingClientRect(),y=_(m),x=v.left+(m.clientLeft+parseFloat(y.paddingLeft))*h.x,k=v.top+(m.clientTop+parseFloat(y.paddingTop))*h.y;l*=h.x,c*=h.y,f*=h.x,u*=h.y,l+=x,c+=k,m=R(m).frameElement}}return rt({width:f,height:u,x:l,y:c})}const Ye=[":popover-open",":modal"];function Ut(t){let e=!1,o=0,n=0;function i(r){try{e=e||t.matches(r)}catch{}}if(Ye.forEach(r=>{i(r)}),e){const r=qt(t);if(r){const s=r.getBoundingClientRect();o=s.x,n=s.y}}return[e,o,n]}function Ue(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=V(n),[s]=e?Ut(e.floating):[!1];if(n===r||s)return o;let a={scrollLeft:0,scrollTop:0},l=$(1);const c=$(0),f=E(n);if((f||!f&&i!=="fixed")&&((M(n)!=="body"||tt(r))&&(a=ut(n)),E(n))){const u=Z(n);l=X(n),c.x=u.x+n.clientLeft,c.y=u.y+n.clientTop}return{width:o.width*l.x,height:o.height*l.y,x:o.x*l.x-a.scrollLeft*l.x+c.x,y:o.y*l.y-a.scrollTop*l.y+c.y}}function Ke(t){return Array.from(t.getClientRects())}function Kt(t){return Z(V(t)).left+ut(t).scrollLeft}function Je(t){const e=V(t),o=ut(t),n=t.ownerDocument.body,i=G(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=G(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Kt(t);const a=-o.scrollTop;return _(n).direction==="rtl"&&(s+=G(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:a}}function Qe(t,e){const o=R(t),n=V(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,a=0,l=0;if(i){r=i.width,s=i.height;const c=wt();(!c||c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:a,y:l}}function Ze(t,e){const o=Z(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=E(t)?X(t):$(1),s=t.clientWidth*r.x,a=t.clientHeight*r.y,l=i*r.x,c=n*r.y;return{width:s,height:a,x:l,y:c}}function Pt(t,e,o){let n;if(e==="viewport")n=Qe(t,o);else if(e==="document")n=Je(V(t));else if(D(e))n=Ze(e,o);else{const i=Yt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return rt(n)}function Jt(t,e){const o=Y(t);return o===e||!D(o)||ct(o)?!1:_(o).position==="fixed"||Jt(o,e)}function to(t,e){const o=e.get(t);if(o)return o;let n=gt(t,[],!1).filter(a=>D(a)&&M(a)!=="body"),i=null;const r=_(t).position==="fixed";let s=r?Y(t):t;for(;D(s)&&!ct(s);){const a=_(s),l=yt(s);!l&&a.position==="fixed"&&(i=null),(r?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(s)&&!l&&Jt(t,s))?n=n.filter(f=>f!==s):i=a,s=Y(s)}return e.set(t,n),n}function eo(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?to(e,this._c):[].concat(o),n],a=s[0],l=s.reduce((c,f)=>{const u=Pt(e,f,i);return c.top=G(u.top,c.top),c.right=dt(u.right,c.right),c.bottom=dt(u.bottom,c.bottom),c.left=G(u.left,c.left),c},Pt(e,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function oo(t){const{width:e,height:o}=Gt(t);return{width:e,height:o}}function no(t,e,o,n){const i=E(e),r=V(e),s=o==="fixed",a=Z(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=$(0);if(i||!i&&!s)if((M(e)!=="body"||tt(r))&&(l=ut(e)),i){const h=Z(e,!0,s,e);c.x=h.x+e.clientLeft,c.y=h.y+e.clientTop}else r&&(c.x=Kt(r));let f=a.left+l.scrollLeft-c.x,u=a.top+l.scrollTop-c.y;const[g,d,m]=Ut(n);return g&&(f+=d,u+=m,i&&(f+=e.clientLeft,u+=e.clientTop)),{x:f,y:u,width:a.width,height:a.height}}function Nt(t,e){return!E(t)||_(t).position==="fixed"?null:e?e(t):t.offsetParent}function Qt(t,e){const o=R(t);if(!E(t))return o;let n=Nt(t,e);for(;n&&je(n)&&_(n).position==="static";)n=Nt(n,e);return n&&(M(n)==="html"||M(n)==="body"&&_(n).position==="static"&&!yt(n))?o:n||qt(t)||o}const io=async function(t){const e=this.getOffsetParent||Qt,o=this.getDimensions;return{reference:no(t.reference,await e(t.floating),t.strategy,t.floating),floating:{x:0,y:0,...await o(t.floating)}}};function ro(t){return _(t).direction==="rtl"}const so={convertOffsetParentRelativeRectToViewportRelativeRect:Ue,getDocumentElement:V,getClippingRect:eo,getOffsetParent:Qt,getElementRects:io,getClientRects:Ke,getDimensions:oo,getScale:X,isElement:D,isRTL:ro},ao=qe,lo=ze,co=(t,e,o)=>{const n=new Map,i={platform:so,...o},r={...i.platform,_c:n};return Ie(t,e,{...i,platform:r})},uo={__name:"HorizontalNavPopper",props:{popperInlineEnd:{type:Boolean,required:!1,default:!1},tag:{type:String,required:!1,default:"div"},contentContainerTag:{type:String,required:!1,default:"div"},isRtl:{type:Boolean,required:!1}},setup(t){const e=t,o=ht(),n=B(),i=B(),r=B({left:"0px",top:"0px"}),s=async()=>{if(n.value!==void 0&&i.value!==void 0){const{x:u,y:g}=await co(n.value,i.value,{placement:e.popperInlineEnd?e.isRtl?"left-start":"right-start":"bottom-start",middleware:[...o.horizontalNavPopoverOffset?[We(o.horizontalNavPopoverOffset)]:[],lo({boundary:document.querySelector("body"),padding:{bottom:16}}),ao({boundary:document.querySelector("body"),padding:{bottom:16}})]});r.value.left=`${u}px`,r.value.top=`${g}px`}};ae(()=>o.horizontalNavType).toMatch(u=>u==="static").then(()=>{le("scroll",s)});const a=B(!1),l=()=>{a.value=!0,s()},c=()=>{a.value=!1};ce(s),ot([()=>o.isAppRTL,()=>o.appContentWidth],s);const f=$t();return ot(()=>f.fullPath,c),(u,g)=>(b(),z("div",{class:Q(["nav-popper",[{"popper-inline-end":t.popperInlineEnd,"show-content":p(a)}]])},[w("div",{ref_key:"refPopperContainer",ref:n,class:"popper-triggerer",onMouseenter:l,onMouseleave:c},[I(u.$slots,"default")],544),p(N).horizontalNav.transition?typeof p(N).horizontalNav.transition=="string"?(b(),C(ue,{key:1,name:p(N).horizontalNav.transition},{default:L(()=>[Lt(w("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:ft(p(r)),onMouseenter:l,onMouseleave:c},[w("div",null,[I(u.$slots,"content")])],36),[[Rt,p(a)]])]),_:3},8,["name"])):(b(),C(T(p(N).horizontalNav.transition),{key:2},{default:L(()=>[Lt(w("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:ft(p(r)),onMouseenter:l,onMouseleave:c},[w("div",null,[I(u.$slots,"content")])],36),[[Rt,p(a)]])]),_:3})):(b(),z("div",{key:0,ref_key:"refPopper",ref:i,class:"popper-content",style:ft(p(r)),onMouseenter:l,onMouseleave:c},[w("div",null,[I(u.$slots,"content")])],36))],2))}},po=[{title:"Apps",icon:{icon:"tabler-layout-grid-add"},children:[{title:"Ecommerce",icon:{icon:"tabler-shopping-cart-plus"},children:[{title:"Dashboard",to:"apps-ecommerce-dashboard"},{title:"Product",children:[{title:"List",to:"apps-ecommerce-product-list"},{title:"Add",to:"apps-ecommerce-product-add"},{title:"Category",to:"apps-ecommerce-product-category-list"}]},{title:"Order",children:[{title:"List",to:"apps-ecommerce-order-list"},{title:"Details",to:{name:"apps-ecommerce-order-details-id",params:{id:"9042"}}}]},{title:"Customer",children:[{title:"List",to:"apps-ecommerce-customer-list"},{title:"Details",to:{name:"apps-ecommerce-customer-details-id",params:{id:478426}}}]},{title:"Manage Review",to:"apps-ecommerce-manage-review"},{title:"Referrals",to:"apps-ecommerce-referrals"},{title:"Settings",to:"apps-ecommerce-settings"}]},{title:"Academy",icon:{icon:"tabler-book"},children:[{title:"Dashboard",to:"apps-academy-dashboard"},{title:"My Course",to:"apps-academy-my-course"},{title:"Course Details",to:"apps-academy-course-details"}]},{title:"Logistics",icon:{icon:"tabler-truck"},children:[{title:"Dashboard",to:"apps-logistics-dashboard"},{title:"Fleet",to:"apps-logistics-fleet"}]},{title:"Email",icon:{icon:"tabler-mail"},to:"apps-email"},{title:"Chat",icon:{icon:"tabler-message-circle"},to:"apps-chat"},{title:"Calendar",to:"apps-calendar",icon:{icon:"tabler-calendar"}},{title:"Invoice",icon:{icon:"tabler-file-dollar"},children:[{title:"List",to:"apps-invoice-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"User",icon:{icon:"tabler-users"},children:[{title:"List",to:"apps-user-list"},{title:"View",to:{name:"apps-user-view-id",params:{id:21}}}]},{title:"Roles & Permissions",icon:{icon:"tabler-settings"},children:[{title:"Roles",to:"apps-roles"},{title:"Permissions",to:"apps-permissions"}]}]}],fo=[{title:"Charts",icon:{icon:"tabler-chart-bar"},children:[{title:"Apex Chart",to:"charts-apex-chart",icon:{icon:"tabler-chart-line"}},{title:"Chartjs",to:"charts-chartjs",icon:{icon:"tabler-chart-pie"}}]}],mo=[{title:"Dashboards",icon:{icon:"tabler-smart-home"},children:[{title:"Analytics",to:"dashboards-analytics",icon:{icon:"tabler-chart-pie-2"}},{title:"CRM",to:"dashboards-crm",icon:{icon:"tabler-cube"}},{title:"Ecommerce",to:"dashboards-ecommerce",icon:{icon:"tabler-shopping-cart"}},{title:"Academy",to:"dashboards-academy",icon:{icon:"tabler-book"}},{title:"Logistics",to:"dashboards-logistics",icon:{icon:"tabler-truck"}}]}],go=[{title:"Forms",icon:{icon:"tabler-forms"},children:[{title:"Form Elements",icon:{icon:"tabler-copy"},children:[{title:"Autocomplete",to:"forms-autocomplete"},{title:"Checkbox",to:"forms-checkbox"},{title:"Combobox",to:"forms-combobox"},{title:"Date Time Picker",to:"forms-date-time-picker"},{title:"Editors",to:"forms-editors"},{title:"File Input",to:"forms-file-input"},{title:"Radio",to:"forms-radio"},{title:"Custom Input",to:"forms-custom-input"},{title:"Range Slider",to:"forms-range-slider"},{title:"Rating",to:"forms-rating"},{title:"Select",to:"forms-select"},{title:"Slider",to:"forms-slider"},{title:"Switch",to:"forms-switch"},{title:"Textarea",to:"forms-textarea"},{title:"Textfield",to:"forms-textfield"}]},{title:"Form Layouts",icon:{icon:"tabler-circle-check"},to:"forms-form-layouts"},{title:"Form Wizard",icon:{icon:"tabler-align-center"},children:[{title:"Numbered",to:"forms-form-wizard-numbered"},{title:"Icons",to:"forms-form-wizard-icons"}]},{title:"Form Validation",icon:{icon:"tabler-circle-check"},to:"forms-form-validation"}]}],ho=[{title:"Misc",icon:{icon:"tabler-box-multiple"},children:[{title:"Access Control",icon:{icon:"tabler-command"},to:"access-control",action:"read",subject:"AclDemo"},{title:"Nav Levels",icon:{icon:"tabler-menu-2"},children:[{title:"Level 2.1",to:null},{title:"Level 2.2",children:[{title:"Level 3.1",to:null},{title:"Level 3.2",to:null}]}]},{title:"Disabled Menu",to:null,icon:{icon:"tabler-eye-off"},disable:!0},{title:"Raise Support",href:"https://pixinvent.ticksy.com/",icon:{icon:"tabler-headphones"},target:"_blank"},{title:"Documentation",href:"https://demos.pixinvent.com/vuexy-vuejs-admin-template/documentation/",icon:{icon:"tabler-file-text"},target:"_blank"}]}],bo=[{title:"Pages",icon:{icon:"tabler-file"},children:[{title:"User Profile",icon:{icon:"tabler-user-circle"},to:{name:"pages-user-profile-tab",params:{tab:"profile"}}},{title:"Account Settings",icon:{icon:"tabler-settings"},to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"FAQ",icon:{icon:"tabler-help"},to:"pages-faq"},{title:"Pricing",icon:{icon:"tabler-diamond"},to:"pages-pricing"},{title:"Misc",icon:{icon:"tabler-cube"},children:[{title:"Coming Soon",to:"pages-misc-coming-soon"},{title:"Under Maintenance",to:"pages-misc-under-maintenance",target:"_blank"},{title:"Page Not Found - 404",to:{path:"/pages/misc/not-found"},target:"_blank"},{title:"Not Authorized - 401",to:{path:"/pages/misc/not-authorized"},target:"_blank"}]},{title:"Authentication",icon:{icon:"tabler-lock"},children:[{title:"Login",children:[{title:"Login v1",to:"pages-authentication-login-v1",target:"_blank"},{title:"Login v2",to:"pages-authentication-login-v2",target:"_blank"}]},{title:"Register",children:[{title:"Register v1",to:"pages-authentication-register-v1",target:"_blank"},{title:"Register v2",to:"pages-authentication-register-v2",target:"_blank"},{title:"Register Multi-Steps",to:"pages-authentication-register-multi-steps",target:"_blank"}]},{title:"Verify Email",children:[{title:"Verify Email v1",to:"pages-authentication-verify-email-v1",target:"_blank"},{title:"Verify Email v2",to:"pages-authentication-verify-email-v2",target:"_blank"}]},{title:"Forgot Password",children:[{title:"Forgot Password v1",to:"pages-authentication-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",to:"pages-authentication-forgot-password-v2",target:"_blank"}]},{title:"Reset Password",children:[{title:"Reset Password v1",to:"pages-authentication-reset-password-v1",target:"_blank"},{title:"Reset Password v2",to:"pages-authentication-reset-password-v2",target:"_blank"}]},{title:"Two Steps",children:[{title:"Two Steps v1",to:"pages-authentication-two-steps-v1",target:"_blank"},{title:"Two Steps v2",to:"pages-authentication-two-steps-v2",target:"_blank"}]}]},{title:"Wizard Pages",icon:{icon:"tabler-forms"},children:[{title:"Checkout",to:{name:"wizard-examples-checkout"}},{title:"Property Listing",to:{name:"wizard-examples-property-listing"}},{title:"Create Deal",to:{name:"wizard-examples-create-deal"}}]},{title:"Dialog Examples",icon:{icon:"tabler-square"},to:"pages-dialog-examples"},{title:"Front Pages",icon:{icon:"tabler-files"},children:[{title:"Landing",to:"front-pages-landing-page",target:"_blank"},{title:"Pricing",to:"front-pages-pricing",target:"_blank"},{title:"Payment",to:"front-pages-payment",target:"_blank"},{title:"Checkout",to:"front-pages-checkout",target:"_blank"},{title:"Help Center",to:"front-pages-help-center",target:"_blank"}]}]}],vo=[{title:"Tables",icon:{icon:"tabler-layout-grid"},children:[{title:"Simple Table",icon:{icon:"tabler-table"},to:"tables-simple-table"},{title:"Data Table",icon:{icon:"tabler-layout-grid"},to:"tables-data-table"}]}],yo=[{title:"User Interface",icon:{icon:"tabler-color-swatch"},children:[{title:"Icons",icon:{icon:"tabler-brand-tabler"},to:"pages-icons"},{title:"Typography",icon:{icon:"tabler-square-letter-t"},to:"pages-typography"},{title:"Cards",icon:{icon:"tabler-id"},children:[{title:"Basic",to:"pages-cards-card-basic"},{title:"Advance",to:"pages-cards-card-advance"},{title:"Statistics",to:"pages-cards-card-statistics"},{title:"Widgets",to:"pages-cards-card-widgets"},{title:"Actions",to:"pages-cards-card-actions"}]},{title:"Components",icon:{icon:"tabler-toggle-left"},children:[{title:"Alert",to:"components-alert"},{title:"Avatar",to:"components-avatar"},{title:"Badge",to:"components-badge"},{title:"Button",to:"components-button"},{title:"Chip",to:"components-chip"},{title:"Dialog",to:"components-dialog"},{title:"Expansion Panel",to:"components-expansion-panel"},{title:"List",to:"components-list"},{title:"Menu",to:"components-menu"},{title:"Pagination",to:"components-pagination"},{title:"Progress Circular",to:"components-progress-circular"},{title:"Progress Linear",to:"components-progress-linear"},{title:"Snackbar",to:"components-snackbar"},{title:"Tabs",to:"components-tabs"},{title:"Timeline",to:"components-timeline"},{title:"Tooltip",to:"components-tooltip"}]},{title:"Extensions",icon:{icon:"tabler-box"},children:[{title:"Tour",to:"extensions-tour"},{title:"Swiper",to:"extensions-swiper"}]}]}],wo=[...mo,...po,...bo,...yo,...go,...vo,...fo,...ho],xo={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},un={__name:"DefaultLayoutWithHorizontalNav",setup(t){const e=B(!1),o=B(null);return ot([e,o],()=>{e.value&&o.value&&o.value.fallbackHandle(),!e.value&&o.value&&o.value.resolveHandle()},{immediate:!0}),(n,i)=>{const r=_t("RouterLink"),s=te,a=_t("RouterView");return b(),C(p(Pe),{"nav-items":p(wo)},{navbar:L(()=>{var l;return[S(r,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:L(()=>[S(p(ve),{nodes:p(N).app.logo},null,8,["nodes"]),w("h1",xo,bt(p(N).app.title),1)]),_:1}),S(ye),S(me,{"trigger-btn-class":"ms-lg-n3"}),p(N).app.i18n.enable&&((l=p(N).app.i18n.langConfig)!=null&&l.length)?(b(),C(be,{key:0,languages:p(N).app.i18n.langConfig},null,8,["languages"])):vt("",!0),S(ge),S(de,{class:"me-2"}),S(he)]}),footer:L(()=>[S(fe)]),default:L(()=>[S(s,{ref_key:"refLoadingIndicator",ref:o},null,512),S(a,null,{default:L(({Component:l})=>[(b(),C(pe,{timeout:0,onFallback:i[0]||(i[0]=c=>e.value=!0),onResolve:i[1]||(i[1]=c=>e.value=!1)},{default:L(()=>[(b(),C(T(l)))]),_:2},1024))]),_:1})]),_:1},8,["nav-items"])}}};export{un as default};
