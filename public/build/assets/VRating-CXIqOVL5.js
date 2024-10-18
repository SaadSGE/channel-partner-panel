import{at as R,aE as k,au as B,aJ as $,ba as w,av as z,aO as A,aw as N,bj as T,aS as E,az as H,a5 as s,bG as j,ce as D,ax as G,aC as J,aF as O,b as i,F as C,a7 as U,s as q,v as K}from"./main-DliaIfAl.js";const Q=R({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:k,default:"$ratingEmpty"},fullIcon:{type:k,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...B(),...$(),...w(),...z(),...A()},"VRating"),X=N()({name:"VRating",props:Q(),emits:{"update:modelValue":e=>!0},setup(e,M){let{slots:u}=M;const{t:f}=T(),{themeClasses:P}=E(e),h=H(e,"modelValue"),c=s(()=>j(parseFloat(h.value),0,+e.length)),y=s(()=>D(Number(e.length),1)),x=s(()=>y.value.flatMap(a=>e.halfIncrements?[a-.5,a]:[a])),d=G(-1),g=s(()=>x.value.map(a=>{const t=e.hover&&d.value>-1,n=c.value>=a,l=d.value>=a,o=(t?l:n)?e.fullIcon:e.emptyIcon,b=e.activeColor??e.color,v=n||l?b:e.color;return{isFilled:n,isHovered:l,icon:o,color:v}})),F=s(()=>[0,...x.value].map(a=>{function t(){d.value=a}function n(){d.value=-1}function l(){e.disabled||e.readonly||(h.value=c.value===a&&e.clearable?0:a)}return{onMouseenter:e.hover?t:void 0,onMouseleave:e.hover?n:void 0,onClick:l}})),I=s(()=>e.name??`v-rating-${J()}`);function m(a){var V,_;let{value:t,index:n,showStar:l=!0}=a;const{onMouseenter:r,onMouseleave:o,onClick:b}=F.value[n+1],v=`${I.value}-${String(t).replace(".","-")}`,S={color:(V=g.value[n])==null?void 0:V.color,density:e.density,disabled:e.disabled,icon:(_=g.value[n])==null?void 0:_.icon,ripple:e.ripple,size:e.size,variant:"plain"};return i(C,null,[i("label",{for:v,class:{"v-rating__item--half":e.halfIncrements&&t%1>0,"v-rating__item--full":e.halfIncrements&&t%1===0},onMouseenter:r,onMouseleave:o,onClick:b},[i("span",{class:"v-rating__hidden"},[f(e.itemAriaLabel,t,e.length)]),l?u.item?u.item({...g.value[n],props:S,value:t,index:n,rating:c.value}):i(U,q({"aria-label":f(e.itemAriaLabel,t,e.length)},S),null):void 0]),i("input",{class:"v-rating__hidden",name:I.value,id:v,type:"radio",value:t,checked:c.value===t,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function L(a){return u["item-label"]?u["item-label"](a):a.label?i("span",null,[a.label]):i("span",null,[K(" ")])}return O(()=>{var t;const a=!!((t=e.itemLabels)!=null&&t.length)||u["item-label"];return i(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},P.value,e.class],style:e.style},{default:()=>[i(m,{value:0,index:-1,showStar:!1},null),y.value.map((n,l)=>{var r,o;return i("div",{class:"v-rating__wrapper"},[a&&e.itemLabelPosition==="top"?L({value:n,index:l,label:(r=e.itemLabels)==null?void 0:r[l]}):void 0,i("div",{class:"v-rating__item"},[e.halfIncrements?i(C,null,[i(m,{value:n-.5,index:l*2},null),i(m,{value:n,index:l*2+1},null)]):i(m,{value:n,index:l},null)]),a&&e.itemLabelPosition==="bottom"?L({value:n,index:l,label:(o=e.itemLabels)==null?void 0:o[l]}):void 0])})]})}),{}}});export{X as V};