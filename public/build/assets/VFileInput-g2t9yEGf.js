import{m as K,a as X,u as Y,b as $,f as Z,c as ee,d as le}from"./VInput-DkaOtTDM.js";import{f as te}from"./forwardRefs-D3j0TLhE.js";import{ab as ne,bW as ae,ad as oe,bc as ue,ae as ie,a6 as s,b$ as M,r as b,w as se,ag as re,bQ as ce,b as o,s as h,F as g,b3 as de,bS as fe}from"./main-C3zi_SKQ.js";import{V as ve}from"./VChip-Drmygec1.js";const me=ne({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...K({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ae(e).every(f=>f!=null&&typeof f=="object")},...X({clearable:!0})},"VFileInput"),Ce=oe()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:N,emit:C,slots:n}=f;const{t:V}=ue(),a=ie(e,"modelValue"),{isFocused:v,focus:D,blur:x}=Y(e),k=s(()=>typeof e.showSize!="boolean"?e.showSize:void 0),I=s(()=>(a.value??[]).reduce((l,t)=>{let{size:r=0}=t;return l+r},0)),S=s(()=>M(I.value,k.value)),p=s(()=>(a.value??[]).map(l=>{const{name:t="",size:r=0}=l;return e.showSize?`${t} (${M(r,k.value)})`:t})),j=s(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?V(e.counterSizeString,l,S.value):V(e.counterString,l)}),F=b(),P=b(),i=b(),E=s(()=>v.value||e.active),w=s(()=>["plain","underlined"].includes(e.variant));function y(){var l;i.value!==document.activeElement&&((l=i.value)==null||l.focus()),v.value||D()}function U(l){z(l)}function L(l){C("mousedown:control",l)}function z(l){var t;(t=i.value)==null||t.click(),C("click:control",l)}function O(l){l.stopPropagation(),y(),de(()=>{a.value=[],fe(e["onClick:clear"],l)})}return se(a,l=>{(!Array.isArray(l)||!l.length)&&i.value&&(i.value.value="")}),re(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[r,Q]=ce(N),{modelValue:pe,...T}=$.filterProps(e),W=Z(e);return o($,h({ref:F,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":w.value},e.class],style:e.style,"onClick:prepend":U},r,T,{centerAffix:!w.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:R,isReadonly:A,isValid:_}=c;return o(ee,h({ref:P,"prepend-icon":e.prependIcon,onMousedown:L,onClick:z,"onClick:clear":O,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},W,{id:m.value,active:E.value||R.value,dirty:R.value,disabled:d.value,focused:v.value,error:_.value===!1}),{...n,default:q=>{var B;let{props:{class:G,...H}}=q;return o(g,null,[o("input",h({ref:i,type:"file",readonly:A.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:u=>{u.stopPropagation(),A.value&&u.preventDefault(),y()},onChange:u=>{if(!u.target)return;const J=u.target;a.value=[...J.files??[]]},onFocus:y,onBlur:x},H,Q),null),o("div",{class:G},[!!((B=a.value)!=null&&B.length)&&(n.selection?n.selection({fileNames:p.value,totalBytes:I.value,totalBytesReadable:S.value}):e.chips?p.value.map(u=>o(ve,{key:u,size:"small",color:e.color},{default:()=>[u]})):p.value.join(", "))])])}})},details:t?c=>{var m,d;return o(g,null,[(m=n.details)==null?void 0:m.call(n,c),l&&o(g,null,[o("span",null,null),o(le,{active:!!((d=a.value)!=null&&d.length),value:j.value},n.counter)])])}:void 0})}),te({},F,P,i)}});export{Ce as V};
