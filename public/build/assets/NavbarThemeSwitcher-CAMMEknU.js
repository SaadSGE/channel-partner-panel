import{a7 as f,r as v,w as y,a as V,o as c,f as i,e as o,b as s,a0 as g,m as n,d as k,v as u,a2 as x,c as w,F as b,h as B,t as S}from"./main-BvYP52SQ.js";import{V as C}from"./VTooltip-C4yD4QdP.js";import{V as I}from"./VMenu-hNkc-VcH.js";import{V as T,a as N}from"./VList-B9A1hChN.js";import"./VOverlay-Bc38tH3X.js";import"./easing-CjukEv2V.js";import"./lazy-CEsVGIel.js";import"./scopeId-CLB9B5My.js";import"./VImg-C1COJ1y2.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CTdH1v6l.js";import"./index-BizsYg1A.js";import"./ssrBoot-DnPehlU3.js";import"./VAvatar-CE6b77hk.js";import"./VDivider-D_SmbYXv.js";const z={class:"text-capitalize"},L={__name:"ThemeSwitcher",props:{themes:{type:Array,required:!0}},setup(m){const r=m,t=f(),a=v([t.theme]);return y(()=>t.theme,()=>{a.value=[t.theme]},{deep:!0}),(p,l)=>{const d=V("IconBtn");return c(),i(d,{color:"rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))"},{default:o(()=>{var h;return[s(g,{icon:(h=r.themes.find(e=>e.name===n(t).theme))==null?void 0:h.icon,size:"24"},null,8,["icon"]),s(C,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:o(()=>[k("span",z,u(n(t).theme),1)]),_:1}),s(I,{activator:"parent",offset:"12px",width:180},{default:o(()=>[s(T,{selected:n(a),"onUpdate:selected":l[0]||(l[0]=e=>x(a)?a.value=e:null),mandatory:""},{default:o(()=>[(c(!0),w(b,null,B(r.themes,({name:e,icon:_})=>(c(),i(N,{key:e,value:e,"prepend-icon":_,color:"primary",class:"text-capitalize",onClick:()=>{n(t).theme=e}},{default:o(()=>[S(u(e),1)]),_:2},1032,["value","prepend-icon","onClick"]))),128))]),_:1},8,["selected"])]),_:1})]}),_:1})}}},P={__name:"NavbarThemeSwitcher",setup(m){const r=[{name:"light",icon:"tabler-sun-high"},{name:"dark",icon:"tabler-moon-stars"},{name:"system",icon:"tabler-device-desktop-analytics"}];return(t,a)=>{const p=L;return c(),i(p,{themes:r})}}};export{P as default};
