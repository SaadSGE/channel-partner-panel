import{aw as k,au as g,b5 as G,aF as f,b as n,at as P,aE as u,aJ as S,F as C,a1 as A,aG as b,aI as H,aK as J,aL as Q,bm as U,bi as W,bn as X,aM as Y,aN as $,av as z,aO as Z,aP as ee,aQ as ae,aS as te,aT as ne,aU as de,aV as ie,aW as le,aX as se,bo as ce,bk as re,bp as ue,aY as ve,aR as oe,a5 as p,K as me,a_ as ye,bq as be,a$ as ke}from"./main-DliaIfAl.js";import{c as x,V as h}from"./VAvatar-DjbtaCRp.js";import{V as ge}from"./VCardText-COmIcOQw.js";import{V as fe}from"./VImg-MIti5M4t.js";const Ie=k()({name:"VCardActions",props:g(),setup(e,i){let{slots:t}=i;return G({VBtn:{slim:!0,variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ve=x("v-card-subtitle"),Ce=x("v-card-title"),Ae=P({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:[String,Number],title:[String,Number],...g(),...S()},"VCardItem"),pe=k()({name:"VCardItem",props:Ae(),setup(e,i){let{slots:t}=i;return f(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),o=!!(l||t.append),m=!!(e.title!=null||t.title),y=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(b,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(C,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(A,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[m&&n(Ce,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),y&&n(Ve,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(b,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(C,null,[e.appendIcon&&n(A,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),he=P({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...H(),...g(),...S(),...J(),...Q(),...U(),...W(),...X(),...Y(),...$(),...z(),...Z(),...ee({variant:"elevated"})},"VCard"),Le=k()({name:"VCard",directives:{Ripple:ae},props:he(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=te(e),{borderClasses:l}=ne(e),{colorClasses:o,colorStyles:m,variantClasses:y}=de(e),{densityClasses:s}=ie(e),{dimensionStyles:d}=le(e),{elevationClasses:T}=se(e),{loaderClasses:L}=ce(e),{locationStyles:_}=re(e),{positionClasses:B}=ue(e),{roundedClasses:D}=ve(e),c=oe(e,t),N=p(()=>e.link!==!1&&c.isLink.value),r=p(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const R=N.value?"a":e.tag,F=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),M=F||E,O=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),K=!!(a.image||e.image),j=M||w||O,q=!!(a.text||e.text!=null);return me(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,l.value,o.value,s.value,T.value,L.value,B.value,D.value,y.value,e.class],style:[m.value,d.value,_.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[K&&n("div",{key:"image",class:"v-card__image"},[a.image?n(b,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(fe,{key:"image-img",cover:!0,src:e.image},null)]),n(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),j&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&n(ge,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ie,null,{default:a.actions}),ke(r.value,"v-card")]}}),[[ye("ripple"),r.value&&e.ripple]])}),{}}});export{Le as V,pe as a,Ce as b,Ve as c,Ie as d};