import{bv as Te,bw as Le,a9 as z,r as D,bx as q,by as ve,w as B,bz as V,bA as je,bB as ge,bC as oe,bD as ae,bE as he,a5 as C,aF as ee,bF as be,aH as R,aI as we,aA as de,bG as Be,bH as Ye,b0 as Fe,V as Me,bI as Ee,s as W,bJ as Xe,az as K,bK as Ge,H as Ke,bL as Re,P as Ue,a$ as Je,bM as Ze,am as Qe,aW as et,aq as tt,ab as Ne,ac as nt,aN as ot,aP as at,ar as rt,a0 as it,aX as st,aB as lt,bN as ct,bO as ut,ae as ft,b as N,bP as vt,K as dt,L as mt,aD as yt,F as gt,T as le}from"./main-CW6J46NJ.js";import{g as He,B as re,a as xe,n as _e,b as G,s as ce,d as ht,c as bt}from"./forwardRefs-D3j0TLhE.js";import{m as wt,u as Et}from"./lazy-Bh2QwbdU.js";import{u as xt}from"./scopeId-0n4uV60R.js";import{m as St,M as pt}from"./index-F08MoCw-.js";const U=new WeakMap;function Ot(e,n){Object.keys(n).forEach(t=>{if(Te(t)){const o=Le(t),a=U.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),U.has(e)||U.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function kt(e,n){Object.keys(n).forEach(t=>{if(Te(t)){const o=Le(t),a=U.get(e);a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function De(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Pt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?At(e):me(e))return e;e=e.parentElement}return document.scrollingElement}function Z(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(me(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function me(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function At(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Ct(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function ie(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Tt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Se(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ie({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ie({x:a,y:i},n)}return ie({x:n.width/2,y:n.height/2},n)}const Ve={static:Ft,connected:Rt},Lt=z({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ve},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Bt(e,n){const t=D({}),o=D();q&&ve(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var s,r;B(()=>e.locationStrategy,i),V(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:o.value=(r=Ve[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var s;(s=o.value)==null||s.call(o,i)}return{contentStyles:t,updateLocation:o}}function Ft(){}function Mt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=_e(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Rt(e,n,t){(Array.isArray(e.target.value)||Ct(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=je(()=>{const d=ge(n.location,e.isRtl.value),v=n.origin==="overlap"?d:n.origin==="auto"?oe(d):ge(n.origin,e.isRtl.value);return d.side===v.side&&d.align===ae(v).align?{preferredAnchor:he(d),preferredOrigin:he(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,r,u,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>C(()=>{const v=parseFloat(n[d]);return isNaN(v)?1/0:v})),f=C(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let y=!1;const h=new ResizeObserver(()=>{y&&g()});B([e.target,e.contentEl],(d,v)=>{let[k,P]=d,[x,w]=v;x&&!Array.isArray(x)&&h.unobserve(x),k&&!Array.isArray(k)&&h.observe(k),w&&h.unobserve(w),P&&h.observe(P)},{immediate:!0}),V(()=>{h.disconnect()});function g(){if(y=!1,requestAnimationFrame(()=>y=!0),!e.target.value||!e.contentEl.value)return;const d=He(e.target.value),v=Mt(e.contentEl.value,e.isRtl.value),k=Z(e.contentEl.value),P=12;k.length||(k.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const x=k.reduce((p,E)=>{const m=E.getBoundingClientRect(),b=new re({x:E===document.documentElement?0:m.x,y:E===document.documentElement?0:m.y,width:E.clientWidth,height:E.clientHeight});return p?new re({x:Math.max(p.left,b.left),y:Math.max(p.top,b.top),width:Math.min(p.right,b.right)-Math.max(p.left,b.left),height:Math.min(p.bottom,b.bottom)-Math.max(p.top,b.top)}):b},void 0);x.x+=P,x.y+=P,x.width-=P*2,x.height-=P*2;let w={anchor:a.value,origin:i.value};function I(p){const E=new re(v),m=Se(p.anchor,d),b=Se(p.origin,E);let{x:L,y:M}=Tt(m,b);switch(p.anchor.side){case"top":M-=f.value[0];break;case"bottom":M+=f.value[0];break;case"left":L-=f.value[0];break;case"right":L+=f.value[0];break}switch(p.anchor.align){case"top":M-=f.value[1];break;case"bottom":M+=f.value[1];break;case"left":L-=f.value[1];break;case"right":L+=f.value[1];break}return E.x+=L,E.y+=M,E.width=Math.min(E.width,u.value),E.height=Math.min(E.height,c.value),{overflows:xe(E,x),x:L,y:M}}let F=0,A=0;const l={x:0,y:0},T={x:!1,y:!1};let te=-1;for(;!(te++>10);){const{x:p,y:E,overflows:m}=I(w);F+=p,A+=E,v.x+=p,v.y+=E;{const b=be(w.anchor),L=m.x.before||m.x.after,M=m.y.before||m.y.after;let j=!1;if(["x","y"].forEach(O=>{if(O==="x"&&L&&!T.x||O==="y"&&M&&!T.y){const $={anchor:{...w.anchor},origin:{...w.origin}},Y=O==="x"?b==="y"?ae:oe:b==="y"?oe:ae;$.anchor=Y($.anchor),$.origin=Y($.origin);const{overflows:H}=I($);(H[O].before<=m[O].before&&H[O].after<=m[O].after||H[O].before+H[O].after<(m[O].before+m[O].after)/2)&&(w=$,j=T[O]=!0)}}),j)continue}m.x.before&&(F+=m.x.before,v.x+=m.x.before),m.x.after&&(F-=m.x.after,v.x-=m.x.after),m.y.before&&(A+=m.y.before,v.y+=m.y.before),m.y.after&&(A-=m.y.after,v.y-=m.y.after);{const b=xe(v,x);l.x=x.width-b.x.before-b.x.after,l.y=x.height-b.y.before-b.y.after,F+=b.x.before,v.x+=b.x.before,A+=b.y.before,v.y+=b.y.before}break}const ne=be(w.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${w.anchor.side} ${w.anchor.align}`,transformOrigin:`${w.origin.side} ${w.origin.align}`,top:R(se(A)),left:e.isRtl.value?void 0:R(se(F)),right:e.isRtl.value?R(se(-F)):void 0,minWidth:R(ne==="y"?Math.min(s.value,d.width):s.value),maxWidth:R(pe(we(l.x,s.value===1/0?0:s.value,u.value))),maxHeight:R(pe(we(l.y,r.value===1/0?0:r.value,c.value)))}),{available:l,contentBox:v}}return B(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>g()),ee(()=>{const d=g();if(!d)return;const{available:v,contentBox:k}=d;k.height>v.y&&requestAnimationFrame(()=>{g(),requestAnimationFrame(()=>{g()})})}),{updateLocation:g}}function se(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function pe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ue=!0;const Q=[];function Nt(e){!ue||Q.length?(Q.push(e),fe()):(ue=!1,e(),fe())}let Oe=-1;function fe(){cancelAnimationFrame(Oe),Oe=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?fe():ue=!0})}const J={none:null,close:Dt,block:Vt,reposition:It},Ht=z({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"VOverlay-scroll-strategies");function _t(e,n){if(!q)return;let t;de(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Be(),await ee(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=J[e.scrollStrategy])==null||o.call(J,n,e,t)}))}),V(()=>{t==null||t.stop()})}function Dt(e){function n(t){e.isActive.value=!1}Ie(e.targetEl.value??e.contentEl.value,n)}function Vt(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...Z(e.targetEl.value,n.contained?t:void 0),...Z(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>me(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,u)=>{r.style.setProperty("--v-body-scroll-x",R(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",R(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",R(a)),r.classList.add("v-overlay-scroll-blocked")}),V(()=>{o.forEach((r,u)=>{const c=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),y=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-c,r.scrollTop=-f,r.style.scrollBehavior=y}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function It(e,n,t){let o=!1,a=-1,i=-1;function s(r){Nt(()=>{var f,y;const u=performance.now();(y=(f=e.updateLocation).value)==null||y.call(f,r),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{Ie(e.targetEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(r)})})):s(r)})})}),V(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function Ie(e,n){const t=[document,...Z(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),V(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const $t=Symbol.for("vuetify:v-menu"),Wt=z({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function qt(e,n){let t=()=>{};function o(s){t==null||t();const r=Number(s?e.openDelay:e.closeDelay);return new Promise(u=>{t=Ye(r,()=>{n==null||n(s),u(s)})})}function a(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:i}}const zt=z({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Wt()},"VOverlay-activator");function jt(e,n){let{isActive:t,isTop:o}=n;const a=Fe("useActivator"),i=D();let s=!1,r=!1,u=!0;const c=C(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=C(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:y,runCloseDelay:h}=qt(e,l=>{l===(e.openOnHover&&s||c.value&&r)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(u=!0),t.value=l)}),g=D(),d={onClick:l=>{l.stopPropagation(),i.value=l.currentTarget||l.target,t.value||(g.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var T;(T=l.sourceCapabilities)!=null&&T.firesTouchEvents||(s=!0,i.value=l.currentTarget||l.target,y())},onMouseleave:l=>{s=!1,h()},onFocus:l=>{Xe(l.target,":focus-visible")!==!1&&(r=!0,l.stopPropagation(),i.value=l.currentTarget||l.target,y())},onBlur:l=>{r=!1,l.stopPropagation(),h()}},v=C(()=>{const l={};return f.value&&(l.onClick=d.onClick),e.openOnHover&&(l.onMouseenter=d.onMouseenter,l.onMouseleave=d.onMouseleave),c.value&&(l.onFocus=d.onFocus,l.onBlur=d.onBlur),l}),k=C(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{s=!0,y()},l.onMouseleave=()=>{s=!1,h()}),c.value&&(l.onFocusin=()=>{r=!0,y()},l.onFocusout=()=>{r=!1,h()}),e.closeOnContentClick){const T=Me($t,null);l.onClick=()=>{t.value=!1,T==null||T.closeParents()}}return l}),P=C(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{u&&(s=!0,u=!1,y())},l.onMouseleave=()=>{s=!1,h()}),l});B(o,l=>{l&&(e.openOnHover&&!s&&(!c.value||!r)||c.value&&!r&&(!e.openOnHover||!s))&&(t.value=!1)}),B(t,l=>{l||setTimeout(()=>{g.value=void 0})},{flush:"post"});const x=D();de(()=>{x.value&&ee(()=>{i.value=Ee(x.value)})});const w=D(),I=C(()=>e.target==="cursor"&&g.value?g.value:w.value?Ee(w.value):$e(e.target,a)||i.value),F=C(()=>Array.isArray(I.value)?void 0:I.value);let A;return B(()=>!!e.activator,l=>{l&&q?(A=Be(),A.run(()=>{Yt(e,a,{activatorEl:i,activatorEvents:v})})):A&&A.stop()},{flush:"post",immediate:!0}),V(()=>{A==null||A.stop()}),{activatorEl:i,activatorRef:x,target:I,targetEl:F,targetRef:w,activatorEvents:v,contentEvents:k,scrimEvents:P}}function Yt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;B(()=>e.activator,(u,c)=>{if(c&&u!==c){const f=r(c);f&&s(f)}u&&ee(()=>i())},{immediate:!0}),B(()=>e.activatorProps,()=>{i()}),V(()=>{s()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ot(u,W(a.value,c))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&kt(u,W(a.value,c))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=$e(u,n);return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,o.value}}function $e(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Xt(){if(!q)return K(!1);const{ssr:e}=Ge();if(e){const n=K(!1);return Ke(()=>{n.value=!0}),n}else return K(!0)}const ke=Symbol.for("vuetify:stack"),X=Re([]);function Gt(e,n,t){const o=Fe("useStack"),a=!t,i=Me(ke,void 0),s=Re({activeChildren:new Set});Ue(ke,s);const r=K(+n.value);ve(e,()=>{var y;const f=(y=X.at(-1))==null?void 0:y[1];r.value=f?f+10:+n.value,a&&X.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),V(()=>{if(a){const h=Je(X).findIndex(g=>g[0]===o.uid);X.splice(h,1)}i==null||i.activeChildren.delete(o.uid)})});const u=K(!0);a&&de(()=>{var y;const f=((y=X.at(-1))==null?void 0:y[0])===o.uid;setTimeout(()=>u.value=f)});const c=C(()=>!s.activeChildren.size);return{globalTop:Ze(u),localTop:c,stackStyles:C(()=>({zIndex:r.value}))}}function Kt(e){return{teleportTarget:C(()=>{const t=e.value;if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Ut(){return!0}function We(e,n,t){if(!e||qe(e,t)===!1)return!1;const o=De(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function qe(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Ut)(e)}function Jt(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&We(e,n,t)&&setTimeout(()=>{qe(e,t)&&o&&o(e)},0)}function Pe(e,n){const t=De(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Zt={mounted(e,n){const t=a=>Jt(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=We(a,e,n)};Pe(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Pe(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Qt(e){const{modelValue:n,color:t,...o}=e;return N(le,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&N("div",W({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const en=z({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...zt(),...Qe(),...et(),...wt(),...Lt(),...Ht(),...tt(),...St()},"VOverlay"),ln=Ne()({name:"VOverlay",directives:{ClickOutside:Zt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...en()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=nt(e,"modelValue"),s=C({get:()=>i.value,set:S=>{S&&e.disabled||(i.value=S)}}),{teleportTarget:r}=Kt(C(()=>e.attach||e.contained)),{themeClasses:u}=ot(e),{rtlClasses:c,isRtl:f}=at(),{hasContent:y,onAfterLeave:h}=Et(e,s),g=rt(C(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:k}=Gt(s,it(e,"zIndex"),e._disableGlobalStack),{activatorEl:P,activatorRef:x,target:w,targetEl:I,targetRef:F,activatorEvents:A,contentEvents:l,scrimEvents:T}=jt(e,{isActive:s,isTop:v}),{dimensionStyles:te}=st(e),ne=Xt(),{scopeId:p}=xt();B(()=>e.disabled,S=>{S&&(s.value=!1)});const E=D(),m=D(),{contentStyles:b,updateLocation:L}=Bt(e,{isRtl:f,contentEl:m,target:w,isActive:s});_t(e,{root:E,contentEl:m,targetEl:I,isActive:s,updateLocation:L});function M(S){a("click:outside",S),e.persistent?H():s.value=!1}function j(){return s.value&&d.value}q&&B(s,S=>{S?window.addEventListener("keydown",O):window.removeEventListener("keydown",O)},{immediate:!0}),lt(()=>{q&&window.removeEventListener("keydown",O)});function O(S){var _,ye;S.key==="Escape"&&d.value&&(e.persistent?H():(s.value=!1,(_=m.value)!=null&&_.contains(document.activeElement)&&((ye=P.value)==null||ye.focus())))}const $=ct();ve(()=>e.closeOnBack,()=>{ut($,S=>{d.value&&s.value?(S(!1),e.persistent?H():s.value=!1):S()})});const Y=D();B(()=>s.value&&(e.absolute||e.contained)&&r.value==null,S=>{if(S){const _=Pt(E.value);_&&_!==document.scrollingElement&&(Y.value=_.scrollTop)}});function H(){e.noClickAnimation||m.value&&G(m.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ce})}function ze(){h(),a("afterLeave")}return ft(()=>{var S;return N(gt,null,[(S=t.activator)==null?void 0:S.call(t,{isActive:s.value,props:W({ref:x,targetRef:F},A.value,e.activatorProps)}),!e.disabled&&ne.value&&y.value&&N(vt,{disabled:!r.value,to:r.value},{default:()=>[N("div",W({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},u.value,c.value,e.class],style:[k.value,{top:R(Y.value)},e.style],ref:E},p,o),[N(Qt,W({color:g,modelValue:!!e.scrim&&s.value},T.value),null),N(pt,{appear:!0,persisted:!0,transition:e.transition,target:w.value,onAfterLeave:ze},{default:()=>{var _;return[dt(N("div",W({ref:m,class:["v-overlay__content",e.contentClass],style:[te.value,b.value]},l.value,e.contentProps),[(_=t.default)==null?void 0:_.call(t,{isActive:s})]),[[mt,s.value],[yt("click-outside"),{handler:M,closeConditional:j,include:()=>[P.value]}]])]}})])]})])}),{activatorEl:P,target:w,animateClick:H,contentEl:m,globalTop:d,localTop:v,updateLocation:L}}}),tn=z({target:[Object,Array]},"v-dialog-transition"),cn=Ne()({name:"VDialogTransition",props:tn(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var h;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),a.style.visibility="";const{x:s,y:r,sx:u,sy:c,speed:f}=Ce(e.target,a),y=G(a,[{transform:`translate(${s}px, ${r}px) scale(${u}, ${c})`,opacity:0},{}],{duration:225*f,easing:ht});(h=Ae(a))==null||h.forEach(g=>{G(g,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:ce})}),y.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var h;await new Promise(g=>requestAnimationFrame(g));const{x:s,y:r,sx:u,sy:c,speed:f}=Ce(e.target,a);G(a,[{},{transform:`translate(${s}px, ${r}px) scale(${u}, ${c})`,opacity:0}],{duration:125*f,easing:bt}).finished.then(()=>i()),(h=Ae(a))==null||h.forEach(g=>{G(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:ce})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?N(le,W({name:"dialog-transition"},o,{css:!1}),t):N(le,{name:"dialog-transition"},t)}});function Ae(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ce(e,n){const t=He(e),o=_e(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(P=>parseFloat(P)),[s,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;s==="left"||r==="left"?u-=t.width/2:(s==="right"||r==="right")&&(u+=t.width/2);let c=t.top+t.height/2;s==="top"||r==="top"?c-=t.height/2:(s==="bottom"||r==="bottom")&&(c+=t.height/2);const f=t.width/o.width,y=t.height/o.height,h=Math.max(1,f,y),g=f/h||0,d=y/h||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),k=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:u-(a+o.left),y:c-(i+o.top),sx:g,sy:d,speed:k}}export{ln as V,cn as a,$t as b,Pt as g,en as m};
