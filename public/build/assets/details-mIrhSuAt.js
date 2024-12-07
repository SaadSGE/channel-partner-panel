import{r as E,e as $e}from"./validators-DLm9bwa3.js";import{r as n,w as _e,o as d,c as H,b as e,e as t,a8 as te,n as h,d as a,a9 as b,v as i,F as ae,j as Be,a1 as He,k as Te,H as Me,a as Fe,f as _,a2 as ke,ao as Le,z as v,x as c,i as ve,R as je,U as xe}from"./main-Z3go8Xzc.js";import{_ as Oe}from"./AppTextarea-PxDci0tT.js";import{_ as qe}from"./AppAutocomplete-DVX6hFXO.js";import{u as Ee}from"./applicationList-BZioye3k.js";import{_ as Re,a as Pe,A as ze,C as Ke,b as We}from"./ComplianceOfficerAssignments--k6qTG_J.js";import{_ as Je}from"./AppDateTimePicker-BWnOzNRI.js";import{_ as Qe}from"./AppTextField-DC2x1dsw.js";import{_ as Ye}from"./DialogCloseBtn-CTHzBJ16.js";import{u as Ge}from"./submitApplication-9osF5lDh.js";import{S as Ne}from"./sweetalert2-z6gKu1nJ.js";import{V as R,b as Q,c as le}from"./VCard-B6jmDFyP.js";import{V as x}from"./VCardText-Bjotn_eE.js";import{V as oe}from"./VForm-CRZr7ck4.js";import{V as M,a as w}from"./VRow-eo7qXlZG.js";import{V as Y}from"./VDialog-BsSXCWXL.js";import{V as ne}from"./VSpacer-DjAd7_Hm.js";/* empty css                         */import Xe from"./details-document-By0NSOrb.js";import{g as Ze}from"./helpers-Bzg9TCNL.js";import{_ as et}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as J}from"./VInput-KBboyctu.js";import{V as tt}from"./VFileInput-CXYzYkcy.js";import{V as at}from"./VTextField-B1_fIF9I.js";import{V as lt,a as U,b as ot,c as I}from"./VWindowItem-ngojf6jh.js";import{V as j}from"./VBadge-CQVdE_IQ.js";import{V as De}from"./VTable-CvwxmxPq.js";import"./forwardRefs-D3j0TLhE.js";import"./index-CJOm_KJi.js";import"./VSelect-DZ8I6LSD.js";import"./VList-CuZQ3pYZ.js";import"./index-BgvB69-2.js";import"./ssrBoot-CoAt9jNJ.js";import"./VAvatar-DFwpysqo.js";import"./VImg-DvovO2d-.js";import"./VDivider-SUUc1KGp.js";import"./dialog-transition-6CoWjX9C.js";import"./scopeId-Brt4yQ2W.js";import"./VMenu-CiscxyXl.js";import"./VCheckboxBtn-GLY3abaH.js";import"./VChip-CISZQW4c.js";import"./filter-CBgIupOh.js";import"./TablePagination-QwDXvVnB.js";import"./VPagination-DvivjafL.js";import"./AppSelect-CCci48xp.js";import"./format-DNoy3wlF.js";import"./VDataTableServer-_bBsEW4-.js";import"./VDataTable-DjbBVbtI.js";import"./VAlert-Uxb13eIy.js";/* empty css              */import"./fileStore-7ZM7YJmf.js";import"./vue-filepond.esm-Bii9SryY.js";const nt={class:"d-flex justify-end mt-4"},it={__name:"StudentInfoEditDialog",props:{isDialogVisible:Boolean,first_name:String,last_name:String,email:String,passport_no:String,dob:String,id:String,refreshUpdateInfo:Function},emits:["update:isDialogVisible","refreshUpdateInfo"],setup(O,{emit:ie}){const A=O,m=Ge(),p=n(""),V=n(""),C=n(""),k=n(""),N=n(""),T=n(""),D=n(!1),S=n(!1);_e(()=>A.isDialogVisible,u=>{u&&(C.value=A.first_name,k.value=A.last_name,N.value=A.email,p.value=A.passport_no,V.value=A.dob,T.value=A.id)});const F=ie,$=u=>{F("update:isDialogVisible",u)},q=n(null),G=async()=>{q.value&&q.value.validate().then(u=>{u&&(D.value=!0)})},X=async()=>{S.value=!0;const u={passport_no:p.value,date_of_birth:V.value,first_name:C.value,last_name:k.value,email:N.value};try{await m.updateApplication(u,T.value),Ne.fire({icon:"success",title:"Update Successful",text:"Application updated successfully!",confirmButtonText:"OK"})}catch(r){Ne.fire({icon:"error",title:"Update Failed",text:r,confirmButtonText:"OK"})}finally{S.value=!1}D.value=!1,$(!1),F("refreshUpdateInfo")};return(u,r)=>{const f=Ye,L=Qe,Z=Je;return d(),H(ae,null,[e(Y,{"model-value":A.isDialogVisible,persistent:"",width:u.$vuetify.display.smAndDown?"auto":1200,"onUpdate:modelValue":$},{default:t(()=>[e(f,{onClick:r[0]||(r[0]=y=>u.$emit("update:isDialogVisible",!1))}),e(R,{class:"pricing-dialog pa-2 pa-sm-10"},{default:t(()=>[e(x,null,{default:t(()=>[e(oe,{ref_key:"refForm",ref:q,class:"form-padding",onSubmit:te(y=>({}),["prevent"])},{default:t(()=>[e(M,null,{default:t(()=>[e(w,{cols:"12",md:"12"},{default:t(()=>[e(M,null,{default:t(()=>[e(w,{cols:"12",md:"6"},{default:t(()=>[e(L,{modelValue:C.value,"onUpdate:modelValue":r[1]||(r[1]=y=>C.value=y),label:"Student First Name",placeholder:"John",rules:["requiredValidator"in u?u.requiredValidator:h(E)]},null,8,["modelValue","rules"])]),_:1}),e(w,{cols:"12",md:"6"},{default:t(()=>[e(L,{modelValue:k.value,"onUpdate:modelValue":r[2]||(r[2]=y=>k.value=y),label:"Student Last Name",placeholder:"Doe",rules:["requiredValidator"in u?u.requiredValidator:h(E)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(M,null,{default:t(()=>[e(w,{cols:"12",md:"6"},{default:t(()=>[e(L,{modelValue:p.value,"onUpdate:modelValue":r[3]||(r[3]=y=>p.value=y),label:"Student Passport No.",placeholder:"A099800",rules:["requiredValidator"in u?u.requiredValidator:h(E)]},null,8,["modelValue","rules"])]),_:1}),e(w,{cols:"12",md:"6"},{default:t(()=>[e(Z,{modelValue:V.value,"onUpdate:modelValue":r[4]||(r[4]=y=>V.value=y),label:"Date of birth",placeholder:"Select date",rules:["requiredValidator"in u?u.requiredValidator:h(E)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(M,null,{default:t(()=>[e(w,{cols:"12",md:"6"},{default:t(()=>[e(L,{modelValue:N.value,"onUpdate:modelValue":r[5]||(r[5]=y=>N.value=y),label:"Enter Student E-Mail ID",placeholder:"student@example.com",type:"email",rules:["requiredValidator"in u?u.requiredValidator:h(E),"emailValidator"in u?u.emailValidator:h($e)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),a("div",nt,[e(b,{color:"primary",onClick:G},{default:t(()=>[i(" Update ")]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["model-value","width"]),e(Y,{modelValue:D.value,"onUpdate:modelValue":r[7]||(r[7]=y=>D.value=y),"max-width":"500"},{default:t(()=>[e(R,null,{default:t(()=>[e(Q,{class:"text-h5"},{default:t(()=>[i(" Confirm Submission ")]),_:1}),e(x,null,{default:t(()=>[i("Are you sure you want to update the information?")]),_:1}),e(le,null,{default:t(()=>[e(ne),e(b,{color:"primary",onClick:X},{default:t(()=>[i(" Yes ")]),_:1}),e(b,{color:"secondary",onClick:r[6]||(r[6]=y=>D.value=!1)},{default:t(()=>[i(" No ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},g=O=>(je("data-v-2105841a"),O=O(),xe(),O),ut=g(()=>a("div",null,"Application Details",-1)),st={class:"icon-right"},dt=g(()=>a("td",null,[a("strong",null,"Application Id")],-1)),rt=g(()=>a("td",null,[a("strong",null,"Date Added")],-1)),mt=g(()=>a("td",null,[a("strong",null,"Student ID")],-1)),ct=g(()=>a("td",null,[a("strong",null,"Student Passport No.")],-1)),ft=g(()=>a("td",null,[a("strong",null,"Student Name")],-1)),pt=g(()=>a("td",null,[a("strong",null,"Student Date of Birth")],-1)),vt=g(()=>a("td",null,[a("strong",null,"Student E-Mail")],-1)),_t=g(()=>a("td",null,[a("strong",null,"Student Phone No.")],-1)),yt=g(()=>a("td",null,[a("strong",null,"Communication E-Mail ID")],-1)),gt=g(()=>a("td",null,[a("strong",null,"Communication Phone No.")],-1)),Vt=g(()=>a("td",null,[a("strong",null,"University Name")],-1)),Ct=g(()=>a("td",null,[a("strong",null,"Intake Name")],-1)),bt=g(()=>a("td",null,[a("strong",null,"Course Name")],-1)),ht=g(()=>a("thead",null,[a("tr",null,[a("th",null,"Date Added"),a("th",null,"Comment"),a("th",null,"Status and Document")])],-1)),wt=["innerHTML"],At={key:0,class:"current-status-label"},St={key:1},kt=["href"],Nt={class:"comment-section"},Dt={class:"comment-header"},Ut={class:"comment-date"},It=["innerHTML"],$t={class:"comment-section"},Bt={class:"comment-header"},Ht={class:"comment-date"},Tt={class:"communication-subject"},Mt=g(()=>a("strong",null,"Subject:",-1)),Ft={class:"comment-body"},Lt=["innerHTML"],jt={__name:"details",setup(O){const ie=n(Ze()==="admin"),A=Be(),m=A.params.id;console.log(m);const p=Ee(),V=He(),C=n("student-course-details"),k=n(!1),N=n(!1),T=n(!1),D=n(""),S=n(""),F=n(!1),$=n({subject:"",message:""});n([{name:"Document1.pdf",progress:100},{name:"Document2.pdf",progress:100},{name:"Document3.pdf",progress:100},{name:"Document4.pdf",progress:100}]);const q=n([]),G=n([]),X=n([{created_at:"",comment:"",status_text:""}]),u=n({application_id:"",created_at:"",counsellor_email:"",counsellor_number:""}),r=n();n(!0);const f=n({id:null,student_id:null,first_name:null,last_name:null,passport_no:null,date_of_birth:null,whatsapp_number:null,email:null,address:null,city:null,country:null,region:null,state:null,gender:null,visa_refusal:null,created_at:null,updated_at:null,document:[{id:null,student_id:null,path:null,created_at:null,updated_at:null}]});console.log(f);const L=n([]),Z=n([]),y=Te(),Ue=()=>{y.back()},ye=()=>{const s=A.hash.replace("#","");s&&(C.value=s)};_e(()=>A.hash,ye),Me(async()=>{ye(),await P(),await pe();const s={status:"status",comments:"comments","university-communication":"university-communication","aco-ao-communication":"aco-ao-communication","assign-officer":"assign-officer","assign-compliance-officer":"assign-compliance-officer","aco-co-communication":"aco-co-communication"}[C.value];s&&(await V.markNotificationsAsReadByApplicationIdAndHash(m,s),await pe())});const P=async()=>{await p.getApplicationDetails(m),await p.getApplicationStatusses(m),await p.getApplicationAllStatuses(),u.value=p.applicationData,L.value=p.documents,f.value=p.students,X.value=p.statuses,q.value=p.comments,G.value=p.universityCommunications,Z.value=p.allStatuses.filter(s=>s.id!==u.value.status),console.log(f)},z=n(!1),K=n(!1),W=n(!1),ge=async()=>{try{z.value=!0;let s=new FormData;s.append("status",D.value),s.append("comment",S.value),r.value&&s.append("file",r.value[0]),await p.updateStatus(m,s),k.value=!1,D.value="",S.value="",r.value=null,await P()}catch(s){console.error("Error updating status:",s)}finally{z.value=!1}},Ve=async()=>{try{K.value=!0,await p.addComment(m,S.value),S.value="",N.value=!1,await P()}catch(s){console.error("Error adding comment:",s)}finally{K.value=!1}},Ce=async()=>{try{W.value=!0,await p.addUniversityCommunication(m,$.value),$.value={subject:"",message:""},T.value=!1,await P()}catch(s){console.error("Error adding university communication:",s)}finally{W.value=!1}},ue=n(0),se=n(0),de=n(0),re=n(0),me=n(0),ce=n(0),fe=n(0),pe=async()=>{ue.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(m,"status"),se.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(m,"comments"),de.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(m,"university-communication"),re.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(m,"aco-ao-communication"),me.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(m,"assign-officer"),ce.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(m,"assign-compliance-officer"),fe.value=await V.fetchNotificationCountByApplicationIdAndNotificationHash(m,"aco-co-communication")};return _e(C,async s=>{try{const ee={status:"status",comments:"comments","university-communication":"university-communication","aco-ao-communication":"aco-ao-communication","assign-officer":"assign-officer","assign-compliance-officer":"assign-compliance-officer","aco-co-communication":"aco-co-communication"}[s];ee&&(await V.markNotificationsAsReadByApplicationIdAndHash(m,ee),await pe())}catch(o){console.error("Error marking notifications as read:",o)}}),(s,o)=>{const ee=qe,be=Oe,Ie=Fe("IconBtn");return d(),_(R,null,{default:t(()=>[e(Q,{class:"d-flex justify-space-between align-center"},{default:t(()=>[ut,e(b,{color:"primary",onClick:Ue},{default:t(()=>[e(ke,{icon:"tabler-arrow-left",class:"mr-2"}),i(" Back ")]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(Y,{modelValue:k.value,"onUpdate:modelValue":o[4]||(o[4]=l=>k.value=l),"max-width":"500px"},{default:t(()=>[e(R,null,{default:t(()=>[e(Q,null,{default:t(()=>[i("Change Current Status")]),_:1}),e(x,null,{default:t(()=>[e(oe,{onSubmit:te(ge,["prevent"])},{default:t(()=>[e(ee,{modelValue:D.value,"onUpdate:modelValue":o[0]||(o[0]=l=>D.value=l),items:Z.value,"item-title":l=>l.name,"item-value":l=>l.id,label:"Status",placeholder:"Select Status",rules:["requiredValidator"in s?s.requiredValidator:h(E)]},null,8,["modelValue","items","item-title","item-value","rules"]),e(J,{class:"mt-2"},{default:t(()=>[i(" Add any necessary file (Optional) ")]),_:1}),e(tt,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=l=>r.value=l),color:"primary",label:"File input",variant:"outlined",class:"mt-2"},null,8,["modelValue"]),e(J,{class:"mt-2"},{default:t(()=>[i(" Comment (Optional) ")]),_:1}),e(be,{modelValue:S.value,"onUpdate:modelValue":o[2]||(o[2]=l=>S.value=l),placeholder:"Place any comment regarding status"},null,8,["modelValue"])]),_:1})]),_:1}),e(le,null,{default:t(()=>[e(ne),e(b,{color:"primary",loading:z.value,disabled:z.value,onClick:ge},{default:t(()=>[i(" Submit ")]),_:1},8,["loading","disabled"]),e(b,{disabled:z.value,onClick:o[3]||(o[3]=l=>k.value=!1)},{default:t(()=>[i(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Y,{modelValue:N.value,"onUpdate:modelValue":o[7]||(o[7]=l=>N.value=l),"max-width":"500px"},{default:t(()=>[e(R,null,{default:t(()=>[e(Q,null,{default:t(()=>[i("Add a New Comment")]),_:1}),e(x,null,{default:t(()=>[e(oe,{onSubmit:te(Ve,["prevent"])},{default:t(()=>[e(J,{class:"mt-2"},{default:t(()=>[i(" New Comment ")]),_:1}),e(be,{modelValue:S.value,"onUpdate:modelValue":o[5]||(o[5]=l=>S.value=l),placeholder:"Add a new comment",class:"mt-2"},null,8,["modelValue"])]),_:1})]),_:1}),e(le,null,{default:t(()=>[e(ne),e(b,{color:"primary",loading:K.value,disabled:K.value,onClick:Ve},{default:t(()=>[i(" Submit Comment ")]),_:1},8,["loading","disabled"]),e(b,{disabled:K.value,onClick:o[6]||(o[6]=l=>N.value=!1)},{default:t(()=>[i(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Y,{modelValue:T.value,"onUpdate:modelValue":o[11]||(o[11]=l=>T.value=l),"max-width":"500px"},{default:t(()=>[e(R,null,{default:t(()=>[e(Q,null,{default:t(()=>[i("Add a New University Communication")]),_:1}),e(x,null,{default:t(()=>[e(oe,{onSubmit:te(Ce,["prevent"])},{default:t(()=>[e(J,{class:"mt-2"},{default:t(()=>[i(" Subject ")]),_:1}),e(at,{modelValue:$.value.subject,"onUpdate:modelValue":o[8]||(o[8]=l=>$.value.subject=l),placeholder:"Subject",class:"mt-2"},null,8,["modelValue"]),e(J,{class:"mt-2"},{default:t(()=>[i(" Message ")]),_:1}),e(h(Le),{content:$.value.message,"onUpdate:content":o[9]||(o[9]=l=>$.value.message=l),theme:"snow","content-type":"html",class:"mt-2"},null,8,["content"])]),_:1})]),_:1}),e(le,null,{default:t(()=>[e(ne),e(b,{color:"primary",loading:W.value,disabled:W.value,onClick:Ce},{default:t(()=>[i(" Submit Communication ")]),_:1},8,["loading","disabled"]),e(b,{disabled:W.value,onClick:o[10]||(o[10]=l=>T.value=!1)},{default:t(()=>[i(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(lt,{modelValue:C.value,"onUpdate:modelValue":o[12]||(o[12]=l=>C.value=l)},{default:t(()=>[e(U,{value:"student-course-details"},{default:t(()=>[i(" Student/Course Details ")]),_:1}),e(U,{value:"upload-download"},{default:t(()=>[i(" Upload/Download ")]),_:1}),e(U,{value:"status"},{default:t(()=>[i(" Status "),ue.value>0?(d(),_(j,{key:0,content:ue.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):v("",!0)]),_:1}),e(U,{value:"comments"},{default:t(()=>[i(" Comments "),se.value>0?(d(),_(j,{key:0,content:se.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):v("",!0)]),_:1}),e(U,{value:"university-communication"},{default:t(()=>[i(" University Communication "),de.value>0?(d(),_(j,{key:0,content:de.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):v("",!0)]),_:1}),s.$can("enable","aco-ao-communication")?(d(),_(U,{key:0,value:"aco-ao-communication"},{default:t(()=>[i(" ACO & AO Communication "),re.value>0?(d(),_(j,{key:0,content:re.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):v("",!0)]),_:1})):v("",!0),s.$can("assign","application-officer")?(d(),_(U,{key:1,value:"assign-officer"},{default:t(()=>[i(" Assign Application Officer "),me.value>0?(d(),_(j,{key:0,content:me.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):v("",!0)]),_:1})):v("",!0),s.$can("assign","compliance-officer")?(d(),_(U,{key:2,value:"assign-compliance-officer"},{default:t(()=>[i("Assign Compliance Officer "),ce.value>0?(d(),_(j,{key:0,content:ce.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):v("",!0)]),_:1})):v("",!0),s.$can("enable","aco-co-communication")?(d(),_(U,{key:3,value:"aco-co-communication"},{default:t(()=>[i("ACO & CO Communication "),fe.value>0?(d(),_(j,{key:0,content:fe.value,color:"error",location:"top end","offset-x":"-15","offset-y":"3"},null,8,["content"])):v("",!0)]),_:1})):v("",!0),ie.value?(d(),_(U,{key:4,value:"activity-logs"},{default:t(()=>[i(" Activity Logs ")]),_:1})):v("",!0)]),_:1},8,["modelValue"]),e(x,null,{default:t(()=>[e(ot,{modelValue:C.value,"onUpdate:modelValue":o[18]||(o[18]=l=>C.value=l)},{default:t(()=>[e(I,{value:"student-course-details"},{default:t(()=>[a("div",st,[e(Ie,{onClick:o[13]||(o[13]=l=>F.value=!F.value)},{default:t(()=>[e(ke,{icon:"tabler-edit"})]),_:1}),e(it,{"is-dialog-visible":F.value,"onUpdate:isDialogVisible":o[14]||(o[14]=l=>F.value=l),first_name:f.value.first_name,last_name:f.value.last_name,email:f.value.email,passport_no:f.value.passport_no,dob:f.value.date_of_birth,id:f.value.id,onRefreshUpdateInfo:P},null,8,["is-dialog-visible","first_name","last_name","email","passport_no","dob","id"])]),e(M,null,{default:t(()=>[e(w,{cols:"12"},{default:t(()=>[e(De,null,{default:t(()=>{var l,B,he,we,Ae,Se;return[a("tbody",null,[a("tr",null,[dt,a("td",null,c(u.value.application_id),1),rt,a("td",null,c(u.value.created_at),1)]),a("tr",null,[mt,a("td",null,c(f.value.student_id??""),1),ct,a("td",null,c(f.value.passport_no),1)]),a("tr",null,[ft,a("td",null,c(f.value.first_name)+" "+c(f.value.last_name),1),pt,a("td",null,c(f.value.date_of_birth),1)]),a("tr",null,[vt,a("td",null,c(f.value.email),1),_t,a("td",null,c(f.value.whatsapp_number),1)]),a("tr",null,[yt,a("td",null,c(u.value.counsellor_email),1),gt,a("td",null,c(u.value.counsellor_number),1)]),a("tr",null,[Vt,a("td",null,c((B=(l=u.value)==null?void 0:l.university)==null?void 0:B.name),1),Ct,a("td",null,c((we=(he=u.value)==null?void 0:he.intake)==null?void 0:we.name),1)]),a("tr",null,[bt,a("td",null,c((Se=(Ae=u.value)==null?void 0:Ae.course)==null?void 0:Se.name),1)])])]}),_:1})]),_:1})]),_:1})]),_:1}),e(I,{value:"upload-download"},{default:t(()=>[e(Xe,{"existing-documents":L.value,"zip-link":f.value.document_zip_link},null,8,["existing-documents","zip-link"])]),_:1}),e(I,{value:"status"},{default:t(()=>[e(M,null,{default:t(()=>[e(w,{cols:"12",class:"d-flex justify-end"},{default:t(()=>[C.value==="status"&&s.$can("status","application")?(d(),_(b,{key:0,color:"primary",onClick:o[15]||(o[15]=l=>k.value=!0)},{default:t(()=>[i(" Change Current Status ")]),_:1})):v("",!0)]),_:1}),e(w,{cols:"12"},{default:t(()=>[e(De,null,{default:t(()=>[ht,a("tbody",null,[(d(!0),H(ae,null,ve(X.value,(l,B)=>(d(),H("tr",{key:B},[a("td",null,c(l.created_at),1),a("td",null,c(l.comment),1),a("td",null,[a("div",null,[a("span",{innerHTML:l.status_text},null,8,wt),B===0?(d(),H("span",At,"(Current Status)")):v("",!0),l.document?(d(),H("div",St,[a("div",null,c(l.file_name),1),a("a",{href:l.document,target:"_blank",class:"download-link"},"Document",8,kt)])):v("",!0)])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),e(I,{value:"comments"},{default:t(()=>[e(M,null,{default:t(()=>[e(w,{cols:"12",class:"d-flex justify-end"},{default:t(()=>[s.$can("comment","application")?(d(),_(b,{key:0,color:"primary",onClick:o[16]||(o[16]=l=>N.value=!0)},{default:t(()=>[i(" Add New Comment ")]),_:1})):v("",!0)]),_:1}),e(w,{cols:"12"},{default:t(()=>[a("div",Nt,[(d(!0),H(ae,null,ve(q.value,(l,B)=>(d(),H("div",{key:B,class:"comment"},[a("div",Dt,[a("span",Ut,c(l.created_at),1)]),a("div",{class:"comment-body",innerHTML:l.comment_with_user},null,8,It)]))),128))])]),_:1})]),_:1})]),_:1}),e(I,{value:"university-communication"},{default:t(()=>[e(M,null,{default:t(()=>[e(w,{cols:"12",class:"d-flex justify-end"},{default:t(()=>[s.$can("university_communication","application")?(d(),_(b,{key:0,color:"primary",onClick:o[17]||(o[17]=l=>T.value=!0)},{default:t(()=>[i(" Add New Communication ")]),_:1})):v("",!0)]),_:1}),e(w,{cols:"12"},{default:t(()=>[a("div",$t,[(d(!0),H(ae,null,ve(G.value,(l,B)=>(d(),H("div",{key:B,class:"comment"},[a("div",Bt,[a("span",Ht,c(l.created_at),1)]),a("div",Tt,[Mt,i(" "+c(l.subject),1)]),a("div",Ft,[a("div",{innerHTML:l.message},null,8,Lt)])]))),128))])]),_:1})]),_:1})]),_:1}),s.$can("enable","aco-ao-communication")?(d(),_(I,{key:0,value:"aco-ao-communication"},{default:t(()=>[e(Re,{"application-id":h(m)},null,8,["application-id"])]),_:1})):v("",!0),e(I,{value:"activity-logs"},{default:t(()=>[e(Pe,{"application-id":h(m)},null,8,["application-id"])]),_:1}),e(I,{value:"assign-officer"},{default:t(()=>[e(ze,{"application-id":h(m)},null,8,["application-id"])]),_:1}),e(I,{value:"assign-compliance-officer"},{default:t(()=>[e(Ke,{"application-id":h(m)},null,8,["application-id"])]),_:1}),e(I,{value:"aco-co-communication"},{default:t(()=>[e(We,{"application-id":h(m)},null,8,["application-id"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},La=et(jt,[["__scopeId","data-v-2105841a"]]);export{La as default};