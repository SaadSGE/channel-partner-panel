import{r as s}from"./validators-IgT9dpV5.js";import{k as Ve,r as i,a5 as ye,H as ge,a as X,o as E,c as qe,f as H,e as o,d as _,b as t,J as be,a1 as B,z as M,K as Ce,L as ke,n as u,v as U,a7 as Z,a6 as x}from"./main-C4H_aAPa.js";import{_ as we}from"./TablePagination-etk2f3CU.js";import{_ as Ue}from"./AppSelect-CZ0tB0M6.js";import{_ as _e}from"./AppCardActions-DHsqA5p7.js";import{_ as Fe}from"./AppTextField-DSMRVaEm.js";import{_ as Re}from"./AppAutocomplete-BtGVEtgy.js";import{_ as ee}from"./ShowMore-DwY0oKDd.js";import{c as Se}from"./commonFunction-C5lPhkSJ.js";import{u as he}from"./recordStore-C6bQPNKl.js";/* empty css                         */import{S as J}from"./sweetalert2-z6gKu1nJ.js";import{V as te,a as r}from"./VRow-Cp0Mf5wf.js";import{V as $}from"./form-DkfOYF43.js";import{V as le}from"./VForm-Dw2H7zhP.js";import{b as Te}from"./VCard-DoTFoNk5.js";import{V as Ae}from"./VCardText-Bhio1wW5.js";import{V as Ie}from"./VDataTableServer-DxdDPQlG.js";import"./helpers-CK0esMst.js";import"./VDivider-DOTucSXQ.js";import"./VPagination-Da4Argfd.js";import"./VSelect-Nbm5n_22.js";import"./VTextField-CeJKI7Tf.js";/* empty css                   */import"./VCounter-DpUHeUNo.js";import"./index-MnUENuId.js";import"./index-Datp2PP_.js";import"./VField-Bwr37GOJ.js";import"./easing-CjukEv2V.js";import"./VInput-BUsuNnQb.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-BdKxrQit.js";import"./ssrBoot-BimPHYgT.js";import"./VAvatar-BbTok92G.js";import"./VImg-BcZf5OIA.js";import"./dialog-transition-1gm64aQb.js";import"./VMenu-DQOlkt7C.js";import"./VOverlay-LfA_Sks2.js";import"./lazy-CHY0ltdR.js";import"./scopeId-Dd6QYKlO.js";import"./VCheckboxBtn-rXtjrvL0.js";import"./VSelectionControl-DLlK2Rd0.js";import"./VChip-CXJkOmnO.js";import"./VSlideGroup-Da_F3j7_.js";import"./filter-Fo3HCTsN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./api-CoQFY6CW.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VDataTable-MRMDFRes.js";import"./VTable-CcsT52BF.js";const De={key:0},Ee=_("span",null,"Edit Record",-1),Be={class:"d-flex justify-space-between flex-wrap gap-6"},Me={class:"d-flex flex-row gap-4 align-center flex-wrap"},$e={class:"d-flex gap-1"},Mt={__name:"index",setup(Ne){Ve();const n=Se(),C=he(),d=i("");i("");const m=i(""),V=i(""),p=i(""),v=i(""),y=i(""),g=i(""),K=i(null);i();const N=i(),z=i(),P=i(),ae=i(),q=i(""),b=i(""),O=i(),L=i(),F=i(10),T=i(1);i(),i();const A=i(!0),I=i(!1),R=i(!0),S=i(null),Y=i(null),oe=i(!0);i(!1);const W=["Graduate","Post Graduate"],ie=[{title:"Country",key:"country.name"},{title:"Intake",key:"intake.name"},{title:"University",key:"university.name"},{title:"Course Type",key:"course.type"},{title:"Course Name",key:"course.name"},{title:"Tution Fee",key:"tuition_fee"},{title:"Course Duration",key:"course_duration"},{title:"Academic Requirement",key:"academic_requirement"},{title:"English Requirement",key:"english_requirement"},{title:"Actions",key:"actions",sortable:!1}];ye(()=>n.getFilteredCourseDetails(d.value,v.value,m.value,p.value));const h=async(a=1)=>{const l=await C.fetchRecord(a,j.value);O.value=l.data,L.value=l.total},Q=async()=>{d.value="",m.value="",V.value="",p.value="",v.value="",y.value="",g.value="",q.value=`
`,b.value=`
`,await S.value.resetValidation()},re=async()=>{if(await S.value.validate()){try{const l={countryId:d.value,intakeId:m.value,courseType:V.value,universityId:p.value,course:v.value,tutionFee:y.value,courseDuration:g.value,academicRequirement:q.value,englishRequirement:b.value};await C.submitApplication(l)&&(console.log(C.successMessage),await Q(),h(),R.value=!0)}catch(l){console.error("Form submission error:",C.errors,l)}await S.value.resetValidation()}},ue=async()=>{if(await Y.value.validate()){try{const l={countryId:d.value,intakeId:m.value,courseType:V.value,universityId:p.value,course:v.value,tutionFee:y.value,courseDuration:g.value,academicRequirement:q.value,englishRequirement:b.value},c=await C.submitEditApplication(K.value,l);c&&(console.log(c),Q(),I.value=!1,A.value=!0,h())}catch(l){console.error("Form submission error:",C.errors,l)}await S.value.resetValidation()}},ne=a=>{A.value=!1,K.value=a.id,d.value=a.country_id,m.value=a.intake_id,V.value=a.course.type,p.value=a.university_id,v.value=a.course.name,y.value=a.tuition_fee,g.value=a.course_duration,q.value=a.academic_requirement,b.value=a.english_requirement,I.value=!0},se=()=>{I.value=!1,A.value=!0,Q()},de=()=>{R.value=!R.value},me=async a=>{const l={...a};if((await J.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await C.deleteRecord(l.id),h(),J.fire("Deleted!","The item has been deleted.","success")}catch{J.fire("Error!","There was an error deleting the item.","error")}},w=i(!1),j=i(""),pe=a=>{h(a.page)};return ge(async()=>{w.value=!0,n.countries.length===0&&await n.getCountries(),n.courses.length===0&&await n.getCourses(),n.intakes.length===0&&await n.getIntakes(),n.universities.length===0&&await n.getUniversities(),n.courseDetails.length===0&&await n.getCourseDetails(),N.value=n.countries,ae.value=n.courses,z.value=n.intakes,P.value=n.universities,await h(),w.value=!1}),(a,l)=>{const c=X("IconBtn"),f=Re,k=Fe,D=X("QuillEditor"),G=_e,ve=Ue,ce=we;return oe.value?(E(),qe("div",De,[A.value?(E(),H(G,{key:0,title:"Add Record",loading:w.value,"no-actions":""},{append:o(()=>[_("div",null,[(!(a.actionRemove||a.actionRefresh)||a.actionCollapsed)&&!a.noActions?(E(),H(c,{key:0,onClick:de},{default:o(()=>[t(B,{size:"20",icon:"tabler-chevron-up",style:be([{transform:R.value?"rotate(-180deg)":void 0},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):M("",!0)])]),default:o(()=>[Ce(t(u(le),{ref_key:"refForm",ref:S,onSubmit:x(()=>{},["prevent"]),class:"form-padding"},{default:o(()=>[t(te,null,{default:o(()=>[t(r,{cols:"12",md:"6"},{default:o(()=>[t(f,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value=e),items:N.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Country to Apply",placeholder:"Select Country",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:o(()=>[t(f,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=e=>m.value=e),items:z.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Intake",placeholder:"Select Intake",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:o(()=>[t(f,{modelValue:V.value,"onUpdate:modelValue":l[2]||(l[2]=e=>V.value=e),items:W,label:"Course Type",placeholder:"Select Course Type",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:o(()=>[t(f,{modelValue:p.value,"onUpdate:modelValue":l[3]||(l[3]=e=>p.value=e),items:P.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"University",placeholder:"Select University",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:o(()=>[t(k,{modelValue:v.value,"onUpdate:modelValue":l[4]||(l[4]=e=>v.value=e),label:"Course Name.",placeholder:"BSC in Machine Learning",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:o(()=>[t(k,{modelValue:y.value,"onUpdate:modelValue":l[5]||(l[5]=e=>y.value=e),label:"Tuttion Fee (Mention euro or dollar)",placeholder:"1000 euro",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:o(()=>[t(k,{modelValue:g.value,"onUpdate:modelValue":l[6]||(l[6]=e=>g.value=e),label:"Course Duration (Mention years)",placeholder:"2 years",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"12",md:"12",style:{margin:"auto"}},{default:o(()=>[t($,{class:"mb-2"},{default:o(()=>[U("Academic Requirement")]),_:1}),t(D,{theme:"snow",content:q.value,"onUpdate:content":l[7]||(l[7]=e=>q.value=e),"content-type":"html"},null,8,["content"])]),_:1}),t(r,{cols:"12",md:"12",style:{margin:"auto"}},{default:o(()=>[t($,{class:"mb-2"},{default:o(()=>[U("English Requirement")]),_:1}),t(D,{theme:"snow",content:b.value,"onUpdate:content":l[8]||(l[8]=e=>b.value=e),"content-type":"html"},null,8,["content"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(Z,{onClick:l[9]||(l[9]=e=>re()),type:"submit",color:"primary",block:""},{default:o(()=>[U(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512),[[ke,!R.value]])]),_:1},8,["loading"])):M("",!0),I.value?(E(),H(G,{key:1,class:"mt-2",loading:w.value,"no-actions":""},{default:o(()=>[t(Te,{class:"d-flex justify-space-between align-center mt-2 mb-2"},{default:o(()=>[Ee,t(c,{onClick:se},{default:o(()=>[t(B,{icon:"tabler-x"})]),_:1})]),_:1}),t(u(le),{ref_key:"refFormEdit",ref:Y,onSubmit:x(()=>{},["prevent"]),class:"form-padding"},{default:o(()=>[t(te,null,{default:o(()=>[t(r,{cols:"12",md:"6"},{default:o(()=>[t(f,{modelValue:d.value,"onUpdate:modelValue":l[10]||(l[10]=e=>d.value=e),items:N.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Country to Apply",placeholder:"Select Country",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:o(()=>[t(f,{modelValue:m.value,"onUpdate:modelValue":l[11]||(l[11]=e=>m.value=e),items:z.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"Intake",placeholder:"Select Intake",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:o(()=>[t(f,{modelValue:V.value,"onUpdate:modelValue":l[12]||(l[12]=e=>V.value=e),items:W,label:"Course Type",placeholder:"Select Course Type",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:o(()=>[t(f,{modelValue:p.value,"onUpdate:modelValue":l[13]||(l[13]=e=>p.value=e),items:P.value,"item-title":e=>e.name,"item-value":e=>e.id,label:"University",placeholder:"Select University",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","items","item-title","item-value","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:o(()=>[t(k,{modelValue:v.value,"onUpdate:modelValue":l[14]||(l[14]=e=>v.value=e),label:"Course Name.",placeholder:"BSC in Machine Learning",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:o(()=>[t(k,{modelValue:y.value,"onUpdate:modelValue":l[15]||(l[15]=e=>y.value=e),label:"Tuttion Fee (Mention euro or dollar)",placeholder:"1000 euro",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:o(()=>[t(k,{modelValue:g.value,"onUpdate:modelValue":l[16]||(l[16]=e=>g.value=e),label:"Course Duration (Mention years)",placeholder:"2 years",rules:["requiredValidator"in a?a.requiredValidator:u(s)]},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"12",md:"12",style:{margin:"auto"}},{default:o(()=>[t($,{class:"mb-2"},{default:o(()=>[U("Academic Requirement")]),_:1}),t(D,{theme:"snow",content:q.value,"onUpdate:content":l[17]||(l[17]=e=>q.value=e),"content-type":"html"},null,8,["content"])]),_:1}),t(r,{cols:"12",md:"12",style:{margin:"auto"}},{default:o(()=>[t($,{class:"mb-2"},{default:o(()=>[U("English Requirement")]),_:1}),t(D,{theme:"snow",content:b.value,"onUpdate:content":l[18]||(l[18]=e=>b.value=e),"content-type":"html"},null,8,["content"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(Z,{onClick:l[19]||(l[19]=e=>ue()),type:"submit",color:"primary",block:""},{default:o(()=>[U(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1},8,["loading"])):M("",!0),t(G,{title:"Course Details",class:"mt-2",loading:w.value,"no-actions":""},{default:o(()=>[t(Ae,null,{default:o(()=>[_("div",Be,[_("div",null,[t(k,{modelValue:j.value,"onUpdate:modelValue":l[20]||(l[20]=e=>j.value=e),style:{"max-inline-size":"200px","min-inline-size":"200px"},placeholder:"Search Review"},null,8,["modelValue"])]),_("div",Me,[t(ve,{modelValue:F.value,"onUpdate:modelValue":l[21]||(l[21]=e=>F.value=e),items:[10,25,50,100],style:{"inline-size":"6.25rem"}},null,8,["modelValue"])])])]),_:1}),t(Ie,{"items-per-page":F.value,"onUpdate:itemsPerPage":l[23]||(l[23]=e=>F.value=e),page:T.value,"onUpdate:page":l[24]||(l[24]=e=>T.value=e),loading:w.value,"items-length":L.value,headers:ie,items:O.value,"item-value":"total",class:"text-no-wrap text-sm rounded-0","onUpdate:options":pe},{"item.academic_requirement":o(({item:e})=>[t(ee,{text:e.academic_requirement,lines:3},null,8,["text"])]),"item.english_requirement":o(({item:e})=>[t(ee,{text:e.english_requirement,lines:3},null,8,["text"])]),bottom:o(()=>[t(ce,{page:T.value,"onUpdate:page":l[22]||(l[22]=e=>T.value=e),"items-per-page":F.value,"total-items":L.value},null,8,["page","items-per-page","total-items"])]),"item.actions":o(({item:e})=>[_("div",$e,[t(c,{onClick:fe=>ne(e)},{default:o(()=>[t(B,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),t(c,{onClick:fe=>me(e)},{default:o(()=>[t(B,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items-per-page","page","loading","items-length","items"])]),_:1},8,["loading"])])):M("",!0)}}};export{Mt as default};
