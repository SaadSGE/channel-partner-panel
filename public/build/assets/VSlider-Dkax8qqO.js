import{m as R,u as I,a as N,V as w,b as L}from"./VSliderTrack-BofyfXp2.js";import{m as A,V}from"./VInput-Ba_C3A5C.js";import{m as B,u as E,V as K}from"./form-Czg29FUN.js";import{aK as O,aN as U,r as $,b_ as j,aO as q,a5 as z,aT as D,b as d,F as G,s as H}from"./main-cX0WqYxM.js";const J=O({...B(),...R(),...A(),modelValue:{type:[Number,String],default:0}},"VSlider"),Z=U()({name:"VSlider",props:J(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,S){let{slots:a,emit:v}=S;const m=$(),{rtlClasses:p}=j(),i=I(e),s=q(e,"modelValue",void 0,l=>i.roundValue(l??i.min.value)),{min:h,max:k,mousePressed:P,roundValue:c,onSliderMousedown:y,onSliderTouchstart:F,trackContainerRef:g,position:x,hasLabels:T,readonly:b}=N({props:e,steps:i,onSliderStart:()=>{v("start",s.value)},onSliderEnd:l=>{let{value:t}=l;const u=c(t);s.value=u,v("end",u)},onSliderMove:l=>{let{value:t}=l;return s.value=c(t)},getActiveThumb:()=>{var l;return(l=m.value)==null?void 0:l.$el}}),{isFocused:o,focus:_,blur:C}=E(e),f=z(()=>x(s.value));return D(()=>{const l=V.filterProps(e),t=!!(e.label||a.label||a.prepend);return d(V,H({class:["v-slider",{"v-slider--has-labels":!!a["tick-label"]||T.value,"v-slider--focused":o.value,"v-slider--pressed":P.value,"v-slider--disabled":e.disabled},p.value,e.class],style:e.style},l,{focused:o.value}),{...a,prepend:t?u=>{var n,r;return d(G,null,[((n=a.label)==null?void 0:n.call(a,u))??(e.label?d(K,{id:u.id.value,class:"v-slider__label",text:e.label},null):void 0),(r=a.prepend)==null?void 0:r.call(a,u)])}:void 0,default:u=>{let{id:n,messagesId:r}=u;return d("div",{class:"v-slider__container",onMousedown:b.value?void 0:y,onTouchstartPassive:b.value?void 0:F},[d("input",{id:n.value,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:s.value},null),d(w,{ref:g,start:0,stop:f.value},{"tick-label":a["tick-label"]}),d(L,{ref:m,"aria-describedby":r.value,focused:o.value,min:h.value,max:k.value,modelValue:s.value,"onUpdate:modelValue":M=>s.value=M,position:f.value,elevation:e.elevation,onFocus:_,onBlur:C,ripple:e.ripple},{"thumb-label":a["thumb-label"]})])}})}),{}}});export{Z as V};
