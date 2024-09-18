import{aO as k,aM as g,bk as U,aU as f,b as n,aL as P,aT as u,aY as S,F as C,a1 as A,aV as y,aX as X,aZ as Y,a_ as Z,bA as $,bw as q,bB as z,a$ as G,b0 as J,aN as Q,b1 as W,b2 as ee,b3 as ae,b5 as te,b6 as ne,b7 as de,b8 as ie,b9 as le,ba as se,bC as ce,by as re,bD as ue,bb as ve,b4 as oe,a5 as p,K as me,bd as be,bE as ye,be as ke}from"./main-p-5DQ3fZ.js";import{c as x,V as h}from"./VAvatar-BXy3EmlP.js";import{V as ge}from"./VCardText-CbRypzFE.js";import{V as fe}from"./VImg-BimLayih.js";const Ve=k()({name:"VCardActions",props:g(),setup(e,i){let{slots:t}=i;return U({VBtn:{slim:!0,variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ie=x("v-card-subtitle"),Ce=x("v-card-title"),Ae=P({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:[String,Number],title:[String,Number],...g(),...S()},"VCardItem"),pe=k()({name:"VCardItem",props:Ae(),setup(e,i){let{slots:t}=i;return f(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),o=!!(l||t.append),m=!!(e.title!=null||t.title),b=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(y,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(C,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(A,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[m&&n(Ce,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),b&&n(Ie,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(y,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(C,null,[e.appendIcon&&n(A,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),he=P({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...X(),...g(),...S(),...Y(),...Z(),...$(),...q(),...z(),...G(),...J(),...Q(),...W(),...ee({variant:"elevated"})},"VCard"),Be=k()({name:"VCard",directives:{Ripple:ae},props:he(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=te(e),{borderClasses:l}=ne(e),{colorClasses:o,colorStyles:m,variantClasses:b}=de(e),{densityClasses:s}=ie(e),{dimensionStyles:d}=le(e),{elevationClasses:T}=se(e),{loaderClasses:B}=ce(e),{locationStyles:D}=re(e),{positionClasses:L}=ue(e),{roundedClasses:_}=ve(e),c=oe(e,t),N=p(()=>e.link!==!1&&c.isLink.value),r=p(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const R=N.value?"a":e.tag,F=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),M=F||E,O=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),j=!!(a.image||e.image),H=M||w||O,K=!!(a.text||e.text!=null);return me(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,l.value,o.value,s.value,T.value,B.value,L.value,_.value,b.value,e.class],style:[m.value,d.value,D.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var V;return[j&&n("div",{key:"image",class:"v-card__image"},[a.image?n(y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(fe,{key:"image-img",cover:!0,src:e.image},null)]),n(ye,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),H&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),K&&n(ge,{key:"text"},{default:()=>{var I;return[((I=a.text)==null?void 0:I.call(a))??e.text]}}),(V=a.default)==null?void 0:V.call(a),a.actions&&n(Ve,null,{default:a.actions}),ke(r.value,"v-card")]}}),[[be("ripple"),r.value&&e.ripple]])}),{}}});export{Be as V,pe as a,Ce as b,Ie as c,Ve as d};
