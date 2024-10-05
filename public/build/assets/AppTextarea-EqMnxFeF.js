import{u as le,V as oe}from"./form-DMhFGgfp.js";import{aK as re,aN as se,aO as ie,a5 as x,r as g,as as ue,bU as ce,H as de,w as h,at as fe,aT as ve,cb as me,b as l,s as _,F as A,K as E,bc as xe,cy as ge,aB as B,cd as he,bs as we,bT as Ve,cx as G,o as U,c as ye,n as P,f as be,z as Ce,ac as Fe,i as Pe,e as ke,A as pe,aw as D,ax as O,y as Ie}from"./main-DHHr-wHG.js";/* empty css                   */import{V as Re}from"./VCounter-BAW-Xecu.js";import{m as Se,f as _e,V as Ae}from"./VField-CJKSfiec.js";import{m as Be,V as j}from"./VInput-CJY4_OpI.js";import{f as Te}from"./forwardRefs-C-GTDzx5.js";import{I as ze}from"./index-CZ6xOcO3.js";const Me=re({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Be(),...Se()},"VTextarea"),Ne=se()({name:"VTextarea",directives:{Intersect:ze},inheritAttrs:!1,props:Me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,w){let{attrs:f,emit:s,slots:n}=w;const o=ie(e,"modelValue"),{isFocused:u,focus:k,blur:K}=le(e),L=x(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),q=x(()=>{if(f.maxlength)return f.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function J(t,r){var a,i;!e.autofocus||!t||(i=(a=r[0].target)==null?void 0:a.focus)==null||i.call(a)}const T=g(),V=g(),z=ue(""),y=g(),Q=x(()=>e.persistentPlaceholder||u.value||e.active);function p(){var t;y.value!==document.activeElement&&((t=y.value)==null||t.focus()),u.value||k()}function W(t){p(),s("click:control",t)}function X(t){s("mousedown:control",t)}function Y(t){t.stopPropagation(),p(),B(()=>{o.value="",he(e["onClick:clear"],t)})}function Z(t){var a;const r=t.target;if(o.value=r.value,(a=e.modelModifiers)!=null&&a.trim){const i=[r.selectionStart,r.selectionEnd];B(()=>{r.selectionStart=i[0],r.selectionEnd=i[1]})}}const v=g(),b=g(+e.rows),I=x(()=>["plain","underlined"].includes(e.variant));ce(()=>{e.autoGrow||(b.value=+e.rows)});function m(){e.autoGrow&&B(()=>{if(!v.value||!V.value)return;const t=getComputedStyle(v.value),r=getComputedStyle(V.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),i=v.value.scrollHeight,C=parseFloat(t.lineHeight),R=Math.max(parseFloat(e.rows)*C+a,parseFloat(r.getPropertyValue("--v-input-control-height"))),S=parseFloat(e.maxRows)*C+a||1/0,d=Ve(i??0,R,S);b.value=Math.floor((d-a)/C),z.value=we(d)})}de(m),h(o,m),h(()=>e.rows,m),h(()=>e.maxRows,m),h(()=>e.density,m);let c;return h(v,t=>{t?(c=new ResizeObserver(m),c.observe(v.value)):c==null||c.disconnect()}),fe(()=>{c==null||c.disconnect()}),ve(()=>{const t=!!(n.counter||e.counter||e.counterValue),r=!!(t||n.details),[a,i]=me(f),{modelValue:C,...R}=j.filterProps(e),S=_e(e);return l(j,_({ref:T,modelValue:o.value,"onUpdate:modelValue":d=>o.value=d,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":I.value},e.class],style:e.style},a,R,{centerAffix:b.value===1&&!I.value,focused:u.value}),{...n,default:d=>{let{id:F,isDisabled:M,isDirty:N,isReadonly:ee,isValid:te}=d;return l(Ae,_({ref:V,style:{"--v-textarea-control-height":z.value},onClick:W,onMousedown:X,"onClick:clear":Y,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},S,{id:F.value,active:Q.value||N.value,centerAffix:b.value===1&&!I.value,dirty:N.value||e.dirty,disabled:M.value,focused:u.value,error:te.value===!1}),{...n,default:ae=>{let{props:{class:H,...$}}=ae;return l(A,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),E(l("textarea",_({ref:y,class:H,value:o.value,onInput:Z,autofocus:e.autofocus,readonly:ee.value,disabled:M.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:p,onBlur:K},$,i),null),[[xe("intersect"),{handler:J},null,{once:!0}]]),e.autoGrow&&E(l("textarea",{class:[H,"v-textarea__sizer"],id:`${$.id}-sizer`,"onUpdate:modelValue":ne=>o.value=ne,ref:v,readonly:!0,"aria-hidden":"true"},null),[[ge,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:r?d=>{var F;return l(A,null,[(F=n.details)==null?void 0:F.call(n,d),t&&l(A,null,[l("span",null,null),l(Re,{active:e.persistentCounter||u.value,value:L.value,max:q.value},n.counter)])])}:void 0})}),Te({},T,V,y)}}),Ke=Object.assign({name:"AppTextarea",inheritAttrs:!1},{__name:"AppTextarea",setup(e){const w=x(()=>{const s=G(),n=s.id||s.label;return n?`app-textarea-${n}-${Math.random().toString(36).slice(2,7)}`:void 0}),f=x(()=>G().label);return(s,n)=>(U(),ye("div",{class:Ie(["app-textarea flex-grow-1",s.$attrs.class])},[P(f)?(U(),be(oe,{key:0,for:P(w),class:"mb-1 text-body-2",text:P(f)},null,8,["for","text"])):Ce("",!0),l(Ne,D(O({...s.$attrs,class:null,label:void 0,variant:"outlined",id:P(w)})),Fe({_:2},[Pe(s.$slots,(o,u)=>({name:u,fn:ke(k=>[pe(s.$slots,u,D(O(k||{})))])}))]),1040)],2))}});export{Ne as V,Ke as _};
