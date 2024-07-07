import{cn as Y,aK as _,aL as H,aM as A,b0 as G,aN as V,b4 as j,b_ as F,bw as O,bF as z,r as E,a5 as h,ar as x,w as D,P as K,b as m,a7 as S,aT as k,K as R,bc as U,bG as q,V as J,bH as N,L as Q,bs as X,aA as Z}from"./main-cX0WqYxM.js";import{m as p,u as ee}from"./lazy-DOHHlfda.js";import{u as te}from"./ssrBoot-C0TROgbJ.js";import{M as ne}from"./index-BjWxQyns.js";const oe=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:i}=e,u=.5,s=16;e.offsetX=t-o,e.offsetY=i-n,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&i<n-s&&e.up(e),e.down&&i>n+s&&e.down(e))};function se(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function ie(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),oe(o)}function ae(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function ue(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>se(t,o),touchend:t=>ie(t,o),touchmove:t=>ae(t,o)}}function ce(e,o){var v;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,i=(t==null?void 0:t.options)??{passive:!0},u=(v=o.instance)==null?void 0:v.$.uid;if(!n||!u)return;const s=ue(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[u]=s,Y(s).forEach(r=>{n.addEventListener(r,s[r],i)})}function le(e,o){var u,s;const t=(u=o.value)!=null&&u.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const i=t._touchHandlers[n];Y(i).forEach(v=>{t.removeEventListener(v,i[v])}),delete t._touchHandlers[n]}const W={mounted:ce,unmounted:le},re=W,L=Symbol.for("vuetify:v-window"),P=Symbol.for("vuetify:v-window-group"),ve=_({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...H(),...A(),...G()},"VWindow"),ye=V()({name:"VWindow",directives:{Touch:W},props:ve(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=j(e),{isRtl:i}=F(),{t:u}=O(),s=z(e,P),v=E(),r=h(()=>i.value?!e.reverse:e.reverse),d=x(!1),y=h(()=>{const a=e.direction==="vertical"?"y":"x",f=(r.value?!d.value:d.value)?"-reverse":"";return`v-window-${a}${f}-transition`}),T=x(0),b=E(void 0),g=h(()=>s.items.value.findIndex(a=>s.selected.value.includes(a.id)));D(g,(a,l)=>{const f=s.items.value.length,I=f-1;f<=2?d.value=a<l:a===I&&l===0?d.value=!0:a===0&&l===I?d.value=!1:d.value=a<l}),K(L,{transition:y,isReversed:d,transitionCount:T,transitionHeight:b,rootRef:v});const c=h(()=>e.continuous||g.value!==0),w=h(()=>e.continuous||g.value!==s.items.value.length-1);function B(){c.value&&s.prev()}function C(){w.value&&s.next()}const $=h(()=>{const a=[],l={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,"aria-label":u("$vuetify.carousel.prev")};a.push(c.value?t.prev?t.prev({props:l}):m(S,l,null):m("div",null,null));const f={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,"aria-label":u("$vuetify.carousel.next")};return a.push(w.value?t.next?t.next({props:f}):m(S,f,null):m("div",null,null)),a}),M=h(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?B():C()},right:()=>{r.value?C():B()},start:l=>{let{originalEvent:f}=l;f.stopPropagation()}},...e.touch===!0?{}:e.touch});return k(()=>R(m(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var a,l;return[m("div",{class:"v-window__container",style:{height:b.value}},[(a=t.default)==null?void 0:a.call(t,{group:s}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[$.value])]),(l=t.additional)==null?void 0:l.call(t,{group:s})]}}),[[U("touch"),M.value]])),{group:s}}}),de=_({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...H(),...q(),...p()},"VWindowItem"),be=V()({name:"VWindowItem",directives:{Touch:re},props:de(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=J(L),i=N(e,P),{isBooted:u}=te();if(!n||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=x(!1),v=h(()=>u.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function d(){var c;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=X((c=n.rootRef.value)==null?void 0:c.clientHeight)),n.transitionCount.value+=1)}function y(){r()}function T(c){s.value&&Z(()=>{!v.value||!s.value||!n||(n.transitionHeight.value=X(c.clientHeight))})}const b=h(()=>{const c=n.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof c!="string"?n.transition.value:c,onBeforeEnter:d,onAfterEnter:r,onEnterCancelled:y,onBeforeLeave:d,onAfterLeave:r,onLeaveCancelled:y,onEnter:T}:!1}),{hasContent:g}=ee(e,i.isSelected);return k(()=>m(ne,{transition:b.value,disabled:!u.value},{default:()=>{var c;return[R(m("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[g.value&&((c=t.default)==null?void 0:c.call(t))]),[[Q,i.isSelected.value]])]}})),{groupItem:i}}});export{ye as V,be as a,de as b,ve as m};
