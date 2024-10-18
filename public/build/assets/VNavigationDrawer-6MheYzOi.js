import{az as B,a5 as g,aH as ee,H as U,w as V,aB as Z,ch as te,a9 as ae,b9 as ne,am as oe,bx as le,aS as ue,ci as ie,ao as re,ap as se,aq as ce,ab as ve,aP as de,aN as me,be as fe,ar as X,a0 as $,aU as he,bz as ge,as as we,bS as ye,ac as be,r as Se,cj as ke,bE as Y,bo as Ee,ck as Te,aQ as Me,ae as pe,b as T,s as F,T as xe,F as Be,aF as Ce}from"./main-Cp2POdXb.js";import{u as Pe}from"./scopeId-COQ9BaAw.js";import{u as He}from"./ssrBoot-CQ8JDYey.js";function Ve(e){let{rootEl:s,isSticky:c,layoutItemStyles:i}=e;const a=B(!1),t=B(0),f=g(()=>{const h=typeof a.value=="boolean"?"top":a.value;return[c.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[h]:ee(t.value)}:{top:i.value.top}]});U(()=>{V(c,h=>{h?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),Z(()=>{window.removeEventListener("scroll",S)});let b=0;function S(){const h=b>window.scrollY?"up":"down",l=s.value.getBoundingClientRect(),v=parseFloat(i.value.top??0),r=window.scrollY-Math.max(0,t.value-v),m=l.height+Math.max(t.value,v)-window.scrollY-window.innerHeight,k=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;l.height<window.innerHeight-v?(a.value="top",t.value=v):h==="up"&&a.value==="bottom"||h==="down"&&a.value==="top"?(t.value=window.scrollY+l.top-k,a.value=!0):h==="down"&&m<=0?(t.value=0,a.value="bottom"):h==="up"&&r<=0&&(k?a.value!=="top"&&(t.value=-r+k+v,a.value="top"):(t.value=l.top+r,a.value="top")),b=window.scrollY}return{isStuck:a,stickyStyles:f}}const Re=100,Ye=20;function q(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function A(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let c=e.length-1;c>0;c--){if(e[c].t===e[c-1].t)continue;const i=q(s),a=(e[c].d-e[c-1].d)/(e[c].t-e[c-1].t);s+=(a-i)*Math.abs(a),c===e.length-1&&(s*=.5)}return q(s)*1e3}function Ne(){const e={};function s(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new te(Ye))).push([a.timeStamp,t])})}function c(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function i(a){var h;const t=(h=e[a])==null?void 0:h.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const f=t[0],b=[],S=[];for(const l of t){if(f[0]-l[0]>Re)break;b.push({t:l[0],d:l[1].clientX}),S.push({t:l[0],d:l[1].clientY})}return{x:A(b),y:A(S),get direction(){const{x:l,y:v}=this,[r,m]=[Math.abs(l),Math.abs(v)];return r>m&&l>=0?"right":r>m&&l<=0?"left":m>r&&v>=0?"down":m>r&&v<=0?"up":Ie()}}}return{addMovement:s,endTouch:c,getVelocity:i}}function Ie(){throw new Error}function Le(e){let{isActive:s,isTemporary:c,width:i,touchless:a,position:t}=e;U(()=>{window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",P,{passive:!1}),window.addEventListener("touchend",M,{passive:!0})}),Z(()=>{window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",P),window.removeEventListener("touchend",M)});const f=g(()=>["left","right"].includes(t.value)),{addMovement:b,endTouch:S,getVelocity:h}=Ne();let l=!1;const v=B(!1),r=B(0),m=B(0);let k;function w(o,n){return(t.value==="left"?o:t.value==="right"?document.documentElement.clientWidth-o:t.value==="top"?o:t.value==="bottom"?document.documentElement.clientHeight-o:x())-(n?i.value:0)}function R(o){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const u=t.value==="left"?(o-m.value)/i.value:t.value==="right"?(document.documentElement.clientWidth-o-m.value)/i.value:t.value==="top"?(o-m.value)/i.value:t.value==="bottom"?(document.documentElement.clientHeight-o-m.value)/i.value:x();return n?Math.max(0,Math.min(1,u)):u}function C(o){if(a.value)return;const n=o.changedTouches[0].clientX,u=o.changedTouches[0].clientY,d=25,E=t.value==="left"?n<d:t.value==="right"?n>document.documentElement.clientWidth-d:t.value==="top"?u<d:t.value==="bottom"?u>document.documentElement.clientHeight-d:x(),p=s.value&&(t.value==="left"?n<i.value:t.value==="right"?n>document.documentElement.clientWidth-i.value:t.value==="top"?u<i.value:t.value==="bottom"?u>document.documentElement.clientHeight-i.value:x());(E||p||s.value&&c.value)&&(l=!0,k=[n,u],m.value=w(f.value?n:u,s.value),r.value=R(f.value?n:u),S(o),b(o))}function P(o){const n=o.changedTouches[0].clientX,u=o.changedTouches[0].clientY;if(l){if(!o.cancelable){l=!1;return}const E=Math.abs(n-k[0]),p=Math.abs(u-k[1]);(f.value?E>p&&E>3:p>E&&p>3)?(v.value=!0,l=!1):(f.value?p:E)>3&&(l=!1)}if(!v.value)return;o.preventDefault(),b(o);const d=R(f.value?n:u,!1);r.value=Math.max(0,Math.min(1,d)),d>1?m.value=w(f.value?n:u,!0):d<0&&(m.value=w(f.value?n:u,!1))}function M(o){if(l=!1,!v.value)return;b(o),v.value=!1;const n=h(o.changedTouches[0].identifier),u=Math.abs(n.x),d=Math.abs(n.y);(f.value?u>d&&u>400:d>u&&d>3)?s.value=n.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||x()):s.value=r.value>.5}const H=g(()=>v.value?{transform:t.value==="left"?`translateX(calc(-100% + ${r.value*i.value}px))`:t.value==="right"?`translateX(calc(100% - ${r.value*i.value}px))`:t.value==="top"?`translateY(calc(-100% + ${r.value*i.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${r.value*i.value}px))`:x(),transition:"none"}:void 0);return{isDragging:v,dragProgress:r,dragStyles:H}}function x(){throw new Error}const De=["start","end","left","right","top","bottom"],We=ae({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>De.includes(e)},sticky:Boolean,...ne(),...oe(),...le(),...ue(),...ie(),...re(),...se({tag:"nav"}),...ce()},"VNavigationDrawer"),Xe=ve()({name:"VNavigationDrawer",props:We(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:c,emit:i,slots:a}=s;const{isRtl:t}=de(),{themeClasses:f}=me(e),{borderClasses:b}=fe(e),{backgroundColorClasses:S,backgroundColorStyles:h}=X($(e,"color")),{elevationClasses:l}=he(e),{displayClasses:v,mobile:r}=ge(e),{roundedClasses:m}=we(e),k=ye(),w=be(e,"modelValue",null,y=>!!y),{ssrBootStyles:R}=He(),{scopeId:C}=Pe(),P=Se(),M=B(!1),H=g(()=>e.rail&&e.expandOnHover&&M.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),o=g(()=>ke(e.location,t.value)),n=g(()=>!e.permanent&&(r.value||e.temporary)),u=g(()=>e.sticky&&!n.value&&o.value!=="bottom");Y(()=>e.expandOnHover&&e.rail!=null,()=>{V(M,y=>i("update:rail",!y))}),Y(()=>!e.disableResizeWatcher,()=>{V(n,y=>!e.permanent&&Ce(()=>w.value=!y))}),Y(()=>!e.disableRouteWatcher&&!!k,()=>{V(k.currentRoute,()=>n.value&&(w.value=!1))}),V(()=>e.permanent,y=>{y&&(w.value=!0)}),Ee(()=>{e.modelValue!=null||n.value||(w.value=e.permanent||!r.value)});const{isDragging:d,dragProgress:E,dragStyles:p}=Le({isActive:w,isTemporary:n,width:H,touchless:$(e,"touchless"),position:o}),N=g(()=>{const y=n.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):H.value;return d.value?y*E.value:y}),{layoutItemStyles:I,layoutItemScrimStyles:j}=Te({id:e.name,order:g(()=>parseInt(e.order,10)),position:o,layoutSize:N,elementSize:H,active:g(()=>w.value||d.value),disableTransitions:g(()=>d.value),absolute:g(()=>e.absolute||u.value&&typeof L.value!="string")}),{isStuck:L,stickyStyles:Q}=Ve({rootEl:P,isSticky:u,layoutItemStyles:I}),D=X(g(()=>typeof e.scrim=="string"?e.scrim:null)),G=g(()=>({...d.value?{opacity:E.value*.2,transition:"none"}:void 0,...j.value}));Me({VList:{bgColor:"transparent"}});function J(){M.value=!0}function K(){M.value=!1}return pe(()=>{const y=a.image||e.image;return T(Be,null,[T(e.tag,F({ref:P,onMouseenter:J,onMouseleave:K,class:["v-navigation-drawer",`v-navigation-drawer--${o.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":M.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":n.value,"v-navigation-drawer--active":w.value,"v-navigation-drawer--sticky":u.value},f.value,S.value,b.value,v.value,l.value,m.value,e.class],style:[h.value,I.value,p.value,R.value,Q.value,e.style]},C,c),{default:()=>{var W,_,O,z;return[y&&T("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(W=a.image)==null?void 0:W.call(a,{image:e.image}):T("img",{src:e.image,alt:""},null)]),a.prepend&&T("div",{class:"v-navigation-drawer__prepend"},[(_=a.prepend)==null?void 0:_.call(a)]),T("div",{class:"v-navigation-drawer__content"},[(O=a.default)==null?void 0:O.call(a)]),a.append&&T("div",{class:"v-navigation-drawer__append"},[(z=a.append)==null?void 0:z.call(a)])]}}),T(xe,{name:"fade-transition"},{default:()=>[n.value&&(d.value||w.value)&&!!e.scrim&&T("div",F({class:["v-navigation-drawer__scrim",D.backgroundColorClasses.value],style:[G.value,D.backgroundColorStyles.value],onClick:()=>w.value=!1},C),null)]})])}),{isStuck:L}}});export{Xe as V};
