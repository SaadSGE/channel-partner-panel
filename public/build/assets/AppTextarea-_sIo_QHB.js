import{u as le,V as oe}from"./form-DCP4nY8j.js";import{aL as re,aO as se,aP as ie,a5 as x,r as g,as as ue,bV as ce,H as de,w as h,at as fe,aU as ve,cc as me,b as l,s as _,F as A,K as U,bd as xe,cz as ge,aB as B,ce as he,bt as Ve,bU as we,cy as E,o as G,c as ye,n as F,f as be,z as Ce,ac as Pe,i as Fe,e as ke,A as pe,aw as D,ax as O,y as Ie}from"./main-CGWwRiT_.js";/* empty css                   */import{V as Re}from"./VCounter-fGbJU7P4.js";import{m as Se,f as _e,V as Ae}from"./VField-Ccw4JNiL.js";import{m as Be,V as L}from"./VInput-b5mEzrmC.js";import{f as ze}from"./forwardRefs-C-GTDzx5.js";import{I as Me}from"./index-DQUQ96P0.js";const Te=re({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Be(),...Se()},"VTextarea"),He=se()({name:"VTextarea",directives:{Intersect:Me},inheritAttrs:!1,props:Te(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,V){let{attrs:f,emit:s,slots:n}=V;const o=ie(e,"modelValue"),{isFocused:u,focus:k,blur:j}=le(e),K=x(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),q=x(()=>{if(f.maxlength)return f.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function J(t,r){var a,i;!e.autofocus||!t||(i=(a=r[0].target)==null?void 0:a.focus)==null||i.call(a)}const z=g(),w=g(),M=ue(""),y=g(),Q=x(()=>e.persistentPlaceholder||u.value||e.active);function p(){var t;y.value!==document.activeElement&&((t=y.value)==null||t.focus()),u.value||k()}function W(t){p(),s("click:control",t)}function X(t){s("mousedown:control",t)}function Y(t){t.stopPropagation(),p(),B(()=>{o.value="",he(e["onClick:clear"],t)})}function Z(t){var a;const r=t.target;if(o.value=r.value,(a=e.modelModifiers)!=null&&a.trim){const i=[r.selectionStart,r.selectionEnd];B(()=>{r.selectionStart=i[0],r.selectionEnd=i[1]})}}const v=g(),b=g(+e.rows),I=x(()=>["plain","underlined"].includes(e.variant));ce(()=>{e.autoGrow||(b.value=+e.rows)});function m(){e.autoGrow&&B(()=>{if(!v.value||!w.value)return;const t=getComputedStyle(v.value),r=getComputedStyle(w.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),i=v.value.scrollHeight,C=parseFloat(t.lineHeight),R=Math.max(parseFloat(e.rows)*C+a,parseFloat(r.getPropertyValue("--v-input-control-height"))),S=parseFloat(e.maxRows)*C+a||1/0,d=we(i??0,R,S);b.value=Math.floor((d-a)/C),M.value=Ve(d)})}de(m),h(o,m),h(()=>e.rows,m),h(()=>e.maxRows,m),h(()=>e.density,m);let c;return h(v,t=>{t?(c=new ResizeObserver(m),c.observe(v.value)):c==null||c.disconnect()}),fe(()=>{c==null||c.disconnect()}),ve(()=>{const t=!!(n.counter||e.counter||e.counterValue),r=!!(t||n.details),[a,i]=me(f),{modelValue:C,...R}=L.filterProps(e),S=_e(e);return l(L,_({ref:z,modelValue:o.value,"onUpdate:modelValue":d=>o.value=d,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":I.value},e.class],style:e.style},a,R,{centerAffix:b.value===1&&!I.value,focused:u.value}),{...n,default:d=>{let{id:P,isDisabled:T,isDirty:H,isReadonly:ee,isValid:te}=d;return l(Ae,_({ref:w,style:{"--v-textarea-control-height":M.value},onClick:W,onMousedown:X,"onClick:clear":Y,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},S,{id:P.value,active:Q.value||H.value,centerAffix:b.value===1&&!I.value,dirty:H.value||e.dirty,disabled:T.value,focused:u.value,error:te.value===!1}),{...n,default:ae=>{let{props:{class:N,...$}}=ae;return l(A,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),U(l("textarea",_({ref:y,class:N,value:o.value,onInput:Z,autofocus:e.autofocus,readonly:ee.value,disabled:T.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:p,onBlur:j},$,i),null),[[xe("intersect"),{handler:J},null,{once:!0}]]),e.autoGrow&&U(l("textarea",{class:[N,"v-textarea__sizer"],id:`${$.id}-sizer`,"onUpdate:modelValue":ne=>o.value=ne,ref:v,readonly:!0,"aria-hidden":"true"},null),[[ge,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:r?d=>{var P;return l(A,null,[(P=n.details)==null?void 0:P.call(n,d),t&&l(A,null,[l("span",null,null),l(Re,{active:e.persistentCounter||u.value,value:K.value,max:q.value},n.counter)])])}:void 0})}),ze({},z,w,y)}}),je=Object.assign({name:"AppTextarea",inheritAttrs:!1},{__name:"AppTextarea",setup(e){const V=x(()=>{const s=E(),n=s.id||s.label;return n?`app-textarea-${n}-${Math.random().toString(36).slice(2,7)}`:void 0}),f=x(()=>E().label);return(s,n)=>(G(),ye("div",{class:Ie(["app-textarea flex-grow-1",s.$attrs.class])},[F(f)?(G(),be(oe,{key:0,for:F(V),class:"mb-1 text-body-2",text:F(f)},null,8,["for","text"])):Ce("",!0),l(He,D(O({...s.$attrs,class:null,label:void 0,variant:"outlined",id:F(V)})),Pe({_:2},[Fe(s.$slots,(o,u)=>({name:u,fn:ke(k=>[pe(s.$slots,u,D(O(k||{})))])}))]),1040)],2))}});export{He as V,je as _};
