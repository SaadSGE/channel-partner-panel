import{m as L,V as N}from"./VField-Ccw4JNiL.js";import{a as j}from"./VOverlay-DAfdTtIn.js";import{aL as q,aZ as K,db as T,aO as z,b9 as M,aP as U,bx as Z,a5 as r,r as p,bk as $,w as g,aB as E,aU as G,cc as H,b as s,F as J,s as h,ae as Q,bl as k}from"./main-CGWwRiT_.js";import{m as W,u as X}from"./form-DCP4nY8j.js";const Y=q({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"number"},...K(),...W(),...T(L({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),ue=z()({name:"VOtpInput",props:Y(),emits:{finish:e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,V){let{attrs:F,emit:x,slots:d}=V;const{dimensionStyles:A}=M(e),{isFocused:y,focus:P,blur:w}=X(e),o=U(e,"modelValue","",t=>String(t).split(""),t=>t.join("")),{t:D}=Z(),f=r(()=>Number(e.length)),_=r(()=>Array(f.value).fill(0)),i=p(-1),m=p(),c=p([]),b=r(()=>c.value[i.value]);function B(){if(e.type==="number"&&/[^0-9]/g.test(b.value.value)){b.value.value="";return}const t=o.value.slice(),a=b.value.value;t[i.value]=a;let l=null;i.value>o.value.length?l=o.value.length+1:i.value+1!==f.value&&(l="next"),o.value=t,l&&k(m.value,l)}function C(t){const a=o.value.slice(),l=i.value;let u=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(t.key)&&(t.preventDefault(),t.key==="ArrowLeft"?u="prev":t.key==="ArrowRight"?u="next":["Backspace","Delete"].includes(t.key)&&(a[i.value]="",o.value=a,i.value>0&&t.key==="Backspace"?u="prev":requestAnimationFrame(()=>{var n;(n=c.value[l])==null||n.select()})),requestAnimationFrame(()=>{u!=null&&k(m.value,u)}))}function I(t,a){var l,u;a.preventDefault(),a.stopPropagation(),o.value=(((l=a==null?void 0:a.clipboardData)==null?void 0:l.getData("Text"))??"").split(""),(u=c.value)==null||u[t].blur()}function S(){o.value=[]}function O(t,a){P(),i.value=a}function R(){w(),i.value=-1}return $({VField:{color:r(()=>e.color),bgColor:r(()=>e.color),baseColor:r(()=>e.baseColor),disabled:r(()=>e.disabled),error:r(()=>e.error),variant:r(()=>e.variant)}},{scoped:!0}),g(o,t=>{t.length===f.value&&x("finish",t.join(""))},{deep:!0}),g(i,t=>{t<0||E(()=>{var a;(a=c.value[t])==null||a.select()})}),G(()=>{var l;const[t,a]=H(F);return s("div",h({class:["v-otp-input",{"v-otp-input--divided":!!e.divider},e.class],style:[e.style]},t),[s("div",{ref:m,class:"v-otp-input__content",style:[A.value]},[_.value.map((u,n)=>s(J,null,[e.divider&&n!==0&&s("span",{class:"v-otp-input__divider"},[e.divider]),s(N,{focused:y.value&&e.focusAll||i.value===n,key:n},{...d,loader:void 0,default:()=>s("input",{ref:v=>c.value[n]=v,"aria-label":D(e.label,n+1),autofocus:n===0&&e.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],disabled:e.disabled,inputmode:e.type==="number"?"numeric":"text",min:e.type==="number"?0:void 0,maxlength:"1",placeholder:e.placeholder,type:e.type==="number"?"text":e.type,value:o.value[n],onInput:B,onFocus:v=>O(v,n),onBlur:R,onKeydown:C,onPaste:v=>I(n,v)},null)})])),s("input",h({class:"v-otp-input-input",type:"hidden"},a,{value:o.value.join("")}),null),s(j,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!e.loading,persistent:!0},{default:()=>{var u;return[((u=d.loader)==null?void 0:u.call(d))??s(Q,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"24",width:"2"},null)]}}),(l=d.default)==null?void 0:l.call(d)])])}),{blur:()=>{var t;(t=c.value)==null||t.some(a=>a.blur())},focus:()=>{var t;(t=c.value)==null||t[0].focus()},reset:S,isFocused:y}}});export{ue as V};
