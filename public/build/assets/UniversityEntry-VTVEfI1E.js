import{_ as x}from"./AppTextField-DmYTd6Wj.js";import{u as J}from"./fileStore-CiLK-Mc5.js";import{i as F}from"./index-C7FPtGEp.js";import{r as q,H as K,w as Q,o as d,f as b,e as n,b as e,d as l,v as H,a9 as k,x as y,z as U,c as V,F as w,i as A,R,U as O,a6 as oe,n as D}from"./main-rAiiXsdI.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as L}from"./VCardText-B1XaOe8w.js";import{b as Y,V as j}from"./VCard-BnXNTOMD.js";import{V as G}from"./VTable-DGs3k_Vu.js";import{V as E,a as c}from"./VRow-CniF1p1V.js";import{r as W,e as ae}from"./validators-s9ExGhpn.js";import{_ as te}from"./AppAutocomplete-W-pUNgKs.js";import{_ as se}from"./AppSelect-CMySccpi.js";import{_ as ie}from"./AppDateTimePicker-CxNHMBCo.js";import{c as ne}from"./commonFunction-d2zCghtn.js";import{V as de,a as le}from"./VRadioGroup-BHGLwKFd.js";const re=m=>(R("data-v-fcd65c17"),m=m(),O(),m),ue={class:"d-flex justify-space-between align-center"},ce={key:0},me=re(()=>l("thead",null,[l("tr",null,[l("th",null,"Degree"),l("th",null,"Institution"),l("th",null,"Passing Year"),l("th",null,"Result")])],-1)),pe={__name:"EducationHistory",props:{isEdit:{type:Boolean,default:!1},educationalHistory:{type:Array,required:!0,default:()=>[{id:null,degree:"",institution:"",passing_year:"",result:""}]}},emits:["updateEducationalHistory"],setup(m,{emit:S}){const s=m,t=S,h=J(),g=q(!1);K(()=>{var i;s.educationalHistory.length===0&&s.educationalHistory.push({id:null,degree:"",institution:"",passing_year:"",result:""}),(i=h.studentInfo.educationalHistory)!=null&&i.length&&s.educationalHistory.splice(0,s.educationalHistory.length,...h.studentInfo.educationalHistory)}),Q(()=>s.educationalHistory.length,i=>{i===0&&s.educationalHistory.push({id:null,degree:"",institution:"",passing_year:"",result:""})});const $=()=>{const i=s.educationalHistory[s.educationalHistory.length-1];if(!i.degree||!i.institution){F("Please fill all required fields before adding a new entry",{type:"error",position:"top-right",theme:"colored"});return}s.educationalHistory.push({id:null,degree:"",institution:"",passing_year:"",result:""})},P=i=>{i!==0&&s.educationalHistory.splice(i,1)},T=()=>{g.value&&t("updateEducationalHistory",s.educationalHistory),g.value=!g.value};return(i,B)=>{const r=x;return d(),b(j,null,{default:n(()=>[e(L,null,{default:n(()=>[l("div",ue,[e(Y,{class:"padding-bottom"},{default:n(()=>[H("Educational History")]),_:1}),s.isEdit&&i.$can("edit","student")?(d(),b(k,{key:0,color:g.value?"success":"primary",onClick:T},{default:n(()=>[H(y(g.value?"Save Changes":"Edit"),1)]),_:1},8,["color"])):U("",!0)]),s.isEdit&&!g.value?(d(),V("div",ce,[e(G,{density:"compact",class:"info-table custom-table"},{default:n(()=>[me,l("tbody",null,[(d(!0),V(w,null,A(m.educationalHistory,(o,_)=>(d(),V("tr",{key:_},[l("td",null,y(o.degree||"-"),1),l("td",null,y(o.institution||"-"),1),l("td",null,y(o.passing_year||"-"),1),l("td",null,y(o.result||"-"),1)]))),128))])]),_:1})])):(d(!0),V(w,{key:1},A(m.educationalHistory,(o,_)=>(d(),b(E,{key:_},{default:n(()=>[e(c,{cols:"12",md:"3"},{default:n(()=>[e(r,{modelValue:o.degree,"onUpdate:modelValue":p=>o.degree=p,label:"Degree",placeholder:"Degree",density:"compact"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"3"},{default:n(()=>[e(r,{modelValue:o.institution,"onUpdate:modelValue":p=>o.institution=p,label:"Institution",placeholder:"Institution",density:"compact"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"2"},{default:n(()=>[e(r,{modelValue:o.passing_year,"onUpdate:modelValue":p=>o.passing_year=p,label:"Passing Year",placeholder:"Passing Year",density:"compact"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"2"},{default:n(()=>[e(r,{modelValue:o.result,"onUpdate:modelValue":p=>o.result=p,label:"Result",placeholder:"Result",density:"compact"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"2",class:"d-flex align-center mt-5"},{default:n(()=>[_!==0?(d(),b(k,{key:0,icon:"tabler-x",color:"error",onClick:p=>P(_),class:"me-2",size:"small"},null,8,["onClick"])):U("",!0),e(k,{icon:"tabler-plus",color:"primary",onClick:$,size:"small"})]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}}},ml=z(pe,[["__scopeId","data-v-fcd65c17"]]),ye=m=>(R("data-v-1c2c0464"),m=m(),O(),m),fe={class:"d-flex justify-space-between align-center"},_e={key:0},ge=ye(()=>l("thead",null,[l("tr",null,[l("th",null,"Company Name"),l("th",null,"Designation"),l("th",null,"Year")])],-1)),he={__name:"EmploymentHistory",props:{isEdit:{type:Boolean,default:!1},employmentHistory:{type:Array,required:!0,default:()=>[{company_name:"",designation:"",year:""}]}},emits:["updateEmploymentHistory"],setup(m,{emit:S}){const s=J(),t=m,h=S,g=q(!1);K(()=>{var i;(i=s.studentInfo.employmentHistory)!=null&&i.length&&t.employmentHistory.splice(0,t.employmentHistory.length,...s.studentInfo.employmentHistory),t.employmentHistory.length===0&&t.employmentHistory.push({company_name:"",designation:"",year:""})}),Q(()=>t.employmentHistory.length,i=>{i===0&&t.employmentHistory.push({company_name:"",designation:"",year:""}),g.value});const $=()=>{const i=t.employmentHistory[t.employmentHistory.length-1];if(!i.company_name||!i.designation){F("Please fill all required fields before adding a new entry",{type:"error",position:"top-right",theme:"colored"});return}t.employmentHistory.push({company_name:"",designation:"",year:""})},P=i=>{i!==0&&t.employmentHistory.splice(i,1)},T=()=>{g.value&&h("updateEmploymentHistory",t.employmentHistory),g.value=!g.value};return(i,B)=>{const r=x;return d(),b(j,null,{default:n(()=>[e(L,null,{default:n(()=>[l("div",fe,[e(Y,{class:"padding-bottom"},{default:n(()=>[H("Employment History")]),_:1}),t.isEdit&&i.$can("edit","student")?(d(),b(k,{key:0,color:g.value?"success":"primary",onClick:T},{default:n(()=>[H(y(g.value?"Save Changes":"Edit"),1)]),_:1},8,["color"])):U("",!0)]),t.isEdit&&!g.value?(d(),V("div",_e,[e(G,{density:"compact",class:"info-table custom-table"},{default:n(()=>[ge,l("tbody",null,[(d(!0),V(w,null,A(m.employmentHistory,(o,_)=>(d(),V("tr",{key:_},[l("td",null,y(o.company_name||"-"),1),l("td",null,y(o.designation||"-"),1),l("td",null,y(o.year||"-"),1)]))),128))])]),_:1})])):(d(!0),V(w,{key:1},A(m.employmentHistory,(o,_)=>(d(),b(E,{key:_},{default:n(()=>[e(c,{cols:"12",md:"3"},{default:n(()=>[e(r,{modelValue:o.company_name,"onUpdate:modelValue":p=>o.company_name=p,label:"Company Name",placeholder:"Company Name",density:"compact"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"3"},{default:n(()=>[e(r,{modelValue:o.designation,"onUpdate:modelValue":p=>o.designation=p,label:"Designation",placeholder:"Designation",density:"compact"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"4"},{default:n(()=>[e(r,{modelValue:o.year,"onUpdate:modelValue":p=>o.year=p,label:"Year",placeholder:"Year",density:"compact"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"2",class:"d-flex align-center mt-5"},{default:n(()=>[_!==0?(d(),b(k,{key:0,icon:"tabler-x",color:"error",onClick:p=>P(_),class:"me-2",size:"small"},null,8,["onClick"])):U("",!0),e(k,{icon:"tabler-plus",color:"primary",onClick:$,size:"small"})]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}}},pl=z(he,[["__scopeId","data-v-1c2c0464"]]),ee=m=>(R("data-v-d76892c4"),m=m(),O(),m),Ve={class:"d-flex justify-space-between align-center"},be={key:0},ve=ee(()=>l("thead",null,[l("tr",null,[l("th",null,"Proficiency Title"),l("th",null,"Overall Score"),l("th",null,"Listening"),l("th",null,"Speaking"),l("th",null,"Writing"),l("th",null,"Reading")])],-1)),Ie={key:0},ke=ee(()=>l("td",{colspan:"6",class:"text-center text-medium-emphasis"},"No English proficiency records found.",-1)),Ee=[ke],Ce=ee(()=>l("p",{class:"text-center"},"Add English Proficiency",-1)),Ue={__name:"EnglishProficiency",props:{englishProficiency:{type:Array,required:!0,default:()=>[{proficiencyTitle:"",overallScore:null,reading:null,writing:null,speaking:null,listening:null}]},isEdit:{type:Boolean,default:!1}},emits:["updateEnglishProficiency","saveChanges"],setup(m,{emit:S}){const s=m,t=S,h=J(),g=q(!1);K(()=>{var i;s.englishProficiency.length===0&&s.englishProficiency.push({proficiencyTitle:"",overallScore:null,reading:null,writing:null,speaking:null,listening:null}),(i=h.studentInfo.englishProficiency)!=null&&i.length&&s.englishProficiency.splice(0,s.englishProficiency.length,...h.studentInfo.englishProficiency)});const $=()=>{const i=s.englishProficiency[s.englishProficiency.length-1];if(!i.proficiencyTitle||!i.overallScore){F("Please fill all required fields before adding a new entry",{type:"error",position:"top-right",theme:"colored"});return}s.englishProficiency.push({proficiencyTitle:"",overallScore:null,reading:null,writing:null,speaking:null,listening:null})},P=i=>{i!==0&&s.englishProficiency.splice(i,1)},T=()=>{g.value&&t("updateEnglishProficiency",s.englishProficiency),g.value=!g.value};return Q(()=>s.englishProficiency,i=>{g.value},{deep:!0}),(i,B)=>{const r=x;return d(),b(j,null,{default:n(()=>[e(L,null,{default:n(()=>[l("div",Ve,[e(Y,{class:"padding-bottom"},{default:n(()=>[H("English Proficiency")]),_:1}),s.isEdit&&i.$can("edit","student")?(d(),b(k,{key:0,color:g.value?"success":"primary",onClick:T},{default:n(()=>[H(y(g.value?"Save Changes":"Edit"),1)]),_:1},8,["color"])):U("",!0)]),s.isEdit&&!g.value?(d(),V("div",be,[e(G,{density:"compact",class:"info-table custom-table"},{default:n(()=>{var o;return[ve,l("tbody",null,[(o=s.englishProficiency)!=null&&o.length?(d(!0),V(w,{key:1},A(m.englishProficiency,(_,p)=>(d(),V("tr",{key:p},[l("td",null,y(_.proficiencyTitle||"-"),1),l("td",null,y(_.overallScore||"-"),1),l("td",null,y(_.listening||"-"),1),l("td",null,y(_.speaking||"-"),1),l("td",null,y(_.writing||"-"),1),l("td",null,y(_.reading||"-"),1)]))),128)):(d(),V("tr",Ie,Ee))])]}),_:1})])):(d(),V(w,{key:1},[Ce,(d(!0),V(w,null,A(s.englishProficiency,(o,_)=>(d(),b(E,{key:_},{default:n(()=>[e(c,{cols:"12",md:"3"},{default:n(()=>[e(r,{modelValue:o.proficiencyTitle,"onUpdate:modelValue":p=>o.proficiencyTitle=p,label:"Proficiency Title",placeholder:"Proficiency Title",density:"compact",type:"text"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"3"},{default:n(()=>[e(r,{modelValue:o.overallScore,"onUpdate:modelValue":p=>o.overallScore=p,label:"Overall Score",placeholder:"Overall Score",density:"compact",type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"1"},{default:n(()=>[e(r,{modelValue:o.listening,"onUpdate:modelValue":p=>o.listening=p,label:"Listening",placeholder:"Listening",density:"compact",type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"1"},{default:n(()=>[e(r,{modelValue:o.speaking,"onUpdate:modelValue":p=>o.speaking=p,label:"Speaking",placeholder:"Speaking",density:"compact",type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"1"},{default:n(()=>[e(r,{modelValue:o.writing,"onUpdate:modelValue":p=>o.writing=p,label:"Writing",placeholder:"Writing",density:"compact",type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"1"},{default:n(()=>[e(r,{modelValue:o.reading,"onUpdate:modelValue":p=>o.reading=p,label:"Reading",placeholder:"Reading",density:"compact",type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{cols:"12",md:"2",class:"d-flex align-center mt-5"},{default:n(()=>[_!==0?(d(),b(k,{key:0,icon:"tabler-x",color:"error",onClick:p=>P(_),class:"me-2",size:"small"},null,8,["onClick"])):U("",!0),e(k,{icon:"tabler-plus",color:"primary",onClick:$,size:"small"})]),_:2},1024)]),_:2},1024))),128))],64))]),_:1})]),_:1})}}},yl=z(Ue,[["__scopeId","data-v-d76892c4"]]),C=m=>(R("data-v-d0b7565e"),m=m(),O(),m),we={class:"d-flex justify-space-between align-center"},He={key:0},Se=C(()=>l("td",{class:"font-weight-bold"},"First Name",-1)),$e=C(()=>l("td",{class:"font-weight-bold"},"Last Name",-1)),Pe=C(()=>l("td",{class:"font-weight-bold"},"Email",-1)),Te=C(()=>l("td",{class:"font-weight-bold"},"Mobile",-1)),Ne=C(()=>l("td",{class:"font-weight-bold"},"Date of Birth",-1)),Ae=C(()=>l("td",{class:"font-weight-bold"},"Gender",-1)),qe=C(()=>l("td",{class:"font-weight-bold"},"Passport No",-1)),Be=C(()=>l("td",{class:"font-weight-bold"},"Visa Refusal",-1)),De=C(()=>l("td",{class:"font-weight-bold"},"Address",-1)),Fe=C(()=>l("td",{class:"font-weight-bold"},"City",-1)),Ge=C(()=>l("td",{class:"font-weight-bold"},"Country",-1)),Re={key:1},Oe=C(()=>l("label",null,"Any Previous Visa Refusal",-1)),ze={__name:"GeneralInformation",props:{generalInfo:{type:Object,required:!0,default:()=>({first_name:"",last_name:"",email:"",mobile:"",date_of_birth:"",gender:"",passport_number:"",address:"",city:"",country:"",visa_refusal:""})},isEdit:{type:Boolean,default:!1}},emits:["updateGeneralInfo","saveChanges"],setup(m,{emit:S}){ne();const s=J(),t=m,h=q(!1),g=async()=>{if(h.value)try{JSON.stringify($.value)!==JSON.stringify(t.generalInfo)&&(await P("updateGeneralInfo",t.generalInfo),F("General information updated successfully",{type:"success",position:"top-right",theme:"colored"}))}catch(r){console.error("Error saving general information:",r),F("Error updating general information",{type:"error",position:"top-right",theme:"colored"});return}h.value=!h.value},$=q(t.generalInfo);t.generalInfo.first_name=s.studentInfo.generalInfo.first_name,t.generalInfo.last_name=s.studentInfo.generalInfo.last_name,t.generalInfo.email=s.studentInfo.generalInfo.email,t.generalInfo.mobile=s.studentInfo.generalInfo.mobile,t.generalInfo.date_of_birth=s.studentInfo.generalInfo.date_of_birth,t.generalInfo.gender=s.studentInfo.generalInfo.gender,t.generalInfo.passport_number=s.studentInfo.generalInfo.passport_number,t.generalInfo.address=s.studentInfo.generalInfo.address,t.generalInfo.city=s.studentInfo.generalInfo.city,t.generalInfo.country=s.studentInfo.generalInfo.country;const P=S,T=["Male","Female","Other"],i=oe({get:()=>{const r=t.generalInfo.date_of_birth;if(!r)return"";try{return new Date(r).toISOString().split("T")[0]}catch{return""}},set:r=>{t.generalInfo.date_of_birth=r}}),B=q(["Bangladesh","Nigeria","Sri Lanka","India","Bhutan","Ghana","Pakistan"]);return(r,o)=>{const _=x,p=ie,X=se,Z=te;return d(),b(j,null,{default:n(()=>[e(L,null,{default:n(()=>[l("div",we,[e(Y,{class:"padding-bottom"},{default:n(()=>[H("General Info")]),_:1}),t.isEdit&&r.$can("edit","student")?(d(),b(k,{key:0,color:h.value?"success":"primary",onClick:g},{default:n(()=>[H(y(h.value?"Save Changes":"Edit"),1)]),_:1},8,["color"])):U("",!0)]),t.isEdit&&!h.value?(d(),V("div",He,[e(E,null,{default:n(()=>[e(c,{cols:"12",md:"6"},{default:n(()=>[e(G,{density:"compact",class:"info-table custom-table"},{default:n(()=>[l("tbody",null,[l("tr",null,[Se,l("td",null,y(t.generalInfo.first_name||"-"),1)]),l("tr",null,[$e,l("td",null,y(t.generalInfo.last_name||"-"),1)]),l("tr",null,[Pe,l("td",null,y(t.generalInfo.email||"-"),1)]),l("tr",null,[Te,l("td",null,y(t.generalInfo.mobile||"-"),1)]),l("tr",null,[Ne,l("td",null,y(i.value||"-"),1)]),l("tr",null,[Ae,l("td",null,y(t.generalInfo.gender||"-"),1)])])]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:n(()=>[e(G,{density:"compact",class:"info-table custom-table"},{default:n(()=>[l("tbody",null,[l("tr",null,[qe,l("td",null,y(t.generalInfo.passport_number||"-"),1)]),l("tr",null,[Be,l("td",null,y(t.generalInfo.visa_refusal||"-"),1)]),l("tr",null,[De,l("td",null,y(t.generalInfo.address||"-"),1)]),l("tr",null,[Fe,l("td",null,y(t.generalInfo.city||"-"),1)]),l("tr",null,[Ge,l("td",null,y(t.generalInfo.country||"-"),1)])])]),_:1})]),_:1})]),_:1})])):(d(),V("div",Re,[e(E,null,{default:n(()=>[e(c,{cols:"12",md:"6"},{default:n(()=>[e(_,{modelValue:t.generalInfo.first_name,"onUpdate:modelValue":o[0]||(o[0]=a=>t.generalInfo.first_name=a),label:"First Name(*)",placeholder:"First Name",rules:["requiredValidator"in r?r.requiredValidator:D(W)],density:"compact"},null,8,["modelValue","rules"])]),_:1}),e(c,{cols:"12",md:"6"},{default:n(()=>[e(_,{modelValue:t.generalInfo.last_name,"onUpdate:modelValue":o[1]||(o[1]=a=>t.generalInfo.last_name=a),label:"Last Name(*)",placeholder:"Last Name",rules:["requiredValidator"in r?r.requiredValidator:D(W)],density:"compact"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(E,null,{default:n(()=>[e(c,{cols:"12",md:"6"},{default:n(()=>[e(_,{modelValue:t.generalInfo.email,"onUpdate:modelValue":o[2]||(o[2]=a=>t.generalInfo.email=a),label:"Email(*)",placeholder:"Email",rules:["requiredValidator"in r?r.requiredValidator:D(W),"emailValidator"in r?r.emailValidator:D(ae)],density:"compact"},null,8,["modelValue","rules"])]),_:1}),e(c,{cols:"12",md:"6"},{default:n(()=>[e(_,{modelValue:t.generalInfo.mobile,"onUpdate:modelValue":o[3]||(o[3]=a=>t.generalInfo.mobile=a),label:"Mobile No(*)",placeholder:"Mobile No",rules:["requiredValidator"in r?r.requiredValidator:D(W)],density:"compact"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(E,null,{default:n(()=>[e(c,{cols:"12",md:"6"},{default:n(()=>[e(p,{modelValue:i.value,"onUpdate:modelValue":o[4]||(o[4]=a=>i.value=a),label:"Date of birth",placeholder:"Select date"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"6"},{default:n(()=>[e(X,{modelValue:t.generalInfo.gender,"onUpdate:modelValue":o[5]||(o[5]=a=>t.generalInfo.gender=a),items:T,label:"Gender",placeholder:"Select Gender",density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(E,null,{default:n(()=>[e(c,{cols:"12",md:"6"},{default:n(()=>[e(_,{modelValue:t.generalInfo.passport_number,"onUpdate:modelValue":o[6]||(o[6]=a=>t.generalInfo.passport_number=a),label:"Passport No",placeholder:"Passport No",density:"compact"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"6"},{default:n(()=>[Oe,e(de,{modelValue:t.generalInfo.visa_refusal,"onUpdate:modelValue":o[7]||(o[7]=a=>t.generalInfo.visa_refusal=a),row:""},{default:n(()=>[e(le,{label:"Yes",value:"yes"}),e(le,{label:"No",value:"no"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(E,null,{default:n(()=>[e(c,{cols:"12",md:"12"},{default:n(()=>[e(_,{modelValue:t.generalInfo.address,"onUpdate:modelValue":o[8]||(o[8]=a=>t.generalInfo.address=a),label:"Address",placeholder:"Address",density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(E,null,{default:n(()=>[e(c,{cols:"12",md:"6"},{default:n(()=>[e(_,{modelValue:t.generalInfo.city,"onUpdate:modelValue":o[9]||(o[9]=a=>t.generalInfo.city=a),label:"City",placeholder:"City",density:"compact"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"6"},{default:n(()=>[e(Z,{modelValue:t.generalInfo.country,"onUpdate:modelValue":o[10]||(o[10]=a=>t.generalInfo.country=a),items:B.value,label:"Country",placeholder:"Select Country",density:"compact",class:"small-dropdown"},null,8,["modelValue","items"])]),_:1})]),_:1})]))]),_:1})]),_:1})}}},fl=z(ze,[["__scopeId","data-v-d0b7565e"]]),M=m=>(R("data-v-3079eb39"),m=m(),O(),m),Le={class:"d-flex justify-space-between align-center"},Ye={key:0},je=M(()=>l("td",{class:"font-weight-bold"},"Country",-1)),Me=M(()=>l("td",{class:"font-weight-bold"},"Intake",-1)),We=M(()=>l("td",{class:"font-weight-bold"},"Course Type",-1)),xe=M(()=>l("td",{class:"font-weight-bold"},"University",-1)),Je=M(()=>l("td",{class:"font-weight-bold"},"Course",-1)),Ke={__name:"UniversityEntry",props:{universityEntry:{type:Array,required:!0,default:()=>[{country_id:"",intake_id:"",course_type:"",university_id:"",course_id:"",intakes:[],courseTypes:[],universities:[],courses:[]}]},isEdit:{type:Boolean,default:!1}},emits:["updateUniversityEntry","saveChanges"],setup(m,{emit:S}){const s=ne(),t=m,h=q(!1),g=()=>{h.value&&$("updateUniversityEntry",t.universityEntry),h.value=!h.value},$=S;K(async()=>{s.getUniqueCountries()}),Q(()=>t.universityEntry,a=>{(!a||a.length===0)&&t.universityEntry.push({country_id:"",intake_id:null,course_type:null,university_id:null,course_id:null,intakes:[],courseTypes:[],universities:[],courses:[]})},{deep:!0,immediate:!0});const P=async a=>{const u=t.universityEntry[a];u.intake_id=null,u.course_type=null,u.university_id=null,u.course_id=null,u.intakes=await s.getIntakesByCountry(u.country_id)},T=async a=>{const u=t.universityEntry[a];u.course_type=null,u.university_id=null,u.course_id=null,u.courseTypes=await s.getCourseTypesByCountryIntake(u.country_id,u.intake_id)},i=async a=>{const u=t.universityEntry[a];u.university_id=null,u.course_id=null,u.universities=await s.getUniversitiesByCountryIntakeCourseType(u.country_id,u.intake_id,u.course_type)},B=async a=>{const u=t.universityEntry[a];u.course_id=null,u.courses=await s.getCourseDetails(u.intake_id,u.university_id,u.course_type)},r=()=>{const a=t.universityEntry[t.universityEntry.length-1];if(!a.country_id||!a.intake_id||!a.course_type||!a.university_id||!a.course_id){F("Please fill all fields before adding a new entry",{type:"error",position:"top-right",theme:"colored"});return}t.universityEntry.push({country_id:"",intake_id:null,course_type:null,university_id:null,course_id:null,intakes:[],courseTypes:[],universities:[],courses:[]})},o=a=>{a!==0&&t.universityEntry.splice(a,1)},_=a=>{const u=s.countries.find(v=>v.id===a);return u?u.name:null},p=(a,u)=>{const v=u.find(f=>f.intake_id===a);return v?v.intake_name:null},X=(a,u)=>{const v=u.find(f=>f.university_id===a);return v?v.university_name:null},Z=(a,u)=>{const v=u.find(f=>f.course_id===a);return v?v.course_name:null};return(a,u)=>{const v=te;return d(),b(j,null,{default:n(()=>[e(L,null,{default:n(()=>[l("div",Le,[e(Y,{class:"text-left padding-bottom"},{default:n(()=>[H("Interested University")]),_:1}),t.isEdit&&a.$can("edit","student")?(d(),b(k,{key:0,color:h.value?"success":"primary",onClick:g},{default:n(()=>[H(y(h.value?"Save Changes":"Edit"),1)]),_:1},8,["color"])):U("",!0)]),t.isEdit&&!h.value?(d(),V("div",Ye,[e(E,null,{default:n(()=>[(d(!0),V(w,null,A(t.universityEntry,(f,N)=>(d(),b(c,{cols:"12",md:"6",key:N},{default:n(()=>[e(G,{density:"compact",class:"info-table custom-table"},{default:n(()=>[l("tbody",null,[l("tr",null,[je,l("td",null,y(_(f.country_id)||"-"),1)]),l("tr",null,[Me,l("td",null,y(p(f.intake_id,f.intakes)||"-"),1)]),l("tr",null,[We,l("td",null,y(f.course_type||"-"),1)]),l("tr",null,[xe,l("td",null,y(X(f.university_id,f.universities)||"-"),1)]),l("tr",null,[Je,l("td",null,y(Z(f.course_id,f.courses)||"-"),1)])])]),_:2},1024)]),_:2},1024))),128))]),_:1})])):(d(!0),V(w,{key:1},A(t.universityEntry,(f,N)=>(d(),b(E,{key:N},{default:n(()=>[e(c,{cols:"12",md:"2"},{default:n(()=>[e(v,{modelValue:f.country_id,"onUpdate:modelValue":[I=>f.country_id=I,I=>P(N)],items:D(s).countries,"item-title":"name","item-value":"id",label:"Country to Apply",placeholder:"Select Country",density:"compact",class:"small-dropdown"},null,8,["modelValue","onUpdate:modelValue","items"])]),_:2},1024),e(c,{cols:"12",md:"2"},{default:n(()=>[e(v,{modelValue:f.intake_id,"onUpdate:modelValue":[I=>f.intake_id=I,I=>T(N)],items:f.intakes,"item-title":"intake_name","item-value":"intake_id",label:"Intake",placeholder:"Select Intake",disabled:!f.country_id,density:"compact",class:"small-dropdown"},null,8,["modelValue","onUpdate:modelValue","items","disabled"])]),_:2},1024),e(c,{cols:"12",md:"2"},{default:n(()=>[e(v,{modelValue:f.course_type,"onUpdate:modelValue":[I=>f.course_type=I,I=>i(N)],items:f.courseTypes,"item-title":"name","item-value":"id",label:"Course Type",placeholder:"Select Course Type",disabled:!f.intake_id,density:"compact",class:"small-dropdown"},null,8,["modelValue","onUpdate:modelValue","items","disabled"])]),_:2},1024),e(c,{cols:"12",md:"2"},{default:n(()=>[e(v,{modelValue:f.university_id,"onUpdate:modelValue":[I=>f.university_id=I,I=>B(N)],items:f.universities,"item-title":"university_name","item-value":"university_id",label:"University",placeholder:"Select University",disabled:!f.course_type,density:"compact",class:"small-dropdown"},null,8,["modelValue","onUpdate:modelValue","items","disabled"])]),_:2},1024),e(c,{cols:"12",md:"3"},{default:n(()=>[e(v,{modelValue:f.course_id,"onUpdate:modelValue":I=>f.course_id=I,items:f.courses,"item-title":"course_name","item-value":"course_id",label:"Course",placeholder:"Select Course",disabled:!f.university_id,density:"compact",class:"small-dropdown"},null,8,["modelValue","onUpdate:modelValue","items","disabled"])]),_:2},1024),e(c,{cols:"12",md:"1",class:"d-flex align-center mt-6"},{default:n(()=>[!t.isEdit||h.value?(d(),V(w,{key:0},[N!==0?(d(),b(k,{key:0,icon:"tabler-x",color:"error",onClick:I=>o(N),class:"me-2",size:"small"},null,8,["onClick"])):U("",!0),e(k,{icon:"tabler-plus",color:"primary",onClick:r,size:"small"})],64)):U("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}}},_l=z(Ke,[["__scopeId","data-v-3079eb39"]]);export{ml as E,fl as G,_l as U,yl as a,pl as b};
