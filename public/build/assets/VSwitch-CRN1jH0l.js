import{d as E}from"./index-c35Nm4wV.js";import{aL as M,aO as O,aP as h,bC as $,r as j,a5 as k,aR as q,aU as G,cc as H,b as a,s as g,F as J,aV as K,a1 as Q,bE as W,ae as X}from"./main-Ckv26Emd.js";import{m as Y,V as b}from"./VInput-CJlbCBQg.js";import{m as Z,V as y}from"./VSelectionControl-nxEUQwN1.js";import{u as ee}from"./form-DJqt-2LS.js";const ae=M({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Y(),...Z()},"VSwitch"),ie=O()({name:"VSwitch",inheritAttrs:!1,props:ae(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,C){let{attrs:w,slots:t}=C;const n=h(e,"indeterminate"),s=h(e,"modelValue"),{loaderClasses:P}=$(e),{isFocused:S,focus:_,blur:p}=ee(e),f=j(),x=k(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),F=q(),I=k(()=>e.id||`switch-${F}`);function A(){n.value&&(n.value=!1)}function B(i){var r,u;i.stopPropagation(),i.preventDefault(),(u=(r=f.value)==null?void 0:r.input)==null||u.click()}return G(()=>{const[i,r]=H(w),u=b.filterProps(e),U=y.filterProps(e);return a(b,g({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},P.value,e.class]},i,u,{modelValue:s.value,"onUpdate:modelValue":c=>s.value=c,id:I.value,focused:S.value,style:e.style}),{...t,default:c=>{let{id:z,messagesId:D,isDisabled:L,isReadonly:R,isValid:V}=c;const d={model:s,isValid:V};return a(y,g({ref:f},U,{modelValue:s.value,"onUpdate:modelValue":[o=>s.value=o,A],id:z.value,"aria-describedby":D.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:L.value,readonly:R.value,onFocus:_,onBlur:p},r),{...t,default:o=>{let{backgroundColorClasses:m,backgroundColorStyles:l}=o;return a("div",{class:["v-switch__track",...m.value],style:l.value,onClick:B},[t["track-true"]&&a("div",{key:"prepend",class:"v-switch__track-true"},[t["track-true"](d)]),t["track-false"]&&a("div",{key:"append",class:"v-switch__track-false"},[t["track-false"](d)])])},input:o=>{let{inputNode:m,icon:l,backgroundColorClasses:N,backgroundColorStyles:T}=o;return a(J,null,[m,a("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":l||e.loading},e.inset?void 0:N.value],style:e.inset?void 0:T.value},[t.thumb?a(K,{defaults:{VIcon:{icon:l,size:"x-small"}}},{default:()=>[t.thumb({...d,icon:l})]}):a(E,null,{default:()=>[e.loading?a(W,{name:"v-switch",active:!0,color:V.value===!1?void 0:x.value},{default:v=>t.loader?t.loader(v):a(X,{active:v.isActive,color:v.color,indeterminate:!0,size:"16",width:"2"},null)}):l&&a(Q,{key:String(l),icon:l,size:"x-small"},null)]})])])}})}})}),{}}});export{ie as V};
