import{aL as z,bi as A,cm as H,aO as R,bf as I,r as w,a5 as V,aU as G,a7 as E,b as f,F as X,s as k,aY as q,aN as L,aP as W,b8 as p,bj as J,a0 as r,bk as K,bt as Q,cn as Z}from"./main-BpRJEuHK.js";import{f as ee}from"./forwardRefs-C-GTDzx5.js";import{b as te,s as ae}from"./easing-CjukEv2V.js";import{m as se,V as M}from"./VSlideGroup-OyRAVAZl.js";const _=Symbol.for("vuetify:v-tabs"),oe=z({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...A(H({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),le=R()({name:"VTab",props:oe(),setup(e,t){let{slots:s,attrs:m}=t;const{textColorClasses:x,textColorStyles:h}=I(e,"sliderColor"),n=w(),g=w(),a=V(()=>e.direction==="horizontal"),o=V(()=>{var i,l;return((l=(i=n.value)==null?void 0:i.group)==null?void 0:l.isSelected.value)??!1});function D(i){var T,P;let{value:l}=i;if(l){const S=(P=(T=n.value)==null?void 0:T.$el.parentElement)==null?void 0:P.querySelector(".v-tab--selected .v-tab__slider"),C=g.value;if(!S||!C)return;const F=getComputedStyle(S).color,d=S.getBoundingClientRect(),c=C.getBoundingClientRect(),v=a.value?"x":"y",y=a.value?"X":"Y",B=a.value?"right":"bottom",u=a.value?"width":"height",N=d[v],O=c[v],b=N>O?d[B]-c[B]:d[v]-c[v],U=Math.sign(b)>0?a.value?"right":"bottom":Math.sign(b)<0?a.value?"left":"top":"center",Y=(Math.abs(b)+(Math.sign(b)<0?d[u]:c[u]))/Math.max(d[u],c[u])||0,j=d[u]/c[u]||0,$=1.5;te(C,{backgroundColor:[F,"currentcolor"],transform:[`translate${y}(${b}px) scale${y}(${j})`,`translate${y}(${b/$}px) scale${y}(${(Y-1)/$+1})`,"none"],transformOrigin:Array(3).fill(U)},{duration:225,easing:ae})}}return G(()=>{const i=E.filterProps(e);return f(E,k({symbol:_,ref:n,class:["v-tab",e.class],style:e.style,tabindex:o.value?0:-1,role:"tab","aria-selected":String(o.value),active:!1},i,m,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":D}),{...s,default:()=>{var l;return f(X,null,[((l=s.default)==null?void 0:l.call(s))??e.text,!e.hideSlider&&f("div",{ref:g,class:["v-tab__slider",x.value],style:h.value},null)])}})}),ee({},n)}});function re(e){return e?e.map(t=>Z(t)?t:{text:t,value:t}):[]}const ne=z({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...se({mandatory:"force"}),...q(),...L()},"VTabs"),fe=R()({name:"VTabs",props:ne(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const m=W(e,"modelValue"),x=V(()=>re(e.items)),{densityClasses:h}=p(e),{backgroundColorClasses:n,backgroundColorStyles:g}=J(r(e,"bgColor"));return K({VTab:{color:r(e,"color"),direction:r(e,"direction"),stacked:r(e,"stacked"),fixed:r(e,"fixedTabs"),sliderColor:r(e,"sliderColor"),hideSlider:r(e,"hideSlider")}}),G(()=>{const a=M.filterProps(e);return f(M,k(a,{modelValue:m.value,"onUpdate:modelValue":o=>m.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},h.value,n.value,e.class],style:[{"--v-tabs-height":Q(e.height)},g.value,e.style],role:"tablist",symbol:_}),{default:()=>[s.default?s.default():x.value.map(o=>f(le,k(o,{key:o.text}),null))]})}),{}}});export{fe as V,le as a};
