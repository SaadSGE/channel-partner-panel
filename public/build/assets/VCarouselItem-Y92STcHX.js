import{m as D,V as w,b as C,a as h}from"./VWindowItem-DsGfYaoi.js";import{aK as y,aS as k,aN as P,aO as p,bw as x,r as S,w as g,H as T,aT as B,b as t,F as _,aU as A,a7 as N,s as o,a4 as F,bs as W}from"./main-DHHr-wHG.js";import{m as L,V as b}from"./VImg-DwCywSuk.js";const O="/build/assets/sidebar-pic-1-n1XODnyA.png",R="/build/assets/sidebar-pic-2-BJAycSir.png",q="/build/assets/sidebar-pic-3-BaEz3Jo2.png",U=y({color:String,cycle:Boolean,delimiterIcon:{type:k,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...D({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),E=P()({name:"VCarousel",props:U(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const s=p(e,"modelValue"),{t:u}=x(),l=S();let c=-1;g(s,d),g(()=>e.interval,d),g(()=>e.cycle,m=>{m?d():window.clearTimeout(c)}),T(f);function f(){!e.cycle||!l.value||(c=window.setTimeout(l.value.group.next,+e.interval>0?+e.interval:6e3))}function d(){window.clearTimeout(c),window.requestAnimationFrame(f)}return B(()=>{const m=w.filterProps(e);return t(w,o({ref:l},m,{modelValue:s.value,"onUpdate:modelValue":v=>s.value=v,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:W(e.height)},e.style]}),{default:a.default,additional:v=>{let{group:r}=v;return t(_,null,[!e.hideDelimiters&&t("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[r.items.value.length>0&&t(A,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[r.items.value.map((i,I)=>{const V={id:`carousel-item-${i.id}`,"aria-label":u("$vuetify.carousel.ariaLabel.delimiter",I+1,r.items.value.length),class:["v-carousel__controls__item",r.isSelected(i.id)&&"v-btn--active"],onClick:()=>r.select(i.id,!0)};return a.item?a.item({props:V,item:i}):t(N,o(i,V),null)})]})]),e.progress&&t(F,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(r.getItemIndex(s.value)+1)/r.items.value.length*100},null)])},prev:a.prev,next:a.next})}),{}}}),$=y({...L(),...C()},"VCarouselItem"),H=P()({name:"VCarouselItem",inheritAttrs:!1,props:$(),setup(e,n){let{slots:a,attrs:s}=n;B(()=>{const u=b.filterProps(e),l=h.filterProps(e);return t(h,o({class:"v-carousel-item"},l),{default:()=>[t(b,o(s,u),a)]})})}});export{E as V,H as a,R as b,q as c,O as s};
