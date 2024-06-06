import{_ as C}from"./AppTextField-B6qaM17A.js";import{u as y}from"./applicationList-BPVZd-W2.js";import{r as d,k as g,H as A,a as b,o as w,c as I,b as o,e as i,n,a3 as S,d as a,x as s,y as D,v as N,a1 as u}from"./main-1mV8A3Ok.js";import{V as B}from"./VCardText-DBYlaQFO.js";import{V as T,a as L}from"./VRow-DPIoBZFC.js";import{V as R}from"./VDataTable-CWF9oBIS.js";import{V as $}from"./VChip-BGAzZtGp.js";import{V as P}from"./VCard-Quhh9XGX.js";import"./form-DD45LEPy.js";import"./VTextField-DZMrnS7D.js";/* empty css                   */import"./VCounter-BqhfE6c3.js";import"./index-Dr4Jpfvu.js";import"./index-D5HNSvtj.js";import"./VField-DrOa7Jrs.js";import"./easing-CjukEv2V.js";import"./VInput-Cc3qPpf8.js";import"./forwardRefs-C-GTDzx5.js";import"./api-BuB0jJ0_.js";import"./index-B3bPRkoL.js";import"./VAvatar-CS2PSZbd.js";import"./VImg-B0OvyP-a.js";/* empty css              */import"./VPagination-Du7AMigc.js";import"./VSelect-CTcRpsXh.js";import"./VList-4bYWa8Xg.js";import"./ssrBoot-BSr0_Qc6.js";import"./VDivider-BynfZOFp.js";import"./dialog-transition-C3AmnP1-.js";import"./VMenu-C6RKladz.js";import"./VOverlay-Dw-bxEan.js";import"./lazy-B94C784v.js";import"./scopeId-B6VPZtEP.js";import"./VCheckboxBtn-BuqUvF2m.js";import"./VSelectionControl-gOd1ayQx.js";import"./VTable-CyIy3e88.js";import"./filter-CA-4VRNq.js";import"./VSlideGroup-D7xdXnSf.js";const z={class:"d-flex flex-column ms-3"},U={class:"d-block font-weight-medium text-truncate text-high-emphasis"},E={class:"text-md"},F={class:"text-md"},H={class:"d-flex flex-column ms-3"},It={__name:"index",setup(M){const f=y(),l=d(),_=g();A(async()=>{l.value=await f.getApplicationList()});const r=d(""),h=[{title:"APPLICATION ID",key:"application_id"},{title:"Student Name",key:"student.name"},{title:"University/Course Details",key:"university.name"},{title:"Status",key:"status"},{title:"Date Added",key:"created_at"},{title:"Action",key:"action",sortable:!1}],m=e=>{if(e===0)return"primary";if(e===1)return"success";if(e===2)return"warning";if(e===3)return"info"},V=e=>{if(e===0)return"Pending";if(e===1)return"Application Received";if(e===2)return"Application ok for processing";if(e===3)return"Case Closed"},k=e=>{_.push({name:"application-details",params:{id:e}})};return(e,p)=>{const v=C,c=b("IconBtn");return w(),I("div",null,[o(P,null,{default:i(()=>[o(B,null,{default:i(()=>[o(T,null,{default:i(()=>[o(L,{cols:"12","offset-md":"8",md:"4"},{default:i(()=>[o(v,{modelValue:n(r),"onUpdate:modelValue":p[0]||(p[0]=t=>S(r)?r.value=t:null),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(R,{headers:h,items:n(l)||[],search:n(r),"items-per-page":5,class:"text-no-wrap color-black"},{"item.student.name":i(({item:t})=>[a("p",null,s(t.student.first_name)+" "+s(t.student.last_name),1)]),"item.university.name":i(({item:t})=>[a("div",z,[a("span",U,s(t.university.name),1),a("span",E,s(t.course.name),1),a("span",F,s(t.intake.name),1)])]),"item.status":i(({item:t})=>[o($,{color:m(t.status),class:D([`text-${m(t.status)}`,"font-weight-medium"]),size:"small"},{default:i(()=>[N(s(V(t.status)),1)]),_:2},1032,["color","class"])]),"item.action":i(({item:t})=>[a("div",H,[o(c,{onClick:x=>k(t.id)},{default:i(()=>[o(u,{icon:"tabler-eye"})]),_:2},1032,["onClick"]),o(c,{onClick:x=>e.deleteItem(t.product.id)},{default:i(()=>[o(u,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items","search"])]),_:1})])}}};export{It as default};