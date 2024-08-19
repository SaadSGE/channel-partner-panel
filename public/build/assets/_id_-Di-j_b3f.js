import{_ as j}from"./TablePagination-BodS4_-I.js";import{_ as $}from"./ShowMore-Ck3Zm6SY.js";import{_ as E}from"./AppSelect-CvfWUJmG.js";import{_ as M}from"./AppTextField-BQq4AeDT.js";import{u as H}from"./applicationList-C3A3Hj8n.js";import"./commonFunction-BMZ09Nnu.js";import{u as K}from"./recordStore-BMUidsmp.js";import{u as O}from"./user-BWCaKDsA.js";import{d as w}from"./helpers-CK0esMst.js";import Q from"./index-DoXVhxxF.js";import W from"./UserBioPanel-Wgp05KrS.js";import{j as G,r as t,k as J,H as X,o as p,c as C,b as e,e as r,n as o,F as b,i as Y,f as g,v as R,x as S,d as u,z as U,a3 as d}from"./main-NF9u_1yR.js";import{a as y,V as q}from"./VRow-pyayW9bC.js";import{V as x,a as Z,b as ee,c as te}from"./VCard-Cg3Tu40d.js";import{V as T}from"./VCardText-YnmWgeIC.js";import{V as oe}from"./VDataTableServer-DJvRD4Ca.js";import"./VDivider-DvXolMwv.js";import"./VPagination-DbBVMVAI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./form-C1-kTlqI.js";import"./VSelect-CIMZa409.js";import"./VTextField-0TceEGUb.js";/* empty css                   */import"./VCounter-CdyBEaSt.js";import"./index-DTzTflzC.js";import"./index-C2nxri_q.js";import"./VField-BptFft_w.js";import"./easing-CjukEv2V.js";import"./VInput-CrA5l34t.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-DoCM2_o_.js";import"./ssrBoot-CSkgXs53.js";import"./VAvatar-DSBVedtG.js";import"./VImg-DHhU3XG1.js";import"./dialog-transition-5ZjEfH5k.js";import"./VMenu-B-FadDfh.js";import"./VOverlay-B0ubJnkc.js";import"./lazy-DwBFzKYD.js";import"./scopeId-DSzGJmRL.js";import"./VCheckboxBtn-BDjbjxhx.js";import"./VSelectionControl-C5YFPu_w.js";import"./VChip-BSqJXu8c.js";import"./VSlideGroup-Ctde1b4_.js";import"./api-CA6tqyl9.js";import"./index-B3bPRkoL.js";import"./AppCardActions-Bun8bx88.js";import"./sweetalert2-z6gKu1nJ.js";import"./VSpacer-GmdRtiG5.js";/* empty css              */import"./VDataTable-BmQ2mQs7.js";import"./VTable-CvTbLH0W.js";import"./filter-DvO2xyBq.js";import"./formatters-Dsbysup8.js";import"./UserUpgradePlanDialog-C1N8W-wc.js";import"./ConfirmDialog-eCsXfb5o.js";import"./VDialog-D4_aj7Kf.js";import"./DialogCloseBtn-CoazqyIa.js";import"./UserInfoEditDialog-BhHRkHJn.js";import"./VForm-BjXde-Io.js";import"./VSwitch-7Q8f2W7s.js";const re={class:"d-flex align-center justify-space-between gap-x-2"},ae={class:"text-h4 text-center"},ie={class:"d-flex justify-space-between flex-wrap gap-6"},se={class:"d-flex flex-row gap-4 align-center flex-wrap"},ft={__name:"[id]",setup(le){const f=G();t(null),J();const A=K();t();const P=O();H();const m=t([]),c=t(""),B=t(!1);X(async()=>{m.value=await P.fetchUser(f.params.id),await V()});const V=async(n=1)=>{const a=await A.fetchRecord(n,c.value,f.params.id);k.value=a.data,_.value=a.total},D=n=>n.replace(/_/g," ").replace(/\b\w/g,a=>a.toUpperCase()),L=[{title:"Country",key:"country.name"},{title:"Intake",key:"intake.name"},{title:"University",key:"university.name"},{title:"Course Type",key:"course.type"},{title:"Course Name",key:"course.name"},{title:"Tution Fee",key:"tuition_fee"},{title:"Course Duration",key:"course_duration"},{title:"Academic Requirement",key:"academic_requirement"},{title:"English Requirement",key:"english_requirement"},{title:"Actions",key:"actions",sortable:!1}];t(""),t(""),t(""),t("");const k=t(),_=t(),s=t(10),l=t(1),N=n=>{V(n.page)};return t([]),t(0),t(),t(),(n,a)=>{const z=M,F=E,v=$,I=j;return p(),C(b,null,[e(q,null,{default:r(()=>[e(y,{cols:"12",md:"5",lg:"4"},{default:r(()=>[e(W,{"user-data":o(m)},null,8,["user-data"])]),_:1}),e(y,{cols:"12",md:"4",sm:"6",lg:"8"},{default:r(()=>[e(q,null,{default:r(()=>[(p(!0),C(b,null,Y(o(m).dashboard,(i,h)=>(p(),g(y,{cols:"12",md:"5",lg:"4",key:h},{default:r(()=>[e(x,null,{default:r(()=>[e(Z,{class:"pb-3"},{default:r(()=>[e(ee,null,{default:r(()=>[R(S(D(h)),1)]),_:2},1024),e(te,null,{default:r(()=>[R("Last Week")]),_:1})]),_:2},1024),e(T,null,{default:r(()=>[u("div",re,[u("h4",ae,S(i),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),o(w)(o(m).role,"channel partner")?(p(),g(x,{key:0,class:"mt-5"},{default:r(()=>[e(Q,{userId:o(f).params.id},null,8,["userId"])]),_:1})):U("",!0),o(w)(o(m).role,"editor")?(p(),g(x,{key:1,title:"Course Details",class:"mt-2"},{default:r(()=>[e(T,null,{default:r(()=>[u("div",ie,[u("div",null,[e(z,{modelValue:o(c),"onUpdate:modelValue":a[0]||(a[0]=i=>d(c)?c.value=i:null),style:{"max-inline-size":"200px","min-inline-size":"200px"},placeholder:"Search Review"},null,8,["modelValue"])]),u("div",se,[e(F,{modelValue:o(s),"onUpdate:modelValue":a[1]||(a[1]=i=>d(s)?s.value=i:null),items:[10,25,50,100],style:{"inline-size":"6.25rem"}},null,8,["modelValue"])])])]),_:1}),e(oe,{"items-per-page":o(s),"onUpdate:itemsPerPage":a[3]||(a[3]=i=>d(s)?s.value=i:null),page:o(l),"onUpdate:page":a[4]||(a[4]=i=>d(l)?l.value=i:null),loading:o(B),"items-length":o(_),headers:L,items:o(k),"item-value":"total",class:"text-no-wrap text-sm rounded-0","onUpdate:options":N},{"item.academic_requirement":r(({item:i})=>[e(v,{text:i.academic_requirement,lines:3},null,8,["text"])]),"item.english_requirement":r(({item:i})=>[e(v,{text:i.english_requirement,lines:3},null,8,["text"])]),bottom:r(()=>[e(I,{page:o(l),"onUpdate:page":a[2]||(a[2]=i=>d(l)?l.value=i:null),"items-per-page":o(s),"total-items":o(_)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","loading","items-length","items"])]),_:1})):U("",!0)],64)}}};export{ft as default};
