import{aH as x,aI as y,aJ as T,aK as V,aQ as k,b as a,aT as H,aW as I,aX as E,aZ as D,bf as w,$ as X,b2 as $,b6 as F,b7 as J,b1 as K,bX as Q,ao as U,a4 as h,bg as W,aR as u,bp as o}from"./main-BvYP52SQ.js";import{V as Z}from"./index-BizsYg1A.js";import{V as j}from"./VImg-C1COJ1y2.js";const q=x({text:String,...y(),...T()},"VToolbarTitle"),z=V()({name:"VToolbarTitle",props:q(),setup(e,n){let{slots:t}=n;return k(()=>{const s=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[s&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),A=[null,"prominent","default","comfortable","compact"],G=x({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>A.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...H(),...y(),...I(),...E(),...T({tag:"header"}),...D()},"VToolbar"),Y=V()({name:"VToolbar",props:G(),setup(e,n){var c;let{slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:l}=w(X(e,"color")),{borderClasses:_}=$(e),{elevationClasses:C}=F(e),{roundedClasses:B}=J(e),{themeClasses:P}=K(e),{rtlClasses:S}=Q(),i=U(!!(e.extended||(c=t.extension)!=null&&c.call(t))),r=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=h(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return W({VBtn:{variant:"text"}}),k(()=>{var b;const N=!!(e.title||t.title),R=!!(t.image||e.image),m=(b=t.extension)==null?void 0:b.call(t);return i.value=!!(e.extended||m),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,_.value,C.value,B.value,P.value,S.value,e.class],style:[l.value,e.style]},{default:()=>[R&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(u,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(j,{key:"image-img",cover:!0,src:e.image},null)]),a(u,{defaults:{VTabs:{height:o(r.value)}}},{default:()=>{var g,v,f;return[a("div",{class:"v-toolbar__content",style:{height:o(r.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(g=t.prepend)==null?void 0:g.call(t)]),N&&a(z,{key:"title",text:e.title},{text:t.title}),(v=t.default)==null?void 0:v.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(f=t.append)==null?void 0:f.call(t)])])]}}),a(u,{defaults:{VTabs:{height:o(d.value)}}},{default:()=>[a(Z,null,{default:()=>[i.value&&a("div",{class:"v-toolbar__extension",style:{height:o(d.value)}},[m])]})]})]})}),{contentHeight:r,extensionHeight:d}}});export{Y as V,z as a,q as b,G as m};
