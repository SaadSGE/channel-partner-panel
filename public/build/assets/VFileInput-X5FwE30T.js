import{m as W,b as X,u as Y,c as $,f as Z,d as ee,e as le}from"./VTextField-BE_Olmik.js";import{f as te}from"./forwardRefs-D9kYFWgq.js";import{a9 as ne,bV as ae,ab as oe,at as ue,ac as ie,a5 as s,b$ as M,r as h,w as se,ae as re,aC as ce,b as o,s as C,F as V,aF as de,aG as fe}from"./main-CSiErTrC.js";import{V as ve}from"./VChip-DmYAq59v.js";const me=ne({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...W({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ae(e).every(f=>f!=null&&typeof f=="object")},...X({clearable:!0})},"VFileInput"),ge=oe()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:N,emit:g,slots:n}=f;const{t:b}=ue(),a=ie(e,"modelValue"),{isFocused:v,focus:D,blur:x}=Y(e),k=s(()=>typeof e.showSize!="boolean"?e.showSize:void 0),F=s(()=>(a.value??[]).reduce((l,t)=>{let{size:r=0}=t;return l+r},0)),I=s(()=>M(F.value,k.value)),p=s(()=>(a.value??[]).map(l=>{const{name:t="",size:r=0}=l;return e.showSize?`${t} (${M(r,k.value)})`:t})),j=s(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?b(e.counterSizeString,l,I.value):b(e.counterString,l)}),S=h(),P=h(),i=h(),E=s(()=>v.value||e.active),w=s(()=>["plain","underlined"].includes(e.variant));function y(){var l;i.value!==document.activeElement&&((l=i.value)==null||l.focus()),v.value||D()}function U(l){z(l)}function G(l){g("mousedown:control",l)}function z(l){var t;(t=i.value)==null||t.click(),g("click:control",l)}function L(l){l.stopPropagation(),y(),de(()=>{a.value=[],fe(e["onClick:clear"],l)})}return se(a,l=>{(!Array.isArray(l)||!l.length)&&i.value&&(i.value.value="")}),re(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[r,O]=ce(N),{modelValue:pe,...T}=$.filterProps(e),_=Z(e);return o($,C({ref:S,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":w.value},e.class],style:e.style,"onClick:prepend":U},r,T,{centerAffix:!w.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:R,isReadonly:A,isValid:q}=c;return o(ee,C({ref:P,"prepend-icon":e.prependIcon,onMousedown:G,onClick:z,"onClick:clear":L,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},_,{id:m.value,active:E.value||R.value,dirty:R.value,disabled:d.value,focused:v.value,error:q.value===!1}),{...n,default:H=>{var B;let{props:{class:J,...K}}=H;return o(V,null,[o("input",C({ref:i,type:"file",readonly:A.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:u=>{u.stopPropagation(),A.value&&u.preventDefault(),y()},onChange:u=>{if(!u.target)return;const Q=u.target;a.value=[...Q.files??[]]},onFocus:y,onBlur:x},K,O),null),o("div",{class:J},[!!((B=a.value)!=null&&B.length)&&(n.selection?n.selection({fileNames:p.value,totalBytes:F.value,totalBytesReadable:I.value}):e.chips?p.value.map(u=>o(ve,{key:u,size:"small",color:e.color},{default:()=>[u]})):p.value.join(", "))])])}})},details:t?c=>{var m,d;return o(V,null,[(m=n.details)==null?void 0:m.call(n,c),l&&o(V,null,[o("span",null,null),o(le,{active:!!((d=a.value)!=null&&d.length),value:j.value},n.counter)])])}:void 0})}),te({},S,P,i)}});export{ge as V};