import{m as p,a as u}from"./VOverlay-CZU57HtJ.js";import{f as S}from"./forwardRefs-C-GTDzx5.js";import{aH as h,be as O,aK as x,aL as T,aN as k,a4 as e,r as w,q as d,aQ as A,b as C}from"./main--Sxm5_s2.js";import{u as H}from"./scopeId-BjQrr5BR.js";const I=h({id:String,text:String,...O(p({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),B=x()({name:"VTooltip",props:I(),emits:{"update:modelValue":t=>!0},setup(t,m){let{slots:a}=m;const r=T(t,"modelValue"),{scopeId:v}=H(),f=k(),n=e(()=>t.id||`v-tooltip-${f}`),l=w(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:r.value?"scale-transition":"fade-transition"),b=e(()=>d({"aria-describedby":n.value},t.activatorProps));return A(()=>{const y=u.filterProps(t);return C(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:n.value},y,{modelValue:r.value,"onUpdate:modelValue":o=>r.value=o,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:b.value,_disableGlobalStack:!0},v),{activator:a.activator,default:function(){var c;for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return((c=a.default)==null?void 0:c.call(a,...s))??t.text}})}),S({},l)}});export{B as V};
