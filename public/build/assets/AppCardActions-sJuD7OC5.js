import{r as m,a5 as z,a as $,o as n,f as r,e as a,n as c,c as S,b as l,d as h,A as v,a1 as g,J as w,z as d,K as I,L as N,a3 as L,ae as P,av as T,aw as j,v as x,x as D}from"./main-46fJF4Ly.js";import{V}from"./index-DkHFl9i8.js";import{a as E,b as O,V as J}from"./VCard-DMTjdXUy.js";import{a as K}from"./VOverlay-BzXT9Jk8.js";const U={key:0},F={class:"v-card-content"},W=Object.assign({inheritAttrs:!1},{__name:"AppCardActions",props:{collapsed:{type:Boolean,required:!1,default:!1},noActions:{type:Boolean,required:!1,default:!1},actionCollapsed:{type:Boolean,required:!1,default:!1},actionRefresh:{type:Boolean,required:!1,default:!1},actionRemove:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,skipCheck:!0,default:void 0},title:{type:String,required:!1,default:void 0}},emits:["collapsed","refresh","trash","initialLoad","update:loading"],setup(e,{emit:k}){const o=e,u=k,p=m(!1),s=z({get(){return o.loading!==void 0?o.loading:p.value},set(t){o.loading!==void 0?u("update:loading",t):p.value=t}}),i=m(o.collapsed),C=m(!1),R=()=>{s.value=!1},B=()=>{i.value=!i.value,u("collapsed",i.value)},A=()=>{s.value=!0,u("refresh",R)},b=()=>{C.value=!0,u("trash")};return(t,y)=>{const f=$("IconBtn");return n(),r(V,null,{default:a(()=>[c(C)?d("",!0):(n(),S("div",U,[l(J,T(j(t.$attrs)),{default:a(()=>[l(E,null,{append:a(()=>[h("div",null,[v(t.$slots,"before-actions"),(!(e.actionRemove||e.actionRefresh)||e.actionCollapsed)&&!e.noActions?(n(),r(f,{key:0,onClick:B},{default:a(()=>[l(g,{size:"20",icon:"tabler-chevron-up",style:w([{transform:c(i)?"rotate(-180deg)":void 0},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):d("",!0),(!(e.actionRemove||e.actionCollapsed)||e.actionRefresh)&&!e.noActions?(n(),r(f,{key:1,onClick:A},{default:a(()=>[l(g,{size:"20",icon:"tabler-refresh"})]),_:1})):d("",!0),(!(e.actionRefresh||e.actionCollapsed)||e.actionRemove)&&!e.noActions?(n(),r(f,{key:2,onClick:b},{default:a(()=>[l(g,{size:"20",icon:"tabler-x"})]),_:1})):d("",!0)])]),default:a(()=>[o.title||t.$slots.title?(n(),r(O,{key:0},{default:a(()=>[v(t.$slots,"title",{},()=>[x(D(o.title),1)])]),_:3})):d("",!0)]),_:3}),l(V,null,{default:a(()=>[I(h("div",F,[v(t.$slots,"default")],512),[[N,!c(i)]])]),_:3}),l(K,{modelValue:c(s),"onUpdate:modelValue":y[0]||(y[0]=q=>L(s)?s.value=q:null),contained:"",persistent:"","scroll-strategy":"none",class:"align-center justify-center"},{default:a(()=>[l(P,{indeterminate:""})]),_:1},8,["modelValue"])]),_:3},16)]))]),_:3})}}});export{W as _};
