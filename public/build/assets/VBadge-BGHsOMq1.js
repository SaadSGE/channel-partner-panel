import{aK as B,aS as V,aL as N,bv as h,a_ as x,aM as P,b0 as T,aN as L,bi as R,a0 as d,ba as _,bw as w,be as M,ak as A,bx as I,aT as K,by as X,b as t,K as Y,L as $,s as u,a1 as D}from"./main-DYSjY2V3.js";import{m as F,M as W}from"./index-5A8LiR52.js";const j=B({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:V,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...N(),...h({location:"top end"}),...x(),...P(),...T(),...F({transition:"scale-rotate-transition"})},"VBadge"),E=L()({name:"VBadge",inheritAttrs:!1,props:j(),setup(e,o){const{backgroundColorClasses:c,backgroundColorStyles:b}=R(d(e,"color")),{roundedClasses:g}=_(e),{t:m}=w(),{textColorClasses:f,textColorStyles:v}=M(d(e,"textColor")),{themeClasses:C}=A(),{locationStyles:k}=I(e,!0,a=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+(e.offsetY??0):["left","right"].includes(a)?+(e.offsetX??0):0));return K(()=>{const a=Number(e.content),n=!e.max||isNaN(a)?e.content:a<=+e.max?a:`${e.max}+`,[y,S]=X(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,u({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},S,{style:e.style}),{default:()=>{var s,l;return[t("div",{class:"v-badge__wrapper"},[(l=(s=o.slots).default)==null?void 0:l.call(s),t(W,{transition:e.transition},{default:()=>{var i,r;return[Y(t("span",u({class:["v-badge__badge",C.value,c.value,g.value,f.value],style:[b.value,v.value,e.inline?{}:k.value],"aria-atomic":"true","aria-label":m(e.label,a),"aria-live":"polite",role:"status"},y),[e.dot?void 0:o.slots.badge?(r=(i=o.slots).badge)==null?void 0:r.call(i):e.icon?t(D,{icon:e.icon},null):n]),[[$,e.modelValue]])]}})])]}})}),{}}});export{E as V};
