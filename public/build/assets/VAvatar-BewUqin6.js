import{ac as c,aX as y,bf as f,aB as o,N as V,aa as k,aJ as C,aC as P,aK as S,aL as h,aD as z,aE as b,b2 as A,aF as x,b6 as B,aG as D,aP as F,aN as I,af as N,b as u,a2 as R,b8 as T}from"./main-D5McJ9Zv.js";import{V as _}from"./VImg-Bp_ZHGHr.js";function K(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return c()({name:e??y(f(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...o()},setup(t,r){let{slots:s}=r;return()=>{var n;return V(t.tag,{class:[a,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const E=k({start:Boolean,end:Boolean,icon:C,image:String,text:String,...o(),...P(),...S(),...h(),...z(),...b(),...A({variant:"flat"})},"VAvatar"),L=c()({name:"VAvatar",props:E(),setup(a,l){let{slots:e}=l;const{themeClasses:t}=x(a),{colorClasses:r,colorStyles:s,variantClasses:n}=B(a),{densityClasses:m}=D(a),{roundedClasses:v}=F(a),{sizeClasses:g,sizeStyles:d}=I(a);return N(()=>u(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},t.value,r.value,m.value,v.value,g.value,n.value,a.class],style:[s.value,d.value,a.style]},{default:()=>{var i;return[a.image?u(_,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?u(R,{key:"icon",icon:a.icon},null):((i=e.default)==null?void 0:i.call(e))??a.text,T(!1,"v-avatar")]}})),{}}});export{L as V,K as c};
