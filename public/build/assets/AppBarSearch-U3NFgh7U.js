import{ab as K,aH as P,aB as U,as as N,ad as z,aD as E,a0 as j,aI as q,aF as M,at as H,be as O,a6 as Q,bW as W,ag as X,b as s,ct as G,r as x,w as B,o as g,f as J,e as o,n,a4 as Y,cu as C,d,a2 as S,K as _,A as v,L as w,c as D,F as L,i as $,v as Z,x as A,z as R,R as ee,U as ae}from"./main-Z3go8Xzc.js";import{P as te}from"./vue3-perfect-scrollbar.esm-Dzq1JfO_.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as ie}from"./VCard-B6jmDFyP.js";import{V as I}from"./VCardText-Bjotn_eE.js";import{V as re}from"./VTextField-B1_fIF9I.js";import{V as le}from"./VDivider-SUUc1KGp.js";import{V as oe,a as ne}from"./VList-CuZQ3pYZ.js";import{V as de}from"./VDialog-BsSXCWXL.js";import"./VAvatar-DFwpysqo.js";import"./VImg-DvovO2d-.js";import"./index-CJOm_KJi.js";import"./VInput-KBboyctu.js";import"./index-BgvB69-2.js";import"./forwardRefs-D3j0TLhE.js";import"./ssrBoot-CoAt9jNJ.js";import"./dialog-transition-6CoWjX9C.js";import"./scopeId-Brt4yQ2W.js";const ce={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function ue(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return s("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[i])}function F(e){const[i,a]=e.split("@");return Array.from({length:a}).map(()=>b(i))}function b(e){let i=[];if(!e)return i;const a=ce[e];if(e!==a){if(e.includes(","))return T(e);if(e.includes("@"))return F(e);a.includes(",")?i=T(a):a.includes("@")?i=F(a):a&&i.push(b(a))}return[ue(e,i)]}function T(e){return e.replace(/\s/g,"").split(",").map(b)}const pe=K({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...P(),...U(),...N()},"VSkeletonLoader"),me=z()({name:"VSkeletonLoader",props:pe(),setup(e,i){let{slots:a}=i;const{backgroundColorClasses:p,backgroundColorStyles:y}=E(j(e,"color")),{dimensionStyles:k}=q(e),{elevationClasses:m}=M(e),{themeClasses:V}=H(e),{t:r}=O(),u=Q(()=>b(W(e.type).join(",")));return X(()=>{var h;const f=!a.default||e.loading;return s("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},V.value,p.value,m.value],style:[y.value,f?k.value:{}],"aria-busy":e.boilerplate?void 0:f,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:r(e.loadingText),role:e.boilerplate?void 0:"alert"},[f?u.value:(h=a.default)==null?void 0:h.call(a)])}),{}}}),fe=e=>(ee("data-v-01416ec8"),e=e(),ae(),e),he={class:"d-flex align-center text-high-emphasis me-1"},ge={class:"d-flex align-start"},ve={class:"h-100"},be={class:"h-100"},ye={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis pa-12"},ke={class:"d-flex align-center flex-wrap justify-center gap-2 text-h5 mt-3"},Ve=fe(()=>d("span",null,"No Result For ",-1)),xe={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchResults:{type:Array,required:!0},isLoading:{type:Boolean,required:!1}},emits:["update:isDialogVisible","search"],setup(e,{emit:i}){const a=e,p=i,{ctrl_k:y,meta_k:k}=G({passive:!1,onEventFired(t){t.ctrlKey&&t.key==="k"&&t.type==="keydown"&&t.preventDefault()}}),m=x(),V=x(),r=x("");B([y,k],()=>{p("update:isDialogVisible",!0)});const u=()=>{r.value="",p("update:isDialogVisible",!1)},f=t=>{var c,l;t.key==="ArrowDown"?(t.preventDefault(),(c=m.value)==null||c.focus("next")):t.key==="ArrowUp"&&(t.preventDefault(),(l=m.value)==null||l.focus("prev"))},h=t=>{r.value="",p("update:isDialogVisible",t)};return B(()=>a.isDialogVisible,()=>{r.value=""}),(t,c)=>(g(),J(de,{"max-width":"600","model-value":a.isDialogVisible,height:t.$vuetify.display.smAndUp?"531":"100%",fullscreen:t.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":h,onKeyup:C(u,["esc"])},{default:o(()=>[s(ie,{height:"100%",width:"100%",class:"position-relative"},{default:o(()=>[s(I,{class:"px-4",style:{"padding-block":"1rem 1.2rem"}},{default:o(()=>[s(re,{ref_key:"refSearchInput",ref:V,modelValue:n(r),"onUpdate:modelValue":[c[0]||(c[0]=l=>Y(r)?r.value=l:null),c[1]||(c[1]=l=>t.$emit("search",n(r)))],autofocus:"",density:"compact",variant:"plain",class:"app-bar-search-input",onKeyup:C(u,["esc"]),onKeydown:f},{"prepend-inner":o(()=>[d("div",he,[s(S,{size:"24",icon:"tabler-search"})])]),"append-inner":o(()=>[d("div",ge,[d("div",{class:"text-base text-disabled cursor-pointer me-3",onClick:u}," [esc] "),s(S,{icon:"tabler-x",size:"24",onClick:u})])]),_:1},8,["modelValue"])]),_:1}),s(le),s(n(te),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:o(()=>[_(d("div",ve,[v(t.$slots,"suggestions",{},void 0,!0)],512),[[w,!!a.searchResults&&!n(r)&&t.$slots.suggestions]]),e.isLoading?R("",!0):(g(),D(L,{key:0},[_(s(n(oe),{ref_key:"refSearchList",ref:m,density:"compact",class:"app-bar-search-list py-0"},{default:o(()=>[(g(!0),D(L,null,$(a.searchResults,l=>v(t.$slots,"searchResult",{key:l,item:l},()=>[s(n(ne),null,{default:o(()=>[Z(A(l),1)]),_:2},1024)],!0)),128))]),_:3},512),[[w,n(r).length&&!!a.searchResults.length]]),_(d("div",be,[v(t.$slots,"noData",{},()=>[s(I,{class:"h-100"},{default:o(()=>[d("div",ye,[s(S,{size:"64",icon:"tabler-file-alert"}),d("div",ke,[Ve,d("span",null,'"'+A(n(r))+'"',1)]),v(t.$slots,"noDataSuggestion",{},void 0,!0)])]),_:3})],!0)],512),[[w,!a.searchResults.length&&n(r).length]])],64)),e.isLoading?(g(),D(L,{key:1},$(3,l=>s(me,{key:l,type:"list-item-two-line"})),64)):R("",!0)]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen"]))}},Ee=se(xe,[["__scopeId","data-v-01416ec8"]]);export{Ee as default};
