import{a9 as W,am as j,aW as K,ab as D,aX as X,ae as E,b as t,a5 as b,ao as $,ar as G,a0 as J,as as Q,b6 as Y,az as m,r as Z,w as I,bo as p,bp as ee,aF as ae,aB as te,K as N,aD as re,F as ne,s as le,aH as ie,L as se}from"./main-DPb0_12f.js";import{m as oe,I as ue,M as _}from"./index-D5BOVv8n.js";function ce(e){return{aspectStyles:b(()=>{const c=Number(e.aspectRatio);return c?{paddingBottom:String(1/c*100)+"%"}:void 0})}}const H=W({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...j(),...K()},"VResponsive"),U=D()({name:"VResponsive",props:H(),setup(e,c){let{slots:o}=c;const{aspectStyles:s}=ce(e),{dimensionStyles:h}=X(e);return E(()=>{var f;return t("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[h.value,e.style]},[t("div",{class:"v-responsive__sizer",style:s.value},null),(f=o.additional)==null?void 0:f.call(o),o.default&&t("div",{class:["v-responsive__content",e.contentClass]},[o.default()])])}),{}}}),de=W({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...H(),...j(),...$(),...oe()},"VImg"),me=D()({name:"VImg",directives:{intersect:ue},props:de(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,c){let{emit:o,slots:s}=c;const{backgroundColorClasses:h,backgroundColorStyles:f}=G(J(e,"color")),{roundedClasses:M}=Q(e),S=Y("VImg"),P=m(""),l=Z(),n=m(e.eager?"loading":"idle"),d=m(),y=m(),i=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=b(()=>i.value.aspect||d.value/y.value||0);I(()=>e.src,()=>{z(n.value!=="idle")}),I(v,(a,r)=>{!a&&r&&l.value&&g(l.value)}),p(()=>z());function z(a){if(!(e.eager&&a)&&!(ee&&!a&&!e.eager)){if(n.value="loading",i.value.lazySrc){const r=new Image;r.src=i.value.lazySrc,g(r,null)}i.value.src&&ae(()=>{var r;o("loadstart",((r=l.value)==null?void 0:r.currentSrc)||i.value.src),setTimeout(()=>{var u;if(!S.isUnmounted)if((u=l.value)!=null&&u.complete){if(l.value.naturalWidth||k(),n.value==="error")return;v.value||g(l.value,null),n.value==="loading"&&C()}else v.value||g(l.value),w()})})}}function C(){var a;S.isUnmounted||(w(),g(l.value),n.value="loaded",o("load",((a=l.value)==null?void 0:a.currentSrc)||i.value.src))}function k(){var a;S.isUnmounted||(n.value="error",o("error",((a=l.value)==null?void 0:a.currentSrc)||i.value.src))}function w(){const a=l.value;a&&(P.value=a.currentSrc||a.src)}let R=-1;te(()=>{clearTimeout(R)});function g(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const u=()=>{if(clearTimeout(R),S.isUnmounted)return;const{naturalHeight:B,naturalWidth:F}=a;B||F?(d.value=F,y.value=B):!a.complete&&n.value==="loading"&&r!=null?R=window.setTimeout(u,r):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,y.value=1)};u()}const T=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),O=()=>{var u;if(!i.value.src||n.value==="idle")return null;const a=t("img",{class:["v-img__img",T.value],style:{objectPosition:e.position},src:i.value.src,srcset:i.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:C,onError:k},null),r=(u=s.sources)==null?void 0:u.call(s);return t(_,{transition:e.transition,appear:!0},{default:()=>[N(r?t("picture",{class:"v-img__picture"},[r,a]):a,[[se,n.value==="loaded"]])]})},x=()=>t(_,{transition:e.transition},{default:()=>[i.value.lazySrc&&n.value!=="loaded"&&t("img",{class:["v-img__img","v-img__img--preload",T.value],style:{objectPosition:e.position},src:i.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),A=()=>s.placeholder?t(_,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!s.error)&&t("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,L=()=>s.error?t(_,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&t("div",{class:"v-img__error"},[s.error()])]}):null,q=()=>e.gradient?t("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=m(!1);{const a=I(v,r=>{r&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),a())})}return E(()=>{const a=U.filterProps(e);return N(t(U,le({class:["v-img",{"v-img--booting":!V.value},h.value,M.value,e.class],style:[{width:ie(e.width==="auto"?d.value:e.width)},f.value,e.style]},a,{aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>t(ne,null,[t(O,null,null),t(x,null,null),t(q,null,null),t(A,null,null),t(L,null,null)]),default:s.default}),[[re("intersect"),{handler:z,options:e.options},null,{once:!0}]])}),{currentSrc:P,image:l,state:n,naturalWidth:d,naturalHeight:y}}});export{me as V};
