import{aL as G,a$ as fe,a_ as he,a5 as l,c$ as Q,b$ as le,a0 as S,as as Z,r as ee,cq as ke,P as pe,bU as re,aM as se,aO as oe,b3 as ye,V as ne,ba as Se,bf as ge,aU as ie,bt as M,b as v,K as te,bd as we,L as Ce,cr as _e,bb as Ve,bj as ae}from"./main-CGWwRiT_.js";import{d as Te}from"./index-BOYzkDlu.js";const H=Symbol.for("vuetify:v-slider");function xe(e,t,n){const i=n==="vertical",u=t.getBoundingClientRect(),m="touches"in e?e.touches[0]:e;return i?m.clientY-(u.top+u.height/2):m.clientX-(u.left+u.width/2)}function Fe(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const Me=G({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...fe(),...he({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),Ne=e=>{const t=l(()=>parseFloat(e.min)),n=l(()=>parseFloat(e.max)),i=l(()=>+e.step>0?parseFloat(e.step):0),u=l(()=>Math.max(Q(i.value),Q(t.value)));function m(h){if(h=parseFloat(h),i.value<=0)return h;const g=re(h,t.value,n.value),f=t.value%i.value,w=Math.round((g-f)/i.value)*i.value+f;return parseFloat(Math.min(w,n.value).toFixed(u.value))}return{min:t,max:n,step:i,decimals:u,roundValue:m}},Pe=e=>{let{props:t,steps:n,onSliderStart:i,onSliderMove:u,onSliderEnd:m,getActiveThumb:h}=e;const{isRtl:g}=le(),f=S(t,"reverse"),w=l(()=>t.direction==="vertical"),_=l(()=>w.value!==f.value),{min:b,max:k,step:V,decimals:N,roundValue:F}=n,O=l(()=>parseInt(t.thumbSize,10)),q=l(()=>parseInt(t.tickSize,10)),K=l(()=>parseInt(t.trackSize,10)),T=l(()=>(k.value-b.value)/V.value),$=S(t,"disabled"),z=l(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),L=l(()=>t.error||t.disabled?void 0:t.trackColor??t.color),P=l(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),E=Z(!1),p=Z(0),R=ee(),y=ee();function r(a){var J;const o=t.direction==="vertical",ue=o?"top":"left",ce=o?"height":"width",de=o?"clientY":"clientX",{[ue]:ve,[ce]:me}=(J=R.value)==null?void 0:J.$el.getBoundingClientRect(),be=Fe(a,de);let W=Math.min(Math.max((be-ve-p.value)/me,0),1)||0;return(o?_.value:_.value!==g.value)&&(W=1-W),F(b.value+W*(k.value-b.value))}const C=a=>{m({value:r(a)}),E.value=!1,p.value=0},x=a=>{y.value=h(a),y.value&&(y.value.focus(),E.value=!0,y.value.contains(a.target)?p.value=xe(a,y.value,t.direction):(p.value=0,u({value:r(a)})),i({value:r(a)}))},d={passive:!0,capture:!0};function B(a){u({value:r(a)})}function A(a){a.stopPropagation(),a.preventDefault(),C(a),window.removeEventListener("mousemove",B,d),window.removeEventListener("mouseup",A)}function I(a){var o;C(a),window.removeEventListener("touchmove",B,d),(o=a.target)==null||o.removeEventListener("touchend",I)}function Y(a){var o;x(a),window.addEventListener("touchmove",B,d),(o=a.target)==null||o.addEventListener("touchend",I,{passive:!1})}function c(a){a.preventDefault(),x(a),window.addEventListener("mousemove",B,d),window.addEventListener("mouseup",A,{passive:!1})}const s=a=>{const o=(a-b.value)/(k.value-b.value)*100;return re(isNaN(o)?0:o,0,100)},D=S(t,"showTicks"),j=l(()=>D.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(a=>({value:a,position:s(a),label:a.toString()})):Object.keys(t.ticks).map(a=>({value:parseFloat(a),position:s(parseFloat(a)),label:t.ticks[a]})):T.value!==1/0?ke(T.value+1).map(a=>{const o=b.value+a*V.value;return{value:o,position:s(o)}}):[]:[]),U=l(()=>j.value.some(a=>{let{label:o}=a;return!!o})),X={activeThumbRef:y,color:S(t,"color"),decimals:N,disabled:$,direction:S(t,"direction"),elevation:S(t,"elevation"),hasLabels:U,isReversed:f,indexFromEnd:_,min:b,max:k,mousePressed:E,numTicks:T,onSliderMousedown:c,onSliderTouchstart:Y,parsedTicks:j,parseMouseMove:r,position:s,readonly:S(t,"readonly"),rounded:S(t,"rounded"),roundValue:F,showTicks:D,startOffset:p,step:V,thumbSize:O,thumbColor:z,thumbLabel:S(t,"thumbLabel"),ticks:S(t,"ticks"),tickSize:q,trackColor:L,trackContainerRef:R,trackFillColor:P,trackSize:K,vertical:w};return pe(H,X),X},ze=G({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},...se()},"VSliderThumb"),Be=oe()({name:"VSliderThumb",directives:{Ripple:ye},props:ze(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n,emit:i}=t;const u=ne(H),{isRtl:m,rtlClasses:h}=le();if(!u)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:g,step:f,disabled:w,thumbSize:_,thumbLabel:b,direction:k,isReversed:V,vertical:N,readonly:F,elevation:O,mousePressed:q,decimals:K,indexFromEnd:T}=u,$=l(()=>w.value?void 0:O.value),{elevationClasses:z}=Se($),{textColorClasses:L,textColorStyles:P}=ge(g),{pageup:E,pagedown:p,end:R,home:y,left:r,right:C,down:x,up:d}=_e,B=[E,p,R,y,r,C,x,d],A=l(()=>f.value?[1,2,3]:[1,5,10]);function I(c,s){if(!B.includes(c.key))return;c.preventDefault();const D=f.value||.1,j=(e.max-e.min)/D;if([r,C,x,d].includes(c.key)){const X=(N.value?[m.value?r:C,V.value?x:d]:T.value!==m.value?[r,d]:[C,d]).includes(c.key)?1:-1,a=c.shiftKey?2:c.ctrlKey?1:0;s=s+X*D*A.value[a]}else if(c.key===y)s=e.min;else if(c.key===R)s=e.max;else{const U=c.key===p?1:-1;s=s-U*D*(j>100?j/10:10)}return Math.max(e.min,Math.min(e.max,s))}function Y(c){const s=I(c,e.modelValue);s!=null&&i("update:modelValue",s)}return ie(()=>{const c=M(T.value?100-e.position:e.position,"%");return v("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&q.value},e.class,h.value],style:[{"--v-slider-thumb-position":c,"--v-slider-thumb-size":M(_.value)},e.style],role:"slider",tabindex:w.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!F.value,"aria-orientation":k.value,onKeydown:F.value?void 0:Y},[v("div",{class:["v-slider-thumb__surface",L.value,z.value],style:{...P.value}},null),te(v("div",{class:["v-slider-thumb__ripple",L.value],style:P.value},null),[[we("ripple"),e.ripple,null,{circle:!0,center:!0}]]),v(Te,{origin:"bottom center"},{default:()=>{var s;return[te(v("div",{class:"v-slider-thumb__label-container"},[v("div",{class:["v-slider-thumb__label"]},[v("div",null,[((s=n["thumb-label"])==null?void 0:s.call(n,{modelValue:e.modelValue}))??e.modelValue.toFixed(f.value?K.value:1)])])]),[[Ce,b.value&&e.focused||b.value==="always"]])]}})])}),{}}}),Le=G({start:{type:Number,required:!0},stop:{type:Number,required:!0},...se()},"VSliderTrack"),De=oe()({name:"VSliderTrack",props:Le(),emits:{},setup(e,t){let{slots:n}=t;const i=ne(H);if(!i)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:u,parsedTicks:m,rounded:h,showTicks:g,tickSize:f,trackColor:w,trackFillColor:_,trackSize:b,vertical:k,min:V,max:N,indexFromEnd:F}=i,{roundedClasses:O}=Ve(h),{backgroundColorClasses:q,backgroundColorStyles:K}=ae(_),{backgroundColorClasses:T,backgroundColorStyles:$}=ae(w),z=l(()=>`inset-${k.value?"block":"inline"}-${F.value?"end":"start"}`),L=l(()=>k.value?"height":"width"),P=l(()=>({[z.value]:"0%",[L.value]:"100%"})),E=l(()=>e.stop-e.start),p=l(()=>({[z.value]:M(e.start,"%"),[L.value]:M(E.value,"%")})),R=l(()=>g.value?(k.value?m.value.slice().reverse():m.value).map((r,C)=>{var d;const x=r.value!==V.value&&r.value!==N.value?M(r.position,"%"):void 0;return v("div",{key:r.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":r.position>=e.start&&r.position<=e.stop,"v-slider-track__tick--first":r.value===V.value,"v-slider-track__tick--last":r.value===N.value}],style:{[z.value]:x}},[(r.label||n["tick-label"])&&v("div",{class:"v-slider-track__tick-label"},[((d=n["tick-label"])==null?void 0:d.call(n,{tick:r,index:C}))??r.label])])}):[]);return ie(()=>v("div",{class:["v-slider-track",O.value,e.class],style:[{"--v-slider-track-size":M(b.value),"--v-slider-tick-size":M(f.value)},e.style]},[v("div",{class:["v-slider-track__background",T.value,{"v-slider-track__background--opacity":!!u.value||!_.value}],style:{...P.value,...$.value}},null),v("div",{class:["v-slider-track__fill",q.value],style:{...p.value,...K.value}},null),g.value&&v("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":g.value==="always"}]},[R.value])])),{}}});export{De as V,Pe as a,Be as b,xe as g,Me as m,Ne as u};
