import{_ as fe}from"./AppCardActions-DHx5gyBg.js";import{_ as _e}from"./TablePagination-MBn1udgI.js";import{_ as ge}from"./AppTextField-FHOB24J6.js";import{_ as ve}from"./AppSelect-CdOzSNBp.js";import{_ as ye}from"./Filters-BKk4G58P.js";import{u as ke}from"./applicationList-0XE8kAmK.js";import{c as we}from"./commonFunction-z8u_lMNh.js";import{u as Ce}from"./studentStore-0q6QmwWX.js";import{u as he}from"./submitApplication-Ckpwho9Q.js";import{S as y}from"./sweetalert2-z6gKu1nJ.js";import{a6 as Se,r,k as xe,w as Ve,a as be,o as u,c as k,b as o,e as t,n,d as s,a4 as w,f as g,a2 as v,v as d,a9 as $,z as A,x as i,F as I,i as R,R as Ae,U as Be}from"./main-Bn7N3NvG.js";import{_ as Te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as N}from"./VCardText-BCUomBCf.js";import{V as De}from"./VRow-D4rNl6Rs.js";import{V as Le}from"./VSpacer-CGnqjIi8.js";import{V as Ue}from"./VDataTableServer-C8WxVDGQ.js";import{V as C}from"./VChip-Fk2lxuI6.js";import{V as Q}from"./VDialog-C7puytiB.js";import{V as W,b as X}from"./VCard-RkSWPWbO.js";import{V as O}from"./VDivider-C5Lqhc7K.js";import{V as $e,a as Ie,b as Ne}from"./VList-CK48eL9J.js";import{V as Fe}from"./VTable-D8uXeHAx.js";import"./index-C-d-RGG_.js";import"./dialog-transition-CzKY7LOL.js";import"./forwardRefs-D3j0TLhE.js";import"./scopeId-DB3P7OnF.js";import"./index-DHyAysHR.js";import"./VPagination-hGj95O27.js";import"./VInput-BQXqp1nY.js";import"./VTextField-C6WJ4Lms.js";import"./VSelect-CnfXuwCv.js";import"./VMenu-Cm-ub38I.js";import"./VCheckboxBtn-qMPYTT75.js";import"./VAvatar-DcHE5RhM.js";import"./VImg-CRMz--8Q.js";import"./AppDateTimePicker-BqSXMgNu.js";import"./AppAutocomplete-C1lHXICz.js";import"./filter-DASC4bpv.js";import"./rolePermission-CAMk-PfI.js";import"./helpers-BXUs3QXD.js";import"./user-W_x7pRhC.js";/* empty css              */import"./VDataTable-Dll0x4AM.js";import"./ssrBoot-BiZZysHt.js";const Z=B=>(Ae("data-v-f741d27e"),B=B(),Be(),B),Pe={class:"student-list-container"},ze={class:"me-3 d-flex gap-3"},qe={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},Re={style:{"inline-size":"15.625rem"}},Oe={class:"university-list ms-3"},Ee={class:"text-truncate text-high-emphasis"},Ye={style:{color:"#696cff"}},je=Z(()=>s("span",{style:{color:"#8a8d93"}}," - ",-1)),Ke={style:{color:"#28c76f"}},He={class:"d-flex flex-column ms-3"},Me=Z(()=>s("thead",null,[s("tr",null,[s("th",{class:"text-primary"},"Intake Name"),s("th",{class:"text-primary"},"University Name"),s("th",{class:"text-primary"},"Course Name"),s("th",{class:"text-primary"},"Course Type"),s("th",{class:"text-primary"},"Action")])],-1)),Ge={__name:"index",props:{userId:{type:String,default:null}},setup(B){const ee=Se(()=>"calc(100vh - 200px)"),F=r(0),p=r(1),h=r(""),f=r(10),E=r(),Y=r(),P=r(!1),T=r(null),D=r(null),j=r([]),L=r(null),S=r(!1),x=r(null),U=r(null),_=r(!1),z=r([]),K=we();ke();const H=Ce(),te=he(),M=xe(),oe=a=>{M.push({name:"student-record-details-id",params:{id:a}})},le=async a=>{const l={...a};if((await y.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await K.deleteAllStudent(l.id),students.value=K.students,y.fire("Deleted!","The item has been deleted.","success")}catch{y.fire("Error!","There was an error deleting the item.","error")}},ae=a=>{var l,V;p.value=a.page,f.value=a.itemsPerPage,E.value=((l=a.sortBy[0])==null?void 0:l.key)||"",Y.value=((V=a.sortBy[0])==null?void 0:V.order)||"",G()},G=async()=>{P.value=!0;try{const a=await H.getStudentList(p.value,f.value,h.value,E.value,Y.value,L.value,T.value,D.value,U.value);j.value=a.data,F.value=a.total}catch(a){console.error("Error fetching applications:",a)}finally{P.value=!1}};Ve([h,L,T,D,U],()=>{G()});const se=r([{title:"Action",key:"action",sortable:!1},{title:"Student Source",key:"lead_id"},{title:"Document Complete?",key:"profile_status.document_status"},{title:"Profile Complete?",key:"profile_status.interested_university_status"},{title:"Student ID",key:"student_id"},{title:"Name",key:"full_name"},{title:"Email",key:"email"},{title:"Phone",key:"whatsapp_number"},{title:"Counsellor",key:"counsellor.full_name"},{title:"University",key:"university_intake_course_country"}]),ne=[{name:"passport",label:"Passport",required:!0},{name:"academic_letter",label:"Academic Reference Letter",required:!0},{name:"professional_letter",label:"Professional Reference Letter",required:!0},{name:"cv-resume",label:"CV/Resume",required:!0},{name:"sop",label:"SOP",required:!0},{name:"supporting_document",label:"Supporting Document",required:!1}],re=a=>{x.value=a.document,S.value=!0},ie=()=>{M.push({name:"student-record"})},ue=async a=>{const l=await H.getUniversitiesForStudent(a);z.value=l.applied_university,console.log(z.value),_.value=!0},ce=async a=>{_.value=!1;try{(await y.fire({title:"Confirm Application",text:`Are you sure you want to apply to ${a.university_name} for ${a.course_name}?`,icon:"question",showCancelButton:!0,confirmButtonText:"Yes, Apply",cancelButtonText:"Cancel",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",allowOutsideClick:!1,backdrop:!0,position:"center",customClass:{container:"swal-over-modal",popup:"swal-popup-over-modal",backdrop:"swal-backdrop-over-modal"}})).isConfirmed?(await te.submitApplication({},a.course_id,a.intake_id,a.university_id,a.country_id,a.course_details_id||null,[],a.id,null),y.fire({title:"Success!",text:"Application created successfully",icon:"success",confirmButtonText:"OK"})):_.value=!0}catch(l){y.fire({icon:"error",title:"Application Failed",text:l,confirmButtonText:"OK"}),_.value=!0}};return(a,l)=>{const V=ye,J=ve,de=ge,q=be("IconBtn"),me=_e,pe=fe;return u(),k("div",Pe,[o(pe,{title:"Student List",loading:n(P),"no-actions":""},{default:t(()=>[o(N,null,{default:t(()=>[o(De,null,{default:t(()=>[o(V,{"selected-status":n(L),"selected-dateFrom":n(T),"selected-dateTo":n(D),"selected-student-source":n(U),onUpdateStatus:l[0]||(l[0]=e=>L.value=e),onUpdateDateFrom:l[1]||(l[1]=e=>T.value=e),onUpdateDateTo:l[2]||(l[2]=e=>D.value=e),onUpdateStudentSource:l[3]||(l[3]=e=>U.value=e)},null,8,["selected-status","selected-dateFrom","selected-dateTo","selected-student-source"])]),_:1})]),_:1}),o(N,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[s("div",ze,[o(J,{"model-value":n(f),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":l[4]||(l[4]=e=>f.value=parseInt(e,10))},null,8,["model-value"])]),o(Le),s("div",qe,[s("div",Re,[o(de,{modelValue:n(h),"onUpdate:modelValue":l[5]||(l[5]=e=>w(h)?h.value=e:null),placeholder:"Search Student"},null,8,["modelValue"])]),a.$can("create","student")?(u(),g($,{key:0,onClick:ie},{default:t(()=>[o(v,{icon:"tabler-plus"}),d(" Add Student ")]),_:1})):A("",!0)])]),_:1}),o(Ue,{"items-per-page":n(f),"onUpdate:itemsPerPage":l[7]||(l[7]=e=>w(f)?f.value=e:null),page:n(p),"onUpdate:page":l[8]||(l[8]=e=>w(p)?p.value=e:null),items:n(j),"items-length":n(F),headers:n(se),class:"text-no-wrap color-black student-table",height:n(ee),"onUpdate:options":ae},{"item.lead_id":t(({item:e})=>[o(C,{color:e.lead_id?"primary":"warning",size:"small",class:"font-weight-medium"},{default:t(()=>[d(i(e.lead_id?"Lead":"Regular"),1)]),_:2},1032,["color"])]),"item.profile_status.document_status":t(({item:e})=>[o(C,{color:e.profile_status.document_status?"success":"error",size:"small",class:"font-weight-medium",style:{cursor:"pointer"},onClick:c=>re(e)},{default:t(()=>[d(i(e.profile_status.document_status?"Yes":"No"),1)]),_:2},1032,["color","onClick"])]),"item.profile_status.interested_university_status":t(({item:e})=>[o(C,{color:e.profile_status.interested_university_status?"success":"error",size:"small",class:"font-weight-medium"},{default:t(()=>[d(i(e.profile_status.interested_university_status?"Yes":"No"),1)]),_:2},1032,["color"])]),"item.full_name":t(({item:e})=>[s("p",null,i(e.full_name),1)]),"item.email":t(({item:e})=>[s("p",null,i(e.email),1)]),"item.passport_no":t(({item:e})=>[s("p",null,i(e.passport_no),1)]),"item.university_intake_course_country":t(({item:e})=>[s("ul",Oe,[(u(!0),k(I,null,R(e.university_intake_course_country,(c,m)=>(u(),k(I,{key:m},[s("li",Ee,i(c),1),m<e.university_intake_course_country.length-1?(u(),g(O,{key:0,class:"my-1"})):A("",!0)],64))),128))])]),"item.counsellor.full_name":t(({item:e})=>[s("p",null,[s("span",Ye,i(e.counsellor.full_name),1),je,s("span",Ke,i(e.counsellor.branch.branch_name_with_country),1)])]),"item.action":t(({item:e})=>[s("div",He,[o(q,{onClick:c=>oe(e.id)},{default:t(()=>[o(v,{color:"primary",icon:"tabler-eye"})]),_:2},1032,["onClick"]),a.$can("create","application")?(u(),g(q,{key:0,onClick:c=>ue(e.id)},{default:t(()=>[o(v,{color:"success",icon:"tabler-file-plus"})]),_:2},1032,["onClick"])):A("",!0),a.$can("delete","student")?(u(),g(q,{key:1,onClick:c=>le(e.id)},{default:t(()=>[o(v,{color:"error",icon:"tabler-trash"})]),_:2},1032,["onClick"])):A("",!0)])]),bottom:t(()=>[o(me,{page:n(p),"onUpdate:page":l[6]||(l[6]=e=>w(p)?p.value=e:null),"items-per-page":n(f),"total-items":n(F)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length","headers","height"]),o(Q,{modelValue:n(S),"onUpdate:modelValue":l[10]||(l[10]=e=>w(S)?S.value=e:null),"max-width":"800",class:"centered-dialog",transition:"dialog-transition"},{default:t(()=>[o(W,null,{default:t(()=>[o(X,{class:"d-flex justify-space-between align-center pa-4"},{default:t(()=>[d(" Document Status "),o($,{icon:"",variant:"text",onClick:l[9]||(l[9]=e=>S.value=!1)},{default:t(()=>[o(v,{icon:"tabler-x"})]),_:1})]),_:1}),o(O),o(N,{class:"pa-4"},{default:t(()=>[o($e,null,{default:t(()=>[(u(),k(I,null,R(ne,e=>o(Ie,{key:e.name},{prepend:t(()=>{var c,m;return[o(v,{color:(c=n(x))!=null&&c.find(b=>b.document_name.toLowerCase()===e.name.toLowerCase())?"success":"error",icon:(m=n(x))!=null&&m.find(b=>b.document_name.toLowerCase()===e.name.toLowerCase())?"tabler-check":"tabler-x",class:"me-2"},null,8,["color","icon"])]}),append:t(()=>{var c;return[o(C,{color:(c=n(x))!=null&&c.find(m=>m.document_name.toLowerCase()===e.name.toLowerCase())?"success":"error",size:"small"},{default:t(()=>{var m;return[d(i((m=n(x))!=null&&m.find(b=>b.document_name.toLowerCase()===e.name.toLowerCase())?"Uploaded":"Missing"),1)]}),_:2},1032,["color"])]}),default:t(()=>[o(Ne,null,{default:t(()=>[d(i(e.label)+" ",1),e.required?(u(),g(C,{key:0,color:"warning",size:"x-small",class:"ms-2"},{default:t(()=>[d(" Required ")]),_:1})):A("",!0)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(Q,{modelValue:n(_),"onUpdate:modelValue":l[12]||(l[12]=e=>w(_)?_.value=e:null),"max-width":"80%",class:"centered-dialog",transition:"dialog-transition"},{default:t(()=>[o(W,null,{default:t(()=>[o(X,{class:"d-flex justify-space-between align-center pa-4"},{default:t(()=>[d(" University Information "),o($,{icon:"",variant:"text",onClick:l[11]||(l[11]=e=>_.value=!1)},{default:t(()=>[o(v,{icon:"tabler-x"})]),_:1})]),_:1}),o(O),o(N,{class:"pa-4"},{default:t(()=>[o(Fe,{class:"university-info-table"},{default:t(()=>[Me,s("tbody",null,[(u(!0),k(I,null,R(n(z),e=>(u(),k("tr",{key:e==null?void 0:e.id},[s("td",null,i((e==null?void 0:e.intake_name)||"N/A"),1),s("td",null,i((e==null?void 0:e.university_name)||"N/A"),1),s("td",null,i((e==null?void 0:e.course_name)||"N/A"),1),s("td",null,i((e==null?void 0:e.course_type)||"N/A"),1),s("td",null,[s("template",null,[(e==null?void 0:e.application_done)==="false"?(u(),g($,{key:0,onClick:c=>ce(e),color:"primary",size:"small",class:"px-4"},{default:t(()=>[d(" Apply ")]),_:2},1032,["onClick"])):(u(),g(C,{key:1,color:"success",size:"small"},{default:t(()=>[d("Already Applied")]),_:1}))])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["loading"])])}}},qt=Te(Ge,[["__scopeId","data-v-f741d27e"]]);export{qt as default};
