import{a1 as x,k,r as s,H as N,o as n,f as C,e as a,b as o,v as i,c as _,i as b,F as V,d as v,y as A,x as c}from"./main-CVWDuzes.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as L,V as y}from"./VCard-ZAB0EwIJ.js";import{V as P,a as B,b as S,d as T}from"./VList-zhex7iho.js";import{V as R}from"./VPagination-B84lfxPJ.js";import{V as w}from"./VCardText-1-ZGu5dD.js";import{V as D}from"./VAvatar-CniKLuiJ.js";import{V as E}from"./VListItemAction-DdgfC_tH.js";import{V as F}from"./VDivider-BYqXoHql.js";import"./VImg-Bii9QvBb.js";import"./index-CLkLnF4x.js";import"./index-CwN3L1A2.js";import"./ssrBoot-GkZ9Y4H-.js";const z={class:"text-center mt-4"},H={__name:"index",setup(M){const u=x(),d=k(),l=s([]),r=s(1),m=s(1),g=s(10),p=async()=>{try{const e=await u.fetchAllNotifications(r.value,g.value);console.log("API Response:",e),l.value=e.notifications||[],m.value=e.last_page||1,console.log("Notifications:",l.value)}catch(e){console.error("Error fetching notifications:",e)}},h=e=>{e.read||u.markAsRead(e.id),e.notification_route&&(e.application_id?d.push({name:e.notification_route,params:{id:e.application_id}}):d.push({name:e.notification_route}))};return N(()=>{p()}),(e,f)=>(n(),C(y,null,{default:a(()=>[o(L,null,{default:a(()=>[i("All Notifications")]),_:1}),o(w,null,{default:a(()=>[o(P,null,{default:a(()=>[(n(!0),_(V,null,b(l.value,t=>(n(),_(V,{key:t.id},[o(B,{class:A({"unread-notification":!t.read}),onClick:U=>h(t)},{prepend:a(()=>[o(D,{color:t.color,icon:t.icon,variant:"tonal"},null,8,["color","icon"])]),append:a(()=>[o(E,null,{default:a(()=>[v("small",null,c(t.time),1)]),_:2},1024)]),default:a(()=>[o(S,null,{default:a(()=>[i(c(t.title),1)]),_:2},1024),o(T,null,{default:a(()=>[i(c(t.message),1)]),_:2},1024)]),_:2},1032,["class","onClick"]),o(F)],64))),128))]),_:1}),v("div",z,[o(R,{modelValue:r.value,"onUpdate:modelValue":[f[0]||(f[0]=t=>r.value=t),p],length:m.value},null,8,["modelValue","length"])])]),_:1})]),_:1}))}},te=I(H,[["__scopeId","data-v-fb4b1413"]]);export{te as default};
