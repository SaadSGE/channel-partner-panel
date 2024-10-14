import{_ as ae}from"./AppDateTimePicker-CJqGEfrw.js";import{_ as oe}from"./AppSelect-DRLGZxiP.js";import{_ as ie}from"./AppTextField-hqVdejhN.js";import{_ as se}from"./AppAutocomplete-dFVHU-fQ.js";import{c as ne}from"./commonFunction-e7j06GwD.js";import{ao as re,r as a,w as i,H as U,o as s,c as de,f as r,e as d,b as u,z as m,n as J,F as ue}from"./main-EEGZSpAz.js";import{$ as me}from"./api-BB8haixw.js";import{u as ce}from"./rolePermission-Yq0hcCjy.js";import{u as pe}from"./user-CbAHfkn5.js";import{g as fe}from"./helpers-NyGTX81Z.js";import{a as c}from"./VRow-DIhs2Kd2.js";const ve=re({id:"editor",state:()=>({editors:[]}),actions:{async getEditors(){try{const y=await me("/fetch-editor",{method:"GET"});console.log(y,"editor response"),this.editors=y.data,console.log(y.data,"editor response")}catch(y){console.error("Error fetching editors:",y),this.errors=y.response?y.response.data.errors:["An unexpected error occurred"]}}}}),Pe={__name:"Filters",props:{isAdmin:{type:Boolean,default:!1},selectedStatus:{type:Number,Required:!1},selectedChannelPartner:{type:Number,Required:!1},selectedUniversity:{type:Number,Required:!1},selectedApplicationOfficer:{type:Number,Required:!1},selectedDateFrom:{type:Number,Required:!1},selectedDateTo:{type:Number,Required:!1},selectedCountry:{type:Number,Required:!1},selectedIntake:{type:Number,Required:!1},selectedUniversity2:{type:Number,Required:!1},selectedCourseName:{type:Number,Required:!1},selectedRole:{type:Number,Required:!1},selectedParent:{type:Number,Required:!1},selectedEditor:{type:Number,Required:!1},selectedUserStatus:{type:Object,Required:!1}},emits:["update-status","update-channel-partner","update-university","update-application-officer","update-dateFrom","update-dateTo","update-country","update-intake","update-university2","update-courseName","update-role","update-parent","update-editor","update-userStatus"],setup(y,{emit:K}){const Q=a([{id:0,name:"Application Processing"},{id:1,name:"Application Submitted"},{id:2,name:"Pending Docs"},{id:3,name:"Offer Issue Conditional"},{id:4,name:"Offer Issue Unconditional"},{id:5,name:"Need Payment"},{id:6,name:"CAS Issued"},{id:7,name:"Additional Doc Needed"},{id:8,name:"Refund Required"},{id:9,name:"Application Rejected"},{id:10,name:"Session Expired"},{id:11,name:"Doc Received"},{id:12,name:"Partial Payment"}]),I=a([]),T=a([]),x=a([]),V=a([]),$=a([]),B=a([]),W=a(),j=a(!1),L=a(),z=a(null);a(null);const X=a([]),Y=a(0),G=ce(),S=pe(),f=ne(),b=ve(),H=a(fe()==="admin"),o=y,n=K,k=a(o.selectedStatus),R=a(o.selectedChannelPartner),C=a(o.selectedUniversity),N=a(o.selectedApplicationOfficer),g=a(o.selectedDateFrom),h=a(o.selectedDateTo),P=a(o.selectedCountry),A=a(o.selectedIntake),F=a(o.selectedUniversity2),_=a(o.selectedCourseName),w=a(o.selectedRole),E=a(o.selectedParent),D=a(o.selectedEditor),q=a(o.selectedUserStatus);i(k,t=>{n("update-status",t)}),i(R,t=>{n("update-channel-partner",t)}),i(C,t=>{n("update-university",t)}),i(N,t=>{n("update-application-officer",t)}),i(g,t=>{n("update-dateFrom",t)}),i(h,t=>{n("update-dateTo",t)}),i(P,t=>{n("update-country",t)}),i(A,t=>{n("update-intake",t)}),i(F,t=>{n("update-university2",t)}),i(_,t=>{n("update-courseName",t)}),i(w,t=>{n("update-role",t)}),i(E,t=>{n("update-parent",t)}),i(D,t=>{n("update-editor",t)}),i(q,t=>{n("update-userStatus",t)});const Z=async()=>{try{const t=await f.getUniversities();V.value=t.data.map(v=>({id:v.id,name:v.name}));const l=await S.fetchUsers(1,"","channel partner","",!0);$.value=l.data.map(v=>({id:v.id,name:v.company_name_with_email}));const p=await S.fetchUsers(1,"","application control officer","",!0);B.value=p.data.map(v=>({id:v.id,name:v.name_with_email}))}catch(t){console.error("Error fetching filter options:",t)}};U(()=>{Z()}),U(async()=>{await ee(),await b.getEditors()});const ee=async()=>{f.countries.length===0&&await f.getCountries(),f.intakes.length===0&&await f.getIntakes(),f.universities.length===0&&await f.getUniversities(),I.value=f.countries,T.value=f.intakes,V.value=f.universities},O=async()=>{j.value=!0;try{const t=await S.fetchUsers(L.value,z.value);X.value=t.data,Y.value=t.total}catch(t){console.error("Error fetching users:",t)}finally{j.value=!1}};i([L,z],()=>{O()}),U(async()=>{await G.getAllRoles(),x.value=G.roles,await S.fetchParentUsers(),O()}),U(async()=>{await te()});const te=async()=>{b.editors.length===0&&await b.getEditors(),W.value=b.editors};return(t,l)=>{const p=se,v=ie,le=oe,M=ae;return s(),de(ue,null,[o.selectedStatus!==void 0?(s(),r(c,{key:0,cols:"12",md:"3"},{default:d(()=>[u(p,{modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value=e),items:Q.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Status",placeholder:"Select Status",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):m("",!0),H.value&&o.selectedChannelPartner!==void 0?(s(),r(c,{key:1,cols:"12",md:"3"},{default:d(()=>[u(p,{modelValue:R.value,"onUpdate:modelValue":l[1]||(l[1]=e=>R.value=e),items:$.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Channel Partner",placeholder:"Select Channel Partner",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):m("",!0),o.selectedUniversity!==void 0?(s(),r(c,{key:2,cols:"12",md:"3"},{default:d(()=>[u(p,{modelValue:C.value,"onUpdate:modelValue":l[2]||(l[2]=e=>C.value=e),items:V.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"University",placeholder:"Select University",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):m("",!0),H.value&&o.selectedApplicationOfficer!==void 0?(s(),r(c,{key:3,cols:"12",md:"3"},{default:d(()=>[u(p,{modelValue:N.value,"onUpdate:modelValue":l[3]||(l[3]=e=>N.value=e),items:B.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Application Officer",placeholder:"Select Application Officer",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):m("",!0),o.selectedCountry!==void 0?(s(),r(c,{key:4,cols:"12",sm:"6",md:"3"},{default:d(()=>[u(p,{modelValue:P.value,"onUpdate:modelValue":l[4]||(l[4]=e=>P.value=e),items:I.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Filter by Country",placeholder:"Select Country",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):m("",!0),o.selectedIntake!==void 0?(s(),r(c,{key:5,cols:"12",sm:"6",md:"3"},{default:d(()=>[u(p,{modelValue:A.value,"onUpdate:modelValue":l[5]||(l[5]=e=>A.value=e),items:T.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Filter by Intake",placeholder:"Select Intake",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):m("",!0),o.selectedUniversity2!==void 0?(s(),r(c,{key:6,cols:"12",sm:"6",md:"3"},{default:d(()=>[u(p,{modelValue:F.value,"onUpdate:modelValue":l[6]||(l[6]=e=>F.value=e),items:V.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Filter by University",placeholder:"Select University",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):m("",!0),o.selectedCourseName!==void 0?(s(),r(c,{key:7,cols:"12",sm:"6",md:"3"},{default:d(()=>[u(v,{modelValue:_.value,"onUpdate:modelValue":l[7]||(l[7]=e=>_.value=e),label:"Filter by Course Name",placeholder:"Enter Course Name",clearable:""},null,8,["modelValue"])]),_:1})):m("",!0),o.selectedRole!==void 0?(s(),r(c,{key:8,cols:"12",sm:"4"},{default:d(()=>[u(le,{modelValue:w.value,"onUpdate:modelValue":l[8]||(l[8]=e=>w.value=e),placeholder:"Select role",items:x.value,clearable:"","clear-icon":"tabler-x","item-title":e=>e.role,"item-value":e=>e.role},null,8,["modelValue","items","item-title","item-value"])]),_:1})):m("",!0),o.selectedParent!==void 0?(s(),r(c,{key:9,cols:"12",sm:"4"},{default:d(()=>[u(p,{modelValue:E.value,"onUpdate:modelValue":l[9]||(l[9]=e=>E.value=e),placeholder:"Select Parent",items:J(S).parentUsers,clearable:"","clear-icon":"tabler-x","item-title":e=>e.full_name,"item-value":e=>e.id},null,8,["modelValue","items","item-title","item-value"])]),_:1})):m("",!0),o.selectedUserStatus!==void 0?(s(),r(c,{key:10,cols:"12",sm:"4"},{default:d(()=>[u(p,{modelValue:q.value,"onUpdate:modelValue":l[10]||(l[10]=e=>q.value=e),items:[{value:1,title:"Active"},{value:0,title:"Inactive"}],placeholder:"Select Status",onChange:O,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1})):m("",!0),o.selectedEditor!==void 0?(s(),r(c,{key:11,cols:"12",sm:"6",md:"3"},{default:d(()=>[u(p,{modelValue:D.value,"onUpdate:modelValue":l[11]||(l[11]=e=>D.value=e),items:J(b).editors,"item-title":e=>e.full_name,"item-value":e=>e.id,label:"Editor",placeholder:"Select Editor",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})):m("",!0),o.selectedDateFrom!==void 0?(s(),r(c,{key:12,cols:"12",md:"3"},{default:d(()=>[u(M,{modelValue:g.value,"onUpdate:modelValue":l[12]||(l[12]=e=>g.value=e),label:"From Date",placeholder:"Select From Date"},null,8,["modelValue"])]),_:1})):m("",!0),o.selectedDateTo!==void 0?(s(),r(c,{key:13,cols:"12",md:"3"},{default:d(()=>[u(M,{modelValue:h.value,"onUpdate:modelValue":l[13]||(l[13]=e=>h.value=e),label:"To Date",placeholder:"Select To Date"},null,8,["modelValue"])]),_:1})):m("",!0)],64)}}};export{Pe as _,ve as e};
