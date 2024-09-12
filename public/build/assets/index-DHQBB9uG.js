import{_ as K}from"./AppCardActions-BMxK-1vQ.js";import{_ as W}from"./TablePagination-CWET7d-X.js";import{_ as X}from"./ShowMore-CzgKL58D.js";import{_ as Z}from"./AppSelect-X1MCRhil.js";import{_ as ee}from"./AppTextField-NIranakw.js";import{_ as te}from"./AppAutocomplete--FzmpvEa.js";import{k as le,r as o,H as ae,w as oe,o as ie,c as re,b as l,e as a,d as u,v as m,a6 as B,a7 as D,F as se}from"./main-BSpI_2CL.js";import{c as ne}from"./commonFunction-BF_FJ_wF.js";import{u as ue}from"./recordStore-nyZgrOHY.js";import{S as M}from"./sweetalert2-z6gKu1nJ.js";import{V as S}from"./VCardText-B0hdZjM1.js";import{V as z,a as d}from"./VRow-a18vhg8U.js";import{b as O,V as j,d as me}from"./VCard-CpeE6zKp.js";import{V as de}from"./VDataTableServer-a6MBuFi_.js";import{V as pe}from"./VForm-DAMOE1Td.js";import{V as q}from"./VTextField-CERBXMv-.js";import{V as ce}from"./VSpacer-sbsrg8y9.js";import{V as ve}from"./VDialog-DOgTljdy.js";import"./index-fUpBkQ-C.js";import"./VOverlay-B4MR1gw8.js";import"./easing-CjukEv2V.js";import"./lazy-iWUArzjE.js";import"./scopeId-CnwtrNNH.js";import"./index-Dd4E7JjT.js";import"./VDivider-Dgh3-wqM.js";import"./VPagination-CR59s4-D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./form-CMEPPpeo.js";import"./VSelect-CfFRikuZ.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-x2BFwD49.js";import"./ssrBoot-C7OFAziE.js";import"./VAvatar-BRryBAB-.js";import"./VImg-o7pbezjE.js";import"./dialog-transition-W38b6xcl.js";import"./VMenu-BX-gfm2E.js";import"./VCheckboxBtn-Zr57G0GN.js";import"./VSelectionControl-CGuQIYma.js";import"./VChip-zBwYxMgH.js";import"./VSlideGroup-DPanv1s6.js";import"./filter-BUZe0dSK.js";import"./api-BT0-XMST.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VDataTable-Lr4nR7x_.js";import"./VTable-8l_73vwd.js";/* empty css                   */import"./VCounter-Dl8l4qQU.js";import"./VField-BOwtP06I.js";import"./VInput-BL92zCDM.js";const fe={class:"d-flex flex-column align-center"},Ve={class:"text-center mt-2"},ye={class:"d-flex justify-space-between flex-wrap gap-6"},_e={class:"d-flex flex-row gap-4 align-center flex-wrap"},Vt={__name:"index",setup(ge){const N=ue();le();const i=ne(),p=o(""),c=o(!1),s=o(!1),g=o(""),k=o(""),b=o(""),R=o(!1),x=o(null),C=r=>!!r||"This field is required",v=o(null),f=o(null),V=o(null),y=o(""),h=o([]),T=o([]),A=o([]),I=o([]),w=o(0),n=o(10),_=o(1);ae(async()=>{await U(),await H()});const H=async()=>{i.countries.length===0&&await i.getCountries(),i.intakes.length===0&&await i.getIntakes(),i.universities.length===0&&await i.getUniversities(),h.value=i.countries,T.value=i.intakes,A.value=i.universities},U=async(r=1)=>{c.value=!0;const t=await N.fetchRecord(r,p.value,v.value,f.value,V.value,y.value);I.value=t.data,w.value=t.total,c.value=!1};oe([p,v,f,V,y],()=>{U()});const L=r=>{U(r.page)},E=async()=>{x.value.validate().then(async r=>{if(r.valid)try{await N.requestForm({universityName:g.value,courseName:k.value,intakeName:b.value}),M.fire("Success!","Your request has been successfully submitted. Our team will review it and get back to you shortly.","success"),s.value=!1,x.value.reset()}catch{M.fire("Error!","Failed to submit the request.","error")}})},Q=[{title:"Country",key:"country.name"},{title:"Intake",key:"intake.name"},{title:"University",key:"university.name"},{title:"Course Type",key:"course.type"},{title:"Course Name",key:"course.name"},{title:"Tuition Fee",key:"tuition_fee"},{title:"Course Duration",key:"course_duration"},{title:"Academic Requirement",key:"academic_requirement"},{title:"English Requirement",key:"english_requirement"},{title:"Actions",key:"actions",sortable:!1}];return(r,t)=>{const F=te,$=ee,Y=Z,P=X,G=W,J=K;return ie(),re(se,null,[l(j,{class:"p-5"},{default:a(()=>[l(S,null,{default:a(()=>[l(z,null,{default:a(()=>[l(d,{cols:"12",sm:"6",md:"3"},{default:a(()=>[l(F,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=e=>v.value=e),items:h.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Filter by Country",placeholder:"Select Country",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1}),l(d,{cols:"12",sm:"6",md:"3"},{default:a(()=>[l(F,{modelValue:f.value,"onUpdate:modelValue":t[1]||(t[1]=e=>f.value=e),items:T.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Filter by Intake",placeholder:"Select Intake",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1}),l(d,{cols:"12",sm:"6",md:"3"},{default:a(()=>[l(F,{modelValue:V.value,"onUpdate:modelValue":t[2]||(t[2]=e=>V.value=e),items:A.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Filter by University",placeholder:"Select University",clearable:""},null,8,["modelValue","items","item-title","item-value"])]),_:1}),l(d,{cols:"12",sm:"6",md:"3"},{default:a(()=>[l($,{modelValue:y.value,"onUpdate:modelValue":t[3]||(t[3]=e=>y.value=e),label:"Filter by Course Name",placeholder:"Enter Course Name",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),u("div",fe,[l(O,{class:"text-center mt-5"},{default:a(()=>[m(" Search Course/University/Intake ")]),_:1}),l(z,{class:"mt-2"},{default:a(()=>[l(d,{cols:"12",sm:"8",md:"6"},{default:a(()=>[l($,{modelValue:p.value,"onUpdate:modelValue":t[4]||(t[4]=e=>p.value=e),placeholder:"Search Course/University/Intake",class:"mx-auto",style:{"max-inline-size":"30rem","min-inline-size":"30rem"}},null,8,["modelValue"])]),_:1})]),_:1}),u("div",Ve,[m(" Don't find your desired record? "),u("a",{href:"#",onClick:t[5]||(t[5]=B(e=>s.value=!0,["prevent"]))},"Click here to request")])])]),_:1})]),_:1}),l(J,{class:"mt-2",loading:c.value,"no-actions":""},{default:a(()=>[l(S,null,{default:a(()=>[u("div",ye,[u("div",_e,[l(Y,{modelValue:n.value,"onUpdate:modelValue":t[6]||(t[6]=e=>n.value=e),items:[10,25,50,100],style:{"inline-size":"6.25rem"}},null,8,["modelValue"])])])]),_:1}),l(de,{"items-per-page":n.value,"onUpdate:itemsPerPage":t[8]||(t[8]=e=>n.value=e),page:_.value,"onUpdate:page":t[9]||(t[9]=e=>_.value=e),loading:c.value,"items-length":w.value,headers:Q,items:I.value,"item-value":"total",class:"text-no-wrap text-sm rounded-0","onUpdate:options":L},{"item.academic_requirement":a(({item:e})=>[l(P,{text:e.academic_requirement,lines:3},null,8,["text"])]),"item.english_requirement":a(({item:e})=>[l(P,{text:e.english_requirement,lines:3},null,8,["text"])]),bottom:a(()=>[l(G,{page:_.value,"onUpdate:page":t[7]||(t[7]=e=>_.value=e),"items-per-page":n.value,"total-items":w.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","loading","items-length","items"])]),_:1},8,["loading"]),l(ve,{modelValue:s.value,"onUpdate:modelValue":t[15]||(t[15]=e=>s.value=e),"max-width":"500px"},{default:a(()=>[l(j,null,{default:a(()=>[l(O,null,{default:a(()=>[m("Request Record")]),_:1}),l(S,null,{default:a(()=>[l(pe,{ref_key:"refForm",ref:x,modelValue:R.value,"onUpdate:modelValue":t[13]||(t[13]=e=>R.value=e),onSubmit:B(E,["prevent"])},{default:a(()=>[l(q,{modelValue:g.value,"onUpdate:modelValue":t[10]||(t[10]=e=>g.value=e),rules:[C],label:"University Name",placeholder:"Enter university name",class:"mt-2"},null,8,["modelValue","rules"]),l(q,{modelValue:k.value,"onUpdate:modelValue":t[11]||(t[11]=e=>k.value=e),rules:[C],label:"Course Name",placeholder:"Enter course name",class:"mt-2"},null,8,["modelValue","rules"]),l(q,{modelValue:b.value,"onUpdate:modelValue":t[12]||(t[12]=e=>b.value=e),rules:[C],label:"Intake",placeholder:"Enter intake",class:"mt-2"},null,8,["modelValue","rules"])]),_:1},8,["modelValue"])]),_:1}),l(me,null,{default:a(()=>[l(ce),l(D,{color:"primary",onClick:E},{default:a(()=>[m("Submit")]),_:1}),l(D,{onClick:t[14]||(t[14]=e=>s.value=!1)},{default:a(()=>[m("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}};export{Vt as default};