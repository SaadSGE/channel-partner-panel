import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as f,a as V}from"./VRow-iwFKqp57.js";import{V as h}from"./form-ByD6MPa6.js";import{o as r,f as d,e as o,b as s,c as g,F as v,h as x,q as c,x as C,z as y,d as l,a0 as R,v as i,y as k}from"./main--Sxm5_s2.js";import{a as b,V as q}from"./VRadioGroup-Bnrh3flO.js";const B={class:"d-flex flex-column align-center text-center gap-2"},S={class:"text-h6"},w={class:"text-body-2 mb-0"},I={__name:"CustomRadiosWithIcon",props:{selectedRadio:{type:String,required:!0},radioContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedRadio"],setup(n,{emit:u}){const t=n,p=u,m=a=>{a!==null&&p("update:selectedRadio",a)};return(a,N)=>t.radioContent?(r(),d(q,{key:0,"model-value":t.selectedRadio,class:"custom-input-wrapper","onUpdate:modelValue":m},{default:o(()=>[s(f,null,{default:o(()=>[(r(!0),g(v,null,x(t.radioContent,e=>(r(),d(V,c({key:e.title},n.gridColumn),{default:o(()=>[s(h,{class:C(["custom-input custom-radio-icon rounded cursor-pointer",t.selectedRadio===e.value?"active":""])},{default:o(()=>[y(a.$slots,"default",{item:e},()=>[l("div",B,[s(R,c(e.icon,{class:"text-high-emphasis"}),null,16),l("h6",S,i(e.title),1),l("p",w,i(e.desc),1)])],!0),l("div",null,[s(b,{value:e.value},null,8,["value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})]),_:3},8,["model-value"])):k("",!0)}},E=_(I,[["__scopeId","data-v-96610884"]]);export{E as _};
