import{aL as B,aT as V,aM as N,bw as h,a$ as x,aN as P,b1 as T,aO as L,bj as R,a0 as d,bb as w,bx as _,bf as M,ak as $,by as A,aU as I,bz as X,b as t,K as Y,L as j,s as u,a1 as z}from"./main-p-5DQ3fZ.js";import{m as D,M as F}from"./index-DyCmQs2G.js";const K=B({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:V,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...N(),...h({location:"top end"}),...x(),...P(),...T(),...D({transition:"scale-rotate-transition"})},"VBadge"),W=L()({name:"VBadge",inheritAttrs:!1,props:K(),setup(e,o){const{backgroundColorClasses:c,backgroundColorStyles:b}=R(d(e,"color")),{roundedClasses:g}=w(e),{t:m}=_(),{textColorClasses:f,textColorStyles:v}=M(d(e,"textColor")),{themeClasses:C}=$(),{locationStyles:k}=A(e,!0,a=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+(e.offsetY??0):["left","right"].includes(a)?+(e.offsetX??0):0));return I(()=>{const a=Number(e.content),n=!e.max||isNaN(a)?e.content:a<=+e.max?a:`${e.max}+`,[y,S]=X(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,u({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},S,{style:e.style}),{default:()=>{var s,l;return[t("div",{class:"v-badge__wrapper"},[(l=(s=o.slots).default)==null?void 0:l.call(s),t(F,{transition:e.transition},{default:()=>{var i,r;return[Y(t("span",u({class:["v-badge__badge",C.value,c.value,g.value,f.value],style:[b.value,v.value,e.inline?{}:k.value],"aria-atomic":"true","aria-label":m(e.label,a),"aria-live":"polite",role:"status"},y),[e.dot?void 0:o.slots.badge?(r=(i=o.slots).badge)==null?void 0:r.call(i):e.icon?t(z,{icon:e.icon},null):n]),[[j,e.modelValue]])]}})])]}})}),{}}});export{W as V};
