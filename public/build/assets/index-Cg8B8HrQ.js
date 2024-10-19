import{_ as J}from"./AppCardActions-CUvJ5rlc.js";import{_ as K}from"./TablePagination-X-GrDvzA.js";import{_ as Q}from"./AppTextField-CNPVqh_a.js";import{_ as W}from"./AppSelect-BMbAkSU4.js";import{_ as X}from"./Filters-rQcL9WMQ.js";import{u as b}from"./applicationList-BGQureGO.js";import{g as Z,r as T,a as ee}from"./helpers-BK2cOSOq.js";import{S as k}from"./sweetalert2-z6gKu1nJ.js";import{k as te,r as a,w as ae,H as oe,a5 as se,a as le,o as D,c as ie,b as o,e as s,v as I,d as i,x as n,n as A,y as ne,a1 as P,f as re,z as pe}from"./main-DcRYtyhb.js";import{u as ce}from"./useAbility-CsKkFZlO.js";import{_ as ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as $}from"./VCardText-DBuqztfA.js";import{V as me}from"./VRow-DVOqp4Ce.js";import{V as de}from"./VSpacer-DJ6dVuUN.js";import{V as ve}from"./VDataTableServer-BA0gWebm.js";import{V as fe}from"./VChip-ThYzxD0S.js";import"./index-D9fV9cxA.js";import"./VCard-Cx8jtWxj.js";import"./VAvatar-BSmSdand.js";import"./VImg-Dll55tVl.js";import"./index-DAZmEUgw.js";import"./dialog-transition-Bayb46R9.js";import"./forwardRefs-D9kYFWgq.js";import"./scopeId-CB9q39my.js";import"./VDivider-OgX-iOTt.js";import"./VPagination-DLmQpVs3.js";import"./VTextField-CRmIugRS.js";import"./VSelect-26lvxBcu.js";import"./VList-BPp9J6kG.js";import"./ssrBoot-BIenGeCS.js";import"./VMenu-KYSCHawE.js";import"./VCheckboxBtn-DJABChzu.js";import"./AppDateTimePicker-CYMNbMeJ.js";import"./AppAutocomplete-s4yX0C5g.js";import"./filter-6ZEjh5GN.js";import"./commonFunction-tp9lW0ZL.js";import"./api-Dzamjkic.js";import"./index-BYrzgnBV.js";import"./rolePermission-CyqPUE45.js";import"./user-BpYOmrVQ.js";/* empty css              */import"./VDataTable-byDRf9DU.js";import"./VTable-CbagwWKi.js";const _e={class:"application-list-container"},ge={class:"me-3 d-flex gap-3"},ye={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},he={style:{"inline-size":"15.625rem"}},xe={class:"d-flex flex-column"},ke={class:"d-block font-weight-medium text-truncate text-high-emphasis"},Ae={class:"text-md"},Ce={class:"d-flex flex-column ms-3"},we={class:"d-block font-weight-medium text-truncate text-high-emphasis"},Ve={class:"text-md"},Se={class:"text-md"},Ue={class:"d-flex flex-column ms-3"},Be={__name:"index",props:{userId:{type:String,default:null}},setup(N){const L=N,{can:z}=ce(),C=b(),E=te();a(Z()==="admin");const w=a([]),h=a(0),r=a(10),p=a(1),V=a(),S=a(),u=a(""),m=a(null),d=a(null),v=a(null),f=a(null),U=a(""),_=a(null),g=a(null),x=a(!1);b();const y=async()=>{x.value=!0;try{const l=await C.getApplicationList(L.userId,p.value,r.value,u.value,V.value,S.value,m.value,d.value,v.value,f.value,U.value,_.value,g.value);w.value=l.data,h.value=l.total}catch(l){console.error("Error fetching applications:",l)}finally{x.value=!1}},F=l=>{var t,c;V.value=(t=l.sortBy[0])==null?void 0:t.key,S.value=(c=l.sortBy[0])==null?void 0:c.order,y()},O=l=>{E.push({name:"application-details",params:{id:l}})},R=async l=>{if((await k.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await C.deleteItem(l),y(),k.fire("Deleted!","The item has been deleted.","success")}catch{k.fire("Error!","There was an error deleting the item.","error")}};ae([u,m,d,v,f,U,_,g],()=>{y()}),oe(()=>{y()});const H=a([{title:"APPLICATION ID",key:"application_id"},{title:"Student Name",key:"student.name"},{title:"Student Email",key:"student.email"},...z("application-control-officer-view","application")?[{title:"Application Control Officer",key:"user.parent.email"}]:[],{title:"Channel Partner",key:"user.email"},{title:"University/Course Details",key:"university.name"},{title:"Status",key:"status"},{title:"Date Added",key:"created_at"},{title:"Action",key:"action",sortable:!1}]),M=se(()=>"calc(100vh - 200px)");return(l,t)=>{const c=W,Y=Q,B=le("IconBtn"),j=K,q=J;return D(),ie("div",_e,[o(q,{title:"Application List",loading:x.value,"no-actions":""},{default:s(()=>[o($,null,{default:s(()=>[o(me,null,{default:s(()=>[o(X,{"selected-status":m.value,"selected-channel-partner":v.value,"selected-university":d.value,"selected-application-officer":f.value,"selected-dateFrom":_.value,"selected-dateTo":g.value,onUpdateStatus:t[0]||(t[0]=e=>m.value=e),onUpdateChannelPartner:t[1]||(t[1]=e=>v.value=e),onUpdateUniversity:t[2]||(t[2]=e=>d.value=e),onUpdateApplicationOfficer:t[3]||(t[3]=e=>f.value=e),onUpdateDateFrom:t[4]||(t[4]=e=>_.value=e),onUpdateDateTo:t[5]||(t[5]=e=>g.value=e)},{default:s(()=>[I(' :isAdmin = "isAdmin" ')]),_:1},8,["selected-status","selected-channel-partner","selected-university","selected-application-officer","selected-dateFrom","selected-dateTo"])]),_:1})]),_:1}),o($,{class:"d-flex flex-wrap gap-4"},{default:s(()=>[i("div",ge,[o(c,{"model-value":r.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":t[6]||(t[6]=e=>r.value=parseInt(e,10))},null,8,["model-value"])]),o(de),i("div",ye,[i("div",he,[o(Y,{modelValue:u.value,"onUpdate:modelValue":t[7]||(t[7]=e=>u.value=e),placeholder:"Search Application"},null,8,["modelValue"])])])]),_:1}),o(ve,{"items-per-page":r.value,"onUpdate:itemsPerPage":t[9]||(t[9]=e=>r.value=e),page:p.value,"onUpdate:page":t[10]||(t[10]=e=>p.value=e),items:w.value,"items-length":h.value,headers:H.value,class:"text-no-wrap color-black application-table",height:M.value,"onUpdate:options":F},{"item.student.name":s(({item:e})=>[i("p",null,n(e.student.first_name)+" "+n(e.student.last_name),1)]),"item.user.email":s(({item:e})=>[i("div",xe,[i("span",ke,n(e.user.company_name),1),i("span",Ae,n(e.user.email),1)])]),"item.university.name":s(({item:e})=>[i("div",Ce,[i("span",we,n(e.university.name),1),i("span",Ve,n(e.course.name),1),i("span",Se,n(e.intake.name),1)])]),"item.status":s(({item:e})=>[o(fe,{color:A(T)(e.status),class:ne([`text-${A(T)(e.status)}`,"font-weight-medium"]),size:"small"},{default:s(()=>[I(n(A(ee)(e.status)),1)]),_:2},1032,["color","class"])]),"item.action":s(({item:e})=>[i("div",Ue,[o(B,{onClick:G=>O(e.application_id)},{default:s(()=>[o(P,{icon:"tabler-eye"})]),_:2},1032,["onClick"]),l.$can("delete","application")?(D(),re(B,{key:0,onClick:G=>R(e.id)},{default:s(()=>[o(P,{icon:"tabler-trash"})]),_:2},1032,["onClick"])):pe("",!0)])]),bottom:s(()=>[o(j,{page:p.value,"onUpdate:page":t[8]||(t[8]=e=>p.value=e),"items-per-page":r.value,"total-items":h.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length","headers","height"])]),_:1},8,["loading"])])}}},yt=ue(Be,[["__scopeId","data-v-47d05ed1"]]);export{yt as default};
