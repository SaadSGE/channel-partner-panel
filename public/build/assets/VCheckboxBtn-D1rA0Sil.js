import{a9 as I,al as B,bi as K,am as M,aM as Q,aq as J,ab as F,ac as S,ad as O,a5 as o,P as W,bF as X,aQ as Y,a0 as i,ae as A,b as d,bc as Z,az as R,r as p,aC as ee,s as P,K as le,aD as ae,F as te,a1 as ne,V as oe,aO as ue,bV as x,au as ie,ar as re,bP as ce,aF as se,aa as de}from"./main-Cp2POdXb.js";import{V as ve}from"./VTextField-DsBnAchm.js";const q=Symbol.for("vuetify:selection-control-group"),E=I({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:B,trueIcon:B,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:K},...M(),...Q(),...J()},"SelectionControlGroup"),fe=I({...E({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Ce=F()({name:"VSelectionControlGroup",props:fe(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"modelValue"),t=O(),v=o(()=>e.id||`v-selection-control-group-${t}`),r=o(()=>e.name||v.value),a=new Set;return W(q,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),X(()=>{a.delete(n)})}}),Y({[e.defaultsTarget]:{color:i(e,"color"),disabled:i(e,"disabled"),density:i(e,"density"),error:i(e,"error"),inline:i(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:r,falseIcon:i(e,"falseIcon"),trueIcon:i(e,"trueIcon"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),type:i(e,"type"),valueComparator:i(e,"valueComparator")}}),A(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=c.default)==null?void 0:n.call(c)])}),{}}}),L=I({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...M(),...E()},"VSelectionControl");function me(e){const u=oe(q,void 0),{densityClasses:c}=ue(e),l=S(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=o(()=>e.falseValue!==void 0?e.falseValue:!1),r=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const m=u?u.modelValue.value:l.value;return r.value?x(m).some(s=>e.valueComparator(s,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const s=m?t.value:v.value;let b=s;r.value&&(b=m?[...x(l.value),s]:x(l.value).filter(V=>!e.valueComparator(V,t.value))),u?u.modelValue.value=b:l.value=b}}),{textColorClasses:n,textColorStyles:y}=ie(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:C,backgroundColorStyles:k}=re(o(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),h=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:c,trueValue:t,falseValue:v,model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:C,backgroundColorStyles:k,icon:h}}const _=F()({name:"VSelectionControl",directives:{Ripple:Z},inheritAttrs:!1,props:L(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:c,slots:l}=u;const{group:t,densityClasses:v,icon:r,model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:C,backgroundColorStyles:k,trueValue:h}=me(e),m=O(),s=R(!1),b=R(!1),V=p(),g=o(()=>e.id||`input-${m}`),D=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{V.value&&(V.value.checked=a.value)});function G(f){D.value&&(s.value=!0,ce(f.target,":focus-visible")!==!1&&(b.value=!0))}function w(){s.value=!1,b.value=!1}function N(f){f.stopPropagation()}function j(f){D.value&&(e.readonly&&t&&se(()=>t.forceUpdate()),a.value=f.target.checked)}return A(()=>{var U,$;const f=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[z,H]=ee(c),T=d("input",P({ref:V,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:w,onFocus:G,onInput:j,"aria-disabled":!!e.disabled,type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},H),null);return d("div",P({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":b.value,"v-selection-control--inline":e.inline},v.value,e.class]},z,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:y.value},[(U=l.default)==null?void 0:U.call(l,{backgroundColorClasses:C,backgroundColorStyles:k}),le(d("div",{class:["v-selection-control__input"]},[(($=l.input)==null?void 0:$.call(l,{model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:C,backgroundColorStyles:k,inputNode:T,icon:r.value,props:{onFocus:G,onBlur:w,id:g.value}}))??d(te,null,[r.value&&d(ne,{key:"icon",icon:r.value},null),T])]),[[ae("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),f&&d(ve,{for:g.value,onClick:N},{default:()=>[f]})])}),{isFocused:s,input:V}}}),be=I({indeterminate:Boolean,indeterminateIcon:{type:B,default:"$checkboxIndeterminate"},...L({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),ke=F()({name:"VCheckboxBtn",props:be(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"indeterminate"),t=S(e,"modelValue");function v(n){l.value&&(l.value=!1)}const r=o(()=>l.value?e.indeterminateIcon:e.falseIcon),a=o(()=>l.value?e.indeterminateIcon:e.trueIcon);return A(()=>{const n=de(_.filterProps(e),["modelValue"]);return d(_,P(n,{modelValue:t.value,"onUpdate:modelValue":[y=>t.value=y,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:r.value,trueIcon:a.value,"aria-checked":l.value?"mixed":void 0}),c)}),{}}});export{_ as V,E as a,Ce as b,ke as c,be as d,L as m};
