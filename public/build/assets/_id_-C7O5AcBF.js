import{_ as K}from"./TablePagination-D-RnZxf3.js";import{_ as O}from"./ShowMore-Al87HHnK.js";import{_ as Q}from"./AppSelect-DSbDPavk.js";import{_ as W}from"./AppTextField-CLgWHgmH.js";import{u as G}from"./applicationList-DAOzEZz7.js";import"./commonFunction-CfWLBR_O.js";import{u as J}from"./recordStore-CGzoG7UD.js";import{u as X}from"./user-CXJGpgTT.js";import{d as T}from"./helpers-BaUGL1hY.js";import Y from"./index-CLNGsy6X.js";import Z from"./UserBioPanel-D7V-zflL.js";import{j as ee,r,k as te,H as oe,o as n,c as v,b as e,e as o,n as i,F as V,i as D,f as _,v as h,x as b,d as m,a1 as z,a7 as ae,z as A,a3 as d}from"./main-DjWpx2ze.js";import{a as C,V as B}from"./VRow-DNnywQgk.js";import{V as g,a as re,b as P,c as ie}from"./VCard-Cp5iGZI_.js";import{V as y}from"./VCardText-B0WYepIT.js";import{V as le}from"./VDataTableServer-5TsumS6r.js";import"./VDivider-Dm7D_8A6.js";import"./VPagination-DtxG87a3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./form-zUEA6lsL.js";import"./VSelect-DHiheC3x.js";import"./VTextField-BFM5rNs2.js";/* empty css                   */import"./VCounter-DRZIDOhQ.js";import"./index-pUjQxbw2.js";import"./index-CgZqnrdE.js";import"./VField-BMlMOdmR.js";import"./easing-CjukEv2V.js";import"./VInput-CGhSRnpN.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-DycdrlzJ.js";import"./ssrBoot-B7T6W83-.js";import"./VAvatar-BlUcyXxk.js";import"./VImg-m6BvvCqu.js";import"./dialog-transition-Drf0NZS1.js";import"./VMenu-zsqUYU7f.js";import"./VOverlay-B_qhpHE6.js";import"./lazy-DHQGAxNM.js";import"./scopeId-vSiaYuqG.js";import"./VCheckboxBtn-wMSlI5er.js";import"./VSelectionControl-DbfkOdgy.js";import"./VChip-Ce4ujHTR.js";import"./VSlideGroup-DLVvD5o2.js";import"./api-DU6TaDBM.js";import"./index-B3bPRkoL.js";import"./AppCardActions-DTYtLpLj.js";import"./sweetalert2-z6gKu1nJ.js";import"./VSpacer-DF9Jqsq2.js";/* empty css              */import"./VDataTable-BtCNrqg6.js";import"./VTable-DGxYCX7k.js";import"./filter-Dnc7hSiC.js";import"./formatters-DnBCki1F.js";import"./UserUpgradePlanDialog-GwoTrWCw.js";import"./ConfirmDialog-BZE2JST_.js";import"./VDialog-BCb4Ae58.js";import"./DialogCloseBtn-CSZDSfUw.js";import"./UserInfoEditDialog-BVCunzPT.js";import"./VForm-BaNPawgy.js";import"./VSwitch-BH2kH2mh.js";const se={class:"d-flex align-center justify-space-between gap-x-2"},ne={class:"text-h4 text-center"},me=["href"],pe={class:"d-flex justify-space-between flex-wrap gap-6"},ue={class:"d-flex flex-row gap-4 align-center flex-wrap"},vt={__name:"[id]",setup(de){const k=ee();r(null),te();const F=J();r();const I=X();G();const p=r([]),c=r(""),L=r(!1);oe(async()=>{p.value=await I.fetchUser(k.params.id),S.value=p.value.documents||[],await w()});const N=l=>{const t=document.createElement("a");t.href=l,t.target="_blank",t.download="test",document.body.appendChild(t),t.click(),document.body.removeChild(t)},w=async(l=1)=>{const t=await F.fetchRecord(l,c.value,k.params.id);U.value=t.data,x.value=t.total},R=l=>l.replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase()),j=[{title:"Country",key:"country.name"},{title:"Intake",key:"intake.name"},{title:"University",key:"university.name"},{title:"Course Type",key:"course.type"},{title:"Course Name",key:"course.name"},{title:"Tution Fee",key:"tuition_fee"},{title:"Course Duration",key:"course_duration"},{title:"Academic Requirement",key:"academic_requirement"},{title:"English Requirement",key:"english_requirement"},{title:"Actions",key:"actions",sortable:!1}],S=r([]);r(""),r(""),r(""),r("");const U=r(),x=r(),s=r(10),u=r(1),$=l=>{w(l.page)};return r([]),r(0),r(),r(),(l,t)=>{const E=W,M=Q,q=O,H=K;return n(),v(V,null,[e(B,null,{default:o(()=>[e(C,{cols:"12",md:"5",lg:"4"},{default:o(()=>[e(Z,{"user-data":i(p)},null,8,["user-data"])]),_:1}),e(C,{cols:"12",md:"4",sm:"6",lg:"8"},{default:o(()=>[e(B,null,{default:o(()=>[(n(!0),v(V,null,D(i(p).dashboard,(a,f)=>(n(),_(C,{cols:"12",md:"5",lg:"4",key:f},{default:o(()=>[e(g,null,{default:o(()=>[e(re,{class:"pb-3"},{default:o(()=>[e(P,null,{default:o(()=>[h(b(R(f)),1)]),_:2},1024),e(ie,null,{default:o(()=>[h("Last Week")]),_:1})]),_:2},1024),e(y,null,{default:o(()=>[m("div",se,[m("h4",ne,b(a),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),i(T)(i(p).role,"channel partner")?(n(),_(g,{key:0,class:"mt-5"},{default:o(()=>[e(Y,{userId:i(k).params.id},null,8,["userId"]),e(P,null,{default:o(()=>[h("Documents")]),_:1}),e(y,null,{default:o(()=>[(n(!0),v(V,null,D(i(S),(a,f)=>(n(),_(g,{key:f,class:"mb-2"},{default:o(()=>[e(y,{class:"d-flex justify-space-between align-center"},{default:o(()=>[m("div",null,[e(z,{size:"26",color:"red",icon:"tabler-file-type-doc"}),m("a",{href:a.document_path,target:"_blank"},b(R(a.document_type)),9,me)]),e(ae,{icon:"",onClick:ce=>N(a.document_path)},{default:o(()=>[e(z,{size:"24",icon:"tabler-eye"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):A("",!0),i(T)(i(p).role,"editor")?(n(),_(g,{key:1,title:"Course Details",class:"mt-2"},{default:o(()=>[e(y,null,{default:o(()=>[m("div",pe,[m("div",null,[e(E,{modelValue:i(c),"onUpdate:modelValue":t[0]||(t[0]=a=>d(c)?c.value=a:null),style:{"max-inline-size":"200px","min-inline-size":"200px"},placeholder:"Search Review"},null,8,["modelValue"])]),m("div",ue,[e(M,{modelValue:i(s),"onUpdate:modelValue":t[1]||(t[1]=a=>d(s)?s.value=a:null),items:[10,25,50,100],style:{"inline-size":"6.25rem"}},null,8,["modelValue"])])])]),_:1}),e(le,{"items-per-page":i(s),"onUpdate:itemsPerPage":t[3]||(t[3]=a=>d(s)?s.value=a:null),page:i(u),"onUpdate:page":t[4]||(t[4]=a=>d(u)?u.value=a:null),loading:i(L),"items-length":i(x),headers:j,items:i(U),"item-value":"total",class:"text-no-wrap text-sm rounded-0","onUpdate:options":$},{"item.academic_requirement":o(({item:a})=>[e(q,{text:a.academic_requirement,lines:3},null,8,["text"])]),"item.english_requirement":o(({item:a})=>[e(q,{text:a.english_requirement,lines:3},null,8,["text"])]),bottom:o(()=>[e(H,{page:i(u),"onUpdate:page":t[2]||(t[2]=a=>d(u)?u.value=a:null),"items-per-page":i(s),"total-items":i(x)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","loading","items-length","items"])]),_:1})):A("",!0)],64)}}};export{vt as default};
