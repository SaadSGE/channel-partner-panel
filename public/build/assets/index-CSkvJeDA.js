import{_ as x}from"./TablePagination-CvNNTtuJ.js";import{u as B}from"./applicationList-CGO93p15.js";import{r as C,a as R}from"./helpers-fLnzIySp.js";import{S as i}from"./sweetalert2-z6gKu1nJ.js";import{k as T,r as s,w as P,H as S,o as j,f as A,e,b as r,v as m,n as g,x as D,a7 as y,a1 as V}from"./main-DEXLFq5-.js";import{b as E,V as I}from"./VCard-BQ9pbwZy.js";import{V as U,a as N}from"./VRow-DKkqacc7.js";import{V as Y}from"./VTextField-YMVwCEg-.js";import{V as $}from"./VDataTable-DaZWUfDZ.js";import{V as F}from"./VChip-BSo4JJOl.js";import{V as H}from"./VCardText-CEHG5Us3.js";import"./VDivider-BGznFT5b.js";import"./VPagination-Cz1XtQip.js";import"./api-CQno0kML.js";import"./index-Dz1rBMAR.js";import"./VAvatar-BaU-tpmv.js";import"./VImg-BwxQFvJc.js";import"./index-UZWnqimo.js";/* empty css              *//* empty css                   */import"./VCounter-DAizO-YE.js";import"./index-dXcoFe5c.js";import"./VField-tGKhD_Vg.js";import"./form-B1xJlf5M.js";import"./easing-CjukEv2V.js";import"./VInput-GP-yT9Tv.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-rPk05iDq.js";import"./VList-DKU5_qd-.js";import"./ssrBoot-D7sdtyqv.js";import"./dialog-transition-OLWOH0ts.js";import"./VMenu-Bwz97Y1a.js";import"./VOverlay-D3a_JeIA.js";import"./lazy-BlycEKg-.js";import"./scopeId-gfVHp0yK.js";import"./VCheckboxBtn-DE8plL2h.js";import"./VSelectionControl-BkLZjsBe.js";import"./VTable-CgQReiGh.js";import"./filter-CRYCQMRS.js";import"./VSlideGroup-CbIPENnS.js";const Pe={__name:"index",setup(L){const p=B();T();const v=s([]),d=s(!1),n=s({totalItems:0,currentPage:1,itemsPerPage:10,sortBy:"created_at",sortDesc:!0}),h=s(0),c=s(""),u=s(1),f=s(10),_=[{title:"Application ID",key:"application_id",sortable:!0},{title:"Student Name",key:"student.full_name",sortable:!0},{title:"University",key:"university.name",sortable:!0},{title:"Course",key:"course.name",sortable:!0},{title:"Status",key:"status",sortable:!0},{title:"Actions",key:"actions",sortable:!1,align:"center"}],l=async()=>{d.value=!0;try{const{data:a,total:t}=await p.getComplianceRequests({page:u.value,itemsPerPage:f.value,sortBy:n.value.sortBy,sortDesc:n.value.sortDesc,search:c.value});v.value=a,h.value=t}catch(a){console.error("Error fetching compliance requests:",a)}finally{d.value=!1}},b=async a=>{try{(await i.fire({title:"Are you sure?",text:"You are about to accept this compliance request.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, accept it!"})).isConfirmed&&(await p.acceptComplianceRequest(a),await l(),i.fire("Accepted!","The compliance request has been accepted.","success"))}catch(t){console.error("Error accepting compliance request:",t),i.fire("Error","There was an error accepting the compliance request.","error")}},q=async a=>{try{(await i.fire({title:"Are you sure?",text:"You are about to reject this compliance request.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, reject it!"})).isConfirmed&&(await p.rejectComplianceRequest(a),await l(),i.fire("Rejected!","The compliance request has been rejected.","success"))}catch(t){console.error("Error rejecting compliance request:",t),i.fire("Error","There was an error rejecting the compliance request.","error")}},w=a=>{n.value={...n.value,...a},l()};return P(c,()=>{n.value.currentPage=1,l()}),S(l),(a,t)=>(j(),A(I,null,{default:e(()=>[r(E,null,{default:e(()=>[m("Compliance Requests")]),_:1}),r(H,null,{default:e(()=>[r(U,null,{default:e(()=>[r(N,{cols:"12",sm:"6",md:"4"},{default:e(()=>[r(Y,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=o=>c.value=o),label:"Search","append-inner-icon":"mdi-magnify","single-line":"","hide-details":"","onClick:appendInner":l},null,8,["modelValue"])]),_:1})]),_:1}),r($,{headers:_,items:v.value,loading:d.value,"items-per-page":f.value,page:u.value,"server-items-length":a.totalItems,"onUpdate:options":w},{"item.status":e(({item:o})=>[r(F,{color:g(C)(o.status),"text-color":g(C)(o.status),small:""},{default:e(()=>[m(D(g(R)(o.status)),1)]),_:2},1032,["color","text-color"])]),"item.actions":e(({item:o})=>[r(y,{icon:"",small:"",color:"success",class:"mr-2",onClick:k=>b(o.id)},{default:e(()=>[r(V,null,{default:e(()=>[m("tabler-check")]),_:1})]),_:2},1032,["onClick"]),r(y,{icon:"",small:"",color:"error",onClick:k=>q(o.id)},{default:e(()=>[r(V,null,{default:e(()=>[m("tabler-x")]),_:1})]),_:2},1032,["onClick"])]),bottom:e(()=>[r(x,{page:u.value,"onUpdate:page":t[1]||(t[1]=o=>u.value=o),"items-per-page":f.value,"total-items":h.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items","loading","items-per-page","page","server-items-length"])]),_:1})]),_:1}))}};export{Pe as default};