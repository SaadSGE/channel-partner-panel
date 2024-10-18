import{m as W,f as X,V as Y}from"./VField-CZ4Dqn0H.js";import{m as Z,V as M}from"./VInput-Cn4Qvgsy.js";import{u as ee}from"./form-BHyKE6Zb.js";import{f as te}from"./forwardRefs-C-GTDzx5.js";import{at as le,c4 as ne,aw as ae,bj as oe,az as ue,a5 as r,cr as N,r as V,w as ie,aF as re,c0 as se,b as o,s as h,F as C,be as ce,c2 as de}from"./main-DfnAMXlJ.js";import{V as fe}from"./VChip-BBav-smp.js";import{V as ve}from"./VCounter-B9wutzdY.js";const me=le({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...Z({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ne(e).every(f=>f!=null&&typeof f=="object")},...W({clearable:!0})},"VFileInput"),Fe=ae()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:$,emit:g,slots:n}=f;const{t:k}=oe(),a=ue(e,"modelValue"),{isFocused:v,focus:D,blur:j}=ee(e),b=r(()=>typeof e.showSize!="boolean"?e.showSize:void 0),F=r(()=>(a.value??[]).reduce((t,l)=>{let{size:s=0}=l;return t+s},0)),I=r(()=>N(F.value,b.value)),p=r(()=>(a.value??[]).map(t=>{const{name:l="",size:s=0}=t;return e.showSize?`${l} (${N(s,b.value)})`:l})),x=r(()=>{var l;const t=((l=a.value)==null?void 0:l.length)??0;return e.showSize?k(e.counterSizeString,t,I.value):k(e.counterString,t)}),S=V(),P=V(),i=V(),E=r(()=>v.value||e.active),w=r(()=>["plain","underlined"].includes(e.variant));function y(){var t;i.value!==document.activeElement&&((t=i.value)==null||t.focus()),v.value||D()}function U(t){z(t)}function L(t){g("mousedown:control",t)}function z(t){var l;(l=i.value)==null||l.click(),g("click:control",t)}function O(t){t.stopPropagation(),y(),ce(()=>{a.value=[],de(e["onClick:clear"],t)})}return ie(a,t=>{(!Array.isArray(t)||!t.length)&&i.value&&(i.value.value="")}),re(()=>{const t=!!(n.counter||e.counter),l=!!(t||n.details),[s,T]=se($),{modelValue:pe,..._}=M.filterProps(e),q=X(e);return o(M,h({ref:S,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":w.value},e.class],style:e.style,"onClick:prepend":U},s,_,{centerAffix:!w.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:R,isReadonly:A,isValid:G}=c;return o(Y,h({ref:P,"prepend-icon":e.prependIcon,onMousedown:L,onClick:z,"onClick:clear":O,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},q,{id:m.value,active:E.value||R.value,dirty:R.value,disabled:d.value,focused:v.value,error:G.value===!1}),{...n,default:H=>{var B;let{props:{class:J,...K}}=H;return o(C,null,[o("input",h({ref:i,type:"file",readonly:A.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:u=>{u.stopPropagation(),A.value&&u.preventDefault(),y()},onChange:u=>{if(!u.target)return;const Q=u.target;a.value=[...Q.files??[]]},onFocus:y,onBlur:j},K,T),null),o("div",{class:J},[!!((B=a.value)!=null&&B.length)&&(n.selection?n.selection({fileNames:p.value,totalBytes:F.value,totalBytesReadable:I.value}):e.chips?p.value.map(u=>o(fe,{key:u,size:"small",color:e.color},{default:()=>[u]})):p.value.join(", "))])])}})},details:l?c=>{var m,d;return o(C,null,[(m=n.details)==null?void 0:m.call(n,c),t&&o(C,null,[o("span",null,null),o(ve,{active:!!((d=a.value)!=null&&d.length),value:x.value},n.counter)])])}:void 0})}),te({},S,P,i)}});export{Fe as V};
