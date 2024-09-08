import{aL as m,aW as b,aM as F,b1 as I,aO as P,aU as M,b as V,bx as L,a1 as x,ch as B,aP as g,a5 as v,as as $,r as p,w,P as A,a0 as E,V as O}from"./main-Ckv26Emd.js";const R=m({text:String,onClick:b(),...F(),...I()},"VLabel"),K=P()({name:"VLabel",props:R(),setup(a,r){let{slots:s}=r;return M(()=>{var i;return V("label",{class:["v-label",{"v-label--clickable":!!a.onClick},a.class],style:a.style,onClick:a.onClick},[a.text,(i=s.default)==null?void 0:i.call(s)])}),{}}});function N(a){const{t:r}=L();function s(i){let{name:o}=i;const e={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],c=a[`onClick:${o}`],d=c&&e?r(`$vuetify.input.${e}`,a.label??""):void 0;return V(x,{icon:a[`${o}Icon`],"aria-label":d,onClick:c},null)}return{InputIcon:s}}const U=m({focused:Boolean,"onUpdate:focused":b()},"focus");function j(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();const s=g(a,"focused"),i=v(()=>({[`${r}--focused`]:s.value}));function o(){s.value=!0}function e(){s.value=!1}return{focusClasses:i,isFocused:s,focus:o,blur:e}}const y=Symbol.for("vuetify:form"),D=m({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function T(a){const r=g(a,"modelValue"),s=v(()=>a.disabled),i=v(()=>a.readonly),o=$(!1),e=p([]),c=p([]);async function d(){const n=[];let t=!0;c.value=[],o.value=!0;for(const u of e.value){const l=await u.validate();if(l.length>0&&(t=!1,n.push({id:u.id,errorMessages:l})),!t&&a.fastFail)break}return c.value=n,o.value=!1,{valid:t,errors:c.value}}function k(){e.value.forEach(n=>n.reset())}function h(){e.value.forEach(n=>n.resetValidation())}return w(e,()=>{let n=0,t=0;const u=[];for(const l of e.value)l.isValid===!1?(t++,u.push({id:l.id,errorMessages:l.errorMessages})):l.isValid===!0&&n++;c.value=u,r.value=t>0?!1:n===e.value.length?!0:null},{deep:!0}),A(y,{register:n=>{let{id:t,validate:u,reset:l,resetValidation:f}=n;e.value.some(C=>C.id===t),e.value.push({id:t,validate:u,reset:l,resetValidation:f,isValid:null,errorMessages:[]})},unregister:n=>{e.value=e.value.filter(t=>t.id!==n)},update:(n,t,u)=>{const l=e.value.find(f=>f.id===n);l&&(l.isValid=t,l.errorMessages=u)},isDisabled:s,isReadonly:i,isValidating:o,isValid:r,items:e,validateOn:E(a,"validateOn")}),{errors:c,isDisabled:s,isReadonly:i,isValidating:o,isValid:r,items:e,validate:d,reset:k,resetValidation:h}}function W(){return O(y,null)}export{K as V,N as a,W as b,D as c,T as d,U as m,j as u};
