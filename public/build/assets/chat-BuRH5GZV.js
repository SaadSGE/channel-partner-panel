import{a as F,f as oe,b as ne}from"./formatters-lemdAz7z.js";import{ao as le,a as R,n as e,o as c,c as _,d as s,b as t,e as i,a1 as p,y as I,f as V,x as g,a7 as L,v as N,F as U,z as A,a5 as E,aC as ie,a3 as k,i as O,K as Q,L as W,r as w,aD as ce,am as re,w as de,ak as ue,aE as X,a6 as he,aB as Y}from"./main-DEXLFq5-.js";import{P as q}from"./vue3-perfect-scrollbar.esm-CSeKWONk.js";import{u as me}from"./useApi-ClqVRpYQ.js";import{c as fe}from"./createUrl-BNmXgIbh.js";import{$ as Z}from"./api-CQno0kML.js";import{V as T}from"./VAvatar-BaU-tpmv.js";import{V as z}from"./VImg-BwxQFvJc.js";import{V as B}from"./VBadge-v5LBcSxJ.js";import{_ as pe}from"./AppTextField-DqkBLktw.js";import{V as te}from"./VDivider-BGznFT5b.js";import{_ as ve}from"./AppTextarea-IcPzd49D.js";import{V as _e,a as be}from"./VRadioGroup-hg3nL03U.js";import{V as G}from"./VSwitch-DwHGbp05.js";import{u as xe,a as ge,V as Ce}from"./VMain-CT-dRG6x.js";import{V as j}from"./VNavigationDrawer-p8mkfnwP.js";import{V as ye}from"./VSpacer-Cc-cMN1O.js";import{V as $e}from"./VForm-BKwayuHd.js";import{V as Ve}from"./VTextField-YMVwCEg-.js";import"./helpers-fLnzIySp.js";import"./index-Dz1rBMAR.js";import"./index-UZWnqimo.js";import"./form-B1xJlf5M.js";/* empty css                   */import"./VCounter-DAizO-YE.js";import"./index-dXcoFe5c.js";import"./VField-tGKhD_Vg.js";import"./easing-CjukEv2V.js";import"./VInput-GP-yT9Tv.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelectionControl-BkLZjsBe.js";import"./ssrBoot-D7sdtyqv.js";import"./scopeId-gfVHp0yK.js";/* empty css              */const P=()=>({resolveAvatarBadgeVariant:o=>o==="online"?"success":o==="busy"?"error":o==="away"?"warning":"secondary"}),D=le("chat",{state:()=>({contacts:[],chatsContacts:[],profileUser:void 0,activeChat:null}),actions:{async fetchChatsAndContacts(C){const{data:o,error:a}=await me(fe("/apps/chat/chats-and-contacts",{query:{q:C}}));if(a.value)console.log(a.value);else{const{chatsContacts:d,contacts:v,profileUser:l}=o.value;this.chatsContacts=d,this.contacts=v,this.profileUser=l}},async getChat(C){const o=await Z(`/apps/chat/chats/${C}`);this.activeChat=o},async sendMsg(C){var u,n,m,f,y;const o=(u=this.profileUser)==null?void 0:u.id,a=await Z(`apps/chat/chats/${(n=this.activeChat)==null?void 0:n.contact.id}`,{method:"POST",body:{message:C,senderId:o}}),{msg:d,chat:v}=a;if(v!==void 0){const h=this.activeChat;this.chatsContacts.push({...h.contact,chat:{id:v.id,lastMessage:[],unseenMsgs:0,messages:[d]}}),this.activeChat&&(this.activeChat.chat={id:v.id,messages:[d],unseenMsgs:0,userId:(m=this.activeChat)==null?void 0:m.contact.id})}else(y=(f=this.activeChat)==null?void 0:f.chat)==null||y.messages.push(d);const l=this.chatsContacts.find(h=>this.activeChat?h.id===this.activeChat.contact.id:!1);l.chat.lastMessage=d}}}),ke={class:"text-center px-6"},we={key:1,class:"text-3xl"},Ue={class:"text-h5"},Se={class:"text-capitalize text-body-1 mb-0"},Ie={class:"my-6"},Ae=s("div",{class:"text-sm text-disabled"}," ABOUT ",-1),Te={class:"mt-1 mb-6"},Be={class:"mb-6"},ze=s("div",{class:"text-sm text-disabled mb-1"}," PERSONAL INFORMATION ",-1),De={class:"d-flex align-center text-high-emphasis pa-2"},Me=s("div",{class:"text-base"}," lucifer@email.com ",-1),Ne={class:"d-flex align-center text-high-emphasis pa-2"},Oe=s("div",{class:"text-base"}," +1(123) 456 - 7890 ",-1),Pe={class:"d-flex align-center text-high-emphasis pa-2"},Le=s("div",{class:"text-base"}," Mon - Fri 10AM - 8PM ",-1),Ee=s("div",{class:"text-sm text-disabled mb-1"}," OPTIONS ",-1),Fe={class:"d-flex align-center text-high-emphasis pa-2"},Re=s("div",{class:"text-base"}," Add Tag ",-1),qe={class:"d-flex align-center text-high-emphasis pa-2"},je=s("div",{class:"text-base"}," Important Contact ",-1),Je={class:"d-flex align-center text-high-emphasis pa-2"},He=s("div",{class:"text-base"}," Shared Media ",-1),Ke={class:"d-flex align-center text-high-emphasis pa-2"},Qe=s("div",{class:"text-base"}," Delete Contact ",-1),We={class:"d-flex align-center text-high-emphasis pa-2"},Xe=s("div",{class:"text-base"}," Block Contact ",-1),Ye={__name:"ChatActiveChatUserProfileSidebarContent",emits:["close"],setup(C,{emit:o}){const a=D(),{resolveAvatarBadgeVariant:d}=P();return(v,l)=>{const u=R("IconBtn");return e(a).activeChat?(c(),_(U,{key:0},[s("div",{class:I(["pt-6 px-6",v.$vuetify.locale.isRtl?"text-left":"text-right"])},[t(u,{onClick:l[0]||(l[0]=n=>v.$emit("close"))},{default:i(()=>[t(p,{icon:"tabler-x",class:"text-medium-emphasis"})]),_:1})],2),s("div",ke,[t(B,{location:"bottom right","offset-x":"7","offset-y":"4",bordered:"",color:e(d)(e(a).activeChat.contact.status),class:"chat-user-profile-badge mb-5"},{default:i(()=>[t(T,{size:"84",variant:e(a).activeChat.contact.avatar?void 0:"tonal",color:e(a).activeChat.contact.avatar?void 0:e(d)(e(a).activeChat.contact.status)},{default:i(()=>[e(a).activeChat.contact.avatar?(c(),V(z,{key:0,src:e(a).activeChat.contact.avatar},null,8,["src"])):(c(),_("span",we,g(("avatarText"in v?v.avatarText:e(F))(e(a).activeChat.contact.fullName)),1))]),_:1},8,["variant","color"])]),_:1},8,["color"]),s("h5",Ue,g(e(a).activeChat.contact.fullName),1),s("p",Se,g(e(a).activeChat.contact.role),1)]),t(e(q),{class:"ps-chat-user-profile-sidebar-content text-medium-emphasis pb-6 px-6",options:{wheelPropagation:!1}},{default:i(()=>[s("div",Ie,[Ae,s("p",Te,g(e(a).activeChat.contact.about),1)]),s("div",Be,[ze,s("div",De,[t(p,{class:"me-2",icon:"tabler-mail",size:"22"}),Me]),s("div",Ne,[t(p,{class:"me-2",icon:"tabler-phone",size:"22"}),Oe]),s("div",Pe,[t(p,{class:"me-2",icon:"tabler-clock",size:"22"}),Le])]),s("div",null,[Ee,s("div",Fe,[t(p,{class:"me-2",icon:"tabler-badge",size:"22"}),Re]),s("div",qe,[t(p,{class:"me-2",icon:"tabler-star",size:"22"}),je]),s("div",Je,[t(p,{class:"me-2",icon:"tabler-photo",size:"22"}),He]),s("div",Ke,[t(p,{class:"me-2",icon:"tabler-trash",size:"22"}),Qe]),s("div",We,[t(p,{icon:"tabler-ban",class:"me-2",size:"22"}),Xe]),t(L,{block:"",color:"error","append-icon":"tabler-trash",class:"mt-6"},{default:i(()=>[N(" Delete Contact ")]),_:1})])]),_:1})],64)):A("",!0)}}},Ze={key:1},Ge={class:"flex-grow-1 ms-4 overflow-hidden"},et={class:"text-base text-high-emphasis mb-0"},tt={class:"mb-0 text-truncate text-body-2"},st={key:0,class:"d-flex flex-column align-self-start"},at={class:"text-body-2 text-disabled whitespace-no-wrap"},ee={__name:"ChatContact",props:{isChatContact:{type:Boolean,required:!1,default:!1},user:{type:null,required:!0}},setup(C){const o=C,a=D(),{resolveAvatarBadgeVariant:d}=P(),v=E(()=>{var u,n;const l=((u=a.activeChat)==null?void 0:u.contact.id)===o.user.id;return(o.isChatContact||!((n=a.activeChat)!=null&&n.chat))&&l});return(l,u)=>(c(),_("li",{key:e(a).chatsContacts.length,class:I(["chat-contact cursor-pointer d-flex align-center",{"chat-contact-active":e(v)}])},[t(B,{dot:"",location:"bottom right","offset-x":"3","offset-y":"0",color:e(d)(o.user.status),bordered:"","model-value":o.isChatContact},{default:i(()=>[t(T,{size:"40",variant:o.user.avatar?void 0:"tonal",color:o.user.avatar?void 0:e(d)(o.user.status)},{default:i(()=>[o.user.avatar?(c(),V(z,{key:0,src:o.user.avatar,alt:"John Doe"},null,8,["src"])):(c(),_("span",Ze,g(("avatarText"in l?l.avatarText:e(F))(C.user.fullName)),1))]),_:1},8,["variant","color"])]),_:1},8,["color","model-value"]),s("div",Ge,[s("p",et,g(o.user.fullName),1),s("p",tt,g(o.isChatContact&&"chat"in o.user?o.user.chat.lastMessage.message:o.user.about),1)]),o.isChatContact&&"chat"in o.user?(c(),_("div",st,[s("div",at,g(("formatDateToMonthShort"in l?l.formatDateToMonthShort:e(oe))(o.user.chat.lastMessage.time)),1),o.user.chat.unseenMsgs?(c(),V(B,{key:0,color:"error",inline:"",content:o.user.chat.unseenMsgs,class:"ms-auto"},null,8,["content"])):A("",!0)])):A("",!0)],2))}},ot={key:0,class:"chat-list-header"},nt=s("li",{class:"list-none"},[s("h5",{class:"chat-contact-header text-primary text-h5"}," Chats ")],-1),lt={class:"no-chat-items-text text-disabled"},it=s("li",{class:"list-none pt-2"},[s("h5",{class:"chat-contact-header text-primary text-h5"}," Contacts ")],-1),ct={class:"no-chat-items-text text-disabled"},rt={__name:"ChatLeftSidebarContent",props:{search:{type:String,required:!0},isDrawerOpen:{type:Boolean,required:!0}},emits:["openChatOfContact","showUserProfile","close","update:search"],setup(C,{emit:o}){const a=C,d=o,{resolveAvatarBadgeVariant:v}=P(),l=ie(a,"search",d),u=D();return(n,m)=>{const f=pe,y=R("IconBtn");return c(),_(U,null,[e(u).profileUser?(c(),_("div",ot,[t(B,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:e(v)(e(u).profileUser.status),bordered:""},{default:i(()=>[t(T,{size:"40",class:"cursor-pointer",onClick:m[0]||(m[0]=h=>n.$emit("showUserProfile"))},{default:i(()=>[t(z,{src:e(u).profileUser.avatar,alt:"John Doe"},null,8,["src"])]),_:1})]),_:1},8,["color"]),t(f,{modelValue:e(l),"onUpdate:modelValue":m[1]||(m[1]=h=>k(l)?l.value=h:null),placeholder:"Search...","prepend-inner-icon":"tabler-search",class:"ms-4 me-1 chat-list-search"},null,8,["modelValue"]),n.$vuetify.display.smAndDown?(c(),V(y,{key:0,onClick:m[2]||(m[2]=h=>n.$emit("close"))},{default:i(()=>[t(p,{icon:"tabler-x",class:"text-medium-emphasis"})]),_:1})):A("",!0)])):A("",!0),t(te),t(e(q),{tag:"ul",class:"d-flex flex-column gap-y-1 chat-contacts-list px-3 py-2 list-none",options:{wheelPropagation:!1}},{default:i(()=>[nt,(c(!0),_(U,null,O(e(u).chatsContacts,h=>(c(),V(ee,{key:`chat-${h.id}`,user:h,"is-chat-contact":"",onClick:S=>n.$emit("openChatOfContact",h.id)},null,8,["user","onClick"]))),128)),Q(s("span",lt,"No chats found",512),[[W,!e(u).chatsContacts.length]]),it,(c(!0),_(U,null,O(e(u).contacts,h=>(c(),V(ee,{key:`chat-${h.id}`,user:h,onClick:S=>n.$emit("openChatOfContact",h.id)},null,8,["user","onClick"]))),128)),Q(s("span",ct,"No contacts found",512),[[W,!e(u).contacts.length]])]),_:1})],64)}}},dt={class:"chat-log pa-6"},ut={class:"mb-0 text-base"},ht={class:"text-sm ms-2 text-disabled"},mt={__name:"ChatLog",setup(C){const o=D(),a=E(()=>{var l,u;return{id:(l=o.activeChat)==null?void 0:l.contact.id,avatar:(u=o.activeChat)==null?void 0:u.contact.avatar}}),d=l=>l.isSeen?{icon:"tabler-checks",color:"success"}:l.isDelivered?{icon:"tabler-checks",color:void 0}:{icon:"tabler-check",color:void 0},v=E(()=>{let l=[];const u=[];if(o.activeChat.chat){l=o.activeChat.chat.messages;let n=l[0].senderId,m={senderId:n,messages:[]};l.forEach((f,y)=>{n===f.senderId?m.messages.push({message:f.message,time:f.time,feedback:f.feedback}):(n=f.senderId,u.push(m),m={senderId:f.senderId,messages:[{message:f.message,time:f.time,feedback:f.feedback}]}),y===l.length-1&&u.push(m)})}return u});return(l,u)=>(c(),_("div",dt,[(c(!0),_(U,null,O(e(v),(n,m)=>(c(),_("div",{key:n.senderId+String(m),class:I(["chat-group d-flex align-start",[{"flex-row-reverse":n.senderId!==e(a).id,"mb-6":e(v).length-1!==m}]])},[s("div",{class:I(["chat-avatar",n.senderId!==e(a).id?"ms-4":"me-4"])},[t(T,{size:"32"},{default:i(()=>{var f;return[t(z,{src:n.senderId===e(a).id?e(a).avatar:(f=e(o).profileUser)==null?void 0:f.avatar},null,8,["src"])]}),_:2},1024)],2),s("div",{class:I(["chat-body d-inline-flex flex-column",n.senderId!==e(a).id?"align-end":"align-start"])},[(c(!0),_(U,null,O(n.messages,(f,y)=>(c(),_("div",{key:f.time,class:I(["chat-content py-2 px-4 elevation-2",[n.senderId===e(a).id?"chat-left":"bg-primary text-white chat-right",n.messages.length-1!==y?"mb-2":"mb-1"]]),style:{"background-color":"rgb(var(--v-theme-surface))"}},[s("p",ut,g(f.message),1)],2))),128)),s("div",{class:I({"text-right":n.senderId!==e(a).id})},[n.senderId!==e(a).id?(c(),V(p,{key:0,size:"16",color:d(n.messages[n.messages.length-1].feedback).color},{default:i(()=>[N(g(d(n.messages[n.messages.length-1].feedback).icon),1)]),_:2},1032,["color"])):A("",!0),s("span",ht,g(("formatDate"in l?l.formatDate:e(ne))(n.messages[n.messages.length-1].time,{hour:"numeric",minute:"numeric"})),1)],2)],2)],2))),128))]))}},ft={class:"pt-2 me-2 text-end"},pt={class:"text-center px-6"},vt={key:1,class:"text-3xl"},_t={class:"text-h5"},bt={class:"text-capitalize text-medium-emphasis mb-0"},xt={class:"my-6 text-medium-emphasis"},gt=s("div",{for:"textarea-user-about",class:"text-base text-disabled"}," ABOUT ",-1),Ct={class:"mb-6"},yt=s("div",{class:"text-base text-disabled"}," STATUS ",-1),$t={class:"text-medium-emphasis"},Vt=s("div",{class:"text-base text-disabled"}," SETTINGS ",-1),kt={class:"d-flex align-center pa-2"},wt={class:"text-high-emphasis d-flex align-center justify-space-between flex-grow-1"},Ut=s("div",{class:"text-body-1 text-high-emphasis"}," Two-step Verification ",-1),St={class:"d-flex align-center pa-2"},It={class:"text-high-emphasis d-flex align-center justify-space-between flex-grow-1"},At=s("div",{class:"text-body-1 text-high-emphasis"}," Notification ",-1),Tt={class:"d-flex align-center pa-2"},Bt=s("div",{class:"text-high-emphasis"}," Invite Friends ",-1),zt={class:"d-flex align-center pa-2"},Dt=s("div",{class:"text-high-emphasis"}," Delete Account ",-1),Mt={__name:"ChatUserProfileSidebarContent",emits:["close"],setup(C,{emit:o}){const a=D(),{resolveAvatarBadgeVariant:d}=P(),v=[{title:"Online",value:"online",color:"success"},{title:"Away",value:"away",color:"warning"},{title:"Do not disturb",value:"busy",color:"error"},{title:"Offline",value:"offline",color:"secondary"}],l=w(!0),u=w(!1);return(n,m)=>{const f=R("IconBtn"),y=ve;return e(a).profileUser?(c(),_(U,{key:0},[s("div",ft,[t(f,{onClick:m[0]||(m[0]=h=>n.$emit("close"))},{default:i(()=>[t(p,{class:"text-medium-emphasis",color:"disabled",icon:"tabler-x"})]),_:1})]),s("div",pt,[t(B,{location:"bottom right","offset-x":"7","offset-y":"4",bordered:"",color:e(d)(e(a).profileUser.status),class:"chat-user-profile-badge mb-3"},{default:i(()=>[t(T,{size:"84",variant:e(a).profileUser.avatar?void 0:"tonal",color:e(a).profileUser.avatar?void 0:e(d)(e(a).profileUser.status)},{default:i(()=>[e(a).profileUser.avatar?(c(),V(z,{key:0,src:e(a).profileUser.avatar},null,8,["src"])):(c(),_("span",vt,g(("avatarText"in n?n.avatarText:e(F))(e(a).profileUser.fullName)),1))]),_:1},8,["variant","color"])]),_:1},8,["color"]),s("h5",_t,g(e(a).profileUser.fullName),1),s("p",bt,g(e(a).profileUser.role),1)]),t(e(q),{class:"ps-chat-user-profile-sidebar-content pb-5 px-6",options:{wheelPropagation:!1}},{default:i(()=>[s("div",xt,[gt,t(y,{id:"textarea-user-about",modelValue:e(a).profileUser.about,"onUpdate:modelValue":m[1]||(m[1]=h=>e(a).profileUser.about=h),"auto-grow":"",class:"mt-1",rows:"3"},null,8,["modelValue"])]),s("div",Ct,[yt,t(_e,{modelValue:e(a).profileUser.status,"onUpdate:modelValue":m[2]||(m[2]=h=>e(a).profileUser.status=h),class:"mt-1"},{default:i(()=>[(c(),_(U,null,O(v,h=>t(be,{key:h.title,label:h.title,value:h.value,color:h.color},null,8,["label","value","color"])),64))]),_:1},8,["modelValue"])]),s("div",$t,[Vt,s("div",kt,[t(p,{class:"me-2 text-high-emphasis",icon:"tabler-lock",size:"22"}),s("div",wt,[Ut,t(G,{modelValue:e(l),"onUpdate:modelValue":m[3]||(m[3]=h=>k(l)?l.value=h:null),density:"compact"},null,8,["modelValue"])])]),s("div",St,[t(p,{class:"me-2 text-high-emphasis",icon:"tabler-bell",size:"22"}),s("div",It,[At,t(G,{modelValue:e(u),"onUpdate:modelValue":m[4]||(m[4]=h=>k(u)?u.value=h:null),density:"compact"},null,8,["modelValue"])])]),s("div",Tt,[t(p,{class:"me-2 text-high-emphasis",icon:"tabler-user-plus",size:"22"}),Bt]),s("div",zt,[t(p,{class:"me-2 text-high-emphasis",icon:"tabler-trash",size:"22"}),Dt])]),t(L,{color:"primary",class:"mt-12",block:"","append-icon":"tabler-logout"},{default:i(()=>[N(" Logout ")]),_:1})]),_:1})],64)):A("",!0)}}},Nt={key:0,class:"d-flex flex-column h-100"},Ot={class:"active-chat-header d-flex align-center text-medium-emphasis bg-surface"},Pt={key:1},Lt={class:"flex-grow-1 ms-4 overflow-hidden"},Et={class:"text-h6 mb-0 font-weight-regular"},Ft={class:"text-truncate mb-0 text-body-2"},Rt={class:"d-sm-flex align-center d-none text-medium-emphasis"},qt={class:"d-flex gap-1"},jt={key:1,class:"d-flex h-100 align-center justify-center flex-column"},Jt={key:1,style:{"max-inline-size":"40ch","text-wrap":"balance"},class:"text-center text-disabled"},ws={__name:"chat",setup(C){ce(x=>({ee8edfb6:e(ae)}));const o=re(),a=D(),{isLeftSidebarOpen:d}=xe(o.smAndDown),{resolveAvatarBadgeVariant:v}=P(),l=w(),u=()=>{const x=l.value.$el||l.value;x.scrollTop=x.scrollHeight},n=w("");de(n,x=>a.fetchChatsAndContacts(x),{immediate:!0});const m=()=>{o.mdAndUp.value||(d.value=!0)},f=w(""),y=async()=>{f.value&&(await a.sendMsg(f.value),f.value="",Y(()=>{u()}))},h=async x=>{await a.getChat(x),f.value="";const r=a.chatsContacts.find($=>$.id===x);r&&(r.chat.unseenMsgs=0),o.smAndDown.value&&(d.value=!1),Y(()=>{u()})},S=w(!1),M=w(!1),J=w(),{name:se}=ue(),ae=E(()=>{var r,$;let x="transparent";return X&&(x=($=(r=X)==null?void 0:r[se.value].colors)==null?void 0:$.background),x});return(x,r)=>{const $=R("IconBtn");return c(),V(Ce,{class:"chat-app-layout"},{default:i(()=>[t(j,{modelValue:e(S),"onUpdate:modelValue":r[1]||(r[1]=b=>k(S)?S.value=b:null),temporary:"",touchless:"",absolute:"",class:"user-profile-sidebar",location:"start",width:"370"},{default:i(()=>[t(Mt,{onClose:r[0]||(r[0]=b=>S.value=!1)})]),_:1},8,["modelValue"]),t(j,{modelValue:e(M),"onUpdate:modelValue":r[3]||(r[3]=b=>k(M)?M.value=b:null),width:"374",absolute:"",temporary:"",location:"end",touchless:"",class:"active-chat-user-profile-sidebar"},{default:i(()=>[t(Ye,{onClose:r[2]||(r[2]=b=>M.value=!1)})]),_:1},8,["modelValue"]),t(j,{modelValue:e(d),"onUpdate:modelValue":r[8]||(r[8]=b=>k(d)?d.value=b:null),absolute:"",touchless:"",location:"start",width:"370",temporary:x.$vuetify.display.smAndDown,class:"chat-list-sidebar",permanent:x.$vuetify.display.mdAndUp},{default:i(()=>[t(rt,{isDrawerOpen:e(d),"onUpdate:isDrawerOpen":r[4]||(r[4]=b=>k(d)?d.value=b:null),search:e(n),"onUpdate:search":r[5]||(r[5]=b=>k(n)?n.value=b:null),onOpenChatOfContact:h,onShowUserProfile:r[6]||(r[6]=b=>S.value=!0),onClose:r[7]||(r[7]=b=>d.value=!1)},null,8,["isDrawerOpen","search"])]),_:1},8,["modelValue","temporary","permanent"]),t(ge,{class:"chat-content-container"},{default:i(()=>[e(a).activeChat?(c(),_("div",Nt,[s("div",Ot,[t($,{class:"d-md-none me-3",onClick:r[9]||(r[9]=b=>d.value=!0)},{default:i(()=>[t(p,{icon:"tabler-menu-2"})]),_:1}),s("div",{class:"d-flex align-center cursor-pointer",onClick:r[10]||(r[10]=b=>M.value=!0)},[t(B,{dot:"",location:"bottom right","offset-x":"3","offset-y":"0",color:e(v)(e(a).activeChat.contact.status),bordered:""},{default:i(()=>[t(T,{size:"40",variant:e(a).activeChat.contact.avatar?void 0:"tonal",color:e(a).activeChat.contact.avatar?void 0:e(v)(e(a).activeChat.contact.status),class:"cursor-pointer"},{default:i(()=>[e(a).activeChat.contact.avatar?(c(),V(z,{key:0,src:e(a).activeChat.contact.avatar,alt:e(a).activeChat.contact.fullName},null,8,["src","alt"])):(c(),_("span",Pt,g(("avatarText"in x?x.avatarText:e(F))(e(a).activeChat.contact.fullName)),1))]),_:1},8,["variant","color"])]),_:1},8,["color"]),s("div",Lt,[s("div",Et,g(e(a).activeChat.contact.fullName),1),s("p",Ft,g(e(a).activeChat.contact.role),1)])]),t(ye),s("div",Rt,[t($,null,{default:i(()=>[t(p,{icon:"tabler-phone"})]),_:1}),t($,null,{default:i(()=>[t(p,{icon:"tabler-video"})]),_:1}),t($,null,{default:i(()=>[t(p,{icon:"tabler-search"})]),_:1}),t($,null,{default:i(()=>[t(p,{icon:"tabler-dots-vertical"})]),_:1})])]),t(te),t(e(q),{ref_key:"chatLogPS",ref:l,tag:"ul",options:{wheelPropagation:!1},class:"flex-grow-1"},{default:i(()=>[t(mt)]),_:1},512),t($e,{class:"chat-log-message-form mb-5 mx-5",onSubmit:he(y,["prevent"])},{default:i(()=>{var b;return[(c(),V(Ve,{key:(b=e(a).activeChat)==null?void 0:b.contact.id,modelValue:e(f),"onUpdate:modelValue":r[12]||(r[12]=H=>k(f)?f.value=H:null),variant:"solo",density:"default",class:"chat-message-input",placeholder:"Type your message...",autofocus:""},{"append-inner":i(()=>[s("div",qt,[t($,null,{default:i(()=>[t(p,{icon:"tabler-microphone",size:"22"})]),_:1}),t($,{onClick:r[11]||(r[11]=H=>{var K;return(K=e(J))==null?void 0:K.click()})},{default:i(()=>[t(p,{icon:"tabler-paperclip",size:"22"})]),_:1}),t(L,{onClick:y},{append:i(()=>[t(p,{icon:"tabler-send",color:"#fff"})]),default:i(()=>[N(" Send ")]),_:1})])]),_:1},8,["modelValue"])),s("input",{ref_key:"refInputEl",ref:J,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:""},null,512)]}),_:1})])):(c(),_("div",jt,[t(T,{size:"98",variant:"tonal",color:"primary",class:"mb-4"},{default:i(()=>[t(p,{size:"50",class:"rounded-0",icon:"tabler-message-2"})]),_:1}),x.$vuetify.display.smAndDown?(c(),V(L,{key:0,rounded:"xl",onClick:m},{default:i(()=>[N(" Start Conversation ")]),_:1})):(c(),_("p",Jt," Start connecting with the people by selecting one of the contact on left "))]))]),_:1})]),_:1})}}};export{ws as default};