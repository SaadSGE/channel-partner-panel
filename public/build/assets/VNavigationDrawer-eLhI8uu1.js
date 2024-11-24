import{ao as B,a6 as h,aw as ee,H as Z,w as V,aq as Q,cd as te,aa as ae,b0 as ne,aB as oe,bT as le,aM as ue,ce as ie,aK as re,aD as se,aE as ce,ac as ve,aH as de,aF as me,b5 as fe,aO as $,a0 as z,aQ as ge,bN as he,aP as we,bQ as ye,ad as be,r as Se,cf as ke,bB as Y,bg as Te,cg as Ee,aI as Me,af as pe,b as E,s as F,T as xe,F as Be,au as Ce}from"./main-D5McJ9Zv.js";import{u as Pe}from"./scopeId-cOAU0TpX.js";import{u as He}from"./ssrBoot-BFxq1bKX.js";function Ve(e){let{rootEl:s,isSticky:c,layoutItemStyles:i}=e;const a=B(!1),t=B(0),f=h(()=>{const g=typeof a.value=="boolean"?"top":a.value;return[c.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[g]:ee(t.value)}:{top:i.value.top}]});Z(()=>{V(c,g=>{g?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),Q(()=>{window.removeEventListener("scroll",S)});let b=0;function S(){const g=b>window.scrollY?"up":"down",l=s.value.getBoundingClientRect(),v=parseFloat(i.value.top??0),r=window.scrollY-Math.max(0,t.value-v),m=l.height+Math.max(t.value,v)-window.scrollY-window.innerHeight,k=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;l.height<window.innerHeight-v?(a.value="top",t.value=v):g==="up"&&a.value==="bottom"||g==="down"&&a.value==="top"?(t.value=window.scrollY+l.top-k,a.value=!0):g==="down"&&m<=0?(t.value=0,a.value="bottom"):g==="up"&&r<=0&&(k?a.value!=="top"&&(t.value=-r+k+v,a.value="top"):(t.value=l.top+r,a.value="top")),b=window.scrollY}return{isStuck:a,stickyStyles:f}}const Re=100,Ye=20;function q(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function A(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let c=e.length-1;c>0;c--){if(e[c].t===e[c-1].t)continue;const i=q(s),a=(e[c].d-e[c-1].d)/(e[c].t-e[c-1].t);s+=(a-i)*Math.abs(a),c===e.length-1&&(s*=.5)}return q(s)*1e3}function Ie(){const e={};function s(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new te(Ye))).push([a.timeStamp,t])})}function c(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function i(a){var g;const t=(g=e[a])==null?void 0:g.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const f=t[0],b=[],S=[];for(const l of t){if(f[0]-l[0]>Re)break;b.push({t:l[0],d:l[1].clientX}),S.push({t:l[0],d:l[1].clientY})}return{x:A(b),y:A(S),get direction(){const{x:l,y:v}=this,[r,m]=[Math.abs(l),Math.abs(v)];return r>m&&l>=0?"right":r>m&&l<=0?"left":m>r&&v>=0?"down":m>r&&v<=0?"up":Ne()}}}return{addMovement:s,endTouch:c,getVelocity:i}}function Ne(){throw new Error}function De(e){let{isActive:s,isTemporary:c,width:i,touchless:a,position:t}=e;Z(()=>{window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",P,{passive:!1}),window.addEventListener("touchend",M,{passive:!0})}),Q(()=>{window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",P),window.removeEventListener("touchend",M)});const f=h(()=>["left","right"].includes(t.value)),{addMovement:b,endTouch:S,getVelocity:g}=Ie();let l=!1;const v=B(!1),r=B(0),m=B(0);let k;function w(o,n){return(t.value==="left"?o:t.value==="right"?document.documentElement.clientWidth-o:t.value==="top"?o:t.value==="bottom"?document.documentElement.clientHeight-o:x())-(n?i.value:0)}function R(o){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const u=t.value==="left"?(o-m.value)/i.value:t.value==="right"?(document.documentElement.clientWidth-o-m.value)/i.value:t.value==="top"?(o-m.value)/i.value:t.value==="bottom"?(document.documentElement.clientHeight-o-m.value)/i.value:x();return n?Math.max(0,Math.min(1,u)):u}function C(o){if(a.value)return;const n=o.changedTouches[0].clientX,u=o.changedTouches[0].clientY,d=25,T=t.value==="left"?n<d:t.value==="right"?n>document.documentElement.clientWidth-d:t.value==="top"?u<d:t.value==="bottom"?u>document.documentElement.clientHeight-d:x(),p=s.value&&(t.value==="left"?n<i.value:t.value==="right"?n>document.documentElement.clientWidth-i.value:t.value==="top"?u<i.value:t.value==="bottom"?u>document.documentElement.clientHeight-i.value:x());(T||p||s.value&&c.value)&&(l=!0,k=[n,u],m.value=w(f.value?n:u,s.value),r.value=R(f.value?n:u),S(o),b(o))}function P(o){const n=o.changedTouches[0].clientX,u=o.changedTouches[0].clientY;if(l){if(!o.cancelable){l=!1;return}const T=Math.abs(n-k[0]),p=Math.abs(u-k[1]);(f.value?T>p&&T>3:p>T&&p>3)?(v.value=!0,l=!1):(f.value?p:T)>3&&(l=!1)}if(!v.value)return;o.preventDefault(),b(o);const d=R(f.value?n:u,!1);r.value=Math.max(0,Math.min(1,d)),d>1?m.value=w(f.value?n:u,!0):d<0&&(m.value=w(f.value?n:u,!1))}function M(o){if(l=!1,!v.value)return;b(o),v.value=!1;const n=g(o.changedTouches[0].identifier),u=Math.abs(n.x),d=Math.abs(n.y);(f.value?u>d&&u>400:d>u&&d>3)?s.value=n.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||x()):s.value=r.value>.5}const H=h(()=>v.value?{transform:t.value==="left"?`translateX(calc(-100% + ${r.value*i.value}px))`:t.value==="right"?`translateX(calc(100% - ${r.value*i.value}px))`:t.value==="top"?`translateY(calc(-100% + ${r.value*i.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${r.value*i.value}px))`:x(),transition:"none"}:void 0);return{isDragging:v,dragProgress:r,dragStyles:H}}function x(){throw new Error}const Le=["start","end","left","right","top","bottom"],We=ae({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Le.includes(e)},sticky:Boolean,...ne(),...oe(),...le(),...ue(),...ie(),...re(),...se({tag:"nav"}),...ce()},"VNavigationDrawer"),$e=ve()({name:"VNavigationDrawer",props:We(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:c,emit:i,slots:a}=s;const{isRtl:t}=de(),{themeClasses:f}=me(e),{borderClasses:b}=fe(e),{backgroundColorClasses:S,backgroundColorStyles:g}=$(z(e,"color")),{elevationClasses:l}=ge(e),{displayClasses:v,mobile:r}=he(e),{roundedClasses:m}=we(e),k=ye(),w=be(e,"modelValue",null,y=>!!y),{ssrBootStyles:R}=He(),{scopeId:C}=Pe(),P=Se(),M=B(!1),H=h(()=>e.rail&&e.expandOnHover&&M.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),o=h(()=>ke(e.location,t.value)),n=h(()=>!e.permanent&&(r.value||e.temporary)),u=h(()=>e.sticky&&!n.value&&o.value!=="bottom");Y(()=>e.expandOnHover&&e.rail!=null,()=>{V(M,y=>i("update:rail",!y))}),Y(()=>!e.disableResizeWatcher,()=>{V(n,y=>!e.permanent&&Ce(()=>w.value=!y))}),Y(()=>!e.disableRouteWatcher&&!!k,()=>{V(k.currentRoute,()=>n.value&&(w.value=!1))}),V(()=>e.permanent,y=>{y&&(w.value=!0)}),Te(()=>{e.modelValue!=null||n.value||(w.value=e.permanent||!r.value)});const{isDragging:d,dragProgress:T,dragStyles:p}=De({isActive:w,isTemporary:n,width:H,touchless:z(e,"touchless"),position:o}),I=h(()=>{const y=n.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):H.value;return d.value?y*T.value:y}),{layoutItemStyles:N,layoutItemScrimStyles:U}=Ee({id:e.name,order:h(()=>parseInt(e.order,10)),position:o,layoutSize:I,elementSize:H,active:h(()=>w.value||d.value),disableTransitions:h(()=>d.value),absolute:h(()=>e.absolute||u.value&&typeof D.value!="string")}),{isStuck:D,stickyStyles:K}=Ve({rootEl:P,isSticky:u,layoutItemStyles:N}),L=$(h(()=>typeof e.scrim=="string"?e.scrim:null)),j=h(()=>({...d.value?{opacity:T.value*.2,transition:"none"}:void 0,...U.value}));Me({VList:{bgColor:"transparent"}});function G(){M.value=!0}function J(){M.value=!1}return pe(()=>{const y=a.image||e.image;return E(Be,null,[E(e.tag,F({ref:P,onMouseenter:G,onMouseleave:J,class:["v-navigation-drawer",`v-navigation-drawer--${o.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":M.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":n.value,"v-navigation-drawer--active":w.value,"v-navigation-drawer--sticky":u.value},f.value,S.value,b.value,v.value,l.value,m.value,e.class],style:[g.value,N.value,p.value,R.value,K.value,e.style]},C,c),{default:()=>{var W,O,_,X;return[y&&E("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(W=a.image)==null?void 0:W.call(a,{image:e.image}):E("img",{src:e.image,alt:""},null)]),a.prepend&&E("div",{class:"v-navigation-drawer__prepend"},[(O=a.prepend)==null?void 0:O.call(a)]),E("div",{class:"v-navigation-drawer__content"},[(_=a.default)==null?void 0:_.call(a)]),a.append&&E("div",{class:"v-navigation-drawer__append"},[(X=a.append)==null?void 0:X.call(a)])]}}),E(xe,{name:"fade-transition"},{default:()=>[n.value&&(d.value||w.value)&&!!e.scrim&&E("div",F({class:["v-navigation-drawer__scrim",L.backgroundColorClasses.value],style:[j.value,L.backgroundColorStyles.value],onClick:()=>w.value=!1},C),null)]})])}),{isStuck:D}}});export{$e as V};