import{d as M}from"./index-D8QWoZBU.js";import{aa as $,ac as j,ad as k,br as q,r as E,a6 as V,ae as G,af as H,ar as J,b as a,s as g,F as K,aR as O,a2 as Q,bt as W,cc as X}from"./main-D5McJ9Zv.js";import{m as Y,u as Z,c as b}from"./VTextField-C6tY1X-k.js";import{m as ee,a as y}from"./VCheckboxBtn-CzZbLG_Q.js";const ae=$({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Y(),...ee()},"VSwitch"),ne=j()({name:"VSwitch",inheritAttrs:!1,props:ae(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,w){let{attrs:C,slots:t}=w;const n=k(e,"indeterminate"),s=k(e,"modelValue"),{loaderClasses:S}=q(e),{isFocused:P,focus:_,blur:p}=Z(e),f=E(),x=V(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),F=G(),I=V(()=>e.id||`switch-${F}`);function A(){n.value&&(n.value=!1)}function B(i){var r,u;i.stopPropagation(),i.preventDefault(),(u=(r=f.value)==null?void 0:r.input)==null||u.click()}return H(()=>{const[i,r]=J(C),u=b.filterProps(e),z=y.filterProps(e);return a(b,g({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},S.value,e.class]},i,u,{modelValue:s.value,"onUpdate:modelValue":c=>s.value=c,id:I.value,focused:P.value,style:e.style}),{...t,default:c=>{let{id:D,messagesId:R,isDisabled:U,isReadonly:L,isValid:h}=c;const d={model:s,isValid:h};return a(y,g({ref:f},z,{modelValue:s.value,"onUpdate:modelValue":[o=>s.value=o,A],id:D.value,"aria-describedby":R.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:U.value,readonly:L.value,onFocus:_,onBlur:p},r),{...t,default:o=>{let{backgroundColorClasses:v,backgroundColorStyles:l}=o;return a("div",{class:["v-switch__track",...v.value],style:l.value,onClick:B},[t["track-true"]&&a("div",{key:"prepend",class:"v-switch__track-true"},[t["track-true"](d)]),t["track-false"]&&a("div",{key:"append",class:"v-switch__track-false"},[t["track-false"](d)])])},input:o=>{let{inputNode:v,icon:l,backgroundColorClasses:N,backgroundColorStyles:T}=o;return a(K,null,[v,a("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":l||e.loading},e.inset?void 0:N.value],style:e.inset?void 0:T.value},[t.thumb?a(O,{defaults:{VIcon:{icon:l,size:"x-small"}}},{default:()=>[t.thumb({...d,icon:l})]}):a(M,null,{default:()=>[e.loading?a(W,{name:"v-switch",active:!0,color:h.value===!1?void 0:x.value},{default:m=>t.loader?t.loader(m):a(X,{active:m.isActive,color:m.color,indeterminate:!0,size:"16",width:"2"},null)}):l&&a(Q,{key:String(l),icon:l,size:"x-small"},null)]})])])}})}})}),{}}});export{ne as V};
