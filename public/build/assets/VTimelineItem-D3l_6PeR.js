import{aL as v,aM as m,aY as _,aN as k,b1 as I,aO as y,b5 as z,b8 as P,b$ as R,bk as $,a0 as r,a5 as b,aU as f,b as t,bt as u,aT as D,a$ as h,bp as T,a_ as V,bq as B,bj as S,bb as N,ba as j,a1 as w,aV as L,aZ as O,b9 as q,as as E,r as U,w as x}from"./main-BSpI_2CL.js";const F=v({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...m(),..._(),...k(),...I()},"VTimeline"),G=y()({name:"VTimeline",props:F(),setup(e,d){let{slots:i}=d;const{themeClasses:c}=z(e),{densityClasses:s}=P(e),{rtlClasses:o}=R();$({VTimelineDivider:{lineColor:r(e,"lineColor")},VTimelineItem:{density:r(e,"density"),lineInset:r(e,"lineInset")}});const n=b(()=>{const a=e.side?e.side:e.density!=="default"?"end":null;return a&&`v-timeline--side-${a}`}),l=b(()=>{const a=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return a;case"start":return a[0];case"end":return a[1];default:return null}});return f(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,l.value,{"v-timeline--inset-line":!!e.lineInset},c.value,s.value,n.value,o.value,e.class],style:[{"--v-timeline-line-thickness":u(e.lineThickness)},e.style]},i)),{}}}),M=v({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:D,iconColor:String,lineColor:String,...m(),...h(),...T(),...V()},"VTimelineDivider"),Y=y()({name:"VTimelineDivider",props:M(),setup(e,d){let{slots:i}=d;const{sizeClasses:c,sizeStyles:s}=B(e,"v-timeline-divider__dot"),{backgroundColorStyles:o,backgroundColorClasses:n}=S(r(e,"dotColor")),{roundedClasses:l}=N(e,"v-timeline-divider__dot"),{elevationClasses:a}=j(e),{backgroundColorClasses:C,backgroundColorStyles:g}=S(r(e,"lineColor"));return f(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",C.value],style:g.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",a.value,l.value,c.value],style:s.value},[t("div",{class:["v-timeline-divider__inner-dot",n.value,l.value],style:o.value},[i.default?t(L,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},i.default):t(w,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",C.value],style:g.value},null)])),{}}}),Z=v({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:D,iconColor:String,lineInset:[Number,String],...m(),...O(),...V(),...h(),...T(),...k()},"VTimelineItem"),H=y()({name:"VTimelineItem",props:Z(),setup(e,d){let{slots:i}=d;const{dimensionStyles:c}=q(e),s=E(0),o=U();return x(o,n=>{var l;n&&(s.value=((l=n.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:l.getBoundingClientRect().width)??0)},{flush:"post"}),f(()=>{var n,l;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":u(s.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${u(e.lineInset)})`:u(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:c.value},[(n=i.default)==null?void 0:n.call(i)]),t(Y,{ref:o,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:i.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((l=i.opposite)==null?void 0:l.call(i))])])}),{}}});export{G as V,H as a};