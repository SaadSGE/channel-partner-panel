import{at as Q,aM as be,aL as he,a5 as l,c$ as J,bO as le,a0 as S,ax as Z,r as ee,ce as ke,P as pe,bG as re,au as se,aw as oe,aQ as ye,V as ne,aX as Se,b0 as ge,aF as ie,bf as M,b as v,K as te,a_ as we,L as Ce,cf as _e,aY as Ve,b4 as ae}from"./main-DliaIfAl.js";import{d as Te}from"./index-B6_MyPcT.js";const W=Symbol.for("vuetify:v-slider");function xe(e,t,n){const i=n==="vertical",u=t.getBoundingClientRect(),m="touches"in e?e.touches[0]:e;return i?m.clientY-(u.top+u.height/2):m.clientX-(u.left+u.width/2)}function Fe(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const Me=Q({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...be(),...he({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),Ne=e=>{const t=l(()=>parseFloat(e.min)),n=l(()=>parseFloat(e.max)),i=l(()=>+e.step>0?parseFloat(e.step):0),u=l(()=>Math.max(J(i.value),J(t.value)));function m(h){if(h=parseFloat(h),i.value<=0)return h;const g=re(h,t.value,n.value),b=t.value%i.value,w=Math.round((g-b)/i.value)*i.value+b;return parseFloat(Math.min(w,n.value).toFixed(u.value))}return{min:t,max:n,step:i,decimals:u,roundValue:m}},Pe=e=>{let{props:t,steps:n,onSliderStart:i,onSliderMove:u,onSliderEnd:m,getActiveThumb:h}=e;const{isRtl:g}=le(),b=S(t,"reverse"),w=l(()=>t.direction==="vertical"),_=l(()=>w.value!==b.value),{min:f,max:k,step:V,decimals:N,roundValue:F}=n,O=l(()=>parseInt(t.thumbSize,10)),K=l(()=>parseInt(t.tickSize,10)),q=l(()=>parseInt(t.trackSize,10)),T=l(()=>(k.value-f.value)/V.value),j=S(t,"disabled"),z=l(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),L=l(()=>t.error||t.disabled?void 0:t.trackColor??t.color),P=l(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),E=Z(!1),p=Z(0),R=ee(),y=ee();function r(a){var H;const o=t.direction==="vertical",ue=o?"top":"left",ce=o?"height":"width",de=o?"clientY":"clientX",{[ue]:ve,[ce]:me}=(H=R.value)==null?void 0:H.$el.getBoundingClientRect(),fe=Fe(a,de);let G=Math.min(Math.max((fe-ve-p.value)/me,0),1)||0;return(o?_.value:_.value!==g.value)&&(G=1-G),F(f.value+G*(k.value-f.value))}const C=a=>{m({value:r(a)}),E.value=!1,p.value=0},x=a=>{y.value=h(a),y.value&&(y.value.focus(),E.value=!0,y.value.contains(a.target)?p.value=xe(a,y.value,t.direction):(p.value=0,u({value:r(a)})),i({value:r(a)}))},d={passive:!0,capture:!0};function B(a){u({value:r(a)})}function I(a){a.stopPropagation(),a.preventDefault(),C(a),window.removeEventListener("mousemove",B,d),window.removeEventListener("mouseup",I)}function $(a){var o;C(a),window.removeEventListener("touchmove",B,d),(o=a.target)==null||o.removeEventListener("touchend",$)}function U(a){var o;x(a),window.addEventListener("touchmove",B,d),(o=a.target)==null||o.addEventListener("touchend",$,{passive:!1})}function c(a){a.preventDefault(),x(a),window.addEventListener("mousemove",B,d),window.addEventListener("mouseup",I,{passive:!1})}const s=a=>{const o=(a-f.value)/(k.value-f.value)*100;return re(isNaN(o)?0:o,0,100)},D=S(t,"showTicks"),A=l(()=>D.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(a=>({value:a,position:s(a),label:a.toString()})):Object.keys(t.ticks).map(a=>({value:parseFloat(a),position:s(parseFloat(a)),label:t.ticks[a]})):T.value!==1/0?ke(T.value+1).map(a=>{const o=f.value+a*V.value;return{value:o,position:s(o)}}):[]:[]),X=l(()=>A.value.some(a=>{let{label:o}=a;return!!o})),Y={activeThumbRef:y,color:S(t,"color"),decimals:N,disabled:j,direction:S(t,"direction"),elevation:S(t,"elevation"),hasLabels:X,isReversed:b,indexFromEnd:_,min:f,max:k,mousePressed:E,numTicks:T,onSliderMousedown:c,onSliderTouchstart:U,parsedTicks:A,parseMouseMove:r,position:s,readonly:S(t,"readonly"),rounded:S(t,"rounded"),roundValue:F,showTicks:D,startOffset:p,step:V,thumbSize:O,thumbColor:z,thumbLabel:S(t,"thumbLabel"),ticks:S(t,"ticks"),tickSize:K,trackColor:L,trackContainerRef:R,trackFillColor:P,trackSize:q,vertical:w};return pe(W,Y),Y},ze=Q({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},...se()},"VSliderThumb"),Be=oe()({name:"VSliderThumb",directives:{Ripple:ye},props:ze(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n,emit:i}=t;const u=ne(W),{isRtl:m,rtlClasses:h}=le();if(!u)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:g,step:b,disabled:w,thumbSize:_,thumbLabel:f,direction:k,isReversed:V,vertical:N,readonly:F,elevation:O,mousePressed:K,decimals:q,indexFromEnd:T}=u,j=l(()=>w.value?void 0:O.value),{elevationClasses:z}=Se(j),{textColorClasses:L,textColorStyles:P}=ge(g),{pageup:E,pagedown:p,end:R,home:y,left:r,right:C,down:x,up:d}=_e,B=[E,p,R,y,r,C,x,d],I=l(()=>b.value?[1,2,3]:[1,5,10]);function $(c,s){if(!B.includes(c.key))return;c.preventDefault();const D=b.value||.1,A=(e.max-e.min)/D;if([r,C,x,d].includes(c.key)){const Y=(N.value?[m.value?r:C,V.value?x:d]:T.value!==m.value?[r,d]:[C,d]).includes(c.key)?1:-1,a=c.shiftKey?2:c.ctrlKey?1:0;s=s+Y*D*I.value[a]}else if(c.key===y)s=e.min;else if(c.key===R)s=e.max;else{const X=c.key===p?1:-1;s=s-X*D*(A>100?A/10:10)}return Math.max(e.min,Math.min(e.max,s))}function U(c){const s=$(c,e.modelValue);s!=null&&i("update:modelValue",s)}return ie(()=>{const c=M(T.value?100-e.position:e.position,"%");return v("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&K.value},e.class,h.value],style:[{"--v-slider-thumb-position":c,"--v-slider-thumb-size":M(_.value)},e.style],role:"slider",tabindex:w.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!F.value,"aria-orientation":k.value,onKeydown:F.value?void 0:U},[v("div",{class:["v-slider-thumb__surface",L.value,z.value],style:{...P.value}},null),te(v("div",{class:["v-slider-thumb__ripple",L.value],style:P.value},null),[[we("ripple"),e.ripple,null,{circle:!0,center:!0}]]),v(Te,{origin:"bottom center"},{default:()=>{var s;return[te(v("div",{class:"v-slider-thumb__label-container"},[v("div",{class:["v-slider-thumb__label"]},[v("div",null,[((s=n["thumb-label"])==null?void 0:s.call(n,{modelValue:e.modelValue}))??e.modelValue.toFixed(b.value?q.value:1)])])]),[[Ce,f.value&&e.focused||f.value==="always"]])]}})])}),{}}}),Le=Q({start:{type:Number,required:!0},stop:{type:Number,required:!0},...se()},"VSliderTrack"),De=oe()({name:"VSliderTrack",props:Le(),emits:{},setup(e,t){let{slots:n}=t;const i=ne(W);if(!i)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:u,parsedTicks:m,rounded:h,showTicks:g,tickSize:b,trackColor:w,trackFillColor:_,trackSize:f,vertical:k,min:V,max:N,indexFromEnd:F}=i,{roundedClasses:O}=Ve(h),{backgroundColorClasses:K,backgroundColorStyles:q}=ae(_),{backgroundColorClasses:T,backgroundColorStyles:j}=ae(w),z=l(()=>`inset-${k.value?"block":"inline"}-${F.value?"end":"start"}`),L=l(()=>k.value?"height":"width"),P=l(()=>({[z.value]:"0%",[L.value]:"100%"})),E=l(()=>e.stop-e.start),p=l(()=>({[z.value]:M(e.start,"%"),[L.value]:M(E.value,"%")})),R=l(()=>g.value?(k.value?m.value.slice().reverse():m.value).map((r,C)=>{var d;const x=r.value!==V.value&&r.value!==N.value?M(r.position,"%"):void 0;return v("div",{key:r.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":r.position>=e.start&&r.position<=e.stop,"v-slider-track__tick--first":r.value===V.value,"v-slider-track__tick--last":r.value===N.value}],style:{[z.value]:x}},[(r.label||n["tick-label"])&&v("div",{class:"v-slider-track__tick-label"},[((d=n["tick-label"])==null?void 0:d.call(n,{tick:r,index:C}))??r.label])])}):[]);return ie(()=>v("div",{class:["v-slider-track",O.value,e.class],style:[{"--v-slider-track-size":M(f.value),"--v-slider-tick-size":M(b.value)},e.style]},[v("div",{class:["v-slider-track__background",T.value,{"v-slider-track__background--opacity":!!u.value||!_.value}],style:{...P.value,...j.value}},null),v("div",{class:["v-slider-track__fill",K.value],style:{...p.value,...q.value}},null),g.value&&v("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":g.value==="always"}]},[R.value])])),{}}});export{De as V,Pe as a,Be as b,xe as g,Me as m,Ne as u};