import{m as le,a as oe,u as re,b as G,f as se,c as ie,d as ue,V as ce}from"./VInput-DkaOtTDM.js";import{ab as de,ad as fe,ae as ve,a6 as x,r as g,aJ as me,bG as xe,H as ge,w as h,aN as he,ag as we,bQ as Ve,b as l,s as p,F as A,K as E,aZ as be,bR as ye,b3 as B,bS as Ce,ax as Fe,bt as Pe,bT as U,o as D,c as ke,n as P,f as Ie,z as Re,an as Se,i as _e,e as pe,A as Ae,bU as O,bV as j,y as Be}from"./main-C3zi_SKQ.js";import{f as Te}from"./forwardRefs-D3j0TLhE.js";import{I as ze}from"./index-C8YGC3Io.js";const Me=de({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...le(),...oe()},"VTextarea"),Ne=fe()({name:"VTextarea",directives:{Intersect:ze},inheritAttrs:!1,props:Me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,w){let{attrs:f,emit:s,slots:n}=w;const o=ve(e,"modelValue"),{isFocused:u,focus:k,blur:L}=re(e),J=x(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),K=x(()=>{if(f.maxlength)return f.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function Q(t,r){var a,i;!e.autofocus||!t||(i=(a=r[0].target)==null?void 0:a.focus)==null||i.call(a)}const T=g(),V=g(),z=me(""),b=g(),Z=x(()=>e.persistentPlaceholder||u.value||e.active);function I(){var t;b.value!==document.activeElement&&((t=b.value)==null||t.focus()),u.value||k()}function q(t){I(),s("click:control",t)}function W(t){s("mousedown:control",t)}function X(t){t.stopPropagation(),I(),B(()=>{o.value="",Ce(e["onClick:clear"],t)})}function Y(t){var a;const r=t.target;if(o.value=r.value,(a=e.modelModifiers)!=null&&a.trim){const i=[r.selectionStart,r.selectionEnd];B(()=>{r.selectionStart=i[0],r.selectionEnd=i[1]})}}const v=g(),y=g(+e.rows),R=x(()=>["plain","underlined"].includes(e.variant));xe(()=>{e.autoGrow||(y.value=+e.rows)});function m(){e.autoGrow&&B(()=>{if(!v.value||!V.value)return;const t=getComputedStyle(v.value),r=getComputedStyle(V.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),i=v.value.scrollHeight,C=parseFloat(t.lineHeight),S=Math.max(parseFloat(e.rows)*C+a,parseFloat(r.getPropertyValue("--v-input-control-height"))),_=parseFloat(e.maxRows)*C+a||1/0,d=Pe(i??0,S,_);y.value=Math.floor((d-a)/C),z.value=Fe(d)})}ge(m),h(o,m),h(()=>e.rows,m),h(()=>e.maxRows,m),h(()=>e.density,m);let c;return h(v,t=>{t?(c=new ResizeObserver(m),c.observe(v.value)):c==null||c.disconnect()}),he(()=>{c==null||c.disconnect()}),we(()=>{const t=!!(n.counter||e.counter||e.counterValue),r=!!(t||n.details),[a,i]=Ve(f),{modelValue:C,...S}=G.filterProps(e),_=se(e);return l(G,p({ref:T,modelValue:o.value,"onUpdate:modelValue":d=>o.value=d,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":R.value},e.class],style:e.style},a,S,{centerAffix:y.value===1&&!R.value,focused:u.value}),{...n,default:d=>{let{id:F,isDisabled:M,isDirty:N,isReadonly:ee,isValid:te}=d;return l(ie,p({ref:V,style:{"--v-textarea-control-height":z.value},onClick:q,onMousedown:W,"onClick:clear":X,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},_,{id:F.value,active:Z.value||N.value,centerAffix:y.value===1&&!R.value,dirty:N.value||e.dirty,disabled:M.value,focused:u.value,error:te.value===!1}),{...n,default:ae=>{let{props:{class:H,...$}}=ae;return l(A,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),E(l("textarea",p({ref:b,class:H,value:o.value,onInput:Y,autofocus:e.autofocus,readonly:ee.value,disabled:M.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:I,onBlur:L},$,i),null),[[be("intersect"),{handler:Q},null,{once:!0}]]),e.autoGrow&&E(l("textarea",{class:[H,"v-textarea__sizer"],id:`${$.id}-sizer`,"onUpdate:modelValue":ne=>o.value=ne,ref:v,readonly:!0,"aria-hidden":"true"},null),[[ye,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:r?d=>{var F;return l(A,null,[(F=n.details)==null?void 0:F.call(n,d),t&&l(A,null,[l("span",null,null),l(ue,{active:e.persistentCounter||u.value,value:J.value,max:K.value},n.counter)])])}:void 0})}),Te({},T,V,b)}}),Ue=Object.assign({name:"AppTextarea",inheritAttrs:!1},{__name:"AppTextarea",setup(e){const w=x(()=>{const s=U(),n=s.id||s.label;return n?`app-textarea-${n}-${Math.random().toString(36).slice(2,7)}`:void 0}),f=x(()=>U().label);return(s,n)=>(D(),ke("div",{class:Be(["app-textarea flex-grow-1",s.$attrs.class])},[P(f)?(D(),Ie(ce,{key:0,for:P(w),class:"mb-1 text-body-2",text:P(f)},null,8,["for","text"])):Re("",!0),l(Ne,O(j({...s.$attrs,class:null,label:void 0,variant:"outlined",id:P(w)})),Se({_:2},[_e(s.$slots,(o,u)=>({name:u,fn:pe(k=>[Ae(s.$slots,u,O(j(k||{})))])}))]),1040)],2))}});export{Ue as _};
