import{_ as J}from"./AppCardActions-Cd2Q_BYq.js";import{_ as K}from"./TablePagination-lDQliyJ7.js";import{_ as W}from"./ShowMore-OeDyrhd9.js";import{_ as X}from"./AppSelect-DRLGZxiP.js";import{_ as Z}from"./AppTextField-hqVdejhN.js";import{a5 as ee,k as te,r as o,H as ae,w as oe,o as le,c as re,b as a,e as l,d as u,v as m,a6 as T,n as se,a7 as A,F as ie}from"./main-EEGZSpAz.js";import{_ as ne}from"./Filters-rWm9XoUe.js";import{c as ue}from"./commonFunction-e7j06GwD.js";import{u as me}from"./recordStore-BMkbTlwz.js";import{S as I}from"./sweetalert2-z6gKu1nJ.js";import{V as b}from"./VCardText-DcKVb-oC.js";import{V as $,a as de}from"./VRow-DIhs2Kd2.js";import{b as E,V as P,d as pe}from"./VCard-DjDgR-fo.js";import{V as ce}from"./VDataTableServer-DYrz1MXQ.js";import{V as ve}from"./VForm-CYIPsys4.js";import{V as q}from"./VTextField-BrOmDxVD.js";import{V as fe}from"./VSpacer-DMEhX3dY.js";import{V as ye}from"./VDialog-DnoWCHET.js";import"./index-PHfBVrL9.js";import"./VOverlay-CmE-WqWQ.js";import"./easing-CjukEv2V.js";import"./lazy-Di0BWC_0.js";import"./scopeId-gdKbSiHT.js";import"./index-DEpqG4PE.js";import"./VDivider-CrXn8ftj.js";import"./VPagination-CMiC2fRP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./form-DIjoop8b.js";import"./VSelect-BaPB8cSA.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-psZMOC0v.js";import"./ssrBoot-DCeQRs9P.js";import"./VAvatar-DBC8BHWd.js";import"./VImg-Df3r8EKV.js";import"./dialog-transition-CZkf91dj.js";import"./VMenu-DWECeUBH.js";import"./VCheckboxBtn-Bv_YfCMt.js";import"./VSelectionControl-BNatTHcN.js";import"./VChip-vNm_X31o.js";import"./VSlideGroup-BI3jjZOS.js";import"./AppDateTimePicker-CJqGEfrw.js";import"./VField-MP45udtL.js";import"./VInput-BqcJsfgj.js";import"./AppAutocomplete-dFVHU-fQ.js";import"./filter-CgZygQhQ.js";import"./api-BB8haixw.js";import"./index-Dz1rBMAR.js";import"./rolePermission-Yq0hcCjy.js";import"./helpers-NyGTX81Z.js";import"./user-CbAHfkn5.js";/* empty css              */import"./VDataTable-DWsajwNj.js";import"./VTable-ByAsw10o.js";/* empty css                   */import"./VCounter-SOzeLgJG.js";const Ve={class:"d-flex flex-column align-center"},ge={class:"text-center mt-2"},_e={class:"d-flex justify-space-between flex-wrap gap-6"},ke={class:"d-flex flex-row gap-4 align-center flex-wrap"},wt={__name:"index",setup(xe){const B=ee(()=>"calc(100vh - 200px)"),N=me();te();const r=ue(),d=o(""),p=o(!1),i=o(!1),g=o(""),_=o(""),k=o(""),F=o(!1),x=o(null),C=s=>!!s||"This field is required",c=o(null),v=o(null),f=o(null),y=o(""),D=o([]),M=o([]),z=o([]),S=o([]),w=o(0),n=o(10),V=o(1);ae(async()=>{await U(),await O()});const O=async()=>{r.countries.length===0&&await r.getCountries(),r.intakes.length===0&&await r.getIntakes(),r.universities.length===0&&await r.getUniversities(),D.value=r.countries,M.value=r.intakes,z.value=r.universities},U=async(s=1)=>{p.value=!0;const e=await N.fetchRecord(s,d.value,c.value,v.value,f.value,y.value);S.value=e.data,w.value=e.total,p.value=!1};oe([d,c,v,f,y],()=>{U()});const H=s=>{U(s.page)},h=async()=>{x.value.validate().then(async s=>{if(s.valid)try{await N.requestForm({universityName:g.value,courseName:_.value,intakeName:k.value}),I.fire("Success!","Your request has been successfully submitted. Our team will review it and get back to you shortly.","success"),i.value=!1,x.value.reset()}catch{I.fire("Error!","Failed to submit the request.","error")}})},j=[{title:"Country",key:"country.name"},{title:"Intake",key:"intake.name"},{title:"University",key:"university.name"},{title:"Course Type",key:"course.type"},{title:"Course Name",key:"course.name"},{title:"Tuition Fee",key:"tuition_fee"},{title:"Course Duration",key:"course_duration"},{title:"Academic Requirement",key:"academic_requirement"},{title:"English Requirement",key:"english_requirement"},{title:"Actions",key:"actions",sortable:!1}];return(s,e)=>{const L=Z,Q=X,R=W,Y=K,G=J;return le(),re(ie,null,[a(P,{class:"p-5"},{default:l(()=>[a(b,null,{default:l(()=>[a($,null,{default:l(()=>[a(ne,{"selected-country":c.value,onUpdateCountry:e[0]||(e[0]=t=>c.value=t),"selected-intake":v.value,onUpdateIntake:e[1]||(e[1]=t=>v.value=t),"selected-university2":f.value,onUpdateUniversity2:e[2]||(e[2]=t=>f.value=t),"selected-courseName":y.value,onUpdateCourseName:e[3]||(e[3]=t=>y.value=t)},null,8,["selected-country","selected-intake","selected-university2","selected-courseName"])]),_:1}),u("div",Ve,[a(E,{class:"text-center mt-5"},{default:l(()=>[m(" Search Course/University/Intake ")]),_:1}),a($,{class:"mt-2"},{default:l(()=>[a(de,{cols:"12",sm:"8",md:"6"},{default:l(()=>[a(L,{modelValue:d.value,"onUpdate:modelValue":e[4]||(e[4]=t=>d.value=t),placeholder:"Search Course/University/Intake",class:"mx-auto",style:{"max-inline-size":"30rem","min-inline-size":"30rem"}},null,8,["modelValue"])]),_:1})]),_:1}),u("div",ge,[m(" Don't find your desired record? "),u("a",{href:"#",onClick:e[5]||(e[5]=T(t=>i.value=!0,["prevent"]))},"Click here to request")])])]),_:1})]),_:1}),a(G,{class:"mt-2",loading:p.value,"no-actions":""},{default:l(()=>[a(b,null,{default:l(()=>[u("div",_e,[u("div",ke,[a(Q,{modelValue:n.value,"onUpdate:modelValue":e[6]||(e[6]=t=>n.value=t),items:[10,25,50,100],style:{"inline-size":"6.25rem"}},null,8,["modelValue"])])])]),_:1}),a(ce,{"items-per-page":n.value,"onUpdate:itemsPerPage":e[8]||(e[8]=t=>n.value=t),page:V.value,"onUpdate:page":e[9]||(e[9]=t=>V.value=t),loading:p.value,"items-length":w.value,headers:j,items:S.value,"item-value":"total",class:"text-no-wrap text-sm rounded-0",height:se(B),"onUpdate:options":H},{"item.academic_requirement":l(({item:t})=>[a(R,{text:t.academic_requirement,lines:3},null,8,["text"])]),"item.english_requirement":l(({item:t})=>[a(R,{text:t.english_requirement,lines:3},null,8,["text"])]),bottom:l(()=>[a(Y,{page:V.value,"onUpdate:page":e[7]||(e[7]=t=>V.value=t),"items-per-page":n.value,"total-items":w.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","loading","items-length","items","height"])]),_:1},8,["loading"]),a(ye,{modelValue:i.value,"onUpdate:modelValue":e[15]||(e[15]=t=>i.value=t),"max-width":"500px"},{default:l(()=>[a(P,null,{default:l(()=>[a(E,null,{default:l(()=>[m("Request Record")]),_:1}),a(b,null,{default:l(()=>[a(ve,{ref_key:"refForm",ref:x,modelValue:F.value,"onUpdate:modelValue":e[13]||(e[13]=t=>F.value=t),onSubmit:T(h,["prevent"])},{default:l(()=>[a(q,{modelValue:g.value,"onUpdate:modelValue":e[10]||(e[10]=t=>g.value=t),rules:[C],label:"University Name",placeholder:"Enter university name",class:"mt-2"},null,8,["modelValue","rules"]),a(q,{modelValue:_.value,"onUpdate:modelValue":e[11]||(e[11]=t=>_.value=t),rules:[C],label:"Course Name",placeholder:"Enter course name",class:"mt-2"},null,8,["modelValue","rules"]),a(q,{modelValue:k.value,"onUpdate:modelValue":e[12]||(e[12]=t=>k.value=t),rules:[C],label:"Intake",placeholder:"Enter intake",class:"mt-2"},null,8,["modelValue","rules"])]),_:1},8,["modelValue"])]),_:1}),a(pe,null,{default:l(()=>[a(fe),a(A,{color:"primary",onClick:h},{default:l(()=>[m("Submit")]),_:1}),a(A,{onClick:e[14]||(e[14]=t=>i.value=!1)},{default:l(()=>[m("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}};export{wt as default};
