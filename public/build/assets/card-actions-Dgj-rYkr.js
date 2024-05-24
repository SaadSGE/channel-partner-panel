import{r as _,a4 as S,a as N,o as u,f as h,e as t,m as v,c as B,b as e,as as x,at as D,d as a,z as V,a0 as f,I as Y,y as C,t as o,v as b,J as w,K as O,a2 as z,ad as E,h as P,F as U}from"./main-BvYP52SQ.js";import{V as A}from"./index-BizsYg1A.js";import{V as j,a as F,b as J}from"./VCard-jdokyVzG.js";import{a as K}from"./VOverlay-Bc38tH3X.js";import{V as G,a as p}from"./VRow-_sMVvyKw.js";import{V as m}from"./VCardText-BWN8dbxQ.js";import{V as H}from"./VTable-DyBViOxg.js";import{V as M}from"./VChip-DpU9i33E.js";import"./VAvatar-CE6b77hk.js";import"./VImg-C1COJ1y2.js";import"./easing-CjukEv2V.js";import"./lazy-CEsVGIel.js";import"./scopeId-CLB9B5My.js";/* empty css              */import"./VSlideGroup-CQDnPb98.js";const Q={key:0},W={class:"v-card-content"},X=Object.assign({inheritAttrs:!1},{__name:"AppCardActions",props:{collapsed:{type:Boolean,required:!1,default:!1},noActions:{type:Boolean,required:!1,default:!1},actionCollapsed:{type:Boolean,required:!1,default:!1},actionRefresh:{type:Boolean,required:!1,default:!1},actionRemove:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,skipCheck:!0,default:void 0},title:{type:String,required:!1,default:void 0}},emits:["collapsed","refresh","trash","initialLoad","update:loading"],setup(l,{emit:y}){const s=l,r=y,g=_(!1),c=S({get(){return s.loading!==void 0?s.loading:g.value},set(d){s.loading!==void 0?r("update:loading",d):g.value=d}}),n=_(s.collapsed),i=_(!1),I=()=>{c.value=!1},T=()=>{n.value=!n.value,r("collapsed",n.value)},$=()=>{c.value=!0,r("refresh",I)},q=()=>{i.value=!0,r("trash")};return(d,k)=>{const R=N("IconBtn");return u(),h(A,null,{default:t(()=>[v(i)?C("",!0):(u(),B("div",Q,[e(j,x(D(d.$attrs)),{default:t(()=>[e(F,null,{append:t(()=>[a("div",null,[V(d.$slots,"before-actions"),(!(l.actionRemove||l.actionRefresh)||l.actionCollapsed)&&!l.noActions?(u(),h(R,{key:0,onClick:T},{default:t(()=>[e(f,{size:"20",icon:"tabler-chevron-up",style:Y([{transform:v(n)?"rotate(-180deg)":void 0},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):C("",!0),(!(l.actionRemove||l.actionCollapsed)||l.actionRefresh)&&!l.noActions?(u(),h(R,{key:1,onClick:$},{default:t(()=>[e(f,{size:"20",icon:"tabler-refresh"})]),_:1})):C("",!0),(!(l.actionRefresh||l.actionCollapsed)||l.actionRemove)&&!l.noActions?(u(),h(R,{key:2,onClick:q},{default:t(()=>[e(f,{size:"20",icon:"tabler-x"})]),_:1})):C("",!0)])]),default:t(()=>[s.title||d.$slots.title?(u(),h(J,{key:0},{default:t(()=>[V(d.$slots,"title",{},()=>[o(b(s.title),1)])]),_:3})):C("",!0)]),_:3}),e(A,null,{default:t(()=>[w(a("div",W,[V(d.$slots,"default")],512),[[O,!v(n)]])]),_:3}),e(K,{modelValue:v(c),"onUpdate:modelValue":k[0]||(k[0]=L=>z(c)?c.value=L:null),contained:"",persistent:"","scroll-strategy":"none",class:"align-center justify-center"},{default:t(()=>[e(E,{indeterminate:""})]),_:1},8,["modelValue"])]),_:3},16)]))]),_:3})}}}),Z=a("thead",null,[a("tr",null,[a("th",{scope:"col"}," ACTION "),a("th",{scope:"col"}," ICON "),a("th",{scope:"col"}," DETAILS ")])],-1),ee=a("p",null,[o("You can specifically add Initial Load action using "),a("code",null,"loading"),o(" prop")],-1),te=a("span",null,"Refresh the page to see it again in action.",-1),ae=a("p",null,[o("You can specifically add collapsible action using "),a("code",null,"actionCollapse"),o(" prop")],-1),oe=a("p",null,[o("You can specifically add refresh action using "),a("code",null,"actionRefresh"),o(" prop")],-1),le=a("p",null,[o("You can specifically add remove action using "),a("code",null,"actionRemove"),o(" prop")],-1),ne=a("p",null,[a("code",null,"app-card-actions"),o(" also provides "),a("code",null,"before-actions"),o(" and "),a("code",null,"after-actions"),o(" slot")],-1),se=a("span",null,"You can find more details in our documentation",-1),Ve={__name:"card-actions",setup(l){const y=[{action:"Collapse",icon:"tabler-chevron-up",details:"Collapse card content using collapse action."},{action:"Refresh Content",icon:"tabler-refresh",details:"Refresh your card content using refresh action."},{action:"Remove Card",icon:"tabler-x",details:"Remove card from page using remove card action"}],s=_(!0);setTimeout(()=>{s.value=!1},3e3);const r=g=>{setTimeout(g,3e3)};return(g,c)=>{const n=X;return u(),h(G,null,{default:t(()=>[e(p,{cols:"12"},{default:t(()=>[e(n,{title:"Cards Actions",onRefresh:r},{default:t(()=>[e(m,null,{default:t(()=>[e(H,null,{default:t(()=>[Z,a("tbody",null,[(u(),B(U,null,P(y,i=>a("tr",{key:i.icon},[a("td",null,b(i.action),1),a("td",null,[e(f,{size:"20",icon:i.icon},null,8,["icon"])]),a("td",null,b(i.details),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{loading:v(s),"onUpdate:loading":c[0]||(c[0]=i=>z(s)?s.value=i:null),title:"Initial Load","no-actions":""},{default:t(()=>[e(m,null,{default:t(()=>[ee,te]),_:1})]),_:1},8,["loading"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{"action-collapsed":"",title:"Collapsible"},{default:t(()=>[e(m,null,{default:t(()=>[ae,a("span",null,[o("Click on "),e(f,{size:"20",icon:"tabler-chevron-up"}),o(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Refresh Content","action-refresh":"",onRefresh:r},{default:t(()=>[e(m,null,{default:t(()=>[oe,a("span",null,[o("Click on "),e(f,{size:"20",icon:"tabler-refresh"}),o(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Remove Card","action-remove":""},{default:t(()=>[e(m,null,{default:t(()=>[le,a("span",null,[o("Click on "),e(f,{size:"20",icon:"tabler-x"}),o(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Slots",onRefresh:r},{"before-actions":t(()=>[e(M,{class:"me-3",color:"primary",size:"small"},{default:t(()=>[o(" 3 Updates ")]),_:1})]),default:t(()=>[e(m,null,{default:t(()=>[ne,se]),_:1})]),_:1})]),_:1})]),_:1})}}};export{Ve as default};
