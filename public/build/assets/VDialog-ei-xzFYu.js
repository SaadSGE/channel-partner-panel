import{m as P,a as d}from"./VOverlay-5L4FjIyo.js";import{f as y}from"./forwardRefs-C-GTDzx5.js";import{aK as D,aN as h,aO as S,r as w,bK as x,w as m,aA as T,a5 as B,s as v,aT as F,b as g,aU as I,bt as O}from"./main-C3aczJNT.js";import{u as R}from"./scopeId-Coc7ZcXg.js";import{V as A}from"./dialog-transition-JvXzrIWR.js";const N=D({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...P({origin:"center center",scrollStrategy:"block",transition:{component:A},zIndex:2400})},"VDialog"),z=h()({name:"VDialog",props:N(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=S(a,"modelValue"),{scopeId:V}=R(),o=w();function i(l){var r,s;const e=l.relatedTarget,t=l.target;if(e!==t&&((r=o.value)!=null&&r.contentEl)&&((s=o.value)!=null&&s.globalTop)&&![document,o.value.contentEl].includes(t)&&!o.value.contentEl.contains(t)){const u=O(o.value.contentEl);if(!u.length)return;const f=u[0],E=u[u.length-1];e===f?E.focus():f.focus()}}x&&m(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),m(n,async l=>{var e,t;await T(),l?(e=o.value.contentEl)==null||e.focus({preventScroll:!0}):(t=o.value.activatorEl)==null||t.focus({preventScroll:!0})});const b=B(()=>v({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return F(()=>{const l=d.filterProps(a);return g(d,v({ref:o,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:b.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return g(I,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...t)]}})}})}),y({},o)}});export{z as V};
