import{r as E,e as Ne}from"./validators-CzTvOQ7r.js";import{r as n,w as _e,o as d,c as B,b as e,e as t,a7 as te,n as b,d as a,a8 as C,v as i,F as ae,j as De,a1 as Ue,k as $e,H as Ie,a as Be,f as v,a2 as he,an as He,z as p,x as _,i as ve,R as Te,U as Me}from"./main-D5McJ9Zv.js";import{_ as Fe,a as Le,A as je,C as xe,b as Oe,c as qe}from"./ComplianceOfficerAssignments-DaxFbuA4.js";import{_ as Ee}from"./AppAutocomplete-Bnpv6Vja.js";import{u as Re}from"./applicationList-bSdurzvm.js";import{_ as Pe}from"./AppDateTimePicker-WVUhzLlx.js";import{_ as ze}from"./AppTextField-DgZofsLH.js";import{_ as Ke}from"./DialogCloseBtn-BsMhBpTz.js";import{u as We}from"./submitApplication-BkPSKl1M.js";import{S as we}from"./sweetalert2-z6gKu1nJ.js";import{V as R,b as Q,c as le}from"./VCard-Cgis6yXZ.js";import{V as j}from"./VCardText-ByrVCN3b.js";import{V as oe}from"./VForm-CTPemAxI.js";import{V as T,a as h}from"./VRow-D0QZu219.js";import{V as Y}from"./VDialog-DlKcqVlB.js";import{V as ne}from"./VSpacer-2uBqlsAT.js";/* empty css                         */import Je from"./details-document-CPyXWN58.js";import{g as Qe}from"./helpers-C_zUu5UZ.js";import{_ as Ye}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as J,a as Ge}from"./VTextField-C6tY1X-k.js";import{V as Xe}from"./VFileInput-BmPD9Li0.js";import{V as Ze,a as U,b as et,c as $}from"./VWindowItem-CzGSAEYT.js";import{V as L}from"./VBadge-DNCu64uG.js";import{V as Ae}from"./VTable-M5UisAIY.js";import"./forwardRefs-D3j0TLhE.js";import"./index-6ozB1_Sf.js";import"./TablePagination-BWZJrImI.js";import"./VDivider-Bg58jSdU.js";import"./VPagination-DrHkONnY.js";import"./AppSelect-uvpu5-01.js";import"./VSelect-ok_Yuo8W.js";import"./VList-DY6ojEBA.js";import"./index-D8QWoZBU.js";import"./ssrBoot-BFxq1bKX.js";import"./VAvatar-BewUqin6.js";import"./VImg-Bp_ZHGHr.js";import"./dialog-transition-B_BJ9JA7.js";import"./lazy-BGqaIAZx.js";import"./scopeId-cOAU0TpX.js";import"./VMenu-ovXTXsem.js";import"./VCheckboxBtn-CzZbLG_Q.js";import"./VChip-DaZnyOu_.js";import"./VSlideGroup-MxxTfIYi.js";import"./format-CAM7vBb5.js";import"./VDataTableServer-B5AYWZYB.js";import"./VDataTable-DqLWisIw.js";import"./filter-fftxsn9K.js";import"./VAlert-DlRX-OZc.js";/* empty css              */import"./fileStore-DbVpCYem.js";import"./vue-filepond.esm-BxzmqGAF.js";const tt={class:"d-flex justify-end mt-4"},at={__name:"StudentInfoEditDialog",props:{isDialogVisible:Boolean,first_name:String,last_name:String,email:String,passport_no:String,dob:String,id:String,refreshUpdateInfo:Function},emits:["update:isDialogVisible","refreshUpdateInfo"],setup(x,{emit:ie}){const A=x,c=We(),m=n(""),V=n(""),g=n(""),k=n(""),N=n(""),H=n(""),D=n(!1),S=n(!1);_e(()=>A.isDialogVisible,s=>{s&&(g.value=A.first_name,k.value=A.last_name,N.value=A.email,m.value=A.passport_no,V.value=A.dob,H.value=A.id)});const M=ie,I=s=>{M("update:isDialogVisible",s)},O=n(null),G=async()=>{O.value&&O.value.validate().then(s=>{s&&(D.value=!0)})},X=async()=>{S.value=!0;const s={passport_no:m.value,date_of_birth:V.value,first_name:g.value,last_name:k.value,email:N.value};try{await c.updateApplication(s,H.value),we.fire({icon:"success",title:"Update Successful",text:"Application updated successfully!",confirmButtonText:"OK"})}catch(r){we.fire({icon:"error",title:"Update Failed",text:r,confirmButtonText:"OK"})}finally{S.value=!1}D.value=!1,I(!1),M("refreshUpdateInfo")};return(s,r)=>{const f=Ke,F=ze,Z=Pe;return d(),B(ae,null,[e(Y,{"model-value":A.isDialogVisible,persistent:"",width:s.$vuetify.display.smAndDown?"auto":1200,"onUpdate:modelValue":I},{default:t(()=>[e(f,{onClick:r[0]||(r[0]=y=>s.$emit("update:isDialogVisible",!1))}),e(R,{class:"pricing-dialog pa-2 pa-sm-10"},{default:t(()=>[e(j,null,{default:t(()=>[e(oe,{ref_key:"refForm",ref:O,class:"form-padding",onSubmit:te(y=>({}),["prevent"])},{default:t(()=>[e(T,null,{default:t(()=>[e(h,{cols:"12",md:"12"},{default:t(()=>[e(T,null,{default:t(()=>[e(h,{cols:"12",md:"6"},{default:t(()=>[e(F,{modelValue:g.value,"onUpdate:modelValue":r[1]||(r[1]=y=>g.value=y),label:"Student First Name",placeholder:"John",rules:["requiredValidator"in s?s.requiredValidator:b(E)]},null,8,["modelValue","rules"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(F,{modelValue:k.value,"onUpdate:modelValue":r[2]||(r[2]=y=>k.value=y),label:"Student Last Name",placeholder:"Doe",rules:["requiredValidator"in s?s.requiredValidator:b(E)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(h,{cols:"12",md:"6"},{default:t(()=>[e(F,{modelValue:m.value,"onUpdate:modelValue":r[3]||(r[3]=y=>m.value=y),label:"Student Passport No.",placeholder:"A099800",rules:["requiredValidator"in s?s.requiredValidator:b(E)]},null,8,["modelValue","rules"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(Z,{modelValue:V.value,"onUpdate:modelValue":r[4]||(r[4]=y=>V.value=y),label:"Date of birth",placeholder:"Select date",rules:["requiredValidator"in s?s.requiredValidator:b(E)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(h,{cols:"12",md:"6"},{default:t(()=>[e(F,{modelValue:N.value,"onUpdate:modelValue":r[5]||(r[5]=y=>N.value=y),label:"Enter Student E-Mail ID",placeholder:"student@example.com",type:"email",rules:["requiredValidator"in s?s.requiredValidator:b(E),"emailValidator"in s?s.emailValidator:b(Ne)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),a("div",tt,[e(C,{color:"primary",onClick:G},{default:t(()=>[i(" Update ")]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["model-value","width"]),e(Y,{modelValue:D.value,"onUpdate:modelValue":r[7]||(r[7]=y=>D.value=y),"max-width":"500"},{default:t(()=>[e(R,null,{default:t(()=>[e(Q,{class:"text-h5"},{default:t(()=>[i(" Confirm Submission ")]),_:1}),e(j,null,{default:t(()=>[i("Are you sure you want to update the information?")]),_:1}),e(le,null,{default:t(()=>[e(ne),e(C,{color:"primary",onClick:X},{default:t(()=>[i(" Yes ")]),_:1}),e(C,{color:"secondary",onClick:r[6]||(r[6]=y=>D.value=!1)},{default:t(()=>[i(" No ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},w=x=>(Te("data-v-6f4fe613"),x=x(),Me(),x),lt=w(()=>a("div",null,"Application Details",-1)),ot={class:"icon-right"},nt=w(()=>a("td",null,[a("strong",null,"Application Id")],-1)),it=w(()=>a("td",null,[a("strong",null,"Date Added")],-1)),ut=w(()=>a("td",null,[a("strong",null,"Student ID")],-1)),st=w(()=>a("td",null,[a("strong",null,"Student Passport No.")],-1)),dt=w(()=>a("td",null,[a("strong",null,"Student Name")],-1)),rt=w(()=>a("td",null,[a("strong",null,"Student Date of Birth")],-1)),ct=w(()=>a("td",null,[a("strong",null,"Student E-Mail")],-1)),mt=w(()=>a("td",null,[a("strong",null,"Student Phone No.")],-1)),ft=w(()=>a("td",null,[a("strong",null,"Communication E-Mail ID")],-1)),pt=w(()=>a("td",null,[a("strong",null,"Communication Phone No.")],-1)),vt=w(()=>a("thead",null,[a("tr",null,[a("th",null,"Date Added"),a("th",null,"Comment"),a("th",null,"Status and Document")])],-1)),_t=["innerHTML"],yt={key:0,class:"current-status-label"},Vt={key:1},gt=["href"],Ct={class:"comment-section"},bt={class:"comment-header"},ht={class:"comment-date"},wt=["innerHTML"],At={class:"comment-section"},St={class:"comment-header"},kt={class:"comment-date"},Nt={class:"communication-subject"},Dt=w(()=>a("strong",null,"Subject:",-1)),Ut={class:"comment-body"},$t=["innerHTML"],It={__name:"details",setup(x){const ie=n(Qe()==="admin"),A=De(),c=A.params.id;console.log(c);const m=Re(),V=Ue(),g=n("student-course-details"),k=n(!1),N=n(!1),H=n(!1),D=n(""),S=n(""),M=n(!1),I=n({subject:"",message:""});n([{name:"Document1.pdf",progress:100},{name:"Document2.pdf",progress:100},{name:"Document3.pdf",progress:100},{name:"Document4.pdf",progress:100}]);const O=n([]),G=n([]),X=n([{created_at:"",comment:"",status_text:""}]),s=n({application_id:"",created_at:"",counsellor_email:"",counsellor_number:""}),r=n();n(!0);const f=n({id:null,student_id:null,first_name:null,last_name:null,passport_no:null,date_of_birth:null,whatsapp_number:null,email:null,address:null,city:null,country:null,region:null,state:null,gender:null,visa_refusal:null,created_at:null,updated_at:null,document:[{id:null,student_id:null,path:null,created_at:null,updated_at:null}]}),F=n([]),Z=n([]),y=$e(),Se=()=>{y.back()},ye=()=>{const u=A.hash.replace("#","");u&&(g.value=u)};_e(()=>A.hash,ye),Ie(async()=>{ye(),await P(),await pe();const u={status:"status",comments:"comments","university-communication":"university-communication","aco-ao-communication":"aco-ao-communication","assign-officer":"assign-officer","assign-compliance-officer":"assign-compliance-officer","aco-co-communication":"aco-co-communication"}[g.value];u&&(await V.markNotificationsAsReadByApplicationIdAndHash(c,u),await pe())});const P=async()=>{await m.getApplicationDetails(c),await m.getApplicationStatusses(c),await m.getApplicationAllStatuses(),s.value=m.applicationData,F.value=m.documents,f.value=m.students,X.value=m.statuses,O.value=m.comments,G.value=m.universityCommunications,Z.value=m.allStatuses.filter(u=>u.id!==s.value.status),console.log(f)},z=n(!1),K=n(!1),W=n(!1),Ve=async()=>{try{z.value=!0;let u=new FormData;u.append("status",D.value),u.append("comment",S.value),r.value&&u.append("file",r.value[0]),await m.updateStatus(c,u),k.value=!1,D.value="",S.value="",r.value=null,await P()}catch(u){console.error("Error updating status:",u)}finally{z.value=!1}},ge=async()=>{try{K.value=!0,await m.addComment(c,S.value),S.value="",N.value=!1,await P()}catch(u){console.error("Error adding comment:",u)}finally{K.value=!1}},Ce=async()=>{try{W.value=!0,await m.addUniversityCommunication(c,I.value),I.value={subject:"",message:""},H.value=!1,await P()}catch(u){console.error("Error adding university communication:",u)}finally{W.value=!1}},ue=n(0),se=n(0),de=n(0),re=n(0),ce=n(0),me=n(0),fe=n(0),pe=async()=>{ue.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(c,"status"),se.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(c,"comments"),de.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(c,"university-communication"),re.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(c,"aco-ao-communication"),ce.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(c,"assign-officer"),me.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(c,"assign-compliance-officer"),fe.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(c,"aco-co-communication")};return _e(g,async u=>{try{const ee={status:"status",comments:"comments","university-communication":"university-communication","aco-ao-communication":"aco-ao-communication","assign-officer":"assign-officer","assign-compliance-officer":"assign-compliance-officer","aco-co-communication":"aco-co-communication"}[u];ee&&(await V.markNotificationsAsReadByApplicationIdAndHash(c,ee),await pe())}catch(o){console.error("Error marking notifications as read:",o)}}),(u,o)=>{const ee=Ee,be=qe,ke=Be("IconBtn");return d(),v(R,null,{default:t(()=>[e(Q,{class:"d-flex justify-space-between align-center"},{default:t(()=>[lt,e(C,{color:"primary",onClick:Se},{default:t(()=>[e(he,{icon:"tabler-arrow-left",class:"mr-2"}),i(" Back ")]),_:1})]),_:1}),e(j,null,{default:t(()=>[e(Y,{modelValue:k.value,"onUpdate:modelValue":o[4]||(o[4]=l=>k.value=l),"max-width":"500px"},{default:t(()=>[e(R,null,{default:t(()=>[e(Q,null,{default:t(()=>[i("Change Current Status")]),_:1}),e(j,null,{default:t(()=>[e(oe,{onSubmit:te(Ve,["prevent"])},{default:t(()=>[e(ee,{modelValue:D.value,"onUpdate:modelValue":o[0]||(o[0]=l=>D.value=l),items:Z.value,"item-title":l=>l.name,"item-value":l=>l.id,label:"Status",placeholder:"Select Status",rules:["requiredValidator"in u?u.requiredValidator:b(E)]},null,8,["modelValue","items","item-title","item-value","rules"]),e(J,{class:"mt-2"},{default:t(()=>[i(" Add any necessary file (Optional) ")]),_:1}),e(Xe,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=l=>r.value=l),color:"primary",label:"File input",variant:"outlined",class:"mt-2"},null,8,["modelValue"]),e(J,{class:"mt-2"},{default:t(()=>[i(" Comment (Optional) ")]),_:1}),e(be,{modelValue:S.value,"onUpdate:modelValue":o[2]||(o[2]=l=>S.value=l),placeholder:"Place any comment regarding status"},null,8,["modelValue"])]),_:1})]),_:1}),e(le,null,{default:t(()=>[e(ne),e(C,{color:"primary",loading:z.value,disabled:z.value,onClick:Ve},{default:t(()=>[i(" Submit ")]),_:1},8,["loading","disabled"]),e(C,{disabled:z.value,onClick:o[3]||(o[3]=l=>k.value=!1)},{default:t(()=>[i(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Y,{modelValue:N.value,"onUpdate:modelValue":o[7]||(o[7]=l=>N.value=l),"max-width":"500px"},{default:t(()=>[e(R,null,{default:t(()=>[e(Q,null,{default:t(()=>[i("Add a New Comment")]),_:1}),e(j,null,{default:t(()=>[e(oe,{onSubmit:te(ge,["prevent"])},{default:t(()=>[e(J,{class:"mt-2"},{default:t(()=>[i(" New Comment ")]),_:1}),e(be,{modelValue:S.value,"onUpdate:modelValue":o[5]||(o[5]=l=>S.value=l),placeholder:"Add a new comment",class:"mt-2"},null,8,["modelValue"])]),_:1})]),_:1}),e(le,null,{default:t(()=>[e(ne),e(C,{color:"primary",loading:K.value,disabled:K.value,onClick:ge},{default:t(()=>[i(" Submit Comment ")]),_:1},8,["loading","disabled"]),e(C,{disabled:K.value,onClick:o[6]||(o[6]=l=>N.value=!1)},{default:t(()=>[i(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Y,{modelValue:H.value,"onUpdate:modelValue":o[11]||(o[11]=l=>H.value=l),"max-width":"500px"},{default:t(()=>[e(R,null,{default:t(()=>[e(Q,null,{default:t(()=>[i("Add a New University Communication")]),_:1}),e(j,null,{default:t(()=>[e(oe,{onSubmit:te(Ce,["prevent"])},{default:t(()=>[e(J,{class:"mt-2"},{default:t(()=>[i(" Subject ")]),_:1}),e(Ge,{modelValue:I.value.subject,"onUpdate:modelValue":o[8]||(o[8]=l=>I.value.subject=l),placeholder:"Subject",class:"mt-2"},null,8,["modelValue"]),e(J,{class:"mt-2"},{default:t(()=>[i(" Message ")]),_:1}),e(b(He),{content:I.value.message,"onUpdate:content":o[9]||(o[9]=l=>I.value.message=l),theme:"snow","content-type":"html",class:"mt-2"},null,8,["content"])]),_:1})]),_:1}),e(le,null,{default:t(()=>[e(ne),e(C,{color:"primary",loading:W.value,disabled:W.value,onClick:Ce},{default:t(()=>[i(" Submit Communication ")]),_:1},8,["loading","disabled"]),e(C,{disabled:W.value,onClick:o[10]||(o[10]=l=>H.value=!1)},{default:t(()=>[i(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Ze,{modelValue:g.value,"onUpdate:modelValue":o[12]||(o[12]=l=>g.value=l)},{default:t(()=>[e(U,{value:"student-course-details"},{default:t(()=>[i(" Student/Course Details ")]),_:1}),e(U,{value:"upload-download"},{default:t(()=>[i(" Upload/Download ")]),_:1}),e(U,{value:"status"},{default:t(()=>[i(" Status "),ue.value>0?(d(),v(L,{key:0,content:ue.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):p("",!0)]),_:1}),e(U,{value:"comments"},{default:t(()=>[i(" Comments "),se.value>0?(d(),v(L,{key:0,content:se.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):p("",!0)]),_:1}),e(U,{value:"university-communication"},{default:t(()=>[i(" University Communication "),de.value>0?(d(),v(L,{key:0,content:de.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):p("",!0)]),_:1}),u.$can("enable","aco-ao-communication")?(d(),v(U,{key:0,value:"aco-ao-communication"},{default:t(()=>[i(" ACO & AO Communication "),re.value>0?(d(),v(L,{key:0,content:re.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):p("",!0)]),_:1})):p("",!0),u.$can("assign","application-officer")?(d(),v(U,{key:1,value:"assign-officer"},{default:t(()=>[i(" Assign Application Officer "),ce.value>0?(d(),v(L,{key:0,content:ce.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):p("",!0)]),_:1})):p("",!0),u.$can("assign","compliance-officer")?(d(),v(U,{key:2,value:"assign-compliance-officer"},{default:t(()=>[i("Assign Compliance Officer "),me.value>0?(d(),v(L,{key:0,content:me.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):p("",!0)]),_:1})):p("",!0),u.$can("enable","aco-co-communication")?(d(),v(U,{key:3,value:"aco-co-communication"},{default:t(()=>[i("ACO & CO Communication "),fe.value>0?(d(),v(L,{key:0,content:fe.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):p("",!0)]),_:1})):p("",!0),ie.value?(d(),v(U,{key:4,value:"activity-logs"},{default:t(()=>[i(" Activity Logs ")]),_:1})):p("",!0)]),_:1},8,["modelValue"]),e(j,null,{default:t(()=>[e(et,{modelValue:g.value,"onUpdate:modelValue":o[18]||(o[18]=l=>g.value=l)},{default:t(()=>[e($,{value:"student-course-details"},{default:t(()=>[a("div",ot,[e(ke,{onClick:o[13]||(o[13]=l=>M.value=!M.value)},{default:t(()=>[e(he,{icon:"tabler-edit"})]),_:1}),e(at,{"is-dialog-visible":M.value,"onUpdate:isDialogVisible":o[14]||(o[14]=l=>M.value=l),first_name:f.value.first_name,last_name:f.value.last_name,email:f.value.email,passport_no:f.value.passport_no,dob:f.value.date_of_birth,id:f.value.id,onRefreshUpdateInfo:P},null,8,["is-dialog-visible","first_name","last_name","email","passport_no","dob","id"])]),e(T,null,{default:t(()=>[e(h,{cols:"12"},{default:t(()=>[e(Ae,null,{default:t(()=>[a("tbody",null,[a("tr",null,[nt,a("td",null,_(s.value.application_id),1),it,a("td",null,_(s.value.created_at),1)]),a("tr",null,[ut,a("td",null,_(f.value.student_id??""),1),st,a("td",null,_(f.value.passport_no),1)]),a("tr",null,[dt,a("td",null,_(f.value.first_name)+" "+_(f.value.last_name),1),rt,a("td",null,_(f.value.date_of_birth),1)]),a("tr",null,[ct,a("td",null,_(f.value.email),1),mt,a("td",null,_(f.value.whatsapp_number),1)]),a("tr",null,[ft,a("td",null,_(s.value.counsellor_email),1),pt,a("td",null,_(s.value.counsellor_number),1)])])]),_:1})]),_:1})]),_:1})]),_:1}),e($,{value:"upload-download"},{default:t(()=>[e(Je,{"existing-documents":F.value,"zip-link":f.value.document_zip_link},null,8,["existing-documents","zip-link"])]),_:1}),e($,{value:"status"},{default:t(()=>[e(T,null,{default:t(()=>[e(h,{cols:"12",class:"d-flex justify-end"},{default:t(()=>[g.value==="status"&&u.$can("status","application")?(d(),v(C,{key:0,color:"primary",onClick:o[15]||(o[15]=l=>k.value=!0)},{default:t(()=>[i(" Change Current Status ")]),_:1})):p("",!0)]),_:1}),e(h,{cols:"12"},{default:t(()=>[e(Ae,null,{default:t(()=>[vt,a("tbody",null,[(d(!0),B(ae,null,ve(X.value,(l,q)=>(d(),B("tr",{key:q},[a("td",null,_(l.created_at),1),a("td",null,_(l.comment),1),a("td",null,[a("div",null,[a("span",{innerHTML:l.status_text},null,8,_t),q===0?(d(),B("span",yt,"(Current Status)")):p("",!0),l.document?(d(),B("div",Vt,[a("div",null,_(l.file_name),1),a("a",{href:l.document,target:"_blank",class:"download-link"},"Document",8,gt)])):p("",!0)])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),e($,{value:"comments"},{default:t(()=>[e(T,null,{default:t(()=>[e(h,{cols:"12",class:"d-flex justify-end"},{default:t(()=>[u.$can("comment","application")?(d(),v(C,{key:0,color:"primary",onClick:o[16]||(o[16]=l=>N.value=!0)},{default:t(()=>[i(" Add New Comment ")]),_:1})):p("",!0)]),_:1}),e(h,{cols:"12"},{default:t(()=>[a("div",Ct,[(d(!0),B(ae,null,ve(O.value,(l,q)=>(d(),B("div",{key:q,class:"comment"},[a("div",bt,[a("span",ht,_(l.created_at),1)]),a("div",{class:"comment-body",innerHTML:l.comment_with_user},null,8,wt)]))),128))])]),_:1})]),_:1})]),_:1}),e($,{value:"university-communication"},{default:t(()=>[e(T,null,{default:t(()=>[e(h,{cols:"12",class:"d-flex justify-end"},{default:t(()=>[u.$can("university_communication","application")?(d(),v(C,{key:0,color:"primary",onClick:o[17]||(o[17]=l=>H.value=!0)},{default:t(()=>[i(" Add New Communication ")]),_:1})):p("",!0)]),_:1}),e(h,{cols:"12"},{default:t(()=>[a("div",At,[(d(!0),B(ae,null,ve(G.value,(l,q)=>(d(),B("div",{key:q,class:"comment"},[a("div",St,[a("span",kt,_(l.created_at),1)]),a("div",Nt,[Dt,i(" "+_(l.subject),1)]),a("div",Ut,[a("div",{innerHTML:l.message},null,8,$t)])]))),128))])]),_:1})]),_:1})]),_:1}),u.$can("enable","aco-ao-communication")?(d(),v($,{key:0,value:"aco-ao-communication"},{default:t(()=>[e(Fe,{"application-id":b(c)},null,8,["application-id"])]),_:1})):p("",!0),e($,{value:"activity-logs"},{default:t(()=>[e(Le,{"application-id":b(c)},null,8,["application-id"])]),_:1}),e($,{value:"assign-officer"},{default:t(()=>[e(je,{"application-id":b(c)},null,8,["application-id"])]),_:1}),e($,{value:"assign-compliance-officer"},{default:t(()=>[e(xe,{"application-id":b(c)},null,8,["application-id"])]),_:1}),e($,{value:"aco-co-communication"},{default:t(()=>[e(Oe,{"application-id":b(c)},null,8,["application-id"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},$a=Ye(It,[["__scopeId","data-v-6f4fe613"]]);export{$a as default};
