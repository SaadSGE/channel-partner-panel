import{r as m,a6 as z,a as $,o as n,f as r,e as a,n as u,c as S,b as l,bU as I,bV as N,d as V,A as v,a2 as g,J as w,z as d,v as L,x as P,K as T,L as j,a4 as x,cd as D}from"./main-Z3go8Xzc.js";import{V as h}from"./index-BgvB69-2.js";import{V as E,a as O,b as U}from"./VCard-B6jmDFyP.js";import{V as J}from"./dialog-transition-6CoWjX9C.js";const K={key:0},F={class:"v-card-content"},W=Object.assign({inheritAttrs:!1},{__name:"AppCardActions",props:{collapsed:{type:Boolean,required:!1,default:!1},noActions:{type:Boolean,required:!1,default:!1},actionCollapsed:{type:Boolean,required:!1,default:!1},actionRefresh:{type:Boolean,required:!1,default:!1},actionRemove:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,skipCheck:!0,default:void 0},title:{type:String,required:!1,default:void 0}},emits:["collapsed","refresh","trash","initialLoad","update:loading"],setup(e,{emit:k}){const o=e,c=k,p=m(!1),s=z({get(){return o.loading!==void 0?o.loading:p.value},set(t){o.loading!==void 0?c("update:loading",t):p.value=t}}),i=m(o.collapsed),C=m(!1),R=()=>{s.value=!1},B=()=>{i.value=!i.value,c("collapsed",i.value)},b=()=>{s.value=!0,c("refresh",R)},A=()=>{C.value=!0,c("trash")};return(t,y)=>{const f=$("IconBtn");return n(),r(h,null,{default:a(()=>[u(C)?d("",!0):(n(),S("div",K,[l(E,I(N(t.$attrs)),{default:a(()=>[l(O,null,{append:a(()=>[V("div",null,[v(t.$slots,"before-actions"),(!(e.actionRemove||e.actionRefresh)||e.actionCollapsed)&&!e.noActions?(n(),r(f,{key:0,onClick:B},{default:a(()=>[l(g,{size:"20",icon:"tabler-chevron-up",style:w([{transform:u(i)?"rotate(-180deg)":void 0},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):d("",!0),(!(e.actionRemove||e.actionCollapsed)||e.actionRefresh)&&!e.noActions?(n(),r(f,{key:1,onClick:b},{default:a(()=>[l(g,{size:"20",icon:"tabler-refresh"})]),_:1})):d("",!0),(!(e.actionRefresh||e.actionCollapsed)||e.actionRemove)&&!e.noActions?(n(),r(f,{key:2,onClick:A},{default:a(()=>[l(g,{size:"20",icon:"tabler-x"})]),_:1})):d("",!0)])]),default:a(()=>[o.title||t.$slots.title?(n(),r(U,{key:0},{default:a(()=>[v(t.$slots,"title",{},()=>[L(P(o.title),1)])]),_:3})):d("",!0)]),_:3}),l(h,null,{default:a(()=>[T(V("div",F,[v(t.$slots,"default")],512),[[j,!u(i)]])]),_:3}),l(J,{modelValue:u(s),"onUpdate:modelValue":y[0]||(y[0]=q=>x(s)?s.value=q:null),contained:"",persistent:"","scroll-strategy":"none",class:"align-center justify-center"},{default:a(()=>[l(D,{indeterminate:""})]),_:1},8,["modelValue"])]),_:3},16)]))]),_:3})}}});export{W as _};
