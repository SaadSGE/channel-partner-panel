import{P as b}from"./vue3-perfect-scrollbar.esm-DFEerKVh.js";import{k as h,a as g,o,f as n,e,b as t,a1 as r,n as d,c as V,F as y,i as x,y as v,d as i,x as f}from"./main-cAWQX6jp.js";import{V as C}from"./VMenu-B0nSNvr6.js";import{V as S,a as k}from"./VCard-4bNPQQjd.js";import{V as w}from"./VDivider-B9Qd0m0I.js";import{V as A,a as I}from"./VRow-DC1nzTNA.js";import{V as z}from"./VAvatar-BJmyczTY.js";import"./VOverlay-C7tWCvmt.js";import"./easing-CjukEv2V.js";import"./lazy-C4XpMoWr.js";import"./scopeId-6-j3OWvd.js";import"./index-Hi4wUk4K.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Bv5CtFcc.js";import"./VCardText-BhEVnKCu.js";import"./VImg-mHq3aHKZ.js";/* empty css              */const B=i("h6",{class:"text-base font-weight-medium"}," Shortcuts ",-1),D={class:"text-base font-weight-medium mt-3 mb-0"},M={class:"text-sm mb-0"},P={__name:"Shortcuts",props:{togglerIcon:{type:String,required:!1,default:"tabler-layout-grid-add"},shortcuts:{type:Array,required:!0}},setup(l){const s=l,c=h();return(p,m)=>{const u=g("IconBtn");return o(),n(u,null,{default:e(()=>[t(r,{size:"24",icon:s.togglerIcon},null,8,["icon"]),t(C,{activator:"parent",offset:"12px",location:"bottom end"},{default:e(()=>[t(S,{width:p.$vuetify.display.smAndDown?330:380,"max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(k,{class:"py-3"},{append:e(()=>[t(u,{size:"small",color:"high-emphasis"},{default:e(()=>[t(r,{size:"20",icon:"tabler-plus"})]),_:1})]),default:e(()=>[B]),_:1}),t(w),t(d(b),{options:{wheelPropagation:!1}},{default:e(()=>[t(A,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),V(y,null,x(s.shortcuts,(a,_)=>(o(),n(I,{key:a.title,cols:"6",class:v(["text-center border-t cursor-pointer pa-6 shortcut-icon",(_+1)%2?"border-e":""]),onClick:$=>d(c).push(a.to)},{default:e(()=>[t(z,{variant:"tonal",size:"50"},{default:e(()=>[t(r,{size:"26",color:"high-emphasis",icon:a.icon},null,8,["icon"])]),_:2},1024),i("h6",D,f(a.title),1),i("p",M,f(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1},8,["width"])]),_:1})]),_:1})}}},Y={__name:"NavbarShortcuts",setup(l){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file-dollar",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-users",title:"Role Management",subtitle:"Permission",to:{name:"apps-roles"}},{icon:"tabler-device-desktop-analytics",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}}];return(c,p)=>{const m=P;return o(),n(m,{shortcuts:s})}}};export{Y as default};