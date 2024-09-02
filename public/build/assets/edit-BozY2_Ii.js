import{_ as D}from"./AppTextField-BWfr7uEL.js";import{r as t,H as x,w as y,o as F,f as I,e as l,d as m,b as o,a1 as O,a7 as v,v as C,a6 as B}from"./main-DYSjY2V3.js";import{c as U}from"./commonFunction-DK9I7L6z.js";import{V as z}from"./VNavigationDrawer-Bl3RKCKN.js";import{V as j}from"./VDivider-CH8Yhyyw.js";import{V as q}from"./VForm-DEOEi-I4.js";import"./form-KXPpmlAe.js";import"./VTextField-BVjexeS2.js";/* empty css                   */import"./VCounter-j5sdlGNz.js";import"./index-BWzO9ddJ.js";import"./index-5A8LiR52.js";import"./VField-BAih5TUr.js";import"./easing-CjukEv2V.js";import"./VInput-B3yaOjYZ.js";import"./forwardRefs-C-GTDzx5.js";import"./api-Bx79Vctl.js";import"./index-B3bPRkoL.js";import"./scopeId-DW_WIG5W.js";import"./ssrBoot-BYPlKdcr.js";const M={class:"customizer-heading d-flex align-center justify-space-between"},S=m("div",null,[m("h6",{class:"text-h6"},"Update Intake")],-1),T={class:"d-flex align-center gap-1"},se={__name:"edit",props:{isNavDrawerOpen:Boolean,editedItem:Object},emits:["update:isNavDrawerOpen"],setup(g,{emit:k}){t([]);const e=U();t("");const s=t("");t(""),t(),t();const h=t([]),w=t([]),V=t([]),r=t(!1),d=g,u=t(null),c=t(null),p=k;x(async()=>{e.countries.length===0&&await e.getCountries(),e.courses.length===0&&await e.getCourses(),e.intakes.length===0&&await e.getIntakes(),e.universities.length===0&&await e.getUniversities(),e.courseDetails.length===0&&await e.getCourseDetails(),h.value=e.countries,w.value=e.intakes,V.value=e.universities}),y(()=>d.editedItem,async a=>{a&&(s.value=a.name,u.value=a.id)},{immediate:!0});const _=a=>!!a||"Required field",f=async()=>{c.value.validate().then(a=>{if(a.valid)b();else return})},b=async()=>{const a={name:s.value};try{r.value=!0,await e.updateIntake(u.value,a),r.value=!1,s.value="",p("update:isNavDrawerOpen",!1)}catch(i){console.error("Failed to add intake:",i)}};return(a,i)=>{const N=D;return F(),I(z,{modelValue:d.isNavDrawerOpen,"onUpdate:modelValue":i[2]||(i[2]=n=>d.isNavDrawerOpen=n),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:l(()=>[m("div",M,[S,m("div",T,[o(v,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:i[0]||(i[0]=n=>p("update:isNavDrawerOpen",!1))},{default:l(()=>[o(O,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),o(j),o(q,{ref_key:"refForm",ref:c,onSubmit:B(f,["prevent"]),class:"form-padding mt-4"},{default:l(()=>[o(N,{modelValue:s.value,"onUpdate:modelValue":i[1]||(i[1]=n=>s.value=n),label:"Intake Name",rules:[_],class:"mb-2"},null,8,["modelValue","rules"]),o(v,{loading:r.value,disabled:r.value,color:"primary",onClick:f,class:"mt-4",block:""},{default:l(()=>[C("Update")]),_:1},8,["loading","disabled"])]),_:1},512)]),_:1},8,["modelValue"])}}};export{se as default};
