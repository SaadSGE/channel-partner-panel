import{m as g,V as t}from"./VCheckboxBtn-CqaF7eTX.js";import{m as A,V as l}from"./VInput-Ba_C3A5C.js";import{u as F}from"./form-Czg29FUN.js";import{aK as I,bh as B,aN as U,aO as N,aQ as R,a5 as D,aT as K,cb as M,b as u,s as r}from"./main-cX0WqYxM.js";const O=I({...A(),...B(g(),["inline"])},"VCheckbox"),q=U()({name:"VCheckbox",inheritAttrs:!1,props:O(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,c){let{attrs:d,slots:a}=c;const s=N(e,"modelValue"),{isFocused:n,focus:i,blur:m}=F(e),V=R(),b=D(()=>e.id||`checkbox-${V}`);return K(()=>{const[p,f]=M(d),k=l.filterProps(e),v=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},p,k,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:b.value,focused:n.value,style:e.style}),{...a,default:o=>{let{id:h,messagesId:x,isDisabled:P,isReadonly:C}=o;return u(t,r(v,{id:h.value,"aria-describedby":x.value,disabled:P.value,readonly:C.value},f,{modelValue:s.value,"onUpdate:modelValue":y=>s.value=y,onFocus:i,onBlur:m}),a)}})}),{}}});export{q as V};
