import{_ as ne}from"./AppDateTimePicker-BWnOzNRI.js";import{_ as ue}from"./AppSelect-CCci48xp.js";import{_ as re}from"./AppTextField-DC2x1dsw.js";import{_ as ce}from"./AppAutocomplete-DVX6hFXO.js";import{c as me}from"./commonFunction-C4n_HNA0.js";import{g as pe,l as fe}from"./helpers-Bzg9TCNL.js";import{aK as ve,aL as ye,r as d,w as i,H as k,o,c as Se,f as n,e as u,b as r,n as M,z as c,F as be}from"./main-Z3go8Xzc.js";import{u as Ve}from"./rolePermission-D2xSqWcF.js";import{u as Ue}from"./user-DCPorwEi.js";import{a as m}from"./VRow-eo7qXlZG.js";const Ce=ve({id:"editor",state:()=>({editors:[]}),actions:{async getEditors(){try{const v=await ye("/fetch-editor",{method:"GET"});this.editors=v.data}catch(v){console.error("Error fetching editors:",v),this.errors=v.response?v.response.data.errors:["An unexpected error occurred"]}}}}),qe={__name:"Filters",props:{isAdmin:{type:Boolean,default:!1},selectedStatus:{type:Number,Required:!1},selectedLeadStatus:{type:Number,Required:!1},selectedChannelPartner:{type:Number,Required:!1},selectedUniversity:{type:Number,Required:!1},selectedApplicationOfficer:{type:Number,Required:!1},selectedDateFrom:{type:Number,Required:!1},selectedDateTo:{type:Number,Required:!1},selectedCountry:{type:Number,Required:!1},selectedIntake:{type:Number,Required:!1},selectedUniversity2:{type:Number,Required:!1},selectedCourseName:{type:Number,Required:!1},selectedRole:{type:Number,Required:!1},selectedParent:{type:Number,Required:!1},selectedEditor:{type:Number,Required:!1},selectedCourseType:{type:Number,Required:!1},selectedUserStatus:{type:Object,Required:!1},selectedMou:{type:Object,Required:!1}},emits:["update-status","update-channel-partner","update-university","update-application-officer","update-dateFrom","update-dateTo","update-country","update-intake","update-university2","update-courseName","update-role","update-parent","update-editor","update-userStatus","update-courseType","update-mou"],setup(v,{emit:W}){const X=d([{id:0,name:"Application Processing"},{id:1,name:"Application Submitted"},{id:2,name:"Pending Docs"},{id:3,name:"Offer Issue Conditional"},{id:4,name:"Offer Issue Unconditional"},{id:5,name:"Need Payment"},{id:6,name:"CAS Issued"},{id:7,name:"Additional Doc Needed"},{id:8,name:"Refund Required"},{id:9,name:"Application Rejected"},{id:10,name:"Session Expired"},{id:11,name:"Doc Received"},{id:12,name:"Partial Payment"}]),Y=d([{id:0,name:"Graduate"},{id:1,name:"Post graduate"}]),$=d([]),B=d([]),j=d([]),b=d([]),G=d([]),z=d([]),Z=d(),H=d(!1),V=d(),U=d(null);d(null);const ee=d(null),te=d([]),le=d(0),K=Ve(),y=Ue(),f=me(),S=Ce(),J=d(pe()==="admin"),t=v,s=W,R=d(t.selectedStatus),C=d(t.selectedLeadStatus),g=d(t.selectedChannelPartner),N=d(t.selectedUniversity),P=d(t.selectedApplicationOfficer),h=d(t.selectedDateFrom),F=d(t.selectedDateTo),A=d(t.selectedCountry),E=d(t.selectedIntake),w=d(t.selectedUniversity2),q=d(t.selectedCourseName),T=d(t.selectedRole),_=d(t.selectedParent),D=d(t.selectedEditor),O=d(t.selectedUserStatus),I=d(t.selectedCourseType),x=d(t.selectedMou);i(R,l=>{s("update-status",l)}),i(C,l=>{s("update-lead-status",l)}),i(g,l=>{s("update-channel-partner",l)}),i(N,l=>{s("update-university",l)}),i(P,l=>{s("update-application-officer",l)}),i(h,l=>{s("update-dateFrom",l)}),i(F,l=>{s("update-dateTo",l)}),i(A,l=>{s("update-country",l)}),i(E,l=>{s("update-intake",l)}),i(w,l=>{s("update-university2",l)}),i(q,l=>{s("update-courseName",l)}),i(T,l=>{s("update-role",l)}),i(_,l=>{s("update-parent",l)}),i(D,l=>{s("update-editor",l)}),i(O,l=>{s("update-userStatus",l)}),i(I,l=>{s("update-courseType",l)}),i(x,l=>{s("update-mou",l)});const ae=async()=>{try{if(t.selectedUniversity!==void 0||t.selectedUniversity2!==void 0){const l=await f.getUniversities();b.value=l.data.map(a=>({id:a.id,name:a.name}))}if(t.selectedChannelPartner!==void 0){const l=await y.fetchUsers(1,"","channel partner","",!0);G.value=l.data.map(a=>({id:a.id,name:a.company_name_with_email}))}if(t.selectedApplicationOfficer!==void 0){const l=await y.fetchUsers(1,"","application control officer","",!0);z.value=l.data.map(a=>({id:a.id,name:a.name_with_email}))}}catch(l){console.error("Error fetching filter options:",l)}};k(async()=>{(t.selectedChannelPartner!==void 0||t.selectedApplicationOfficer!==void 0)&&await ae()}),k(async()=>{(t.selectedCountry!==void 0||t.selectedIntake!==void 0||t.selectedUniversity!==void 0||t.selectedUniversity2!==void 0)&&await de(),t.selectedEditor!==void 0&&await S.getEditors()});const de=async()=>{try{t.selectedCountry!==void 0&&f.countries.length===0&&(await f.getCountries(),$.value=f.countries),t.selectedIntake!==void 0&&f.intakes.length===0&&(await f.getIntakes(),B.value=f.intakes),(t.selectedUniversity!==void 0||t.selectedUniversity2!==void 0)&&f.universities.length===0&&(await f.getUniversities(),b.value=f.universities)}catch(l){console.error("Error loading filter options:",l)}},L=async()=>{if(V.value||U.value||selectedCountry.value||selectedMou.value){H.value=!0;try{const l=await y.fetchUsers(V.value,U.value,selectedCountry.value,selectedMou.value);te.value=l.data,le.value=l.total}catch(l){console.error("Error fetching users:",l)}finally{H.value=!1}}};i([V,U],()=>{(V.value||U.value)&&L()}),k(async()=>{t.selectedRole!==void 0&&(await K.getAllRoles(),j.value=K.roles),t.selectedParent!==void 0&&await y.fetchParentUsers()}),k(async()=>{await ie(),console.log(ee,C)});const ie=async()=>{try{t.selectedEditor!==void 0&&S.editors.length===0&&(await S.getEditors(),Z.value=S.editors)}catch(l){console.error("Error loading editors:",l)}};return(l,a)=>{const p=ce,oe=re,se=ue,Q=ne;return o(),Se(be,null,[t.selectedLeadStatus!==void 0?(o(),n(m,{key:0,cols:"12",md:"3"},{default:u(()=>[r(p,{modelValue:C.value,"onUpdate:modelValue":a[0]||(a[0]=e=>C.value=e),items:M(fe),"item-title":e=>e.text,"item-value":e=>e.id,label:"Lead Status",placeholder:"Select Lead Status",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):c("",!0),t.selectedStatus!==void 0?(o(),n(m,{key:1,cols:"12",md:"3"},{default:u(()=>[r(p,{modelValue:R.value,"onUpdate:modelValue":a[1]||(a[1]=e=>R.value=e),items:X.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Status",placeholder:"Select Status",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):c("",!0),J.value&&t.selectedChannelPartner!==void 0?(o(),n(m,{key:2,cols:"12",md:"3"},{default:u(()=>[r(p,{modelValue:g.value,"onUpdate:modelValue":a[2]||(a[2]=e=>g.value=e),items:G.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Channel Partner",placeholder:"Select Channel Partner",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):c("",!0),t.selectedUniversity!==void 0?(o(),n(m,{key:3,cols:"12",md:"3"},{default:u(()=>[r(p,{modelValue:N.value,"onUpdate:modelValue":a[3]||(a[3]=e=>N.value=e),items:b.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"University",placeholder:"Select University",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):c("",!0),J.value&&t.selectedApplicationOfficer!==void 0?(o(),n(m,{key:4,cols:"12",md:"3"},{default:u(()=>[r(p,{modelValue:P.value,"onUpdate:modelValue":a[4]||(a[4]=e=>P.value=e),items:z.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Application Officer",placeholder:"Select Application Officer",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):c("",!0),t.selectedCountry!==void 0?(o(),n(m,{key:5,cols:"12",sm:"6",md:"3"},{default:u(()=>[r(p,{modelValue:A.value,"onUpdate:modelValue":a[5]||(a[5]=e=>A.value=e),items:$.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Filter by Country",placeholder:"Select Country",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):c("",!0),t.selectedIntake!==void 0?(o(),n(m,{key:6,cols:"12",sm:"6",md:"3"},{default:u(()=>[r(p,{modelValue:E.value,"onUpdate:modelValue":a[6]||(a[6]=e=>E.value=e),items:B.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Filter by Intake",placeholder:"Select Intake",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):c("",!0),t.selectedUniversity2!==void 0?(o(),n(m,{key:7,cols:"12",sm:"6",md:"3"},{default:u(()=>[r(p,{modelValue:w.value,"onUpdate:modelValue":a[7]||(a[7]=e=>w.value=e),items:b.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Filter by University",placeholder:"Select University",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):c("",!0),t.selectedCourseName!==void 0?(o(),n(m,{key:8,cols:"12",sm:"6",md:"3"},{default:u(()=>[r(oe,{modelValue:q.value,"onUpdate:modelValue":a[8]||(a[8]=e=>q.value=e),label:"Filter by Course Name",placeholder:"Enter Course Name",clearable:""},null,8,["modelValue"])]),_:1})):c("",!0),t.selectedCourseType!==void 0?(o(),n(m,{key:9,cols:"12",sm:"6",md:"3"},{default:u(()=>[r(p,{modelValue:I.value,"onUpdate:modelValue":a[9]||(a[9]=e=>I.value=e),items:Y.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Filter by coursetype",placeholder:"Select Coursetype",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):c("",!0),t.selectedRole!==void 0?(o(),n(m,{key:10,cols:"12",sm:"6",md:"3"},{default:u(()=>[r(se,{modelValue:T.value,"onUpdate:modelValue":a[10]||(a[10]=e=>T.value=e),label:"Filter by Role",placeholder:"Select role",items:j.value,clearable:"","clear-icon":"tabler-x","item-title":e=>e.role,"item-value":e=>e.role},null,8,["modelValue","items","item-title","item-value"])]),_:1})):c("",!0),t.selectedParent!==void 0?(o(),n(m,{key:11,cols:"12",sm:"6",md:"3"},{default:u(()=>[r(p,{modelValue:_.value,"onUpdate:modelValue":a[11]||(a[11]=e=>_.value=e),label:"Filter by Parent",placeholder:"Select Parent",items:M(y).parentUsers,clearable:"","clear-icon":"tabler-x","item-title":e=>e.full_name,"item-value":e=>e.id},null,8,["modelValue","items","item-title","item-value"])]),_:1})):c("",!0),t.selectedUserStatus!==void 0?(o(),n(m,{key:12,cols:"12",sm:"6",md:"3"},{default:u(()=>[r(p,{modelValue:O.value,"onUpdate:modelValue":a[12]||(a[12]=e=>O.value=e),items:[{value:1,title:"Active"},{value:0,title:"Inactive"}],placeholder:"Select Status",label:"Filter by User Status ",onChange:L,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1})):c("",!0),t.selectedMou!==void 0?(o(),n(m,{key:13,cols:"12",sm:"6",md:"3"},{default:u(()=>[r(p,{modelValue:x.value,"onUpdate:modelValue":a[13]||(a[13]=e=>x.value=e),items:[{value:1,title:"Complete"},{value:0,title:"Incomplete"}],placeholder:"Select Mou",label:"Filter by Mou",onChange:L,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1})):c("",!0),t.selectedEditor!==void 0?(o(),n(m,{key:14,cols:"12",sm:"6",md:"3"},{default:u(()=>[r(p,{modelValue:D.value,"onUpdate:modelValue":a[14]||(a[14]=e=>D.value=e),items:M(S).editors,"item-title":e=>e.full_name,"item-value":e=>e.id,label:"Editor",placeholder:"Select Editor",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):c("",!0),t.selectedDateFrom!==void 0?(o(),n(m,{key:15,cols:"12",md:"3"},{default:u(()=>[r(Q,{modelValue:h.value,"onUpdate:modelValue":a[15]||(a[15]=e=>h.value=e),label:"From Date",placeholder:"Select From Date"},null,8,["modelValue"])]),_:1})):c("",!0),t.selectedDateTo!==void 0?(o(),n(m,{key:16,cols:"12",md:"3"},{default:u(()=>[r(Q,{modelValue:F.value,"onUpdate:modelValue":a[16]||(a[16]=e=>F.value=e),label:"To Date",placeholder:"Select To Date"},null,8,["modelValue"])]),_:1})):c("",!0)],64)}}};export{qe as _,Ce as e};