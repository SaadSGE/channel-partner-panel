import{m as V,V as o}from"./VSelectionControl-D3be63WJ.js";import{aK as f,aS as v,aN as I,aO as c,a5 as l,aT as b,bh as h,b as k,s as x}from"./main-0xwlEiGX.js";const C=f({indeterminate:Boolean,indeterminateIcon:{type:v,default:"$checkboxIndeterminate"},...V({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),B=I()({name:"VCheckboxBtn",props:C(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{slots:s}=r;const t=c(e,"indeterminate"),a=c(e,"modelValue");function u(n){t.value&&(t.value=!1)}const i=l(()=>t.value?e.indeterminateIcon:e.falseIcon),m=l(()=>t.value?e.indeterminateIcon:e.trueIcon);return b(()=>{const n=h(o.filterProps(e),["modelValue"]);return k(o,x(n,{modelValue:a.value,"onUpdate:modelValue":[d=>a.value=d,u],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:m.value,"aria-checked":t.value?"mixed":void 0}),s)}),{}}});export{B as V,C as m};
