import{r as b,a as R}from"./helpers-BzhXonZD.js";import{_ as M}from"./AppCardActions-LPj--HwO.js";import{_ as O}from"./TablePagination-CMXlHp6k.js";import{_ as Y}from"./AppTextField-DnblfOQu.js";import{_ as j}from"./AppSelect-DS9PrFI3.js";import{_ as q}from"./Filters-DBFWn_x6.js";import{u as G}from"./applicationList-K5nhRTAR.js";import{c as J}from"./commonFunction-CSVmfta4.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as T}from"./VCardText-1-ZGu5dD.js";import{V as Q}from"./VRow-CD6ZT1z3.js";import{V as W}from"./VSpacer-Cu63oyPP.js";import{V as X}from"./VDataTableServer-CVXJ1cuR.js";import{V as Z}from"./VChip-BnZebdch.js";import{a6 as ee,r as n,w as te,H as oe,a as se,o as ae,c as le,b as a,e as l,n as s,d as i,a4 as g,x as u,y as ne,v as ie,a2 as U}from"./main-CVWDuzes.js";import"./index-CwN3L1A2.js";import"./VCard-ZAB0EwIJ.js";import"./VAvatar-CniKLuiJ.js";import"./VImg-Bii9QvBb.js";import"./index-CLkLnF4x.js";import"./dialog-transition-DwFLikRc.js";import"./forwardRefs-D3j0TLhE.js";import"./lazy-BVsDlChf.js";import"./scopeId-BngyCZ-L.js";import"./VDivider-BYqXoHql.js";import"./VPagination-B84lfxPJ.js";import"./VTextField-BN3Dgytm.js";import"./VSelect-Bo02E6yO.js";import"./VList-zhex7iho.js";import"./ssrBoot-GkZ9Y4H-.js";import"./VMenu-2fVyirbu.js";import"./VCheckboxBtn-DPlaWpS6.js";import"./AppDateTimePicker-Yvp8-hAT.js";import"./AppAutocomplete-DKdotpjg.js";import"./filter-CRIqhMmW.js";import"./rolePermission-BgnZryg_.js";import"./user-DzXx7c-x.js";/* empty css              */import"./VDataTable-Dlhf62tb.js";import"./VTable-D_FPn4ay.js";import"./VSlideGroup-B-76nVKh.js";const re={class:"student-list-container"},me={class:"me-3 d-flex gap-3"},ue={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},pe={style:{"inline-size":"15.625rem"}},de={class:"d-flex flex-column ms-3"},ce={class:"d-block font-weight-medium text-truncate text-high-emphasis"},fe={class:"d-flex flex-column ms-3"},ve={__name:"index",props:{userId:{type:String,default:null}},setup(A){const D=A,F=ee(()=>"calc(100vh - 200px)"),S=n(0),r=n(1),p=n(""),m=n(10),h=n(),x=n(),y=n(!1),w=J(),c=n(null),f=n(null),N=G(),C=n([]),v=n(null),I=o=>{router.push({name:"student-record-details-id",params:{id:o}})},$=async o=>{const t={...o};if((await Swal.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await w.deleteAllStudent(t.id),students.value=w.students,Swal.fire("Deleted!","The item has been deleted.","success")}catch{Swal.fire("Error!","There was an error deleting the item.","error")}},L=n([{title:"First Name",key:"first_name"},{title:"Last Name",key:"last_name"},{title:"Student Email",key:"email"},{title:"Passport No",key:"passport_no"},{title:"University",key:"interested_universities[0]?.university.name"},{title:"Status",key:"status"},{title:"Action",key:"action",sortable:!1}]),P=o=>{var t,d;h.value=(t=o.sortBy[0])==null?void 0:t.key,x.value=(d=o.sortBy[0])==null?void 0:d.order},V=async()=>{y.value=!0;try{const o=await N.getStudentList(D.userId,r.value,m.value,p.value,h.value,x.value,v.value,c.value,f.value);C.value=o.data,S.value=o.total}catch(o){console.error("Error fetching applications:",o)}finally{y.value=!1}};return te([p,v,c,f],()=>{V()}),oe(()=>{V()}),(o,t)=>{const d=q,k=j,z=Y,B=se("IconBtn"),E=O,H=M;return ae(),le("div",re,[a(H,{title:"Student List",loading:s(y),"no-actions":""},{default:l(()=>[a(T,null,{default:l(()=>[a(Q,null,{default:l(()=>[a(d,{"selected-status":s(v),onUpdateStatus:t[0]||(t[0]=e=>v.value=e),"selected-dateFrom":s(c),"selected-dateTo":s(f),onUpdateDateFrom:t[1]||(t[1]=e=>c.value=e),onUpdateDateTo:t[2]||(t[2]=e=>f.value=e)},null,8,["selected-status","selected-dateFrom","selected-dateTo"])]),_:1})]),_:1}),a(T,{class:"d-flex flex-wrap gap-4"},{default:l(()=>[i("div",me,[a(k,{"model-value":s(m),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":t[3]||(t[3]=e=>m.value=parseInt(e,10))},null,8,["model-value"])]),a(W),i("div",ue,[i("div",pe,[a(z,{modelValue:s(p),"onUpdate:modelValue":t[4]||(t[4]=e=>g(p)?p.value=e:null),placeholder:"Search Student"},null,8,["modelValue"])])])]),_:1}),a(X,{"items-per-page":s(m),"onUpdate:itemsPerPage":t[6]||(t[6]=e=>g(m)?m.value=e:null),page:s(r),"onUpdate:page":t[7]||(t[7]=e=>g(r)?r.value=e:null),items:s(C),"items-length":s(S),headers:s(L),class:"text-no-wrap color-black student-table",height:s(F),"onUpdate:options":P},{"item.first_name":l(({item:e})=>[i("p",null,u(e.first_name),1)]),"item.last_name":l(({item:e})=>[i("p",null,u(e.last_name),1)]),"item.email":l(({item:e})=>[i("p",null,u(e.email),1)]),"item.passport_no":l(({item:e})=>[i("p",null,u(e.passport_no),1)]),"item.interested_universities[0]?.university.name":l(({item:e})=>{var _;return[i("div",de,[i("span",ce,u((_=e.interested_universities[0])==null?void 0:_.university.name),1)])]}),"item.status":l(({item:e})=>[a(Z,{color:("resolveStatusColor"in o?o.resolveStatusColor:s(b))(e.status),class:ne([`text-${("resolveStatusColor"in o?o.resolveStatusColor:s(b))(e.status)}`,"font-weight-medium"]),size:"small"},{default:l(()=>[ie(u(("resolveStatusName"in o?o.resolveStatusName:s(R))(e.status)),1)]),_:2},1032,["color","class"])]),"item.action":l(({item:e})=>[i("div",fe,[a(B,{onClick:_=>I(e.id)},{default:l(()=>[a(U,{icon:"tabler-eye"})]),_:2},1032,["onClick"]),a(B,{onClick:_=>$(e.id)},{default:l(()=>[a(U,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),bottom:l(()=>[a(E,{page:s(r),"onUpdate:page":t[5]||(t[5]=e=>g(r)?r.value=e:null),"items-per-page":s(m),"total-items":s(S)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length","headers","height"])]),_:1},8,["loading"])])}}},st=K(ve,[["__scopeId","data-v-1b3f3eda"]]);export{st as default};
