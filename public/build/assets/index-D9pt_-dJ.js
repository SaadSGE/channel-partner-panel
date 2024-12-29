import{r as De}from"./validators-HG5DkttQ.js";import{_ as me}from"./AppTextarea-hexXRf6S.js";import{_ as Ae}from"./AppAutocomplete-BHNP4SGW.js";import{V as X,b as Y,c as ve,a as Ie}from"./VCard-CiUXVH6b.js";import{V as j}from"./VCardText-haI9Z-IX.js";import{V as Z}from"./VSpacer-ZOaaLL5l.js";import{r as o,w as fe,o as c,f as N,e as s,b as a,v as u,n as $e,a9 as k,H as ne,bL as ue,c as y,z as U,a8 as Te,d,x as r,F as de,i as re,a2 as Q,J as Be}from"./main-C3zi_SKQ.js";import{V as _e}from"./VDialog-3Jy0gPfO.js";import{_ as Fe}from"./TablePagination-CVdSvQaB.js";import{_ as ze}from"./AppSelect-DUSpzFBi.js";import{_ as Ee}from"./Filters-spoIlZuQ.js";import{u as Me}from"./leadStore-BE5Kz32L.js";/* empty css                         */import{c as He}from"./commonFunction-DaV-cpx8.js";import Pe from"./upload-lead-B3yskCAP.js";import{V as qe}from"./VRow-s-aEvbE2.js";import{V as Je}from"./VForm-BglYL0G4.js";import{V as Oe}from"./VInput-DkaOtTDM.js";import{V as ie}from"./VDivider-Byc_tc4C.js";import{V as Re}from"./VDataTableServer-B-ffw53_.js";import{V as W}from"./VChip-Drmygec1.js";import{V as je}from"./VMenu-mUALx6PX.js";import{V as Ge,a as ce,b as pe}from"./VList-Bmx0u8vq.js";import"./helpers-CofNusnb.js";import"./forwardRefs-D3j0TLhE.js";import"./index-C8YGC3Io.js";import"./VSelect-C09sQe_X.js";import"./VTextField-Dognc3Fg.js";import"./dialog-transition-CxaPI8Wz.js";import"./scopeId-CNDVdJ3R.js";import"./VCheckboxBtn-ChwCrhEn.js";import"./VAvatar-DNScsPhF.js";import"./VImg-CXAH5jII.js";import"./filter-CQxRTFIJ.js";/* empty css              */import"./VPagination-y2flez4n.js";import"./AppDateTimePicker-Coy05tHX.js";import"./AppTextField-DFkCpbYz.js";import"./rolePermission-nqSxQQ9y.js";import"./user-DCbRDGuH.js";import"./index-DPjvp4eR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VFileInput-g2t9yEGf.js";import"./index-DPXcXuYg.js";import"./VDataTable-XBMr3zT1.js";import"./VTable-9EnPL_hl.js";import"./ssrBoot-d-rE-ebl.js";const Ke={__name:"ChangeStatusDialog",props:{showDialog:Boolean,leadId:Number,statusId:Number,leadStatuses:Array,resolveLeadStatusName:Function},emits:["updateStatus","closeDialog"],setup(x,{emit:G}){const m=x,S=G,_=o(null),w=o("");fe(()=>m.showDialog,p=>{p&&(_.value=m.resolveLeadStatusName(m.statusId))});const h=()=>{S("closeDialog")},C=()=>{_.value!==null&&(S("updateStatus",{leadId:m.leadId,statusId:_.value,statusNote:w.value}),w.value="",h())};return(p,v)=>{const D=Ae,A=me;return c(),N(_e,{"model-value":m.showDialog,persistent:"",width:p.$vuetify.display.smAndDown?"auto":400,"onClick:outside":h},{default:s(()=>[a(X,null,{default:s(()=>[a(Y,null,{default:s(()=>[u("Select New Status")]),_:1}),a(j,null,{default:s(()=>[a(D,{modelValue:_.value,"onUpdate:modelValue":v[0]||(v[0]=f=>_.value=f),items:x.leadStatuses,"item-title":f=>f.name,"item-value":f=>f.id,label:"Status",placeholder:"Select Status",rules:["requiredValidator"in p?p.requiredValidator:$e(De)],clearable:""},null,8,["modelValue","items","item-title","item-value","rules"]),a(A,{modelValue:w.value,"onUpdate:modelValue":v[1]||(v[1]=f=>w.value=f),class:"mt-4",label:"Status Note (optional)",placeholder:"Enter status note",rows:"3"},null,8,["modelValue"])]),_:1}),a(ve,null,{default:s(()=>[a(Z),a(k,{color:"primary",onClick:C},{default:s(()=>[u("Update Status")]),_:1}),a(k,{text:"",onClick:h},{default:s(()=>[u("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value","width"])}}},Qe={class:"me-3 d-flex gap-3"},We={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},Xe={class:"d-flex flex-column ms-3"},Ye={class:"d-block font-weight-medium text-truncate text-high-emphasis"},Ze={class:"text-md"},et={style:{"list-style-type":"disc","padding-inline-start":"20px"}},tt={style:{color:"#757575"}},at={style:{color:"#007acc"}},st={style:{color:"orange"}},lt=["onClick"],ot={key:0},nt={style:{"list-style-type":"disc","padding-inline-start":"20px"}},ut={style:{color:"#757575"}},dt={style:{color:"#757575"}},rt={style:{color:"#007acc"}},it={style:{color:"orange"}},ct=["onClick"],oa={__name:"index",props:{userId:{type:String,default:null}},setup(x){const G=x,m=He(),S=o([]);ne(async()=>{await m.getAllCountries(),await m.getBranches(),await V(),await te()});const _=Me(),w=o([]),h=o(),C=o(!1),p=o(10),v=o(1),D=o(),A=o(),f=o(""),I=o(null),ee=o(null),$=o(null),T=o(null),B=o(!1),F=o(null),z=o(!1),b=o(!1),E=o(""),L=o(!1),M=ue({}),ge=o(!1),H=o(null),P=o(null),q=o(null),J=o(null),ye=l=>{M[l]=!M[l]},O=o(null),Se=[{title:"Actions",key:"actions",sortable:!1},{title:"Lead Country",key:"lead_type"},{title:"Name",key:"name"},{title:"Phone",key:"phone"},{title:"Email",key:"email"},{title:"Interested Course & Country",key:"course_country"},{title:"Current Status",key:"status"},{title:"Status History",key:"statusHistory"},{title:"Assigned Status",key:"assigned_user"},{title:"Assigned User",key:"assigned_user.name_with_email"},{title:"Manager's Note",key:"notes"},{title:"Assigned Branch",key:"branch.branch_name_with_country"}];fe([f,I,$,T,H,P,q,J,O],()=>{V()}),ne(async()=>{await V(),await te()});const te=async()=>{await m.getLeadStatus(),S.value=m.leadStatus},V=async()=>{C.value=!0;try{const l=await _.getLeads(G.userId,v.value,p.value,f.value,D.value,A.value,I.value,$.value,T.value,H.value,P.value,q.value,J.value,O.value);w.value=l.data,h.value=l.total}catch(l){console.error("Error fetching leads:",l)}finally{C.value=!1}},we=l=>{var t,i;D.value=(t=l.sortBy[0])==null?void 0:t.key,A.value=(i=l.sortBy[0])==null?void 0:i.order},ae=(l,t,i)=>{F.value=l,ee.value=t,B.value=!0,i.value=i},he=async({leadId:l,statusId:t,statusNote:i})=>{console.log("convertToStudent",ge.value);const K={status:t,status_note:i};await _.updateLeadStatus(l,K),await V(),B.value=!1},Ve=l=>{const t=S.value.find(i=>i.id===l);return t?t.name:"Unknown Status"},ke=l=>{const t=S.value.find(i=>i.id===l);return t?t.color_code:"#000"},se=async l=>{if(!l){console.error("Lead ID is required to add a note.");return}try{L.value=!0;const t={note:E.value};await _.addNoteToLead(l,t.note),E.value="",b.value=!1,await V()}catch(t){console.error("Error adding note:",t)}finally{L.value=!1}},R=ue({}),Ce=l=>{R[l]=!R[l]},be=l=>{F.value=l,b.value=!0},Le=()=>{z.value=!z.value};return(l,t)=>{const i=Ee,K=me,Ue=ze,Ne=Fe,xe=Ke;return c(),y("section",null,[a(X,{class:"mb-6"},{default:s(()=>[l.$can("create","lead")?(c(),N(Ie,{key:0,class:"pb-4"},{default:s(()=>[a(Y,null,{default:s(()=>[u("Filter")]),_:1})]),_:1})):U("",!0),l.$can("create","lead")?(c(),N(j,{key:1},{default:s(()=>[a(qe,null,{default:s(()=>[a(i,{"selected-assigned-status":H.value,"selected-lead-status":I.value,"selected-dateFrom":$.value,"selected-dateTo":T.value,"selected-lead-type":P.value,"selected-event":q.value,"selected-country":O.value,"selected-branch":J.value,onUpdateAssignedStatus:t[0]||(t[0]=e=>H.value=e),onUpdateLeadStatus:t[1]||(t[1]=e=>I.value=e),onUpdateDateFrom:t[2]||(t[2]=e=>$.value=e),onUpdateDateTo:t[3]||(t[3]=e=>T.value=e),onUpdateLeadType:t[4]||(t[4]=e=>P.value=e),onUpdateEvent:t[5]||(t[5]=e=>q.value=e),onUpdateCountry:t[6]||(t[6]=e=>O.value=e),onUpdateBranch:t[7]||(t[7]=e=>J.value=e),"country-label":"Lead Country"},null,8,["selected-assigned-status","selected-lead-status","selected-dateFrom","selected-dateTo","selected-lead-type","selected-event","selected-country","selected-branch"])]),_:1}),a(_e,{modelValue:b.value,"onUpdate:modelValue":t[11]||(t[11]=e=>b.value=e),"max-width":"500px"},{default:s(()=>[a(X,null,{default:s(()=>[a(Y,null,{default:s(()=>[u("Add a New Note")]),_:1}),a(j,null,{default:s(()=>[a(Je,{onSubmit:Te(se,["prevent"])},{default:s(()=>[a(Oe,{class:"mt-2"},{default:s(()=>[u(" New Note ")]),_:1}),a(K,{modelValue:E.value,"onUpdate:modelValue":t[8]||(t[8]=e=>E.value=e),placeholder:"Add a new note",class:"mt-2"},null,8,["modelValue"])]),_:1})]),_:1}),a(ve,null,{default:s(()=>[a(Z),a(k,{color:"primary",loading:L.value,disabled:L.value,onClick:t[9]||(t[9]=()=>se(F.value))},{default:s(()=>[u(" Submit Note ")]),_:1},8,["loading","disabled"]),a(k,{disabled:L.value,onClick:t[10]||(t[10]=e=>b.value=!1)},{default:s(()=>[u(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})):U("",!0),a(ie),a(j,{class:"d-flex flex-wrap gap-4"},{default:s(()=>[d("div",Qe,[a(Ue,{"model-value":p.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":t[12]||(t[12]=e=>p.value=parseInt(e,10))},null,8,["model-value"])]),a(Z),d("div",We,[l.$can("create","lead")?(c(),N(k,{key:0,"prepend-icon":"tabler-plus",onClick:Le},{default:s(()=>[u(" Upload Lead ")]),_:1})):U("",!0)]),a(Pe,{showUploadCard:z.value,"onUpdate:showUploadCard":t[13]||(t[13]=e=>z.value=e),onLeadsUploaded:V},null,8,["showUploadCard"])]),_:1}),a(ie),a(Re,{"items-per-page":p.value,"onUpdate:itemsPerPage":t[15]||(t[15]=e=>p.value=e),page:v.value,"onUpdate:page":t[16]||(t[16]=e=>v.value=e),loading:C.value,"onUpdate:options":we,"items-length":h.value,headers:Se,items:w.value,"item-value":"total",class:"text-no-wrap text-sm rounded-0"},{"item.lead_type":s(({item:e})=>{var n,g;return[d("span",null,r(e.lead_type==="social"?(n=e.lead_country)==null?void 0:n.name:(g=e.lead_event)==null?void 0:g.name),1)]}),"item.assigned_user":s(({item:e})=>[a(W,{color:e.assigned_user?"success":"error",size:"small",class:"font-weight-medium",style:{color:"#000",cursor:"pointer"}},{default:s(()=>[u(r(e.assigned_user?"Assigned":"Unassigned"),1)]),_:2},1032,["color"])]),"item.course_country":s(({item:e})=>[d("div",Xe,[d("span",Ye,r(e.interested_course),1),d("span",Ze,r(e.interested_country),1)])]),"item.notes":s(({item:e})=>[d("ul",et,[(c(!0),y(de,null,re(M[e.id]?e.notes:e.notes.slice(0,2),(n,g)=>(c(),y("li",{key:n.id,class:"note",style:{"font-size":"1.1em","margin-block-end":"8px"}},[u(r(n.note)+" ( ",1),d("small",tt,[d("span",at,r(n.created_by),1),u(", "),d("span",st,r(n.created_at?new Date(n.created_at).toLocaleDateString():"N/A"),1)]),u(" ) ")]))),128))]),e.notes.length>2?(c(),y("p",{key:0,onClick:n=>ye(e.id),style:{color:"blue",cursor:"pointer","font-weight":"bold","padding-inline-start":"10px","text-decoration":"underline"}},r(M[e.id]?"Show Less":"Show More"),9,lt)):U("",!0)]),"item.status":s(({item:e})=>{var n;return[a(W,{color:((n=e.status)==null?void 0:n.color_code)||"#D3D3D3",size:"small",class:"font-weight-medium",style:{cursor:"pointer"},onClick:g=>{var le,oe;return ae(e.id,(le=e.status)==null?void 0:le.id,(oe=e.status)==null?void 0:oe.convert_to_student)}},{default:s(()=>{var g;return[u(r(((g=e.status)==null?void 0:g.name)||"Unknown Status"),1)]}),_:2},1032,["color","onClick"])]}),"item.assigned_branch":s(({item:e})=>[e.assigned_branch?(c(),y("span",ot,r(e.assigned_branch),1)):(c(),N(W,{key:1,color:"error",size:"small",variant:"flat"},{default:s(()=>[u("Not Assigned")]),_:1}))]),"item.actions":s(({item:e})=>[a(k,{icon:"",variant:"text",color:"medium-emphasis",class:"action-button"},{default:s(()=>[a(Q,{icon:"tabler-dots-vertical"}),a(je,{activator:"parent","open-on-hover":""},{default:s(()=>[a(Ge,null,{default:s(()=>[a(ce,{onClick:n=>ae(e.id,e.status),class:"change-status-option"},{prepend:s(()=>[a(Q,{icon:"tabler-analyze"})]),default:s(()=>[a(pe,null,{default:s(()=>[u("Change Status")]),_:1})]),_:2},1032,["onClick"]),a(ce,{onClick:n=>be(e.id),class:"add-note-option"},{prepend:s(()=>[a(Q,{icon:"tabler-clipboard-text"})]),default:s(()=>[a(pe,null,{default:s(()=>[u("Add Note")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"item.statusHistory":s(({item:e})=>[d("ul",nt,[(c(!0),y(de,null,re(R[e.id]?e.status_history:e.status_history.slice(0,2),(n,g)=>(c(),y("li",{key:n.id,class:"status-history",style:{"font-size":"1.1em","margin-block-end":"8px"}},[d("span",{style:Be({color:ke(n.status_id)})},r(n.status_name),5),u(" - "),d("span",ut,r(n.status_note),1),u(" ( "),d("small",dt,[d("span",rt,r(n.user_name),1),u(", "),d("span",it,r(n.created_at),1)]),u(" ) ")]))),128))]),e.status_history.length>2?(c(),y("p",{key:0,onClick:n=>Ce(e.id),style:{color:"blue",cursor:"pointer","font-weight":"bold","padding-inline-start":"10px","text-decoration":"underline"}},r(R[e.id]?"Show Less":"Show More"),9,ct)):U("",!0)]),bottom:s(()=>[a(Ne,{page:v.value,"onUpdate:page":t[14]||(t[14]=e=>v.value=e),"items-per-page":p.value,"total-items":h.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","loading","items-length","items"])]),_:1}),a(xe,{showDialog:B.value,leadId:F.value,statusId:ee.value,leadStatuses:S.value,resolveLeadStatusName:Ve,onUpdateStatus:he,onCloseDialog:t[17]||(t[17]=e=>B.value=!1)},null,8,["showDialog","leadId","statusId","leadStatuses"])])}}};export{oa as default};
