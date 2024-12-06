import{_ as be}from"./TablePagination-QwDXvVnB.js";import{_ as Se}from"./AppSelect-CCci48xp.js";import{u as Ve,f as X}from"./format-DNoy3wlF.js";import{u as E}from"./applicationList-BZioye3k.js";import{f as ke}from"./helpers-Bzg9TCNL.js";import{V as T}from"./VCardText-Bjotn_eE.js";import{V as xe}from"./VDivider-SUUc1KGp.js";import{V as Oe}from"./VDataTableServer-_bBsEW4-.js";import{V as Y}from"./VChip-CISZQW4c.js";import{V as I,b as D,c as ee}from"./VCard-B6jmDFyP.js";import{r as w,w as F,H as R,o as g,f as L,e as a,b as e,d as p,v as c,x as b,n as q,c as V,F as k,z as Te,ab as Q,ap as G,aq as Ie,ar as te,as as Le,ad as J,at as De,au as $e,av as Pe,aw as Be,a0 as M,a6 as $,ag as W,ax as H,ay as ae,az as le,aA as se,aB as oe,aC as ze,aD as Z,aE as Ue,aF as Ne,a2 as j,aG as Me,aH as je,aI as Ee,aJ as Re,a9 as P,i as K,a8 as ie,ao as ne,R as re,U as ce}from"./main-Z3go8Xzc.js";/* empty css                         */import{a as x,V as U}from"./VRow-eo7qXlZG.js";import{V as ue}from"./VForm-CRZr7ck4.js";import{V as de}from"./VInput-KBboyctu.js";import{V as me}from"./VSpacer-DjAd7_Hm.js";import{V as fe}from"./VDialog-BsSXCWXL.js";import{_ as pe}from"./AppAutocomplete-DVX6hFXO.js";import{S as z}from"./sweetalert2-z6gKu1nJ.js";import{_ as ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as _e}from"./VTable-CvwxmxPq.js";import{V as ge}from"./VAlert-Uxb13eIy.js";const He={class:"d-flex justify-space-between flex-wrap gap-6"},qe={class:"me-3 d-flex gap-3"},Fe=p("br",null,null,-1),Ke={key:0},Lt={__name:"ApplicationActivityLog",props:{applicationId:{type:String,required:!0}},setup(t){const y=t,l=Ve(),o=w([]),v=w(!1),h=w(0),s=w(1),n=w(10),C=w(""),A=w(null),d=[{title:"Date",key:"created_at",sortable:!0},{title:"User",key:"user",sortable:!0},{title:"Activity Type",key:"description",sortable:!0},{title:"Details",key:"details",sortable:!1},{title:"IP Address",key:"ip_address",sortable:!1}],m=async()=>{v.value=!0;try{l.setPage(s.value),l.setPerPage(n.value),l.setActivityType(A.value),l.setSearchQuery(C.value);const f=await l.fetchApplicationActivityLogs(y.applicationId);o.value=f.data.data.map(_=>({..._,created_at:X(new Date(_.created_at),"yyyy-MM-dd HH:mm:ss"),ip_address:_.properties.ip||"N/A",details:r(_),user:_.user?_.user.name:"System"})),h.value=f.data.total}catch(f){console.error("Error fetching activity logs:",f)}finally{v.value=!1}},O=E(),i=w([]),r=f=>{switch(f.description){case"application_submit":return`Submitted application #${f.properties.application_id}`;case"application_update":return`Updated application #${f.properties.application_id}`;case"document_upload":return`Uploaded document: ${f.properties.document_name||"Unknown"}`;case"comment_added":return`Added comment to application #${f.properties.application_id||"Unknown"}`;case"application_status_update":const _=B(f.properties.old_status),N=B(f.properties.new_status);return`Updated status from ${_} to ${N}`;default:return f.description||"Performed an action"}},B=f=>{const _=i.value.find(N=>N.id===parseInt(f));return _?_.name:"Unknown"},S=f=>{switch(f){case"application_submit":return"primary";case"application_update":return"info";case"document_upload":return"success";case"comment_added":return"warning";case"application_status_update":return"error";default:return"default"}},Ae=f=>{s.value=f.page,n.value=f.itemsPerPage,f.sortBy&&f.sortBy.length>0&&l.setSorting(f.sortBy[0].key,f.sortBy[0].order),m()};F([C,A],()=>{s.value=1,m()}),R(async()=>{await m(),await we()});const we=async()=>{const f=await O.getAllApplicationStatuses();i.value=f.data};return(f,_)=>{const N=Se,he=be;return g(),L(I,{title:"Application Activity Log",class:"mt-5"},{default:a(()=>[e(T,null,{default:a(()=>[p("div",He,[p("div",qe,[e(N,{modelValue:n.value,"onUpdate:modelValue":[_[0]||(_[0]=u=>n.value=u),_[1]||(_[1]=u=>n.value=parseInt(u,10))],items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"}},null,8,["modelValue"])])])]),_:1}),e(xe),e(Oe,{"items-per-page":n.value,"onUpdate:itemsPerPage":_[3]||(_[3]=u=>n.value=u),page:s.value,"onUpdate:page":_[4]||(_[4]=u=>s.value=u),items:o.value,"items-length":h.value,headers:d,loading:v.value,class:"text-no-wrap","onUpdate:options":Ae},{"item.description":a(({item:u})=>[e(Y,{color:S(u.description),size:"small"},{default:a(()=>[c(b(q(ke)(u.description)),1)]),_:2},1032,["color"])]),"item.user":a(({item:u})=>[c(b(u.user),1)]),"item.created_at":a(({item:u})=>[c(b(q(X)(new Date(u.created_at),"dd MMM yyyy HH:mm:ss")),1)]),"item.ip_address":a(({item:u})=>[c(b(u.properties.ip),1)]),"item.details":a(({item:u})=>[u.description==="application_status_update"?(g(),V(k,{key:0},[c(" Updated "+b(u.properties.old_status)+" to "+b(u.properties.new_status)+" ",1),Fe,u.properties.comment?(g(),V("span",Ke," Comment: "+b(u.properties.comment),1)):Te("",!0)],64)):u.description==="comment_added"?(g(),V(k,{key:1},[c(b(u.properties.comment),1)],64)):u.description==="university_communication_added"?(g(),V(k,{key:2},[c(" Subject: "+b(u.properties.subject),1)],64)):(g(),V(k,{key:3},[c(b(u.properties.details||"N/A"),1)],64))]),bottom:a(()=>[e(he,{page:s.value,"onUpdate:page":_[2]||(_[2]=u=>s.value=u),"items-per-page":n.value,"total-items":h.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length","loading"])]),_:1})}}},Ye=Q({align:{type:String,default:"center",validator:t=>["center","start"].includes(t)},direction:{type:String,default:"vertical",validator:t=>["vertical","horizontal"].includes(t)},justify:{type:String,default:"auto",validator:t=>["auto","center"].includes(t)},side:{type:String,validator:t=>t==null||["start","end"].includes(t)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:t=>["start","end","both"].includes(t)},...G(),...Ie(),...te(),...Le()},"VTimeline"),ye=J()({name:"VTimeline",props:Ye(),setup(t,y){let{slots:l}=y;const{themeClasses:o}=De(t),{densityClasses:v}=$e(t),{rtlClasses:h}=Pe();Be({VTimelineDivider:{lineColor:M(t,"lineColor")},VTimelineItem:{density:M(t,"density"),lineInset:M(t,"lineInset")}});const s=$(()=>{const C=t.side?t.side:t.density!=="default"?"end":null;return C&&`v-timeline--side-${C}`}),n=$(()=>{const C=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(t.truncateLine){case"both":return C;case"start":return C[0];case"end":return C[1];default:return null}});return W(()=>e(t.tag,{class:["v-timeline",`v-timeline--${t.direction}`,`v-timeline--align-${t.align}`,`v-timeline--justify-${t.justify}`,n.value,{"v-timeline--inset-line":!!t.lineInset},o.value,v.value,s.value,h.value,t.class],style:[{"--v-timeline-line-thickness":H(t.lineThickness)},t.style]},l)),{}}}),Qe=Q({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:ae,iconColor:String,lineColor:String,...G(),...le(),...se(),...oe()},"VTimelineDivider"),Ge=J()({name:"VTimelineDivider",props:Qe(),setup(t,y){let{slots:l}=y;const{sizeClasses:o,sizeStyles:v}=ze(t,"v-timeline-divider__dot"),{backgroundColorStyles:h,backgroundColorClasses:s}=Z(M(t,"dotColor")),{roundedClasses:n}=Ue(t,"v-timeline-divider__dot"),{elevationClasses:C}=Ne(t),{backgroundColorClasses:A,backgroundColorStyles:d}=Z(M(t,"lineColor"));return W(()=>e("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":t.fillDot},t.class],style:t.style},[e("div",{class:["v-timeline-divider__before",A.value],style:d.value},null),!t.hideDot&&e("div",{key:"dot",class:["v-timeline-divider__dot",C.value,n.value,o.value],style:v.value},[e("div",{class:["v-timeline-divider__inner-dot",s.value,n.value],style:h.value},[l.default?e(Me,{key:"icon-defaults",disabled:!t.icon,defaults:{VIcon:{color:t.iconColor,icon:t.icon,size:t.size}}},l.default):e(j,{key:"icon",color:t.iconColor,icon:t.icon,size:t.size},null)])]),e("div",{class:["v-timeline-divider__after",A.value],style:d.value},null)])),{}}}),Je=Q({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:ae,iconColor:String,lineInset:[Number,String],...G(),...je(),...oe(),...le(),...se(),...te()},"VTimelineItem"),Ce=J()({name:"VTimelineItem",props:Je(),setup(t,y){let{slots:l}=y;const{dimensionStyles:o}=Ee(t),v=Re(0),h=w();return F(h,s=>{var n;s&&(v.value=((n=s.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:n.getBoundingClientRect().width)??0)},{flush:"post"}),W(()=>{var s,n;return e("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":t.fillDot},t.class],style:[{"--v-timeline-dot-size":H(v.value),"--v-timeline-line-inset":t.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${H(t.lineInset)})`:H(0)},t.style]},[e("div",{class:"v-timeline-item__body",style:o.value},[(s=l.default)==null?void 0:s.call(l)]),e(Ge,{ref:h,hideDot:t.hideDot,icon:t.icon,iconColor:t.iconColor,size:t.size,elevation:t.elevation,dotColor:t.dotColor,fillDot:t.fillDot,rounded:t.rounded},{default:l.icon}),t.density!=="compact"&&e("div",{class:"v-timeline-item__opposite"},[!t.hideOpposite&&((n=l.opposite)==null?void 0:n.call(l))])])}),{}}}),We={class:"comment-section"},Xe={class:"text-caption"},Ze=["innerHTML"],Dt={__name:"AcoAoCommunication",props:{applicationId:{type:String,required:!0}},setup(t){const y=t,l=E(),o=w(!1),v=w(""),h=w([]),s=w(!1),n=async()=>{try{s.value=!0,await l.addAcoAoCommunication(y.applicationId,v.value),v.value="",o.value=!1,await C()}catch(A){console.error("Error adding ACO & AO communication:",A)}finally{s.value=!1}},C=async()=>{await l.getAcoAoCommunications(y.applicationId),h.value=l.acoAoCommunications};return R(C),(A,d)=>(g(),V(k,null,[e(U,null,{default:a(()=>[e(x,{cols:"12",class:"d-flex justify-end mb-4"},{default:a(()=>[e(P,{color:"primary",onClick:d[0]||(d[0]=m=>o.value=!0)},{default:a(()=>[e(j,{start:"",icon:"mdi-plus"}),c(" Add New Communication ")]),_:1})]),_:1}),e(x,{cols:"12"},{default:a(()=>[e(I,null,{default:a(()=>[e(D,{class:"text-h6 font-weight-bold pa-4"},{default:a(()=>[c(" ACO & AO Communications ")]),_:1}),e(T,null,{default:a(()=>[p("div",We,[e(ye,{density:A.dense},{default:a(()=>[(g(!0),V(k,null,K(h.value,(m,O)=>(g(),L(Ce,{key:O,"dot-color":"primary",size:"small"},{opposite:a(()=>[p("div",Xe,b(m.created_at),1)]),default:a(()=>[e(I,{class:"elevation-1"},{default:a(()=>[e(D,{class:"text-subtitle-1"},{default:a(()=>[c(b(m.user.full_name),1)]),_:2},1024),e(T,null,{default:a(()=>[p("div",{innerHTML:m.message},null,8,Ze)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["density"])])]),_:1})]),_:1})]),_:1})]),_:1}),e(fe,{modelValue:o.value,"onUpdate:modelValue":d[3]||(d[3]=m=>o.value=m),"max-width":"500px"},{default:a(()=>[e(I,null,{default:a(()=>[e(D,{class:"text-h6 font-weight-bold pa-4"},{default:a(()=>[c("Add a New ACO & AO Communication")]),_:1}),e(T,null,{default:a(()=>[e(ue,{onSubmit:ie(n,["prevent"])},{default:a(()=>[e(de,{class:"text-body-1 font-weight-medium mb-2"},{default:a(()=>[c(" Message ")]),_:1}),e(q(ne),{content:v.value,"onUpdate:content":d[1]||(d[1]=m=>v.value=m),theme:"snow","content-type":"html",class:"mt-2"},null,8,["content"])]),_:1})]),_:1}),e(ee,{class:"pa-4"},{default:a(()=>[e(me),e(P,{color:"primary",loading:s.value,disabled:s.value,onClick:n},{default:a(()=>[e(j,{start:"",icon:"mdi-send"}),c(" Submit Communication ")]),_:1},8,["loading","disabled"]),e(P,{color:"secondary",disabled:s.value,onClick:d[2]||(d[2]=m=>o.value=!1)},{default:a(()=>[c(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},et={class:"comment-section"},tt={class:"text-caption"},at=["innerHTML"],$t={__name:"AcoCoCommunication",props:{applicationId:{type:String,required:!0}},setup(t){const y=t,l=E(),o=w(!1),v=w(""),h=w([]),s=w(!1),n=async()=>{try{s.value=!0,await l.addAcoCoCommunication(y.applicationId,v.value),v.value="",o.value=!1,await C()}catch(A){console.error("Error adding ACO & CO communication:",A)}finally{s.value=!1}},C=async()=>{await l.getAcoCoCommunications(y.applicationId),h.value=l.acoCoCommunications};return R(C),(A,d)=>(g(),V(k,null,[e(U,null,{default:a(()=>[e(x,{cols:"12",class:"d-flex justify-end mb-4"},{default:a(()=>[e(P,{color:"primary",onClick:d[0]||(d[0]=m=>o.value=!0)},{default:a(()=>[e(j,{start:"",icon:"mdi-plus"}),c(" Add New Communication ")]),_:1})]),_:1}),e(x,{cols:"12"},{default:a(()=>[e(I,null,{default:a(()=>[e(D,{class:"text-h6 font-weight-bold pa-4"},{default:a(()=>[c(" ACO & CO Communications ")]),_:1}),e(T,null,{default:a(()=>[p("div",et,[e(ye,{density:A.dense},{default:a(()=>[(g(!0),V(k,null,K(h.value,(m,O)=>(g(),L(Ce,{key:O,"dot-color":"primary",size:"small"},{opposite:a(()=>[p("div",tt,b(m.created_at),1)]),default:a(()=>[e(I,{class:"elevation-1"},{default:a(()=>[e(D,{class:"text-subtitle-1"},{default:a(()=>[c(b(m.user.full_name),1)]),_:2},1024),e(T,null,{default:a(()=>[p("div",{innerHTML:m.message},null,8,at)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["density"])])]),_:1})]),_:1})]),_:1})]),_:1}),e(fe,{modelValue:o.value,"onUpdate:modelValue":d[3]||(d[3]=m=>o.value=m),"max-width":"500px"},{default:a(()=>[e(I,null,{default:a(()=>[e(D,{class:"text-h6 font-weight-bold pa-4"},{default:a(()=>[c("Add a New ACO & CO Communication")]),_:1}),e(T,null,{default:a(()=>[e(ue,{onSubmit:ie(n,["prevent"])},{default:a(()=>[e(de,{class:"text-body-1 font-weight-medium mb-2"},{default:a(()=>[c(" Message ")]),_:1}),e(q(ne),{content:v.value,"onUpdate:content":d[1]||(d[1]=m=>v.value=m),theme:"snow","content-type":"html",class:"mt-2"},null,8,["content"])]),_:1})]),_:1}),e(ee,{class:"pa-4"},{default:a(()=>[e(me),e(P,{color:"primary",loading:s.value,disabled:s.value,onClick:n},{default:a(()=>[e(j,{start:"",icon:"mdi-send"}),c(" Submit Communication ")]),_:1},8,["loading","disabled"]),e(P,{color:"secondary",disabled:s.value,onClick:d[2]||(d[2]=m=>o.value=!1)},{default:a(()=>[c(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},lt=t=>(re("data-v-eca9312f"),t=t(),ce(),t),st=lt(()=>p("thead",null,[p("tr",null,[p("th",null,"Name"),p("th",null,"Email"),p("th",null,"Status")])],-1)),ot={__name:"ApplicationOfficerAssignments",props:{applicationId:{type:String,required:!0}},setup(t){const y=t,l=E(),o=w(null),v=w(""),h=$(()=>l.applicationOfficerOptions),s=$(()=>l.applicationOfficers),n=$(()=>{if(!v.value)return s.value;const i=v.value.toLowerCase();return s.value.filter(r=>r.full_name.toLowerCase().includes(i)||r.email.toLowerCase().includes(i)||r.pivot.status.toLowerCase().includes(i))}),C=async()=>{try{if(!o.value){errorMessage.value="Please select an officer before assigning.";return}if((await z.fire({title:"Confirm Assignment",text:"Are you sure you want to assign this application officer?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, assign it!"})).isConfirmed){const r=await l.assignApplicationOfficer(y.applicationId,o.value);if(r&&!r.status)throw console.log("hello"),console.log(r),new Error(r);z.fire({icon:"success",title:"Assignment Successful",text:"You have assigned the application officer successfully!",confirmButtonText:"OK"}),o.value=null,await A()}}catch(i){console.log(i),z.fire({icon:"error",title:"Assignment Failed",text:i,confirmButtonText:"OK"})}},A=async()=>{await l.fetchApplicationOfficers(y.applicationId)};R(async()=>{await Promise.all([A(),l.loadAllApplicationOfficers()])}),F(()=>y.applicationId,A);const d=i=>({accepted:"success",rejected:"error",pending:"warning"})[i.toLowerCase()]||"secondary",m=i=>({accepted:"Accepted",rejected:"Rejected",pending:"Pending"})[i.toLowerCase()]||i,O=i=>({success:"white",error:"white",warning:"black",secondary:"white"})[i]||"white";return(i,r)=>{const B=pe;return g(),L(I,null,{default:a(()=>[e(D,null,{default:a(()=>[c("Application Officer Assignments")]),_:1}),e(T,null,{default:a(()=>[e(U,null,{default:a(()=>[e(x,{cols:"12",md:"6"},{default:a(()=>[e(B,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=S=>o.value=S),items:h.value,"item-title":"full_name","item-value":"id",label:"Select Application Officer",placeholder:"Search and select an officer",clearable:""},null,8,["modelValue","items"])]),_:1}),e(x,{cols:"12",md:"6",class:"d-flex align-center"},{default:a(()=>[e(P,{class:"mt-6",color:"primary",disabled:!o.value,onClick:C},{default:a(()=>[c(" Assign Officer ")]),_:1},8,["disabled"])]),_:1})]),_:1}),e(U,{class:"mt-4"},{default:a(()=>[e(x,{cols:"12"},{default:a(()=>[n.value.length?(g(),L(_e,{key:0},{default:a(()=>[st,p("tbody",null,[(g(!0),V(k,null,K(n.value,S=>(g(),V("tr",{key:S.id},[p("td",null,b(S.user.full_name),1),p("td",null,b(S.user.email),1),p("td",null,[e(Y,{color:d(S.status),"text-color":O(d(S.status)),size:"small",label:""},{default:a(()=>[c(b(m(S.status)),1)]),_:2},1032,["color","text-color"])])]))),128))])]),_:1})):(g(),L(ge,{key:1,type:"info",class:"mt-2"},{default:a(()=>[c(" No assigned officers found. ")]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})}}},Pt=ve(ot,[["__scopeId","data-v-eca9312f"]]),it=t=>(re("data-v-aa458ed5"),t=t(),ce(),t),nt=it(()=>p("thead",null,[p("tr",null,[p("th",null,"Name"),p("th",null,"Email"),p("th",null,"Status")])],-1)),rt={__name:"ComplianceOfficerAssignments",props:{applicationId:{type:String,required:!0}},setup(t){const y=t,l=E(),o=w(null),v=w(""),h=$(()=>l.complianceOfficerOptions),s=$(()=>l.complianceOfficers),n=$(()=>{if(!v.value)return s.value;const i=v.value.toLowerCase();return s.value.filter(r=>r.full_name.toLowerCase().includes(i)||r.email.toLowerCase().includes(i)||r.pivot.status.toLowerCase().includes(i))}),C=async()=>{try{if(!o.value){errorMessage.value="Please select an officer before assigning.";return}if((await z.fire({title:"Confirm Assignment",text:"Are you sure you want to assign this compliance officer?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, assign it!"})).isConfirmed){const r=await l.assignComplianceOfficer(y.applicationId,o.value);if(r&&!r.status)throw new Error(r);z.fire({icon:"success",title:"Assignment Successful",text:"You have assigned the compliance officer successfully!",confirmButtonText:"OK"}),o.value=null,await A()}}catch(i){console.log(i),z.fire({icon:"error",title:"Assignment Failed",text:i,confirmButtonText:"OK"})}},A=async()=>{await l.fetchComplianceOfficers(y.applicationId)};R(async()=>{await Promise.all([A(),l.loadAllComplianceOfficers()])}),F(()=>y.applicationId,A);const d=i=>({accepted:"success",rejected:"error",pending:"warning"})[i.toLowerCase()]||"secondary",m=i=>({accepted:"Accepted",rejected:"Rejected",pending:"Pending"})[i.toLowerCase()]||i,O=i=>({success:"white",error:"white",warning:"black",secondary:"white"})[i]||"white";return(i,r)=>{const B=pe;return g(),L(I,null,{default:a(()=>[e(D,null,{default:a(()=>[c("Compliance Officer Assignments")]),_:1}),e(T,null,{default:a(()=>[e(U,null,{default:a(()=>[e(x,{cols:"12",md:"6"},{default:a(()=>[e(B,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=S=>o.value=S),items:h.value,"item-title":"full_name","item-value":"id",label:"Select Compliance Officer",placeholder:"Search and select an officer",clearable:""},null,8,["modelValue","items"])]),_:1}),e(x,{cols:"12",md:"6",class:"d-flex align-center"},{default:a(()=>[e(P,{class:"mt-6",color:"primary",disabled:!o.value,onClick:C},{default:a(()=>[c(" Assign Officer ")]),_:1},8,["disabled"])]),_:1})]),_:1}),e(U,{class:"mt-4"},{default:a(()=>[e(x,{cols:"12"},{default:a(()=>[n.value.length?(g(),L(_e,{key:0},{default:a(()=>[nt,p("tbody",null,[(g(!0),V(k,null,K(n.value,S=>(g(),V("tr",{key:S.id},[p("td",null,b(S.user.full_name),1),p("td",null,b(S.user.email),1),p("td",null,[e(Y,{color:d(S.status),"text-color":O(d(S.status)),size:"small",label:""},{default:a(()=>[c(b(m(S.status)),1)]),_:2},1032,["color","text-color"])])]))),128))])]),_:1})):(g(),L(ge,{key:1,type:"info",class:"mt-2"},{default:a(()=>[c(" No assigned officers found. ")]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})}}},Bt=ve(rt,[["__scopeId","data-v-aa458ed5"]]);export{Pt as A,Bt as C,Dt as _,Lt as a,$t as b};
