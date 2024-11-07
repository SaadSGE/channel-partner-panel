import{_ as x}from"./TablePagination-DSIIiVb_.js";import{u as B}from"./applicationList-hMZHfs85.js";import{r as C,a as R}from"./helpers-DTnLmPMO.js";import{S as i}from"./sweetalert2-z6gKu1nJ.js";import{k as T,r as s,w as P,H as S,o as j,f as A,e,b as a,v as m,n as g,x as D,a7 as y,a1 as V}from"./main-CSiErTrC.js";import{b as E,V as I}from"./VCard-Dyvot-OU.js";import{V as U,a as N}from"./VRow-pUYaZicq.js";import{a as Y}from"./VTextField-BE_Olmik.js";import{V as $}from"./VDataTable-DsL9RnY9.js";import{V as F}from"./VChip-DmYAq59v.js";import{V as H}from"./VCardText-BbEmzcMK.js";import"./VDivider-CJXv-daG.js";import"./VPagination-cBXH8NfB.js";import"./api-DWFqE0EF.js";import"./index-BYrzgnBV.js";import"./VAvatar-Bch8i2Kl.js";import"./VImg-DNzaKymM.js";import"./index-D0fdz3wH.js";/* empty css              */import"./index-DfinjJ0j.js";import"./forwardRefs-D9kYFWgq.js";import"./VSelect-BcYBjzlz.js";import"./VList-ByOnc6tB.js";import"./ssrBoot-CaQoqm2n.js";import"./dialog-transition-D7_ipZkV.js";import"./scopeId-BtBFTQc-.js";import"./VMenu-BPuY_Q26.js";import"./VCheckboxBtn-42SIpkIn.js";import"./VTable-Dc2l-39x.js";import"./filter-Db2PYUQe.js";const Ve={__name:"index",setup(L){const p=B();T();const v=s([]),d=s(!1),n=s({totalItems:0,currentPage:1,itemsPerPage:10,sortBy:"created_at",sortDesc:!0}),h=s(0),c=s(""),u=s(1),f=s(10),_=[{title:"Application ID",key:"application_id",sortable:!0},{title:"Student Name",key:"student.full_name",sortable:!0},{title:"University",key:"university.name",sortable:!0},{title:"Course",key:"course.name",sortable:!0},{title:"Status",key:"status",sortable:!0},{title:"Actions",key:"actions",sortable:!1,align:"center"}],l=async()=>{d.value=!0;try{const{data:r,total:t}=await p.getComplianceRequests({page:u.value,itemsPerPage:f.value,sortBy:n.value.sortBy,sortDesc:n.value.sortDesc,search:c.value});v.value=r,h.value=t}catch(r){console.error("Error fetching compliance requests:",r)}finally{d.value=!1}},b=async r=>{try{(await i.fire({title:"Are you sure?",text:"You are about to accept this compliance request.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, accept it!"})).isConfirmed&&(await p.acceptComplianceRequest(r),await l(),i.fire("Accepted!","The compliance request has been accepted.","success"))}catch(t){console.error("Error accepting compliance request:",t),i.fire("Error","There was an error accepting the compliance request.","error")}},q=async r=>{try{(await i.fire({title:"Are you sure?",text:"You are about to reject this compliance request.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, reject it!"})).isConfirmed&&(await p.rejectComplianceRequest(r),await l(),i.fire("Rejected!","The compliance request has been rejected.","success"))}catch(t){console.error("Error rejecting compliance request:",t),i.fire("Error","There was an error rejecting the compliance request.","error")}},w=r=>{n.value={...n.value,...r},l()};return P(c,()=>{n.value.currentPage=1,l()}),S(l),(r,t)=>(j(),A(I,null,{default:e(()=>[a(E,null,{default:e(()=>[m("Compliance Requests")]),_:1}),a(H,null,{default:e(()=>[a(U,null,{default:e(()=>[a(N,{cols:"12",sm:"6",md:"4"},{default:e(()=>[a(Y,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=o=>c.value=o),label:"Search","append-inner-icon":"mdi-magnify","single-line":"","hide-details":"","onClick:appendInner":l},null,8,["modelValue"])]),_:1})]),_:1}),a($,{headers:_,items:v.value,loading:d.value,"items-per-page":f.value,page:u.value,"server-items-length":r.totalItems,"onUpdate:options":w},{"item.status":e(({item:o})=>[a(F,{color:g(C)(o.status),"text-color":g(C)(o.status),small:""},{default:e(()=>[m(D(g(R)(o.status)),1)]),_:2},1032,["color","text-color"])]),"item.actions":e(({item:o})=>[a(y,{icon:"",small:"",color:"success",class:"mr-2",onClick:k=>b(o.id)},{default:e(()=>[a(V,null,{default:e(()=>[m("tabler-check")]),_:1})]),_:2},1032,["onClick"]),a(y,{icon:"",small:"",color:"error",onClick:k=>q(o.id)},{default:e(()=>[a(V,null,{default:e(()=>[m("tabler-x")]),_:1})]),_:2},1032,["onClick"])]),bottom:e(()=>[a(x,{page:u.value,"onUpdate:page":t[1]||(t[1]=o=>u.value=o),"items-per-page":f.value,"total-items":h.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items","loading","items-per-page","page","server-items-length"])]),_:1})]),_:1}))}};export{Ve as default};