import{a8 as f,r as v,w as y,a as V,o as i,f as c,e as o,b as s,a1 as g,n,d as x,x as d,a3 as k,c as w,F as b,i as B,v as S}from"./main-DHHr-wHG.js";import{V as C}from"./VTooltip-W1BOCRt1.js";import{V as I}from"./VMenu-DQdwknXc.js";import{V as T,a as N}from"./VList-BpmkC8f2.js";import"./VOverlay-C4EES5M3.js";import"./easing-CjukEv2V.js";import"./lazy-aiJSzJZ-.js";import"./scopeId-BKm1D_ij.js";import"./index-CZ6xOcO3.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B4jHxgID.js";import"./index-D8dg9ABk.js";import"./ssrBoot-BFRn25h5.js";import"./VAvatar-DXwB4bJ3.js";import"./VImg-DwCywSuk.js";import"./VDivider-D7vOLDud.js";const z={class:"text-capitalize"},L={__name:"ThemeSwitcher",props:{themes:{type:Array,required:!0}},setup(m){const r=m,t=f(),a=v([t.theme]);return y(()=>t.theme,()=>{a.value=[t.theme]},{deep:!0}),(p,l)=>{const h=V("IconBtn");return i(),c(h,{color:"rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))"},{default:o(()=>{var u;return[s(g,{icon:(u=r.themes.find(e=>e.name===n(t).theme))==null?void 0:u.icon,size:"24"},null,8,["icon"]),s(C,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:o(()=>[x("span",z,d(n(t).theme),1)]),_:1}),s(I,{activator:"parent",offset:"12px",width:180},{default:o(()=>[s(T,{selected:n(a),"onUpdate:selected":l[0]||(l[0]=e=>k(a)?a.value=e:null),mandatory:""},{default:o(()=>[(i(!0),w(b,null,B(r.themes,({name:e,icon:_})=>(i(),c(N,{key:e,value:e,"prepend-icon":_,color:"primary",class:"text-capitalize",onClick:()=>{n(t).theme=e}},{default:o(()=>[S(d(e),1)]),_:2},1032,["value","prepend-icon","onClick"]))),128))]),_:1},8,["selected"])]),_:1})]}),_:1})}}},Q={__name:"NavbarThemeSwitcher",setup(m){const r=[{name:"light",icon:"tabler-sun-high"},{name:"dark",icon:"tabler-moon-stars"},{name:"system",icon:"tabler-device-desktop-analytics"}];return(t,a)=>{const p=L;return i(),c(p,{themes:r})}}};export{Q as default};
