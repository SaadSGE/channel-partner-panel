import{m as k,a as A,b as p,V as y}from"./dialog-transition-D--QosfA.js";import{f as M}from"./forwardRefs-D3j0TLhE.js";import{ab as S,ac as K,ad as I,ae as O,af as U,a6 as b,r as R,V as F,aJ as L,P as N,w as j,s as g,ag as G,b as V,aG as J,b3 as $,b4 as w,b5 as q,b2 as P}from"./main-0zPiZQmW.js";import{u as z}from"./scopeId-vLqy-QvQ.js";const B=S({id:String,...K(k({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:A}}),["absolute"])},"VMenu"),Z=I()({name:"VMenu",props:B(),emits:{"update:modelValue":l=>!0},setup(l,E){let{slots:i}=E;const r=O(l,"modelValue"),{scopeId:x}=z(),h=U(),f=b(()=>l.id||`v-menu-${h}`),n=R(),a=F(p,null),c=L(0);N(p,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout(()=>{c.value||(r.value=!1,a==null||a.closeParents())},40)}});async function v(e){var s,u,d;const t=e.relatedTarget,o=e.target;await $(),r.value&&t!==o&&((s=n.value)!=null&&s.contentEl)&&((u=n.value)!=null&&u.globalTop)&&![document,n.value.contentEl].includes(o)&&!n.value.contentEl.contains(o)&&((d=w(n.value.contentEl)[0])==null||d.focus())}j(r,e=>{e?(a==null||a.register(),document.addEventListener("focusin",v,{once:!0})):(a==null||a.unregister(),document.removeEventListener("focusin",v))});function C(){a==null||a.closeParents()}function D(e){var t,o,s;l.disabled||e.key==="Tab"&&(q(w((t=n.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",d=>d.tabIndex>=0)||(r.value=!1,(s=(o=n.value)==null?void 0:o.activatorEl)==null||s.focus()))}function m(e){var o;if(l.disabled)return;const t=(o=n.value)==null?void 0:o.contentEl;t&&r.value?e.key==="ArrowDown"?(e.preventDefault(),P(t,"next")):e.key==="ArrowUp"&&(e.preventDefault(),P(t,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(r.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const T=b(()=>g({"aria-haspopup":"menu","aria-expanded":String(r.value),"aria-owns":f.value,onKeydown:m},l.activatorProps));return G(()=>{const e=y.filterProps(l);return V(y,g({ref:n,id:f.value,class:["v-menu",l.class],style:l.style},e,{modelValue:r.value,"onUpdate:modelValue":t=>r.value=t,absolute:!0,activatorProps:T.value,"onClick:outside":C,onKeydown:D},x),{activator:i.activator,default:function(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return V(J,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...o)]}})}})}),M({id:f,ΨopenChildren:c},n)}});export{Z as V};