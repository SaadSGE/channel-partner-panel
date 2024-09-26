import{r as me}from"./validators-DATznkav.js";import{r as i,w as pe,H as ie,o as m,f as H,e as t,b as e,d as a,v as s,x as r,n as q,c as f,F as M,z as T,j as ce,a6 as J,a7 as h,an as _e,i as X,R as ve,U as fe}from"./main-Bl2S878v.js";import{_ as ye}from"./AppTextarea-ZNJJoaPS.js";import{_ as ge}from"./AppAutocomplete-ntipd3-P.js";import{u as de}from"./applicationList-_EZiO25O.js";import{_ as Ve}from"./TablePagination-QiMYw024.js";import{_ as be}from"./AppSelect-Be7_rsHv.js";import{u as we,f as se}from"./format-VfAyBE26.js";import{f as Se,g as Ce}from"./helpers-BY2vbE1z.js";import{V as B}from"./VCardText-B8ILYUbj.js";import{V as Ae}from"./VDivider-0uTiaTOp.js";import{V as he}from"./VDataTableServer-dQ1hoHz3.js";import{V as ke}from"./VChip-Dsa3sMeg.js";import{V as z,b as W,d as Y}from"./VCard-BwM2Hv7u.js";/* empty css                         */import Ue from"./details-document-DZlQ_Be_.js";import{_ as De}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Z}from"./VDialog-ZTjnNTu-.js";import{V as ee}from"./VForm-2XhWYxKC.js";import{V as F}from"./form-BgF578sf.js";import{V as Le}from"./VFileInput-BTMYwjgh.js";import{V as te}from"./VSpacer-CjWroAbx.js";import{V as $e}from"./VTextField-C6eKnmHI.js";import{V as xe,a as P}from"./VTabs-DMtzT5BH.js";import{V as Te,a as I}from"./VWindowItem-DmtVYz0K.js";import{V as K,a as x}from"./VRow-Dp9HUeaj.js";import{V as ue}from"./VTable-DzTwkVdT.js";/* empty css                   */import"./VCounter-zaCnLXhF.js";import"./index-BUESfoyi.js";import"./index-CvHQXubi.js";import"./VField-CvHsy3Gw.js";import"./easing-CjukEv2V.js";import"./VInput-BHzeCb_g.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-DS53LwHp.js";import"./VList-_71UWNur.js";import"./ssrBoot-DVdC0ipF.js";import"./VAvatar-BNy4aAwU.js";import"./VImg-C7L2_Cfc.js";import"./dialog-transition-Do2WoKK9.js";import"./VMenu-DQYrk3kV.js";import"./VOverlay-CoABp32a.js";import"./lazy-D17lYkkN.js";import"./scopeId-BrrwTSQ7.js";import"./VCheckboxBtn-CpT2uvvt.js";import"./VSelectionControl-CHcFDMyx.js";import"./filter-w97jT8s0.js";import"./api-DA03bhL_.js";import"./index-B3bPRkoL.js";import"./VPagination-CyPhJ_hH.js";import"./VDataTable-DEw1FhXU.js";import"./VSlideGroup-C6LQopTA.js";import"./submitApplication-C1DrsT_D.js";import"./vue-filepond.esm-CI7Lig9V.js";import"./sweetalert2-z6gKu1nJ.js";/* empty css              */const Me={class:"d-flex justify-space-between flex-wrap gap-6"},je={class:"me-3 d-flex gap-3"},Ne=a("br",null,null,-1),Pe={key:0},Ie={__name:"ApplicationActivityLog",props:{applicationId:{type:String,required:!0}},setup(j){const G=j,U=we(),S=i([]),c=i(!1),C=i(0),v=i(1),_=i(10),k=i(""),D=i(null),b=[{title:"Date",key:"created_at",sortable:!0},{title:"User",key:"user",sortable:!0},{title:"Activity Type",key:"description",sortable:!0},{title:"Details",key:"details",sortable:!1},{title:"IP Address",key:"ip_address",sortable:!1}],w=async()=>{c.value=!0;try{U.setPage(v.value),U.setPerPage(_.value),U.setActivityType(D.value),U.setSearchQuery(k.value);const u=await U.fetchApplicationActivityLogs(G.applicationId);S.value=u.data.data.map(d=>({...d,created_at:se(new Date(d.created_at),"yyyy-MM-dd HH:mm:ss"),ip_address:d.properties.ip||"N/A",details:Q(d),user:d.user?d.user.name:"System"})),C.value=u.data.total}catch(u){console.error("Error fetching activity logs:",u)}finally{c.value=!1}},R=de(),E=i([]),Q=u=>{switch(u.description){case"application_submit":return`Submitted application #${u.properties.application_id}`;case"application_update":return`Updated application #${u.properties.application_id}`;case"document_upload":return`Uploaded document: ${u.properties.document_name||"Unknown"}`;case"comment_added":return`Added comment to application #${u.properties.application_id||"Unknown"}`;case"application_status_update":const d=A(u.properties.old_status),V=A(u.properties.new_status);return`Updated status from ${d} to ${V}`;default:return u.description||"Performed an action"}},A=u=>{const d=E.value.find(V=>V.id===parseInt(u));return d?d.name:"Unknown"},L=u=>{switch(u){case"application_submit":return"primary";case"application_update":return"info";case"document_upload":return"success";case"comment_added":return"warning";case"application_status_update":return"error";default:return"default"}},g=u=>{v.value=u.page,_.value=u.itemsPerPage,u.sortBy&&u.sortBy.length>0&&U.setSorting(u.sortBy[0].key,u.sortBy[0].order),w()};pe([k,D],()=>{v.value=1,w()}),ie(async()=>{await w(),await O()});const O=async()=>{const u=await R.getAllApplicationStatuses();E.value=u.data};return(u,d)=>{const V=be,$=Ve;return m(),H(z,{title:"Application Activity Log",class:"mt-5"},{default:t(()=>[e(B,null,{default:t(()=>[a("div",Me,[a("div",je,[e(V,{modelValue:_.value,"onUpdate:modelValue":[d[0]||(d[0]=o=>_.value=o),d[1]||(d[1]=o=>_.value=parseInt(o,10))],items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"}},null,8,["modelValue"])])])]),_:1}),e(Ae),e(he,{"items-per-page":_.value,"onUpdate:itemsPerPage":d[3]||(d[3]=o=>_.value=o),page:v.value,"onUpdate:page":d[4]||(d[4]=o=>v.value=o),items:S.value,"items-length":C.value,headers:b,loading:c.value,class:"text-no-wrap","onUpdate:options":g},{"item.description":t(({item:o})=>[e(ke,{color:L(o.description),size:"small"},{default:t(()=>[s(r(q(Se)(o.description)),1)]),_:2},1032,["color"])]),"item.user":t(({item:o})=>[s(r(o.user),1)]),"item.created_at":t(({item:o})=>[s(r(q(se)(new Date(o.created_at),"dd MMM yyyy HH:mm:ss")),1)]),"item.ip_address":t(({item:o})=>[s(r(o.properties.ip),1)]),"item.details":t(({item:o})=>[o.description==="application_status_update"?(m(),f(M,{key:0},[s(" Updated "+r(o.properties.old_status)+" to "+r(o.properties.new_status)+" ",1),Ne,o.properties.comment?(m(),f("span",Pe," Comment: "+r(o.properties.comment),1)):T("",!0)],64)):o.description==="comment_added"?(m(),f(M,{key:1},[s(r(o.properties.comment),1)],64)):o.description==="university_communication_added"?(m(),f(M,{key:2},[s(" Subject: "+r(o.properties.subject),1)],64)):(m(),f(M,{key:3},[s(r(o.properties.details||"N/A"),1)],64))]),bottom:t(()=>[e($,{page:v.value,"onUpdate:page":d[2]||(d[2]=o=>v.value=o),"items-per-page":_.value,"total-items":C.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length","loading"])]),_:1})}}},y=j=>(ve("data-v-9fccab06"),j=j(),fe(),j),He=y(()=>a("td",null,[a("strong",null,"Application Id")],-1)),Be=y(()=>a("td",null,[a("strong",null,"Date Added")],-1)),Ee=y(()=>a("td",null,[a("strong",null,"Student ID")],-1)),Fe=y(()=>a("td",null,[a("strong",null,"Student Passport No.")],-1)),ze=y(()=>a("td",null,[a("strong",null,"Student Name")],-1)),qe=y(()=>a("td",null,[a("strong",null,"Student Date of Birth")],-1)),Re=y(()=>a("td",null,[a("strong",null,"Student E-Mail")],-1)),Qe=y(()=>a("td",null,[a("strong",null,"Student Phone No.")],-1)),Oe=y(()=>a("td",null,[a("strong",null,"Communication E-Mail ID")],-1)),We=y(()=>a("td",null,[a("strong",null,"Communication Phone No.")],-1)),Ke=y(()=>a("thead",null,[a("tr",null,[a("th",null,"Date Added"),a("th",null,"Comment"),a("th",null,"Status and Document")])],-1)),Ge=["innerHTML"],Je={key:0,class:"current-status-label"},Xe={key:1},Ye=["href"],Ze={class:"comment-section"},et={class:"comment-header"},tt={class:"comment-date"},at=["innerHTML"],lt={class:"comment-section"},ot={class:"comment-header"},nt={class:"comment-date"},st={class:"communication-subject"},ut=y(()=>a("strong",null,"Subject:",-1)),it={class:"comment-body"},dt=["innerHTML"],rt={__name:"details",setup(j){const G=i(Ce()==="admin"),S=ce().params.id,c=de(),C=i("student-course-details"),v=i(!1),_=i(!1),k=i(!1),D=i(""),b=i(""),w=i({subject:"",message:""});i([{name:"Document1.pdf",progress:100},{name:"Document2.pdf",progress:100},{name:"Document3.pdf",progress:100},{name:"Document4.pdf",progress:100}]);const R=i([]),E=i([]),Q=i([{created_at:"",comment:"",status_text:""}]),A=i({application_id:"",created_at:"",counsellor_email:"",counsellor_number:""}),L=i();i(!0);const g=i({id:null,student_id:null,first_name:null,last_name:null,passport_no:null,date_of_birth:null,whatsapp_number:null,email:null,address:null,city:null,country:null,region:null,state:null,gender:null,visa_refusal:null,created_at:null,updated_at:null,document:[{id:null,student_id:null,path:null,created_at:null,updated_at:null}]}),O=i([]),u=i([]);ie(async()=>{await d()});const d=async()=>{await c.getApplicationDetails(S),await c.getApplicationStatusses(S),await c.getApplicationAllStatuses(),A.value=c.applicationData,O.value=c.documents,g.value=c.students,Q.value=c.statuses,R.value=c.comments,E.value=c.universityCommunications,u.value=c.allStatuses.filter(p=>p.id!==A.value.status)},V=i(!1),$=i(!1),o=i(!1),ae=async()=>{try{V.value=!0;let p=new FormData;p.append("status",D.value),p.append("comment",b.value),L.value&&p.append("file",L.value[0]),await c.updateStatus(S,p),v.value=!1,D.value="",b.value="",L.value=null,await d()}catch(p){console.error("Error updating status:",p)}finally{V.value=!1}},le=async()=>{try{$.value=!0,await c.addComment(S,b.value),b.value="",_.value=!1,await d()}catch(p){console.error("Error adding comment:",p)}finally{$.value=!1}},oe=async()=>{try{o.value=!0,await c.addUniversityCommunication(S,w.value),w.value={subject:"",message:""},k.value=!1,await d()}catch(p){console.error("Error adding university communication:",p)}finally{o.value=!1}};return(p,n)=>{const re=ge,ne=ye;return m(),H(z,null,{default:t(()=>[e(W,null,{default:t(()=>[s("Application Details")]),_:1}),e(B,null,{default:t(()=>[e(Z,{modelValue:v.value,"onUpdate:modelValue":n[4]||(n[4]=l=>v.value=l),"max-width":"500px"},{default:t(()=>[e(z,null,{default:t(()=>[e(W,null,{default:t(()=>[s("Change Current Status")]),_:1}),e(B,null,{default:t(()=>[e(ee,{onSubmit:J(ae,["prevent"])},{default:t(()=>[e(re,{modelValue:D.value,"onUpdate:modelValue":n[0]||(n[0]=l=>D.value=l),items:u.value,"item-title":l=>l.name,"item-value":l=>l.id,label:"Status",placeholder:"Select Status",rules:["requiredValidator"in p?p.requiredValidator:q(me)]},null,8,["modelValue","items","item-title","item-value","rules"]),e(F,{class:"mt-2"},{default:t(()=>[s("Add any necessary file (Optional)")]),_:1}),e(Le,{modelValue:L.value,"onUpdate:modelValue":n[1]||(n[1]=l=>L.value=l),color:"primary",label:"File input",variant:"outlined",class:"mt-2"},null,8,["modelValue"]),e(F,{class:"mt-2"},{default:t(()=>[s("Comment (Optional)")]),_:1}),e(ne,{modelValue:b.value,"onUpdate:modelValue":n[2]||(n[2]=l=>b.value=l),placeholder:"Place any comment regarding status"},null,8,["modelValue"])]),_:1})]),_:1}),e(Y,null,{default:t(()=>[e(te),e(h,{color:"primary",onClick:ae,loading:V.value,disabled:V.value},{default:t(()=>[s(" Submit ")]),_:1},8,["loading","disabled"]),e(h,{onClick:n[3]||(n[3]=l=>v.value=!1),disabled:V.value},{default:t(()=>[s("Cancel")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Z,{modelValue:_.value,"onUpdate:modelValue":n[7]||(n[7]=l=>_.value=l),"max-width":"500px"},{default:t(()=>[e(z,null,{default:t(()=>[e(W,null,{default:t(()=>[s("Add a New Comment")]),_:1}),e(B,null,{default:t(()=>[e(ee,{onSubmit:J(le,["prevent"])},{default:t(()=>[e(F,{class:"mt-2"},{default:t(()=>[s("New Comment")]),_:1}),e(ne,{modelValue:b.value,"onUpdate:modelValue":n[5]||(n[5]=l=>b.value=l),placeholder:"Add a new comment",class:"mt-2"},null,8,["modelValue"])]),_:1})]),_:1}),e(Y,null,{default:t(()=>[e(te),e(h,{color:"primary",onClick:le,loading:$.value,disabled:$.value},{default:t(()=>[s(" Submit Comment ")]),_:1},8,["loading","disabled"]),e(h,{onClick:n[6]||(n[6]=l=>_.value=!1),disabled:$.value},{default:t(()=>[s("Cancel")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Z,{modelValue:k.value,"onUpdate:modelValue":n[11]||(n[11]=l=>k.value=l),"max-width":"500px"},{default:t(()=>[e(z,null,{default:t(()=>[e(W,null,{default:t(()=>[s("Add a New University Communication")]),_:1}),e(B,null,{default:t(()=>[e(ee,{onSubmit:J(oe,["prevent"])},{default:t(()=>[e(F,{class:"mt-2"},{default:t(()=>[s("Subject")]),_:1}),e($e,{modelValue:w.value.subject,"onUpdate:modelValue":n[8]||(n[8]=l=>w.value.subject=l),placeholder:"Subject",class:"mt-2"},null,8,["modelValue"]),e(F,{class:"mt-2"},{default:t(()=>[s("Message")]),_:1}),e(q(_e),{theme:"snow",content:w.value.message,"onUpdate:content":n[9]||(n[9]=l=>w.value.message=l),"content-type":"html",class:"mt-2"},null,8,["content"])]),_:1})]),_:1}),e(Y,null,{default:t(()=>[e(te),e(h,{color:"primary",onClick:oe,loading:o.value,disabled:o.value},{default:t(()=>[s(" Submit Communication ")]),_:1},8,["loading","disabled"]),e(h,{onClick:n[10]||(n[10]=l=>k.value=!1),disabled:o.value},{default:t(()=>[s("Cancel")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(xe,{modelValue:C.value,"onUpdate:modelValue":n[12]||(n[12]=l=>C.value=l)},{default:t(()=>[e(P,{value:"student-course-details"},{default:t(()=>[s("Student/Course Details")]),_:1}),e(P,{value:"upload-download"},{default:t(()=>[s("Upload/Download")]),_:1}),e(P,{value:"status"},{default:t(()=>[s("Status")]),_:1}),e(P,{value:"comments"},{default:t(()=>[s("Comments")]),_:1}),e(P,{value:"university-communication"},{default:t(()=>[s("University Communication")]),_:1}),G.value?(m(),H(P,{key:0,value:"activity-logs"},{default:t(()=>[s("Activity Logs")]),_:1})):T("",!0)]),_:1},8,["modelValue"]),e(B,null,{default:t(()=>[e(Te,{modelValue:C.value,"onUpdate:modelValue":n[16]||(n[16]=l=>C.value=l)},{default:t(()=>[e(I,{value:"student-course-details"},{default:t(()=>[e(K,null,{default:t(()=>[e(x,{cols:"12"},{default:t(()=>[e(ue,null,{default:t(()=>[a("tbody",null,[a("tr",null,[He,a("td",null,r(A.value.application_id),1),Be,a("td",null,r(A.value.created_at),1)]),a("tr",null,[Ee,a("td",null,r(g.value.student_id??""),1),Fe,a("td",null,r(g.value.passport_no),1)]),a("tr",null,[ze,a("td",null,r(g.value.first_name)+" "+r(g.value.last_name),1),qe,a("td",null,r(g.value.date_of_birth),1)]),a("tr",null,[Re,a("td",null,r(g.value.email),1),Qe,a("td",null,r(g.value.whatsapp_number),1)]),a("tr",null,[Oe,a("td",null,r(A.value.counsellor_email),1),We,a("td",null,r(A.value.counsellor_number),1)])])]),_:1})]),_:1})]),_:1})]),_:1}),e(I,{value:"upload-download"},{default:t(()=>[e(Ue,{"existing-documents":O.value,"zip-link":g.value.document_zip_link},null,8,["existing-documents","zip-link"])]),_:1}),e(I,{value:"status"},{default:t(()=>[e(K,null,{default:t(()=>[e(x,{cols:"12",class:"d-flex justify-end"},{default:t(()=>[C.value==="status"&&p.$can("status","application")?(m(),H(h,{key:0,onClick:n[13]||(n[13]=l=>v.value=!0),color:"primary"},{default:t(()=>[s(" Change Current Status ")]),_:1})):T("",!0)]),_:1}),e(x,{cols:"12"},{default:t(()=>[e(ue,null,{default:t(()=>[Ke,a("tbody",null,[(m(!0),f(M,null,X(Q.value,(l,N)=>(m(),f("tr",{key:N},[a("td",null,r(l.created_at),1),a("td",null,r(l.comment),1),a("td",null,[a("div",null,[a("span",{innerHTML:l.status_text},null,8,Ge),N===0?(m(),f("span",Je,"(Current Status)")):T("",!0),l.document?(m(),f("div",Xe,[a("div",null,r(l.file_name),1),a("a",{href:l.document,target:"_blank",class:"download-link"},"Document",8,Ye)])):T("",!0)])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),e(I,{value:"comments"},{default:t(()=>[e(K,null,{default:t(()=>[e(x,{cols:"12",class:"d-flex justify-end"},{default:t(()=>[p.$can("comment","application")?(m(),H(h,{key:0,onClick:n[14]||(n[14]=l=>_.value=!0),color:"primary"},{default:t(()=>[s("Add New Comment")]),_:1})):T("",!0)]),_:1}),e(x,{cols:"12"},{default:t(()=>[a("div",Ze,[(m(!0),f(M,null,X(R.value,(l,N)=>(m(),f("div",{key:N,class:"comment"},[a("div",et,[a("span",tt,r(l.created_at),1)]),a("div",{class:"comment-body",innerHTML:l.comment_with_user},null,8,at)]))),128))])]),_:1})]),_:1})]),_:1}),e(I,{value:"university-communication"},{default:t(()=>[e(K,null,{default:t(()=>[e(x,{cols:"12",class:"d-flex justify-end"},{default:t(()=>[p.$can("university_communication","application")?(m(),H(h,{key:0,onClick:n[15]||(n[15]=l=>k.value=!0),color:"primary"},{default:t(()=>[s("Add New Communication")]),_:1})):T("",!0)]),_:1}),e(x,{cols:"12"},{default:t(()=>[a("div",lt,[(m(!0),f(M,null,X(E.value,(l,N)=>(m(),f("div",{key:N,class:"comment"},[a("div",ot,[a("span",nt,r(l.created_at),1)]),a("div",st,[ut,s(" "+r(l.subject),1)]),a("div",it,[a("div",{innerHTML:l.message},null,8,dt)])]))),128))])]),_:1})]),_:1})]),_:1}),e(I,{value:"activity-logs"},{default:t(()=>[e(Ie,{"application-id":q(S)},null,8,["application-id"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},_a=De(rt,[["__scopeId","data-v-9fccab06"]]);export{_a as default};
