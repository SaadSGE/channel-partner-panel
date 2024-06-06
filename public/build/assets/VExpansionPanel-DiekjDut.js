import{aK as m,aL as b,bE as B,aM as E,b0 as A,aN as f,bF as L,b4 as G,a5 as d,bj as g,a0 as r,aT as P,b as l,V as S,K as k,L as R,aS as V,b2 as D,bi as I,bc as j,a1 as $,aZ as z,bG as F,a_ as K,bH as N,b9 as H,ba as M,P as O}from"./main-1mV8A3Ok.js";import{V as Z}from"./index-Dr4Jpfvu.js";import{m as C,u as q}from"./lazy-B94C784v.js";const v=Symbol.for("vuetify:v-expansion-panel"),J=["default","accordion","inset","popout"],Q=m({color:String,static:Boolean,variant:{type:String,default:"default",validator:e=>J.includes(e)},readonly:Boolean,...b(),...B(),...E(),...A()},"VExpansionPanels"),le=f()({name:"VExpansionPanels",props:Q(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;L(e,v);const{themeClasses:a}=G(e),i=d(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return g({VExpansionPanel:{color:r(e,"color"),readonly:r(e,"readonly"),static:r(e,"static")}}),P(()=>l(e.tag,{class:["v-expansion-panels",a.value,i.value,e.class],style:e.style},n)),{}}}),U=m({...b(),...C()},"VExpansionPanelText"),W=f()({name:"VExpansionPanelText",props:U(),setup(e,o){let{slots:n}=o;const a=S(v);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:u}=q(e,a.isSelected);return P(()=>l(Z,{onAfterLeave:u},{default:()=>{var c;return[k(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(c=n.default)==null?void 0:c.call(n)])]),[[R,a.isSelected.value]])]}})),{}}}),T=m({color:String,expandIcon:{type:V,default:"$expand"},collapseIcon:{type:V,default:"$collapse"},hideActions:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...b()},"VExpansionPanelTitle"),X=f()({name:"VExpansionPanelTitle",directives:{Ripple:D},props:T(),setup(e,o){let{slots:n}=o;const a=S(v);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:u}=I(e,"color"),c=d(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return P(()=>{var x;return k(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[u.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(x=n.default)==null?void 0:x.call(n,c.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(c.value):l($,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[j("ripple"),e.ripple]])}),{}}}),Y=m({title:String,text:String,bgColor:String,...b(),...z(),...F(),...C(),...K(),...E(),...T()},"VExpansionPanel"),te=f()({name:"VExpansionPanel",props:Y(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=N(e,v),{backgroundColorClasses:i,backgroundColorStyles:u}=I(e,"bgColor"),{elevationClasses:c}=H(e),{roundedClasses:x}=M(e),h=d(()=>(a==null?void 0:a.disabled.value)||e.disabled),y=d(()=>a.group.items.value.reduce((s,t,p)=>(a.group.selected.value.includes(t.id)&&s.push(p),s),[])),w=d(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&y.value.some(t=>t-s===1)}),_=d(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&y.value.some(t=>t-s===-1)});return O(v,a),g({VExpansionPanelText:{eager:r(e,"eager")},VExpansionPanelTitle:{readonly:r(e,"readonly")}}),P(()=>{const s=!!(n.text||e.text),t=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":w.value,"v-expansion-panel--after-active":_.value,"v-expansion-panel--disabled":h.value},x.value,i.value,e.class],style:[u.value,e.style]},{default:()=>{var p;return[l("div",{class:["v-expansion-panel__shadow",...c.value]},null),t&&l(X,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),s&&l(W,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(p=n.default)==null?void 0:p.call(n)]}})}),{}}});export{le as V,te as a,X as b,W as c};