import{a9 as B,al as V,am as h,an as x,ao as N,ap as P,aq as T,ab as R,ar as w,a0 as d,as as L,at as _,au as A,av as I,aw as M,ae as X,ax as Y,b as t,K as $,L as q,s as u,a1 as D}from"./main-DcRYtyhb.js";import{m as F,M as K}from"./index-DAZmEUgw.js";const W=B({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:V,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...h(),...x({location:"top end"}),...N(),...P(),...T(),...F({transition:"scale-rotate-transition"})},"VBadge"),E=R()({name:"VBadge",inheritAttrs:!1,props:W(),setup(a,o){const{backgroundColorClasses:c,backgroundColorStyles:g}=w(d(a,"color")),{roundedClasses:m}=L(a),{t:b}=_(),{textColorClasses:f,textColorStyles:v}=A(d(a,"textColor")),{themeClasses:C}=I(),{locationStyles:k}=M(a,!0,e=>(a.floating?a.dot?2:4:a.dot?8:12)+(["top","bottom"].includes(e)?+(a.offsetY??0):["left","right"].includes(e)?+(a.offsetX??0):0));return X(()=>{const e=Number(a.content),n=!a.max||isNaN(e)?a.content:e<=+a.max?e:`${a.max}+`,[y,S]=Y(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(a.tag,u({class:["v-badge",{"v-badge--bordered":a.bordered,"v-badge--dot":a.dot,"v-badge--floating":a.floating,"v-badge--inline":a.inline},a.class]},S,{style:a.style}),{default:()=>{var s,l;return[t("div",{class:"v-badge__wrapper"},[(l=(s=o.slots).default)==null?void 0:l.call(s),t(K,{transition:a.transition},{default:()=>{var i,r;return[$(t("span",u({class:["v-badge__badge",C.value,c.value,m.value,f.value],style:[g.value,v.value,a.inline?{}:k.value],"aria-atomic":"true","aria-label":b(a.label,e),"aria-live":"polite",role:"status"},y),[a.dot?void 0:o.slots.badge?(r=(i=o.slots).badge)==null?void 0:r.call(i):a.icon?t(D,{icon:a.icon},null):n]),[[q,a.modelValue]])]}})])]}})}),{}}});export{E as V};
