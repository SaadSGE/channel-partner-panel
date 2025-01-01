import{r as Ae}from"./validators-94CN1vjU.js";import{_ as me}from"./AppTextarea-CHViFz6d.js";import{_ as Te}from"./AppAutocomplete-CQak0GV6.js";import{V as Y,b as Z,c as ve,a as $e}from"./VCard-BgzrJPIe.js";import{V as R}from"./VCardText-8dkhgbZ8.js";import{V as ee}from"./VSpacer-Dqc0LZK-.js";import{r as o,w as fe,o as r,f as V,e as a,b as l,v as d,n as Ie,a9 as U,H as Fe,bL as de,c as y,z as S,a8 as Be,d as u,x as i,F as ue,i as re,a2 as W,J as ze}from"./main-BRrswkNF.js";import{V as ge}from"./VDialog-CCtD21gY.js";import{_ as Ee}from"./TablePagination-D4ZYdevW.js";import{_ as Me}from"./AppTextField-CaH-heS7.js";import{_ as He}from"./AppSelect-CJMCnrZQ.js";import{_ as Pe}from"./Filters-CETf9tqW.js";import{u as qe}from"./leadStore-CjsEgDf_.js";/* empty css                         */import{c as Je}from"./commonFunction-BOGtIzS4.js";import Oe from"./upload-lead-B8KfTqd_.js";import{u as Re}from"./useAbility-nMXJrR2n.js";import{V as je}from"./VRow-BJMIsl1C.js";import{V as Ge}from"./VForm-CzQaAI15.js";import{V as Ke}from"./VInput-CCaHoIxZ.js";import{V as ie}from"./VDivider-qPOs2NiK.js";import{V as Qe}from"./VDataTableServer-DGqUzzcS.js";import{V as X}from"./VChip-CiE1uMP5.js";import{V as We}from"./VMenu-DZMmnyHj.js";import{V as Xe,a as ce,b as pe}from"./VList-BCK3pY4K.js";import"./helpers-CJKAgAQ1.js";import"./forwardRefs-D3j0TLhE.js";import"./index-B3KzD0PN.js";import"./VSelect-C5khPyk7.js";import"./VTextField-BciKVK3Y.js";import"./dialog-transition-DtWiuTBk.js";import"./scopeId-52iFhkpa.js";import"./VCheckboxBtn-BsIn3M_g.js";import"./VAvatar-BrKuUmwI.js";import"./VImg-BGRr61oX.js";import"./filter-BuOoE_HU.js";/* empty css              */import"./VPagination-Dm9VP4yM.js";import"./AppDateTimePicker-B3v7GwDi.js";import"./rolePermission-WRXYRBqh.js";import"./user-BJiRkspN.js";import"./index-0pKBX88w.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VFileInput-BUMbyJR9.js";import"./index-3PBKY6bz.js";import"./VDataTable-YdtihSmX.js";import"./VTable-C7c1numM.js";import"./ssrBoot-DN0mDyup.js";const Ye={__name:"ChangeStatusDialog",props:{showDialog:Boolean,leadId:Number,statusId:Number,leadStatuses:Array,resolveLeadStatusName:Function},emits:["updateStatus","closeDialog"],setup(j,{emit:G}){const f=j,w=G,g=o(null),k=o("");fe(()=>f.showDialog,p=>{p&&(g.value=f.resolveLeadStatusName(f.statusId))});const h=()=>{w("closeDialog")},D=()=>{g.value!==null&&(w("updateStatus",{leadId:f.leadId,statusId:g.value,statusNote:k.value}),k.value="",h())};return(p,v)=>{const T=Te,$=me;return r(),V(ge,{"model-value":f.showDialog,persistent:"",width:p.$vuetify.display.smAndDown?"auto":400,"onClick:outside":h},{default:a(()=>[l(Y,null,{default:a(()=>[l(Z,null,{default:a(()=>[d("Select New Status")]),_:1}),l(R,null,{default:a(()=>[l(T,{modelValue:g.value,"onUpdate:modelValue":v[0]||(v[0]=m=>g.value=m),items:f.leadStatuses,"item-title":m=>m.name,"item-value":m=>m.id,label:"Status",placeholder:"Select Status",rules:["requiredValidator"in p?p.requiredValidator:Ie(Ae)],clearable:""},null,8,["modelValue","items","item-title","item-value","rules"]),l($,{modelValue:k.value,"onUpdate:modelValue":v[1]||(v[1]=m=>k.value=m),class:"mt-4",label:"Status Note (optional)",placeholder:"Enter status note",rows:"3"},null,8,["modelValue"])]),_:1}),l(ve,null,{default:a(()=>[l(ee),l(U,{color:"primary",onClick:D},{default:a(()=>[d("Update Status")]),_:1}),l(U,{text:"",onClick:h},{default:a(()=>[d("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value","width"])}}},Ze={class:"me-3 d-flex gap-3"},et={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},tt={style:{"inline-size":"15.625rem"}},at={class:"d-flex flex-column ms-3"},lt={class:"d-block font-weight-medium text-truncate text-high-emphasis"},st={class:"text-md"},ot={style:{"list-style-type":"disc","padding-inline-start":"20px"}},nt={style:{color:"#757575"}},dt={style:{color:"#007acc"}},ut={style:{color:"orange"}},rt=["onClick"],it={key:0},ct={style:{"list-style-type":"disc","padding-inline-start":"20px"}},pt={style:{color:"#757575"}},mt={style:{color:"#757575"}},vt={style:{color:"#007acc"}},ft={style:{color:"orange"}},gt=["onClick"],ca={__name:"index",props:{userId:{type:String,default:null}},setup(j){const G=j,f=Je(),w=o([]);Fe(async()=>{Se()});const g=qe(),k=o([]),h=o(),D=o(!1),p=o(10),v=o(1),T=o(),$=o(),m=o(""),b=o(null),te=o(null),C=o(null),L=o(null),I=o(!1),F=o(null),B=o(!1),N=o(!1),z=o(""),x=o(!1),E=de({}),ae=o(!1),M=o(null),H=o(null),P=o(null),q=o(null),_e=s=>{E[s]=!E[s]},{can:K}=Re(),J=o(null),ye=[{title:"Actions",key:"actions",sortable:!1},{title:"Lead Country",key:"lead_type"},{title:"Current Status",key:"status"},{title:"Status History",key:"statusHistory"},{title:"Manager's Note",key:"notes"},{title:"Name",key:"name"},{title:"Phone",key:"phone"},{title:"Email",key:"email"},{title:"Interested Course & Country",key:"course_country"},...K("create","lead")?[{title:"Assigned Status",key:"assigned_user"}]:[],...K("edit","lead")?[{title:"Assigned User",key:"assigned_user.name_with_email"}]:[],...K("edit","lead")?[{title:"Assigned Branch",key:"branch.branch_name_with_country"}]:[]];fe([m,b,C,L,M,H,P,q,J],()=>{A()});const Se=async()=>{await f.getLeadStatus("",1,10,"","",null,!0),w.value=f.leadStatus},A=async()=>{D.value=!0;try{const s=await g.getLeads(G.userId,v.value,p.value,m.value,T.value,$.value,b.value,C.value,L.value,M.value,H.value,P.value,q.value,J.value);k.value=s.data,h.value=s.total}catch(s){console.error("Error fetching leads:",s)}finally{D.value=!1}},Ve=s=>{var t,c;A(),T.value=(t=s.sortBy[0])==null?void 0:t.key,$.value=(c=s.sortBy[0])==null?void 0:c.order},le=(s,t,c)=>{F.value=s,te.value=t,I.value=!0,ae.value=c},we=async({leadId:s,statusId:t,statusNote:c})=>{console.log("convertToStudent",ae.value);const Q={status:t,status_note:c};await g.updateLeadStatus(s,Q),await A(),I.value=!1},ke=s=>{const t=w.value.find(c=>c.id===s);return t?t.name:"Unknown Status"},he=s=>{const t=w.value.find(c=>c.id===s);return t?t.color_code:"#000"},se=async s=>{if(!s){console.error("Lead ID is required to add a note.");return}try{x.value=!0;const t={note:z.value};await g.addNoteToLead(s,t.note),z.value="",N.value=!1,await A()}catch(t){console.error("Error adding note:",t)}finally{x.value=!1}},O=de({}),be=s=>{O[s]=!O[s]},Ce=s=>{F.value=s,N.value=!0},Le=()=>{B.value=!B.value};return(s,t)=>{const c=Pe,Q=me,Ue=He,De=Me,Ne=Ee,xe=Ye;return r(),y("section",null,[l(Y,{class:"mb-6"},{default:a(()=>[s.$can("create","lead")?(r(),V($e,{key:0,class:"pb-4"},{default:a(()=>[l(Z,null,{default:a(()=>[d("Filter")]),_:1})]),_:1})):S("",!0),s.$can("read","lead")?(r(),V(R,{key:1},{default:a(()=>[l(je,null,{default:a(()=>[s.$can("read","lead")?(r(),V(c,{key:0,"selected-lead-status":b.value,"selected-dateFrom":C.value,"selected-dateTo":L.value,onUpdateLeadStatus:t[0]||(t[0]=e=>b.value=e),onUpdateDateFrom:t[1]||(t[1]=e=>C.value=e),onUpdateDateTo:t[2]||(t[2]=e=>L.value=e)},null,8,["selected-lead-status","selected-dateFrom","selected-dateTo"])):S("",!0),s.$can("create","lead")?(r(),V(c,{key:1,"selected-assigned-status":M.value,"selected-lead-status":b.value,"selected-dateFrom":C.value,"selected-dateTo":L.value,"selected-lead-type":H.value,"selected-event":P.value,"selected-country":J.value,"selected-branch":q.value,onUpdateAssignedStatus:t[3]||(t[3]=e=>M.value=e),onUpdateLeadStatus:t[4]||(t[4]=e=>b.value=e),onUpdateDateFrom:t[5]||(t[5]=e=>C.value=e),onUpdateDateTo:t[6]||(t[6]=e=>L.value=e),onUpdateLeadType:t[7]||(t[7]=e=>H.value=e),onUpdateEvent:t[8]||(t[8]=e=>P.value=e),onUpdateCountry:t[9]||(t[9]=e=>J.value=e),onUpdateBranch:t[10]||(t[10]=e=>q.value=e),"country-label":"Lead Country"},null,8,["selected-assigned-status","selected-lead-status","selected-dateFrom","selected-dateTo","selected-lead-type","selected-event","selected-country","selected-branch"])):S("",!0)]),_:1}),l(ge,{modelValue:N.value,"onUpdate:modelValue":t[14]||(t[14]=e=>N.value=e),"max-width":"500px"},{default:a(()=>[l(Y,null,{default:a(()=>[l(Z,null,{default:a(()=>[d("Add a New Note")]),_:1}),l(R,null,{default:a(()=>[l(Ge,{onSubmit:Be(se,["prevent"])},{default:a(()=>[l(Ke,{class:"mt-2"},{default:a(()=>[d(" New Note ")]),_:1}),l(Q,{modelValue:z.value,"onUpdate:modelValue":t[11]||(t[11]=e=>z.value=e),placeholder:"Add a new note",class:"mt-2"},null,8,["modelValue"])]),_:1})]),_:1}),l(ve,null,{default:a(()=>[l(ee),l(U,{color:"primary",loading:x.value,disabled:x.value,onClick:t[12]||(t[12]=()=>se(F.value))},{default:a(()=>[d(" Submit Note ")]),_:1},8,["loading","disabled"]),l(U,{disabled:x.value,onClick:t[13]||(t[13]=e=>N.value=!1)},{default:a(()=>[d(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})):S("",!0),l(ie),l(R,{class:"d-flex flex-wrap gap-4"},{default:a(()=>[u("div",Ze,[l(Ue,{"model-value":p.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":t[15]||(t[15]=e=>p.value=parseInt(e,10))},null,8,["model-value"])]),l(ee),u("div",et,[u("div",tt,[l(De,{modelValue:m.value,"onUpdate:modelValue":t[16]||(t[16]=e=>m.value=e),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),s.$can("create","lead")?(r(),V(U,{key:0,"prepend-icon":"tabler-plus",onClick:Le},{default:a(()=>[d(" Upload Lead ")]),_:1})):S("",!0)]),l(Oe,{showUploadCard:B.value,"onUpdate:showUploadCard":t[17]||(t[17]=e=>B.value=e),onLeadsUploaded:A},null,8,["showUploadCard"])]),_:1}),l(ie),l(Qe,{"items-per-page":p.value,"onUpdate:itemsPerPage":t[19]||(t[19]=e=>p.value=e),page:v.value,"onUpdate:page":t[20]||(t[20]=e=>v.value=e),loading:D.value,"onUpdate:options":Ve,"items-length":h.value,headers:ye,items:k.value,"item-value":"total",class:"text-no-wrap text-sm rounded-0"},{"item.lead_type":a(({item:e})=>{var n,_;return[u("span",null,i(e.lead_type==="social"?(n=e.lead_country)==null?void 0:n.name:(_=e.lead_event)==null?void 0:_.name),1)]}),"item.assigned_user":a(({item:e})=>[l(X,{color:e.assigned_user?"success":"error",size:"small",class:"font-weight-medium",style:{color:"#000",cursor:"pointer"}},{default:a(()=>[d(i(e.assigned_user?"Assigned":"Unassigned"),1)]),_:2},1032,["color"])]),"item.course_country":a(({item:e})=>[u("div",at,[u("span",lt,i(e.interested_course),1),u("span",st,i(e.interested_country),1)])]),"item.notes":a(({item:e})=>[u("ul",ot,[(r(!0),y(ue,null,re(E[e.id]?e.notes:e.notes.slice(0,2),(n,_)=>(r(),y("li",{key:n.id,class:"note",style:{"font-size":"1.1em","margin-block-end":"8px"}},[d(i(n.note)+" ( ",1),u("small",nt,[u("span",dt,i(n.created_by),1),d(", "),u("span",ut,i(n.created_at?new Date(n.created_at).toLocaleDateString():"N/A"),1)]),d(" ) ")]))),128))]),e.notes.length>2?(r(),y("p",{key:0,onClick:n=>_e(e.id),style:{color:"blue",cursor:"pointer","font-weight":"bold","padding-inline-start":"10px","text-decoration":"underline"}},i(E[e.id]?"Show Less":"Show More"),9,rt)):S("",!0)]),"item.status":a(({item:e})=>{var n;return[l(X,{color:((n=e.status)==null?void 0:n.color_code)||"#D3D3D3",size:"small",class:"font-weight-medium",style:{cursor:"pointer"},onClick:_=>{var oe,ne;return le(e.id,(oe=e.status)==null?void 0:oe.id,(ne=e.status)==null?void 0:ne.convert_to_student)}},{default:a(()=>{var _;return[d(i(((_=e.status)==null?void 0:_.name)||"Unknown Status"),1)]}),_:2},1032,["color","onClick"])]}),"item.assigned_branch":a(({item:e})=>[e.assigned_branch?(r(),y("span",it,i(e.assigned_branch),1)):(r(),V(X,{key:1,color:"error",size:"small",variant:"flat"},{default:a(()=>[d("Not Assigned")]),_:1}))]),"item.actions":a(({item:e})=>[l(U,{icon:"",variant:"text",color:"medium-emphasis",class:"action-button"},{default:a(()=>[l(W,{icon:"tabler-dots-vertical"}),l(We,{activator:"parent","open-on-hover":""},{default:a(()=>[l(Xe,null,{default:a(()=>[l(ce,{onClick:n=>le(e.id,e.status),class:"change-status-option"},{prepend:a(()=>[l(W,{icon:"tabler-analyze"})]),default:a(()=>[l(pe,null,{default:a(()=>[d("Change Status")]),_:1})]),_:2},1032,["onClick"]),s.$can("edit","lead")?(r(),V(ce,{key:0,onClick:n=>Ce(e.id),class:"add-note-option"},{prepend:a(()=>[l(W,{icon:"tabler-clipboard-text"})]),default:a(()=>[l(pe,null,{default:a(()=>[d("Add Note")]),_:1})]),_:2},1032,["onClick"])):S("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"item.statusHistory":a(({item:e})=>[u("ul",ct,[(r(!0),y(ue,null,re(O[e.id]?e.status_history:e.status_history.slice(0,2),(n,_)=>(r(),y("li",{key:n.id,class:"status-history",style:{"font-size":"1.1em","margin-block-end":"8px"}},[u("span",{style:ze({color:he(n.status_id)})},i(n.status_name),5),d(" - "),u("span",pt,i(n.status_note),1),d(" ( "),u("small",mt,[u("span",vt,i(n.user_name),1),d(", "),u("span",ft,i(n.created_at),1)]),d(" ) ")]))),128))]),e.status_history.length>2?(r(),y("p",{key:0,onClick:n=>be(e.id),style:{color:"blue",cursor:"pointer","font-weight":"bold","padding-inline-start":"10px","text-decoration":"underline"}},i(O[e.id]?"Show Less":"Show More"),9,gt)):S("",!0)]),bottom:a(()=>[l(Ne,{page:v.value,"onUpdate:page":t[18]||(t[18]=e=>v.value=e),"items-per-page":p.value,"total-items":h.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","loading","items-length","items"])]),_:1}),l(xe,{showDialog:I.value,leadId:F.value,statusId:te.value,leadStatuses:w.value,resolveLeadStatusName:ke,onUpdateStatus:we,onCloseDialog:t[21]||(t[21]=e=>I.value=!1)},null,8,["showDialog","leadId","statusId","leadStatuses"])])}}};export{ca as default};
