import{aa as S,aJ as V,aB as P,bk as h,aK as N,aD as x,aE as T,ac as R,aO as L,a0 as d,aP as _,bl as w,b9 as A,bm as D,bn as I,af as K,bo as M,b as t,K as X,L as Y,s as u,a2 as $}from"./main-CVWDuzes.js";import{m as E,M as F}from"./index-CLkLnF4x.js";const J=S({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:V,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...P(),...h({location:"top end"}),...N(),...x(),...T(),...E({transition:"scale-rotate-transition"})},"VBadge"),j=R()({name:"VBadge",inheritAttrs:!1,props:J(),setup(e,o){const{backgroundColorClasses:c,backgroundColorStyles:b}=L(d(e,"color")),{roundedClasses:g}=_(e),{t:m}=w(),{textColorClasses:f,textColorStyles:v}=A(d(e,"textColor")),{themeClasses:C}=D(),{locationStyles:k}=I(e,!0,a=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+(e.offsetY??0):["left","right"].includes(a)?+(e.offsetX??0):0));return K(()=>{const a=Number(e.content),n=!e.max||isNaN(a)?e.content:a<=+e.max?a:`${e.max}+`,[y,B]=M(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,u({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},B,{style:e.style}),{default:()=>{var s,l;return[t("div",{class:"v-badge__wrapper"},[(l=(s=o.slots).default)==null?void 0:l.call(s),t(F,{transition:e.transition},{default:()=>{var i,r;return[X(t("span",u({class:["v-badge__badge",C.value,c.value,g.value,f.value],style:[b.value,v.value,e.inline?{}:k.value],"aria-atomic":"true","aria-label":m(e.label,a),"aria-live":"polite",role:"status"},y),[e.dot?void 0:o.slots.badge?(r=(i=o.slots).badge)==null?void 0:r.call(i):e.icon?t($,{icon:e.icon},null):n]),[[Y,e.modelValue]])]}})])]}})}),{}}});export{j as V};
