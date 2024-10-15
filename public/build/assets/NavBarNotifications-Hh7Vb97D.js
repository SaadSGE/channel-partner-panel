import{a as $}from"./formatters-CewvuzeT.js";import{a5 as w,k as T,a as L,o as p,f as y,e as a,b as e,n as r,a1 as v,K as x,v as _,x as m,L as V,c as b,F as z,i as U,z as B,y as I,d,a6 as P,a7 as q,H as D}from"./main-DNPt8sB9.js";import{P as F}from"./vue3-perfect-scrollbar.esm-kdOYzbjU.js";import{V as O}from"./VBadge-g6bwN-wS.js";import{V as j}from"./VMenu-KROKiYVA.js";import{V as E,a as H,b as K}from"./VCard-BskI6vj7.js";import{V as G}from"./VChip-DSCSDCP1.js";import{V as J}from"./VTooltip-cK3MQIzV.js";import{V as N}from"./VDivider-ydYCTE00.js";import{V as Q,a as S,b as W}from"./VList-DEWEwc4U.js";import{V as X}from"./VAvatar-BuGhEeyT.js";import{V as Y}from"./VSpacer-Dq8y8pz7.js";import{V as Z}from"./VCardText-BH3HUHmo.js";import{u as ee}from"./notification-iWV0SMar.js";import"./helpers-CCrI0unn.js";import"./index-ChZyRonB.js";import"./VOverlay-hj_zN1cy.js";import"./easing-CjukEv2V.js";import"./lazy-2rvNH9NA.js";import"./scopeId-a393kWtK.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Dojnp-5z.js";import"./VImg-CWzuepgj.js";import"./index-DriRPsDN.js";import"./VSlideGroup-D71llbj6.js";import"./ssrBoot-BYbPgzWB.js";/* empty css              */import"./api-DnLJJR3D.js";import"./index-Dz1rBMAR.js";const te={class:"d-flex align-start gap-3"},ae={key:0},oe={class:"text-sm font-weight-medium mb-1"},ie={class:"text-body-2 mb-2",style:{"letter-spacing":"0.4px !important","line-height":"18px"}},se={class:"text-sm text-disabled mb-0",style:{"letter-spacing":"0.4px !important","line-height":"18px"}},ne={class:"d-flex flex-column align-end"},re={__name:"Notifications",props:{notifications:{type:Array,required:!0},badgeProps:{type:Object,required:!1,default:void 0},location:{type:null,required:!1,default:"bottom end"}},emits:["read","unread","remove","click:notification"],setup(C,{emit:n}){const o=C,l=n,c=w(()=>o.notifications.some(s=>s.isSeen===!1)),k=()=>{const s=o.notifications.map(u=>u.id);c.value?l("read",s):l("unread",s)},h=w(()=>o.notifications&&o.notifications.length>0?o.notifications.filter(s=>!s.read).length:0),i=(s,u)=>{l(s?"unread":"read",u)},f=T(),g=()=>{f.push({name:"notifications"})};return(s,u)=>{const R=L("IconBtn");return p(),y(R,{id:"notification-btn"},{default:a(()=>[e(O,{content:r(h),color:"error","offset-x":"2","offset-y":"3"},{default:a(()=>[e(v,{size:"28",icon:"tabler-bell"})]),_:1},8,["content"]),e(j,{activator:"parent",width:"380px",location:o.location,offset:"12px","close-on-content-click":!0},{default:a(()=>[e(E,{class:"d-flex flex-column"},{default:a(()=>[e(H,{class:"notification-section"},{append:a(()=>[x(e(G,{size:"small",color:"primary",class:"me-2"},{default:a(()=>[_(m(r(h))+" New ",1)]),_:1},512),[[V,o.notifications.some(t=>!t.isSeen)]]),x(e(R,{size:"34",onClick:k},{default:a(()=>[e(v,{size:"20",color:"high-emphasis",icon:r(c)?"tabler-mail-opened":"tabler-mail"},null,8,["icon"]),e(J,{activator:"parent",location:"start"},{default:a(()=>[_(m(r(c)?"Mark all as read":"Mark all as unread"),1)]),_:1})]),_:1},512),[[V,o.notifications.length]])]),default:a(()=>[e(K,{class:"text-h6"},{default:a(()=>[_(" Notifications ")]),_:1})]),_:1}),e(N),e(r(F),{options:{wheelPropagation:!1},style:{"max-block-size":"23.75rem"}},{default:a(()=>[e(Q,{class:"notification-list rounded-0 py-0"},{default:a(()=>[(p(!0),b(z,null,U(o.notifications,(t,A)=>(p(),b(z,{key:t.id},[A>0?(p(),y(N,{key:0})):B("",!0),e(S,{link:"",lines:"one","min-height":"66px",class:I(["list-item-hover-class",{"unread-notification":!t.read}]),onClick:M=>s.$emit("click:notification",t)},{default:a(()=>[d("div",te,[e(X,{size:"40",color:t.color&&t.icon?t.color:void 0,image:t.img||void 0,icon:t.icon||void 0,variant:t.img?void 0:"tonal"},{default:a(()=>[t.text?(p(),b("span",ae,m(("avatarText"in s?s.avatarText:r($))(t.text)),1)):B("",!0)]),_:2},1032,["color","image","icon","variant"]),d("div",null,[d("p",oe,m(t.title),1),d("p",ie,m(t.message),1),d("p",se,m(t.time),1)]),e(Y),d("div",ne,[e(v,{size:"10",icon:"tabler-circle-filled",color:t.read?"#a8aaae":"primary",class:I([`${t.read?"visible-in-hover":""}`,"mb-2"]),onClick:P(M=>i(t.read,t.id),["stop"])},null,8,["color","class","onClick"])])])]),_:2},1032,["class","onClick"])],64))),128)),x(e(S,{class:"text-center text-medium-emphasis",style:{"block-size":"56px"}},{default:a(()=>[e(W,null,{default:a(()=>[_("No Notification Found!")]),_:1})]),_:1},512),[[V,!o.notifications.length]])]),_:1})]),_:1}),e(N),x(e(Z,{class:"pa-4"},{default:a(()=>[e(q,{block:"",size:"small",onClick:g},{default:a(()=>[_(" View All Notifications ")]),_:1})]),_:1},512),[[V,o.notifications.length]])]),_:1})]),_:1},8,["location"])]),_:1})}}},Ue={__name:"NavBarNotifications",setup(C){const n=ee(),o=T();D(()=>{n.fetchNotifications()});const l=i=>{n.notifications=n.notifications.filter(f=>f.id!==i)},c=i=>{n.markAsRead(i)},k=i=>{console.warn("Mark as unread not implemented")},h=i=>{i.read||c(i.id),i.notification_route&&(o.currentRoute.value.name===i.notification_route?o.go(0):i.application_id?o.push({name:i.notification_route,params:{id:i.application_id}}):o.push(i.notification_route))};return(i,f)=>{const g=re;return p(),y(g,{notifications:r(n).notifications,onRemove:l,onRead:c,onUnread:k,"onClick:notification":h},null,8,["notifications"])}}};export{Ue as default};
