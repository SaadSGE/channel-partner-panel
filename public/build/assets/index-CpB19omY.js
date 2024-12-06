import{aK as m,aL as u,r as p,H as f,o as d,f as h,e as o,b as r,n as y,a9 as q,v as C}from"./main-Z3go8Xzc.js";import{S as _}from"./sweetalert2-z6gKu1nJ.js";import{V as R}from"./VDataTable-DjbBVbtI.js";import{V as k}from"./VCardText-Bjotn_eE.js";import{V as g}from"./VCard-B6jmDFyP.js";import"./VPagination-DvivjafL.js";import"./VSelect-DZ8I6LSD.js";import"./VTextField-B1_fIF9I.js";import"./VInput-KBboyctu.js";import"./index-BgvB69-2.js";import"./index-CJOm_KJi.js";import"./forwardRefs-D3j0TLhE.js";import"./VList-CuZQ3pYZ.js";import"./ssrBoot-CoAt9jNJ.js";import"./VAvatar-DFwpysqo.js";import"./VImg-DvovO2d-.js";import"./VDivider-SUUc1KGp.js";import"./dialog-transition-6CoWjX9C.js";import"./scopeId-Brt4yQ2W.js";import"./VMenu-CiscxyXl.js";import"./VCheckboxBtn-GLY3abaH.js";import"./VChip-CISZQW4c.js";import"./VTable-CvwxmxPq.js";import"./filter-CBgIupOh.js";const v=m({id:"course-request",state:()=>({courseRequests:[],isLoading:!1,error:null}),actions:{async fetchCourseRequests(){this.isLoading=!0;try{const e=await u("/course-requests",{method:"GET"});this.courseRequests=e.data}catch(e){console.error("Error fetching course requests:",e),this.error=e.message}finally{this.isLoading=!1}},async completeCourseRequest(e){try{await u(`/course-requests/${e}/complete`,{method:"POST"}),this.courseRequests=this.courseRequests.filter(t=>t.id!==e),this.notifyCompletion(e)}catch(t){throw console.error("Error completing course request:",t),t}},notifyCompletion(e){console.log(`Course request ${e} has been completed successfully.`)}}}),Q={__name:"index",setup(e){const t=v(),c=[{title:"University Name",key:"university_name"},{title:"Course Name",key:"course_name"},{title:"Intake Name",key:"intake"},{title:"Company Name",key:"user.company_name_with_email"},{title:"Actions",key:"actions",sortable:!1}],s=p(!1);f(async()=>{s.value=!0,await t.fetchCourseRequests(),s.value=!1});const l=async a=>{try{s.value=!0,await t.completeCourseRequest(a),await t.fetchCourseRequests(),s.value=!1,_.fire({icon:"success",title:"Course request completed successfully",showConfirmButton:!1,timer:1500})}catch(i){console.error("Failed to complete course request:",i)}};return(a,i)=>(d(),h(g,{title:"Course Request List"},{default:o(()=>[r(k,null,{default:o(()=>[r(R,{headers:c,items:y(t).courseRequests,loading:s.value,class:"elevation-1"},{"item.actions":o(({item:n})=>[r(q,{color:"primary",size:"small",onClick:w=>l(n.id)},{default:o(()=>[C(" Complete ")]),_:2},1032,["onClick"])]),_:1},8,["items","loading"])]),_:1})]),_:1}))}};export{Q as default};
