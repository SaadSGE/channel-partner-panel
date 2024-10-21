import{r as de}from"./validators-WxtbmeC2.js";import{r as s,j as re,k as me,H as ce,o as i,f,e as l,b as e,a7 as _,a1 as pe,v as o,a6 as R,n as b,ay as fe,z as c,d as t,x as d,c as C,i as z,F as P,R as _e,U as ve}from"./main-DPb0_12f.js";import{_ as ge,a as Ve,A as ye,C as Ce,b as be,c as we}from"./ComplianceOfficerAssignments-C-_TuY-_.js";import{_ as Se}from"./AppAutocomplete-auFazs0X.js";import{u as he}from"./applicationList-C4ciVTGc.js";/* empty css                         */import ke from"./details-document-2Sxiojun.js";import{g as Ae}from"./helpers-D6joOrZs.js";import{_ as De}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as F,V as E,c as q}from"./VCard-C0bM0ZXG.js";import{V as W}from"./VDialog-CP1IxFsu.js";import{V as N}from"./VCardText-DuS4qxmo.js";import{V as Q}from"./VForm-BlnZ_x-m.js";import{V as x,a as Ue}from"./VTextField-9aIjmxOS.js";import{V as $e}from"./VFileInput-BYpB7mow.js";import{V as G}from"./VSpacer-CA8JUBl4.js";import{V as Te,a as v,b as je,c as g}from"./VWindowItem-CFHEnjii.js";import{V as H,a as w}from"./VRow-CT0QuKMD.js";import{V as ne}from"./VTable-e866QI70.js";import"./forwardRefs-D9kYFWgq.js";import"./index-D5BOVv8n.js";import"./TablePagination-CvZNgNgM.js";import"./VDivider-B8LX-A2l.js";import"./VPagination-hxyZ0dLG.js";import"./AppSelect-BOJu0RU9.js";import"./VSelect-DwHgvjnN.js";import"./VList-BfLBVeHb.js";import"./index-RtQTYc-4.js";import"./ssrBoot-WBVlJHJ4.js";import"./VAvatar-DBQAuZOP.js";import"./VImg-DFj61J6e.js";import"./dialog-transition-CdQQCviD.js";import"./scopeId-BacWre44.js";import"./VMenu-y1B7IMSs.js";import"./VCheckboxBtn-DHRGWJBW.js";import"./VChip-C8WHXIHk.js";import"./format-kL4RWMpA.js";import"./api-CbkWr8Ve.js";import"./index-BYrzgnBV.js";import"./VDataTableServer-hZth0G74.js";import"./VDataTable-Du65372a.js";import"./filter-CA0zSWB2.js";import"./sweetalert2-z6gKu1nJ.js";import"./VAlert-Cenh_9mf.js";import"./submitApplication-D7eXtQQh.js";import"./vue-filepond.esm-CPMzZiyU.js";/* empty css              */const m=I=>(_e("data-v-6c1f29b0"),I=I(),ve(),I),Me=m(()=>t("div",null,"Application Details",-1)),Le=m(()=>t("td",null,[t("strong",null,"Application Id")],-1)),Ne=m(()=>t("td",null,[t("strong",null,"Date Added")],-1)),xe=m(()=>t("td",null,[t("strong",null,"Student ID")],-1)),Ie=m(()=>t("td",null,[t("strong",null,"Student Passport No.")],-1)),Oe=m(()=>t("td",null,[t("strong",null,"Student Name")],-1)),Be=m(()=>t("td",null,[t("strong",null,"Student Date of Birth")],-1)),Fe=m(()=>t("td",null,[t("strong",null,"Student E-Mail")],-1)),Ee=m(()=>t("td",null,[t("strong",null,"Student Phone No.")],-1)),He=m(()=>t("td",null,[t("strong",null,"Communication E-Mail ID")],-1)),Re=m(()=>t("td",null,[t("strong",null,"Communication Phone No.")],-1)),ze=m(()=>t("thead",null,[t("tr",null,[t("th",null,"Date Added"),t("th",null,"Comment"),t("th",null,"Status and Document")])],-1)),Pe=["innerHTML"],qe={key:0,class:"current-status-label"},We={key:1},Qe=["href"],Ge={class:"comment-section"},Je={class:"comment-header"},Ke={class:"comment-date"},Xe=["innerHTML"],Ye={class:"comment-section"},Ze={class:"comment-header"},el={class:"comment-date"},ll={class:"communication-subject"},tl=m(()=>t("strong",null,"Subject:",-1)),al={class:"comment-body"},nl=["innerHTML"],ol={__name:"details",setup(I){const oe=s(Ae()==="admin"),p=re().params.id,r=he(),A=s("student-course-details"),D=s(!1),U=s(!1),$=s(!1),O=s(""),y=s(""),S=s({subject:"",message:""});s([{name:"Document1.pdf",progress:100},{name:"Document2.pdf",progress:100},{name:"Document3.pdf",progress:100},{name:"Document4.pdf",progress:100}]);const J=s([]),K=s([]),X=s([{created_at:"",comment:"",status_text:""}]),h=s({application_id:"",created_at:"",counsellor_email:"",counsellor_number:""}),T=s();s(!0);const V=s({id:null,student_id:null,first_name:null,last_name:null,passport_no:null,date_of_birth:null,whatsapp_number:null,email:null,address:null,city:null,country:null,region:null,state:null,gender:null,visa_refusal:null,created_at:null,updated_at:null,document:[{id:null,student_id:null,path:null,created_at:null,updated_at:null}]}),Y=s([]),Z=s([]),ue=me(),se=()=>{ue.back()};ce(async()=>{await B()});const B=async()=>{await r.getApplicationDetails(p),await r.getApplicationStatusses(p),await r.getApplicationAllStatuses(),h.value=r.applicationData,Y.value=r.documents,V.value=r.students,X.value=r.statuses,J.value=r.comments,K.value=r.universityCommunications,Z.value=r.allStatuses.filter(u=>u.id!==h.value.status)},j=s(!1),M=s(!1),L=s(!1),ee=async()=>{try{j.value=!0;let u=new FormData;u.append("status",O.value),u.append("comment",y.value),T.value&&u.append("file",T.value[0]),await r.updateStatus(p,u),D.value=!1,O.value="",y.value="",T.value=null,await B()}catch(u){console.error("Error updating status:",u)}finally{j.value=!1}},le=async()=>{try{M.value=!0,await r.addComment(p,y.value),y.value="",U.value=!1,await B()}catch(u){console.error("Error adding comment:",u)}finally{M.value=!1}},te=async()=>{try{L.value=!0,await r.addUniversityCommunication(p,S.value),S.value={subject:"",message:""},$.value=!1,await B()}catch(u){console.error("Error adding university communication:",u)}finally{L.value=!1}};return(u,n)=>{const ie=Se,ae=we;return i(),f(E,null,{default:l(()=>[e(F,{class:"d-flex justify-space-between align-center"},{default:l(()=>[Me,e(_,{color:"primary",onClick:se},{default:l(()=>[e(pe,{icon:"tabler-arrow-left",class:"mr-2"}),o(" Back ")]),_:1})]),_:1}),e(N,null,{default:l(()=>[e(W,{modelValue:D.value,"onUpdate:modelValue":n[4]||(n[4]=a=>D.value=a),"max-width":"500px"},{default:l(()=>[e(E,null,{default:l(()=>[e(F,null,{default:l(()=>[o("Change Current Status")]),_:1}),e(N,null,{default:l(()=>[e(Q,{onSubmit:R(ee,["prevent"])},{default:l(()=>[e(ie,{modelValue:O.value,"onUpdate:modelValue":n[0]||(n[0]=a=>O.value=a),items:Z.value,"item-title":a=>a.name,"item-value":a=>a.id,label:"Status",placeholder:"Select Status",rules:["requiredValidator"in u?u.requiredValidator:b(de)]},null,8,["modelValue","items","item-title","item-value","rules"]),e(x,{class:"mt-2"},{default:l(()=>[o(" Add any necessary file (Optional) ")]),_:1}),e($e,{modelValue:T.value,"onUpdate:modelValue":n[1]||(n[1]=a=>T.value=a),color:"primary",label:"File input",variant:"outlined",class:"mt-2"},null,8,["modelValue"]),e(x,{class:"mt-2"},{default:l(()=>[o(" Comment (Optional) ")]),_:1}),e(ae,{modelValue:y.value,"onUpdate:modelValue":n[2]||(n[2]=a=>y.value=a),placeholder:"Place any comment regarding status"},null,8,["modelValue"])]),_:1})]),_:1}),e(q,null,{default:l(()=>[e(G),e(_,{color:"primary",loading:j.value,disabled:j.value,onClick:ee},{default:l(()=>[o(" Submit ")]),_:1},8,["loading","disabled"]),e(_,{disabled:j.value,onClick:n[3]||(n[3]=a=>D.value=!1)},{default:l(()=>[o(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(W,{modelValue:U.value,"onUpdate:modelValue":n[7]||(n[7]=a=>U.value=a),"max-width":"500px"},{default:l(()=>[e(E,null,{default:l(()=>[e(F,null,{default:l(()=>[o("Add a New Comment")]),_:1}),e(N,null,{default:l(()=>[e(Q,{onSubmit:R(le,["prevent"])},{default:l(()=>[e(x,{class:"mt-2"},{default:l(()=>[o(" New Comment ")]),_:1}),e(ae,{modelValue:y.value,"onUpdate:modelValue":n[5]||(n[5]=a=>y.value=a),placeholder:"Add a new comment",class:"mt-2"},null,8,["modelValue"])]),_:1})]),_:1}),e(q,null,{default:l(()=>[e(G),e(_,{color:"primary",loading:M.value,disabled:M.value,onClick:le},{default:l(()=>[o(" Submit Comment ")]),_:1},8,["loading","disabled"]),e(_,{disabled:M.value,onClick:n[6]||(n[6]=a=>U.value=!1)},{default:l(()=>[o(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(W,{modelValue:$.value,"onUpdate:modelValue":n[11]||(n[11]=a=>$.value=a),"max-width":"500px"},{default:l(()=>[e(E,null,{default:l(()=>[e(F,null,{default:l(()=>[o("Add a New University Communication")]),_:1}),e(N,null,{default:l(()=>[e(Q,{onSubmit:R(te,["prevent"])},{default:l(()=>[e(x,{class:"mt-2"},{default:l(()=>[o(" Subject ")]),_:1}),e(Ue,{modelValue:S.value.subject,"onUpdate:modelValue":n[8]||(n[8]=a=>S.value.subject=a),placeholder:"Subject",class:"mt-2"},null,8,["modelValue"]),e(x,{class:"mt-2"},{default:l(()=>[o(" Message ")]),_:1}),e(b(fe),{content:S.value.message,"onUpdate:content":n[9]||(n[9]=a=>S.value.message=a),theme:"snow","content-type":"html",class:"mt-2"},null,8,["content"])]),_:1})]),_:1}),e(q,null,{default:l(()=>[e(G),e(_,{color:"primary",loading:L.value,disabled:L.value,onClick:te},{default:l(()=>[o(" Submit Communication ")]),_:1},8,["loading","disabled"]),e(_,{disabled:L.value,onClick:n[10]||(n[10]=a=>$.value=!1)},{default:l(()=>[o(" Cancel ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Te,{modelValue:A.value,"onUpdate:modelValue":n[12]||(n[12]=a=>A.value=a)},{default:l(()=>[e(v,{value:"student-course-details"},{default:l(()=>[o(" Student/Course Details ")]),_:1}),e(v,{value:"upload-download"},{default:l(()=>[o(" Upload/Download ")]),_:1}),e(v,{value:"status"},{default:l(()=>[o(" Status ")]),_:1}),e(v,{value:"comments"},{default:l(()=>[o(" Comments ")]),_:1}),e(v,{value:"university-communication"},{default:l(()=>[o(" University Communication ")]),_:1}),u.$can("enable","aco-ao-communication")?(i(),f(v,{key:0,value:"aco-ao-communication"},{default:l(()=>[o(" ACO & AO Communication ")]),_:1})):c("",!0),u.$can("assign","application-officer")?(i(),f(v,{key:1,value:"assign-officer"},{default:l(()=>[o(" Assign Application Officer ")]),_:1})):c("",!0),u.$can("assign","compliance-officer")?(i(),f(v,{key:2,value:"assign-compliance-officer"},{default:l(()=>[o("Assign Compliance Officer ")]),_:1})):c("",!0),u.$can("enable","aco-co-communication")?(i(),f(v,{key:3,value:"aco-co-communication"},{default:l(()=>[o("ACO & CO Communication")]),_:1})):c("",!0),oe.value?(i(),f(v,{key:4,value:"activity-logs"},{default:l(()=>[o(" Activity Logs ")]),_:1})):c("",!0)]),_:1},8,["modelValue"]),e(N,null,{default:l(()=>[e(je,{modelValue:A.value,"onUpdate:modelValue":n[16]||(n[16]=a=>A.value=a)},{default:l(()=>[e(g,{value:"student-course-details"},{default:l(()=>[e(H,null,{default:l(()=>[e(w,{cols:"12"},{default:l(()=>[e(ne,null,{default:l(()=>[t("tbody",null,[t("tr",null,[Le,t("td",null,d(h.value.application_id),1),Ne,t("td",null,d(h.value.created_at),1)]),t("tr",null,[xe,t("td",null,d(V.value.student_id??""),1),Ie,t("td",null,d(V.value.passport_no),1)]),t("tr",null,[Oe,t("td",null,d(V.value.first_name)+" "+d(V.value.last_name),1),Be,t("td",null,d(V.value.date_of_birth),1)]),t("tr",null,[Fe,t("td",null,d(V.value.email),1),Ee,t("td",null,d(V.value.whatsapp_number),1)]),t("tr",null,[He,t("td",null,d(h.value.counsellor_email),1),Re,t("td",null,d(h.value.counsellor_number),1)])])]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{value:"upload-download"},{default:l(()=>[e(ke,{"existing-documents":Y.value,"zip-link":V.value.document_zip_link},null,8,["existing-documents","zip-link"])]),_:1}),e(g,{value:"status"},{default:l(()=>[e(H,null,{default:l(()=>[e(w,{cols:"12",class:"d-flex justify-end"},{default:l(()=>[A.value==="status"&&u.$can("status","application")?(i(),f(_,{key:0,color:"primary",onClick:n[13]||(n[13]=a=>D.value=!0)},{default:l(()=>[o(" Change Current Status ")]),_:1})):c("",!0)]),_:1}),e(w,{cols:"12"},{default:l(()=>[e(ne,null,{default:l(()=>[ze,t("tbody",null,[(i(!0),C(P,null,z(X.value,(a,k)=>(i(),C("tr",{key:k},[t("td",null,d(a.created_at),1),t("td",null,d(a.comment),1),t("td",null,[t("div",null,[t("span",{innerHTML:a.status_text},null,8,Pe),k===0?(i(),C("span",qe,"(Current Status)")):c("",!0),a.document?(i(),C("div",We,[t("div",null,d(a.file_name),1),t("a",{href:a.document,target:"_blank",class:"download-link"},"Document",8,Qe)])):c("",!0)])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{value:"comments"},{default:l(()=>[e(H,null,{default:l(()=>[e(w,{cols:"12",class:"d-flex justify-end"},{default:l(()=>[u.$can("comment","application")?(i(),f(_,{key:0,color:"primary",onClick:n[14]||(n[14]=a=>U.value=!0)},{default:l(()=>[o(" Add New Comment ")]),_:1})):c("",!0)]),_:1}),e(w,{cols:"12"},{default:l(()=>[t("div",Ge,[(i(!0),C(P,null,z(J.value,(a,k)=>(i(),C("div",{key:k,class:"comment"},[t("div",Je,[t("span",Ke,d(a.created_at),1)]),t("div",{class:"comment-body",innerHTML:a.comment_with_user},null,8,Xe)]))),128))])]),_:1})]),_:1})]),_:1}),e(g,{value:"university-communication"},{default:l(()=>[e(H,null,{default:l(()=>[e(w,{cols:"12",class:"d-flex justify-end"},{default:l(()=>[u.$can("university_communication","application")?(i(),f(_,{key:0,color:"primary",onClick:n[15]||(n[15]=a=>$.value=!0)},{default:l(()=>[o(" Add New Communication ")]),_:1})):c("",!0)]),_:1}),e(w,{cols:"12"},{default:l(()=>[t("div",Ye,[(i(!0),C(P,null,z(K.value,(a,k)=>(i(),C("div",{key:k,class:"comment"},[t("div",Ze,[t("span",el,d(a.created_at),1)]),t("div",ll,[tl,o(" "+d(a.subject),1)]),t("div",al,[t("div",{innerHTML:a.message},null,8,nl)])]))),128))])]),_:1})]),_:1})]),_:1}),u.$can("enable","aco-ao-communication")?(i(),f(g,{key:0,value:"aco-ao-communication"},{default:l(()=>[e(ge,{"application-id":b(p)},null,8,["application-id"])]),_:1})):c("",!0),e(g,{value:"activity-logs"},{default:l(()=>[e(Ve,{"application-id":b(p)},null,8,["application-id"])]),_:1}),e(g,{value:"assign-officer"},{default:l(()=>[e(ye,{"application-id":b(p)},null,8,["application-id"])]),_:1}),e(g,{value:"assign-compliance-officer"},{default:l(()=>[e(Ce,{"application-id":b(p)},null,8,["application-id"])]),_:1}),e(g,{value:"aco-co-communication"},{default:l(()=>[e(be,{"application-id":b(p)},null,8,["application-id"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},et=De(ol,[["__scopeId","data-v-6c1f29b0"]]);export{et as default};
