import{m as C,V as p,a as $,b as A}from"./VSelectionControl-RP8APfRy.js";import{aH as V,aK as f,aQ as b,b as a,q as i,be as O,aP as c,aN as h,a4 as F,aL as N,c8 as U,F as x}from"./main--Sxm5_s2.js";import{m as L,V as m}from"./VInput-CrRB8sjj.js";import{V as q}from"./form-ByD6MPa6.js";const D=V({...C({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),j=f()({name:"VRadio",props:D(),setup(e,l){let{slots:s}=l;return b(()=>a(p,i(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}}),H=V({height:{type:[Number,String],default:"auto"},...L(),...O($(),["multiple"]),trueIcon:{type:c,default:"$radioOn"},falseIcon:{type:c,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),w=f()({name:"VRadioGroup",inheritAttrs:!1,props:H(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:s,slots:o}=l;const y=h(),n=F(()=>e.id||`radio-group-${y}`),t=N(e,"modelValue");return b(()=>{const[v,I]=U(s),P=m.filterProps(e),g=p.filterProps(e),r=o.label?o.label({label:e.label,props:{for:n.value}}):e.label;return a(m,i({class:["v-radio-group",e.class],style:e.style},v,P,{modelValue:t.value,"onUpdate:modelValue":u=>t.value=u,id:n.value}),{...o,default:u=>{let{id:d,messagesId:R,isDisabled:G,isReadonly:S}=u;return a(x,null,[r&&a(q,{id:d.value},{default:()=>[r]}),a(A,i(g,{id:d.value,"aria-describedby":R.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:G.value,readonly:S.value,"aria-labelledby":r?d.value:void 0,multiple:!1},I,{modelValue:t.value,"onUpdate:modelValue":k=>t.value=k}),o)])}})}),{}}});export{w as V,j as a};
