import{c as I}from"./VAvatar-BXy3EmlP.js";import{aL as L,aT as $,aM as z,aY as w,aZ as F,a_ as O,bw as R,bB as E,a$ as M,aN as N,b1 as j,b2 as Y,aO as Z,aP as p,a5 as o,b5 as q,b7 as G,b8 as H,b9 as J,ba as K,by as Q,bD as U,bb as W,bf as X,a0 as ee,bx as ae,b as t,be as te,a1 as le,aV as d,a7 as se,s as ne}from"./main-p-5DQ3fZ.js";const oe=I("v-alert-title"),re=["success","info","warning","error"],ie=L({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:$,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...z(),...w(),...F(),...O(),...R(),...E(),...M(),...N(),...j(),...Y({variant:"flat"})},"VAlert"),de=Z()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:a}=v;const r=p(e,"modelValue"),s=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),b=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:y}=q(e),{colorClasses:f,colorStyles:k,variantClasses:P}=G(b),{densityClasses:V}=H(e),{dimensionStyles:C}=J(e),{elevationClasses:g}=K(e),{locationStyles:x}=Q(e),{positionClasses:S}=U(e),{roundedClasses:_}=W(e),{textColorClasses:B,textColorStyles:T}=X(ee(e,"borderColor")),{t:h}=ae(),i=o(()=>({"aria-label":h(e.closeLabel),onClick(n){r.value=!1,m("click:close",n)}}));return()=>{const n=!!(a.prepend||s.value),A=!!(a.title||e.title),D=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},y.value,f.value,V.value,g.value,S.value,_.value,P.value,e.class],style:[k.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[te(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",B.value],style:T.value},null),n&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!s.value,defaults:{VIcon:{density:e.density,icon:s.value,size:e.prominent?44:28}}},a.prepend):t(le,{key:"prepend-icon",density:e.density,icon:s.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[A&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),D&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(se,ne({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{de as V,oe as a};
