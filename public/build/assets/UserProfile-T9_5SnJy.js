import{P as h}from"./vue3-perfect-scrollbar.esm-CEWUVhmY.js";import{k as x,ab as n,n as a,o as r,f as l,e as t,b as o,a1 as u,v as i,x as c,c as m,F as p,i as P,ac as I,s as L,d as w,a7 as B,z as N}from"./main-cX0WqYxM.js";import{u as z}from"./useAbility-CmEnqA5Q.js";import{V as f}from"./VAvatar-DESUj1gt.js";import{V as _}from"./VImg-Bq9A4AwQ.js";import{V as A}from"./VMenu-DmEIPCL-.js";import{V as C,a as v,b as y,d as D}from"./VList-f6hP_K5D.js";import{V as S}from"./VListItemAction-CB7xDky_.js";import{V as d}from"./VBadge-C_BbR_GI.js";import{V as T}from"./VDivider-nun6oEDR.js";import"./index-BjWxQyns.js";import"./VOverlay-Dt8LsyC0.js";import"./easing-CjukEv2V.js";import"./lazy-DOHHlfda.js";import"./scopeId-CTCEP_tp.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B4Ks4ZCJ.js";import"./index-BKtWMVh-.js";import"./ssrBoot-C0TROgbJ.js";const F={class:"px-4 py-2"},se={__name:"UserProfile",setup(R){const V=x(),b=z(),e=n("userData"),k=async()=>{n("accessToken").value=null,e.value=null,await V.push("/login"),n("userAbilityRules").value=null,b.update([])},g=[{type:"divider"},{type:"navItem",icon:"tabler-user",title:"Profile",to:{name:"apps-user-view-id",params:{id:21}}}];return(E,M)=>a(e)?(r(),l(d,{key:0,dot:"",bordered:"",location:"bottom right","offset-x":"1","offset-y":"2",color:"success"},{default:t(()=>[o(f,{size:"38",class:"cursor-pointer",color:a(e)&&a(e).avatar?void 0:"primary",variant:a(e)&&a(e).avatar?void 0:"tonal"},{default:t(()=>[a(e)&&a(e).avatar?(r(),l(_,{key:0,src:a(e).avatar},null,8,["src"])):(r(),l(u,{key:1,icon:"tabler-user"})),o(A,{activator:"parent",width:"240",location:"bottom end",offset:"12px"},{default:t(()=>[o(C,null,{default:t(()=>[o(v,null,{prepend:t(()=>[o(S,{start:""},{default:t(()=>[o(d,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success",bordered:""},{default:t(()=>[o(f,{color:a(e)&&a(e).avatar?void 0:"primary",variant:a(e)&&a(e).avatar?void 0:"tonal"},{default:t(()=>[a(e)&&a(e).avatar?(r(),l(_,{key:0,src:a(e).avatar},null,8,["src"])):(r(),l(u,{key:1,icon:"tabler-user"}))]),_:1},8,["color","variant"])]),_:1})]),_:1})]),default:t(()=>[o(y,{class:"font-weight-medium"},{default:t(()=>[i(c(a(e).fullName||a(e).username),1)]),_:1}),o(D,null,{default:t(()=>[i(c(a(e).main_role),1)]),_:1})]),_:1}),o(a(h),{options:{wheelPropagation:!1}},{default:t(()=>[(r(),m(p,null,P(g,s=>(r(),m(p,{key:s.title},[s.type==="navItem"?(r(),l(v,{key:0,to:s.to},I({prepend:t(()=>[o(u,{icon:s.icon,size:"22"},null,8,["icon"])]),default:t(()=>[o(y,null,{default:t(()=>[i(c(s.title),1)]),_:2},1024)]),_:2},[s.badgeProps?{name:"append",fn:t(()=>[o(d,L({rounded:"sm",class:"me-3"},s.badgeProps),null,16)]),key:"0"}:void 0]),1032,["to"])):(r(),l(T,{key:1,class:"my-2"}))],64))),64)),w("div",F,[o(B,{block:"",size:"small",color:"error","append-icon":"tabler-logout",onClick:k},{default:t(()=>[i(" Logout ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["color","variant"])]),_:1})):N("",!0)}};export{se as default};
