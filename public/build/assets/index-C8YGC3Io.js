import{ab as d,N as p,s as l,T as _,ba as g}from"./main-C3zi_SKQ.js";const y=d({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),h=(e,s)=>{let{slots:n}=s;const{transition:t,disabled:o,...c}=e,{component:r=_,...i}=typeof t=="object"?t:{};return p(r,l(typeof t=="string"?{name:o?"":t}:i,c,{disabled:o}),n)};function I(e,s){if(!g)return;const n=s.modifiers||{},t=s.value,{handler:o,options:c}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var f;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],b=arguments.length>1?arguments[1]:void 0;const a=(f=e._observe)==null?void 0:f[s.instance.$.uid];if(!a)return;const u=i.some(v=>v.isIntersecting);o&&(!n.quiet||a.init)&&(!n.once||u||a.init)&&o(u,i,b),u&&n.once?m(e,s):a.init=!0},c);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:r},r.observe(e)}function m(e,s){var t;const n=(t=e._observe)==null?void 0:t[s.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const O={mounted:I,unmounted:m};export{O as I,h as M,y as m};
