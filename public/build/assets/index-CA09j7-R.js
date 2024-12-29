import{_ as fe}from"./AppCardActions-BzFDC1pP.js";import{_ as _e}from"./TablePagination-CVdSvQaB.js";import{_ as ge}from"./AppTextField-DFkCpbYz.js";import{_ as ke}from"./AppSelect-DUSpzFBi.js";import{_ as ye}from"./Filters-spoIlZuQ.js";import{u as ve}from"./applicationList-B0h72rUu.js";import{c as we}from"./commonFunction-DaV-cpx8.js";import{u as Ce}from"./studentStore-44oXF-Ou.js";import{u as he}from"./submitApplication-Cpo3Wa5j.js";import{S as v}from"./sweetalert2-z6gKu1nJ.js";import{a6 as xe,r,k as Se,w as Ve,a as be,o as i,c as g,b as o,e as t,n,d as s,a4 as w,f as k,a2 as y,v as d,a9 as I,z as A,x as u,F as B,i as R,R as Ae,U as Be}from"./main-C3zi_SKQ.js";import{_ as Te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as N}from"./VCardText-haI9Z-IX.js";import{V as De}from"./VRow-s-aEvbE2.js";import{V as Le}from"./VSpacer-ZOaaLL5l.js";import{V as Ue}from"./VDataTableServer-B-ffw53_.js";import{V as C}from"./VChip-Drmygec1.js";import{V as Q}from"./VDialog-3Jy0gPfO.js";import{V as W,b as X}from"./VCard-CiUXVH6b.js";import{V as O}from"./VDivider-Byc_tc4C.js";import{V as $e,a as Ie,b as Ne}from"./VList-Bmx0u8vq.js";import{V as Fe}from"./VTable-9EnPL_hl.js";import"./index-DPXcXuYg.js";import"./dialog-transition-CxaPI8Wz.js";import"./forwardRefs-D3j0TLhE.js";import"./scopeId-CNDVdJ3R.js";import"./index-C8YGC3Io.js";import"./VPagination-y2flez4n.js";import"./VInput-DkaOtTDM.js";import"./VTextField-Dognc3Fg.js";import"./VSelect-C09sQe_X.js";import"./VMenu-mUALx6PX.js";import"./VCheckboxBtn-ChwCrhEn.js";import"./VAvatar-DNScsPhF.js";import"./VImg-CXAH5jII.js";import"./AppDateTimePicker-Coy05tHX.js";import"./AppAutocomplete-BHNP4SGW.js";import"./filter-CQxRTFIJ.js";import"./rolePermission-nqSxQQ9y.js";import"./helpers-CofNusnb.js";import"./user-DCbRDGuH.js";/* empty css              */import"./VDataTable-XBMr3zT1.js";import"./ssrBoot-d-rE-ebl.js";const Z=T=>(Ae("data-v-3f7643e8"),T=T(),Be(),T),Pe={class:"student-list-container"},ze={class:"me-3 d-flex gap-3"},qe={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},Re={style:{"inline-size":"15.625rem"}},Oe={class:"university-list ms-3"},Ee={class:"text-truncate text-high-emphasis"},Ye={style:{color:"#696cff"}},je=Z(()=>s("span",{style:{color:"#8a8d93"}}," - ",-1)),Ke={style:{color:"#28c76f"}},Me={class:"d-flex flex-column ms-3"},He=Z(()=>s("thead",null,[s("tr",null,[s("th",{class:"text-primary"},"Intake Name"),s("th",{class:"text-primary"},"University Name"),s("th",{class:"text-primary"},"Course Name"),s("th",{class:"text-primary"},"Course Type"),s("th",{class:"text-primary"},"Action")])],-1)),Ge={key:0,class:"text-error font-weight-medium"},Je={__name:"index",props:{userId:{type:String,default:null}},setup(T){const ee=xe(()=>"calc(100vh - 200px)"),F=r(0),p=r(1),h=r(""),f=r(10),E=r(),Y=r(),P=r(!1),D=r(null),L=r(null),j=r([]),U=r(null),x=r(!1),S=r(null),$=r(null),_=r(!1),z=r([]),K=we();ve();const M=Ce(),te=he(),H=Se(),oe=a=>{H.push({name:"student-record-details-id",params:{id:a}})},le=async a=>{const l={...a};if((await v.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await K.deleteAllStudent(l.id),students.value=K.students,v.fire("Deleted!","The item has been deleted.","success")}catch{v.fire("Error!","There was an error deleting the item.","error")}},ae=a=>{var l,V;p.value=a.page,f.value=a.itemsPerPage,E.value=((l=a.sortBy[0])==null?void 0:l.key)||"",Y.value=((V=a.sortBy[0])==null?void 0:V.order)||"",G()},G=async()=>{P.value=!0;try{const a=await M.getStudentList(p.value,f.value,h.value,E.value,Y.value,U.value,D.value,L.value,$.value);j.value=a.data,F.value=a.total}catch(a){console.error("Error fetching applications:",a)}finally{P.value=!1}};Ve([h,U,D,L,$],()=>{G()});const se=r([{title:"Action",key:"action",sortable:!1},{title:"Student Source",key:"lead_id"},{title:"Document Complete?",key:"profile_status.document_status"},{title:"Profile Complete?",key:"profile_status.interested_university_status"},{title:"Student ID",key:"student_id"},{title:"Name",key:"full_name"},{title:"Email",key:"email"},{title:"Phone",key:"whatsapp_number"},{title:"Counsellor",key:"counsellor.full_name"},{title:"University",key:"university_intake_course_country"}]),ne=[{name:"passport",label:"Passport",required:!0},{name:"academic_letter",label:"Academic Reference Letter",required:!0},{name:"professional_letter",label:"Professional Reference Letter",required:!0},{name:"cv-resume",label:"CV/Resume",required:!0},{name:"sop",label:"SOP",required:!0},{name:"supporting_document",label:"Supporting Document",required:!1}],re=a=>{S.value=a.document,x.value=!0},ie=()=>{H.push({name:"student-record"})},ue=async a=>{const l=await M.getUniversitiesForStudent(a);z.value=l.applied_university,console.log(z.value),_.value=!0},ce=async a=>{_.value=!1;try{(await v.fire({title:"Confirm Application",text:`Are you sure you want to apply to ${a.university_name} for ${a.course_name}?`,icon:"question",showCancelButton:!0,confirmButtonText:"Yes, Apply",cancelButtonText:"Cancel",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",allowOutsideClick:!1,backdrop:!0,position:"center",customClass:{container:"swal-over-modal",popup:"swal-popup-over-modal",backdrop:"swal-backdrop-over-modal"}})).isConfirmed?(await te.submitApplication({},a.course_id,a.intake_id,a.university_id,a.country_id,a.course_details_id||null,[],a.id,null),v.fire({title:"Success!",text:"Application created successfully",icon:"success",confirmButtonText:"OK"})):_.value=!0}catch(l){v.fire({icon:"error",title:"Application Failed",text:l,confirmButtonText:"OK"}),_.value=!0}};return(a,l)=>{const V=ye,J=ke,de=ge,q=be("IconBtn"),me=_e,pe=fe;return i(),g("div",Pe,[o(pe,{title:"Student List",loading:n(P),"no-actions":""},{default:t(()=>[o(N,null,{default:t(()=>[o(De,null,{default:t(()=>[o(V,{"selected-status":n(U),"selected-dateFrom":n(D),"selected-dateTo":n(L),"selected-student-source":n($),onUpdateStatus:l[0]||(l[0]=e=>U.value=e),onUpdateDateFrom:l[1]||(l[1]=e=>D.value=e),onUpdateDateTo:l[2]||(l[2]=e=>L.value=e),onUpdateStudentSource:l[3]||(l[3]=e=>$.value=e)},null,8,["selected-status","selected-dateFrom","selected-dateTo","selected-student-source"])]),_:1})]),_:1}),o(N,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[s("div",ze,[o(J,{"model-value":n(f),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":l[4]||(l[4]=e=>f.value=parseInt(e,10))},null,8,["model-value"])]),o(Le),s("div",qe,[s("div",Re,[o(de,{modelValue:n(h),"onUpdate:modelValue":l[5]||(l[5]=e=>w(h)?h.value=e:null),placeholder:"Search Student"},null,8,["modelValue"])]),a.$can("create","student")?(i(),k(I,{key:0,onClick:ie},{default:t(()=>[o(y,{icon:"tabler-plus"}),d(" Add Student ")]),_:1})):A("",!0)])]),_:1}),o(Ue,{"items-per-page":n(f),"onUpdate:itemsPerPage":l[7]||(l[7]=e=>w(f)?f.value=e:null),page:n(p),"onUpdate:page":l[8]||(l[8]=e=>w(p)?p.value=e:null),items:n(j),"items-length":n(F),headers:n(se),class:"text-no-wrap color-black student-table",height:n(ee),"onUpdate:options":ae},{"item.lead_id":t(({item:e})=>[o(C,{color:e.lead_id?"primary":"warning",size:"small",class:"font-weight-medium"},{default:t(()=>[d(u(e.lead_id?"Lead":"Regular"),1)]),_:2},1032,["color"])]),"item.profile_status.document_status":t(({item:e})=>[o(C,{color:e.profile_status.document_status?"success":"error",size:"small",class:"font-weight-medium",style:{cursor:"pointer"},onClick:c=>re(e)},{default:t(()=>[d(u(e.profile_status.document_status?"Yes":"No"),1)]),_:2},1032,["color","onClick"])]),"item.profile_status.interested_university_status":t(({item:e})=>[o(C,{color:e.profile_status.interested_university_status?"success":"error",size:"small",class:"font-weight-medium"},{default:t(()=>[d(u(e.profile_status.interested_university_status?"Yes":"No"),1)]),_:2},1032,["color"])]),"item.full_name":t(({item:e})=>[s("p",null,u(e.full_name),1)]),"item.email":t(({item:e})=>[s("p",null,u(e.email),1)]),"item.passport_no":t(({item:e})=>[s("p",null,u(e.passport_no),1)]),"item.university_intake_course_country":t(({item:e})=>[s("ul",Oe,[(i(!0),g(B,null,R(e.university_intake_course_country,(c,m)=>(i(),g(B,{key:m},[s("li",Ee,u(c),1),m<e.university_intake_course_country.length-1?(i(),k(O,{key:0,class:"my-1"})):A("",!0)],64))),128))])]),"item.counsellor.full_name":t(({item:e})=>[s("p",null,[s("span",Ye,u(e.counsellor.full_name),1),je,s("span",Ke,u(e.counsellor.branch.branch_name_with_country),1)])]),"item.action":t(({item:e})=>[s("div",Me,[o(q,{onClick:c=>oe(e.id)},{default:t(()=>[o(y,{color:"primary",icon:"tabler-eye"})]),_:2},1032,["onClick"]),a.$can("create","application")?(i(),k(q,{key:0,onClick:c=>ue(e.id)},{default:t(()=>[o(y,{color:"success",icon:"tabler-file-plus"})]),_:2},1032,["onClick"])):A("",!0),a.$can("delete","student")?(i(),k(q,{key:1,onClick:c=>le(e.id)},{default:t(()=>[o(y,{color:"error",icon:"tabler-trash"})]),_:2},1032,["onClick"])):A("",!0)])]),bottom:t(()=>[o(me,{page:n(p),"onUpdate:page":l[6]||(l[6]=e=>w(p)?p.value=e:null),"items-per-page":n(f),"total-items":n(F)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length","headers","height"]),o(Q,{modelValue:n(x),"onUpdate:modelValue":l[10]||(l[10]=e=>w(x)?x.value=e:null),"max-width":"800",class:"centered-dialog",transition:"dialog-transition"},{default:t(()=>[o(W,null,{default:t(()=>[o(X,{class:"d-flex justify-space-between align-center pa-4"},{default:t(()=>[d(" Document Status "),o(I,{icon:"",variant:"text",onClick:l[9]||(l[9]=e=>x.value=!1)},{default:t(()=>[o(y,{icon:"tabler-x"})]),_:1})]),_:1}),o(O),o(N,{class:"pa-4"},{default:t(()=>[o($e,null,{default:t(()=>[(i(),g(B,null,R(ne,e=>o(Ie,{key:e.name},{prepend:t(()=>{var c,m;return[o(y,{color:(c=n(S))!=null&&c.find(b=>b.document_name.toLowerCase()===e.name.toLowerCase())?"success":"error",icon:(m=n(S))!=null&&m.find(b=>b.document_name.toLowerCase()===e.name.toLowerCase())?"tabler-check":"tabler-x",class:"me-2"},null,8,["color","icon"])]}),append:t(()=>{var c;return[o(C,{color:(c=n(S))!=null&&c.find(m=>m.document_name.toLowerCase()===e.name.toLowerCase())?"success":"error",size:"small"},{default:t(()=>{var m;return[d(u((m=n(S))!=null&&m.find(b=>b.document_name.toLowerCase()===e.name.toLowerCase())?"Uploaded":"Missing"),1)]}),_:2},1032,["color"])]}),default:t(()=>[o(Ne,null,{default:t(()=>[d(u(e.label)+" ",1),e.required?(i(),k(C,{key:0,color:"warning",size:"x-small",class:"ms-2"},{default:t(()=>[d(" Required ")]),_:1})):A("",!0)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(Q,{modelValue:n(_),"onUpdate:modelValue":l[12]||(l[12]=e=>w(_)?_.value=e:null),"max-width":"100%",class:"centered-dialog",transition:"dialog-transition"},{default:t(()=>[o(W,null,{default:t(()=>[o(X,{class:"d-flex justify-space-between align-center pa-4"},{default:t(()=>[d(" University Information "),o(I,{icon:"",variant:"text",onClick:l[11]||(l[11]=e=>_.value=!1)},{default:t(()=>[o(y,{icon:"tabler-x"})]),_:1})]),_:1}),o(O),o(N,{class:"pa-4"},{default:t(()=>[o(Fe,{class:"university-info-table"},{default:t(()=>[He,s("tbody",null,[(i(!0),g(B,null,R(n(z),e=>(i(),g("tr",{key:e==null?void 0:e.id},[s("td",null,u((e==null?void 0:e.intake_name)||"N/A"),1),s("td",null,u((e==null?void 0:e.university_name)||"N/A"),1),s("td",null,u((e==null?void 0:e.course_name)||"N/A"),1),s("td",null,u((e==null?void 0:e.course_type)||"N/A"),1),s("td",null,[(e==null?void 0:e.document_status)==="false"?(i(),g("span",Ge,"Missing Document")):(i(),g(B,{key:1},[(e==null?void 0:e.application_done)==="false"?(i(),k(I,{key:0,onClick:c=>ce(e),color:"primary",size:"small",class:"px-4"},{default:t(()=>[d(" Apply ")]),_:2},1032,["onClick"])):(i(),k(C,{key:1,color:"success",size:"small"},{default:t(()=>[d("Already Applied")]),_:1}))],64))])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["loading"])])}}},Rt=Te(Je,[["__scopeId","data-v-3f7643e8"]]);export{Rt as default};
