import{m as k,V as p,a as y}from"./VOverlay-BK6G1Zrr.js";import{f as A}from"./forwardRefs-C-GTDzx5.js";import{aL as M,bi as S,aO as K,aP as O,aR as U,a5 as V,r as I,V as R,as as L,P as F,w as N,s as g,aU as j,b,aV as B,aB as $,bu as w,bv as q,bl as P}from"./main-p-5DQ3fZ.js";import{u as z}from"./scopeId-BtuOjnYq.js";import{V as G}from"./dialog-transition-NCKnRJuF.js";const H=M({id:String,...S(k({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:G}}),["absolute"])},"VMenu"),_=K()({name:"VMenu",props:H(),emits:{"update:modelValue":l=>!0},setup(l,E){let{slots:i}=E;const r=O(l,"modelValue"),{scopeId:x}=z(),h=U(),f=V(()=>l.id||`v-menu-${h}`),n=I(),a=R(p,null),c=L(0);F(p,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout(()=>{c.value||(r.value=!1,a==null||a.closeParents())},40)}});async function v(e){var s,u,d;const t=e.relatedTarget,o=e.target;await $(),r.value&&t!==o&&((s=n.value)!=null&&s.contentEl)&&((u=n.value)!=null&&u.globalTop)&&![document,n.value.contentEl].includes(o)&&!n.value.contentEl.contains(o)&&((d=w(n.value.contentEl)[0])==null||d.focus())}N(r,e=>{e?(a==null||a.register(),document.addEventListener("focusin",v,{once:!0})):(a==null||a.unregister(),document.removeEventListener("focusin",v))});function C(){a==null||a.closeParents()}function D(e){var t,o,s;l.disabled||e.key==="Tab"&&(q(w((t=n.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",d=>d.tabIndex>=0)||(r.value=!1,(s=(o=n.value)==null?void 0:o.activatorEl)==null||s.focus()))}function m(e){var o;if(l.disabled)return;const t=(o=n.value)==null?void 0:o.contentEl;t&&r.value?e.key==="ArrowDown"?(e.preventDefault(),P(t,"next")):e.key==="ArrowUp"&&(e.preventDefault(),P(t,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(r.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const T=V(()=>g({"aria-haspopup":"menu","aria-expanded":String(r.value),"aria-owns":f.value,onKeydown:m},l.activatorProps));return j(()=>{const e=y.filterProps(l);return b(y,g({ref:n,id:f.value,class:["v-menu",l.class],style:l.style},e,{modelValue:r.value,"onUpdate:modelValue":t=>r.value=t,absolute:!0,activatorProps:T.value,"onClick:outside":C,onKeydown:D},x),{activator:i.activator,default:function(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return b(B,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...o)]}})}})}),A({id:f,ΨopenChildren:c},n)}});export{_ as V};
