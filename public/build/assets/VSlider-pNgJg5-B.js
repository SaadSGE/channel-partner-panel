import{m as _,u as w,a as I,V as L,b as N}from"./VSliderTrack-D4gtiFDx.js";import{m as z,V}from"./VInput-DiRMaw8N.js";import{m as A,u as B,V as E}from"./form-DyBPD-OY.js";import{at as O,aw as U,r as $,bO as j,az as q,a5 as D,aF as G,b as d,F as H,s as J}from"./main-DliaIfAl.js";const K=O({...A(),..._(),...z(),modelValue:{type:[Number,String],default:0}},"VSlider"),Z=U()({name:"VSlider",props:K(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,S){let{slots:a,emit:v}=S;const m=$(),{rtlClasses:p}=j(),i=w(e),s=q(e,"modelValue",void 0,l=>i.roundValue(l??i.min.value)),{min:h,max:k,mousePressed:P,roundValue:c,onSliderMousedown:y,onSliderTouchstart:F,trackContainerRef:g,position:x,hasLabels:T,readonly:b}=I({props:e,steps:i,onSliderStart:()=>{v("start",s.value)},onSliderEnd:l=>{let{value:t}=l;const u=c(t);s.value=u,v("end",u)},onSliderMove:l=>{let{value:t}=l;return s.value=c(t)},getActiveThumb:()=>{var l;return(l=m.value)==null?void 0:l.$el}}),{isFocused:o,focus:C,blur:M}=B(e),f=D(()=>x(s.value));return G(()=>{const l=V.filterProps(e),t=!!(e.label||a.label||a.prepend);return d(V,J({class:["v-slider",{"v-slider--has-labels":!!a["tick-label"]||T.value,"v-slider--focused":o.value,"v-slider--pressed":P.value,"v-slider--disabled":e.disabled},p.value,e.class],style:e.style},l,{focused:o.value}),{...a,prepend:t?u=>{var n,r;return d(H,null,[((n=a.label)==null?void 0:n.call(a,u))??(e.label?d(E,{id:u.id.value,class:"v-slider__label",text:e.label},null):void 0),(r=a.prepend)==null?void 0:r.call(a,u)])}:void 0,default:u=>{let{id:n,messagesId:r}=u;return d("div",{class:"v-slider__container",onMousedown:b.value?void 0:y,onTouchstartPassive:b.value?void 0:F},[d("input",{id:n.value,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:s.value},null),d(L,{ref:g,start:0,stop:f.value},{"tick-label":a["tick-label"]}),d(N,{ref:m,"aria-describedby":r.value,focused:o.value,min:h.value,max:k.value,modelValue:s.value,"onUpdate:modelValue":R=>s.value=R,position:f.value,elevation:e.elevation,onFocus:C,onBlur:M,ripple:e.ripple},{"thumb-label":a["thumb-label"]})])}})}),{}}});export{Z as V};