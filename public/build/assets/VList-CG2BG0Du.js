import{V as D,ar as _,P as G,aq as M,r as P,aK as O,aO as ae,a5 as f,as as de,aP as Ke,aQ as Ue,aR as He,aS as B,aL as N,aM as R,aN as F,a0 as S,aT as $,b as v,aU as X,K as ve,L as qe,aV as le,aW as fe,aX as me,aY as ye,aZ as ge,a_ as be,a$ as We,b0 as pe,b1 as he,b2 as Qe,b3 as Xe,w as Ye,b4 as Se,b5 as Ce,b6 as Ze,b7 as ke,b8 as Ie,b9 as Ve,ba as we,bb as ze,bc as Je,bd as et,F as se,a1 as ie,be as tt,s as re,bf as nt,bg as I,bh as Pe,bi as at,bj as lt,bk as st}from"./main-46fJF4Ly.js";import{V as it}from"./index-DkHFl9i8.js";import{u as rt}from"./ssrBoot-DQQ69Fpa.js";import{M as ut}from"./index-CAksEt0X.js";import{c as Ae,V as ue}from"./VAvatar-DBcKRZVo.js";import{V as ot}from"./VDivider-DOOYxpa5.js";const Y=Symbol.for("vuetify:list");function Le(){const e=D(Y,{hasPrepend:_(!1),updateHasPrepend:()=>null}),l={hasPrepend:_(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return G(Y,l),e}function Oe(){return D(Y,null)}const ct={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},Be={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},dt={open:Be.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},z=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=M(n),e&&!s){const i=Array.from(a.entries()).reduce((r,p)=>{let[y,g]=p;return g==="on"?[...r,y]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},Me=e=>{const l=z(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=M(a);const r=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:r})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},vt=e=>{const l=z(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=M(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},ft=e=>{const l=Me(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=M(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},mt=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:r}=t;n=M(n);const p=new Map(a),y=[n];for(;y.length;){const u=y.shift();a.set(u,s?"on":"off"),i.has(u)&&y.push(...i.get(u))}let g=r.get(n);for(;g;){const u=i.get(g),o=u.every(c=>a.get(c)==="on"),d=u.every(c=>!a.has(c)||a.get(c)==="off");a.set(g,o?"on":d?"off":"indeterminate"),g=r.get(g)}return e&&!s&&Array.from(a.entries()).reduce((o,d)=>{let[c,m]=d;return m==="on"?[...o,c]:o},[]).length===0?p:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},x=Symbol.for("vuetify:nested"),_e={id:_(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:P(new Set),selected:P(new Map),selectedValues:P([])}},yt=O({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),gt=e=>{let l=!1;const t=P(new Map),n=P(new Map),s=ae(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return ft(e.mandatory);case"leaf":return vt(e.mandatory);case"independent":return z(e.mandatory);case"single-independent":return Me(e.mandatory);case"classic":default:return mt(e.mandatory)}}),i=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return dt;case"single":return ct;case"multiple":default:return Be}}),r=ae(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));de(()=>{l=!0});function p(u){const o=[];let d=u;for(;d!=null;)o.unshift(d),d=n.value.get(d);return o}const y=Ke("nested"),g={id:_(),root:{opened:s,selected:r,selectedValues:f(()=>{const u=[];for(const[o,d]of r.value.entries())d==="on"&&u.push(o);return u}),register:(u,o,d)=>{o&&u!==o&&n.value.set(u,o),d&&t.value.set(u,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],u])},unregister:u=>{if(l)return;t.value.delete(u);const o=n.value.get(u);if(o){const d=t.value.get(o)??[];t.value.set(o,d.filter(c=>c!==u))}n.value.delete(u),s.value.delete(u)},open:(u,o,d)=>{y.emit("click:open",{id:u,value:o,path:p(u),event:d});const c=i.value.open({id:u,value:o,opened:new Set(s.value),children:t.value,parents:n.value,event:d});c&&(s.value=c)},openOnSelect:(u,o,d)=>{const c=i.value.select({id:u,value:o,selected:new Map(r.value),opened:new Set(s.value),children:t.value,parents:n.value,event:d});c&&(s.value=c)},select:(u,o,d)=>{y.emit("click:select",{id:u,value:o,path:p(u),event:d});const c=a.value.select({id:u,value:o,selected:new Map(r.value),children:t.value,parents:n.value,event:d});c&&(r.value=c),g.root.openOnSelect(u,o,d)},children:t,parents:n}};return G(x,g),g.root},xe=(e,l)=>{const t=D(x,_e),n=Symbol(Ue()),s=f(()=>e.value!==void 0?e.value:n),a={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:f(()=>t.root.opened.value.has(s.value)),parent:f(()=>t.root.parents.value.get(s.value)),select:(i,r)=>t.root.select(s.value,i,r),isSelected:f(()=>t.root.selected.value.get(M(s.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),de(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&G(x,a),a},bt=()=>{const e=D(x,_e);G(x,{...e,isGroupActivator:!0})},pt=He({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return bt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),ht=O({activeColor:String,baseColor:String,color:String,collapseIcon:{type:B,default:"$collapse"},expandIcon:{type:B,default:"$expand"},prependIcon:B,appendIcon:B,fluid:Boolean,subgroup:Boolean,title:String,value:null,...N(),...R()},"VListGroup"),oe=F()({name:"VListGroup",props:ht(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=xe(S(e,"value"),!0),i=f(()=>`v-list-group--id-${String(a.value)}`),r=Oe(),{isBooted:p}=rt();function y(d){s(!n.value,d)}const g=f(()=>({onClick:y,class:"v-list-group__header",id:i.value})),u=f(()=>n.value?e.collapseIcon:e.expandIcon),o=f(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return $(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&v(X,{defaults:o.value},{default:()=>[v(pt,null,{default:()=>[t.activator({props:g.value,isOpen:n.value})]})]}),v(ut,{transition:{component:it},disabled:!p.value},{default:()=>{var d;return[ve(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(d=t.default)==null?void 0:d.call(t)]),[[qe,n.value]])]}})]})),{}}}),St=Ae("v-list-item-subtitle"),Ct=Ae("v-list-item-title"),kt=O({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:B,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:le(),onClickOnce:le(),...fe(),...N(),...me(),...ye(),...ge(),...be(),...We(),...R(),...pe(),...he({variant:"text"})},"VListItem"),ce=F()({name:"VListItem",directives:{Ripple:Qe},props:kt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=Xe(e,t),i=f(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:p,isIndeterminate:y,isGroupActivator:g,root:u,parent:o,openOnSelect:d}=xe(i,!1),c=Oe(),m=f(()=>{var b;return e.active!==!1&&(e.active||((b=a.isActive)==null?void 0:b.value)||p.value)}),V=f(()=>e.link!==!1&&a.isLink.value),k=f(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!c)),A=f(()=>e.rounded||e.nav),L=f(()=>e.color??e.activeColor),E=f(()=>({color:m.value?L.value??e.baseColor:e.baseColor,variant:e.variant}));Ye(()=>{var b;return(b=a.isActive)==null?void 0:b.value},b=>{b&&o.value!=null&&u.open(o.value,!0),b&&d(b)},{immediate:!0});const{themeClasses:K}=Se(e),{borderClasses:U}=Ce(e),{colorClasses:H,colorStyles:q,variantClasses:w}=Ze(E),{densityClasses:h}=ke(e),{dimensionStyles:T}=Ie(e),{elevationClasses:De}=Ve(e),{roundedClasses:Ge}=we(A),Ne=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),W=f(()=>({isActive:m.value,select:r,isSelected:p.value,isIndeterminate:y.value}));function J(b){var j;s("click",b),!(g||!k.value)&&((j=a.navigate)==null||j.call(a,b),e.value!=null&&r(!p.value,b))}function Re(b){(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),J(b))}return $(()=>{const b=V.value?"a":e.tag,j=n.title||e.title!=null,$e=n.subtitle||e.subtitle!=null,ee=!!(e.appendAvatar||e.appendIcon),Ee=!!(ee||n.append),te=!!(e.prependAvatar||e.prependIcon),Q=!!(te||n.prepend);return c==null||c.updateHasPrepend(Q),e.activeColor&&ze("active-color",["color","base-color"]),ve(v(b,{class:["v-list-item",{"v-list-item--active":m.value,"v-list-item--disabled":e.disabled,"v-list-item--link":k.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Q&&(c==null?void 0:c.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&m.value},K.value,U.value,H.value,h.value,De.value,Ne.value,Ge.value,w.value,e.class],style:[q.value,T.value,e.style],href:a.href.value,tabindex:k.value?c?-2:0:void 0,onClick:J,onKeydown:k.value&&!V.value&&Re},{default:()=>{var ne;return[et(k.value||m.value,"v-list-item"),Q&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(X,{key:"prepend-defaults",disabled:!te,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var C;return[(C=n.prepend)==null?void 0:C.call(n,W.value)]}}):v(se,null,[e.prependAvatar&&v(ue,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(ie,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),v("div",{class:"v-list-item__spacer"},null)]),v("div",{class:"v-list-item__content","data-no-activator":""},[j&&v(Ct,{key:"title"},{default:()=>{var C;return[((C=n.title)==null?void 0:C.call(n,{title:e.title}))??e.title]}}),$e&&v(St,{key:"subtitle"},{default:()=>{var C;return[((C=n.subtitle)==null?void 0:C.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ne=n.default)==null?void 0:ne.call(n,W.value)]),Ee&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(X,{key:"append-defaults",disabled:!ee,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var C;return[(C=n.append)==null?void 0:C.call(n,W.value)]}}):v(se,null,[e.appendIcon&&v(ie,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(ue,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),v("div",{class:"v-list-item__spacer"},null)])]}}),[[Je("ripple"),k.value&&e.ripple]])}),{}}}),It=O({color:String,inset:Boolean,sticky:Boolean,title:String,...N(),...R()},"VListSubheader"),Vt=F()({name:"VListSubheader",props:It(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=tt(S(e,"color"));return $(()=>{const a=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&v("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),wt=O({items:Array,returnObject:Boolean},"VListChildren"),Fe=F()({name:"VListChildren",props:wt(),setup(e,l){let{slots:t}=l;return Le(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var o,d;let{children:i,props:r,type:p,raw:y}=a;if(p==="divider")return((o=t.divider)==null?void 0:o.call(t,{props:r}))??v(ot,r,null);if(p==="subheader")return((d=t.subheader)==null?void 0:d.call(t,{props:r}))??v(Vt,r,null);const g={subtitle:t.subtitle?c=>{var m;return(m=t.subtitle)==null?void 0:m.call(t,{...c,item:y})}:void 0,prepend:t.prepend?c=>{var m;return(m=t.prepend)==null?void 0:m.call(t,{...c,item:y})}:void 0,append:t.append?c=>{var m;return(m=t.append)==null?void 0:m.call(t,{...c,item:y})}:void 0,title:t.title?c=>{var m;return(m=t.title)==null?void 0:m.call(t,{...c,item:y})}:void 0},u=oe.filterProps(r);return i?v(oe,re({value:r==null?void 0:r.value},u),{activator:c=>{let{props:m}=c;const V={...r,...m,value:e.returnObject?y:r.value};return t.header?t.header({props:V}):v(ce,V,g)},default:()=>v(Fe,{items:i},t)}):t.item?t.item({props:r}):v(ce,re(r,{value:e.returnObject?y:r.value}),g)}))}}}),Pt=O({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:nt}},"list-items");function Z(e,l){const t=I(l,e.itemTitle,l),n=I(l,e.itemValue,t),s=I(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?Pe(l,["children"]):l:void 0:I(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?Te(e,s):void 0,raw:l}}function Te(e,l){const t=[];for(const n of l)t.push(Z(e,n));return t}function Dt(e){const l=f(()=>Te(e,e.items)),t=f(()=>l.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(i=>i!==null)),a.map(i=>e.returnObject&&typeof i=="string"?Z(e,i):l.value.find(r=>e.valueComparator(i,r.value))||Z(e,i))}function s(a){return e.returnObject?a.map(i=>{let{raw:r}=i;return r}):a.map(i=>{let{value:r}=i;return r})}return{items:l,transformIn:n,transformOut:s}}function At(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Lt(e,l){const t=I(l,e.itemType,"item"),n=At(l)?l:I(l,e.itemTitle),s=I(l,e.itemValue,void 0),a=I(l,e.itemChildren),i=e.itemProps===!0?Pe(l,["children"]):I(l,e.itemProps),r={title:n,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?je(e,a):void 0,raw:l}}function je(e,l){const t=[];for(const n of l)t.push(Lt(e,n));return t}function Ot(e){return{items:f(()=>je(e,e.items))}}const Bt=O({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...yt({selectStrategy:"single-leaf",openStrategy:"list"}),...fe(),...N(),...me(),...ye(),...ge(),itemType:{type:String,default:"type"},...Pt(),...be(),...R(),...pe(),...he({variant:"text"})},"VList"),Gt=F()({name:"VList",props:Bt(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=Ot(e),{themeClasses:s}=Se(e),{backgroundColorClasses:a,backgroundColorStyles:i}=at(S(e,"bgColor")),{borderClasses:r}=Ce(e),{densityClasses:p}=ke(e),{dimensionStyles:y}=Ie(e),{elevationClasses:g}=Ve(e),{roundedClasses:u}=we(e),{open:o,select:d}=gt(e),c=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),m=S(e,"activeColor"),V=S(e,"baseColor"),k=S(e,"color");Le(),lt({VListGroup:{activeColor:m,baseColor:V,color:k,expandIcon:S(e,"expandIcon"),collapseIcon:S(e,"collapseIcon")},VListItem:{activeClass:S(e,"activeClass"),activeColor:m,baseColor:V,color:k,density:S(e,"density"),disabled:S(e,"disabled"),lines:S(e,"lines"),nav:S(e,"nav"),slim:S(e,"slim"),variant:S(e,"variant")}});const A=_(!1),L=P();function E(h){A.value=!0}function K(h){A.value=!1}function U(h){var T;!A.value&&!(h.relatedTarget&&((T=L.value)!=null&&T.contains(h.relatedTarget)))&&w()}function H(h){if(L.value){if(h.key==="ArrowDown")w("next");else if(h.key==="ArrowUp")w("prev");else if(h.key==="Home")w("first");else if(h.key==="End")w("last");else return;h.preventDefault()}}function q(h){A.value=!0}function w(h){if(L.value)return st(L.value,h)}return $(()=>v(e.tag,{ref:L,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},s.value,a.value,r.value,p.value,g.value,c.value,u.value,e.class],style:[i.value,y.value,e.style],tabindex:e.disabled||A.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:E,onFocusout:K,onFocus:U,onKeydown:H,onMousedown:q},{default:()=>[v(Fe,{items:n.value,returnObject:e.returnObject},t)]})),{open:o,select:d,focus:w}}});export{Gt as V,ce as a,Ct as b,Vt as c,St as d,oe as e,Pt as m,Z as t,Dt as u};
