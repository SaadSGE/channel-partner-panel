import{r as Fe}from"./validators-s9ExGhpn.js";import{_ as ge}from"./AppTextarea-D44kLR6u.js";import{_ as Ie}from"./AppAutocomplete-W-pUNgKs.js";import{V as $,b as Z,c as ye,a as Be}from"./VCard-BnXNTOMD.js";import{V as x}from"./VCardText-B1XaOe8w.js";import{V as ee}from"./VSpacer-BkW8MSqi.js";import{r as o,w as _e,o as i,f as _,e as l,b as a,v as u,n as ze,a9 as F,H as Ee,bL as ie,c as k,z as y,a8 as Me,d as n,a2 as T,x as r,F as ce,i as pe,J as Pe}from"./main-rAiiXsdI.js";import{V as Se}from"./VDialog-yA1gQqjH.js";import{_ as He}from"./TablePagination-BPhlZAot.js";import{_ as qe}from"./AppTextField-DmYTd6Wj.js";import{_ as je}from"./AppSelect-CMySccpi.js";import{_ as Re}from"./Filters-C1smvVfC.js";import{u as Je}from"./leadStore-CnvzuIRQ.js";/* empty css                         */import{c as Oe}from"./commonFunction-d2zCghtn.js";import Ge from"./upload-lead-CI5QgSF6.js";import{u as Ke}from"./useAbility-6vN_UT_r.js";import{g as Qe}from"./helpers-Qc6KRDow.js";import{V as We}from"./VRow-CniF1p1V.js";import{V as Xe}from"./VForm-D9NCl5KL.js";import{V as Ye}from"./VInput-DHoDyuf5.js";import{V as me}from"./VDivider-BSC9O3QS.js";import{V as Ze}from"./VDataTableServer-D261-VPt.js";import{V as Y}from"./VChip-BYboZiGy.js";import{V as et}from"./VMenu-D43ItwZF.js";import{V as tt,a as ve,b as fe}from"./VList-B00F7rJx.js";import"./forwardRefs-D3j0TLhE.js";import"./index-DJAqJtim.js";import"./VSelect-DZps_XtY.js";import"./VTextField-ENbq1Mml.js";import"./dialog-transition-C_YyFp2L.js";import"./scopeId-BDZL6E0l.js";import"./VCheckboxBtn-B7aWkCFW.js";import"./VAvatar-Beus088c.js";import"./VImg-r7JonUwe.js";import"./filter-CtD6SXQX.js";/* empty css              */import"./VPagination-CLCdrpdj.js";import"./AppDateTimePicker-CxNHMBCo.js";import"./rolePermission-D4GumK2K.js";import"./user-0xpL16SC.js";import"./index-C7FPtGEp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VFileInput-FRu5Hwm5.js";import"./index-BNNg5QkT.js";import"./VDataTable-Iwpo4jqF.js";import"./VTable-DGs3k_Vu.js";import"./ssrBoot-CrRLApXi.js";const at={__name:"ChangeStatusDialog",props:{showDialog:Boolean,leadId:Number,statusId:Number,leadStatuses:Array,resolveLeadStatusName:Function},emits:["updateStatus","closeDialog"],setup(K,{emit:Q}){const f=K,C=Q,g=o(null),U=o("");_e(()=>f.showDialog,p=>{p&&(g.value=f.resolveLeadStatusName(f.statusId))});const S=()=>{C("closeDialog")},I=()=>{g.value!==null&&(C("updateStatus",{leadId:f.leadId,statusId:g.value,statusNote:U.value}),U.value="",S())};return(p,v)=>{const M=Ie,P=ge;return i(),_(Se,{"model-value":f.showDialog,persistent:"",width:p.$vuetify.display.smAndDown?"auto":400,"onClick:outside":S},{default:l(()=>[a($,null,{default:l(()=>[a(Z,null,{default:l(()=>[u("Select New Status")]),_:1}),a(x,null,{default:l(()=>[a(M,{modelValue:g.value,"onUpdate:modelValue":v[0]||(v[0]=m=>g.value=m),items:f.leadStatuses,"item-title":m=>m.name,"item-value":m=>m.id,label:"Status",placeholder:"Select Status",rules:["requiredValidator"in p?p.requiredValidator:ze(Fe)],clearable:""},null,8,["modelValue","items","item-title","item-value","rules"]),a(P,{modelValue:U.value,"onUpdate:modelValue":v[1]||(v[1]=m=>U.value=m),class:"mt-4",label:"Status Note (optional)",placeholder:"Enter status note",rows:"3"},null,8,["modelValue"])]),_:1}),a(ye,null,{default:l(()=>[a(ee),a(F,{color:"primary",onClick:I},{default:l(()=>[u("Update Status")]),_:1}),a(F,{text:"",onClick:S},{default:l(()=>[u("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value","width"])}}},lt={class:"me-3 d-flex gap-3"},st={class:"d-flex justify-center gap-4"},ot=n("p",{class:"text-white text-sm mb-0"},"Total Leads",-1),nt={class:"text-white text-h6 font-weight-bold mb-0"},dt=n("p",{class:"text-white text-sm mb-0"},"Active Leads",-1),ut={class:"text-white text-h6 font-weight-bold mb-0"},rt=n("p",{class:"text-white text-sm mb-0"},"Pending Calls",-1),it={class:"text-white text-h6 font-weight-bold mb-0"},ct={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},pt={style:{"inline-size":"15.625rem"}},mt={class:"d-flex flex-column ms-3"},vt={class:"d-block font-weight-medium text-truncate text-high-emphasis"},ft={class:"text-md"},gt={style:{"list-style-type":"disc","padding-inline-start":"20px"}},yt={style:{color:"#757575"}},_t={style:{color:"#007acc"}},St={style:{color:"orange"}},wt=["onClick"],bt={key:0},ht={style:{"list-style-type":"disc","padding-inline-start":"20px"}},Vt={style:{color:"#757575"}},kt={style:{color:"#757575"}},Ct={style:{color:"#007acc"}},Ut={style:{color:"orange"}},xt=["onClick"],ha={__name:"index",props:{userId:{type:String,default:null}},setup(K){const Q=K,f=Oe(),C=o([]);Ee(async()=>{he()});const g=Je(),U=o([]),S=o(),I=o(!1),p=o(10),v=o(1),M=o(),P=o(),m=o(""),w=o(null),te=o(null),b=o(null),h=o(null),H=o(!1),q=o(null),j=o(!1),B=o(!1),R=o(""),z=o(!1),J=ie({}),ae=o(!1),O=o(null),L=o(null),D=o(null),N=o(null),le=o(0),se=o(0),we=s=>{J[s]=!J[s]},{can:W}=Ke(),A=o(null),be=[{title:"Actions",key:"actions",sortable:!1},{title:"Lead Country",key:"lead_type"},{title:"Current Status",key:"status"},{title:"Status History",key:"statusHistory"},{title:"Manager's Note",key:"notes"},{title:"Name",key:"name"},{title:"Phone",key:"phone"},{title:"Email",key:"email"},{title:"Interested Course & Country",key:"course_country"},...W("create","lead")?[{title:"Assigned Status",key:"assigned_user"}]:[],...W("edit","lead")?[{title:"Assigned User",key:"assigned_user.name_with_email"}]:[],...W("edit","lead")?[{title:"Assigned Branch",key:"branch.branch_name_with_country"}]:[]];_e([m,w,b,h,O,L,D,N,A],()=>{E()});const he=async()=>{await f.getLeadStatus("",1,10,"","",null,!0),C.value=f.leadStatus},E=async()=>{I.value=!0;try{const s=await g.getLeads(Q.userId,v.value,p.value,m.value,M.value,P.value,w.value,b.value,h.value,O.value,L.value,D.value,N.value,A.value);U.value=s.data,S.value=s.total.total,le.value=s.total.active,se.value=s.total.pending}catch(s){console.error("Error fetching leads:",s)}finally{I.value=!1}},Ve=s=>{var t,c;E(),M.value=(t=s.sortBy[0])==null?void 0:t.key,P.value=(c=s.sortBy[0])==null?void 0:c.order},oe=(s,t,c)=>{q.value=s,te.value=t,H.value=!0,ae.value=c},ke=async({leadId:s,statusId:t,statusNote:c})=>{console.log("convertToStudent",ae.value);const X={status:t,status_note:c};await g.updateLeadStatus(s,X),await E(),H.value=!1},Ce=s=>{const t=C.value.find(c=>c.id===s);return t?t.name:"Unknown Status"},Ue=s=>{const t=C.value.find(c=>c.id===s);return t?t.color_code:"#000"},ne=o(Qe()==="admin"),de=async s=>{if(!s){console.error("Lead ID is required to add a note.");return}try{z.value=!0;const t={note:R.value};await g.addNoteToLead(s,t.note),R.value="",B.value=!1,await E()}catch(t){console.error("Error adding note:",t)}finally{z.value=!1}},G=ie({}),xe=s=>{G[s]=!G[s]},Le=s=>{q.value=s,B.value=!0},De=()=>{j.value=!j.value};return(s,t)=>{const c=Re,X=ge,Ne=je,Ae=qe,Te=He,$e=at;return i(),k("section",null,[a($,{class:"mb-6"},{default:l(()=>[s.$can("create","lead")?(i(),_(Be,{key:0,class:"pb-4"},{default:l(()=>[a(Z,null,{default:l(()=>[u("Filter")]),_:1})]),_:1})):y("",!0),s.$can("read","lead")?(i(),_(x,{key:1},{default:l(()=>[a(We,null,{default:l(()=>[s.$can("read","lead")&&!s.$can("edit","lead")&&!ne.value?(i(),_(c,{key:0,"selected-lead-status":w.value,"selected-dateFrom":b.value,"selected-dateTo":h.value,onUpdateLeadStatus:t[0]||(t[0]=e=>w.value=e),onUpdateDateFrom:t[1]||(t[1]=e=>b.value=e),onUpdateDateTo:t[2]||(t[2]=e=>h.value=e)},null,8,["selected-lead-status","selected-dateFrom","selected-dateTo"])):y("",!0),s.$can("read","lead")&&s.$can("edit","lead")&&!ne.value?(i(),_(c,{key:1,"selected-lead-status":w.value,"selected-dateFrom":b.value,"selected-dateTo":h.value,onUpdateLeadStatus:t[3]||(t[3]=e=>w.value=e),onUpdateDateFrom:t[4]||(t[4]=e=>b.value=e),onUpdateDateTo:t[5]||(t[5]=e=>h.value=e),"selected-lead-type":L.value,"selected-event":D.value,"selected-country":A.value,"selected-branch":N.value,onUpdateLeadType:t[6]||(t[6]=e=>L.value=e),onUpdateEvent:t[7]||(t[7]=e=>D.value=e),onUpdateCountry:t[8]||(t[8]=e=>A.value=e),onUpdateBranch:t[9]||(t[9]=e=>N.value=e),"country-label":"Lead Country"},null,8,["selected-lead-status","selected-dateFrom","selected-dateTo","selected-lead-type","selected-event","selected-country","selected-branch"])):y("",!0),s.$can("create","lead")&&s.$can("edit","lead")?(i(),_(c,{key:2,"selected-assigned-status":O.value,"selected-lead-status":w.value,"selected-dateFrom":b.value,"selected-dateTo":h.value,"selected-lead-type":L.value,"selected-event":D.value,"selected-country":A.value,"selected-branch":N.value,onUpdateAssignedStatus:t[10]||(t[10]=e=>O.value=e),onUpdateLeadStatus:t[11]||(t[11]=e=>w.value=e),onUpdateDateFrom:t[12]||(t[12]=e=>b.value=e),onUpdateDateTo:t[13]||(t[13]=e=>h.value=e),onUpdateLeadType:t[14]||(t[14]=e=>L.value=e),onUpdateEvent:t[15]||(t[15]=e=>D.value=e),onUpdateCountry:t[16]||(t[16]=e=>A.value=e),onUpdateBranch:t[17]||(t[17]=e=>N.value=e),"country-label":"Lead Country"},null,8,["selected-assigned-status","selected-lead-status","selected-dateFrom","selected-dateTo","selected-lead-type","selected-event","selected-country","selected-branch"])):y("",!0)]),_:1}),a(Se,{modelValue:B.value,"onUpdate:modelValue":t[21]||(t[21]=e=>B.value=e),"max-width":"500px"},{default:l(()=>[a($,null,{default:l(()=>[a(Z,null,{default:l(()=>[u("Add a New Note")]),_:1}),a(x,null,{default:l(()=>[a(Xe,{onSubmit:Me(de,["prevent"])},{default:l(()=>[a(Ye,{class:"mt-2"},{default:l(()=>[u(" New Note ")]),_:1}),a(X,{modelValue:R.value,"onUpdate:modelValue":t[18]||(t[18]=e=>R.value=e),placeholder:"Add a new note",class:"mt-2"},null,8,["modelValue"])]),_:1})]),_:1}),a(ye,null,{default:l(()=>[a(ee),a(F,{color:"primary",loading:z.value,disabled:z.value,onClick:t[19]||(t[19]=()=>de(q.value))},{default:l(()=>[u(" Submit Note ")]),_:1},8,["loading","disabled"]),a(F,{disabled:z.value,onClick:t[20]||(t[20]=e=>B.value=!1)},{default:l(()=>[u(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})):y("",!0),a(me),a(x,{class:"d-flex flex-wrap gap-4 justify-center"},{default:l(()=>[n("div",lt,[a(Ne,{"model-value":p.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":t[22]||(t[22]=e=>p.value=parseInt(e,10))},null,8,["model-value"])]),a(ee),n("div",st,[a($,{class:"total-leads-card primary-gradient d-flex align-center",elevation:"2"},{default:l(()=>[a(x,{class:"d-flex align-center gap-2 py-2"},{default:l(()=>[a(T,{icon:"tabler-users",size:"24",color:"white"}),n("div",null,[ot,n("p",nt,r(S.value),1)])]),_:1})]),_:1}),a($,{class:"total-leads-card success-gradient d-flex align-center",elevation:"2"},{default:l(()=>[a(x,{class:"d-flex align-center gap-2 py-2"},{default:l(()=>[a(T,{icon:"tabler-check",size:"24",color:"white"}),n("div",null,[dt,n("p",ut,r(le.value),1)])]),_:1})]),_:1}),a($,{class:"total-leads-card warning-gradient d-flex align-center",elevation:"2"},{default:l(()=>[a(x,{class:"d-flex align-center gap-2 py-2"},{default:l(()=>[a(T,{icon:"tabler-clock",size:"24",color:"white"}),n("div",null,[rt,n("p",it,r(se.value),1)])]),_:1})]),_:1})]),n("div",ct,[n("div",pt,[a(Ae,{modelValue:m.value,"onUpdate:modelValue":t[23]||(t[23]=e=>m.value=e),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),s.$can("create","lead")?(i(),_(F,{key:0,"prepend-icon":"tabler-plus",onClick:De},{default:l(()=>[u(" Upload Lead ")]),_:1})):y("",!0)]),a(Ge,{showUploadCard:j.value,"onUpdate:showUploadCard":t[24]||(t[24]=e=>j.value=e),onLeadsUploaded:E},null,8,["showUploadCard"])]),_:1}),a(me),a(Ze,{"items-per-page":p.value,"onUpdate:itemsPerPage":t[26]||(t[26]=e=>p.value=e),page:v.value,"onUpdate:page":t[27]||(t[27]=e=>v.value=e),loading:I.value,"onUpdate:options":Ve,"items-length":S.value,headers:be,items:U.value,"item-value":"total",class:"text-no-wrap text-sm rounded-0"},{"item.lead_type":l(({item:e})=>{var d,V;return[n("span",null,r(e.lead_type==="social"?(d=e.lead_country)==null?void 0:d.name:(V=e.lead_event)==null?void 0:V.name),1)]}),"item.assigned_user":l(({item:e})=>[a(Y,{color:e.assigned_user?"success":"error",size:"small",class:"font-weight-medium",style:{color:"#000",cursor:"pointer"}},{default:l(()=>[u(r(e.assigned_user?"Assigned":"Unassigned"),1)]),_:2},1032,["color"])]),"item.course_country":l(({item:e})=>[n("div",mt,[n("span",vt,r(e.interested_course),1),n("span",ft,r(e.interested_country),1)])]),"item.notes":l(({item:e})=>[n("ul",gt,[(i(!0),k(ce,null,pe(J[e.id]?e.notes:e.notes.slice(0,2),(d,V)=>(i(),k("li",{key:d.id,class:"note",style:{"font-size":"1.1em","margin-block-end":"8px"}},[u(r(d.note)+" ( ",1),n("small",yt,[n("span",_t,r(d.created_by),1),u(", "),n("span",St,r(d.created_at?new Date(d.created_at).toLocaleDateString():"N/A"),1)]),u(" ) ")]))),128))]),e.notes.length>2?(i(),k("p",{key:0,onClick:d=>we(e.id),style:{color:"blue",cursor:"pointer","font-weight":"bold","padding-inline-start":"10px","text-decoration":"underline"}},r(J[e.id]?"Show Less":"Show More"),9,wt)):y("",!0)]),"item.status":l(({item:e})=>{var d;return[a(Y,{color:((d=e.status)==null?void 0:d.color_code)||"#D3D3D3",size:"small",class:"font-weight-medium",style:{cursor:"pointer"},onClick:V=>{var ue,re;return oe(e.id,(ue=e.status)==null?void 0:ue.id,(re=e.status)==null?void 0:re.convert_to_student)}},{default:l(()=>{var V;return[u(r(((V=e.status)==null?void 0:V.name)||"Unknown Status"),1)]}),_:2},1032,["color","onClick"])]}),"item.assigned_branch":l(({item:e})=>[e.assigned_branch?(i(),k("span",bt,r(e.assigned_branch),1)):(i(),_(Y,{key:1,color:"error",size:"small",variant:"flat"},{default:l(()=>[u("Not Assigned")]),_:1}))]),"item.actions":l(({item:e})=>[a(F,{icon:"",variant:"text",color:"medium-emphasis",class:"action-button"},{default:l(()=>[a(T,{icon:"tabler-dots-vertical"}),a(et,{activator:"parent","open-on-hover":""},{default:l(()=>[a(tt,null,{default:l(()=>[a(ve,{onClick:d=>oe(e.id,e.status),class:"change-status-option"},{prepend:l(()=>[a(T,{icon:"tabler-analyze"})]),default:l(()=>[a(fe,null,{default:l(()=>[u("Change Status")]),_:1})]),_:2},1032,["onClick"]),s.$can("edit","lead")?(i(),_(ve,{key:0,onClick:d=>Le(e.id),class:"add-note-option"},{prepend:l(()=>[a(T,{icon:"tabler-clipboard-text"})]),default:l(()=>[a(fe,null,{default:l(()=>[u("Add Note")]),_:1})]),_:2},1032,["onClick"])):y("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"item.statusHistory":l(({item:e})=>[n("ul",ht,[(i(!0),k(ce,null,pe(G[e.id]?e.status_history:e.status_history.slice(0,2),(d,V)=>(i(),k("li",{key:d.id,class:"status-history",style:{"font-size":"1.1em","margin-block-end":"8px"}},[n("span",{style:Pe({color:Ue(d.status_id)})},r(d.status_name),5),u(" - "),n("span",Vt,r(d.status_note),1),u(" ( "),n("small",kt,[n("span",Ct,r(d.user_name),1),u(", "),n("span",Ut,r(d.created_at),1)]),u(" ) ")]))),128))]),e.status_history.length>2?(i(),k("p",{key:0,onClick:d=>xe(e.id),style:{color:"blue",cursor:"pointer","font-weight":"bold","padding-inline-start":"10px","text-decoration":"underline"}},r(G[e.id]?"Show Less":"Show More"),9,xt)):y("",!0)]),bottom:l(()=>[a(Te,{page:v.value,"onUpdate:page":t[25]||(t[25]=e=>v.value=e),"items-per-page":p.value,"total-items":S.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","loading","items-length","items"])]),_:1}),a($e,{showDialog:H.value,leadId:q.value,statusId:te.value,leadStatuses:C.value,resolveLeadStatusName:Ce,onUpdateStatus:ke,onCloseDialog:t[28]||(t[28]=e=>H.value=!1)},null,8,["showDialog","leadId","statusId","leadStatuses"])])}}};export{ha as default};