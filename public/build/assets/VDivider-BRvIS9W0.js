import{aL as c,aM as v,b1 as d,aO as h,b5 as m,bf as u,a0 as b,a5 as g,bt as r,aU as C,b as f}from"./main-kzKK1XE4.js";const k=c({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},"VDivider"),y=h()({name:"VDivider",props:k(),setup(e,i){let{attrs:t}=i;const{themeClasses:s}=m(e),{textColorClasses:o,textColorStyles:l}=u(b(e,"color")),n=g(()=>{const a={};return e.length&&(a[e.vertical?"maxHeight":"maxWidth"]=r(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=r(e.thickness)),a});return C(()=>f("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{y as V};
