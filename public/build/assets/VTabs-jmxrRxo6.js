import{aH as z,be as I,ci as N,aK as R,bb as O,r as w,a4 as V,aQ as G,a6 as E,b as f,F as X,q as k,aU as Y,aJ as p,aL as J,b4 as K,bf as L,$ as r,bg as Q,bp as W,cj as Z}from"./main--Sxm5_s2.js";import{f as ee}from"./forwardRefs-C-GTDzx5.js";import{b as te,s as ae}from"./easing-CjukEv2V.js";import{m as se,V as M}from"./VSlideGroup-DDUY1mOj.js";const _=Symbol.for("vuetify:v-tabs"),oe=z({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...I(N({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),le=R()({name:"VTab",props:oe(),setup(e,t){let{slots:s,attrs:g}=t;const{textColorClasses:x,textColorStyles:h}=O(e,"sliderColor"),n=w(),m=w(),a=V(()=>e.direction==="horizontal"),o=V(()=>{var i,l;return((l=(i=n.value)==null?void 0:i.group)==null?void 0:l.isSelected.value)??!1});function D(i){var T,B;let{value:l}=i;if(l){const S=(B=(T=n.value)==null?void 0:T.$el.parentElement)==null?void 0:B.querySelector(".v-tab--selected .v-tab__slider"),C=m.value;if(!S||!C)return;const F=getComputedStyle(S).color,d=S.getBoundingClientRect(),c=C.getBoundingClientRect(),v=a.value?"x":"y",y=a.value?"X":"Y",P=a.value?"right":"bottom",u=a.value?"width":"height",H=d[v],U=c[v],b=H>U?d[P]-c[P]:d[v]-c[v],j=Math.sign(b)>0?a.value?"right":"bottom":Math.sign(b)<0?a.value?"left":"top":"center",q=(Math.abs(b)+(Math.sign(b)<0?d[u]:c[u]))/Math.max(d[u],c[u])||0,A=d[u]/c[u]||0,$=1.5;te(C,{backgroundColor:[F,"currentcolor"],transform:[`translate${y}(${b}px) scale${y}(${A})`,`translate${y}(${b/$}px) scale${y}(${(q-1)/$+1})`,"none"],transformOrigin:Array(3).fill(j)},{duration:225,easing:ae})}}return G(()=>{const i=E.filterProps(e);return f(E,k({symbol:_,ref:n,class:["v-tab",e.class],style:e.style,tabindex:o.value?0:-1,role:"tab","aria-selected":String(o.value),active:!1},i,g,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":D}),{...s,default:()=>{var l;return f(X,null,[((l=s.default)==null?void 0:l.call(s))??e.text,!e.hideSlider&&f("div",{ref:m,class:["v-tab__slider",x.value],style:h.value},null)])}})}),ee({},n)}});function re(e){return e?e.map(t=>Z(t)?t:{text:t,value:t}):[]}const ne=z({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...se({mandatory:"force"}),...Y(),...p()},"VTabs"),fe=R()({name:"VTabs",props:ne(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const g=J(e,"modelValue"),x=V(()=>re(e.items)),{densityClasses:h}=K(e),{backgroundColorClasses:n,backgroundColorStyles:m}=L(r(e,"bgColor"));return Q({VTab:{color:r(e,"color"),direction:r(e,"direction"),stacked:r(e,"stacked"),fixed:r(e,"fixedTabs"),sliderColor:r(e,"sliderColor"),hideSlider:r(e,"hideSlider")}}),G(()=>{const a=M.filterProps(e);return f(M,k(a,{modelValue:g.value,"onUpdate:modelValue":o=>g.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},h.value,n.value,e.class],style:[{"--v-tabs-height":W(e.height)},m.value,e.style],role:"tablist",symbol:_}),{default:()=>[s.default?s.default():x.value.map(o=>f(le,k(o,{key:o.text}),null))]})}),{}}});export{fe as V,le as a};
