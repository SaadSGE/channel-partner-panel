import{aK as m,aG as y,bk as V,aI as o,M as f,aH as k,aP as b,aU as P,aX as C,bl as S,aJ as h,aZ as z,a_ as A,b1 as I,b3 as x,b4 as R,b7 as T,bm as _,aQ as B,b as u,a0 as D,ba as F}from"./main-BvYP52SQ.js";import{V as G}from"./VImg-C1COJ1y2.js";function M(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return m()({name:e??y(V(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...o()},setup(t,r){let{slots:s}=r;return()=>{var n;return f(t.tag,{class:[a,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const H=k({start:Boolean,end:Boolean,icon:b,image:String,text:String,...o(),...P(),...C(),...S(),...h(),...z(),...A({variant:"flat"})},"VAvatar"),N=m()({name:"VAvatar",props:H(),setup(a,l){let{slots:e}=l;const{themeClasses:t}=I(a),{colorClasses:r,colorStyles:s,variantClasses:n}=x(a),{densityClasses:c}=R(a),{roundedClasses:v}=T(a),{sizeClasses:g,sizeStyles:d}=_(a);return B(()=>u(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},t.value,r.value,c.value,v.value,g.value,n.value,a.class],style:[s.value,d.value,a.style]},{default:()=>{var i;return[a.image?u(G,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?u(D,{key:"icon",icon:a.icon},null):((i=e.default)==null?void 0:i.call(e))??a.text,F(!1,"v-avatar")]}})),{}}});export{N as V,M as c};
