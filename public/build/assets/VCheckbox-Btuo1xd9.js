import{m as g,V as t}from"./VCheckboxBtn-Cf31ky1q.js";import{m as A,V as l}from"./VInput-CrRB8sjj.js";import{u as F}from"./form-ByD6MPa6.js";import{aH as I,be as B,aK as U,aL as N,aN as R,a4 as q,aQ as D,c8 as H,b as u,q as r}from"./main--Sxm5_s2.js";const K=I({...A(),...B(g(),["inline"])},"VCheckbox"),j=U()({name:"VCheckbox",inheritAttrs:!1,props:K(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,c){let{attrs:d,slots:a}=c;const o=N(e,"modelValue"),{isFocused:n,focus:i,blur:m}=F(e),V=R(),b=q(()=>e.id||`checkbox-${V}`);return D(()=>{const[p,f]=H(d),k=l.filterProps(e),v=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},p,k,{modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,id:b.value,focused:n.value,style:e.style}),{...a,default:s=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C}=s;return u(t,r(v,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},f,{modelValue:o.value,"onUpdate:modelValue":y=>o.value=y,onFocus:i,onBlur:m}),a)}})}),{}}});export{j as V};
