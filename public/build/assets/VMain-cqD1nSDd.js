import{al as v,r as f,w as V,aH as c,aI as i,c0 as p,aK as m,c1 as L,aQ as y,b as u,aJ as b,c2 as k}from"./main-BvYP52SQ.js";import{u as S}from"./ssrBoot-DnPehlU3.js";const M=(e=void 0)=>{const{mdAndDown:l,name:a}=v(),t=e||l,s=f(!0);return(()=>{s.value=!t.value})(),V(a,()=>{s.value=!t.value}),{isLeftSidebarOpen:s}},g=c({...i(),...p()},"VLayout"),w=m()({name:"VLayout",props:g(),setup(e,l){let{slots:a}=l;const{layoutClasses:t,layoutStyles:s,getLayoutItem:o,items:n,layoutRef:d}=L(e);return y(()=>{var r;return u("div",{ref:d,class:[t.value,e.class],style:[s.value,e.style]},[(r=a.default)==null?void 0:r.call(a)])}),{getLayoutItem:o,items:n}}}),B=c({scrollable:Boolean,...i(),...b({tag:"main"})},"VMain"),C=m()({name:"VMain",props:B(),setup(e,l){let{slots:a}=l;const{mainStyles:t}=k(),{ssrBootStyles:s}=S();return y(()=>u(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[t.value,s.value,e.style]},{default:()=>{var o,n;return[e.scrollable?u("div",{class:"v-main__scroller"},[(o=a.default)==null?void 0:o.call(a)]):(n=a.default)==null?void 0:n.call(a)]}})),{}}});export{w as V,C as a,M as u};
