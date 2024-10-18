import{a as $}from"./formatters-DULOiX1-.js";import{a5 as w,k as T,a as L,o as f,f as y,e as a,b as e,n as r,a1 as v,K as x,v as _,x as d,L as V,c as b,F as z,i as U,z as B,y as I,d as m,a6 as P,a7 as q,H as D}from"./main-Cp2POdXb.js";import{P as F}from"./vue3-perfect-scrollbar.esm-C7kiyJub.js";import{V as O}from"./VBadge-DOLvWsAf.js";import{V as j}from"./VMenu-D59SCE8_.js";import{V as E,a as H,b as K}from"./VCard-oCmDgLNf.js";import{V as G}from"./VChip-ihqZWhi4.js";import{V as J}from"./VTooltip-Bl7HRiN8.js";import{V as N}from"./VDivider-DEaYy4t1.js";import{V as Q,a as S,b as W}from"./VList-Cacr4NmG.js";import{V as X}from"./VAvatar-DP4U1kqO.js";import{V as Y}from"./VSpacer-i5anbK_5.js";import{V as Z}from"./VCardText-DIkb2F71.js";import{u as ee}from"./notification-DJJ4eHao.js";import"./index-ClsSkh9w.js";import"./dialog-transition-1LjPfX5Q.js";import"./forwardRefs-D9kYFWgq.js";import"./scopeId-COQ9BaAw.js";import"./VImg-CgcLxCLJ.js";import"./index-BkQ_qyLp.js";import"./ssrBoot-CQ8JDYey.js";/* empty css              */import"./api-DlJz2cXw.js";import"./index-BYrzgnBV.js";const te={class:"d-flex align-start gap-3"},ae={key:0},oe={class:"text-sm font-weight-medium mb-1"},ie={class:"text-body-2 mb-2",style:{"letter-spacing":"0.4px !important","line-height":"18px"}},se={class:"text-sm text-disabled mb-0",style:{"letter-spacing":"0.4px !important","line-height":"18px"}},ne={class:"d-flex flex-column align-end"},re={__name:"Notifications",props:{notifications:{type:Array,required:!0},badgeProps:{type:Object,required:!1,default:void 0},location:{type:null,required:!1,default:"bottom end"}},emits:["read","unread","remove","click:notification"],setup(C,{emit:n}){const o=C,l=n,c=w(()=>o.notifications.some(s=>s.isSeen===!1)),k=()=>{const s=o.notifications.map(u=>u.id);c.value?l("read",s):l("unread",s)},h=w(()=>o.notifications&&o.notifications.length>0?o.notifications.filter(s=>!s.read).length:0),i=(s,u)=>{l(s?"unread":"read",u)},p=T(),g=()=>{p.push({name:"notifications"})};return(s,u)=>{const R=L("IconBtn");return f(),y(R,{id:"notification-btn"},{default:a(()=>[e(O,{content:r(h),color:"error","offset-x":"2","offset-y":"3"},{default:a(()=>[e(v,{size:"28",icon:"tabler-bell"})]),_:1},8,["content"]),e(j,{activator:"parent",width:"380px",location:o.location,offset:"12px","close-on-content-click":!0},{default:a(()=>[e(E,{class:"d-flex flex-column"},{default:a(()=>[e(H,{class:"notification-section"},{append:a(()=>[x(e(G,{size:"small",color:"primary",class:"me-2"},{default:a(()=>[_(d(r(h))+" New ",1)]),_:1},512),[[V,o.notifications.some(t=>!t.isSeen)]]),x(e(R,{size:"34",onClick:k},{default:a(()=>[e(v,{size:"20",color:"high-emphasis",icon:r(c)?"tabler-mail-opened":"tabler-mail"},null,8,["icon"]),e(J,{activator:"parent",location:"start"},{default:a(()=>[_(d(r(c)?"Mark all as read":"Mark all as unread"),1)]),_:1})]),_:1},512),[[V,o.notifications.length]])]),default:a(()=>[e(K,{class:"text-h6"},{default:a(()=>[_(" Notifications ")]),_:1})]),_:1}),e(N),e(r(F),{options:{wheelPropagation:!1},style:{"max-block-size":"23.75rem"}},{default:a(()=>[e(Q,{class:"notification-list rounded-0 py-0"},{default:a(()=>[(f(!0),b(z,null,U(o.notifications,(t,A)=>(f(),b(z,{key:t.id},[A>0?(f(),y(N,{key:0})):B("",!0),e(S,{link:"",lines:"one","min-height":"66px",class:I(["list-item-hover-class",{"unread-notification":!t.read}]),onClick:M=>s.$emit("click:notification",t)},{default:a(()=>[m("div",te,[e(X,{size:"40",color:t.color&&t.icon?t.color:void 0,image:t.img||void 0,icon:t.icon||void 0,variant:t.img?void 0:"tonal"},{default:a(()=>[t.text?(f(),b("span",ae,d(("avatarText"in s?s.avatarText:r($))(t.text)),1)):B("",!0)]),_:2},1032,["color","image","icon","variant"]),m("div",null,[m("p",oe,d(t.title),1),m("p",ie,d(t.message),1),m("p",se,d(t.time),1)]),e(Y),m("div",ne,[e(v,{size:"10",icon:"tabler-circle-filled",color:t.read?"#a8aaae":"primary",class:I([`${t.read?"visible-in-hover":""}`,"mb-2"]),onClick:P(M=>i(t.read,t.id),["stop"])},null,8,["color","class","onClick"])])])]),_:2},1032,["class","onClick"])],64))),128)),x(e(S,{class:"text-center text-medium-emphasis",style:{"block-size":"56px"}},{default:a(()=>[e(W,null,{default:a(()=>[_("No Notification Found!")]),_:1})]),_:1},512),[[V,!o.notifications.length]])]),_:1})]),_:1}),e(N),x(e(Z,{class:"pa-4"},{default:a(()=>[e(q,{block:"",size:"small",onClick:g},{default:a(()=>[_(" View All Notifications ")]),_:1})]),_:1},512),[[V,o.notifications.length]])]),_:1})]),_:1},8,["location"])]),_:1})}}},Te={__name:"NavBarNotifications",setup(C){const n=ee(),o=T();D(()=>{n.fetchNotifications()});const l=i=>{n.notifications=n.notifications.filter(p=>p.id!==i)},c=i=>{n.markAsRead(i)},k=i=>{console.warn("Mark as unread not implemented")},h=i=>{i.read||c(i.id),i.notification_route&&(o.currentRoute.value.name===i.notification_route?o.go(0):i.application_id?o.push({name:i.notification_route,params:{id:i.application_id}}):o.push(i.notification_route))};return(i,p)=>{const g=re;return f(),y(g,{notifications:r(n).notifications,onRemove:l,onRead:c,onUnread:k,"onClick:notification":h},null,8,["notifications"])}}};export{Te as default};
