import{aL as I,r as L,a5 as j,n as g,bV as w,cg as v,bh as O}from"./main-CGWwRiT_.js";const S=(t,c,e)=>t==null||c==null?-1:t.toString().toLocaleLowerCase().indexOf(c.toString().toLocaleLowerCase()),A=I({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function x(t,c,e){var M;const f=[],s=(e==null?void 0:e.default)??S,m=e!=null&&e.filterKeys?v(e.filterKeys):!1,i=Object.keys((e==null?void 0:e.customKeyFilter)??{}).length;if(!(t!=null&&t.length))return f;e:for(let r=0;r<t.length;r++){const[a,y=a]=v(t[r]),h={},u={};let l=-1;if(c&&!(e!=null&&e.noFilter)){if(typeof a=="object"){const K=m||Object.keys(y);for(const n of K){const k=O(y,n,y),b=(M=e==null?void 0:e.customKeyFilter)==null?void 0:M[n];if(l=b?b(k,c,a):s(k,c,a),l!==-1&&l!==!1)b?h[n]=l:u[n]=l;else if((e==null?void 0:e.filterMode)==="every")continue e}}else l=s(a,c,a),l!==-1&&l!==!1&&(u.title=l);const d=Object.keys(u).length,F=Object.keys(h).length;if(!d&&!F||(e==null?void 0:e.filterMode)==="union"&&F!==i&&!d||(e==null?void 0:e.filterMode)==="intersection"&&(F!==i||!d))continue}f.push({index:r,matches:{...u,...h}})}return f}function C(t,c,e,f){const s=L([]),m=L(new Map),i=j(()=>f!=null&&f.transform?g(c).map(r=>[r,f.transform(r)]):g(c));w(()=>{const r=typeof e=="function"?e():g(e),a=typeof r!="string"&&typeof r!="number"?"":String(r),y=x(i.value,a,{customKeyFilter:{...t.customKeyFilter,...g(f==null?void 0:f.customKeyFilter)},default:t.customFilter,filterKeys:t.filterKeys,filterMode:t.filterMode,noFilter:t.noFilter}),h=g(c),u=[],l=new Map;y.forEach(d=>{let{index:F,matches:K}=d;const n=h[F];u.push(n),l.set(n.value,K)}),s.value=u,m.value=l});function M(r){return m.value.get(r.value)}return{filteredItems:s,filteredMatches:m,getMatches:M}}export{A as m,C as u};
