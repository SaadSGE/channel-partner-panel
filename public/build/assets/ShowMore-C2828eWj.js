import{r as c,a5 as m,H as h,o as d,c as u,d as p,x as v,a6 as T}from"./main-BpRJEuHK.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";const M={props:{text:{type:String,required:!0},lines:{type:Number,default:3},characters:{type:Number,default:200}},setup(t){const n=c(!1),o=c(""),e=c(t.text),_=m(()=>1.2),f=()=>{n.value=!n.value},r=()=>{const x=t.lines,g=t.characters,i=t.text.split(" ");let s=0,l=1;o.value="";for(let a=0;a<i.length;a++){if(s+=i[a].length+1,s>g||l>x){o.value+="...";break}o.value+=i[a]+" ",i[a].includes(`
`)&&l++}l<=x&&s<=g&&(o.value=t.text)};return h(()=>{r()}),{isExpanded:n,truncatedText:o,fullText:e,toggle:f,lineHeight:_}}},k=["innerHTML"],y=["innerHTML"];function H(t,n,o,e,_,f){return d(),u("div",null,[e.isExpanded?(d(),u("div",{key:1,innerHTML:e.fullText},null,8,y)):(d(),u("div",{key:0,innerHTML:e.truncatedText},null,8,k)),p("a",{onClick:n[0]||(n[0]=T((...r)=>e.toggle&&e.toggle(...r),["prevent"]))},v(e.isExpanded?"Show Less":"Show More"),1)])}const S=L(M,[["render",H],["__scopeId","data-v-3371d4c9"]]);export{S as _};
