import{m as C,V as p,a as O,b as $}from"./VSelectionControl-xPyoBWpO.js";import{aL as V,aO as f,aU as b,b as a,s as i,bi as A,aT as c,aR as U,a5 as h,aP as F,cc as x,F as L}from"./main-CGWwRiT_.js";import{m as N,V as m}from"./VInput-b5mEzrmC.js";import{V as T}from"./form-DCP4nY8j.js";const D=V({...C({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),B=f()({name:"VRadio",props:D(),setup(e,l){let{slots:s}=l;return b(()=>a(p,i(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}}),M=V({height:{type:[Number,String],default:"auto"},...N(),...A(O(),["multiple"]),trueIcon:{type:c,default:"$radioOn"},falseIcon:{type:c,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),E=f()({name:"VRadioGroup",inheritAttrs:!1,props:M(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:s,slots:o}=l;const y=U(),n=h(()=>e.id||`radio-group-${y}`),t=F(e,"modelValue");return b(()=>{const[v,I]=x(s),P=m.filterProps(e),R=p.filterProps(e),r=o.label?o.label({label:e.label,props:{for:n.value}}):e.label;return a(m,i({class:["v-radio-group",e.class],style:e.style},v,P,{modelValue:t.value,"onUpdate:modelValue":u=>t.value=u,id:n.value}),{...o,default:u=>{let{id:d,messagesId:g,isDisabled:G,isReadonly:S}=u;return a(L,null,[r&&a(T,{id:d.value},{default:()=>[r]}),a($,i(R,{id:d.value,"aria-describedby":g.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:G.value,readonly:S.value,"aria-labelledby":r?d.value:void 0,multiple:!1},I,{modelValue:t.value,"onUpdate:modelValue":k=>t.value=k}),o)])}})}),{}}});export{E as V,B as a};
