import{aN as o,aJ as y,bn as V,aL as c,N as b,aK as f,aS as k,aX as S,a_ as C,bo as P,aM as h,b0 as z,b1 as A,b4 as T,b6 as x,b7 as I,ba as N,bp as R,aT as _,b as u,a1 as B,bd as D}from"./main-0xwlEiGX.js";import{V as F}from"./VImg-BG4xnC5-.js";function M(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return o()({name:e??y(V(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...c()},setup(t,r){let{slots:s}=r;return()=>{var n;return b(t.tag,{class:[a,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const J=f({start:Boolean,end:Boolean,icon:k,image:String,text:String,...c(),...S(),...C(),...P(),...h(),...z(),...A({variant:"flat"})},"VAvatar"),O=o()({name:"VAvatar",props:J(),setup(a,l){let{slots:e}=l;const{themeClasses:t}=T(a),{colorClasses:r,colorStyles:s,variantClasses:n}=x(a),{densityClasses:m}=I(a),{roundedClasses:v}=N(a),{sizeClasses:d,sizeStyles:g}=R(a);return _(()=>u(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},t.value,r.value,m.value,v.value,d.value,n.value,a.class],style:[s.value,g.value,a.style]},{default:()=>{var i;return[a.image?u(F,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?u(B,{key:"icon",icon:a.icon},null):((i=e.default)==null?void 0:i.call(e))??a.text,D(!1,"v-avatar")]}})),{}}});export{O as V,M as c};
