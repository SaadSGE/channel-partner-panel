import{ab as I,ay as B,b0 as H,ap as q,aq as J,as as Q,ad as F,ae as S,af as E,a6 as o,P as W,bz as Z,aw as X,a0 as i,ag as A,b as d,aU as Y,aJ as R,r as p,bQ as ee,s as P,K as le,aZ as ae,F as te,a2 as ne,V as oe,au as ue,bW as x,a$ as ie,aD as re,bK as ce,b3 as se,ac as de}from"./main-C3zi_SKQ.js";import{V as ve}from"./VInput-DkaOtTDM.js";const K=Symbol.for("vuetify:selection-control-group"),L=I({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:B,trueIcon:B,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:H},...q(),...J(),...Q()},"SelectionControlGroup"),fe=I({...L({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Ce=F()({name:"VSelectionControlGroup",props:fe(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"modelValue"),t=E(),v=o(()=>e.id||`v-selection-control-group-${t}`),r=o(()=>e.name||v.value),a=new Set;return W(K,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),Z(()=>{a.delete(n)})}}),X({[e.defaultsTarget]:{color:i(e,"color"),disabled:i(e,"disabled"),density:i(e,"density"),error:i(e,"error"),inline:i(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:r,falseIcon:i(e,"falseIcon"),trueIcon:i(e,"trueIcon"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),type:i(e,"type"),valueComparator:i(e,"valueComparator")}}),A(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=c.default)==null?void 0:n.call(c)])}),{}}}),M=I({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...q(),...L()},"VSelectionControl");function me(e){const u=oe(K,void 0),{densityClasses:c}=ue(e),l=S(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=o(()=>e.falseValue!==void 0?e.falseValue:!1),r=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const m=u?u.modelValue.value:l.value;return r.value?x(m).some(s=>e.valueComparator(s,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const s=m?t.value:v.value;let b=s;r.value&&(b=m?[...x(l.value),s]:x(l.value).filter(V=>!e.valueComparator(V,t.value))),u?u.modelValue.value=b:l.value=b}}),{textColorClasses:n,textColorStyles:y}=ie(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:C,backgroundColorStyles:k}=re(o(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),h=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:c,trueValue:t,falseValue:v,model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:C,backgroundColorStyles:k,icon:h}}const _=F()({name:"VSelectionControl",directives:{Ripple:Y},inheritAttrs:!1,props:M(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:c,slots:l}=u;const{group:t,densityClasses:v,icon:r,model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:C,backgroundColorStyles:k,trueValue:h}=me(e),m=E(),s=R(!1),b=R(!1),V=p(),g=o(()=>e.id||`input-${m}`),w=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{V.value&&(V.value.checked=a.value)});function D(f){w.value&&(s.value=!0,ce(f.target,":focus-visible")!==!1&&(b.value=!0))}function G(){s.value=!1,b.value=!1}function N(f){f.stopPropagation()}function O(f){w.value&&(e.readonly&&t&&se(()=>t.forceUpdate()),a.value=f.target.checked)}return A(()=>{var T,$;const f=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[j,z]=ee(c),U=d("input",P({ref:V,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:G,onFocus:D,onInput:O,"aria-disabled":!!e.disabled,type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},z),null);return d("div",P({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":b.value,"v-selection-control--inline":e.inline},v.value,e.class]},j,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:y.value},[(T=l.default)==null?void 0:T.call(l,{backgroundColorClasses:C,backgroundColorStyles:k}),le(d("div",{class:["v-selection-control__input"]},[(($=l.input)==null?void 0:$.call(l,{model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:C,backgroundColorStyles:k,inputNode:U,icon:r.value,props:{onFocus:D,onBlur:G,id:g.value}}))??d(te,null,[r.value&&d(ne,{key:"icon",icon:r.value},null),U])]),[[ae("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),f&&d(ve,{for:g.value,onClick:N},{default:()=>[f]})])}),{isFocused:s,input:V}}}),be=I({indeterminate:Boolean,indeterminateIcon:{type:B,default:"$checkboxIndeterminate"},...M({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),ke=F()({name:"VCheckboxBtn",props:be(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"indeterminate"),t=S(e,"modelValue");function v(n){l.value&&(l.value=!1)}const r=o(()=>l.value?e.indeterminateIcon:e.falseIcon),a=o(()=>l.value?e.indeterminateIcon:e.trueIcon);return A(()=>{const n=de(_.filterProps(e),["modelValue"]);return d(_,P(n,{modelValue:t.value,"onUpdate:modelValue":[y=>t.value=y,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:r.value,trueIcon:a.value,"aria-checked":l.value?"mixed":void 0}),c)}),{}}});export{ke as V,_ as a,L as b,Ce as c,be as d,M as m};
