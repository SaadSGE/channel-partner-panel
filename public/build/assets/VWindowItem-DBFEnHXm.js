import{a9 as I,aa as Z,aY as J,ab as _,au as p,r as w,a5 as g,ae as Y,a7 as E,b as f,F as ee,s as X,aM as te,ap as L,ac as ne,aO as oe,ar as ae,a0 as T,aQ as se,aH as H,aZ as ie,a_ as z,am as G,aq as le,aN as ue,aP as ce,at as re,a$ as de,az as R,w as ve,P as fe,K as A,aD as he,b0 as me,V as ge,b1 as be,L as ye,aF as xe}from"./main-Cp2POdXb.js";import{f as Se,a as Ce,s as Te}from"./forwardRefs-D9kYFWgq.js";import{m as Be,a as W}from"./VChip-ihqZWhi4.js";import{a as Ve,u as ke}from"./dialog-transition-1LjPfX5Q.js";import{u as Pe}from"./ssrBoot-CQ8JDYey.js";import{M as $e}from"./index-ClsSkh9w.js";const O=Symbol.for("vuetify:v-tabs"),we=I({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Z(J({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Ee=_()({name:"VTab",props:we(),setup(e,n){let{slots:t,attrs:o}=n;const{textColorClasses:s,textColorStyles:u}=p(e,"sliderColor"),a=w(),d=w(),i=g(()=>e.direction==="horizontal"),c=g(()=>{var b,h;return((h=(b=a.value)==null?void 0:b.group)==null?void 0:h.isSelected.value)??!1});function B(b){var x,v;let{value:h}=b;if(h){const V=(v=(x=a.value)==null?void 0:x.$el.parentElement)==null?void 0:v.querySelector(".v-tab--selected .v-tab__slider"),k=d.value;if(!V||!k)return;const $=getComputedStyle(V).color,S=V.getBoundingClientRect(),C=k.getBoundingClientRect(),l=i.value?"x":"y",r=i.value?"X":"Y",m=i.value?"right":"bottom",y=i.value?"width":"height",q=S[l],U=C[l],P=q>U?S[m]-C[m]:S[l]-C[l],K=Math.sign(P)>0?i.value?"right":"bottom":Math.sign(P)<0?i.value?"left":"top":"center",N=(Math.abs(P)+(Math.sign(P)<0?S[y]:C[y]))/Math.max(S[y],C[y])||0,Q=S[y]/C[y]||0,M=1.5;Ce(k,{backgroundColor:[$,"currentcolor"],transform:[`translate${r}(${P}px) scale${r}(${Q})`,`translate${r}(${P/M}px) scale${r}(${(N-1)/M+1})`,"none"],transformOrigin:Array(3).fill(K)},{duration:225,easing:Te})}}return Y(()=>{const b=E.filterProps(e);return f(E,X({symbol:O,ref:a,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1},b,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":B}),{...t,default:()=>{var h;return f(ee,null,[((h=t.default)==null?void 0:h.call(t))??e.text,!e.hideSlider&&f("div",{ref:d,class:["v-tab__slider",s.value],style:u.value},null)])}})}),Se({},a)}});function Ie(e){return e?e.map(n=>ie(n)?n:{text:n,value:n}):[]}const _e=I({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Be({mandatory:"force"}),...te(),...L()},"VTabs"),Ne=_()({name:"VTabs",props:_e(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=ne(e,"modelValue"),s=g(()=>Ie(e.items)),{densityClasses:u}=oe(e),{backgroundColorClasses:a,backgroundColorStyles:d}=ae(T(e,"bgColor"));return se({VTab:{color:T(e,"color"),direction:T(e,"direction"),stacked:T(e,"stacked"),fixed:T(e,"fixedTabs"),sliderColor:T(e,"sliderColor"),hideSlider:T(e,"hideSlider")}}),Y(()=>{const i=W.filterProps(e);return f(W,X(i,{modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},u.value,a.value,e.class],style:[{"--v-tabs-height":H(e.height)},d.value,e.style],role:"tablist",symbol:O}),{default:()=>[t.default?t.default():s.value.map(c=>f(Ee,X(c,{key:c.text}),null))]})}),{}}}),Ye=e=>{const{touchstartX:n,touchendX:t,touchstartY:o,touchendY:s}=e,u=.5,a=16;e.offsetX=t-n,e.offsetY=s-o,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<n-a&&e.left(e),e.right&&t>n+a&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&s<o-a&&e.up(e),e.down&&s>o+a&&e.down(e))};function Xe(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function He(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),Ye(n)}function Re(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function Me(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Xe(t,n),touchend:t=>He(t,n),touchmove:t=>Re(t,n)}}function We(e,n){var d;const t=n.value,o=t!=null&&t.parent?e.parentElement:e,s=(t==null?void 0:t.options)??{passive:!0},u=(d=n.instance)==null?void 0:d.$.uid;if(!o||!u)return;const a=Me(n.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[u]=a,z(a).forEach(i=>{o.addEventListener(i,a[i],s)})}function Le(e,n){var u,a;const t=(u=n.value)!=null&&u.parent?e.parentElement:e,o=(a=n.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const s=t._touchHandlers[o];z(s).forEach(d=>{t.removeEventListener(d,s[d])}),delete t._touchHandlers[o]}const D={mounted:We,unmounted:Le},ze=D,F=Symbol.for("vuetify:v-window"),j=Symbol.for("vuetify:v-window-group"),Ge=I({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...G(),...L(),...le()},"VWindow"),Qe=_()({name:"VWindow",directives:{Touch:D},props:Ge(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=ue(e),{isRtl:s}=ce(),{t:u}=re(),a=de(e,j),d=w(),i=g(()=>s.value?!e.reverse:e.reverse),c=R(!1),B=g(()=>{const l=e.direction==="vertical"?"y":"x",m=(i.value?!c.value:c.value)?"-reverse":"";return`v-window-${l}${m}-transition`}),b=R(0),h=w(void 0),x=g(()=>a.items.value.findIndex(l=>a.selected.value.includes(l.id)));ve(x,(l,r)=>{const m=a.items.value.length,y=m-1;m<=2?c.value=l<r:l===y&&r===0?c.value=!0:l===0&&r===y?c.value=!1:c.value=l<r}),fe(F,{transition:B,isReversed:c,transitionCount:b,transitionHeight:h,rootRef:d});const v=g(()=>e.continuous||x.value!==0),V=g(()=>e.continuous||x.value!==a.items.value.length-1);function k(){v.value&&a.prev()}function $(){V.value&&a.next()}const S=g(()=>{const l=[],r={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${i.value?"right":"left"}`,onClick:a.prev,"aria-label":u("$vuetify.carousel.prev")};l.push(v.value?t.prev?t.prev({props:r}):f(E,r,null):f("div",null,null));const m={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${i.value?"left":"right"}`,onClick:a.next,"aria-label":u("$vuetify.carousel.next")};return l.push(V.value?t.next?t.next({props:m}):f(E,m,null):f("div",null,null)),l}),C=g(()=>e.touch===!1?e.touch:{...{left:()=>{i.value?k():$()},right:()=>{i.value?$():k()},start:r=>{let{originalEvent:m}=r;m.stopPropagation()}},...e.touch===!0?{}:e.touch});return Y(()=>A(f(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var l,r;return[f("div",{class:"v-window__container",style:{height:h.value}},[(l=t.default)==null?void 0:l.call(t,{group:a}),e.showArrows!==!1&&f("div",{class:"v-window__controls"},[S.value])]),(r=t.additional)==null?void 0:r.call(t,{group:a})]}}),[[he("touch"),C.value]])),{group:a}}}),Ae=I({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...G(),...me(),...Ve()},"VWindowItem"),Ze=_()({name:"VWindowItem",directives:{Touch:ze},props:Ae(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const o=ge(F),s=be(e,j),{isBooted:u}=Pe();if(!o||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=R(!1),d=g(()=>u.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function i(){!a.value||!o||(a.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function c(){var v;a.value||!o||(a.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=H((v=o.rootRef.value)==null?void 0:v.clientHeight)),o.transitionCount.value+=1)}function B(){i()}function b(v){a.value&&xe(()=>{!d.value||!a.value||!o||(o.transitionHeight.value=H(v.clientHeight))})}const h=g(()=>{const v=o.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof v!="string"?o.transition.value:v,onBeforeEnter:c,onAfterEnter:i,onEnterCancelled:B,onBeforeLeave:c,onAfterLeave:i,onLeaveCancelled:B,onEnter:b}:!1}),{hasContent:x}=ke(e,s.isSelected);return Y(()=>f($e,{transition:h.value,disabled:!u.value},{default:()=>{var v;return[A(f("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[x.value&&((v=t.default)==null?void 0:v.call(t))]),[[ye,s.isSelected.value]])]}})),{groupItem:s}}});export{Ne as V,Ee as a,Qe as b,Ze as c};
