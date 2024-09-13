import{r as at}from"./validators-yRjgDR_h.js";import{j as nt,r as s,H as ot,o as r,f as N,e,b as t,v as o,a6 as E,n as tt,a7 as p,an as ut,d as l,x as d,z as k,c as _,i as H,F as B,R as st,U as dt}from"./main-kzKK1XE4.js";import{_ as it}from"./AppTextarea-6cS45ZNa.js";import{_ as rt}from"./AppAutocomplete-l16l5B7F.js";import{u as mt}from"./applicationList-CkJIlfHc.js";/* empty css                         */import ct from"./details-document-C06CE6Zz.js";import{_ as pt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as $,V as I,d as z}from"./VCard-DWOcblIG.js";import{V as P}from"./VDialog-Baqmc-4e.js";import{V as D}from"./VCardText-do432SKI.js";import{V as q}from"./VForm-Bgr5kXKW.js";import{V as A}from"./form-CvSQlg_q.js";import{V as _t}from"./VFileInput-Dmv_1bR6.js";import{V as R}from"./VSpacer-C0t0HYZC.js";import{V as ft}from"./VTextField-D9hGg4NW.js";import{V as vt,a as U}from"./VTabs-B0VWJhFn.js";import{V as Vt,a as x}from"./VWindowItem-C7GRxGZj.js";import{V as L,a as v}from"./VRow-xJk10beR.js";import{V as et}from"./VTable-Bn8Sveon.js";import"./helpers-BeXnm4sY.js";/* empty css                   */import"./VCounter-4ZaRFOI2.js";import"./index-BlZJFp_B.js";import"./index-LtM8Y5gz.js";import"./VField-BVEdELyf.js";import"./easing-CjukEv2V.js";import"./VInput-D5j0P0kz.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-B-OkTK7V.js";import"./VList-XkRzCeNh.js";import"./ssrBoot-vn9iu_kZ.js";import"./VAvatar-BVVy9Zei.js";import"./VImg-C74ZfjM4.js";import"./VDivider-BRvIS9W0.js";import"./dialog-transition-BOcmMYsD.js";import"./VMenu-BVP4sHy0.js";import"./VOverlay-Y9TS9n9w.js";import"./lazy-Ko0eglkA.js";import"./scopeId-B2QFYqCu.js";import"./VCheckboxBtn-DO-m-uTG.js";import"./VSelectionControl-BVXMxy4r.js";import"./VChip-CUMWd3v2.js";import"./VSlideGroup-BnF1OZOC.js";import"./filter-BqVARIH-.js";import"./api-CV6Ytb4u.js";import"./index-B3bPRkoL.js";import"./fileStore-vwN-sKcP.js";import"./submitApplication-CLlNQAD1.js";import"./filepond-plugin-image-preview.esm-DXxkEchi.js";import"./sweetalert2-z6gKu1nJ.js";/* empty css              */const m=T=>(st("data-v-d050b320"),T=T(),dt(),T),yt=m(()=>l("td",null,[l("strong",null,"Application Id")],-1)),Ct=m(()=>l("td",null,[l("strong",null,"Date Added")],-1)),gt=m(()=>l("td",null,[l("strong",null,"Student ID")],-1)),wt=m(()=>l("td",null,[l("strong",null,"Student Passport No.")],-1)),bt=m(()=>l("td",null,[l("strong",null,"Student Name")],-1)),St=m(()=>l("td",null,[l("strong",null,"Student Date of Birth")],-1)),ht=m(()=>l("td",null,[l("strong",null,"Student E-Mail")],-1)),kt=m(()=>l("td",null,[l("strong",null,"Student Phone No.")],-1)),Dt=m(()=>l("td",null,[l("strong",null,"Communication E-Mail ID")],-1)),At=m(()=>l("td",null,[l("strong",null,"Communication Phone No.")],-1)),Ut=m(()=>l("thead",null,[l("tr",null,[l("th",null,"Date Added"),l("th",null,"Comment"),l("th",null,"Status and Document")])],-1)),xt=["innerHTML"],Tt={key:0,class:"current-status-label"},Mt={key:1},jt=["href"],Nt={class:"comment-section"},$t={class:"comment-header"},It={class:"comment-date"},Lt=["innerHTML"],Ft={class:"comment-section"},Et={class:"comment-header"},Ht={class:"comment-date"},Bt={class:"communication-subject"},zt=m(()=>l("strong",null,"Subject:",-1)),Pt={class:"comment-body"},qt=["innerHTML"],Rt={__name:"details",setup(T){const g=nt().params.id,i=mt(),w=s("student-course-details"),b=s(!1),S=s(!1),h=s(!1),F=s(""),f=s(""),V=s({subject:"",message:""});s([{name:"Document1.pdf",progress:100},{name:"Document2.pdf",progress:100},{name:"Document3.pdf",progress:100},{name:"Document4.pdf",progress:100}]);const O=s([]),W=s([]),Q=s([{created_at:"",comment:"",status_text:""}]),y=s({application_id:"",created_at:"",counsellor_email:"",counsellor_number:""}),M=s();s(!0);const c=s({id:null,student_id:null,first_name:null,last_name:null,passport_no:null,date_of_birth:null,whatsapp_number:null,email:null,address:null,city:null,country:null,region:null,state:null,gender:null,visa_refusal:null,created_at:null,updated_at:null,document:[{id:null,student_id:null,path:null,created_at:null,updated_at:null}]}),G=s([]),J=s([]);ot(async()=>{await j()});const j=async()=>{await i.getApplicationDetails(g),await i.getApplicationStatusses(g),await i.getApplicationAllStatuses(),y.value=i.applicationData,G.value=i.documents,c.value=i.students,Q.value=i.statuses,O.value=i.comments,W.value=i.universityCommunications,J.value=i.allStatuses.filter(u=>u.id!==y.value.status)},K=async()=>{try{let u=new FormData;u.append("status",F.value),u.append("comment",f.value),M.value&&u.append("file",M.value[0]),await i.updateStatus(g,u),b.value=!1,await j()}catch(u){console.error("Error updating status:",u)}},X=async()=>{try{await i.addComment(g,f.value),f.value="",S.value=!1,await j()}catch(u){console.error("Error adding comment:",u)}},Y=async()=>{try{await i.addUniversityCommunication(g,V.value),V.value={subject:"",message:""},h.value=!1,await j()}catch(u){console.error("Error adding university communication:",u)}};return(u,n)=>{const lt=rt,Z=it;return r(),N(I,null,{default:e(()=>[t($,null,{default:e(()=>[o("Application Details")]),_:1}),t(D,null,{default:e(()=>[t(P,{modelValue:b.value,"onUpdate:modelValue":n[4]||(n[4]=a=>b.value=a),"max-width":"500px"},{default:e(()=>[t(I,null,{default:e(()=>[t($,null,{default:e(()=>[o("Change Current Status")]),_:1}),t(D,null,{default:e(()=>[t(q,{onSubmit:E(K,["prevent"])},{default:e(()=>[t(lt,{modelValue:F.value,"onUpdate:modelValue":n[0]||(n[0]=a=>F.value=a),items:J.value,"item-title":a=>a.name,"item-value":a=>a.id,label:"Status",placeholder:"Select Status",rules:["requiredValidator"in u?u.requiredValidator:tt(at)]},null,8,["modelValue","items","item-title","item-value","rules"]),t(A,{class:"mt-2"},{default:e(()=>[o("Add any necessary file (Optional)")]),_:1}),t(_t,{modelValue:M.value,"onUpdate:modelValue":n[1]||(n[1]=a=>M.value=a),color:"primary",label:"File input",variant:"outlined",class:"mt-2"},null,8,["modelValue"]),t(A,{class:"mt-2"},{default:e(()=>[o("Comment (Optional)")]),_:1}),t(Z,{modelValue:f.value,"onUpdate:modelValue":n[2]||(n[2]=a=>f.value=a),placeholder:"Place any comment regarding status"},null,8,["modelValue"])]),_:1})]),_:1}),t(z,null,{default:e(()=>[t(R),t(p,{color:"primary",onClick:K},{default:e(()=>[o("Submit")]),_:1}),t(p,{onClick:n[3]||(n[3]=a=>b.value=!1)},{default:e(()=>[o("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(P,{modelValue:S.value,"onUpdate:modelValue":n[7]||(n[7]=a=>S.value=a),"max-width":"500px"},{default:e(()=>[t(I,null,{default:e(()=>[t($,null,{default:e(()=>[o("Add a New Comment")]),_:1}),t(D,null,{default:e(()=>[t(q,{onSubmit:E(X,["prevent"])},{default:e(()=>[t(A,{class:"mt-2"},{default:e(()=>[o("New Comment")]),_:1}),t(Z,{modelValue:f.value,"onUpdate:modelValue":n[5]||(n[5]=a=>f.value=a),placeholder:"Add a new comment",class:"mt-2"},null,8,["modelValue"])]),_:1})]),_:1}),t(z,null,{default:e(()=>[t(R),t(p,{color:"primary",onClick:X},{default:e(()=>[o("Submit Comment")]),_:1}),t(p,{onClick:n[6]||(n[6]=a=>S.value=!1)},{default:e(()=>[o("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(P,{modelValue:h.value,"onUpdate:modelValue":n[11]||(n[11]=a=>h.value=a),"max-width":"500px"},{default:e(()=>[t(I,null,{default:e(()=>[t($,null,{default:e(()=>[o("Add a New University Communication")]),_:1}),t(D,null,{default:e(()=>[t(q,{onSubmit:E(Y,["prevent"])},{default:e(()=>[t(A,{class:"mt-2"},{default:e(()=>[o("Subject")]),_:1}),t(ft,{modelValue:V.value.subject,"onUpdate:modelValue":n[8]||(n[8]=a=>V.value.subject=a),placeholder:"Subject",class:"mt-2"},null,8,["modelValue"]),t(A,{class:"mt-2"},{default:e(()=>[o("Message")]),_:1}),t(tt(ut),{theme:"snow",content:V.value.message,"onUpdate:content":n[9]||(n[9]=a=>V.value.message=a),"content-type":"html",class:"mt-2"},null,8,["content"])]),_:1})]),_:1}),t(z,null,{default:e(()=>[t(R),t(p,{color:"primary",onClick:Y},{default:e(()=>[o("Submit Communication")]),_:1}),t(p,{onClick:n[10]||(n[10]=a=>h.value=!1)},{default:e(()=>[o("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(vt,{modelValue:w.value,"onUpdate:modelValue":n[12]||(n[12]=a=>w.value=a)},{default:e(()=>[t(U,{value:"student-course-details"},{default:e(()=>[o("Student/Course Details")]),_:1}),t(U,{value:"upload-download"},{default:e(()=>[o("Upload/Download")]),_:1}),t(U,{value:"status"},{default:e(()=>[o("Status")]),_:1}),t(U,{value:"comments"},{default:e(()=>[o("Comments")]),_:1}),t(U,{value:"university-communication"},{default:e(()=>[o("University Communication")]),_:1})]),_:1},8,["modelValue"]),t(D,null,{default:e(()=>[t(Vt,{modelValue:w.value,"onUpdate:modelValue":n[16]||(n[16]=a=>w.value=a)},{default:e(()=>[t(x,{value:"student-course-details"},{default:e(()=>[t(L,null,{default:e(()=>[t(v,{cols:"12"},{default:e(()=>[t(et,null,{default:e(()=>[l("tbody",null,[l("tr",null,[yt,l("td",null,d(y.value.application_id),1),Ct,l("td",null,d(y.value.created_at),1)]),l("tr",null,[gt,l("td",null,d(c.value.student_id??""),1),wt,l("td",null,d(c.value.passport_no),1)]),l("tr",null,[bt,l("td",null,d(c.value.first_name)+" "+d(c.value.last_name),1),St,l("td",null,d(c.value.date_of_birth),1)]),l("tr",null,[ht,l("td",null,d(c.value.email),1),kt,l("td",null,d(c.value.whatsapp_number),1)]),l("tr",null,[Dt,l("td",null,d(y.value.counsellor_email),1),At,l("td",null,d(y.value.counsellor_number),1)])])]),_:1})]),_:1})]),_:1})]),_:1}),t(x,{value:"upload-download"},{default:e(()=>[t(ct,{"existing-documents":G.value,"zip-link":c.value.document_zip_link},null,8,["existing-documents","zip-link"])]),_:1}),t(x,{value:"status"},{default:e(()=>[t(L,null,{default:e(()=>[t(v,{cols:"12",class:"d-flex justify-end"},{default:e(()=>[w.value==="status"&&u.$can("status","application")?(r(),N(p,{key:0,onClick:n[13]||(n[13]=a=>b.value=!0),color:"primary"},{default:e(()=>[o(" Change Current Status ")]),_:1})):k("",!0)]),_:1}),t(v,{cols:"12"},{default:e(()=>[t(et,null,{default:e(()=>[Ut,l("tbody",null,[(r(!0),_(B,null,H(Q.value,(a,C)=>(r(),_("tr",{key:C},[l("td",null,d(a.created_at),1),l("td",null,d(a.comment),1),l("td",null,[l("div",null,[l("span",{innerHTML:a.status_text},null,8,xt),C===0?(r(),_("span",Tt,"(Current Status)")):k("",!0),a.document?(r(),_("div",Mt,[l("div",null,d(a.file_name),1),l("a",{href:a.document,target:"_blank",class:"download-link"},"Document",8,jt)])):k("",!0)])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),t(x,{value:"comments"},{default:e(()=>[t(L,null,{default:e(()=>[t(v,{cols:"12",class:"d-flex justify-end"},{default:e(()=>[u.$can("comment","application")?(r(),N(p,{key:0,onClick:n[14]||(n[14]=a=>S.value=!0),color:"primary"},{default:e(()=>[o("Add New Comment")]),_:1})):k("",!0)]),_:1}),t(v,{cols:"12"},{default:e(()=>[l("div",Nt,[(r(!0),_(B,null,H(O.value,(a,C)=>(r(),_("div",{key:C,class:"comment"},[l("div",$t,[l("span",It,d(a.created_at),1)]),l("div",{class:"comment-body",innerHTML:a.comment_with_user},null,8,Lt)]))),128))])]),_:1})]),_:1})]),_:1}),t(x,{value:"university-communication"},{default:e(()=>[t(L,null,{default:e(()=>[t(v,{cols:"12",class:"d-flex justify-end"},{default:e(()=>[u.$can("university_communication","application")?(r(),N(p,{key:0,onClick:n[15]||(n[15]=a=>h.value=!0),color:"primary"},{default:e(()=>[o("Add New Communication")]),_:1})):k("",!0)]),_:1}),t(v,{cols:"12"},{default:e(()=>[l("div",Ft,[(r(!0),_(B,null,H(W.value,(a,C)=>(r(),_("div",{key:C,class:"comment"},[l("div",Et,[l("span",Ht,d(a.created_at),1)]),l("div",Bt,[zt,o(" "+d(a.subject),1)]),l("div",Pt,[l("div",{innerHTML:a.message},null,8,qt)])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},Re=pt(Rt,[["__scopeId","data-v-d050b320"]]);export{Re as default};
