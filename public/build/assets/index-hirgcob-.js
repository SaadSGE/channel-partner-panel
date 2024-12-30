import{_ as Z}from"./AppCardActions-CL6xIl9f.js";import{_ as ee}from"./TablePagination-DXKRVMHM.js";import{_ as te}from"./AppTextField-BObPlpdg.js";import{_ as ae}from"./AppSelect-D2Erl3Sx.js";import{_ as oe}from"./Filters-CjDfwejU.js";import{u as P}from"./applicationList-ByWMd4b5.js";import{k as le,r as a,a1 as se,w as ie,a6 as ne,a as re,o as k,c as pe,b as l,e as o,v as w,d as i,x as n,n as V,y as ce,f as N,a2 as b,z as $}from"./main-Fnquxq59.js";import{g as ue,r as L,b as me}from"./helpers-D3v8wGNq.js";import{S}from"./sweetalert2-z6gKu1nJ.js";import{u as de}from"./useAbility-Cuw0GFW4.js";import{_ as ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as z}from"./VCardText-BZC4GHLq.js";import{V as fe}from"./VRow-CZuh9ehv.js";import{V as _e}from"./VSpacer-DsGM5CTR.js";import{V as ye}from"./VDataTableServer-CmoUJ57C.js";import{V as ge}from"./VChip-Dt8JHKvn.js";import{V as he}from"./VBadge-Dyob8fT0.js";import"./index-MHNCXv1N.js";import"./VCard-BV1M2n13.js";import"./VAvatar-BvpeSpy9.js";import"./VImg-D0Y1lsUC.js";import"./index-BIh3WpW1.js";import"./dialog-transition-BbDK651E.js";import"./forwardRefs-D3j0TLhE.js";import"./scopeId-B5QIExbG.js";import"./VDivider-yXWRSAV-.js";import"./VPagination-Bd2r7ZAo.js";import"./VInput-CZub6Zk0.js";import"./VTextField-CaLyShim.js";import"./VSelect-nUKQwNEk.js";import"./VList-DRH0Z_ga.js";import"./ssrBoot-GPPxPnS1.js";import"./VMenu-Ck1TOVry.js";import"./VCheckboxBtn-1CZZxZt9.js";import"./AppDateTimePicker-Bs945VZl.js";import"./AppAutocomplete-Sfjbz5Jd.js";import"./filter-BPg4cofz.js";import"./commonFunction-aHx3jXPa.js";import"./rolePermission-BQu99Xml.js";import"./user-BCzbzf1B.js";/* empty css              */import"./VDataTable-BooLTLqu.js";import"./VTable-DGFdxjcr.js";const xe={class:"application-list-container"},Ae={class:"me-3 d-flex gap-3"},Ce={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},ke={style:{"inline-size":"15.625rem"}},we={class:"d-flex flex-column"},Ve={class:"d-block font-weight-medium text-truncate text-high-emphasis"},be={class:"text-md"},Se={class:"d-flex flex-column ms-3"},Be={class:"d-block font-weight-medium text-truncate text-high-emphasis"},Ue={class:"text-md"},Te={class:"text-md"},Ie={class:"d-flex align-center"},De={class:"d-flex flex-column ms-3"},Pe={__name:"index",props:{userId:{type:String,default:null}},setup(F){const E=F,{can:O}=de(),B=P(),R=le();a(ue()==="admin");const h=a([]),x=a(0),p=a(10),c=a(1),U=a(),T=a(),u=a(""),m=a(null),d=a(null),v=a(null),f=a(null),I=a(""),_=a(null),y=a(null),A=a(!1);P();const H=se(),g=a({}),C=async()=>{A.value=!0;try{const s=await B.getApplicationList(E.userId,c.value,p.value,u.value,U.value,T.value,m.value,d.value,v.value,f.value,I.value,_.value,y.value);h.value=s.data,x.value=s.total,await Promise.all(h.value.map(async t=>{const r=await H.fetchNotificationCountByApplicationId(t.application_id);g.value[t.application_id]=r}))}catch(s){console.error("Error fetching applications:",s)}finally{A.value=!1}},Y=s=>{var t,r;U.value=(t=s.sortBy[0])==null?void 0:t.key,T.value=(r=s.sortBy[0])==null?void 0:r.order,C()},j=s=>{R.push({name:"application-details",params:{id:s}})},q=async s=>{if((await S.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await B.deleteItem(s),C(),S.fire("Deleted!","The item has been deleted.","success")}catch{S.fire("Error!","There was an error deleting the item.","error")}};ie([u,m,d,v,f,I,_,y],()=>{C()});const G=a([{title:"Action",key:"action",sortable:!1},{title:"APPLICATION ID",key:"application_id"},{title:"Student Name",key:"student.name"},{title:"Student Email",key:"student.email"},...O("application-control-officer-view","application")?[{title:"Application Control Officer",key:"user.parent.email"}]:[],{title:"Channel Partner",key:"user.email"},{title:"University/Course Details",key:"university.name"},{title:"Status",key:"status"},{title:"Date Added",key:"created_at"}]),J=ne(()=>"calc(100vh - 200px)");return(s,t)=>{const r=oe,K=ae,M=te,D=re("IconBtn"),Q=ee,W=Z;return k(),pe("div",xe,[l(W,{title:"Application List",loading:A.value,"no-actions":""},{default:o(()=>[l(z,null,{default:o(()=>[l(fe,null,{default:o(()=>[l(r,{"selected-status":m.value,"selected-channel-partner":v.value,"selected-university":d.value,"selected-application-officer":f.value,"selected-dateFrom":_.value,"selected-dateTo":y.value,onUpdateStatus:t[0]||(t[0]=e=>m.value=e),onUpdateChannelPartner:t[1]||(t[1]=e=>v.value=e),onUpdateUniversity:t[2]||(t[2]=e=>d.value=e),onUpdateApplicationOfficer:t[3]||(t[3]=e=>f.value=e),onUpdateDateFrom:t[4]||(t[4]=e=>_.value=e),onUpdateDateTo:t[5]||(t[5]=e=>y.value=e)},{default:o(()=>[w(' :isAdmin = "isAdmin" ')]),_:1},8,["selected-status","selected-channel-partner","selected-university","selected-application-officer","selected-dateFrom","selected-dateTo"])]),_:1})]),_:1}),l(z,{class:"d-flex flex-wrap gap-4"},{default:o(()=>[i("div",Ae,[l(K,{"model-value":p.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":t[6]||(t[6]=e=>p.value=parseInt(e,10))},null,8,["model-value"])]),l(_e),i("div",Ce,[i("div",ke,[l(M,{modelValue:u.value,"onUpdate:modelValue":t[7]||(t[7]=e=>u.value=e),placeholder:"Search Application"},null,8,["modelValue"])])])]),_:1}),l(ye,{"items-per-page":p.value,"onUpdate:itemsPerPage":t[9]||(t[9]=e=>p.value=e),page:c.value,"onUpdate:page":t[10]||(t[10]=e=>c.value=e),items:h.value,"items-length":x.value,headers:G.value,class:"text-no-wrap color-black application-table",height:J.value,"onUpdate:options":Y},{"item.student.name":o(({item:e})=>[i("p",null,n(e.student.first_name)+" "+n(e.student.last_name),1)]),"item.user.email":o(({item:e})=>[i("div",we,[i("span",Ve,n(e.user.company_name),1),i("span",be,n(e.user.email),1)])]),"item.university.name":o(({item:e})=>[i("div",Se,[i("span",Be,n(e.university.name),1),i("span",Ue,n(e.course.name),1),i("span",Te,n(e.intake.name),1)])]),"item.status":o(({item:e})=>[l(ge,{color:V(L)(e.status),class:ce([`text-${V(L)(e.status)}`,"font-weight-medium"]),size:"small"},{default:o(()=>[w(n(V(me)(e.status)),1)]),_:2},1032,["color","class"])]),"item.application_id":o(({item:e})=>[i("div",Ie,[w(n(e.application_id)+" ",1),g.value[e.application_id]?(k(),N(he,{key:0,content:g.value[e.application_id],color:"error","model-value":g.value[e.application_id]>0,class:"ms-2"},{default:o(()=>[l(b,{size:"small",icon:"tabler-bell",color:"error"})]),_:2},1032,["content","model-value"])):$("",!0)])]),"item.action":o(({item:e})=>[i("div",De,[l(D,{onClick:X=>j(e.application_id)},{default:o(()=>[l(b,{color:"primary",icon:"tabler-eye"})]),_:2},1032,["onClick"]),s.$can("delete","application")?(k(),N(D,{key:0,onClick:X=>q(e.id)},{default:o(()=>[l(b,{color:"error",icon:"tabler-trash"})]),_:2},1032,["onClick"])):$("",!0)])]),bottom:o(()=>[l(Q,{page:c.value,"onUpdate:page":t[8]||(t[8]=e=>c.value=e),"items-per-page":p.value,"total-items":x.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length","headers","height"])]),_:1},8,["loading"])])}}},kt=ve(Pe,[["__scopeId","data-v-b2b9d675"]]);export{kt as default};