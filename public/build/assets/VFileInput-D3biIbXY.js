import{m as W,f as X,V as Y}from"./VField-BAih5TUr.js";import{m as Z,V as N}from"./VInput-B3yaOjYZ.js";import{u as ee}from"./form-KXPpmlAe.js";import{f as te}from"./forwardRefs-C-GTDzx5.js";import{aK as le,cf as ne,aN as ae,bw as oe,aO as ue,a5 as r,cA as M,r as V,w as ie,aT as re,cb as se,b as o,s as h,F as C,aA as ce,cd as de}from"./main-DYSjY2V3.js";import{V as fe}from"./VChip-DOF_MDg3.js";import{V as ve}from"./VCounter-j5sdlGNz.js";const me=le({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...Z({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ne(e).every(f=>f!=null&&typeof f=="object")},...W({clearable:!0})},"VFileInput"),Ie=ae()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:$,emit:g,slots:n}=f;const{t:k}=oe(),a=ue(e,"modelValue"),{isFocused:v,focus:D,blur:x}=ee(e),b=r(()=>typeof e.showSize!="boolean"?e.showSize:void 0),I=r(()=>(a.value??[]).reduce((t,l)=>{let{size:s=0}=l;return t+s},0)),F=r(()=>M(I.value,b.value)),p=r(()=>(a.value??[]).map(t=>{const{name:l="",size:s=0}=t;return e.showSize?`${l} (${M(s,b.value)})`:l})),j=r(()=>{var l;const t=((l=a.value)==null?void 0:l.length)??0;return e.showSize?k(e.counterSizeString,t,F.value):k(e.counterString,t)}),S=V(),P=V(),i=V(),E=r(()=>v.value||e.active),w=r(()=>["plain","underlined"].includes(e.variant));function y(){var t;i.value!==document.activeElement&&((t=i.value)==null||t.focus()),v.value||D()}function O(t){z(t)}function T(t){g("mousedown:control",t)}function z(t){var l;(l=i.value)==null||l.click(),g("click:control",t)}function U(t){t.stopPropagation(),y(),ce(()=>{a.value=[],de(e["onClick:clear"],t)})}return ie(a,t=>{(!Array.isArray(t)||!t.length)&&i.value&&(i.value.value="")}),re(()=>{const t=!!(n.counter||e.counter),l=!!(t||n.details),[s,K]=se($),{modelValue:pe,...L}=N.filterProps(e),_=X(e);return o(N,h({ref:S,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":w.value},e.class],style:e.style,"onClick:prepend":O},s,L,{centerAffix:!w.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:A,isReadonly:R,isValid:q}=c;return o(Y,h({ref:P,"prepend-icon":e.prependIcon,onMousedown:T,onClick:z,"onClick:clear":U,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},_,{id:m.value,active:E.value||A.value,dirty:A.value,disabled:d.value,focused:v.value,error:q.value===!1}),{...n,default:G=>{var B;let{props:{class:H,...J}}=G;return o(C,null,[o("input",h({ref:i,type:"file",readonly:R.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:u=>{u.stopPropagation(),R.value&&u.preventDefault(),y()},onChange:u=>{if(!u.target)return;const Q=u.target;a.value=[...Q.files??[]]},onFocus:y,onBlur:x},J,K),null),o("div",{class:H},[!!((B=a.value)!=null&&B.length)&&(n.selection?n.selection({fileNames:p.value,totalBytes:I.value,totalBytesReadable:F.value}):e.chips?p.value.map(u=>o(fe,{key:u,size:"small",color:e.color},{default:()=>[u]})):p.value.join(", "))])])}})},details:l?c=>{var m,d;return o(C,null,[(m=n.details)==null?void 0:m.call(n,c),t&&o(C,null,[o("span",null,null),o(ve,{active:!!((d=a.value)!=null&&d.length),value:j.value},n.counter)])])}:void 0})}),te({},S,P,i)}});export{Ie as V};
