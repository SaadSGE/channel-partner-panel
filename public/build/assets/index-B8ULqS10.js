import{f as Ee}from"./formatters-gxsTcjoN.js";import{r as V,a as ie,o as u,f as L,e as t,b as e,d as l,n as a,a3 as O,c as C,z as G,a7 as le,v as b,F as E,i as U,x as k,a1 as r,w as he,a5 as j,s as ue,j as be,K as H,L as J,a6 as q,y as ae,ad as Me,J as De}from"./main-DHHr-wHG.js";import{P as ce}from"./vue3-perfect-scrollbar.esm-D4erIEYe.js";import{_ as xe}from"./TiptapEditor-CfYVrlFF.js";import{V as fe}from"./index-D8dg9ABk.js";import{a as Le,V as X}from"./VCard-B4mDgfzo.js";import{V as K}from"./VSpacer-Bi9NzJiP.js";import{V as Q}from"./VTextField-DNqAqHfG.js";import{V as I}from"./VDivider-D7vOLDud.js";import{V as Y}from"./VMenu-DQdwknXc.js";import{V as Z,a as ee,b as se}from"./VList-BpmkC8f2.js";import{V as ge}from"./VChip-CqrIfrCb.js";import{$ as ve}from"./api-C1e9Lp-m.js";import{V as A}from"./VTooltip-W1BOCRt1.js";import{V as ye}from"./VBadge-DMUG0WmQ.js";import{V as $e}from"./VAvatar-DXwB4bJ3.js";import{V as re}from"./VImg-DwCywSuk.js";import{V as te}from"./VCardText-nt4noCsE.js";import{V as ke}from"./VNavigationDrawer-CsY-7ImV.js";import{u as Te,V as Re,a as Ae}from"./VMain-BLVMI5Lp.js";import{u as Ie}from"./useApi-2OJ9d-wc.js";import{c as Ue}from"./createUrl-fTu0_xeQ.js";import{V as _e}from"./VCheckbox-DIKqn_en.js";import"./helpers-DTTVAneL.js";import"./index-DURkfio7.js";import"./index-Cx8ut1lP.js";/* empty css              *//* empty css                   */import"./VCounter-BAW-Xecu.js";import"./index-CZ6xOcO3.js";import"./VField-CJKSfiec.js";import"./form-DMhFGgfp.js";import"./easing-CjukEv2V.js";import"./VInput-CJY4_OpI.js";import"./forwardRefs-C-GTDzx5.js";import"./VOverlay-C4EES5M3.js";import"./lazy-aiJSzJZ-.js";import"./scopeId-BKm1D_ij.js";import"./dialog-transition-B4jHxgID.js";import"./ssrBoot-BFRn25h5.js";import"./VSlideGroup-HIFuKKVb.js";import"./index-Dz1rBMAR.js";import"./VCheckboxBtn-ibvhDA7s.js";import"./VSelectionControl-CxilhXev.js";const Be={class:"d-flex align-center"},Ne=l("h5",{class:"text-h5"}," Compose Mail ",-1),Fe={class:"d-flex align-center gap-x-2"},Pe={class:"px-1 pe-6 py-1"},Oe=l("div",{class:"text-base font-weight-medium text-disabled"}," To: ",-1),je={class:"cursor-pointer"},qe=l("span",null," | ",-1),He={key:0},Je={class:"px-1 pe-6 py-1"},Ke=l("div",{class:"text-disabled font-weight-medium"}," Cc: ",-1),We={key:0},Ge={class:"px-1 pe-6 py-1"},Qe=l("div",{class:"text-disabled font-weight-medium"}," Bcc: ",-1),Xe={class:"px-1 pe-6 py-1"},Ye=l("div",{class:"text-base font-weight-medium text-disabled"}," Subject: ",-1),Ze={class:"d-flex align-center px-6 py-4"},et={__name:"ComposeDialog",emits:["close"],setup(S,{emit:T}){const d=V(""),w=V(""),y=V(""),R=V(""),M=["Schedule Mail","Save Draft","Sent"],B=V(""),v=V(""),_=V(!1),g=V(!1),F=()=>{w.value=y.value=R.value=""};return(h,c)=>{const f=ie("IconBtn"),x=xe;return u(),L(X,{class:"email-compose-dialog",elevation:"10","max-width":"30vw"},{default:t(()=>[e(Le,{class:"py-3 px-6"},{default:t(()=>[l("div",Be,[Ne,e(K),l("div",Fe,[e(f,{size:"small",icon:"tabler-minus",onClick:c[0]||(c[0]=o=>h.$emit("close"))}),e(f,{size:"small",icon:"tabler-x",onClick:c[1]||(c[1]=o=>{h.$emit("close"),F()})})])])]),_:1}),l("div",Pe,[e(Q,{modelValue:a(w),"onUpdate:modelValue":c[4]||(c[4]=o=>O(w)?w.value=o:null),density:"compact"},{"prepend-inner":t(()=>[Oe]),append:t(()=>[l("span",je,[l("span",{onClick:c[2]||(c[2]=o=>_.value=!a(_))},"Cc"),qe,l("span",{onClick:c[3]||(c[3]=o=>g.value=!a(g))},"Bcc")])]),_:1},8,["modelValue"])]),e(fe,null,{default:t(()=>[a(_)?(u(),C("div",He,[e(I),l("div",Je,[e(Q,{modelValue:a(B),"onUpdate:modelValue":c[5]||(c[5]=o=>O(B)?B.value=o:null),density:"compact"},{"prepend-inner":t(()=>[Ke]),_:1},8,["modelValue"])])])):G("",!0)]),_:1}),e(fe,null,{default:t(()=>[a(g)?(u(),C("div",We,[e(I),l("div",Ge,[e(Q,{modelValue:a(v),"onUpdate:modelValue":c[6]||(c[6]=o=>O(v)?v.value=o:null),density:"compact"},{"prepend-inner":t(()=>[Qe]),_:1},8,["modelValue"])])])):G("",!0)]),_:1}),e(I),l("div",Xe,[e(Q,{modelValue:a(y),"onUpdate:modelValue":c[7]||(c[7]=o=>O(y)?y.value=o:null),density:"compact"},{"prepend-inner":t(()=>[Ye]),_:1},8,["modelValue"])]),e(I),e(x,{modelValue:a(d),"onUpdate:modelValue":c[8]||(c[8]=o=>O(d)?d.value=o:null),placeholder:"Message"},null,8,["modelValue"]),e(I),l("div",Ze,[e(le,{color:"primary",class:"me-4","append-icon":"tabler-send"},{default:t(()=>[b(" send "),e(Y,{activator:"parent"},{default:t(()=>[e(Z,null,{default:t(()=>[(u(),C(E,null,U(M,(o,n)=>e(ee,{key:n,value:n},{default:t(()=>[b(k(o),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}),e(f,{size:"small"},{default:t(()=>[e(r,{icon:"tabler-paperclip"})]),_:1}),e(K),e(f,{size:"small",class:"me-2"},{default:t(()=>[e(r,{icon:"tabler-dots-vertical"})]),_:1}),e(f,{size:"small",onClick:c[9]||(c[9]=o=>{h.$emit("close"),F()})},{default:t(()=>[e(r,{icon:"tabler-trash"})]),_:1})])]),_:1})}}},tt={class:"d-flex flex-column h-100"},at={class:"px-6 pb-5 pt-6"},lt={class:"email-filters py-4"},st=["href","onClick"],it={class:"text-base"},ot={class:"email-labels py-4"},nt=l("div",{class:"text-caption text-disabled mb-4 px-6"}," LABELS ",-1),rt=["href","onClick"],dt={class:"text-body-1 text-high-emphasis"},ct=Object.assign({inheritAttrs:!1},{__name:"EmailLeftSidebarContent",props:{emailsMeta:{type:Object,required:!0}},emits:["toggleComposeDialogVisibility"],setup(S,{emit:T}){const d=S,w=V(0),y=V(0),R=V(0),M=V(0);he(()=>d.emailsMeta,_=>{_&&(w.value=_.inbox,y.value=_.draft,R.value=_.spam,M.value=_.star)},{immediate:!0,deep:!0});const B=j(()=>[{title:"Inbox",prependIcon:"tabler-mail",to:{name:"apps-email"},badge:{content:w.value,color:"primary"}},{title:"Sent",prependIcon:"tabler-send",to:{name:"apps-email-filter",params:{filter:"sent"}}},{title:"Draft",prependIcon:"tabler-edit",to:{name:"apps-email-filter",params:{filter:"draft"}},badge:{content:y.value,color:"warning"}},{title:"Starred",prependIcon:"tabler-star",to:{name:"apps-email-filter",params:{filter:"starred"}},badge:{content:M.value,color:"success"}},{title:"Spam",prependIcon:"tabler-alert-circle",to:{name:"apps-email-filter",params:{filter:"spam"}},badge:{content:R.value,color:"error"}},{title:"Trash",prependIcon:"tabler-trash",to:{name:"apps-email-filter",params:{filter:"trashed"}}}]),v=[{title:"Personal",color:"success",to:{name:"apps-email-label",params:{label:"personal"}}},{title:"Company",color:"primary",to:{name:"apps-email-label",params:{label:"company"}}},{title:"Important",color:"warning",to:{name:"apps-email-label",params:{label:"important"}}},{title:"Private",color:"error",to:{name:"apps-email-label",params:{label:"private"}}}];return(_,g)=>{const F=ie("RouterLink");return u(),C("div",tt,[l("div",at,[e(le,{block:"",onClick:g[0]||(g[0]=h=>_.$emit("toggleComposeDialogVisibility"))},{default:t(()=>[b(" Compose ")]),_:1})]),e(a(ce),{options:{wheelPropagation:!1},class:"h-100"},{default:t(()=>[l("ul",lt,[(u(!0),C(E,null,U(a(B),h=>(u(),L(F,{key:h.title,class:"d-flex align-center cursor-pointer align-center",to:h.to,custom:""},{default:t(({isActive:c,href:f,navigate:x})=>{var o;return[l("li",ue(_.$attrs,{href:f,class:[c&&"email-filter-active text-primary","d-flex align-center cursor-pointer"],onClick:x}),[e(r,{icon:h.prependIcon,class:"me-2",size:"20"},null,8,["icon"]),l("div",it,k(h.title),1),e(K),(o=h.badge)!=null&&o.content?(u(),L(ge,{key:0,color:h.badge.color,label:"",size:"small",class:"rounded-xl px-3"},{default:t(()=>{var n;return[b(k((n=h.badge)==null?void 0:n.content),1)]}),_:2},1032,["color"])):G("",!0)],16,st)]}),_:2},1032,["to"]))),128))]),l("ul",ot,[nt,(u(),C(E,null,U(v,h=>e(F,{key:h.title,class:"d-flex align-center",to:h.to,custom:""},{default:t(({isActive:c,href:f,navigate:x})=>[l("li",ue(_.$attrs,{href:f,class:[c&&"email-label-active text-primary","cursor-pointer d-flex align-center"],onClick:x}),[e(r,{icon:"tabler-circle-filled",color:h.color,class:"me-2",size:"12"},null,8,["color"]),l("div",dt,k(h.title),1)],16,rt)]),_:2},1032,["to"])),64))])]),_:1})])}}}),de=()=>{const S=be(),T=async(v,_)=>{await ve("apps/email",{method:"POST",body:JSON.stringify({ids:v,data:_})})};return{labels:[{title:"personal",color:"success"},{title:"company",color:"primary"},{title:"important",color:"warning"},{title:"private",color:"error"}],resolveLabelColor:v=>v==="personal"?"success":v==="company"?"primary":v==="important"?"warning":v==="private"?"error":"secondary",shallShowMoveToActionFor:v=>v==="trash"?S.params.filter!=="trashed":v==="inbox"?!(S.params.filter===void 0||S.params.filter==="sent"||S.params.filter==="draft"):v==="spam"?!(S.params.filter==="spam"||S.params.filter==="sent"||S.params.filter==="draft"):!1,emailMoveToFolderActions:[{action:"inbox",icon:"tabler-mail"},{action:"spam",icon:"tabler-alert-octagon"},{action:"trash",icon:"tabler-trash"}],moveSelectedEmailTo:async(v,_)=>{const g={};v==="inbox"?(S.params.filter==="trashed"&&(g.isDeleted=!1),g.folder="inbox"):v==="spam"?(S.params.filter==="trashed"&&(g.isDeleted=!1),g.folder="spam"):v==="trash"&&(g.isDeleted=!0),await T(_,g)},updateEmails:T,updateEmailLabels:async(v,_)=>{await ve("/apps/email",{method:"POST",body:{ids:v,label:_}})}}},mt={class:"email-view-header d-flex align-center px-5 py-3"},pt={class:"d-flex align-center flex-wrap flex-grow-1 overflow-hidden gap-2"},ut={class:"text-body-1 text-high-emphasis text-truncate"},ft={class:"d-flex flex-wrap gap-2"},vt={class:"d-flex align-center"},_t={class:"email-view-action-bar d-flex align-center text-medium-emphasis px-6 gap-x-1"},ht={class:"d-flex align-center gap-x-1"},bt={class:"d-flex align-start align-sm-center pa-6 gap-x-4"},xt={class:"d-flex flex-wrap flex-grow-1 overflow-hidden"},gt={class:"text-truncate"},yt={class:"text-body-1 text-high-emphasis text-truncate"},$t={class:"text-sm"},kt={class:"d-flex align-center gap-x-4"},Vt={class:"text-disabled text-base"},Ct=["innerHTML"],wt=l("span",null,"2 Attachments",-1),zt={class:"text-base"},St=l("span",{class:"text-primary cursor-pointer"}," Forward ",-1),Et={class:"text-h6 mb-6"},Mt={class:"d-flex justify-end gap-4 pt-2 flex-wrap"},Dt={__name:"EmailView",props:{email:{type:null,required:!0},emailMeta:{type:Object,required:!0}},emits:["refresh","navigated","close","trash","unread","read","star","unstar"],setup(S,{emit:T}){const d=S,w=T,y=V(""),R=V(!1),M=V(!0),{updateEmailLabels:B}=de(),{labels:v,resolveLabelColor:_,emailMoveToFolderActions:g,shallShowMoveToActionFor:F,moveSelectedEmailTo:h}=de(),c=x=>{h(x,[d.email.id]),w("refresh"),w("close")},f=async x=>{await B([d.email.id],x),w("refresh")};return(x,o)=>{const n=ie("IconBtn"),oe=xe;return u(),L(ke,{temporary:"","model-value":!!d.email,location:"right",scrim:!1,floating:"",class:"email-view"},{default:t(()=>[d.email?(u(),C(E,{key:0},[l("div",mt,[e(n,{class:"me-2",onClick:o[0]||(o[0]=m=>x.$emit("close"))},{default:t(()=>[e(r,{size:"22",icon:"tabler-chevron-left",class:"flip-in-rtl"})]),_:1}),l("div",pt,[l("div",ut,k(d.email.subject),1),l("div",ft,[(u(!0),C(E,null,U(d.email.labels,m=>(u(),L(ge,{key:m,color:a(_)(m),class:"text-capitalize flex-shrink-0",size:"small",label:!1},{default:t(()=>[b(k(m),1)]),_:2},1032,["color"]))),128))])]),l("div",null,[l("div",vt,[e(n,{disabled:!d.emailMeta.hasPreviousEmail,onClick:o[1]||(o[1]=m=>x.$emit("navigated","previous"))},{default:t(()=>[e(r,{icon:"tabler-chevron-left",class:"flip-in-rtl"})]),_:1},8,["disabled"]),e(n,{disabled:!d.emailMeta.hasNextEmail,onClick:o[2]||(o[2]=m=>x.$emit("navigated","next"))},{default:t(()=>[e(r,{icon:"tabler-chevron-right",class:"flip-in-rtl"})]),_:1},8,["disabled"])])])]),e(I),l("div",_t,[H(e(n,{onClick:o[3]||(o[3]=m=>{x.$emit("trash"),x.$emit("close")})},{default:t(()=>[e(r,{icon:"tabler-trash",size:"22"}),e(A,{activator:"parent",location:"top"},{default:t(()=>[b(" Delete Mail ")]),_:1})]),_:1},512),[[J,!d.email.isDeleted]]),e(n,{onClick:o[4]||(o[4]=q(m=>{x.$emit("unread"),x.$emit("close")},["stop"]))},{default:t(()=>[e(r,{icon:"tabler-mail",size:"22"}),e(A,{activator:"parent",location:"top"},{default:t(()=>[b(" Mark as Unread ")]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(r,{icon:"tabler-folder",size:"22"}),e(A,{activator:"parent",location:"top"},{default:t(()=>[b(" Move to ")]),_:1}),e(Y,{activator:"parent"},{default:t(()=>[e(Z,{density:"compact"},{default:t(()=>[(u(!0),C(E,null,U(a(g),m=>(u(),L(ee,{key:m.title,class:ae([a(F)(m.action)?"d-flex":"d-none","align-center"]),href:"#",onClick:N=>c(m.action)},{prepend:t(()=>[e(r,{icon:m.icon,class:"me-2",size:"20"},null,8,["icon"])]),default:t(()=>[e(se,{class:"text-capitalize"},{default:t(()=>[b(k(m.action),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(r,{icon:"tabler-tag",size:"22"}),e(A,{activator:"parent",location:"top"},{default:t(()=>[b(" Label ")]),_:1}),e(Y,{activator:"parent"},{default:t(()=>[e(Z,{density:"compact"},{default:t(()=>[(u(!0),C(E,null,U(a(v),m=>(u(),L(ee,{key:m.title,href:"#",onClick:q(N=>f(m.title),["stop"])},{prepend:t(()=>[e(ye,{inline:"",color:a(_)(m.title),dot:""},null,8,["color"])]),default:t(()=>[e(se,{class:"ms-2 text-capitalize"},{default:t(()=>[b(k(m.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(K),l("div",ht,[e(n,null,{default:t(()=>[e(r,{icon:"tabler-dots-vertical",size:"22"})]),_:1})])]),e(I),e(a(ce),{tag:"div",class:"mail-content-container flex-grow-1 pa-sm-12 pa-6",options:{wheelPropagation:!1}},{default:t(()=>[e(X,{class:"mb-4"},{default:t(()=>[l("div",bt,[e($e,{size:"38"},{default:t(()=>[e(re,{src:d.email.from.avatar,alt:d.email.from.name},null,8,["src","alt"])]),_:1}),l("div",xt,[l("div",gt,[l("div",yt,k(d.email.from.name),1),l("div",$t,k(d.email.from.email),1)]),e(K),l("div",kt,[l("div",Vt,k(new Date(d.email.time).toDateString()),1),l("div",null,[H(e(n,null,{default:t(()=>[e(r,{icon:"tabler-paperclip",size:"22"})]),_:1},512),[[J,d.email.attachments.length]]),e(n,{color:d.email.isStarred?"warning":"default",onClick:o[5]||(o[5]=m=>{var N;(N=d.email)!=null&&N.isStarred?x.$emit("unstar"):x.$emit("star"),x.$emit("refresh")})},{default:t(()=>[e(r,{icon:d.email.isStarred?"tabler-star-filled":"tabler-star",size:"22"},null,8,["icon"])]),_:1},8,["color"]),e(n,null,{default:t(()=>[e(r,{icon:"tabler-dots-vertical",size:"22"})]),_:1})])])])]),e(I),e(te,null,{default:t(()=>[l("div",{class:"text-base",innerHTML:d.email.message},null,8,Ct)]),_:1}),d.email.attachments.length?(u(),C(E,{key:0},[e(I),e(te,{class:"d-flex flex-column gap-y-4 pt-4"},{default:t(()=>[wt,(u(!0),C(E,null,U(d.email.attachments,m=>(u(),C("div",{key:m.fileName,class:"d-flex align-center"},[e(re,{src:m.thumbnail,alt:m.fileName,"aspect-ratio":"1","max-height":"24","max-width":"24",class:"me-2"},null,8,["src","alt"]),l("span",null,k(m.fileName),1)]))),128))]),_:1})],64)):G("",!0)]),_:1}),H(e(X,null,{default:t(()=>[e(te,{class:"font-weight-medium text-high-emphasis"},{default:t(()=>[l("div",zt,[b(" Click here to "),l("span",{class:"text-primary cursor-pointer",onClick:o[6]||(o[6]=m=>{R.value=!a(R),M.value=!a(M)})}," Reply "),b(" or "),St])]),_:1})]),_:1},512),[[J,a(M)]]),a(R)?(u(),L(X,{key:0},{default:t(()=>[e(te,null,{default:t(()=>{var m;return[l("h6",Et," Reply to "+k((m=S.email)==null?void 0:m.from.name),1),e(oe,{modelValue:a(y),"onUpdate:modelValue":o[7]||(o[7]=N=>O(y)?y.value=N:null),placeholder:"Write your message..."},null,8,["modelValue"]),l("div",Mt,[e(le,{variant:"text",color:"secondary"},{prepend:t(()=>[e(r,{icon:"tabler-paperclip",class:"text-high-emphasis",size:"16"})]),default:t(()=>[b(" Attachments ")]),_:1}),e(le,{"append-icon":"tabler-send"},{default:t(()=>[b(" Send ")]),_:1})])]}),_:1})]),_:1})):G("",!0)]),_:1})],64)):G("",!0)]),_:1},8,["model-value"])}}},Lt={class:"d-flex align-center"},Tt={class:"py-2 px-4 d-flex align-center d-flex gap-x-1"},Rt=["onClick"],At={class:"text-h6"},It={class:"text-body-2 truncate"},Ut={class:"text-sm text-disabled"},Bt={class:"email-actions d-none"},Nt={class:"py-4 px-5 text-center"},Ft=l("span",{class:"text-high-emphasis"},"No items found.",-1),Pt=[Ft],La={__name:"index",async setup(S){let T,d;const{isLeftSidebarOpen:w}=Te(),y=be(),{labels:R,resolveLabelColor:M,emailMoveToFolderActions:B,shallShowMoveToActionFor:v,moveSelectedEmailTo:_,updateEmails:g,updateEmailLabels:F}=de(),h=V(!1),c=V(""),f=V([]),{data:x,execute:o}=([T,d]=Me(()=>Ie(Ue("/apps/email",{query:{q:c,filter:()=>"filter"in y.params?y.params.filter:void 0,label:()=>"label"in y.params?y.params.label:void 0}}))),T=await T,d(),T),n=j(()=>x.value.emails),oe=j(()=>x.value.emailsMeta),m=p=>{const i=f.value.indexOf(p);i===-1?f.value.push(p):f.value.splice(i,1)},N=j(()=>n.value.length&&n.value.length===f.value.length),me=j(()=>!!f.value.length&&n.value.length!==f.value.length),ne=j(()=>f.value.every(p=>{var i;return(i=n.value.find(z=>z.id===p))==null?void 0:i.isRead})),Ve=()=>{f.value=N.value?[]:n.value.map(p=>p.id)},$=V(null),Ce=j(()=>{const p={hasNextEmail:!1,hasPreviousEmail:!1};if($.value){const i=n.value.findIndex(z=>{var s;return z.id===((s=$.value)==null?void 0:s.id)});p.hasNextEmail=!!n.value[i+1],p.hasPreviousEmail=!!n.value[i-1]}return p}),pe=async()=>{await o(),$.value&&($.value=n.value.find(p=>{var i;return p.id===((i=$.value)==null?void 0:i.id)}))},D=async(p,i=f.value)=>{f.value=[],f.value=[],i.length&&(p==="trash"?await g(i,{isDeleted:!0}):p==="spam"?await g(i,{folder:"spam"}):p==="unread"?await g(i,{isRead:!1}):p==="read"?await g(i,{isRead:!0}):p==="star"?await g(i,{isStarred:!0}):p==="unstar"&&await g(i,{isStarred:!1}),await o(),$.value&&pe())},we=async p=>{await _(p,f.value),await o()},ze=p=>{if(!$.value)return;const i=n.value.findIndex(s=>{var W;return s.id===((W=$.value)==null?void 0:W.id)}),z=p==="previous"?i-1:i+1;$.value=n.value[z]},Se=async p=>{$.value=p,await D("read",[p.id])};return he(()=>y.params,()=>{f.value=[]},{deep:!0}),(p,i)=>{const z=ie("IconBtn");return u(),L(Re,{style:{"min-block-size":"100%"},class:"email-app-layout"},{default:t(()=>[e(ke,{modelValue:a(w),"onUpdate:modelValue":i[1]||(i[1]=s=>O(w)?w.value=s:null),absolute:"",touchless:"",location:"start",temporary:p.$vuetify.display.mdAndDown},{default:t(()=>[e(ct,{"emails-meta":a(oe),onToggleComposeDialogVisibility:i[0]||(i[0]=s=>h.value=!a(h))},null,8,["emails-meta"])]),_:1},8,["modelValue","temporary"]),e(Dt,{email:a($),"email-meta":a(Ce),onRefresh:pe,onNavigated:ze,onClose:i[2]||(i[2]=s=>$.value=null),onRemove:i[3]||(i[3]=s=>D("trash",a($)?[a($).id]:[])),onUnread:i[4]||(i[4]=s=>D("unread",a($)?[a($).id]:[])),onStar:i[5]||(i[5]=s=>D("star",a($)?[a($).id]:[])),onUnstar:i[6]||(i[6]=s=>D("unstar",a($)?[a($).id]:[]))},null,8,["email","email-meta"]),e(Ae,null,{default:t(()=>[e(X,{flat:"",class:"email-content-list h-100 d-flex flex-column"},{default:t(()=>[l("div",Lt,[e(z,{class:"d-lg-none ms-3",onClick:i[7]||(i[7]=s=>w.value=!0)},{default:t(()=>[e(r,{icon:"tabler-menu-2"})]),_:1}),e(Q,{modelValue:a(c),"onUpdate:modelValue":i[8]||(i[8]=s=>O(c)?c.value=s:null),density:"default",class:"email-search px-sm-2 flex-grow-1 py-1",placeholder:"Search mail"},{"prepend-inner":t(()=>[e(r,{icon:"tabler-search",size:"24",class:"me-1 text-medium-emphasis"})]),_:1},8,["modelValue"])]),e(I),l("div",Tt,[e(_e,{"model-value":a(N),indeterminate:a(me),"onUpdate:modelValue":Ve},null,8,["model-value","indeterminate"]),l("div",{class:"w-100 d-flex align-center action-bar-actions gap-x-1",style:De({visibility:a(me)||a(N)?void 0:"hidden"})},[H(e(z,{onClick:i[9]||(i[9]=s=>D("trash"))},{default:t(()=>[e(r,{icon:"tabler-trash",size:"22"}),e(A,{activator:"parent",location:"top"},{default:t(()=>[b(" Delete Mail ")]),_:1})]),_:1},512),[[J,"filter"in a(y).params?a(y).params.filter!=="trashed":!0]]),e(z,{onClick:i[10]||(i[10]=s=>a(ne)?D("unread"):D("read"))},{default:t(()=>[e(r,{icon:a(ne)?"tabler-mail":"tabler-mail-opened",size:"22"},null,8,["icon"]),e(A,{activator:"parent",location:"top"},{default:t(()=>[b(k(a(ne)?"Mark as Unread":"Mark as Read"),1)]),_:1})]),_:1}),e(z,null,{default:t(()=>[e(r,{icon:"tabler-folder",size:"22"}),e(A,{activator:"parent",location:"top"},{default:t(()=>[b(" Folder ")]),_:1}),e(Y,{activator:"parent"},{default:t(()=>[e(Z,{density:"compact"},{default:t(()=>[(u(!0),C(E,null,U(a(B),s=>(u(),L(ee,{key:s.title,class:ae([a(v)(s.action)?"d-flex":"d-none","items-center"]),href:"#",onClick:W=>we(s.action)},{prepend:t(()=>[e(r,{icon:s.icon,class:"me-2",size:"20"},null,8,["icon"])]),default:t(()=>[e(se,{class:"text-capitalize"},{default:t(()=>[b(k(s.action),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(z,null,{default:t(()=>[e(r,{icon:"tabler-tag",size:"22"}),e(A,{activator:"parent",location:"top"},{default:t(()=>[b(" Label ")]),_:1}),e(Y,{activator:"parent"},{default:t(()=>[e(Z,{density:"compact"},{default:t(()=>[(u(!0),C(E,null,U(a(R),s=>(u(),L(ee,{key:s.title,href:"#",onClick:async()=>{await a(F)(a(f),s.title),await a(o)()}},{prepend:t(()=>[e(ye,{inline:"",color:a(M)(s.title),dot:""},null,8,["color"])]),default:t(()=>[e(se,{class:"ms-2 text-capitalize"},{default:t(()=>[b(k(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})],4),e(K),e(z,{onClick:a(o)},{default:t(()=>[e(r,{icon:"tabler-refresh",size:"22"})]),_:1},8,["onClick"]),e(z,null,{default:t(()=>[e(r,{icon:"tabler-dots-vertical",size:"22"})]),_:1})]),e(I),e(a(ce),{tag:"ul",options:{wheelPropagation:!1},class:"email-list"},{default:t(()=>[(u(!0),C(E,null,U(a(n),s=>{var W;return H((u(),C("li",{key:s.id,class:ae(["email-item d-flex align-center pa-4 gap-2 cursor-pointer",[{"email-read":s.isRead}]]),onClick:P=>Se(s)},[e(_e,{"model-value":a(f).includes(s.id),class:"flex-shrink-0","onUpdate:modelValue":P=>m(s.id),onClick:i[11]||(i[11]=q(()=>{},["stop"]))},null,8,["model-value","onUpdate:modelValue"]),e(z,{color:s.isStarred?"warning":"default",onClick:q(P=>D(s.isStarred?"unstar":"star",[s.id]),["stop"])},{default:t(()=>[e(r,{icon:"tabler-star",size:"22"})]),_:2},1032,["color","onClick"]),e($e,{size:"32"},{default:t(()=>[e(re,{src:s.from.avatar,alt:s.from.name},null,8,["src","alt"])]),_:2},1024),l("h6",At,k(s.from.name),1),l("span",It,k(s.subject),1),e(K),l("div",{class:ae(["email-meta align-center gap-2",p.$vuetify.display.xs?"d-none":""])},[(u(!0),C(E,null,U(s.labels,P=>(u(),L(r,{key:P,icon:"tabler-circle-filled",size:"10",color:a(M)(P)},null,8,["color"]))),128)),l("span",Ut,k(("formatDateToMonthShort"in p?p.formatDateToMonthShort:a(Ee))(s.time)),1)],2),l("div",Bt,[e(z,{onClick:q(P=>D("trash",[s.id]),["stop"])},{default:t(()=>[e(r,{icon:"tabler-trash",size:"22"}),e(A,{activator:"parent",location:"top"},{default:t(()=>[b(" Delete Mail ")]),_:1})]),_:2},1032,["onClick"]),e(z,{class:"mx-2",onClick:q(P=>D(s.isRead?"unread":"read",[s.id]),["stop"])},{default:t(()=>[e(r,{icon:s.isRead?"tabler-mail":"tabler-mail-opened",size:"22"},null,8,["icon"]),e(A,{activator:"parent",location:"top"},{default:t(()=>[b(k(s.isRead?"Mark as Unread":"Mark as Read"),1)]),_:2},1024)]),_:2},1032,["onClick"]),e(z,{onClick:q(P=>D("spam",[s.id]),["stop"])},{default:t(()=>[e(r,{icon:"tabler-info-circle",size:"22"}),e(A,{activator:"parent",location:"top"},{default:t(()=>[b(" Move to Spam ")]),_:1})]),_:2},1032,["onClick"])])],10,Rt)),[[J,(W=a(n))==null?void 0:W.length]])}),128)),H(l("li",Nt,Pt,512),[[J,!a(n).length]])]),_:1})]),_:1}),H(e(et,{onClose:i[12]||(i[12]=s=>h.value=!1)},null,512),[[J,a(h)]])]),_:1})]),_:1})}}};export{La as default};
