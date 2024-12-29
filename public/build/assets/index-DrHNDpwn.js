import{_ as P}from"./AppCardActions-DPrDXCn6.js";import{_ as j}from"./AppTextField-CFET9Ydt.js";import{_ as E}from"./AppSelect-Csj4C6cy.js";import{_ as U}from"./TablePagination-DXDEk8AY.js";import{u as $}from"./applicationList-f4KxBqU7.js";import{r as w,b as z}from"./helpers-CaxqxDSa.js";import{S as n}from"./sweetalert2-z6gKu1nJ.js";import{k as D,r as i,w as N,o as I,c as L,b as o,e as s,d as c,v as A,x as p,a9 as C,a2 as V,n as _,y as Y}from"./main-DkVQ8vVJ.js";import{V as O}from"./VCardText-D80AumUZ.js";import{V as F}from"./VSpacer-Dz7HWcZA.js";import{V as Q}from"./VDivider-BZcLH-0e.js";import{V as G}from"./VDataTableServer-BGEzio6l.js";import{V as H}from"./VChip-DAJ7rVrt.js";import"./index-CyRFvhbr.js";import"./VCard-DvhMKG2V.js";import"./VAvatar-C8jnXoKy.js";import"./VImg-ClLerLWj.js";import"./index-DsCji9fU.js";import"./dialog-transition-Dy63_U0x.js";import"./forwardRefs-D3j0TLhE.js";import"./scopeId-BooELfDn.js";import"./VInput-BYBZ1CdB.js";import"./VTextField-BREs-iVA.js";import"./VSelect-BWc4BX6c.js";import"./VList-DCwei6Yh.js";import"./ssrBoot-kIU4TMv8.js";import"./VMenu-CQjjDSv_.js";import"./VCheckboxBtn-BbkUqkUt.js";import"./VPagination-BsKsW1aZ.js";/* empty css              */import"./VDataTable-DXRNLrN-.js";import"./VTable-CHWuTlIQ.js";import"./filter-C5C_bG-1.js";const J={class:"application-request-list-container"},K={class:"me-3 d-flex gap-3"},M={class:"d-flex gap-2"},W={class:"d-flex flex-column ms-3"},X={class:"d-block font-weight-medium text-truncate text-high-emphasis"},Z={class:"text-md"},ee={class:"text-md"},Ue={__name:"index",setup(te){D();const v=$(),u=i(!1),r=i(10),l=i(1),m=i(""),g=i(0),y=i("created_at"),h=i("desc"),k=[{title:"APPLICATION ID",key:"application_id"},{title:"Student Name",key:"student.name"},{title:"Student Email",key:"student.email"},{title:"Application Control Officer",key:"user.parent.email"},{title:"University/Course Details",key:"university.name"},{title:"Status",key:"status"},{title:"Date Added",key:"created_at"},{title:"Actions",key:"actions",sortable:!1,align:"center"}],x=i([]),d=async()=>{u.value=!0;try{const a=await v.getApplicationRequests(l.value,r.value,m.value,y.value,h.value);console.log(a),x.value=a.data,g.value=a.total}catch(a){console.error("Error fetching application requests:",a)}finally{u.value=!1}},q=a=>{var t,f;l.value=a.page,r.value=a.itemsPerPage,y.value=((t=a.sortBy[0])==null?void 0:t.key)||"",h.value=((f=a.sortBy[0])==null?void 0:f.order)||"",d()},B=async a=>{try{(await n.fire({title:"Are you sure?",text:"You're about to accept this application request.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, accept it!"})).isConfirmed&&(await v.acceptApplicationRequest(a.id),await d(),n.fire("Accepted!","The application request has been accepted.","success"))}catch(t){console.error("Error accepting application request:",t),n.fire("Error!","There was an error accepting the application request.","error")}},S=async a=>{try{(await n.fire({title:"Are you sure?",text:"You're about to reject this application request.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, reject it!"})).isConfirmed&&(await v.rejectApplicationRequest(a.id),await d(),n.fire("Rejected!","The application request has been rejected.","success"))}catch(t){console.error("Error rejecting application request:",t),n.fire("Error!","There was an error rejecting the application request.","error")}};return N([l,r,m],()=>{d()}),(a,t)=>{const f=E,b=j,T=P;return I(),L("div",J,[o(T,{title:"Application Requests",loading:u.value,"no-actions":""},{default:s(()=>[o(O,{class:"d-flex flex-wrap gap-4"},{default:s(()=>[c("div",K,[o(f,{modelValue:r.value,"onUpdate:modelValue":[t[0]||(t[0]=e=>r.value=e),t[1]||(t[1]=e=>r.value=parseInt(e,10))],items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:100},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"}},null,8,["modelValue"])]),o(F),o(b,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=e=>m.value=e),placeholder:"Search",density:"compact",style:{"inline-size":"15.625rem"}},null,8,["modelValue"])]),_:1}),o(Q),o(G,{"items-per-page":r.value,"onUpdate:itemsPerPage":t[4]||(t[4]=e=>r.value=e),page:l.value,"onUpdate:page":t[5]||(t[5]=e=>l.value=e),items:x.value,"items-length":g.value,headers:k,class:"text-no-wrap application-table",loading:u.value,"onUpdate:options":q},{"item.student.name":s(({item:e})=>[A(p(e.student.first_name)+" "+p(e.student.last_name),1)]),"item.actions":s(({item:e})=>[c("div",M,[o(C,{icon:"",color:"success",size:"small",onClick:R=>B(e)},{default:s(()=>[o(V,{icon:"tabler-check"})]),_:2},1032,["onClick"]),o(C,{icon:"",color:"error",size:"small",onClick:R=>S(e)},{default:s(()=>[o(V,{icon:"tabler-x"})]),_:2},1032,["onClick"])])]),"item.status":s(({item:e})=>[o(H,{color:_(w)(e.status),class:Y([`text-${_(w)(e.status)}`,"font-weight-medium"]),size:"small"},{default:s(()=>[A(p(_(z)(e.status)),1)]),_:2},1032,["color","class"])]),"item.university.name":s(({item:e})=>[c("div",W,[c("span",X,p(e.university.name),1),c("span",Z,p(e.course.name),1),c("span",ee,p(e.intake.name),1)])]),bottom:s(()=>[o(U,{page:l.value,"onUpdate:page":t[3]||(t[3]=e=>l.value=e),"items-per-page":r.value,"total-items":g.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length","loading"])]),_:1},8,["loading"])])}}};export{Ue as default};