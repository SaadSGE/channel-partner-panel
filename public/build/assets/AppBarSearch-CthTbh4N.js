import{aL as K,aZ as P,a_ as U,b1 as N,aO as j,bj as z,a0 as E,b9 as q,ba as M,b5 as O,bx as Q,a5 as X,cg as Z,aU as G,b as s,d7 as H,r as x,w as B,o as g,f as J,e as l,n,a3 as W,dd as C,d,a1 as S,K as _,A as v,L as w,c as D,F as L,i as $,v as Y,x as A,z as R,R as ee,U as te}from"./main-p-5DQ3fZ.js";import{P as ae}from"./vue3-perfect-scrollbar.esm-DBUKP80k.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as ie}from"./VCard-Du2y21h0.js";import{V as I}from"./VCardText-CbRypzFE.js";import{V as re}from"./VTextField-CWgA6buZ.js";import{V as oe}from"./VDivider-CLUPjuaS.js";import{V as le,a as ne}from"./VList-O1LucjXW.js";import{V as de}from"./VDialog-h66PTUdI.js";import"./VAvatar-BXy3EmlP.js";import"./VImg-BimLayih.js";import"./index-DyCmQs2G.js";/* empty css                   */import"./VCounter-CvqiO-zE.js";import"./index-B5-sYsAC.js";import"./VField-DhQXCcnx.js";import"./form-Ca0bS9AQ.js";import"./easing-CjukEv2V.js";import"./VInput-CTdjTCAX.js";import"./forwardRefs-C-GTDzx5.js";import"./ssrBoot-Cfbx2I9P.js";import"./VOverlay-BK6G1Zrr.js";import"./lazy-BUy2qP8o.js";import"./scopeId-BtuOjnYq.js";import"./dialog-transition-NCKnRJuF.js";const ce={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function ue(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return s("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[i])}function T(e){const[i,t]=e.split("@");return Array.from({length:t}).map(()=>b(i))}function b(e){let i=[];if(!e)return i;const t=ce[e];if(e!==t){if(e.includes(","))return F(e);if(e.includes("@"))return T(e);t.includes(",")?i=F(t):t.includes("@")?i=T(t):t&&i.push(b(t))}return[ue(e,i)]}function F(e){return e.replace(/\s/g,"").split(",").map(b)}const pe=K({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...P(),...U(),...N()},"VSkeletonLoader"),me=j()({name:"VSkeletonLoader",props:pe(),setup(e,i){let{slots:t}=i;const{backgroundColorClasses:p,backgroundColorStyles:y}=z(E(e,"color")),{dimensionStyles:k}=q(e),{elevationClasses:m}=M(e),{themeClasses:V}=O(e),{t:r}=Q(),u=X(()=>b(Z(e.type).join(",")));return G(()=>{var h;const f=!t.default||e.loading;return s("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},V.value,p.value,m.value],style:[y.value,f?k.value:{}],"aria-busy":e.boilerplate?void 0:f,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:r(e.loadingText),role:e.boilerplate?void 0:"alert"},[f?u.value:(h=t.default)==null?void 0:h.call(t)])}),{}}}),fe=e=>(ee("data-v-01416ec8"),e=e(),te(),e),he={class:"d-flex align-center text-high-emphasis me-1"},ge={class:"d-flex align-start"},ve={class:"h-100"},be={class:"h-100"},ye={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis pa-12"},ke={class:"d-flex align-center flex-wrap justify-center gap-2 text-h5 mt-3"},Ve=fe(()=>d("span",null,"No Result For ",-1)),xe={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchResults:{type:Array,required:!0},isLoading:{type:Boolean,required:!1}},emits:["update:isDialogVisible","search"],setup(e,{emit:i}){const t=e,p=i,{ctrl_k:y,meta_k:k}=H({passive:!1,onEventFired(a){a.ctrlKey&&a.key==="k"&&a.type==="keydown"&&a.preventDefault()}}),m=x(),V=x(),r=x("");B([y,k],()=>{p("update:isDialogVisible",!0)});const u=()=>{r.value="",p("update:isDialogVisible",!1)},f=a=>{var c,o;a.key==="ArrowDown"?(a.preventDefault(),(c=m.value)==null||c.focus("next")):a.key==="ArrowUp"&&(a.preventDefault(),(o=m.value)==null||o.focus("prev"))},h=a=>{r.value="",p("update:isDialogVisible",a)};return B(()=>t.isDialogVisible,()=>{r.value=""}),(a,c)=>(g(),J(de,{"max-width":"600","model-value":t.isDialogVisible,height:a.$vuetify.display.smAndUp?"531":"100%",fullscreen:a.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":h,onKeyup:C(u,["esc"])},{default:l(()=>[s(ie,{height:"100%",width:"100%",class:"position-relative"},{default:l(()=>[s(I,{class:"px-4",style:{"padding-block":"1rem 1.2rem"}},{default:l(()=>[s(re,{ref_key:"refSearchInput",ref:V,modelValue:n(r),"onUpdate:modelValue":[c[0]||(c[0]=o=>W(r)?r.value=o:null),c[1]||(c[1]=o=>a.$emit("search",n(r)))],autofocus:"",density:"compact",variant:"plain",class:"app-bar-search-input",onKeyup:C(u,["esc"]),onKeydown:f},{"prepend-inner":l(()=>[d("div",he,[s(S,{size:"24",icon:"tabler-search"})])]),"append-inner":l(()=>[d("div",ge,[d("div",{class:"text-base text-disabled cursor-pointer me-3",onClick:u}," [esc] "),s(S,{icon:"tabler-x",size:"24",onClick:u})])]),_:1},8,["modelValue"])]),_:1}),s(oe),s(n(ae),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:l(()=>[_(d("div",ve,[v(a.$slots,"suggestions",{},void 0,!0)],512),[[w,!!t.searchResults&&!n(r)&&a.$slots.suggestions]]),e.isLoading?R("",!0):(g(),D(L,{key:0},[_(s(n(le),{ref_key:"refSearchList",ref:m,density:"compact",class:"app-bar-search-list py-0"},{default:l(()=>[(g(!0),D(L,null,$(t.searchResults,o=>v(a.$slots,"searchResult",{key:o,item:o},()=>[s(n(ne),null,{default:l(()=>[Y(A(o),1)]),_:2},1024)],!0)),128))]),_:3},512),[[w,n(r).length&&!!t.searchResults.length]]),_(d("div",be,[v(a.$slots,"noData",{},()=>[s(I,{class:"h-100"},{default:l(()=>[d("div",ye,[s(S,{size:"64",icon:"tabler-file-alert"}),d("div",ke,[Ve,d("span",null,'"'+A(n(r))+'"',1)]),v(a.$slots,"noDataSuggestion",{},void 0,!0)])]),_:3})],!0)],512),[[w,!t.searchResults.length&&n(r).length]])],64)),e.isLoading?(g(),D(L,{key:1},$(3,o=>s(me,{key:o,type:"list-item-two-line"})),64)):R("",!0)]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen"]))}},Ze=se(xe,[["__scopeId","data-v-01416ec8"]]);export{Ze as default};
