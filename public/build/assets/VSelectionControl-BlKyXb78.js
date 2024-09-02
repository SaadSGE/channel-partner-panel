import{aK as h,aS as T,bf as H,aL as U,aX as O,b0 as Q,aN as R,aO as _,aQ as L,a5 as o,P as X,bM as Y,bj as z,a0 as u,aT as M,b as d,b2 as J,ar as w,r as W,cb as Z,s as D,K as p,bc as ee,F as le,a1 as ae,V as te,b7 as ne,cf as I,be as oe,bi as ue,bY as ie,aA as re}from"./main-DYSjY2V3.js";import{V as ce}from"./form-KXPpmlAe.js";const N=Symbol.for("vuetify:selection-control-group"),j=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:T,trueIcon:T,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:H},...U(),...O(),...Q()},"SelectionControlGroup"),se=h({...j({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),be=R()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:v}=i;const l=_(e,"modelValue"),t=L(),b=o(()=>e.id||`v-selection-control-group-${t}`),c=o(()=>e.name||b.value),a=new Set;return X(N,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),Y(()=>{a.delete(n)})}}),z({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),M(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=v.default)==null?void 0:n.call(v)])}),{}}}),de=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...U(),...j()},"VSelectionControl");function ve(e){const i=te(N,void 0),{densityClasses:v}=ne(e),l=_(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),b=o(()=>e.falseValue!==void 0?e.falseValue:!1),c=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const f=i?i.modelValue.value:l.value;return c.value?I(f).some(r=>e.valueComparator(r,t.value)):e.valueComparator(f,t.value)},set(f){if(e.readonly)return;const r=f?t.value:b.value;let m=r;c.value&&(m=f?[...I(l.value),r]:I(l.value).filter(y=>!e.valueComparator(y,t.value))),i?i.modelValue.value=m:l.value=m}}),{textColorClasses:n,textColorStyles:C}=oe(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:S}=ue(o(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),k=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:v,trueValue:t,falseValue:b,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,icon:k}}const ye=R()({name:"VSelectionControl",directives:{Ripple:J},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:v,slots:l}=i;const{group:t,densityClasses:b,icon:c,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,trueValue:k}=ve(e),f=L(),r=w(!1),m=w(!1),y=W(),g=o(()=>e.id||`input-${f}`),A=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{y.value&&(y.value.checked=a.value)});function F(s){A.value&&(r.value=!0,ie(s.target,":focus-visible")!==!1&&(m.value=!0))}function P(){r.value=!1,m.value=!1}function E(s){s.stopPropagation()}function K(s){A.value&&(e.readonly&&t&&re(()=>t.forceUpdate()),a.value=s.target.checked)}return M(()=>{var B,G;const s=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[$,q]=Z(v),x=d("input",D({ref:y,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:P,onFocus:F,onInput:K,"aria-disabled":!!e.disabled,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},q),null);return d("div",D({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},b.value,e.class]},$,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:C.value},[(B=l.default)==null?void 0:B.call(l,{backgroundColorClasses:V,backgroundColorStyles:S}),p(d("div",{class:["v-selection-control__input"]},[((G=l.input)==null?void 0:G.call(l,{model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,inputNode:x,icon:c.value,props:{onFocus:F,onBlur:P,id:g.value}}))??d(le,null,[c.value&&d(ae,{key:"icon",icon:c.value},null),x])]),[[ee("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),s&&d(ce,{for:g.value,onClick:E},{default:()=>[s]})])}),{isFocused:r,input:y}}});export{ye as V,j as a,be as b,de as m};
