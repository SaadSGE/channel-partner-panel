import{m as C,V as p,a as O,b as $}from"./VSelectionControl-xLF5omUn.js";import{aK as V,aN as f,aT as b,b as a,s as i,bh as h,aS as c,aQ as A,a5 as F,aO as N,cb as U,F as x}from"./main-C3aczJNT.js";import{m as T,V as m}from"./VInput-DvThVAav.js";import{V as D}from"./form-DXUotdvJ.js";const K=V({...C({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),w=f()({name:"VRadio",props:K(),setup(e,l){let{slots:s}=l;return b(()=>a(p,i(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}}),L=V({height:{type:[Number,String],default:"auto"},...T(),...h(O(),["multiple"]),trueIcon:{type:c,default:"$radioOn"},falseIcon:{type:c,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),z=f()({name:"VRadioGroup",inheritAttrs:!1,props:L(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:s,slots:o}=l;const y=A(),n=F(()=>e.id||`radio-group-${y}`),t=N(e,"modelValue");return b(()=>{const[v,I]=U(s),g=m.filterProps(e),P=p.filterProps(e),r=o.label?o.label({label:e.label,props:{for:n.value}}):e.label;return a(m,i({class:["v-radio-group",e.class],style:e.style},v,g,{modelValue:t.value,"onUpdate:modelValue":u=>t.value=u,id:n.value}),{...o,default:u=>{let{id:d,messagesId:R,isDisabled:S,isReadonly:G}=u;return a(x,null,[r&&a(D,{id:d.value},{default:()=>[r]}),a($,i(P,{id:d.value,"aria-describedby":R.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:S.value,readonly:G.value,"aria-labelledby":r?d.value:void 0,multiple:!1},I,{modelValue:t.value,"onUpdate:modelValue":k=>t.value=k}),o)])}})}),{}}});export{z as V,w as a};
