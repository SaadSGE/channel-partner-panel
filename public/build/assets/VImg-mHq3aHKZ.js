import{aK as W,aL as j,aY as K,aN as D,b8 as Y,aT as E,b as a,a5 as b,a_ as $,bi as G,a0 as J,ba as Q,aP as X,as as m,r as Z,w as P,bq as p,br as ee,aB as te,at as ae,K as U,bc as re,F as ne,s as le,bs as ie,L as se}from"./main-cAWQX6jp.js";import{m as oe,I as ue,M as _}from"./index-Hi4wUk4K.js";function ce(e){return{aspectStyles:b(()=>{const c=Number(e.aspectRatio);return c?{paddingBottom:String(1/c*100)+"%"}:void 0})}}const L=W({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...j(),...K()},"VResponsive"),F=D()({name:"VResponsive",props:L(),setup(e,c){let{slots:o}=c;const{aspectStyles:s}=ce(e),{dimensionStyles:h}=Y(e);return E(()=>{var f;return a("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[h.value,e.style]},[a("div",{class:"v-responsive__sizer",style:s.value},null),(f=o.additional)==null?void 0:f.call(o),o.default&&a("div",{class:["v-responsive__content",e.contentClass]},[o.default()])])}),{}}}),de=W({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...L(),...j(),...$(),...oe()},"VImg"),me=D()({name:"VImg",directives:{intersect:ue},props:de(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,c){let{emit:o,slots:s}=c;const{backgroundColorClasses:h,backgroundColorStyles:f}=G(J(e,"color")),{roundedClasses:M}=Q(e),S=X("VImg"),I=m(""),l=Z(),n=m(e.eager?"loading":"idle"),d=m(),y=m(),i=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=b(()=>i.value.aspect||d.value/y.value||0);P(()=>e.src,()=>{R(n.value!=="idle")}),P(v,(t,r)=>{!t&&r&&l.value&&g(l.value)}),p(()=>R());function R(t){if(!(e.eager&&t)&&!(ee&&!t&&!e.eager)){if(n.value="loading",i.value.lazySrc){const r=new Image;r.src=i.value.lazySrc,g(r,null)}i.value.src&&te(()=>{var r;o("loadstart",((r=l.value)==null?void 0:r.currentSrc)||i.value.src),setTimeout(()=>{var u;if(!S.isUnmounted)if((u=l.value)!=null&&u.complete){if(l.value.naturalWidth||T(),n.value==="error")return;v.value||g(l.value,null),n.value==="loading"&&C()}else v.value||g(l.value),k()})})}}function C(){var t;S.isUnmounted||(k(),g(l.value),n.value="loaded",o("load",((t=l.value)==null?void 0:t.currentSrc)||i.value.src))}function T(){var t;S.isUnmounted||(n.value="error",o("error",((t=l.value)==null?void 0:t.currentSrc)||i.value.src))}function k(){const t=l.value;t&&(I.value=t.currentSrc||t.src)}let z=-1;ae(()=>{clearTimeout(z)});function g(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const u=()=>{if(clearTimeout(z),S.isUnmounted)return;const{naturalHeight:B,naturalWidth:N}=t;B||N?(d.value=N,y.value=B):!t.complete&&n.value==="loading"&&r!=null?z=window.setTimeout(u,r):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,y.value=1)};u()}const w=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),O=()=>{var u;if(!i.value.src||n.value==="idle")return null;const t=a("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},src:i.value.src,srcset:i.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:C,onError:T},null),r=(u=s.sources)==null?void 0:u.call(s);return a(_,{transition:e.transition,appear:!0},{default:()=>[U(r?a("picture",{class:"v-img__picture"},[r,t]):t,[[se,n.value==="loaded"]])]})},q=()=>a(_,{transition:e.transition},{default:()=>[i.value.lazySrc&&n.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},src:i.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),x=()=>s.placeholder?a(_,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!s.error)&&a("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,A=()=>s.error?a(_,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&a("div",{class:"v-img__error"},[s.error()])]}):null,H=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=m(!1);{const t=P(v,r=>{r&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),t())})}return E(()=>{const t=F.filterProps(e);return U(a(F,le({class:["v-img",{"v-img--booting":!V.value},h.value,M.value,e.class],style:[{width:ie(e.width==="auto"?d.value:e.width)},f.value,e.style]},t,{aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>a(ne,null,[a(O,null,null),a(q,null,null),a(H,null,null),a(x,null,null),a(A,null,null)]),default:s.default}),[[re("intersect"),{handler:R,options:e.options},null,{once:!0}]])}),{currentSrc:I,image:l,state:n,naturalWidth:d,naturalHeight:y}}});export{me as V,F as a,de as m};